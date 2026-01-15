'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Check, Star, Award, Zap, Shield, TrendingUp, DollarSign, Users, Calendar, Clock, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Type definitions
interface FeatureModuleProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
  gradient?: string;
}

interface ToolCardProps {
  rank: number;
  name: string;
  tagline: string;
  bestFor: string;
  description: string;
  strengths: string[];
  considerations: string[];
  badge?: string;
  badgeColor?: string;
}

// Enhanced Hero Section with Interactive Elements
const HeroSection = () => (
  <motion.header 
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="relative overflow-hidden bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#480056] pt-32 pb-20 px-4"
  >
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#b45ecf]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-60 h-60 bg-[#480056]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[#d67bff]/10 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-6xl mx-auto">
      <motion.div 
        variants={itemVariants}
        className="text-center mb-12"
      >
        {/* Badge */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-full border border-[#b45ecf]/30 mb-6"
        >
          <Award className="h-4 w-4 text-[#b45ecf]" />
          <span className="text-sm font-semibold text-white">2026 Ultimate Guide</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#b45ecf] bg-clip-text text-transparent">
            10 Cheapest Cold Email Software Tools
          </span>
          <br />
          <span className="text-white/90">For Startups & Agencies</span>
        </h1>

        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Cold email remains one of the most cost-effective growth channels — but only if the tooling makes sense. 
          We tested 25+ platforms to find the best budget-friendly options that actually deliver results.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="text-2xl font-bold text-[#b45ecf] mb-1">$10-99</div>
            <div className="text-sm text-white/60">Monthly Budget</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="text-2xl font-bold text-[#b45ecf] mb-1">25+</div>
            <div className="text-sm text-white/60">Tools Tested</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="text-2xl font-bold text-[#b45ecf] mb-1">92%</div>
            <div className="text-sm text-white/60">Deliverability Rate</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="text-2xl font-bold text-[#b45ecf] mb-1">2026</div>
            <div className="text-sm text-white/60">Latest Data</div>
          </motion.div>
        </div>

        {/* Author and Date */}
        <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full"></div>
            <span>360Airo Research Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>November 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>10 min read</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Image with Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
      >
        <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden border-2 border-[#b45ecf]/30 shadow-2xl shadow-[#b45ecf]/20">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Cold Email Software Dashboard - Affordable tools for startups and agencies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014]/80 via-transparent to-[#0a0014]/40"></div>
          
          {/* Floating Badges */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-6 left-6 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white px-4 py-2 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="font-semibold">Verified Tools</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Deliverability Focused</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.header>
);

// Modern Introduction Module
const IntroductionModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="py-16 px-4"
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Finding Tools That Won't <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Break Your Budget</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Paying enterprise-level prices before proving outbound is one of the fastest ways to burn budget without results. 
              That's why many early-stage teams look for the cheapest cold email software that still supports deliverability, 
              personalization, and scale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/20 rounded-2xl p-6 border border-[#b45ecf]/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#b45ecf]" />
              Key Insight
            </h3>
            <p className="text-white/70">
              Most startups overpay for features they don't use. The right tool should grow with you — not force you 
              into expensive tiers before you're ready.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            How We Defined <span className="text-[#b45ecf]">"Cheapest"</span>
          </h3>
          <p className="text-white/70 mb-6">
            This list isn't about tools that are "cheap" but unusable. To qualify, a platform had to meet at least three criteria:
          </p>
          
          <div className="space-y-4">
            {[
              { icon: <DollarSign className="h-5 w-5" />, text: "Low entry price suitable for startups" },
              { icon: <Shield className="h-5 w-5" />, text: "Basic deliverability support & protection" },
              { icon: <Users className="h-5 w-5" />, text: "Practical for agencies or small sales teams" },
              { icon: <Check className="h-5 w-5" />, text: "Core cold email functionality (sequences, tracking)" },
              { icon: <Zap className="h-5 w-5" />, text: "Transparent pricing with no hidden costs" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <span className="text-white/80">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            Some tools are fully paid, some are freemium, and some overlap with free email outreach tools for early testing.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

// Modern Tool Card Component
const ToolCard = ({ rank, name, tagline, bestFor, description, strengths, considerations, badge, badgeColor }: ToolCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative"
  >
    {/* Rank Badge */}
    <div className="absolute -top-4 -left-4 z-10">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
          #{rank}
        </div>
        {badge && (
          <div className={`absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full ${badgeColor || 'bg-[#b45ecf]'} text-white`}>
            {badge}
          </div>
        )}
      </div>
    </div>

    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-[#b45ecf]/40 transition-all duration-300 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/0 via-[#b45ecf]/5 to-[#b45ecf]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-[#b45ecf] font-medium mb-3">{tagline}</p>
            <div className="inline-flex items-center px-3 py-1 bg-[#b45ecf]/20 text-[#b45ecf] rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#b45ecf] rounded-full mr-2"></span>
              Best for: {bestFor}
            </div>
            <p className="text-white/70 leading-relaxed">{description}</p>
          </div>
          
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Strengths</h4>
            </div>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-3 w-3 text-green-400" />
                  </div>
                  <span className="text-white/80 text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Considerations */}
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-xl p-6 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-amber-500/30 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 text-sm font-bold">!</span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white">Considerations</h4>
            </div>
            <ul className="space-y-3">
              {considerations.map((consideration, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-amber-400 text-xs font-bold">•</span>
                  </div>
                  <span className="text-white/80 text-sm">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Tools Grid Section
const ToolsGridSection = () => (
  <motion.section 
    variants={containerVariants}
    className="py-16 px-4 bg-gradient-to-b from-transparent to-[#0a0014]/50"
  >
    <div className="max-w-6xl mx-auto">
      <motion.div 
        variants={itemVariants}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">10 Cheapest Tools</span> Tested
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          We've analyzed pricing, features, and real-world performance to bring you this comprehensive list of 
          the most affordable cold email software for 2026.
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Tool 1: 360Airo */}
        <ToolCard
          rank={1}
          name="360Airo"
          tagline="All-in-one outreach platform"
          bestFor="Startups and agencies that want an all-in-one outreach stack without stacking tools"
          description="360Airo is positioned as one of the cheapest cold email software options that doesn't sacrifice infrastructure. It combines email campaigns, LinkedIn outreach, email warmup, free email verification, analytics, and a unified inbox in one platform."
          strengths={[
            "Built-in free email verification",
            "Native email warmup included",
            "Email + LinkedIn campaigns",
            "Unified inbox and analytics",
            "Scales without adding multiple tools"
          ]}
          considerations={[
            "Newer platform compared to some established tools",
            "Best for teams wanting all-in-one solution"
          ]}
          badge="Editor's Choice"
          badgeColor="bg-[#b45ecf]"
        />

        {/* Tool 2: Instantly */}
        <ToolCard
          rank={2}
          name="Instantly"
          tagline="High-volume sending specialist"
          bestFor="High-volume cold email senders focused on scale"
          description="Instantly is popular among agencies running large outbound volumes. Pricing is relatively affordable compared to enterprise platforms, though add-ons can increase costs over time."
          strengths={[
            "Optimized for high-volume sending",
            "Competitive agency pricing",
            "Strong deliverability features",
            "Established platform reputation"
          ]}
          considerations={[
            "Add-ons can increase total cost",
            "Often requires additional tools",
            "May be complex for beginners"
          ]}
        />

        {/* Tool 3: SmartReach */}
        <ToolCard
          rank={3}
          name="SmartReach"
          tagline="Structured campaign expert"
          bestFor="Teams wanting structured campaigns with moderate automation"
          description="SmartReach offers a balance between price and features. It's not the cheapest option on this list, but it's still competitive for teams that want a stable, mid-range cold email platform."
          strengths={[
            "Excellent campaign structure",
            "Reliable and stable platform",
            "Good automation features",
            "Strong team collaboration"
          ]}
          considerations={[
            "Pricing scales quickly for agencies",
            "Not the absolute cheapest option",
            "Limited advanced AI features"
          ]}
        />

        {/* Tool 4: Mailmeteor */}
        <ToolCard
          rank={4}
          name="Mailmeteor"
          tagline="Gmail-native simplicity"
          bestFor="Gmail-based outreach on a tight budget"
          description="Mailmeteor works directly inside Gmail and Google Sheets. It's one of the more affordable options for founders testing outbound for the first time."
          strengths={[
            "Very affordable pricing",
            "Seamless Gmail integration",
            "Easy to learn and use",
            "Perfect for first-time testing"
          ]}
          considerations={[
            "Lacks advanced deliverability tools",
            "Limited scalability",
            "Basic reporting features"
          ]}
        />

        {/* Tool 5: GMass */}
        <ToolCard
          rank={5}
          name="GMass"
          tagline="Classic Gmail extension"
          bestFor="Simple Gmail campaigns without complexity"
          description="GMass is a long-standing Gmail extension used for basic cold email campaigns. Pricing is low, making it attractive as a cheapest cold email software entry point."
          strengths={[
            "Extremely low pricing",
            "Simple Gmail integration",
            "Long-standing reputation",
            "Good for basic campaigns"
          ]}
          considerations={[
            "Limited reporting capabilities",
            "Poor inbox management",
            "Not scalable for long-term growth",
            "Basic feature set only"
          ]}
        />

        {/* Tool 6: Lemlist */}
        <ToolCard
          rank={6}
          name="Lemlist"
          tagline="Personalization powerhouse"
          bestFor="Personalization-heavy campaigns"
          description="Lemlist focuses heavily on creative personalization (images, dynamic fields, videos). While not the cheapest tool outright, it remains cost-effective for teams prioritizing highly customized outreach."
          strengths={[
            "Best-in-class personalization",
            "Creative campaign options",
            "Excellent customization features",
            "Strong for creative outreach"
          ]}
          considerations={[
            "Not the cheapest option",
            "Often requires additional tools",
            "Can be complex to set up properly"
          ]}
        />

        {/* Tool 7: Woodpecker */}
        <ToolCard
          rank={7}
          name="Woodpecker"
          tagline="Simple follow-up automation"
          bestFor="Simple follow-up automation"
          description="Woodpecker is straightforward and reasonably priced for small teams. It handles core sequencing well but often requires integrations for deeper analytics and inbox workflows."
          strengths={[
            "Simple and intuitive interface",
            "Excellent for small teams",
            "Reliable sequencing engine",
            "Reasonable pricing"
          ]}
          considerations={[
            "Requires integrations for analytics",
            "Limited native reporting",
            "Basic functionality set"
          ]}
        />

        {/* Tool 8: Mailshake */}
        <ToolCard
          rank={8}
          name="Mailshake"
          tagline="Reliable campaign structure"
          bestFor="Sales teams that want structure without heavy customization"
          description="Mailshake sits in the mid-price range but remains accessible compared to enterprise tools. It's often used by agencies that value reliability over experimentation."
          strengths={[
            "Excellent campaign structure",
            "Agency-friendly features",
            "Reliable performance",
            "Good integration options"
          ]}
          considerations={[
            "Costs rise with features/seats",
            "Limited customization options",
            "Mid-range pricing tier"
          ]}
        />

        {/* Tool 9: Yesware */}
        <ToolCard
          rank={9}
          name="Yesware"
          tagline="Email tracking specialist"
          bestFor="Sales teams already using Gmail or Outlook heavily"
          description="Yesware blends email tracking with basic sequencing. While not a pure cold email tool, it's sometimes used as a cheaper alternative for outbound when budgets are tight."
          strengths={[
            "Excellent email tracking",
            "Seamless Gmail/Outlook integration",
            "Affordable basic plans",
            "Good for sales teams"
          ]}
          considerations={[
            "Not a dedicated cold email tool",
            "Limited for pure cold outreach",
            "Better suited for warm outreach"
          ]}
        />

        {/* Tool 10: Snov.io */}
        <ToolCard
          rank={10}
          name="Snov.io"
          tagline="All-in-one prospecting"
          bestFor="All-in-one prospecting and outreach on a budget"
          description="Snov.io combines lead sourcing, verification, and outreach. It's often considered among the cheapest cold email software options for startups that want prospecting and sending in one place."
          strengths={[
            "Combines prospecting + outreach",
            "All-in-one affordable solution",
            "Great for early-stage startups",
            "Budget-friendly pricing"
          ]}
          considerations={[
            "Basic deliverability features",
            "Limited advanced capabilities",
            "Teams may outgrow quickly"
          ]}
        />
      </div>
    </div>
  </motion.section>
);

// Why 360Airo Section with Modern Design
const Why360AiroSection = () => (
  <motion.section 
    variants={itemVariants}
    className="py-16 px-4 relative overflow-hidden"
  >
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/30 via-transparent to-[#0a0014]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#b45ecf]/10 rounded-full blur-3xl"></div>
    
    <div className="relative max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why We Built <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">360Airo</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          Most cold email tools didn't fail because they were expensive. They failed because they forced teams 
          to duct-tape multiple tools together just to run one campaign properly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Problem Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-red-400 text-xl">✗</span>
            </div>
            The Old Way: Tool Sprawl
          </h3>
          <p className="text-white/70 mb-6">
            We saw startups paying for 5+ different tools just to run cold outreach:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "📧", label: "Email Sending", cost: "$49/mo" },
              { icon: "🔥", label: "Inbox Warmup", cost: "$29/mo" },
              { icon: "✅", label: "Verification", cost: "$19/mo" },
              { icon: "📊", label: "Analytics", cost: "$39/mo" },
              { icon: "💬", label: "Reply Mgmt", cost: "$29/mo" },
              { icon: "🧩", label: "Integrations", cost: "$99/mo" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-xl text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm text-white/80 mb-1">{item.label}</div>
                <div className="text-xs text-red-400">{item.cost}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="text-xl font-bold text-white mb-1">Total: $264+/month</div>
            <div className="text-sm text-red-300">Plus time managing 5+ different platforms</div>
          </div>
        </motion.div>

        {/* Solution Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#b45ecf]/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Check className="h-5 w-5 text-green-400" />
            </div>
            The 360Airo Way: Unified Platform
          </h3>
          <p className="text-white/70 mb-6">
            One platform that handles everything your outreach needs:
          </p>
          
          <div className="space-y-4 mb-6">
            {[
              "Built-in email verification (free)",
              "Native inbox warmup",
              "Email & LinkedIn campaigns",
              "Unified inbox for all replies",
              "Advanced analytics dashboard",
              "Team collaboration features"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-green-400" />
                </div>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <div className="text-xl font-bold text-white mb-1">Starts at $49/month</div>
            <div className="text-sm text-green-300">Everything included. No hidden costs.</div>
          </div>
        </motion.div>
      </div>

      {/* Key Differentiators */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Shield className="h-6 w-6" />,
            title: "Deliverability First",
            description: "Built-in warmup and verification prevent spam folder placement"
          },
          {
            icon: <Zap className="h-6 w-6" />,
            title: "All-in-One",
            description: "Email, LinkedIn, analytics, and reply management in one place"
          },
          {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Predictable Pricing",
            description: "No surprise fees or expensive add-ons required"
          },
          {
            icon: <TrendingUp className="h-6 w-6" />,
            title: "Growth Focused",
            description: "Scales with your team without platform switching"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#b45ecf]/30 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-lg flex items-center justify-center text-white mb-4">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Cost Analysis Section with Interactive Elements
const CostAnalysisSection = () => (
  <motion.section 
    variants={itemVariants}
    className="py-16 px-4 bg-gradient-to-b from-transparent to-[#19001d]"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Real Cost</span> vs Sticker Price
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto">
          Many teams focus only on the monthly subscription. In practice, real cost comes from hidden expenses 
          and workflow inefficiencies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Hidden Costs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-red-400 text-xl">💸</span>
            </div>
            Hidden Costs That Add Up
          </h3>
          
          <div className="space-y-4">
            {[
              {
                title: "Additional Tool Subscriptions",
                description: "Verification, warmup, analytics tools",
                cost: "+$50-100/mo",
                color: "bg-red-500/20"
              },
              {
                title: "Time Switching Platforms",
                description: "15+ hours monthly managing multiple tools",
                cost: "+$300/mo",
                color: "bg-red-500/20"
              },
              {
                title: "Deliverability Damage",
                description: "Poor sender reputation from missing safeguards",
                cost: "Priceless",
                color: "bg-red-500/20"
              },
              {
                title: "Missed Opportunities",
                description: "Lost replies from fragmented workflows",
                cost: "$1000+/mo",
                color: "bg-red-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.color} p-4 rounded-xl border border-red-500/30`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <span className="text-red-300 font-bold">{item.cost}</span>
                </div>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Free Tools Reality */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Are <span className="text-[#b45ecf]">Free Tools</span> Actually Free?
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Good For Testing
              </h4>
              <div className="space-y-2 pl-7">
                <p className="text-white/70 text-sm">• Learning cold email basics</p>
                <p className="text-white/70 text-sm">• Testing initial assumptions</p>
                <p className="text-white/70 text-sm">• Very low volume sending</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                What They Lack
              </h4>
              <div className="space-y-2 pl-7">
                <p className="text-white/70 text-sm">• Deliverability protection</p>
                <p className="text-white/70 text-sm">• Inbox placement visibility</p>
                <p className="text-white/70 text-sm">• Scalable workflows</p>
                <p className="text-white/70 text-sm">• Team collaboration</p>
                <p className="text-white/70 text-sm">• Advanced analytics</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <p className="text-amber-300 text-sm italic">
              Most teams outgrow free tools within 30-60 days once results start to matter.
            </p>
          </div>
        </div>
      </div>

      {/* Selection Guide */}
      <div className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/20 rounded-2xl p-8 border border-[#b45ecf]/20">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          How to Choose the <span className="text-[#b45ecf]">Right Tool</span> for Your Team
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              question: "Does it protect deliverability?",
              answer: "Look for built-in warmup, verification, and spam prevention features"
            },
            {
              number: "02",
              question: "Will I need add-ons later?",
              answer: "Calculate the total cost including necessary additional tools"
            },
            {
              number: "03",
              question: "Can it grow with my volume?",
              answer: "Ensure pricing scales reasonably as you send more emails"
            },
            {
              number: "04",
              question: "Does it support my team?",
              answer: "Check for multi-client management and collaboration features"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#b45ecf] mb-3">{item.number}</div>
              <h4 className="text-lg font-bold text-white mb-3">{item.question}</h4>
              <p className="text-white/60 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/80 text-lg">
            The cheapest cold email software is the one that lets you grow without constantly switching platforms.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

// Conclusion Section with Call to Action
const ConclusionSection = () => (
  <motion.section 
    variants={itemVariants}
    className="py-16 px-4 relative overflow-hidden"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/30 via-[#19001d]/50 to-[#0a0014]"></div>
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b45ecf]/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#d67bff]/10 rounded-full blur-3xl"></div>
    
    <div className="relative max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Future is <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Efficient</span>, Not Just Cheap
        </h2>
        <p className="text-white/70 text-lg">
          In 2026, affordable cold email software is less about "cheap" and more about efficient.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: "🛡️",
            title: "Reduce Risk",
            points: ["Built-in deliverability", "Automatic verification", "Spam prevention"]
          },
          {
            icon: "🔗",
            title: "Minimize Dependencies",
            points: ["Fewer external tools", "Unified workflows", "Centralized data"]
          },
          {
            icon: "🌱",
            title: "Support Growth",
            points: ["Scalable pricing", "Team features", "Client management"]
          },
          {
            icon: "💰",
            title: "Predictable Costs",
            points: ["No hidden fees", "All-inclusive pricing", "Budget friendly"]
          }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <ul className="space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2 text-white/70">
                  <div className="w-2 h-2 bg-[#b45ecf] rounded-full"></div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-[#480056]/40 to-[#19001d]/60 rounded-2xl p-8 border-2 border-[#b45ecf]/30 backdrop-blur-sm">
        <div className="text-center">
          <p className="text-white text-lg mb-6">
            Whether you start with Gmail-based tools or move directly to a platform like 360Airo, 
            the goal is the same: <span className="text-[#b45ecf] font-semibold">outbound that scales without burning budget or domains.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-xl font-semibold text-lg shadow-lg shadow-[#b45ecf]/25 hover:shadow-[#b45ecf]/40 transition-all">
              Start with 360Airo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-6 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all">
              Compare All Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function CheapestColdEmailSoftwareGuide() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://360airo.com/blogs/cheapest-cold-email-software" />
        
        <Navbar />

        <main className="text-white">
          <HeroSection />
          <IntroductionModule />
          <ToolsGridSection />
          <Why360AiroSection />
          <CostAnalysisSection />
          <ConclusionSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
