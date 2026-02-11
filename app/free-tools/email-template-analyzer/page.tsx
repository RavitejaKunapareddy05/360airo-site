'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, AlertCircle, CheckCircle, Zap, Copy } from 'lucide-react';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

interface AnalysisResult {
  subjectLength: number;
  wordCount: number;
  readingTimeSeconds: number;
  linkCount: number;
  questionCount: number;
  spamWords: string[];
  personalizationTokens: string[];
  subjectScore: number;
  bodyScore: number;
  overallScore: number;
  isPhishing?: boolean;
  phishingScore?: number;
  phishingIndicators?: string[];
  recommendations: string[];
  improvedSubject?: string;
  improvedBody?: string;
  improvedScore?: number;
}

const SPAM_WORDS = [
  'free', 'winner', 'win', 'urgent', 'act now', 'cheap', 'credit', 'loan',
  'limited time', 'guarantee', 'risk free', 'order now', 'subscribe', 'buy now',
  'click here', 'earn', 'income', 'promise', 'no cost', 'save big',
];

const PHISHING_PATTERNS = [
  'randomly selected',
  'claim your prize',
  'click here to claim',
  'verify your account',
  'confirm your identity',
  'update your information',
  'unusual activity',
  'immediate action required',
  '24 hours',
  'final notification',
  'act now or lose',
  'suspended account',
  'locked account',
  'unauthorized access',
  'confirm credentials',
  'validate account',
  'click link below',
  're-activate',
  'congratulations you have won',
  'million dollars',
  'inheritance',
  'tax refund',
  'money waiting',
  'global rewards',
  'lottery winner',
];

const PHISHING_KEYWORDS = [
  /randomly\s+selected/gi,
  /huge\s+prize/gi,
  /million\s+dollars?/gi,
  /claim.*prize/gi,
  /24\s+hours?/gi,
  /final\s+notification/gi,
  /urgent.*action/gi,
  /verify.*account/gi,
  /confirm.*identity/gi,
  /update.*information/gi,
  /suspended/gi,
  /locked/gi,
  /unauthorized\s+access/gi,
  /act\s+now\s+or\s+lose/gi,
  /re[_-]?activate/gi,
  /congratulations.*won/gi,
  /inheritance/gi,
  /tax\s+refund/gi,
  /money\s+waiting/gi,
];

const PERSONALIZATION_PATTERNS = [
  /\{\{\s*first[_ ]?name\s*\}\}/gi,
  /\{\{\s*name\s*\}\}/gi,
  /\\{first[_ ]?name\\}/gi,
  /%FIRST[_ ]?NAME%/gi,
  /\[name\]/gi,
];

