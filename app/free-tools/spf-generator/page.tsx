'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, Zap } from 'lucide-react';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

export default function SPFGeneratorPage() {
  const [domain, setDomain] = useState('');
  const [includes, setIncludes] = useState('');
  const [ips, setIps] = useState('');
  const [spfRecord, setSpfRecord] = useState('');
  const [copied, setCopied] = useState(false);

  const commonIncudes = {
    'Google Workspace': 'include:_spf.google.com',
    'Microsoft 365': 'include:spf.protection.outlook.com',
    'SendGrid': 'include:sendgrid.net',
    'Mailgun': 'include:mailgun.org',
    'Salesforce': 'include:sales.salesforce.com',
    'HubSpot': 'include:hubspot.com'
  };

  const handleIncludeAdd = (service: string) => {
    const value = commonIncudes[service as keyof typeof commonIncudes];
    setIncludes((prev) => (prev ? prev + ' ' : '') + value);
  };

  const generateSPF = () => {
    if (!domain) {
      alert('Please enter your domain');
      return;
    }

    let record = 'v=spf1';
    
    if (includes) {
      record += ' ' + includes;
    }
    
    if (ips) {
      ips.split('\n').forEach((ip) => {
        const trimmed = ip.trim();
        if (trimmed) {
          record += ` ip4:${trimmed}`;
        }
      });
    }

    record += ' ~all';
    setSpfRecord(record);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(spfRecord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadRecord = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(spfRecord));
    element.setAttribute('download', `spf-record-${domain}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <ProtectedFreeTool toolName="SPF Generator">
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent mb-4">
            SPF Record Generator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Create SPF records to authenticate your emails and prevent spoofing.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">Your Domain</label>
              <input type="text" placeholder="example.com" value={domain} onChange={(e) => setDomain(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30" />
            </div>

            <div>
              <label className="block text-white font-semibold mb-4">Email Service Providers</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.keys(commonIncudes).map((service) => (
                  <Button key={service} onClick={() => handleIncludeAdd(service)} className="bg-white/10 hover:bg-white/20 text-white text-sm">
                    + {service}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Manual Includes</label>
              <textarea placeholder="include:example.com&#10;include:mail.example.org" value={includes} onChange={(e) => setIncludes(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 min-h-24 font-mono text-sm" />
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">IP Addresses (one per line)</label>
              <textarea placeholder="203.0.113.45&#10;198.51.100.67" value={ips} onChange={(e) => setIps(e.target.value)} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 min-h-24 font-mono text-sm" />
            </div>

            <Button onClick={generateSPF} className="w-full bg-gradient-to-r from-yellow-500 to-orange-400 hover:shadow-lg text-white font-semibold">
              Generate SPF Record
            </Button>
          </div>
        </motion.div>

        {spfRecord && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Your SPF Record</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4 border border-white/10">
                <p className="text-white/80 break-all font-mono text-sm">{spfRecord}</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={copyToClipboard} className="flex-1 bg-white/10 hover:bg-white/20 text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button onClick={downloadRecord} className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-4">Installation Steps</h3>
              <ol className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-400">1.</span>
                  <span>Go to your domain's DNS settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-400">2.</span>
                  <span>Add a new TXT record for <code className="bg-black/30 px-2 py-1 rounded">@</code> or your domain root</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-400">3.</span>
                  <span>Paste the SPF record above as the value</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-400">4.</span>
                  <span>Save and wait for DNS propagation (5-48 hours)</span>
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
    </ProtectedFreeTool>
  );
}
