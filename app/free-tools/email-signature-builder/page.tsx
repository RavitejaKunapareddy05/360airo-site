'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, PenTool, Image as ImageIcon } from 'lucide-react';

const signatureTemplates = {
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

  const generateSignature = () => {
    if (!fullName) {
      alert('Please enter your name');
      return;
    }

    let sig = '';

    if (template === 'classic') {
      // CLASSIC: Traditional elegance with subtle gradient background
      sig = `<div style="font-family: Georgia, serif; max-width: 550px; margin: 20px 0; padding: 20px 0;">
  <div style="display: flex; gap: 20px; align-items: flex-start;">
    ${logoUrl ? `<img src="${logoUrl}" alt="Logo" style="max-width: ${logoSize}px; max-height: 80px; border-radius: 2px;" />` : ''}
    <div style="flex: 1; border-left: 3px solid #333;">
      <div style="padding-left: 15px;">
        <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: bold; color: #000; font-family: Georgia, serif;">${fullName}</p>
        ${jobTitle ? `<p style="margin: 0 0 1px 0; font-size: 12px; color: #666; font-family: Georgia, serif; font-style: italic;">${jobTitle}</p>` : ''}
        ${company ? `<p style="margin: 0 0 12px 0; font-size: 11px; color: #777; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">${company}</p>` : ''}
        <div style="margin-top: 12px; font-size: 11px; line-height: 1.8; color: #555; display: flex; flex-direction: column; gap: 3px;">
          ${email ? `<div><a href="mailto:${email}" style="color: #000; text-decoration: none; font-weight: 500;">${email}</a></div>` : ''}
          ${phone ? `<div>${phone}</div>` : ''}
          ${website && showLinks ? `<div><a href="${website}" style="color: #000; text-decoration: none; font-weight: 500;" target="_blank">${website.replace(/^https?:\/\//, '')}</a></div>` : ''}
        </div>
      </div>
    </div>
  </div>
</div>`;
    } else if (template === 'modern') {
      // MODERN: Clean contemporary design with accent border
      sig = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 20px 0;">
  <div style="padding: 18px 0; border-top: 2px solid ${color}; border-bottom: 2px solid ${color};">
    <div style="display: flex; gap: 18px; align-items: flex-start;">
      ${logoUrl ? `<img src="${logoUrl}" alt="Logo" style="max-width: ${logoSize}px; max-height: 75px; border-radius: 3px; flex-shrink: 0;" />` : ''}
      <div style="flex: 1;">
        <p style="margin: 0 0 2px 0; font-size: 16px; font-weight: 700; color: #000; letter-spacing: -0.3px;">${fullName}</p>
        ${jobTitle ? `<p style="margin: 0 0 1px 0; font-size: 11px; color: ${color}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${jobTitle}</p>` : ''}
        ${company ? `<p style="margin: 0 0 10px 0; font-size: 11px; color: #888; font-weight: 500;">${company}</p>` : ''}
        <div style="font-size: 11px; line-height: 1.7; color: #555; display: flex; flex-direction: column; gap: 2px;">
          ${email ? `<div><a href="mailto:${email}" style="color: #000; text-decoration: none; font-weight: 500;">${email}</a></div>` : ''}
          ${phone ? `<div>${phone}</div>` : ''}
          ${website && showLinks ? `<div><a href="${website}" style="color: #000; text-decoration: none; font-weight: 500;" target="_blank">${website.replace(/^https?:\/\//, '')}</a></div>` : ''}
        </div>
      </div>
    </div>
  </div>
</div>`;
    } else if (template === 'minimalist') {
      // MINIMALIST: Ultra-clean, text-only, no color
      sig = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 20px 0; color: #1a1a1a;">
  <div>
    ${logoUrl ? `<div style="margin-bottom: 12px;"><img src="${logoUrl}" alt="Logo" style="max-width: ${logoSize}px; max-height: 60px; display: block;" /></div>` : ''}
    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #000; line-height: 1.4;">${fullName}</p>
    ${jobTitle ? `<p style="margin: 4px 0 0 0; font-size: 11px; color: #888;">${jobTitle}</p>` : ''}
    ${company ? `<p style="margin: 2px 0 10px 0; font-size: 11px; color: #999;">${company}</p>` : ''}
    <div style="font-size: 11px; line-height: 1.6; color: #666; display: flex; flex-direction: column; gap: 1px;">
      ${email ? `<div><a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a></div>` : ''}
      ${phone ? `<div>${phone}</div>` : ''}
      ${website && showLinks ? `<div><a href="${website}" style="color: #000; text-decoration: none;" target="_blank">${website.replace(/^https?:\/\//, '')}</a></div>` : ''}
    </div>
  </div>
</div>`;
    } else if (template === 'corporate') {
      // CORPORATE: Professional table layout with background
      sig = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 20px 0; background: #f5f5f5; padding: 20px; border-radius: 0; border: 1px solid #ddd;">
  <div style="display: flex; gap: 16px;">
    ${logoUrl ? `<div style="flex-shrink: 0;"><img src="${logoUrl}" alt="Logo" style="max-width: ${logoSize}px; max-height: 80px; display: block; border-radius: 2px;" /></div>` : ''}
    <div style="flex: 1;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 0; vertical-align: top;">
            <p style="margin: 0 0 3px 0; font-size: 15px; font-weight: 700; color: #000;">${fullName}</p>
            ${jobTitle ? `<p style="margin: 0 0 1px 0; font-size: 11px; color: ${color}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${jobTitle}</p>` : ''}
            ${company ? `<p style="margin: 0 0 8px 0; font-size: 11px; color: #666; font-weight: 500;">${company}</p>` : ''}
          </td>
        </tr>
      </table>
      <div style="border-top: 1px solid #ddd; padding-top: 8px; font-size: 11px; line-height: 1.6; color: #555;">
        ${email ? `<div style="margin-bottom: 2px;"><span style="color: ${color}; font-weight: 600;">E:</span> <a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a></div>` : ''}
        ${phone ? `<div style="margin-bottom: 2px;"><span style="color: ${color}; font-weight: 600;">T:</span> ${phone}</div>` : ''}
        ${website && showLinks ? `<div><span style="color: ${color}; font-weight: 600;">W:</span> <a href="${website}" style="color: #000; text-decoration: none;" target="_blank">${website.replace(/^https?:\/\//, '')}</a></div>` : ''}
      </div>
    </div>
  </div>
</div>`;
    } else if (template === 'creative') {
      // CREATIVE: Bold, modern with gradient and decorative elements
      sig = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 580px; margin: 20px 0;">
  <div style="background: linear-gradient(135deg, ${color}E6 0%, ${adjustColor(color, -20)}E6 100%); padding: 28px; border-radius: 12px; color: white; position: relative; overflow: hidden;">
    <div style="position: absolute; top: -50px; right: -50px; width: 180px; height: 180px; background: rgba(255,255,255,0.08); border-radius: 50%;"></div>
    <div style="position: absolute; bottom: -30px; left: -30px; width: 120px; height: 120px; background: rgba(255,255,255,0.06); border-radius: 50%;"></div>
    <div style="position: relative; z-index: 1;">
      ${logoUrl ? `<div style="margin-bottom: 16px; background: rgba(255,255,255,0.12); padding: 10px; border-radius: 6px; width: fit-content; backdrop-filter: blur(5px);"><img src="${logoUrl}" alt="Logo" style="max-width: ${logoSize}px; max-height: 80px; display: block; border-radius: 3px;" /></div>` : ''}
      <p style="margin: 0 0 6px 0; font-size: 21px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2;">${fullName}</p>
      ${jobTitle ? `<p style="margin: 0 0 2px 0; font-size: 12px; opacity: 0.95; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${jobTitle}</p>` : ''}
      ${company ? `<p style="margin: 0 0 16px 0; font-size: 12px; opacity: 0.92; font-weight: 500;">${company}</p>` : ''}
      <div style="background: rgba(255,255,255,0.15); padding: 12px 14px; border-radius: 6px; font-size: 12px; line-height: 1.8; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(8px);">
        ${email ? `<div><a href="mailto:${email}" style="color: white; text-decoration: none; font-weight: 500;">📧 ${email}</a></div>` : ''}
        ${phone ? `<div><a href="tel:${phone}" style="color: white; text-decoration: none; font-weight: 500;">📞 ${phone}</a></div>` : ''}
        ${website && showLinks ? `<div><a href="${website}" style="color: white; text-decoration: none; font-weight: 500;" target="_blank">🌐 ${website.replace(/^https?:\/\//, '')}</a></div>` : ''}
      </div>
    </div>
  </div>
</div>`;
    }

    setSignature(sig);
  };

  const adjustColor = (hexColor: string, percent: number) => {
    const num = parseInt(hexColor.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B)
      .toString(16).slice(1);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(signature);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                  Upload Logo
                </div>
              </label>
              {logoUrl && (
                <>
                  <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/20">
                    <img src={logoUrl} alt="Logo Preview" className="max-w-full h-auto" style={{ maxHeight: `${logoSize}px` }} />
                  </div>
                  <label className="block text-white font-semibold mb-2 text-sm mt-3">Logo Size: {logoSize}px</label>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
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

              <Button onClick={generateSignature} className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 hover:shadow-lg text-white font-semibold">
                Generate Signature
              </Button>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {signature && (
              <>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-4">Preview</h3>
                  <div className="bg-white rounded-lg p-6" dangerouslySetInnerHTML={{ __html: signature }} />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-4">HTML Code</h3>
                  <div className="bg-black/30 rounded-lg p-4 max-h-48 overflow-y-auto border border-white/10 mb-4">
                    <pre className="text-white/70 text-xs whitespace-pre-wrap break-words">{signature}</pre>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={copyToClipboard} className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm">
                      <Copy className="w-4 h-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy Code'}
                    </Button>
                    <Button onClick={downloadSignature} className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
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
  );
}
