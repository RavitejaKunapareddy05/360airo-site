'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, PenTool, Image as ImageIcon } from 'lucide-react';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

interface SignatureTemplate {
  name: string;
  description: string;
}

interface SignatureFormData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  template: string;
  logoUrl?: string;
}

const signatureTemplates: Record<string, SignatureTemplate> = {
  classic: {
    name: 'Classic',
    description: 'Simple and professional'
  },
  modern: {
    name: 'Modern',
    description: 'Contemporary design with color accent'
  },
  minimalist: {
    name: 'Minimalist',
    description: 'Clean and minimal'
  },
  corporate: {
    name: 'Corporate',
    description: 'Formal business style'
  },
  creative: {
    name: 'Creative',
    description: 'Bold and colorful'
  }
};

interface GenerateSignatureRequest {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  style: string;
  logoUrl?: string;
  logoSize?: number;
}

export default function EmailSignatureBuilderPage() {
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [color, setColor] = useState('#6366f1');
  const [showLinks, setShowLinks] = useState(true);
  const [signature, setSignature] = useState('');
  const [copied, setCopied] = useState(false);
  const [template, setTemplate] = useState<keyof typeof signatureTemplates>('classic');
  const [logoUrl, setLogoUrl] = useState('');
  const [logoSize, setLogoSize] = useState(80);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [logoInputType, setLogoInputType] = useState<'url' | 'upload'>('upload');

  const generateSignature = async () => {
    if (!fullName || !jobTitle || !company || !email) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const payload: GenerateSignatureRequest = {
        fullName,
        jobTitle,
        company,
        email,
        phone: phone || undefined,
        website: website || undefined,
        style: template,
        logoUrl: logoUrl || undefined,
        logoSize: logoUrl ? logoSize : undefined,
      };

      console.log('📧 Sending signature request with logo:', logoUrl ? `${logoUrl.substring(0, 50)}...` : 'none');

      const response = await fetch('/api/free-tools/email-signature-builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json() as { error?: string };
        throw new Error(data.error || 'Failed to generate signature');
      }

      const data = await response.json() as { html: string };
      console.log('✅ Signature generated:', data.html.substring(0, 100));
      setSignature(data.html);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate signature';
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 500KB for email safety)
    if (file.size > 500000) {
      setError('Logo file is too large. Please use an image under 500KB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        setLogoUrl(result);
        setError('');
      }
    };
    reader.onerror = () => {
      setError('Failed to read the image file');
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(signature);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const downloadSignature = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(signature));
    element.setAttribute('download', 'email-signature.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <ProtectedFreeTool toolName="Email Signature Builder">
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl flex items-center justify-center">
              <PenTool className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Email Signature Builder
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Create professional email signatures in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl h-fit">
            {/* Template Selection */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3 text-sm">Choose Template</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries(signatureTemplates).map(([key, value]) => (
                  <Button
                    key={key}
                    onClick={() => setTemplate(key as keyof typeof signatureTemplates)}
                    className={`text-sm ${
                      template === key
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    {value.name}
                  </Button>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-2">
                {signatureTemplates[template].description}
              </p>
            </div>

            {/* Logo Upload */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2 text-sm">Company Logo (Optional)</label>
              
              <div className="flex gap-2 mb-3">
                <Button
                  onClick={() => setLogoInputType('upload')}
                  className={`flex-1 text-sm ${
                    logoInputType === 'upload'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Upload File
                </Button>
                <Button
                  onClick={() => setLogoInputType('url')}
                  className={`flex-1 text-sm ${
                    logoInputType === 'url'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Use URL
                </Button>
              </div>

              {logoInputType === 'upload' ? (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="block w-full">
                    <div className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer rounded-lg p-2.5 flex items-center justify-center gap-2 transition-colors">
                      <ImageIcon className="w-4 h-4" />
                      Choose Image
                    </div>
                  </label>
                  <p className="text-white/50 text-xs mt-2">Max file size: 500KB</p>
                </div>
              ) : (
                <input
                  type="url"
                  placeholder="https://example.com/logo.png"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              )}

              {logoUrl && (
                <>
                  <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/20 flex items-center justify-center min-h-24">
                    <img 
                      src={logoUrl} 
                      alt="Logo Preview" 
                      className="max-w-full h-auto" 
                      style={{ maxHeight: `${logoSize}px` }} 
                      onError={() => setError('Logo could not be loaded')} 
                    />
                  </div>
                  <label className="block text-white font-semibold mb-2 text-sm mt-3">Logo Size: {logoSize}px</label>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    aria-label="Logo size slider"
                  />
                  <Button
                    onClick={() => {
                      setLogoUrl('');
                      setError('');
                    }}
                    className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white text-sm"
                  >
                    Remove Logo
                  </Button>
                </>
              )}
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Job Title</label>
                <input
                  type="text"
                  placeholder="Sales Manager"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Company</label>
                <input
                  type="text"
                  placeholder="360airo"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Website</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white placeholder-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2 text-sm">Accent Color</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-16 h-10 rounded cursor-pointer"
                    aria-label="Accent color picker"
                  />
                  <span className="text-white/70 text-sm">{color}</span>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showLinks}
                  onChange={(e) => setShowLinks(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <span className="text-white text-sm">Show clickable links</span>
              </label>

              <Button 
                onClick={generateSignature} 
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 hover:shadow-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : 'Generate Signature'}
              </Button>
              
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-200 text-sm">
                  {error}
                </div>
              )}
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {signature && (
              <>
                {/* Email Client Preview */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl overflow-hidden">
                  <h3 className="text-lg font-bold text-white mb-4">How It Looks in Email</h3>
                  
                  {/* Realistic Gmail-like Container */}
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ maxWidth: '600px' }}>
                    {/* Gmail Header */}
                    <div className="bg-gray-100 border-b border-gray-300 px-6 py-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-700 font-semibold text-sm min-w-12">To:</span>
                          <input 
                            type="text" 
                            placeholder="recipient@example.com" 
                            className="flex-1 text-sm text-gray-800 bg-white border border-gray-300 rounded px-3 py-2 outline-none" 
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-700 font-semibold text-sm min-w-12">Subject:</span>
                          <input 
                            type="text" 
                            placeholder="Enter your subject" 
                            className="flex-1 text-sm text-gray-800 bg-white border border-gray-300 rounded px-3 py-2 outline-none" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Body */}
                    <div className="bg-white p-6 min-h-96 max-h-96 overflow-y-auto">
                      {/* Sample email content */}
                      <div className="text-gray-800 text-sm leading-relaxed mb-6">
                        <p className="mb-3">Hi there,</p>
                        <p className="mb-3">This is a sample email showing how your professional signature will look.</p>
                        <p className="mb-6">Best regards,</p>
                      </div>

                      {/* Signature divider */}
                      <div className="border-t border-gray-300 pt-4 mt-4">
                        {/* Signature HTML rendered */}
                        <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: signature }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* HTML Code Section */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">HTML Code</h3>
                    <span className="text-white/50 text-xs">Copy to use in email clients</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 max-h-48 overflow-y-auto border border-white/10 mb-4">
                    <pre className="text-white/80 text-xs whitespace-pre-wrap break-words font-mono leading-relaxed">{signature}</pre>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      onClick={copyToClipboard} 
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm transition-all"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copied ? 'Copied to Clipboard!' : 'Copy Code'}
                    </Button>
                    <Button 
                      onClick={downloadSignature} 
                      className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-sm transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download HTML
                    </Button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                  <h4 className="text-sm font-bold text-white mb-3">How to Use</h4>
                  <div className="text-white/70 text-xs space-y-2">
                    <p><span className="text-teal-400 font-semibold">Gmail:</span> Settings → Signature → Paste the HTML</p>
                    <p><span className="text-teal-400 font-semibold">Outlook:</span> File → Options → Mail → Signatures → Paste the HTML</p>
                    <p><span className="text-teal-400 font-semibold">Apple Mail:</span> Preferences → Signatures → Edit → Paste the HTML</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 text-center text-white/50 text-sm">
          <p>Part of 360airo Free Tools</p>
        </motion.div>
      </div>
    </div>
    </ProtectedFreeTool>
  );
}
