'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  PlayCircle,
  Send,
  GitMerge,
  RefreshCw,
  Bell,
  Calendar,
  PieChart,
  Eye,
  FileText,
  Layers,
  Cpu as CpuIcon,
  Smartphone,
  Monitor,
  Server,
  Database,
  Cloud,
  Wifi,
  Activity,
  Plus,
  Minus
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

// FAQ Component
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const faqs = [
    {
      question: "What is AI email automation, and how does it work for email marketing?",
      answer: "AI email automation uses intelligent systems to create, schedule, and optimize email campaigns. It automates repetitive tasks while adjusting messaging, timing, and follow-ups based on engagement and campaign performance."
    },
    {
      question: "How does AI email automation improve email marketing performance?",
      answer: "AI email automation improves performance by increasing consistency, optimizing send times, and reducing manual effort. It helps teams focus on strategy while emails are sent and adjusted based on real engagement data."
    },
    {
      question: "What types of emails can be automated using AI email automation?",
      answer: "AI email automation can handle cold outreach emails, follow-ups, nurturing sequences, re-engagement campaigns, and transactional messages, ensuring communication remains timely and aligned with campaign objectives."
    },
    {
      question: "Can AI-generated emails be customized to match brand voice and audience?",
      answer: "Yes. AI-generated emails can be customized for tone, structure, and messaging style, allowing teams to maintain brand consistency while adapting content to different audiences and outreach goals."
    },
    {
      question: "Does AI email automation analyze user behavior to send smarter emails?",
      answer: "Yes. AI email automation analyzes opens, clicks, replies, and timing patterns to adjust follow-ups and messaging, helping teams send more relevant emails instead of relying on fixed, static sequences."
    },
    {
      question: "How does AI email automation impact inbox placement and deliverability?",
      answer: "AI email automation improves deliverability by supporting controlled sending, consistent engagement, and smarter sequencing. When combined with proper domain warmup, it helps protect sender reputation and inbox placement."
    },
    {
      question: "Is customer data safe when using AI to automate emails?",
      answer: "Yes, when using platforms with secure data handling practices. 360Airo follows strict data protection standards to ensure customer and prospect data remains private and securely managed."
    },
    {
      question: "How do you set up AI email automation for your business?",
      answer: "Setting up AI email automation involves connecting email accounts, defining campaign goals, creating sequences, and enabling automation rules. Once configured, the system manages outreach while teams monitor performance."
    },
    {
      question: "How does 360Airo's AI email automation differ from other automation tools?",
      answer: "360Airo combines AI email automation with deliverability protection, multichannel coordination, and centralized analytics, offering a unified system rather than disconnected tools for email, LinkedIn, and outreach management."
    },
    {
      question: "What AI automation features are included in 360Airo's pricing plans?",
      answer: "360Airo's pricing plans include AI-powered email generation, automated sequences, engagement-based follow-ups, analytics, and multichannel coordination, allowing teams to scale outreach efficiently without adding operational complexity."
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
          Get answers to common questions about AI email automation with 360Airo
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
                  style={{ background: COLORS.primary }}
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
        
      </motion.div>
    </div>
  );
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

// AI Email Automation Hero Section
const AIEmailAutomationHero = () => {
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

        {/* Gradient Orbs */}
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
          <span className={`text-white/80 font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>AI Email Automation Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.1 }}
          className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-6xl'} font-bold text-white mb-4 lg:mb-6`}
        >
          AI Email Automation —
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
          Let automation handle the repetitive work so you can focus on strategy
        </motion.h2>

        {/* Description */}
        <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto mb-8 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.6, delay: 0.5 }}
            className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/80 leading-relaxed`}
          >
            Every successful campaign depends on consistent execution, and 360Airo's AI email automation engine makes that effortless. From message creation to lead nurturing, campaign routing, and performance tracking, our refined AI email automation platform streamlines what slows teams down while elevating the quality of every conversation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.6, delay: 0.7 }}
            className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/70 leading-relaxed`}
          >
            Whether you're running cold campaigns, <a href="/features/linkedin-automation" className="text-[#3B82F6] hover:text-white transition-colors">LinkedIn Automation</a>, or Multi-Channel outreach, your workflows become faster, cleaner, and more strategic.
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
                Automate with Intelligence →
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
export default function AIEmailAutomationPage() {
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

  const intelligentWorkflowFeatures = [
    "Automate campaign scheduling, follow-ups, and data syncing",
    "Activate behavior-based triggers such as open, reply, or no response",
    "Use insights from Email Sequences to refine performance continuously",
    "Run cross-channel workflows with Multi-Channel automation",
    "Automate LinkedIn messaging using LinkedIn Automation"
  ];

  const automationGoalsFeatures = [
    "Improve follow-up precision with email response AI",
    "Strengthen campaign timing and message relevance",
    "Identify performance trends for smarter decisions",
    "Enhance results continuously across long-term outreach cycles"
  ];

  const personalizationFeatures = [
    "Craft high-performing content with AI email marketing tools",
    "Deliver timing-optimized follow-ups across every stage",
    "Build context-aware sequences that adapt to recipient behavior",
    "Maintain consistency across all <a href='/features/multi-channel-platform' class='text-[#3B82F6] hover:text-white transition-colors'>Multi-Channel</a> touchpoints"
  ];

  const emailAutomationFeatures = [
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation for Every Team",
      description: "360Airo's AI email automation platform is designed to simplify and coordinate complex outreach processes across email and LinkedIn.",
      features: intelligentWorkflowFeatures,
      note: "No more manual tracking or scattered spreadsheets — automation keeps your entire system aligned."
    },
    {
      icon: Target,
      title: "Automation That Understands Your Goals",
      description: "360Airo enhances more than just delivery—it optimizes outcomes. Through engagement analysis and performance insights, the system supports your goals across email deliverability, lead conversion, and sustained sender reputation.",
      features: automationGoalsFeatures,
      note: "Your campaigns improve automatically as the system refines every touchpoint."
    },
    {
      icon: Brain,
      title: "Personalization at Machine Speed",
      description: "360Airo blends automation with tailored communication. Its advanced personalization engine helps you create messages that feel natural, relevant, and individualized without slowing your workflow.",
      features: personalizationFeatures,
      note: "Your outreach becomes more engaging, increasing both replies and conversions."
    }
  ];

  const whyChooseFeatures = [
    "End-to-end automation from setup to reporting",
    "Performance improvement driven by AI in marketing automation",
    "Seamless integrations across email, LinkedIn, and CRM tools",
    "Scalable workflows for startups, agencies, and enterprise teams",
    "Real-time visibility into all campaign metrics"
  ];

  return (
    <>
      <Head>
        <title>AI Email Automation — Work Smarter, Scale Faster | 360Airo</title>
        <meta 
          name="description" 
          content="Let automation handle the repetitive work so you can focus on strategy. 360Airo's AI email automation engine makes campaign execution effortless." 
        />
        <meta 
          name="keywords" 
          content="AI email automation, email automation, workflow automation, intelligent automation, campaign automation, multi-channel automation, 360Airo, outreach automation" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/ai-email-automation" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Email Automation — Work Smarter, Scale Faster | 360Airo" />
        <meta property="og:description" content="Let automation handle the repetitive work so you can focus on strategy. 360Airo's AI email automation engine makes campaign execution effortless." />
        <meta property="og:url" content="https://360airo.com/features/ai-email-automation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-ai-email-automation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Email Automation — Work Smarter, Scale Faster | 360Airo" />
        <meta name="twitter:description" content="360Airo's AI email automation engine makes campaign execution effortless. Let automation handle the repetitive work so you can focus on strategy." />
        <meta name="twitter:image" content="https://360airo.com/twitter-ai-email-automation.jpg" />
        
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
              "name": "360Airo AI Email Automation Platform",
              "description": "Let automation handle the repetitive work so you can focus on strategy. 360Airo's AI email automation engine makes campaign execution effortless.",
              "url": "https://360airo.com/features/ai-email-automation",
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
                "Intelligent workflow automation",
                "Behavior-based triggers",
                "Cross-channel automation",
                "AI-powered personalization",
                "Performance optimization",
                "Real-time campaign tracking"
              ]
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/ai-email-automation">360Airo AI Email Automation</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* AI Email Automation Hero Section */}
        <AIEmailAutomationHero />

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
                How Our AI Email Automation Works
              </h2>
              <p className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/70 max-w-2xl mx-auto`}>
                A seamless workflow that transforms your email outreach from manual to automated
              </p>
            </motion.div>
            <WorkflowVisualization />
          </div>
        </section>

        {/* Intelligent Workflow Automation Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Workflow className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Intelligent Workflow Automation for Every Team
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  360Airo's AI email automation platform is designed to simplify and coordinate complex outreach processes across email and LinkedIn.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#ad60f8]/20 to-[#3B82F6]/20 p-4 rounded-xl border border-[#ad60f8]/30">
                    <ul className="space-y-2 text-white/80 text-sm lg:text-base">
                      {intelligentWorkflowFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#ad60f8] mr-2 mt-0.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                    <p className="text-white font-medium text-sm lg:text-base mt-4">
                      No more manual tracking or scattered spreadsheets — automation keeps your entire system aligned.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <AIAutomationDemo />
              </div>
            </motion.div>

            {/* Automation That Understands Your Goals */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
            >
              <div className="lg:order-2 space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#3B82F6] to-[#ad60f8] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Target className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Automation That Understands Your Goals
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  360Airo enhances more than just delivery—it optimizes outcomes. Through engagement analysis and performance insights, the system supports your goals across email deliverability, lead conversion, and sustained sender reputation.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {automationGoalsFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <div className="text-white font-medium text-sm mb-1">{feature.split(':')[0]}</div>
                      <div className="text-white/60 text-xs">{feature.split(':')[1] || feature}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#ad60f8]/10 p-4 rounded-xl border border-[#3B82F6]/20">
                  <p className="text-white/80 text-sm lg:text-base">
                    Your campaigns improve automatically as the system refines every touchpoint.
                  </p>
                </div>
              </div>

              <div className="lg:order-1 relative">
                <div className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#3B82F6]/40 p-6 lg:p-8 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 bg-[#3B82F6]/20 px-3 py-1.5 rounded-lg mb-4">
                      <Activity className="h-4 w-4 text-[#3B82F6]" />
                      <span className="text-[#3B82F6] text-sm font-medium">Goal Tracking</span>
                    </div>
                    <h4 className="text-white text-lg font-bold mb-2">Campaign Performance Dashboard</h4>
                    <p className="text-white/60 text-sm">Real-time optimization metrics</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { metric: "Email Deliverability", value: "98.5%", trend: "+2.3%" },
                      { metric: "Lead Conversion", value: "24.7%", trend: "+5.1%" },
                      { metric: "Sender Reputation", value: "Excellent", trend: "+8.2%" },
                      { metric: "Engagement Rate", value: "42.3%", trend: "+3.7%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="text-white text-sm">{item.metric}</div>
                        <div className="flex items-center space-x-2">
                          <div className="text-white font-bold">{item.value}</div>
                          <div className="text-green-400 text-xs">↑ {item.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personalization at Machine Speed */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#ad60f8] to-[#3B82F6] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Brain className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Personalization at Machine Speed
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  360Airo blends automation with tailored communication. Its advanced personalization engine helps you create messages that feel natural, relevant, and individualized without slowing your workflow.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalizationFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <div className="text-white font-medium text-sm mb-1" dangerouslySetInnerHTML={{ __html: feature.split('—')[0] }} />
                      <div className="text-white/60 text-xs" dangerouslySetInnerHTML={{ __html: feature.split('—')[1] || feature }} />
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#ad60f8]/10 to-[#3B82F6]/10 p-4 rounded-xl border border-[#ad60f8]/20">
                  <p className="text-white font-semibold text-center text-sm lg:text-base">
                    Your outreach becomes more engaging, increasing both replies and conversions.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#ad60f8]/40 p-6 lg:p-8 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 bg-[#ad60f8]/20 px-3 py-1.5 rounded-lg mb-4">
                      <Brain className="h-4 w-4 text-[#ad60f8]" />
                      <span className="text-[#ad60f8] text-sm font-medium">AI Personalization</span>
                    </div>
                    <h4 className="text-white text-lg font-bold mb-2">Personalization Engine</h4>
                    <p className="text-white/60 text-sm">Real-time message optimization</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-xs text-white/60 mb-2">Generated Personalized Message</div>
                      <div className="text-white text-sm leading-relaxed">
                        "Hi [Name], I noticed your recent work on [Project] and was impressed by your approach to [Specific Detail]. Our AI automation can help streamline similar processes..."
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-[#ad60f8]/10 p-2 rounded">
                        <div className="text-xs text-white/60">Personalization</div>
                        <div className="text-white font-bold text-sm">94%</div>
                      </div>
                      <div className="bg-[#3B82F6]/10 p-2 rounded">
                        <div className="text-xs text-white/60">Relevance</div>
                        <div className="text-white font-bold text-sm">96%</div>
                      </div>
                      <div className="bg-white/10 p-2 rounded">
                        <div className="text-xs text-white/60">Speed</div>
                        <div className="text-white font-bold text-sm">0.8s</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose 360Airo for AI Email Automation */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-3 lg:mb-4`}>
                Why Choose 360Airo for AI Email Automation
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto`}>
                With 360Airo's AI email automation, your outreach becomes faster, more precise, and consistently effective.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {whyChooseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: isMobile ? 0.5 : 0.6, delay: index * (isMobile ? 0.08 : 0.1) }}
                  whileHover={{ y: isMobile ? -2 : -5, scale: isMobile ? 1.01 : 1.02 }}
                  className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl border border-[#ad60f8]/30 p-4 lg:p-6 hover:border-[#ad60f8]/50 transition-all duration-300"
                >
                  <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-gradient-to-br from-[#ad60f8] to-[#3B82F6] ${isMobile ? 'rounded-lg' : 'rounded-xl'} flex items-center justify-center mb-3`}>
                    <CheckCircle2 className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-white`} />
                  </div>
                  <h4 className={`text-white font-bold mb-2 ${isMobile ? 'text-sm' : ''}`}>{feature}</h4>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }} 
                whileTap={{ scale: 0.95 }} 
                className="group relative overflow-hidden rounded-xl"
                onClick={handleCTAClick}
              >
                <Button 
                  size="lg" 
                  className="relative bg-white text-black hover:bg-white/90 px-8 py-4 lg:px-10 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Automate with Intelligence →
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-white/2 via-[#ad60f8]/10 to-white/2">
          <div className="max-w-6xl mx-auto">
            <FAQSection />
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
                Ready to Transform Your Email Workflow?
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto leading-relaxed`}>
                Join thousands of teams using 360Airo's AI email automation to work smarter, scale faster, and achieve better results.
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
