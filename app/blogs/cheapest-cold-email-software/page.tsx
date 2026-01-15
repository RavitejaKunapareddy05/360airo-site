'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { 
  Rocket, TrendingUp, Zap, Shield, DollarSign, Users, 
  CheckCircle, AlertCircle, Sparkles, Target, BarChart3,
  ChevronRight, ArrowRight, Star, Crown, Award,
  Mail, Search, Filter, Grid, List, Eye, Clock, Calendar,
  ExternalLink, Maximize2, Minimize2, Play, Pause, Volume2
} from 'lucide-react';

// Custom animated background component
const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated gradient orbs */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 300 + 100,
          height: Math.random() * 300 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `radial-gradient(circle, rgba(${i % 2 ? '180, 94, 207' : '72, 0, 86'}, ${Math.random() * 0.2 + 0.05}) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
    
    {/* Grid lines */}
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(180, 94, 207, 0.03) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(180, 94, 207, 0.03) 1px, transparent 1px)`,
      backgroundSize: '50px 50px',
    }} />
    
    {/* Floating particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-[#b45ecf] rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
        animate={{
          y: [0, -100],
          x: [0, Math.random() * 40 - 20],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

// Interactive tool card with 3D effect
const InteractiveToolCard = ({ 
  rank, 
  name, 
  category,
  price,
  description,
  features,
  limitations,
  isExpanded,
  onToggle
}: {
  rank: number;
  name: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  limitations: string[];
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      layout
      className={`relative cursor-pointer group perspective-1000 ${
        isExpanded ? 'z-10' : 'z-0'
      }`}
      whileHover={{ scale: 1.02 }}
      onClick={onToggle}
    >
      {/* Card background with gradient */}
      <motion.div 
        className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
          isExpanded 
            ? 'bg-gradient-to-br from-[#b45ecf]/20 via-[#480056]/30 to-[#19001d]/50' 
            : 'bg-gradient-to-br from-white/5 to-white/10'
        }`}
        animate={{
          rotateY: isExpanded ? 5 : 0,
          rotateX: isExpanded ? -2 : 0,
        }}
      />
      
      {/* Card content */}
      <div className={`relative backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 ${
        isExpanded 
          ? 'border-[#b45ecf]/40 shadow-2xl shadow-[#b45ecf]/20' 
          : 'border-white/10 hover:border-[#b45ecf]/30'
      }`}>
        {/* Rank badge with glow */}
        <div className="absolute -top-4 -left-4 z-20">
          <motion.div 
            className="relative"
            animate={{
              scale: isExpanded ? 1.1 : 1,
            }}
          >
            <div className="relative w-16 h-16">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-2xl blur-md opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative w-16 h-16 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                {rank}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Collapsed view */}
        <AnimatePresence>
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                      {category}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      {price}/mo
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-white/40 group-hover:text-[#b45ecf] transition-colors" />
              </div>
              
              <p className="text-white/60 line-clamp-2">{description}</p>
              
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-white/50">
                    {feature}
                  </span>
                ))}
                {features.length > 2 && (
                  <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-white/50">
                    +{features.length - 2} more
                  </span>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#b45ecf]/20 text-[#b45ecf] rounded-full text-sm font-medium">
                      #{rank} Ranked
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      {price}/mo
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
                  <p className="text-white/70">{description}</p>
                </div>
                <Minimize2 className="h-6 w-6 text-white/40 hover:text-[#b45ecf] cursor-pointer" onClick={onToggle} />
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#b45ecf]" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-400" />
                    Considerations
                  </h4>
                  <ul className="space-y-3">
                    {limitations.map((limitation, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full border border-amber-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-amber-400 text-xs">i</span>
                        </div>
                        <span className="text-white/80">{limitation}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#b45ecf]/20 transition-all">
                  Try {name}
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all">
                  Compare
                </button>
                <button className="px-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all">
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Morphing header with gradient text
const MorphingHeader = () => {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Affordable", "Powerful", "Scalable", "Smart", "Efficient"];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <FloatingBackground />
      
      {/* Center content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Animated title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="block text-white">Cold Email</span>
            <div className="relative h-24 md:h-32 lg:h-40">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord}
                  initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                  className="absolute inset-0 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#b45ecf] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setActiveWord((prev) => (prev + 1) % words.length);
                    }, 2000);
                  }}
                >
                  {words[activeWord]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="block text-white">for 2026</span>
          </h1>
        </div>

        {/* Subtitle with animated underline */}
        <motion.div 
          className="relative inline-block mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-white/80 mb-4">
            The definitive guide to budget-friendly outreach tools
          </p>
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b45ecf] to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              x: [-100, 100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Interactive stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          {[
            { value: "10", label: "Tools Tested", icon: <Target className="h-6 w-6" /> },
            { value: "$10-99", label: "Price Range", icon: <DollarSign className="h-6 w-6" /> },
            { value: "92%", label: "Avg. Success", icon: <TrendingUp className="h-6 w-6" /> },
            { value: "2026", label: "Latest Data", icon: <Calendar className="h-6 w-6" /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7 + idx * 0.1, type: "spring" }}
              className="relative group"
            >
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/0 via-[#b45ecf]/10 to-[#b45ecf]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Parallax content sections
const ParallaxSection = ({ children, speed = 0.5 }: { children: ReactNode; speed?: number }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Price comparison visualization
const PriceVisualization = () => {
  const tools = [
    { name: "360Airo", price: 49, features: 9, color: "#b45ecf" },
    { name: "Instantly", price: 37, features: 7, color: "#8b5cf6" },
    { name: "SmartReach", price: 65, features: 8, color: "#3b82f6" },
    { name: "Mailmeteor", price: 19, features: 5, color: "#10b981" },
    { name: "GMass", price: 13, features: 4, color: "#f59e0b" },
    { name: "Lemlist", price: 59, features: 8, color: "#ec4899" },
    { name: "Woodpecker", price: 44, features: 6, color: "#06b6d4" },
    { name: "Mailshake", price: 58, features: 7, color: "#8b5cf6" },
    { name: "Yesware", price: 35, features: 5, color: "#6366f1" },
    { name: "Snov.io", price: 39, features: 6, color: "#ef4444" },
  ];

  const maxPrice = Math.max(...tools.map(t => t.price));

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Price vs. <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Value</span> Analysis
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how each tool compares in terms of monthly cost versus included features
          </p>
        </div>

        <div className="relative h-[400px]">
          {/* Grid lines */}
          <div className="absolute inset-0 flex items-end">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-1 h-px bg-white/10" />
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ height: 0 }}
                whileInView={{ height: `${(tool.price / maxPrice) * 80}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 1, ease: "backOut" }}
                className="relative flex-1 mx-1"
              >
                {/* Bar */}
                <div 
                  className="relative rounded-t-lg w-full group cursor-pointer"
                  style={{ 
                    height: '100%',
                    background: `linear-gradient(to top, ${tool.color}40, ${tool.color}80)`,
                  }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900 border border-white/10 rounded-lg p-3 whitespace-nowrap">
                      <div className="font-bold text-white">{tool.name}</div>
                      <div className="text-sm text-white/60">${tool.price}/mo</div>
                      <div className="text-sm text-white/60">{tool.features} features</div>
                    </div>
                  </div>

                  {/* Feature dots */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
                    {[...Array(tool.features)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-white/60"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
                  <div className="text-xs text-white/60 truncate">{tool.name}</div>
                  <div className="text-sm font-bold text-white mt-1">${tool.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive feature comparison table
const FeatureComparison = () => {
  const features = [
    { name: "Email Warmup", tools: [true, true, false, false, false, true, false, false, false, false] },
    { name: "Free Verification", tools: [true, false, false, false, false, false, false, false, false, false] },
    { name: "LinkedIn Integration", tools: [true, false, false, false, false, false, false, false, false, false] },
    { name: "Unified Inbox", tools: [true, false, false, false, false, false, false, false, false, false] },
    { name: "Team Collaboration", tools: [true, true, true, false, false, true, true, true, true, false] },
    { name: "Advanced Analytics", tools: [true, true, true, false, false, true, false, true, true, false] },
  ];

  const toolNames = [
    "360Airo", "Instantly", "SmartReach", "Mailmeteor", "GMass", 
    "Lemlist", "Woodpecker", "Mailshake", "Yesware", "Snov.io"
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Feature <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Comparison</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See which tools offer the essential features for successful cold outreach
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-white/60 font-medium">Feature</th>
                {toolNames.map((name, idx) => (
                  <th key={idx} className="text-center py-4 px-6">
                    <div className="inline-flex flex-col items-center">
                      <div className="text-sm font-medium text-white">{name}</div>
                      {idx === 0 && (
                        <div className="mt-1 px-2 py-0.5 bg-[#b45ecf]/20 text-[#b45ecf] text-xs rounded-full">
                          All-in-One
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIdx) => (
                <tr key={rowIdx} className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/80 font-medium">{feature.name}</td>
                  {feature.tools.map((hasFeature, colIdx) => (
                    <td key={colIdx} className="text-center py-4 px-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: rowIdx * 0.1 + colIdx * 0.05 }}
                        className="inline-flex items-center justify-center"
                      >
                        {hasFeature ? (
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        ) : (
                          <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center">
                            <span className="text-white/30 text-xs">—</span>
                          </div>
                        )}
                      </motion.div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main component
export default function UniqueBlogDesign() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toolsData = [
    {
      rank: 1,
      name: "360Airo",
      category: "All-in-One Platform",
      price: "$49",
      description: "Complete outreach platform with built-in verification, warmup, and LinkedIn integration.",
      features: [
        "Built-in email verification",
        "Native email warmup",
        "Email + LinkedIn campaigns",
        "Unified inbox management",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom domains",
        "24/7 support"
      ],
      limitations: [
        "Newer platform in market",
        "Best for teams wanting all-in-one"
      ]
    },
    {
      rank: 2,
      name: "Instantly",
      category: "High-Volume Specialist",
      price: "$37",
      description: "Optimized for agencies running large outbound volumes with competitive pricing.",
      features: [
        "High-volume sending",
        "Agency-friendly pricing",
        "Good deliverability",
        "Campaign analytics",
        "Team management"
      ],
      limitations: [
        "Add-ons increase cost",
        "Requires additional tools",
        "Complex for beginners"
      ]
    },
    // Add other tools here...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#0a0014] to-[#19001d] text-white overflow-hidden">
      <Navbar />
      
      <MorphingHeader />
      
      <main className="relative">
        <FloatingBackground />
        
        {/* Content sections */}
        <ParallaxSection speed={0.3}>
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              {/* View mode toggle */}
              <div className="flex justify-end mb-8 gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-[#b45ecf] text-white' 
                      : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all ${
                    viewMode === 'list' 
                      ? 'bg-[#b45ecf] text-white' 
                      : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Tools grid/list */}
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 gap-6' 
                  : 'space-y-6'
              }`}>
                {toolsData.map((tool, index) => (
                  <InteractiveToolCard
                    key={tool.rank}
                    {...tool}
                    isExpanded={expandedCard === index}
                    onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        <PriceVisualization />
        <FeatureComparison />

        {/* CTA Section */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Outreach?
                </h3>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of startups and agencies using 360Airo to scale their cold outreach
                  without breaking the bank.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#b45ecf]/30 transition-all">
                    Start Free Trial
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
