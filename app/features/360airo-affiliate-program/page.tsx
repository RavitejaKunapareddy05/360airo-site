'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';

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
  Eye,
  Mail,
  Globe,
  Crown,
  Star,
  Sparkles,
  Coins,
  Target,
  Calendar,
  UserCheck,
  ChartBar,
  UserPlus,
  CreditCard,
  ChartLine,
  Bot,
  MailCheck,
  Sparkle,
  GraduationCap,
  MonitorPlay,
  Megaphone,
  HeartHandshake,
  Plus,
  Minus
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

// FAQ Component
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the 360Airo Affiliate Program, and how does it work?",
      answer: "The 360Airo Affiliate Program allows individuals and businesses to earn commissions by referring new users. Affiliates share unique tracking links, and commissions are earned when referred users subscribe. The program is designed to be transparent, scalable, and rewarding for long term partnerships."
    },
    {
      question: "Who is eligible to join the affiliate program?",
      answer: "Anyone including marketers, agencies, consultants, creators, and sales professionals can join the 360Airo affiliate program. No prior experience is required, making it accessible for anyone interested in promoting a sales and outreach automation platform."
    },
    {
      question: "Is it free to sign up for the affiliate program?",
      answer: "Yes, signing up for the 360Airo affiliate program is completely free. There are no hidden fees or commitments, allowing affiliates to start promoting the platform and earning commissions without upfront investment."
    },
    {
      question: "How much commission can affiliates earn with 360Airo?",
      answer: "Affiliates can earn competitive commissions based on successful referrals. Commission rates are designed to reward long term value, making it possible to generate recurring income as referred users continue their subscriptions."
    },
    {
      question: "Do affiliates earn lifetime or recurring commissions?",
      answer: "360Airo offers recurring commissions for active subscriptions. This means affiliates continue earning as long as their referred customers remain subscribed, creating predictable and sustainable income opportunities."
    },
    {
      question: "How does the affiliate tracking and dashboard work?",
      answer: "The affiliate dashboard provides real time visibility into clicks, signups, conversions, and earnings. Affiliates can easily track performance, monitor payouts, and optimize promotion strategies using accurate and transparent reporting."
    },
    {
      question: "When and how are affiliate commissions paid?",
      answer: "Affiliate commissions are paid on a regular schedule through supported payout methods. Once minimum payout thresholds are met, earnings are processed automatically, ensuring timely and hassle free payments."
    },
    {
      question: "What marketing resources are available for affiliates?",
      answer: "360Airo provides affiliates with promotional assets such as banners, messaging guidelines, and product information. These resources help affiliates market the platform effectively while maintaining brand consistency and clarity."
    },
    {
      question: "What makes the 360Airo affiliate program different from others?",
      answer: "The 360Airo affiliate program stands out due to recurring commissions, transparent tracking, and a high value product. Affiliates promote a platform that solves real outreach challenges, making conversions easier and earnings more consistent."
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
          Get answers to common questions about the 360Airo Affiliate Program
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
                  style={{ background: COLORS.purpleLight }}
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
          Ready to start earning with 360Airo? Join our affiliate program today!
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
            onClick={() => window.open('https://app.360airo.com', '_blank')}
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
              Become an Affiliate
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Handle redirects
const handleBecomeAffiliate = () => {
  window.open('https://app.360airo.com', '_blank');
};

// Geometric Pattern Component
const GeometricPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-purple-500/20"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() * 50,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          animate={{
            y: [0, -60, 0],
            x: [0, Math.sin(i) * 30, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
        className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 rounded-full blur-2xl lg:blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, ${COLORS.purpleLight}40, transparent 70%)`,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 lg:w-80 lg:h-80 rounded-full blur-2xl lg:blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.2, 0.3],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: `radial-gradient(circle, ${COLORS.purpleDark}30, transparent 70%)`,
        }}
      />
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
          duration: 0.8, 
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
    <div className="grid grid-cols-4 gap-3 lg:gap-6 max-w-sm lg:max-w-md mx-auto">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-xl lg:shadow-2xl relative group"
          style={{
            background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
          }}
        >
          <Icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
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
    <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
      {/* Central Orb */}
      <motion.div
        className="absolute inset-0 m-auto w-20 h-20 lg:w-32 lg:h-32 rounded-full shadow-xl lg:shadow-2xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
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
          className="absolute w-16 h-16 lg:w-24 lg:h-24 rounded-xl lg:rounded-2xl flex flex-col items-center justify-center shadow-xl lg:shadow-2xl backdrop-blur-sm border border-white/10"
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(index) * 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: card.delay,
            ease: "easeInOut"
          }}
          style={{
            background: `${card.color}CC`,
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`,
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        >
          <card.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white mb-1 lg:mb-2" />
          <span className="text-white text-xs lg:text-sm font-bold">{card.title}</span>
        </motion.div>
      ))}
    </div>
  );
};

