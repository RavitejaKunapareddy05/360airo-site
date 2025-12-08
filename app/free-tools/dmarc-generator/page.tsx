'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, Shield } from 'lucide-react';

export default function DMARCGeneratorPage() {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [alignment, setAlignment] = useState('relaxed');
  const [percentage, setPercentage] = useState(100);
  const [policy, setPolicy] = useState('none');
  const [dmarcRecord, setDmarcRecord] = useState('');
  const [copied, setCopied] = useState(false);

  const generateDMARC = () => {
    if (!domain) {
      alert('Please enter your domain');
      return;
    }

    const record = `v=DMARC1; p=${policy}; rua=mailto:${email || 'admin@' + domain}; ruf=mailto:${email || 'admin@' + domain}; fo=1; adkim=${alignment}; aspf=${alignment}; pct=${percentage}`;
    setDmarcRecord(record);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dmarcRecord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadRecord = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dmarcRecord));
    element.setAttribute('download', `dmarc-record-${domain}.txt`);
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            DMARC Generator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Generate DMARC records to protect your domain and monitor email authentication.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">Your Domain</label>
              <input type="text" placeholder="example.com" value={domain} onChange={(e) => setDomain(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30" />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Report Email Address</label>
              <input type="email" placeholder="admin@example.com (optional)" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-3">Policy</label>
                <select value={policy} onChange={(e) => setPolicy(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white/90 focus:outline-none focus:border-blue-400 appearance-none cursor-pointer">
                  <option value="none" className="bg-[#1a0b2e] text-white">none - Monitor only</option>
                  <option value="quarantine" className="bg-[#1a0b2e] text-white">quarantine - Quarantine failures</option>
                  <option value="reject" className="bg-[#1a0b2e] text-white">reject - Reject failures</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Alignment</label>
                <select value={alignment} onChange={(e) => setAlignment(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white/90 focus:outline-none focus:border-blue-400 appearance-none cursor-pointer">
                  <option value="relaxed" className="bg-[#1a0b2e] text-white">relaxed - More lenient</option>
                  <option value="strict" className="bg-[#1a0b2e] text-white">strict - Strict alignment</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Policy Coverage: {percentage}%</label>
              <input type="range" min="1" max="100" value={percentage} onChange={(e) => setPercentage(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
              <p className="text-white/50 text-sm mt-2">Apply policy to this percentage of emails</p>
            </div>

            <Button onClick={generateDMARC} className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg text-white font-semibold">
              Generate DMARC Record
            </Button>
          </div>
        </motion.div>

        {dmarcRecord && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Your DMARC Record</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4 border border-white/10">
                <p className="text-white/80 break-all font-mono text-sm">{dmarcRecord}</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={copyToClipboard} className="flex-1 bg-white/10 hover:bg-white/20 text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button onClick={downloadRecord} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Installation Instructions</h3>
              <ol className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400">1.</span>
                  <span>Log into your domain's DNS provider</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400">2.</span>
                  <span>Create a new TXT record with name: <code className="bg-black/30 px-2 py-1 rounded">_dmarc.{domain || 'yourdomain.com'}</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400">3.</span>
                  <span>Copy the entire record above and paste it as the value</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-400">4.</span>
                  <span>Save and wait 24-48 hours for DNS propagation</span>
                </li>
              </ol>
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
