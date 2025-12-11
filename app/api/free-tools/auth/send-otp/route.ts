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
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email Verification Code</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, table, td, div, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
        html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
        body { background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif; }
        
        /* Dynamic scaling */
        .wrapper { width: 100%; max-width: 100%; }
        .inner-wrapper { width: 100%; max-width: 600px; margin: 0 auto; }
        
        /* Ensure content spans full width of container */
        table { width: 100%; }
        td { vertical-align: top; }
        
        /* Responsive design */
        @media only screen and (max-width: 600px) {
            .inner-wrapper { width: 100% !important; max-width: 100% !important; }
            table[width="600"] { width: 100% !important; }
            td, tr { width: 100% !important; }
            .header h1 { font-size: 24px !important; }
            .content { padding: 24px 20px !important; }
            .otp-code { font-size: 36px !important; letter-spacing: 8px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 20px 0; background-color: #f5f5f5; width: 100%;">
    <div class="wrapper" style="width: 100%; background-color: #f5f5f5;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f5f5f5; margin: 0;">
            <tr>
                <td align="center" style="padding: 0;">
                    <div class="inner-wrapper" style="width: 100%; max-width: 600px; margin: 0 auto;">
                        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0;">
                            <!-- Header -->
                            <tr>
                                <td class="header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; width: 100%;">
                                    <h1 style="color: white; font-size: 28px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">360 Airo Free Tools</h1>
                                    <p style="color: white; font-size: 16px; font-weight: 400; margin: 0; opacity: 0.95;">Email Verification Code</p>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td class="content" style="background-color: white; padding: 40px 30px; border: 1px solid #e0e0e0; border-top: none; width: 100%;">
                                    <h2 style="font-size: 22px; color: #333; margin: 0 0 16px 0; font-weight: 600;">Verify Your Email</h2>
                                    <p style="font-size: 15px; color: #666; margin: 0 0 24px 0; line-height: 1.6;">Your verification code is valid for 10 minutes.</p>
                                    
                                    <!-- OTP Box -->
                                    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; background-color: #f9f9f9; margin: 30px 0; border: 2px solid #667eea; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 30px 20px; text-align: center; width: 100%;">
                                                <div class="otp-code" style="font-size: 48px; font-weight: 700; color: #667eea; letter-spacing: 12px; word-break: break-all; margin: 0 0 16px 0; font-family: 'Courier New', Monaco, monospace;">${otp}</div>
                                                <div style="color: #999; font-size: 13px; font-weight: 500;">⏱️ Valid for 10 minutes</div>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <p style="margin: 30px 0 0 0; color: #666; font-size: 15px; text-align: center; line-height: 1.6;">Use this code to access all 360 Airo free tools and unlock powerful email management features.</p>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="background-color: white; border: 1px solid #e0e0e0; border-top: 1px solid #e0e0e0; padding: 24px 30px; text-align: center; width: 100%;">
                                    <p style="color: #999; font-size: 12px; margin: 0; line-height: 1.4;">© 2024 360 Airo. All rights reserved.</p>
                                    <p style="color: #bbb; font-size: 11px; margin: 12px 0 0 0; line-height: 1.4;">If you didn't request this code, please ignore this email.</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
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
