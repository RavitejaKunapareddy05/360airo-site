import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory OTP store
const otpStore = new Map<string, { otp: string; timestamp: number; expires: number }>();

function generateOTP(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Normalize email to lowercase for consistency across all operations
    const normalizedEmail = email.toLowerCase().trim();

    const smtpHost = process.env.SMTP_HOST || process.env.GMAIL_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.GMAIL_PORT || '587');
    const smtpSecure = (process.env.SMTP_SECURE || process.env.GMAIL_SECURE || 'false') === 'true';
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    console.log(`📧 [GLOBAL OTP] Sending OTP to ${normalizedEmail}`);

    if (!smtpUser || !smtpPass) {
      console.error('❌ [GLOBAL OTP] Missing SMTP credentials');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const otp = generateOTP();
    const timestamp = Date.now();
    const expiresIn = 10 * 60 * 1000; // 10 minutes

    // Store OTP in memory with normalized email key
    otpStore.set(normalizedEmail, {
      otp,
      timestamp,
      expires: timestamp + expiresIn,
    });

    console.log(`📧 [GLOBAL OTP] Generated OTP for ${normalizedEmail}: ${otp}`);
    console.log(`📧 [GLOBAL OTP] OTP stored in memory. Store size: ${otpStore.size}, Keys: ${Array.from(otpStore.keys()).join(', ')}`);

    try {
      await transporter.sendMail({
        from: smtpUser,
        to: normalizedEmail,
        subject: '🔐 360 Airo Free Tools - Your Verification Code',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; text-align: center; }
    .otp-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #667eea; }
    .otp-code { font-size: 36px; font-weight: bold; color: #667eea; letter-spacing: 8px; font-family: monospace; }
    .timer { color: #999; font-size: 12px; margin-top: 10px; }
    .footer { color: #999; font-size: 12px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>360 Airo Free Tools</h1>
      <p>Email Verification Code</p>
    </div>
    <div class="content">
      <h2>Verify Your Email</h2>
      <p>Your verification code is valid for 10 minutes.</p>
      
      <div class="otp-box">
        <div class="otp-code">${otp}</div>
        <div class="timer">⏱️ Valid for 10 minutes</div>
      </div>

      <p style="margin-top: 30px; color: #999;">
        Use this code to access all 360 Airo free tools.
      </p>
      
      <div class="footer">
        <p>© 2024 360 Airo. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
        `,
        text: `Your verification code is: ${otp}\nValid for 10 minutes.`,
      });

      console.log(`✅ [GLOBAL OTP] Email sent to ${normalizedEmail}`);
      return NextResponse.json(
        { success: true, message: 'OTP sent successfully' },
        { status: 200 }
      );
    } catch (emailError: any) {
      const errorMsg = emailError?.message || String(emailError);
      console.error(`❌ [GLOBAL OTP] Failed to send email:`, errorMsg);
      otpStore.delete(normalizedEmail);
      
      return NextResponse.json(
        { error: `Failed to send OTP: ${errorMsg}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [GLOBAL OTP] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Export store for verify-otp endpoint
export { otpStore };
