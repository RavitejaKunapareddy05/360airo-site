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
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Color constants
const COLORS = {
  primary: '#b45ecf',
  darkPurple: '#480056',
  darkest: '#19001d',
  white: '#ffffff'
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#19001d] to-black rounded-2xl border border-[#480056] overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className={`transition-all duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/3'}`}>
        <div className="p-6">
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
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 ${
        isOpen 
          ? 'border-2 border-[#b45ecf]/50 shadow-[0_0_30px_rgba(180,94,207,0.3)]' 
          : 'border border-[#480056] group-hover:border-[#b45ecf]/30'
      }`} />
    </motion.div>
  );
};

// Floating Particles Background
const FloatingParticles = () => {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(isMobile ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * (isMobile ? 25 : 50), 0],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * (isMobile ? 4 : 6) + 2,
            height: Math.random() * (isMobile ? 4 : 6) + 2,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const size = isMobile ? 200 : 320;
  const orbitRadius = isMobile ? 60 : 120;
  const elementSize = isMobile ? 10 : 16;

  return (
    <div className={`relative ${isMobile ? 'w-48 h-48' : 'w-80 h-80'} mx-auto`}>
      {/* Central Orb */}
      <motion.div
        className={`absolute ${isMobile ? 'ins-12' : 'ins-20'} bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-full shadow-2xl`}
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
          <Share2 className={isMobile ? "h-8 w-8" : "h-16 w-16"} />
        </div>
      </motion.div>

      {/* Orbiting Elements */}
      {[...Array(isMobile ? 4 : 6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: elementSize * 2,
            height: elementSize * 2,
            left: '50%',
            top: '50%',
            marginLeft: -elementSize,
            marginTop: -elementSize,
          }}
          animate={{
            rotate: rotation * (i % 2 === 0 ? 1 : -1),
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <motion.div
            className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-2xl flex items-center justify-center shadow-lg`}
            animate={{
              x: orbitRadius * Math.cos((i * (360 / (isMobile ? 4 : 6)) * Math.PI) / 180),
              y: orbitRadius * Math.sin((i * (360 / (isMobile ? 4 : 6)) * Math.PI) / 180),
            }}
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.darkPurple})`,
            }}
          >
            {i % 3 === 0 ? (
              <Coins className={isMobile ? "h-4 w-4" : "h-6 w-6"} />
            ) : i % 3 === 1 ? (
              <Users className={isMobile ? "h-4 w-4" : "h-6 w-6"} />
            ) : (
              <TrendingUp className={isMobile ? "h-4 w-4" : "h-6 w-6"} />
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(isMobile ? 4 : 6)].map((_, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={50 + 30 * Math.cos((i * (360 / (isMobile ? 4 : 6)) * Math.PI) / 180) + '%'}
            y2={50 + 30 * Math.sin((i * (360 / (isMobile ? 4 : 6)) * Math.PI) / 180) + '%'}
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={!isMobile ? { 
            y: -10, 
            scale: 1.05,
          } : {}}
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
          <div className="relative bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-6 md:p-8 border border-[#480056] group-hover:border-transparent transition-all duration-500 backdrop-blur-sm">
            {/* Animated Number */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              whileHover={{ 
                scale: !isMobile ? 1.2 : 1,
              }}
              transition={{ duration: 0.6 }}
              className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
            >
              <step.icon className={isMobile ? "h-6 w-6" : "h-8 w-8"} />
            </motion.div>
            
            <h3 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{step.description}</p>

            {/* Hover Effect Line */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full"
              initial={{ width: 0 }}
              whileHover={!isMobile ? { width: '100%' } : {}}
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={!isMobile ? { 
            y: -15,
          } : {}}
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
              y: isMobile ? 0 : [0, -10, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-6 md:p-8 border border-[#480056] group-hover:border-transparent transition-all duration-500 backdrop-blur-sm"
          >
            {/* Animated Icon Background */}
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full opacity-10"
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
                scale: !isMobile ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
              className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg relative z-10`}
              style={{ background: benefit.color }}
            >
              <benefit.icon className={isMobile ? "h-5 w-5" : "h-7 w-7"} />
            </motion.div>
            
            <h4 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4 relative z-10">{benefit.title}</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base relative z-10">{benefit.description}</p>

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {referrers.map((referrer, index) => (
        <motion.div
          key={referrer.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={!isMobile ? { y: -10, scale: 1.02 } : {}}
          className="bg-gradient-to-br from-[#19001d] to-black rounded-3xl p-6 md:p-8 border border-[#480056] hover:border-[#b45ecf] transition-all duration-300 group"
        >
          <motion.div
            whileHover={{ scale: !isMobile ? 1.1 : 1 }}
            transition={iconTransition}
            className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}
          >
            <referrer.icon className={isMobile ? "h-6 w-6" : "h-8 w-8"} />
          </motion.div>
          
          <h4 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">{referrer.title}</h4>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{referrer.description}</p>

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={!isMobile ? { y: -8, scale: 1.05 } : {}}
          className="bg-gradient-to-br from-[#19001d] to-black rounded-2xl p-4 md:p-6 border border-[#480056] hover:border-[#b45ecf] transition-all duration-300 text-center group"
        >
          <motion.div
            whileHover={{ scale: !isMobile ? 1.1 : 1 }}
            transition={iconTransition}
            className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg`}
          >
            <feature.icon className={isMobile ? "h-5 w-5" : "h-7 w-7"} />
          </motion.div>
          
          <h4 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">{feature.title}</h4>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{feature.description}</p>

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

// Pulse Wave Section - Fixed to remove id prop
const PulseWaveSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
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
    <div className={`relative overflow-hidden ${className}`}>
      {/* Pulse Waves */}
      {!isMobile && (
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
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Animated Background Grid
const AnimatedGrid = () => {
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
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div className={`grid ${isMobile ? 'grid-cols-8' : 'grid-cols-12'} gap-4 h-full`}>
        {[...Array(isMobile ? 64 : 144)].map((_, i) => (
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

// FAQ Data
const faqData = [
  {
    question: "What is the 360Airo Referral Program, and how does it work?",
    answer: "The 360Airo Referral Program rewards existing users for referring new customers. Users share referral links, and when someone signs up and subscribes, rewards are credited. The program is designed to be simple, transparent, and mutually beneficial.",
    id: "what-is-program"
  },
  {
    question: "Who is eligible to join the 360Airo referral program?",
    answer: "Any active 360Airo user can participate in the referral program. There are no restrictions, allowing customers, partners, and teams to earn rewards by recommending the platform to their network.",
    id: "eligibility"
  },
  {
    question: "Are referral rewards recurring for active subscriptions?",
    answer: "Referral rewards may be recurring depending on the plan and referral structure. This encourages users to refer high quality customers and benefit from long term engagement rather than one time rewards.",
    id: "recurring-rewards"
  },
  {
    question: "How can I track clicks, signups, and earnings from referrals?",
    answer: "360Airo provides a referral dashboard that tracks clicks, registrations, conversions, and rewards in real time. This transparency helps users understand performance and optimize their referral efforts easily.",
    id: "tracking"
  },
  {
    question: "What payout options are available for referral rewards?",
    answer: "Referral rewards are paid using supported payout methods once eligibility criteria are met. The payout process is streamlined and reliable, ensuring users receive rewards without unnecessary delays or complexity.",
    id: "payout-options"
  },
  {
    question: "Is there any limit on the number of referrals I can make?",
    answer: "There is no limit on the number of referrals you can make with 360Airo. Users can refer as many people as they want, allowing unlimited earning potential based on their network and reach.",
    id: "referral-limits"
  },
  {
    question: "How transparent is the 360Airo referral tracking and payout system?",
    answer: "The referral system is fully transparent, with real time tracking and clear payout rules. Users can see exactly how referrals convert into rewards, building trust and confidence in the program.",
    id: "transparency"
  },
  {
    question: "Is it free to sign up for the referral program?",
    answer: "Yes, the 360Airo referral program is completely free to join. Existing users can start referring immediately without any additional costs or commitments.",
    id: "free-signup"
  }
];

// Main Component
export default function ReferralProgramPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleFaqClick = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* Hidden meta tags for client-side rendering */}
      <div className="hidden">
        <title>360Airo Referral Program | Earn Recurring Rewards for Referrals</title>
        <meta name="description" content="Join the 360Airo Referral Program to introduce your network to a powerful outreach platform & earn exciting rewards every time someone signs up through your link.
" />
        <meta name="keywords" content="360Airo referral program, earn rewards, referral marketing, AI outreach platform, email warmup referral, recurring commissions, affiliate program" />
        
        {/* Canonical URL - This tells search engines this is the original page */}
        <link rel="canonical" href="https://360airo.com/features/360airo-affiliate-program" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="360Airo Referral Program | Earn Recurring Rewards for Referrals" />
        <meta property="og:description" content="Join the 360Airo Referral Program to introduce your network to a powerful outreach platform & earn exciting rewards every time someone signs up through your link.
" />
        <meta property="og:url" content="https://360airo.com/features/360airo-affiliate-program" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-referral-program.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360Airo Referral Program | Earn Recurring Rewards for Referrals" />
        <meta name="twitter:description" content="Join the 360Airo Referral Program to introduce your network to a powerful outreach platform & earn exciting rewards every time someone signs up through your link.
" />
        <meta name="twitter:image" content="https://360airo.com/twitter-referral-program.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45ecf" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </div>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Referral Program",
              "description": "Join the 360Airo Referral Program and earn recurring rewards by sharing the AI-powered outreach platform with your network.",
              "url": "https://360airo.com/features/360airo-affiliate-program",
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

      <div ref={containerRef} className="min-h-screen bg-[#19001d] overflow-hidden">
        <Navbar />

        {/* Hidden link for SEO - helps search engines discover the URL */}
        <div className="hidden">
          <a rel="canonical" href="https://360airo.com/features/360airo-referral-program">360Airo Referral Program</a>
        </div>

        {/* Hero Section - Mobile First Layout */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 lg:pt-0">
          <AnimatedGrid />
          <FloatingParticles />
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-screen py-12 lg:py-20">
              
              {/* Left Content - Always first on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative space-y-6 lg:space-y-8 order-1"
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
                    className="px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl"
                  >
                    <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider flex items-center">
                      <Sparkle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      360Airo Referral Program
                    </span>
                  </motion.div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
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
                    className="text-lg md:text-2xl text-white/80 font-light leading-relaxed"
                  >
                    Your Network Deserves Smarter Outreach
                    <br />
                    <span className="text-white/60 text-base md:text-xl">(And You Deserve Rewards for Sharing It)</span>
                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                  className="space-y-4 max-w-xl"
                >
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">Growth feels better when it's shared.</span>{' '}
                    With the 360Airo Referral Program, you can introduce your network to a platform that simplifies outreach — and earn rewards every time someone joins through your link.
                  </p>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    Whether you're referring a teammate, an agency, or a friend running cold email campaigns, everyone wins. You help others scale smarter, and we reward you for spreading the word.
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="pt-6 lg:pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      size="lg" 
                      className="relative overflow-hidden bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:from-[#b45ecf] hover:to-[#480056] px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-2xl shadow-2xl border-0 w-full lg:w-auto"
                      onClick={() => window.open('https://app.360airo.com/', '_blank')}
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
                      <span className="relative z-10 flex items-center justify-center lg:justify-start">
                        Get Your Referral Link
                        <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - Always second on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative order-2 mb-8 lg:mb-0"
              >
                <OrbitalAnimation />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <PulseWaveSection className="py-12 lg:py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                How the Referral Program Works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
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
              className="mt-12 lg:mt-16 text-center"
            >
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                You can track every click, conversion, and earning inside your referral dashboard, giving you real-time visibility into your performance.
              </p>
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white text-lg md:text-xl font-bold mt-4 lg:mt-6 bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent"
              >
                The more you share, the more you earn — and there's no cap on how much you can make.
              </motion.p>
            </motion.div>
          </div>
        </PulseWaveSection>

        {/* Why Join Section */}
        <section className="py-12 lg:py-20 px-6 bg-[#19001d] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                Why Join the 360Airo Referral Program
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
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
              className="mt-12 lg:mt-16 text-center"
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
                className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-[#b45ecf] via-[#480056] to-[#b45ecf] bg-clip-text text-transparent bg-size-200"
              >
                Our program isn't about one-time rewards — it's about building partnerships that grow alongside your influence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Who Can Become a Referrer Section */}
        <PulseWaveSection className="py-12 lg:py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                Who Can Become a 360Airo Referrer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
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
              className="mt-8 lg:mt-12 text-center"
            >
              <p className="text-white text-lg md:text-xl font-bold bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
                If you believe in smarter communication, you already qualify.
              </p>
            </motion.div>
          </div>
        </PulseWaveSection>

        {/* Track, Grow, and Earn Section */}
        <section className="py-12 lg:py-20 px-6 bg-[#19001d] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                Track, Grow, and Earn Transparently
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
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
              className="mt-8 lg:mt-12 text-center"
            >
              <p className="text-white text-lg md:text-xl font-bold">
                No hidden policies, no guesswork — just clear numbers that reward your effort.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION - Added before final CTA */}
        <section id="faq" className="py-12 lg:py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056] relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <motion.div className="inline-block mb-3 lg:mb-4">
                <span className="text-[#b45ecf] font-semibold text-xs lg:text-sm tracking-wider uppercase">FAQs</span>
              </motion.div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Frequently Asked <span className="text-[#b45ecf]">Questions</span>
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about the 360Airo Referral Program and how you can start earning rewards today.
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
                whileHover={{ scale: 1.04, y: -4 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-block"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl hover:shadow-lg hover:shadow-[#b45ecf]/30 transition-all duration-300"
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  Contact Support
                  <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <PulseWaveSection className="py-12 lg:py-20 px-6 bg-gradient-to-br from-[#19001d] via-[#19001d] to-[#480056]">
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
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 lg:mb-6"
              >
                Your Influence, Rewarded
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                The 360Airo Referral Program isn't just a reward system — it's a way to turn your professional network into a revenue stream. By helping others discover automation that improves email deliverability, lead engagement, and campaign performance, you build your influence while earning long-term rewards.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-white font-bold bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent"
              >
                Every referral brings value to two sides — the user who grows faster, and you, who grows alongside them.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-6 lg:pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:from-[#b45ecf] hover:to-[#480056] px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold rounded-2xl shadow-2xl border-0 w-full lg:w-auto"
                    onClick={() => window.open('https://app.360airo.com/', '_blank')}
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
                    <span className="relative z-10 flex items-center justify-center lg:justify-start">
                      Start Referring Today — It Only Takes a Minute
                      <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-6 md:w-6" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-4 pt-6 lg:pt-8"
              >
                <p className="text-white/80 text-base md:text-lg italic">
                  Don't let your recommendations go unrewarded.
                </p>
                <p className="text-white/70 text-base md:text-lg">
                  Join the 360Airo Referral Program today and earn for every successful signup you bring in.
                </p>
                <p className="text-white text-lg md:text-xl font-bold">
                  Empower your network. Boost your income. Grow together.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </PulseWaveSection>

        <Footer />
      </div>
    </>
  );
}
