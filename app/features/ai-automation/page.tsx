'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';

import {
  Brain,
  Zap,
  Workflow,
  Target,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Sparkles,
  Cpu,
  GitBranch,
  Rocket,
  Shield,
  Users,
  MessageCircle,
  Mail,
  TrendingUp,
  Lightbulb,
  Settings,
  PlayCircle
} from 'lucide-react';

// Color constants
const COLORS = {
  primary: '#ad60f8', // Purple
  secondary: '#3B82F6', // Blue
  accent: '#FFFFFF', // White
  dark: '#000000', // Black
  light: '#1A1A1A', // Dark gray
  white: '#FFFFFF'
};

// AI Brain Animation Component - Mobile optimized
const AIBrainAnimation = () => {
  const [pulse, setPulse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, isMobile ? 1500 : 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} mx-auto`}>
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-[#ad60f8]/40 rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: isMobile ? 2 : 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Middle Ring */}
      <motion.div
        className="absolute inset-4 border-2 border-[#3B82F6]/50 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: isMobile ? 3 : 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner Brain */}
      <motion.div
        className={`absolute ${isMobile ? 'inset-6' : 'inset-8'} bg-gradient-to-br from-[#ad60f8] to-[#3B82F6] ${isMobile ? 'rounded-xl' : 'rounded-2xl'} flex items-center justify-center`}
        animate={{
          scale: pulse ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: isMobile ? 1.5 : 2,
          ease: "easeInOut"
        }}
      >
        <Brain className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} text-white`} />
      </motion.div>

      {/* Floating Particles - Reduced on mobile */}
      {[...Array(isMobile ? 4 : 6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            x: [0, Math.cos(i * 60) * (isMobile ? 15 : 20), 0],
            y: [0, Math.sin(i * 60) * (isMobile ? 15 : 20), 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: isMobile ? 2 : 3,
            repeat: Infinity,
            delay: i * (isMobile ? 0.4 : 0.5),
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -3,
            marginTop: -3,
          }}
        />
      ))}
    </div>
  );
};

// Workflow Visualization Component - Mobile optimized
const WorkflowVisualization = () => {
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
    { icon: Brain, title: "AI Analysis", color: "from-[#ad60f8] to-[#3B82F6]" },
    { icon: Workflow, title: "Automation", color: "from-[#3B82F6] to-[#ad60f8]" },
    { icon: Target, title: "Optimization", color: "from-[#ad60f8] to-[#3B82F6]" },
    { icon: BarChart3, title: "Results", color: "from-[#3B82F6] to-[#ad60f8]" }
  ];

  return (
    <div className="relative py-8 lg:py-12">
      {/* Connection Line - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#ad60f8] via-[#3B82F6] to-[#ad60f8] transform -translate-y-1/2" />
      )}
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * (isMobile ? 0.15 : 0.2) }}
            className="text-center"
          >
            <motion.div
              className={`${isMobile ? 'w-12 h-12' : 'w-20 h-20'} bg-gradient-to-br ${step.color} ${isMobile ? 'rounded-lg' : 'rounded-2xl'} flex items-center justify-center mx-auto mb-2 lg:mb-4 shadow-lg`}
              whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
            >
              <step.icon className={`${isMobile ? 'h-5 w-5' : 'h-8 w-8'} text-white`} />
            </motion.div>
            <h4 className={`text-white font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>{step.title}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Feature Card Component - Mobile optimized
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
      initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: isMobile ? -2 : -5, scale: isMobile ? 1.01 : 1.02 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: isMobile ? 0.5 : 0.6, delay }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#ad60f8]/30 p-4 lg:p-6 hover:border-[#ad60f8]/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#ad60f8]/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-[#ad60f8] to-[#3B82F6] ${isMobile ? 'rounded-lg' : 'rounded-xl'} flex items-center justify-center mb-3 lg:mb-4`}>
          <Icon className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white`} />
        </div>
        
        <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white mb-2 lg:mb-3`}>{title}</h3>
        <p className={`text-white/70 mb-3 lg:mb-4 leading-relaxed ${isMobile ? 'text-sm' : ''}`}>{description}</p>
        
        <div className="space-y-1 lg:space-y-2">
          {features.map((feature: string, index: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: isMobile ? -8 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: delay + index * (isMobile ? 0.08 : 0.1) }}
              className={`flex items-center space-x-2 text-white/80 ${isMobile ? 'text-xs' : 'text-sm'}`}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: isMobile ? 0.5 : 0.6, delay: delay + (isMobile ? 0.3 : 0.4) }}
            className="text-[#ad60f8] text-xs lg:text-sm mt-3 lg:mt-4 italic"
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

