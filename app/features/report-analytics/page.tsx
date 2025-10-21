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
  Sparkles
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
    <div className="w-full max-w-2xl mx-auto">
      {/* Clean Header */}
      <div className="text-center mb-6">
        <motion.div
          animate={{ rotate: isAnimating ? [0, 360] : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-lg"
        >
          <BarChart3 className="h-6 w-6 text-white" />
        </motion.div>
        <h3 className="text-lg font-bold text-white mb-1">Analytics Dashboard</h3>
        <p className="text-white/60 text-sm">Real-time performance insights</p>
      </div>

      {/* Main Dashboard */}
      <GlowCard className="rounded-2xl">
        <div className="bg-gradient-to-br from-white/8 via-white/4 to-white/2 rounded-2xl border border-white/15 p-6 shadow-xl backdrop-blur-lg">
          
          {/* Compact Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedMetric(metric.id)}
                className={`cursor-pointer p-3 rounded-xl border transition-all duration-300 ${
                  selectedMetric === metric.id
                    ? 'bg-white/10 border-[#8B5CF6]/40 shadow-md'
                    : 'bg-white/3 border-white/8 hover:border-[#8B5CF6]/20'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-6 h-6 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                    <metric.icon className="h-3 w-3 text-white" />
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wide">{metric.label}</div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-lg font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-emerald-400 font-medium">{metric.change}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clean Chart Visualization */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-white">Performance Trends</h4>
              <button
                onClick={triggerAnimation}
                className="text-xs text-[#A855F7] hover:text-white transition-colors"
              >
                Refresh
              </button>
            </div>
            
            <div className="bg-white/3 rounded-xl p-4 border border-white/8">
              <div className="h-32 flex items-end justify-between space-x-2">
                {performanceData.map((data, index) => (
                  <div key={data.label} className="flex-1 flex flex-col items-center">
                    <div className="w-full mb-2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.value}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="w-full bg-gradient-to-t from-[#8B5CF6] to-[#A855F7] rounded-t-lg"
                        style={{ minHeight: '4px' }}
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
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/60">Live</span>
              </div>
              <span className="text-white/50">Updated now</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-all">
                <Filter className="h-3 w-3" />
              </button>
              <button className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-all">
                <Download className="h-3 w-3" />
              </button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-xs px-3 py-1 h-6"
              >
                View All
              </Button>
            </div>
          </div>
        </div>
      </GlowCard>

      {/* Additional Stats Cards */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gradient-to-r from-white/5 to-white/2 rounded-xl p-4 border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Deliverability</div>
              <div className="text-xs text-white/60">98.2% Success Rate</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="bg-gradient-to-r from-white/5 to-white/2 rounded-xl p-4 border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Active Campaigns</div>
              <div className="text-xs text-white/60">24 Running</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Motion variants (same as before)
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
    icon: BarChart3,
    title: 'Precision Data',
    description: 'Every interaction is logged, analyzed, and visualized with pixel-perfect accuracy.',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    stat: '99.9% Accurate'
  },
  {
    icon: Brain,
    title: 'Actionable Insights',
    description: 'Move from awareness to improvement with AI-powered recommendations.',
    color: 'from-[#7C3AED] to-[#A855F7]',
    stat: 'Real-time AI'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share results easily across marketing and sales teams with one click.',
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
    description: 'Monitor open and click rates to gauge audience interest',
    metric: '42.8%',
    trend: '+8.2%'
  },
  {
    icon: Mail,
    title: 'Reply Analysis',
    description: 'Measure connection quality through detailed reply analytics',
    metric: '9.3%',
    trend: '+22.1%'
  },
  {
    icon: Target,
    title: 'Template Performance',
    description: 'Identify your top-performing templates for future campaigns',
    metric: '156',
    trend: '+45 new'
  },
  {
    icon: CheckCircle2,
    title: 'Deliverability Reports',
    description: 'Keep your messages inbox-ready with comprehensive delivery insights',
    metric: '98.2%',
    trend: '+1.8%'
  },
];

const visualizations = [
  {
    icon: LineChart,
    title: 'Performance Trends',
    description: 'Track success over time with beautiful line graphs and trend analysis'
  },
  {
    icon: PieChart,
    title: 'Campaign Breakdown',
    description: 'Visualize campaign distribution and performance by category'
  },
  {
    icon: Activity,
    title: 'Engagement Heatmaps',
    description: 'See when your audience is most active and engaged'
  },
  {
    icon: Globe,
    title: 'Geographic Insights',
    description: 'Understand performance across different regions and time zones'
  }
];

export default function ReportsAnalyticsPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
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
                        scale: [1, 1.2, 1] 
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      className="mr-3"
                    >
                      <BarChart3 className="h-5 w-5 text-[#A855F7]" />
                    </motion.div>
                    <span>Reports & Analytics</span>
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
                    Turn Every Email
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent"
                  >
                    Into Insight
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
                  <motion.span
                    animate={{ color: ['#ffffff', '#A855F7', '#ffffff'] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="font-semibold"
                  >
                    Measure What Matters.
                  </motion.span>{' '}
                  Improve What Works.
                </h2>
                <p className="text-lg text-white/75 leading-relaxed">
                  When it comes to outreach, guessing is not a strategy. 360Airo's analytics dashboard transforms campaign data into clear, actionable insights — helping you optimize performance and make smarter decisions with every send.
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
                    <span>Explore Reports & Analytics</span>
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT - CLEAN ANALYTICS DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="relative flex justify-center lg:justify-end"
            >
              <AnalyticsDashboard />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* INSIGHTS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Understand Every Send</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Campaigns Are <span className="text-[#8B5CF6]">Talking</span> — Are You Listening?
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              360Airo's analytics dashboard provides a complete view of your outreach performance metrics, helping you uncover what resonates with your audience and what needs refinement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-left transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <insight.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#A855F7]">{insight.title}</h3>
                      <p className="text-white/80 leading-relaxed mb-4">{insight.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-[#A855F7]">{insight.metric}</div>
                        <div className="text-sm text-emerald-400 font-medium">{insight.trend}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* VISUALIZATIONS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Beautiful Data Visualization</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Data, <span className="text-[#8B5CF6]">Visualized Beautifully</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              No more spreadsheets or confusing exports. Our dashboard presents your data through clear graphs and trends so you can focus on strategy, not sorting numbers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {visualizations.map((viz, index) => (
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
                    <viz.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#A855F7]">{viz.title}</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                  <p className="text-white/80 leading-relaxed">{viz.description}</p>
                </motion.div>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Why 360Airo Reports & Analytics</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Data to <span className="text-[#8B5CF6]">Decisions</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Numbers alone don't drive success — clarity does. With 360Airo's analytics, you don't just track performance; you understand the why behind it.
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
                  <p className="text-white/80 leading-relaxed mb-4">{feature.description}</p>
                  <div className="text-sm text-[#8B5CF6] font-semibold">{feature.stat}</div>
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
              <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Start Measuring What Matters</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Stop guessing and start growing
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent mx-auto mb-8" style={{ maxWidth: '200px' }} />
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              360Airo's Reports & Analytics feature gives you everything you need to see, learn, and act — all in one intuitive platform.
            </p>
            <div className="pt-4">
              <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-2xl inline-block">
                <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20">
                  Explore Reports & Analytics
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
            <p className="text-white/70">✨ Transform data into decisions with intelligent analytics</p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
