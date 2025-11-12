'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import {
  Calendar,
  Play,
  Zap,
  Target,
  Users,
  Mail,
  MessageCircle,
  BarChart3,
  Rocket,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Eye,
  TrendingUp,
  Shield,
  Bot,
  ChartLine,
  Workflow,
  MessageSquare,
  MailCheck,
  Linkedin,
  UserCheck,
  Star,
  Crown,
  Sparkle,
  MonitorPlay,
  CalendarDays,
  Clock4,
  Gift
} from 'lucide-react';

// Color constants
const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// Floating Demo Elements
const FloatingDemoElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Dashboard Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border-2 backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 60 + 30,
            borderColor: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker}15, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M20,80 Q200,40 380,120"
          stroke={COLORS.purpleLight}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.path
          d="M80,200 Q250,150 400,180"
          stroke={COLORS.purpleDark}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
};

// Interactive Demo Feature Grid
const DemoFeaturesGrid = () => {
  const features = [
    {
      icon: MailCheck,
      title: "Email Warmup",
      description: "Boost sender reputation and inbox placement",
      color: COLORS.purpleLight
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Eliminate manual workflows with smart automation",
      color: COLORS.purpleDark
    },
    {
      icon: MessageSquare,
      title: "Personalized Sequences",
      description: "Set up email sequences that feel human",
      color: COLORS.purpleDarker
    },
    {
      icon: Linkedin,
      title: "LinkedIn Outreach",
      description: "Automate LinkedIn campaigns alongside email",
      color: COLORS.purpleLight
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights with detailed reports",
      color: COLORS.purpleDark
    },
    {
      icon: UserCheck,
      title: "Prospect CRM",
      description: "Keep every lead organized and trackable",
      color: COLORS.purpleDarker
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-500 h-full">
            {/* Animated Icon */}
            <motion.div
              whileHover={{ 
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative overflow-hidden"
              style={{ background: feature.color }}
            >
              <feature.icon className="h-7 w-7 text-white z-10" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${feature.color}00, ${feature.color}40, ${feature.color}00)`,
                    `linear-gradient(45deg, ${feature.color}00, ${feature.color}20, ${feature.color}00)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            
            <h4 className="text-white font-bold text-lg mb-3">{feature.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${feature.color}15, transparent 70%)`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Steps Component
const DemoSteps = () => {
  const steps = [
    {
      icon: CalendarDays,
      title: "Pick a Time",
      description: "Choose a slot that fits your schedule",
      color: COLORS.purpleLight
    },
    {
      icon: Clock4,
      title: "30-Minute Live Session",
      description: "Join a specialist for personalized walkthrough",
      color: COLORS.purpleDark
    },
    {
      icon: MonitorPlay,
      title: "Experience the Platform",
      description: "Explore, ask questions, get recommendations",
      color: COLORS.purpleDarker
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring"
          }}
          className="relative text-center group"
        >
          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <motion.div
              className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-800 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
            />
          )}

          {/* Step Number */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.3, type: "spring" }}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto relative z-10 border-2"
            style={{ 
              background: step.color,
              borderColor: step.color
            }}
          >
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </motion.div>

          {/* Step Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-300 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
              style={{ background: step.color }}
            >
              <step.icon className="h-8 w-8 text-white" />
            </motion.div>
            
            <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Target Audience Cards
const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: "Sales Teams",
      description: "Scale outreach without losing personalization",
      color: COLORS.purpleLight
    },
    {
      icon: TrendingUp,
      title: "Marketing Professionals",
      description: "Improve email deliverability and engagement",
      color: COLORS.purpleDark
    },
    {
      icon: Rocket,
      title: "Agencies & Startups",
      description: "Unified tools to manage clients and campaigns",
      color: COLORS.purpleDarker
    },
    {
      icon: Crown,
      title: "Growth Leaders",
      description: "Explore smarter automation workflows",
      color: COLORS.purpleLight
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {audiences.map((audience, index) => (
        <motion.div
          key={audience.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ 
            x: index % 2 === 0 ? -5 : 5,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring"
          }}
          className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1"
              style={{ background: audience.color }}
            >
              <audience.icon className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">{audience.title}</h4>
              <p className="text-gray-300 leading-relaxed">{audience.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Benefits List with Animation
const DemoBenefits = () => {
  const benefits = [
    "Live, interactive walkthrough — not just a video",
    "Personalized session tailored to your team's goals",
    "Real-time Q&A with our product experts",
    "Hands-on experience with AI-driven tools and dashboards",
    "Free trial access post-demo to explore on your own"
  ];

  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center space-x-4 group"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: COLORS.purpleLight }}
          >
            <CheckCircle2 className="h-5 w-5 text-white" />
          </motion.div>
          <motion.p
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="text-white text-lg group-hover:text-gray-200 transition-colors"
          >
            {benefit}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

// Pulsing Section Component
const PulsingSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
        style={{
          background: `linear-gradient(45deg, ${COLORS.purpleLight}, ${COLORS.purpleDark}, ${COLORS.purpleDarker})`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Main Demo Page Component
export default function DemoPage() {
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
      <link rel="canonical" href="https://360airo.com/features/experience-360airo-in-action" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FloatingDemoElements />
        
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            scale: headerScale,
            opacity: headerOpacity
          }}
        >
          {/* MOBILE: Content first, then animation */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
            
            {/* CONTENT COLUMN - Always first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative space-y-6 lg:space-y-8 order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <div 
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-2xl border-2 backdrop-blur-sm"
                  style={{ 
                    background: COLORS.purpleLight,
                    borderColor: COLORS.purpleLight
                  }}
                >
                  <span className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider flex items-center">
                    <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                    Live Interactive Demo
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4 lg:space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                  <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block"
                  >
                    Experience
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="block"
                    style={{ color: COLORS.purpleLight }}
                  >
                    360Airo
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="block"
                    style={{ color: COLORS.purpleDark }}
                  >
                    In Action
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed"
                >
                  See How Smart Outreach Really Works
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="space-y-3 lg:space-y-4 max-w-xl"
              >
                <p className="text-base lg:text-lg text-white/70 leading-relaxed">
                  <span className="text-white font-semibold">You've read the features — now see the magic happen.</span>{' '}
                  360Airo's live demo gives you a front-row seat to how our AI-powered outreach platform helps teams build better connections, automate engagement, and scale results.
                </p>
                <p className="text-base lg:text-lg text-white/70 leading-relaxed">
                  Whether you're in sales, marketing, or business development, the 360Airo demo walks you through everything — from email warmup to AI automation, LinkedIn outreach, prospect CRM, and performance analytics — all in one unified interface.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="pt-4 lg:pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-bold rounded-xl lg:rounded-2xl shadow-xl border-0 relative overflow-hidden group w-full lg:w-auto"
                    style={{ background: COLORS.purpleLight }}
                    onClick={() => window.open('https://app.360airo.com/', '_blank')}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 bg-white/20 rounded-xl lg:rounded-2xl"
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <Play className="mr-2 lg:mr-3 h-4 w-4 lg:h-5 lg:w-5" />
                      Book Your Live Demo
                      <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ANIMATION COLUMN - Always second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative order-2 mt-8 lg:mt-0"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                className="bg-[#1A1A1A] rounded-xl lg:rounded-3xl p-4 lg:p-8 border-2 shadow-xl"
                style={{ borderColor: COLORS.purpleLight }}
              >
                <div className="space-y-3 lg:space-y-4">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white text-xs lg:text-sm font-medium">360Airo Dashboard</div>
                    <div className="w-4 lg:w-6"></div>
                  </div>
                  
                  {/* Mock Content */}
                  <div className="grid grid-cols-2 gap-2 lg:gap-4">
                    <motion.div
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="h-12 lg:h-20 rounded-lg lg:rounded-xl"
                      style={{ background: COLORS.purpleLight }}
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      className="h-12 lg:h-20 rounded-lg lg:rounded-xl"
                      style={{ background: COLORS.purpleDark }}
                    ></motion.div>
                    <motion.div
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      className="col-span-2 h-16 lg:h-24 rounded-lg lg:rounded-xl"
                      style={{ background: COLORS.purpleDarker }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-4 h-4 lg:w-8 lg:h-8 rounded-full shadow-lg"
                style={{ background: COLORS.purpleLight }}
              ></motion.div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 2,
                }}
                className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-3 h-3 lg:w-6 lg:h-6 rounded-full shadow-lg"
                style={{ background: COLORS.purpleDark }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What You'll Discover Section */}
      <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
            >
              What You'll Discover in the Demo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Our product specialists will guide you through a hands-on experience of how 360Airo simplifies outreach while improving deliverability and conversions.
            </motion.p>
          </motion.div>

          <DemoFeaturesGrid />
        </div>
      </PulsingSection>

      {/* Who the Demo Is For Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
        <FloatingDemoElements />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6"
              style={{ color: COLORS.purpleLight }}
            >
              Who the Demo Is For
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
            >
              The 360Airo product demo is built for anyone who wants to transform the way they connect, engage, and convert.
            </motion.p>
          </motion.div>

          <TargetAudience />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 lg:mt-12 text-center"
          >
            <p className="text-white text-lg lg:text-xl font-bold">
              If outreach plays any role in your business, this demo is your starting point for smarter results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Book Demo Section */}
      <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
            >
              Why Book a 360Airo Demo
            </motion.h2>
          </motion.div>

          <DemoBenefits />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 lg:mt-12 text-center"
          >
            <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              See how easy it is to automate outreach, track performance, and scale engagement — all without losing the human touch.
            </p>
          </motion.div>
        </div>
      </PulsingSection>

      {/* Schedule Steps Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6"
              style={{ color: COLORS.purpleDark }}
            >
              Schedule Your Demo in 3 Easy Steps
            </motion.h2>
          </motion.div>

          <DemoSteps />

          {/* Free Trial Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 lg:mt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-3 lg:space-x-5 bg-[#1A1A1A] rounded-xl lg:rounded-2xl px-6 lg:px-10 py-3 lg:py-4 border-2"
              style={{ borderColor: COLORS.purpleLight }}
            >
              <Gift className="h-4 w-4 lg:h-6 lg:w-6" style={{ color: COLORS.purpleLight }} />
              <p className="text-white text-sm lg:text-lg font-semibold">
                Free trial access post-demo to explore on your own
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
            >
              See the Future of Outreach, Live
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              Don't just imagine smarter outreach — experience it. Book your 360Airo live demo today and discover how AI can make your communication faster, more personal, and infinitely scalable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4 lg:pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="px-6 py-3 lg:px-12 lg:py-6 text-base lg:text-xl font-bold rounded-xl lg:rounded-2xl shadow-xl border-0 relative overflow-hidden group w-full lg:w-auto"
                  style={{ background: COLORS.purpleLight }}
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute inset-0 bg-white/30 rounded-xl lg:rounded-2xl"
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    <Calendar className="mr-2 lg:mr-3 h-4 w-4 lg:h-6 lg:w-6" />
                    Book Your Demo Now
                    <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </PulsingSection>

      <Footer />
    </div>
  );
}