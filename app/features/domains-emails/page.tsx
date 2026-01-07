'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Shield, 
  CheckCircle2, 
  Globe, 
  Mail, 
  Eye,
  AlertTriangle,
  BarChart3,
  Settings,
  Users,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Server,
  Database,
  Zap,
  Award,
  Layers,
  FileCheck,
  Wifi,
  ChevronDown,
  ChevronUp
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
          background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(99,102,241,0.2) 25%, transparent 55%)',
          borderRadius: '50%',
          opacity: isHovered && !isMobile ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* FAQ Item Component */
const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => {
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
    <GlowCard className="rounded-xl lg:rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden group cursor-pointer"
        onClick={onClick}
      >
        <div className={`transition-all duration-300 ${isOpen ? 'bg-white/10' : 'hover:bg-white/8'}`}>
          <div className="p-5 lg:p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white pr-8 leading-relaxed">
                {question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#6366F1] flex items-center justify-center">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  ) : (
                    <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                  )}
                </div>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
                  <p className="text-white/80 text-base leading-relaxed">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Animated border effect */}
        <div className={`absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none transition-all duration-300 ${
          isOpen 
            ? 'border-2 border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
            : 'border border-white/10 group-hover:border-[#3B82F6]/30'
        }`} />
      </motion.div>
    </GlowCard>
  );
};

/* FAQ Data */
const faqData = [
  {
    question: "What are email domains, and why are they important for cold email outreach?",
    answer: "Email domains represent your sender identity and directly impact deliverability. A healthy domain builds trust with email providers, increasing inbox placement. For cold outreach, using properly configured and warmed domains is essential to avoid spam filters and protect long term sending reputation.",
    id: "email-domains-importance"
  },
  {
    question: "How can domain authentication help emails land in the inbox instead of spam?",
    answer: "Domain authentication using SPF, DKIM, and DMARC verifies that your emails are legitimate. This reduces spoofing risks and increases trust with inbox providers. Authenticated domains are more likely to land in the inbox rather than spam folders.",
    id: "domain-authentication"
  },
  {
    question: "Why is email authentication important?",
    answer: "Email authentication protects your domain from misuse and improves deliverability. It signals to email providers that your messages are genuine, reducing spam flags and improving inbox placement. Authentication is a foundational step for any successful cold email strategy.",
    id: "email-authentication-importance"
  },
  {
    question: "What is domain warmup, and why does it matter for deliverability?",
    answer: "Domain warmup gradually builds sending reputation by increasing email volume over time. This helps email providers trust your domain and prevents sudden spikes that trigger spam filters. Proper warmup is critical for maintaining consistent inbox placement.",
    id: "domain-warmup"
  },
  {
    question: "How does 360Airo help protect domain reputation over time?",
    answer: "360Airo monitors sending behavior, enforces safe limits, and includes automated warmup tools. These features ensure consistent engagement and prevent risky activity, helping maintain strong domain reputation even as outreach volume scales.",
    id: "protect-domain-reputation"
  },
  {
    question: "How does email warmup work when adding a new domain or email account?",
    answer: "When a new domain or email account is added, email warmup gradually increases sending volume while generating real engagement through replies and opens. This signals positive behavior to inbox providers. 360Airo automates this entire process, ensuring the domain builds trust safely over time and is fully prepared for outbound campaigns without risking spam placement or account blocks.",
    id: "email-warmup-process"
  },
  {
    question: "How can I check the health and reputation of my email domains?",
    answer: "Email domain health can be evaluated by monitoring bounce rates, spam complaints, open rates, and blacklist status. 360Airo provides built in monitoring tools that track these signals continuously. This allows businesses to identify potential issues early, take corrective action, and maintain strong sender reputation for long term email outreach success.",
    id: "check-domain-health"
  },
  {
    question: "Can multiple domains and sender accounts be managed from one dashboard?",
    answer: "Yes, 360Airo allows you to manage multiple domains and sender accounts from a single dashboard. This is especially useful for teams running large scale outreach or agencies managing multiple clients. Centralized control ensures consistent warmup, monitoring, and campaign management while protecting deliverability across all connected accounts.",
    id: "multi-domain-management"
  },
  {
    question: "Can I safely add new domains and email accounts without hurting deliverability?",
    answer: "360Airo makes it safe to add new domains and accounts by automatically applying warmup, authentication checks, and sending limits. This structured approach prevents sudden spikes in activity that trigger spam filters and ensures new senders build reputation gradually without affecting existing outreach performance.",
    id: "safe-domain-addition"
  },
  {
    question: "What is a good bounce rate for cold email campaigns?",
    answer: "A healthy bounce rate for cold email campaigns is typically below two percent. Higher bounce rates can signal poor list quality or domain issues and may harm deliverability. 360Airo helps reduce bounce rates by validating lists, monitoring performance, and alerting users to potential risks early.",
    id: "bounce-rate-standards"
  }
];

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

