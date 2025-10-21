'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Mail, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  Timer,
  Users,
  Eye,
  ThermometerSun,
  AlertTriangle,
  Target,
  Activity,
  Zap,
  Star,
  Award,
  Flame,
  Clock,
  Send,
  Inbox,
  UserCheck
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
          background: 'radial-gradient(circle, rgba(255,100,50,0.35) 0%, rgba(255,150,100,0.2) 25%, transparent 55%)',
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

const warmupSteps = [
  {
    step: '01',
    title: 'Smart, Gradual Ramp-Up',
    description: 'Our system starts small — sending only a few emails per day — and scales up intelligently based on engagement and sender health.',
    icon: TrendingUp,
    color: 'from-[#FF6432] to-[#FF8A65]',
  },
  {
    step: '02',
    title: 'Real Interactions, Real Impact',
    description: 'Every email sent and received through our automated warmup network is opened, replied to, and marked as important by verified accounts — mimicking genuine human activity that ISPs trust.',
    icon: Users,
    color: 'from-[#FF8A65] to-[#FFB74D]',
  },
  {
    step: '03',
    title: 'Reputation Tracking Dashboard',
    description: 'Stay in control with real-time analytics. Track sender reputation, domain warmup progress, and email health scores all in one place.',
    icon: BarChart3,
    color: 'from-[#FFB74D] to-[#FFC107]',
  },
  {
    step: '04',
    title: 'Continuous Protection',
    description: '360Airo monitors spam complaints, bounce rates, and blacklists to help improve email deliverability and maintain domain trust over time.',
    icon: Shield,
    color: 'from-[#FFC107] to-[#FF6432]',
  },
];

const benefits = [
  {
    icon: Eye,
    title: 'Higher Open and Reply Rates',
    description: 'because your emails actually reach inboxes.',
    color: 'from-[#FF6432] to-[#FF8A65]',
    metric: '+85%',
  },
  {
    icon: Award,
    title: 'Stronger Sender Score',
    description: 'sustained by consistent, reputation-safe activity.',
    color: 'from-[#FF8A65] to-[#FFB74D]',
    metric: '95+',
  },
  {
    icon: AlertTriangle,
    title: 'Reduced Spam Risk',
    description: 'through steady, compliant warmup patterns.',
    color: 'from-[#FFB74D] to-[#FFC107]',
    metric: '-90%',
  },
  {
    icon: Target,
    title: 'Better Outreach ROI',
    description: 'since every campaign starts with healthy deliverability.',
    color: 'from-[#FFC107] to-[#FF6432]',
    metric: '3x',
  },
];

const userTypes = [
  {
    title: 'Founders & Marketers',
    description: 'Launch campaigns with confidence knowing your domain reputation is protected',
    icon: Star,
    color: 'from-[#FF6432] to-[#FF8A65]',
  },
  {
    title: 'SDRs & Sales Teams',
    description: 'Focus on selling while we handle the technical aspects of email deliverability',
    icon: Target,
    color: 'from-[#FF8A65] to-[#FFB74D]',
  },
  {
    title: 'Agencies',
    description: 'Manage multiple client domains with centralized warmup monitoring and reporting',
    icon: Users,
    color: 'from-[#FFB74D] to-[#FFC107]',
  },
];

