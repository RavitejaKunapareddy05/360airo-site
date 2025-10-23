'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Cpu, MessageSquare, Workflow, CheckCircle2, Play, Star, Quote, Crown, BadgeCheck } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';

/* GlowCard with cursor-reactive glow */
const GlowCard = ({ children, className = '', glowColor = 'rgba(180,94,207,0.35)', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(214,123,255,0.2) 25%, transparent 55%)`,
          borderRadius: '50%',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Motion variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6, 
      staggerChildren: 0.2,
      ease: "easeOut"
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

/* Section divider */
const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#b45ecf]/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#d67bff]" />
      <div className="h-px bg-gradient-to-r from-[#b45ecf]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

export default function FeaturesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6">
            <div className="text-center space-y-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-block"
              >
                <div className="group relative cursor-pointer">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(180,94,207,0.4)',
                        '0 0 60px rgba(214,123,255,0.6)',
                        '0 0 30px rgba(180,94,207,0.4)',
                      ],
                    }}
                    transition={{ duration: 3.6, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/30 via-[#d67bff]/20 to-[#480056]/30 rounded-full blur-xl"
                  />
                  <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#b45ecf]/50 text-white font-semibold text-sm sm:text-base">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                      className="mr-3"
                    >
                      <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-[#d67bff]" />
                    </motion.div>
                    <span>Enterprise-Grade Outreach Platform</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight"
              >
                <span className="block">Everything You Need</span>
                <span className="block bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-white bg-clip-text text-transparent">
                  to Power High-Performance
                </span>
                <span className="block text-white">Outreach</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay: 1, duration: 1.1 }}
                className="h-1.5 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#480056] rounded-full relative overflow-hidden max-w-md mx-auto"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="space-y-5 max-w-4xl mx-auto"
              >
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                  Our platform brings together every tool modern sales and marketing teams need to plan, personalize, and automate outreach that actually converts.
                </p>
                <p className="text-base text-white/75">
                  This is not just another cold outreach tool. It's an all-in-one system designed to make your entire prospecting process smarter, faster, and effortlessly scalable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <div className="max-w-6   xl mx-auto px-4 sm:px-6">
   

            <div className="space-y-24">
              {/* Multi-Channel Outreach */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Workflow className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Multi-Channel Outreach That Converts</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Your leads live across multiple platforms. With our platform, so does your outreach. Connect with your audience on Email, LinkedIn, WhatsApp, SMS, and Calls — all managed from one clean, unified dashboard.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Build multi-step sequences that automatically switch between channels to match how your prospects prefer to engage. Whether you start with a personalized email or a LinkedIn connect request, your message stays consistent and timely.
                  </p>
                  <div className="bg-gradient-to-r from-[#0077B5]/20 to-[#00A0DC]/20 p-4 rounded-xl border border-[#0077B5]/30">
                    <p className="text-white font-semibold text-sm">
                      The result? Higher reply rates, stronger relationships, and a fully optimized sales funnel.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(0,119,181,0.4)">
                  <Card className="relative bg-[#0a1a2e] backdrop-blur-sm p-6 h-full border border-[#0077B5]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#0a1a2e]/80 group-hover:border-[#0077B5]/50 group-hover:scale-105">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        </div>
                        <div className="text-white/60 text-sm">Multi-Channel Dashboard</div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Email', 'LinkedIn', 'WhatsApp', 'SMS', 'Calls'].map((channel, i) => (
                          <motion.div
                            key={channel}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 rounded-full border border-white/20 text-white text-xs"
                          >
                            {channel}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="space-y-3">
                        {[80, 65, 90, 55, 75].map((width, i) => (
                          <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${width}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="h-2 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>

              {/* AI-Powered Personalization */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="lg:order-2 space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Brain className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI-Powered Personalization at Scale</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Forget sending one-size-fits-all emails. Our AI engine writes personalized messages based on your prospect's company, role, and online behavior — so every email feels handcrafted.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    From subject lines to message tone, everything is customized automatically using real-time data. The AI continuously learns what works best for your audience, improving your open and response rates over time.
                  </p>
                  <div className="bg-gradient-to-r from-[#b45ecf]/20 to-[#d67bff]/20 p-4 rounded-xl border border-[#b45ecf]/30">
                    <p className="text-white font-semibold text-sm">
                      You can personalize at scale without ever compromising authenticity.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(180,94,207,0.4)">
                  <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 h-full border border-[#b45ecf]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#b45ecf]/50 group-hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 bg-[#b45ecf] rounded-full"
                        />
                        <span className="text-white/60 text-sm">AI is personalizing your message...</span>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="bg-white/5 p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-sm">Subject: Personalized approach for Acme Corp</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="bg-white/5 p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-sm">Hi Sarah, noticed your work at Acme Corp...</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="bg-white/5 p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-sm">Personalized based on Tech Industry and Marketing Role</div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>

              {/* Automated Sequences */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#480056] to-[#b45ecf] w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Cpu className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Automated Sequences and Smart Workflows</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Follow-ups shouldn't feel like manual labor. Our automation engine ensures that every lead receives the right message at the right time.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Easily create workflows that trigger actions based on prospect behavior — whether that's opening an email, clicking a link, or booking a meeting. The system automatically pauses communication when a lead replies and re-engages those who go silent.
                  </p>
                  <div className="bg-gradient-to-r from-[#480056]/20 to-[#b45ecf]/20 p-4 rounded-xl border border-[#480056]/30">
                    <p className="text-white font-semibold text-sm">
                      No lead is ever lost, forgotten, or mishandled. Every campaign stays organized, efficient, and always one step ahead.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(72,0,86,0.4)">
                  <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 h-full border border-[#480056]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#480056]/50 group-hover:scale-105">
                    <div className="space-y-4">
                      {[
                        { step: 'Day 1', action: 'Send Email', trigger: 'Auto-send' },
                        { step: 'Day 2', action: 'LinkedIn Connect', trigger: 'If no reply' },
                        { step: 'Day 4', action: 'Follow-up Email', trigger: 'If connected' },
                        { step: 'Day 7', action: 'SMS Reminder', trigger: 'If opened' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#480056] to-[#b45ecf] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{i + 1}</span>
                            </div>
                            <div>
                              <div className="text-white text-sm font-semibold">{item.action}</div>
                              <div className="text-white/60 text-xs">{item.trigger}</div>
                            </div>
                          </div>
                          <div className="text-white/40 text-xs">{item.step}</div>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: 'spring' }}
                        className="flex items-center justify-center space-x-2 mt-4"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-sm">Workflow Active - 24/7 Automation</span>
                      </motion.div>
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>

              {/* Unified Inbox */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="lg:order-2 space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#d67bff] to-[#b45ecf] w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Unified Inbox for Seamless Communication</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Tired of switching tabs to find your conversations? Our unified inbox combines all your communication channels in one simple interface.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    View and reply to emails, LinkedIn messages, or call updates from a single screen. Add notes, assign follow-ups, and tag teammates in real time.
                  </p>
                  <div className="bg-gradient-to-r from-[#d67bff]/20 to-[#b45ecf]/20 p-4 rounded-xl border border-[#d67bff]/30">
                    <p className="text-white font-semibold text-sm">
                      The platform keeps your entire sales team aligned, organized, and always in sync with ongoing conversations.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(214,123,255,0.4)">
                  <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 h-full border border-[#d67bff]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#d67bff]/50 group-hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-white font-semibold">Unified Inbox</div>
                        <div className="flex space-x-1">
                          {['All', 'Email', 'LinkedIn', 'SMS'].map((tab, i) => (
                            <div key={tab} className={`px-2 py-1 rounded text-xs ${
                              i === 0 ? 'bg-[#d67bff] text-white' : 'text-white/60'
                            }`}>
                              {tab}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {[
                        { platform: 'Email', name: 'Sarah Chen', preview: 'Thanks for the proposal...', time: '2m ago', unread: true },
                        { platform: 'LinkedIn', name: 'Mike Rodriguez', preview: 'Connected and interested...', time: '1h ago', unread: false },
                        { platform: 'SMS', name: 'Alex Thompson', preview: 'Can we schedule a call?...', time: '3h ago', unread: true },
                      ].map((message, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`flex items-center space-x-3 p-3 rounded-lg border ${
                            message.unread ? 'bg-[#d67bff]/10 border-[#d67bff]/30' : 'bg-white/5 border-white/10'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.platform === 'Email' ? 'bg-blue-500/20' :
                            message.platform === 'LinkedIn' ? 'bg-[#0077B5]/20' :
                            'bg-green-500/20'
                          }`}>
                            <span className="text-white text-xs">
                              {message.platform === 'Email' ? '✉️' : message.platform === 'LinkedIn' ? '💼' : '💬'}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="text-white text-sm font-semibold">{message.name}</div>
                              <div className="text-white/40 text-xs">{message.time}</div>
                            </div>
                            <div className="text-white/60 text-xs truncate">{message.preview}</div>
                          </div>
                          {message.unread && (
                            <div className="w-2 h-2 bg-[#d67bff] rounded-full"></div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>

              {/* Lead Enrichment & Verification */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Built-in Lead Enrichment and Verification</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Your outreach is only as strong as your data. Our lead enrichment engine automatically adds verified contact details to your leads — including company name, position, industry, LinkedIn URL, and verified email address.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    You can trust that every lead you contact is accurate, active, and relevant. With built-in verification, bounce rates stay low, sender reputation stays high, and your campaigns maintain consistent deliverability.
                  </p>
                  
                  {/* Data Quality Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { value: '98%', label: 'Data Accuracy', color: 'text-cyan-400' },
                      { value: '<1%', label: 'Bounce Rate', color: 'text-emerald-400' },
                      { value: '99.2%', label: 'Deliverability', color: 'text-cyan-400' },
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-white/60 text-sm mt-1">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* DNA Helix Data Visualization */}
                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(6,182,212,0.4)">
                  <Card className="relative bg-[#0a1a2e] backdrop-blur-sm p-8 h-full border border-[#06b6d4]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#0a1a2e]/80 group-hover:border-[#06b6d4]/50 group-hover:scale-105 overflow-hidden">
                    
                    {/* Animated DNA Helix Background */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(3)].map((_, helixIndex) => (
                        <motion.div
                          key={helixIndex}
                          className="absolute left-1/2 top-0 w-1 h-full"
                          style={{ 
                            left: `${25 + helixIndex * 25}%`,
                            background: 'linear-gradient(180deg, transparent, #06b6d4, transparent)'
                          }}
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 8 + helixIndex * 2, repeat: Infinity, ease: "linear" }}
                        />
                      ))}
                    </div>

                    <div className="relative z-10">
                      {/* Verification Process Flow */}
                      <div className="text-center mb-8">
              
                        <h4 className="text-white font-semibold text-lg mb-2">Real-Time Data Enrichment</h4>
                        <p className="text-white/60 text-sm">Continuous verification process</p>
                      </div>

                      {/* Data Points Orbiting System */}
                      <div className="relative h-48 mb-8">
                        {/* Central Verification Core */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              '0 0 20px rgba(6,182,212,0.3)',
                              '0 0 40px rgba(6,182,212,0.6)',
                              '0 0 20px rgba(6,182,212,0.3)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] rounded-full flex items-center justify-center"
                        >
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>

                        {/* Orbiting Data Points */}
                        {[
                          { icon: '🏢', label: 'Company', color: 'bg-blue-500/20' },
                          { icon: '👤', label: 'Position', color: 'bg-purple-500/20' },
                          { icon: '📊', label: 'Industry', color: 'bg-cyan-500/20' },
                          { icon: '🔗', label: 'LinkedIn', color: 'bg-sky-500/20' },
                          { icon: '📧', label: 'Email', color: 'bg-emerald-500/20' },
                          { icon: '🌐', label: 'Website', color: 'bg-amber-500/20' },
                        ].map((point, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-12 h-12 rounded-xl ${point.color} border border-white/20 flex items-center justify-center text-xl`}
                            animate={{
                              x: [0, Math.cos((i * 60) * Math.PI / 180) * 80, 0],
                              y: [0, Math.sin((i * 60) * Math.PI / 180) * 80, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 6 + i,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.2
                            }}
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: -24,
                              marginTop: -24
                            }}
                          >
                            {point.icon}
                          </motion.div>
                        ))}
                      </div>

                      {/* Verification Status Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { status: 'Email Verification', verified: true, percentage: 98 },
                          { status: 'Phone Validation', verified: true, percentage: 95 },
                          { status: 'Company Data', verified: true, percentage: 96 },
                          { status: 'Social Profiles', verified: true, percentage: 92 },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="bg-white/5 rounded-lg p-3 border border-white/10"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white text-sm font-medium">{item.status}</span>
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                className={`w-2 h-2 rounded-full ${item.verified ? 'bg-green-400' : 'bg-yellow-400'}`}
                              />
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                                className="h-1.5 bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] rounded-full"
                              />
                            </div>
                            <div className="text-right mt-1">
                              <span className="text-cyan-400 text-xs font-bold">{item.percentage}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Trust Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center justify-center space-x-2 mt-6 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                      >
                        <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-cyan-400 text-sm font-semibold">Enterprise-Grade Data Quality</span>
                      </motion.div>
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Analytics and Insights - Timeline Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="relative"
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Analytics & Insights</span>
      </h3>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          title: "Real-Time Tracking",
          description: "Track opens, clicks, replies, conversions, and performance metrics for each campaign in real time.",
          icon: "📊",
          color: "from-emerald-500 to-green-500"
        },
        {
          title: "Cross-Channel Analysis",
          description: "Compare results across channels, identify top-performing sequences, and see which touchpoints drive engagement.",
          icon: "🔄",
          color: "from-cyan-500 to-blue-500"
        },
        {
          title: "AI Forecasting",
          description: "AI-driven forecasting helps your team understand pipeline health and predict conversions accurately.",
          icon: "🤖",
          color: "from-violet-500 to-purple-500"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
            <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
            <p className="text-white/70 leading-relaxed">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center mt-12"
    >
      <div className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3 bg-emerald-400 rounded-full"
        />
        <span className="text-emerald-400 font-semibold">With clear visibility, you can scale faster and make better strategic decisions</span>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* AI Call Assistant - Conversation Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Call Assistant</span>
      </h3>
    </div>

    {/* Conversation Flow */}
    <div className="space-y-6">
      {[
        {
          role: "system",
          content: "Turn every conversation into a growth opportunity. The AI Call Assistant listens, transcribes, and analyzes your calls to extract insights you can act on.",
          delay: 0.1
        },
        {
          role: "ai",
          content: "Identifies key topics, sentiment shifts, and potential objections so you can refine your pitch with every conversation.",
          delay: 0.3
        },
        {
          role: "system",
          content: "After each call, it summarizes the discussion, highlights action points, and even suggests personalized follow-up messages.",
          delay: 0.5
        },
        {
          role: "highlight",
          content: "This means no missed details, no forgotten commitments — only smarter next steps that move deals forward.",
          delay: 0.7
        }
      ].map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: message.role === "ai" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: message.delay }}
          className={`flex ${message.role === "ai" ? "justify-end" : "justify-start"}`}
        >
          <div className={`max-w-2xl ${
            message.role === "highlight" 
              ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 p-6 rounded-2xl" 
              : message.role === "ai"
              ? "bg-white/5 border border-white/10 p-6 rounded-2xl rounded-br-none"
              : "bg-gradient-to-r from-white/5 to-white/10 border border-white/10 p-6 rounded-2xl rounded-bl-none"
          }`}>
            <p className="text-white/80 leading-relaxed">{message.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

{/* AI Coaching and Sales Optimization - Progress Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Coaching & Optimization</span>
      </h3>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-2xl font-bold text-white">Every salesperson can improve, and now they can do it faster.</h4>
          <p className="text-white/70 text-lg leading-relaxed">
            The AI Coach reviews your team's outreach data, identifies what's working, and highlights where they can improve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h4 className="text-2xl font-bold text-white">Personalized Feedback & Real-Time Visibility</h4>
          <p className="text-white/70 text-lg leading-relaxed">
            It offers personalized feedback on writing tone, timing, and engagement strategy. Managers get real-time visibility into performance trends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-6 rounded-2xl border border-amber-500/20"
        >
          <p className="text-amber-400 font-semibold text-lg">
            This is data-backed growth that compounds with every campaign.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        {[
          { skill: "Writing Tone", improvement: "+35%", level: 85 },
          { skill: "Timing Optimization", improvement: "+28%", level: 72 },
          { skill: "Engagement Strategy", improvement: "+42%", level: 78 },
          { skill: "Response Quality", improvement: "+31%", level: 88 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex justify-between text-sm">
              <span className="text-white font-semibold">{item.skill}</span>
              <span className="text-amber-400 font-bold">{item.improvement}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                className="h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute inset-0 bg-white/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.div>

{/* Smart Scheduling - Calendar Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-pink-500/25"
    >
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </motion.div>
    
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
      Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Scheduling & Automation</span>
    </h3>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        {
          title: "One-Click Booking",
          description: "Our scheduling assistant syncs directly with your calendar, allowing prospects to choose from available time slots in a single click.",
          icon: "⚡"
        },
        {
          title: "Smart Automation",
          description: "Automatically adjusts for time zones, prevents double bookings, and sends reminders before the call.",
          icon: "🤖"
        },
        {
          title: "Time Savings",
          description: "By simplifying scheduling, your team saves hours every week — and meetings actually happen on time.",
          icon: "⏰"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-500"
        >
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
          <p className="text-white/70 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl border border-pink-500/20"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-3 h-3 bg-pink-400 rounded-full"
      />
      <span className="text-pink-400 font-semibold">Booking a meeting shouldn't feel like a back-and-forth marathon</span>
    </motion.div>
  </div>
</motion.div>

{/* Workflow Automation - Integration Flow Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automation & CRM Integration</span>
      </h3>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-2xl font-bold text-white">Your CRM should be your command center, not another chore.</h4>
          <p className="text-white/70 text-lg leading-relaxed">
            Our platform integrates directly with leading CRMs like HubSpot, Salesforce, Pipedrive, and Zoho.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h4 className="text-2xl font-bold text-white">Real-Time Sync & Automation</h4>
          <p className="text-white/70 text-lg leading-relaxed">
            Every update, note, and message is synced in real time. When a lead replies or books a meeting, your CRM automatically reflects it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20"
        >
          <p className="text-blue-400 font-semibold text-lg">
            Automation rules handle repetitive admin work, letting your team focus on strategy and selling — not data entry.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho'].map((crm, index) => (
          <motion.div
            key={crm}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-500 text-center"
          >
            <div className="text-2xl mb-3">📊</div>
            <div className="text-white font-bold text-lg">{crm}</div>
            <div className="text-blue-400 text-sm mt-2">Connected</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.div>

{/* Deliverability and Domain Health - Security Shield Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/25"
    >
      <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </motion.div>
    
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Deliverability & Domain Health</span>
    </h3>

    <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <h4 className="text-xl font-bold text-white mb-3">High-performing outreach depends on getting into inboxes.</h4>
          <p className="text-white/70 leading-relaxed">
            Our deliverability optimizer ensures your campaigns land where they should.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Automatic Domain Management</h4>
          <p className="text-white/70 leading-relaxed">
            The platform automatically warms up new domains, monitors reputation, and adjusts sending volumes for maximum deliverability.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Spam Risk Prevention</h4>
          <p className="text-white/70 leading-relaxed">
            It identifies spam risks before they impact your campaigns, keeping your domain healthy and trusted.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-white mb-3">Instant Setup</h4>
          <p className="text-white/70 leading-relaxed">
            Purchase fully authenticated domains and mailboxes directly from your dashboard to start campaigns instantly without IT setup.
          </p>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-2xl"
      >
        🛡️
      </motion.div>
      <span className="text-green-400 font-semibold">Your domain health is our priority</span>
    </motion.div>
  </div>
</motion.div>
{/* Shared Team Collaboration - Team Grid Style */}
{/* Shared Team Collaboration - Team Grid Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Shared <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Team Collaboration</span>
      </h3>
    </div>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-12"
    >
      <p className="text-2xl text-white/80 leading-relaxed mb-8">
        Collaboration drives better conversions. Our shared workspace allows marketing, sales, and leadership teams to work together effortlessly.
      </p>
    </motion.div>

    {/* Team Collaboration Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        {
          team: "Marketing",
          role: "Campaign Strategy",
          tasks: ["View campaign progress", "Share templates", "Analyze performance"],
          color: "from-blue-500 to-cyan-500"
        },
        {
          team: "Sales",
          role: "Conversion Focus",
          tasks: ["Assign tasks", "Manage follow-ups", "Track conversations"],
          color: "from-green-500 to-emerald-500"
        },
        {
          team: "Leadership",
          role: "Strategic Oversight",
          tasks: ["Monitor performance", "Align objectives", "Review insights"],
          color: "from-purple-500 to-violet-500"
        }
      ].map((department, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
            <div className={`w-12 h-12 bg-gradient-to-r ${department.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4`}>
              {department.team.charAt(0)}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{department.team}</h4>
            <p className="text-white/60 text-sm mb-4">{department.role}</p>
            <ul className="space-y-2">
              {department.tasks.map((task, taskIndex) => (
                <motion.li
                  key={taskIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + taskIndex * 0.1 }}
                  className="flex items-center text-white/70 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-current rounded-full mr-3"></div>
                  {task}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center space-y-6"
    >
      <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
        View campaign progress, share templates, assign tasks, and manage follow-ups — all in one place. Everyone stays aligned and informed without endless status updates.
      </p>
      <div className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-indigo-400 rounded-full"
        />
        <span className="text-indigo-400 font-semibold text-lg">
          When teams work together, outreach becomes cohesive, strategic, and powerful
        </span>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* AI Automation Agents - Assistant Flow Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/25"
      >
        <div className="text-2xl">🤖</div>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Automation Agents</span>
      </h3>
    </div>

    {/* AI Assistant Capabilities */}
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <p className="text-2xl text-white/80 leading-relaxed mb-8">
          Think of our AI as your <span className="text-cyan-400 font-semibold">silent sales assistant</span> — always active, always optimizing.
        </p>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          It writes, schedules, personalizes, and adjusts campaigns in real time.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          {
            action: "Writes & Personalizes",
            description: "Creates compelling content tailored to each prospect automatically",
            icon: "✍️"
          },
          {
            action: "Schedules & Adjusts",
            description: "Optimizes timing and adapts campaigns dynamically in real-time",
            icon: "⏰"
          },
          {
            action: "Analyzes Sentiment",
            description: "Reads replies and adjusts approach based on sentiment analysis",
            icon: "📊"
          },
          {
            action: "Recommends Timing",
            description: "Suggests optimal moments to reach each lead for maximum impact",
            icon: "🎯"
          }
        ].map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-blue-500/40 transition-all duration-500"
          >
            <div className="text-3xl mb-3">{capability.icon}</div>
            <h4 className="text-lg font-bold text-white mb-2">{capability.action}</h4>
            <p className="text-white/70 text-sm">{capability.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center space-y-6"
      >
        <p className="text-white/70 text-lg leading-relaxed">
          Whether it's creating new follow-ups, analyzing reply sentiment, or recommending the best time to reach a lead, AI handles the repetitive work so your team can focus on building relationships.
        </p>
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-2xl border border-cyan-500/20">
          <p className="text-cyan-400 font-semibold text-lg">
            It's not just automation. It's intelligence that learns, adapts, and grows with your goals.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>

{/* Compliance, Security, and Data Privacy - Shield Badge Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/25"
    >
      <div className="text-2xl">🛡️</div>
    </motion.div>
    
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Compliance, Security & Privacy</span>
    </h3>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-12"
    >
      <p className="text-2xl text-white/80 leading-relaxed mb-8">
        Outreach without trust doesn't work. That's why we've made data security a priority at every level.
      </p>
    </motion.div>

    {/* Security Features Grid */}
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {[
        {
          feature: "Encryption",
          description: "Your data is encrypted in transit and at rest with enterprise-grade security",
          icon: "🔒",
          status: "Active"
        },
        {
          feature: "Access Control",
          description: "Granular access controls ensure the right people see the right information",
          icon: "👥",
          status: "Enabled"
        },
        {
          feature: "Audit Logs",
          description: "Comprehensive audit logs track all activity for complete transparency",
          icon: "📝",
          status: "Recording"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20"
        >
          <div className="text-3xl mb-3">{item.icon}</div>
          <h4 className="text-lg font-bold text-white mb-2">{item.feature}</h4>
          <p className="text-white/70 text-sm mb-3">{item.description}</p>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-green-400 rounded-full"
            />
            <span className="text-green-400 text-xs font-semibold">{item.status}</span>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
        <p className="text-green-400 font-semibold text-lg mb-4">
          We are fully compliant with GDPR and major international privacy frameworks.
        </p>
        <p className="text-white/70">
          You can confidently scale outreach knowing your information — and your clients' — is always safe.
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* Integration Ecosystem - Connected Network Style */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-orange-500/25"
      >
        <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Ecosystem</span>
      </h3>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-2xl text-white/80 leading-relaxed mb-6">
            You already use tools that power your business — we just help them work better together.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Our integration ecosystem connects with <span className="text-orange-400 font-semibold">100+ apps</span>, including CRMs, analytics platforms, marketing tools, and communication systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {[
            "All your data stays synced and consistent across all platforms",
            "Your workflow stays fluid without interruptions or manual transfers",
            "Your team never wastes time switching between tools or re-entering data"
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span className="text-white/80 text-lg">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Integration Categories */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { category: "CRMs", count: "25+", icon: "📊", description: "HubSpot, Salesforce, Pipedrive, Zoho" },
          { category: "Analytics", count: "18+", icon: "📈", description: "Google Analytics, Mixpanel, Amplitude" },
          { category: "Marketing", count: "32+", icon: "🎯", description: "Mailchimp, Marketo, ActiveCampaign" },
          { category: "Communication", count: "28+", icon: "💬", description: "Slack, Teams, Zoom, WhatsApp" }
        ].map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 text-center"
          >
            <div className="text-3xl mb-2">{integration.icon}</div>
            <div className="text-white font-bold text-lg mb-1">{integration.category}</div>
            <div className="text-orange-400 text-sm mb-2">{integration.count} apps</div>
            <div className="text-white/60 text-xs">{integration.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.div>

{/* Designed for Every Growth-Driven Team - Use Case Cards */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative py-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/25"
      >
        <div className="text-2xl">🚀</div>
      </motion.div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Every Growth Team</span>
      </h3>
    </div>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-12"
    >
      <p className="text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
        Whether you're a startup scaling fast or an established business optimizing at scale, our platform adapts to your needs.
      </p>
    </motion.div>

    {/* Use Case Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {[
        {
          team: "Sales Teams",
          use: "Automate multi-channel prospecting and outreach sequences",
          icon: "💼",
          color: "from-blue-500 to-cyan-500"
        },
        {
          team: "Marketing Agencies",
          use: "Manage campaigns for multiple clients with centralized control",
          icon: "🎨",
          color: "from-green-500 to-emerald-500"
        },
        {
          team: "Recruiters",
          use: "Reach and convert candidates through personalized outreach",
          icon: "👥",
          color: "from-orange-500 to-amber-500"
        },
        {
          team: "Founders",
          use: "Build partnerships and drive pipeline without hiring large sales teams",
          icon: "⭐",
          color: "from-purple-500 to-pink-500"
        }
      ].map((useCase, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full text-center">
            <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
              {useCase.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-3">{useCase.team}</h4>
            <p className="text-white/70 text-sm leading-relaxed">{useCase.use}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="text-center"
    >
      <div className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-2xl"
        >
          ⚡
        </motion.div>
        <span className="text-purple-400 font-semibold text-lg">
          Wherever you are on your growth journey, this platform meets you there — and accelerates your progress
        </span>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* Why Teams Rely on Us - Results Showcase */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="relative py-20"
>
  <div className="max-w-4xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-rose-500/25"
    >
      <div className="text-2xl">🏆</div>
    </motion.div>
    
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
      Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Teams Rely On Us</span>
    </h3>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-12"
    >
      <p className="text-2xl text-white/80 leading-relaxed mb-8">
        Because we make complex outreach simple. Users consistently report up to 40% higher reply rates, faster conversions, and better-qualified pipelines.
      </p>
    </motion.div>

    {/* Results Metrics */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        { metric: "40%", label: "Higher Reply Rates", icon: "📈", description: "More engagement from prospects" },
        { metric: "2.5x", label: "Faster Conversions", icon: "⚡", description: "Reduced sales cycle time" },
        { metric: "68%", label: "Better Pipelines", icon: "🎯", description: "Higher quality lead generation" }
      ].map((result, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20"
        >
          <div className="text-3xl mb-3">{result.icon}</div>
          <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
          <div className="text-rose-400 font-semibold text-lg mb-2">{result.label}</div>
          <div className="text-white/60 text-sm">{result.description}</div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 p-6 rounded-2xl border border-rose-500/20">
        <p className="text-rose-400 font-semibold text-lg mb-4">
          We're not just another automation tool — we're your growth partner.
        </p>
        <p className="text-white/70 text-lg">
          Every feature is designed to amplify your strategy, support your team, and deliver measurable results.
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="inline-flex items-center space-x-4 px-6 py-4 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-2xl border border-rose-500/30"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          🚀
        </motion.div>
        <span className="text-rose-300 font-bold text-lg">
          When outreach becomes intelligent, your business becomes unstoppable.
        </span>
      </motion.div>
    </motion.div>
  </div>
</motion.div>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/20 via-[#19001d]/40 to-[#480056]/20" />
          <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Ready to Transform the Way You Sell?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Start automating smarter, reaching wider, and closing faster
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-lg">
                Try it free or schedule a demo with our experts today and see what modern outreach really feels like — intelligent, efficient, and built for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-white/90 px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button size="lg" variant="outline" className="relative border-white/60 bg-white/10 text-white hover:bg-white/20 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-[#b45ecf] mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-[#b45ecf] mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-[#b45ecf] mr-2" />
                  Setup in 5 minutes
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}