const domainFeatures = [
  {
    icon: Shield,
    title: 'Domain Authentication',
    description: 'Guided configuration for SPF, DKIM, and DMARC — ensuring every email is properly authenticated and aligned with email provider standards.',
    color: 'from-[#3B82F6] to-[#1D4ED8]',
    metric: '99.9%',
    label: 'Authentication Rate',
  },
  {
    icon: CheckCircle2,
    title: 'Email Verification',
    description: 'Automatically validates outgoing email addresses and keeps contact lists clean — so cold outreach reaches real people, not inactive inboxes.',
    color: 'from-[#1D4ED8] to-[#6366F1]',
    metric: '<2%',
    label: 'Bounce Rate',
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Monitor all domains and sender accounts in one place. Track sender scores, domain health, and performance insights with smart alerts.',
    color: 'from-[#6366F1] to-[#8B5CF6]',
    metric: '24/7',
    label: 'Real-time Monitoring',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Each new domain goes through controlled warmup, protecting sender reputation and ensuring safe volume growth with automation and control.',
    color: 'from-[#8B5CF6] to-[#3B82F6]',
    metric: 'Unlimited',
    label: 'Domain Capacity',
  },
];

const setupSteps = [
  {
    step: '01',
    title: 'Domain Configuration',
    description: 'Set up your sending domain with guided SPF, DKIM, and DMARC configuration. Our system walks you through each authentication protocol.',
    icon: Settings,
    color: 'from-[#3B82F6] to-[#1D4ED8]',
  },
  {
    step: '02',
    title: 'Email Validation',
    description: 'Verify and validate all sender identities and email addresses. Clean contact lists and remove inactive or invalid addresses automatically.',
    icon: Mail,
    color: 'from-[#1D4ED8] to-[#6366F1]',
  },
  {
    step: '03',
    title: 'Health Monitoring',
    description: 'Continuous monitoring of domain health, sender scores, and deliverability metrics with intelligent alerts for reputation management.',
    icon: Activity,
    color: 'from-[#6366F1] to-[#8B5CF6]',
  },
  {
    step: '04',
    title: 'Scale Safely',
    description: 'Add new domains and email accounts with controlled warmup phases. Balance automation with manual control for optimal growth.',
    icon: Layers,
    color: 'from-[#8B5CF6] to-[#3B82F6]',
  },
];

const benefits = [
  {
    icon: Lock,
    title: 'Trusted Authentication',
    description: 'Every email properly authenticated with SPF, DKIM, and DMARC protocols',
    color: 'from-[#3B82F6] to-[#1D4ED8]',
  },
  {
    icon: Target,
    title: 'Real Connections',
    description: 'Verified email addresses ensure messages reach active, engaged recipients',
    color: 'from-[#1D4ED8] to-[#6366F1]',
  },
  {
    icon: Eye,
    title: 'Complete Visibility',
    description: 'Monitor all domains and accounts from a single, comprehensive dashboard',
    color: 'from-[#6366F1] to-[#8B5CF6]',
  },
  {
    icon: Zap,
    title: 'Safe Scaling',
    description: 'Grow outreach volume without compromising deliverability or reputation',
    color: 'from-[#8B5CF6] to-[#3B82F6]',
  },
];