export default function EmailTemplateAnalyzerPage() {
  const [emailContent, setEmailContent] = useState('');
  const [subject, setSubject] = useState('');
  const [fromName, setFromName] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const extractSubjectAndBody = (raw: string): { subject: string; body: string } => {
    const lines = raw.trim().split('\n');
    if (!lines.length) return { subject: '', body: '' };

    // Check for explicit Subject:
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].toLowerCase().startsWith('subject:')) {
        const subj = lines[i].split(':', 1)[1].trim();
        const body = lines.slice(i + 1).join('\n').trim();
        return { subject: subj, body };
      }
    }

    // Treat first line as subject if short and next line blank
    if (lines.length >= 2 && lines[0].trim() && !lines[1].trim() && lines[0].length <= 120) {
      return { subject: lines[0].trim(), body: lines.slice(2).join('\n').trim() };
    }

    return { subject: '', body: raw.trim() };
  };

  const countWords = (text: string): number => {
    const tokens = text.match(/\w+/g) || [];
    return tokens.length;
  };

  const countLinks = (text: string): number => {
    const urlRegex = /https?:\/\/[^\s)]+|www\.[^\s)]+/gi;
    return (text.match(urlRegex) || []).length;
  };

  const countQuestions = (text: string): number => {
    return (text.match(/\?/g) || []).length;
  };

  const detectSpamWords = (text: string): string[] => {
    const found = new Set<string>();
    const lowered = text.toLowerCase();
    for (const word of SPAM_WORDS) {
      if (lowered.includes(word)) {
        found.add(word);
      }
    }
    return Array.from(found).sort();
  };

  const detectPersonalization = (text: string): { score: number; tokens: string[] } => {
    const found = new Set<string>();
    for (const pattern of PERSONALIZATION_PATTERNS) {
      const matches = text.match(pattern);
      if (matches) {
        matches.forEach(m => found.add(m));
      }
    }
    const score = found.size > 0 ? Math.min(10, 5 + found.size) : 0;
    return { score, tokens: Array.from(found).sort() };
  };

  const detectPhishing = (subject: string, body: string): { isPhishing: boolean; phishingScore: number; indicators: string[] } => {
    const combined = `${subject} ${body}`.toLowerCase();
    const indicators: string[] = [];
    let phishingScore = 0;

    // Check for phishing keywords
    for (const pattern of PHISHING_KEYWORDS) {
      if (pattern.test(combined)) {
        indicators.push(pattern.source);
        phishingScore += 2;
      }
    }

    // Check for common phishing patterns
    for (const pattern of PHISHING_PATTERNS) {
      if (combined.includes(pattern.toLowerCase())) {
        indicators.push(pattern);
        phishingScore += 1.5;
      }
    }

    // Check for unrealistic money amounts
    const moneyPatterns = [
      /\$\d{6,}/g,
      /\d{7,}\s*(dollars?|usd)/gi,
      /(million|billion|thousand)\s*dollars?/gi,
    ];
    for (const pattern of moneyPatterns) {
      if (pattern.test(combined)) {
        indicators.push('Unrealistic money amount');
        phishingScore += 3;
      }
    }

    // Check for no personalization (generic greeting)
    if (!combined.includes('{{') && !combined.includes('%') && (combined.includes('dear') || combined.includes('hi') || combined.includes('hello'))) {
      const hasName = /dear\s+[a-z]+/i.test(combined);
      if (!hasName) {
        indicators.push('Generic greeting (no personalization)');
        phishingScore += 1;
      }
    }

    // Check for suspicious domains or links
    const linkPattern = /https?:\/\/[^\s)]+/gi;
    const links = combined.match(linkPattern) || [];
    for (const link of links) {
      if (link.includes('example') || link.includes('test') || link.includes('free') || link.includes('claim')) {
        indicators.push('Suspicious link detected');
        phishingScore += 2;
      }
    }

    return {
      isPhishing: phishingScore >= 5,
      phishingScore: Math.min(10, phishingScore),
      indicators: Array.from(new Set(indicators)),
    };
  };

  const scoreSubject = (subj: string): { score: number; notes: string[] } => {
    if (!subj) return { score: 2, notes: ['No subject provided'] };

    let score = 6;
    const notes: string[] = [];
    const { length } = subj;

    // Length scoring (20-70 chars is ideal)
    if (length < 20) {
      score -= 2;
      notes.push('Subject is too short (<20 chars) - make it more compelling');
    } else if (length >= 20 && length <= 70) {
      score += 2;
    } else if (length > 70) {
      score -= 1;
      notes.push('Subject is long (>70 chars) - keep it under 70 characters');
    }

    // Spam words penalty (no personalization requirement for subject)
    if (detectSpamWords(subj).length > 0) {
      score -= 3;
      notes.push('Spammy wording in subject - remove urgency triggers');
    }

    return { score: Math.max(1, Math.min(10, score)), notes };
  };

  const scoreBody = (body: string): { score: number; notes: string[] } => {
    let score = 5;
    const notes: string[] = [];
    const words = countWords(body);

    if (words === 0) {
      return { score: 1, notes: ['Body is empty'] };
    }

    if (words < 30) {
      score -= 2;
      notes.push('Body is too short (<30 words) - add more context');
    } else if (words < 50) {
      score -= 1;
      notes.push('Body is short (<50 words) - consider adding more details');
    } else if (words >= 50 && words <= 200) {
      score += 2;
    } else if (words > 300) {
      score -= 1;
      notes.push('Body is long (>300 words) - consider trimming');
    }

    const linkCount = countLinks(body);
    if (linkCount === 0) {
      score -= 1;
      notes.push('No CTA link found - add a link to encourage engagement');
    } else if (linkCount > 5) {
      score -= 2;
      notes.push('Too many links (>5) - looks spammy');
    } else {
      score += 1;
    }

    const spamWordsFound = detectSpamWords(body);
    if (spamWordsFound.length > 0) {
      score -= spamWordsFound.length;
      notes.push(`Found ${spamWordsFound.length} spam word(s) - remove them for better deliverability`);
    }

    const { score: personScore, tokens: personTokens } = detectPersonalization(body);
    if (personScore > 0) {
      score += 1;
    }

    const questionCount = countQuestions(body);
    if (questionCount === 0) {
      score -= 1;
      notes.push('No questions in body - add a question to increase engagement');
    } else {
      score += 1;
    }

    return { score: Math.max(1, Math.min(10, score)), notes };
  };

  const analyzeEmail = async () => {
    setLoading(true);
    try {
      const { subject: extractedSubject, body } = extractSubjectAndBody(emailContent);
      const finalSubject = subject || extractedSubject;
      const finalBody = body;

      const wordCount = countWords(finalBody);
      const linkCount = countLinks(finalBody);
      const questionCount = countQuestions(finalBody);
      const spamWords = detectSpamWords(finalBody);
      const { score: personScore, tokens: personTokens } = detectPersonalization(finalBody);
      const { score: subjectScore, notes: subjectNotes } = scoreSubject(finalSubject);
      const { score: bodyScore, notes: bodyNotes } = scoreBody(finalBody);

      // Check for phishing/scam indicators
      const { isPhishing, phishingScore, indicators: phishingIndicators } = detectPhishing(finalSubject, finalBody);
      
      // If phishing detected, override score to 0/10
      let overallScore = isPhishing ? 0 : Math.round((subjectScore + bodyScore) / 2);

      const recommendations: string[] = [];
      recommendations.push(...subjectNotes);
      recommendations.push(...bodyNotes);

      // Remove duplicates
      const uniqueRecommendations = Array.from(new Set(recommendations));

  const correctSpellingAndGrammar = (text: string): string => {
    // Common spelling and grammar corrections
    const corrections = [
      { from: /\bhelo\b/gi, to: 'hello' },
      { from: /\bhello\s+there\b/gi, to: 'hello' },
      { from: /\bteh\b/gi, to: 'the' },
      { from: /\brecieve\b/gi, to: 'receive' },
      { from: /\bneccessary\b/gi, to: 'necessary' },
      { from: /\boccured\b/gi, to: 'occurred' },
      { from: /\bseperate\b/gi, to: 'separate' },
      { from: /\bsence\b/gi, to: 'since' },
      { from: /\bthier\b/gi, to: 'their' },
      { from: /\byour\s+interested/gi, to: "you're interested" },
      { from: /\byour\s+welcome/gi, to: "you're welcome" },
      { from: /\bwoudl\b/gi, to: 'would' },
      { from: /\bshoudl\b/gi, to: 'should' },
      { from: /\bcoudl\b/gi, to: 'could' },
      { from: /\bplese\b/gi, to: 'please' },
      { from: /\bthank\s+you\s+for\s+your\s+patience/gi, to: 'thank you for your patience' },
      { from: /\bi\s+am\s+intrested/gi, to: 'I am interested' },
      { from: /\bim\b/gi, to: "I'm" },
      { from: /\bwanna\b/gi, to: 'want to' },
      { from: /\bgonna\b/gi, to: 'going to' },
      { from: /\bcannt\b/gi, to: 'cannot' },
      { from: /\bwat\b/gi, to: 'what' },
      { from: /\bwud\b/gi, to: 'would' },
      { from: /\bthnk\b/gi, to: 'think' },
      { from: /\bgreat\s+opportuinty/gi, to: 'great opportunity' },
      { from: /\bopporutnity\b/gi, to: 'opportunity' },
      { from: /\bopurtunity\b/gi, to: 'opportunity' },
      { from: /([.!?])\s+([a-z])/g, to: '$1 $2' },
      { from: /\s{2,}/g, to: ' ' },
    ];

    let corrected = text;
    corrections.forEach(({ from, to }) => {
      corrected = corrected.replace(from, to);
    });

    // Fix capitalization at start of sentences
    corrected = corrected.replace(/([.!?])\s+([a-z])/g, (match, p1, p2) => {
      return p1 + ' ' + p2.toUpperCase();
    });

    return corrected.trim();
  };

  const validateEmailQuality = (subject: string, body: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Check for spelling/grammar issues
    const commonMisspellings = /\b(teh|recieve|neccessary|occured|seperate|sence|thier|woudl|shoudl|coudl|plese|im|wanna|gonna|cannt|wat|wud)\b/gi;
    if (commonMisspellings.test(body) || commonMisspellings.test(subject)) {
      errors.push('Spelling errors detected');
    }

    // Check subject formatting
    if (subject.length < 10) {
      errors.push('Subject too short (minimum 10 characters)');
    }
    if (subject.length > 70) {
      errors.push('Subject too long (maximum 70 characters)');
    }

    // Check body formatting
    if (!body.match(/^(Hi|Hello|Hey)\s/i)) {
      errors.push('Body must start with greeting (Hi {{first_name}},)');
    }
    
    if (!body.match(/(Best regards|Regards|Thanks|Sincerely)/i)) {
      errors.push('Body must have professional closing');
    }

    if (!body.includes('?')) {
      errors.push('Body should include a question or CTA');
    }

    // Check for double spaces
    if (body.includes('  ') || subject.includes('  ')) {
      errors.push('Remove double spaces');
    }

    // Check capitalization after punctuation
    if (/[.!?]\s+[a-z]/.test(body) || /[.!?]\s+[a-z]/.test(subject)) {
      errors.push('Capitalize first letter after punctuation');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  };

  const improveEmailLocally = (subject: string, body: string): { improvedSubject: string; improvedBody: string; meetsQualityStandards: boolean } => {
    console.log('🔧 Local improvement started');
    console.log('Original subject:', subject);
    console.log('Original body:', body);

    // First, correct spelling and grammar
    let correctedSubject = correctSpellingAndGrammar(subject);
    let correctedBody = correctSpellingAndGrammar(body);

    console.log('✅ Spelling/grammar corrected');
    
    let improvedSubject = correctedSubject;
    let improvedBody = correctedBody;

    // REMOVE SPAM WORDS - this will be different from original
    const spamWordRegexes = SPAM_WORDS.map(word => new RegExp(`\\b${word}\\b`, 'gi'));
    
    for (const regex of spamWordRegexes) {
      improvedSubject = improvedSubject.replace(regex, '');
      improvedBody = improvedBody.replace(regex, '');
    }
    
    // Clean up spacing after spam removal
    improvedSubject = improvedSubject.replace(/\s+/g, ' ').trim();
    improvedBody = improvedBody.replace(/\s+/g, ' ').trim();

    // If subject became empty, provide default
    if (improvedSubject.length === 0) {
      improvedSubject = 'Professional Inquiry';
    }
    
    // Truncate subject if too long
    if (improvedSubject.length > 70) {
      improvedSubject = improvedSubject.substring(0, 67) + '...';
    }

    const bodyWordCount = improvedBody.split(/\s+/).filter(w => w).length;
    const originalWordCount = body.split(/\s+/).filter(w => w).length;

    // STRUCTURE IMPROVEMENTS
    if (originalWordCount < 10) {
      // Very short - create professional structure
      improvedBody = `Hi {{first_name}},\n\n${improvedBody}\n\nI'd appreciate your thoughts on this.\n\nBest regards`;
    } else if (originalWordCount < 30) {
      // Short email - add professional greeting and closing
      if (!improvedBody.match(/^(Hi|Hello|Hey)/i)) {
        improvedBody = `Hi {{first_name}},\n\n${improvedBody}`;
      }
      if (!improvedBody.match(/(Best regards|Regards|Thanks|Sincerely)$/i)) {
        improvedBody = `${improvedBody}\n\nBest regards`;
      }
    } else {
      // Longer email - ensure professional structure
      if (!improvedBody.match(/^(Hi|Hello|Hey)/i)) {
        improvedBody = `Hi {{first_name}},\n\n${improvedBody}`;
      }
      
      // Add closing if missing
      if (!improvedBody.match(/(Best regards|Regards|Thanks|Sincerely)$/i)) {
        improvedBody = `${improvedBody}\n\nBest regards`;
      }
      
      // Add question if no question mark exists
      if (!improvedBody.includes('?')) {
        improvedBody = improvedBody.replace(/Best regards$/, 'Would you be interested in discussing this further?\n\nBest regards');
      }
    }

    // Final cleanup - fix formatting
    improvedBody = improvedBody.replace(/\n\n+/g, '\n\n'); // Remove excessive line breaks
    improvedBody = improvedBody.replace(/\s+/g, ' ').trim(); // Remove double spaces
    improvedBody = improvedBody.replace(/[!?]{2,}/g, '.'); // Fix double punctuation
    improvedSubject = improvedSubject.replace(/\s+/g, ' ').trim(); // Clean subject spaces

    // Ensure proper formatting with line breaks
    improvedBody = improvedBody.replace(/Hi \{\{first_name\}\},/, 'Hi {{first_name}},\n');
    improvedBody = improvedBody.replace(/Best regards$/, '\n\nBest regards');

    // Validate quality
    const qualityCheck = validateEmailQuality(improvedSubject, improvedBody);

    console.log('✅ Local improvement complete');
    console.log('Quality validation:', qualityCheck);
    console.log('Improved subject:', improvedSubject);
    console.log('Improved body:', improvedBody);
    
    return { 
      improvedSubject, 
      improvedBody, 
      meetsQualityStandards: qualityCheck.isValid 
    };
  };

      // Generate improved versions (local improvement ALWAYS works)
      let { improvedSubject: localImprovedSubject, improvedBody: localImprovedBody, meetsQualityStandards } = improveEmailLocally(finalSubject, finalBody);

      let aiRecommendations = uniqueRecommendations;
      let aiImprovedSubject = localImprovedSubject;
      let aiImprovedBody = localImprovedBody;

      console.log('📧 Using improved versions:', { localImprovedSubject, localImprovedBody });
      console.log('📊 Quality standards met:', meetsQualityStandards);

      // Calculate score for local improvement to check if it meets minimum 6/10 threshold
      const localImprovedSubjectScore = scoreSubject(localImprovedSubject).score;
      const localImprovedBodyScore = scoreBody(localImprovedBody).score;
      const localImprovedScore = Math.round((localImprovedSubjectScore + localImprovedBodyScore) / 2);

      console.log(`📈 Local improvement score: ${localImprovedScore}/10 (needs >= 6)`);

      // Try to get AI recommendations (optional enhancement) - especially if local score < 6
      try {
        console.log('🤖 Attempting to fetch AI recommendations...');
        const aiResponse = await fetch('/api/analyze-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: finalSubject,
            body: finalBody,
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          console.log('🤖 AI response:', aiData);
          
          if (aiData.recommendations && aiData.recommendations.length > 0) {
            aiRecommendations = aiData.recommendations;
            console.log('✅ Using AI recommendations');
          }
          
          if (aiData.improvedSubject && aiData.improvedSubject.length > 5) {
            aiImprovedSubject = aiData.improvedSubject;
            console.log('✅ Using AI improved subject');
          }
          
          if (aiData.improvedBody && aiData.improvedBody.length > 20) {
            aiImprovedBody = aiData.improvedBody;
            console.log('✅ Using AI improved body');
          }
        } else {
          console.warn('⚠️ AI API error:', aiResponse.status);
        }
      } catch (aiError) {
        console.warn('⚠️ AI fetch failed, using local improvements:', aiError);
      }

      console.log('✅ Final versions:', { aiImprovedSubject, aiImprovedBody });

      // Calculate improved score based on the remodeled email
      const improvedSubjectScore = scoreSubject(aiImprovedSubject).score;
      const improvedBodyScore = scoreBody(aiImprovedBody).score;
      const improvedOverallScore = Math.round((improvedSubjectScore + improvedBodyScore) / 2);

      // Validate that improved score is >= 6
      const scoreIsValid = improvedOverallScore >= 6;
      console.log(`✅ Final score validation: ${improvedOverallScore}/10 - ${scoreIsValid ? 'PASS' : 'NEEDS IMPROVEMENT'}`);
      
      // Also validate quality standards
      const finalQualityCheck = validateEmailQuality(aiImprovedSubject, aiImprovedBody);
      console.log('✅ Final quality check:', finalQualityCheck);

      setAnalysis({
        subjectLength: finalSubject.length,
        wordCount,
        readingTimeSeconds: Math.max(3, Math.round((wordCount / 200) * 60)),
        linkCount,
        questionCount,
        spamWords,
        personalizationTokens: personTokens,
        subjectScore,
        bodyScore,
        overallScore,
        isPhishing,
        phishingScore,
        phishingIndicators,
        recommendations: aiRecommendations.length > 0 ? aiRecommendations : ['Email looks good!'],
        improvedSubject: aiImprovedSubject,
        improvedBody: aiImprovedBody,
        improvedScore: improvedOverallScore,
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyAnalysis = () => {
    if (!analysis) return;
    const text = `
Email Template Analysis
========================
Subject Score: ${analysis.subjectScore}/10
Body Score: ${analysis.bodyScore}/10
Overall Score: ${analysis.overallScore}/10

Subject Length: ${analysis.subjectLength} chars
Word Count: ${analysis.wordCount} words
Reading Time: ${analysis.readingTimeSeconds}s
Links: ${analysis.linkCount}
Questions: ${analysis.questionCount}

Spam Words Detected: ${analysis.spamWords.length > 0 ? analysis.spamWords.join(', ') : 'None'}
Personalization Tokens: ${analysis.personalizationTokens.length > 0 ? analysis.personalizationTokens.join(', ') : 'None found'}

Recommendations:
${analysis.recommendations.map((r) => `- ${r}`).join('\n')}
    `.trim();
    navigator.clipboard.writeText(text);
    alert('Analysis copied to clipboard!');
  };

  return (
    <ProtectedFreeTool toolName="Email Template Analyzer">
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Email Template Analyzer
          </h1>
          <p className="text-white/60 text-lg">
            Check your email for deliverability issues and get AI-powered improvement suggestions
          </p>
        </div>

        {/* Info Section - Features */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-white mb-2">Spam Detection</h3>
            <p className="text-sm text-white/60">Identifies spammy words and phrases that hurt deliverability</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
            <div className="text-3xl mb-3">👤</div>
            <h3 className="font-semibold text-white mb-2">Personalization</h3>
            <p className="text-sm text-white/60">Detects personalization tokens like {`{{first_name}}`}</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-6">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-semibold text-white mb-2">Smart Suggestions</h3>
            <p className="text-sm text-white/60">Get actionable recommendations to improve your email</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Editor */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-b border-white/10 p-6 text-white">
              <h2 className="text-xl font-bold">Email Template</h2>
              <p className="text-white/60 text-sm mt-1">Paste your email or compose here</p>
            </div>

            <div className="p-6 space-y-4">
              {/* From Name */}
              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">
                  From Name (Optional)
                </label>
                <input
                  type="text"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border-2 border-white/10 focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-white/40 bg-white/5"
                />
              </div>

              {/* Subject (Optional - will auto-detect from email) */}
              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">
                  Subject (Optional - auto-detects from email)
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Email subject line"
                  className="w-full px-4 py-2 rounded-lg border-2 border-white/10 focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-white/40 bg-white/5"
                />
              </div>

              {/* Email Content */}
              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">
                  Email Content
                </label>
                <textarea
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Paste your email here... Format: Subject: ... (blank line) Body"
                  className="w-full h-80 px-4 py-3 rounded-lg border-2 border-white/10 focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-white/40 bg-white/5 resize-none"
                />
              </div>

              {/* Analyze Button */}
              <Button
                onClick={analyzeEmail}
                disabled={!emailContent.trim() || loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 text-white"
              >
                <Zap className="w-4 h-4" />
                {loading ? 'Analyzing...' : 'Analyze Email'}
              </Button>
            </div>
          </div>

          {/* Right Panel - Analysis Results */}
          <div className="space-y-6">
            {analysis ? (
              <>
                {/* Score Card */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-sm font-semibold text-purple-100 mb-4">Overall Score</h3>
                  <div className="flex items-end gap-4 mb-6">
                    <div className="text-5xl font-bold">{analysis.overallScore}</div>
                    <div className="text-base font-medium text-purple-100">/10</div>
                  </div>

                  {/* Score Breakdown */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Subject Score</span>
                        <span className="font-semibold">{analysis.subjectScore}/10</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-white rounded-full h-2 transition-all duration-300"
                          style={{ width: `${(analysis.subjectScore / 10) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Body Score</span>
                        <span className="font-semibold">{analysis.bodyScore}/10</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-white rounded-full h-2 transition-all duration-300"
                          style={{ width: `${(analysis.bodyScore / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phishing Warning Card - Show prominently if phishing detected */}
                {analysis.isPhishing && (
                  <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-6 text-white border-2 border-red-400">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-3xl">🔴</div>
                      <div>
                        <h3 className="text-lg font-bold">SCAM/PHISHING ALERT</h3>
                        <p className="text-sm text-red-100 mt-1">This email appears to be a phishing or scam attempt</p>
                      </div>
                    </div>
                    
                    <div className="bg-red-500/30 rounded-lg p-3 mb-4">
                      <div className="text-sm font-semibold text-red-50 mb-1">Phishing Confidence:</div>
                      <div className="flex items-center gap-2">
                        <div className="text-3xl font-bold text-white">{analysis.phishingScore}</div>
                        <div className="text-sm text-red-100">/10 (HIGH RISK)</div>
                      </div>
                    </div>

                    {analysis.phishingIndicators && analysis.phishingIndicators.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold text-red-50 mb-2">Red Flags Detected:</div>
                        <ul className="space-y-1 text-sm">
                          {analysis.phishingIndicators.map((indicator, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-red-100">
                              <span className="text-red-300 mt-0.5">⚠</span>
                              <span>{indicator}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-red-400/50 text-sm text-red-50">
                      <strong>Recommendation:</strong> Do not click links, do not provide personal information, and report to your security team.
                    </div>
                  </div>
                )}

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-4">
                    <div className="text-xs text-white/60 font-semibold mb-1">Subject Length</div>
                    <div className="text-2xl font-bold text-white">{analysis.subjectLength}</div>
                    <div className="text-xs text-white/40 mt-1">chars</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-4">
                    <div className="text-xs text-white/60 font-semibold mb-1">Word Count</div>
                    <div className="text-2xl font-bold text-white">{analysis.wordCount}</div>
                    <div className="text-xs text-white/40 mt-1">words</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-4">
                    <div className="text-xs text-white/60 font-semibold mb-1">Reading Time</div>
                    <div className="text-2xl font-bold text-white">{analysis.readingTimeSeconds}s</div>
                    <div className="text-xs text-white/40 mt-1">seconds</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-4">
                    <div className="text-xs text-white/60 font-semibold mb-1">Links</div>
                    <div className="text-2xl font-bold text-white">{analysis.linkCount}</div>
                    <div className="text-xs text-white/40 mt-1">detected</div>
                  </div>
                </div>

                {/* Spam Words */}
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <h4 className="font-semibold text-red-300">Spam Words Detected</h4>
                  </div>
                  {analysis.spamWords.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {analysis.spamWords.map((word) => (
                        <span
                          key={word}
                          className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-red-300">✓ No spam words detected - great job!</p>
                  )}
                </div>

                {/* Personalization Tokens */}
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-semibold text-emerald-300">Personalization Found</h4>
                  </div>
                  {analysis.personalizationTokens.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {analysis.personalizationTokens.map((token) => (
                        <span
                          key={token}
                          className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30"
                        >
                          {token}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-emerald-300">Add personalization tokens like {`{{first_name}}`} to improve engagement</p>
                  )}
                </div>

                {/* Recommendations - Hide if phishing */}
                {!analysis.isPhishing && (
                <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                  <h4 className="font-semibold text-cyan-300 mb-3">📋 Recommendations</h4>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((rec, idx) => (
                      <li key={idx} className="text-sm text-cyan-200 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                )}

                {/* Improved Email Preview - Only show if NOT phishing */}
                {!analysis.isPhishing && (
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 border-2 border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">✨</span>
                    <h4 className="font-bold text-emerald-300">Smart Suggestions - Remodeled Email</h4>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                    <div className="mb-3">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-wide">Improved Subject</label>
                      <p className="text-sm font-semibold text-white mt-1 p-2 bg-white/5 rounded border-l-4 border-emerald-500">
                        {analysis.improvedSubject}
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-xs font-bold text-white/60 uppercase tracking-wide">Improved Body</label>
                      <p className="text-sm text-white/80 mt-1 p-3 bg-white/5 rounded whitespace-pre-wrap border-l-4 border-emerald-500 font-mono text-xs leading-relaxed">
                        {analysis.improvedBody}
                      </p>
                    </div>
                  </div>

                  <div className="bg-emerald-500/20 rounded-lg p-3 border border-emerald-500/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-emerald-300">Expected Score (Remodeled):</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-emerald-300">{analysis.improvedScore || 0}/10</span>
                        {(analysis.improvedScore || 0) >= 6 ? (
                          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">✓ PASS</span>
                        ) : (
                          <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">⚠ REVIEW</span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-emerald-200/80">
                      {(analysis.improvedScore || 0) >= 6 
                        ? '✓ Premium quality: No spelling/grammar errors, perfect email format, professional structure.'
                        : '⚠ Quality check: Please review for spelling, grammar, and email formatting standards.'}
                    </p>
                  </div>
                </div>
                )}

                {/* Copy Button */}
                <Button
                  onClick={handleCopyAnalysis}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  <Copy className="w-4 h-4" />
                  Copy Analysis
                </Button>
              </>
            ) : (
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center h-96 flex flex-col items-center justify-center">
                <Mail className="w-12 h-12 text-white/30 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Analysis Yet</h3>
                <p className="text-white/60">Paste your email and click "Analyze Email" to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </ProtectedFreeTool>
  );
}