// Loading Screen Animation
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
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
          className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl mb-6 lg:mb-8 mx-auto flex items-center justify-center shadow-xl lg:shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${COLORS.purpleLight}, ${COLORS.purpleDark})`,
          }}
        >
          <Rocket className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl lg:text-4xl font-black text-white mb-3 lg:mb-4"
        >
          360Airo
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-purple-300 font-light text-sm lg:text-base"
        >
          Affiliate Program
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 lg:space-x-2 mt-6 lg:mt-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Bouncing Icon Grid
const BouncingIconGrid = () => {
  const icons = [Coins, Wallet, BarChart3, Crown, Star];
  
  return (
    <div className="grid grid-cols-5 gap-2 lg:gap-4 max-w-xs lg:max-w-md mx-auto">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
          style={{
            background: index % 3 === 0 ? COLORS.purpleLight : index % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
          }}
        >
          <Icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
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
      icon: Gift,
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.02
          }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          <div className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-300">
            {/* Icon with bounce effect */}
            <motion.div
              whileHover={{ 
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg"
              style={{ background: benefit.color }}
            >
              <benefit.icon className="h-5 w-5 lg:h-7 lg:w-7 text-white" />
            </motion.div>
            
            <h4 className="text-white font-bold text-base lg:text-lg mb-2 lg:mb-3">{benefit.title}</h4>
            <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
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
    <div className="grid grid-cols-1 gap-4 lg:gap-6">
      {types.map((type, index) => (
        <motion.div
          key={type.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring"
          }}
          className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3 lg:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ background: type.color }}
            >
              <type.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
            </motion.div>
            <h4 className="text-white font-bold text-sm lg:text-lg">{type.title}</h4>
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15,
            type: "spring"
          }}
          className="relative text-center"
        >
          {/* Step number */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-lg mb-3 lg:mb-4 mx-auto"
            style={{ background: step.color }}
          >
            <span className="text-white font-bold text-xs lg:text-sm">{index + 1}</span>
          </motion.div>

          {/* Step card */}
          <div className="bg-[#1A1A1A] rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 border-gray-800 hover:border-current transition-all duration-300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 mx-auto shadow-lg"
              style={{ background: step.color }}
            >
              <step.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
            </motion.div>
            
            <h3 className="text-white font-bold text-lg lg:text-xl mb-2 lg:mb-3">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{step.description}</p>
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
        className="absolute inset-0 rounded-2xl lg:rounded-3xl"
        animate={{
          scale: [1, 1.01, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
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
      <Head>
        <title>360Airo Affiliate Program | Earn Recurring Commissions | AI Outreach Platform</title>
        <meta name="description" content="Join the 360Airo Affiliate Program and earn up to 30% recurring commissions. Partner with the leading AI-powered outreach platform for email warmup, LinkedIn automation, and sales outreach." />
        <meta name="keywords" content="360Airo affiliate program, email warmup affiliate, AI outreach affiliate, recurring commissions, affiliate marketing, SaaS affiliate program, email deliverability affiliate" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/360airo-affiliate-program" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="360Airo Affiliate Program | Earn Recurring Commissions" />
        <meta property="og:description" content="Join our affiliate program and earn up to 30% recurring commissions by promoting the leading AI-powered outreach platform." />
        <meta property="og:url" content="https://360airo.com/features/360airo-affiliate-program" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-affiliate-program.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360Airo Affiliate Program | Earn Recurring Commissions" />
        <meta name="twitter:description" content="Join our affiliate program and earn up to 30% recurring commissions by promoting the leading AI-powered outreach platform." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45ecf" />
      </Head>

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

        {/* Hidden link for SEO */}
        <div className="hidden">
          <a rel="canonical" href="https://360airo.com/features/360airo-affiliate-program">360Airo Affiliate Program</a>
        </div>

        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 lg:pt-0">
          <GeometricPattern />
          <HeroBackgroundAnimation />
          
          <motion.div 
            className="max-w-7xl mx-auto w-full relative z-10"
            style={{
              scale: headerScale,
              opacity: headerOpacity
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-screen py-12 lg:py-20">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative space-y-6 lg:space-y-8 order-1"
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                >
                  <motion.div 
                    className="px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-xl lg:shadow-2xl border-2 backdrop-blur-sm"
                    style={{ 
                      background: `${COLORS.purpleLight}20`,
                      borderColor: COLORS.purpleLight
                    }}
                    whileHover={{
                      scale: 1.02,
                      background: `${COLORS.purpleLight}30`,
                    }}
                  >
                    <span className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider flex items-center">
                      <Sparkle className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                      360Airo Affiliate Program
                    </span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Main Heading */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                    <TextReveal 
                      text="Earn by" 
                      delay={0.8}
                      className="text-white"
                    />
                    <TextReveal 
                      text="Empowering" 
                      delay={1.0}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    />
                    <TextReveal 
                      text="Growth" 
                      delay={1.2}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
                    />
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg lg:text-2xl text-white/80 font-light leading-relaxed"
                  >
                    Partner with a Platform Built for Modern Outreach
                  </motion.p>
                </motion.div>

                {/* Enhanced Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="space-y-3 lg:space-y-4 max-w-xl"
                >
                  <p className="text-sm lg:text-lg text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">If you believe in smarter communication, why not earn from it?</span>{' '}
                    360Airo's Affiliate Program lets you share an AI-driven outreach platform designed to help businesses scale effortlessly.
                  </p>
                  <p className="text-sm lg:text-lg text-white/70 leading-relaxed">
                    Promote a platform that combines email warmup, AI automation, LinkedIn outreach, and prospect CRM — everything professionals need to boost deliverability, engagement, and conversions.
                  </p>
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1, duration: 0.4 }}
                  className="pt-6 lg:pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Button 
                      size="lg" 
                      className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-bold rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border-0 relative overflow-hidden group w-full lg:w-auto"
                      style={{ background: COLORS.purpleLight }}
                      onClick={handleBecomeAffiliate}
                    >
                      <span className="relative z-10 flex items-center justify-center lg:justify-start">
                        Become an Affiliate
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
                className="relative order-2 mb-8 lg:mb-0"
              >
                <EnhancedFloatingCardsAnimation />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-8 lg:-bottom-10 left-0 right-0"
                >
                  <AnimatedIconGrid />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Join Section */}
        <PulseSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                Why Join the 360Airo Affiliate Program?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
              >
                We've made earning simple, transparent, and rewarding.
              </motion.p>
            </motion.div>

            <RotatingBenefits />

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 lg:mt-16 text-center"
            >
              <motion.p
                animate={{
                  color: [COLORS.purpleLight, COLORS.purpleDark, COLORS.purpleDarker, COLORS.purpleLight],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-lg lg:text-2xl font-bold italic"
              >
                We don't just reward referrals — we empower partnerships.
              </motion.p>
            </motion.div>
          </div>
        </PulseSection>

        {/* Who Can Become Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
          <GeometricPattern />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6"
                style={{ color: COLORS.purpleLight }}
              >
                Who Can Become a 360Airo Affiliate?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
              >
                Anyone passionate about sales automation, email marketing, or B2B outreach tools can become a partner. Whether you run a blog, YouTube channel, newsletter, or SaaS review site — this program fits you.
              </motion.p>
            </motion.div>

            <AffiliateTypes />

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 lg:mt-12 text-center"
            >
              <p className="text-white text-lg lg:text-xl font-bold">
                If you believe in the future of AI-powered communication, we believe in rewarding you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <PulseSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                How It Works
              </motion.h2>
            </motion.div>

            <ProcessSteps />

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 lg:mt-16 text-center"
            >
              <p className="text-white/80 text-sm lg:text-lg leading-relaxed max-w-4xl mx-auto">
                Our affiliate tracking system ensures every click, signup, and payment is logged transparently — so you always know where your earnings come from.
              </p>
            </motion.div>
          </div>
        </PulseSection>

        {/* Your Network Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6"
                style={{ color: COLORS.purpleDark }}
              >
                Your Network, Your Income
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-base lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                The more you share, the more you earn. 360Airo's Affiliate Program is designed for scalability — meaning your income grows as your network does. Whether you refer one client or a hundred, every signup contributes to your long-term rewards.
              </motion.p>

              <BouncingIconGrid />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A] relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <FAQSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <PulseSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-5xl xl:text-6xl font-black text-white mb-4 lg:mb-6"
              >
                Start Earning with 360Airo
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-base lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                Join a community of marketers, creators, and growth professionals already earning with 360Airo. Turn your influence into income — while helping businesses scale their outreach intelligently.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-6 lg:pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="px-8 py-4 lg:px-12 lg:py-6 text-lg lg:text-xl font-bold rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border-0 relative overflow-hidden w-full lg:w-auto"
                    style={{ background: COLORS.purpleLight }}
                    onClick={handleBecomeAffiliate}
                  >
                    <span className="relative z-10 flex items-center justify-center lg:justify-start">
                      Become an Affiliate
                      <ArrowRight className="ml-2 lg:ml-3 h-5 w-5 lg:h-6 lg:w-6" />
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
