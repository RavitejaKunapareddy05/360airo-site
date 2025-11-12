'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';

import {
  Mail,
  Zap,
  Brain,
  Clock,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Eye,
  MousePointer,
  MessageCircle,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';

// Color constants
const COLORS = {
  primary: '#b45ecf',
  darkPurple: '#480056',
  deepPurple: '#19001d',
  white: '#ffffff',
  black: '#000000'
};

// Animated Email Flow Visualization - Mobile Optimized
const EmailFlowVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    { icon: Mail, title: "Initial Send", delay: "0 days", status: "sent" },
    { icon: Eye, title: "Opened", delay: "2 days", status: "opened" },
    { icon: MousePointer, title: "Clicked", delay: "4 days", status: "clicked" },
    { icon: MessageCircle, title: "Replied", delay: "6 days", status: "replied" },
    { icon: Users, title: "Converted", delay: "8 days", status: "converted" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, isMobile ? 2500 : 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6 lg:mb-8 overflow-x-auto pb-4 -mx-4 px-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="flex flex-col items-center text-center relative z-10 min-w-[60px] lg:min-w-0"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div
              className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 lg:mb-3 ${
                activeStep >= index 
                  ? 'bg-[#b45ecf] shadow-lg shadow-[#b45ecf]/30' 
                  : 'bg-black border border-[#b45ecf]/30'
              }`}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                scale: activeStep === index ? [1, 1.1, 1] : 1,
                boxShadow: activeStep === index ? 
                  `0 0 15px ${COLORS.primary}80` : 'none'
              }}
              transition={{ duration: 0.4 }}
            >
              <step.icon className={`h-4 w-4 lg:h-6 lg:w-6 ${
                activeStep >= index ? 'text-white' : 'text-[#b45ecf]'
              }`} />
            </motion.div>
            <div className={`font-semibold text-sm lg:text-base ${
              activeStep >= index ? 'text-white' : 'text-white/60'
            }`}>
              {step.title}
            </div>
            <div className="text-white/40 text-xs lg:text-sm">{step.delay}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Line */}
      <div className="absolute top-6 lg:top-8 left-4 lg:left-8 right-4 lg:right-8 h-1 bg-white/10 rounded-full">
        <motion.div
          className="h-full bg-[#b45ecf] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
        />
      </div>
    </div>
  );
};

// Sequence Builder Demo - Mobile Optimized
const SequenceBuilderDemo = () => {
  const [activeSequence, setActiveSequence] = useState(0);
  
  const sequences = [
    {
      name: "Cold Outreach",
      emails: [
        { subject: "Introduction & Value Prop", delay: "Day 1", opens: "64%", clicks: "23%" },
        { subject: "Case Study & Social Proof", delay: "Day 3", opens: "58%", clicks: "18%" },
        { subject: "Final Value Reminder", delay: "Day 7", opens: "52%", clicks: "12%" }
      ],
      metrics: { response: "8.5%", conversion: "3.2%" }
    },
    {
      name: "Warm Lead Nurture",
      emails: [
        { subject: "Personalized Follow-up", delay: "Day 1", opens: "72%", clicks: "31%" },
        { subject: "Additional Resources", delay: "Day 2", opens: "68%", clicks: "25%" },
        { subject: "Call to Action", delay: "Day 4", opens: "65%", clicks: "19%" }
      ],
      metrics: { response: "15.2%", conversion: "7.8%" }
    }
  ];

  return (
    <div className="bg-black rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 p-4 lg:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h3 className="text-lg lg:text-xl font-bold text-white">Sequence Builder</h3>
        <div className="flex space-x-1.5 lg:space-x-2">
          {sequences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSequence(index)}
              className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                activeSequence === index ? 'bg-[#b45ecf] scale-110' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 lg:space-y-4">
        {sequences[activeSequence].emails.map((email, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true, margin: '-30px' }}
            className="flex items-center justify-between p-3 lg:p-4 bg-black rounded-lg lg:rounded-xl border border-[#b45ecf]/20 hover:border-[#b45ecf]/40 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#b45ecf]/20 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-[#b45ecf]" />
              </div>
              <div>
                <div className="text-white font-medium text-sm lg:text-base">{email.subject}</div>
                <div className="text-white/60 text-xs lg:text-sm">{email.delay}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-sm">Opens: {email.opens}</div>
              <div className="text-white/60 text-xs">Clicks: {email.clicks}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-[#b45ecf]/20">
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-[#b45ecf]">{sequences[activeSequence].metrics.response}</div>
          <div className="text-white/60 text-xs lg:text-sm">Response Rate</div>
        </div>
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-[#b45ecf]">{sequences[activeSequence].metrics.conversion}</div>
          <div className="text-white/60 text-xs lg:text-sm">Conversion Rate</div>
        </div>
      </div>
    </div>
  );
};

// Feature Card with Mobile Optimized Hover Effects
const FeatureCard = ({ icon: Icon, title, description, features, delay, note }: any) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={!isMobile ? { y: -3, scale: 1.01 } : {}}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      className="bg-black rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 p-4 lg:p-6 hover:border-[#b45ecf]/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated Background Gradient on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#b45ecf] rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4">
          <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
        </div>
        
        <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3 leading-tight">{title}</h3>
        <p className="text-white/70 mb-3 lg:mb-4 leading-relaxed text-sm lg:text-base">{description}</p>
        
        <div className="space-y-1.5 lg:space-y-2">
          {features.map((feature: string, index: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.06 }}
              viewport={{ once: true, margin: '-30px' }}
              className="flex items-center space-x-2 text-white/80 text-xs lg:text-sm"
            >
              <div className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            viewport={{ once: true, margin: '-30px' }}
            className="text-[#b45ecf] text-xs lg:text-sm mt-3 lg:mt-4 italic"
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

// AI Personalization Demo - Mobile Optimized
const AIPersonalizationDemo = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);
  
  const templates = [
    {
      name: "Cold Introduction",
      personalization: ["Company Name", "Industry", "Recent Achievement"],
      aiScore: 92
    },
    {
      name: "Follow-up Sequence", 
      personalization: ["Previous Interaction", "Timing", "Specific Interest"],
      aiScore: 88
    },
    {
      name: "Re-engagement",
      personalization: ["Last Contact Date", "Past Interests", "New Updates"],
      aiScore: 85
    }
  ];

  return (
    <div className="bg-black rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 p-4 lg:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h3 className="text-lg lg:text-xl font-bold text-white">AI Personalization Engine</h3>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center space-x-1.5 lg:space-x-2 text-[#b45ecf]"
        >
          <Brain className="h-4 w-4 lg:h-5 lg:w-5" />
          <span className="text-xs lg:text-sm font-medium">AI Active</span>
        </motion.div>
      </div>

      <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.name}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true, margin: '-30px' }}
            className={`p-3 lg:p-4 rounded-lg lg:rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              activeTemplate === index 
                ? 'border-[#b45ecf] bg-[#b45ecf]/10' 
                : 'border-[#b45ecf]/20 bg-black hover:border-[#b45ecf]/40'
            }`}
            onClick={() => setActiveTemplate(index)}
          >
            <div className="flex items-center justify-between mb-1.5 lg:mb-2">
              <span className="text-white font-semibold text-sm lg:text-base">{template.name}</span>
              <div className="text-[#b45ecf] text-xs lg:text-sm font-medium">
                {template.aiScore}% AI Score
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              {template.personalization.map((item, i) => (
                <span key={i} className="px-1.5 py-0.5 lg:px-2 lg:py-1 bg-[#b45ecf]/20 rounded text-xs text-[#b45ecf]">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-[#b45ecf] text-xs lg:text-sm">
        AI analyzes engagement patterns to optimize tone and timing
      </div>
    </div>
  );
};

// Analytics Dashboard Component - Mobile Optimized
const AnalyticsDashboard = () => {
  const metrics = [
    { label: "Open Rate", value: "64%", change: "+12%", icon: Eye },
    { label: "Click Rate", value: "23%", change: "+8%", icon: MousePointer },
    { label: "Reply Rate", value: "8.5%", change: "+15%", icon: MessageCircle },
    { label: "Conversion", value: "3.2%", change: "+22%", icon: TrendingUp }
  ];

  return (
    <div className="bg-black rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 p-4 lg:p-6 backdrop-blur-sm">
      <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6">Sequence Performance</h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true, margin: '-30px' }}
            className="text-center p-3 lg:p-4 bg-black rounded-lg lg:rounded-xl border border-[#b45ecf]/20 hover:border-[#b45ecf]/40 transition-all duration-300"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#b45ecf] rounded-lg flex items-center justify-center mx-auto mb-1.5 lg:mb-2">
              <metric.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div className="text-xl lg:text-2xl font-bold text-white">{metric.value}</div>
            <div className="text-[#b45ecf] text-xs lg:text-sm">{metric.change}</div>
            <div className="text-white/60 text-xs lg:text-sm">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="text-center text-[#b45ecf] text-xs lg:text-sm">
        Real-time analytics for data-driven optimization
      </div>
    </div>
  );
};

// Main Component
export default function EmailSequencesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: "Smart Sequencing Built for High Deliverability",
      description: "Every sequence in 360Airo is optimized for email deliverability and sender reputation. The system automatically adjusts send times, personalizes content, and avoids over-sending to protect your domain health and inbox placement.",
      features: [
        "Customize delays and message frequency",
        "Set triggers based on open, click, or reply actions",
        "Pause or skip contacts when they engage",
        "Integrate seamlessly with your email warmup and AI automation tools"
      ],
      note: "This means your outreach stays natural — never spammy — and your responses increase steadily over time."
    },
    {
      icon: Brain,
      title: "Personalization That Scales with AI",
      description: "360Airo's AI-powered sequencing crafts context-aware messages that feel personal even at scale. The system analyzes engagement patterns to tweak tone, optimize send times, and suggest next-best actions — keeping your sequences fresh and performance-driven.",
      features: [
        "AI-powered content optimization",
        "Context-aware message timing",
        "Continuous learning from engagement patterns",
        "Personalized tone adjustment"
      ],
      note: "From cold introductions to re-engagement campaigns, every message learns from the last."
    },
    {
      icon: BarChart3,
      title: "Streamline Campaigns with Full Visibility",
      description: "Stay in control of every touchpoint. 360Airo's dashboard gives you complete visibility into your sequence performance — opens, clicks, replies, and conversions — all in real time.",
      features: [
        "Real-time performance tracking",
        "A/B testing capabilities",
        "Conversion funnel analysis",
        "Automated performance insights"
      ],
      note: "Quickly identify what's working, test variations, and let data guide your next move. No spreadsheets, no confusion — just clear insights that help you scale faster."
    }
  ];

  const benefits = [
    "Automated follow-ups that feel human",
    "Adaptive scheduling based on recipient behavior",
    "Integrated analytics for full campaign visibility",
    "Personalization powered by AI",
    "Better deliverability and engagement rates"
  ];

  return (
    <>
      <Head>
        <title>Email Sequences | 360Airo - Automated Email Outreach That Converts</title>
        <meta 
          name="description" 
          content="360Airo's email sequences automate your outreach with AI-powered personalization. Create multi-touch campaigns that nurture leads and drive conversions automatically." 
        />
        <meta 
          name="keywords" 
          content="email sequences, automated email outreach, email automation, multi-touch campaigns, lead nurturing, 360Airo sequences" 
        />
        
        {/* Canonical URL - This tells search engines this is the original page */}
        <link rel="canonical" href="https://360airo.com/features/email-sequences" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Email Sequences | 360Airo - Automated Email Outreach That Converts" />
        <meta property="og:description" content="360Airo's email sequences automate your outreach with AI-powered personalization. Create multi-touch campaigns that nurture leads and drive conversions automatically." />
        <meta property="og:url" content="https://360airo.com/features/email-sequences" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-email-sequences.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Sequences | 360Airo" />
        <meta name="twitter:description" content="Automate conversations that convert with 360Airo's AI-powered email sequences. Multi-touch campaigns that nurture leads and drive conversions." />
        <meta name="twitter:image" content="https://360airo.com/twitter-email-sequences.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45ecf" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Email Sequences",
              "description": "360Airo's email sequences automate your outreach with AI-powered personalization. Create multi-touch campaigns that nurture leads and drive conversions automatically.",
              "url": "https://360airo.com/features/email-sequences",
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
        <a rel="canonical" href="https://360airo.com/features/email-sequences">360Airo Email Sequences</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* Hero Section - Mobile Optimized with Content First */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
          {/* Animated Background - Mobile Optimized */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Geometric Shapes - Reduced on mobile */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 80 - 40,
                  y: Math.random() * 80 - 40,
                }}
                animate={{
                  opacity: [0, 0.2, 0],
                  scale: [0, 1, 0],
                  x: [
                    Math.random() * 80 - 40,
                    Math.random() * 160 - 80,
                    Math.random() * 80 - 40,
                  ],
                  y: [
                    Math.random() * 80 - 40,
                    Math.random() * 160 - 80,
                    Math.random() * 80 - 40,
                  ],
                }}
                transition={{
                  duration: 15 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              >
                <div className={`w-4 h-4 lg:w-6 lg:h-6 ${
                  i % 3 === 0 ? 'bg-[#b45ecf]/20 rounded-full' :
                  i % 3 === 1 ? 'bg-[#b45ecf]/20' :
                  'bg-[#b45ecf]/20 rounded-lg'
                }`} />
              </motion.div>
            ))}

            {/* Animated Grid - Mobile Optimized */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(180,94,207,0.1) 1px, transparent 1px),
                  linear-gradient(180deg, rgba(180,94,207,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Gradient Spots - Mobile Optimized */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-32 h-32 lg:w-64 lg:h-64 bg-[#b45ecf]/5 rounded-full blur-2xl lg:blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-10 w-36 h-36 lg:w-72 lg:h-72 bg-[#b45ecf]/5 rounded-full blur-2xl lg:blur-3xl"
            />
          </div>

          {/* Main Content Container */}
          <div className="max-w-5xl mx-auto relative z-10">
            {/* MOBILE: Content first, then animations */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* CONTENT COLUMN - Always first on mobile */}
              <div className="space-y-6 lg:space-y-8 order-1">
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 bg-black backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 lg:px-4 py-2 lg:py-3 border border-[#b45ecf]/30"
                >
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#b45ecf] rounded-full flex items-center justify-center">
                    <Mail className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-white" />
                  </div>
                  <span className="text-white/80 font-medium text-xs lg:text-sm">Email Automation</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-3 lg:space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  >
                    <motion.span
                      animate={{ 
                        color: ['#b45ecf', '#ffffff', '#b45ecf'],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                      }}
                    >
                    Email Sequences
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '80px' }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="h-1 bg-[#b45ecf] rounded-full"
                  />
                </div>

                {/* Subheading */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg sm:text-xl lg:text-2xl text-[#b45ecf] font-semibold leading-relaxed"
                >
                  Automate Conversations That Convert
                </motion.h2>

                {/* Description */}
                <div className="space-y-3 lg:space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-base lg:text-lg text-white/80 leading-relaxed"
                  >
                    Turn Outreach into Ongoing Engagement
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-white/70 leading-relaxed text-sm lg:text-base"
                  >
                    Consistency wins deals. With 360Airo's email sequences, you can send the right message at the right time — without ever missing a follow-up.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                    className="text-white/60 leading-relaxed text-sm lg:text-base"
                  >
                    Build automated, personalized email flows that nurture leads, boost responses, and keep your pipeline active even while you're offline.
                  </motion.p>
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative"
                    onClick={redirectToApp}
                  >
                    <Button 
                      size="lg"
                      className="bg-[#b45ecf] hover:bg-[#b45ecf]/90 px-6 lg:px-8 py-2.5 lg:py-3 font-semibold rounded-lg lg:rounded-xl border-0 shadow-lg shadow-[#b45ecf]/30 relative overflow-hidden group w-full sm:w-auto"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 1,
                        }}
                      />
                      <span className="relative z-10 flex items-center text-sm lg:text-base">
                        Build Your Sequence
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-1.5 lg:ml-2 h-3.5 w-3.5 lg:h-4 lg:w-4" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center space-x-1.5 text-[#b45ecf] text-xs lg:text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full animate-pulse" />
                    <span>No credit card required</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* ANIMATIONS COLUMN - Comes after content on mobile */}
              <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
                
                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="bg-black rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 p-4 lg:p-6 backdrop-blur-sm shadow-xl"
                >
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div className="w-7 h-7 lg:w-8 lg:h-8 bg-[#b45ecf] rounded-lg flex items-center justify-center">
                        <Mail className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm lg:text-base">Sequence Builder</h3>
                        <p className="text-white/60 text-xs lg:text-sm">Active Campaign</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center space-x-1 text-[#b45ecf]"
                    >
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#b45ecf] rounded-full" />
                      <span className="text-xs font-medium">Live</span>
                    </motion.div>
                  </div>

                  {/* Email Steps */}
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      { step: "Day 1", title: "Welcome & Value Prop", status: "sent", opens: "84%" },
                      { step: "Day 3", title: "Case Study Share", status: "scheduled", opens: "-" },
                      { step: "Day 7", title: "Follow-up Call", status: "draft", opens: "-" },
                    ].map((email, index) => (
                      <motion.div
                        key={email.step}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.15 }}
                        className="flex items-center justify-between p-2.5 lg:p-3 bg-black rounded-lg border border-[#b45ecf]/20 hover:border-[#b45ecf]/40 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-2 lg:space-x-3">
                          <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center ${
                            email.status === 'sent' ? 'bg-[#b45ecf]/20 text-[#b45ecf]' :
                            email.status === 'scheduled' ? 'bg-[#b45ecf]/20 text-[#b45ecf]' :
                            'bg-[#b45ecf]/20 text-[#b45ecf]'
                          }`}>
                            {email.status === 'sent' && <CheckCircle2 className="h-3.5 w-3.5 lg:h-4 lg:w-4" />}
                            {email.status === 'scheduled' && <Clock className="h-3.5 w-3.5 lg:h-4 lg:w-4" />}
                            {email.status === 'draft' && <Mail className="h-3.5 w-3.5 lg:h-4 lg:w-4" />}
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">{email.title}</div>
                            <div className="text-white/40 text-xs">{email.step}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white text-sm font-medium">{email.opens}</div>
                          <div className="text-white/40 text-xs">Open Rate</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Performance Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-[#b45ecf]/20"
                  >
                    <div className="grid grid-cols-3 gap-3 lg:gap-4 text-center">
                      {[
                        { label: "Response", value: "12.4%", color: "text-[#b45ecf]" },
                        { label: "Conversion", value: "4.8%", color: "text-[#b45ecf]" },
                        { label: "Revenue", value: "$28.5K", color: "text-[#b45ecf]" },
                      ].map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.1 + index * 0.08, type: "spring" }}
                          className="text-center"
                        >
                          <div className={`text-base lg:text-lg font-bold ${metric.color}`}>{metric.value}</div>
                          <div className="text-white/60 text-xs">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Elements - Hidden on mobile */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden lg:block absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-[#b45ecf]/10 rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 backdrop-blur-sm flex items-center justify-center"
                >
                  <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-[#b45ecf]" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="hidden lg:block absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-[#b45ecf]/10 rounded-xl lg:rounded-2xl border border-[#b45ecf]/30 backdrop-blur-sm flex items-center justify-center"
                >
                  <Brain className="h-4 w-4 lg:h-6 lg:w-6 text-[#b45ecf]" />
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center text-[#b45ecf]/60"
              >
                <span className="text-xs mb-1.5">Scroll to explore</span>
                <div className="w-4 h-6 border border-[#b45ecf]/30 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-0.5 h-1.5 bg-[#b45ecf] rounded-full mt-1.5"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Email Flow Visualization */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <EmailFlowVisualization />
          </div>
        </section>

        {/* Features Section - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
              <SequenceBuilderDemo />
              <AIPersonalizationDemo />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title}
                  {...feature}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnalyticsDashboard />
          </div>
        </section>

        {/* Benefits Section - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-2xl lg:text-4xl font-bold text-white mb-8 lg:mb-12"
            >
              Why Teams Love 360Airo's Email Sequences
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-30px' }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-start space-x-2.5 lg:space-x-3 p-4 lg:p-6 bg-black rounded-lg lg:rounded-xl border border-[#b45ecf]/30 hover:border-[#b45ecf]/50 transition-all duration-300"
                >
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#b45ecf]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 lg:h-4 lg:w-4 text-[#b45ecf]" />
                  </div>
                  <span className="text-white/80 leading-relaxed text-left text-sm lg:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 lg:space-y-6"
            >
              <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                With 360Airo, your email sequences don't just send messages — they start conversations that build trust and drive conversions.
              </p>

              <Button 
                size="lg" 
                className="bg-[#b45ecf] hover:bg-[#b45ecf]/90 px-6 lg:px-8 py-2.5 lg:py-3 text-base lg:text-lg rounded-lg lg:rounded-xl shadow-lg shadow-[#b45ecf]/30 w-full sm:w-auto"
                onClick={redirectToApp}
              >
                Build Your Sequence
                <ArrowRight className="ml-1.5 lg:ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  ); 
}