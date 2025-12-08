import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { otpStore } from '../otp-store';

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

    // Read environment variables inside the function
    // Try SMTP_* first, fallback to GMAIL_*
    const smtpHost = process.env.SMTP_HOST || process.env.GMAIL_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.GMAIL_PORT || '587');
    const smtpSecure = (process.env.SMTP_SECURE || process.env.GMAIL_SECURE || 'false') === 'true';
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    console.log(`📧 [OTP] SMTP Config Check:`);
    console.log(`  Host: ${smtpHost}`);
    console.log(`  Port: ${smtpPort}`);
    console.log(`  Secure: ${smtpSecure}`);
    console.log(`  User: ${smtpUser ? '✓' : '✗'} ${smtpUser ? `(${smtpUser})` : '(missing)'}`);
    console.log(`  Pass: ${smtpPass ? '✓ (length: ' + smtpPass.length + ')' : '✗ (missing)'}`);

    if (!smtpUser || !smtpPass) {
      console.error('❌ [SMTP] Missing SMTP/GMAIL credentials in environment variables');
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('SMTP') || k.includes('GMAIL')));
      return NextResponse.json(
        { error: 'SMTP credentials not configured' },
        { status: 500 }
      );
    }

    // Create transporter inside the function with latest env vars
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

    // Store OTP
    otpStore.set(email, {
      otp,
      timestamp,
      expires: timestamp + expiresIn,
    });

    console.log(`📧 [OTP] Generated OTP for ${email}: ${otp}`);

    // Send OTP via email
    try {
      await transporter.sendMail({
        from: smtpUser,
        to: email,
        subject: '🔐 Email Deliverability Tester - Your Verification Code',
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
      <h1>Email Deliverability Tester</h1>
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
        If you didn't request this code, please ignore this email.
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

      console.log(`✅ [OTP] OTP email sent to ${email}`);
      return NextResponse.json(
        { success: true, message: 'OTP sent successfully' },
        { status: 200 }
      );
    } catch (emailError: any) {
      const errorMsg = emailError?.message || String(emailError);
      console.error(`❌ [OTP] Failed to send email:`, errorMsg);
      console.error(`❌ [OTP] Full error:`, emailError);
      
      // Delete the OTP if we couldn't send it
      otpStore.delete(email);
      
      return NextResponse.json(
        { error: `Failed to send OTP email: ${errorMsg}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [OTP] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
