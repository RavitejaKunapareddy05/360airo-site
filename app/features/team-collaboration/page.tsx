// app/team-collaboration/page.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MessageSquare, 
  Workflow, 
  Brain, 
  Shield, 
  BarChart3,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  GitBranch,
  TrendingUp
} from "lucide-react";

export default function TeamCollaboration() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized animations for mobile
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const slideInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: "89%", label: "Faster Campaign Setup", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "67%", label: "Reduced Response Time", icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "3.2x", label: "Team Productivity", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "94%", label: "Team Satisfaction", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const features = [
    {
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Centralized Shared Workspace",
      description: "Single platform for all team coordination with real-time collaboration and transparent activity tracking.",
      highlights: [
        "Assign campaigns and tasks to team members",
        "Shared inbox for collective response management",
        "Complete message history and activity timelines",
        "Real-time collaboration features"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI-Powered Team Productivity",
      description: "Intelligent automation and smart suggestions to enhance team efficiency and decision-making.",
      highlights: [
        "AI-assisted reply suggestions",
        "Smart lead prioritization",
        "Automated task reminders",
        "Real-time performance dashboards"
      ]
    },
    {
      icon: <GitBranch className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multi-Channel Campaign Coordination",
      description: "Seamlessly manage campaigns across email, LinkedIn, and other channels with unified tracking.",
      highlights: [
        "Shared templates and sequences",
        "Collaborative messaging",
        "Team performance metrics",
        "Cross-team alignment tools"
      ]
    }
  ];

  const benefits = [
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Unified Workspace",
      description: "All team communication in one place"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Real-time Sync",
      description: "Instant updates across all team members"
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "AI Assistance",
      description: "Smart suggestions and automation"
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Secure Access",
      description: "Role-based permissions and controls"
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Live Dashboards",
      description: "Real-time performance tracking"
    },
    {
      icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Workflow Automation",
      description: "Streamlined team processes"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-black via-[#19001d] to-[#480056] text-white overflow-hidden">
        {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/features/team-collaboration" />
      <Navbar />
      
      {/* Optimized Animated Background for Mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Optimized gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/5 w-64 h-64 sm:w-96 sm:h-96 bg-[#b45ecf]/30 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-[#480056]/40 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-[#b45ecf]/20 rounded-full blur-xl sm:blur-2xl"
        />
        
        {/* Optimized floating elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-40 sm:h-40 border-2 border-[#b45ecf]/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 0.9, 1.1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 sm:w-32 sm:h-32 border border-[#ffffff]/20 rounded-full"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
        
        {/* Optimized particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Optimized Hero Section for Mobile */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
              <Badge className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold border-0 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Team Collaboration Platform
              </Badge>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
            >
              TEAM
              <motion.span 
                variants={fadeInUp}
                className="block text-[#b45ecf] bg-gradient-to-r from-[#b45ecf] to-[#d67ef2] bg-clip-text text-transparent mt-1 sm:mt-2"
              >
                COLLABORATION
              </motion.span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mb-8 sm:mb-10"
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4 sm:mb-6 leading-relaxed font-light"
              >
                Work Smarter, <span className="text-[#b45ecf] font-semibold">Together</span>
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Unify your sales, marketing, and customer success teams with 360Airo's collaboration tools. 
                Ensure every campaign runs smoothly with seamless coordination.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#b45ecf]/30 border-0 w-full sm:w-auto"
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  Enhance Team Collaboration
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button 
                variant="outline"
                size="lg" 
                className="border border-white/50 text-white hover:bg-white/10 px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Optimized floating icons for mobile */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/6 sm:left-1/5"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#b45ecf]/20 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#b45ecf]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-1/5 sm:right-1/4"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-[#b45ecf]/20 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-[#b45ecf]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/8 sm:left-1/4"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#b45ecf]/20 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <Workflow className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#b45ecf]" />
          </div>
        </motion.div>
      </section>

      {/* Optimized Stats Section for Mobile */}
      <section className="py-12 sm:py-16 bg-white/5 backdrop-blur-sm border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#b45ecf]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#b45ecf]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#b45ecf] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-[#b45ecf]/30 transition-all duration-300 relative z-10"
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-xs sm:text-sm relative z-10 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optimized Features Section for Mobile */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Powerful Collaboration
              <span className="block text-[#b45ecf]">Features</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything your team needs to work together effectively across all channels
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="flex-1 w-full"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-[#b45ecf]/40 transition-all duration-300 h-full group hover:bg-white/10">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#b45ecf] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 sm:space-x-3 group/item p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 3 }}
                          >
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#b45ecf] flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors text-xs sm:text-sm lg:text-base leading-tight">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className="flex-1 w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-48 sm:h-64 lg:h-80 flex items-center justify-center relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full blur-lg sm:blur-xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-md sm:blur-lg"
                    />
                    <div className="text-white text-center relative z-10">
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6"
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="text-base sm:text-lg lg:text-2xl font-semibold mb-2 sm:mb-3 lg:mb-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 inline-block border border-white/30">
                        {feature.title.split(' ')[0]}
                      </h4>
                      <p className="text-white/90 text-xs sm:text-sm lg:text-base max-w-xs">
                        {feature.description.split('.')[0]}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimized Benefits Grid for Mobile */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose 360Airo
              <span className="block text-[#b45ecf]">For Team Collaboration</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              With 360Airo, your team stays connected, accountable, and empowered
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#b45ecf]/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#b45ecf] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-[#b45ecf]/30 transition-all duration-300"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-200 transition-colors leading-tight">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optimized Final CTA for Mobile */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 hover:border-[#b45ecf]/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b45ecf]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 relative z-10">
              Ready to Transform
              <span className="block text-[#b45ecf]">Your Team Collaboration?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
              Join thousands of teams that use 360Airo to stay connected, accountable, and empowered.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-6 py-2.5 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#b45ecf]/30 border-0 w-full sm:w-auto"
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  Enhance Team Collaboration
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button 
                variant="outline"
                size="lg" 
                className="border border-white/50 text-white hover:bg-white/10 px-6 py-2.5 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}