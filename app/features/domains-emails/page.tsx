'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Shield, 
  CheckCircle2, 
  Globe, 
  Mail, 
  Eye,
  AlertTriangle,
  BarChart3,
  Settings,
  Users,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Server,
  Database,
  Zap,
  Award,
  Layers,
  FileCheck,
  Wifi
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';

/* GlowCard with cursor-reactive glow */
const GlowCard = ({ children, className = '', ...props }: any) => {
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
          background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(99,102,241,0.2) 25%, transparent 55%)',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const domainFeatures = [
  {
    icon: Shield,
    title: 'Domain Authentication',
    description: 'Guided configuration for SPF, DKIM, and DMARC — ensuring every email is properly authenticated and aligned with email provider standards.',
    color: 'from-[#3B82F6] to-[#1D4ED8]',
    metric: '99.9%',
    label: 'Authentication Rate',
  },
  {
    icon: CheckCircle2,
    title: 'Email Verification',
    description: 'Automatically validates outgoing email addresses and keeps contact lists clean — so cold outreach reaches real people, not inactive inboxes.',
    color: 'from-[#1D4ED8] to-[#6366F1]',
    metric: '<2%',
    label: 'Bounce Rate',
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Monitor all domains and sender accounts in one place. Track sender scores, domain health, and performance insights with smart alerts.',
    color: 'from-[#6366F1] to-[#8B5CF6]',
    metric: '24/7',
    label: 'Real-time Monitoring',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Each new domain goes through controlled warmup, protecting sender reputation and ensuring safe volume growth with automation and control.',
    color: 'from-[#8B5CF6] to-[#3B82F6]',
    metric: 'Unlimited',
    label: 'Domain Capacity',
  },
];

const setupSteps = [
  {
    step: '01',
    title: 'Domain Configuration',
    description: 'Set up your sending domain with guided SPF, DKIM, and DMARC configuration. Our system walks you through each authentication protocol.',
    icon: Settings,
    color: 'from-[#3B82F6] to-[#1D4ED8]',
  },
  {
    step: '02',
    title: 'Email Validation',
    description: 'Verify and validate all sender identities and email addresses. Clean contact lists and remove inactive or invalid addresses automatically.',
    icon: Mail,
    color: 'from-[#1D4ED8] to-[#6366F1]',
  },
  {
    step: '03',
    title: 'Health Monitoring',
    description: 'Continuous monitoring of domain health, sender scores, and deliverability metrics with intelligent alerts for reputation management.',
    icon: Activity,
    color: 'from-[#6366F1] to-[#8B5CF6]',
  },
  {
    step: '04',
    title: 'Scale Safely',
    description: 'Add new domains and email accounts with controlled warmup phases. Balance automation with manual control for optimal growth.',
    icon: Layers,
    color: 'from-[#8B5CF6] to-[#3B82F6]',
  },
];

const benefits = [
  {
    icon: Lock,
    title: 'Trusted Authentication',
    description: 'Every email properly authenticated with SPF, DKIM, and DMARC protocols',
    color: 'from-[#3B82F6] to-[#1D4ED8]',
  },
  {
    icon: Target,
    title: 'Real Connections',
    description: 'Verified email addresses ensure messages reach active, engaged recipients',
    color: 'from-[#1D4ED8] to-[#6366F1]',
  },
  {
    icon: Eye,
    title: 'Complete Visibility',
    description: 'Monitor all domains and accounts from a single, comprehensive dashboard',
    color: 'from-[#6366F1] to-[#8B5CF6]',
  },
  {
    icon: Zap,
    title: 'Safe Scaling',
    description: 'Grow outreach volume without compromising deliverability or reputation',
    color: 'from-[#8B5CF6] to-[#3B82F6]',
  },
];

const stats = [
  { value: '99.9%', label: 'Authentication Success', icon: Shield },
  { value: '<2%', label: 'Average Bounce Rate', icon: Mail },
  { value: '24/7', label: 'Reputation Monitoring', icon: Activity },
  { value: '∞', label: 'Domain Scalability', icon: Globe },
];

/* Section divider */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
        style={{ maxWidth: '200px' }}
      />
    );
  }
  if (variant === 'left') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-0.5 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-transparent mb-6"
        style={{ maxWidth: '100px' }}
      />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#3B82F6]/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1]" />
      <div className="h-px bg-gradient-to-r from-[#3B82F6]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

