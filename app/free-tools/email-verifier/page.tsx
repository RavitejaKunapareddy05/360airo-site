'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, XCircle, Clock, Download, Upload, Eye, Copy, AlertCircle } from 'lucide-react';

interface VerificationResult {
  email: string;
  status: 'valid' | 'invalid' | 'unknown';
  reason: string;
  verificationTime: number;
  verificationMethod?: 'api' | 'dns';
}

export default function EmailVerifierPage() {
  const [emails, setEmails] = useState('');
  const [results, setResults] = useState<VerificationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleVerify = async () => {
    setError('');
    setResults([]);
    setProgress(0);
    setShowDetails(false);

    const emailList = [...new Set(emails
      .split('\n')
      .map(e => e.trim().toLowerCase()) // Normalize to lowercase
      .filter(e => e.length > 0))];

    if (emailList.length === 0) {
      setError('Please enter at least one email address');
      return;
    }

    if (emailList.length > 1000) {
      setError('Maximum 1000 emails at a time');
      return;
    }

    setLoading(true);
    setStartTime(new Date());

    try {
      const response = await fetch('/api/free-tools/email-verifier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          emails: emailList
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = errorText;
        let remaining = 0;
        
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorText;
          remaining = errorData.remaining !== undefined ? errorData.remaining : 0;
        } catch (e) {
          // If not JSON, use raw text
        }

        // Handle rate limit (429)
        if (response.status === 429) {
          if (remaining === 0) {
            setError(`⛔ Daily Limit Reached\n\n${errorMessage}\n\nYou must wait until tomorrow to verify more emails.`);
          } else {
            setError(`⚠️ Limit Exceeded\n\n${errorMessage}\n\nYou have ${remaining} verification(s) remaining today.`);
          }
        } else {
          setError(errorMessage);
        }
        
        setLoading(false);
        return;
      }

      // Parse streaming JSON array
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No response body');

      let buffer = '';
      const resultsArray: VerificationResult[] = [];
      const processedEmails = new Set<string>(); // Track processed emails to prevent duplicates

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Process any remaining complete JSON objects
          const remaining = buffer.trim().replace(/^\[|\]$/g, '');
          if (remaining) {
            // Split by comma and process each complete JSON object
            const parts = remaining.split(/,(?=\s*{)/);
            for (const part of parts) {
              const cleaned = part.trim();
              if (cleaned && cleaned.startsWith('{')) {
                try {
                  const result: VerificationResult = JSON.parse(cleaned);
                  console.log('📝 Final parsed result:', result);
                  // Check for duplicates in final processing too using Set
                  if (!processedEmails.has(result.email)) {
                    processedEmails.add(result.email);
                    resultsArray.push(result);
                    setResults(prev => [...prev, result]);
                  }
                } catch (e) {
                  console.error('❌ Failed to parse remaining:', cleaned, e);
                }
              }
            }
          }
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        console.log('📥 Received buffer chunk:', buffer);

        // Process complete JSON objects from buffer
        const jsonArrayMatch = buffer.match(/\[(.*)\]/);
        if (jsonArrayMatch) {
          const jsonContent = jsonArrayMatch[1].trim();
          if (jsonContent) {
            // Split by comma and process each complete JSON object
            const objects = jsonContent.split(/,(?=\s*{)/);
            let processedCount = 0;
            
            for (const obj of objects) {
              const cleaned = obj.trim();
              if (cleaned && cleaned.startsWith('{') && cleaned.endsWith('}')) {
                try {
                  const result: VerificationResult = JSON.parse(cleaned);
                  console.log('📝 Streaming parsed result:', result);
                  console.log('📝 Result email field:', result.email);
                  
                  // Only add if not already processed (use Set for efficient lookup)
                  if (!processedEmails.has(result.email)) {
                    processedEmails.add(result.email);
                    resultsArray.push(result);
                    setResults(prev => [...prev, result]);
                    processedCount++;
                  }
                } catch (e) {
                  console.error('❌ Failed to parse streaming object:', cleaned, e);
                }
              }
            }
            
            if (processedCount > 0) {
              setProgress(Math.round((resultsArray.length / emailList.length) * 100));
            }
          }
        }
      }

      // Ensure progress is at 100%
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
      'Email,Status,Reason,Verification Method,Time (ms)',
      ...results.map(r => `"${r.email}","${r.status}","${r.reason}","${r.verificationMethod || 'unknown'}",${r.verificationTime}`)
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `email-verification-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyResultsToClipboard = () => {
    const text = results.map(r => `${r.email} - ${r.status}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validCount = results.filter(r => r.status === 'valid').length;
  const invalidCount = results.filter(r => r.status === 'invalid').length;
  const unknownCount = results.filter(r => r.status === 'unknown').length;
  const totalProcessed = results.length;

  // Debug: Log current state
  console.log('📊 Current results state:', {
    results,
    validCount,
    invalidCount,
    unknownCount,
    totalProcessed
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      <div className="max-w-7xl mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Verifier</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Verify email addresses in bulk and reduce bounce rates. SMTP verification ensures accuracy.
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
            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <label className="block text-white font-semibold mb-4">
                Email List
              </label>
              
              <textarea
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
                placeholder="Paste emails here (one per line)&#10;john@example.com&#10;jane@company.org&#10;test@domain.net"
                className="w-full h-48 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 resize-none transition-all"
              />

              <div className="flex gap-3 mt-6">
                <input
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="flex-1">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer transition-all" asChild>
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload File
                    </span>
                  </Button>
                </label>
                <Button
                  onClick={handleVerify}
                  disabled={loading || emails.trim().length === 0}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⚙️</span>
                      Verifying...
                    </>
                  ) : (
                    'Verify'
                  )}
                </Button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-5 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-start gap-3 whitespace-pre-line"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{error}</span>
                </motion.div>
              )}
            </div>

            {/* Progress Bar */}
            {(loading || progress > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 text-sm">
                    {loading ? 'Verifying emails...' : 'Verification complete'}
                  </span>
                  <span className="text-white font-semibold text-lg">{progress}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {loading && totalProcessed > 0 && (
                  <div className="flex items-center justify-between mt-4 text-white/60 text-sm">
                    <span>Processed: {totalProcessed} / {emails.split('\n').filter(e => e.trim()).length}</span>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Valid */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/70 font-medium">Valid</span>
              </div>
              <div className="text-4xl font-bold text-green-400">{validCount}</div>
              <div className="text-white/50 text-sm mt-1">{totalProcessed > 0 ? ((validCount / totalProcessed) * 100).toFixed(1) : 0}%</div>
            </div>

            {/* Invalid */}
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-white/70 font-medium">Invalid</span>
              </div>
              <div className="text-4xl font-bold text-red-400">{invalidCount}</div>
              <div className="text-white/50 text-sm mt-1">{totalProcessed > 0 ? ((invalidCount / totalProcessed) * 100).toFixed(1) : 0}%</div>
            </div>

            {/* Unknown */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-white/70 font-medium">Unknown</span>
              </div>
              <div className="text-4xl font-bold text-yellow-400">{unknownCount}</div>
              <div className="text-white/50 text-sm mt-1">{totalProcessed > 0 ? ((unknownCount / totalProcessed) * 100).toFixed(1) : 0}%</div>
            </div>

            {/* Total */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/70 font-medium">Total</span>
              </div>
              <div className="text-4xl font-bold text-blue-400">{totalProcessed}</div>
            </div>

            {/* Download Button */}
            {results.length > 0 && (
              <div className="space-y-2 pt-4">
                <Button
                  onClick={downloadResults}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CSV
                </Button>
                <Button
                  onClick={copyResultsToClipboard}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Results'}
                </Button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Results Table */}
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Results</h2>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Eye className="w-4 h-4" />
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-4 px-6 text-white/70 font-semibold">Email</th>
                    <th className="text-left py-4 px-6 text-white/70 font-semibold">Status</th>
                    {showDetails && (
                      <>
                        <th className="text-left py-4 px-6 text-white/70 font-semibold">Reason</th>
                        <th className="text-left py-4 px-6 text-white/70 font-semibold">Method</th>
                        <th className="text-left py-4 px-6 text-white/70 font-semibold">Time</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {results.map((result, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-white font-mono text-sm">{String(result.email || '')}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          result.status === 'valid' ? 'bg-green-500/20 text-green-400' :
                          result.status === 'invalid' ? 'bg-red-500/20 text-red-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            result.status === 'valid' ? 'bg-green-400' :
                            result.status === 'invalid' ? 'bg-red-400' :
                            'bg-yellow-400'
                          }`}></span>
                          {result.status ? result.status.charAt(0).toUpperCase() + result.status.slice(1) : 'Unknown'}
                        </span>
                      </td>
                      {showDetails && (
                        <>
                          <td className="py-4 px-6 text-white/70 text-sm">{result.reason}</td>
                          <td className="py-4 px-6 text-white/70 text-sm">{result.verificationMethod || 'unknown'}</td>
                          <td className="py-4 px-6 text-white/70 text-sm">{result.verificationTime}ms</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && results.length === 0 && emails.trim().length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center py-16 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl"
          >
            <Mail className="w-16 h-16 mx-auto text-white/30 mb-4" />
            <p className="text-white/70">Enter email addresses to get started</p>
            <p className="text-white/50 text-sm mt-2">Paste emails one per line or upload a CSV/TXT file</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
