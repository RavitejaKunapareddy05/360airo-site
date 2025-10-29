'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/navbar'; 
import { 
  Users, TrendingUp, BookOpen, Star, MessageCircle, ArrowRight, 
  CheckCircle, Zap, Heart, Shield, Target, Globe, Rocket, 
  Lightbulb, Network, GraduationCap, ShieldCheck, Mail, 
  Calendar, Users2, Code, MessageSquare, Award, Clock,
  ArrowUpRight, Sparkles, Brain, BarChart3, Palette,
  Gem, Crown, TargetIcon, ZapIcon
} from 'lucide-react';
import { Footer } from '@/components/footer';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface ProfessionalType {
  role: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface Feature {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredProfessional, setHoveredProfessional] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits: Benefit[] = [
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Learn from Industry Experts",
      description: "Gain real insights from professionals with successful outreach campaigns across multiple industries",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Collaborate with Professionals",
      description: "Share templates and best practices with people who understand your challenges",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Stay Ahead of Trends",
      description: "Be the first to know about latest tools, AI upgrades, and best practices",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Exclusive Learning Content",
      description: "Priority access to 360 Academy with expert-led webinars and tutorials",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Build Your Brand",
      description: "Get featured in our spotlight series and position yourself as a thought leader",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: <ZapIcon className="h-10 w-10" />,
      title: "Accelerate Growth",
      description: "Access cutting-edge automation tools and strategies to scale faster",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const professionalTypes: ProfessionalType[] = [
    {
      role: "Sales Professional",
      description: "Scale outreach while keeping it personal and effective",
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Marketing Expert",
      description: "Drive data-driven campaigns with advanced automation",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Business Owner",
      description: "Optimize conversions and strengthen customer relationships",
      icon: <TargetIcon className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      role: "Data/CRM Professional",
      description: "Ensure precision, compliance, and seamless integration",
      icon: <Code className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      role: "Freelancer/Consultant",
      description: "Expand network and reach more clients effectively",
      icon: <Globe className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      role: "Growth Strategist",
      description: "Develop innovative outreach strategies and frameworks",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const features: Feature[] = [
    { icon: <MessageSquare className="h-6 w-6" />, text: "Private members' forum for interactive discussions", delay: 0 },
    { icon: <Calendar className="h-6 w-6" />, text: "Weekly sessions with sales and marketing leaders", delay: 0.1 },
    { icon: <Zap className="h-6 w-6" />, text: "Priority access to new features and beta releases", delay: 0.2 },
    { icon: <Users2 className="h-6 w-6" />, text: "Virtual and in-person networking events", delay: 0.3 },
    { icon: <Mail className="h-6 w-6" />, text: "Direct feedback to shape future updates", delay: 0.4 },
    { icon: <Gem className="h-6 w-6" />, text: "Exclusive templates and resource library", delay: 0.5 }
  ];

  const stats = [
    { number: "10K+", label: "Active Members", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Industry Experts", icon: <Crown className="h-6 w-6" /> },
    { number: "100+", label: "Weekly Sessions", icon: <Calendar className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <MessageSquare className="h-6 w-6" /> }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const cardHoverVariants: Variants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.3
      }
    }
  };

  const iconHoverVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const floatingVariants: Variants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <Navbar />
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -30, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 40, 0], 
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 left-1/3 w-56 h-56 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            x: [0, 25, 0], 
            y: [0, -20, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-32 pb-28 px-4 text-center"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
          >
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-8 text-base border-0 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 10,000+ Professionals
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join Our
            <motion.span 
              className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Community
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl max-w-4xl mx-auto text-purple-200 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect, collaborate, and grow with innovators shaping the future of 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> sales and marketing automation</span>
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-7 text-xl rounded-2xl font-bold border-0 shadow-2xl shadow-purple-500/25">
                Join Now - It's Free 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 h-6 w-6" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-10 py-7 text-xl rounded-2xl font-semibold">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto px-4 mb-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  className="text-purple-400 mb-3 flex justify-center"
                  variants={iconHoverVariants}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4 mb-32"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Why Join Us?
            </motion.h2>
            <motion.p 
              className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Become part of a movement that's shaping the future of sales and marketing automation
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} p-8 rounded-3xl shadow-2xl h-full transform transition-all duration-500 group-hover:shadow-xl`}>
                  <motion.div
                    className="text-white mb-6"
                    animate={{ 
                      scale: hoveredBenefit === index ? 1.15 : 1,
                      rotate: hoveredBenefit === index ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Professional Types Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-7xl mx-auto px-4 mb-32"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Who's Joining?
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Professionals from various fields are already benefiting from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalTypes.map((profession, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredProfessional(index)}
                onHoverEnd={() => setHoveredProfessional(null)}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center shadow-xl h-full transform transition-all duration-300 group-hover:border-purple-500">
                  <motion.div
                    className={`bg-gradient-to-br ${profession.color} rounded-2xl p-4 inline-flex mb-4`}
                    animate={{ 
                      scale: hoveredProfessional === index ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-white">
                      {profession.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {profession.role}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {profession.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 mb-32"
        >
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              What You Get
            </motion.h2>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: feature.delay + 0.8, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <motion.div
                    className="text-purple-400 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <span className="text-lg text-white">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 mb-32"
        >
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
              variants={pulseVariants}
              animate="pulse"
            />
            <motion.div
              className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"
              variants={pulseVariants}
              animate="pulse"
              transition={{ delay: 1 }}
            />
            
            <div className="relative z-10 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Ready to Join?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Start your journey with 10,000+ professionals who are transforming sales and marketing
              </motion.p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <motion.div
                  className="flex gap-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder-purple-200 border-2 focus:ring-2 focus:ring-white rounded-2xl px-6 py-4 text-lg"
                    required
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit" 
                      className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-bold rounded-2xl border-0 shadow-lg"
                    >
                      {isSubmitted ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          🎉 Welcome!
                        </motion.span>
                      ) : (
                        'Join Now'
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-purple-200 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Free forever. No credit card required. Instant access.
                </motion.p>
              </form>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default Community;