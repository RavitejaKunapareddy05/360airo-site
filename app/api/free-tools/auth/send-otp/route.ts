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
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=600px, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Verification Code</title>
  <style type="text/css">
    /* Reset Styles */
    html, body { margin: 0 !important; padding: 0 !important; min-height: 100% !important; width: 100% !important; }
    * { margin: 0; padding: 0; }
    
    /* Body and Base */
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif; line-height: 1.6; color: #333; }
    
    /* Wrapper for fixed width */
    .wrapper { width: 600px; max-width: 600px !important; margin: 0 auto; }
    
    /* Header Styles */
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 40px 20px; 
      text-align: center; 
      border-radius: 8px 8px 0 0;
      width: 100% !important;
      max-width: 600px !important;
    }
    .header h1 { font-size: 28px; font-weight: 700; margin: 0 0 8px 0; color: white; letter-spacing: -0.5px; }
    .header p { font-size: 16px; font-weight: 400; margin: 0; opacity: 0.95; color: white; }
    
    /* Content Styles */
    .content { 
      background-color: #ffffff; 
      padding: 40px 30px; 
      border: 1px solid #e0e0e0;
      border-top: none;
      width: 100% !important;
      max-width: 600px !important;
    }
    
    .content h2 { 
      font-size: 22px; 
      color: #333; 
      margin: 0 0 16px 0; 
      font-weight: 600; 
    }
    
    .content p { 
      font-size: 15px; 
      color: #666; 
      margin: 0 0 24px 0; 
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
      width: 100% !important;
      box-sizing: border-box !important;
    }
    
    .otp-code { 
      font-size: 48px; 
      font-weight: 700; 
      color: #667eea; 
      letter-spacing: 12px; 
      font-family: 'Courier New', 'Monaco', 'monospace'; 
      display: block; 
      margin: 0 0 16px 0;
      word-break: break-all;
    }
    
    .timer { 
      color: #999; 
      font-size: 13px; 
      font-weight: 500; 
      margin: 0; 
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
      margin-top: 12px; 
      line-height: 1.4;
    }
    
    /* Responsive Design - Mobile Only */
    @media only screen and (max-width: 600px) {
      .wrapper { width: 100% !important; max-width: 100% !important; }
      .header { padding: 30px 20px !important; border-radius: 0 !important; }
      .header h1 { font-size: 24px !important; }
      .header p { font-size: 14px !important; }
      .content { padding: 24px 20px !important; border-radius: 0 !important; }
      .content h2 { font-size: 20px !important; }
      .content p { font-size: 14px !important; }
      .otp-box { padding: 24px 16px !important; margin: 24px 0 !important; }
      .otp-code { font-size: 40px !important; letter-spacing: 8px !important; }
      .timer { font-size: 12px !important; }
      .footer { margin-top: 24px; padding-top: 16px; }
    }
    
    @media only screen and (max-width: 480px) {
      .content { padding: 20px 16px !important; }
      .otp-code { font-size: 32px !important; letter-spacing: 4px !important; }
      .otp-box { padding: 20px 12px !important; }
    }
  </style>
</head>
<body style="width: 100% !important; height: 100% !important; margin: 0; padding: 0; background-color: #f5f5f5;">
  <!-- Wrapper for fixed width on desktop -->
  <div style="margin: 0 auto; padding: 20px; background-color: #f5f5f5; width: 100%;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
      <tbody>
        <!-- Header -->
        <tr>
          <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; width: 100%;">
            <h1 style="font-size: 28px; font-weight: 700; margin: 0 0 8px 0; color: white;">360 Airo Free Tools</h1>
            <p style="font-size: 16px; font-weight: 400; margin: 0; opacity: 0.95; color: white;">Email Verification Code</p>
          </td>
        </tr>
        
        <!-- Content -->
        <tr>
          <td class="content" style="background-color: white; padding: 40px 30px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="font-size: 22px; color: #333; margin: 0 0 16px 0; font-weight: 600;">Verify Your Email</h2>
            <p style="font-size: 15px; color: #666; margin: 0 0 24px 0; line-height: 1.6;">Your verification code is valid for 10 minutes.</p>
            
            <!-- OTP Box -->
            <div style="background-color: #f9f9f9; padding: 30px; border-radius: 8px; margin: 30px 0; border: 2px solid #667eea; text-align: center;">
              <div style="font-size: 48px; font-weight: 700; color: #667eea; letter-spacing: 12px; font-family: 'Courier New', monospace; margin: 0 0 16px 0;">${otp}</div>
              <div style="color: #999; font-size: 13px; font-weight: 500;">⏱️ Valid for 10 minutes</div>
            </div>

            <p style="margin: 30px 0 0 0; color: #666; font-size: 15px; text-align: center; line-height: 1.6;">
              Use this code to access all 360 Airo free tools and unlock powerful email management features.
            </p>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #e0e0e0; padding-top: 24px; margin-top: 30px; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0; line-height: 1.4;">© 2024 360 Airo. All rights reserved.</p>
              <p style="color: #bbb; font-size: 11px; margin-top: 12px; line-height: 1.4;">If you didn't request this code, please ignore this email.</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>
        `,
        text: `Your verification code is: ${otp}\nValid for 10 minutes.\n\nUse this code to access all 360 Airo free tools.\n\n© 2024 360 Airo. All rights reserved.`,
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
