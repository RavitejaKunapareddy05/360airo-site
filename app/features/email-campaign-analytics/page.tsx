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
  Plus,
  Minus
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';

// FAQ Component
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What key features does 360Airo's email campaign analytics include?",
      answer: "360Airo's email campaign analytics includes real-time tracking of opens, clicks, replies, bounce rates, and conversions. It also provides sender health insights, inbox placement indicators, and performance comparisons across campaigns. These features help businesses understand what is working, identify bottlenecks, and make data-backed decisions to improve outreach effectiveness and overall email campaign performance."
    },
    {
      question: "What metrics can I track using 360Airo's email campaign analytics?",
      answer: "With 360Airo, you can track key metrics such as open rate, reply rate, click rate, bounce rate, spam complaints, and conversion activity. You can also monitor performance by campaign, sender, or sequence. This level of visibility helps teams refine messaging, improve targeting, and optimize sending strategies for better engagement and ROI."
    },
    {
      question: "How does real-time email performance tracking improve my campaigns?",
      answer: "Real-time tracking allows you to identify issues or opportunities as they happen. You can quickly adjust subject lines, pause underperforming sequences, or double down on high performing campaigns. This agility helps prevent deliverability problems, improve response rates, and ensure outreach efforts stay aligned with audience behavior."
    },
    {
      question: "How does 360Airo turn email marketing data into actionable insights?",
      answer: "360Airo analyzes campaign data and highlights trends, patterns, and performance gaps. Instead of raw numbers, it provides clear insights on what content, timing, and audience segments perform best. These insights help teams make smarter decisions, optimize future campaigns, and continuously improve outreach results."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
        >
          Get answers to common questions about email campaign analytics with 360Airo
        </motion.p>
      </motion.div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl border-2 border-gray-800 overflow-hidden"
          >
            <button
              className="w-full text-left p-4 sm:p-6 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                  style={{ background: '#8B5CF6' }}
                >
                  {openFaq === index ? (
                    <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  ) : (
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  )}
                </motion.div>
              </div>
            </button>
            
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-white/80 text-sm sm:text-base leading-relaxed border-t border-gray-800 pt-4 sm:pt-6"
                    >
                      {faq.answer}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 sm:mt-12 text-center"
      >
        <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-6 sm:mb-8">
          Still have questions? Our team is here to help you succeed with email campaign analytics.
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group"
            style={{ background: '#8B5CF6' }}
            onClick={() => window.open('https://app.360airo.com/', '_blank')}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute inset-0 bg-white/20 rounded-xl"
            />
            <span className="relative z-10 flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

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
        <h3 className="text-base sm:text-lg font-bold text-white mb-1">Analytics Dashboard</h3>
        <p className="text-white/60 text-xs sm:text-sm">Real-time performance insights</p>
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
              <h4 className="text-xs sm:text-sm font-semibold text-white">Performance Trends</h4>
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
    icon: BarChart3,
    title: 'Precision Data',
    description: 'Every interaction is logged, analyzed, and visualized with complete accuracy.',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    stat: '99.9% Accurate'
  },
  {
    icon: Brain,
    title: 'Actionable Insights',
    description: 'Move from awareness to improvement with one-click, AI-backed recommendations.',
    color: 'from-[#7C3AED] to-[#A855F7]',
    stat: 'AI-backed'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share results instantly across marketing and sales teams to keep everyone aligned.',
    color: 'from-[#A855F7] to-[#C084FC]',
    stat: 'Instant Sharing'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'Use insights to fine-tune your next outreach campaign automatically.',
    color: 'from-[#C084FC] to-[#8B5CF6]',
    stat: 'Auto-Optimize'
  },
];

const insights = [
  {
    icon: Eye,
    title: 'Track Engagement',
    description: 'Track open and click rates to gauge engagement',
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
    title: 'Visual Trend Graphs',
    description: 'Track success at a glance with visual trend graphs'
  },
  {
    icon: PieChart,
    title: 'Real-time Engagement Charts',
    description: 'Monitor audience interaction with real-time engagement charts'
  },
  {
    icon: Activity,
    title: 'Deliverability Insights',
    description: 'Get comprehensive deliverability insights for better inbox placement'
  },
  {
    icon: Globe,
    title: 'Complete Campaign Tracking',
    description: 'Complete email campaign tracking across all campaigns'
  }
];

