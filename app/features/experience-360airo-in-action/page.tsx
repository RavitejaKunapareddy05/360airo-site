'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Head from 'next/head';

import {
  Calendar,
  Play,
  Zap,
  Target,
  Users,
  Mail,
  MessageCircle,
  BarChart3,
  Rocket,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Eye,
  TrendingUp,
  Shield,
  Bot,
  ChartLine,
  Workflow,
  MessageSquare,
  MailCheck,
  Linkedin,
  UserCheck,
  Star,
  Crown,
  Sparkle,
  MonitorPlay,
  CalendarDays,
  Clock4,
  Gift,
  Plus,
  Minus
} from 'lucide-react';

// Color constants
const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// FAQ Component
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a live product demo, and how does it work?",
      answer: "A live product demo is an interactive walkthrough of the 360Airo platform led by a product expert. During the session, users see real use cases, core features, and workflows in action. The demo helps businesses understand how 360Airo fits their outreach needs and how to use it effectively."
    },
    {
      question: "What will I learn during a live demo of 360Airo?",
      answer: "During a live demo, you will learn how to set up email campaigns, LinkedIn automation, warmup, AI personalization, and analytics. The session also explains best practices for safe outreach and shows how different features work together to generate leads and improve conversions."
    },
    {
      question: "Who should book a 360Airo demo to evaluate the platform?",
      answer: "Founders, sales leaders, marketers, agencies, and outreach teams should book a 360Airo demo. It is especially useful for businesses planning cold outreach or multichannel campaigns and wanting to evaluate deliverability, automation, and scalability before committing to a platform."
    },
    {
      question: "How long does a typical 360Airo live demo session last?",
      answer: "A typical 360Airo live demo lasts between thirty and forty five minutes. This duration allows enough time to explore key features, ask questions, and understand workflows without being overwhelming, making it ideal for busy teams and decision makers."
    },
    {
      question: "Can the demo be customized based on my outreach goals?",
      answer: "Yes, 360Airo demos can be customized based on your business goals. Whether you focus on cold email, LinkedIn outreach, lead management, or automation, the demo can highlight the most relevant features and workflows for your specific use case."
    },
    {
      question: "Does the demo showcase key features like email warmup, AI automation, and outreach?",
      answer: "Yes, the live demo covers core features including email warmup, AI email generation, LinkedIn automation, multichannel campaigns, and analytics. This gives a complete view of how 360Airo supports safe, scalable, and data driven outbound outreach."
    },
    {
      question: "Does the live demo include LinkedIn outreach and multichannel campaign walkthroughs?",
      answer: "The live demo includes walkthroughs of LinkedIn outreach and multichannel campaign setup. Users can see how email and LinkedIn workflows connect, how automation works, and how engagement is tracked across channels from one dashboard."
    },
    {
      question: "What analytics and reports are shown during the 360Airo demo?",
      answer: "During the demo, users are shown campaign performance reports, inbox health metrics, reply rates, and conversion tracking. These analytics demonstrate how 360Airo turns outreach data into actionable insights that help optimize future campaigns."
    },
    {
      question: "What happens after I complete the live demo?",
      answer: "After the demo, users receive next steps based on their goals. This may include trial access, onboarding guidance, or plan recommendations. The 360Airo team ensures businesses have clarity on how to get started and succeed with the platform."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
        >
          Get answers to common questions about 360Airo demos
        </motion.p>
      </motion.div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl border-2 border-gray-800 overflow-hidden"
          >
            <button
              className="w-full text-left p-4 sm:p-6 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                  style={{ background: COLORS.purpleLight }}
                >
                  {openFaq === index ? (
                    <Minus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  ) : (
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  )}
                </motion.div>
              </div>
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
                      className="text-white/80 text-sm sm:text-base leading-relaxed border-t border-gray-800 pt-4 sm:pt-6"
                    >
                      {faq.answer}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 sm:mt-12 text-center"
      >
        <p className="text-white text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto mb-6 sm:mb-8">
          Still have questions? Book a demo to get all your questions answered in real-time.
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Button 
            size="lg" 
            className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl shadow-xl border-0 relative overflow-hidden group"
            style={{ background: COLORS.purpleLight }}
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
              Book Your Live Demo
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Floating Demo Elements
const FloatingDemoElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Dashboard Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border-2 backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 60 + 30,
            borderColor: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker}15, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M20,80 Q200,40 380,120"
          stroke={COLORS.purpleLight}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.path
          d="M80,200 Q250,150 400,180"
          stroke={COLORS.purpleDark}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
};

