'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, XCircle, Clock, Download, Upload } from 'lucide-react';
import Link from 'next/link';

interface VerificationResult {
  email: string;
  status: 'valid' | 'invalid' | 'unknown';
  reason: string;
  verificationTime: number;
}

export default function EmailVerifierPage() {
  const [emails, setEmails] = useState('');
  const [results, setResults] = useState<VerificationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setError('');
    setResults([]);
    setProgress(0);

    const emailList = emails
      .split('\n')
      .map(e => e.trim())
      .filter(e => e.length > 0);

    if (emailList.length === 0) {
      setError('Please enter at least one email address');
      return;
    }

    if (emailList.length > 1000) {
      setError('Maximum 1000 emails at a time');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/free-tools/email-verifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails: emailList }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      setResults(data.results);
      setProgress(100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setEmails(text);
    };
    reader.readAsText(file);
  };

  const downloadResults = () => {
    const csv = [
      'Email,Status,Reason,Verification Time (ms)',
      ...results.map(r => `${r.email},${r.status},${r.reason},${r.verificationTime}`)
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-verification-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const validCount = results.filter(r => r.status === 'valid').length;
  const invalidCount = results.filter(r => r.status === 'invalid').length;
  const unknownCount = results.filter(r => r.status === 'unknown').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Email Verifier
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Verify email addresses in bulk and reduce bounce rates. Check deliverability with SMTP verification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Upload/Paste Options */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <label className="block text-white font-semibold mb-4">
                Enter Emails
              </label>
              
              <textarea
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Enter email addresses (one per line)&#10;example1@gmail.com&#10;example2@gmail.com"
                className="w-full h-48 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 resize-none"
              />

              <div className="flex gap-4 mt-6">
                <input
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="flex-1">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer" asChild>
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload CSV/TXT
                    </span>
                  </Button>
                </label>
                <Button
                  onClick={handleVerify}
                  disabled={loading || emails.trim().length === 0}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg text-white font-semibold"
                >
                  {loading ? 'Verifying...' : 'Verify Emails'}
                </Button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {error}
                </div>
              )}
            </div>

            {/* Progress */}
            {loading && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  <span className="text-white/70 text-sm">{progress}%</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white/70">Valid</span>
              </div>
              <div className="text-3xl font-bold text-green-400">{validCount}</div>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-white/70">Invalid</span>
              </div>
              <div className="text-3xl font-bold text-red-400">{invalidCount}</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-white/70">Unknown</span>
              </div>
              <div className="text-3xl font-bold text-yellow-400">{unknownCount}</div>
            </div>

            {results.length > 0 && (
              <Button
                onClick={downloadResults}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Results
              </Button>
            )}
          </motion.div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/70">Email</th>
                    <th className="text-left py-3 px-4 text-white/70">Status</th>
                    <th className="text-left py-3 px-4 text-white/70">Reason</th>
                    <th className="text-left py-3 px-4 text-white/70">Time (ms)</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-white">{result.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          result.status === 'valid' ? 'bg-green-500/20 text-green-400' :
                          result.status === 'invalid' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {result.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/70">{result.reason}</td>
                      <td className="py-3 px-4 text-white/70">{result.verificationTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-white/50 text-sm"
        >
          <p>Part of 360airo Free Tools</p>
          <Link href="/free-tools" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Free Tools
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
