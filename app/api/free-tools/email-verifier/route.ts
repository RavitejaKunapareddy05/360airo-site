import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API Key from environment variable
const BACKEND_API_KEY = process.env.NEXT_PUBLIC_MAILTESTER_API_KEY || 'sub_1SQ8ntAJu6gy4fiYiCXxoUQc';
const MAILTESTER_API_ENDPOINT = 'https://happy.mailtester.ninja/ninja';

// Email format validation using regex
function validateEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Verify email using MailTester Ninja API
async function verifyEmailViaMailTester(email: string): Promise<{ status: string; reason: string; code?: number; user?: string; domain?: string }> {
  try {
    const { data } = await axios.get(MAILTESTER_API_ENDPOINT, {
      params: {
        email: email.toLowerCase().trim(),
        key: BACKEND_API_KEY,
      },
      timeout: 10000,
      family: 4,
    });
    
    // Map MailTester response message to status
    // Accepted = Valid email
    // Rejected = Invalid email
    // DNS check passed but email rejected = Unknown (DNS valid, email not accepted)
    const messageToStatus: { [key: string]: string } = {
      'Accepted': 'valid',
      'Rejected': 'invalid',
      'Invalid Format': 'invalid',
      'Unknown': 'unknown',
      'Domain has no MX records': 'invalid',
    };

    // Get status from message, default to message itself if not in map
    let status = 'unknown';
    if (data.message) {
      const messageLower = data.message.toLowerCase();
      
      if (messageLower.includes('accepted')) {
        status = 'valid';
      } else if (messageLower.includes('rejected')) {
        status = 'invalid';
      } else if (messageLower.includes('invalid')) {
        status = 'invalid';
      } else if (messageLower.includes('unknown')) {
        status = 'unknown';
      } else if (messageLower.includes('invalid format')) {
        status = 'invalid';
      }
    }

    return {
      status,
      reason: data.message || 'Verification completed',
      code: data.code,
      user: data.user,
      domain: data.domain,
    };
  } catch (error: any) {
    console.error(`Error verifying ${email} via MailTester:`, error.message);
    
    if (error.response?.status === 401 || error.response?.status === 403) {
      throw new Error('API authentication failed - please contact support');
    }
    
    if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      throw new Error('Verification service temporarily unavailable - please try again');
    }

    return {
      status: 'unknown',
      reason: error.response?.data?.message || 'Verification service error',
      code: 2,
    };
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

    // Process emails in parallel with concurrency limit
    const CONCURRENCY_LIMIT = 5;
    
    const verifyEmailWithLimit = async (email: string) => {
      try {
        const trimmedEmail = email.toLowerCase().trim();
        const startTime = Date.now();

        // Step 1: Format validation
        if (!validateEmailFormat(trimmedEmail)) {
          return {
            email: trimmedEmail,
            status: 'invalid',
            reason: 'Invalid email format',
            verificationTime: Date.now() - startTime,
            verificationMethod: 'format-check',
          };
        }

        // Step 2: Verify via MailTester API with backend key
        const result = await verifyEmailViaMailTester(trimmedEmail);
        
        return {
          email: trimmedEmail,
          status: result.status,
          reason: result.reason,
          code: result.code,
          user: result.user,
          domain: result.domain,
          verificationTime: Date.now() - startTime,
          verificationMethod: 'mailtester-api',
        };

      } catch (err) {
        console.error(`Error verifying ${email}:`, err);
        return {
          email,
          status: 'unknown',
          reason: err instanceof Error ? err.message : 'Verification service error',
          verificationTime: 0,
          verificationMethod: 'error',
        };
      }
    };

    // Process all emails in parallel batches
    const encoder = new TextEncoder();
    let resultCount = 0;
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          controller.enqueue(encoder.encode('[\n'));
          
          for (let i = 0; i < emails.length; i += CONCURRENCY_LIMIT) {
            const batch = emails.slice(i, i + CONCURRENCY_LIMIT);
            const batchResults = await Promise.all(batch.map(verifyEmailWithLimit));
            
            for (const result of batchResults) {
              if (resultCount > 0) {
                controller.enqueue(encoder.encode(',\n'));
              }
              controller.enqueue(encoder.encode(JSON.stringify(result)));
              resultCount++;
            }
          }
          
          controller.enqueue(encoder.encode('\n]'));
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error: any) {
    console.error('Email verifier route error:', error);
    return NextResponse.json(
      { error: error.message || 'Verification failed' },
      { status: 500 }
    );
  }
}
