'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Mail, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  Timer,
  Users,
  Eye,
  ThermometerSun,
  AlertTriangle,
  Target,
  Activity,
  Zap,
  Star,
  Award,
  Flame,
  Clock,
  Send,
  Inbox,
  UserCheck,
  Plus,
  Minus
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
          background: 'radial-gradient(circle, rgba(255,100,50,0.35) 0%, rgba(255,150,100,0.2) 25%, transparent 55%)',
          borderRadius: '50%',
          opacity: isHovered && !isMobile ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* FAQ Component */
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const faqs = [
    {
      question: "What is an email warmup, and why is it necessary for cold email outreach?",
      answer: "Email warmup is the process of gradually increasing sending volume to build sender reputation. It is necessary because new or inactive inboxes are more likely to trigger spam filters without proper warmup."
    },
    {
      question: "How long should you warm up an email domain before sending campaigns?",
      answer: "Most email domains require two to four weeks of warmup, depending on their age and reputation, to establish trust with inbox providers before launching full-scale campaigns."
    },
    {
      question: "How does the 360Airo email warmup process work?",
      answer: "360Airo's email warmup sends emails within a trusted network, gradually increasing volume while generating real opens and replies to strengthen sender reputation automatically."
    },
    {
      question: "What happens if I send cold emails without warming up my inbox first?",
      answer: "Sending cold emails without warmup often results in spam placement, low engagement, and long-term damage to sender reputation, making future campaigns less effective."
    },
    {
      question: "How many emails can I safely send during the warmup phase?",
      answer: "During warmup, sending begins at very low volumes and increases gradually each day. Safe limits depend on domain history, but controlled ramp-up is essential to avoid spam filters."
    },
    {
      question: "What are the key features of 360Airo's email warmup tool?",
      answer: "Key features include automated volume ramp-up, real engagement simulation, inbox placement monitoring, and direct integration with email sequences for smooth campaign launches."
    },
    {
      question: "Why should I choose 360Airo's email warmup tool over other warmup tools?",
      answer: "360Airo combines email warmup, sequences, analytics, and outreach workflows in one platform, providing better visibility and eliminating the need for multiple disconnected tools."
    },
    {
      question: "What is the best email warm-up tool in 2026?",
      answer: "The best email warm-up tool in 2026 is one that offers automated warmup, real engagement, deliverability insights, and native integration with outreach campaigns, making 360Airo a future-ready solution."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <GlowCard key={index} className="cursor-pointer rounded-xl">
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            whileHover={{ scale: isMobile ? 1.02 : 1.03 }}
          >
            <button
              className="w-full text-left p-4 lg:p-6 flex items-center justify-between group"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
            >
              <div className="flex items-start gap-3 lg:gap-4 flex-1">
                <motion.div
                  className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-r from-[#FF6432] to-[#FF8A65] flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-white font-bold text-xs lg:text-sm">
                    Q
                  </div>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base lg:text-lg font-bold text-white mb-2 transition-colors group-hover:text-[#FF8A65]">
                    {faq.question}
                  </h3>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openFaq === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                style={{ background: '#FF6432' }}
              >
                {openFaq === index ? (
                  <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                ) : (
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                )}
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-white/80 text-sm sm:text-base leading-relaxed border-t border-gray-800 pt-4 sm:pt-6 pl-9 lg:pl-12"
                    >
                      {faq.answer}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </GlowCard>
      ))}
    </div>
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
      staggerChildren: 0.05, 
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

const warmupSteps = [
  {
    step: '01',
    title: 'A Safe, Gradual Ramp Up',
    description: 'We start small and increase your sending volume only when your domain shows positive engagement. This protects your reputation and keeps your domain aligned with what inbox providers expect.',
    icon: TrendingUp,
    color: 'from-[#FF6432] to-[#FF8A65]',
  },
  {
    step: '02',
    title: 'Real Interactions That Count',
    description: 'Warmup emails are opened, replied to, and even marked as important by real verified accounts. These interactions look authentic and help inbox providers trust your domain faster.',
    icon: Users,
    color: 'from-[#FF8A65] to-[#FFB74D]',
  },
  {
    step: '03',
    title: 'Full Visibility and Control',
    description: 'Monitor every stage of your warmup inside the Email campaign analytics panel. Track deliverability score, domain reputation, spam signals, and email health—all transparent and understandable.',
    icon: BarChart3,
    color: 'from-[#FFB74D] to-[#FFC107]',
  },
  {
    step: '04',
    title: 'Long Term Protection',
    description: (
      <>
        Instead of warming your domain once, 360Airo keeps watching for spam traps, bounce issues, and blacklist risks. 
        Use warmup insights directly inside your{' '}
        <Link 
          href="/features/email-sequences" 
          className="text-[#FF8A65] font-semibold hover:text-white transition-colors duration-300 underline underline-offset-2"
        >
          Email Sequences
        </Link>
        {' '}to improve timing and conversions.
      </>
    ),
    icon: Shield,
    color: 'from-[#FFC107] to-[#FF6432]',
  },
];

const benefits = [
  {
    icon: Eye,
    title: 'Higher opens',
    description: 'because your emails are actually seen in the inbox.',
    color: 'from-[#FF6432] to-[#FF8A65]',
    metric: '+85%',
  },
  {
    icon: UserCheck,
    title: 'Higher replies',
    description: 'because your messages are actually delivered to recipients.',
    color: 'from-[#FF8A65] to-[#FFB74D]',
    metric: '+70%',
  },
  {
    icon: Award,
    title: 'Stronger sender score',
    description: 'built through natural and trusted activity.',
    color: 'from-[#FFB74D] to-[#FFC107]',
    metric: '95+',
  },
  {
    icon: AlertTriangle,
    title: 'Lower spam rates',
    description: 'because your domain behaves exactly as inbox providers expect.',
    color: 'from-[#FFC107] to-[#FF6432]',
    metric: '-90%',
  },
  {
    icon: Target,
    title: 'Better ROI',
    description: 'since every campaign starts with healthy deliverability from day one.',
    color: 'from-[#FF6432] to-[#FF8A65]',
    metric: '3x',
  },
  {
    icon: Zap,
    title: 'Faster scaling',
    description: (
      <>
        when combined with{' '}
        <Link 
          href="/features/email-sequences" 
          className="text-[#FF8A65] font-semibold hover:text-white transition-colors duration-300 underline underline-offset-2"
        >
          AI email automation
        </Link>
        {' '}for large outbound activity.
      </>
    ),
    color: 'from-[#FF8A65] to-[#FFB74D]',
    metric: '10x',
  },
];

const userTypes = [
  {
    title: 'Founders & Growth Teams',
    description: 'When revenue depends on email, warmup is non-negotiable. Build trust from day one.',
    icon: Star,
    color: 'from-[#FF6432] to-[#FF8A65]',
  },
  {
    title: 'SDRs & Sales Teams',
    description: 'If inboxing is your goal, warmup is your first step to successful cold outreach.',
    icon: Target,
    color: 'from-[#FF8A65] to-[#FFB74D]',
  },
  {
    title: 'Agencies & Marketing',
    description: 'Manage multiple client domains with reliable deliverability and transparent reporting.',
    icon: Users,
    color: 'from-[#FFB74D] to-[#FFC107]',
  },
];

const stats = [
  { value: '98%', label: 'Inbox Delivery Rate', icon: Mail },
  { value: '30 Days', label: 'Proven Warmup Process', icon: Timer },
  { value: '10,000+', label: 'Domains Successfully Warmed', icon: ThermometerSun },
  { value: '99.9%', label: 'Uptime & Reliability', icon: Activity },
];

/* Section divider - Mobile optimized */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6"
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
        className="h-0.5 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-transparent mb-4"
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
      className="flex items-center justify-center mb-6"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#FF6432]/40 flex-1 max-w-8" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6432] to-[#FF8A65]" />
      <div className="h-px bg-gradient-to-r from-[#FF6432]/40 via-white/20 to-transparent flex-1 max-w-8" />
    </motion.div>
  );
};

