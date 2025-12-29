import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API Key from environment variable
const BACKEND_API_KEY = process.env.NEXT_PUBLIC_MAILTESTER_API_KEY || 'sub_1SQ8ntAJu6gy4fiYiCXxoUQc';
const MAILTESTER_API_ENDPOINT = 'https://happy.mailtester.ninja/ninja';

// Daily limit tracking (resets per deployment, use database for production)
const dailyLimits = new Map<string, { count: number; date: string }>();
const DAILY_LIMIT = 30;

function getDailyKey(ipAddress: string): string {
  return `${ipAddress}:${new Date().toISOString().split('T')[0]}`;
}

function checkDailyLimit(ipAddress: string): { allowed: boolean; remaining: number } {
  const key = getDailyKey(ipAddress);
  const today = new Date().toISOString().split('T')[0];
  
  if (!dailyLimits.has(key)) {
    dailyLimits.set(key, { count: 0, date: today });
  }
  
  const limit = dailyLimits.get(key)!;
  
  if (limit.count >= DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }
  
  return { allowed: true, remaining: DAILY_LIMIT - limit.count };
}

function incrementDailyCount(ipAddress: string, count: number): void {
  const key = getDailyKey(ipAddress);
  if (!dailyLimits.has(key)) {
    dailyLimits.set(key, { count: 0, date: new Date().toISOString().split('T')[0] });
  }
  const limit = dailyLimits.get(key)!;
  limit.count += count;
  console.log(`📊 Daily limit tracking: ${ipAddress} - Used: ${limit.count}/${DAILY_LIMIT}`);
  return limit.count;
}

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

    // Get IP address for rate limiting
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check daily limit
    const { allowed, remaining } = checkDailyLimit(ipAddress);
    if (!allowed) {
      return NextResponse.json(
        { 
          error: 'You have reached today\'s limit of 30 emails. Come again tomorrow!',
          remaining: 0,
          limit: 30
        },
        { status: 429 }
      );
    }

    // Check if batch exceeds remaining limit
    if (emails.length > remaining) {
      return NextResponse.json(
        { 
          error: `You can verify only ${remaining} more email(s) today. Your daily limit is 30. Limit resets tomorrow.`,
          remaining: remaining,
          limit: 30
        },
        { status: 429 }
      );
    }

    // Increment daily count
    const usedCount = incrementDailyCount(ipAddress, emails.length);

    // Process emails in batches of 5, sequentially (10 seconds per email)
    const BATCH_SIZE = 5;
    
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

    // Process all emails in sequential batches
    const encoder = new TextEncoder();
    let resultCount = 0;
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          controller.enqueue(encoder.encode('[\n'));
          
          // Process emails in batches of 5 sequentially (each email takes ~10 seconds)
          for (let i = 0; i < emails.length; i += BATCH_SIZE) {
            const batch = emails.slice(i, i + BATCH_SIZE);
            console.log(`Processing batch: ${Math.floor(i / BATCH_SIZE) + 1}, emails ${i + 1}-${Math.min(i + BATCH_SIZE, emails.length)} of ${emails.length}`);
            
            // Process each email in the batch sequentially (one at a time, not in parallel)
            for (const email of batch) {
              const result = await verifyEmailWithLimit(email);
              if (resultCount > 0) {
                controller.enqueue(encoder.encode(',\n'));
              }
              controller.enqueue(encoder.encode(JSON.stringify(result)));
              resultCount++;
              console.log(`✓ Verified ${resultCount}/${emails.length}: ${email}`);
            }
          }
          
          console.log(`✅ All ${emails.length} emails verified successfully`);
          controller.enqueue(encoder.encode('\n]'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      }
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'application/json',
        'X-Remaining-Daily-Limit': (DAILY_LIMIT - usedCount).toString(),
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
