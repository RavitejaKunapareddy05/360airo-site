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

function smtpVerifyEmail(mxHost: string, email: string, timeout = 5000): Promise<boolean | null> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let buffer = '';
    let stage = 0;
    let finished = false;
    let timeoutHandle: NodeJS.Timeout | null = null;

    const cleanup = (result: boolean | null) => {
      if (finished) return;
      finished = true;
      if (timeoutHandle) clearTimeout(timeoutHandle);
      try {
        socket.destroy();
      } catch (e) {}
      resolve(result);
    };

    timeoutHandle = setTimeout(() => cleanup(null), timeout); // null = timeout, try next MX or fallback

    socket.on('error', () => cleanup(null)); // null = error, try fallback
    socket.on('close', () => {
      if (!finished) cleanup(null);
    });

    socket.connect(25, mxHost, () => {
      // Connected, waiting for greeting
    });

    socket.on('data', (chunk) => {
      if (finished) return;
      buffer += chunk.toString();
      const lines = buffer.split('\r\n').filter(Boolean);
      const lastLine = lines[lines.length - 1];
      if (!lastLine || lastLine.length < 3) return;

      const code = parseInt(lastLine.slice(0, 3), 10);
      if (isNaN(code)) return;

      if (stage === 0 && code >= 200 && code < 400) {
        socket.write(`HELO example.com\r\n`);
        stage = 1;
        buffer = '';
      } else if (stage === 1 && code >= 200 && code < 400) {
        socket.write(`MAIL FROM:<test@example.com>\r\n`);
        stage = 2;
        buffer = '';
      } else if (stage === 2 && code >= 200 && code < 400) {
        socket.write(`RCPT TO:<${email}>\r\n`);
        stage = 3;
        buffer = '';
      } else if (stage === 3) {
        socket.write(`QUIT\r\n`);
        cleanup(code === 250 || code === 251);
      }
    });
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

  // Basic format check - just ensure it has @ and domain
  if (!email.includes('@')) {
    return {
      email,
      status: 'invalid',
      reason: 'Missing @ symbol',
      verificationTime: Date.now() - startTime
    };
  }

  const [localPart, domain] = email.split('@');
  
  // Check if both parts exist
  if (!localPart || !domain) {
    return {
      email,
      status: 'invalid',
      reason: 'Invalid email structure',
      verificationTime: Date.now() - startTime
    };
  }

  const lowerDomain = domain.toLowerCase();

  // Check for common fake/test domains
  const fakeDomains = [
    'test.com', 'example.com', 'example.org', 'example.net', 'example.info',
    'localhost', 'invalid', 'domain.com', 'sample.com', 'test.net',
    '127.0.0.1', 'localhost.com', 'demo.com', 'temp.com', 'test.org'
  ];
  if (fakeDomains.includes(lowerDomain)) {
    return {
      email,
      status: 'invalid',
      reason: 'Test/example domain detected',
      verificationTime: Date.now() - startTime
    };
  }

  // Check for disposable email domains
  const disposableDomains = [
    'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwaway.email',
    'mailinator.com', 'maildrop.cc', 'sharklasers.com', 'yopmail.com',
    'temp-mail.org', 'fakeinbox.com', 'spam4.me', 'tempmail.us'
  ];
  if (disposableDomains.includes(lowerDomain)) {
    return {
      email,
      status: 'invalid',
      reason: 'Disposable/temporary email detected',
      verificationTime: Date.now() - startTime
    };
  }

  // DNS MX record lookup
  let mxRecords;
  try {
    mxRecords = await resolveMx(lowerDomain);
  } catch (err: any) {
    const code = err.code || err.message;
    
    if (code === 'ENOTFOUND' || code === 'ENODATA') {
      return {
        email,
        status: 'invalid',
        reason: 'Domain does not exist',
        verificationTime: Date.now() - startTime
      };
    }
    
    if (code === 'ESERVFAIL') {
      return {
        email,
        status: 'unknown',
        reason: 'DNS server error - unable to verify',
        verificationTime: Date.now() - startTime
      };
    }

    return {
      email,
      status: 'invalid',
      reason: 'Domain verification failed',
      verificationTime: Date.now() - startTime
    };
  }

  if (!mxRecords || mxRecords.length === 0) {
    return {
      email,
      status: 'invalid',
      reason: 'No mail servers found for domain',
      verificationTime: Date.now() - startTime
    };
  }

  // Verify at least one MX record is not blacklisted
  const validMxRecords = mxRecords.filter((mx: any) => !isBlacklistedMx(mx.exchange));
  if (validMxRecords.length === 0) {
    return {
      email,
      status: 'invalid',
      reason: 'Domain MX records are invalid',
      verificationTime: Date.now() - startTime
    };
  }

  // Sort by priority and try SMTP verification on primary MX server
  validMxRecords.sort((a: any, b: any) => (a.priority || 0) - (b.priority || 0));
  
  let smtpAttempted = false;
  for (let i = 0; i < Math.min(2, validMxRecords.length); i++) {
    try {
      smtpAttempted = true;
      const verified = await smtpVerifyEmail(validMxRecords[i].exchange, email, 5000);
      
      if (verified === true) {
        // Email verified
        return {
          email,
          status: 'valid',
          reason: `Email exists - verified via SMTP`,
          verificationTime: Date.now() - startTime
        };
      } else if (verified === false) {
        // Email rejected by SMTP
        return {
          email,
          status: 'invalid',
          reason: 'Email address does not exist',
          verificationTime: Date.now() - startTime
        };
      }
      // If null, SMTP timed out or errored - try next MX or fallback to DNS
    } catch (err) {
      continue;
    }
  }

  // If SMTP times out or fails for all MX servers, fall back to DNS verification
  // Domain has valid MX records, but SMTP verification failed
  if (smtpAttempted) {
    return {
      email,
      status: 'unknown',
      reason: 'SMTP verification failed (DNS verified)',
      verificationTime: Date.now() - startTime
    };
  }

  // Fallback: Domain is valid
  return {
    email,
    status: 'valid',
    reason: 'Valid - domain has active mail servers',
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

    // Stream results as they complete
    const stream = new ReadableStream({
      async start(controller) {
        try {
          controller.enqueue('[\n');
          let first = true;

          for (const email of emails) {
            const result = await verifyEmail(email.toLowerCase().trim());
            
            if (!first) {
              controller.enqueue(',\n');
            }
            controller.enqueue(JSON.stringify(result));
            first = false;
          }

          controller.enqueue('\n]');
          controller.close();
        } catch (error: any) {
          console.error('Stream error:', error);
          controller.close();
        }
      }
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Verification failed' },
      { status: 500 }
    );
  }
}