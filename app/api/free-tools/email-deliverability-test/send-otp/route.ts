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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Verification Code</title>
  <style type="text/css">
    /* Reset and Base Styles */
    * { margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; }
    
    /* Container Styles */
    .container { max-width: 600px; margin: 0 auto; background-color: white; }
    
    /* Header Styles */
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 40px 20px; 
      text-align: center; 
      border-radius: 8px 8px 0 0; 
    }
    .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.5px; }
    .header p { font-size: 16px; font-weight: 400; opacity: 0.95; }
    
    /* Content Styles */
    .content { 
      background-color: #ffffff; 
      padding: 40px 30px; 
      border: 1px solid #e0e0e0;
      border-top: none;
    }
    
    .content h2 { 
      font-size: 22px; 
      color: #333; 
      margin-bottom: 16px; 
      font-weight: 600; 
    }
    
    .content p { 
      font-size: 15px; 
      color: #666; 
      margin-bottom: 24px; 
      line-height: 1.6; 
    }
    
    /* OTP Box */
    .otp-box { 
      background-color: #f9f9f9; 
      padding: 30px; 
      border-radius: 8px; 
      margin: 30px 0; 
      border: 2px solid #667eea; 
      text-align: center; 
    }
    
    .otp-code { 
      font-size: 48px; 
      font-weight: 700; 
      color: #667eea; 
      letter-spacing: 12px; 
      font-family: 'Courier New', 'Monaco', monospace; 
      display: block; 
      margin: 0 0 16px 0; 
      word-break: break-all; 
    }
    
    .timer { 
      color: #999; 
      font-size: 13px; 
      font-weight: 500; 
      margin: 16px 0 0 0; 
    }
    
    /* Footer Styles */
    .footer { 
      border-top: 1px solid #e0e0e0; 
      padding-top: 24px; 
      margin-top: 30px; 
      text-align: center; 
    }
    
    .footer p { 
      color: #999; 
      font-size: 12px; 
      margin: 0; 
      line-height: 1.4; 
    }
    
    .footer-note { 
      color: #bbb; 
      font-size: 11px; 
      margin-top: 16px; 
    }
    
    /* Responsive Design */
    @media only screen and (max-width: 600px) {
      .container { max-width: 100% !important; }
      .content { padding: 24px 20px !important; }
      .header { padding: 30px 20px !important; }
      .header h1 { font-size: 24px !important; }
      .header p { font-size: 14px !important; }
      .content h2 { font-size: 20px !important; }
      .content p { font-size: 14px !important; }
      .otp-box { padding: 24px !important; margin: 24px 0 !important; }
      .otp-code { font-size: 40px !important; letter-spacing: 8px !important; }
      .timer { font-size: 12px !important; }
    }
    
    @media only screen and (max-width: 480px) {
      .otp-code { font-size: 32px !important; letter-spacing: 4px !important; }
    }
  </style>
</head>
<body style="background-color: #f5f5f5; padding: 20px 0;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto;">
    <tr>
      <td style="padding: 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
          <!-- Header -->
          <tr>
            <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 8px 0; color: white;">Email Deliverability Tester</h1>
              <p style="font-size: 16px; font-weight: 400; margin: 0; opacity: 0.95; color: white;">Email Verification Code</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td class="content" style="background-color: white; padding: 40px 30px; border: 1px solid #e0e0e0; border-top: none;">
              <h2 style="font-size: 22px; color: #333; margin: 0 0 16px 0; font-weight: 600;">Verify Your Email</h2>
              <p style="font-size: 15px; color: #666; margin: 0 0 24px 0; line-height: 1.6;">Your verification code is valid for 10 minutes.</p>
              
              <!-- OTP Box -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f9f9f9; border: 2px solid #667eea; border-radius: 8px; margin: 30px 0; padding: 30px; box-sizing: border-box;">
                <tr>
                  <td style="text-align: center;">
                    <div class="otp-code" style="font-size: 48px; font-weight: 700; color: #667eea; letter-spacing: 12px; font-family: 'Courier New', monospace; display: block; margin: 0 0 8px 0; word-break: break-all;">${otp}</div>
                    <div class="timer" style="color: #999; font-size: 13px; font-weight: 500; margin: 0;">⏱️ Valid for 10 minutes</div>
                  </td>
                </tr>
              </table>

              <p style="margin: 30px 0 0 0; color: #666; font-size: 15px; text-align: center; line-height: 1.6;">
                If you didn't request this code, please ignore this email.
              </p>
              
              <!-- Footer -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; border-top: 1px solid #e0e0e0; padding-top: 24px; margin-top: 30px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="color: #999; font-size: 12px; margin: 0; line-height: 1.4;">© 2024 360 Airo. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