// AI Automation Demo Component - Mobile optimized
const AIAutomationDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const demos = [
    {
      title: "Workflow Automation",
      tasks: [
        { name: "Campaign Scheduling", status: "automated", progress: 100 },
        { name: "Lead Follow-ups", status: "automated", progress: 100 },
        { name: "Data Syncing", status: "automated", progress: 100 },
        { name: "Performance Tracking", status: "active", progress: 85 }
      ]
    },
    {
      title: "AI Optimization",
      tasks: [
        { name: "Content Personalization", status: "learning", progress: 92 },
        { name: "Send Time Optimization", status: "optimizing", progress: 78 },
        { name: "A/B Testing", status: "analyzing", progress: 65 },
        { name: "Performance Analysis", status: "complete", progress: 100 }
      ]
    }
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#ad60f8]/40 p-4 lg:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white`}>AI Automation Dashboard</h3>
        <div className="flex space-x-1 lg:space-x-2">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                activeDemo === index ? 'bg-[#ad60f8] scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 lg:space-y-4">
        {demos[activeDemo].tasks.map((task, index) => (
          <motion.div
            key={task.name}
            initial={{ opacity: 0, x: isMobile ? -15 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * (isMobile ? 0.08 : 0.1) }}
            className="space-y-1 lg:space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className={`text-white ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>{task.name}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                task.status === 'automated' ? 'bg-[#ad60f8]/20 text-[#ad60f8]' :
                task.status === 'learning' ? 'bg-[#3B82F6]/20 text-[#3B82F6]' :
                task.status === 'optimizing' ? 'bg-white/20 text-white' :
                'bg-[#ad60f8]/20 text-[#ad60f8]'
              }`}>
                {task.status}
              </span>
            </div>
            <div className="w-full bg-black rounded-full h-1.5 lg:h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${task.progress}%` }}
                transition={{ duration: isMobile ? 0.8 : 1, delay: index * (isMobile ? 0.15 : 0.2) }}
                className="h-full bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isMobile ? 0.6 : 0.8 }}
        className="flex items-center justify-center mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-[#ad60f8]/30"
      >
        <div className="flex items-center space-x-2 text-[#ad60f8] text-xs lg:text-sm">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: isMobile ? 1.5 : 2, repeat: Infinity }}
            className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#ad60f8] rounded-full"
          />
          <span>AI System Active</span>
        </div>
      </motion.div>
    </div>
  );
};

