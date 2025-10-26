'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
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

// Geometric Pattern Background
const GeometricPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Triangles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            rotate: [0, 180, 360],
            scale: [0.5, 1, 0.5],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Floating Circles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            scale: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            opacity: 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Cards Animation
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
            rotate: [0, 10, -10, 0],
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

// Bouncing Icon Grid
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
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ 
            rotateY: 10,
            scale: 1.05
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group perspective-1000"
        >
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-500 transform-style-preserve-3d">
            {/* Icon with bounce effect */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 360 
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
              whileHover={{ scale: 1.1, rotate: 360 }}
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
              whileHover={{ scale: 1.1, rotate: 360 }}
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

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <GeometricPattern />
        
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            scale: headerScale,
            opacity: headerOpacity
          }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <div 
                  className="px-6 py-3 rounded-full shadow-2xl border-2"
                  style={{ 
                    background: COLORS.purpleLight,
                    borderColor: COLORS.purpleLight
                  }}
                >
                  <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                    <Sparkle className="h-4 w-4 mr-2" />
                    360Airo Affiliate Program
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                  <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block"
                  >
                    Earn by
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="block"
                    style={{ color: COLORS.purpleLight }}
                  >
                    Empowering
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="block"
                    style={{ color: COLORS.purpleDark }}
                  >
                    Growth
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-2xl text-white/80 font-light leading-relaxed"
                >
                  Partner with a Platform Built for Modern Outreach
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="space-y-4 max-w-xl"
              >
                <p className="text-lg text-white/70 leading-relaxed">
                  <span className="text-white font-semibold">If you believe in smarter communication, why not earn from it?</span>{' '}
                  360Airo's Affiliate Program lets you share an AI-driven outreach platform designed to help businesses scale effortlessly. Whether you're a marketer, agency, or creator, you can earn recurring commissions simply by helping others discover 360Airo.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Promote a platform that combines email warmup, AI automation, LinkedIn outreach, and prospect CRM — everything professionals need to boost deliverability, engagement, and conversions.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl border-0 relative overflow-hidden"
                    style={{ background: COLORS.purpleLight }}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                    />
                    <span className="relative z-10 flex items-center">
                      Become an Affiliate
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <FloatingCardsAnimation />
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
    </div>
  );
}