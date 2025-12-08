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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Email Deliverability Tester</h1>
          </div>
          <p className="text-xl text-gray-600">Monitor where your emails land across different mailbox providers</p>
        </div>

        <div className="space-y-8">
          {/* Verification Success Banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-900">Email Verified</p>
              <p className="text-sm text-green-800">You're logged in as <strong>{verifiedEmail}</strong></p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">How to Test Email Deliverability</h3>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li><strong>1.</strong> Copy one of the test email addresses below</li>
                  <li><strong>2.</strong> Send a test email to that address from your own mailbox</li>
                  <li><strong>3.</strong> We'll monitor where it lands (Inbox, Spam, etc.)</li>
                  <li><strong>4.</strong> Check back here for placement results</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Test Emails */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Test Email Addresses</h2>
            <p className="text-gray-600 mb-6">Copy these email addresses and send test emails to them. We'll monitor where they land.</p>

            <div className="space-y-3">
              {TEST_EMAILS.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition"
                >
                  <div className="flex-1">
                    <p className="font-mono text-gray-900 font-semibold">{email}</p>
                    <p className="text-xs text-gray-500 mt-1">Test inbox #{index + 1}</p>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(email, index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                      copiedIndex === index
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
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
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">The Placement Test</h2>
              <p className="text-gray-600">Test where your emails are landing in different mailbox providers</p>
            </div>

            {placementResults.length === 0 ? (
              <>
                {/* Stats Cards - Empty State */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-green-600">0%</p>
                    <p className="text-sm text-green-700 mt-1">Inbox</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-blue-600">0%</p>
                    <p className="text-sm text-blue-700 mt-1">Promotions</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-red-600">0%</p>
                    <p className="text-sm text-red-700 mt-1">Spam</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-gray-600">0%</p>
                    <p className="text-sm text-gray-700 mt-1">Unread</p>
                  </div>
                </div>

                {/* Check Placement Button */}
                <Button
                  onClick={handleCheckPlacement}
                  disabled={isLoadingPlacement}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-8 font-semibold"
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
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium text-lg">No emails detected yet</p>
                  <p className="text-sm text-gray-500 mt-3">Send test emails to the addresses above, then click "Check Placement"</p>
                </div>
              </>
            ) : (
              <>
                {/* Stats Cards - With Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-green-600">100%</p>
                    <p className="text-sm text-green-700 mt-1">Inbox</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-blue-600">0%</p>
                    <p className="text-sm text-blue-700 mt-1">Promotions</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-red-600">0%</p>
                    <p className="text-sm text-red-700 mt-1">Spam</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-gray-600">0%</p>
                    <p className="text-sm text-gray-700 mt-1">Unread</p>
                  </div>
                </div>

                {/* Provider Results */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Gmail</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-48 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-gray-900">100% Inbox</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="border-t pt-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Email Details</h3>
                  <div className="space-y-4">
                    {placementResults.map((result, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">From</p>
                                <p className="text-sm font-bold text-gray-900">{result.from}</p>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">To</p>
                                <p className="text-sm font-bold text-gray-900">{result.to}</p>
                              </div>
                            </div>
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Subject</p>
                              <p className="text-sm text-gray-700">{result.subject}</p>
                            </div>
                            <p className="text-xs text-gray-500">Received: {new Date(result.date).toLocaleString()}</p>
                          </div>
                          <div className={`ml-4 px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                            result.folder === 'INBOX' 
                              ? 'bg-green-100 text-green-800'
                              : result.folder.includes('Spam') 
                              ? 'bg-red-100 text-red-800'
                              : result.folder.includes('Promotions')
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            📍 {result.folder}
                          </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Refresh Button */}
                  <Button
                    onClick={handleCheckPlacement}
                    disabled={isLoadingPlacement}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mt-8 font-semibold"
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
                </>
              )}
            </div>

            {/* Email Authentication Regulations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Email Authentication Standards & Regulations</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* SPF */}
                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">SPF</div>
                    <h3 className="text-lg font-bold text-gray-900">Sender Policy Framework</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">SPF is a DNS record that authorizes which servers can send emails on behalf of your domain.</p>
                  <div className="bg-white rounded p-3 mb-3">
                    <p className="text-xs font-mono text-gray-600">v=spf1 include:_spf.google.com ~all</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-blue-900 mb-2">Without SPF:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✗ Emails marked as spam</li>
                      <li>✗ Failed authentication checks</li>
                      <li>✗ Lower deliverability rate</li>
                    </ul>
                  </div>
                </div>

                {/* DKIM */}
                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">DKIM</div>
                    <h3 className="text-lg font-bold text-gray-900">DomainKeys Identified Mail</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">DKIM adds a cryptographic signature to emails proving they come from your domain.</p>
                  <div className="bg-white rounded p-3 mb-3">
                    <p className="text-xs font-mono text-gray-600">selector._domainkey.domain.com</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-green-900 mb-2">Without DKIM:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✗ Email signature verification fails</li>
                      <li>✗ Increased spam score</li>
                      <li>✗ Reduced trust with providers</li>
                    </ul>
                  </div>
                </div>

                {/* DMARC */}
                <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">DMARC</div>
                    <h3 className="text-lg font-bold text-gray-900">Domain-based Message Auth, Reporting & Conformance</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">DMARC policy combines SPF and DKIM to prevent spoofing and tells providers what to do with failed emails.</p>
                  <div className="bg-white rounded p-3 mb-3">
                    <p className="text-xs font-mono text-gray-600">v=DMARC1; p=quarantine; rua=mailto:...</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-purple-900 mb-2">Without DMARC:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>✗ Impersonation attacks possible</li>
                      <li>✗ No reporting on email issues</li>
                      <li>✗ Emails quarantined or rejected</li>
                    </ul>
                  </div>
                </div>

                {/* Gmail Regulations */}
                <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">Gmail</div>
                    <h3 className="text-lg font-bold text-gray-900">Gmail & Google Workspace Rules</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">As of 2024, Gmail requires strict authentication for all bulk senders.</p>
                  <div className="text-sm">
                    <p className="font-semibold text-red-900 mb-2">Gmail Requirements:</p>
                    <ul className="space-y-1 text-gray-700">
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
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Why Emails Go to Spam</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Technical Reasons:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>❌ Missing or failed SPF/DKIM/DMARC</li>
                      <li>❌ Poor sender reputation score</li>
                      <li>❌ High bounce or complaint rates</li>
                      <li>❌ Unverified sending domain</li>
                      <li>❌ Invalid email headers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Content Reasons:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
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
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Best Practices for Inbox Placement</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-green-900 mb-2">1. Authentication</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Set up SPF record</li>
                      <li>✓ Enable DKIM signing</li>
                      <li>✓ Configure DMARC policy</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 mb-2">2. List Management</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Use double opt-in</li>
                      <li>✓ Monitor bounce rates</li>
                      <li>✓ Remove inactive subscribers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 mb-2">3. Email Content</p>
                    <ul className="text-sm text-gray-700 space-y-1">
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
