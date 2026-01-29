import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

interface PitchRequest {
  recipientName: string;
  recipientCompany: string;
  recipientWebsite?: string;
  companyName: string;
  companyWebsite?: string;
  companyDescription: string;
  productService: string;
  uniqueValue: string;
  scrapedCompanyData?: any;
}

// Scrape website to get company information
async function scrapeWebsiteInfo(website: string): Promise<string> {
  if (!website) return '';

  try {
    let url = website;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }

    const response = await axios.get(url, {
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      validateStatus: (status) => status < 500
    });

    if (response.status >= 400) return '';

    const $ = cheerio.load(response.data);
    
    const title = $('title').text() || $('h1').first().text() || '';
    const description = $('meta[name="description"]').attr('content') || '';
    const headings: string[] = [];
    
    $('h1, h2, h3').slice(0, 5).each((_, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 200) headings.push(text);
    });

    const parts = [
      title && `Company: ${title}`,
      description && `Description: ${description.substring(0, 100)}`,
      headings.length > 0 && `Services: ${headings.slice(0, 2).join(', ')}`
    ].filter(Boolean);

    return parts.join('\n');
  } catch (error) {
    console.error('Error scraping website:', error);
    return '';
  }
}

// Generate pitch using OpenAI
async function generatePitchWithOpenAI(
  recipientName: string,
  recipientCompany: string,
  recipientWebsiteInfo: string,
  senderCompanyName: string,
  senderCompanyDescription: string,
  productService: string,
  uniqueValue: string
): Promise<string> {
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!openaiKey) {
    return generateFallbackPitch(recipientName, recipientCompany, productService, uniqueValue);
  }

  const prompt = `GENERATE A COLD EMAIL FOLLOWING THIS EXACT FORMULA:

CONTEXT:
Recipient: ${recipientName} at ${recipientCompany}
${recipientWebsiteInfo ? `Company context: ${recipientWebsiteInfo}` : ''}
Your company: ${senderCompanyName}
${senderCompanyDescription ? `Your business: ${senderCompanyDescription}` : ''}
Your solution: ${productService}
Key value: ${uniqueValue}

FORMULA (7 STEPS):

1. ENTRY TRIGGER (1 sentence) - Pick the strongest one:
   - Recent company event (hiring, product launch, expansion, funding)
   - Specific tool they use
   - Their role + core responsibility
   - Known industry pattern
   RULE: Must be specific, time-bound, verifiable. No "following", "impressed", or vague praise.

2. WHY THIS MATTERS NOW (1 sentence)
   - Connect trigger → operational pressure
   - Use pattern-based language ("That usually means...", "That typically creates...")
   RULE: Don't assume intent. Don't say "you are facing". Don't exaggerate urgency.

3. PROBLEM FRAME (1 sentence)
   - Describe workflow or process breakdown
   - Make it relatable to their role
   RULE: No emotional language. No absolute statements.

4. WHAT YOU DO (1 sentence)
   - Describe exact functional change
   - Explain HOW, not generic "help"
   - Tie directly to problem frame
   RULE: No buzzwords.

5. PROOF (OPTIONAL - 1 sentence MAX)
   - ONE metric only
   - Operational metrics only: reply rate, time saved, tool consolidation
   - Skip if weak
   RULE: NO revenue, ROI, pipeline value, or growth % claims.

6. DIRECT CTA (1 sentence)
   - Ask for specific time block
   - Specific action
   - Neutral language
   - End with "?"
   Example: "Would 15 minutes to map your process make sense?"

7. SIGN-OFF (1 word)
   - "Best," or "Thanks,"
   - No title, no links, no calendar

CONSTRAINTS:
✓ 70–120 words TOTAL
✓ 5–7 sentences only
✓ 1 idea per sentence
✓ Plain language (no hype)
✓ No emojis, no markdown
✓ Email body ONLY (no subject line, no intro/outro)

AVOID THESE:
✗ No reliable trigger data
✗ Product cannot map to workflow change
✗ CTA requires multiple actions
✗ Exceeds 120 words
✗ More than 1 metric

Generate the email body now:`;


  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI error:', error);
      return generateFallbackPitch(recipientName, recipientCompany, productService, uniqueValue);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || generateFallbackPitch(recipientName, recipientCompany, productService, uniqueValue);
  } catch (error) {
    console.error('OpenAI API error:', error);
    return generateFallbackPitch(recipientName, recipientCompany, productService, uniqueValue);
  }
}

// Fallback pitch generation (no API or API fails)
function generateFallbackPitch(
  recipientName: string,
  recipientCompany: string,
  productService: string,
  uniqueValue: string
): string {
  return `Hi ${recipientName},

I noticed ${recipientCompany} and thought you might benefit from our ${productService}.

${uniqueValue}

Would you be open to a brief conversation to discuss how this could help your team?

Best regards`;
}

export async function POST(request: NextRequest) {
  try {
    const body: PitchRequest = await request.json();

    // Validate required fields
    if (!body.recipientName || !body.recipientCompany || !body.productService || !body.uniqueValue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log(`📧 Generating pitch for ${body.recipientName} at ${body.recipientCompany}`);

    // Scrape recipient website if provided
    const recipientWebsiteInfo = body.recipientWebsite
      ? await scrapeWebsiteInfo(body.recipientWebsite)
      : '';

    // Generate pitch using OpenAI
    const pitch = await generatePitchWithOpenAI(
      body.recipientName,
      body.recipientCompany,
      recipientWebsiteInfo,
      body.companyName || 'Your Company',
      body.companyDescription || '',
      body.productService,
      body.uniqueValue
    );

    return NextResponse.json({
      pitch,
      success: true,
      scrapedWebsite: !!recipientWebsiteInfo
    });
  } catch (error) {
    console.error('Pitch generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate pitch' },
      { status: 500 }
    );
  }
}
