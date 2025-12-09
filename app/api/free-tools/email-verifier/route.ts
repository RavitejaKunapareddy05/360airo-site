import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns';
import { promisify } from 'util';
import net from 'net';

const resolveMx = promisify(dns.resolveMx);

interface VerificationResult {
  email: string;
  status: 'valid' | 'invalid' | 'unknown';
  reason: string;
  verificationTime: number;
}

const BLACKLIST_MX = ['127.0.0.1', 'localhost'];

function isBlacklistedMx(mxHost: string): boolean {
  return BLACKLIST_MX.includes(mxHost.toLowerCase());
}

function smtpExchange(host: string, email: string, timeout = 5000): Promise<{status: string; reason: string; verificationTime: number}> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let dataBuffer = '';
    let stage = 0;
    let finished = false;
    const start = Date.now();

    function done(statusObj: {status: string; reason: string}) {
      if (finished) return;
      finished = true;
      try { socket.destroy(); } catch (e) {}
      resolve({
        ...statusObj,
        verificationTime: Date.now() - start
      });
    }

    const cleanupAndUnknown = (reason: string) => done({ status: 'unknown', reason });

    socket.setTimeout(timeout, () => {
      cleanupAndUnknown('SMTP connection timed out');
    });

    socket.on('error', (err) => {
      cleanupAndUnknown(`SMTP connection error: ${err.message}`);
    });

    socket.connect(25, host, () => {
      // connected, wait for greeting
    });

    socket.on('data', (chunk) => {
      dataBuffer += chunk.toString();
      const lines = dataBuffer.split(/\r\n/).filter(Boolean);
      const lastLine = lines[lines.length - 1];
      if (!lastLine) return;

      const code = parseInt(lastLine.slice(0, 3), 10);
      if (isNaN(code)) return;

      if (stage === 0) {
        if (code >= 200 && code < 400) {
          socket.write(`HELO example.com\r\n`);
          stage = 1;
          dataBuffer = '';
          return;
        } else {
          return cleanupAndUnknown(`Unexpected greeting code ${code}`);
        }
      }

      if (stage === 1) {
        if (code >= 200 && code < 400) {
          socket.write(`MAIL FROM:<no-reply@example.com>\r\n`);
          stage = 2;
          dataBuffer = '';
          return;
        } else {
          return cleanupAndUnknown(`HELO rejected with ${code}`);
        }
      }

      if (stage === 2) {
        if (code >= 200 && code < 400) {
          socket.write(`RCPT TO:<${email}>\r\n`);
          stage = 3;
          dataBuffer = '';
          return;
        } else {
          return done({ status: 'unknown', reason: `MAIL FROM rejected ${code}` });
        }
      }

      if (stage === 3) {
        if (code >= 200 && code < 300) {
          socket.write(`QUIT\r\n`);
          return done({ status: 'valid', reason: `SMTP RCPT accepted (${code})` });
        } else if (code >= 400 && code < 500) {
          socket.write(`QUIT\r\n`);
          return done({ status: 'unknown', reason: `Temporary SMTP failure: ${code}` });
        } else if (code >= 500) {
          socket.write(`QUIT\r\n`);
          return done({ status: 'invalid', reason: `SMTP rejected RCPT: ${code}` });
        } else {
          socket.write(`QUIT\r\n`);
          return done({ status: 'unknown', reason: `Unexpected RCPT response: ${code}` });
        }
      }
    });

    setTimeout(() => {
      if (!finished) cleanupAndUnknown('No SMTP response within allowed time');
    }, timeout + 200);
  });
}

/**
 * Fallback verification using external API for production
 */
async function verifyEmailViaAPI(email: string): Promise<VerificationResult | null> {
  const startTime = Date.now();

  try {
    // Using a free email verification API as fallback
    const domain = email.split('@')[1];
    const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&domain=${encodeURIComponent(domain)}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      const data = await response.json();
      const result = data.result || 'unknown';
      
      return {
        email,
        status: result === 'deliverable' ? 'valid' : result === 'undeliverable' ? 'invalid' : 'unknown',
        reason: `Verified via API: ${result}`,
        verificationTime: Date.now() - startTime
      };
    }
  } catch (err) {
    // Fall back gracefully
  }
  
  return null;
}

async function verifyEmail(email: string): Promise<VerificationResult> {
  const startTime = Date.now();

  const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!simpleEmailRegex.test(email)) {
    return {
      email,
      status: 'invalid',
      reason: 'Invalid email format',
      verificationTime: Date.now() - startTime
    };
  }

  const domain = email.split('@')[1].toLowerCase();

  let mxRecords;
  try {
    mxRecords = await resolveMx(domain);
  } catch (err: any) {
    // If DNS fails on production, try external API
    if (process.env.NODE_ENV === 'production') {
      const apiResult = await verifyEmailViaAPI(email);
      if (apiResult) return apiResult;
    }
    
    return {
      email,
      status: 'unknown',
      reason: `DNS MX lookup failed: ${err.code || err.message}`,
      verificationTime: Date.now() - startTime
    };
  }

  if (!mxRecords || mxRecords.length === 0) {
    return {
      email,
      status: 'invalid',
      reason: 'No MX records found - domain cannot receive emails',
      verificationTime: Date.now() - startTime
    };
  }

  mxRecords.sort((a: any, b: any) => a.priority - b.priority);

  // On production: DNS verification is sufficient
  if (process.env.NODE_ENV === 'production') {
    return {
      email,
      status: 'valid',
      reason: 'Valid - MX records found (DNS verified)',
      verificationTime: Date.now() - startTime
    };
  }

  // On local/dev: Try SMTP for detailed verification
  for (const mx of mxRecords) {
    const host = mx.exchange.toLowerCase();

    if (isBlacklistedMx(host)) {
      continue;
    }

    try {
      const res = await smtpExchange(host, email, 3000);
      if (res && (res.status === 'valid' || res.status === 'invalid')) {
        return {
          email,
          status: res.status as 'valid' | 'invalid',
          reason: res.reason,
          verificationTime: res.verificationTime
        };
      }
    } catch (err: any) {
      // continue to next MX
    }
  }

  // Fallback if SMTP doesn't work
  return {
    email,
    status: 'valid',
    reason: 'Valid - MX records found (SMTP unavailable)',
    verificationTime: Date.now() - startTime
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { emails } = body;

    if (!Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json(
        { error: 'Please provide an array of emails' },
        { status: 400 }
      );
    }

    if (emails.length > 1000) {
      return NextResponse.json(
        { error: 'Maximum 1000 emails at a time' },
        { status: 400 }
      );
    }

    const results: VerificationResult[] = [];

    // Process emails sequentially to avoid too many concurrent connections
    for (const email of emails) {
      const result = await verifyEmail(email.toLowerCase().trim());
      results.push(result);
    }

    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Verification failed' },
      { status: 500 }
    );
  }
}