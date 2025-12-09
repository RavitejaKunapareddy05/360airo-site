'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Copy, Mail, AlertCircle, Loader, RefreshCw } from 'lucide-react';
import { useToolAuth } from '@/app/contexts/ToolAuthContext';

interface PlacementResult {
  id: string;
  from: string;
  to: string;
  subject: string;
  folder: string;
  date: string;
  provider: string;
}

// Hardcoded test email addresses
const TEST_EMAILS = [
  'athulk8182004@gmail.com',
];

export default function EmailDeliverabilityTest() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [placementResults, setPlacementResults] = useState<PlacementResult[]>([]);
  const [isLoadingPlacement, setIsLoadingPlacement] = useState(false);
  const { verifiedEmail, isVerified } = useToolAuth();

  const handleCopyEmail = (email: string, index: number) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCheckPlacement = async () => {
    setIsLoadingPlacement(true);
    try {
      const response = await fetch('/api/free-tools/email-deliverability-test/check-placement', {
        method: 'GET',
      });

      const data = await response.json();

      if (response.ok) {
        setPlacementResults(data.results || []);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert('Error checking placement: ' + String(error));
    } finally {
      setIsLoadingPlacement(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Email Deliverability Tester
            </h1>
          </div>
          <p className="text-xl text-white/60">Monitor where your emails land across different mailbox providers</p>
        </div>

        <div className="space-y-8">
          {/* Verification Success Banner */}
          <div className="bg-white/5 border border-emerald-500/20 backdrop-blur-xl rounded-xl p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Email Verified</p>
              <p className="text-sm text-white/60">You're logged in as <strong>{verifiedEmail}</strong></p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-xl p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">How to Test Email Deliverability</h3>
                <ol className="space-y-2 text-sm text-white/70">
                  <li><strong>1.</strong> Copy one of the test email addresses below</li>
                  <li><strong>2.</strong> Send a test email to that address from your own mailbox</li>
                  <li><strong>3.</strong> We'll monitor where it lands (Inbox, Spam, etc.)</li>
                  <li><strong>4.</strong> Check back here for placement results</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Test Emails */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Test Email Addresses</h2>
            <p className="text-white/60 mb-6">Copy these email addresses and send test emails to them. We'll monitor where they land.</p>

            <div className="space-y-3">
              {TEST_EMAILS.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-lg hover:border-cyan-500/30 transition"
                >
                  <div className="flex-1">
                    <p className="font-mono text-white font-semibold">{email}</p>
                    <p className="text-xs text-white/40 mt-1">Test inbox #{index + 1}</p>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(email, index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                      copiedIndex === index
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
                    }`}
                  >
                    <Copy className="w-4 h-4" />
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Status - The Placement Test Dashboard */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">The Placement Test</h2>
              <p className="text-white/60">Test where your emails are landing in different mailbox providers</p>
            </div>

            {placementResults.length === 0 ? (
              <>
                {/* Stats Cards - Empty State */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-4 text-center hover:border-emerald-500/40 transition">
                    <p className="text-3xl font-bold text-emerald-400">0%</p>
                    <p className="text-sm text-emerald-300/70 mt-1">Inbox</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-500/40 transition">
                    <p className="text-3xl font-bold text-cyan-400">0%</p>
                    <p className="text-sm text-cyan-300/70 mt-1">Promotions</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-4 text-center hover:border-red-500/40 transition">
                    <p className="text-3xl font-bold text-red-400">0%</p>
                    <p className="text-sm text-red-300/70 mt-1">Spam</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg p-4 text-center hover:border-white/40 transition">
                    <p className="text-3xl font-bold text-white/80">0%</p>
                    <p className="text-sm text-white/50 mt-1">Unread</p>
                  </div>
                </div>

                {/* Check Placement Button */}
                <Button
                  onClick={handleCheckPlacement}
                  disabled={isLoadingPlacement}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-8 font-semibold"
                >
                  {isLoadingPlacement ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Checking Placement...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      Check Placement
                    </>
                  )}
                </Button>

                {/* Empty State Message */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                  <Mail className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/80 font-medium text-lg">No emails detected yet</p>
                  <p className="text-sm text-white/50 mt-3">Send test emails to the addresses above, then click "Check Placement"</p>
                </div>
              </>
            ) : (
              <>
                {/* Stats Cards - With Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg p-4 text-center hover:border-emerald-500/40 transition">
                    <p className="text-3xl font-bold text-emerald-400">100%</p>
                    <p className="text-sm text-emerald-300/70 mt-1">Inbox</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-500/40 transition">
                    <p className="text-3xl font-bold text-cyan-400">0%</p>
                    <p className="text-sm text-cyan-300/70 mt-1">Promotions</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-lg p-4 text-center hover:border-red-500/40 transition">
                    <p className="text-3xl font-bold text-red-400">0%</p>
                    <p className="text-sm text-red-300/70 mt-1">Spam</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg p-4 text-center hover:border-white/40 transition">
                    <p className="text-3xl font-bold text-white/80">0%</p>
                    <p className="text-sm text-white/50 mt-1">Unread</p>
                  </div>
                </div>

                {/* Provider Results */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/30 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold text-white">Gmail</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-48 h-2 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"></div>
                      <span className="text-sm font-semibold text-white">100% Inbox</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-lg font-bold text-white mb-4">Email Details</h3>
                  <div className="space-y-4">
                    {placementResults.map((result, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-500/30 transition"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-xs font-semibold text-white/40 uppercase mb-1">From</p>
                                <p className="text-sm font-bold text-white">{result.from}</p>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-white/40 uppercase mb-1">To</p>
                                <p className="text-sm font-bold text-white">{result.to}</p>
                              </div>
                            </div>
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-white/40 uppercase mb-1">Subject</p>
                              <p className="text-sm text-white/70">{result.subject}</p>
                            </div>
                            <p className="text-xs text-white/40">Received: {new Date(result.date).toLocaleString()}</p>
                          </div>
                          <div className={`ml-4 px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                            result.folder === 'INBOX' 
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : result.folder.includes('Spam') 
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : result.folder.includes('Promotions')
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          }`}>
                            📍 {result.folder}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Refresh Button */}
                  <Button
                    onClick={handleCheckPlacement}
                    disabled={isLoadingPlacement}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mt-8 font-semibold"
                  >
                    {isLoadingPlacement ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Checking Placement...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4" />
                        Refresh & Check Placement
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Email Authentication Regulations */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">📋 Email Authentication Standards & Regulations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* SPF */}
              <div className="border-2 border-cyan-500/30 rounded-lg p-6 bg-white/5 hover:border-cyan-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">SPF</div>
                  <h3 className="text-lg font-bold text-white">Sender Policy Framework</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">SPF is a DNS record that authorizes which servers can send emails on behalf of your domain.</p>
                <div className="bg-black/20 rounded p-3 mb-3 border border-white/10">
                  <p className="text-xs font-mono text-cyan-400">v=spf1 include:_spf.google.com ~all</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white mb-2">Without SPF:</p>
                  <ul className="space-y-1 text-white/70">
                    <li>✗ Emails marked as spam</li>
                    <li>✗ Failed authentication checks</li>
                    <li>✗ Lower deliverability rate</li>
                  </ul>
                </div>
              </div>

              {/* DKIM */}
              <div className="border-2 border-emerald-500/30 rounded-lg p-6 bg-white/5 hover:border-emerald-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">DKIM</div>
                  <h3 className="text-lg font-bold text-white">DomainKeys Identified Mail</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">DKIM adds a cryptographic signature to emails proving they come from your domain.</p>
                <div className="bg-black/20 rounded p-3 mb-3 border border-white/10">
                  <p className="text-xs font-mono text-emerald-400">selector._domainkey.domain.com</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white mb-2">Without DKIM:</p>
                  <ul className="space-y-1 text-white/70">
                    <li>✗ Email signature verification fails</li>
                    <li>✗ Increased spam score</li>
                    <li>✗ Reduced trust with providers</li>
                  </ul>
                </div>
              </div>

              {/* DMARC */}
              <div className="border-2 border-purple-500/30 rounded-lg p-6 bg-white/5 hover:border-purple-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">DMARC</div>
                  <h3 className="text-lg font-bold text-white">Domain-based Message Auth, Reporting & Conformance</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">DMARC policy combines SPF and DKIM to prevent spoofing and tells providers what to do with failed emails.</p>
                <div className="bg-black/20 rounded p-3 mb-3 border border-white/10">
                  <p className="text-xs font-mono text-purple-400">v=DMARC1; p=quarantine; rua=mailto:...</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white mb-2">Without DMARC:</p>
                  <ul className="space-y-1 text-white/70">
                    <li>✗ Impersonation attacks possible</li>
                    <li>✗ No reporting on email issues</li>
                    <li>✗ Emails quarantined or rejected</li>
                  </ul>
                </div>
              </div>

              {/* Gmail Regulations */}
              <div className="border-2 border-red-500/30 rounded-lg p-6 bg-white/5 hover:border-red-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">Gmail</div>
                  <h3 className="text-lg font-bold text-white">Gmail & Google Workspace Rules</h3>
                </div>
                <p className="text-sm text-white/70 mb-3">As of 2024, Gmail requires strict authentication for all bulk senders.</p>
                <div className="text-sm">
                  <p className="font-semibold text-white mb-2">Gmail Requirements:</p>
                  <ul className="space-y-1 text-white/70">
                    <li>✓ SPF/DKIM/DMARC mandatory</li>
                    <li>✓ One-click unsubscribe required</li>
                    <li>✓ Valid Reply-To headers needed</li>
                    <li>✓ Bounce rate must be &lt;5%</li>
                    <li>✓ Complaint rate must be &lt;0.1%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Emails Go to Spam */}
          <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border-2 border-orange-500/30 hover:border-orange-500/50 transition">
            <h3 className="text-xl font-bold text-white mb-4">⚠️ Why Emails Go to Spam</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-white mb-3">Technical Reasons:</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>❌ Missing or failed SPF/DKIM/DMARC</li>
                  <li>❌ Poor sender reputation score</li>
                  <li>❌ High bounce or complaint rates</li>
                  <li>❌ Unverified sending domain</li>
                  <li>❌ Invalid email headers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Content Reasons:</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>❌ Spam trigger words in subject</li>
                  <li>❌ Suspicious links or attachments</li>
                  <li>❌ Too many images, low text ratio</li>
                  <li>❌ Phishing or spoofing patterns</li>
                  <li>❌ Poor list quality/engagement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg border-2 border-emerald-500/30 hover:border-emerald-500/50 transition">
            <h3 className="text-xl font-bold text-white mb-4">✅ Best Practices for Inbox Placement</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-emerald-400 mb-2">1. Authentication</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>✓ Set up SPF record</li>
                  <li>✓ Enable DKIM signing</li>
                  <li>✓ Configure DMARC policy</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-emerald-400 mb-2">2. List Management</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>✓ Use double opt-in</li>
                  <li>✓ Monitor bounce rates</li>
                  <li>✓ Remove inactive subscribers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-emerald-400 mb-2">3. Email Content</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>✓ Avoid spam words</li>
                  <li>✓ Include clear unsubscribe</li>
                  <li>✓ Balance text and images</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
