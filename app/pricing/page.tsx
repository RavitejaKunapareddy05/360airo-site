'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import {
  Zap,
  Rocket,
  Crown,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  TrendingUp,
  Users,
  Mail,
  BarChart3,
  MessageSquare,
  Linkedin,
  UserCheck,
  Shield,
  Clock,
  Gift,
  CreditCard,
  Infinity as InfinityIcon,
  Target,
  Calendar,
  Cpu,
  Workflow,
  Database,
  Server,
  Cloud,
  Lock,
  Unlock
} from 'lucide-react';

const COLORS = {
  purpleLight: '#b45ecf',
  purpleDark: '#480056',
  purpleDarker: '#19001d',
  white: '#ffffff',
  dark: '#0A0A0A',
  light: '#1A1A1A'
};

// Floating Pricing Particles
const PricingParticles = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Currency Symbols */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-sm font-bold"
          style={{
            color: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            left: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + (i % 4) * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: (i % 5) * 1.2,
          }}
        >
          {i % 3 === 0 ? '$' : i % 3 === 1 ? '€' : '£'}
        </motion.div>
      ))}
      
      {/* Floating Circles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(i) * 40, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            background: i % 3 === 0 ? COLORS.purpleLight : i % 3 === 1 ? COLORS.purpleDark : COLORS.purpleDarker,
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Interactive Pricing Cards
const PricingCards = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for freelancers & small teams",
      price: "$29",
      period: "/month",
      icon: Zap,
      color: COLORS.purpleLight,
      popular: false,
      features: [
        "Email warmup",
        "1 inbox",
        "AI writing assistant", 
        "Basic reporting",
        "500 contacts",
        "1 domain"
      ]
    },
    {
      name: "Growth",
      description: "Ideal for agencies & scaling teams",
      price: "$79",
      period: "/month",
      icon: Rocket,
      color: COLORS.purpleDark,
      popular: true,
      features: [
        "Multiple domains",
        "LinkedIn automation",
        "Smart sequences",
        "Shared inbox",
        "5,000 contacts",
        "Advanced analytics"
      ]
    },
    {
      name: "Pro",
      description: "Built for enterprises & large organizations",
      price: "$199",
      period: "/month",
      icon: Crown,
      color: COLORS.purpleDarker,
      popular: false,
      features: [
        "Unlimited users",
        "Advanced analytics",
        "API integrations",
        "Dedicated support",
        "Unlimited contacts",
        "Custom domains"
      ]
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={!isMobile ? { y: -10 } : {}}
          onHoverStart={() => !isMobile && setHoveredCard(index)}
          onHoverEnd={() => !isMobile && setHoveredCard(null)}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="relative"
        >
          {/* Popular Badge */}
          {plan.popular && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>MOST POPULAR</span>
              </div>
            </motion.div>
          )}

          {/* Pricing Card */}
          <div className={`bg-[#1A1A1A] rounded-3xl p-8 border-2 relative overflow-hidden h-full transition-all duration-500 ${
            plan.popular ? 'border-purple-500 shadow-2xl' : 'border-gray-800 hover:border-current'
          }`}>
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  `radial-gradient(circle at 20% 80%, ${plan.color}15, transparent 50%)`,
                  `radial-gradient(circle at 80% 20%, ${plan.color}15, transparent 50%)`,
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Header */}
            <div className="text-center mb-8 relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: plan.color }}
              >
                <plan.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              
              <div className="flex items-baseline justify-center space-x-2 mb-6">
                <motion.span
                  className="text-4xl font-black text-white"
                  animate={{
                    scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {plan.price}
                </motion.span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8 relative z-10">
              {plan.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: featureIndex * 0.1 + index * 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: plan.color }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </motion.div>
                  <span className="text-white text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Button 
                className={`w-full py-3 text-lg font-bold rounded-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'shadow-2xl shadow-purple-500/50' 
                    : 'shadow-lg'
                }`}
                style={{ 
                  background: plan.color,
                  borderColor: plan.color
                }}
                onClick={() => window.open('https://app.360airo.com/', '_blank')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Included Features Grid
const IncludedFeatures = () => {
  const features = [
    {
      icon: Cpu,
      title: "Full Dashboard Access",
      description: "Complete access to the 360Airo dashboard and campaign builder",
      color: COLORS.purpleLight
    },
    {
      icon: Shield,
      title: "Deliverability Monitoring",
      description: "Advanced email deliverability monitoring and sender reputation protection",
      color: COLORS.purpleDark
    },
    {
      icon: Workflow,
      title: "AI Content Generation",
      description: "Access to AI-driven content generation and personalization tools",
      color: COLORS.purpleLight
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Built-in reports and analytics for performance tracking",
      color: COLORS.purpleDark
    },
    {
      icon: Database,
      title: "Domain Management",
      description: "Secure domain management and team collaboration tools",
      color: COLORS.purpleLight
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in team management and collaboration features",
      color: COLORS.purpleDark
    }
  ];

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={!isMobile ? { 
            scale: 1.05,
            rotateY: 10,
          } : {}}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring"
          }}
          className="bg-[#1A1A1A] rounded-2xl p-6 border-2 border-gray-800 hover:border-current transition-all duration-300 group perspective-1000"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
            style={{ background: feature.color }}
          >
            <feature.icon className="h-6 w-6 text-white" />
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
        </motion.div>
      ))}
    </div>
  );
};

