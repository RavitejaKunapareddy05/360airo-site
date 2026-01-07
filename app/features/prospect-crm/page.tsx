'use client';

import { motion ,AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Head from 'next/head';
import Link from 'next/link';

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
  CalendarDays,
  Inbox
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

/* GlowCard with cursor-reactive glow - Mobile optimized */
const GlowCard = ({ children, className = '', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => !isMobile && setIsHovered(true);
  const handleMouseLeave = () => !isMobile && setIsHovered(false);

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
          opacity: isHovered && !isMobile ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Enhanced Animated CRM Dashboard Component - Mobile optimized */
const AnimatedCRMDashboard = () => {
  const [activeTab, setActiveTab] = useState('leads');
  const [progress, setProgress] = useState(0);
  const [currentProspect, setCurrentProspect] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Auto-rotate prospects - Mobile optimized
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProspect((prev) => (prev + 1) % prospects.length);
    }, isMobile ? 3000 : 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + (isMobile ? 3 : 2)));
    }, isMobile ? 80 : 100);
    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <GlowCard className="cursor-pointer rounded-2xl lg:rounded-3xl">
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/10 p-4 lg:p-8 shadow-2xl">
          {/* Dashboard Header - Mobile optimized */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
              >
                <Users className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white">Prospect Dashboard</h3>
                <p className="text-xs lg:text-sm text-white/60">Real-time lead management</p>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg border border-green-500/30"
            >
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full" 
              />
              <span className="text-xs lg:text-sm font-medium text-green-300">Live</span>
            </motion.div>
          </div>

          {/* Animated Metrics Grid - Mobile optimized */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: isMobile ? -2 : -5, scale: isMobile ? 1.01 : 1.02 }}
                className="bg-white/5 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-1 lg:mb-2">
                  <motion.div
                    className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.15 }}
                    className="text-xs text-green-400 font-medium"
                  >
                    {metric.change}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.2 }}
                  className="text-xl lg:text-2xl font-bold text-white mb-0.5 lg:mb-1"
                >
                  {metric.value}
                </motion.div>
                <div className="text-xs text-white/60 leading-tight">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Prospect Showcase - Mobile optimized */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base lg:text-lg font-semibold text-white">Active Prospect Timeline</h4>
              <div className="flex space-x-1 lg:space-x-2">
                {prospects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProspect(index)}
                    className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${
                      currentProspect === index ? 'bg-blue-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProspect}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <motion.div
                    whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl bg-gradient-to-br ${prospects[currentProspect].color} flex items-center justify-center text-white font-bold shadow-lg text-sm lg:text-base`}
                  >
                    {prospects[currentProspect].avatar}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 mb-1 lg:mb-2">
                      <h5 className="font-semibold text-white text-base lg:text-lg truncate">{prospects[currentProspect].name}</h5>
                      <span className={`px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-xs font-medium ${
                        prospects[currentProspect].status === 'hot' 
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      }`}>
                        {prospects[currentProspect].status} Lead
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-0.5 lg:mb-1">{prospects[currentProspect].position}</p>
                    <p className="text-white/40 text-xs truncate">{prospects[currentProspect].company}</p>
                    
                    {/* Timeline - Mobile optimized */}
                    <div className="mt-3 lg:mt-4 space-y-2 lg:space-y-3">
                      {prospects[currentProspect].timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-center space-x-2 lg:space-x-3 group"
                        >
                          <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300 ${event.color}`}>
                            <event.icon className="h-3 w-3 lg:h-4 lg:w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-xs lg:text-sm truncate">{event.action}</div>
                            <div className="text-white/40 text-xs">{event.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <motion.div 
                      className="text-xl lg:text-2xl font-bold text-green-400 mb-0.5 lg:mb-1"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {prospects[currentProspect].engagement}%
                    </motion.div>
                    <div className="text-xs text-white/60">Engagement</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Activity Progress - Mobile optimized */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="mt-6 lg:mt-8 p-4 lg:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg lg:rounded-xl border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400" />
                <span className="font-semibold text-white text-sm lg:text-base">Team Activity Sync</span>
              </div>
              <div className="text-xs lg:text-sm text-white/60">Real-time updates</div>
            </div>
            
            <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
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

/* Motion variants - Mobile optimized */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.08, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

/* Section divider - Mobile optimized */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6 lg:mb-8"
        style={{ maxWidth: '120px' }}
      />
    );
  }
  if (variant === 'left') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent mb-4 lg:mb-6"
        style={{ maxWidth: '60px' }}
      />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center mb-6 lg:mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-blue-500/40 flex-1 max-w-8 lg:max-w-16" />
      <div className="mx-3 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="h-px bg-gradient-to-r from-blue-500/40 via-white/20 to-transparent flex-1 max-w-8 lg:max-w-16" />
    </motion.div>
  );
};

