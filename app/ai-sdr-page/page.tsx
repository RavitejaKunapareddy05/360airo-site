// app/ai-sdr/page.tsx
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/navbar'; 
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Clock,
  Mail,
  MessageCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  Play,
  Shield,
  Workflow,
  TrendingUp,
  CheckCircle2,
  Star,
  Rocket,
  Cpu,
  Bot,
  MessageSquare,
  Hexagon
} from "lucide-react";

// Floating background elements component
const FloatingShapes = () => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - reduced scale and blur on mobile */}
      <motion.div
        animate={{
          x: isMobile ? [0, 50, 0] : [0, 100, 0],
          y: isMobile ? [0, -30, 0] : [0, -50, 0],
          scale: isMobile ? [0.8, 1, 0.8] : [1, 1.2, 1],
        }}
        transition={{
          duration: isMobile ? 15 : 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full opacity-10 blur-2xl md:blur-3xl"
      />
      <motion.div
        animate={{
          x: isMobile ? [0, -40, 0] : [0, -80, 0],
          y: isMobile ? [0, 40, 0] : [0, 60, 0],
          scale: isMobile ? [1, 0.8, 1] : [1.2, 1, 1.2],
        }}
        transition={{
          duration: isMobile ? 20 : 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-3/4 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-[#480056] to-[#19001d] rounded-full opacity-15 blur-2xl md:blur-3xl"
      />
      <motion.div
        animate={{
          x: isMobile ? [0, 60, 0] : [0, 120, 0],
          y: isMobile ? [0, 20, 0] : [0, 30, 0],
          scale: isMobile ? [0.8, 1.1, 0.8] : [1, 1.3, 1],
        }}
        transition={{
          duration: isMobile ? 25 : 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-[#19001d] to-[#b45ecf] rounded-full opacity-10 blur-2xl md:blur-3xl"
      />

      {/* Floating hexagons - reduced count and size on mobile */}
      {[...Array(isMobile ? 6 : 12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: isMobile ? [0, -15, 0] : [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: isMobile ? 12 + i * 2 : 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Hexagon 
            size={isMobile ? 16 + i * 3 : 24 + i * 4} 
            className="text-purple-500/10" 
          />
        </motion.div>
      ))}
    </div>
  );
};

// Animated gradient text component
const AnimatedGradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 ${className}`}
      style={{
        backgroundSize: '200% 200%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
};

// Particle background component
const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: number}>>([]);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useEffect(() => {
    const particleCount = isMobile ? 25 : 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 3 : 4) + 1,
    }));
    setParticles(newParticles);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-500/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: isMobile ? [0, -20, 0] : [0, -30, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: isMobile ? 15 + Math.random() * 15 : 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function AISDR() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Enhanced scroll transformations
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle button redirects
  const handleRedirect = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  const workflowSteps = [
    {
      step: "01",
      title: "Define Ideal Customer Profile",
      description: "Tell 360Airo who you want to reach: industry, role, company size, geography, behavioral triggers. The system ingests your ICP and combines it with intent signals to hone in on the right prospects.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      step: "02",
      title: "Automated Lead Discovery & Enrichment",
      description: "While you sleep, the AI SDR finds leads that fit your profile. It enriches data with firmographics, contact info, LinkedIn activity, and engagement history.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      step: "03",
      title: "Multi-Channel Outreach Built to Convert",
      description: "Your AI SDR starts personalized outreach across email, LinkedIn, and SMS. Every message feels human, adapts tone, and references recent activity.",
      icon: MessageCircle,
      gradient: "from-green-500 to-emerald-500",
      delay: 0.4
    },
    {
      step: "04",
      title: "Intelligent Qualification & Meeting Booking",
      description: "When leads respond, the AI assesses fit in real-time, asks qualifying questions, updates your CRM, and books meetings directly into calendars.",
      icon: Calendar,
      gradient: "from-orange-500 to-red-500",
      delay: 0.6
    },
    {
      step: "05",
      title: "Continuous Learning & Optimization",
      description: "Every interaction teaches the system. The AI tunes outreach, adaptively improves copy and timing, and provides dashboard insights.",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.8
    }
  ];

  const keyFeatures = [
    {
      icon: Mail,
      title: "Personalized Message Generation",
      description: "Using real-time data per prospect",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Lead Scoring & Intent Analysis",
      description: "Based on intent, engagement and fit",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Workflow,
      title: "Full Funnel Automation",
      description: "Discovery, outreach, qualification, hand-off",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      icon: MessageSquare,
      title: "True Multichannel Sequencing",
      description: "Email, LinkedIn, SMS, call triggers",
      gradient: "from-orange-400 to-red-400"
    },
    {
      icon: BarChart3,
      title: "Real-time CRM Sync",
      description: "Complete pipeline visibility",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      icon: Shield,
      title: "Domain & Deliverability Safeguards",
      description: "Built-in reputation protection",
      gradient: "from-yellow-400 to-amber-400"
    }
  ];

  const metrics = [
    { value: "5x", label: "Faster Response Times", icon: Zap },
    { value: "3.2x", label: "Higher Reply Rates", icon: MessageCircle },
    { value: "89%", label: "More Qualified Meetings", icon: Calendar },
    { value: "67%", label: "Reduced Manual Tasks", icon: Clock }
  ];

  const benefits = [
    {
      title: "Sales Teams",
      description: "Book more meetings and reduce lead drop-off",
      icon: Users
    },
    {
      title: "Marketing Teams",
      description: "Consistent outreach without manual labor",
      icon: BarChart3
    },
    {
      title: "Growth Agencies",
      description: "Handle multiple clients and campaigns efficiently",
      icon: Rocket
    },
    {
      title: "Founders & SMBs",
      description: "Enterprise-level workflow without large teams",
      icon: Star
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
                      {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/ai-sdr-page" />
      <Navbar />
      
      {/* Enhanced background elements */}
      <ParticlesBackground />
      <FloatingShapes />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#19001d]/50 via-[#480056]/30 to-[#b45ecf]/40"
        style={{ y: backgroundY }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />

      {/* Animated Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 group hover:bg-white/20 transition-all duration-500 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(180, 94, 207, 0.3)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white mr-2 md:mr-3" />
            </motion.div>
            <span className="text-white/90 font-semibold text-sm md:text-base">AI Sales Development Representative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            <AnimatedGradientText>
              AI SDR
            </AnimatedGradientText>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="block text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4 text-white/80"
            >
              Powered by 360Airo
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-relaxed"
          >
            Turn Outreach into{" "}
            <motion.span
              className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Engagement at Scale
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Imagine a sales development representative that works 24/7, adapts to your brand voice, and never loses track of a lead. With 360Airo's AI SDR capability, you stop chasing replies and start building meaningful conversations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={handleRedirect}
                size="lg" 
                className="bg-white text-black hover:bg-white/90 hover:shadow-2xl hover:shadow-purple-500/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Rocket className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Book Demo
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={handleRedirect}
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover:border-white/30 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-16 md:py-20 bg-black/80 backdrop-blur-sm border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Why You Need an{" "}
              <AnimatedGradientText>
                AI SDR Today
              </AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Problem</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Sales teams face two big problems: too many leads, and too few replies. Manual SDRs are overloaded with outreach tasks, follow-ups, data entry and CRM updates, while buyers expect personalization at every touchpoint.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Solution</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Our AI SDR bridges that gap. It automates the entire top-of-funnel workflow: prospecting, outreach, follow-up, qualification, and hand-off. That means you respond to opportunities instantly, stay relevant, and keep your brand voice consistent — all at scale.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.08, y: -8 }}
                      className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <metric.icon className="w-6 h-6 md:w-8 md:h-8 text-white mb-2 md:mb-3 mx-auto" />
                      </motion.div>
                      <div className="text-lg md:text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-white/70 text-xs md:text-sm">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Animated Workflow */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A seamless 5-step process that transforms your outreach strategy
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: step.delay, type: "spring" }}
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-gray-900/50 to-black hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } border border-gray-800`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                      {step.step}
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <step.icon className={`w-6 h-6 md:w-8 md:h-8 text-transparent bg-gradient-to-br ${step.gradient} bg-clip-text`} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${step.gradient} rounded-2xl md:rounded-3xl p-6 md:p-8 h-48 md:h-64 flex items-center justify-center relative overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 w-full`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      animate={{
                        background: [
                          'rgba(0,0,0,0.2)',
                          'rgba(255,255,255,0.1)',
                          'rgba(0,0,0,0.2)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="text-white text-center relative z-10">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <step.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4" />
                      </motion.div>
                      <h4 className="text-lg md:text-xl font-semibold bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 md:px-6 md:py-2 inline-block">
                        {step.title.split(' ')[0]}
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Features You'll Use
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to scale your outreach without sacrificing quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03, 
                  rotate: index % 2 === 0 ? 1 : -1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div 
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl md:rounded-2xl`}
                  animate={{
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-lg md:rounded-xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 12
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Who Will Benefit Most
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group border border-gray-800 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <benefit.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base relative z-10 group-hover:text-white">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#480056] to-[#b45ecf] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <ParticlesBackground />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white to-purple-200 rounded-xl md:rounded-2xl flex items-center justify-center text-black mb-6 md:mb-8 mx-auto"
            >
              <Bot className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Deploy Your AI SDR?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience how your next campaign could look when AI handles outreach while your team focuses on selling.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button 
                onClick={handleRedirect}
                size="lg" 
                className="bg-white text-black hover:bg-white/90 hover:shadow-2xl hover:shadow-purple-500/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Rocket className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">Book a Demo Today</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}