// Interactive Demo Feature Grid
const DemoFeaturesGrid = () => {
  const features = [
    {
      icon: MailCheck,
      title: "Email Warmup",
      description: "Boost sender reputation and inbox placement",
      color: COLORS.purpleLight
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Eliminate manual workflows with smart automation",
      color: COLORS.purpleDark
    },
    {
      icon: MessageSquare,
      title: "Personalized Sequences",
      description: "Set up email sequences that feel human",
      color: COLORS.purpleDarker
    },
    {
      icon: Linkedin,
      title: "LinkedIn Outreach",
      description: "Automate LinkedIn campaigns alongside email",
      color: COLORS.purpleLight
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights with detailed reports",
      color: COLORS.purpleDark
    },
    {
      icon: UserCheck,
      title: "Prospect CRM",
      description: "Keep every lead organized and trackable",
      color: COLORS.purpleDarker
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ 
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="relative group"
        >
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-500 h-full">
            {/* Animated Icon */}
            <motion.div
              whileHover={{ 
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative overflow-hidden"
              style={{ background: feature.color }}
            >
              <feature.icon className="h-7 w-7 text-white z-10" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${feature.color}00, ${feature.color}40, ${feature.color}00)`,
                    `linear-gradient(45deg, ${feature.color}00, ${feature.color}20, ${feature.color}00)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            
            <h4 className="text-white font-bold text-lg mb-3">{feature.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${feature.color}15, transparent 70%)`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Steps Component
const DemoSteps = () => {
  const steps = [
    {
      icon: CalendarDays,
      title: "Pick a Time",
      description: "Choose a slot that fits your schedule",
      color: COLORS.purpleLight
    },
    {
      icon: Clock4,
      title: "30-Minute Live Session",
      description: "Join a specialist for personalized walkthrough",
      color: COLORS.purpleDark
    },
    {
      icon: MonitorPlay,
      title: "Experience the Platform",
      description: "Explore, ask questions, get recommendations",
      color: COLORS.purpleDarker
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring"
          }}
          className="relative text-center group"
        >
          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <motion.div
              className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-800 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
            />
          )}

          {/* Step Number */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.3, type: "spring" }}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto relative z-10 border-2"
            style={{ 
              background: step.color,
              borderColor: step.color
            }}
          >
            <span className="text-white font-bold text-sm">{index + 1}</span>
          </motion.div>

          {/* Step Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 group-hover:border-current transition-all duration-300 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
              style={{ background: step.color }}
            >
              <step.icon className="h-8 w-8 text-white" />
            </motion.div>
            
            <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Target Audience Cards
const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: "Sales Teams",
      description: "Scale outreach without losing personalization",
      color: COLORS.purpleLight
    },
    {
      icon: TrendingUp,
      title: "Marketing Professionals",
      description: "Improve email deliverability and engagement",
      color: COLORS.purpleDark
    },
    {
      icon: Rocket,
      title: "Agencies & Startups",
      description: "Unified tools to manage clients and campaigns",
      color: COLORS.purpleDarker
    },
    {
      icon: Crown,
      title: "Growth Leaders",
      description: "Explore smarter automation workflows",
      color: COLORS.purpleLight
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {audiences.map((audience, index) => (
        <motion.div
          key={audience.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ 
            x: index % 2 === 0 ? -5 : 5,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring"
          }}
          className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mt-1"
              style={{ background: audience.color }}
            >
              <audience.icon className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">{audience.title}</h4>
              <p className="text-gray-300 leading-relaxed">{audience.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Benefits List with Animation
const DemoBenefits = () => {
  const benefits = [
    "Live, interactive walkthrough — not just a video",
    "Personalized session tailored to your team's goals",
    "Real-time Q&A with our product experts",
    "Hands-on experience with AI-driven tools and dashboards",
    "Free trial access post-demo to explore on your own"
  ];

  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center space-x-4 group"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: COLORS.purpleLight }}
          >
            <CheckCircle2 className="h-5 w-5 text-white" />
          </motion.div>
          <motion.p
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="text-white text-lg group-hover:text-gray-200 transition-colors"
          >
            {benefit}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

// Pulsing Section Component
const PulsingSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
        style={{
          background: `linear-gradient(45deg, ${COLORS.purpleLight}, ${COLORS.purpleDark}, ${COLORS.purpleDarker})`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Dashboard Mock Component
const DashboardMock = () => {
  const stats = [
    { label: "Emails Sent", value: "2,847", change: "+12%" },
    { label: "Reply Rate", value: "24.3%", change: "+5.2%" },
    { label: "Meetings Booked", value: "89", change: "+18%" },
    { label: "Open Rate", value: "68.7%", change: "+3.1%" }
  ];

  const activities = [
    { time: "2 min ago", action: "Email sequence started for TechCorp", status: "active" },
    { time: "5 min ago", action: "LinkedIn connection request sent", status: "sent" },
    { time: "12 min ago", action: "Warmup completed for sales@", status: "completed" },
    { time: "25 min ago", action: "New lead added from website", status: "new" }
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-6 border-2 shadow-xl border-purple-500/30">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white font-semibold text-lg">360Airo Demo Dashboard</div>
        <div className="w-6"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0A0A0A] rounded-xl p-4 border border-gray-800"
          >
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="flex items-center justify-between">
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-green-400 text-sm font-semibold">{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {["Email Warmup", "AI Automation", "LinkedIn"].map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-[#0A0A0A] rounded-lg p-3 text-center border border-gray-800"
          >
            <div className="text-purple-400 text-xs font-semibold">{feature}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-[#0A0A0A] rounded-xl p-4 border border-gray-800">
        <div className="text-white font-semibold mb-3">Recent Activity</div>
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center justify-between text-sm"
            >
              <div className="text-gray-300">{activity.action}</div>
              <div className="text-gray-500 text-xs">{activity.time}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6"
      >
        <div className="bg-purple-600 rounded-lg p-3 text-center text-white font-semibold text-sm">
          Book Your Live Demo Today!
        </div>
      </motion.div>
    </div>
  );
};

// Main Demo Page Component
export default function DemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <>
       {/* Hidden meta tags for client-side rendering */}
      <div className="hidden">
        <title>360Airo Live Demo | AI Email & LinkedIn Outreach Platform</title>
        <meta 
          name="description" 
          content="Join a live demo of 360Airo to explore email warmup, AI automation, LinkedIn outreach, CRM, and real-time analytics in one powerful platform." 
        />
        <meta 
          name="keywords" 
          content="360Airo demo, AI outreach platform, email automation demo, smart outreach, sales automation, marketing automation, LinkedIn outreach, email warmup" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/experience-360airo-in-action" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content=" 360Airo Live Demo | AI Email & LinkedIn Outreach Platform" />
        <meta property="og:description" content="Join a live demo of 360Airo to explore email warmup, AI automation, LinkedIn outreach, CRM, and real-time analytics in one powerful platform." />
        <meta property="og:url" content="https://360airo.com/features/experience-360airo-in-action" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-demo-page.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover How 360Airo's Smart Outreach Transforms Results" />
        <meta name="twitter:description" content="Join a live demo of 360Airo to explore email warmup, AI automation, LinkedIn outreach, CRM, and real-time analytics in one powerful platform." />
        <meta name="twitter:image" content="https://360airo.com/twitter-demo-page.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45ecf" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </div>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo Demo Experience",
              "description": "See how our powerful AI-powered outreach platform helps teams build stronger connections, automate engagement, and scale measurable results.",
              "url": "https://360airo.com/features/experience-360airo-in-action",
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
                "Live interactive demo",
                "AI-powered outreach platform",
                "Email automation",
                "LinkedIn outreach",
                "Real-time analytics",
                "Prospect CRM"
              ]
            })
          }}
        />

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/experience-360airo-in-action">360Airo Demo Experience</a>
      </div>

      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <FloatingDemoElements />
          
          <motion.div 
            className="max-w-7xl mx-auto w-full relative z-10"
            style={{
              scale: headerScale,
              opacity: headerOpacity
            }}
          >
            {/* MOBILE: Content first, then animation */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
              
              {/* CONTENT COLUMN - Always first on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative space-y-6 lg:space-y-8 order-1"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  <div 
                    className="px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-2xl border-2 backdrop-blur-sm"
                    style={{ 
                      background: COLORS.purpleLight,
                      borderColor: COLORS.purpleLight
                    }}
                  >
                    <span className="text-white font-bold text-xs lg:text-sm uppercase tracking-wider flex items-center">
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                      Live Interactive Demo
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4 lg:space-y-6"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                    <motion.span
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="block"
                    >
                      Experience
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="block"
                      style={{ color: COLORS.purpleLight }}
                    >
                      360Airo
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 }}
                      className="block"
                      style={{ color: COLORS.purpleDark }}
                    >
                      In Action
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed"
                  >
                    See How Smart Outreach Really Works
                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.7 }}
                  className="space-y-3 lg:space-y-4 max-w-xl"
                >
                  <p className="text-base lg:text-lg text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">You've read the features — now see the magic happen.</span>{' '}
                    360Airo's live demo gives you a front-row seat to how our AI-powered outreach platform helps teams build better connections, automate engagement, and scale results.
                  </p>
                  <p className="text-base lg:text-lg text-white/70 leading-relaxed">
                    Whether you're in sales, marketing, or business development, the 360Airo demo walks you through everything — from email warmup to AI automation, LinkedIn outreach, prospect CRM, and performance analytics — all in one unified interface.
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="pt-4 lg:pt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      size="lg" 
                      className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-bold rounded-xl lg:rounded-2xl shadow-xl border-0 relative overflow-hidden group w-full lg:w-auto"
                      style={{ background: COLORS.purpleLight }}
                      onClick={() => window.open('https://app.360airo.com/', '_blank')}
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute inset-0 bg-white/20 rounded-xl lg:rounded-2xl"
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <Play className="mr-2 lg:mr-3 h-4 w-4 lg:h-5 lg:w-5" />
                        Book Your Live Demo
                        <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* ANIMATION COLUMN - Always second on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative order-2 mt-8 lg:mt-0"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <DashboardMock />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-4 h-4 lg:w-8 lg:h-8 rounded-full shadow-lg"
                  style={{ background: COLORS.purpleLight }}
                ></motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2,
                  }}
                  className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-3 h-3 lg:w-6 lg:h-6 rounded-full shadow-lg"
                  style={{ background: COLORS.purpleDark }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* What You'll Discover Section */}
        <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                What You'll Discover in the Demo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
              >
                Our product specialists will guide you through a hands-on experience of how 360Airo simplifies outreach while improving deliverability and conversions.
              </motion.p>
            </motion.div>

            <DemoFeaturesGrid />
          </div>
        </PulsingSection>

        {/* Who the Demo Is For Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
          <FloatingDemoElements />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6"
                style={{ color: COLORS.purpleLight }}
              >
                Who the Demo Is For
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base lg:text-xl text-white/70 max-w-3xl mx-auto"
              >
                The 360Airo product demo is built for anyone who wants to transform the way they connect, engage, and convert.
              </motion.p>
            </motion.div>

            <TargetAudience />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 lg:mt-12 text-center"
            >
              <p className="text-white text-lg lg:text-xl font-bold">
                If outreach plays any role in your business, this demo is your starting point for smarter results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Book Demo Section */}
        <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                Why Book a 360Airo Demo
              </motion.h2>
            </motion.div>

            <DemoBenefits />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 lg:mt-12 text-center"
            >
              <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                See how easy it is to automate outreach, track performance, and scale engagement — all without losing the human touch.
              </p>
            </motion.div>
          </div>
        </PulsingSection>

        {/* Schedule Steps Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6"
                style={{ color: COLORS.purpleLight }}
              >
                Schedule Your Demo in 3 Easy Steps
              </motion.h2>
            </motion.div>

            <DemoSteps />

            {/* Free Trial Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 lg:mt-20 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-3 lg:space-x-5 bg-[#1A1A1A] rounded-xl lg:rounded-2xl px-6 lg:px-10 py-3 lg:py-4 border-2"
                style={{ borderColor: COLORS.purpleLight }}
              >
                <Gift className="h-4 w-4 lg:h-6 lg:w-6" style={{ color: COLORS.purpleLight }} />
                <p className="text-white text-sm lg:text-lg font-semibold">
                  Free trial access post-demo to explore on your own
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#0A0A0A] via-purple-900/10 to-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <FAQSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <PulsingSection className="py-12 lg:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 lg:mb-6"
              >
                See the Future of Outreach, Live
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              >
                Don't just imagine smarter outreach — experience it. Book your 360Airo live demo today and discover how AI can make your communication faster, more personal, and infinitely scalable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-4 lg:pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="px-6 py-3 lg:px-12 lg:py-6 text-base lg:text-xl font-bold rounded-xl lg:rounded-2xl shadow-xl border-0 relative overflow-hidden group w-full lg:w-auto"
                    style={{ background: COLORS.purpleLight }}
                    onClick={() => window.open('https://app.360airo.com/', '_blank')}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute inset-0 bg-white/30 rounded-xl lg:rounded-2xl"
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <Calendar className="mr-2 lg:mr-3 h-4 w-4 lg:h-6 lg:w-6" />
                      Book Your Demo Now
                      <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </PulsingSection>

        <Footer />
      </div>
    </>
  );
}