// Comparison Table
const ComparisonTable = () => {
  const features = [
    { name: "Connected Domains", starter: "1", growth: "5", pro: "Unlimited" },
    { name: "Daily Send Limits", starter: "100", growth: "1,000", pro: "10,000+" },
    { name: "Sequence Capacity", starter: "3", growth: "25", pro: "Unlimited" },
    { name: "AI Automation Tools", starter: "Basic", growth: "Advanced", pro: "Enterprise" },
    { name: "CRM Integrations", starter: "Limited", growth: "Full", pro: "Custom" },
    { name: "Support Level", starter: "Standard", growth: "Priority", pro: "Dedicated" }
  ];

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
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
    <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-3xl p-8 border-2 border-gray-800">
      <div className="grid grid-cols-4 gap-4 text-center mb-6">
        <div></div>
        <motion.div
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          className="text-sm font-bold text-purple-400"
        >
          Starter
        </motion.div>
        <motion.div
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          className="text-sm font-bold text-purple-500"
        >
          Growth
        </motion.div>
        <motion.div
          whileHover={!isMobile ? { scale: 1.05 } : {}}
          className="text-sm font-bold text-purple-600"
        >
          Pro
        </motion.div>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            onHoverStart={() => !isMobile && setHoveredRow(index)}
            onHoverEnd={() => !isMobile && setHoveredRow(null)}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`grid grid-cols-4 gap-4 p-4 rounded-2xl transition-all duration-300 ${
              hoveredRow === index ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-[#0A0A0A]'
            }`}
          >
            <div className="text-white font-semibold text-sm flex items-center">
              {feature.name}
            </div>
            <motion.div
              animate={{ scale: !isMobile && hoveredRow === index ? 1.1 : 1 }}
              className="text-gray-300 text-sm text-center"
            >
              {feature.starter}
            </motion.div>
            <motion.div
              animate={{ scale: !isMobile && hoveredRow === index ? 1.1 : 1 }}
              className="text-gray-300 text-sm text-center"
            >
              {feature.growth}
            </motion.div>
            <motion.div
              animate={{ scale: !isMobile && hoveredRow === index ? 1.1 : 1 }}
              className="text-gray-300 text-sm text-center"
            >
              {feature.pro}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Free Trial Section