/* Mobile optimized button handler */
const handleCTAClick = () => {
  window.open('https://app.360airo.com/', '_blank');
};

/* Internal Link Component */
const InternalLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <Link 
      href={href}
      className={`text-[#FF8A65] font-semibold hover:text-white transition-colors duration-300 underline underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default function EmailWarmupPage() {
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
    <>
      <Head>
        <title>Email Warmup: Get Your Emails Warmup Into the Inbox, Not Spam | 360Airo</title>
        <meta name="description" content="Turn cold domains into trusted senders with 360Airo's email warmup tool. Guaranteed inbox delivery, higher open rates, and better ROI for your outreach campaigns." />
        <meta name="keywords" content="email warmup, best email warmup tool, inbox delivery, sender reputation, email deliverability, cold email, spam avoidance" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/email-warmup" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Email Warmup: Get Your Emails Warmup Into the Inbox, Not Spam | 360Airo" />
        <meta property="og:description" content="The reason 360Airo is known as one of the best email warmup tools for serious outreach. Turn cold domains into trusted senders." />
        <meta property="og:url" content="https://360airo.com/features/email-warmup" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-email-warmup.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Warmup: Get Your Emails Into the Inbox, Not Spam | 360Airo" />
        <meta name="twitter:description" content="The reason 360Airo is known as one of the best email warmup tools for serious outreach." />
        <meta name="twitter:image" content="https://360airo.com/twitter-email-warmup.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6432" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Email Warmup Tool",
              "description": "One of the best email warmup tools for turning cold domains into trusted senders with guaranteed inbox delivery.",
              "url": "https://360airo.com/features/email-warmup",
              "brand": {
                "@type": "Brand",
                "name": "360Airo"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://app.360airo.com/",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] overflow-x-hidden">
        
        {/* Hidden link for SEO */}
        <div className="hidden">
          <a rel="canonical" href="https://360airo.com/features/email-warmup">360Airo Email Warmup Tool - Best Email Warmup Service</a>
        </div>

        <Navbar />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,100,50,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,100,50,0.15) 1px, transparent 1px)
                `,
                backgroundSize: isMobile ? '40px 40px' : '80px 80px',
              }}
            />
            {[...Array(isMobile ? 4 : 8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scale: [0.5, 1, 0.5],
                  x: isMobile ? [0, 20 * (i % 2 === 0 ? 1 : -1), 0] : [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
                  y: isMobile ? [0, 15 * (i % 2 === 0 ? 1 : -1), 0] : [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
                  rotate: [0, 120, 240],
                }}
                transition={{ 
                  duration: isMobile ? 8 + i * 1.2 : 11 + i * 1.6, 
                  repeat: Infinity, 
                  ease: 'easeInOut', 
                  delay: i * 0.5 
                }}
                className={`absolute ${isMobile ? 'w-12 h-12' : 'w-20 h-20'} ${
                  i % 4 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#FF6432]/20 to-[#FF8A65]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#FF8A65]/20 to-[#FFB74D]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#FFB74D]/20 to-[#FFC107]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#FFC107]/15 to-[#FF6432]/15'
                } blur-xl`}
                style={{ 
                  top: `${isMobile ? 10 + i * 15 : 14 + i * 11}%`, 
                  left: `${isMobile ? 5 + i * 15 : 8 + i * 10.5}%` 
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto relative z-10 w-full"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
              {/* CONTENT COLUMN */}
              <div className="space-y-6 lg:space-y-8 order-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  <div className="group relative cursor-pointer">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255,100,50,0.3)',
                          '0 0 40px rgba(255,138,101,0.4)',
                          '0 0 20px rgba(255,100,50,0.3)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#FF6432]/30 via-[#FF8A65]/20 to-[#FFB74D]/30 rounded-full blur-lg"
                    />
                    <span className="relative inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#FF6432]/50 text-white font-semibold text-xs lg:text-sm">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="mr-2 lg:mr-3"
                      >
                        <Flame className="h-3 w-3 lg:h-4 lg:w-4 text-[#FF8A65]" />
                      </motion.div>
                      <span>Best Email Warmup Tool</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-4 lg:space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight lg:leading-[0.95] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="block transform-gpu"
                    >
                      Get Your Emails
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="block transform-gpu"
                    >
                      Into the Inbox,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent transform-gpu text-4xl sm:text-5xl lg:text-6xl"
                    >
                      Not Spam.
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                    className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full relative overflow-hidden max-w-xs lg:max-w-md"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="space-y-4 lg:space-y-5 max-w-xl"
                >
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed font-bold">
                    If your emails are not landing in the inbox, everything else fails.
                  </p>
                  <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                    Your outreach, your sales, your follow ups, your marketing. Nothing works if people never see your message.
                    This is exactly where 360Airo's email warmup tool becomes your advantage.
                  </p>
                  <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                    We help you turn a cold, unknown domain into a trusted sender that inbox providers recognise and allow inside.
                    Thousands of teams rely on this process, and it is the reason 360Airo is known as one of the best email warmup tools for serious outreach.
                  </p>
                </motion.div>

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
                    onClick={handleCTAClick}
                  >
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, #ffffff, #f8f9fa)',
                          'linear-gradient(45deg, #f8f9fa, #ffffff)',
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0"
                    />
                    <Button 
                      size="lg" 
                      className="relative bg-transparent text-[#480056] w-full sm:w-auto px-6 py-4 lg:px-8 lg:py-3 text-sm lg:text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl"
                    >
                      <span>Get Started with Email Warmup</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* TIMELINE COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 40 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative flex items-center justify-center h-full order-2 mt-8 lg:mt-0"
              >
                <div className="relative w-full max-w-sm">
                  {/* Timeline Container */}
                  <div className="relative py-6 lg:py-8">
                    {/* Vertical Progress Line */}
                    <div className="absolute left-4 lg:left-6 top-6 lg:top-8 bottom-6 lg:bottom-8 w-0.5 bg-gray-700/30 rounded-full">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: isMobile ? '55%' : '65%' }}
                        transition={{ delay: 1, duration: 2, ease: 'easeOut' }}
                        className="w-full bg-gradient-to-b from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full"
                      />
                    </div>

                    {/* Timeline Steps */}
                    {[
                      {
                        icon: Clock,
                        title: 'Day 0-5',
                        subtitle: 'Cold Start',
                        description: 'Domain begins with zero reputation',
                        status: 'completed',
                        delay: 0.8
                      },
                      {
                        icon: Send,
                        title: 'Day 6-15',
                        subtitle: 'Gradual Sending',
                        description: '2-5 emails per day with engagement',
                        status: 'completed',
                        delay: 1.0
                      },
                      {
                        icon: TrendingUp,
                        title: 'Day 16-25',
                        subtitle: 'Building Trust',
                        description: 'Increased volume, better reputation',
                        status: 'active',
                        delay: 1.2
                      },
                      {
                        icon: Inbox,
                        title: 'Day 26-30',
                        subtitle: 'Inbox Ready',
                        description: 'High deliverability achieved',
                        status: 'upcoming',
                        delay: 1.4
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: step.delay, duration: 0.4 }}
                        className="relative flex items-start mb-4 lg:mb-6 group"
                      >
                        {/* Timeline Node */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: step.delay + 0.1, duration: 0.4, type: 'spring' }}
                          className={`relative z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg ${
                            step.status === 'completed' 
                              ? 'bg-gradient-to-br from-[#FF6432] to-[#FF8A65]' 
                              : step.status === 'active'
                              ? 'bg-gradient-to-br from-[#FF8A65] to-[#FFB74D] animate-pulse'
                              : 'bg-gradient-to-br from-gray-600 to-gray-700'
                          }`}
                        >
                          <step.icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                          
                          {/* Status Indicator */}
                          {step.status === 'completed' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: step.delay + 0.2 }}
                              className="absolute -top-0.5 -right-0.5 w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="h-1.5 w-1.5 lg:h-2 lg:w-2 text-white" />
                            </motion.div>
                          )}
                          
                          {step.status === 'active' && (
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="absolute -inset-0.5 lg:-inset-1 bg-[#FF8A65]/20 rounded-lg lg:rounded-xl"
                            />
                          )}
                        </motion.div>

                        {/* Step Content */}
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: step.delay + 0.2, duration: 0.4 }}
                          className="ml-3 lg:ml-4 flex-1"
                        >
                          <div className="bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-lg rounded-lg lg:rounded-xl border border-white/10 p-3 shadow-lg group-hover:border-[#FF6432]/30 transition-all duration-300">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="text-xs lg:text-sm font-bold text-white">{step.title}</h3>
                              <span className={`text-xs px-1.5 lg:px-2 py-0.5 rounded-full font-medium ${
                                step.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : step.status === 'active'
                                  ? 'bg-[#FF8A65]/20 text-[#FF8A65]'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}>
                                {step.status === 'completed' ? '✓' : step.status === 'active' ? '●' : '○'}
                              </span>
                            </div>
                            <p className="text-[#FF8A65] font-medium text-xs mb-1">{step.subtitle}</p>
                            <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Current Status Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                      className="relative bg-gradient-to-br from-[#FF6432]/20 via-[#FF8A65]/10 to-transparent backdrop-blur-lg rounded-lg lg:rounded-xl border border-[#FF6432]/20 p-3 lg:p-4 shadow-lg mt-3 lg:mt-4"
                    >
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg bg-gradient-to-br from-[#FF6432] to-[#FF8A65] flex items-center justify-center">
                            <ThermometerSun className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xs lg:text-sm font-bold text-white">Domain Status</h4>
                            <p className="text-xs text-white/60">Current Progress</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-base lg:text-lg font-black text-[#FF6432]">Day 18</div>
                          <div className="text-xs text-white/50">of 30</div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-1 mb-2 lg:mb-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Warmup Progress</span>
                          <span className="text-[#FF8A65] font-medium">60%</span>
                        </div>
                        <div className="w-full h-1 lg:h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60%' }}
                            transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full"
                          />
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-1 lg:gap-2">
                        {[
                          { label: 'Sent', value: '47', icon: Send },
                          { label: 'Opens', value: '44', icon: Eye },
                          { label: 'Score', value: '85', icon: Award }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2 + i * 0.08 }}
                            className="text-center bg-white/5 rounded-md lg:rounded-lg p-1.5 lg:p-2"
                          >
                            <stat.icon className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-[#FF6432] mx-auto mb-0.5 lg:mb-1" />
                            <div className="text-xs lg:text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-white/50">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Floating Heat Indicators */}
                    {[...Array(isMobile ? 2 : 3)].map((_, i) => (
                      <motion.div
                        key={`heat-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 0.4, 0],
                          scale: [0, 1, 0],
                          y: [0, -15, -30],
                          x: [0, Math.sin(i) * 5, Math.sin(i) * 10],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: 'easeOut'
                        }}
                        className="absolute top-12 left-4 lg:left-6 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#FF6432] rounded-full blur-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WHAT IS EMAIL WARMUP */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">Understanding Email Warmup</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                What Email Warmup Actually Does
              </h2>
              <SectionDivider />
              <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  When you start sending emails from a new or inactive domain, inbox providers instantly become cautious.
                  Too many new emails at once can make your domain look risky, which often leads to spam or low deliverability.
                </p>
                <p>
                  Email warmup fixes this by slowly building trust between your domain and inbox providers.
                  With 360Airo, everything is automated so the warmup feels natural, safe, and consistent.
                </p>
                <p className="font-semibold text-[#FF8A65]">
                  Before you begin, connect and authenticate your domain through{' '}
                  <InternalLink href="/features/domains-emails">
                    Domains & Emails
                  </InternalLink>
                  {' '}to create a strong base for your warmup.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.15, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">How 360Airo Builds Your Sender Reputation</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Four Steps to <span className="text-[#FF6432]">Inbox Success</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80">
                This careful build up is one of the reasons 360Airo stands out among the best email warmup tools today.
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {warmupSteps.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 group"
                >
                  <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
                    <div className="relative">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center`}
                        whileHover={{ scale: isMobile ? 1.1 : 1.18, rotate: isMobile ? 8 : 12, boxShadow: '0 0 40px rgba(255,100,50,0.6)' }}
                      >
                        <item.icon className="h-6 w-6 lg:h-10 lg:w-10 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 bg-white text-[#480056] w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm"
                        whileHover={{ scale: isMobile ? 1.15 : 1.25, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </GlowCard>
                  <div className="flex-1 text-center md:text-left">
                    <SectionDivider variant="left" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#FF8A65]">{item.title}</h3>
                    <div className="text-white/80 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">Why Email Warmup Matters for Your Business</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                When warmup is done correctly, <span className="text-[#FF6432]">everything improves</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                Most campaigns fail because emails never reach the inbox. This is the foundation of successful cold outreach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 h-full border border-white/10 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#FF6432]/50 group-hover:scale-105">
                    <div className="relative z-10 text-center">
                      <motion.div
                        className={`bg-gradient-to-r ${benefit.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4`}
                        whileHover={{ scale: isMobile ? 1.05 : 1.1, rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <benefit.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <div className="text-xl lg:text-2xl font-black text-[#FF6432] mb-1 lg:mb-2">{benefit.metric}</div>
                      <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#FF8A65]">{benefit.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#FF6432]/20 via-white/10 to-transparent mb-2 lg:mb-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      />
                      <div className="text-white/80 text-xs lg:text-sm leading-relaxed">
                        {benefit.description}
                      </div>
                    </div>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl lg:rounded-2xl">
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#FF6432]/50">
                    <motion.div
                      className="bg-white/15 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:bg-[#FF6432]/30"
                      whileHover={{ rotate: 360, scale: isMobile ? 1.1 : 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-5 w-5 lg:h-8 lg:w-8 text-[#FF6432] transition-colors group-hover:text-white" />
                    </motion.div>
                    <motion.div
                      className="text-2xl lg:text-3xl md:text-4xl font-black text-white mb-1 lg:mb-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/80 font-semibold text-xs lg:text-sm">{stat.label}</div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BUILT FOR TEAMS */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">Who Benefits the Most</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Built for teams that mean business
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                360Airo's email warmup tool is used by founders, growth teams, agencies, SDRs, marketing departments, and anyone who sends cold emails at scale.
                Our process is simple, safe, and proven to work.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {userTypes.map((type, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#FF6432]/50 h-full group-hover:scale-105">
                    <motion.div
                      className={`bg-gradient-to-r ${type.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                      whileHover={{ 
                        rotate: 360, 
                        scale: isMobile ? 1.1 : 1.2, 
                        boxShadow: '0 0 25px rgba(255,100,50,0.4)' 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <type.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#FF8A65]">{type.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    />
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{type.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Email Warmup <span className="text-[#FF6432]">FAQs</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80">
                Everything you need to know about warming up your email domain for successful outreach.
              </p>
            </motion.div>

            <FAQSection />

            <motion.div
              variants={itemVariants}
              className="text-center mt-12 lg:mt-16"
            >
              <p className="text-white/70 text-sm lg:text-base mb-6 sm:mb-8">
                Still have questions? Contact our deliverability experts for personalized advice.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group"
                  style={{ background: '#FF6432' }}
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute inset-0 bg-white/20 rounded-xl"
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6432]/20 via-[#19001d]/40 to-[#FF8A65]/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-[#FF6432] font-semibold text-xs lg:text-sm tracking-wider uppercase">Start Your Warmup With Confidence</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl md:text-5xl font-bold text-white">
                Don't let spam filters decide your campaign's fate.
              </h2>
              <SectionDivider variant="gradient" />
              <div className="space-y-4 text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
                <p>
                  Your team puts effort, time, and money into every campaign.
                </p>
                <p>
                  <span className="font-bold text-[#FF8A65]">360Airo helps you reach the inbox, build a trusted sender reputation, and protect your domain for long term success.</span>
                </p>
                <p>
                  Everything is automated and designed to give you reliable deliverability from day one.
                  That is why businesses choose us when they want guaranteed improvements in deliverability.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
                <motion.div 
                  whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="group relative overflow-hidden rounded-xl w-full sm:w-auto"
                  onClick={handleCTAClick}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    className="relative bg-white text-[#480056] hover:bg-transparent w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-6 text-sm lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20"
                  >
                    Get Started with Email Warmup
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
              <p className="text-white/70 text-xs lg:text-sm">🔥 Transform cold domains into trusted senders</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