const stats = [
  { value: '99.9%', label: 'Authentication Success', icon: Shield },
  { value: '<2%', label: 'Average Bounce Rate', icon: Mail },
  { value: '24/7', label: 'Reputation Monitoring', icon: Activity },
  { value: '∞', label: 'Domain Scalability', icon: Globe },
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
        className="h-0.5 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-transparent mb-4"
        style={{ maxWidth: '80px' }}
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
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#3B82F6]/40 flex-1 max-w-12" />
      <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1]" />
      <div className="h-px bg-gradient-to-r from-[#3B82F6]/40 via-white/20 to-transparent flex-1 max-w-12" />
    </motion.div>
  );
};

/* Internal Link Component */
const InternalLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <Link 
      href={href}
      className={`text-[#6366F1] font-semibold hover:text-white transition-colors duration-300 underline underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default function DomainsEmailsPage() {
  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleFaqClick = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Domains & Emails | 360Airo - Build Trust Before You Hit Send</title>
        <meta name="description" content="Establish, authenticate, and scale your email domains without deliverability worries. 360Airo's Domains & Emails feature ensures verified, secure, and reputation-safe infrastructure." />
        <meta name="keywords" content="domain authentication, email setup, SPF DKIM DMARC, email deliverability, domain management, sender reputation" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/domains-emails" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Domains & Emails | 360Airo - Build Trust Before You Hit Send" />
        <meta property="og:description" content="Establish, authenticate, and scale without deliverability worries. 360Airo's Domains & Emails feature ensures verified, secure, and reputation-safe infrastructure." />
        <meta property="og:url" content="https://360airo.com/features/domains-emails" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-domains-emails.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domains & Emails | 360Airo" />
        <meta name="twitter:description" content="Build trust before you hit send. Verified domains and emails for reliable outreach." />
        <meta name="twitter:image" content="https://360airo.com/twitter-domains-emails.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Domains & Emails",
              "description": "Establish, authenticate, and scale your email domains without deliverability worries.",
              "url": "https://360airo.com/features/domains-emails",
              "brand": {
                "@type": "Brand",
                "name": "360Airo"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://app.360airo.com/",
                "priceCurrency": "USD",
                "availability": "https://schema.org/OnlineOnly"
              }
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/domains-emails">360Airo Domains & Emails - Domain Authentication & Management</a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* HERO SECTION - Mobile Optimized with Content First */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                backgroundSize: '60px 60px',
              }}
            />
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scale: [0.5, 1, 0.5],
                  x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
                  rotate: [0, 90, 180],
                }}
                transition={{ 
                  duration: 8 + i * 1.2, 
                  repeat: Infinity, 
                  ease: 'easeInOut', 
                  delay: i * 0.5 
                }}
                className={`absolute w-16 h-16 ${
                  i % 4 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#1D4ED8]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#8B5CF6]/20 to-[#3B82F6]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#1D4ED8]/15 to-[#6366F1]/15'
                } blur-lg`}
                style={{ 
                  top: `${10 + i * 15}%`, 
                  left: `${5 + i * 12}%` 
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
            {/* MOBILE: Content first, then animations */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
              
              {/* CONTENT COLUMN - Always first on mobile */}
              <div className="space-y-6 lg:space-y-8 order-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  <div className="group">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(59,130,246,0.3)',
                          '0 0 40px rgba(99,102,241,0.4)',
                          '0 0 20px rgba(59,130,246,0.3)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/30 via-[#6366F1]/20 to-[#8B5CF6]/30 rounded-full blur-lg"
                    />
                    <span className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#3B82F6]/50 text-white font-semibold text-xs sm:text-sm">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="mr-2"
                      >
                        <Server className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6366F1]" />
                      </motion.div>
                      <span>Domain & Email Management</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-4 lg:space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 80 }}
                    className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="block transform-gpu"
                    >
                      Domains &
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="block transform-gpu"
                    >
                      Emails —
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.7, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-white bg-clip-text text-transparent transform-gpu text-2xl sm:text-3xl lg:text-6xl"
                    >
                      Build Trust
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="block text-white transform-gpu text-xl sm:text-2xl lg:text-4xl"
                    >
                      Before You Hit Send
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                    className="h-1 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full relative overflow-hidden max-w-xs"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="space-y-4 max-w-xl"
                >
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                    Establish, Authenticate, and Scale Without{' '}
                    <motion.span
                      animate={{ color: ['#3B82F6', '#6366F1', '#ffffff', '#3B82F6'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-semibold"
                    >
                      Deliverability Worries
                    </motion.span>
                  </p>
                  <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                    Every great outreach campaign starts with a trusted foundation — your domain and email setup.
                    360Airo's Domains & Emails feature ensures your communication is backed by verified, secure, and reputation-safe infrastructure.
                    From authentication to monitoring, it's designed to help your messages reach inboxes confidently and consistently.
                    It also integrates smoothly with your{' '}
                    <InternalLink href="/features/unified-inbox">
                      Unified Inbox
                    </InternalLink>
                    {' '}for better communication management.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="group relative overflow-hidden rounded-xl"
                    onClick={redirectToApp}
                  >
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, #ffffff, #f8f9fa)',
                          'linear-gradient(45deg, #f8f9fa, #ffffff)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0"
                    />
                    <Button size="lg" className="relative bg-transparent text-[#480056] px-6 py-4 text-sm font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-xl w-full sm:w-auto">
                      <span>Get Started with Domains & Emails</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* ANIMATIONS COLUMN - Comes after content on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative flex items-center justify-center h-full order-2 lg:order-2 mt-8 lg:mt-0"
              >
                <div className="relative w-full max-w-sm lg:max-w-lg">
                  {/* Main Dashboard Card */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                    className="relative z-10"
                  >
                    <GlowCard className="cursor-pointer rounded-2xl lg:rounded-3xl">
                      <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 p-6 lg:p-8 shadow-xl lg:shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 lg:mb-8">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center"
                            >
                              <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-lg lg:text-xl font-bold text-white">Domain Health</h3>
                              <p className="text-xs lg:text-sm text-white/60">main.360airo.com</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center space-x-1.5 bg-green-500/20 px-2.5 py-1.5 rounded-lg border border-green-500/30"
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span className="text-xs lg:text-sm font-medium text-green-300">Active</span>
                          </motion.div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                          {[
                            { label: 'Auth Rate', value: '99.9%', icon: Shield, color: '#3B82F6' },
                            { label: 'Bounce Rate', value: '<2%', icon: Mail, color: '#6366F1' },
                            { label: 'Domains', value: '5', icon: Globe, color: '#8B5CF6' },
                            { label: 'Score', value: '98', icon: Award, color: '#1D4ED8' }
                          ].map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + i * 0.08 }}
                              className="bg-white/5 rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/10"
                            >
                              <div className="flex items-center justify-between mb-1.5 lg:mb-2">
                                <stat.icon className="h-4 w-4 lg:h-5 lg:w-5" style={{ color: stat.color }} />
                                <span className="text-lg lg:text-2xl font-bold text-white">{stat.value}</span>
                              </div>
                              <p className="text-xs lg:text-sm text-white/70">{stat.label}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Authentication Status */}
                        <div className="space-y-2 lg:space-y-3">
                          <h4 className="text-xs lg:text-sm font-semibold text-white/80 mb-3 lg:mb-4">Authentication Protocols</h4>
                          {['SPF', 'DKIM', 'DMARC'].map((protocol, i) => (
                            <motion.div
                              key={protocol}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.3 + i * 0.1 }}
                              className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-lg lg:rounded-xl px-3 lg:px-4 py-2 lg:py-3"
                            >
                              <span className="text-xs lg:text-sm font-medium text-white/90">{protocol}</span>
                              <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              >
                                <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-green-400" />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>

                  {/* Floating Feature Cards - Hidden on mobile, shown on desktop */}
                  {[
                    {
                      icon: Mail,
                      title: 'Email Verification',
                      metric: '12 verified',
                      position: 'hidden lg:absolute lg:-top-4 lg:-right-4 z-20',
                      delay: 1.6,
                      color: 'from-[#1D4ED8] to-[#6366F1]'
                    },
                    {
                      icon: Activity,
                      title: 'Live Monitoring',
                      metric: '24/7 active',
                      position: 'hidden lg:absolute lg:-bottom-4 lg:-left-4 z-20',
                      delay: 1.8,
                      color: 'from-[#6366F1] to-[#8B5CF6]'
                    },
                    {
                      icon: Database,
                      title: 'DNS Records',
                      metric: 'All configured',
                      position: 'hidden lg:absolute lg:top-1/2 lg:-right-8 transform lg:-translate-y-1/2 z-20',
                      delay: 2,
                      color: 'from-[#8B5CF6] to-[#3B82F6]'
                    }
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ delay: card.delay, duration: 0.5, type: 'spring' }}
                      className={card.position}
                      whileHover={{ scale: 1.03, rotate: 2, zIndex: 30 }}
                    >
                      <div className="bg-gradient-to-br from-white/15 via-white/10 to-transparent backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/20 p-3 lg:p-4 shadow-xl min-w-[120px] lg:min-w-[140px]">
                        <div className="flex items-center space-x-2 lg:space-x-3 mb-1.5 lg:mb-2">
                          <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-lg lg:rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                            <card.icon className="h-3 w-3 lg:h-4 lg:w-4 text-white" />
                          </div>
                        </div>
                        <p className="text-xs lg:text-sm font-semibold text-white mb-1">{card.title}</p>
                        <p className="text-xs text-white/70">{card.metric}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Subtle Background Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="absolute inset-0 -z-10"
                  >
                    <div className="w-full h-full rounded-2xl lg:rounded-3xl border-2 border-dashed border-[#3B82F6]/20" />
                  </motion.div>

                  {/* Floating Particles - Reduced on mobile */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 60 - 30],
                        y: [0, Math.random() * 60 - 30],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: 'easeInOut'
                      }}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] rounded-full blur-sm"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* DOMAIN SETUP SECTION - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Set Up Domains That Deliver</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Your sending domain represents your brand's credibility.
              </h2>
              <SectionDivider />
              <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  360Airo simplifies the technical setup with guided configuration for SPF, DKIM, and DMARC — ensuring that every email you send is properly authenticated and aligned with email provider standards.
                </p>
                <p>
                  By maintaining domain health and sender consistency, you <span className="text-[#3B82F6] font-semibold">strengthen your email deliverability</span> and reduce spam risk across all campaigns.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* HOW IT WORKS - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">From Setup to Scalability</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Four Steps to <span className="text-[#3B82F6]">Trusted Domains</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
                Our comprehensive system handles authentication, verification, monitoring, and scaling automatically.
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              {setupSteps.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="flex flex-col items-center text-center gap-6 lg:gap-8 group"
                >
                  <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
                    <div className="relative">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 8, boxShadow: '0 0 30px rgba(59,130,246,0.6)' }}
                      >
                        <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-1.5 -right-1.5 bg-white text-[#480056] w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </GlowCard>
                  <div className="flex-1">
                    <SectionDivider variant="left" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 transition-colors group-hover:text-[#6366F1]">{item.title}</h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* VERIFIED EMAILS SECTION - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Verified Emails, Real Connections</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Avoid bounces and boost response rates with verified sender identities.
              </h2>
              <SectionDivider />
              <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  Our system automatically validates outgoing email addresses and keeps your contact lists clean — so your cold outreach emails reach real people, not inactive inboxes.
                </p>
                <p>
                  This consistent verification helps <span className="text-[#3B82F6] font-semibold">preserve your domain reputation</span> and ensures steady inbox placement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FEATURES GRID - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Complete Domain Management</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Monitor Performance Across <span className="text-[#3B82F6]">Multiple Domains</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                Whether you manage one brand or several, 360Airo's dashboard lets you monitor all your domains and sender accounts in one place.
                You can track sender scores, domain health, and performance insights — empowering you to make informed decisions that keep your campaigns compliant and optimized.
                Smart alerts notify you of potential reputation drops, giving you time to act before it impacts deliverability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {domainFeatures.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 h-full border border-white/10 rounded-xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50 group-hover:scale-102">
                    <div className="relative z-10 text-center">
                      <motion.div
                        className={`bg-gradient-to-r ${feature.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4`}
                        whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <feature.icon className="h-5 w-5 lg:h-7 lg:w-7 text-white" />
                      </motion.div>
                      <div className="text-xl lg:text-2xl font-black text-[#3B82F6] mb-1 lg:mb-2">{feature.metric}</div>
                      <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#6366F1] leading-tight">{feature.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#3B82F6]/20 via-white/10 to-transparent mb-2 lg:mb-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      />
                      <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{feature.description}</p>
                      <div className="text-xs text-[#3B82F6] font-semibold mt-1 lg:mt-2">{feature.label}</div>
                    </div>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Grow With Confidence</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Scaling outreach often means adding new domains and email accounts.
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                360Airo makes that expansion effortless. Each new domain goes through a controlled{' '}
                <InternalLink href="/features/email-warmup">
                  Email Warmup
                </InternalLink>
                {' '}phase, protecting your sender reputation and ensuring safe volume growth.
                It's a balance of automation and control — helping you build domain trust, maintain consistency, and grow outreach without compromising deliverability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50 h-full group-hover:scale-102">
                    <motion.div
                      className={`bg-gradient-to-r ${benefit.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1, boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="h-5 w-5 lg:h-7 lg:w-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#6366F1] leading-tight">{benefit.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    />
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION - Mobile Optimized */}
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
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50">
                    <motion.div
                      className="bg-white/15 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:bg-[#3B82F6]/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-[#3B82F6] transition-colors group-hover:text-white" />
                    </motion.div>
                    <motion.div
                      className="text-2xl lg:text-4xl font-black text-white mb-1 lg:mb-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-20px' }}
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

        {/* FAQ SECTION - Mobile Optimized - POSITIONED BEFORE FINAL CTA */}
        <section id="faq" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2 lg:mb-3">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">COMMON QUESTIONS</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                Domain & Email Management FAQs
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about setting up, authenticating, and managing your email domains for successful outreach.
              </p>
            </motion.div>

            <div className="space-y-4 lg:space-y-6">
              {faqData.map((faq, index) => (
                <div key={faq.id} id={faq.id}>
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === faq.id}
                    onClick={() => handleFaqClick(faq.id)}
                  />
                </div>
              ))}
            </div>

            {/* Additional FAQ Resources */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-white/60 text-sm lg:text-base mb-6">
                Still have questions about domain management? We're here to help.
              </p>
              <motion.div 
                whileHover={{ scale: 1.04, y: -2 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline-block"
                onClick={redirectToApp}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/30 transition-all duration-300"
                >
                  Contact Support
                  <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div> */}
          </motion.div>
        </section>

        {/* FINAL CTA - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#19001d]/40 to-[#6366F1]/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-[#3B82F6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Your Foundation for Reliable Outreach</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                From setup to scalability, 360Airo's Domains & Emails feature does more than manage your technical framework — it builds long-term reliability.
              </h2>
              <SectionDivider variant="gradient" />
              <div className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
                <p>
                  With proper authentication, validation, and monitoring, you send with confidence knowing your domain stands on solid ground.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="group relative overflow-hidden rounded-xl"
                  onClick={redirectToApp}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-sm lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full sm:w-auto">
                    Get Started with Domains & Emails
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4 lg:mt-6 mb-1 lg:mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.7 }}
                style={{ maxWidth: '100px' }}
              />
              <p className="text-white/70 text-xs lg:text-sm">🔒 Build trust with verified, authenticated domains</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
