// app/integrations/page.tsx
"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/navbar'; 
import { 
  Zap, 
  Link2, 
  Shield, 
  BarChart3, 
  Users,
  Workflow,
  ArrowRight,
  Play,
  Cpu,
  GitBranch,
  Lock,
  Cloud,
  Server,
  CheckCircle2,
  MessageSquare,
  Mail,
  Target,
  Rocket,
  Brain,
  Eye,
  Wifi,
  WifiOff,
  RefreshCw,
  Code,
  Database
} from "lucide-react";

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isOnline, setIsOnline] = useState(true);
  const [activeIntegration, setActiveIntegration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIntegration(prev => (prev + 1) % integrationSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  const integrationSteps = [
    {
      step: "01",
      title: "Connect Your Tools",
      description: "Start by logging into your 360Airo account and selecting the tools you want to integrate. From CRMs and analytics to email marketing and automation platforms, the setup takes just a few clicks.",
      icon: Link2,
      color: "#908335"
    },
    {
      step: "02",
      title: "Authenticate Securely",
      description: "Each integration uses encrypted API connections. You authenticate your account securely, ensuring that only you have control over what gets shared and when.",
      icon: Lock,
      color: "#b45ecf"
    },
    {
      step: "03",
      title: "Map Your Data Fields",
      description: "Choose what data flows where. Map lead names, contact details, engagement stats, or any custom field between 360Airo and your chosen tool.",
      icon: GitBranch,
      color: "#480056"
    },
    {
      step: "04",
      title: "Automate and Sync",
      description: "Once connected, the system automatically syncs information in real time. Leads generated through one tool appear instantly in your CRM, campaign performance reflects in analytics dashboards, and updates happen continuously.",
      icon: Cloud,
      color: "#908335"
    },
    {
      step: "05",
      title: "Track and Optimize",
      description: "360Airo lets you monitor all integrations in one place. You can check connection status, control sync intervals, and view detailed logs to ensure everything runs smoothly.",
      icon: BarChart3,
      color: "#b45ecf"
    },
    {
      step: "06",
      title: "Grow at Scale",
      description: "As your business expands, new integrations can be added anytime without disrupting your existing setup. The system is flexible enough to grow with your operations.",
      icon: Rocket,
      color: "#480056"
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Unified Customer View",
      description: "Say goodbye to scattered data. Every integration feeds into a single dashboard that gives you a full view of every customer touchpoint — from the first interaction to the final conversion.",
      color: "#908335"
    },
    {
      icon: Brain,
      title: "Smarter Decisions with Real-Time Data",
      description: "When systems talk to each other instantly, you can make faster, more accurate decisions. Every change, every update, and every engagement is visible as it happens.",
      color: "#b45ecf"
    },
    {
      icon: Target,
      title: "Better Campaign Performance",
      description: "With all your tools connected, you can design campaigns that adapt dynamically. Target the right leads at the right time using insights gathered across multiple channels.",
      color: "#480056"
    },
    {
      icon: Zap,
      title: "Reduced Manual Work",
      description: "Automation eliminates repetitive tasks. No more downloading CSV files or switching between tools to compare results. Everything updates automatically, giving your team more time to focus on creativity and strategy.",
      color: "#908335"
    },
    {
      icon: Users,
      title: "Improved Collaboration",
      description: "Marketing, sales, and analytics teams can finally operate on the same data. Everyone has access to the same information, ensuring no lead is missed and no campaign goes off-track.",
      color: "#b45ecf"
    },
    {
      icon: Server,
      title: "Built for Scalability",
      description: "Whether you're a small business automating simple lead flows or a large enterprise managing thousands of records daily, 360Airo scales effortlessly to handle higher sync loads and growing data volumes.",
      color: "#480056"
    }
  ];

  const integrationCategories = [
    {
      category: "CRM Systems",
      tools: ["Salesforce", "HubSpot", "Zoho", "Pipedrive", "Freshworks"],
      icon: Users,
      color: "#908335"
    },
    {
      category: "Email Marketing",
      tools: ["Mailchimp", "ActiveCampaign", "Constant Contact", "SendGrid", "ConvertKit"],
      icon: Mail,
      color: "#b45ecf"
    },
    {
      category: "Analytics Platforms",
      tools: ["Google Analytics", "Google Data Studio", "Mixpanel", "Amplitude", "Hotjar"],
      icon: BarChart3,
      color: "#480056"
    },
    {
      category: "Collaboration Tools",
      tools: ["Slack", "Trello", "Asana", "Microsoft Teams", "Notion"],
      icon: MessageSquare,
      color: "#908335"
    },
    {
      category: "Lead Generation",
      tools: ["Unbounce", "Typeform", "Facebook Lead Ads", "LinkedIn Lead Gen", "Calendly"],
      icon: Target,
      color: "#b45ecf"
    },
    {
      category: "E-commerce",
      tools: ["Shopify", "WooCommerce", "BigCommerce", "Magento", "Stripe"],
      icon: ShoppingCart,
      color: "#480056"
    }
  ];

  const securityFeatures = [
    {
      feature: "Encrypted API Connections",
      description: "All data transfers use industry-standard encryption protocols",
      icon: Lock,
      color: "#908335"
    },
    {
      feature: "GDPR & CCPA Compliant",
      description: "Full compliance with international data protection standards",
      icon: Shield,
      color: "#b45ecf"
    },
    {
      feature: "Tokenized Authentication",
      description: "No sensitive credentials stored, only secure access tokens",
      icon: Key,
      color: "#480056"
    },
    {
      feature: "Regular Security Audits",
      description: "Continuous monitoring and compliance checks for maximum safety",
      icon: Eye,
      color: "#908335"
    }
  ];

  const ConnectionStatus = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <motion.div
        animate={{ 
          scale: isOnline ? [1, 1.2, 1] : [1, 0.8, 1],
          backgroundColor: isOnline ? "#10b981" : "#ef4444"
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: isOnline ? 0 : 360 }}
          transition={{ duration: 1 }}
        >
          {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
        </motion.div>
        <span>{isOnline ? "All Systems Connected" : "Reconnecting..."}</span>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4"
        >
          <RefreshCw className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
        <Navbar />
      <ConnectionStatus />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#908335]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#b45ecf]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#480056]/30 rounded-full blur-3xl"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 group hover:bg-white/20 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Link2 className="w-5 h-5 text-[#908335] mr-3" />
            </motion.div>
            <span className="text-white/90 font-semibold">360Airo Integrations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-[#908335] via-[#b45ecf] to-[#480056] bg-clip-text text-transparent">
              Integrations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-relaxed"
          >
            Connect Everything.{" "}
            <motion.span
              animate={{ 
                color: ["#908335", "#b45ecf", "#480056", "#908335"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-[#908335] to-[#b45ecf] bg-clip-text text-transparent"
            >
              Simplify Marketing.
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            For most marketers, the biggest struggle isn't creating campaigns — it's connecting the dots. Leads live in one platform, emails in another, analytics somewhere else, and before you know it, valuable time is lost moving data manually.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            360Airo solves this by giving you one connected ecosystem. Every app, tool, and platform you already use can plug into 360Airo, allowing information to flow freely across your marketing and sales operations. It's a smarter way to work that keeps your team aligned and your data always up to date.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#908335] to-[#b45ecf] hover:from-[#a09a45] hover:to-[#c46ed9] text-white hover:shadow-2xl hover:shadow-[#908335]/25 text-lg px-8 py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Link2 className="mr-3 h-5 w-5" />
                </motion.div>
                Explore Integrations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg" 
                className="border-[#908335] text-[#908335] hover:bg-[#908335]/10 hover:border-[#b45ecf] text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="mr-3 h-5 w-5" />
                </motion.div>
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How Integration Works Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Integration{" "}
              <span className="bg-gradient-to-r from-[#908335] to-[#b45ecf] bg-clip-text text-transparent">
                Actually Works
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                <p className="text-white/80 leading-relaxed">
                  Leads live in one platform, emails in another, analytics somewhere else, and before you know it, valuable time is lost moving data manually between disconnected systems.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                <p className="text-white/80 leading-relaxed">
                  360Airo integrations create a two-way communication bridge between systems using secure APIs. This means your CRM, automation tools, and analytics platforms can send and receive information in real time without manual exports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Intelligent Automation</h3>
                <p className="text-white/80 leading-relaxed">
                  This isn't just a sync. It's an intelligent automation process designed to maintain consistency, reduce human error, and make every piece of data actionable the moment it enters your system.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#908335]/20 to-[#b45ecf]/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-8">
                  <Cpu className="w-16 h-16 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">Real-Time Data Flow</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Secure API Connections",
                    "Two-Way Data Sync",
                    "Automatic Field Mapping",
                    "Real-Time Updates",
                    "Webhook Triggers",
                    "Error Handling"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center text-white/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Step-by-Step Flow of 360Airo Integration
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple setup process that connects your entire marketing stack in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                animate={activeIntegration === index ? { scale: 1.02 } : {}}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-[#908335]/20 hover:border-[#908335]/40 relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    backgroundColor: [step.color, "#b45ecf", step.color],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 opacity-5"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ 
                        scale: activeIntegration === index ? [1, 1.2, 1] : 1,
                        rotate: activeIntegration === index ? [0, 10, 0] : 0
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#908335]/30"
                    >
                      {step.step}
                    </motion.div>
                    <motion.div
                      animate={{ 
                        color: step.color,
                        scale: activeIntegration === index ? [1, 1.3, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <step.icon className="w-8 h-8" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#908335] group-hover:to-[#b45ecf] group-hover:bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-[#19001d] to-[#480056] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits of Using 360Airo Integrations
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Transform your marketing operations with connected intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    backgroundColor: [benefit.color, "#b45ecf", benefit.color],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 opacity-10"
                />
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg border border-[#908335]/30"
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed group-hover:text-white/90">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Technology Behind It
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                360Airo's integration engine uses secure REST APIs to establish data connections between platforms. It translates and standardizes data so different systems can "speak" the same language.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                For example, if one tool labels a field as "email_id" and another uses "contact_email," 360Airo automatically aligns them during the mapping process. This ensures data consistency even across platforms built on completely different frameworks.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                The system also supports webhook triggers, meaning you can set up real-time automation events. When something happens in one tool — like a form submission, new signup, or email open — 360Airo instantly pushes that event to your connected systems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                All of this happens behind the scenes without requiring code or developer assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#908335]/20 to-[#b45ecf]/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-8">
                  <Code className="w-16 h-16 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white">Technical Features</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Secure REST API Connections",
                    "Automatic Data Standardization",
                    "Webhook Trigger Support",
                    "Real-Time Event Processing",
                    "No-Code Setup",
                    "Automatic Error Recovery"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center text-white/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-br from-[#480056] to-[#b45ecf] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Security and Compliance
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Every integration is designed with security at its core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500 group"
              >
                <feature.icon className="w-12 h-12 text-white mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ color: feature.color }} />
                <h3 className="text-lg font-bold text-white mb-3">{feature.feature}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Connections are fully encrypted and comply with international data protection standards such as GDPR, CAN-SPAM, and CCPA. You retain full control over what data is shared, where it's stored, and how it's used. 360Airo does not store sensitive login credentials; it uses tokenized authentication to maintain privacy and protect against unauthorized access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integration Possibilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              360Airo connects with a wide range of platforms to fit into your existing marketing stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-gray-800"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#908335]/30">
                  <category.icon className="w-8 h-8" style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#908335] group-hover:to-[#b45ecf] group-hover:bg-clip-text">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                      className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" />
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              If your preferred software isn't on the list, our support team can help you create a custom integration through API or webhook setup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 bg-gradient-to-br from-[#19001d] to-[#480056] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-br from-[#908335] to-[#b45ecf] rounded-2xl flex items-center justify-center text-white mb-8 mx-auto"
            >
              <Brain className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Outcome of Integration
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              When all your tools are integrated through 360Airo, you don't just get connected systems — you get connected intelligence.
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              You see patterns, discover insights, and predict trends before they happen. Every part of your marketing operation becomes measurable and actionable.
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Marketers who use 360Airo report saving hours each week on data management and experience higher campaign accuracy, better audience targeting, and faster decision cycles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-12 border border-[#908335]/20 relative overflow-hidden"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360, 0],
                backgroundColor: ["#908335", "#b45ecf", "#480056", "#908335"]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto"
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Link2 className="w-10 h-10" />
              </motion.div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Integrating Today
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connecting your tools to 360Airo is quick, secure, and completely customizable. Begin with just one integration and expand over time.
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              To get started or for assistance with setup, reach out to our team through the official mail listed on our contact page.
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed italic">
              Let your data flow freely. Let your tools finally work as one. Experience how 360Airo integrations can transform the way you market, analyze, and grow.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#908335] to-[#b45ecf] hover:from-[#a09a45] hover:to-[#c46ed9] text-white text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Link2 className="mr-3 h-5 w-5" />
                </motion.div>
                Connect Your First Tool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Add missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <motion.svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
  </motion.svg>
);

const Key = ({ className }: { className?: string }) => (
  <motion.svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
    whileHover={{ scale: 1.1, rotate: -5 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </motion.svg>
);