'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Cpu, MessageSquare, Workflow, CheckCircle2, Play, Star, Quote, Crown, BadgeCheck, Mail, Phone, MessageCircle, Users, BarChart3, Zap, Shield, Calendar, GitBranch, Eye, Target, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';

/* Enhanced GlowCard with better effects */
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
        className="pointer-events-none absolute transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(214,123,255,0.2) 25%, transparent 55%)`,
          borderRadius: '50%',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(20px)',
          transform: `scale(${isHovered ? 1.2 : 1})`,
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

/* Enhanced Section Divider */
const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center my-8 lg:my-12"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#b45ecf]/40 flex-1 max-w-16" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#d67bff]"
      />
      <div className="h-px bg-gradient-to-r from-[#b45ecf]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

/* Floating Animation Component */
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Handle redirects
const handleGetStarted = () => {
  window.location.href = 'https://app.360airo.com';
};

const handleWatchDemo = () => {
  window.location.href = 'https://app.360airo.com';
};

export default function FeaturesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/features" />
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
          <div className="max-w-7xl mx-auto relative z-10 w-full px-4 sm:px-6">
            <div className="text-center space-y-6 lg:space-y-8 py-12 lg:py-16">
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
                  <span className="relative inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#b45ecf]/50 text-white font-semibold text-xs lg:text-sm">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                      className="mr-2 lg:mr-3"
                    >
                      <Crown className="h-3 w-3 lg:h-4 lg:w-4 text-[#d67bff]" />
                    </motion.div>
                    <span>Enterprise-Grade Outreach Platform</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] lg:leading-[0.95] tracking-tight"
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
                className="space-y-4 lg:space-y-5 max-w-4xl mx-auto"
              >
                <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed font-light">
                  Our platform brings together every tool modern sales and marketing teams need to plan, personalize, and automate outreach that actually converts.
                </p>
                <p className="text-sm lg:text-base text-white/75">
                  This is not just another cold outreach tool. It's an all-in-one system designed to make your entire prospecting process smarter, faster, and effortlessly scalable.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-4"
              >
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button 
                    size="lg" 
                    className="relative bg-white text-[#480056] hover:bg-white/90 px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                    onClick={handleGetStarted}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="relative border-white/60 bg-white/10 text-white hover:bg-white/20 px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                    onClick={handleWatchDemo}
                  >
                    <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="space-y-16 lg:space-y-24">
              {/* Multi-Channel Outreach */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
                  <motion.div
                    className="bg-gradient-to-r from-[#0077B5] to-[#00A0DC] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Workflow className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">Multi-Channel Outreach That Converts</h3>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    Your leads live across multiple platforms. With our platform, so does your outreach. Connect with your audience on Email, LinkedIn, WhatsApp, SMS, and Calls — all managed from one clean, unified dashboard.
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Build multi-step sequences that automatically switch between channels to match how your prospects prefer to engage. Whether you start with a personalized email or a LinkedIn connect request, your message stays consistent and timely.
                  </p>
                  <div className="bg-gradient-to-r from-[#0077B5]/20 to-[#00A0DC]/20 p-3 lg:p-4 rounded-xl border border-[#0077B5]/30">
                    <p className="text-white font-semibold text-xs lg:text-sm">
                      The result? Higher reply rates, stronger relationships, and a fully optimized sales funnel.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl order-1 lg:order-2" glowColor="rgba(0,119,181,0.4)">
                  <Card className="relative bg-[#0a1a2e] backdrop-blur-sm p-4 lg:p-6 h-full border border-[#0077B5]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#0a1a2e]/80 group-hover:border-[#0077B5]/50 group-hover:scale-105">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4 lg:mb-6">
                        <div className="flex items-center space-x-2 lg:space-x-3">
                          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"></div>
                          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                        </div>
                        <div className="text-white/60 text-xs lg:text-sm">Multi-Channel Dashboard</div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 lg:gap-2 mb-4 lg:mb-6">
                        {['Email', 'LinkedIn', 'WhatsApp', 'SMS', 'Calls'].map((channel, i) => (
                          <motion.div
                            key={channel}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 lg:px-3 py-1 bg-white/10 rounded-full border border-white/20 text-white text-xs"
                          >
                            {channel}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="space-y-2 lg:space-y-3">
                        {[80, 65, 90, 55, 75].map((width, i) => (
                          <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${width}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="h-1.5 lg:h-2 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-full"
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
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:order-2 space-y-4 lg:space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Brain className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">AI-Powered Personalization at Scale</h3>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    Forget sending one-size-fits-all emails. Our AI engine writes personalized messages based on your prospect's company, role, and online behavior — so every email feels handcrafted.
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    From subject lines to message tone, everything is customized automatically using real-time data. The AI continuously learns what works best for your audience, improving your open and response rates over time.
                  </p>
                  <div className="bg-gradient-to-r from-[#b45ecf]/20 to-[#d67bff]/20 p-3 lg:p-4 rounded-xl border border-[#b45ecf]/30">
                    <p className="text-white font-semibold text-xs lg:text-sm">
                      You can personalize at scale without ever compromising authenticity.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl lg:order-1" glowColor="rgba(180,94,207,0.4)">
                  <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-4 lg:p-6 h-full border border-[#b45ecf]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#b45ecf]/50 group-hover:scale-105">
                    <div className="space-y-3 lg:space-y-4">
                      <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 lg:w-3 lg:h-3 bg-[#b45ecf] rounded-full"
                        />
                        <span className="text-white/60 text-xs lg:text-sm">AI is personalizing your message...</span>
                      </div>
                      
                      <div className="space-y-2 lg:space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="bg-white/5 p-3 lg:p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-xs lg:text-sm">Subject: Personalized approach for Acme Corp</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="bg-white/5 p-3 lg:p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-xs lg:text-sm">Hi Sarah, noticed your work at Acme Corp...</div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 }}
                          className="bg-white/5 p-3 lg:p-4 rounded-lg border border-white/10"
                        >
                          <div className="text-white/80 text-xs lg:text-sm">Personalized based on Tech Industry and Marketing Role</div>
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
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="space-y-4 lg:space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#480056] to-[#b45ecf] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Cpu className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">Automated Sequences and Smart Workflows</h3>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    Follow-ups shouldn't feel like manual labor. Our automation engine ensures that every lead receives the right message at the right time.
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Easily create workflows that trigger actions based on prospect behavior — whether that's opening an email, clicking a link, or booking a meeting. The system automatically pauses communication when a lead replies and re-engages those who go silent.
                  </p>
                  <div className="bg-gradient-to-r from-[#480056]/20 to-[#b45ecf]/20 p-3 lg:p-4 rounded-xl border border-[#480056]/30">
                    <p className="text-white font-semibold text-xs lg:text-sm">
                      No lead is ever lost, forgotten, or mishandled. Every campaign stays organized, efficient, and always one step ahead.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(72,0,86,0.4)">
                  <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-4 lg:p-6 h-full border border-[#480056]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#480056]/50 group-hover:scale-105">
                    <div className="space-y-3 lg:space-y-4">
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
                          className="flex items-center justify-between p-2 lg:p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center space-x-2 lg:space-x-3">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#480056] to-[#b45ecf] rounded-full flex items-center justify-center">
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
                        className="flex items-center justify-center space-x-2 mt-3 lg:mt-4"
                      >
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-xs lg:text-sm">Workflow Active - 24/7 Automation</span>
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
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:order-2 space-y-4 lg:space-y-6">
                  <motion.div
                    className="bg-gradient-to-r from-[#10b981] to-[#059669] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">Unified Inbox for Seamless Communication</h3>
                  <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                    Tired of switching tabs to find your conversations? Our unified inbox combines all your communication channels in one simple interface.
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    View and reply to emails, LinkedIn messages, or call updates from a single screen. Add notes, assign follow-ups, and tag teammates in real time.
                  </p>
                  <div className="bg-gradient-to-r from-[#10b981]/20 to-[#059669]/20 p-3 lg:p-4 rounded-xl border border-[#10b981]/30">
                    <p className="text-white font-semibold text-xs lg:text-sm">
                      The platform keeps your entire sales team aligned, organized, and always in sync with ongoing conversations.
                    </p>
                  </div>
                </div>

                <GlowCard className="group cursor-pointer rounded-2xl lg:order-1" glowColor="rgba(16,185,129,0.4)">
                  <Card className="relative bg-[#0a1f17] backdrop-blur-sm p-4 lg:p-6 h-full border border-[#10b981]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#0a1f17]/80 group-hover:border-[#10b981]/50 group-hover:scale-105">
                    <div className="space-y-3 lg:space-y-4">
                      <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <div className="text-white font-semibold text-sm lg:text-base">All Conversations</div>
                        <div className="text-white/60 text-xs">Unified Inbox</div>
                      </div>
                      
                      {[
                        { platform: 'Email', message: 'Meeting confirmed for tomorrow', time: '2m ago', unread: true },
                        { platform: 'LinkedIn', message: 'Interested in your proposal', time: '5m ago', unread: true },
                        { platform: 'WhatsApp', message: 'Can we schedule a call?', time: '1h ago', unread: false },
                        { platform: 'SMS', message: 'Thanks for the info!', time: '2h ago', unread: false },
                      ].map((conv, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-2 lg:p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="flex items-center space-x-2 lg:space-x-3">
                            <div className={`w-2 h-2 rounded-full ${conv.unread ? 'bg-green-400' : 'bg-white/20'}`} />
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">{conv.platform[0]}</span>
                            </div>
                            <div>
                              <div className="text-white text-sm font-semibold">{conv.platform}</div>
                              <div className="text-white/60 text-xs">{conv.message}</div>
                            </div>
                          </div>
                          <div className="text-white/40 text-xs">{conv.time}</div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lead Enrichment & Verification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-blue-500/25"
              >
                <Target className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Built-in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lead Enrichment</span> & Verification
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {[
                {
                  title: "Verified Contact Data",
                  description: "Automatically adds verified contact details including company name, position, industry, LinkedIn URL, and verified email address.",
                  icon: <BadgeCheck className="h-6 w-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Accuracy & Relevance",
                  description: "Trust that every lead you contact is accurate, active, and relevant to your campaigns.",
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Low Bounce Rates",
                  description: "With built-in verification, bounce rates stay low, sender reputation stays high, and campaigns maintain consistent deliverability.",
                  icon: <TrendingUp className="h-6 w-6" />,
                  color: "from-purple-500 to-pink-500"
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
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 lg:mb-6 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{feature.title}</h4>
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Advanced Analytics and Insights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative py-12 lg:py-20"
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-emerald-500/25"
              >
                <BarChart3 className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Analytics & Insights</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-xl lg:text-2xl mb-4 lg:mb-6 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">{feature.title}</h4>
                    <p className="text-white/70 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8 lg:mt-12"
            >
              <div className="inline-flex items-center space-x-3 lg:space-x-4 px-4 lg:px-6 py-3 lg:py-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full"
                />
                <span className="text-emerald-400 font-semibold text-sm lg:text-base">With clear visibility, you can scale faster and make better strategic decisions</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* AI Call Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-violet-500/25"
              >
                <Phone className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Call Assistant</span>
              </h3>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-4 lg:space-y-6">
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
                      ? "bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 p-4 lg:p-6 rounded-2xl" 
                      : message.role === "ai"
                      ? "bg-white/5 border border-white/10 p-4 lg:p-6 rounded-2xl rounded-br-none"
                      : "bg-gradient-to-r from-white/5 to-white/10 border border-white/10 p-4 lg:p-6 rounded-2xl rounded-bl-none"
                  }`}>
                    <p className="text-white/80 leading-relaxed text-sm lg:text-base">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Coaching & Sales Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-orange-500/25"
              >
                <Users className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Coaching & Sales Optimization</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Personalized Feedback</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    The AI Coach reviews your team's outreach data, identifies what's working, and highlights where they can improve.
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    It offers personalized feedback on writing tone, timing, and engagement strategy, helping every rep fine-tune their approach.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Real-Time Performance Visibility</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Managers get real-time visibility into performance trends and can scale coaching across the team without spending extra time in review meetings.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-4 lg:p-6 border border-orange-500/20">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Data-Backed Growth</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    This is data-backed growth that compounds with every campaign. Every salesperson can improve, and now they can do it faster.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {[
                    { metric: "40%", label: "Higher Reply Rates" },
                    { metric: "3x", label: "Faster Conversions" },
                    { metric: "2.5x", label: "More Qualified Leads" },
                    { metric: "60%", label: "Time Saved" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/10 text-center"
                    >
                      <div className="text-lg lg:text-xl font-bold text-white">{stat.metric}</div>
                      <div className="text-white/60 text-xs lg:text-sm mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Smart Scheduling & Meeting Automation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-teal-500/25"
              >
                <Calendar className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">Scheduling & Meeting Automation</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Effortless Booking</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Booking a meeting shouldn't feel like a back-and-forth marathon. Our scheduling assistant syncs directly with your calendar, allowing prospects to choose from available time slots in a single click.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Smart Automation</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    It automatically adjusts for time zones, prevents double bookings, and sends reminders before the call.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-2xl p-6 lg:p-8 border border-teal-500/20 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Hours Saved Weekly</h4>
                  <p className="text-white/70 text-sm lg:text-base">
                    By simplifying scheduling, your team saves hours every week — and meetings actually happen on time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Workflow Automation & CRM Integration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-indigo-500/25"
              >
                <GitBranch className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Automation & CRM Integration</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Seamless CRM Integration</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Your CRM should be your command center, not another chore. Our platform integrates directly with leading CRMs like HubSpot, Salesforce, Pipedrive, and Zoho.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Real-Time Sync</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Every update, note, and message is synced in real time. When a lead replies or books a meeting, your CRM automatically reflects it.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-4 lg:p-6 border border-indigo-500/20">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Automation Rules</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Automation rules handle repetitive admin work, letting your team focus on strategy and selling — not data entry.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {['HubSpot', 'Salesforce', 'Pipedrive', 'Zoho', 'Monday.com', 'Freshworks'].map((crm, index) => (
                    <motion.div
                      key={crm}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 lg:px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white text-xs lg:text-sm"
                    >
                      {crm}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Deliverability & Domain Health */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-amber-500/25"
              >
                <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Deliverability & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Domain Health</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10"
              >
                <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Optimized Deliverability</h4>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  High-performing outreach depends on getting into inboxes. Our deliverability optimizer ensures your campaigns land where they should.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  The platform automatically warms up new domains, monitors reputation, and adjusts sending volumes for maximum deliverability.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-4 lg:p-6 border border-amber-500/20"
                >
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Spam Risk Prevention</h4>
                  <p className="text-white/70 text-sm lg:text-base">
                    Identifies spam risks before they impact your campaigns, keeping your domain healthy and trusted.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-4 lg:p-6 border border-amber-500/20"
                >
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Instant Setup</h4>
                  <p className="text-white/70 text-sm lg:text-base">
                    Purchase fully authenticated domains and mailboxes directly from your dashboard to start campaigns instantly without IT setup.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shared Team Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-pink-500/25"
              >
                <Users className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Shared <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Team Collaboration</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 lg:space-y-6"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Unified Workspace</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    Collaboration drives better conversions. Our shared workspace allows marketing, sales, and leadership teams to work together effortlessly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10">
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Seamless Coordination</h4>
                  <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                    View campaign progress, share templates, assign tasks, and manage follow-ups — all in one place. Everyone stays aligned and informed without endless status updates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl p-6 lg:p-8 border border-pink-500/20 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2">Cohesive & Powerful</h4>
                  <p className="text-white/70 text-sm lg:text-base">
                    When teams work together, outreach becomes cohesive, strategic, and powerful.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AI Automation Agents */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-cyan-500/25"
              >
                <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Automation Agents</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 text-center"
              >
                <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Your Silent Sales Assistant</h4>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Think of our AI as your silent sales assistant — always active, always optimizing. It writes, schedules, personalizes, and adjusts campaigns in real time.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Whether it's creating new follow-ups, analyzing reply sentiment, or recommending the best time to reach a lead, AI handles the repetitive work so your team can focus on building relationships.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-4 lg:p-6 border border-cyan-500/20 text-center"
              >
                <p className="text-cyan-400 font-semibold text-sm lg:text-base">
                  It's not just automation. It's intelligence that learns, adapts, and grows with your goals.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Compliance, Security & Data Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-gray-500/25"
              >
                <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Compliance, Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-slate-400">Data Privacy</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10"
              >
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Outreach without trust doesn't work. That's why we've made data security a priority at every level.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  Your data is encrypted in transit and at rest. Access controls ensure the right people see the right information, while audit logs track all activity for transparency.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { title: "GDPR Compliant", description: "Fully compliant with GDPR and major international privacy frameworks" },
                  { title: "Enterprise Security", description: "Bank-grade encryption and advanced access controls" },
                  { title: "Trusted Platform", description: "Scale outreach knowing your information — and your clients' — is always safe" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center"
                  >
                    <h4 className="text-white font-semibold text-sm lg:text-base mb-2">{feature.title}</h4>
                    <p className="text-white/60 text-xs lg:text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-lime-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-lime-500/25"
              >
                <GitBranch className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">Ecosystem</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 text-center"
              >
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  You already use tools that power your business — we just help them work better together. Our integration ecosystem connects with 100+ apps, including CRMs, analytics platforms, marketing tools, and communication systems.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  All your data stays synced and consistent. Your workflow stays fluid. And your team never wastes time switching between tools.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-2 lg:gap-3"
              >
                {[
                  'HubSpot', 'Salesforce', 'Slack', 'Zoom', 'Google Workspace', 'Microsoft 365',
                  'Pipedrive', 'Zapier', 'Make', 'Zoho', 'Monday.com', 'Notion', 'Asana', 'Trello',
                  'Intercom', 'Calendly', 'Stripe', 'PayPal', 'QuickBooks', 'Xero'
                ].map((app, index) => (
                  <motion.div
                    key={app}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 lg:px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white text-xs lg:text-sm"
                  >
                    {app}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Designed for Every Growth-Driven Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-rose-500/25"
              >
                <TrendingUp className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Designed for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">Growth-Driven Team</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  title: "Sales Teams",
                  description: "Automate multi-channel prospecting and scale outreach efforts",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Marketing Agencies",
                  description: "Manage campaigns for multiple clients with centralized control",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Recruiters",
                  description: "Reach and convert top candidates with personalized outreach",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Founders",
                  description: "Build partnerships and drive pipeline without large sales teams",
                  color: "from-orange-500 to-red-500"
                }
              ].map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:border-white/20 transition-all duration-500 h-full text-center">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${team.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <Users className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm lg:text-base mb-2">{team.title}</h4>
                    <p className="text-white/60 text-xs lg:text-sm">{team.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8 lg:mt-12"
            >
              <div className="inline-flex items-center space-x-3 lg:space-x-4 px-4 lg:px-6 py-3 lg:py-4 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-2xl border border-rose-500/20">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 lg:w-3 lg:h-3 bg-rose-400 rounded-full"
                />
                <span className="text-rose-400 font-semibold text-sm lg:text-base">
                  Wherever you are on your growth journey, this platform meets you there — and accelerates your progress.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Teams Rely on Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#b45ecf] to-[#d67bff] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-[#b45ecf]/25"
              >
                <Star className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Why Teams <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b45ecf] to-[#d67bff]">Rely on Us</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 text-center"
              >
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  Because we make complex outreach simple. Users consistently report up to 40% higher reply rates, faster conversions, and better-qualified pipelines.
                </p>
                <p className="text-white/60 text-sm mt-2">
                  We're not just another automation tool — we're your growth partner. Every feature is designed to amplify your strategy, support your team, and deliver measurable results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="bg-gradient-to-r from-[#b45ecf]/10 to-[#d67bff]/10 rounded-2xl p-4 lg:p-6 border border-[#b45ecf]/20 text-center"
              >
                <p className="text-[#d67bff] font-bold text-lg lg:text-xl">
                  When outreach becomes intelligent, your business becomes unstoppable.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/20 via-[#19001d]/40 to-[#480056]/20" />
          <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="inline-block">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Ready to Transform the Way You Sell?</span>
              </div>
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white">
                Start automating smarter, reaching wider, and closing faster
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-base lg:text-lg">
                Try it free or schedule a demo with our experts today and see what modern outreach really feels like — intelligent, efficient, and built for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button 
                    size="lg" 
                    className="relative bg-white text-[#480056] hover:bg-white/90 px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                    onClick={handleGetStarted}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="relative border-white/60 bg-white/10 text-white hover:bg-white/20 px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                    onClick={handleWatchDemo}
                  >
                    <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:gap-4 text-white/70 text-xs lg:text-sm">
                <div className="flex items-center">
                  <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
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