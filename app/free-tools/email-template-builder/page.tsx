'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, FileText } from 'lucide-react';

const templates = [
  { name: 'Blank', html: '' },
  { name: 'Welcome Email', html: '<h1>Welcome!</h1><p>Thanks for joining us.</p>' },
  { name: 'Newsletter', html: '<h1>Newsletter</h1><p>This month\'s highlights:</p><ul><li>Update 1</li><li>Update 2</li></ul>' },
  { name: 'Promotional', html: '<h1>Special Offer!</h1><p>Limited time deal:</p><p style="font-size: 24px; color: red;">50% OFF</p>' },
  { name: 'Transactional', html: '<h1>Order Confirmation</h1><p>Order #12345</p><p>Thank you for your purchase!</p>' }
];

export default function EmailTemplateBuilderPage() {
  const [htmlContent, setHtmlContent] = useState('');
  const [preview, setPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const loadTemplate = (name: string) => {
    const template = templates.find(t => t.name === name);
    if (template) setHtmlContent(template.html);
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
              <label className="block text-white font-semibold mb-3">Quick Templates</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {templates.map((template) => (
                  <Button
                    key={template.name}
                    onClick={() => loadTemplate(template.name)}
                    className="bg-white/10 hover:bg-white/20 text-white text-sm"
                  >
                    {template.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-3">HTML Content</label>
              <textarea
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                placeholder="Enter HTML code for your email template..."
                className="w-full bg-white/5 border border-white/20 rounded-lg p-4 text-white placeholder-white/30 min-h-64 font-mono text-sm"
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
