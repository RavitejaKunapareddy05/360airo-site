'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import {
  Users,
  Share2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Zap,
  Rocket,
  Award,
  Gift,
  Wallet,
  Infinity as InfinityIcon,
  Eye,
  Link2,
  Mail,
  MessageCircle,
  Twitter,
  Globe,
  Crown,
  Star,
  Sparkles,
  Coins,
  Target,
  Calendar,
  UserCheck,
  ChartBar,
  Network,
  Circle,
  Hexagon,
  Triangle,
  Diamond,
  UserPlus,
  CreditCard,
  ChartLine,
  UsersRound,
  Bot,
  MailCheck,
  Linkedin,
  MessageSquare,
  Sparkle,
  GraduationCap,
  MonitorPlay,
  Megaphone,
  HeartHandshake
} from 'lucide-react';

// Color constants - Using only the specified colors for text
const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// Enhanced Geometric Pattern with more dynamism
const GeometricPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-purple-500/20"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() * 50,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
          }}
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Enhanced Floating Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          animate={{
            y: [0, -80, 0],
            x: [0, Math.cos(i) * 40, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 8,
          }}
          style={{
            width: Math.random() * 60 + 30,
            height: Math.random() * 60 + 30,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            opacity: 0.15,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: i % 2 === 0 ? '50%' : '20%',
            filter: 'blur(8px)',
          }}
        />
      ))}
    </div>
  );
};

// Hero Background Animation
const HeroBackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, ${COLORS.purpleLight}40, transparent 70%)`,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: `radial-gradient(circle, ${COLORS.purpleDark}30, transparent 70%)`,
        }}
      />

      {/* Pulse Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute inset-0 border-2 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 1.5,
          }}
          style={{
            borderColor: COLORS.purpleLight,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

// Text Reveal Animation Component
const TextReveal = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ 
          duration: 1, 
          delay,
          ease: [0.22, 1, 0.36, 1] 
        }}
        className={`block ${className}`}
      >
        {text}
      </motion.span>
    </div>
  );
};

// Staggered Icon Grid Animation
const AnimatedIconGrid = () => {
  const icons = [Rocket, Coins, Users, TrendingUp, Crown, Zap, Target, ChartLine];
  
  return (
    <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl relative group"
          style={{
            background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
          }}
        >
          <Icon className="h-8 w-8 text-white" />
          
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
            animate={{
              boxShadow: [
                `0 0 20px ${COLORS.purpleLight}`,
                `0 0 40px ${COLORS.purpleLight}`,
                `0 0 20px ${COLORS.purpleLight}`,
              ],
            }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Floating Cards Animation
const EnhancedFloatingCardsAnimation = () => {
  const cards = [
    { 
      icon: Coins, 
      title: "Earn", 
      color: COLORS.purpleLight,
      delay: 0 
    },
    { 
      icon: Users, 
      title: "Share", 
      color: COLORS.purpleDark,
      delay: 0.3 
    },
    { 
      icon: Rocket, 
      title: "Grow", 
      color: COLORS.purpleDarker,
      delay: 0.6 
    },
  ];

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Central Orb */}
      <motion.div
        className="absolute inset-0 m-auto w-32 h-32 rounded-full shadow-2xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
        style={{
          background: `radial-gradient(circle, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
          filter: 'blur(1px)',
        }}
      />

      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10"
          animate={{
            y: [0, -60, 0],
            x: [0, Math.sin(index) * 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: card.delay,
            ease: "easeInOut"
          }}
          style={{
            background: `${card.color}CC`,
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
        >
          <card.icon className="h-10 w-10 text-white mb-2" />
          <span className="text-white text-sm font-bold">{card.title}</span>
        </motion.div>
      ))}
      
      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M120,120 Q192,80 264,140"
          stroke={COLORS.purpleLight}
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
          animate={{
            pathOffset: [0, 20],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </svg>
    </div>
  );
};

// Loading Screen Animation
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10 
          }}
          className="w-20 h-20 rounded-2xl mb-8 mx-auto flex items-center justify-center shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
          }}
        >
          <Rocket className="h-10 w-10 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-white mb-4"
        >
          360Airo
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-purple-300 font-light"
        >
          Affiliate Program
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Floating Cards Animation (Original - keep for other sections)
const FloatingCardsAnimation = () => {
  const cards = [
    { icon: Coins, color: COLORS.purpleLight, delay: 0 },
    { icon: Users, color: COLORS.purpleDark, delay: 0.5 },
    { icon: Rocket, color: COLORS.purpleDarker, delay: 1 },
  ];

  return (
    <div className="relative w-80 h-80 mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: card.delay,
            ease: "easeInOut"
          }}
          style={{
            background: card.color,
            left: `${30 + index * 20}%`,
            top: `${40 + index * 10}%`,
          }}
        >
          <card.icon className="h-8 w-8 text-white" />
        </motion.div>
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M80,120 Q160,80 240,120"
          stroke={COLORS.purpleLight}
          strokeWidth="2"
          fill="none"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.path
          d="M120,160 Q160,200 200,160"
          stroke={COLORS.purpleDark}
          strokeWidth="2"
          fill="none"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
};

