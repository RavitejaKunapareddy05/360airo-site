'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
      // Send email directly to stellross2002@gmail.com using mailto
      const subject = 'New 360airo Subscription Request';
      const body = `New subscription request received:\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\nUser Agent: ${navigator.userAgent}\n\nPlease add this email to your 360airo mailing list.`;
      
      // Create a hidden link and trigger click
      const mailtoLink = `mailto:stellross2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Also send to your backend API if you have one
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          console.log('✅ Subscription also saved to database');
        }
      } catch (dbError) {
        console.log('ℹ️ Database save optional - email sent via mailto');
      }

      // Show success message
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
      
      console.log('✅ Subscription email sent to stellross2002@gmail.com');
      
    } catch (error) {
      console.error('❌ Subscription error:', error);
      setError('Failed to send subscription. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  // Alternative method using EmailJS (more reliable)
  const handleSubscribeWithEmailJS = async (e: React.FormEvent) => {
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
      // Method 1: Using EmailJS (Recommended - more reliable)
      // You'll need to set up EmailJS account and get these credentials
      const emailjsData = {
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id',
        template_params: {
          to_email: 'stellross2002@gmail.com',
          from_email: email,
          subject: 'New 360airo Subscription',
          message: `New subscription request from: ${email}\nDate: ${new Date().toLocaleString()}`,
          reply_to: email
        }
      };

      // Uncomment this when you set up EmailJS
      /*
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailjsData),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
        console.log('✅ Subscription email sent via EmailJS');
      } else {
        throw new Error('EmailJS failed');
      }
      */

      // Fallback to mailto if EmailJS is not set up
      const subject = 'New 360airo Subscription Request';
      const body = `NEW SUBSCRIPTION REQUEST\n\nEmail Address: ${email}\nSubscription Date: ${new Date().toLocaleString()}\nPlatform: Web\nUser Agent: ${navigator.userAgent}\n\nThis user wants to subscribe to 360airo updates. Please add them to your mailing list.\n\n---\n360airo Subscription System`;
      
      window.open(`mailto:stellross2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
      
      // Show success
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
      
    } catch (error) {
      console.error('❌ Subscription error:', error);
      setError('Something went wrong. Please try again or contact stellross2002@gmail.com directly.');
    } finally {
      setIsLoading(false);
    }
  };

  // Simple mailto function (most reliable)
  const handleSimpleSubscription = (e: React.FormEvent) => {
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
      // Create detailed email content
      const subject = `360airo Subscription: ${email}`;
      const body = `
🔔 NEW 360AIRO SUBSCRIPTION REQUEST

📧 Email: ${email}
📅 Date: ${new Date().toLocaleString()}
🌐 Platform: Website Form
📍 Page: ${window.location.href}

📋 User Details:
- Email: ${email}
- Subscription Time: ${new Date().toLocaleString()}
- User Agent: ${navigator.userAgent}

💌 Action Required:
Please add this email to your 360airo mailing list and send them a welcome email.

---
This email was automatically generated from the 360airo website subscription form.
      `.trim();

      // Open user's email client with pre-filled email
      const mailtoLink = `mailto:stellross2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Use window.open for better compatibility
      const newWindow = window.open(mailtoLink, '_blank');
      
      if (newWindow) {
        // Success - email client opened
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
        console.log('✅ Subscription email opened in email client');
      } else {
        // Fallback - direct window location
        window.location.href = mailtoLink;
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      }
      
    } catch (error) {
      console.error('❌ Subscription error:', error);
      setError('Please try again or email stellross2002@gmail.com directly.');
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

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#19001d] border-t border-[#b45ecf]/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
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
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              background: i % 3 === 0 ? '#b45ecf' : i % 3 === 1 ? '#480056' : '#6b21a8',
              opacity: 0.08,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
          className="bg-gradient-to-r from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl p-4 sm:p-6 mb-8 lg:mb-12 border border-[#b45ecf]/20 backdrop-blur-lg"
        >
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div className="text-left">
              <div className="flex items-center mb-3">
                <Zap className="h-5 w-5 text-[#b45ecf] mr-2" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Stay Ahead in Prospecting
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Get the latest tips, strategies, and updates delivered to your inbox.
              </p>
            </div>
            <div className="relative">
              <form onSubmit={handleSimpleSubscription} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError();
                  }}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 sm:py-2 rounded-lg bg-black/50 border border-[#b45ecf]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b45ecf] transition-colors text-sm"
                  required
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className="px-5 py-3 sm:py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm min-w-[140px] sm:min-w-[120px]"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="h-3 w-3" />
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
                    className="absolute top-full left-0 right-0 mt-2 bg-red-500/20 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <XCircle className="h-4 w-4" />
                        <span>{error}</span>
                      </div>
                      <button
                        onClick={clearError}
                        className="text-red-400 hover:text-red-300 transition-colors"
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
                    className="absolute top-full left-0 right-0 mt-2 bg-green-500/20 border border-green-500/30 rounded-lg p-3 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>
                        Thank you! Check your email client to complete subscription.
                      </span>
                    </div>
                    <p className="text-green-400/80 text-xs mt-2">
                      An email has been prepared for stellross2002@gmail.com. Please send it to complete your subscription.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Rest of your footer content remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
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

            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/60">
                <Shield className="h-3 w-3 text-[#b45ecf]" />
                <span className="text-xs">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Sparkles className="h-3 w-3 text-[#b45ecf]" />
                <span className="text-xs">99.9% Uptime</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
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
              {[
                { name: 'Features', path: '/features' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'AI SDR', path: '/ai-sdr-page' },
                { name: 'Integrations', path: '/airo-integrations' },
              ].map((item, index) => (
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
              {[
                { name: 'Blog', path: '/blogs' },
                { name: '360 Academy', path: '/360-academy' },
                { name: 'Case Studies', path: '/airo-case-studies' },
                { name: 'Community', path: '/community' },
              ].map((item, index) => (
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
              {[
                { name: 'Privacy Policy', path: '/Privacy-Policy-Page' },
                { name: 'Anti-Spam Policy', path: '/anti-Spam-Policy' }
              ].map((item, index) => (
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