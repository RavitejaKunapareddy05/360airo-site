import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering - ADD THIS LINE
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

let subscriptions: string[] = [];

function getCurrentTimestamp(): string {
  return new Date().toLocaleString();
}

async function sendEmailNotification(subscriberEmail: string) {
  try {
    console.log('🔍 Starting email send process...');
    console.log('🔍 GMAIL_USER:', process.env.GMAIL_USER);
    console.log('🔍 GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD);

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Missing email credentials in environment variables');
    }

    // Use the exact same configuration as your Python code
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log('🔍 Verifying transporter connection...');
    await transporter.verify();
    console.log('✅ Transporter verified successfully');

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself, same as Python
      subject: 'New Subscription - 360airo',
      text: `New subscriber: ${subscriberEmail}\nTime: ${getCurrentTimestamp()}`,
      html: `
        <div>
          <h2>New Subscription Alert! 🚀</h2>
          <p><strong>Subscriber Email:</strong> ${subscriberEmail}</p>
          
        </div>
      `,
    };

    console.log('🔍 Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('🔍 Message ID:', result.messageId);
    
    return { success: true, message: 'Email sent successfully' };
    
  } catch (error: any) {
    console.error('❌ Email error details:');
    console.error('   Error message:', error.message);
    console.error('   Error code:', error.code);
    
    let userMessage = `Failed to send email: ${error.message}`;
    
    if (error.code === 'EAUTH') {
      userMessage = 'Gmail authentication failed. Please check your app password.';
    } else if (error.code === 'ECONNECTION') {
      userMessage = 'Cannot connect to email server. Please check your internet connection.';
    }
    
    return { success: false, message: userMessage };
  }
}

export async function POST(request: NextRequest) {
  console.log('\n🚀 === NEW SUBSCRIPTION REQUEST ===');
  
  try {
    const data = await request.json();
    console.log('📦 Request data received');

    if (!data) {
      return NextResponse.json({ error: 'No JSON data received' }, { status: 400 });
    }

    const email = data.email?.trim().toLowerCase() || '';
    console.log('📧 Processing email:', email);

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
    }

    console.log('✅ Email validation passed');

    const result = await sendEmailNotification(email);

    if (result.success) {
      subscriptions.push(email);
      console.log('✅ Subscription completed successfully');
      
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
        email: email,
        total_subscribers: subscriptions.length
      });
    } else {
      console.error('❌ Email sending failed:', result.message);
      return NextResponse.json({ error: result.message }, { status: 500 });
    }

  } catch (error: any) {
    console.error('❌ UNEXPECTED ERROR:');
    console.error('   Error:', error.message);
    
    return NextResponse.json({ 
      error: 'An unexpected error occurred. Please try again.' 
    }, { status: 500 });
  }
}

export async function GET() {
  console.log('🔍 Health check requested');
  
  return NextResponse.json({
    status: 'active',
    timestamp: new Date().toISOString(),
    gmail_user: process.env.GMAIL_USER || 'not_set',
    gmail_app_password_set: !!process.env.GMAIL_APP_PASSWORD,
    smtp_server: process.env.SMTP_SERVER || 'smtp.gmail.com',
    smtp_port: process.env.SMTP_PORT || '587',
    subscriptions_count: subscriptions.length,
    environment: process.env.NODE_ENV
  });
}