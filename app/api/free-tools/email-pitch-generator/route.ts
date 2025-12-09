import { NextRequest, NextResponse } from 'next/server';

interface PitchRequest {
  recipientName: string;
  companyName: string;
  productService: string;
  uniqueValue: string;
}

export async function POST(request: NextRequest) {
  try {
    const { recipientName, companyName, productService, uniqueValue } = (await request.json()) as PitchRequest;

    if (!recipientName || !companyName || !productService || !uniqueValue) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const openaiKey = process.env.OPENAI_API_KEY;

    if (!openaiKey) {
      console.error('⚠️ No OpenAI API key found');
      return NextResponse.json(
        { error: 'AI service is not configured' },
        { status: 500 }
      );
    }

    console.log(`📧 [EMAIL-PITCH] Generating pitch for: ${recipientName} at ${companyName}`);

    const prompt = `You are an expert sales email copywriter. Generate a compelling, personalized email pitch.

Details:
- Recipient Name: ${recipientName}
- Company Name: ${companyName}
- Product/Service: ${productService}
- Unique Value Proposition: ${uniqueValue}

Create a professional, engaging email pitch that:
1. Opens with a personalized greeting
2. Shows genuine interest in their company
3. Introduces your product/service naturally
4. Highlights your unique value clearly
5. Mentions social proof or results
6. Includes a clear call-to-action
7. Closes professionally
8. Total: 120-200 words
9. NO spam words, NO excessive urgency, NO clickbait

Respond with ONLY the email body, no subject line, no markdown, no formatting markers.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      console.error('❌ OpenAI API Error');
      return NextResponse.json(
        { error: 'Failed to generate pitch' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const pitch = data.choices?.[0]?.message?.content;

    if (!pitch) {
      return NextResponse.json(
        { error: 'Failed to generate pitch' },
        { status: 500 }
      );
    }

    console.log('✅ [EMAIL-PITCH] Pitch generated successfully');

    return NextResponse.json({
      success: true,
      pitch: pitch.trim(),
    });
  } catch (error: any) {
    console.error('❌ [EMAIL-PITCH] Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate pitch' },
      { status: 500 }
    );
  }
}
