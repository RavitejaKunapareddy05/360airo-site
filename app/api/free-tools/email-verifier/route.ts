import { NextRequest, NextResponse } from 'next/server';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

// Simple DNS-based email validation (works on Vercel)
async function verifyEmailDNS(email: string): Promise<{ status: 'valid' | 'invalid' | 'unknown'; reason: string }> {
  const domain = email.split('@')[1];
  
  if (!domain) {
    return { status: 'invalid', reason: 'Invalid email format' };
  }

  try {
    const mxRecords = await resolveMx(domain);
    if (mxRecords && mxRecords.length > 0) {
      return { status: 'valid', reason: 'Domain verified via DNS' };
    }
    return { status: 'invalid', reason: 'Domain does not exist' };
  } catch (err) {
    return { status: 'invalid', reason: 'Domain does not exist' };
  }
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

    let body_text = '[\n';
    let first = true;

    for (const email of emails) {
      try {
        const trimmedEmail = email.toLowerCase().trim();
        
        // Use DNS validation (works on Vercel without port 25)
        const result = await verifyEmailDNS(trimmedEmail);

        if (!first) {
          body_text += ',\n';
        }
        body_text += JSON.stringify({
          email: trimmedEmail,
          status: result.status,
          reason: result.reason,
          verificationTime: 0
        });
        first = false;
      } catch (err) {
        console.error(`Error verifying ${email}:`, err);
        if (!first) {
          body_text += ',\n';
        }
        body_text += JSON.stringify({
          email,
          status: 'unknown',
          reason: err instanceof Error ? err.message : 'Verification service error',
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
