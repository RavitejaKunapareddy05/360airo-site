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
  Rocket
} from 'lucide-react';

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
    name: 'Reports & Analytics', 
    href: '/features/report-analytics',
    description: 'Deep insights and performance analytics dashboard',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-400',
    tag: null
  },
  { 
    name: 'Email Security', 
    href: '/features/email-security',
    description: 'Advanced security protocols and spam protection',
    icon: Shield,
    color: 'from-green-500 to-emerald-400',
    tag: 'Enterprise'
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Clean hover handlers
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
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1">
                  <motion.div
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src="/favicon_360airo__1_-removebg-preview.png"
                      alt="360airo Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
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
                  hideDropdown(); // Close dropdown when hovering other items
                }}
              />
              
              {/* Fixed Features Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <button
                  className="flex items-center space-x-1 px-4 py-2 text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 group relative"
                >
                  <span>Features</span>
                  <motion.div
                    animate={{ rotate: featuresOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="group-hover:text-[#A855F7] transition-colors duration-200"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                  
                  {/* Underline for Features */}
                  {featuresOpen && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>

                {/* Dropdown - NO BACKDROP BLOCKING */}
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
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-[#1a0b2e] border-2 border-[#8B5CF6]/30 rounded-2xl shadow-2xl overflow-hidden z-[100]"
                      style={{ 
                        background: 'linear-gradient(145deg, #1a0b2e 0%, #2d1b3d 50%, #1a0b2e 100%)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-[#C084FC]/10 rounded-2xl pointer-events-none" />
                      
                      <div className="relative p-6">
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-1">
                          {features.map((feature, index) => (
                            <motion.div
                              key={feature.name}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                delay: index * 0.03,
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

                        {/* Bottom CTA */}
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
                                onClick={() => setFeaturesOpen(false)}
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

              <NavLink 
                href="/pricing" 
                label="Pricing" 
                isActive={activeItem === '/pricing'} 
                onHover={() => setActiveItem('/pricing')}
                onMouseEnter={() => {
                  setActiveItem('/pricing');
                  hideDropdown(); // Close dropdown
                }}
              />
              <NavLink 
                href="/blogs" 
                label="Blog" 
                isActive={activeItem === '/blogs'} 
                onHover={() => setActiveItem('/blogs')}
                onMouseEnter={() => {
                  setActiveItem('/blogs');
                  hideDropdown(); // Close dropdown
                }}
              />
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Login
              </Button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] hover:shadow-2xl hover:shadow-purple-500/25 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
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
                
                <div className="space-y-2">
                  <div className="text-white/90 font-semibold px-4 py-2 flex items-center space-x-2">
                    <div className="w-4 h-4 relative">
                      <Image
                        src="/favicon_360airo__1_-removebg-preview.png"
                        alt="360airo Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Features</span>
                  </div>
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={feature.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-4 px-6 py-4 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-xs text-white/50">{feature.description}</div>
                        </div>
                        {feature.tag && (
                          <span className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/20">
                            {feature.tag}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <MobileNavLink href="/pricing" label="Pricing" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/blogs" label="Blog" onClick={() => setIsOpen(false)} />

                <div className="pt-4 space-y-3 border-t border-[#8B5CF6]/20 mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#8B5CF6]/30 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Login
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-semibold">
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
    {/* Perfect Underline */}
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
