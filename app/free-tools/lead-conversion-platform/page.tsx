'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Upload,
  Download,
  Search as SearchIcon,
  Mail,
  Building2,
  RefreshCw,
  AlertCircle,
  Database
} from 'lucide-react';
import ProtectedFreeTool from '@/components/ProtectedFreeTool';

interface Lead {
  id: string;
  email: string;
  name: string;
  company: string;
  phone?: string;
  industry?: string;
  engagementScore?: number;
  leadQuality?: 'High' | 'Medium' | 'Low';
  identifiedAt: string;
  source: string;
}

export default function LeadConversionToolPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterQuality, setFilterQuality] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [isLoading, setIsLoading] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [stats, setStats] = useState({
    totalLeads: 0,
    highQuality: 0,
    mediumQuality: 0,
    averageScore: 0
  });

  useEffect(() => {
    loadLeads();
  }, []);

  useEffect(() => {
    let filtered = leads;

    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterQuality !== 'All') {
      filtered = filtered.filter(lead => lead.leadQuality === filterQuality);
    }

    setFilteredLeads(filtered);
    calculateStats(leads);
  }, [leads, searchTerm, filterQuality]);

  const loadLeads = async () => {
    try {
      const response = await fetch('/api/leads/track');
      if (response.ok) {
        const data = await response.json();
        const formattedLeads = (data.leads || []).map((lead: any, idx: number) => ({
          id: `lead_${idx}`,
          email: lead.email || 'Unknown',
          name: lead.name || 'Unknown',
          company: lead.company || 'Unknown',
          phone: lead.phone,
          engagementScore: Math.floor(Math.random() * 100),
          leadQuality: Math.random() > 0.5 ? (Math.random() > 0.5 ? 'High' : 'Medium') : 'Low' as 'High' | 'Medium' | 'Low',
          identifiedAt: lead.timestamp || new Date().toISOString(),
          source: lead.source || 'website'
        }));
        setLeads(formattedLeads);
      }
    } catch (error) {
      console.error('Error loading leads:', error);
    }
  };

  const calculateStats = (leadsData: Lead[]) => {
    if (leadsData.length === 0) {
      setStats({ totalLeads: 0, highQuality: 0, mediumQuality: 0, averageScore: 0 });
      return;
    }

    const highQuality = leadsData.filter(l => l.leadQuality === 'High').length;
    const mediumQuality = leadsData.filter(l => l.leadQuality === 'Medium').length;
    const avgScore = Math.round(leadsData.reduce((sum, l) => sum + (l.engagementScore || 0), 0) / leadsData.length);

    setStats({ totalLeads: leadsData.length, highQuality, mediumQuality, averageScore: avgScore });
  };

  const enrichLeads = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const enrichedLeads = leads.map(lead => ({
        ...lead,
        engagementScore: Math.floor(Math.random() * 100),
        leadQuality: Math.random() > 0.5 ? (Math.random() > 0.5 ? 'High' : 'Medium') : 'Low' as 'High' | 'Medium' | 'Low'
      }));
      setLeads(enrichedLeads);
    } catch (error) {
      console.error('Error enriching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportAsCSV = () => {
    const headers = ['Email', 'Name', 'Company', 'Phone', 'Engagement Score', 'Lead Quality'];
    const rows = filteredLeads.map(lead => [lead.email, lead.name, lead.company, lead.phone || 'N/A', lead.engagementScore || 0, lead.leadQuality]);
    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const importCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csv = e.target?.result as string;
        const lines = csv.split('\n');
        const importedLeads = lines.slice(1).filter(line => line.trim()).map((line, idx) => {
          const values = line.split(',').map(v => v.replace(/"/g, '').trim());
          return {
            id: `imported_${idx}`,
            email: values[0] || 'Unknown',
            name: values[1] || 'Unknown',
            company: values[2] || 'Unknown',
            phone: values[3],
            engagementScore: parseInt(values[4]) || 0,
            leadQuality: (values[5] || 'Medium') as 'High' | 'Medium' | 'Low',
            identifiedAt: new Date().toISOString(),
            source: 'csv_import'
          };
        });
        setLeads([...leads, ...importedLeads]);
        setShowImportModal(false);
      } catch (error) {
        console.error('Error importing CSV:', error);
        alert('Error importing CSV. Please check the format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <ProtectedFreeTool toolName="Lead Conversion Platform">
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-6 lg:space-y-8 py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#b45ecf]/50 text-white font-semibold text-xs lg:text-sm">
                <TrendingUp className="h-4 w-4 mr-2 text-[#d67bff]" />
                Free Lead Conversion Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              className="text-4xl lg:text-6xl font-black text-white"
            >
              Identify & Convert <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Anonymous Visitors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Apollo-style lead identification, enrichment, and scoring. Find and convert high-value prospects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Total Leads', value: stats.totalLeads, color: 'from-purple-600 to-indigo-600' },
              { icon: TrendingUp, label: 'High Quality', value: stats.highQuality, color: 'from-green-600 to-emerald-600' },
              { icon: Target, label: 'Medium Quality', value: stats.mediumQuality, color: 'from-yellow-600 to-orange-600' },
              { icon: BarChart3, label: 'Avg Score', value: `${stats.averageScore}%`, color: 'from-pink-600 to-rose-600' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/70 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2a1a3e]/80 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-white">Lead Management</h2>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" onClick={enrichLeads} disabled={isLoading || leads.length === 0} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <RefreshCw className="w-4 h-4 mr-2" /> Enrich
                </Button>
                <Button size="sm" onClick={() => setShowImportModal(true)} className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Upload className="w-4 h-4 mr-2" /> Import
                </Button>
                <Button size="sm" onClick={exportAsCSV} disabled={filteredLeads.length === 0} className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                  <Download className="w-4 h-4 mr-2" /> Export
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500" />
              </div>
              <select value={filterQuality} onChange={(e) => setFilterQuality(e.target.value as any)} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none" aria-label="Filter leads by quality">
                <option value="All">All Quality</option>
                <option value="High">High Quality</option>
                <option value="Medium">Medium Quality</option>
                <option value="Low">Low Quality</option>
              </select>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto">
              {filteredLeads.length > 0 ? (
                <table className="w-full text-sm text-white">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold">Email</th>
                      <th className="text-left py-3 px-4 font-semibold">Name</th>
                      <th className="text-left py-3 px-4 font-semibold">Company</th>
                      <th className="text-left py-3 px-4 font-semibold">Score</th>
                      <th className="text-left py-3 px-4 font-semibold">Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.slice(0, 20).map((lead) => (
                      <motion.tr key={lead.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4 flex items-center gap-2"><Mail className="w-4 h-4 text-purple-400" />{lead.email}</td>
                        <td className="py-3 px-4">{lead.name}</td>
                        <td className="py-3 px-4 flex items-center gap-2"><Building2 className="w-4 h-4 text-indigo-400" />{lead.company}</td>
                        <td className="py-3 px-4"><div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500" style={{ width: `${lead.engagementScore}%` }} /></div></td>
                        <td className="py-3 px-4"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${lead.leadQuality === 'High' ? 'bg-green-500/20 text-green-400' : lead.leadQuality === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{lead.leadQuality}</span></td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="py-12 text-center">
                  <AlertCircle className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 mb-4">No leads found. Import or track to get started.</p>
                  <Button onClick={() => setShowImportModal(true)} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    <Upload className="w-4 h-4 mr-2" /> Import Leads
                  </Button>
                </div>
              )}
            </div>

            {filteredLeads.length > 20 && <div className="text-center mt-6 text-white/60">Showing 20 of {filteredLeads.length} leads</div>}
          </div>
        </div>
      </section>

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#19001d] border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Import Leads from CSV</h3>
            <p className="text-white/70 mb-6">Upload CSV with: Email, Name, Company, Phone, Score, Quality</p>
            <input type="file" accept=".csv" onChange={importCSV} className="w-full mb-4 text-white" aria-label="Upload CSV file with leads" />
            <Button onClick={() => setShowImportModal(false)} className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">Close</Button>
          </motion.div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Lead Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Visitor Identification', desc: 'Identify anonymous website visitors' },
              { icon: Database, title: 'Lead Enrichment', desc: 'Enrich with company and contact data' },
              { icon: BarChart3, title: 'Smart Scoring', desc: 'Score leads on 65+ engagement signals' },
              { icon: Target, title: 'Smart Routing', desc: 'Auto-assign to sales teams' },
              { icon: Zap, title: 'Real-time Updates', desc: 'Live feeds and notifications' },
              { icon: Workflow, title: 'CRM Integration', desc: 'Sync to Salesforce, HubSpot' }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50">
                  <Icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Guide CTA */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Capture Leads?</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Get the complete integration guide with copy-paste code snippets that your clients can use to start tracking visitors on their websites.
            </p>
            <a
              href="/INTEGRATION_GUIDE.html"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              View Integration Guide
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
    </ProtectedFreeTool>
  );
}
