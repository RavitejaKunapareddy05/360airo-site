'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Glass card component
const GlassCard = ({ children, className = '', hover = false }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`
    bg-gradient-to-br from-white/5 to-white/10 
    backdrop-blur-xl border border-white/20 
    shadow-2xl shadow-purple-500/10 rounded-3xl
    ${hover ? 'hover:border-[#b45ecf]/40 hover:shadow-purple-500/20 transition-all duration-300' : ''}
    ${className}
  `}>
    {children}
  </div>
);

// Navbar Component
const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'channels', label: 'Multi-Channel' },
    { id: 'personalization', label: 'AI Personalization' },
    { id: 'automation', label: 'Automation' },
    { id: 'inbox', label: 'Unified Inbox' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">
            Outreach360
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b45ecf]/25 transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-2 px-6 py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#b45ecf]/25 transition-all">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-t from-black/80 to-transparent border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent mb-4">
            Outreach360
          </div>
          <p className="text-white/70 text-sm">
            Everything you need to power high-performance outreach and drive revenue growth.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#overview" className="text-white/70 hover:text-white text-sm">Features</a></li>
            <li><a href="#pricing" className="text-white/70 hover:text-white text-sm">Pricing</a></li>
            <li><a href="#integrations" className="text-white/70 hover:text-white text-sm">Integrations</a></li>
            <li><a href="/docs" className="text-white/70 hover:text-white text-sm">Documentation</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-white/70 hover:text-white text-sm">About</a></li>
            <li><a href="/careers" className="text-white/70 hover:text-white text-sm">Careers</a></li>
            <li><a href="/contact" className="text-white/70 hover:text-white text-sm">Contact</a></li>
            <li><a href="/blog" className="text-white/70 hover:text-white text-sm">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="text-white/70 hover:text-white text-sm">Privacy Policy</a></li>
            <li><a href="/terms" className="text-white/70 hover:text-white text-sm">Terms of Service</a></li>
            <li><a href="/cookies" className="text-white/70 hover:text-white text-sm">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-8 pt-8 text-center">
        <p className="text-white/50 text-sm">© 2024 Outreach360. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Hero Section
