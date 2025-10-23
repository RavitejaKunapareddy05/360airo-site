'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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

// Circular Connection Animation
const CircularConnections = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Outer Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          stroke="url(#outerGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          stroke="url(#middleGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="50"
          stroke="url(#innerGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Connection Lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.line
            key={angle}
            x1="200"
            y1="200"
            x2={200 + 150 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 150 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
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

// Floating Platform Icons
const FloatingPlatforms = () => {
  const platforms = [
    { icon: Mail, name: "Email", delay: 0 },
    { icon: Link2, name: "LinkedIn", delay: 0.5 },
    { icon: MessageCircle, name: "Campaigns", delay: 1 },
    { icon: MessageSquare, name: "Team Chat", delay: 1.5 }
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
              Math.cos(index * 90) * 100,
              Math.cos(index * 90 + 45) * 150,
              Math.cos(index * 90 + 90) * 100
            ],
            y: [
              Math.sin(index * 90) * 100,
              Math.sin(index * 90 + 45) * 150,
              Math.sin(index * 90 + 90) * 100
            ]
          }}
          transition={{
            duration: 6,
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
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
            <platform.icon className="h-5 w-5 text-blue-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Radial Feature Display
const RadialFeature = ({ icon: Icon, title, description, angle, delay }: any) => {
  const radius = 200;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute"
      initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
      whileInView={{ scale: 1, opacity: 1, x, y }}
      transition={{ duration: 0.8, delay, type: "spring" }}
      style={{
        left: '50%',
        top: '50%',
        marginLeft: -80,
        marginTop: -80
      }}
    >
      <div className="w-40 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Conversation Timeline
const ConversationTimeline = () => {
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
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
      
      {messages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-start space-x-4 mb-8 last:mb-0"
        >
          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center"
            >
              <msg.icon className="h-6 w-6 text-blue-400" />
            </motion.div>
          </div>
          
          <div className="flex-1 pt-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-semibold">{msg.platform}</span>
              <span className="text-white/40 text-sm">{msg.time}</span>
            </div>
            <p className="text-white/70 mb-2">{msg.message}</p>
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

// Main Component
export default function UnifiedInboxRadialPage() {
  const containerRef = useRef<HTMLDivElement>(null);
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
      title: "All Your Accounts, Perfectly Synced",
      description: "Say goodbye to switching tabs or logging into multiple accounts. 360Airo connects all your domains and emails into one shared inbox, syncing every thread instantly. Whether you're managing multiple campaigns or working with a distributed sales team, everyone stays on the same page — literally.",
      features: [
        "Manage multiple sender accounts in one dashboard",
        "Assign conversations to specific team members",
        "Track message history and response timelines",
        "Keep complete visibility over all client interactions"
      ],
      note: "Your outreach becomes smoother, faster, and perfectly coordinated."
    },
    {
      title: "Smarter Collaboration with AI Assistance",
      description: "360Airo's AI-powered inbox management helps your team respond faster and smarter. It detects message intent, flags high-priority replies, and even suggests personalized responses — all while maintaining your brand's tone.",
      features: [
        "Get AI-suggested replies for faster follow-ups",
        "Categorize and prioritize messages automatically", 
        "Never lose track of client communications or leads"
      ],
      note: "The result? You save hours every week while delivering a seamless experience to every prospect."
    },
    {
      title: "Transparency Without Overlap",
      description: "No more duplicate replies or missed handoffs. Each team member knows who's handling what, with clear ownership and visibility over every conversation thread.",
      features: [
        "Real-time team visibility",
        "Clear conversation ownership",
        "No duplicate responses",
        "Seamless team handoffs"
      ],
      note: "360Airo's unified communication system is built for sales, marketing, and customer success teams that need clarity, not chaos."
    }
  ];

  const benefits = [
    "One inbox for all campaigns and accounts",
    "Team collaboration made easy with real-time updates",
    "AI-assisted response suggestions and prioritization", 
    "Complete message history and transparency",
    "Improved response times and customer satisfaction"
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-blue-950/50 overflow-hidden">
      <Navbar />

      {/* Hero Section with Radial Design */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <CircularConnections />
        <FloatingPlatforms />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <Inbox className="h-12 w-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Unified Shared Inbox
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-blue-400 mb-8 font-semibold"
          >
            Every Conversation, One View
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Collaborate Effortlessly Across All Your Outreach Channels
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Managing multiple inboxes shouldn't feel like juggling fire. With 360Airo's Unified Shared Inbox, every message from your email sequences, LinkedIn outreach, and campaign replies lands in one clean, centralized workspace.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your entire team can view, respond, and manage conversations in real time — without overlapping replies, missed messages, or confusion. Collaboration just became effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 text-lg rounded-xl">
              Simplify Your Inbox
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Radial Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <Inbox className="h-12 w-12 text-white mx-auto mb-2" />
                  <div className="text-white font-bold">All Platforms</div>
                  <div className="text-white/60 text-sm">Connected</div>
                </div>
              </motion.div>
            </div>
            
            {coreFeatures.map((feature, index) => (
              <RadialFeature
                key={feature.title}
                {...feature}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features with Timeline */}
      <section className="py-20 px-6 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ConversationTimeline />
            </div>
            
            <div className="space-y-12">
              {featureSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  <p className="text-white/70 leading-relaxed">{section.description}</p>
                  
                  <div className="space-y-2">
                    {section.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3 text-white/80"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-white/60 italic text-sm">{section.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-12"
          >
            Why Choose 360Airo's Unified Shared Inbox
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-white/80 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Manage outreach like a team, not a crowd. With 360Airo's Unified Shared Inbox, every reply, every lead, and every opportunity stays right where it belongs — in one place.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 text-lg rounded-xl">
              Simplify Your Inbox
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}