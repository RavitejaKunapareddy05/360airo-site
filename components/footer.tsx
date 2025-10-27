'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Mail, Linkedin, Twitter, ArrowRight, Sparkles, Zap, Shield, Rocket, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  const handleGetStarted = () => {
    router.push('/');
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section - Reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl p-6 mb-12 border border-[#b45ecf]/20 backdrop-blur-lg"
        >
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center mb-3">
                <Zap className="h-5 w-5 text-[#b45ecf] mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Stay Ahead in Prospecting
                </h3>
              </div>
              <p className="text-white/70 text-sm">
                Get the latest tips, strategies, and updates delivered to your inbox.
              </p>
            </div>
            <div className="relative">
              <form onSubmit={handleSubscribe} className="flex space-x-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-[#b45ecf]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#b45ecf] transition-colors text-sm"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold flex items-center space-x-2 disabled:opacity-50 text-sm"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="h-3 w-3" />
                    </>
                  )}
                </motion.button>
              </form>

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
                      <span>Thank you for subscribing!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid - Reduced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
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
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/pricing" },
                { name: "AI SDR", href: "/ai-sdr-page" },
                { name: "Integrations", href: "/airo-integrations" },
                { name: "API", href: "#" }
              ].map((link, index) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs">
                    <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.name}
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
                { name: "Blog", href: "/blogs" },
                { name: "360 Academy", href: "/academy-page" },
                { name: "Case Studies", href: "/airo-case-studies" },
                { name: "Community", href: "/Community-Page" },
                { name: "Help Center", href: "#" }
              ].map((link, index) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs">
                    <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.name}
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
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Privacy Policy", href: "/Privacy-Policy-Page" },
                { name: "Anti-Spam Policy", href: "/anti-Spam-Policy" },
                { name: "Terms of Service", href: "#" }
              ].map((link, index) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={link.href} className="text-white/70 hover:text-[#b45ecf] transition-all duration-300 group flex items-center text-xs">
                    <ArrowRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.name}
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

        {/* Bottom Bar - Reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-[#b45ecf]/20 pt-6"
        >
          <div className="flex justify-center">
            <div className="text-white/60 text-xs text-center">
              © {currentYear} 360airo. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
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