// Benefits Grid Component - Mobile optimized
const BenefitsGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: "End-to-End Automation",
      description: "From campaign setup to reporting — powered by AI"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "The system evolves with your performance data"
    },
    {
      icon: GitBranch,
      title: "Seamless Integrations",
      description: "Connects with CRMs, LinkedIn, and email platforms"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Works for startups, agencies, and enterprises alike"
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      description: "Track everything that matters in one clean dashboard"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: isMobile ? 0.5 : 0.6, delay: index * (isMobile ? 0.08 : 0.1) }}
          whileHover={{ y: isMobile ? -2 : -5, scale: isMobile ? 1.01 : 1.02 }}
          className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#ad60f8]/30 p-4 lg:p-6 hover:border-[#ad60f8]/50 transition-all duration-300"
        >
          <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-[#ad60f8] to-[#3B82F6] ${isMobile ? 'rounded-lg' : 'rounded-xl'} flex items-center justify-center mb-3 lg:mb-4`}>
            <benefit.icon className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white`} />
          </div>
          <h4 className={`text-white font-bold mb-2 ${isMobile ? 'text-sm' : ''}`}>{benefit.title}</h4>
          <p className={`text-white/70 ${isMobile ? 'text-xs' : 'text-sm'} leading-relaxed`}>{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Hero Section Component - Mobile optimized
const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 lg:pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating AI Elements - Reduced on mobile */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
              y: Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [
                Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
                Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100),
                Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
              ],
              y: [
                Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
                Math.random() * (isMobile ? 100 : 200) - (isMobile ? 50 : 100),
                Math.random() * (isMobile ? 50 : 100) - (isMobile ? 25 : 50),
              ],
            }}
            transition={{
              duration: isMobile ? 10 + Math.random() * 5 : 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <div className={`${isMobile ? 'w-2 h-2' : 'w-4 h-4'} ${
              i % 3 === 0 ? 'bg-[#ad60f8]/30 rounded-full' :
              i % 3 === 1 ? 'bg-[#3B82F6]/30' :
              'bg-white/30 rounded-lg'
            }`} />
          </motion.div>
        ))}

        {/* Gradient Orbs - Smaller on mobile */}
        <motion.div
          animate={{
            x: [0, isMobile ? 20 : 40, 0],
            y: [0, isMobile ? -15 : -30, 0],
          }}
          transition={{
            duration: isMobile ? 15 : 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-20 left-20 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-[#ad60f8]/10 rounded-full blur-2xl lg:blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, isMobile ? -30 : -60, 0],
            y: [0, isMobile ? 20 : 40, 0],
          }}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-20 right-20 ${isMobile ? 'w-40 h-40' : 'w-80 h-80'} bg-[#3B82F6]/10 rounded-full blur-2xl lg:blur-3xl`}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* AI Brain Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, type: "spring" }}
          className="mb-6 lg:mb-8"
        >
          <AIBrainAnimation />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.6 }}
          className="inline-flex items-center space-x-2 lg:space-x-3 bg-[#1A1A1A] backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 py-2 lg:px-4 lg:py-3 border border-[#ad60f8]/40 mb-6 lg:mb-8"
        >
          <div className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] rounded-full flex items-center justify-center`}>
            <Zap className={`${isMobile ? 'h-2 w-2' : 'h-3 w-3'} text-white`} />
          </div>
          <span className={`text-white/80 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>AI Automation Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.1 }}
          className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-6xl'} font-bold text-white mb-4 lg:mb-6`}
        >
          AI Automation
          <br />
          <span className="bg-gradient-to-r from-[#ad60f8] via-[#3B82F6] to-white bg-clip-text text-transparent">
            Work Smarter, Scale Faster
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.3 }}
          className={`${isMobile ? 'text-base' : 'text-xl md:text-2xl'} text-[#ad60f8] font-semibold mb-6 lg:mb-8 leading-relaxed`}
        >
          Let AI Handle the Repetitive So You Can Focus on Strategy
        </motion.h2>

        {/* Description */}
        <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto mb-8 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.6, delay: 0.5 }}
            className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/80 leading-relaxed`}
          >
            Every successful campaign starts with smart automation — and 360Airo's AI automation platform makes that effortless. From content creation and lead nurturing to campaign tracking and optimization, our intelligent system automates what slows you down while enhancing what makes your outreach stand out.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.6, delay: 0.7 }}
            className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/70 leading-relaxed`}
          >
            Whether you're running cold email campaigns, LinkedIn outreach, or multi-channel marketing, 360Airo's AI ensures every task is executed faster, cleaner, and with precision.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full sm:w-auto"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] hover:from-[#ad60f8]/90 hover:to-[#3B82F6]/90 px-6 py-2 lg:px-8 lg:py-3 font-semibold rounded-xl border-0 shadow-lg shadow-[#ad60f8]/30 relative overflow-hidden group w-full sm:w-auto"
              onClick={() => window.open('https://app.360airo.com/', '_blank')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: isMobile ? 1.5 : 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <span className="relative z-10 flex items-center text-sm lg:text-base">
                Automate with Intelligence
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: isMobile ? 1.2 : 1.5, repeat: Infinity }}
                >
                  <ArrowRight className={`ml-2 ${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Button click handler
const handleCTAClick = () => {
  window.open('https://app.360airo.com/', '_blank');
};

// Main Component - Mobile optimized
export default function AIAutomationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation for Every Team",
      description: "360Airo's AI automation tools are built to simplify complex workflows.",
      features: [
        "Automate campaign scheduling, lead follow-ups, and data syncing",
        "Set smart triggers for actions like 'open,' 'reply,' or 'no response'",
        "Use AI-driven analytics to refine performance automatically",
        "Integrate with CRMs and email systems seamlessly"
      ],
      note: "No more manual tracking or spreadsheet chaos — the system learns, adapts, and scales with your business."
    },
    {
      icon: Brain,
      title: "AI That Understands Your Goals",
      description: "Unlike traditional automation tools, 360Airo's system doesn't just execute — it thinks. It learns from your campaign patterns, analyzes engagement behavior, and continuously optimizes your next move.",
      features: [
        "Machine learning from campaign patterns",
        "Engagement behavior analysis",
        "Continuous optimization algorithms",
        "Goal-oriented automation strategies"
      ],
      note: "Whether you want to improve email deliverability, boost lead conversion rates, or strengthen sender reputation, the AI works silently in the background to ensure every campaign performs better than the last."
    },
    {
      icon: MessageCircle,
      title: "Personalization at Machine Speed",
      description: "With 360Airo, you get the best of both worlds — automation with a human touch. Our AI personalization engine crafts messages that sound natural, relevant, and context-aware.",
      features: [
        "Natural language message generation",
        "Context-aware personalization",
        "Dynamic tone and timing adaptation",
        "Recipient-specific optimization"
      ],
      note: "From subject lines to follow-ups, the tone, timing, and delivery adapt dynamically to each recipient, ensuring higher engagement and better outcomes."
    }
  ];

  return (
    <>
      <Head>
        <title>AI Automation Platform | 360Airo - Work Smarter, Scale Faster</title>
        <meta 
          name="description" 
          content="360Airo's AI automation platform automates your workflow from campaign setup to reporting. Let AI handle repetitive tasks while you focus on strategy and growth." 
        />
        <meta 
          name="keywords" 
          content="AI automation, workflow automation, intelligent automation, campaign automation, lead nurturing, multi-channel marketing, 360Airo" 
        />
        
        {/* Canonical URL - This tells search engines this is the original page */}
        <link rel="canonical" href="https://360airo.com/app/features/ai-automation" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="AI Automation Platform | 360Airo - Work Smarter, Scale Faster" />
        <meta property="og:description" content="360Airo's AI automation platform automates your workflow from campaign setup to reporting. Let AI handle repetitive tasks while you focus on strategy and growth." />
        <meta property="og:url" content="https://360airo.com/app/features/ai-automation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-ai-automation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Platform | 360Airo" />
        <meta name="twitter:description" content="Let AI handle the repetitive so you can focus on strategy. 360Airo's intelligent automation platform helps you work smarter and scale faster." />
        <meta name="twitter:image" content="https://360airo.com/twitter-ai-automation.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ad60f8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo AI Automation Platform",
              "description": "360Airo's AI automation platform automates your workflow from campaign setup to reporting. Let AI handle repetitive tasks while you focus on strategy and growth.",
              "url": "https://360airo.com/app/features/ai-automation",
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
        <a rel="canonical" href="https://360airo.com/app/features/ai-automation">360Airo AI Automation</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Workflow Visualization */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-3 lg:mb-4`}>
                How Our AI Automation Works
              </h2>
              <p className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/70 max-w-2xl mx-auto`}>
                A seamless workflow that transforms your outreach from manual to magical
              </p>
            </motion.div>
            <WorkflowVisualization />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-center mb-12 lg:mb-16"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-3 lg:mb-4`}>
                Powerful AI Automation Features
              </h2>
              <p className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/70 max-w-3xl mx-auto`}>
                Discover how our intelligent automation can transform your workflow and drive better results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
              <AIAutomationDemo />
              <div className="space-y-6 lg:space-y-8">
                {features.slice(0, 2).map((feature, index) => (
                  <FeatureCard 
                    key={feature.title}
                    {...feature}
                    delay={index * (isMobile ? 0.15 : 0.2)}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              <FeatureCard 
                {...features[2]}
                delay={isMobile ? 0.3 : 0.4}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-3 lg:mb-4`}>
                Why Choose 360Airo for AI Automation
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto`}>
                With 360Airo's AI automation, your outreach becomes faster, smarter, and more human than ever before.
              </p>
            </motion.div>

            <BenefitsGrid />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 lg:space-y-6"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white`}>
                Ready to Transform Your Workflow?
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto leading-relaxed`}>
                Join thousands of teams using 360Airo's AI automation to work smarter, scale faster, and achieve better results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center pt-4 lg:pt-6">
                <motion.div
                  whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] hover:from-[#ad60f8]/90 hover:to-[#3B82F6]/90 px-6 py-2 lg:px-8 lg:py-3 ${isMobile ? 'text-sm' : 'text-lg'} font-semibold rounded-xl shadow-lg shadow-[#ad60f8]/30 w-full sm:w-auto`}
                    onClick={handleCTAClick}
                  >
                    Start Automating Today
                    <ArrowRight className={`ml-2 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}