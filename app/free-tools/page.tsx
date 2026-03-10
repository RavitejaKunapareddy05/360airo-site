'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Calculator as CalcIcon, Shield, Zap, Sparkles, PenTool, CheckSquare, ArrowRight, CheckCircle2, Play, Crown, BadgeCheck, TrendingUp } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';

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

const freeTools = [
  { 
    name: 'Email Deliverability Test', 
    href: '/free-tools/email-deliverability-test',
    description: 'Test where your emails land and monitor inbox placement',
    icon: Mail,
    color: 'from-[#b45ecf] to-[#d67bff]',
    tag: 'Free'
  },
  { 
    name: 'Email Verifier', 
    href: '/free-tools/email-verifier',
    description: 'Verify email addresses and reduce bounce rates instantly',
    icon: CheckCircle2,
    color: 'from-blue-500 to-cyan-400',
    tag: 'Free'
  },
  { 
    name: 'Mailbox Calculator', 
    href: '/free-tools/mailbox-calculator',
    description: 'Calculate optimal mailbox warming and sending limits',
    icon: CalcIcon,
    color: 'from-green-500 to-emerald-400',
    tag: 'Free'
  },
  { 
    name: 'DMARC Generator', 
    href: '/free-tools/dmarc-generator',
    description: 'Generate DMARC records to protect your email domain',
    icon: Shield,
    color: 'from-blue-500 to-cyan-400',
    tag: 'Free'
  },
  { 
    name: 'SPF Generator', 
    href: '/free-tools/spf-generator',
    description: 'Create SPF records for better email authentication',
    icon: Zap,
    color: 'from-yellow-500 to-orange-400',
    tag: 'Free'
  },
  { 
    name: 'Email Pitch Generator', 
    href: '/free-tools/email-pitch-generator',
    description: 'Generate compelling email pitches with AI assistance',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-400',
    tag: 'Free'
  },
  { 
    name: 'Email Signature Builder', 
    href: '/free-tools/email-signature-builder',
    description: 'Create professional email signatures without coding',
    icon: PenTool,
    color: 'from-teal-500 to-cyan-400',
    tag: 'Free'
  },
  { 
    name: 'Email Sequencer', 
    href: '/free-tools/email-sequencer',
    description: 'Generate complete email sequences with personalization',
    icon: Zap,
    color: 'from-purple-500 to-indigo-400',
    tag: 'Free'
  },
  { 
    name: 'Email Template Analyzer', 
    href: '/free-tools/email-template-analyzer',
    description: 'Analyze emails for spam words and deliverability issues',
    icon: CheckSquare,
    color: 'from-orange-500 to-red-400',
    tag: 'Free'
  },
  { 
    name: 'Lead Conversion Platform', 
    href: '/free-tools/lead-conversion-platform',
    description: 'Identify anonymous visitors, enrich leads, and route to sales teams in real-time',
    icon: TrendingUp,
    color: 'from-purple-600 to-indigo-500',
    tag: 'Free'
  },
] as const;

const handleGetStarted = () => {
  window.location.href = 'https://app.360airo.com';
};

const handleWatchDemo = () => {
  window.location.href = 'https://app.360airo.com';
};

export default function FreeToolsPage() {
  useEffect(() => {
    console.log('freeTools array:', freeTools);
    console.log('freeTools.length:', freeTools.length);
    freeTools.forEach((tool, idx) => console.log(`[${idx}] ${tool.name}`));
  }, []);
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
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
                    <span>Free Email Tools Collection</span>
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] lg:leading-[0.95] tracking-tight"
              >
                <span className="block">Powerful Email Tools</span>
                <span className="block bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-white bg-clip-text text-transparent">
                  for Every Email Marketer
                </span>
                <span className="block text-white">100% Free</span>
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
                  Access our complete suite of email tools designed to help you test deliverability, verify addresses, and optimize your campaigns.
                </p>
                <p className="text-sm lg:text-base text-white/75">
                  No credit card required. Quick email verification to access all tools instantly.
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
                    Access Free Tools
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Tools Grid Section - 3x3 + 1 Layout */}
      <section className="py-12 lg:py-16 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-center mb-12 lg:mb-14 space-y-2 lg:space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b45ecf] to-[#d67bff]">Free Email Tools</span>
              </h3>
              <p className="text-white/70 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-1 sm:px-0">
                Access our complete suite of powerful email tools designed to help you test deliverability, verify addresses, and optimize your campaigns
              </p>
            </div>

            {/* 3x3 Grid - Properly Centered */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-8 lg:mb-10 mx-auto">
              {freeTools.slice(0, 9).map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <Link href={tool.href} className="block h-full">
                      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-white/10 group-hover:border-[#b45ecf]/30 transition-all duration-500 h-full cursor-pointer flex flex-col">
                        <motion.div
                          className={`bg-gradient-to-r ${tool.color} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mb-2 sm:mb-2 lg:mb-3 flex-shrink-0`}
                          whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                        </motion.div>
                        <h4 className="text-xs sm:text-xs lg:text-sm font-bold text-white mb-1 group-hover:text-[#d67bff] transition-colors line-clamp-2">{tool.name}</h4>
                        <p className="text-white/70 leading-tight text-xs mb-1 sm:mb-1 lg:mb-2 flex-grow line-clamp-2">{tool.description}</p>
                        <div className="flex items-center gap-1 text-[#b45ecf] group-hover:text-[#d67bff] transition-colors text-xs font-medium mt-auto">
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* +1 Tool (Centered Below Grid) */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group w-full sm:w-64 md:w-72"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <Link href={freeTools[9].href} className="block">
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 border border-white/10 group-hover:border-purple-500/30 transition-all duration-500 cursor-pointer flex flex-col">
                    <motion.div
                      className={`bg-gradient-to-r ${freeTools[9].color} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mb-2 sm:mb-2 lg:mb-3 mx-auto flex-shrink-0`}
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    >
                      {(() => {
                        const Icon = freeTools[9].icon;
                        return <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />;
                      })()}
                    </motion.div>
                    <h4 className="text-xs sm:text-xs lg:text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors text-center line-clamp-2">{freeTools[9].name}</h4>
                    <p className="text-white/70 leading-tight text-xs text-center mb-1 sm:mb-1 line-clamp-2">{freeTools[9].description}</p>
                    <div className="flex items-center justify-center gap-1 text-purple-400 group-hover:text-indigo-300 transition-colors text-xs font-medium">
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Final CTA */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/20 via-[#19001d]/40 to-[#480056]/20" />
        <div className="max-w-4xl mx-auto text-left relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white">
              Start Using Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b45ecf] to-[#d67bff]">Free Email Tools</span> Today
            </h2>
            <p className="text-white/90 text-base lg:text-lg">
              Quick email verification required. Access all tools instantly with no credit card needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-start pt-2">
              <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                <Button 
                  size="lg" 
                  className="relative bg-white text-[#480056] hover:bg-white/90 px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={handleGetStarted}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
            <div className="flex flex-wrap justify-start gap-3 lg:gap-4 text-white/70 text-xs lg:text-sm">
              <div className="flex items-center">
                <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
                Instant access
              </div>
              <div className="flex items-center">
                <BadgeCheck className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf] mr-1 lg:mr-2" />
                100% Free Forever
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
