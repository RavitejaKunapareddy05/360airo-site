import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns';
import { promisify } from 'util';
import net from 'net';

const resolveMx = promisify(dns.resolveMx);

function smtpVerifyEmail(mxHost: string, email: string, timeout = 2000): Promise<boolean | null> {
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

    timeoutHandle = setTimeout(() => cleanup(null), timeout);
    socket.on('error', () => cleanup(null));
    socket.on('close', () => {
      if (!finished) cleanup(null);
    });

    socket.connect(25, mxHost, () => {});

    socket.on('data', (chunk: Buffer) => {
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
        if (code === 250 || code === 251) {
          cleanup(true);
        } else if (code >= 550 && code < 560) {
          cleanup(false);
        } else if (code >= 400 && code < 500) {
          cleanup(null);
        } else {
          cleanup(null);
        }
      }
    });
  });
}

async function verifyEmail(email: string): Promise<{ status: string; reason: string }> {
  email = email.toLowerCase().trim();
  const domain = email.split('@')[1];

  if (!domain) {
    return { status: 'invalid', reason: 'Invalid email format' };
  }

  let mxRecords: any;
  try {
    mxRecords = await resolveMx(domain);
  } catch (err) {
    return { status: 'invalid', reason: 'Domain does not exist' };
  }

  if (!mxRecords || mxRecords.length === 0) {
    return { status: 'invalid', reason: 'No mail servers found' };
  }

  // Try SMTP on up to 2 MX servers
  let smtpAttempted = false;
  for (let i = 0; i < Math.min(2, mxRecords.length); i++) {
    smtpAttempted = true;
    const result = await smtpVerifyEmail(mxRecords[i].exchange, email, 2000);

    if (result === true) {
      return { status: 'valid', reason: 'Email verified via SMTP' };
    } else if (result === false) {
      return { status: 'invalid', reason: 'Email does not exist' };
    }
  }

  // On localhost: If DNS works and SMTP times out, mark as valid (domain exists)
  // On production: Mark as unknown (SMTP should work)
  if (smtpAttempted) {
    const isLocalhost = process.env.NODE_ENV === 'development';
    if (isLocalhost) {
      return { status: 'valid', reason: 'Domain verified via DNS (SMTP unavailable on localhost)' };
    }
    return { status: 'unknown', reason: 'Domain exists but SMTP verification failed' };
  }

  return { status: 'invalid', reason: 'Verification failed' };
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

    // Create encoder for streaming
    const encoder = new TextEncoder();
    let body_text = '[\n';
    let first = true;

    for (const email of emails) {
      try {
        const result = await verifyEmail(email);
        
        if (!first) {
          body_text += ',\n';
        }
        body_text += JSON.stringify({
          email,
          status: result.status,
          reason: result.reason,
          verificationTime: 0
        });
        first = false;
      } catch (err) {
        if (!first) {
          body_text += ',\n';
        }
        body_text += JSON.stringify({
          email,
          status: 'unknown',
          reason: 'Verification service error',
          verificationTime: 0
        });
        first = false;
      }
    }

    body_text += '\n]';

    return new NextResponse(body_text, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Verification failed' },
      { status: 500 }
    );
  }
}
