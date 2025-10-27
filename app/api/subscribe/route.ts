

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json({ error: 'Email required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Log to console (you'll see this in your terminal)
    console.log('🎯 NEW SUBSCRIPTION RECEIVED:', email);
    console.log('📧 Email should be sent to: stellross2002@gmail.com');
    
    // In a real app, you would:
    // 1. Save to database
    // 2. Send to email service
    // 3. Add to mailing list
    
    // For now, we return success and you can check your terminal
    return Response.json({ 
      success: true, 
      message: 'Subscription received!',
      receivedEmail: email
    });

  } catch (error) {
    console.error('❌ Subscription error:', error);
    return Response.json({ error: 'Subscription failed' }, { status: 500 });
  }
}