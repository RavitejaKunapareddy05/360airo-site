'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, FileText } from 'lucide-react';

export default function EmailTemplateBuilderPage() {
  const [htmlContent, setHtmlContent] = useState('');
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [templateType, setTemplateType] = useState('Welcome');
  const [purpose, setPurpose] = useState('');
  const [error, setError] = useState('');

  const templateTypes = ['Welcome', 'Newsletter', 'Promotional', 'Transactional', 'Custom'];

  const generateTemplate = async () => {
    if (!templateType || !purpose) {
      setError('Please select template type and describe its purpose');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/free-tools/email-template-builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateType,
          purpose,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate template');
      }

      const data = await response.json();
      setHtmlContent(data.html);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate template');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTemplate = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));
    element.setAttribute('download', 'email-template.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-400 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Email Template Builder
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Create beautiful email templates with our intuitive editor.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-3">Template Type</label>
              <select
                value={templateType}
                onChange={(e) => setTemplateType(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white"
              >
                {templateTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">Describe the Purpose</label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="E.g., 'Welcome new users to our SaaS product' or 'Monthly product updates newsletter'"
                className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-white/30 min-h-24"
              />
            </div>

            {error && <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">{error}</div>}

            <Button
              onClick={generateTemplate}
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:shadow-lg text-white font-semibold"
            >
              {loading ? 'Generating...' : 'Generate Template with AI'}
            </Button>
          </div>
        </motion.div>

        {htmlContent && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-3">HTML Content (Edit as needed)</label>
                <textarea
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white min-h-64 font-mono text-sm"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={() => setPreview(!preview)} className="flex-1 bg-violet-500 hover:bg-violet-600 text-white">
                  {preview ? 'Hide Preview' : 'Show Preview'}
                </Button>
                <Button onClick={copyToClipboard} className="flex-1 bg-white/10 hover:bg-white/20 text-white">
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Code'}
                </Button>
                <Button onClick={downloadTemplate} className="flex-1 bg-white/10 hover:bg-white/20 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {preview && htmlContent && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6">Preview</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }</style></head><body>${htmlContent}</body></html>`}
                className="w-full h-96 border-0"
              />
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
