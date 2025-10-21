'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Brain, 
  Target, 
  BarChart3,
  TrendingUp,
  Eye,
  Clock,
  Layers,
  Settings,
  Play,
  Activity,
  Mail,
  Command,
  MousePointer,
  Zap
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Enhanced GlowCard with proper cursor glow effect
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

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(168,85,247,0.25) 25%, transparent 60%)',
          borderRadius: '50%',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(20px)',
        }}
      />
      {children}
    </div>
  );
};

// Simplified Campaign Dashboard with subtle animations
const SimpleCampaignDashboard = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);

  const stats = [
    { label: 'Active Campaigns', value: '12', icon: Zap, color: 'text-emerald-400' },
    { label: 'Total Emails', value: '45.2K', icon: Mail, color: 'text-blue-400' },
    { label: 'Open Rate', value: '42.3%', icon: Eye, color: 'text-purple-400' },
    { label: 'Reply Rate', value: '8.7%', icon: TrendingUp, color: 'text-pink-400' }
  ];

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 0;
          }
          return prev + 3;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header with subtle animation */}
      <div className="text-center mb-8">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#C084FC] flex items-center justify-center shadow-2xl"
        >
          <Command className="h-8 w-8 text-white" />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl font-bold text-white mb-2"
        >
          AI Campaign Center
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white/70"
        >
          Smart automation at work
        </motion.p>
      </div>

      {/* Main Dashboard with glow effect */}
      <GlowCard className="rounded-3xl">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/2 rounded-3xl border border-white/20 p-8 shadow-2xl backdrop-blur-xl">
          {/* Stats Grid with hover animations */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6
                }}
                className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </motion.div>
                  <span className="text-xs text-white/60 uppercase tracking-wide">{stat.label}</span>
                </div>
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  className="text-2xl font-bold text-white"
                >
                  {stat.value}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Campaign Status with subtle animations */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">Campaign Status</h4>
              <div className="flex items-center space-x-2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                />
                <span className="text-sm text-white/70">All Systems Active</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {['Q1 Product Launch', 'Customer Retention', 'Lead Nurturing'].map((campaign, index) => (
                <motion.div 
                  key={campaign} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.5 
                  }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/8 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-emerald-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </motion.div>
                    <span className="text-white text-sm font-medium">{campaign}</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      index === 0 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : index === 1 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    {index === 0 ? 'Active' : index === 1 ? 'Scheduled' : 'Planning'}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Simulation Button with glow effect */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSimulating(!isSimulating)}
            disabled={isSimulating}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
          >
            {isSimulating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Settings className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
              >
                <Play className="h-5 w-5" />
              </motion.div>
            )}
            <span>{isSimulating ? 'AI Optimizing...' : 'Run AI Optimization'}</span>
          </motion.button>

          {/* Progress Bar with smooth animation */}
          {isSimulating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Optimization Progress</span>
                <motion.span 
                  key={Math.round(progress)}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-white font-medium"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </GlowCard>
    </div>
  );
};

// Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const features = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Map out campaigns with AI-powered timing and audience insights.',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
  },
  {
    icon: Brain,
    title: 'AI Optimization',
    description: 'Continuously improve with intelligent recommendations.',
    color: 'from-[#7C3AED] to-[#A855F7]',
  },
  {
    icon: Activity,
    title: 'Real-time Tracking',
    description: 'Monitor performance with advanced analytics.',
    color: 'from-[#A855F7] to-[#C084FC]',
  },
  {
    icon: Zap,
    title: 'Instant Execution',
    description: 'Deploy campaigns across multiple domains seamlessly.',
    color: 'from-[#C084FC] to-[#8B5CF6]',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save 80% Time',
    description: 'Automate planning, scheduling, and execution',
  },
  {
    icon: TrendingUp,
    title: 'Boost Engagement',
    description: 'AI-driven optimization increases response rates',
  },
  {
    icon: Eye,
    title: 'Perfect Deliverability',
    description: 'Protect reputation and maximize inbox placement',
  },
  {
    icon: Layers,
    title: 'Scale Unlimited',
    description: 'Handle thousands of campaigns effortlessly',
  },
  {
    icon: BarChart3,
    title: 'Smart Insights',
    description: 'Turn data into actionable strategies',
  },
];

export default function AIManualCampaignsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 1.6 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.5, 1.2, 0.5],
                rotate: [0, 360, 0],
              }}
              transition={{ 
                duration: 8 + i * 0.5, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: i * 0.4 
              }}
              className={`absolute w-16 h-16 ${
                i % 2 === 0
                  ? 'rounded-full bg-gradient-to-br from-[#8B5CF6]/15 to-[#7C3AED]/10'
                  : 'rounded-2xl bg-gradient-to-br from-[#A855F7]/15 to-[#C084FC]/10'
              } blur-xl`}
              style={{ 
                top: `${15 + (i * 10)}%`, 
                left: `${10 + (i * 8)}%`,
              }}
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
                <div className="group relative">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(139,92,246,0.4)',
                        '0 0 80px rgba(168,85,247,0.6)',
                        '0 0 40px rgba(139,92,246,0.4)',
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/20 to-[#C084FC]/30 rounded-full blur-xl"
                  />
                  <span className="relative inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-[#8B5CF6]/50 text-white font-semibold text-base">
                    <motion.div
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1] 
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      className="mr-3"
                    >
                      <MousePointer className="h-5 w-5 text-[#A855F7]" />
                    </motion.div>
                    <span>AI & Manual Campaigns</span>
                  </span>
                </div>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="block"
                  >
                    Plan Smarter,
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent"
                  >
                    Reach Further
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
                  className="h-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] rounded-full relative overflow-hidden max-w-lg"
                >
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35, duration: 0.7 }}
                className="space-y-6 max-w-2xl"
              >
                <h2 className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light">
                  Transform Email Campaigns with{' '}
                  <motion.span
                    animate={{ color: ['#8B5CF6', '#A855F7', '#ffffff', '#8B5CF6'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="font-semibold"
                  >
                    AI-Driven Intelligence
                  </motion.span>
                </h2>
                <p className="text-lg text-white/75 leading-relaxed">
                  Stop managing campaigns manually. 360Airo combines strategic planning with AI automation to deliver consistent, measurable results that scale with your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.7 }}
                className="pt-4"
              >
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-2xl inline-block">
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
                  <Button size="lg" className="relative bg-transparent text-[#480056] px-10 py-4 text-lg font-bold rounded-2xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl">
                    <span>Start Your AI Campaign Revolution</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT - SIMPLIFIED DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="relative"
            >
              <SimpleCampaignDashboard />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Strategic Campaign Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Email Calendar with <span className="text-[#8B5CF6]">AI Precision</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Experience intelligent automation that learns, adapts, and delivers exceptional results at enterprise scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                >
                  <motion.div
                    className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#A855F7]">{feature.title}</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Why Choose 360Airo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Campaign <span className="text-[#8B5CF6]">Performance</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                >
                  <motion.div
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#A855F7]">{benefit.title}</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#19001d]/40 to-[#A855F7]/20" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-block">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Start Your Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to revolutionize your campaigns with AI?
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of marketers transforming their campaign performance with intelligent automation and predictive insights.
            </p>
            <div className="pt-4">
              <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-2xl inline-block">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20">
                  Start Your AI Campaign Revolution
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: '200px' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ maxWidth: '200px' }}
            />
            <p className="text-white/70">✨ Experience the future of intelligent campaign management</p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