const FreeTrialSection = () => {
  const benefits = [
    "Full access to one active campaign",
    "AI content assistance",
    "Deliverability tracking and warmup tools",
    "Free onboarding session with our success team"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border-2 border-purple-500/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(180, 94, 207, 0.1), transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(180, 94, 207, 0.1), transparent 50%)',
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
          style={{ background: COLORS.purpleLight }}
        >
          <Gift className="h-10 w-10 text-white" />
        </motion.div>

        <h3 className="text-3xl font-black text-white mb-4">
          Try 360Airo Free — No Credit Card Required
        </h3>

        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Still exploring? Sign up for our free trial and experience what makes 360Airo the fastest-growing AI outreach platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 text-white bg-black/30 rounded-xl p-4"
            >
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            className="px-12 py-6 text-xl font-bold rounded-xl shadow-2xl shadow-purple-500/50 border-0"
            style={{ background: COLORS.purpleLight }}
            onClick={() => window.open('https://app.360airo.com/', '_blank')}
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Start Free Trial
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
           {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/pricing" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <PricingParticles />
        
        <motion.div 
          className="max-w-7xl mx-auto w-full relative z-10"
          style={{
            scale: headerScale,
            opacity: headerOpacity
          }}
        >
          <div className="text-center max-w-4xl mx-auto py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <div 
                  className="px-6 py-3 rounded-full shadow-2xl border-2 backdrop-blur-sm"
                  style={{ 
                    background: COLORS.purpleLight,
                    borderColor: COLORS.purpleLight
                  }}
                >
                  <span className="text-white font-bold text-sm uppercase tracking-wider flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    360Airo Pricing
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight"
              >
                <span className="block">Simple Plans for</span>
                <motion.span
                  style={{ color: COLORS.purpleLight }}
                  animate={{
                    textShadow: [
                      `0 0 20px ${COLORS.purpleLight}`,
                      `0 0 40px ${COLORS.purpleLight}`,
                      `0 0 20px ${COLORS.purpleLight}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="block"
                >
                  Every Stage
                </motion.span>
                <span className="block">of Growth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed"
              >
                Start Smart. Scale Seamlessly. Pay Only for What You Need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="space-y-4 max-w-2xl mx-auto"
              >
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  At 360Airo, we believe pricing should be as straightforward as your outreach. That's why our pricing plans are designed to grow with you — whether you're a solo founder testing cold emails or a full-scale team managing multi-channel campaigns.
                </p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Choose the plan that fits your workflow and goals. No hidden fees, no setup costs — just transparent value.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >

                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="px-8 py-4 text-lg font-bold rounded-xl border-2"
                    style={{ borderColor: COLORS.purpleDark, color: COLORS.white }}
                    onClick={() => window.open('https://app.360airo.com/', '_blank')}
                  >
                    Start Free Trial
                    <Sparkles className="ml-3 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <PricingParticles />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
            >
              Find the Perfect Plan for Your Outreach Goals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Each 360Airo plan comes with built-in access to our full suite of AI-powered tools — including email warmup, AI automation, LinkedIn outreach, prospect CRM, and reports & analytics.
            </motion.p>
          </motion.div>

          <PricingCards />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white text-lg font-semibold">
              All plans include 24/7 support, real-time deliverability insights, and secure data management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Included Features Section */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
              style={{ color: COLORS.purpleLight }}
            >
              What's Included in Every Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            >
              No matter which plan you choose, every user gets access to our complete suite of features.
            </motion.p>
          </motion.div>

          <IncludedFeatures />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-white text-lg font-light max-w-2xl mx-auto">
              We've built flexibility into every layer, so you can scale outreach without scaling costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <PricingParticles />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
            >
              Compare Plans Side by Side
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            >
              Not sure which plan is right for you? Our interactive pricing comparison lets you evaluate key features.
            </motion.p>
          </motion.div>

          <ComparisonTable />
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FreeTrialSection />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <PricingParticles />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
            >
              Simple, Transparent, Scalable
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              At 360Airo, we don't lock you in — we grow with you. Upgrade, downgrade, or cancel anytime. Your data, campaigns, and progress remain secure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto"
            >
              Every plan is built to ensure that whether you're sending 100 emails a day or 10,000, your outreach stays consistent, compliant, and impactful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 sm:px-12 py-6 text-lg sm:text-xl font-bold rounded-xl border-2"
                  style={{ borderColor: COLORS.purpleDark, color: COLORS.white }}
                  onClick={() => window.open('https://app.360airo.com/', '_blank')}
                >
                  Start Free Trial
                  <Sparkles className="ml-3 h-5 sm:h-6 w-5 sm:w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}