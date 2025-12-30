'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import {
  Zap,
  ArrowRight,
  MessageCircle,
  Mail,
  Linkedin,
  Share2,
  BarChart3,
  Target,
  Users,
  Workflow,
  Cpu,
  ChartLine,
  Clock,
  CheckCircle2,
  Sparkles,
  Globe,
  MessageSquare,
  Bot,
  Eye,
  TrendingUp,
  Shield,
  Database,
  Network,
  Radio,
  Layers,
  Brain
} from 'lucide-react';

const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// Multi-Channel Network Visualization
const ChannelNetwork = () => {
  const [activeChannel, setActiveChannel] = useState(0);
  
  const channels = [
    { icon: Mail, name: "Email", color: COLORS.purpleLight, position: { x: 50, y: 30 } },
    { icon: Linkedin, name: "LinkedIn", color: COLORS.purpleDark, position: { x: 20, y: 70 } },
    { icon: MessageSquare, name: "Social", color: COLORS.purpleLight, position: { x: 80, y: 70 } },
    { icon: MessageCircle, name: "Messaging", color: COLORS.purpleDark, position: { x: 50, y: 90 } }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChannel(prev => (prev + 1) % channels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 max-w-4xl mx-auto">
      <svg className="absolute inset-0 w-full h-full">
        {/* Animated Connections */}
        {channels.map((channel, i) =>
          channels.slice(i + 1).map((target, j) => (
            <motion.path
              key={`${i}-${j}`}
              d={`M ${channel.position.x}% ${channel.position.y}% L ${target.position.x}% ${target.position.y}%`}
              stroke={COLORS.purpleLight}
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: activeChannel === i || activeChannel === j + i + 1 ? [0, 1, 0] : 0,
                opacity: activeChannel === i || activeChannel === j + i + 1 ? [0, 0.4, 0] : 0
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: j * 0.2
              }}
            />
          ))
        )}
      </svg>

      {/* Channel Nodes */}
      {channels.map((channel, index) => (
        <motion.div
          key={channel.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            left: `${channel.position.x}%`,
            top: `${channel.position.y}%`,
          }}
          animate={{
            scale: activeChannel === index ? [1, 1.2, 1] : 1,
          }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.4 }}
          onClick={() => setActiveChannel(index)}
        >
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border-2 relative"
            style={{
              background: channel.color,
              borderColor: channel.color,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <channel.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
            
            {/* Active Pulse */}
            {activeChannel === index && (
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl border-2"
                style={{ borderColor: channel.color }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            )}
          </motion.div>

          {/* Channel Label */}
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-3 lg:mt-4 text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="text-white font-bold text-xs sm:text-sm bg-black/50 px-2 py-1 rounded-full">
              {channel.name}
            </p>
          </motion.div>
        </motion.div>
      ))}

      {/* Central Hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY }
        }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <Network className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

// Unified Campaign Management
const CampaignManagement = () => {
  const features = [
    {
      icon: Workflow,
      title: "Build Multi-Channel Campaigns",
      description: "Run campaigns across email, LinkedIn, and social touchpoints simultaneously",
      color: COLORS.purpleLight
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Schedule messages, follow-ups, and reminders automatically",
      color: COLORS.purpleDark
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Monitor engagement metrics across every channel in real time",
      color: COLORS.purpleLight
    },
    {
      icon: Shield,
      title: "Consistent Messaging",
      description: "Ensure consistent messaging for your brand across all platforms",
      color: COLORS.purpleDark
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ 
            x: index % 2 === 0 ? -5 : 5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.08
          }}
          className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3 sm:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1"
              style={{ background: feature.color }}
            >
              <feature.icon className="h-5 w-5 sm:h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// AI Personalization Features
const AIPersonalization = () => {
  const aiFeatures = [
    {
      icon: Bot,
      title: "Tailored Email Content",
      description: "Tailor email content and subject lines for higher open and reply rates",
      color: COLORS.purpleLight
    },
    {
      icon: Users,
      title: "Adaptive LinkedIn Messages",
      description: "Adapt LinkedIn messages based on profile data and past interactions",
      color: COLORS.purpleDark
    },
    {
      icon: Target,
      title: "Smart Next Actions",
      description: "Suggest next-best actions for multi-step campaigns",
      color: COLORS.purpleLight
    },
    {
      icon: Zap,
      title: "Optimized Timing",
      description: "Optimize send times and sequences automatically to maximize deliverability and engagement",
      color: COLORS.purpleDark
    }
  ];

  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {aiFeatures.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setHoveredFeature(index)}
          onHoverEnd={() => setHoveredFeature(null)}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.08,
            type: "spring"
          }}
          className="relative group"
        >
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg"
              style={{ background: feature.color }}
            >
              <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
            </motion.div>
            
            <h4 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{feature.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

            {/* AI Brain Animation */}
            {hoveredFeature === index && (
              <motion.div
                className="absolute top-2 right-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Analytics Dashboard Preview
const AnalyticsPreview = () => {
  const metrics = [
    { name: "Open Rates", value: "94%", change: "+12%", color: COLORS.purpleLight },
    { name: "Reply Rates", value: "45%", change: "+8%", color: COLORS.purpleDark },
    { name: "Conversion", value: "23%", change: "+15%", color: COLORS.purpleLight },
    { name: "Engagement", value: "78%", change: "+20%", color: COLORS.purpleDark }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-gray-800 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${COLORS.purpleLight}, transparent)`,
              top: `${i * 12}%`,
            }}
            animate={{
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-gray-800"
            >
              <motion.div
                className="text-lg sm:text-xl lg:text-2xl font-black mb-1 sm:mb-2"
                style={{ color: metric.color }}
                animate={{
                  textShadow: [
                    `0 0 8px ${metric.color}`,
                    `0 0 15px ${metric.color}`,
                    `0 0 8px ${metric.color}`,
                  ],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                {metric.value}
              </motion.div>
              <div className="text-white font-semibold text-xs sm:text-sm mb-1">{metric.name}</div>
              <div className="text-green-400 text-xs">{metric.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-white font-bold text-base sm:text-lg">Cross-Channel Insights</h4>
            {[
              "Open rates, clicks, replies, and response tracking for all channels",
              "Engagement scoring to prioritize high-value prospects",
              "Cross-channel performance comparisons to identify the most effective workflows",
              "AI-backed recommendations for improving email deliverability, messaging, and follow-ups"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center space-x-2 sm:space-x-3 text-white"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700"
          >
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Channel Performance</h4>
            {[
              { channel: "Email", performance: "92%", color: COLORS.purpleLight },
              { channel: "LinkedIn", performance: "85%", color: COLORS.purpleDark },
              { channel: "Social", performance: "78%", color: COLORS.purpleLight },
              { channel: "Messaging", performance: "88%", color: COLORS.purpleDark }
            ].map((item, index) => (
              <motion.div
                key={item.channel}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center justify-between mb-2 sm:mb-3"
              >
                <span className="text-white text-xs sm:text-sm">{item.channel}</span>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: item.performance }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                    />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-bold">{item.performance}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Platform Benefits
const PlatformBenefits = () => {
  const benefits = [
    "All-in-one dashboard for email, LinkedIn, and other outreach",
    "AI-driven personalization for every touchpoint",
    "Automated multi-step campaigns that save time",
    "Real-time analytics to measure engagement and conversions",
    "Seamless integrations with CRMs, domains, and other tools"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.06,
              type: "spring"
            }}
            className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-800 hover:border-purple-500 transition-all duration-300 text-center group"
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
              style={{ background: COLORS.purpleLight }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle2 className="h-5 w-5 sm:h-6 w-6 text-white" />
            </motion.div>
            <p className="text-white font-semibold text-sm leading-relaxed">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function MultiChannelPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/features/multi-channel-platform" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Channel Waves */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                borderColor: i % 2 === 0 ? COLORS.purpleLight : COLORS.purpleDark,
                width: `${80 + i * 80}px`,
                height: `${80 + i * 80}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            scale: headerScale,
            opacity: headerOpacity
          }}
        >
          <div className="text-center max-w-4xl mx-auto py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block"
              >
                <div 
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl border-2 backdrop-blur-sm"
                  style={{ 
                    background: COLORS.purpleLight,
                    borderColor: COLORS.purpleLight
                  }}
                >
                  <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center">
                    <Layers className="h-3 w-3 sm:h-4 w-4 mr-2" />
                    Multi-Channel Platform
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight"
              >
                <span className="block">Engage Smarter</span>
                <motion.span
                  style={{ color: COLORS.purpleLight }}
                  animate={{
                    textShadow: [
                      `0 0 15px ${COLORS.purpleLight}`,
                      `0 0 30px ${COLORS.purpleLight}`,
                      `0 0 15px ${COLORS.purpleLight}`,
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="block"
                >
                  Across Every
                </motion.span>
                <span className="block">Channel</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed"
              >
                Reach Your Audience Where They Are
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="space-y-3 sm:space-y-4 max-w-2xl mx-auto"
              >
                <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                  In today's fast-paced world, relying on a single channel isn't enough. 360Airo's multi-channel platform enables you to manage email, LinkedIn, and other outreach channels from a single, unified dashboard.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                  Engage prospects consistently, nurture leads across multiple touchpoints, and maximize your conversions — all without switching tools.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
                  Whether it's cold email sequences, LinkedIn connection campaigns, or follow-up automation, our platform ensures every message is timely, relevant, and personalized.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="pt-4 sm:pt-6 lg:pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button 
                    size="lg" 
                    className="px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group w-full sm:w-auto"
                    style={{ background: COLORS.purpleLight }}
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
                      <Globe className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6" />
                      Experience Multi-Channel Outreach
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Channel Network Visualization */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              Unified Channel Network
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Connect and manage all your outreach channels through a single, intelligent platform
            </motion.p>
          </motion.div>

          <ChannelNetwork />
        </div>
      </section>

      {/* Campaign Management Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6"
              style={{ color: COLORS.purpleLight }}
            >
              Unified Campaign Management
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Stop juggling different tools and spreadsheets. 360Airo centralizes your multi-channel campaigns, giving you full visibility and control.
            </motion.p>
          </motion.div>

          <CampaignManagement />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
              With everything in one place, your team can focus on strategy and engagement instead of manual coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Personalization Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              AI-Powered Cross-Channel Personalization
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              360Airo's AI engine personalizes each interaction based on recipient behavior and engagement patterns.
            </motion.p>
          </motion.div>

          <AIPersonalization />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
              This ensures every touchpoint feels human, relevant, and timely — even at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6"
              style={{ color: COLORS.purpleDark }}
            >
              Track, Analyze, and Optimize Every Channel
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Gain actionable insights across your entire outreach strategy. 360Airo's multi-channel analytics provide comprehensive performance tracking.
            </motion.p>
          </motion.div>

          <AnalyticsPreview />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
              Continuous optimization helps you get the most out of every campaign, regardless of the channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              Why 360Airo's Multi-Channel Platform Stands Out
            </motion.h2>
          </motion.div>

          <PlatformBenefits />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
              With 360Airo, your outreach is no longer fragmented. It's coordinated, intelligent, and effective — across every channel your audience engages with.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-8 sm:pt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="lg" 
                className="px-6 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group w-full sm:w-auto"
                style={{ background: COLORS.purpleLight }}
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute inset-0 bg-white/30 rounded-xl"
                />
                <span className="relative z-10 flex items-center justify-center">
                  <Radio className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6" />
                  Experience Multi-Channel Outreach
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section - Multichannel Campaigns */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6"
              style={{ color: COLORS.purpleLight }}
            >
              Multichannel Campaigns That Build Real Connections
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Reach Your Audience Where They Already Are
            </motion.p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Intro Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
                  style={{ background: COLORS.purpleLight }}>
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Modern buyers interact across multiple platforms</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>Some prefer emails, others engage on LinkedIn, and many need several meaningful touchpoints before they trust a brand. Relying on a single channel often leads to missed conversations.</p>
                <p>360Airo helps you run structured multichannel campaigns that feel consistent, relevant, and human. From one unified dashboard, you can manage outreach across email, LinkedIn, and other channels while maintaining full context.</p>
                <p>Whether you are starting cold outreach, nurturing warm leads, or following up with interested prospects, multichannel campaigns help you stay visible, trustworthy, and aligned at every stage.</p>
              </div>
            </motion.div>

            {/* Unified Management Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
                  style={{ background: COLORS.purpleDark }}>
                  <Workflow className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Unified Management for Multichannel Campaigns</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Managing outreach should feel organized and predictable. 360Airo centralizes all your multichannel campaigns into one dashboard, giving your team clarity and control.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Email & LinkedIn Integration</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Run email and LinkedIn outreach as one connected multi channel marketing campaign</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Automated Scheduling</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Schedule messages, follow-ups, and reminders automatically</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Unified View</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">View conversation history across channels in one place</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Brand Consistency</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Maintain a consistent brand voice at every touchpoint</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed pt-2 sm:pt-4">
                  This allows your team to focus on building relationships instead of managing tools.
                </p>
              </div>
            </motion.div>

            {/* Scalable Platform Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
                  style={{ background: COLORS.purpleLight }}>
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">A Scalable Multi Channel Platform Built for Growing Teams</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>360Airo is designed for teams that need structure without complexity. As a reliable multi channel platform, it supports outreach across email, LinkedIn, and social touchpoints while preventing overlap and missed follow-ups.</p>
                <p>Using one of the most intuitive multi channel marketing platforms available, your multichannel marketing efforts stay focused, measurable, and scalable.</p>
              </div>
            </motion.div>

            {/* AI Personalization Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
                  style={{ background: COLORS.purpleDark }}>
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">AI Personalization That Feels Natural</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Personalization works best when it feels thoughtful. 360Airo uses intelligence to support more effective multichannel campaigns without making communication feel automated.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleDark }}>
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Email Optimization</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Improve email content and subject lines for better open and reply rates</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleDark }}>
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">LinkedIn Personalization</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Personalize LinkedIn messages using real profile insights</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleDark }}>
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Smart Guidance</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Guide next steps based on engagement behavior</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleDark }}>
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Automated Optimization</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Optimize send times and sequences automatically</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed pt-2 sm:pt-4">
                  With <a href="/features/ai-email-automation" className="text-[#b45ecf] hover:text-white transition-colors">AI email automation</a> working quietly in the background, your outreach remains consistent and authentic.
                </p>
              </div>
            </motion.div>

            {/* Performance Tracking Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
                  style={{ background: COLORS.purpleLight }}>
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Track Performance and Improve with Confidence</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Understanding performance builds trust and clarity. 360Airo provides a complete view of how your multichannel campaigns perform across <a href="/features/email-campaigns" className="text-[#b45ecf] hover:text-white transition-colors">AI Email Campaigns</a> and LinkedIn outreach.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Unified Tracking</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Track opens, clicks, replies, and responses in one view</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Engagement Scoring</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Identify high-intent prospects using engagement scoring</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <ChartLine className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Performance Comparison</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Compare cross-channel performance to refine workflows</p>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">AI Recommendations</h4>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm">Receive AI-driven suggestions to improve messaging and timing</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed pt-2 sm:pt-4">
                  Every multi channel marketing campaign improves with each iteration.
                </p>
              </div>
            </motion.div>

            {/* Why Choose Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-800"
            >
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Why Teams Choose 360Airo</h3>
                <p className="text-white/70 text-sm sm:text-base lg:text-lg">With 360Airo, multichannel campaigns become structured conversations that build trust and drive results.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "One dashboard for all outreach channels",
                  "Consistent, personalized communication at scale",
                  "Automated workflows that reduce manual effort",
                  "Clear analytics that support smarter decisions",
                  "Seamless integration with CRMs, domains, and tools"
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                        style={{ background: COLORS.purpleLight }}>
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base">{benefit}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                  Experience Multichannel Campaigns
                </p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group"
                    style={{ background: COLORS.purpleLight }}
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
                      Start Building Connections
                      <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
