'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';
import Link from 'next/link';

import {
  Users,
  Target,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle2,
  Eye,
  TrendingUp,
  Workflow,
  Shield,
  Database,
  Network,
  Sparkles,
  Calendar,
  Clock,
  UserCheck,
  MessageSquare,
  Mail,
  Linkedin,
  Crown,
  Rocket,
  Play,
  Pause,
  Star,
  Hexagon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

/* FAQ Item Component */
const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => {
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
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden group cursor-pointer"
        onClick={onClick}
      >
        <div className={`transition-all duration-300 ${isOpen ? 'bg-white/10' : 'hover:bg-white/8'}`}>
          <div className="p-5 lg:p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white pr-8 leading-relaxed">
                {question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-[#b45ecf] to-[#480056] flex items-center justify-center">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  )}
                </div>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
                  <p className="text-white/80 text-base leading-relaxed">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Animated border effect */}
        <div className={`absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none transition-all duration-300 ${
          isOpen 
            ? 'border-2 border-[#b45ecf]/50 shadow-[0_0_30px_rgba(180,94,207,0.3)]' 
            : 'border border-white/10 group-hover:border-[#b45ecf]/30'
        }`} />
      </motion.div>
    </div>
  );
};

// Floating Particles Background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -60, 0],
            x: [0, Math.sin(i) * 30, 0],
            scale: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
          }}
          style={{
            width: Math.random() * 16 + 4,
            height: Math.random() * 16 + 4,
            background: i % 4 === 0 ? COLORS.purpleLight : 
                       i % 4 === 1 ? COLORS.purpleDark : 
                       i % 4 === 2 ? '#6b21a8' : '#c084fc',
            opacity: 0.12,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '30%',
          }}
        />
      ))}
    </div>
  );
};

