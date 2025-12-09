import { NextRequest, NextResponse } from 'next/server';

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

    // Call Netlify function for SMTP verification
    const NETLIFY_URL = process.env.NETLIFY_FUNCTION_URL || 'https://360airo.netlify.app/.netlify/functions/verify-email';

    let body_text = '[\n';
    let first = true;

    for (const email of emails) {
      try {
        const response = await fetch(NETLIFY_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.toLowerCase().trim() }),
        });

        if (!response.ok) {
          throw new Error(`Netlify function error: ${response.statusText}`);
        }

        const result = await response.json();

        if (!first) {
          body_text += ',\n';
        }
        body_text += JSON.stringify({
          email,
          status: result.status || 'unknown',
          reason: result.reason || 'Verification failed',
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
