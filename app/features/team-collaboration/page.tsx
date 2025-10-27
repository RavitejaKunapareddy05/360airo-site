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

  // Fixed animations without TypeScript errors
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
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
    transition: { duration: 0.6 }
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8 }
  };

  const stats = [
    { number: "89%", label: "Faster Campaign Setup", icon: <Zap className="w-6 h-6" /> },
    { number: "67%", label: "Reduced Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "3.2x", label: "Team Productivity", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "94%", label: "Team Satisfaction", icon: <Users className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
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
      icon: <Cpu className="w-8 h-8" />,
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
      icon: <GitBranch className="w-8 h-8" />,
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
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Unified Workspace",
      description: "All team communication in one place"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Sync",
      description: "Instant updates across all team members"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Assistance",
      description: "Smart suggestions and automation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Access",
      description: "Role-based permissions and controls"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Live Dashboards",
      description: "Real-time performance tracking"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Streamlined team processes"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-black via-[#19001d] to-[#480056] text-white overflow-hidden">
      <Navbar />
      
      {/* Enhanced Animated Background with New Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b45ecf]/30 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#480056]/40 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#b45ecf]/20 rounded-full blur-2xl"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-40 h-40 border-2 border-[#b45ecf]/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-[#ffffff]/20 rounded-full"
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Hero Section with Smaller Title */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-6 py-2 text-base font-semibold border-0 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Team Collaboration Platform
              </Badge>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
            >
              TEAM
              <motion.span 
                variants={fadeInUp}
                className="block text-[#b45ecf] bg-gradient-to-r from-[#b45ecf] to-[#d67ef2] bg-clip-text text-transparent mt-2"
              >
                COLLABORATION
              </motion.span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mb-10"
            >
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed font-light"
              >
                Work Smarter, <span className="text-[#b45ecf] font-semibold">Together</span>
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Unify your sales, marketing, and customer success teams with 360Airo's collaboration tools. 
                Ensure every campaign runs smoothly with seamless coordination.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#b45ecf]/30 border-0"
                >
                  Enhance Team Collaboration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button 
                variant="outline"
                size="lg" 
                className="border border-white/50 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating icons around hero */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5"
        >
          <div className="w-16 h-16 bg-[#b45ecf]/20 rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <Users className="w-8 h-8 text-[#b45ecf]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4"
        >
          <div className="w-14 h-14 bg-[#b45ecf]/20 rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <MessageSquare className="w-7 h-7 text-[#b45ecf]" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3"
        >
          <div className="w-12 h-12 bg-[#b45ecf]/20 rounded-2xl backdrop-blur-sm border border-[#b45ecf]/30 flex items-center justify-center">
            <Workflow className="w-6 h-6 text-[#b45ecf]" />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#b45ecf]/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#b45ecf]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-[#b45ecf] rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:shadow-xl group-hover:shadow-[#b45ecf]/30 transition-all duration-500 relative z-10"
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-sm relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Collaboration
              <span className="block text-[#b45ecf]">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything your team needs to work together effectively across all channels
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="flex-1"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#b45ecf]/40 transition-all duration-500 h-full group hover:bg-white/10">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 bg-[#b45ecf] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 group/item p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#b45ecf] flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors text-base">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className="flex-1"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-lg"
                    />
                    <div className="text-white text-center relative z-10">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-6xl mb-6"
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="text-2xl font-semibold mb-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/30">
                        {feature.title.split(' ')[0]}
                      </h4>
                      <p className="text-white/90 text-base max-w-sm">
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

      {/* Enhanced Benefits Grid */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose 360Airo
              <span className="block text-[#b45ecf]">For Team Collaboration</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              With 360Airo, your team stays connected, accountable, and empowered
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#b45ecf]/40 hover:bg-white/10 transition-all duration-500 group"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-[#b45ecf] rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:shadow-xl group-hover:shadow-[#b45ecf]/30 transition-all duration-500"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text transition-all duration-500">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 hover:border-[#b45ecf]/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b45ecf]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to Transform
              <span className="block text-[#b45ecf]">Your Team Collaboration?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
              Join thousands of teams that use 360Airo to stay connected, accountable, and empowered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-[#b45ecf] hover:bg-[#a34dbe] text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#b45ecf]/30 border-0"
                >
                  Enhance Team Collaboration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button 
                variant="outline"
                size="lg" 
                className="border border-white/50 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
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