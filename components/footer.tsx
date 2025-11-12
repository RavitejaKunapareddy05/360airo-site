'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Twitter, ArrowRight, Sparkles, Zap, Shield, Rocket, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      console.log('📤 Sending subscription request:', email);
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('📨 Response status:', response.status);

      const result = await response.json();
      console.log('📨 Full API Response:', result);

      if (response.ok && result.success) {
        console.log('✅ SUBSCRIPTION SUCCESSFUL!');
        console.log('📧 Email sent to admin:', result.email_sent);
        console.log('👥 Total subscribers:', result.total_subscribers);
        
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to subscribe. Please try again.');
      }
      
    } catch (error: any) {
      console.error('❌ SUBSCRIPTION ERROR:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError('Network connection failed. Please check your internet and try again.');
      } else if (error.message.includes('500')) {
        setError('Server temporarily unavailable. Please try again in a moment.');
      } else {
        setError(error.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStarted = () => {
    window.location.href = 'https://app.360airo.com';
  };

  const clearError = () => {
    setError('');
  };

  // Footer links data
  const footerLinks = [
    {
      category: "Product",
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'AI SDR', path: '/ai-sdr-page' },
        { name: 'Integrations', path: '/airo-integrations' },
      ]
    },
    {
      category: "Resources",
      links: [
        { name: 'Blog', path: '/blogs' },
        { name: '360 Academy', path: '/360-academy' },
        { name: 'Case Studies', path: '/airo-case-studies' },
        { name: 'Community', path: '/community' },
      ]
    },
    {
      category: "Company",
      links: [
        { name: 'Privacy Policy', path: '/Privacy-Policy-Page' },
        { name: 'Anti-Spam Policy', path: '/anti-Spam-Policy' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#19001d] border-t border-[#b45ecf]/30">
      {/* Fixed Animated Background Elements - No SSR mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#b45ecf] opacity-[0.08]"
            style={{
              width: 8,
              height: 8,
              left: `${10 + (i * 6)}%`,
              top: `${10 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 15, 0],
              scale: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl p-6 sm:p-8 mb-8 border border-[#b45ecf]/20 backdrop-blur-lg"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="text-left">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-[#b45ecf] mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Stay Ahead in Prospecting
                </h3>
              </div>
              <p className="text-white/80 text-base leading-relaxed">
                Get exclusive AI-powered sales insights, prospecting strategies, and industry updates delivered directly to your inbox.
              </p>
            </div>

            {/* Right Content - Subscription Form */}
            <div className="relative">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError();
                    }}
                    placeholder="Enter your best email address"
                    className="w-full px-4 py-3 sm:py-3 rounded-lg bg-black/60 border border-[#b45ecf]/40 text-white placeholder-white/60 focus:outline-none focus:border-[#b45ecf] focus:ring-2 focus:ring-[#b45ecf]/20 transition-all duration-300 text-sm"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="px-6 py-3 sm:py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm min-w-[140px] shadow-lg hover:shadow-[#b45ecf]/20 transition-shadow"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-red-500/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm z-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-red-400 text-sm">
                        <XCircle className="h-4 w-4 flex-shrink-0" />
                        <span className="leading-tight">{error}</span>
                      </div>
                      <button
                        onClick={clearError}
                        className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0 ml-3"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Message */}
              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm z-10"
                  >
                    <div className="flex items-center space-x-3 text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span className="leading-tight">
                        🎉 Welcome to 360airo! Thank you for subscribing. We've sent a confirmation to our team.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Rest of your footer content */}
        <div className="mb-8">
          {/* Mobile View - Single row layout */}
          <div className="lg:hidden">
            <div className="flex flex-col space-y-6">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
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
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-[#b45ecf] bg-clip-text text-transparent">
                      360airo
                    </h3>
                    <p className="text-[#b45ecf] text-xs font-semibold">AI-Powered Prospecting</p>
                  </div>
                </div>
                
                {/* Social Links - Top right on mobile */}
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#b45ecf] hover:border-[#b45ecf]/30 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* All Links in Single Row */}
              <div className="grid grid-cols-2 gap-4">
                {footerLinks.map((section, sectionIndex) => (
                  <div key={section.category} className="space-y-3">
                    <motion.h4
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-white font-bold text-sm flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full mr-2"></span>
                      {section.category}
                    </motion.h4>
                    <ul className="space-y-1">
                      {section.links.map((item, index) => (
                        <motion.li 
                          key={item.name} 
                          initial={{ opacity: 0, x: -15 }} 
                          whileInView={{ opacity: 1, x: 0 }} 
                          transition={{ delay: (sectionIndex * 0.2) + (index * 0.1) }}
                        >
                          <Link 
                            href={item.path} 
                            className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs"
                          >
                            <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}


              {/* Contact CTA - Mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-xl p-4 border border-[#b45ecf]/20"
              >
                <h4 className="text-white font-bold text-sm mb-2">Ready to Transform?</h4>
                <p className="text-white/60 text-xs mb-3">
                  Start your journey with 360airo today.
                </p>
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold text-xs"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Desktop View - Original Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Brand Section */}
            <div className="md:col-span-2 lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <div className="relative w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
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
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-[#b45ecf] bg-clip-text text-transparent">
                    360airo
                  </h3>
                  <p className="text-[#b45ecf] text-xs font-semibold">AI-Powered Prospecting</p>
                </div>
              </motion.div>

              <p className="text-white/70 text-sm leading-relaxed">
                Transform your sales pipeline with intelligent prospect management and AI-driven outreach.
              </p>

              

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#b45ecf] hover:border-[#b45ecf]/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white font-bold text-sm mb-4 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full mr-2"></span>
                Product
              </motion.h4>
              <ul className="space-y-2">
                {footerLinks[0].links.map((item, index) => (
                  <motion.li key={item.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link 
                      href={item.path} 
                      className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs"
                    >
                      <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white font-bold text-sm mb-4 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full mr-2"></span>
                Resources
              </motion.h4>
              <ul className="space-y-2">
                {footerLinks[1].links.map((item, index) => (
                  <motion.li key={item.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link 
                      href={item.path} 
                      className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs"
                    >
                      <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white font-bold text-sm mb-4 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full mr-2"></span>
                Company
              </motion.h4>
              <ul className="space-y-2">
                {footerLinks[2].links.map((item, index) => (
                  <motion.li key={item.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link 
                      href={item.path} 
                      className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs"
                    >
                      <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="md:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-xl p-4 border border-[#b45ecf]/20"
              >
                <h4 className="text-white font-bold text-sm mb-2">Ready to Transform?</h4>
                <p className="text-white/60 text-xs mb-3">
                  Start your journey with 360airo today.
                </p>
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold text-xs"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-[#b45ecf]/20 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-xs text-left">
              © {currentYear} 360airo. All Rights Reserved and designed by{' '}
              <a 
                href="https://360marco.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#b45ecf] transition-colors underline"
              >
                360 Marketing Concepts
              </a>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs">
              <Link href="/Privacy-Policy-Page" className="text-white/60 hover:text-[#b45ecf] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/anti-Spam-Policy" className="text-white/60 hover:text-[#b45ecf] transition-colors">
                Anti-Spam Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA - Hidden on mobile, visible on tablet and desktop */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-4 right-4 z-50 hidden sm:block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-xl p-3 shadow-xl border border-white/10 cursor-pointer group"
          onClick={handleGetStarted}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Rocket className="h-4 w-4" />
              <motion.div
                className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
            <div>
              <p className="text-xs font-semibold">Get Started</p>
              <p className="text-[10px] opacity-80">Try 360airo</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}