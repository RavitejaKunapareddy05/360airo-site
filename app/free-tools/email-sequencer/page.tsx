'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Copy, Download } from 'lucide-react';

interface EmailStep {
  id: string;
  name: string;
  subject: string;
  body: string;
  delayDays?: number;
}

const MOODS = [
  { id: 'friendly', label: 'Friendly', icon: '😊', color: 'from-blue-400 to-blue-600' },
  { id: 'professional', label: 'Professional', icon: '💼', color: 'from-slate-400 to-slate-600' },
  { id: 'humorous', label: 'Humorous', icon: '😄', color: 'from-yellow-400 to-orange-600' },
  { id: 'bold', label: 'Bold', icon: '⚡', color: 'from-red-400 to-red-600' },
];

const CREATIVE_LEVELS = ['Low', 'Medium', 'High'];

export default function EmailSequencerPage() {
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState('');
  const [creativeLevel, setCreativeLevel] = useState('');
  const [keywords, setKeywords] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sequences, setSequences] = useState<EmailStep[]>([]);
  const [showResults, setShowResults] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = () => {
    if (step === 1 && !mood) {
      setError('Please select a mood');
      return;
    }
    if (step === 2 && !creativeLevel) {
      setError('Please select a creative level');
      return;
    }
    if (step === 3 && !keywords) {
      setError('Please enter keywords');
      return;
    }
    if (step === 4) {
      if (!emailAddress) {
        setError('Please enter an email address');
        return;
      }
      if (!validateEmail(emailAddress)) {
        setError('Please enter a valid email address');
        return;
      }
    }
    setError('');
    setStep(step + 1);
  };

  const generateMockSequence = (): EmailStep[] => {
    const moodTemplates: { [key: string]: { subjects: string[]; bodies: string[] } } = {
      friendly: {
        subjects: [
          `Hey! Quick question about your ${keywords}`,
          `I think we can help with ${keywords}`,
          `Would love to chat about ${keywords}`,
          `Following up on ${keywords}`,
          `One more thing about ${keywords}`,
        ],
        bodies: [
          `Hi there!\n\nI came across your profile and saw you work in ${keywords}. I think we could be a great fit for each other.\n\nWould you be open to a quick chat?\n\nBest`,
          `Hey!\n\nJust wanted to reach out about something I think you'd find valuable. We've had great success helping companies like yours with ${keywords}.\n\nFree to chat this week?\n\nCheers`,
          `Hi,\n\nSaw your recent activity and thought of you. Since you're into ${keywords}, you might appreciate what we're building.\n\nLet me know your thoughts!\n\nTalk soon`,
          `Hey again!\n\nDidn't hear back last time, but I'm still excited about the potential here. Would really love to connect about ${keywords}.\n\nFree for a call?\n\nThanks`,
          `Final thought!\n\nI genuinely believe our solution could transform how you handle ${keywords}. Would hate to miss the opportunity to chat.\n\nOpen to a quick conversation?\n\nBest`,
        ],
      },
      professional: {
        subjects: [
          `Opportunity: ${keywords} Solutions`,
          `Partnership proposal for your ${keywords} needs`,
          `Strategic collaboration regarding ${keywords}`,
          `Re: ${keywords} Partnership Discussion`,
          `Final thoughts on our ${keywords} collaboration`,
        ],
        bodies: [
          `Dear Hiring Manager,\n\nI am reaching out regarding our premium ${keywords} solutions. We have successfully served organizations in your sector and believe we could add significant value to your operations.\n\nI would welcome the opportunity to discuss how we can support your objectives.\n\nBest regards`,
          `Hello,\n\nThank you for considering our outreach. Our proven expertise in ${keywords} has delivered measurable results for clients in your industry.\n\nI would appreciate the opportunity to schedule a brief consultation at your earliest convenience.\n\nRespectfully`,
          `Dear Prospect,\n\nFollowing up on our initial engagement regarding ${keywords}. We have refined solutions specifically designed for organizations like yours.\n\nWould you be available for a 15-minute call this week?\n\nBest`,
          `Hello,\n\nAs promised, I wanted to provide additional information about our ${keywords} capabilities. Our track record speaks for itself.\n\nShall we find a time to discuss further?\n\nThank you`,
          `Dear [Name],\n\nI wanted to make one final attempt to schedule a conversation about how our ${keywords} solutions could benefit your organization.\n\nPlease let me know your availability.\n\nBest regards`,
        ],
      },
      humorous: {
        subjects: [
          `Plot twist: We can help with ${keywords} 🎬`,
          `No spambot detected (just a real human about ${keywords})`,
          `Fair warning: ${keywords} chat incoming ☕`,
          `Nudge nudge: Still interested in ${keywords}?`,
          `Last call: ${keywords} special edition`,
        ],
        bodies: [
          `Hey! 👋\n\nSo I'm not a robot (I promise), but I am genuinely excited about ${keywords}. Think we could grab a coffee and chat?\n\nNo pressure, just vibes! 😊\n\nCheers`,
          `Real talk: I'm reaching out because I think you'd love what we do with ${keywords}.\n\nProbably the most important email in your inbox today... or maybe not. Either way, let's chat!\n\nCheers`,
          `Plot twist incoming! 🎬\n\nYour approach to ${keywords} is cool, but have you considered ours? Pretty sure we can add some serious value here.\n\nCoffee call?\n\nLet's go!`,
          `Quick reminder: We're still here to help with ${keywords}! 👋\n\nSeriously though, we have some killer ideas for you. Let's talk!\n\nHop on a call?`,
          `Alright, last push! 🚀\n\nWe genuinely think our ${keywords} solution could transform your game. Would hate to not at least try.\n\nIn for a chat?\n\nThanks!`,
        ],
      },
      bold: {
        subjects: [
          `${keywords}: Your Secret Weapon Awaits`,
          `STOP! We Can Revolutionize Your ${keywords}`,
          `${keywords} Game-Changer Alert 🚀`,
          `Why Your ${keywords} Strategy Needs Us NOW`,
          `One More Reason to Choose Our ${keywords} Solution`,
        ],
        bodies: [
          `Listen up!\n\nYour competition is probably already using modern ${keywords} solutions. Let's make sure you're not left behind.\n\nWe've built something special. Let's talk!\n\n- Team`,
          `Here's the deal:\n\nWe know ${keywords} inside out. We've helped dozens of companies like yours crush their goals.\n\nYou'd be making a mistake NOT to hear what we have to say.\n\nLet's schedule a call. Now.\n\n- Team`,
          `Wake up call! 📢\n\nYour ${keywords} approach is good, but it's missing one thing: OUR solution.\n\nWe don't do mediocre. We do exceptional results.\n\nReady to dominate?\n\n- Team`,
          `Still waiting... ⏰\n\nWe don't usually follow up this hard, but ${keywords} is too important to let slide.\n\nLet's get this done.\n\n- Team`,
          `FINAL NOTICE: 🚨\n\nWe're the ${keywords} partner you should have been talking to from day one.\n\nLet's not waste another day. Call time?\n\n- Team`,
        ],
      },
    };

    const templates = moodTemplates[mood] || moodTemplates.friendly;
    const sequence: EmailStep[] = [];

    for (let i = 0; i < 5; i++) {
      sequence.push({
        id: `email-${i + 1}`,
        name: `Email ${i + 1}`,
        subject: templates.subjects[i],
        body: templates.bodies[i],
        delayDays: i * 2,
      });
    }

    return sequence;
  };

  const handleGenerateSequence = async () => {
    setLoading(true);
    setError('');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const generatedSequence = generateMockSequence();
      setSequences(generatedSequence);
      setShowResults(true);
      setStep(1);
      // Reset form
      setMood('');
      setCreativeLevel('');
      setKeywords('');
      setEmailAddress('');
    } catch (err) {
      setError('Failed to generate sequence. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setSequences([]);
    setStep(1);
    setMood('');
    setCreativeLevel('');
    setKeywords('');
    setEmailAddress('');
    setError('');
  };

  const handleCopyEmail = (index: number) => {
    const email = sequences[index];
    const text = `Subject: ${email.subject}\n\n${email.body}`;
    navigator.clipboard.writeText(text);
    alert('Email copied to clipboard!');
  };

  const handleDownloadSequence = () => {
    let csvContent = 'Email #,Subject,Body,Delay (Days)\n';
    sequences.forEach((email, index) => {
      const subject = email.subject.replace(/"/g, '""');
      const body = email.body.replace(/"/g, '""').replace(/\n/g, ' ');
      csvContent += `${index + 1},"${subject}","${body}",${email.delayDays || 0}\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    element.setAttribute('download', `email-sequence-${Date.now()}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Email Sequence
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              {sequences.length} emails ready to send • Mood: <span className="font-semibold capitalize">{mood}</span>
            </p>
          </div>

          {/* Sequence Cards */}
          <div className="space-y-6 mb-8">
            {sequences.map((email, index) => (
              <div
                key={email.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Email {index + 1}</h3>
                    <p className="text-purple-100 text-sm">
                      Send after {email.delayDays} days
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">Day {email.delayDays}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <p className="p-3 bg-gray-50 rounded-lg text-gray-900 border border-gray-200">
                      {email.subject}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Body
                    </label>
                    <p className="p-4 bg-gray-50 rounded-lg text-gray-900 border border-gray-200 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                      {email.body}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleCopyEmail(index)}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 hover:bg-purple-50"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleDownloadSequence}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download Sequence (CSV)
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1"
            >
              Create New Sequence
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Email Sequence Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Create personalized, AI-powered email sequences in minutes
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Progress Bar */}
          <div className="h-1 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="p-8">
            {/* Step Counter */}
            <div className="text-sm font-semibold text-purple-600 mb-4">
              Step {step} of 5
            </div>

            {/* Step 1: Select Mood */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Mood</h2>
                  <p className="text-gray-600">
                    Choose the tone for your email sequence
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {MOODS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMood(m.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                        mood === m.id
                          ? `border-purple-500 bg-gradient-to-br ${m.color} text-white shadow-lg`
                          : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-4xl mb-3">{m.icon}</div>
                      <div className="font-semibold">{m.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Creative Level */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Creative Level</h2>
                  <p className="text-gray-600">
                    How creative should the emails be?
                  </p>
                </div>

                <div className="space-y-3">
                  {CREATIVE_LEVELS.map((level) => (
                    <button
                      key={level}
                      onClick={() => setCreativeLevel(level)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        creativeLevel === level
                          ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{level}</div>
                      <span className="block text-sm text-gray-500 mt-1">
                        {level === 'Low' && 'Stick to facts and professional tone'}
                        {level === 'Medium' && 'Balanced between formal and casual'}
                        {level === 'High' && 'Creative, bold, and attention-grabbing'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Keywords */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Keywords & Topics</h2>
                  <p className="text-gray-600">
                    What are you selling or what industry are you in?
                  </p>
                </div>

                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g., SaaS, lead generation, B2B sales..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 bg-white"
                />

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">💡 Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                    <li>Cloud storage solutions for teams</li>
                    <li>E-commerce fulfillment services</li>
                    <li>B2B SaaS, lead generation</li>
                    <li>Digital marketing agency services</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 4: Email Address */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Address</h2>
                  <p className="text-gray-600">
                    Where should replies be sent?
                  </p>
                </div>

                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400 bg-white"
                />
              </div>
            )}

            {/* Step 5: Review & Generate */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Generate</h2>
                  <p className="text-gray-600 mb-6">Review your sequence settings</p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <div className="text-sm text-gray-600 font-medium">Email Mood</div>
                    <div className="font-semibold text-gray-900 capitalize">{mood}</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                    <div className="text-sm text-gray-600 font-medium">Creative Level</div>
                    <div className="font-semibold text-gray-900">{creativeLevel}</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <div className="text-sm text-gray-600 font-medium">Keywords & Topics</div>
                    <div className="font-semibold text-gray-900">{keywords}</div>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-xl border-l-4 border-pink-500">
                    <div className="text-sm text-gray-600 font-medium">Email Address</div>
                    <div className="font-semibold text-gray-900 break-all">{emailAddress}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <Button
                onClick={() => setStep(Math.max(1, step - 1))}
                variant="outline"
                className="flex-1"
                disabled={step === 1}
              >
                Back
              </Button>
              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleGenerateSequence}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? '⚙️ Generating...' : '✨ Generate Sequence'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