// Animated Pipeline Visualization
const PipelineVisualization = () => {
  const stages = [
    { name: "New Lead", color: COLORS.purpleLight, icon: Users, progress: 100 },
    { name: "Engaged", color: COLORS.purpleDark, icon: Eye, progress: 75 },
    { name: "Qualified", color: COLORS.purpleLight, icon: Target, progress: 50 },
    { name: "Meeting", color: COLORS.purpleDark, icon: Calendar, progress: 25 },
    { name: "Closed", color: COLORS.purpleLight, icon: Crown, progress: 10 }
  ];

  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Control Panel */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-white" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white" />}
          <span className="text-white font-semibold text-sm sm:text-base">
            {isPlaying ? 'Pause' : 'Play'}
          </span>
        </motion.button>
      </div>

      {/* Pipeline Track */}
      <div className="relative h-4 sm:h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-full mb-12 sm:mb-16 shadow-xl">
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute h-4 sm:h-6 rounded-full shadow-lg"
          style={{ 
            background: `linear-gradient(90deg, ${COLORS.purpleLight}, ${COLORS.purpleDark}, ${COLORS.purpleLight})`,
            backgroundSize: '200% 100%',
            width: `${(activeStage / (stages.length - 1)) * 100}%`
          }}
          animate={{
            backgroundPosition: ['0%', '200%'],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
        
        {/* Stage Indicators */}
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${(index / (stages.length - 1)) * 100}%` }}
            animate={{
              scale: activeStage === index ? [1, 1.2, 1] : 0.8,
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveStage(index)}
            >
              {/* Pulsing Ring Effect */}
              {activeStage === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: stage.color }}
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
              
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${stage.color}, ${COLORS.purpleDark})`,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <stage.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white z-10" />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)`,
                      `linear-gradient(45deg, transparent, rgba(255,255,255,0.6), transparent)`,
                    ],
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
            </motion.div>
            
            {/* Stage Label */}
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 sm:mt-3 lg:mt-4 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-white text-xs sm:text-sm lg:text-lg font-bold whitespace-nowrap">{stage.name}</p>
              <motion.p 
                className="text-purple-300 text-xs sm:text-sm font-semibold"
                animate={{ scale: activeStage === index ? [1, 1.1, 1] : 1 }}
              >
                {stage.progress}%
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Interactive Feature Cards
const FeatureCards = () => {
  const features = [
    {
      icon: Database,
      title: "Centralized Lead Tracking",
      description: "Track each prospect's activity, engagement, and response history",
      color: COLORS.purpleLight,
      stats: "100% Visibility"
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      description: "Segment leads by behavior, industry, or engagement score",
      color: COLORS.purpleDark,
      stats: "AI-Powered"
    },
    {
      icon: Clock,
      title: "Automated Follow-ups",
      description: "Set reminders and follow-ups to ensure no opportunity is missed",
      color: COLORS.purpleLight,
      stats: "Never Miss"
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Integrate seamlessly with your prospect CRM, shared inbox, and automation tools",
      color: COLORS.purpleDark,
      stats: "Full Sync"
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          {/* Card Background */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-gray-800 hover:border-current transition-all duration-300 h-full shadow-lg relative overflow-hidden">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(${feature.color} 1px, transparent 1px), linear-gradient(90deg, ${feature.color} 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            {/* Floating Icon */}
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative overflow-hidden mx-auto"
              style={{ background: feature.color }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 lg:h-10 lg:w-10 text-white z-10" />
              
              {/* Particle Burst on Hover */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{ background: feature.color }}
                        initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [1, 0.5, 0],
                          x: Math.cos((i / 6) * Math.PI * 2) * 40,
                          y: Math.sin((i / 6) * Math.PI * 2) * 40,
                        }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
            
            <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4 text-center">{feature.title}</h4>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-center">{feature.description}</p>
            
            {/* Animated Stats Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm font-bold mx-auto block w-fit"
              style={{ background: feature.color }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  `0 0 15px ${feature.color}40`,
                  `0 0 30px ${feature.color}60`,
                  `0 0 15px ${feature.color}40`,
                ],
              }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-white flex items-center">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                {feature.stats}
              </span>
            </motion.div>

            {/* Hover Glow Effect */}
            {hoveredCard === index && (
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${feature.color}20, transparent 70%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Text Gradient Component (Fixed)
const AnimatedGradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
};

// Enhanced AI Insights Section
const AIInsightsSection = () => {
  const insights = [
    "Identify high-priority leads based on engagement patterns",
    "Get AI suggestions for follow-ups, messaging, and next-best actions",
    "Automate repetitive prospecting tasks while maintaining personalization",
    "Monitor your pipeline in real time to optimize conversion rates"
  ];

  const [hoveredInsight, setHoveredInsight] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-[#b45ecf]/10 via-[#480056]/15 to-[#19001d]/20 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 border-2 border-[#b45ecf]/30 relative overflow-hidden shadow-xl">
        {/* Animated Orbital Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 rounded-full"
              style={{
                borderColor: COLORS.purpleLight,
                left: '50%',
                top: '50%',
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                marginLeft: `-${60 + i * 40}px`,
                marginTop: `-${60 + i * 40}px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15 + i * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 lg:mb-12">
            <motion.div
              className="relative mb-4 sm:mb-0"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <motion.div
                className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden"
                style={{ background: COLORS.purpleLight }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Zap className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:h-12 lg:w-12 text-white" />
                
                {/* Electric Spark Effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `linear-gradient(45deg, transparent, rgba(255,255,255,0.8), transparent)`,
                      `linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)`,
                    ],
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
              
              {/* Floating Particles around icon */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ background: COLORS.purpleLight }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: Math.cos((i / 4) * Math.PI * 2) * 40,
                    y: Math.sin((i / 4) * Math.PI * 2) * 40,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
            <div className="sm:ml-6 lg:ml-8 text-center sm:text-left">
              <motion.h3
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2"
              >
                <AnimatedGradientText>
                  AI-Powered Prospect Insights
                </AnimatedGradientText>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className="text-purple-300 text-base sm:text-lg lg:text-xl"
              >
                Turn data into actionable intelligence
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? -3 : 3 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredInsight(index)}
                onHoverEnd={() => setHoveredInsight(null)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <div className="bg-black/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className="flex items-start space-x-3 sm:space-x-4"
                    animate={{
                      x: hoveredInsight === index ? 5 : 0,
                    }}
                  >
                    <motion.div
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                      style={{ background: COLORS.purpleLight }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: hoveredInsight === index ? 
                          `0 0 15px ${COLORS.purpleLight}` : 
                          'none'
                      }}
                    >
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white" />
                    </motion.div>
                    <span className="text-white text-sm sm:text-base lg:text-lg leading-relaxed font-medium">{insight}</span>
                  </motion.div>

                  {/* Hover Effect */}
                  {hoveredInsight === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                      style={{
                        background: `linear-gradient(45deg, ${COLORS.purpleLight}15, ${COLORS.purpleDark}15)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Multi-Channel Prospecting
const MultiChannelSection = () => {
  const channels = [
    { 
      icon: Mail, 
      name: "Email", 
      color: COLORS.purpleLight, 
      description: "Sync email interactions",
      metrics: "95% sync rate"
    },
    { 
      icon: Linkedin, 
      name: "LinkedIn", 
      color: COLORS.purpleDark, 
      description: "Track social engagement",
      metrics: "Real-time updates"
    },
    { 
      icon: MessageSquare, 
      name: "Messaging", 
      color: COLORS.purpleLight, 
      description: "Monitor all communications",
      metrics: "Unified inbox"
    },
    { 
      icon: UserCheck, 
      name: "CRM", 
      color: COLORS.purpleDark, 
      description: "Seamless integration",
      metrics: "Auto-sync"
    }
  ];

  const [activeChannel, setActiveChannel] = useState(0);

  const currentChannel = channels[activeChannel];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6"
          >
            <AnimatedGradientText>
              Seamless Multi-Channel Prospecting
            </AnimatedGradientText>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed"
          >
            Prospect management goes beyond just storing contacts. 360Airo enables cross-channel campaigns so you can reach leads via email, LinkedIn, and more — all while maintaining a cohesive, personalized approach.
          </motion.p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              "Sync all prospect interactions across channels in one dashboard",
              "Ensure consistent messaging for every touchpoint",
              "Track the success of multi-channel outreach for smarter decision-making"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center space-x-3 sm:space-x-4 text-white group cursor-pointer"
              >
                <motion.div
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 relative"
                  style={{ background: COLORS.purpleLight }}
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: COLORS.purpleLight }}
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
                <span className="text-sm sm:text-base lg:text-lg group-hover:text-purple-300 transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-2xl" />
          
          {/* Channel Selector */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 relative">
            {channels.map((channel, index) => (
              <motion.button
                key={channel.name}
                className={`p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 transition-all duration-300 ${
                  activeChannel === index 
                    ? 'border-purple-500 shadow-lg sm:shadow-xl shadow-purple-500/25' 
                    : 'border-gray-700 hover:border-purple-400'
                }`}
                style={{
                  background: activeChannel === index ? 
                    `linear-gradient(135deg, ${channel.color}, ${COLORS.purpleDark})` : 
                    'rgba(255,255,255,0.05)'
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveChannel(index)}
              >
                {/* Animated Background Pattern */}
                {activeChannel === index && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, ${channel.color} 2px, transparent 2px)`,
                      backgroundSize: '15px 15px',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
                
                <channel.icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 lg:h-8 lg:w-8 mx-auto mb-2 sm:mb-3 ${
                  activeChannel === index ? 'text-white' : 'text-gray-400'
                }`} />
                <p className={`text-xs sm:text-sm font-bold ${
                  activeChannel === index ? 'text-white' : 'text-gray-400'
                }`}>
                  {channel.name}
                </p>
                <p className={`text-xs mt-1 ${
                  activeChannel === index ? 'text-purple-200' : 'text-gray-500'
                }`}>
                  {channel.metrics}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Channel Visualization */}
          <motion.div
            key={activeChannel}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-gray-800 text-center shadow-lg relative overflow-hidden"
          >
            {/* Connection Lines Animation */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 bg-purple-500"
                  style={{
                    top: '50%',
                    left: `${20 + i * 25}%`,
                    width: '10%',
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg relative overflow-hidden"
              style={{ background: currentChannel.color }}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <currentChannel.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 lg:h-10 lg:w-10 text-white" />
            </motion.div>
            <p className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-2">{currentChannel.description}</p>
            <motion.div
              className="text-purple-300 text-xs sm:text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              Active & Syncing
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Benefits Grid
const BenefitsGrid = () => {
  const benefits = [
    {
      text: "Centralized lead tracking for all campaigns and channels",
      icon: Database
    },
    {
      text: "AI-driven insights for prioritization and follow-ups",
      icon: Zap
    },
    {
      text: "Integration with CRM and automation tools for seamless workflows",
      icon: Workflow
    },
    {
      text: "Real-time analytics to measure engagement and pipeline health",
      icon: BarChart3
    },
    {
      text: "Collaboration features for teams to work efficiently on shared prospects",
      icon: Users
    },
    {
      text: "Automated lead scoring and qualification processes",
      icon: Target
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.02, 
              y: -6,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              type: "spring"
            }}
            className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-gray-800 hover:border-purple-500 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${COLORS.purpleLight} 2px, transparent 2px)`,
                backgroundSize: '25px 25px',
              }} />
            </div>

            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg relative overflow-hidden"
              style={{ background: COLORS.purpleLight }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 lg:h-8 lg:w-8 text-white" />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)`,
                    `linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)`,
                  ],
                  x: [-100, 100],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>
            
            <p className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-relaxed text-center group-hover:text-purple-200 transition-colors">
              {benefit.text}
            </p>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-transparent"
              whileHover={{
                borderColor: COLORS.purpleLight,
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* FAQ Data */
const faqData = [
  {
    question: "What is lead management software, and how does it work?",
    answer: "Lead management software helps businesses capture, organize, track, and nurture leads from first contact to conversion. It centralizes lead data, logs interactions, and automates follow ups. This ensures no leads are missed and sales teams can focus on engaging prospects instead of managing spreadsheets or manual processes.",
    id: "what-is-lead-management"
  },
  {
    question: "What key features should a lead management software include?",
    answer: "A strong lead management software should include lead tracking, automated follow ups, activity history, reminders, reporting, and CRM integration. These features help teams stay organized, respond faster, and move leads through the sales funnel efficiently while maintaining visibility across outreach and engagement stages.",
    id: "key-features"
  },
  {
    question: "Which tools are commonly used for lead follow-up and nurturing?",
    answer: "Businesses commonly use email automation tools, CRM systems, LinkedIn outreach platforms, and lead management software for follow up and nurturing. 360Airo combines these tools into one platform, making it easier to manage conversations, automate follow ups, and nurture leads across multiple channels.",
    id: "tools-for-followup"
  },
  {
    question: "Who typically uses lead management software in a business?",
    answer: "Lead management software is used by sales teams, marketing teams, agencies, founders, and customer success teams. Any team responsible for handling inquiries, outbound outreach, or deal progression benefits from having a structured system to track leads and maintain consistent communication.",
    id: "who-uses"
  },
  {
    question: "What is the difference between lead management software and a CRM?",
    answer: "Lead management software focuses on capturing and nurturing prospects until conversion, while a CRM manages long term customer relationships after a deal closes. 360Airo bridges this gap by offering Prospect CRM features that support both lead nurturing and relationship tracking in one system.",
    id: "difference-crm"
  },
  {
    question: "How does lead management software help move leads from first contact to closed deals?",
    answer: "Lead management software automates follow ups, tracks engagement, and prioritizes active prospects. This ensures timely responses and consistent communication. By maintaining visibility into every interaction, sales teams can focus on high intent leads and move them smoothly toward conversion.",
    id: "move-leads-to-deals"
  },
  {
    question: "Can lead follow-up and reminders be automated using lead management software?",
    answer: "Yes, lead management software like 360Airo automates follow ups and reminders based on lead activity or timelines. This prevents missed opportunities, ensures consistent outreach, and allows sales teams to stay proactive without relying on manual tracking or memory.",
    id: "automated-followups"
  }
];

export default function ProspectManagementPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, 40]);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFaqClick = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Lead Management Software to Organize, Track, and Convert Leads | 360Airo</title>
        <meta 
          name="description" 
          content="Centralize all your leads in one place with 360Airo's lead management software. Track, organize, and convert leads efficiently across all channels." 
        />
        <meta 
          name="keywords" 
          content="lead management software, lead tracking, prospect management, sales pipeline, lead conversion, CRM software, 360Airo" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/lead-management-software" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Lead Management Software to Organize, Track, and Convert Leads | 360Airo" />
        <meta property="og:description" content="Centralize all your leads in one place with 360Airo's lead management software. Track, organize, and convert leads efficiently across all channels." />
        <meta property="og:url" content="https://360airo.com/features/lead-management-software" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-lead-management.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead Management Software to Organize, Track, and Convert Leads | 360Airo" />
        <meta name="twitter:description" content="Centralize all your leads in one place with 360Airo's lead management software. Track, organize, and convert leads efficiently across all channels." />
        <meta name="twitter:image" content="https://360airo.com/twitter-lead-management.jpg" />
        
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
              "name": "360Airo Lead Management Software",
              "description": "Centralize all your leads in one place with 360Airo's lead management software. Track, organize, and convert leads efficiently across all channels.",
              "url": "https://360airo.com/features/lead-management-software",
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
                "Centralized lead tracking",
                "Multi-channel prospect management",
                "AI-powered insights",
                "Automated follow-ups",
                "Real-time pipeline analytics",
                "Seamless CRM integration"
              ]
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/lead-management-software">360Airo Lead Management Software</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <FloatingParticles />
          
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(180, 94, 207, 0.15), transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(180, 94, 207, 0.15), transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(180, 94, 207, 0.15), transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          
          <motion.div 
            className="max-w-7xl mx-auto w-full relative z-10"
            style={{
              scale: headerScale,
              opacity: headerOpacity,
              y: headerY
            }}
          >
            <div className="text-center max-w-6xl mx-auto py-16 sm:py-20 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 sm:space-y-10"
              >
                {/* Enhanced Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="inline-block"
                >
                  <div 
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border-2 backdrop-blur-sm relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
                      borderColor: COLORS.purpleLight
                    }}
                  >
                    <motion.span
                      className="text-white font-bold text-sm sm:text-lg uppercase tracking-wider flex items-center relative z-10"
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(255,255,255,0)',
                          '0 0 8px rgba(255,255,255,0.5)',
                          '0 0 0px rgba(255,255,255,0)',
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                      Lead Management Software
                    </motion.span>
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)`,
                          `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                        ],
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight"
                >
                  <span className="block">
                    <AnimatedGradientText>
                      Lead Management Software
                    </AnimatedGradientText>
                  </span>
                  <motion.span
                    className="block"
                    style={{ color: COLORS.purpleLight }}
                    animate={{
                      textShadow: [
                        `0 0 15px ${COLORS.purpleLight}`,
                        `0 0 30px ${COLORS.purpleLight}`,
                        `0 0 45px ${COLORS.purpleLight}`,
                        `0 0 15px ${COLORS.purpleLight}`,
                      ],
                      scale: [1, 1.01, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    to Organize, Track, and
                  </motion.span>
                  <span className="block">
                    <AnimatedGradientText>
                      Convert Leads
                    </AnimatedGradientText>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed"
                >
                  Centralize All Your Leads in One Place
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="space-y-4 sm:space-y-6 max-w-4xl mx-auto"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
                    Managing leads should feel structured and under control, not scattered across tools and inboxes. 360Airo's <strong className="text-purple-300">lead management software</strong> helps you capture, organize, and track every lead from first interaction to closed deal. All prospect data, conversations, and engagement history live in one simple dashboard, giving your team complete clarity at every stage.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
                    From <Link href="/features/email-sequences" className="text-purple-300 hover:text-white transition-colors duration-300 underline underline-offset-2">Email Sequences</Link> to LinkedIn outreach and multichannel follow-ups, everything stays connected so your communication feels timely, relevant, and consistent.
                  </p>
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="pt-8 sm:pt-10 lg:pt-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative"
                  >
                    <Button 
                      size="lg" 
                      className="px-8 py-4 sm:px-12 sm:py-5 lg:px-16 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl sm:rounded-2xl shadow-xl border-0 relative overflow-hidden group w-full sm:w-auto"
                      style={{ background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})` }}
                      onClick={() => window.open('https://app.360airo.com/', '_blank')}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            `linear-gradient(45deg, ${COLORS.purpleLight}, ${COLORS.purpleDark}, ${COLORS.purpleLight})`,
                            `linear-gradient(45deg, ${COLORS.purpleDark}, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
                          ],
                          backgroundSize: ['200% 200%', '200% 200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      
                      {/* Sparkle Particles */}
                      <AnimatePresence>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full bg-white"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 60],
                              y: [0, (Math.random() - 0.5) * 60],
                            }}
                            transition={{
                              duration: 1.2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.4,
                            }}
                          />
                        ))}
                      </AnimatePresence>

                      <span className="relative z-10 flex items-center justify-center">
                        <Rocket className="mr-3 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                        Start Managing Leads Smarter
                        <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 transition-transform group-hover:translate-x-2" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Complete Visibility Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8"
              >
                <AnimatedGradientText>
                  Complete Visibility With a Smart Lead Management System
                </AnimatedGradientText>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
              >
                Knowing where each lead stands makes all the difference. 360Airo gives you full visibility into your pipeline through a powerful <strong className="text-purple-300">lead management system</strong> designed to support growing sales teams.
              </motion.p>
            </motion.div>

            <PipelineVisualization />

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    With this system, you can:
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Track lead activity, engagement, and response history in real time",
                      "Segment leads based on behavior, industry, or engagement level",
                      "Set reminders and follow-ups so no opportunity is overlooked",
                      "Sync seamlessly with your Prospect CRM and automation tools"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start space-x-3 sm:space-x-4 group"
                      >
                        <motion.div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                          style={{ background: COLORS.purpleLight }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </motion.div>
                        <span className="text-white text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-purple-300 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-purple-500/30 w-full"
                  >
                    <p className="text-white text-base sm:text-lg lg:text-xl italic text-center leading-relaxed">
                      This structured approach to sales pipeline management helps your team focus on closing deals while the platform keeps everything organized.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8"
              >
                <AnimatedGradientText>
                  Powerful Features for Modern Lead Management
                </AnimatedGradientText>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto"
              >
                Everything you need to manage leads efficiently and close more deals
              </motion.p>
            </motion.div>

            <FeatureCards />
          </div>
        </section>

        {/* AI-Powered Insights Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8"
              >
                <AnimatedGradientText>
                  AI-Powered Insights to Strengthen Your Sales Pipeline
                </AnimatedGradientText>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
              >
                Good decisions come from clear insights. 360Airo uses intelligent analytics to turn your <strong className="text-purple-300">lead management software</strong> into a decision-making engine.
              </motion.p>
            </motion.div>

            <AIInsightsSection />

            {/* Additional AI Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <div className="bg-gradient-to-br from-[#b45ecf]/10 via-[#480056]/15 to-[#19001d]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#b45ecf]/30">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                      You can:
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        "Identify high-priority leads based on engagement patterns",
                        "Receive AI-driven suggestions for follow-ups and next actions",
                        "Automate repetitive tasks without losing personalization",
                        "Monitor pipeline health and conversion trends in real time"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-start space-x-3 sm:space-x-4 group"
                        >
                          <motion.div
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                            style={{ background: COLORS.purpleLight }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </motion.div>
                          <span className="text-white text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-purple-300 transition-colors">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-purple-500/30 w-full"
                    >
                      <p className="text-white text-base sm:text-lg lg:text-xl italic text-center leading-relaxed">
                        These insights help your <strong className="text-purple-300">sales pipeline software</strong> work smarter, not harder, at every stage.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seamless Multi-Channel Lead Engagement Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8"
              >
                <AnimatedGradientText>
                  Seamless Multi-Channel Lead Engagement
                </AnimatedGradientText>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
              >
                Lead management is more than storing contacts. It is about building consistent relationships across channels. 360Airo enables coordinated outreach through email, LinkedIn, and other channels while keeping every interaction aligned inside one dashboard.
              </motion.p>
            </motion.div>

            <MultiChannelSection />

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    You can:
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Sync all lead interactions across channels automatically",
                      "Maintain consistent messaging at every touchpoint",
                      "Track the performance of each outreach channel clearly"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start space-x-3 sm:space-x-4 group"
                      >
                        <motion.div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                          style={{ background: COLORS.purpleLight }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </motion.div>
                        <span className="text-white text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-purple-300 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-purple-500/30 w-full"
                  >
                    <p className="text-white text-base sm:text-lg lg:text-xl italic text-center leading-relaxed">
                      As a reliable <strong className="text-purple-300">lead generation management software</strong>, 360Airo helps your team nurture leads with confidence and convert them faster.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Teams Choose Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8"
              >
                <AnimatedGradientText>
                  Why Teams Choose 360Airo as Their Lead Management Software
                </AnimatedGradientText>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
              >
                360Airo's <strong className="text-purple-300">lead management software</strong> ensures no lead is forgotten, no follow-up is missed, and every opportunity is handled with care.
              </motion.p>
            </motion.div>

            <BenefitsGrid />

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <div className="bg-gradient-to-br from-[#b45ecf]/10 via-[#480056]/15 to-[#19001d]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-[#b45ecf]/30">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Key Benefits:
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        "Centralized lead tracking across all channels and campaigns",
                        "Smart prioritization using AI-driven insights",
                        "Seamless integration with CRM and automation tools",
                        "Clear analytics for pipeline visibility and performance",
                        "Collaboration features for teams managing shared leads"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-start space-x-3 sm:space-x-4 group"
                        >
                          <motion.div
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                            style={{ background: COLORS.purpleLight }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </motion.div>
                          <span className="text-white text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-purple-300 transition-colors">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-purple-500/30 w-full"
                    >
                      <p className="text-white text-base sm:text-lg lg:text-xl italic text-center leading-relaxed">
                        360Airo's <Link href="/features/prospect-crm" className="text-purple-300 hover:text-white transition-colors duration-300 underline underline-offset-2">Prospect CRM</Link> helps teams sell smarter, follow up faster, and build relationships that convert consistently.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Final CTA */}
            
          </div>
        </section>

        {/* FAQ SECTION - NOW AT THE VERY END BEFORE FOOTER */}
        <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
          <FloatingParticles />
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-block mb-2 lg:mb-3">
                <span className="text-[#b45ecf] font-semibold text-xs lg:text-sm tracking-wider uppercase">FAQs</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Frequently Asked <span className="text-[#b45ecf]">Questions</span>
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about 360Airo's Lead Management Software and how it can transform your sales process.
              </p>
            </motion.div>

            <div className="space-y-4 lg:space-y-6">
              {faqData.map((faq, index) => (
                <div key={faq.id} id={faq.id}>
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === faq.id}
                    onClick={() => handleFaqClick(faq.id)}
                  />
                </div>
              ))}
            </div>

            {/* Additional FAQ Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-white/60 text-sm lg:text-base mb-6">
                Still have questions? We're here to help.
              </p>
              <motion.div 
                whileHover={{ scale: isMobile ? 1.04 : 1.05, y: isMobile ? -2 : -4 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-block"
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl hover:shadow-lg hover:shadow-[#b45ecf]/30 transition-all duration-300"
                >
                  Contact Support
                  <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}  