/* Floating Elements Background - Mobile optimized */
const FloatingBackground = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: isMobile ? '40px 40px' : '80px 80px',
        }}
      />
      {[...Array(isMobile ? 6 : 12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [0.5, 1, 0.5],
            x: [0, Math.sin(i) * (isMobile ? 20 : 40), 0],
            y: [0, Math.cos(i) * (isMobile ? 15 : 24), 0],
          }}
          transition={{ 
            duration: isMobile ? 6 + i * 1 : 8 + i * 1.2, 
            repeat: Infinity, 
            ease: 'easeInOut', 
            delay: i * 0.4 
          }}
          className={`absolute ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} ${
            i % 6 === 0 ? 'rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10' :
            i % 6 === 1 ? 'rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-400/10' :
            i % 6 === 2 ? 'rounded-none bg-gradient-to-br from-cyan-500/20 to-blue-400/10' :
            i % 6 === 3 ? 'rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-400/15' :
            i % 6 === 4 ? 'rounded-full bg-gradient-to-br from-green-500/15 to-emerald-400/10' :
            'rounded-2xl bg-gradient-to-br from-orange-500/15 to-red-400/10'
          } blur-xl`}
          style={{ 
            top: `${isMobile ? 8 + i * 10 : 10 + i * 7}%`, 
            left: `${isMobile ? 3 + i * 12 : 5 + i * 8}%`,
          }}
        />
      ))}
    </div>
  );
};

/* Enhanced Feature Cards with Interactive Animations - Mobile optimized */
const FeatureCard = ({ feature, index }: any) => {
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
    <GlowCard className="group cursor-pointer rounded-xl lg:rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: isMobile ? -4 : -8, scale: isMobile ? 1.01 : 1.02 }}
        className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-blue-500/50"
      >
        <motion.div
          className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative z-10">
          <motion.div
            className={`bg-gradient-to-r ${feature.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 mx-auto shadow-lg`}
            whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <feature.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
          </motion.div>
          
          <motion.h3 
            className="text-lg lg:text-xl font-bold text-white text-center mb-3 lg:mb-4 group-hover:text-blue-300 transition-colors"
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          >
            {feature.title}
          </motion.h3>
          
          <motion.div
            className="h-px bg-gradient-to-r from-blue-500/20 via-white/10 to-transparent mb-3 lg:mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          />
          
          <motion.p 
            className="text-white/80 text-center leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.15 }}
          >
            {feature.description}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-1 lg:gap-2 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.2 }}
          >
            {feature.features.map((item: any, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 + i * 0.08 }}
                whileHover={{ scale: isMobile ? 1.02 : 1.05, y: -1 }}
                className="px-2 py-1 lg:px-3 lg:py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </GlowCard>
  );
};