// Bouncing Icon Grid (Original - keep for other sections)
const BouncingIconGrid = () => {
  const icons = [Coins, Wallet, BarChart3, Crown, InfinityIcon];
  
  return (
    <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
          style={{
            background: index % 3 === 0 ? COLORS.purpleLight : index % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
          }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
      ))}
    </div>
  );
};

// Rotating Benefits Cards
const RotatingBenefits = () => {
  const benefits = [
    {
      icon: Coins,
      title: "High Recurring Commissions",
      description: "Earn up to 30% on every referred subscription",
      color: COLORS.purpleLight
    },
    {
      icon: InfinityIcon,
      title: "Lifetime Rewards",
      description: "Keep earning as long as your referrals stay active",
      color: COLORS.purpleDark
    },
    {
      icon: Wallet,
      title: "Fast Payouts",
      description: "Receive payments on time, every month",
      color: COLORS.purpleDarker
    },
    {
      icon: BarChart3,
      title: "Dedicated Affiliate Dashboard",
      description: "Track clicks, conversions, and payouts in real time",
      color: COLORS.purpleLight
    },
    {
      icon: Megaphone,
      title: "Marketing Resources Provided",
      description: "Access banners, landing pages, and campaign-ready content",
      color: COLORS.purpleDark
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.05
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-500">
            {/* Icon with bounce effect */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
              }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
              style={{ background: benefit.color }}
            >
              <benefit.icon className="h-7 w-7 text-white" />
            </motion.div>
            
            <h4 className="text-white font-bold text-lg mb-3">{benefit.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>

            {/* Hover shine effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  `radial-gradient(circle at 20% 80%, ${benefit.color}15, transparent 50%)`,
                  `radial-gradient(circle at 80% 20%, ${benefit.color}15, transparent 50%)`,
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Slide-in Affiliate Types
const AffiliateTypes = () => {
  const types = [
    {
      icon: Users,
      title: "Marketing professionals and consultants",
      color: COLORS.purpleLight
    },
    {
      icon: Rocket,
      title: "Growth hackers and sales coaches",
      color: COLORS.purpleDark
    },
    {
      icon: MonitorPlay,
      title: "Tech bloggers and SaaS reviewers",
      color: COLORS.purpleDarker
    },
    {
      icon: Globe,
      title: "Influencers in the startup or business ecosystem",
      color: COLORS.purpleLight
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {types.map((type, index) => (
        <motion.div
          key={type.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring"
          }}
          className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ background: type.color }}
            >
              <type.icon className="h-6 w-6 text-white" />
            </motion.div>
            <h4 className="text-white font-bold text-lg">{type.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Step-by-step Process
const ProcessSteps = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Sign Up for the affiliate program",
      description: "It's free and quick",
      color: COLORS.purpleLight
    },
    {
      icon: Share2,
      title: "Share Your Unique Link",
      description: "Across your channels or client base",
      color: COLORS.purpleDark
    },
    {
      icon: Coins,
      title: "Earn Recurring Commissions",
      description: "For every active subscriber you bring",
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
          whileHover={{ y: -10 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring"
          }}
          className="relative text-center"
        >
          {/* Step number */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.3, type: "spring" }}
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto"
            style={{ background: step.color }}
          >
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </motion.div>

          {/* Step card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-current transition-all duration-300">
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

// Pulse Section Component
const PulseSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Pulsing background effect */}
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

// Main Component
export default function AffiliateProgramPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isLoading, setIsLoading] = useState(true);

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef}
        className="min-h-screen bg-black overflow-hidden"
      >
        <Navbar />

        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <GeometricPattern />
          <HeroBackgroundAnimation />
          
          <motion.div 
            className="max-w-7xl mx-auto w-full relative z-10"
            style={{
              scale: headerScale,
              opacity: headerOpacity
            }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              
              {/* Left Content with Enhanced Animations */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative space-y-8"
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                >
                  <motion.div 
                    className="px-6 py-3 rounded-full shadow-2xl border-2 backdrop-blur-sm"
                    style={{ 
                      background: `${COLORS.purpleLight}20`,
                      borderColor: COLORS.purpleLight
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: `${COLORS.purpleLight}40`,
                    }}
                  >
                    <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                      <Sparkle className="h-4 w-4 mr-2" />
                      360Airo Affiliate Program
                    </span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Main Heading */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                    <TextReveal 
                      text="Earn by" 
                      delay={1.0}
                      className="text-white"
                    />
                    <TextReveal 
                      text="Empowering" 
                      delay={1.3}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    />
                    <TextReveal 
                      text="Growth" 
                      delay={1.6}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
                    />
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="text-2xl text-white/80 font-light leading-relaxed"
                  >
                    Partner with a Platform Built for Modern Outreach
                  </motion.p>
                </motion.div>

                {/* Enhanced Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.7 }}
                  className="space-y-4 max-w-xl"
                >
                  <p className="text-lg text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">If you believe in smarter communication, why not earn from it?</span>{' '}
                    360Airo's Affiliate Program lets you share an AI-driven outreach platform designed to help businesses scale effortlessly.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Promote a platform that combines email warmup, AI automation, LinkedIn outreach, and prospect CRM — everything professionals need to boost deliverability, engagement, and conversions.
                  </p>
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  className="pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Button 
                      size="lg" 
                      className="px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl border-0 relative overflow-hidden group"
                      style={{ background: COLORS.purpleLight }}
                    >
                      {/* Animated background */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                      />
                      
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                        animate={{
                          x: ['-100%', '200%', '-100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 1,
                        }}
                      />
                      
                      <span className="relative z-10 flex items-center">
                        Become an Affiliate
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - Enhanced Animation */}
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
                className="relative"
              >
                <EnhancedFloatingCardsAnimation />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -bottom-10 left-0 right-0"
                >
                  <AnimatedIconGrid />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Join Section */}
        <PulseSection className="py-20 px-6 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black text-white mb-6"
              >
                Why Join the 360Airo Affiliate Program?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/70 max-w-3xl mx-auto"
              >
                We've made earning simple, transparent, and rewarding.
              </motion.p>
            </motion.div>

            <RotatingBenefits />

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 text-center"
            >
              <motion.p
                animate={{
                  color: [COLORS.purpleLight, COLORS.purpleDark, COLORS.purpleDarker, COLORS.purpleLight],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="text-2xl font-bold italic"
              >
                We don't just reward referrals — we empower partnerships.
              </motion.p>
            </motion.div>
          </div>
        </PulseSection>

        {/* Who Can Become Section */}
        <section className="py-20 px-6 bg-black relative overflow-hidden">
          <GeometricPattern />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: COLORS.purpleLight }}
              >
                Who Can Become a 360Airo Affiliate?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/70 max-w-3xl mx-auto"
              >
                Anyone passionate about sales automation, email marketing, or B2B outreach tools can become a partner. Whether you run a blog, YouTube channel, newsletter, or SaaS review site — this program fits you.
              </motion.p>
            </motion.div>

            <AffiliateTypes />

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-white text-xl font-bold">
                If you believe in the future of AI-powered communication, we believe in rewarding you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <PulseSection className="py-20 px-6 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-black text-white mb-6"
              >
                How It Works
              </motion.h2>
            </motion.div>

            <ProcessSteps />

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 text-center"
            >
              <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                Our affiliate tracking system ensures every click, signup, and payment is logged transparently — so you always know where your earnings come from.
              </p>
            </motion.div>
          </div>
        </PulseSection>

        {/* Your Network Section */}
        <section className="py-20 px-6 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-black mb-6"
                style={{ color: COLORS.purpleDark }}
              >
                Your Network, Your Income
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                The more you share, the more you earn. 360Airo's Affiliate Program is designed for scalability — meaning your income grows as your network does. Whether you refer one client or a hundred, every signup contributes to your long-term rewards.
              </motion.p>

              <BouncingIconGrid />
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <PulseSection className="py-20 px-6 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-black text-white mb-6"
              >
                Start Earning with 360Airo
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                Join a community of marketers, creators, and growth professionals already earning with 360Airo. Turn your influence into income — while helping businesses scale their outreach intelligently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl border-0 relative overflow-hidden"
                    style={{ background: COLORS.purpleLight }}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 bg-white/30 rounded-2xl"
                    />
                    <span className="relative z-10 flex items-center">
                      Become an Affiliate
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </PulseSection>

        <Footer />
      </motion.div>
    </>
  );
}