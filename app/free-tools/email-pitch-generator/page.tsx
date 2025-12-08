'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, Sparkles } from 'lucide-react';

export default function EmailPitchGeneratorPage() {
  const [recipientName, setRecipientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [productService, setProductService] = useState('');
  const [uniqueValue, setUniqueValue] = useState('');
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generatePitch = async () => {
    if (!recipientName || !companyName || !productService || !uniqueValue) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulate API call - in production, this would call an AI service
    setTimeout(() => {
      const pitch = `Hi ${recipientName},

I came across ${companyName} and was impressed by your work in the space.

I thought you might find value in ${productService}. What makes us different is ${uniqueValue}.

We've helped similar companies increase their efficiency and save time on repetitive tasks.

Would you be open to a quick 15-minute call to see if this could be a fit for ${companyName}?

Best regards`;

      setGeneratedPitch(pitch);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPitch = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedPitch));
    element.setAttribute('download', 'email-pitch.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-pink-200 to-rose-200 bg-clip-text text-transparent mb-4">
            Email Pitch Generator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Generate compelling email pitches that convert prospects into customers.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">Recipient Name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Company Name</label>
              <input
                type="text"
                placeholder="Acme Corp"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Your Product/Service</label>
              <input
                type="text"
                placeholder="Email automation platform"
                value={productService}
                onChange={(e) => setProductService(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Your Unique Value Proposition</label>
              <textarea
                placeholder="What makes your solution unique?"
                value={uniqueValue}
                onChange={(e) => setUniqueValue(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 min-h-24"
              />
            </div>

            <Button
              onClick={generatePitch}
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:shadow-lg text-white font-semibold disabled:opacity-50"
            >
              {loading ? 'Generating...' : 'Generate Pitch'}
            </Button>
          </div>
        </motion.div>

        {generatedPitch && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Generated Pitch</h3>
              <div className="bg-black/30 rounded-lg p-6 mb-4 border border-white/10">
                <p className="text-white/80 whitespace-pre-wrap font-mono text-sm">{generatedPitch}</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={copyToClipboard} className="flex-1 bg-white/10 hover:bg-white/20 text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button onClick={downloadPitch} className="flex-1 bg-pink-500 hover:bg-pink-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Tips for Better Results</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Keep your value proposition specific and measurable</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Personalize further based on the recipient's role</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Test different variations to find what resonates</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Follow up 3-5 times for best results</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 text-center text-white/50 text-sm">
          <p>Part of 360airo Free Tools</p>
        </motion.div>
      </div>
    </div>
  );
}