const stats = [
  { value: '98%', label: 'Inbox Delivery Rate', icon: Mail },
  { value: '30 Days', label: 'Average Warmup Time', icon: Timer },
  { value: '10,000+', label: 'Domains Warmed', icon: ThermometerSun },
  { value: '99.9%', label: 'Uptime Guarantee', icon: Activity },
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
        className="h-0.5 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-transparent mb-6"
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
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#FF6432]/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6432] to-[#FF8A65]" />
      <div className="h-px bg-gradient-to-r from-[#FF6432]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

export default function EmailWarmupPage() {
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
                  linear-gradient(rgba(255,100,50,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,100,50,0.15) 1px, transparent 1px)
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
                    ? 'rounded-full bg-gradient-to-br from-[#FF6432]/20 to-[#FF8A65]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#FF8A65]/20 to-[#FFB74D]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#FFB74D]/20 to-[#FFC107]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#FFC107]/15 to-[#FF6432]/15'
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
                          '0 0 30px rgba(255,100,50,0.4)',
                          '0 0 60px rgba(255,138,101,0.6)',
                          '0 0 30px rgba(255,100,50,0.4)',
                        ],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#FF6432]/30 via-[#FF8A65]/20 to-[#FFB74D]/30 rounded-full blur-xl"
                    />
                    <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#FF6432]/50 text-white font-semibold text-sm sm:text-base">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                        className="mr-3"
                      >
                        <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-[#FF8A65]" />
                      </motion.div>
                      <span>Email Warmup Service</span>
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
                      Warm Up
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Your Emails.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent transform-gpu"
                    >
                      Win the Inbox.
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                    className="h-1.5 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full relative overflow-hidden max-w-md"
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
                    Turn Cold Domains into Trusted Senders with{' '}
                    <motion.span
                      animate={{ color: ['#FF6432', '#FF8A65', '#ffffff', '#FF6432'] }}
                      transition={{ duration: 3.4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      360Airo's Email Warmup Tool
                    </motion.span>
                  </p>
                  <p className="text-base text-white/75">
                    Before your campaign can connect, your emails need to land — not linger in spam.
                    360Airo's email warmup service builds trust with inbox providers through authentic, automated engagement.
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
                      <span>Get Started with Email Warmup</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - COMPACT VERTICAL PROGRESS TIMELINE */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="relative flex items-center justify-center h-full"
              >
                <div className="relative w-full max-w-sm">
                  {/* Timeline Container */}
                  <div className="relative py-8">
                    {/* Vertical Progress Line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-700/30 rounded-full">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '65%' }}
                        transition={{ delay: 1.5, duration: 2.5, ease: 'easeOut' }}
                        className="w-full bg-gradient-to-b from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full"
                      />
                    </div>

                    {/* Timeline Steps - Compact */}
                    {[
                      {
                        icon: Clock,
                        title: 'Day 0-5',
                        subtitle: 'Cold Start',
                        description: 'Domain begins with zero reputation',
                        status: 'completed',
                        delay: 1.2
                      },
                      {
                        icon: Send,
                        title: 'Day 6-15',
                        subtitle: 'Gradual Sending',
                        description: '2-5 emails per day with engagement',
                        status: 'completed',
                        delay: 1.4
                      },
                      {
                        icon: TrendingUp,
                        title: 'Day 16-25',
                        subtitle: 'Building Trust',
                        description: 'Increased volume, better reputation',
                        status: 'active',
                        delay: 1.6
                      },
                      {
                        icon: Inbox,
                        title: 'Day 26-30',
                        subtitle: 'Inbox Ready',
                        description: 'High deliverability achieved',
                        status: 'upcoming',
                        delay: 1.8
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: step.delay, duration: 0.6 }}
                        className="relative flex items-start mb-6 group"
                      >
                        {/* Timeline Node - Compact */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: step.delay + 0.2, duration: 0.5, type: 'spring' }}
                          className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                            step.status === 'completed' 
                              ? 'bg-gradient-to-br from-[#FF6432] to-[#FF8A65]' 
                              : step.status === 'active'
                              ? 'bg-gradient-to-br from-[#FF8A65] to-[#FFB74D] animate-pulse'
                              : 'bg-gradient-to-br from-gray-600 to-gray-700'
                          }`}
                        >
                          <step.icon className="h-5 w-5 text-white" />
                          
                          {/* Status Indicator - Smaller */}
                          {step.status === 'completed' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: step.delay + 0.4 }}
                              className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="h-2 w-2 text-white" />
                            </motion.div>
                          )}
                          
                          {step.status === 'active' && (
                            <motion.div
                              animate={{ scale: [1, 1.15, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -inset-1 bg-[#FF8A65]/20 rounded-xl"
                            />
                          )}
                        </motion.div>

                        {/* Step Content - Compact */}
                        <motion.div
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: step.delay + 0.3, duration: 0.5 }}
                          className="ml-4 flex-1"
                        >
                          <div className="bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-lg rounded-xl border border-white/10 p-3 shadow-lg group-hover:border-[#FF6432]/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-sm font-bold text-white">{step.title}</h3>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                step.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : step.status === 'active'
                                  ? 'bg-[#FF8A65]/20 text-[#FF8A65]'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}>
                                {step.status === 'completed' ? '✓' : step.status === 'active' ? '●' : '○'}
                              </span>
                            </div>
                            <p className="text-[#FF8A65] font-medium text-xs mb-1">{step.subtitle}</p>
                            <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Current Status Card - Compact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.6 }}
                      className="relative bg-gradient-to-br from-[#FF6432]/20 via-[#FF8A65]/10 to-transparent backdrop-blur-lg rounded-xl border border-[#FF6432]/20 p-4 shadow-lg mt-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6432] to-[#FF8A65] flex items-center justify-center">
                            <ThermometerSun className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">Domain Status</h4>
                            <p className="text-xs text-white/60">Current Progress</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-black text-[#FF6432]">Day 18</div>
                          <div className="text-xs text-white/50">of 30</div>
                        </div>
                      </div>
                      
                      {/* Progress Bar - Compact */}
                      <div className="space-y-1 mb-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Warmup Progress</span>
                          <span className="text-[#FF8A65] font-medium">60%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60%' }}
                            transition={{ delay: 2.4, duration: 1.5, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full"
                          />
                        </div>
                      </div>

                      {/* Quick Stats - Compact */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: 'Sent', value: '47', icon: Send },
                          { label: 'Opens', value: '44', icon: Eye },
                          { label: 'Score', value: '85', icon: Award }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.6 + i * 0.1 }}
                            className="text-center bg-white/5 rounded-lg p-2"
                          >
                            <stat.icon className="h-3 w-3 text-[#FF6432] mx-auto mb-1" />
                            <div className="text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-white/50">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Floating Heat Indicators - Subtle */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`heat-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 0.6, 0],
                          scale: [0, 1, 0],
                          y: [0, -25, -50],
                          x: [0, Math.sin(i) * 8, Math.sin(i) * 15],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.6,
                          ease: 'easeOut'
                        }}
                        className="absolute top-16 left-6 w-1.5 h-1.5 bg-[#FF6432] rounded-full blur-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WHAT IS EMAIL WARMUP */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-sm tracking-wider uppercase">Understanding Email Warmup</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Is Email Warmup?
              </h2>
              <SectionDivider />
              <div className="text-left space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  When a new domain starts sending emails in bulk, ISPs often flag it as suspicious. The email warmup process gradually increases your sending volume, letting your domain establish credibility.
                </p>
                <p>
                  With 360Airo, this process is <span className="text-[#FF6432] font-semibold">completely automated</span> — designed to boost inbox placement and protect your domain reputation without manual effort.
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
                <span className="text-[#FF6432] font-semibold text-sm tracking-wider uppercase">How 360Airo's Warmup Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Four Steps to <span className="text-[#FF6432]">Inbox Success</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80">
                Our intelligent system handles every aspect of the warmup process automatically.
              </p>
            </motion.div>

            <div className="space-y-12">
              {warmupSteps.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row items-center gap-8 group">
                  <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
                    <div className="relative">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} w-20 h-20 rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.18, rotate: 12, boxShadow: '0 0 50px rgba(255,100,50,0.8)' }}
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
                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover:text-[#FF8A65]">{item.title}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-sm tracking-wider uppercase">Why It Matters</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Impact on Your <span className="text-[#FF6432]">Bottom Line</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Email warmup isn't just about deliverability — it's about protecting your investment and maximizing your outreach ROI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-6 h-full border border-white/10 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#FF6432]/50 group-hover:scale-105">
                    <div className="relative z-10 text-center">
                      <motion.div
                        className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-2xl font-black text-[#FF6432] mb-2">{benefit.metric}</div>
                      <h3 className="text-lg font-bold text-white mb-3 transition-colors group-hover:text-[#FF8A65]">{benefit.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#FF6432]/20 via-white/10 to-transparent mb-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.8 }}
                      />
                      <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </Card>
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
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#FF6432]/50">
                    <motion.div
                      className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-[#FF6432]/30"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.7 }}
                    >
                      <stat.icon className="h-8 w-8 text-[#FF6432] transition-colors group-hover:text-white" />
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

        {/* BUILT FOR TEAMS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-sm tracking-wider uppercase">Built for Teams That Mean Business</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                From founders and marketers to SDRs and agencies
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Anyone running cold email campaigns can benefit from 360Airo's email warmup service. We make it effortless to build domain trust, increase sender score, and optimize email outreach at scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {userTypes.map((type, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#FF6432]/50 h-full group-hover:scale-105">
                    <motion.div
                      className={`bg-gradient-to-r ${type.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(255,100,50,0.5)' }}
                      transition={{ duration: 0.7 }}
                    >
                      <type.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#FF8A65]">{type.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    />
                    <p className="text-white/80 text-sm leading-relaxed">{type.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6432]/20 via-[#19001d]/40 to-[#FF8A65]/20" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block">
                <span className="text-[#FF6432] font-semibold text-sm tracking-wider uppercase">Start Warming Up Smarter</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Don't let spam filters decide your campaign's fate.
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Let 360Airo help you boost open rates, avoid spam folders, and earn inbox credibility — automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20">
                    Get Started with Email Warmup
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
              <p className="text-white/70 text-sm">🔥 Transform cold domains into trusted senders</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
