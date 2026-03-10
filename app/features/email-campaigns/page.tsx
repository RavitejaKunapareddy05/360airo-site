'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  BarChart3, 
  TrendingUp,
  Eye,
  MousePointer,
  Mail,
  Users,
  Target,
  Activity,
  Zap,
  PieChart,
  LineChart,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Globe,
  Filter,
  Download,
  Share2,
  Layers,
  Brain,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Inbox,
  Shield,
  Target as TargetIcon,
  LineChart as LineChartIcon,
  MailCheck,
  Settings,
  Send,
  Workflow,
  Layout,
  Palette,
  Sliders,
  User,
  Bot,
  Award,
  Server,
  Database,
  Cloud,
  ExternalLink,
  Play,
  Rocket,
  BarChart,
  Shield as ShieldIcon,
  Grid as GridIcon,
  Check
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Enhanced GlowCard with cursor-reactive glow
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

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 text-left flex items-start justify-between hover:bg-white/5 transition-all duration-300 rounded-lg px-4"
      >
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-[#8B5CF6]" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white/50" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2 text-left">{question}</h3>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2">
                    <div className="h-px bg-gradient-to-r from-[#8B5CF6]/30 to-transparent w-full mb-4" />
                    <p className="text-white/70 text-base leading-relaxed">{answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

// Clean & Professional Analytics Dashboard
const AnalyticsDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);

  const metrics = [
    { 
      id: 'overview', 
      label: 'Open Rate', 
      icon: Eye, 
      value: '42.8%', 
      change: '+8.2%',
      color: 'from-emerald-500 to-teal-400'
    },
    { 
      id: 'clicks', 
      label: 'Click Rate', 
      icon: MousePointer, 
      value: '18.5%', 
      change: '+15.7%',
      color: 'from-purple-500 to-pink-400'
    },
    { 
      id: 'replies', 
      label: 'Reply Rate', 
      icon: Mail, 
      value: '9.3%', 
      change: '+22.1%',
      color: 'from-blue-500 to-cyan-400'
    }
  ];

  const performanceData = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 78 },
    { label: 'Mar', value: 82 },
    { label: 'Apr', value: 74 },
    { label: 'May', value: 89 },
    { label: 'Jun', value: 94 }
  ];

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-2xl mx-auto">
      {/* Clean Header */}
      <div className="text-center mb-4 sm:mb-6">
        <motion.div
          animate={{ rotate: isAnimating ? [0, 360] : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-lg"
        >
          <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </motion.div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-1">Campaign Analytics Dashboard</h3>
        <p className="text-white/60 text-xs sm:text-sm">Real-time campaign performance</p>
      </div>

      {/* Main Dashboard */}
      <GlowCard className="rounded-xl sm:rounded-2xl">
        <div className="bg-gradient-to-br from-white/8 via-white/4 to-white/2 rounded-xl sm:rounded-2xl border border-white/15 p-4 sm:p-6 shadow-xl backdrop-blur-lg">
          
          {/* Compact Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => setSelectedMetric(metric.id)}
                className={`cursor-pointer p-2 sm:p-3 rounded-lg sm:rounded-xl border transition-all duration-300 ${
                  selectedMetric === metric.id
                    ? 'bg-white/10 border-[#8B5CF6]/40 shadow-md'
                    : 'bg-white/3 border-white/8 hover:border-[#8B5CF6]/20'
                }`}
              >
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                    <metric.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wide">{metric.label}</div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-sm sm:text-lg font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-emerald-400 font-medium">{metric.change}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clean Chart Visualization */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h4 className="text-xs sm:text-sm font-semibold text-white">Campaign Performance</h4>
              <button
                onClick={triggerAnimation}
                className="text-xs text-[#A855F7] hover:text-white transition-colors"
              >
                Refresh
              </button>
            </div>
            
            <div className="bg-white/3 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/8">
              <div className="h-24 sm:h-32 flex items-end justify-between space-x-1 sm:space-x-2">
                {performanceData.map((data, index) => (
                  <div key={data.label} className="flex-1 flex flex-col items-center">
                    <div className="w-full mb-1 sm:mb-2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.value}%` }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                        className="w-full bg-gradient-to-t from-[#8B5CF6] to-[#A855F7] rounded-t sm:rounded-t-lg"
                        style={{ minHeight: '3px' }}
                      />
                    </div>
                    <div className="text-xs text-white/50 font-medium">{data.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Bottom Section */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/60">Live</span>
              </div>
              <span className="text-white/50 hidden sm:inline">Updated now</span>
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-all">
                <Filter className="h-3 w-3" />
              </button>
              <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-all">
                <Download className="h-3 w-3" />
              </button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-xs px-2 sm:px-3 py-1 h-5 sm:h-6"
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                View All
              </Button>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Additional Stats Cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-gradient-to-r from-white/5 to-white/2 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-white">Deliverability</div>
              <div className="text-xs text-white/60">98.2% Success</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="bg-gradient-to-r from-white/5 to-white/2 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-white">Active Campaigns</div>
              <div className="text-xs text-white/60">24 Running</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Motion variants (optimized for mobile)
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const features = [
  {
    icon: Send,
    title: 'Create Campaigns',
    description: 'Plan, launch, and manage high-impact email campaigns from one platform.',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    stat: '5,000+ Campaigns'
  },
  {
    icon: Workflow,
    title: 'Automate Workflows',
    description: 'Build automated sequences for onboarding, nurturing, and follow-ups.',
    color: 'from-[#7C3AED] to-[#A855F7]',
    stat: '12M+ Actions'
  },
  {
    icon: Layout,
    title: 'Visual Builder',
    description: 'Design professional emails without technical expertise.',
    color: 'from-[#A855F7] to-[#C084FC]',
    stat: '500+ Templates'
  },
  {
    icon: Filter,
    title: 'Smart Segmentation',
    description: 'Divide contacts based on behavior and engagement history.',
    color: 'from-[#C084FC] to-[#8B5CF6]',
    stat: '98% Accuracy'
  },
];

const insights = [
  {
    icon: Eye,
    title: 'Track Engagement',
    description: 'Track open and click rates to gauge campaign performance',
    metric: '42.8%',
    trend: '+8.2%'
  },
  {
    icon: Mail,
    title: 'Reply Analysis',
    description: 'Monitor reply rates to measure connection quality',
    metric: '9.3%',
    trend: '+22.1%'
  },
  {
    icon: Target,
    title: 'Template Performance',
    description: 'Identify top-performing templates for future campaigns',
    metric: '156',
    trend: '+45 new'
  },
  {
    icon: CheckCircle2,
    title: 'Deliverability Reports',
    description: 'View deliverability reports to keep your messages inbox-ready',
    metric: '98.2%',
    trend: '+1.8%'
  },
];

const visualizations = [
  {
    icon: LineChart,
    title: 'Campaign Trends',
    description: 'Track success at a glance with visual trend graphs'
  },
  {
    icon: PieChart,
    title: 'Engagement Charts',
    description: 'Monitor audience interaction with real-time engagement charts'
  },
  {
    icon: Activity,
    title: 'Deliverability Insights',
    description: 'Get comprehensive deliverability insights for better inbox placement'
  },
  {
    icon: Globe,
    title: 'Complete Tracking',
    description: 'Complete email campaign tracking across all campaigns'
  }
];

const faqs = [
  {
    question: "What is an email campaign, and how does 360Airo automate it end-to-end?",
    answer: "An email campaign is a structured outreach effort using planned emails and follow-ups. 360Airo automates campaign creation, scheduling, sequencing, tracking, and optimization from initial send to performance analysis."
  },
  {
    question: "Who should use an email campaign tool for outreach and lead generation?",
    answer: "Email campaign tools are ideal for sales teams, agencies, and SaaS businesses that rely on outbound outreach to generate leads, nurture prospects, and book meetings consistently at scale."
  },
  {
    question: "How can email campaign software improve campaign performance and results?",
    answer: "Email campaign software improves performance by ensuring consistent follow-ups, optimized timing, personalization, and visibility into engagement metrics, helping teams refine outreach instead of relying on manual guesswork."
  },
  {
    question: "How does 360Airo ensure emails land in the inbox and not the spam folder?",
    answer: "360Airo protects inbox placement through controlled sending, email warmup, engagement monitoring, and deliverability-focused workflows that help maintain sender reputation and reduce spam-related risks."
  },
  {
    question: "How do email campaigns help increase replies, meetings, and conversions?",
    answer: "Email campaigns create structured, repeated touchpoints that build familiarity and trust. Timely follow-ups and relevant messaging increase response rates, leading to more conversations, meetings, and conversions."
  },
  {
    question: "How can your email campaign analytics help optimize future campaigns?",
    answer: "Email campaign analytics reveal what messaging, timing, and sequences perform best. Teams use these insights to adjust future campaigns, improve reply rates, and make data-driven outreach decisions."
  },
  {
    question: "Can I run cold email campaigns safely using 360Airo?",
    answer: "Yes. 360Airo enables safe cold email campaigns through email warmup, pacing controls, engagement tracking, and deliverability monitoring, reducing the risk of spam placement or sender reputation damage."
  },
  {
    question: "How many emails can be safely sent per day in an email campaign?",
    answer: "Safe daily sending limits depend on domain reputation and warmup status. 360Airo helps manage volume gradually, ensuring campaigns scale responsibly without triggering spam filters."
  }
];

export default function EmailCampaignPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
       {/* Hidden meta tags for client-side rendering */}
      <div className="hidden">
        <title>AI Email Campaign Software | Automate & Personalize Emails – 360Airo</title>
        <meta 
          name="description" 
          content="360Airo enables AI-driven email campaigns with automation, personalization, and performance tracking—helping teams convert emails into revenue.
" 
        />
        <meta 
          name="keywords" 
          content="email campaign software, email marketing campaigns, campaign management, email automation, email segmentation, campaign analytics" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/email-campaigns" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Email Campaign Software | Automate & Personalize Emails – 360Airo
" />
        <meta property="og:description" content="360Airo enables AI-driven email campaigns with automation, personalization, and performance tracking—helping teams convert emails into revenue.
" />
        <meta property="og:url" content="https://360airo.com/features/email-campaigns" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-email-campaigns.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Campaign - Create, Automate & Optimize High-Performing Campaigns | 360Airo" />
        <meta name="twitter:description" content="360Airo enables AI-driven email campaigns with automation, personalization, and performance tracking—helping teams convert emails into revenue.
" />
        <meta name="twitter:image" content="https://360airo.com/twitter-email-campaigns.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </div>
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Email Campaign Software",
              "description": "Advanced email campaign software to plan, launch, and manage high-impact email marketing campaigns.",
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
              },
              "featureList": [
                "Email campaign creation and management",
                "Automated email sequences",
                "Visual email builder",
                "Advanced audience segmentation",
                "Campaign analytics and tracking",
                "High deliverability tools"
              ]
            })
          }}
        />

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/email-campaign">360Airo Email Campaign Software</a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* HERO SECTION - UPDATED CONTENT */}
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
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 ${
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
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-screen py-16 sm:py-20">
              {/* LEFT CONTENT - UPDATED */}
              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <div className="group relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(139,92,246,0.4)',
                          '0 0 60px rgba(168,85,247,0.6)',
                          '0 0 30px rgba(139,92,246,0.4)',
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/20 to-[#C084FC]/30 rounded-full blur-xl"
                    />
                    <span className="relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-[#8B5CF6]/50 text-white font-semibold text-sm sm:text-base">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1] 
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        className="mr-2 sm:mr-3"
                      >
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 text-[#A855F7]" />
                      </motion.div>
                      <span>Email Campaign Software</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-4 sm:space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.8, type: 'spring', stiffness: 100 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[0.9] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="block"
                    >
                      Email Campaign
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent"
                    >
                      Create, Automate, Optimize
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
                    className="h-1.5 sm:h-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] rounded-full relative overflow-hidden max-w-lg"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35, duration: 0.6 }}
                  className="space-y-4 sm:space-y-6 max-w-2xl"
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
                    <motion.span
                      animate={{ color: ['#ffffff', '#A855F7', '#ffffff'] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      High-Performing Campaigns.
                    </motion.span>{' '}
                    Consistent Results.
                  </h2>
                  <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                    360Airo is an advanced email campaign software built to help businesses plan, launch, and manage high-impact email marketing campaigns from one centralized platform. Whether you're running promotional emails, lead nurturing sequences, or automated follow-ups, our email campaign management software ensures every message reaches the right audience at the right time.
                    Designed for scalability and performance, 360Airo helps marketing and sales teams turn emails into a consistent revenue-generating channel.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="pt-2 sm:pt-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }} 
                    whileTap={{ scale: 0.96 }} 
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl inline-block w-full sm:w-auto"
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
                    <Button 
                      size="lg" 
                      className="relative bg-transparent text-[#480056] px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl w-full"
                      onClick={() => window.open('https://app.360airo.com/', '_blank')}
                    >
                      <span>Start Your Campaign</span>
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - CLEAN ANALYTICS DASHBOARD */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative flex justify-center lg:justify-end mt-8 sm:mt-0"
              >
                <AnalyticsDashboard />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* RUN SMARTER EMAIL MARKETING CAMPAIGNS SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Smarter Marketing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Run Smarter Email Marketing Campaigns
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Successful email marketing campaigns are not about sending more emails—they're about sending relevant ones. 360Airo enables you to manage your entire email campaign workflow, from audience segmentation to automation and analytics, without switching between tools.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mt-4">
                With a unified dashboard, you can create targeted campaigns, automate repetitive tasks, and maintain consistent communication across your customer journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {insights.map((insight, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl sm:rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 text-left transition-all duration-400 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                  >
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <motion.div
                        className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <insight.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 transition-colors group-hover:text-[#A855F7]">{insight.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{insight.description}</p>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="text-xl sm:text-2xl font-bold text-[#A855F7]">{insight.metric}</div>
                          <div className="text-xs sm:text-sm text-emerald-400 font-medium">{insight.trend}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* POWERFUL EMAIL CAMPAIGN MANAGEMENT SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Unified Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Powerful Email Campaign Management in One Platform
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Managing multiple email campaigns can quickly become complex. 360Airo simplifies email campaign management by giving you full visibility into campaign performance, audience engagement, and deliverability.
                From draft to deployment, every stage of your email marketing campaign is organized, trackable, and optimized for better results.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mt-4">
                Try out our <Link href="/features/ai-email-generator" className="text-[#A855F7] hover:text-white hover:underline transition-all">AI Email Generator</Link> for better responses from your prospective clients.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* DESIGN EMAILS SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Email Design</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Design Emails That Drive Engagement
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Create visually appealing and responsive emails without technical expertise. 360Airo's intuitive email builder allows you to design professional emails that look great across devices and inboxes.
                Maintain brand consistency, test different layouts, and launch campaigns faster using flexible templates built for modern email marketing software needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {visualizations.map((viz, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl sm:rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                  >
                    <motion.div
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                      whileHover={{ rotate: 360, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <viz.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 transition-colors group-hover:text-[#A855F7]">{viz.title}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 sm:mb-4" />
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{viz.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>

            {/* Additional content sections */}
            <div className="mt-12 space-y-8">
              {/* Segmentation Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Advanced Audience Segmentation for Targeted Campaigns</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Relevance drives results. With advanced segmentation, 360Airo allows you to divide your contact lists based on behavior, demographics, engagement history, and custom attributes.
                  This ensures your email campaigns reach highly targeted audiences, improving open rates, click-through rates, and overall campaign effectiveness.
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white/70 text-sm italic">
                    "Tracking your Email Campaign Analytics gives you a better idea of how effective your emails are. Once you've understood, you can tweak and make changes to your strategies accordingly."
                  </p>
                </div>
              </motion.div>

              {/* Personalization Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Personalized Email Campaigns at Scale</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Modern customers expect personalization. 360Airo enables you to create personalized email campaigns using dynamic content, tailored subject lines, and behavior-based triggers.
                  Send one-to-one experiences at scale with data-driven personalization that strengthens relationships and increases conversions.
                </p>
              </motion.div>

              {/* Automation Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Automated Email Campaigns That Convert</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Automation is at the core of scalable email marketing. With 360Airo's email automation software, you can build and deploy automated email campaigns for onboarding, lead nurturing, follow-ups, re-engagement, and more.
                  Set workflows once and let your email campaign software handle consistent communication—ensuring no lead or customer is missed.
                </p>
              </motion.div>

              {/* Analytics Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Email Campaign Analytics and Performance Tracking</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Measure what matters with real-time email campaign analytics. Track open rates, click-through rates, bounce rates, conversions, and unsubscribe trends from a single dashboard.
                  These insights help you refine messaging, optimize timing, and continuously improve your email marketing campaign performance.
                </p>
              </motion.div>

              {/* Deliverability Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">High Deliverability and Compliance-Ready Email Campaigns</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Protect your sender reputation with built-in best practices for email deliverability. 360Airo supports list hygiene, opt-in management, and unsubscribe handling to ensure compliance with email regulations.
                  This helps your bulk email campaigns land in inboxes—not spam folders.
                </p>
              </motion.div>

              {/* Integration Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Seamless Integration with Your Marketing Ecosystem</h3>
                <p className="text-white/80 text-base leading-relaxed">
                  360Airo integrates seamlessly with your lead management software, Prospect CRM, and multichannel outreach tools. Connect email campaigns with sales pipelines and customer data for a unified engagement strategy.
                  Run consistent campaigns across email, WhatsApp, SMS, and other channels from one platform.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WHO SHOULD USE SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Target Audience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Who Should Use 360Airo's Email Campaign Software?
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                This email campaign software is ideal for:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <ul className="space-y-4">
                  {[
                    "Marketing teams running large-scale email marketing campaigns",
                    "Sales teams using email for lead nurturing and follow-ups",
                    "Startups and SMBs scaling outreach efficiently",
                    "Enterprises managing complex audience segments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#A855F7] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#A855F7]/10 border border-[#8B5CF6]/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose 360Airo for Email Campaigns?</h3>
                <p className="text-white/80 mb-4">
                  360Airo combines automation, personalization, analytics, and scalability into one powerful email marketing software. Instead of juggling multiple tools, you get a unified platform that supports your entire email campaign management process.
                </p>
                <p className="text-white/80">
                  From strategy to execution and optimization, 360Airo helps you drive measurable engagement and revenue growth.
                </p>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Launch High-Impact Email Campaigns with 360Airo</h3>
              <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                Turn email into a predictable growth channel. With 360Airo's email campaign software, you can create targeted, automated, and data-driven email campaigns that deliver real business results.
                Start your email marketing journey with 360Airo and take full control of your outreach strategy.
              </p>
            </div>
          </motion.div>
        </section>

        {/* FEATURES SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">360Airo Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Everything You Need in <span className="text-[#8B5CF6]">One Platform</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                From campaign creation to performance optimization, 360Airo provides all the tools you need to succeed with email marketing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl sm:rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 text-center transition-all duration-400 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${feature.color} w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                      whileHover={{ rotate: 360, scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 transition-colors group-hover:text-[#A855F7]">{feature.title}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 sm:mb-4" />
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{feature.description}</p>
                    <div className="text-xs sm:text-sm text-[#8B5CF6] font-semibold">{feature.stat}</div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* START CREATING CAMPAIGNS CTA SECTION - UPDATED */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#19001d]/40 to-[#A855F7]/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Ready to Launch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Start Creating High-Impact Email Campaigns
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                360Airo gives you everything you need to create, automate, and optimize email campaigns—all in one intuitive platform.
                ✨ Transform your outreach with powerful email campaign software
              </p>
              <div className="pt-2 sm:pt-4">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -2 }} 
                  whileTap={{ scale: 0.96 }} 
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl inline-block w-full sm:w-auto"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    className="relative bg-white text-[#480056] hover:bg-transparent px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full"
                    onClick={() => window.open('https://app.360airo.com/', '_blank')}
                  >
                    Start Your First Campaign
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-6 sm:mt-8 mb-3 sm:mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: '150px sm:200px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '150px sm:200px' }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ SECTION - KEPT SAME */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Common Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Frequently Asked <span className="text-[#8B5CF6]">Questions</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about email campaigns, automation, deliverability, and how 360Airo helps you scale outreach safely and effectively.
              </p>
            </motion.div>

            {/* FAQ Items */}
            <GlowCard className="rounded-xl sm:rounded-2xl">
              <div className="bg-gradient-to-br from-white/5 via-white/2 to-white/5 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-8 shadow-xl backdrop-blur-lg">
                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      index={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFaqIndex === index}
                      onClick={() => handleFaqClick(index)}
                    />
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
