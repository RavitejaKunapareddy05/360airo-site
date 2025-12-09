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

    // Call Netlify function for verification
    const NETLIFY_URL = 'https://360airo.netlify.app/.netlify/functions/verify-email';

    const stream = new ReadableStream({
      async start(controller) {
        try {
          controller.enqueue('[\n');
          let first = true;

          for (const email of emails) {
            try {
              const response = await fetch(NETLIFY_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.toLowerCase().trim() })
              });

              const result = await response.json();

              if (!first) {
                controller.enqueue(',\n');
              }
              controller.enqueue(JSON.stringify({
                email,
                status: result.status || 'unknown',
                reason: result.reason || 'Verification failed',
                verificationTime: 0
              }));
              first = false;
            } catch (err) {
              if (!first) {
                controller.enqueue(',\n');
              }
              controller.enqueue(JSON.stringify({
                email,
                status: 'unknown',
                reason: 'Verification service error',
                verificationTime: 0
              }));
              first = false;
            }
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
