'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const features = [
  { name: 'Email Warmup', href: '/features/email-warmup' },
  { name: 'Domains & Emails', href: '/features/domains-emails' },
  { name: 'AI & Manual Campaigns', href: '/features/email-campaigns' },
  { name: 'AI Content Generation', href: '/features/ai-pitch-generation' },
  { name: 'Reports & Analytics', href: '/features/report-analytics' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#19001d]/90 backdrop-blur-lg border-b border-[#b45ecf]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text"
            >
              360airo
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/90 hover:text-[#b45ecf] transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white/90 hover:text-[#b45ecf] transition-colors outline-none">
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#480056]/95 backdrop-blur-lg border-[#b45ecf]/30">
                {features.map((feature) => (
                  <DropdownMenuItem key={feature.name} asChild>
                    <Link
                      href={feature.href}
                      className="text-white/90 hover:text-[#b45ecf] cursor-pointer"
                    >
                      {feature.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-white/90 hover:text-[#b45ecf] transition-colors">
              Pricing
            </Link>

            <Link href="/blogs" className="text-white/90 hover:text-[#b45ecf] transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:bg-[#b45ecf]/20 hover:text-white"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:opacity-90 text-white glow-effect">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#19001d]/95 backdrop-blur-lg border-t border-[#b45ecf]/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white/90 hover:text-[#b45ecf]">
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-white/90 font-medium">Features</div>
                {features.map((feature) => (
                  <Link
                    key={feature.name}
                    href={feature.href}
                    className="block pl-4 text-white/70 hover:text-[#b45ecf]"
                  >
                    {feature.name}
                  </Link>
                ))}
              </div>
              <Link href="/pricing" className="block text-white/90 hover:text-[#b45ecf]">
                Pricing
              </Link>
              <Link href="/blogs" className="block text-white/90 hover:text-[#b45ecf]">
                Blog
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-[#b45ecf] text-white hover:bg-[#b45ecf]/20">
                  Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
