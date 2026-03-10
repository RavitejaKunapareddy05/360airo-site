'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Eye, EyeOff, Check, AlertCircle, Trash2, Copy } from 'lucide-react';
import { useToolAuth } from '@/app/contexts/ToolAuthContext';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function SettingsPage() {
  const { apiKey, setApiKey, clearApiKey, isApiKeyConfigured } = useToolAuth();
  const [inputKey, setInputKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (apiKey) {
      setInputKey(apiKey);
    }
  }, [apiKey]);

  const handleSaveKey = () => {
    setError('');
    setSaved(false);

    if (!inputKey.trim()) {
      setError('API key cannot be empty');
      return;
    }

    if (inputKey.trim().length < 10) {
      setError('API key seems too short (minimum 10 characters)');
      return;
    }

    setApiKey(inputKey.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleClearKey = () => {
    if (window.confirm('Are you sure you want to remove the API key? You will need to re-enter it to use the tools.')) {
      clearApiKey();
      setInputKey('');
      setError('');
    }
  };

  const handleCopyKey = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const maskApiKey = (key: string) => {
    if (!key) return '';
    const visible = Math.floor(key.length / 3);
    return key.substring(0, visible) + '*'.repeat(key.length - visible);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/free-tools" className="inline-flex items-center text-[#b45ecf] hover:text-[#d67bff] transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Free Tools
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                API Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b45ecf] to-[#d67bff]">Settings</span>
              </h1>
              <p className="text-white/70">Configure your API key to enable advanced email verification and testing features</p>
            </motion.div>

            {/* API Key Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Current Status */}
                  {isApiKeyConfigured && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-green-400 font-semibold">API Key Configured</h3>
                        <p className="text-green-300/80 text-sm mt-1">Your API key is active and ready to use</p>
                      </div>
                    </div>
                  )}

                  {!isApiKeyConfigured && inputKey.trim().length === 0 && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-amber-400 font-semibold">No API Key Set</h3>
                        <p className="text-amber-300/80 text-sm mt-1">Add an API key to unlock full functionality</p>
                      </div>
                    </div>
                  )}

                  {/* Display Current Key */}
                  {isApiKeyConfigured && (
                    <div>
                      <label className="block text-sm font-semibold text-white/80 mb-3">
                        Current API Key
                      </label>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3">
                        <code className="text-[#d67bff] text-sm flex-1 font-mono">
                          {showKey ? apiKey : maskApiKey(apiKey || '')}
                        </code>
                        <button
                          onClick={() => setShowKey(!showKey)}
                          className="p-2 hover:bg-white/10 rounded transition-colors"
                          title={showKey ? 'Hide' : 'Show'}
                        >
                          {showKey ? (
                            <EyeOff className="h-4 w-4 text-white/60" />
                          ) : (
                            <Eye className="h-4 w-4 text-white/60" />
                          )}
                        </button>
                        <button
                          onClick={handleCopyKey}
                          className="p-2 hover:bg-white/10 rounded transition-colors"
                          title="Copy"
                        >
                          <Copy className="h-4 w-4 text-white/60" />
                        </button>
                      </div>
                      {copied && (
                        <p className="text-green-400 text-sm mt-2 flex items-center">
                          <Check className="h-4 w-4 mr-1" /> Copied to clipboard
                        </p>
                      )}
                    </div>
                  )}

                  {/* Input Field */}
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-3">
                      {isApiKeyConfigured ? 'Update API Key' : 'Enter API Key'}
                    </label>
                    <div className="relative">
                      <input
                        type={showKey ? 'text' : 'password'}
                        value={inputKey}
                        onChange={(e) => {
                          setInputKey(e.target.value);
                          setError('');
                        }}
                        placeholder="Enter your API key here..."
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#b45ecf]/50 focus:ring-2 focus:ring-[#b45ecf]/20 transition-all"
                      />
                      <button
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded transition-colors"
                      >
                        {showKey ? (
                          <EyeOff className="h-4 w-4 text-white/60" />
                        ) : (
                          <Eye className="h-4 w-4 text-white/60" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Saved Message */}
                  {saved && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-green-300 text-sm">API key saved successfully!</p>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={handleSaveKey}
                      className="flex-1 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                    >
                      {isApiKeyConfigured ? 'Update Key' : 'Save Key'}
                    </Button>
                    {isApiKeyConfigured && (
                      <Button
                        onClick={handleClearKey}
                        className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg transition-all flex items-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">About API Keys</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex gap-3">
                    <span className="text-[#b45ecf] font-bold">•</span>
                    <span>Your API key is stored securely in your browser's local storage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#b45ecf] font-bold">•</span>
                    <span>API keys are never sent to our servers - all operations are client-side</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#b45ecf] font-bold">•</span>
                    <span>Keep your API key confidential and update it regularly for security</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#b45ecf] font-bold">•</span>
                    <span>You can update or remove your API key at any time from this page</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
