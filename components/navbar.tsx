'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Zap,
  Globe,
  BarChart3,
  ArrowRight,
  Command,
  Mail,
  Target,
  TrendingUp,
  Shield,
  Rocket,
  Users,
  Inbox,
  Workflow,
  MessageSquare,
  Linkedin,
  Gift,
  Users2,
  PlayCircle,
  CreditCard,
  Share2,
  Database,
  Calculator as CalcIcon,
  PenTool,
  CheckSquare
} from 'lucide-react';

const freeTools = [
  { 
    name: 'Email Verifier', 
    href: '/free-tools/email-verifier',
    description: 'Verify email addresses and reduce bounce rates instantly',
    icon: Mail,
    color: 'from-blue-500 to-cyan-400',
    tag: 'Free'
  },
  { 
    name: 'Mailbox Calculator', 
    href: '/free-tools/mailbox-calculator',
    description: 'Calculate optimal mailbox warming and sending limits',
    icon: CalcIcon,
    color: 'from-green-500 to-emerald-400',
    tag: 'Free'
  },
  { 
    name: 'DMARC Generator', 
    href: '/free-tools/dmarc-generator',
    description: 'Generate DMARC records to protect your email domain',
    icon: Shield,
    color: 'from-purple-500 to-pink-400',
    tag: 'Free'
  },
  { 
    name: 'SPF Generator', 
    href: '/free-tools/spf-generator',
    description: 'Create SPF records for better email authentication',
    icon: Zap,
    color: 'from-orange-500 to-red-400',
    tag: 'Free'
  },
  { 
    name: 'Email Pitch Generator', 
    href: '/free-tools/email-pitch-generator',
    description: 'Generate compelling email pitches with AI assistance',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-400',
    tag: 'Free'
  },
  { 
    name: 'Email Signature Builder', 
    href: '/free-tools/email-signature-builder',
    description: 'Create professional email signatures without coding',
    icon: PenTool,
    color: 'from-indigo-500 to-blue-400',
    tag: 'Free'
  },
  { 
    name: 'Email Sequencer', 
    href: '/free-tools/email-sequencer',
    description: 'Generate complete email sequences with personalization',
    icon: Workflow,
    color: 'from-purple-500 to-indigo-400',
    tag: 'Free'
  },
  { 
    name: 'Email Template Analyzer', 
    href: '/free-tools/email-template-analyzer',
    description: 'Analyze emails for spam words and deliverability issues',
    icon: CheckSquare,
    color: 'from-orange-500 to-red-400',
    tag: 'Free'
  },
  { 
    name: 'Email Deliverability Test', 
    href: '/free-tools/email-deliverability-test',
    description: 'Test email deliverability with SMTP validation',
    icon: Globe,
    color: 'from-cyan-500 to-blue-400',
    tag: 'Free'
  },
  { 
    name: 'Lead Conversion Platform', 
    href: '/free-tools/lead-conversion-platform',
    description: 'Identify anonymous visitors, enrich leads, and route to sales teams',
    icon: TrendingUp,
    color: 'from-purple-600 to-indigo-500',
    tag: 'Free'
  },
];

