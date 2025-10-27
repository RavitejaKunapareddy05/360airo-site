'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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
  Hexagon
} from 'lucide-react';

const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// Floating Particles Background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            rotate: [0, 180, 360],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          style={{
            width: Math.random() * 24 + 6,
            height: Math.random() * 24 + 6,
            background: i % 4 === 0 ? COLORS.purpleLight : 
                       i % 4 === 1 ? COLORS.purpleDark : 
                       i % 4 === 2 ? '#6b21a8' : '#c084fc',
            opacity: 0.15,
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
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Control Panel */}
      <div className="flex justify-center mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
        >
          {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
          <span className="text-white font-semibold">
            {isPlaying ? 'Pause Animation' : 'Play Animation'}
          </span>
        </motion.button>
      </div>

      {/* Pipeline Track */}
      <div className="relative h-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-full mb-16 shadow-2xl">
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute h-6 rounded-full shadow-lg"
          style={{ 
            background: `linear-gradient(90deg, ${COLORS.purpleLight}, ${COLORS.purpleDark}, ${COLORS.purpleLight})`,
            backgroundSize: '200% 100%',
            width: `${(activeStage / (stages.length - 1)) * 100}%`
          }}
          animate={{
            backgroundPosition: ['0%', '200%'],
          }}
          transition={{ 
            duration: 2,
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
              scale: activeStage === index ? [1, 1.4, 1] : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.3 }}
              onClick={() => setActiveStage(index)}
            >
              {/* Pulsing Ring Effect */}
              {activeStage === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: stage.color }}
                  animate={{
                    scale: [1, 2],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
              
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${stage.color}, ${COLORS.purpleDark})`,
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stage.icon className="h-6 w-6 text-white z-10" />
                
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
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
            </motion.div>
            
            {/* Stage Label */}
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-white text-lg font-bold whitespace-nowrap">{stage.name}</p>
              <motion.p 
                className="text-purple-300 text-sm font-semibold"
                animate={{ scale: activeStage === index ? [1, 1.2, 1] : 1 }}
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50, rotateY: 180 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          whileHover={{ y: -10, scale: 1.02 }}
          onHoverStart={() => setHoveredCard(index)}
          onHoverEnd={() => setHoveredCard(null)}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="relative group perspective-1000"
        >
          {/* Card Background */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border-2 border-gray-800 hover:border-current transition-all duration-500 h-full shadow-2xl relative overflow-hidden">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(${feature.color} 1px, transparent 1px), linear-gradient(90deg, ${feature.color} 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }} />
            </div>

            {/* Floating Icon */}
            <motion.div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden mx-auto"
              style={{ background: feature.color }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <feature.icon className="h-10 w-10 text-white z-10" />
              
              {/* Particle Burst on Hover */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{ background: feature.color }}
                        initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [1, 0.5, 0],
                          x: Math.cos((i / 8) * Math.PI * 2) * 60,
                          y: Math.sin((i / 8) * Math.PI * 2) * 60,
                        }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
            
            <h4 className="text-white font-bold text-2xl mb-4 text-center">{feature.title}</h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">{feature.description}</p>
            
            {/* Animated Stats Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold mx-auto block w-fit"
              style={{ background: feature.color }}
              whileHover={{ scale: 1.1, y: -2 }}
              animate={{
                boxShadow: [
                  `0 0 20px ${feature.color}40`,
                  `0 0 40px ${feature.color}60`,
                  `0 0 20px ${feature.color}40`,
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-white flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                {feature.stats}
              </span>
            </motion.div>

            {/* Hover Glow Effect */}
            {hoveredCard === index && (
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${feature.color}20, transparent 70%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
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
        duration: 5,
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
      <div className="bg-gradient-to-br from-[#b45ecf]/10 via-[#480056]/15 to-[#19001d]/20 rounded-4xl p-12 border-2 border-[#b45ecf]/30 relative overflow-hidden shadow-2xl">
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
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                marginLeft: `-${100 + i * 75}px`,
                marginTop: `-${100 + i * 75}px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20 + i * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-12">
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <motion.div
                className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                style={{ background: COLORS.purpleLight }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Zap className="h-12 w-12 text-white" />
                
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
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </motion.div>
              
              {/* Floating Particles around icon */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{ background: COLORS.purpleLight }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: Math.cos((i / 6) * Math.PI * 2) * 60,
                    y: Math.sin((i / 6) * Math.PI * 2) * 60,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
            <div className="ml-8">
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-black text-white mb-2"
              >
                <AnimatedGradientText>
                  AI-Powered Prospect Insights
                </AnimatedGradientText>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-purple-300 text-xl"
              >
                Turn data into actionable intelligence
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: index % 2 === 0 ? -5 : 5 }}
                onHoverStart={() => setHoveredInsight(index)}
                onHoverEnd={() => setHoveredInsight(null)}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-black/40 rounded-2xl p-6 border-2 border-white/10 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className="flex items-start space-x-4"
                    animate={{
                      x: hoveredInsight === index ? 10 : 0,
                    }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative"
                      style={{ background: COLORS.purpleLight }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      animate={{
                        boxShadow: hoveredInsight === index ? 
                          `0 0 20px ${COLORS.purpleLight}` : 
                          'none'
                      }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="text-white text-lg leading-relaxed font-medium">{insight}</span>
                  </motion.div>

                  {/* Hover Effect */}
                  {hoveredInsight === index && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
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
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl font-black text-white mb-6"
          >
            <AnimatedGradientText>
              Seamless Multi-Channel Prospecting
            </AnimatedGradientText>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl mb-8 leading-relaxed"
          >
            Prospect management goes beyond just storing contacts. 360Airo enables cross-channel campaigns so you can reach leads via email, LinkedIn, and more — all while maintaining a cohesive, personalized approach.
          </motion.p>
          
          <div className="space-y-6">
            {[
              "Sync all prospect interactions across channels in one dashboard",
              "Ensure consistent messaging for every touchpoint",
              "Track the success of multi-channel outreach for smarter decision-making"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 text-white group cursor-pointer"
              >
                <motion.div
                  className="w-3 h-3 rounded-full flex-shrink-0 relative"
                  style={{ background: COLORS.purpleLight }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: COLORS.purpleLight }}
                    animate={{
                      scale: [1, 2],
                      opacity: [0.7, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
                <span className="text-lg group-hover:text-purple-300 transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          {/* Channel Selector */}
          <div className="grid grid-cols-2 gap-4 mb-8 relative">
            {channels.map((channel, index) => (
              <motion.button
                key={channel.name}
                className={`p-6 rounded-3xl border-2 transition-all duration-500 relative overflow-hidden ${
                  activeChannel === index 
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/25' 
                    : 'border-gray-700 hover:border-purple-400'
                }`}
                style={{
                  background: activeChannel === index ? 
                    `linear-gradient(135deg, ${channel.color}, ${COLORS.purpleDark})` : 
                    'rgba(255,255,255,0.05)'
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveChannel(index)}
              >
                {/* Animated Background Pattern */}
                {activeChannel === index && (
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, ${channel.color} 2px, transparent 2px)`,
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
                
                <channel.icon className={`h-8 w-8 mx-auto mb-3 ${
                  activeChannel === index ? 'text-white' : 'text-gray-400'
                }`} />
                <p className={`text-sm font-bold ${
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
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border-2 border-gray-800 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Connection Lines Animation */}
            <div className="absolute inset-0">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 bg-purple-500"
                  style={{
                    top: '50%',
                    left: `${20 + i * 20}%`,
                    width: '10%',
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative overflow-hidden"
              style={{ background: currentChannel.color }}
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <currentChannel.icon className="h-10 w-10 text-white" />
            </motion.div>
            <p className="text-white text-lg font-semibold mb-2">{currentChannel.description}</p>
            <motion.div
              className="text-purple-300 text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring"
            }}
            className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border-2 border-gray-800 hover:border-purple-500 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${COLORS.purpleLight} 2px, transparent 2px)`,
                backgroundSize: '30px 30px',
              }} />
            </div>

            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden"
              style={{ background: COLORS.purpleLight }}
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.8 }}
            >
              <benefit.icon className="h-8 w-8 text-white" />
              
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
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>
            
            <p className="text-white font-semibold text-lg leading-relaxed text-center group-hover:text-purple-200 transition-colors">
              {benefit.text}
            </p>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent"
              whileHover={{
                borderColor: COLORS.purpleLight,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function ProspectManagementPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, 50]);

  return (
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
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            scale: headerScale,
            opacity: headerOpacity,
            y: headerY
          }}
        >
          <div className="text-center max-w-6xl mx-auto py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="inline-block"
              >
                <div 
                  className="px-8 py-4 rounded-2xl shadow-2xl border-2 backdrop-blur-sm relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
                    borderColor: COLORS.purpleLight
                  }}
                >
                  <motion.span
                    className="text-white font-bold text-lg uppercase tracking-wider flex items-center relative z-10"
                    animate={{
                      textShadow: [
                        '0 0 0px rgba(255,255,255,0)',
                        '0 0 10px rgba(255,255,255,0.5)',
                        '0 0 0px rgba(255,255,255,0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Users className="h-5 w-5 mr-3" />
                    Prospect Management
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
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight"
              >
                <span className="block">
                  <AnimatedGradientText>
                    Organize, Track,
                  </AnimatedGradientText>
                </span>
                <motion.span
                  className="block"
                  style={{ color: COLORS.purpleLight }}
                  animate={{
                    textShadow: [
                      `0 0 20px ${COLORS.purpleLight}`,
                      `0 0 40px ${COLORS.purpleLight}`,
                      `0 0 60px ${COLORS.purpleLight}`,
                      `0 0 20px ${COLORS.purpleLight}`,
                    ],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  and Convert Leads
                </motion.span>
                <span className="block">
                  <AnimatedGradientText>
                    Efficiently
                  </AnimatedGradientText>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-3xl text-white/80 font-light leading-relaxed"
              >
                Centralize All Your Leads in One Intelligent Platform
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="space-y-6 max-w-4xl mx-auto"
              >
                <p className="text-xl text-white/70 leading-relaxed">
                  Managing prospects shouldn't feel chaotic. 360Airo's prospect management tools allow you to consolidate, organize, and track all your leads in a single, intuitive dashboard.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  From first contact to closed deal, every interaction is stored, monitored, and actionable. Keep your email sequences, LinkedIn outreach, and multi-channel campaigns organized for smarter follow-ups and higher conversions.
                </p>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="pt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button 
                    size="lg" 
                    className="px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl border-0 relative overflow-hidden group"
                    style={{ background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})` }}
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
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    
                    {/* Sparkle Particles */}
                    <AnimatePresence>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-white"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </AnimatePresence>

                    <span className="relative z-10 flex items-center">
                      <Rocket className="mr-4 h-8 w-8" />
                      Start Managing Prospects Smarter
                      <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-3" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Pipeline Visualization Section */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black text-white mb-8"
            >
              <AnimatedGradientText>
                Complete Visibility Into Your Pipeline
              </AnimatedGradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              Gain full insight into every lead's journey with prospect management. Your team can focus on closing deals while 360Airo keeps every detail organized.
            </motion.p>
          </motion.div>

          <PipelineVisualization />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black text-white mb-8"
            >
              <AnimatedGradientText>
                Powerful Features for Modern Prospecting
              </AnimatedGradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/70 max-w-4xl mx-auto"
            >
              Everything you need to manage prospects efficiently and close more deals
            </motion.p>
          </motion.div>

          <FeatureCards />
        </div>
      </section>

      {/* Enhanced AI Insights Section */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <AIInsightsSection />
        </div>
      </section>

      {/* Enhanced Multi-Channel Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <MultiChannelSection />
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black text-white mb-8"
            >
              <AnimatedGradientText>
                Why Choose 360Airo for Prospect Management
              </AnimatedGradientText>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
            >
              360Airo's prospect management system ensures no lead falls through the cracks, helping your team focus on what matters — building relationships and closing deals.
            </motion.p>
          </motion.div>

          <BenefitsGrid />

          {/* Enhanced Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <Button 
                size="lg" 
                className="px-20 py-10 text-3xl font-bold rounded-3xl shadow-2xl border-0 relative overflow-hidden group"
                style={{ background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})` }}
              >
                {/* Animated Gradient */}
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
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                {/* Floating Stars */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%',
                    }}
                  >
                    <Star className="h-4 w-4 text-white" />
                  </motion.div>
                ))}

                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-6 h-10 w-10" />
                  Transform Your Prospecting Today
                  <ArrowRight className="ml-6 h-10 w-10 transition-transform group-hover:translate-x-3" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}