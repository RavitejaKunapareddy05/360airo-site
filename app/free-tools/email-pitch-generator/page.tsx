'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy, Download, Sparkles, Mail, CheckCircle, Loader, Upload, Globe, Settings } from 'lucide-react';
import { useFreeToolsAuth } from '@/app/contexts/FreeToolsAuthContext';
import { parseCSV, validateProspect, type Prospect } from '@/lib/csvParser';
import { scrapeWebsite, extractKeyInfo } from '@/lib/webScraper';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

export default function EmailPitchGeneratorPage() {
  const { email: verifiedEmail } = useFreeToolsAuth();

  // Mode Selection
  const [mode, setMode] = useState<'single' | 'batch' | 'company'>('single');

  // Company Profile States (Personalization)
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [scrapedCompanyData, setScrapedCompanyData] = useState<any>(null);
  const [scrapingCompany, setScrapingCompany] = useState(false);

  // Single Pitch Form States
  const [recipientName, setRecipientName] = useState('');
  const [recipientCompany, setRecipientCompany] = useState('');
  const [recipientWebsite, setRecipientWebsite] = useState('');
  const [productService, setProductService] = useState('');
  const [uniqueValue, setUniqueValue] = useState('');
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Batch CSV States
  const [csvProspects, setCsvProspects] = useState<Prospect[]>([]);
  const [batchPitches, setBatchPitches] = useState<any[]>([]);
  const [batchLoading, setBatchLoading] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });
  const [selectedPitch, setSelectedPitch] = useState<any>(null);

  const generatePitch = async () => {
    if (!recipientName || !companyName || !productService || !uniqueValue) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/free-tools/email-pitch-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientName,
          companyName,
          productService,
          uniqueValue,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate pitch');
      }

      const data = await response.json();
      setGeneratedPitch(data.pitch);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to generate pitch');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPitch = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedPitch));
    element.setAttribute('download', 'email-pitch.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Scrape company website for personalization
  const handleScrapeCompanyWebsite = async () => {
    if (!companyWebsite.trim()) {
      alert('Please enter your company website');
      return;
    }

    setScrapingCompany(true);
    try {
      const data = await scrapeWebsite(companyWebsite);
      if (data) {
        setScrapedCompanyData(data);
        const info = extractKeyInfo(data);
        setCompanyDescription(info);
        alert('✅ Company info extracted successfully!');
      } else {
        alert('⚠️ Could not scrape website. Using manual description.');
      }
    } catch (error) {
      console.error('Scrape error:', error);
      alert('Error scraping website');
    } finally {
      setScrapingCompany(false);
    }
  };

  // Handle CSV file upload
  const handleCSVUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const prospects = await parseCSV(file);
      const validProspects = prospects.filter(p => validateProspect(p).valid);
      setCsvProspects(validProspects);
      alert(`✅ Loaded ${validProspects.length} valid prospects`);
    } catch (error) {
      alert(`❌ ${error instanceof Error ? error.message : 'Failed to parse CSV'}`);
    }
  };

  // Generate pitch for single prospect
  const generateSinglePitch = async () => {
    if (!recipientName || !recipientCompany || !productService || !uniqueValue) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/free-tools/email-pitch-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientName,
          recipientCompany,
          recipientWebsite,
          companyName,
          companyWebsite,
          companyDescription,
          productService,
          uniqueValue,
          scrapedCompanyData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to generate pitch');
      }

      const data = await response.json();
      setGeneratedPitch(data.pitch);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to generate pitch');
    } finally {
      setLoading(false);
    }
  };

  // Generate pitches for batch (CSV)
  const generateBatchPitches = async () => {
    if (csvProspects.length === 0) {
      alert('Please upload a CSV file with prospects');
      return;
    }

    if (!companyName || !productService || !uniqueValue) {
      alert('Please complete your company profile');
      return;
    }

    setBatchLoading(true);
    setBatchProgress({ current: 0, total: csvProspects.length });
    const results: any[] = [];

    try {
      for (let i = 0; i < csvProspects.length; i++) {
        const prospect = csvProspects[i];
        
        try {
          const response = await fetch('/api/free-tools/email-pitch-generator', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              recipientName: prospect.first_name,
              recipientCompany: prospect.company || 'their company',
              recipientWebsite: prospect.website,
              companyName,
              companyWebsite,
              companyDescription,
              productService,
              uniqueValue,
              scrapedCompanyData,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            results.push({
              prospect,
              pitch: data.pitch,
              success: true
            });
          } else {
            results.push({
              prospect,
              pitch: '',
              success: false,
              error: 'Generation failed'
            });
          }
        } catch (error) {
          results.push({
            prospect,
            pitch: '',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }

        setBatchProgress({ current: i + 1, total: csvProspects.length });
      }

      setBatchPitches(results);
      if (results.length > 0) {
        setSelectedPitch(results[0]);
      }
      alert(`✅ Generated ${results.filter(r => r.success).length}/${results.length} pitches`);
    } catch (error) {
      alert('Error generating batch pitches');
    } finally {
      setBatchLoading(false);
    }
  };

  return (
    <ProtectedFreeTool toolName="Email Pitch Generator">
      <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-pink-200 to-rose-200 bg-clip-text text-transparent mb-2">
            AI Pitch Generator
          </h1>
          <p className="text-white/70 text-sm md:text-base">Logged in as: <span className="text-white font-semibold">{verifiedEmail}</span></p>
        </motion.div>

        {/* Mode Selector */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3 justify-center mb-8 flex-wrap">
          {[
            { id: 'company', label: 'Company Setup', icon: Settings },
            { id: 'single', label: 'Single Pitch', icon: Mail },
            { id: 'batch', label: 'Batch (CSV)', icon: Upload }
          ].map(m => (
            <button
              key={m.id}
              onClick={() => setMode(m.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                mode === m.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <m.icon className="w-4 h-4" />
              {m.label}
            </button>
          ))}
        </motion.div>

        {/* Company Setup Tab */}
        {mode === 'company' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl mb-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-pink-400" />
              Company Profile
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Company Website</label>
                  <input
                    type="url"
                    placeholder="yourcompany.com"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <button
                  onClick={handleScrapeCompanyWebsite}
                  disabled={scrapingCompany || !companyWebsite}
                  className="self-end bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {scrapingCompany ? <Loader className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
                  {scrapingCompany ? 'Scraping...' : 'Auto-Extract'}
                </button>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Company Description</label>
                <textarea
                  placeholder="What your company does, products/services, target audience..."
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500 h-24"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Product/Service You're Pitching</label>
                <input
                  type="text"
                  placeholder="Email automation, analytics, consulting..."
                  value={productService}
                  onChange={(e) => setProductService(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Unique Value Proposition</label>
                <textarea
                  placeholder="What makes your solution unique? Key benefits, ROI, differentiators..."
                  value={uniqueValue}
                  onChange={(e) => setUniqueValue(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500 h-20"
                />
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-200 text-xs">💡 Tip: Your company profile will be used to personalize pitches for each prospect. Website scraping helps us extract your actual company info automatically!</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Single Pitch Tab */}
        {mode === 'single' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Generate Single Pitch</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={recipientCompany}
                    onChange={(e) => setRecipientCompany(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Company Website (Optional)</label>
                <input
                  type="url"
                  placeholder="acmecorp.com"
                  value={recipientWebsite}
                  onChange={(e) => setRecipientWebsite(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p className="text-white/50 text-xs mt-1">AI will scrape this to personalize the pitch</p>
              </div>

              <Button
                onClick={generateSinglePitch}
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:shadow-lg text-white font-semibold py-2 disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate Pitch'}
              </Button>
            </div>

            {generatedPitch && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-white/10 max-h-48 overflow-y-auto">
                  <p className="text-white/80 text-sm whitespace-pre-wrap font-mono">{generatedPitch}</p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    onClick={copyToClipboard} 
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm py-2"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                  <Button 
                    onClick={downloadPitch} 
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-sm py-2"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Batch CSV Tab */}
        {mode === 'batch' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {/* CSV Upload */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-pink-400" />
                Upload CSV
              </h2>

              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  className="hidden"
                  id="csv-input"
                />
                <label htmlFor="csv-input" className="cursor-pointer">
                  <Upload className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Click to upload CSV</p>
                  <p className="text-white/50 text-xs mt-1">Required columns: first_name, last_name, email</p>
                  <p className="text-white/50 text-xs mt-1">Optional: company, title, website, seniority</p>
                </label>
              </div>

              {csvProspects.length > 0 && (
                <div className="mt-4">
                  <p className="text-green-300 text-sm mb-2">✅ Loaded {csvProspects.length} prospects</p>
                  <Button
                    onClick={generateBatchPitches}
                    disabled={batchLoading || !companyName || !productService || !uniqueValue}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold py-2 disabled:opacity-50"
                  >
                    {batchLoading ? `Generating... (${batchProgress.current}/${batchProgress.total})` : 'Generate All Pitches'}
                  </Button>
                </div>
              )}
            </div>

            {/* Batch Results */}
            {batchPitches.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                <h2 className="text-xl font-bold text-white mb-4">Generated Pitches</h2>
                
                {/* Pitch List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 max-h-64 overflow-y-auto">
                  {batchPitches.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPitch(result)}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedPitch?.prospect.id === result.prospect.id
                          ? 'bg-pink-500/20 border border-pink-500'
                          : 'bg-white/10 border border-white/10 hover:bg-white/15'
                      }`}
                    >
                      <p className="text-white text-sm font-semibold">{result.prospect.first_name} {result.prospect.last_name}</p>
                      <p className="text-white/50 text-xs">{result.prospect.email}</p>
                      {result.success ? (
                        <span className="text-green-300 text-xs">✅ Generated</span>
                      ) : (
                        <span className="text-red-300 text-xs">❌ {result.error}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Selected Pitch Preview */}
                {selectedPitch && selectedPitch.success && (
                  <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                    <p className="text-white text-sm font-semibold mb-2">
                      {selectedPitch.prospect.first_name} {selectedPitch.prospect.last_name} ({selectedPitch.prospect.email})
                    </p>
                    <div className="bg-white/5 rounded p-3 max-h-40 overflow-y-auto">
                      <p className="text-white/80 text-xs whitespace-pre-wrap font-mono">{selectedPitch.pitch}</p>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <Button 
                        onClick={() => navigator.clipboard.writeText(selectedPitch.pitch)}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs py-1"
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                      <Button 
                        onClick={() => {
                          const el = document.createElement('a');
                          el.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(selectedPitch.pitch);
                          el.download = `${selectedPitch.prospect.first_name}-pitch.txt`;
                          el.click();
                        }}
                        className="flex-1 bg-pink-500 hover:bg-pink-600 text-white text-xs py-1"
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-center text-white/50 text-xs">
          <p>Part of 360airo Free Tools • AI Pitch Generator with Web Scraping</p>
        </motion.div>
      </div>
    </div>
    </ProtectedFreeTool>
  );
}

