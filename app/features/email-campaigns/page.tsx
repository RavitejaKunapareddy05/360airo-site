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
import Head from 'next/head';

// Enhanced GlowCard with mobile optimization
const GlowCard = ({ children, className = '', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => !isMobile && setIsHovered(true);
  const handleMouseLeave = () => !isMobile && setIsHovered(false);

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
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(168,85,247,0.25) 25%, transparent 60%)',
          borderRadius: '50%',
          opacity: isHovered && !isMobile ? 1 : 0,
          filter: 'blur(20px)',
        }}
      />
      {children}
    </div>
  );
};

// Simplified Campaign Dashboard with mobile optimization
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

  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  return (
    <div className="w-full max-w-sm lg:max-w-lg mx-auto">
      {/* Header with mobile-optimized animation */}
      <div className="text-center mb-6 lg:mb-8">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#C084FC] flex items-center justify-center shadow-xl lg:shadow-2xl"
        >
          <Command className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-xl lg:text-2xl font-bold text-white mb-1 lg:mb-2"
        >
          AI Campaign Center
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-white/70 text-sm lg:text-base"
        >
          Smart automation at work
        </motion.p>
      </div>

      {/* Main Dashboard with mobile optimization */}
      <GlowCard className="rounded-2xl lg:rounded-3xl">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/2 rounded-2xl lg:rounded-3xl border border-white/20 p-6 lg:p-8 shadow-xl lg:shadow-2xl backdrop-blur-xl">
          {/* Stats Grid with mobile-optimized animations */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -1 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5
                }}
                className="bg-white/5 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/10 hover:border-[#8B5CF6]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-2 lg:space-x-3 mb-1.5 lg:mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${stat.color}`} />
                  </motion.div>
                  <span className="text-xs text-white/60 uppercase tracking-wide">{stat.label}</span>
                </div>
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.3 }}
                  className="text-lg lg:text-2xl font-bold text-white"
                >
                  {stat.value}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Campaign Status with mobile optimization */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            <div className="flex items-center justify-between">
              <h4 className="text-base lg:text-lg font-semibold text-white">Campaign Status</h4>
              <div className="flex items-center space-x-1.5 lg:space-x-2">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-emerald-400 rounded-full"
                />
                <span className="text-xs lg:text-sm text-white/70">All Systems Active</span>
              </div>
            </div>
            
            <div className="space-y-2 lg:space-y-3">
              {['Q1 Product Launch', 'Customer Retention', 'Lead Nurturing'].map((campaign, index) => (
                <motion.div 
                  key={campaign} 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ 
                    delay: index * 0.12, 
                    duration: 0.4 
                  }}
                  className="flex items-center justify-between p-2.5 lg:p-3 bg-white/5 rounded-lg lg:rounded-xl hover:bg-white/8 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className={`w-6 h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-emerald-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}
                    >
                      <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                    </motion.div>
                    <span className="text-white text-xs lg:text-sm font-medium">{campaign}</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className={`px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-full text-xs ${
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

          {/* AI Simulation Button with mobile optimization */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(139,92,246,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={redirectToApp}
            className="w-full flex items-center justify-center space-x-2 lg:space-x-3 px-4 lg:px-6 py-3 lg:py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-lg lg:rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Play className="h-4 w-4 lg:h-5 lg:w-5" />
            </motion.div>
            <span>Run AI Optimization</span>
          </motion.button>

          {/* Progress Bar with mobile optimization */}
          {isSimulating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 lg:mt-6 space-y-2 lg:space-y-3"
            >
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <span className="text-white/70">Optimization Progress</span>
                <motion.span 
                  key={Math.round(progress)}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-white font-medium"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
              <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
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

// Motion variants - Mobile optimized
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  return (
    <>
      <Head>
        <title>AI & Manual Email Campaigns | 360Airo - Intelligent Campaign Management</title>
        <meta 
          name="description" 
          content="360Airo combines AI automation with manual control for powerful email campaigns. Plan smarter, reach further with intelligent campaign management and optimization." 
        />
        <meta 
          name="keywords" 
          content="email campaigns, AI campaign management, manual email campaigns, campaign automation, email marketing, 360Airo campaigns" 
        />
        
        {/* Canonical URL - This tells search engines this is the original page */}
        <link rel="canonical" href="https://360airo.com/features/email-campaigns" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="AI & Manual Email Campaigns | 360Airo - Intelligent Campaign Management" />
        <meta property="og:description" content="360Airo combines AI automation with manual control for powerful email campaigns. Plan smarter, reach further with intelligent campaign management and optimization." />
        <meta property="og:url" content="https://360airo.com/features/email-campaigns" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-email-campaigns.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI & Manual Email Campaigns | 360Airo" />
        <meta name="twitter:description" content="Plan smarter, reach further with 360Airo's intelligent email campaign management. Combine AI automation with manual control." />
        <meta name="twitter:image" content="https://360airo.com/twitter-email-campaigns.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Email Campaigns",
              "description": "360Airo combines AI automation with manual control for powerful email campaigns. Plan smarter, reach further with intelligent campaign management and optimization.",
              "url": "https://360airo.com/features/email-campaigns",
              "brand": {
                "@type": "Brand",
                "name": "360Airo"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://app.360airo.com/",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              }
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO - helps search engines discover the URL */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/email-campaigns">360Airo Email Campaigns</a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* HERO SECTION - Mobile Optimized with Content First */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements - Mobile Optimized */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 0],
                }}
                transition={{ 
                  duration: 6 + i * 0.4, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: i * 0.3 
                }}
                className={`absolute w-12 h-12 lg:w-16 lg:h-16 ${
                  i % 2 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#8B5CF6]/15 to-[#7C3AED]/10'
                    : 'rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#A855F7]/15 to-[#C084FC]/10'
                } blur-lg lg:blur-xl`}
                style={{ 
                  top: `${10 + (i * 12)}%`, 
                  left: `${8 + (i * 6)}%`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto relative z-10 w-full"
          >
            {/* MOBILE: Content first, then animations */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
              
              {/* CONTENT COLUMN - Always first on mobile */}
              <div className="space-y-6 lg:space-y-8 order-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  <div className="group relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 25px rgba(139,92,246,0.3)',
                          '0 0 50px rgba(168,85,247,0.5)',
                          '0 0 25px rgba(139,92,246,0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/20 to-[#C084FC]/30 rounded-full blur-lg"
                    />
                    <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#8B5CF6]/50 text-white font-semibold text-sm lg:text-base">
                      <motion.div
                        animate={{ 
                          rotate: [0, 180, 360],
                          scale: [1, 1.1, 1] 
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        className="mr-2 lg:mr-3"
                      >
                        <MousePointer className="h-4 w-4 lg:h-5 lg:w-5 text-[#A855F7]" />
                      </motion.div>
                      <span>AI & Manual Campaigns</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-4 lg:space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }}
                    className="text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="block text-2xl sm:text-3xl lg:text-7xl"
                    >
                      Plan Smarter,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent text-xl sm:text-2xl lg:text-7xl"
                    >
                      Reach Further
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                    className="h-1.5 lg:h-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] rounded-full relative overflow-hidden max-w-xs lg:max-w-lg"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
             </div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="space-y-4 lg:space-y-6 max-w-2xl"
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
                    Transform Email Campaigns with{' '}
                    <motion.span
                      animate={{ color: ['#8B5CF6', '#A855F7', '#ffffff', '#8B5CF6'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-semibold"
                    >
                      AI-Driven Intelligence
                    </motion.span>
                  </h2>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed">
                    Stop managing campaigns manually. 360Airo combines strategic planning with AI automation to deliver consistent, measurable results that scale with your business.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="pt-2 lg:pt-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -2 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="group relative overflow-hidden rounded-xl lg:rounded-2xl inline-block"
                    onClick={redirectToApp}
                  >
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
                    <Button size="lg" className="relative bg-transparent text-[#480056] px-6 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-xl lg:rounded-2xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl lg:group-hover:shadow-2xl w-full lg:w-auto">
                      <span>Start Your AI Campaign Revolution</span>
                      <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* ANIMATIONS COLUMN - Comes after content on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative order-2 lg:order-2 mt-8 lg:mt-0"
              >
                <SimpleCampaignDashboard />
              </motion.div>
            </div>

          </motion.div>
        </section>

        {/* FEATURES SECTION - Mobile Optimized */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-3 lg:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Strategic Campaign Intelligence</span>
              </div>
              <h2 className="text-2xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Build Your Email Calendar with <span className="text-[#8B5CF6]">AI Precision</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 lg:mb-8" style={{ maxWidth: '120px' }} />
              <p className="text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Experience intelligent automation that learns, adapts, and delivers exceptional results at enterprise scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl lg:rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${feature.color} w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                      whileHover={{  scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#A855F7] leading-tight">{feature.title}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 lg:mb-4" />
                    <p className="text-white/80 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION - Mobile Optimized */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-3 lg:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Why Choose 360Airo</span>
              </div>
              <h2 className="text-2xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Transform Your Campaign <span className="text-[#8B5CF6]">Performance</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 lg:mb-8" style={{ maxWidth: '120px' }} />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl lg:rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                  >
                    <motion.div
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#A855F7] leading-tight">{benefit.title}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 lg:mb-4" />
                    <p className="text-white/80 leading-relaxed text-sm lg:text-base">{benefit.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA - Mobile Optimized */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#19001d]/40 to-[#A855F7]/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Start Your Journey</span>
              </div>
              <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                Ready to revolutionize your campaigns with AI?
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 lg:mb-8" style={{ maxWidth: '120px' }} />
              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join thousands of marketers transforming their campaign performance with intelligent automation and predictive insights.
              </p>
              <div className="pt-2 lg:pt-4">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="group relative overflow-hidden rounded-xl lg:rounded-2xl inline-block"
                  onClick={redirectToApp}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-xl font-semibold rounded-xl lg:rounded-2xl transition-all duration-300 group-hover:text-[#480056] border-2 border-transparent group-hover:border-white/20 w-full lg:w-auto">
                    Start Your AI Campaign Revolution
                    <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-4 lg:mt-8 mb-2 lg:mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '120px' }}
              />
              <p className="text-white/80 text-sm lg:text-base">✨ Experience the future of intelligent campaign management</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}