/* Enhanced Hero Section with Staggered Animations - Mobile optimized */
const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        {/* MOBILE: Content first, then animation */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
          
          {/* CONTENT COLUMN - Always first on mobile */}
          <div className="space-y-6 lg:space-y-8 order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
              className="inline-block"
            >
              <div className="group relative cursor-pointer">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59,130,246,0.3)',
                      '0 0 40px rgba(139,92,246,0.4)',
                      '0 0 20px rgba(59,130,246,0.3)',
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-400/30 rounded-full blur-lg"
                />
                <span className="relative inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-blue-500/50 text-white font-semibold text-xs lg:text-sm">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="mr-2 lg:mr-3"
                  >
                    <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
                  </motion.div>
                  <span>Prospect CRM</span>
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-black text-white leading-tight lg:leading-[0.95] tracking-tight"
              >
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block transform-gpu"
                >
                  Prospect CRM, Smarter Relationships,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="block transform-gpu"
                >
                  Stronger Conversions
                </motion.span>
              </motion.h1>

              {/* Animated Gradient Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full relative overflow-hidden max-w-xs lg:max-w-md"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="space-y-4 lg:space-y-5 max-w-xl"
            >
              <p className="text-base lg:text-lg text-white/90 leading-relaxed font-light">
                Turn every lead into a meaningful connection.
              </p>
              <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                360Airo's Prospect CRM helps you manage, track, and nurture leads from first contact to conversion using a streamlined lead management system built for clarity and performance. It gives modern outreach teams the structure of advanced sales CRM software without the clutter—so you can focus on conversations that move deals forward while the system handles everything behind the scenes.
              </p>
              <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                Designed for modern outreach teams that want clarity, not clutter — so you can focus on building genuine relationships while our CRM automates the rest.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }} 
                whileTap={{ scale: 0.95 }} 
                className="group relative overflow-hidden rounded-xl w-full sm:w-auto"
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                      'linear-gradient(45deg, #8B5CF6, #3B82F6)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0"
                />
                <Button size="lg" className="relative bg-transparent text-white w-full sm:w-auto px-6 py-4 lg:px-8 lg:py-3 text-sm lg:text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl">
                  <span>Organize Your Prospects</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* ANIMATION COLUMN - Always second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            className="relative flex items-center justify-center h-full order-2 mt-8 lg:mt-0"
          >
            <AnimatedCRMDashboard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* Button click handler */
const handleCTAClick = () => {
  window.open('https://app.360airo.com/', '_blank');
};

export default function ProspectCRMPage() {
  const [activeFeature, setActiveFeature] = useState(0);
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
      icon: Database,
      title: 'Centralized Lead Management for Complete Visibility',
      description: 'Your prospects shouldn\'t be scattered across tabs, tools, and notes. With 360Airo\'s Prospect CRM, every interaction and engagement detail is stored inside one organized dashboard powered by robust CRM lead management capabilities.',
      features: [
        'View complete timelines and communication history',
        'Segment contacts based on behavior, campaign, or funnel stage',
        'Add custom notes, tags, and deal stages with ease',
        'Sync seamlessly with Email Sequences and LinkedIn outreach workflows'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights That Move Deals Forward',
      description: 'This CRM does more than store information—it guides decisions. Through detailed analytics and measurable insights, you can understand which leads are highly engaged and where to concentrate your energy across your CRM software programs.',
      features: [
        'Identify high-intent leads with engagement insights',
        'Use activity indicators based on opens, clicks, and replies',
        'Measure the performance of campaigns and follow-ups',
        'Track deal progress across your pipeline with confidence'
      ],
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: Workflow,
      title: 'Automation That Works While You Work',
      description: 'Stop wasting time on repetitive tasks. 360Airo\'s Prospect CRM connects directly to your outreach workflows to automate actions across your entire lead management system.',
      features: [
        'Set behavior-based rules for lead progression and re-engagement',
        'Auto-update contact details and workflow triggers',
        <>Maintain smooth communication handoffs within the <Link href="/features/unified-inbox" className="text-[#3B82F6] hover:text-white transition-colors duration-300 underline underline-offset-2">Unified Inbox</Link></>
      ],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Shield,
      title: 'Why Teams Choose 360Airo\'s Prospect CRM',
      description: '360Airo\'s Prospect CRM helps teams sell smarter, follow up faster, and build relationships that convert consistently.',
      features: [
        'Unified database for complete prospect visibility',
        'Advanced tracking across campaigns and conversations',
        'Predictive insights that support smarter follow-ups',
        'Seamless coordination across outreach channels',
        'Collaboration tools that keep sales and marketing aligned'
      ],
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
      <Head>
        <title>Prospect CRM | 360Airo - Smarter Relationships, Stronger Conversions</title>
        <meta name="description" content="Turn every lead into a meaningful connection with 360Airo's Prospect CRM. Manage, track, and nurture leads from first contact to conversion with intelligent automation." />
        <meta name="keywords" content="prospect CRM, lead management, sales CRM, customer relationship management, lead tracking, sales automation" />
        <link rel="canonical" href="https://360airo.com/features/prospect-crm" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 overflow-x-hidden">
        <Navbar />

        {/* Enhanced Hero Section */}
        <HeroSection />

        {/* FEATURES SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-green-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Key Features</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4"
              >
                Why Teams Choose <span className="text-green-400">360Airo's Prospect CRM</span>
              </motion.h2>
              <SectionDivider />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CENTRALIZED LEAD MANAGEMENT SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-blue-950/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-2 lg:mb-3"
              >
                <span className="text-blue-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Centralized Visibility</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4"
              >
                Centralized Lead Management for Complete Visibility
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <SectionDivider />
              </motion.div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="space-y-4 lg:space-y-6"
              >
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                  Your prospects shouldn't be scattered across tabs, tools, and notes. With 360Airo's Prospect CRM, every interaction and engagement detail is stored inside one organized dashboard powered by robust CRM <Link href="/features/lead-management-software" className="text-blue-400 hover:text-white transition-colors duration-300 underline underline-offset-2">lead management software</Link> capabilities.
                </p>
                
                <div className="space-y-3 lg:space-y-4">
                  {[
                    'View complete timelines and communication history',
                    'Segment contacts based on behavior, campaign, or funnel stage',
                    'Add custom notes, tags, and deal stages with ease',
                    'Sync seamlessly with Email Sequences and LinkedIn outreach workflows'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start space-x-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                      >
                        <CheckCircle2 className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                      </motion.div>
                      <motion.span 
                        className="text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        {item}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.5 }}
                  className="text-white/60 text-xs lg:text-sm italic"
                >
                  Every update appears instantly, giving your team the full context needed before taking the next step in lead management software.
                </motion.p>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.15, type: "spring" }}
                className="relative"
              >
                <GlowCard className="rounded-xl lg:rounded-2xl">
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/10 p-4 lg:p-8 shadow-2xl">
                    <div className="space-y-4 lg:space-y-6">
                      {/* Timeline Visualization */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 lg:space-x-3">
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full"
                          />
                          <span className="text-white font-semibold text-sm lg:text-base">Sarah Chen</span>
                        </div>
                        <span className="text-blue-400 text-xs lg:text-sm">Hot Lead</span>
                      </div>
                      
                      <div className="space-y-3 lg:space-y-4">
                        {[
                          { time: '2 hours ago', action: 'Email Opened', color: 'bg-blue-500' },
                          { time: '4 hours ago', action: 'LinkedIn Connection', color: 'bg-purple-500' },
                          { time: '1 day ago', action: 'Website Visit', color: 'bg-cyan-500' },
                          { time: '2 days ago', action: 'Initial Contact', color: 'bg-green-500' }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.08 }}
                            className="flex items-center space-x-3 lg:space-x-4 group"
                          >
                            <motion.div 
                              className={`w-1.5 h-1.5 lg:w-2 lg:h-2 ${item.color} rounded-full group-hover:scale-125 transition-transform duration-300`}
                              whileHover={{ scale: 1.25 }}
                            />
                            <div className="flex-1">
                              <div className="text-white text-xs lg:text-sm group-hover:text-blue-300 transition-colors">{item.action}</div>
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

        {/* DATA-DRIVEN INSIGHTS SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-purple-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Intelligent Analytics</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4"
              >
                Data-Driven Insights That <span className="text-purple-400">Move Deals Forward</span>
              </motion.h2>
              <SectionDivider />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 lg:mb-8"
              >
                This CRM does more than store information—it guides decisions. Through detailed analytics and measurable insights, you can understand which leads are highly engaged and where to concentrate your energy across your CRM software programs.
              </motion.p>
              
              {/* Bullet Points Section */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
                  <div className="space-y-4 lg:space-y-6">
                    <div className="space-y-3 lg:space-y-4">
                      {[
                        'Identify high-intent leads with engagement insights',
                        'Use activity indicators based on opens, clicks, and replies',
                        'Measure the performance of campaigns and follow-ups',
                        'Track deal progress across your pipeline with confidence'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ delay: 0.5 + index * 0.08 }}
                          className="flex items-start space-x-3 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                          >
                            <CheckCircle2 className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                          </motion.div>
                          <motion.span 
                            className="text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            {item}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: 0.8 }}
                      className="text-white/60 text-xs lg:text-sm italic"
                    >
                      With powerful visibility and predictive lead scoring, follow-ups become strategic and timely—not guesswork.
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-purple-500/20"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: 0.9 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.03, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4"
                      >
                        <Target className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 1.1 }}
                        className="text-white font-semibold text-base lg:text-lg mb-1 lg:mb-2"
                      >
                        Predictable Wins
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 1.2 }}
                        className="text-white/70 text-xs lg:text-sm leading-relaxed"
                      >
                        When data meets intelligence, follow-ups stop being random — they become predictable wins.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Additional Insights - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, type: "spring" }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-purple-500/20"
            >
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">AI-Powered Lead Scoring</h4>
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      { label: 'Email Engagement', score: 92, color: 'bg-green-400' },
                      { label: 'Website Activity', score: 78, color: 'bg-blue-400' },
                      { label: 'Social Interaction', score: 85, color: 'bg-purple-400' },
                      { label: 'Response Time', score: 67, color: 'bg-cyan-400' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.08 }}
                        className="space-y-1 lg:space-y-2 group"
                      >
                        <div className="flex justify-between text-xs lg:text-sm text-white/80 group-hover:text-white transition-colors">
                          <span>{item.label}</span>
                          <span>{item.score}%</span>
                        </div>
                        <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
                            className={`h-full ${item.color} rounded-full group-hover:shadow-lg transition-shadow`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">Conversion Pipeline</h4>
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      { stage: 'Initial Contact', count: '1,247', progress: 100, color: 'from-blue-500 to-cyan-400' },
                      { stage: 'Engaged', count: '892', progress: 72, color: 'from-purple-500 to-pink-400' },
                      { stage: 'Qualified', count: '567', progress: 46, color: 'from-green-500 to-emerald-400' },
                      { stage: 'Closed Won', count: '224', progress: 18, color: 'from-orange-500 to-red-400' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 15, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ y: -1, scale: 1.01 }}
                        className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                      >
                        <div>
                          <div className="text-white font-medium text-sm lg:text-base group-hover:text-purple-300 transition-colors">{item.stage}</div>
                          <div className="text-white/60 text-xs lg:text-sm group-hover:text-white/80">{item.count} leads</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold text-sm lg:text-base">{item.progress}%</div>
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

        {/* AUTOMATION SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-blue-950/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-cyan-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Smart Automation</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4"
              >
                Automation That <span className="text-cyan-400">Works While You Work</span>
              </motion.h2>
              <SectionDivider />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto mb-6 lg:mb-8"
              >
                Stop wasting time on repetitive tasks. 360Airo's Prospect CRM connects directly to your outreach workflows to automate actions across your entire lead management system.
              </motion.p>
              
              {/* Bullet Points Section */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div className="space-y-4 lg:space-y-6">
                    <div className="space-y-3 lg:space-y-4">
                      {[
                        'Set behavior-based rules for lead progression and re-engagement',
                        'Auto-update contact details and workflow triggers',
                        'Maintain smooth communication handoffs within the Unified Inbox'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ delay: 0.5 + index * 0.08 }}
                          className="flex items-start space-x-3 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                          >
                            <CheckCircle2 className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                          </motion.div>
                          <motion.span 
                            className="text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            {item}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: 0.8 }}
                      className="text-white/60 text-xs lg:text-sm italic"
                    >
                      Your CRM becomes a dependable teammate—organizing data, managing tasks, and keeping momentum strong while your team focuses on closing.
                    </motion.p>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-cyan-500/20"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: 0.9 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.03, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4"
                      >
                        <Rocket className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 1.1 }}
                        className="text-white font-semibold text-base lg:text-lg mb-1 lg:mb-2"
                      >
                        Your Silent Teammate
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 1.2 }}
                        className="text-white/70 text-xs lg:text-sm leading-relaxed"
                      >
                        Your CRM becomes your silent teammate — managing relationships while you focus on closing deals.
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Workflow Visualization - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="mt-8 lg:mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-cyan-500/20"
            >
              <div className="text-center mb-6 lg:mb-8">
                <motion.h4 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="text-xl lg:text-2xl font-bold text-white mb-1 lg:mb-2"
                >
                  Automated Workflow Engine
                </motion.h4>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.15 }}
                  className="text-white/60 text-sm lg:text-base"
                >
                  Watch how leads move through your automated pipeline
                </motion.p>
              </div>
              
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-4 lg:gap-0 relative">
                {[
                  { icon: Mail, label: 'Lead Captured', color: 'bg-blue-500' },
                  { icon: Filter, label: 'AI Scoring', color: 'bg-purple-500' },
                  { icon: Workflow, label: 'Auto-Tagging', color: 'bg-cyan-500' },
                  { icon: MessageSquare, label: 'Smart Follow-up', color: 'bg-green-500' },
                  { icon: Target, label: 'Conversion', color: 'bg-orange-500' }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    <motion.div
                      className={`w-12 h-12 lg:w-16 lg:h-16 ${step.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 lg:mb-3 shadow-lg`}
                      whileHover={{ scale: isMobile ? 1.05 : 1.1, y: isMobile ? -2 : -5 }}
                      transition={{ duration: 0.4, type: "spring" }}
                    >
                      <step.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <div className="text-white font-medium text-xs lg:text-sm leading-tight">{step.label}</div>
                  </motion.div>
                ))}
                
                {/* Connecting Lines - Hidden on mobile, shown on desktop */}
                {!isMobile && (
                  <div className="absolute top-6 left-16 right-16 h-0.5 bg-white/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 origin-left rounded-full"
                    />
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.8 }}
                className="text-center mt-6 lg:mt-8"
              >
                <p className="text-white/70 text-xs lg:text-sm">
                  Your CRM becomes a dependable teammate—organizing data, managing tasks, and keeping momentum strong while your team focuses on closing.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-blue-950/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-orange-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Key Benefits</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4"
              >
                Transform Your <span className="text-orange-400">Lead Management</span>
              </motion.h2>
              <SectionDivider />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group text-center"
                  >
                    <motion.div
                      className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${benefit.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.15 }}
                    >
                      {benefit.metric}
                    </motion.div>
                    <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3 group-hover:text-orange-300 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mt-3 lg:mt-4">
                      <span className="text-orange-400 text-xs lg:text-sm font-medium px-3 py-1 bg-orange-500/10 rounded-full">
                        {benefit.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FINAL CTA - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-950/40 to-purple-500/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-blue-400 font-semibold text-xs lg:text-sm tracking-wider uppercase">Ready to Transform Your CRM?</span>
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-3xl md:text-4xl md:text-5xl font-bold text-white"
              >
                360Airo's Prospect CRM helps teams <span className="text-blue-400">sell smarter, follow up faster</span>, and build relationships that convert consistently.
              </motion.h2>
              <SectionDivider />
              
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6 text-left max-w-3xl mx-auto">
                {[
                  'Unified database for complete prospect visibility',
                  'Advanced tracking across campaigns and conversations',
                  'Predictive insights that support smarter follow-ups',
                  'Seamless coordination across outreach channels',
                  'Collaboration tools that keep sales and marketing aligned'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.08, type: "spring" }}
                    className="flex items-start space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-lg"
                    >
                      <CheckCircle2 className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                    </motion.div>
                    <motion.span 
                      className="text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.5 }}
                className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto"
              >
                Build meaningful connections, automate repetitive tasks, and close more deals with the intelligent CRM built for modern outreach teams.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
                <motion.div 
                  whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="group relative overflow-hidden rounded-xl w-full sm:w-auto"
                  onClick={handleCTAClick}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-blue-950 hover:bg-transparent w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-6 text-sm lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 shadow-xl">
                    Organize Your Prospects
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4 lg:mt-6 mb-1 lg:mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                style={{ maxWidth: '100px' }}
              />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.7 }}
                className="text-white/70 text-xs lg:text-sm"
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
