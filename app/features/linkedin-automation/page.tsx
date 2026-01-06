'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

import {
  Linkedin,
  MessageCircle,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Sparkles,
  Zap,
  Rocket,
  Shield,
  TrendingUp,
  Lightbulb,
  PlayCircle,
  Send,
  UserCheck,
  ChartBar,
  Network,
  Mail,
  Calendar,
  Filter,
  Search,
  ThumbsUp,
  Heart,
  Eye,
  Flame,
  Inbox,
  ThermometerSun,
  Award,
  Plus,
  Minus
} from 'lucide-react';

// Color constants
const COLORS = {
  primary: '#0077B5', // LinkedIn Blue
  secondary: '#ad60f8', // Purple
  accent: '#FFFFFF', // White
  dark: '#000000', // Black
  light: '#1A1A1A', // Dark gray
  white: '#FFFFFF'
};

// FAQ Component
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is LinkedIn automation, and how does it work for outreach?",
      answer: "LinkedIn automation helps teams streamline connection requests, follow-ups, and messaging at scale. It schedules and manages outreach activities while maintaining consistency, allowing users to engage more prospects without manual, repetitive effort."
    },
    {
      question: "How do you set up LinkedIn automation safely with 360Airo?",
      answer: "360Airo sets up LinkedIn automation using controlled activity limits, smart scheduling, and human-like interaction patterns. This ensures outreach aligns with LinkedIn usage guidelines while keeping campaigns consistent and manageable."
    },
    {
      question: "Is LinkedIn automation safe to use without risking account restrictions?",
      answer: "Yes, when used responsibly. Safe LinkedIn automation relies on pacing, daily limits, and realistic workflows. Tools like 360Airo are designed to prevent aggressive behavior that typically leads to account restrictions."
    },
    {
      question: "Can LinkedIn connection requests and follow-ups be personalized at scale?",
      answer: "Yes. LinkedIn automation allows personalization using prospect details, campaign context, and engagement history, enabling teams to send relevant connection requests and follow-ups without relying on generic, repetitive messages."
    },
    {
      question: "Can multiple LinkedIn accounts be managed using one automation tool?",
      answer: "Yes. Teams and agencies can manage multiple LinkedIn accounts from a single platform, maintaining visibility, performance tracking, and campaign control without switching between logins or tools."
    },
    {
      question: "How does LinkedIn automation integrate with email campaigns, CRM, and sequences?",
      answer: "LinkedIn automation integrates with email campaigns, CRM, and sequences by syncing prospect data, engagement history, and replies, ensuring outreach remains coordinated and context-aware across all communication channels."
    },
    {
      question: "Are there free LinkedIn automation tools, and what are their limitations?",
      answer: "Free LinkedIn automation tools exist, but they often lack safety controls, analytics, integrations, and scalability. They can increase the risk of account restrictions and provide limited visibility into outreach performance."
    },
    {
      question: "What results can businesses expect from LinkedIn automation tools?",
      answer: "When used correctly, LinkedIn automation improves connection acceptance rates, response consistency, and lead engagement. Businesses can expect more predictable conversations, better follow-ups, and improved efficiency across outreach efforts."
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
          Get answers to common questions about LinkedIn automation with 360Airo
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
        <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-6 sm:mb-8">
          Still have questions? Our team is here to help you succeed with LinkedIn automation.
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group"
            style={{ background: COLORS.primary }}
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

// LinkedIn Network Animation Component
const LinkedInNetworkAnimation = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer Network Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-[#0077B5]/40 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Middle Connections */}
      <motion.div
        className="absolute inset-4 border-2 border-[#ad60f8]/50 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* LinkedIn Icon Core */}
      <motion.div
        className="absolute inset-8 bg-gradient-to-br from-[#0077B5] to-[#ad60f8] rounded-2xl flex items-center justify-center"
        animate={{
          scale: pulse ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <Linkedin className="h-8 w-8 text-white" />
      </motion.div>

      {/* Floating Connection Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white rounded-full"
          animate={{
            x: [0, Math.cos(i * 45) * 25, 0],
            y: [0, Math.sin(i * 45) * 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -6,
            marginTop: -6,
          }}
        />
      ))}
    </div>
  );
};

// LinkedIn Dashboard Component
const LinkedInDashboard = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [progress, setProgress] = useState(0);

  const campaigns = [
    {
      name: 'Tech Leaders Outreach',
      status: 'active',
      connections: 89,
      replies: 23,
      acceptance: '78%',
      color: 'from-[#0077B5] to-[#00A0DC]'
    },
    {
      name: 'Startup Founders',
      status: 'active',
      connections: 67,
      replies: 18,
      acceptance: '82%',
      color: 'from-[#ad60f8] to-[#0077B5]'
    },
    {
      name: 'Marketing Directors',
      status: 'paused',
      connections: 45,
      replies: 12,
      acceptance: '74%',
      color: 'from-[#0077B5] to-[#ad60f8]'
    }
  ];

  const metrics = [
    { label: 'Total Connections', value: '1,247', change: '+12%', icon: Users, color: 'from-[#0077B5] to-[#00A0DC]' },
    { label: 'Reply Rate', value: '34%', change: '+8%', icon: MessageCircle, color: 'from-[#ad60f8] to-[#0077B5]' },
    { label: 'Acceptance Rate', value: '78%', change: '+5%', icon: UserCheck, color: 'from-[#0077B5] to-[#ad60f8]' },
    { label: 'Engagement Score', value: '92%', change: '+3%', icon: TrendingUp, color: 'from-[#ad60f8] to-[#00A0DC]' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#ad60f8] flex items-center justify-center shadow-lg">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">LinkedIn Automation Dashboard</h3>
              <p className="text-xs sm:text-sm text-white/60">Smart outreach management</p>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-green-500/30"
          >
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full" 
            />
            <span className="text-xs sm:text-sm font-medium text-green-300">Live</span>
          </motion.div>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#0077B5]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-xs text-green-400 font-medium"
                >
                  {metric.change}
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
                className="text-xl sm:text-2xl font-bold text-white mb-1"
              >
                {metric.value}
              </motion.div>
              <div className="text-xs text-white/60 leading-tight">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Active Campaigns */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Active Campaigns</h4>
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:border-[#0077B5]/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                      campaign.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-medium text-sm sm:text-base">{campaign.name}</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-white/60">
                  <span>{campaign.connections} conn</span>
                  <span>{campaign.replies} replies</span>
                  <span className="text-green-400">{campaign.acceptance}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#0077B5]/10 to-[#ad60f8]/10 rounded-xl border border-[#0077B5]/20"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-2">
              <Send className="h-4 w-4 sm:h-5 sm:w-5 text-[#0077B5]" />
              <span className="font-semibold text-white text-sm sm:text-base">Message Delivery</span>
            </div>
            <div className="text-xs sm:text-sm text-white/60">Real-time</div>
          </div>
          
          <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#0077B5] to-[#ad60f8] rounded-full relative"
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-white/30 rounded-full blur-sm"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, features, delay, note }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[#1A1A1A] rounded-2xl border border-[#0077B5]/30 p-4 sm:p-6 hover:border-[#0077B5]/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0077B5]/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0077B5] to-[#ad60f8] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
        <p className="text-white/70 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-1.5 sm:space-y-2">
          {features.map((feature: string, index: number) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-center space-x-2 text-white/80 text-xs sm:text-sm"
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
            transition={{ duration: 0.6, delay: delay + 0.4 }}
            className="text-[#0077B5] text-xs sm:text-sm mt-3 sm:mt-4 italic"
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

// Benefits Grid Component
const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Users,
      title: "Human-like Interaction",
      description: "Safe automation that mirrors natural LinkedIn behavior"
    },
    {
      icon: MessageCircle,
      title: "Personalized Messaging",
      description: "AI-powered copy that fits your brand tone"
    },
    {
      icon: ChartBar,
      title: "Data-Backed Decisions",
      description: "Campaign insights that help you refine and improve results"
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automate repetitive tasks while focusing on genuine conversations"
    },
    {
      icon: Network,
      title: "Omnichannel Integration",
      description: "Combine LinkedIn and email outreach for stronger conversions"
    },
    {
      icon: Shield,
      title: "Safe & Compliant",
      description: "Stay within LinkedIn's limits and maintain account safety"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="bg-[#1A1A1A] rounded-2xl border border-[#0077B5]/30 p-4 sm:p-6 hover:border-[#0077B5]/50 transition-all duration-300"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0077B5] to-[#ad60f8] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
            <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">{benefit.title}</h4>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1.6 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 119, 181, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 119, 181, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.35, 0.1],
              scale: [0.5, 1.15, 0.5],
              x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
            }}
            transition={{ duration: 11 + i * 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
            className={`absolute w-16 h-16 sm:w-20 sm:h-20 ${
              i % 4 === 0
                ? 'rounded-full bg-gradient-to-br from-[#0077B5]/20 to-[#00A0DC]/10'
                : i % 4 === 1
                ? 'rounded-2xl bg-gradient-to-br from-[#00A0DC]/20 to-[#ad60f8]/10'
                : i % 4 === 2
                ? 'rounded-none bg-gradient-to-br from-[#ad60f8]/20 to-[#0077B5]/10'
                : 'rounded-xl bg-gradient-to-br from-[#0077B5]/15 to-[#00A0DC]/15'
            } blur-xl`}
            style={{ top: `${14 + i * 11}%`, left: `${8 + i * 10.5}%` }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        {/* MOBILE: Content first, then animations */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-screen py-16 sm:py-20">
          
          {/* CONTENT COLUMN - Always first on mobile */}
          <div className="space-y-6 sm:space-y-8 order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-block"
            >
              <div className="group relative cursor-pointer">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 119, 181, 0.4)',
                      '0 0 40px rgba(173, 96, 248, 0.6)',
                      '0 0 20px rgba(0, 119, 181, 0.4)',
                    ],
                  }}
                  transition={{ duration: 3.6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-[#0077B5]/30 via-[#ad60f8]/20 to-[#00A0DC]/30 rounded-full blur-xl"
                />
                <span className="relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#0077B5]/50 text-white font-semibold text-xs sm:text-sm">
                  <div className="mr-2 sm:mr-3">
                    <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-[#ad60f8]" />
                  </div>
                  <span>LinkedIn Automation</span>
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[0.95] tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="block transform-gpu"
                >
                  LinkedIn Automation
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                  className="block transform-gpu"
                >
                  Connect, Engage,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.55 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
                  className="block bg-gradient-to-r from-[#0077B5] via-[#ad60f8] to-white bg-clip-text text-transparent transform-gpu"
                >
                  and Grow Smarter
                </motion.span>
              </motion.h1>

              {/* Animated Gradient Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                className="h-1 bg-gradient-to-r from-[#0077B5] via-[#ad60f8] to-[#00A0DC] rounded-full relative overflow-hidden max-w-md"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="space-y-3 sm:space-y-5 max-w-xl"
            >
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                Automate outreach without losing the human touch.
              </p>
              <p className="text-sm sm:text-base text-white/75">
                Building meaningful relationships on LinkedIn takes consistency, timing, and well-crafted messaging. 360Airo's LinkedIn automation tool helps you scale your network, engage prospects, and manage outreach campaigns with precision.
              </p>
              <p className="text-sm sm:text-base text-white/75">
                Designed to support authentic communication, it streamlines routine tasks while keeping every interaction personal and relevant.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ scale: 1.04, y: -2 }} 
                whileTap={{ scale: 0.96 }} 
                className="group relative overflow-hidden rounded-xl"
              >
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, #0077B5, #ad60f8)',
                      'linear-gradient(45deg, #ad60f8, #0077B5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                />
                <Button 
                  size="lg" 
                  className="relative bg-transparent text-white px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl w-full sm:w-auto"
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  <span>Start Automating LinkedIn Outreach →</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* ANIMATIONS COLUMN - Comes after content on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="relative flex items-center justify-center h-full order-2 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Timeline Container */}
              <div className="relative py-6 sm:py-8">
                {/* Vertical Progress Line */}
                <div className="absolute left-5 sm:left-6 top-6 sm:top-8 bottom-6 sm:bottom-8 w-0.5 bg-gray-700/30 rounded-full">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '65%' }}
                    transition={{ delay: 1.5, duration: 2.5, ease: 'easeOut' }}
                    className="w-full bg-gradient-to-b from-[#0077B5] via-[#ad60f8] to-[#00A0DC] rounded-full"
                  />
                </div>

                {/* Timeline Steps - Compact */}
                {[
                  {
                    icon: Users,
                    title: 'Week 1-2',
                    subtitle: 'Profile Optimization',
                    description: 'Setup and connection strategy planning',
                    status: 'completed',
                    delay: 1.2
                  },
                  {
                    icon: Send,
                    title: 'Week 3-4',
                    subtitle: 'Initial Outreach',
                    description: 'Personalized connection requests',
                    status: 'completed',
                    delay: 1.4
                  },
                  {
                    icon: MessageCircle,
                    title: 'Week 5-6',
                    subtitle: 'Engagement Phase',
                    description: 'Follow-ups and relationship building',
                    status: 'active',
                    delay: 1.6
                  },
                  {
                    icon: TrendingUp,
                    title: 'Week 7-8',
                    subtitle: 'Growth Phase',
                    description: 'Scale outreach and conversions',
                    status: 'upcoming',
                    delay: 1.8
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: step.delay, duration: 0.6 }}
                    className="relative flex items-start mb-4 sm:mb-6 group"
                  >
                    {/* Timeline Node - Compact */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: step.delay + 0.2, duration: 0.5, type: 'spring' }}
                      className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        step.status === 'completed' 
                          ? 'bg-gradient-to-br from-[#0077B5] to-[#00A0DC]' 
                          : step.status === 'active'
                          ? 'bg-gradient-to-br from-[#ad60f8] to-[#0077B5] animate-pulse'
                          : 'bg-gradient-to-br from-gray-600 to-gray-700'
                      }`}
                    >
                      <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      
                      {/* Status Indicator - Smaller */}
                      {step.status === 'completed' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: step.delay + 0.4 }}
                          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle2 className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-white" />
                        </motion.div>
                      )}
                      
                      {step.status === 'active' && (
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -inset-0.5 sm:-inset-1 bg-[#ad60f8]/20 rounded-xl"
                        />
                      )}
                    </motion.div>

                    {/* Step Content - Compact */}
                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.delay + 0.3, duration: 0.5 }}
                      className="ml-3 sm:ml-4 flex-1"
                    >
                      <div className="bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-lg rounded-xl border border-white/10 p-2.5 sm:p-3 shadow-lg group-hover:border-[#0077B5]/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xs sm:text-sm font-bold text-white">{step.title}</h3>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                            step.status === 'completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : step.status === 'active'
                              ? 'bg-[#ad60f8]/20 text-[#ad60f8]'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {step.status === 'completed' ? '✓' : step.status === 'active' ? '●' : '○'}
                          </span>
                        </div>
                        <p className="text-[#ad60f8] font-medium text-xs mb-0.5 sm:mb-1">{step.subtitle}</p>
                        <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Current Status Card - Compact */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                  className="relative bg-gradient-to-br from-[#0077B5]/20 via-[#ad60f8]/10 to-transparent backdrop-blur-lg rounded-xl border border-[#0077B5]/20 p-3 sm:p-4 shadow-lg mt-3 sm:mt-4"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#0077B5] to-[#ad60f8] flex items-center justify-center">
                        <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">Campaign Status</h4>
                        <p className="text-xs text-white/60">Current Progress</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black text-[#0077B5]">Week 5</div>
                      <div className="text-xs text-white/50">of 8</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar - Compact */}
                  <div className="space-y-1 mb-2 sm:mb-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/70">Outreach Progress</span>
                      <span className="text-[#ad60f8] font-medium">62%</span>
                    </div>
                    <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '62%' }}
                        transition={{ delay: 2.4, duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#0077B5] via-[#ad60f8] to-[#00A0DC] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Quick Stats - Compact */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {[
                      { label: 'Connections', value: '156', icon: Users },
                      { label: 'Replies', value: '42', icon: MessageCircle },
                      { label: 'Score', value: '88', icon: Award }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.6 + i * 0.1 }}
                        className="text-center bg-white/5 rounded-lg p-1.5 sm:p-2"
                      >
                        <stat.icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0077B5] mx-auto mb-0.5 sm:mb-1" />
                        <div className="text-xs sm:text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Connection Indicators - Subtle */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`connection-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0],
                      y: [0, -20, -40],
                      x: [0, Math.sin(i) * 6, Math.sin(i) * 12],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: 'easeOut'
                    }}
                    className="absolute top-12 sm:top-16 left-5 sm:left-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#0077B5] rounded-full blur-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Main Component
export default function LinkedInAutomationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    {
      icon: Send,
      title: "Simplify and Scale Your LinkedIn Outreach",
      description: "With 360Airo, you can automate the entire LinkedIn prospecting process while maintaining safe usage and professional credibility. The platform supports essential actions across linkedin automated connections, automated LinkedIn messaging, and structured linkedin outreach automation workflows.",
      features: [
        "Send personalized connection requests and automate LinkedIn messages with tailored follow-ups",
        "Schedule multi-step LinkedIn campaigns that nurture prospects over time",
        "Track acceptance, reply, and response rates with full visibility",
        "Maintain compliance with LinkedIn's activity guidelines for safe, steady automation",
        <>Sync LinkedIn leads directly into <Link href="/features/prospect-crm" className="text-[#ad60f8] hover:text-white transition-colors duration-300 underline underline-offset-2">Prospect CRM</Link> for streamlined management</>
      ],
      note: "This blend of personalization and automation ensures your LinkedIn outreach remains both scalable and genuine."
    },
    {
      icon: MessageCircle,
      title: "Personalization and Engagement at Scale",
      description: "No more generic messaging or manual copy-pasting. 360Airo supports AI email automation across your outreach strategy by helping you build consistent, relevant communication flows that complement your LinkedIn efforts.",
      features: [
         <>Generate tailored message variations using <Link href="/features/ai-email-generator" className="text-[#ad60f8] hover:text-white transition-colors duration-300 underline underline-offset-2">AI Email Generator</Link></>,
        "Create behavior-based follow-ups that feel human and meaningful",
        "Increase acceptance and reply rates with contextual, profile-aware messaging",
        "Use contextual details such as industry, role, and interests to craft tailored messages that resonate"
      ],
      note: "Your conversations become more targeted, more consistent, and far more effective."
    },
    {
      icon: BarChart3,
      title: "Unified Dashboard for Outreach Management",
      description: "Manage everything from one clean, organized workspace. 360Airo's dashboard lets you monitor campaign progress, engagement trends, and performance metrics in real time—across both LinkedIn and email.",
      features: [
        "View campaign performance, connection growth, and message outcomes instantly",
        "Analyze connection rates, reply trends, and message insights in Email Campaign Analytics",
        "Integrate LinkedIn activity with your email campaigns for cohesive automated LinkedIn outreach",
        "Monitor engagement trends and performance metrics in real time"
      ],
      note: "This unified view gives you complete control over how prospects move through your outreach ecosystem."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/features/linkedin-automation" />
      
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* LinkedIn Dashboard Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Smart LinkedIn Automation Dashboard
            </h2>
            <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto">
              Monitor and manage your LinkedIn outreach with real-time insights and intelligent automation
            </p>
          </motion.div>
          <LinkedInDashboard />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-white/2 via-[#0077B5]/10 to-white/2">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Powerful LinkedIn Automation Features
            </h2>
            <p className="text-sm sm:text-lg text-white/70 max-w-3xl mx-auto">
              Discover how our intelligent automation can transform your LinkedIn outreach and drive meaningful connections
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title}
                {...feature}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Why Choose 360Airo for LinkedIn Automation
            </h2>
            <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto">
              Build genuine connections at scale with intelligent automation that respects the human element
            </p>
          </motion.div>

          <BenefitsGrid />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-white/2 via-[#0077B5]/10 to-white/2">
        <div className="max-w-6xl mx-auto">
          <FAQSection />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your LinkedIn Outreach?
            </h2>
            <div className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed space-y-4">
              <p>
                Join thousands of professionals using 360Airo's LinkedIn automation to build meaningful connections and grow their network smarter.
              </p>
              <p className="font-semibold text-[#ad60f8]">
                Your conversations become more targeted, more consistent, and far more effective.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0077B5] to-[#ad60f8] hover:from-[#0077B5]/90 hover:to-[#ad60f8]/90 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-lg shadow-[#0077B5]/30 w-full sm:w-auto"
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  Start Automating LinkedIn Outreach →
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