export default function DomainsEmailsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.6 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.35, 0.1],
                  scale: [0.5, 1.15, 0.5],
                  x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 11 + i * 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                className={`absolute w-20 h-20 ${
                  i % 4 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#1D4ED8]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#1D4ED8]/15 to-[#6366F1]/15'
                } blur-xl`}
                style={{ top: `${14 + i * 11}%`, left: `${8 + i * 10.5}%` }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto relative z-10 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              {/* LEFT CONTENT */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="inline-block"
                >
                  <div className="group relative cursor-pointer">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(59,130,246,0.4)',
                          '0 0 60px rgba(99,102,241,0.6)',
                          '0 0 30px rgba(59,130,246,0.4)',
                        ],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/30 via-[#6366F1]/20 to-[#8B5CF6]/30 rounded-full blur-xl"
                    />
                    <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#3B82F6]/50 text-white font-semibold text-sm sm:text-base">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                        className="mr-3"
                      >
                        <Server className="h-4 w-4 sm:h-5 sm:w-5 text-[#6366F1]" />
                      </motion.div>
                      <span>Domain & Email Management</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.7, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Domains &
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Emails —
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-white bg-clip-text text-transparent transform-gpu"
                    >
                      Build Trust
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.85 }}
                      className="block text-white transform-gpu"
                    >
                      Before You Hit Send
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                    className="h-1.5 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full relative overflow-hidden max-w-md"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35, duration: 0.7 }}
                  className="space-y-5 max-w-xl"
                >
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                    Establish, Authenticate, and Scale Without{' '}
                    <motion.span
                      animate={{ color: ['#3B82F6', '#6366F1', '#ffffff', '#3B82F6'] }}
                      transition={{ duration: 3.4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      Deliverability Worries
                    </motion.span>
                  </p>
                  <p className="text-base text-white/75">
                    Every great outreach campaign starts with a trusted foundation — your domain and email setup.
                    360Airo's Domains & Emails feature ensures your communication is backed by verified, secure, and reputation-safe infrastructure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, #ffffff, #f8f9fa)',
                          'linear-gradient(45deg, #f8f9fa, #ffffff)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0"
                    />
                    <Button size="lg" className="relative bg-transparent text-[#480056] px-8 py-3 text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl">
                      <span>Get Started with Domains & Emails</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - CLEAN LAYERED CARDS APPROACH */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="relative flex items-center justify-center h-full"
              >
                <div className="relative w-full max-w-lg">
                  {/* Main Dashboard Card */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8, type: 'spring' }}
                    className="relative z-10"
                  >
                    <GlowCard className="cursor-pointer rounded-3xl">
                      <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center"
                            >
                              <Globe className="h-6 w-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold text-white">Domain Health</h3>
                              <p className="text-sm text-white/60">main.360airo.com</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center space-x-2 bg-green-500/20 px-3 py-2 rounded-lg border border-green-500/30"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm font-medium text-green-300">Active</span>
                          </motion.div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          {[
                            { label: 'Auth Rate', value: '99.9%', icon: Shield, color: '#3B82F6' },
                            { label: 'Bounce Rate', value: '<2%', icon: Mail, color: '#6366F1' },
                            { label: 'Domains', value: '5', icon: Globe, color: '#8B5CF6' },
                            { label: 'Score', value: '98', icon: Award, color: '#1D4ED8' }
                          ].map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 + i * 0.1 }}
                              className="bg-white/5 rounded-2xl p-4 border border-white/10"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                              </div>
                              <p className="text-sm text-white/70">{stat.label}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Authentication Status */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-white/80 mb-4">Authentication Protocols</h4>
                          {['SPF', 'DKIM', 'DMARC'].map((protocol, i) => (
                            <motion.div
                              key={protocol}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.5 + i * 0.15 }}
                              className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                            >
                              <span className="text-sm font-medium text-white/90">{protocol}</span>
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              >
                                <CheckCircle2 className="h-5 w-5 text-green-400" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>

                  {/* Floating Feature Cards */}
                  {[
                    {
                      icon: Mail,
                      title: 'Email Verification',
                      metric: '12 verified',
                      position: 'absolute -top-4 -right-4 z-20',
                      delay: 1.8,
                      color: 'from-[#1D4ED8] to-[#6366F1]'
                    },
                    {
                      icon: Activity,
                      title: 'Live Monitoring',
                      metric: '24/7 active',
                      position: 'absolute -bottom-4 -left-4 z-20',
                      delay: 2.2,
                      color: 'from-[#6366F1] to-[#8B5CF6]'
                    },
                    {
                      icon: Database,
                      title: 'DNS Records',
                      metric: 'All configured',
                      position: 'absolute top-1/2 -right-8 transform -translate-y-1/2 z-20',
                      delay: 2.6,
                      color: 'from-[#8B5CF6] to-[#3B82F6]'
                    }
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ delay: card.delay, duration: 0.6, type: 'spring' }}
                      className={card.position}
                      whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
                    >
                      <div className="bg-gradient-to-br from-white/15 via-white/10 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-xl min-w-[140px]">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                            <card.icon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-white mb-1">{card.title}</p>
                        <p className="text-xs text-white/70">{card.metric}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Subtle Background Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="absolute inset-0 -z-10"
                  >
                    <div className="w-full h-full rounded-3xl border-2 border-dashed border-[#3B82F6]/20" />
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: 'easeInOut'
                      }}
                      className="absolute w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full blur-sm"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* DOMAIN SETUP SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">Set Up Domains That Deliver</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your sending domain represents your brand's credibility.
              </h2>
              <SectionDivider />
              <div className="text-left space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  360Airo simplifies the technical setup with guided configuration for SPF, DKIM, and DMARC — ensuring that every email you send is properly authenticated and aligned with email provider standards.
                </p>
                <p>
                  By maintaining domain health and sender consistency, you <span className="text-[#3B82F6] font-semibold">strengthen your email deliverability</span> and reduce spam risk across all campaigns.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">From Setup to Scalability</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Four Steps to <span className="text-[#3B82F6]">Trusted Domains</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80">
                Our comprehensive system handles authentication, verification, monitoring, and scaling automatically.
              </p>
            </motion.div>

            <div className="space-y-12">
              {setupSteps.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 group">
                  <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
                    <div className="relative">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} w-20 h-20 rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.18, rotate: 12, boxShadow: '0 0 50px rgba(59,130,246,0.8)' }}
                      >
                        <item.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 bg-white text-[#480056] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                        whileHover={{ scale: 1.25, rotate: 360 }}
                        transition={{ duration: 0.45 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </GlowCard>
                  <div className="flex-1 text-center md:text-left">
                    <SectionDivider variant="left" />
                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover:text-[#6366F1]">{item.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* VERIFIED EMAILS SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">Verified Emails, Real Connections</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Avoid bounces and boost response rates with verified sender identities.
              </h2>
              <SectionDivider />
              <div className="text-left space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Our system automatically validates outgoing email addresses and keeps your contact lists clean — so your cold outreach emails reach real people, not inactive inboxes.
                </p>
                <p>
                  This consistent verification helps <span className="text-[#3B82F6] font-semibold">preserve your domain reputation</span> and ensures steady inbox placement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">Complete Domain Management</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Monitor Performance Across <span className="text-[#3B82F6]">Multiple Domains</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Whether you manage one brand or several, 360Airo's dashboard lets you monitor all your domains and sender accounts in one place.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domainFeatures.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-6 h-full border border-white/10 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50 group-hover:scale-105">
                    <div className="relative z-10 text-center">
                      <motion.div
                        className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-2xl font-black text-[#3B82F6] mb-2">{feature.metric}</div>
                      <h3 className="text-lg font-bold text-white mb-3 transition-colors group-hover:text-[#6366F1]">{feature.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#3B82F6]/20 via-white/10 to-transparent mb-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.8 }}
                      />
                      <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                      <div className="text-xs text-[#3B82F6] font-semibold mt-2">{feature.label}</div>
                    </div>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">Grow With Confidence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scaling outreach often means adding new domains and email accounts.
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                360Airo makes that expansion effortless. Each new domain goes through a controlled warmup phase, protecting your sender reputation and ensuring safe volume growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50 h-full group-hover:scale-105">
                    <motion.div
                      className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(59,130,246,0.5)' }}
                      transition={{ duration: 0.7 }}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#6366F1]">{benefit.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    />
                    <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50">
                    <motion.div
                      className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-[#3B82F6]/30"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.7 }}
                    >
                      <stat.icon className="h-8 w-8 text-[#3B82F6] transition-colors group-hover:text-white" />
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-black text-white mb-2"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/80 font-semibold text-sm">{stat.label}</div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#19001d]/40 to-[#6366F1]/20" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block">
                <span className="text-[#3B82F6] font-semibold text-sm tracking-wider uppercase">Your Foundation for Reliable Outreach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                From setup to scalability, 360Airo's Domains & Emails feature does more than manage your technical framework — it builds long-term reliability.
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                With proper authentication, validation, and monitoring, you send with confidence knowing your domain stands on solid ground.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20">
                    Get Started with Domains & Emails
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6 mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '150px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ maxWidth: '150px' }}
              />
              <p className="text-white/70 text-sm">🔒 Build trust with verified, authenticated domains</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
