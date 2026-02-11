import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { email, otp_code } = await request.json();
    console.log('🔐 Verify OTP request for:', email, 'OTP:', otp_code);

    if (!email || !otp_code) {
      console.log('❌ Missing email or OTP');
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    // Get user
    console.log('🔍 Looking up user...');
    const { data: userData, error: userError } = await supabase
      .from('free_tool_users')
      .select('id, email_verified')
      .eq('email', email)
      .single();

    if (userError || !userData) {
      console.log('❌ User not found:', userError);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    console.log('✅ User found:', userData.id);

    // Get the latest valid OTP
    console.log('🔍 Looking up OTP code...');
    const { data: otpData, error: fetchError } = await supabase
      .from('free_tool_otp_codes')
      .select('*')
      .eq('user_id', userData.id)
      .eq('email', email)
      .eq('is_used', false)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !otpData) {
      console.log('❌ No valid OTP found:', fetchError);
      return NextResponse.json({ error: 'No valid OTP found' }, { status: 400 });
    }
    console.log('✅ OTP found:', otpData.otp_code);

    // Check if OTP expired (both in UTC for proper comparison)
    const now = new Date();
    const expiresAt = new Date(otpData.expires_at);
    console.log('🕐 Current time (UTC):', now.toISOString());
    console.log('🕐 Expires at (UTC):', expiresAt.toISOString());
    console.log('🕐 Time remaining (seconds):', Math.floor((expiresAt.getTime() - now.getTime()) / 1000));
    
    if (now > expiresAt) {
      console.log('❌ OTP expired');
      return NextResponse.json({ error: 'OTP has expired' }, { status: 400 });
    }
    console.log('✅ OTP is still valid');

    // Check if OTP matches
    if (otpData.otp_code !== otp_code) {
      console.log('❌ OTP mismatch. Expected:', otpData.otp_code, 'Got:', otp_code);
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }
    console.log('✅ OTP matches!');

    // Mark OTP as used
    console.log('💾 Marking OTP as used...');
    await supabase
      .from('free_tool_otp_codes')
      .update({ is_used: true, used_at: new Date().toISOString() })
      .eq('id', otpData.id);

    // Update user as verified
    console.log('✅ Updating user as verified...');
    await supabase
      .from('free_tool_users')
      .update({
        email_verified: true,
        verified_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', userData.id);

    console.log('✅ Verification complete!');
    return NextResponse.json(
      {
        success: true,
        message: 'OTP verified successfully',
        userId: userData.id,
        email: email,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error in verify-otp:', error.message);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error.message 
    }, { status: 500 });
  }
}
