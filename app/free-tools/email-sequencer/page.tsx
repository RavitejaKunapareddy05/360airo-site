'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Copy, Download } from 'lucide-react';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

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
    // This is now handled by the API - see handleGenerateSequence
    return [];
  };

  const handleGenerateSequence = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/free-tools/email-sequencer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mood,
          creativeLevel,
          keywords,
          recipientEmail: emailAddress,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate sequence');
      }

      const data = await response.json();
      setSequences(data.emails || []);
      setShowResults(true);
      setStep(1);
      // Reset form
      setMood('');
      setCreativeLevel('');
      setKeywords('');
      setEmailAddress('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate sequence. Please try again.');
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
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Your Email Sequence
              </h1>
            </div>
            <p className="text-white/60 text-lg">
              {sequences.length} emails ready to send • Mood: <span className="font-semibold capitalize text-white">{mood}</span>
            </p>
          </div>

          {/* Sequence Cards */}
          <div className="space-y-6 mb-8">
            {sequences.map((email, index) => (
              <div
                key={email.id}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl hover:border-purple-500/30 transition overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-white/10 p-4 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Email {index + 1}</h3>
                    <p className="text-white/60 text-sm">
                      Send after {email.delayDays} days
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <span className="text-sm font-medium text-white">Day {email.delayDays}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-white/60 mb-2">
                      Subject
                    </label>
                    <p className="p-3 bg-white/5 rounded-lg text-white border border-white/10">
                      {email.subject}
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-white/60 mb-2">
                      Body
                    </label>
                    <p className="p-4 bg-white/5 rounded-lg text-white/80 border border-white/10 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                      {email.body}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleCopyEmail(index)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
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
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              <Download className="w-4 h-4" />
              Download Sequence (CSV)
            </Button>
            <Button
              onClick={handleReset}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl"
            >
              Create New Sequence
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProtectedFreeTool toolName="Email Sequencer">
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Email Sequence Generator
          </h1>
          <p className="text-white/60 text-lg">
            Create personalized, AI-powered email sequences in minutes
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>

          <div className="p-8">
            {/* Step Counter */}
            <div className="text-sm font-semibold text-purple-400 mb-4">
              Step {step} of 5
            </div>

            {/* Step 1: Select Mood */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Email Mood</h2>
                  <p className="text-white/60">
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
                          : 'border-white/10 bg-white/5 text-white hover:border-white/20'
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
                  <h2 className="text-2xl font-bold text-white mb-2">Creative Level</h2>
                  <p className="text-white/60">
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
                          ? 'border-purple-500 bg-purple-500/20 text-purple-300 shadow-md'
                          : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold">{level}</div>
                      <span className="block text-sm text-white/50 mt-1">
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
                  <h2 className="text-2xl font-bold text-white mb-2">Keywords & Topics</h2>
                  <p className="text-white/60">
                    What are you selling or what industry are you in?
                  </p>
                </div>

                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g., SaaS, lead generation, B2B sales..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/10 focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-white/40 bg-white/5"
                />

                <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/30">
                  <p className="text-sm font-semibold text-cyan-300 mb-2">💡 Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-cyan-200/80">
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
                  <h2 className="text-2xl font-bold text-white mb-2">Email Address</h2>
                  <p className="text-white/60">
                    Where should replies be sent?
                  </p>
                </div>

                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-white/10 focus:border-purple-500 focus:outline-none transition-colors text-white placeholder-white/40 bg-white/5"
                />
              </div>
            )}

            {/* Step 5: Review & Generate */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Ready to Generate</h2>
                  <p className="text-white/60 mb-6">Review your sequence settings</p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-blue-500/10 rounded-xl border-l-4 border-blue-500">
                    <div className="text-sm text-white/60 font-medium">Email Mood</div>
                    <div className="font-semibold text-white capitalize">{mood}</div>
                  </div>
                  <div className="p-4 bg-purple-500/10 rounded-xl border-l-4 border-purple-500">
                    <div className="text-sm text-white/60 font-medium">Creative Level</div>
                    <div className="font-semibold text-white">{creativeLevel}</div>
                  </div>
                  <div className="p-4 bg-emerald-500/10 rounded-xl border-l-4 border-emerald-500">
                    <div className="text-sm text-white/60 font-medium">Keywords & Topics</div>
                    <div className="font-semibold text-white">{keywords}</div>
                  </div>
                  <div className="p-4 bg-pink-500/10 rounded-xl border-l-4 border-pink-500">
                    <div className="text-sm text-white/60 font-medium">Email Address</div>
                    <div className="font-semibold text-white break-all">{emailAddress}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <Button
                onClick={() => setStep(Math.max(1, step - 1))}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                disabled={step === 1}
              >
                Back
              </Button>
              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleGenerateSequence}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white disabled:opacity-50"
                >
                  {loading ? '⚙️ Generating...' : '✨ Generate Sequence'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProtectedFreeTool>
  );
}