const features = [
  { 
    name: 'Email Warmup', 
    href: '/features/email-warmup',
    description: 'Boost deliverability rates with AI-powered warmup sequences',
    icon: Zap,
    color: 'from-emerald-500 to-teal-400',
    tag: 'Popular'
  },
  { 
    name: 'Domains & Emails', 
    href: '/features/domains-emails',
    description: 'Manage unlimited domains and email accounts seamlessly',
    icon: Globe,
    color: 'from-blue-500 to-cyan-400',
    tag: null
  },
  { 
    name: 'AI & Annual Campaigns', 
    href: '/features/email-campaigns',
    description: 'Plan, execute, and optimize year-long email strategies',
    icon: Target,
    color: 'from-purple-500 to-pink-400',
    tag: 'New'
  },
  { 
    name: 'AI Content Generation', 
    href: '/features/ai-pitch-generation',
    description: 'Generate personalized, high-converting email content',
    icon: Sparkles,
    color: 'from-orange-500 to-red-400',
    tag: 'AI Powered'
  },
  { 
    name: 'Prospect CRM', 
    href: '/features/prospect-crm',
    description: 'Manage, track, and nurture every lead from first contact to conversion',
    icon: Users,
    color: 'from-indigo-500 to-blue-400',
    tag: 'New'
  },
  { 
    name: 'Unified Shared Inbox', 
    href: '/features/unified-shared-inbox',
    description: 'Centralized inbox for team collaboration and customer communication',
    icon: Inbox,
    color: 'from-violet-500 to-purple-400',
    tag: 'Team'
  },
  { 
    name: 'Email Sequences', 
    href: '/features/email-sequences',
    description: 'Automated multi-step email campaigns that nurture leads',
    icon: Workflow,
    color: 'from-pink-500 to-rose-400',
    tag: 'Automation'
  },
  { 
    name: 'AI Automation', 
    href: '/features/ai-automation',
    description: 'Intelligent workflow automation powered by artificial intelligence',
    icon: Rocket,
    color: 'from-amber-500 to-orange-400',
    tag: 'AI Powered'
  },
  { 
    name: 'LinkedIn Automation', 
    href: '/features/linkedin-automation',
    description: 'Automate LinkedIn outreach and connection management',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-400',
    tag: 'Social'
  },
  { 
    name: 'Reports & Analytics', 
    href: '/features/report-analytics',
    description: 'Deep insights and performance analytics dashboard',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-400',
    tag: null
  },
  { 
    name: 'Referral Program', 
    href: '/features/360airo-referral-program',
    description: 'Invite friends and earn rewards with our referral program',
    icon: Gift,
    color: 'from-green-500 to-emerald-400',
    tag: 'Earn'
  },
  { 
    name: 'Affiliate Program', 
    href: '/features/360airo-affiliate-program',
    description: 'Join our affiliate program and earn commissions',
    icon: Users2,
    color: 'from-cyan-500 to-blue-400',
    tag: 'Partner'
  },
  { 
    name: 'See in Action', 
    href: '/features/experience-360airo-in-action',
    description: 'Watch demos and see how 360airo transforms your workflow',
    icon: PlayCircle,
    color: 'from-red-500 to-pink-400',
    tag: 'Demo'
  },
  { 
    name: 'Multi-Channel', 
    href: '/features/multi-channel-platform',
    description: 'Reach customers across multiple channels seamlessly',
    icon: Share2,
    color: 'from-indigo-500 to-purple-400',
    tag: 'Omnichannel'
  },
  {
    name: 'Team Collaboration',
    href: '/features/team-collaboration',
    description: 'Work smarter together with unified team workspace',
    icon: Users2,
    color: 'from-purple-500 to-pink-400',
    tag: 'New'
  },
  {
    name: 'Prospect Management',
    href: '/features/prospect-management',
    description: 'Centralize, organize, and track all your leads efficiently',
    icon: Database,
    color: 'from-indigo-500 to-purple-400',
    tag: 'New'
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [freeToolsOpen, setFreeToolsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileFreeToolsOpen, setMobileFreeToolsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const freeToolsRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileFreeToolsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active item based on current path
  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  // Clean hover handlers for desktop
  const showDropdown = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setFeaturesOpen(true);
  }, []);

  const hideDropdown = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setFeaturesOpen(false);
    }, 150);
  }, []);

  const cancelHide = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Handle mobile features toggle
  const toggleMobileFeatures = useCallback(() => {
    setMobileFeaturesOpen(!mobileFeaturesOpen);
  }, [mobileFeaturesOpen]);

  // Handle mobile free tools toggle
  const toggleMobileFreeTools = useCallback(() => {
    setMobileFreeToolsOpen(!mobileFreeToolsOpen);
  }, [mobileFreeToolsOpen]);

  // Handle Features click - navigate and close dropdown
  const handleFeaturesClick = useCallback((e: React.MouseEvent) => {
    if (e.type === 'click') {
      setFeaturesOpen(false);
    }
  }, []);

  // Handle login redirect
  const handleLogin = useCallback(() => {
    window.location.href = 'https://app.360airo.com';
  }, []);

  // Handle get started redirect
  const handleGetStarted = useCallback(() => {
    window.location.href = 'https://app.360airo.com';
  }, []);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Modern Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo - Rotation Removed */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1">
                  <div className="w-full h-full relative">
                    <Image
                      src="/favicon_360airo__1_-removebg-preview.png"
                      alt="360airo Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-2xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent"
              >
                360airo
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              <NavLink 
                href="/" 
                label="Home" 
                isActive={activeItem === '/'} 
                onHover={() => setActiveItem('/')}
                onMouseEnter={() => {
                  setActiveItem('/');
                  hideDropdown();
                }}
              />
              
              {/* Centered Features Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Link
                  href="/features"
                  onClick={handleFeaturesClick}
                  className="flex items-center space-x-1 px-4 py-2 text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 group relative"
                >
                  <span>Features</span>
                  <motion.div
                    animate={{ rotate: featuresOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="group-hover:text-[#A855F7] transition-colors duration-200"
                  >
                    <ChevronDown className="h-5 w-4" />
                  </motion.div>
                  
                  {featuresOpen && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>

                {/* Centered Dropdown */}
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onMouseEnter={cancelHide}
                      onMouseLeave={hideDropdown}
                      className="absolute top-full left-5/5 transform -translate-x-1/2 mt-2 w-[800px] bg-[#1a0b2e] border-2 border-[#8B5CF6]/30 rounded-2xl shadow-2xl overflow-hidden z-[100]"
                      style={{ 
                        background: 'linear-gradient(145deg, #1a0b2e 0%, #2d1b3d 50%, #1a0b2e 100%)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-[#C084FC]/10 rounded-2xl pointer-events-none" />
                      
                      <div className="relative p-6">
                        <div className="max-h-[400px] overflow-y-auto pr-2">
                          <div className="grid grid-cols-3 gap-2">
                            {features.map((feature, index) => (
                              <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                  delay: index * 0.02,
                                  duration: 0.25,
                                  ease: 'easeOut'
                                }}
                              >
                                <Link
                                  href={feature.href}
                                  className="block p-4 rounded-xl transition-all duration-200 border border-transparent hover:bg-white/10 hover:border-[#8B5CF6]/30 group/card"
                                  onClick={() => setFeaturesOpen(false)}
                                >
                                  <div className="flex items-start space-x-3">
                                    <motion.div 
                                      className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                                      whileHover={{ scale: 1.05, rotate: 2 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                      <feature.icon className="h-5 w-5 text-white" />
                                    </motion.div>
                                    
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2 mb-1">
                                        <h4 className="font-semibold text-white text-sm group-hover/card:text-[#A855F7] transition-colors duration-200">
                                          {feature.name}
                                        </h4>
                                        {feature.tag && (
                                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                            feature.tag === 'Popular' 
                                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                              : feature.tag === 'New'
                                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                              : feature.tag === 'AI Powered'
                                              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                              : feature.tag === 'Team'
                                              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                                              : feature.tag === 'Automation'
                                              ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                                              : feature.tag === 'Social'
                                              ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                                              : feature.tag === 'Earn'
                                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                              : feature.tag === 'Partner'
                                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                              : feature.tag === 'Demo'
                                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                              : feature.tag === 'Plans'
                                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                              : feature.tag === 'Omnichannel'
                                              ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                                              : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                          }`}>
                                            {feature.tag}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-white/70 group-hover/card:text-white/90 transition-colors duration-200 line-clamp-2">
                                        {feature.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                          className="border-t border-[#8B5CF6]/20 mt-6 pt-4"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-white">Ready to get started?</p>
                              <p className="text-xs text-white/70">Join thousands of businesses automating campaigns</p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:shadow-lg text-white text-sm px-4 py-2"
                                onClick={handleGetStarted}
                              >
                                Start Free Trial
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Free Tools Dropdown */}
              <div 
                ref={freeToolsRef}
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setFreeToolsOpen(true);
                  hideDropdown();
                }}
                onMouseLeave={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  timeoutRef.current = setTimeout(() => {
                    setFreeToolsOpen(false);
                  }, 150);
                }}
              >
                <Link
                  href="/free-tools"
                  className="flex items-center space-x-1 px-4 py-2 text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 group relative"
                >
                  <span>Free Tools</span>
                  <motion.div
                    animate={{ rotate: freeToolsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="group-hover:text-[#A855F7] transition-colors duration-200"
                  >
                    <ChevronDown className="h-5 w-4" />
                  </motion.div>
                  
                  {freeToolsOpen && (
                    <motion.div
                      layoutId="navbar-underline-freetools"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>

                {/* Free Tools Dropdown */}
                <AnimatePresence>
                  {freeToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onMouseEnter={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        setFreeToolsOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        timeoutRef.current = setTimeout(() => {
                          setFreeToolsOpen(false);
                        }, 150);
                      }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-[#1a0b2e] border-2 border-[#8B5CF6]/30 rounded-xl shadow-2xl overflow-hidden z-[100]"
                      style={{ 
                        background: 'linear-gradient(145deg, #1a0b2e 0%, #2d1b3d 50%, #1a0b2e 100%)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-[#C084FC]/10 rounded-xl pointer-events-none" />
                      
                      {/* Scrollable Container */}
                      <div className="free-tools-dropdown relative overflow-y-auto p-3 max-h-[300px]" style={{
                        scrollBehavior: 'smooth'
                      }}>
                        <div className="grid grid-cols-3 gap-2">
                          {freeTools.map((tool, index) => (
                            <motion.div
                              key={tool.name}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                delay: index * 0.03,
                                duration: 0.25,
                                ease: 'easeOut'
                              }}
                            >
                              <Link
                                href={tool.href}
                                className="block h-full rounded-lg transition-all duration-300 border border-white/10 hover:border-[#8B5CF6]/50 group/card bg-white/5 hover:bg-white/10 hover:scale-105"
                                onClick={() => setFreeToolsOpen(false)}
                              >
                                <div className="flex flex-col items-center justify-center h-full p-2 text-center space-y-1.5">
                                  <motion.div 
                                    className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                  >
                                    <tool.icon className="h-5 w-5 text-white" />
                                  </motion.div>
                                  
                                  <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center justify-center space-x-1 mb-0.5 flex-wrap">
                                      <h4 className="font-semibold text-white text-xs group-hover/card:text-[#A855F7] transition-colors duration-200">
                                        {tool.name}
                                      </h4>
                                    </div>
                                    {tool.tag && (
                                      <span className="text-xs px-1.5 py-0.5 rounded-full font-medium bg-green-500/20 text-green-400 border border-green-500/30 inline-block mx-auto">
                                        {tool.tag}
                                      </span>
                                    )}
                                    <p className="text-xs text-white/60 group-hover/card:text-white/80 transition-colors duration-200 line-clamp-2 mt-1">
                                      {tool.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Custom Scrollbar Styles */}
                      <style jsx global>{`
                        .free-tools-dropdown::-webkit-scrollbar {
                          width: 10px;
                        }
                        .free-tools-dropdown::-webkit-scrollbar-track {
                          background: rgba(20, 10, 40, 0.3);
                          border-radius: 10px;
                        }
                        .free-tools-dropdown::-webkit-scrollbar-thumb {
                          background: rgba(139, 92, 246, 0.5);
                          border-radius: 10px;
                        }
                        .free-tools-dropdown::-webkit-scrollbar-thumb:hover {
                          background: rgba(139, 92, 246, 0.8);
                        }
                      `}</style>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink 
                href="/pricing" 
                label="Pricing" 
                isActive={activeItem === '/pricing'} 
                onHover={() => setActiveItem('/pricing')}
                onMouseEnter={() => {
                  setActiveItem('/pricing');
                  hideDropdown();
                }}
              />
              <NavLink 
                href="/blogs" 
                label="Blog" 
                isActive={activeItem === '/blogs'} 
                onHover={() => setActiveItem('/blogs')}
                onMouseEnter={() => {
                  setActiveItem('/blogs');
                  hideDropdown();
                }}
              />
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                onClick={handleLogin}
              >
                Login
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] hover:shadow-2xl hover:shadow-purple-500/25 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 group"
                  onClick={handleGetStarted}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button with Login Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Login Button - Visible on mobile */}
              <motion.button
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white rounded-lg font-semibold text-sm"
              >
                Login
              </motion.button>

              {/* Burger Menu */}
              <button
                className="text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-[#1a0b2e] border-t border-[#8B5CF6]/20"
              style={{ 
                background: 'linear-gradient(145deg, #1a0b2e 0%, #2d1b3d 50%, #1a0b2e 100%)'
              }}
            >
              <div className="px-4 py-6 space-y-2">
                <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
                
                {/* Mobile Features Dropdown - Remove icon from Features title only */}
                <div ref={mobileDropdownRef} className="space-y-2">
                  <button
                    onClick={toggleMobileFeatures}
                    className="flex items-center justify-between w-full px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    {/* Removed the logo icon from Features title */}
                    <span>Features</span>
                    <motion.div
                      animate={{ rotate: mobileFeaturesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  {/* Mobile Features Dropdown Content - KEEP ICONS for sub-feature pages */}
                  <AnimatePresence>
                    {mobileFeaturesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="max-h-64 overflow-y-auto space-y-2 ml-4 border-l border-[#8B5CF6]/20 pl-4">
                          {features.map((feature, index) => (
                            <motion.div
                              key={feature.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.2 }}
                            >
                              <Link
                                href={feature.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileFeaturesOpen(false);
                                }}
                                className="flex items-center space-x-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                              >
                                {/* KEEP ICONS for individual feature pages */}
                                <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                  <feature.icon className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <div className="font-medium text-sm">{feature.name}</div>
                                    {feature.tag && (
                                      <span className="text-xs px-1.5 py-0.5 bg-white/10 rounded-full border border-white/20 flex-shrink-0">
                                        {feature.tag}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-white/50 line-clamp-1">{feature.description}</div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Free Tools Dropdown */}
                <div ref={mobileFreeToolsRef} className="space-y-2">
                  <button
                    onClick={toggleMobileFreeTools}
                    className="flex items-center justify-between w-full px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <span>Free Tools</span>
                    <motion.div
                      animate={{ rotate: mobileFreeToolsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  {/* Mobile Free Tools Dropdown Content */}
                  <AnimatePresence>
                    {mobileFreeToolsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 ml-4 border-l border-[#8B5CF6]/20 pl-4">
                          {freeTools.map((tool, index) => (
                            <motion.div
                              key={tool.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03, duration: 0.2 }}
                            >
                              <Link
                                href={tool.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileFreeToolsOpen(false);
                                }}
                                className="flex items-center space-x-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
                              >
                                <div className={`w-8 h-8 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                  <tool.icon className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <div className="font-medium text-sm">{tool.name}</div>
                                    {tool.tag && (
                                      <span className="text-xs px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 flex-shrink-0">
                                        {tool.tag}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-white/50 line-clamp-1">{tool.description}</div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink href="/pricing" label="Pricing" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/blogs" label="Blog" onClick={() => setIsOpen(false)} />

                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-[#8B5CF6]/20 space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-semibold"
                    onClick={handleGetStarted}
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Backdrop Only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Enhanced NavLink Component
const NavLink = ({ 
  href, 
  label, 
  isActive, 
  onHover,
  onMouseEnter
}: { 
  href: string; 
  label: string; 
  isActive?: boolean;
  onHover?: () => void;
  onMouseEnter?: () => void;
}) => (
  <Link
    href={href}
    onMouseEnter={onMouseEnter || onHover}
    className="px-4 py-2 text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-medium relative group"
  >
    {label}
    {isActive && (
      <motion.div
        layoutId="navbar-underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-full"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
  </Link>
);

// Mobile NavLink Component
const MobileNavLink = ({ 
  href, 
  label, 
  onClick 
}: { 
  href: string; 
  label: string; 
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
  >
    {label}
  </Link>
);
