'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';
import Link from 'next/link';

import {
  MessageSquare,
  Users,
  Inbox,
  Mail,
  Link2,
  MessageCircle,
  Zap,
  Brain,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  Target,
  FolderSync,
  Lightbulb,
  UserCheck,
  Bot,
  Network,
  Layers,
  MailOpen,
  Eye,
  PhoneCall,
  GitMerge,
  Workflow,
  MessageCircleReply
} from 'lucide-react';

/* Internal Link Component */
const InternalLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <Link 
      href={href}
      className={`text-[#b45ecf] font-semibold hover:text-white transition-colors duration-300 underline underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

/* FAQ Toggle Item Component - Updated to match your UI */
const FAQToggleItem = ({ faq, index, isMobile }: { faq: any, index: number, isMobile: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05 }}
      className="cursor-pointer rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#b45ecf]/50 transition-all duration-300"
      whileHover={{ scale: isMobile ? 1.02 : 1.03 }}
    >
      <button
        className="w-full text-left p-4 lg:p-6 flex items-center justify-between group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 lg:gap-4 flex-1">
          <motion.div
            className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-r from-[#b45ecf] to-[#3B82F6] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-white font-bold text-xs lg:text-sm">
              Q
            </div>
          </motion.div>
          <div className="flex-1">
            <h3 className={`text-white font-bold mb-2 transition-colors group-hover:text-[#b45ecf] ${isMobile ? 'text-base' : 'text-lg'}`}>
              {faq.question}
            </h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-[#b45ecf] ml-3"
        >
          <svg 
            className="w-5 h-5 lg:w-6 lg:h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-0">
          <motion.div
            className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-3 lg:mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
          />
          <p className={`text-white/80 leading-relaxed pl-9 lg:pl-12 ${isMobile ? 'text-sm' : 'text-base'}`}>
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* FAQ Section Component - Updated to match your UI */
const FAQSection = () => {
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
      question: "What is a unified inbox, and how does it work for teams?",
      answer: "A unified inbox brings all incoming messages from email and LinkedIn into one shared workspace. Teams can view, manage, and respond to conversations centrally, ensuring visibility, faster responses, and better coordination."
    },
    {
      question: "How do you set up and use a unified inbox?",
      answer: "Setting up a unified inbox involves connecting email accounts and outreach channels to one platform. Once connected, all messages sync automatically, allowing teams to manage conversations, assign ownership, and track replies from one dashboard."
    },
    {
      question: "Who should use a unified inbox?",
      answer: "A unified inbox is ideal for sales teams, agencies, and growing SaaS teams that manage high outreach volume and need shared visibility, faster response times, and reduced confusion across multiple accounts or team members."
    },
    {
      question: "Can teams collaborate in a unified inbox without overlapping replies?",
      answer: "Yes. A unified inbox provides conversation ownership, assignment, and visibility features so team members know who is responding, preventing duplicate replies and ensuring smooth handoffs across sales and outreach teams."
    },
    {
      question: "How are incoming messages prioritized and categorized automatically?",
      answer: "Messages are categorized based on engagement, reply status, and campaign context. This helps teams identify high-priority conversations quickly and focus on active prospects instead of manually sorting inboxes."
    },
    {
      question: "Can I access a unified inbox across multiple devices?",
      answer: "Yes. A unified inbox is accessible across devices, allowing users to view and respond to conversations from desktops or laptops without losing context or conversation history."
    },
    {
      question: "How many email accounts can be connected to a unified inbox?",
      answer: "Multiple email accounts can be connected to a unified inbox, making it suitable for teams, agencies, and multi-domain setups that need centralized access to conversations across different senders."
    },
    {
      question: "Does a unified inbox sync lead activity with a CRM?",
      answer: "Yes. A unified inbox syncs conversation history and engagement activity with the CRM, ensuring lead records remain updated and providing full context for follow-ups and pipeline tracking."
    },
    {
      question: "Why choose 360Airo's unified inbox over traditional shared inboxes?",
      answer: "360Airo's unified inbox combines outreach context, automation, and analytics, unlike traditional shared inboxes that only manage messages. This provides better visibility, smarter prioritization, and tighter integration with campaigns and CRM workflows."
    }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="text-center mb-12 lg:mb-16">
        <div className="inline-block mb-2">
          <span className="text-[#b45ecf] font-semibold text-xs lg:text-sm tracking-wider uppercase">Common Questions</span>
        </div>
        <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white mb-3 lg:mb-4`}>
          Unified Inbox <span className="text-[#b45ecf]">FAQs</span>
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#b45ecf]/40 flex-1 max-w-8" />
          <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#3B82F6]" />
          <div className="h-px bg-gradient-to-r from-[#b45ecf]/40 via-white/20 to-transparent flex-1 max-w-8" />
        </div>
        <p className={`text-white/80 ${isMobile ? 'text-sm' : 'text-lg'}`}>
          Everything you need to know about managing team conversations in one unified workspace.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQToggleItem key={index} faq={faq} index={index} isMobile={isMobile} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="text-center mt-12 lg:mt-16"
      >
        <p className={`text-white/70 ${isMobile ? 'text-sm' : 'text-base'}`}>
          Still have questions? <InternalLink href="/contact">Contact our team collaboration experts</InternalLink> for personalized advice.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Circular Connection Animation - Mobile optimized
const CircularConnections = () => {
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
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Outer Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r={isMobile ? 120 : 150}
          stroke="url(#outerGradient)"
          strokeWidth={isMobile ? 1.5 : 2}
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: isMobile ? 6 : 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r={isMobile ? 80 : 100}
          stroke="url(#middleGradient)"
          strokeWidth={isMobile ? 1 : 1.5}
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: -360 }}
          transition={{ duration: isMobile ? 4 : 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r={isMobile ? 40 : 50}
          stroke="url(#innerGradient)"
          strokeWidth={isMobile ? 0.8 : 1}
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: isMobile ? 3 : 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Connection Lines - Reduced on mobile */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.line
            key={angle}
            x1="200"
            y1="200"
            x2={200 + (isMobile ? 120 : 150) * Math.cos((angle * Math.PI) / 180)}
            y2={200 + (isMobile ? 120 : 150) * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: isMobile ? 1.5 : 2, 
              delay: index * (isMobile ? 0.15 : 0.2), 
              repeat: Infinity 
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="middleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Floating Platform Icons - Mobile optimized
const FloatingPlatforms = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const platforms = [
    { icon: Mail, name: "Email", delay: 0 },
    { icon: Link2, name: "LinkedIn", delay: isMobile ? 0.3 : 0.5 },
    { icon: MessageCircle, name: "Campaigns", delay: isMobile ? 0.6 : 1 },
    { icon: MessageSquare, name: "Team Chat", delay: isMobile ? 0.9 : 1.5 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          className="absolute"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            x: [
              Math.cos(index * 90) * (isMobile ? 60 : 100),
              Math.cos(index * 90 + 45) * (isMobile ? 90 : 150),
              Math.cos(index * 90 + 90) * (isMobile ? 60 : 100)
            ],
            y: [
              Math.sin(index * 90) * (isMobile ? 60 : 100),
              Math.sin(index * 90 + 45) * (isMobile ? 90 : 150),
              Math.sin(index * 90 + 90) * (isMobile ? 60 : 100)
            ]
          }}
          transition={{
            duration: isMobile ? 4 : 6,
            delay: platform.delay,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -20,
            marginTop: -20
          }}
        >
          <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center`}>
            <platform.icon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-blue-400`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Radial Feature Display - Mobile optimized
const RadialFeature = ({ icon: Icon, title, description, angle, delay }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = isMobile ? 120 : 200;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute"
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      whileInView={{ scale: 1, opacity: 1, x, y }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: isMobile ? 0.6 : 0.8, delay, type: "spring" }}
      style={{
        left: '50%',
        top: '50%',
        marginLeft: isMobile ? -60 : -80,
        marginTop: isMobile ? -60 : -80
      }}
    >
      <div className={`${isMobile ? 'w-32' : 'w-40'} text-center`}>
        <motion.div
          whileHover={{ scale: isMobile ? 1.05 : 1.1, rotate: 360 }}
          className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl ${isMobile ? 'rounded-lg' : 'rounded-2xl'} flex items-center justify-center mx-auto mb-3`}
        >
          <Icon className={`${isMobile ? 'h-5 w-5' : 'h-8 w-8'} text-white`} />
        </motion.div>
        <h3 className={`text-white font-bold mb-2 ${isMobile ? 'text-sm' : ''}`}>{title}</h3>
        <p className="text-white/70 text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Conversation Timeline - Mobile optimized
const ConversationTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const messages = [
    {
      time: "2 hours ago",
      platform: "Email",
      message: "Interested in your enterprise plan",
      icon: MailOpen,
      status: "new"
    },
    {
      time: "4 hours ago", 
      platform: "LinkedIn",
      message: "Connected and messaged",
      icon: Link2,
      status: "replied"
    },
    {
      time: "1 day ago",
      platform: "Campaign",
      message: "Requested pricing details",
      icon: MessageCircle,
      status: "pending"
    }
  ];

  return (
    <div className="relative">
      <div className={`absolute ${isMobile ? 'left-4' : 'left-6'} top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500`} />
      
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isMobile ? -30 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * (isMobile ? 0.15 : 0.2) }}
          className={`relative flex items-start ${isMobile ? 'space-x-3' : 'space-x-4'} mb-6 last:mb-0`}
        >
          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
              className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-white/10 rounded-lg ${isMobile ? 'rounded-lg' : 'rounded-xl'} border border-white/20 flex items-center justify-center`}
            >
              <msg.icon className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-blue-400`} />
            </motion.div>
          </div>
          
          <div className="flex-1 pt-0.5">
            <div className="flex items-center justify-between mb-1">
              <span className={`text-white font-semibold ${isMobile ? 'text-sm' : ''}`}>{msg.platform}</span>
              <span className="text-white/40 text-xs">{msg.time}</span>
            </div>
            <p className={`text-white/70 mb-2 ${isMobile ? 'text-sm' : ''}`}>{msg.message}</p>
            <span className={`inline-block px-2 py-1 rounded text-xs ${
              msg.status === 'new' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
              msg.status === 'replied' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
              'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            }`}>
              {msg.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Button click handler
const handleCTAClick = () => {
  window.open('https://app.360airo.com/', '_blank');
};

// Main Component - Mobile optimized
export default function UnifiedInboxRadialPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const coreFeatures = [
    {
      icon: FolderSync,
      title: "All Accounts Synced",
      description: "Connect all domains and emails into one shared inbox",
      angle: 0
    },
    {
      icon: Brain,
      title: "AI Assistance", 
      description: "Smart replies and priority detection",
      angle: 90
    },
    {
      icon: UserCheck,
      title: "Team Collaboration",
      description: "Clear ownership and no overlap",
      angle: 180
    },
    {
      icon: Workflow,
      title: "Unified View",
      description: "Every conversation in one workspace",
      angle: 270
    }
  ];

  const featureSections = [
    {
      title: "Unified Inbox — Every Conversation, One View",
      description: "Collaborate effortlessly across all your outreach channels. Managing multiple inboxes shouldn't feel like juggling fire. With 360Airo's unified inbox, every message from your email sequences, LinkedIn outreach, and campaign replies appears in one clean, centralized workspace. Your entire team can view, respond, and manage conversations in real time — without overlapping replies, missed messages, or confusion. <InternalLink href='/features/team-collaboration'>Team Collaboration</InternalLink> becomes seamless and organized.",
      features: [],
      note: ""
    },
    {
      title: "All Your Accounts, Perfectly Synced",
      description: "Say goodbye to switching tabs or logging into multiple platforms. 360Airo connects all your domains and emails into a single, synchronized inbox that updates every thread instantly. Whether you're handling multiple campaigns or coordinating across a distributed team, everyone stays aligned — literally. Your outreach becomes smoother, faster, and far more coordinated.",
      features: [
        "Manage multiple sender accounts in one dashboard",
        "Assign conversations to the right team members",
        "Track complete message history and response timelines",
        "Maintain full visibility over all prospect interactions through <InternalLink href='/features/prospect-crm'>Prospect CRM</InternalLink>",
        "Connect Gmail, Outlook & SMTP for a multi-channel inbox"
      ],
      note: ""
    },
    {
      title: "Smarter Collaboration with Intelligent Assistance",
      description: "Respond faster and stay organized with enhanced inbox management. 360Airo supports intelligent sorting and prioritization to help your team handle conversations efficiently while keeping communication personal and consistent.",
      features: [
        "Suggested replies for quicker, more accurate follow-ups",
        "Automatic categorization and prioritization of messages",
        "Clear visibility into client communication across the entire team",
        "Manage all team communication using our Team Collaboration tools"
      ],
      note: "The result? You save hours each week while delivering a unified, professional experience to every prospect."
    },
    {
      title: "Transparency Without Overlap",
      description: "No more duplicate replies. No missed handoffs. Every conversation has clear ownership, ensuring that team members always know who is handling which thread. This shared structure is designed for sales, marketing, and success teams that need clarity, not chaos.",
      features: [
        "Organized collaborative inbox workflows",
        "Full transparency for every message and sender",
        "Streamlined communication across shared email channels"
      ],
      note: ""
    }
  ];

  const benefits = [
    "One inbox for all campaigns, accounts, and platforms",
    "Real-time updates that make team collaboration effortless",
    "Smart response suggestions and message prioritization",
    "Complete message history with clear ownership",
    "Faster response times and higher customer satisfaction"
  ];

  return (
    <>
      <Head>
        <title>Unified Shared Inbox for Team Collaboration | 360Airo</title>
        <meta 
          name="description" 
          content="360Airo's Unified Shared Inbox organizes all your emails, LinkedIn replies, and campaign messages in one centralized workspace for faster, smarter communication." 
        />
        <meta 
          name="keywords" 
          content="unified inbox, shared inbox, team collaboration, email management, LinkedIn replies, campaign messages, 360Airo inbox" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/unified-shared-inbox" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Unified Shared Inbox for Team Collaboration | 360Airo" />
        <meta property="og:description" content="360Airo's Unified Shared Inbox organizes all your emails, LinkedIn replies, and campaign messages in one centralized workspace for faster, smarter communication." />
        <meta property="og:url" content="https://360airo.com/features/unified-shared-inbox" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-unified-inbox.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unified Shared Inbox for Team Collaboration | 360Airo" />
        <meta name="twitter:description" content="360Airo's Unified Shared Inbox organizes all your emails, LinkedIn replies, and campaign messages in one centralized workspace." />
        <meta name="twitter:image" content="https://360airo.com/twitter-unified-inbox.jpg" />
        
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
              "name": "360Airo Unified Shared Inbox",
              "description": "360Airo's Unified Shared Inbox organizes all your emails, LinkedIn replies, and campaign messages in one centralized workspace for faster, smarter communication.",
              "url": "https://360airo.com/features/unified-shared-inbox",
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
              "featureList": [
                "Unified email management",
                "Team collaboration tools",
                "LinkedIn message integration",
                "Campaign message centralization",
                "AI-powered response suggestions"
              ]
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/unified-shared-inbox">360Airo Unified Shared Inbox</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-blue-950/50 overflow-hidden">
        <Navbar />

        {/* Hero Section with Radial Design - Mobile optimized */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 lg:pt-20 overflow-hidden">
          <CircularConnections />
          <FloatingPlatforms />
          
          <motion.div 
            className="max-w-4xl mx-auto text-center relative z-10"
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, type: "spring" }}
              className={`${isMobile ? 'w-16 h-16' : 'w-24 h-24'} bg-gradient-to-r from-blue-500 to-purple-500 ${isMobile ? 'rounded-2xl' : 'rounded-3xl'} flex items-center justify-center mx-auto mb-6 lg:mb-8`}
            >
              <Inbox className={`${isMobile ? 'h-8 w-8' : 'h-12 w-12'} text-white`} />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.1 }}
              className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-7xl'} font-black text-white mb-4 lg:mb-6`}
            >
              Unified Inbox
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.3 }}
              className={`${isMobile ? 'text-lg' : 'text-2xl md:text-3xl'} text-blue-400 mb-6 lg:mb-8 font-semibold`}
            >
              Every Conversation, One View
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.5 }}
              className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed`}
            >
              Collaborate Effortlessly Across All Your Outreach Channels
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.7 }}
              className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/60 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed`}
            >
              Managing multiple inboxes shouldn't feel like juggling fire. With 360Airo's Unified Inbox, every message from your email sequences, LinkedIn outreach, and campaign replies lands in one clean, centralized workspace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.9 }}
              className={`${isMobile ? 'text-sm' : 'text-lg'} text-white/60 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed`}
            >
              Your entire team can view, respond, and manage conversations in real time — without overlapping replies, missed messages, or confusion. <InternalLink href="/features/team-collaboration">Team Collaboration</InternalLink> becomes seamless and organized.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 1.1 }}
            >
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 ${isMobile ? 'px-6 py-2 text-base' : 'px-8 py-3 text-lg'} rounded-xl w-full sm:w-auto`}
                onClick={handleCTAClick}
              >
                Simplify Your Inbox
                <ArrowRight className={`ml-2 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Radial Features Section - Mobile optimized */}
        <section className="py-16 lg:py-32 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className={`relative ${isMobile ? 'h-64' : 'h-96'} mb-16 lg:mb-20`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: isMobile ? 0.6 : 0.8 }}
                  className={`${isMobile ? 'w-32 h-32' : 'w-48 h-48'} bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center`}
                >
                  <div className="text-center">
                    <Inbox className={`${isMobile ? 'h-8 w-8' : 'h-12 w-12'} text-white mx-auto mb-1 lg:mb-2`} />
                    <div className={`text-white font-bold ${isMobile ? 'text-sm' : ''}`}>All Platforms</div>
                    <div className={`text-white/60 ${isMobile ? 'text-xs' : 'text-sm'}`}>Connected</div>
                  </div>
                </motion.div>
              </div>
              
              {coreFeatures.map((feature, index) => (
                <RadialFeature
                  key={feature.title}
                  {...feature}
                  delay={index * (isMobile ? 0.15 : 0.2)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features with Timeline - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className={isMobile ? 'mb-8' : ''}>
                <ConversationTimeline />
              </div>
              
              <div className="space-y-8 lg:space-y-12">
                {featureSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: isMobile ? 30 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: isMobile ? 0.5 : 0.6, delay: index * (isMobile ? 0.15 : 0.2) }}
                    className="space-y-3 lg:space-y-4"
                  >
                    <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white`}>{section.title}</h3>
                    <p className={`text-white/70 leading-relaxed ${isMobile ? 'text-sm' : ''}`} dangerouslySetInnerHTML={{ __html: section.description }} />
                    
                    {section.features.length > 0 && (
                      <div className="space-y-2">
                        {section.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: isMobile ? 15 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * (isMobile ? 0.15 : 0.2) + featureIndex * (isMobile ? 0.08 : 0.1) }}
                            className="flex items-center space-x-3 text-white/80"
                          >
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full flex-shrink-0" />
                            <span className={isMobile ? 'text-sm' : ''} dangerouslySetInnerHTML={{ __html: feature }} />
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    {section.note && (
                      <p className="text-white/60 italic text-sm">{section.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-white mb-8 lg:mb-12`}
            >
              Why Choose 360Airo's Unified Inbox
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: isMobile ? 0.9 : 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: isMobile ? 0.5 : 0.6, delay: index * (isMobile ? 0.08 : 0.1) }}
                  className="p-4 lg:p-6 bg-white/5 rounded-lg lg:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4`}>
                    <CheckCircle2 className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-blue-400`} />
                  </div>
                  <p className={`text-white/80 leading-relaxed ${isMobile ? 'text-sm' : ''}`}>{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 lg:space-y-6"
            >
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto leading-relaxed`}>
                Manage outreach like a team, not a crowd. With 360Airo's unified inbox, every reply, every lead, and every opportunity stays exactly where it belongs — in one place.
              </p>

              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 ${isMobile ? 'px-6 py-2 text-base' : 'px-8 py-3 text-lg'} rounded-xl w-full sm:w-auto`}
                onClick={handleCTAClick}
              >
                Simplify Your Inbox
                <ArrowRight className={`ml-2 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION - Using your existing UI design */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white/5 to-transparent">
          <FAQSection />
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 lg:space-y-6"
            >
              <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-white`}>
                Ready to Simplify Your Team Communication?
              </h2>
              <p className={`${isMobile ? 'text-base' : 'text-xl'} text-white/70 max-w-2xl mx-auto leading-relaxed`}>
                Join thousands of teams using 360Airo's Unified Inbox to work smarter, collaborate better, and achieve better results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center pt-4 lg:pt-6">
                <motion.div
                  whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 ${isMobile ? 'px-6 py-2 text-base' : 'px-8 py-3 text-lg'} font-semibold rounded-xl shadow-lg shadow-[#3B82F6]/30 w-full sm:w-auto`}
                    onClick={handleCTAClick}
                  >
                    Start Unifying Your Inbox Today
                    <ArrowRight className={`ml-2 ${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
