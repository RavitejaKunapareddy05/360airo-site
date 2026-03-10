// app/academy/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Target, 
  BarChart3, 
  Zap,
  ArrowRight,
  Play,
  Sparkles,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Shield,
  Mail,
  Linkedin,
  Calendar,
  Star,
  Award,
  Lightbulb,
  Brain,
  GraduationCap,
  Video,
  FileText,
  Clock,
  Cpu,
  GitBranch
} from "lucide-react";

export default function Academy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const curriculum = [
    {
      module: "01",
      title: "Getting Started with 360Airo",
      description: "Understand how to set up your account, connect platforms, and get your first outreach campaign running without technical complexity.",
      icon: Rocket,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["Account Setup", "Platform Integration", "First Campaign Launch"],
      duration: "30 min",
      outcomes: ["Setup complete account", "Connect all platforms", "Launch first campaign"]
    },
    {
      module: "02",
      title: "Building Winning Prospect Lists",
      description: "Learn how to identify, filter, and segment leads that match your ideal customer profile — so your efforts never go to waste.",
      icon: Target,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["ICP Definition", "Lead Filtering", "Smart Segmentation"],
      duration: "45 min",
      outcomes: ["Define perfect ICP", "Filter high-quality leads", "Create targeted segments"]
    },
    {
      module: "03",
      title: "Multi-Channel Outreach Mastery",
      description: "Master how to combine emails, LinkedIn messages, and calls strategically for better engagement and higher response rates.",
      icon: GitBranch,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["Email Strategy", "LinkedIn Outreach", "Call Integration"],
      duration: "60 min",
      outcomes: ["Multi-channel strategy", "Higher response rates", "Integrated outreach"]
    },
    {
      module: "04",
      title: "Crafting High-Performing Campaigns",
      description: "Discover how to write personalized messages, set up automated follow-ups, and schedule campaigns for maximum visibility.",
      icon: MessageCircle,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["Message Writing", "Follow-up Sequences", "Optimal Scheduling"],
      duration: "50 min",
      outcomes: ["Personalized messaging", "Automated follow-ups", "Perfect timing"]
    },
    {
      module: "05",
      title: "Avoiding Spam Traps and Deliverability Issues",
      description: "Gain practical insight into how email deliverability works, how to warm up domains, and how to maintain a positive sender reputation.",
      icon: Shield,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["Email Warmup", "Spam Prevention", "Reputation Management"],
      duration: "40 min",
      outcomes: ["Avoid spam filters", "Warm up domains", "Maintain reputation"]
    },
    {
      module: "06",
      title: "Measuring and Improving Performance",
      description: "Understand the analytics dashboard, interpret data, and tweak your strategy for continuous improvement.",
      icon: BarChart3,
      gradient: "from-[#b45ecf] to-[#480056]",
      lessons: ["Analytics Dashboard", "Performance Metrics", "Strategy Optimization"],
      duration: "55 min",
      outcomes: ["Read analytics", "Track performance", "Optimize campaigns"]
    }
  ];

  const targetAudience = [
    {
      group: "Marketers & Agencies",
      description: "Who want to automate campaigns and improve engagement",
      icon: Users,
      gradient: "from-[#b45ecf] to-[#480056]",
      benefits: ["Campaign automation", "Better engagement", "Client results"]
    },
    {
      group: "Founders & Entrepreneurs",
      description: "Looking to generate leads without spending heavily on ads",
      icon: Award,
      gradient: "from-[#b45ecf] to-[#480056]",
      benefits: ["Cost-effective leads", "No ad spend", "Direct outreach"]
    },
    {
      group: "Sales Professionals",
      description: "Who want to streamline prospecting and follow-up",
      icon: Target,
      gradient: "from-[#b45ecf] to-[#480056]",
      benefits: ["Efficient prospecting", "Automated follow-ups", "More meetings"]
    },
    {
      group: "Teams",
      description: "That want to stay aligned and use automation effectively",
      icon: Users,
      gradient: "from-[#b45ecf] to-[#480056]",
      benefits: ["Team alignment", "Shared processes", "Scalable automation"]
    }
  ];

  const learningOutcomes = [
    {
      outcome: "Build and segment lists that convert",
      icon: Target,
      description: "Create highly targeted prospect lists that drive results"
    },
    {
      outcome: "Craft personalized outreach sequences",
      icon: MessageCircle,
      description: "Develop messaging that resonates with your audience"
    },
    {
      outcome: "Track campaign performance easily",
      icon: BarChart3,
      description: "Monitor and analyze campaign effectiveness in real-time"
    },
    {
      outcome: "Scale campaigns without compromising quality",
      icon: TrendingUp,
      description: "Grow your outreach while maintaining personalization"
    },
    {
      outcome: "Integrate new communication channels effectively",
      icon: GitBranch,
      description: "Seamlessly add channels to your outreach strategy"
    },
    {
      outcome: "Master multi-channel outreach strategies",
      icon: Zap,
      description: "Coordinate email, LinkedIn, and calls for maximum impact"
    }
  ];

  const academyFeatures = [
    {
      icon: Video,
      title: "Video Lessons",
      description: "Short, focused tutorials that get straight to the point",
      color: "text-[#b45ecf]",
      detail: "Bite-sized videos under 10 minutes each"
    },
    {
      icon: FileText,
      title: "Practical Templates",
      description: "Ready-to-use campaign templates and scripts",
      color: "text-[#b45ecf]",
      detail: "Copy-paste templates that work"
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Learn at your own speed and implement as you go",
      color: "text-[#b45ecf]",
      detail: "No deadlines, learn on your schedule"
    },
    {
      icon: TrendingUp,
      title: "Real Results",
      description: "Strategies proven to work in actual campaigns",
      color: "text-[#b45ecf]",
      detail: "Tested frameworks from successful users"
    },
    {
      icon: Cpu,
      title: "Continuous Updates",
      description: "Always current with latest features and trends",
      color: "text-[#b45ecf]",
      detail: "Regular content updates included"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Learn from other 360Airo users and experts",
      color: "text-[#b45ecf]",
      detail: "Join our exclusive community"
    }
  ];

  const successMetrics = [
    { number: "89%", label: "Faster Campaign Setup", icon: Rocket },
    { number: "3.2x", label: "Higher Response Rates", icon: MessageCircle },
    { number: "67%", label: "Time Saved Weekly", icon: Clock },
    { number: "2.5x", label: "More Qualified Leads", icon: Target }
  ];

  // Animation variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background with Mobile Optimization */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large animated orbs - hidden on mobile */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-[#b45ecf]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#480056]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#19001d]/50 rounded-full blur-2xl"
        />

        {/* Mobile-optimized smaller orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="md:hidden absolute top-20 left-10 w-48 h-48 bg-[#b45ecf]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="md:hidden absolute bottom-20 right-10 w-40 h-40 bg-[#480056]/20 rounded-full blur-2xl"
        />
        
        {/* Floating particles - optimized for mobile */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -80, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-[#b45ecf]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Animated grid lines */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] md:bg-[size:60px_60px]"
        />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-8 h-8 border border-[#b45ecf]/30 rounded-full hidden md:block"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-[#480056]/40 rounded-full hidden md:block"
        />

        {/* Mobile-only floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="md:hidden absolute top-40 right-8 w-4 h-4 bg-[#b45ecf]/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 8, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="md:hidden absolute bottom-40 left-6 w-3 h-3 bg-[#480056]/30 rounded-full"
        />
      </div>

      {/* Animated Hero Section with Mobile Optimization */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 group hover:bg-white/20 transition-all duration-500"
          >
            <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
            <span className="text-white/90 font-semibold text-sm md:text-base">360 Academy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
              360 Academy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-relaxed"
          >
            Learn, Implement, and Master{" "}
            <span className="bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
              Cold Outreach
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Welcome to 360 Academy — the learning platform built exclusively for 360Airo users who want to master the art of outreach and turn automation into meaningful engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#b45ecf]/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group border-0 w-full sm:w-auto"
              >
                <BookOpen className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover:border-white/30 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Watch Intro
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Academy Matters - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
                360 Academy Matters
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#b45ecf]/10 border border-[#b45ecf]/20 backdrop-blur-sm hover:border-[#b45ecf]/40 transition-all duration-500"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Outreach Challenge</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Cold outreach is evolving faster than ever. With inbox filters tightening and attention spans shrinking, it's no longer about sending hundreds of messages.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#480056]/20 border border-[#480056]/30 backdrop-blur-sm hover:border-[#480056]/50 transition-all duration-500"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Academy Solution</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  360 Academy helps you do exactly that. It gives you the knowledge, strategies, and systems to use 360Airo effectively and confidently.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#19001d]/50 border border-[#19001d]/60 backdrop-blur-sm hover:border-[#19001d]/80 transition-all duration-500"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Your Learning Goal</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  The goal is simple: to make you self-sufficient, skilled, and successful in using automation that actually delivers results.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {successMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm border border-white/10 hover:border-[#b45ecf]/40 transition-all duration-300"
                  >
                    <metric.icon className="w-6 h-6 md:w-8 md:h-8 text-[#b45ecf] mb-2 md:mb-3 mx-auto" />
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-white/70 text-xs md:text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              What You'll Learn Inside 360 Academy
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              The academy offers a complete, step-by-step guide on how to plan, create, and optimize outreach that converts.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {curriculum.map((module, index) => (
              <motion.div
                key={module.module}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-500 group border border-white/10 hover:border-[#b45ecf]/40"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${module.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white text-sm md:text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {module.module}
                  </motion.div>
                  <module.icon className="w-6 h-6 md:w-8 md:h-8 text-[#b45ecf]" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text line-clamp-2">
                  {module.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3">
                  {module.description}
                </p>

                <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <motion.div
                      key={lesson}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: lessonIndex * 0.05, ease: "easeOut" }}
                      className="flex items-center text-gray-400 text-xs md:text-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#b45ecf] mr-1 md:mr-2 flex-shrink-0" />
                      <span className="truncate">{lesson}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 text-[#b45ecf]" />
                    {module.duration}
                  </span>
                  <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
                    {module.lessons.length} lessons
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Academy Helps You Succeed - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              How 360 Academy Helps You Succeed
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
              What makes 360 Academy different is its focus on application. The lessons are based on real campaign scenarios and tested frameworks.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {academyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/15 hover:border-[#b45ecf]/40 transition-all duration-500 group"
              >
                <feature.icon className={`w-8 h-8 md:w-12 md:h-12 ${feature.color} mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform`} />
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-white/70 text-xs md:text-sm mb-2">{feature.description}</p>
                <p className="text-white/50 text-xs">{feature.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Who Should Join 360 Academy
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              360 Academy is for anyone who wants to make cold outreach smarter and more strategic.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.group}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-500 group border border-white/10 hover:border-[#b45ecf]/40"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${audience.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text line-clamp-2">
                  {audience.group}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2">
                  {audience.description}
                </p>
                <div className="space-y-1">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: benefitIndex * 0.1, ease: "easeOut" }}
                      className="flex items-center text-gray-500 text-xs"
                    >
                      <CheckCircle2 className="w-2 h-2 md:w-3 md:h-3 text-[#b45ecf] mr-1 flex-shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Experience - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              The 360 Academy Experience
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Designed to be intuitive, practical, and time-efficient. Learn as you implement, experiment, and grow.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {learningOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.outcome}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-[#b45ecf]/40 transition-all duration-500 group"
              >
                <outcome.icon className="w-8 h-8 md:w-10 md:h-10 text-[#b45ecf] mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 line-clamp-2">{outcome.outcome}</h3>
                <p className="text-white/70 text-xs md:text-sm line-clamp-2">{outcome.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Start Now - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Why You Should Start Learning Now
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#b45ecf]/10 border border-[#b45ecf]/20 backdrop-blur-sm hover:border-[#b45ecf]/40 transition-all duration-500"
              >
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#b45ecf] mb-2 md:mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Shortcut to Results</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  360 Academy isn't just a learning space — it's your shortcut to results. Every insight you gain directly impacts your campaigns.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#480056]/20 border border-[#480056]/30 backdrop-blur-sm hover:border-[#480056]/50 transition-all duration-500"
              >
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#480056] mb-2 md:mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Repeatable Process</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Build a repeatable outreach process that continues delivering leads long after the initial setup.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#19001d]/50 border border-[#19001d]/60 backdrop-blur-sm hover:border-[#19001d]/80 transition-all duration-500"
              >
                <Cpu className="w-6 h-6 md:w-8 md:h-8 text-[#19001d] mb-2 md:mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Always Current</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Continuously updated with latest outreach trends, deliverability standards, and 360Airo feature updates.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/20 border border-[#b45ecf]/20 backdrop-blur-sm hover:border-[#b45ecf]/40 transition-all duration-500"
              >
                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#b45ecf] mb-2 md:mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Faster Scaling</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  The sooner you master the platform, the faster you move from testing to scaling your outreach efforts.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Mobile Optimized */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#19001d] to-[#480056] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 hover:border-[#b45ecf]/40 transition-all duration-500"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 mx-auto"
            >
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Begin Your Learning Journey
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              If you're serious about turning cold outreach into a predictable growth engine, 360 Academy is where it begins.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#b45ecf]/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group border-0 w-full sm:w-auto"
              >
                <BookOpen className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Start Learning Today
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-white/60 mt-4 md:mt-6 text-xs md:text-sm"
            >
              For any learning-related queries, reach out to us at our official mail.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}