const HeroSection = () => (
  <section id="overview" className="relative min-h-screen flex items-center justify-center px-4 py-20">
    <div className="absolute inset-0 bg-gradient-to-br from-[#b45ecf]/10 via-transparent to-[#480056]/10"></div>
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-full px-4 py-2 mb-6 border border-[#b45ecf]/30">
          <span className="text-[#b45ecf] text-sm font-medium">✨ Intelligent Outreach Platform</span>
        </div>
        
        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-8 leading-tight">
          Everything You Need to Power
          <span className="block bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#ff6b9d] bg-clip-text text-transparent">
            High-Performance Outreach
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our platform brings together every tool modern sales and marketing teams need to plan, personalize, 
          and automate outreach that actually converts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#b45ecf] to-[#805ad5] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 text-lg">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300 text-lg">
            Schedule Demo
          </button>
        </div>
      </motion.div>

      {/* Platform Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative max-w-5xl mx-auto"
      >
        <GlassCard className="p-4">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-5xl mb-6">🚀</div>
                <div className="text-3xl font-bold text-white mb-4">All-in-One Outreach Platform</div>
                <div className="text-white/70">See everything in action with a live demo</div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </section>
);

// Multi-Channel Section
const MultiChannelSection = () => (
  <section id="channels" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0014]/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 py-2 mb-6 border border-blue-500/30">
              <span className="text-blue-400 text-sm font-medium">Multi-Channel Outreach</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect With Prospects
              <span className="block text-blue-400">On Their Preferred Channels</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Your leads live across multiple platforms. With Outreach360, so does your outreach. 
              Connect with your audience on Email, LinkedIn, WhatsApp, SMS, and Calls — all managed 
              from one clean, unified dashboard.
            </p>
            
            <ul className="space-y-4">
              {[
                "Build multi-step sequences that automatically switch between channels",
                "Match engagement style to how your prospects prefer to communicate",
                "Maintain consistent messaging across all touchpoints",
                "Achieve higher reply rates and stronger relationships"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-1">
                    <div className="text-white text-sm">✓</div>
                  </div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2">
            <GlassCard className="p-8">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "📧", label: "Email", color: "from-blue-500 to-cyan-500" },
                  { icon: "💼", label: "LinkedIn", color: "from-purple-500 to-pink-500" },
                  { icon: "💬", label: "WhatsApp", color: "from-green-500 to-emerald-500" },
                  { icon: "📱", label: "SMS", color: "from-yellow-500 to-orange-500" },
                  { icon: "📞", label: "Calls", color: "from-red-500 to-pink-500" },
                  { icon: "🔄", label: "Sequences", color: "from-indigo-500 to-purple-500" }
                ].map((channel, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mx-auto mb-3`}>
                      <div className="text-2xl">{channel.icon}</div>
                    </div>
                    <div className="text-white font-semibold">{channel.label}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// AI Personalization Section
const AIPersonalizationSection = () => (
  <section id="personalization" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-medium">AI-Powered Personalization</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Scale Personalization
            <span className="block text-purple-400">Without Losing Authenticity</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Forget sending one-size-fits-all emails. Our AI engine writes personalized messages based on real-time data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-2xl">🤖</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Smart Message Generation</h3>
                  <p className="text-white/60">Based on company, role, and online behavior</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Personalized subject lines and message tone",
                  "Real-time data integration for relevance",
                  "Continuous learning from engagement patterns",
                  "Automated customization at scale"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <div className="text-white/80">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <div className="text-2xl">📈</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Performance Optimization</h3>
                  <p className="text-white/60">AI learns what works for your audience</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "40-60% higher open rates reported",
                  "Continuous improvement over time",
                  "Adaptive messaging strategies",
                  "Data-backed personalization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <div className="text-white/80">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </div>
  </section>
);

// Automation Section
const AutomationSection = () => (
  <section id="automation" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0014]/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full px-4 py-2 mb-6 border border-emerald-500/30">
            <span className="text-emerald-400 text-sm font-medium">Smart Automation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automated Sequences and
            <span className="block text-emerald-400">Intelligent Workflows</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Behavior-Triggered Workflows",
              description: "Automatically trigger actions based on prospect behavior — opens, clicks, or meeting bookings.",
              icon: "⚡",
              color: "from-emerald-500 to-green-500"
            },
            {
              title: "Smart Follow-ups",
              description: "System pauses when leads reply and re-engages silent prospects at optimal times.",
              icon: "🔄",
              color: "from-green-500 to-teal-500"
            },
            {
              title: "Zero Manual Labor",
              description: "No lead is ever lost, forgotten, or mishandled. Campaigns stay organized and efficient.",
              icon: "🤖",
              color: "from-teal-500 to-cyan-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-8 h-full" hover>
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <div className="text-2xl">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-grow">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Unified Inbox Section
const UnifiedInboxSection = () => (
  <section id="inbox" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-medium">Unified Communication</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One Inbox for
              <span className="block text-cyan-400">All Conversations</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Tired of switching tabs to find your conversations? Our unified inbox combines all your 
              communication channels in one simple interface.
            </p>
            
            <div className="space-y-6">
              {[
                "View and reply to emails, LinkedIn messages, and calls from one screen",
                "Add notes, assign follow-ups, and tag teammates in real time",
                "Keep your entire sales team aligned and organized",
                "Never miss an important conversation again"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 mt-1">
                    <div className="text-white text-sm">✓</div>
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <GlassCard className="p-6">
              <div className="bg-black/30 rounded-xl p-6">
                <div className="space-y-4">
                  {/* Inbox Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="text-white font-semibold">All Conversations</div>
                    <div className="text-white/60 text-sm">24 unread</div>
                  </div>
                  
                  {/* Conversation Items */}
                  {[
                    { name: "Sarah Johnson", company: "TechScale Inc.", channel: "Email", time: "2 min ago", unread: true },
                    { name: "Mike Rodriguez", company: "GrowthLabs", channel: "LinkedIn", time: "15 min ago", unread: true },
                    { name: "Alex Chen", company: "StartupXYZ", channel: "WhatsApp", time: "1 hour ago", unread: false },
                    { name: "Jessica Williams", company: "EnterpriseCo", channel: "Email", time: "2 hours ago", unread: false }
                  ].map((conv, index) => (
                    <div key={index} className={`flex items-center p-3 rounded-lg ${conv.unread ? 'bg-cyan-500/10' : 'bg-white/5'}`}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                        <div className="text-white text-sm">{conv.name.charAt(0)}</div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <div className="text-white font-medium">{conv.name}</div>
                          {conv.unread && <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>}
                        </div>
                        <div className="text-white/60 text-sm">{conv.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-sm">{conv.channel}</div>
                        <div className="text-white/40 text-xs">{conv.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Analytics Section
const AnalyticsSection = () => (
  <section id="analytics" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0014]/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full px-4 py-2 mb-6 border border-orange-500/30">
            <span className="text-orange-400 text-sm font-medium">Advanced Analytics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data-Driven Insights
            <span className="block text-orange-400">That Drive Growth</span>
          </h2>
        </div>
        
        <GlassCard className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Track Everything That Matters</h3>
              
              <div className="space-y-6">
                {[
                  { metric: "Open Rates", value: "42%", change: "+18%" },
                  { metric: "Reply Rates", value: "28%", change: "+12%" },
                  { metric: "Meeting Bookings", value: "15%", change: "+7%" },
                  { metric: "Conversion Rate", value: "8%", change: "+4%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-white/80">{item.metric}</div>
                      <div className="text-2xl font-bold text-white">{item.value}</div>
                    </div>
                    <div className="text-emerald-400 font-semibold">{item.change}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">AI-Powered Forecasting</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-white/80 mb-2">Pipeline Health</div>
                  <div className="flex items-center">
                    <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: '78%' }}></div>
                    </div>
                    <div className="text-white font-bold ml-4">78% Healthy</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-white/80 mb-2">Predicted Conversions</div>
                  <div className="text-3xl font-bold text-white">42 Deals</div>
                  <div className="text-white/60 text-sm mt-1">Next 30 days</div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-white/80 mb-2">Top Performing Channel</div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                      <div className="text-white">📧</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Sequences</div>
                      <div className="text-white/60 text-sm">68% engagement rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </section>
);

// Features Grid
const FeaturesGrid = () => {
  const features = [
    {
      title: "AI Call Assistant",
      description: "Transcribes, analyzes, and suggests follow-ups for every call",
      icon: "🎙️",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Built-in Lead Enrichment",
      description: "Automatically adds verified contact details to your leads",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Coaching",
      description: "Personalized feedback to optimize team performance",
      icon: "👨‍🏫",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Smart Scheduling",
      description: "Automated meeting booking with timezone adjustments",
      icon: "📅",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Workflow Automation",
      description: "CRM integrations that sync everything in real-time",
      icon: "⚙️",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Deliverability Optimizer",
      description: "Domain warming and reputation monitoring",
      icon: "📨",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Team Collaboration",
      description: "Shared workspace for marketing and sales alignment",
      icon: "👥",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Compliance & Security",
      description: "GDPR compliant with enterprise-grade encryption",
      icon: "🔒",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Feature Suite
              <span className="block text-[#b45ecf]">For Modern Outreach Teams</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to automate, personalize, and scale your outreach strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-6 h-full" hover>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <div className="text-xl">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => (
  <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0014]/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="block text-[#b45ecf]">Pricing That Scales</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the plan that fits your team's needs. All plans include our core features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$49",
              period: "/month",
              description: "Perfect for individuals and small teams",
              features: ["1,000 contacts", "Multi-channel outreach", "Basic analytics", "Email support"],
              color: "from-blue-500/20 to-cyan-500/20",
              border: "border-blue-500/30"
            },
            {
              name: "Professional",
              price: "$99",
              period: "/month",
              description: "For growing sales teams",
              features: ["10,000 contacts", "AI personalization", "Advanced analytics", "Priority support", "CRM integration"],
              color: "from-[#b45ecf]/20 to-[#805ad5]/20",
              border: "border-[#b45ecf]/30",
              popular: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "For large organizations",
              features: ["Unlimited contacts", "All AI features", "Custom integrations", "Dedicated support", "Team training", "SLA guarantee"],
              color: "from-purple-500/20 to-pink-500/20",
              border: "border-purple-500/30"
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-[#b45ecf] to-[#805ad5] text-white text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <GlassCard className={`p-8 h-full border-2 ${plan.border} ${plan.popular ? 'border-[#b45ecf]/50' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60">{plan.period}</span>
                  </div>
                  <p className="text-white/60">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mr-3">
                        <div className="text-white text-xs">✓</div>
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#b45ecf] to-[#805ad5] text-white hover:shadow-lg hover:shadow-[#b45ecf]/25'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf] via-[#805ad5] to-[#553c9a] opacity-20"></div>
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center border border-white/20">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#b45ecf] to-[#805ad5] flex items-center justify-center mx-auto mb-8">
              <div className="text-white text-3xl">🚀</div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Outreach?
            </h2>
            
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of teams who've increased reply rates by 40% and closed more deals with intelligent outreach automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#b45ecf] to-[#805ad5] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 text-lg">
                Start Your Free Trial
              </button>
              
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300 text-lg">
                Book a Demo
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-white font-semibold">14-Day Trial</div>
                <div className="text-white/60 text-sm">No credit card</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">100% Uptime</div>
                <div className="text-white/60 text-sm">Enterprise SLA</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">24/7 Support</div>
                <div className="text-white/60 text-sm">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold">5,000+ Teams</div>
                <div className="text-white/60 text-sm">Trust us</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleScroll = () => {
    const sections = [
      'overview', 'channels', 'personalization', 
      'automation', 'inbox', 'analytics', 'pricing'
    ];
    
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Multi-Channel Section */}
        <MultiChannelSection />
        
        {/* AI Personalization Section */}
        <AIPersonalizationSection />
        
        {/* Automation Section */}
        <AutomationSection />
        
        {/* Unified Inbox Section */}
        <UnifiedInboxSection />
        
        {/* Analytics Section */}
        <AnalyticsSection />
        
        {/* Features Grid */}
        <FeaturesGrid />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Final CTA Section */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