export default function ReportsAnalyticsPage() {
  return (
    <>
      <Head>
        <title>Email Campaign Analytics Dashboard - Turn Every Email Into Insight | 360Airo</title>
        <meta 
          name="description" 
          content="Measure what matters with 360Airo's Email campaign analytics dashboard. Transform campaign data into actionable insights and improve email deliverability." 
        />
        <meta 
          name="keywords" 
          content="email campaign analytics, campaign analytics dashboard, email deliverability, campaign performance, outreach analytics, cold email analytics" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/report-analytics" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Email Campaign Analytics Dashboard - Turn Every Email Into Insight" />
        <meta property="og:description" content="Measure what matters with 360Airo's Email campaign analytics dashboard. Transform campaign data into actionable insights and improve email deliverability." />
        <meta property="og:url" content="https://360airo.com/features/report-analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-reports-analytics.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Campaign Analytics Dashboard - Turn Every Email Into Insight | 360Airo" />
        <meta name="twitter:description" content="Measure what matters with 360Airo's Email campaign analytics dashboard. Transform campaign data into actionable insights and improve email deliverability." />
        <meta name="twitter:image" content="https://360airo.com/twitter-reports-analytics.jpg" />
        
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
              "name": "360Airo Email Campaign Analytics Dashboard",
              "description": "Measure what matters with 360Airo's Email campaign analytics dashboard. Transform campaign data into actionable insights and improve email deliverability.",
              "url": "https://360airo.com/features/report-analytics",
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
                "Email campaign analytics dashboard",
                "Campaign performance reporting",
                "Email deliverability insights",
                "Real-time engagement tracking",
                "Cold email analytics"
              ]
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/report-analytics">360Airo Email Campaign Analytics</a>
      </div>

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
              {/* LEFT CONTENT */}
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
                        <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-[#A855F7]" />
                      </motion.div>
                      <span>Email Campaign Analytics</span>
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
                      Email Campaign Analytics
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent"
                    >
                      Turn Every Email Into Insight
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
                      Measure What Matters.
                    </motion.span>{' '}
                    Improve What Works.
                  </h2>
                  <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                    When it comes to outreach, guessing is not a strategy.
                    360Airo's Email campaign analytics dashboard transforms your campaign data into clear, actionable insights — helping you optimize performance, improve email deliverability, and make smarter decisions with every send.
                    For increased inbox reach, pair it with our Email Warmup feature.
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
                      <span>Explore Email Campaign Analytics</span>
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

        {/* UNDERSTAND THE STORY BEHIND EVERY SEND SECTION */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Understand Every Send</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Understand the Story Behind Every Send
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Your email campaigns are talking — are you listening?
                360Airo's advanced Email campaign reporting gives you a complete view of your outreach performance, helping you uncover what resonates with your audience and what needs refinement.
                All insights are structured into a clear Email campaign performance report that guides better decision-making.
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

        {/* REAL-TIME INSIGHTS, SMARTER OUTREACH SECTION */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Real-time Analytics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Real-Time Insights, <span className="text-[#8B5CF6]">Smarter Outreach</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                With 360Airo's live email analytics tool, every metric updates instantly — giving you the visibility to react when it matters most.
                Spot deliverability issues before they slow your campaign, analyze cold email analytics, and continuously improve using data-driven decisions.
                Scale your multi-platform outreach even further with LinkedIn Automation and AI Automation.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* YOUR DATA, VISUALIZED BEAUTIFULLY SECTION */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Beautiful Data Visualization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Your Data, <span className="text-[#8B5CF6]">Visualized Beautifully</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                No spreadsheets. No confusion. Just clarity.
                360Airo's performance visualization dashboard presents your data through clean graphs and trends — letting you focus on strategy, not sorting numbers.
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

            {/* Additional text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Track success at a glance with visual trend graphs, real-time engagement charts, deliverability insights, and complete email campaign tracking across all campaigns.
                All powered by a sleek, intuitive Email marketing analytics tool built for speed and clarity.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* WHY 360AIRO EMAIL CAMPAIGN ANALYTICS SECTION */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Why 360Airo Email Campaign Analytics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                From Data to <span className="text-[#8B5CF6]">Decisions</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Numbers alone don't drive growth — clarity does.
                With 360Airo's campaign analytics and engagement reports, you don't just track performance; you understand the why behind it.
                Test new strategies, refine your messaging, and scale winning campaigns with confidence.
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

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <div className="max-w-6xl mx-auto">
            <FAQSection />
          </div>
        </section>

        {/* START MEASURING WHAT MATTERS CTA SECTION */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs sm:text-sm tracking-wider uppercase">Start Measuring What Matters</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Stop guessing and start growing
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-6 sm:mb-8" style={{ maxWidth: '150px sm:200px' }} />
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                360Airo's Email campaign analytics gives you everything you need to see, learn, and act — all in one intuitive platform.
                ✨ Transform data into decisions with intelligent analytics
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
                    Explore Email Campaign Analytics
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

        <Footer />
      </div>
    </>
  );
}
