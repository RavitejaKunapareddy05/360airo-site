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
  MonitorPlay
} from 'lucide-react';

// Color constants
const COLORS = {
  primary: '#b45ecf',
  darkPurple: '#480056',
  darkest: '#19001d',
  white: '#ffffff'
};

// Floating Particles Background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            background: COLORS.primary,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Orbital Animation Component
const OrbitalAnimation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Central Orb */}
      <motion.div
        className="absolute inset-20 bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-full shadow-2xl"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 50px rgba(180, 94, 207, 0.3)',
            '0 0 80px rgba(72, 0, 86, 0.5)',
            '0 0 50px rgba(180, 94, 207, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Share2 className="h-16 w-16 text-white" />
        </div>
      </motion.div>

      {/* Orbiting Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16"
          animate={{
            rotate: rotation * (i % 2 === 0 ? 1 : -1),
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -32,
            marginTop: -32,
          }}
        >
          <motion.div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              x: 120 * Math.cos((i * 60 * Math.PI) / 180),
              y: 120 * Math.sin((i * 60 * Math.PI) / 180),
              rotate: -rotation * (i % 2 === 0 ? 1 : -1),
            }}
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.darkPurple})`,
            }}
          >
            {i % 3 === 0 ? (
              <Coins className="h-6 w-6 text-white" />
            ) : i % 3 === 1 ? (
              <Users className="h-6 w-6 text-white" />
            ) : (
              <TrendingUp className="h-6 w-6 text-white" />
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={50 + 40 * Math.cos((i * 60 * Math.PI) / 180) + '%'}
            y2={50 + 40 * Math.sin((i * 60 * Math.PI) / 180) + '%'}
            stroke="url(#gradient)"
            strokeWidth="2"
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.primary} />
            <stop offset="50%" stopColor={COLORS.darkPurple} />
            <stop offset="100%" stopColor={COLORS.primary} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Animated Step Cards with Morphing Effect
const AnimatedSteps = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Sign Up or Log In",
      description: "Access your 360Airo account to get started with the referral program.",
      gradient: `from-[${COLORS.primary}] to-[${COLORS.darkPurple}]`
    },
    {
      icon: Link2,
      title: "Get Your Unique Referral Link",
      description: "Copy your personalized referral link available right from your dashboard.",
      gradient: `from-[${COLORS.darkPurple}] to-[${COLORS.primary}]`
    },
    {
      icon: Share2,
      title: "Share It Anywhere",
      description: "Share via email, LinkedIn, Twitter, or your website.",
      gradient: `from-[${COLORS.primary}] to-[${COLORS.darkPurple}]`
    },
    {
      icon: Coins,
      title: "Earn Rewards",
      description: "Get paid for every person who signs up or subscribes through your link.",
      gradient: `from-[${COLORS.darkPurple}] to-[${COLORS.primary}]`
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ 
            y: -10, 
            scale: 1.05,
            rotateY: 10
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl"
            animate={{
              background: [
                `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.darkPurple})`,
                `linear-gradient(45deg, ${COLORS.darkPurple}, ${COLORS.primary})`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          
          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-8 border border-[#480056] group-hover:border-transparent transition-all duration-500 backdrop-blur-sm">
            {/* Animated Number */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 360 
              }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
            >
              <step.icon className="h-8 w-8 text-white" />
            </motion.div>
            
            <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>

            {/* Hover Effect Line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Floating Benefits Grid
const FloatingBenefits = () => {
  const benefits = [
    {
      icon: Coins,
      title: "Recurring Rewards",
      description: "Earn a percentage for every active referral subscription",
      color: COLORS.primary
    },
    {
      icon: Wallet,
      title: "Instant Credit or Payouts",
      description: "Choose between wallet credit or cash-based rewards",
      color: COLORS.primary
    },
    {
      icon: InfinityIcon,
      title: "Unlimited Referrals",
      description: "Share with as many people as you like — no limits",
      color: COLORS.primary
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description: "Track everything in real time",
      color: COLORS.primary
    },
    {
      icon: Crown,
      title: "Community Perks",
      description: "Top referrers get exclusive bonuses, early feature access, and spotlight mentions",
      color: COLORS.primary
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 30, rotateY: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          whileHover={{ 
            y: -15,
            rotateZ: index % 2 === 0 ? -2 : 2
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          {/* Floating Animation */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-8 border border-[#480056] group-hover:border-transparent transition-all duration-500 backdrop-blur-sm"
          >
            {/* Animated Icon Background */}
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
              style={{ background: benefit.color }}
            />
            
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: 360 
              }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
              style={{ background: benefit.color }}
            >
              <benefit.icon className="h-7 w-7 text-white" />
            </motion.div>
            
            <h4 className="text-white font-bold text-xl mb-4 relative z-10">{benefit.title}</h4>
            <p className="text-gray-300 leading-relaxed relative z-10">{benefit.description}</p>

            {/* Sparkle Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  `radial-gradient(circle at 20% 80%, ${benefit.color}20, transparent 50%)`,
                  `radial-gradient(circle at 80% 20%, ${benefit.color}20, transparent 50%)`,
                  `radial-gradient(circle at 20% 80%, ${benefit.color}20, transparent 50%)`,
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Who Can Refer Grid Component
const WhoCanReferGrid = () => {
  const referrers = [
    {
      icon: Users,
      title: "Freelancers, Creators & Consultants",
      description: "Professionals who work in marketing or sales"
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Introducing smarter tools to their teams"
    },
    {
      icon: GraduationCap,
      title: "Students & Professionals",
      description: "Passionate about automation and outreach"
    },
    {
      icon: MonitorPlay,
      title: "Bloggers & YouTubers",
      description: "Reviewing SaaS and productivity platforms"
    }
  ];

  const iconTransition = {
    duration: 0.6
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {referrers.map((referrer, index) => (
        <motion.div
          key={referrer.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-8 border border-[#480056] hover:border-[#b45ecf] transition-all duration-300 group"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={iconTransition}
            className="w-16 h-16 bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          >
            <referrer.icon className="h-8 w-8 text-white" />
          </motion.div>
          
          <h4 className="text-white font-bold text-xl mb-4">{referrer.title}</h4>
          <p className="text-gray-300 leading-relaxed">{referrer.description}</p>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
            animate={{
              background: [
                `radial-gradient(circle at 20% 80%, ${COLORS.primary}10, transparent 50%)`,
                `radial-gradient(circle at 80% 20%, ${COLORS.primary}10, transparent 50%)`,
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Analytics Features Component
const AnalyticsFeatures = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Track Referral Signups",
      description: "Monitor revenue generated from your referrals"
    },
    {
      icon: ChartLine,
      title: "Monitor Link Performance",
      description: "Track performance across different platforms"
    },
    {
      icon: Target,
      title: "Access Detailed Insights",
      description: "See which channels bring the best results"
    },
    {
      icon: CreditCard,
      title: "Manage Payouts Easily",
      description: "Handle all payments from your affiliate dashboard"
    }
  ];

  const iconTransition = {
    duration: 0.6
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="bg-gradient-to-br from-[#19001d] to-black rounded-2xl p-6 border border-[#480056] hover:border-[#b45ecf] transition-all duration-300 text-center group"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={iconTransition}
            className="w-14 h-14 bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg"
          >
            <feature.icon className="h-7 w-7 text-white" />
          </motion.div>
          
          <h4 className="text-white font-bold text-lg mb-3">{feature.title}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

          {/* Pulse animation on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              background: `linear-gradient(45deg, ${COLORS.primary}10, ${COLORS.darkPurple}10)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Pulse Wave Section
const PulseWaveSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Pulse Waves */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.05, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
            }}
            style={{
              background: `radial-gradient(circle, ${COLORS.primary}20, transparent)`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Animated Background Grid
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(144)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-current rounded"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              background: COLORS.primary,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
export default function ReferralProgramPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#19001d] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedGrid />
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative space-y-8"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <motion.div
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${COLORS.primary}, ${COLORS.darkPurple})`,
                      `linear-gradient(45deg, ${COLORS.darkPurple}, ${COLORS.primary})`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="px-6 py-3 rounded-full shadow-2xl"
                >
                  <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                    <Sparkle className="h-4 w-4 mr-2" />
                    360Airo Referral Program
                  </span>
                </motion.div>
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
                    Turn Connections
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="block bg-gradient-to-r from-[#b45ecf] via-[#480056] to-[#b45ecf] bg-clip-text text-transparent"
                  >
                    into Rewards
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-2xl text-white/80 font-light leading-relaxed"
                >
                  Your Network Deserves Smarter Outreach
                  <br />
                  <span className="text-white/60">(And You Deserve Rewards for Sharing It)</span>
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="space-y-4 max-w-xl"
              >
                <p className="text-lg text-white/70 leading-relaxed">
                  <span className="text-white font-semibold">Growth feels better when it's shared.</span>{' '}
                  With the 360Airo Referral Program, you can introduce your network to a platform that simplifies outreach — and earn rewards every time someone joins through your link.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Whether you're referring a teammate, an agency, or a friend running cold email campaigns, everyone wins. You help others scale smarter, and we reward you for spreading the word.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:from-[#b45ecf] hover:to-[#480056] px-8 py-4 text-lg font-bold rounded-2xl shadow-2xl border-0"
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                    />
                    <span className="relative z-10 flex items-center">
                      Get Your Referral Link
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Orbital Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <OrbitalAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <PulseWaveSection className="py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
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
              How the Referral Program Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              We designed our refer and earn system to be as simple and transparent as possible
            </motion.p>
          </motion.div>

          <AnimatedSteps />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              You can track every click, conversion, and earning inside your referral dashboard, giving you real-time visibility into your performance.
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white text-xl font-bold mt-6 bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent"
            >
              The more you share, the more you earn — and there's no cap on how much you can make.
            </motion.p>
          </motion.div>
        </div>
      </PulseWaveSection>

      {/* Why Join Section */}
      <section className="py-20 px-6 bg-[#19001d] relative overflow-hidden">
        <FloatingParticles />
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
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Why Join the 360Airo Referral Program
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              We believe in rewarding relationships. That's why our customer referral program is designed to benefit both sides — you and your network.
            </motion.p>
          </motion.div>

          <FloatingBenefits />

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.p
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
              className="text-2xl font-bold italic bg-gradient-to-r from-[#b45ecf] via-[#480056] to-[#b45ecf] bg-clip-text text-transparent bg-size-200"
            >
              Our program isn't about one-time rewards — it's about building partnerships that grow alongside your influence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Can Become a Referrer Section */}
      <PulseWaveSection className="py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
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
              Who Can Become a 360Airo Referrer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              You don't need to be an influencer or a marketer — just someone who loves helping businesses grow.
            </motion.p>
          </motion.div>

          <WhoCanReferGrid />

          {/* Qualification Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white text-xl font-bold bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
              If you believe in smarter communication, you already qualify.
            </p>
          </motion.div>
        </div>
      </PulseWaveSection>

      {/* Track, Grow, and Earn Section */}
      <section className="py-20 px-6 bg-[#19001d] relative overflow-hidden">
        <FloatingParticles />
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
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Track, Grow, and Earn Transparently
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl mx-auto"
            >
              Transparency is at the heart of our referral management system. Every referral you make is logged and monitored — from click to conversion — so you always know exactly how much you've earned.
            </motion.p>
          </motion.div>

          <AnalyticsFeatures />

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white text-xl font-bold">
              No hidden policies, no guesswork — just clear numbers that reward your effort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <PulseWaveSection className="py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
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
              Your Influence, Rewarded
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              The 360Airo Referral Program isn't just a reward system — it's a way to turn your professional network into a revenue stream. By helping others discover automation that improves email deliverability, lead engagement, and campaign performance, you build your influence while earning long-term rewards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl text-white font-bold bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent"
            >
              Every referral brings value to two sides — the user who grows faster, and you, who grows alongside them.
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
                  className="relative overflow-hidden bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:from-[#b45ecf] hover:to-[#480056] px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl border-0"
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                  <span className="relative z-10 flex items-center">
                    Start Referring Today — It Only Takes a Minute
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4 pt-8"
            >
              <p className="text-white/80 text-lg italic">
                Don't let your recommendations go unrewarded.
              </p>
              <p className="text-white/70 text-lg">
                Join the 360Airo Referral Program today and earn for every successful signup you bring in.
              </p>
              <p className="text-white text-xl font-bold">
                Empower your network. Boost your income. Grow together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </PulseWaveSection>

      <Footer />
    </div>
  );
}