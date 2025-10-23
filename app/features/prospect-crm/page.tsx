'use client';

import { motion ,AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Zap, 
  Users,
  Eye,
  CheckCircle2,
  Target,
  BarChart3,
  TrendingUp,
  Database,
  Workflow,
  Shield,
  Clock,
  Search,
  Filter,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  ThumbsUp,
  Heart,
  Rocket,
  Layers,
  Cpu,
  Network,
  GitBranch,
  PieChart,
  LineChart,
  Activity,
  Link2,
  Building,
  PhoneCall,
  MailOpen,
  UserCheck,
  CalendarDays
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/* GlowCard with cursor-reactive glow */
const GlowCard = ({ children, className = '', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.2) 25%, transparent 55%)',
          borderRadius: '50%',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Enhanced Animated CRM Dashboard Component */
const AnimatedCRMDashboard = () => {
  const [activeTab, setActiveTab] = useState('leads');
  const [progress, setProgress] = useState(0);
  const [currentProspect, setCurrentProspect] = useState(0);

  const prospects = [
    {
      name: 'Sarah Chen',
      company: 'TechNova Inc',
      position: 'Marketing Director',
      status: 'hot',
      lastContact: '2 hours ago',
      engagement: 92,
      avatar: 'SC',
      color: 'from-blue-500 to-cyan-400',
      timeline: [
        { time: '2 hours ago', action: 'Email Opened', icon: MailOpen, color: 'text-blue-400' },
        { time: '4 hours ago', action: 'LinkedIn Connection', icon: Link2, color: 'text-purple-400' },
        { time: '1 day ago', action: 'Website Visit', icon: Eye, color: 'text-green-400' },
        { time: '2 days ago', action: 'Initial Contact', icon: PhoneCall, color: 'text-orange-400' }
      ]
    },
    {
      name: 'Marcus Johnson',
      company: 'DataFlow Systems',
      position: 'Sales Manager',
      status: 'warm',
      lastContact: '1 day ago',
      engagement: 78,
      avatar: 'MJ',
      color: 'from-green-500 to-emerald-400',
      timeline: [
        { time: '1 day ago', action: 'Meeting Scheduled', icon: CalendarDays, color: 'text-blue-400' },
        { time: '2 days ago', action: 'Proposal Sent', icon: Mail, color: 'text-purple-400' },
        { time: '3 days ago', action: 'Initial Call', icon: Phone, color: 'text-green-400' }
      ]
    }
  ];

  const metrics = [
    { label: 'Total Prospects', value: '1,247', change: '+12%', icon: Users, color: 'from-blue-500 to-cyan-400' },
    { label: 'Hot Leads', value: '89', change: '+8%', icon: TrendingUp, color: 'from-green-500 to-emerald-400' },
    { label: 'Response Rate', value: '34%', change: '+5%', icon: MessageSquare, color: 'from-purple-500 to-pink-400' },
    { label: 'Conversion Rate', value: '18%', change: '+3%', icon: Target, color: 'from-orange-500 to-red-400' }
  ];

  // Auto-rotate prospects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProspect((prev) => (prev + 1) % prospects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <GlowCard className="cursor-pointer rounded-3xl">
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
              >
                <Users className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">Prospect Dashboard</h3>
                <p className="text-sm text-white/60">Real-time lead management</p>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30"
            >
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full" 
              />
              <span className="text-sm font-medium text-green-300">Live</span>
            </motion.div>
          </div>

          {/* Animated Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <motion.div
                    className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-xs text-green-400 font-medium"
                  >
                    {metric.change}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="text-2xl font-bold text-white mb-1"
                >
                  {metric.value}
                </motion.div>
                <div className="text-xs text-white/60">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Prospect Showcase */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">Active Prospect Timeline</h4>
              <div className="flex space-x-2">
                {prospects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProspect(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentProspect === index ? 'bg-blue-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProspect}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prospects[currentProspect].color} flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {prospects[currentProspect].avatar}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h5 className="font-semibold text-white text-lg">{prospects[currentProspect].name}</h5>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        prospects[currentProspect].status === 'hot' 
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}>
                        {prospects[currentProspect].status} Lead
                      </span>
                    </div>
                    <p className="text-white/60 mb-1">{prospects[currentProspect].position}</p>
                    <p className="text-white/40 text-sm">{prospects[currentProspect].company}</p>
                    
                    {/* Timeline */}
                    <div className="mt-4 space-y-3">
                      {prospects[currentProspect].timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 group"
                        >
                          <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${event.color}`}>
                            <event.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm">{event.action}</div>
                            <div className="text-white/40 text-xs">{event.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div 
                      className="text-2xl font-bold text-green-400 mb-1"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {prospects[currentProspect].engagement}%
                    </motion.div>
                    <div className="text-xs text-white/60">Engagement Score</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Activity Progress */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-white">Team Activity Sync</span>
              </div>
              <div className="text-sm text-white/60">Real-time updates</div>
            </div>
            
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

/* Motion variants */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* Section divider */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
        style={{ maxWidth: '200px' }}
      />
    );
  }
  if (variant === 'left') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent mb-6"
        style={{ maxWidth: '100px' }}
      />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-blue-500/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="h-px bg-gradient-to-r from-blue-500/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

/* Floating Elements Background */
const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.35, 0.1],
            scale: [0.5, 1.15, 0.5],
            x: [0, Math.sin(i) * 40, 0],
            y: [0, Math.cos(i) * 24, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 8 + i * 1.2, 
            repeat: Infinity, 
            ease: 'easeInOut', 
            delay: i * 0.5 
          }}
          className={`absolute w-16 h-16 ${
            i % 6 === 0 ? 'rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10' :
            i % 6 === 1 ? 'rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-400/10 rotate-45' :
            i % 6 === 2 ? 'rounded-none bg-gradient-to-br from-cyan-500/20 to-blue-400/10 rotate-12' :
            i % 6 === 3 ? 'rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-400/15' :
            i % 6 === 4 ? 'rounded-full bg-gradient-to-br from-green-500/15 to-emerald-400/10' :
            'rounded-2xl bg-gradient-to-br from-orange-500/15 to-red-400/10 rotate-12'
          } blur-xl`}
          style={{ 
            top: `${10 + i * 7}%`, 
            left: `${5 + i * 8}%`,
            animationDelay: `${i * 0.7}s`
          }}
        />
      ))}
    </div>
  );
};

/* Enhanced Feature Cards with Interactive Animations */
const FeatureCard = ({ feature, index }: any) => (
  <GlowCard className="group cursor-pointer rounded-2xl">
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-blue-500/50"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <motion.div
          className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
          whileHover={{ rotate: 360, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <feature.icon className="h-8 w-8 text-white" />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-white text-center mb-4 group-hover:text-blue-300 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {feature.title}
        </motion.h3>
        
        <motion.div
          className="h-px bg-gradient-to-r from-blue-500/20 via-white/10 to-transparent mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.8 }}
        />
        
        <motion.p 
          className="text-white/80 text-center leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          {feature.description}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3 }}
        >
          {feature.features.map((item: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </GlowCard>
);

/* Enhanced Hero Section with Staggered Animations */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
              className="inline-block"
            >
              <div className="group relative cursor-pointer">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(59,130,246,0.4)',
                      '0 0 60px rgba(139,92,246,0.6)',
                      '0 0 30px rgba(59,130,246,0.4)',
                    ],
                  }}
                  transition={{ duration: 3.6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-400/30 rounded-full blur-xl"
                />
                <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/50 text-white font-semibold text-sm sm:text-base">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                    className="mr-3"
                  >
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  </motion.div>
                  <span>Prospect CRM</span>
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="block transform-gpu"
                >
                  Smarter Relationships,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                  className="block transform-gpu"
                >
                  Stronger Conversions
                </motion.span>
              </motion.h1>

              {/* Animated Gradient Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full relative overflow-hidden max-w-md"
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="space-y-5 max-w-xl"
            >
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                Turn Every Lead into a{' '}
                <motion.span
                  animate={{ color: ['#3B82F6', '#8B5CF6', '#ffffff', '#3B82F6'] }}
                  transition={{ duration: 3.4, repeat: Infinity }}
                  className="font-semibold"
                >
                  Lasting Connection
                </motion.span>
              </p>
              <p className="text-base text-white/75 leading-relaxed">
                Your prospects deserve more than just a name in a spreadsheet. 360Airo's Prospect CRM helps you manage, track, and nurture every lead from first contact to conversion — all within one intelligent, unified system.
              </p>
              <p className="text-base text-white/75 leading-relaxed">
                It's designed for modern outreach teams that want clarity, not clutter — so you can focus on building genuine relationships while our CRM automates the rest.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }} 
                whileTap={{ scale: 0.96 }} 
                className="group relative overflow-hidden rounded-xl"
              >
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                      'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0"
                />
                <Button size="lg" className="relative bg-transparent text-white px-8 py-3 text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl">
                  <span>Organize Your Prospects</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT - ANIMATED CRM DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9, type: "spring" }}
            className="relative flex items-center justify-center h-full"
          >
            <AnimatedCRMDashboard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default function ProspectCRMPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Database,
      title: 'Centralized Lead Management',
      description: 'No more losing track of potential customers across tools and threads. Every lead, interaction, and engagement detail lives in one centralized dashboard.',
      features: ['Complete prospect timelines', 'Communication history', 'Smart segmentation', 'Real-time updates'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Our AI-powered analytics help you understand which prospects are most engaged, what\'s driving conversions, and where to focus next.',
      features: ['AI lead scoring', 'Engagement analytics', 'Campaign effectiveness', 'Pipeline tracking'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: Workflow,
      title: 'Automation That Keeps You Ahead',
      description: 'Let automation do the heavy lifting. Connect seamlessly with your outreach workflows to automate repetitive actions.',
      features: ['Smart tagging', 'Auto follow-ups', 'Activity summaries', 'Workflow rules'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Shield,
      title: 'Unified Collaboration',
      description: 'Real-time collaboration for sales and marketing teams with full visibility and actionable insights.',
      features: ['Team collaboration', 'Unified database', 'Seamless integration', 'Actionable insights'],
      color: 'from-orange-500 to-red-400'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Build Genuine Relationships',
      description: 'Focus on building genuine relationships while our CRM automates the rest.',
      metric: '3x',
      label: 'Better Engagement',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Target,
      title: 'Predictable Wins',
      description: 'When data meets intelligence, follow-ups stop being random — they become predictable wins.',
      metric: '85%',
      label: 'Higher Conversion',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Your CRM becomes your silent teammate — managing relationships while you focus on closing deals.',
      metric: '90%',
      label: 'Time Saved',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: TrendingUp,
      title: 'Scale Effortlessly',
      description: 'From first contact to conversion — all within one intelligent, unified system.',
      metric: '10x',
      label: 'Faster Scaling',
      color: 'from-orange-500 to-red-400'
    }
  ];

  const stats = [
    { value: '1,247+', label: 'Prospects Managed', icon: Users, color: 'from-blue-500 to-cyan-400' },
    { value: '34%', label: 'Average Response Rate', icon: MessageSquare, color: 'from-purple-500 to-pink-400' },
    { value: '18%', label: 'Conversion Rate', icon: Target, color: 'from-green-500 to-emerald-400' },
    { value: '89%', label: 'Customer Satisfaction', icon: Star, color: 'from-orange-500 to-red-400' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950">
        <Navbar />

        {/* Enhanced Hero Section */}
        <HeroSection />

        {/* CENTRALIZED LEAD MANAGEMENT SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-blue-950/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-3"
              >
                <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Centralized Visibility</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Centralized Lead Management for <span className="text-blue-400">Maximum Visibility</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SectionDivider />
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-lg text-white/80 leading-relaxed">
                  No more losing track of potential customers across tools and threads. With 360Airo's Prospect CRM, every lead, interaction, and engagement detail lives in one centralized dashboard.
                </p>
                
                <div className="space-y-4">
                  {[
                    'View complete prospect timelines and communication history',
                    'Segment contacts based on behavior, campaign, or funnel stage',
                    'Add custom notes, tags, and deal stages effortlessly',
                    'Sync automatically with your email sequences and LinkedIn automation tools'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </motion.div>
                      <motion.span 
                        className="text-white/80 leading-relaxed group-hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-white/60 text-sm italic"
                >
                  Every update happens in real time — so your team always has the full picture before hitting send.
                </motion.p>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="relative"
              >
                <GlowCard className="rounded-2xl">
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
                    <div className="space-y-6">
                      {/* Timeline Visualization */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 bg-green-400 rounded-full"
                          />
                          <span className="text-white font-semibold">Sarah Chen</span>
                        </div>
                        <span className="text-blue-400 text-sm">Hot Lead</span>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { time: '2 hours ago', action: 'Email Opened', color: 'bg-blue-500' },
                          { time: '4 hours ago', action: 'LinkedIn Connection', color: 'bg-purple-500' },
                          { time: '1 day ago', action: 'Website Visit', color: 'bg-cyan-500' },
                          { time: '2 days ago', action: 'Initial Contact', color: 'bg-green-500' }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-4 group"
                          >
                            <motion.div 
                              className={`w-2 h-2 ${item.color} rounded-full group-hover:scale-150 transition-transform duration-300`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <div className="flex-1">
                              <div className="text-white text-sm group-hover:text-blue-300 transition-colors">{item.action}</div>
                              <div className="text-white/40 text-xs">{item.time}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* DATA-DRIVEN INSIGHTS SECTION */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-16">
      <div className="inline-block mb-2">
        <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">Intelligent Analytics</span>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        Data-Driven Insights That <span className="text-purple-400">Close Deals</span>
      </motion.h2>
      <SectionDivider />
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
      >
        360Airo's CRM isn't just about storage — it's built for strategy. Our AI-powered analytics help you understand which prospects are most engaged, what's driving conversions, and where to focus next.
      </motion.p>
      
      {/* Bullet Points Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white/90 leading-relaxed"
            >
              Our AI-powered analytics help you understand which prospects are most engaged, what's driving conversions, and where to focus next.
            </motion.p>
            
            <div className="space-y-4">
              {[
                'Identify high-intent leads automatically',
                'Get engagement scores based on opens, clicks, and replies',
                'Measure the effectiveness of your email campaigns and follow-ups',
                'Track every deal through your pipeline with precision'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </motion.div>
                  <motion.span 
                    className="text-white/80 leading-relaxed group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="text-white font-semibold text-lg mb-2"
              >
                Predictable Wins
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-white/70 text-sm leading-relaxed"
              >
                When data meets intelligence, follow-ups stop being random — they become predictable wins.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

    {/* Additional Insights */}
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">AI-Powered Lead Scoring</h4>
          <div className="space-y-4">
            {[
              { label: 'Email Engagement', score: 92, color: 'bg-green-400' },
              { label: 'Website Activity', score: 78, color: 'bg-blue-400' },
              { label: 'Social Interaction', score: 85, color: 'bg-purple-400' },
              { label: 'Response Time', score: 67, color: 'bg-cyan-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2 group"
              >
                <div className="flex justify-between text-sm text-white/80 group-hover:text-white transition-colors">
                  <span>{item.label}</span>
                  <span>{item.score}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 1, type: "spring" }}
                    className={`h-full ${item.color} rounded-full group-hover:shadow-lg transition-shadow`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Conversion Pipeline</h4>
          <div className="space-y-4">
            {[
              { stage: 'Initial Contact', count: '1,247', progress: 100, color: 'from-blue-500 to-cyan-400' },
              { stage: 'Engaged', count: '892', progress: 72, color: 'from-purple-500 to-pink-400' },
              { stage: 'Qualified', count: '567', progress: 46, color: 'from-green-500 to-emerald-400' },
              { stage: 'Closed Won', count: '224', progress: 18, color: 'from-orange-500 to-red-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div>
                  <div className="text-white font-medium group-hover:text-purple-300 transition-colors">{item.stage}</div>
                  <div className="text-white/60 text-sm group-hover:text-white/80">{item.count} leads</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{item.progress}%</div>
                  <div className="text-white/40 text-xs">Progress</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      

    </motion.div>
  </motion.div>
</section>

        {/* AUTOMATION SECTION */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-blue-950/30 to-white/2">
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-16">
      <div className="inline-block mb-2">
        <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Smart Automation</span>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        Automation That <span className="text-cyan-400">Keeps You Ahead</span>
      </motion.h2>
      <SectionDivider />
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
      >
        Let automation do the heavy lifting. 360Airo's Prospect CRM connects seamlessly with your outreach workflows to automate repetitive actions like tagging, follow-ups, and reminders.
      </motion.p>
      
      {/* Bullet Points Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                'Set rules for lead scoring and re-engagement',
                'Auto-update contact details and sequence triggers',
                'Save time with AI-assisted note-taking and activity summaries'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </motion.div>
                  <motion.span 
                    className="text-white/80 leading-relaxed group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Rocket className="h-8 w-8 text-white" />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="text-white font-semibold text-lg mb-2"
              >
                Your Silent Teammate
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="text-white/70 text-sm leading-relaxed"
              >
                Your CRM becomes your silent teammate — managing relationships while you focus on closing deals.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

    {/* Workflow Visualization */}
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
    >
      <div className="text-center mb-8">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-2"
        >
          Automated Workflow Engine
        </motion.h4>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60"
        >
          Watch how leads move through your automated pipeline
        </motion.p>
      </div>
      
      <div className="flex items-center justify-between relative">
        {[
          { icon: Mail, label: 'Lead Captured', color: 'bg-blue-500' },
          { icon: Filter, label: 'AI Scoring', color: 'bg-purple-500' },
          { icon: Workflow, label: 'Auto-Tagging', color: 'bg-cyan-500' },
          { icon: MessageSquare, label: 'Smart Follow-up', color: 'bg-green-500' },
          { icon: Target, label: 'Conversion', color: 'bg-orange-500' }
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring" }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <motion.div
              className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 360, y: -5 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <step.icon className="h-8 w-8 text-white" />
            </motion.div>
            <div className="text-white font-medium text-sm">{step.label}</div>
          </motion.div>
        ))}
        
        {/* Connecting Lines */}
        <div className="absolute top-8 left-16 right-16 h-0.5 bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 origin-left rounded-full"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center mt-8"
      >
        <p className="text-white/70 text-sm">
          Your CRM becomes your silent teammate — managing relationships while you focus on closing deals.
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-950/40 to-purple-500/20" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block">
                <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Ready to Transform Your CRM?</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Why Teams Choose 360Airo's Prospect CRM
              </motion.h2>
              <SectionDivider />
              
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                {[
                  'Unified prospect database with full visibility',
                  'AI-powered lead scoring and engagement tracking',
                  'Seamless integration with email, LinkedIn, and automation tools',
                  'Real-time collaboration for sales and marketing teams',
                  'Actionable insights that turn outreach into conversions'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="flex items-start space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </motion.div>
                    <motion.span 
                      className="text-white/80 leading-relaxed group-hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-white/90 text-lg max-w-2xl mx-auto"
              >
                360Airo's Prospect CRM helps you sell smarter, follow up faster, and build relationships that actually convert.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -4 }} 
                  whileTap={{ scale: 0.96 }} 
                  className="group relative overflow-hidden rounded-xl"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-blue-950 hover:bg-transparent px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 shadow-2xl">
                    Organize Your Prospects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6 mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '150px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ maxWidth: '150px' }}
              />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-white/70 text-sm"
              >
                ✨ Build relationships that convert
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}