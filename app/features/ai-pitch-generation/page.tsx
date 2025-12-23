'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Zap, 
  PenTool, 
  Target, 
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  CheckCircle2,
  Wand2,
  FileText,
  MessageSquare,
  Lightbulb,
  Settings,
  RefreshCw,
  Copy,
  ThumbsUp,
  Star,
  Award,
  Clock,
  Layers,
  Send,
  Edit3,
  Type,
  BookOpen,
  Mic,
  Volume2,
  Play,
  Pause,
  Mail,
  MessageCircle,
  Workflow,
  Cpu,
  Crown,
  Shield,
  Calendar,
  GitBranch,
  Phone,
  SparklesIcon
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
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(168,85,247,0.2) 25%, transparent 55%)',
          borderRadius: '50%',
          opacity: isHovered && !isMobile ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Automated AI Interface Component - Mobile optimized */
const AutomatedAIInterface = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [typedGoal, setTypedGoal] = useState('');
  const [typedAudience, setTypedAudience] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentStatusText, setCurrentStatusText] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goalText = "Generate personalized cold outreach emails for SaaS prospects";
  const audienceText = "Marketing directors at mid-size technology companies";
  
  const statusSteps = [
    "Initializing AI content generator...",
    "Analyzing target audience data...",
    "Crafting personalized email templates...",
    "Optimizing for deliverability and engagement...",
    "Generating complete email pitch...",
    "Content generation complete!"
  ];

  const fullEmailPitch = `Subject: Quick question about [Company Name]'s marketing automation strategy

Hi [First Name],

I hope this email finds you well. I came across [Company Name]'s recent product launch announcement and was genuinely impressed by your innovative approach to customer acquisition. Your team's 40% growth in Q3 caught my attention, particularly given the challenging market conditions.

I'm reaching out because I work with marketing directors at mid-size technology companies who are facing similar challenges around scaling personalized outreach while maintaining quality engagement rates.

We've helped companies like [Client Company A] and [Client Company B] increase their email engagement by 85% and reduce their content creation time by 90% using our AI-powered email generation platform, 360Airo.

Here's what makes it particularly relevant for [Company Name]:

• Smart Personalization: Our AI analyzes recipient behavior, company data, and market trends to craft messages that resonate with each individual prospect

• Scale Without Sacrifice: Generate hundreds of personalized emails in minutes while maintaining your brand voice and messaging consistency  

• Deliverability Optimization: Built-in warmup tools and spam avoidance ensure your emails actually reach the inbox

I'd love to show you a quick 5-minute demo of how this could specifically work for [Company Name]'s upcoming expansion into new markets.

Would you be open to a brief call this Thursday or Friday? I promise to keep it focused and valuable.

Best regards,
[Your Name]
Senior Growth Consultant
360Airo

P.S. I noticed your recent LinkedIn post about the challenges of maintaining personalization at scale - I think you'd find our approach particularly interesting given those insights.`;

  // Auto-typing effect for inputs - Mobile optimized
  useEffect(() => {
    const timer = setTimeout(() => {
      if (demoStep === 0) {
        if (typedGoal.length < goalText.length) {
          setTypedGoal(goalText.slice(0, typedGoal.length + 1));
        } else {
          setDemoStep(1);
        }
      } else if (demoStep === 1) {
        if (typedAudience.length < audienceText.length) {
          setTypedAudience(audienceText.slice(0, typedAudience.length + 1));
        } else {
          setDemoStep(2);
        }
      }
    }, isMobile ? 25 : 35);

    return () => clearTimeout(timer);
  }, [demoStep, typedGoal, typedAudience, goalText, audienceText, isMobile]);

  // Progress and status animation - Mobile optimized
  useEffect(() => {
    if (demoStep >= 2) {
      const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setShowEmail(true);
            return 100;
          }
          return prev + (isMobile ? 3 : 2);
        });
      }, isMobile ? 40 : 50);

      const statusTimer = setInterval(() => {
        const stepIndex = Math.floor(progress / 20);
        if (stepIndex < statusSteps.length) {
          setCurrentStatusText(statusSteps[stepIndex]);
        }
      }, isMobile ? 800 : 1000);

      return () => {
        clearInterval(progressTimer);
        clearInterval(statusTimer);
      };
    }
  }, [demoStep, progress, statusSteps, isMobile]);

  // Email typing animation - Mobile optimized
  useEffect(() => {
    if (showEmail && progress >= 100) {
      const typingTimer = setInterval(() => {
        setTypedEmail(prev => {
          if (prev.length < fullEmailPitch.length) {
            return fullEmailPitch.slice(0, prev.length + 1);
          } else {
            setIsCompleted(true);
            return prev;
          }
        });
      }, isMobile ? 10 : 15);

      return () => clearInterval(typingTimer);
    }
  }, [showEmail, progress, fullEmailPitch, isMobile]);

  // CONTINUOUS LOOP - Reset automatically after completion
  useEffect(() => {
    if (isCompleted) {
      const resetTimer = setTimeout(() => {
        setDemoStep(0);
        setTypedGoal('');
        setTypedAudience('');
        setProgress(0);
        setCurrentStatusText('');
        setShowEmail(false);
        setTypedEmail('');
        setIsCompleted(false);
      }, isMobile ? 1500 : 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [isCompleted, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <GlowCard className="cursor-pointer rounded-xl lg:rounded-2xl">
        {/* EXTENDED AI INTERFACE - Mobile optimized */}
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-xl lg:rounded-2xl border border-white/20 p-4 lg:p-8 shadow-2xl min-h-[800px] lg:min-h-[1000px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: isMobile ? 15 : 20, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-lg"
              >
                <Brain className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white">AI Content Generator</h3>
                <p className="text-xs lg:text-sm text-white/60">Powered by 360Airo</p>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg border border-green-500/30"
            >
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full" 
              />
              <span className="text-xs lg:text-sm font-medium text-green-300">Active</span>
            </motion.div>
          </div>

          {/* Auto-typing Input Section - Mobile optimized */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div>
              <label className="text-xs lg:text-sm font-medium text-white/80 mb-2 lg:mb-3 block">Campaign Goal</label>
              <div className="bg-white/5 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10 min-h-[45px] lg:min-h-[50px] flex items-center">
                <div className="text-white/90 relative text-sm lg:text-base">
                  {typedGoal}
                  {demoStep === 0 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 text-[#A855F7]"
                    >
                      |
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-xs lg:text-sm font-medium text-white/80 mb-2 lg:mb-3 block">Target Audience</label>
              <div className="bg-white/5 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/10 min-h-[45px] lg:min-h-[50px] flex items-center">
                <div className="text-white/90 relative text-sm lg:text-base">
                  {typedAudience}
                  {demoStep === 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 text-[#A855F7]"
                    >
                      |
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Generation Status - Mobile optimized */}
          {demoStep >= 2 && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#A855F7]/20 rounded-lg lg:rounded-xl p-4 lg:p-6 mb-6 lg:mb-8 border border-[#8B5CF6]/20"
            >
              <div className="flex items-center space-x-3 lg:space-x-4 mb-3 lg:mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                >
                  <Wand2 className="h-5 w-5 lg:h-6 lg:w-6 text-[#A855F7]" />
                </motion.div>
                <div className="flex-1">
                  <motion.div 
                    key={currentStatusText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-base lg:text-lg font-semibold text-white"
                  >
                    {currentStatusText}
                  </motion.div>
                  <div className="text-xs lg:text-sm text-white/60">
                    Progress: {Math.round(progress)}%
                  </div>
                </div>
              </div>
              
              {/* Animated Progress Bar - Mobile optimized */}
              <div className="w-full h-2 lg:h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Generated Complete Email Pitch - Mobile optimized */}
          {showEmail && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 lg:space-y-6 flex-1"
            >
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h4 className="text-base lg:text-lg font-semibold text-white">Generated Email Pitch</h4>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="text-xs lg:text-sm text-[#A855F7] font-medium bg-[#A855F7]/10 px-2 py-1 lg:px-3 lg:py-1 rounded-full">
                    Cold Outreach
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400" />
                    <span className="text-xs lg:text-sm text-white/60">94/100</span>
                  </div>
                </div>
              </div>

              {/* Full Email Content - Mobile optimized */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-white/10 hover:border-[#8B5CF6]/30 transition-all duration-300 group"
              >
                <div className="space-y-4 lg:space-y-6">
                  {/* Email Content with Typing Effect - Mobile optimized */}
                  <div className="text-white/90 leading-relaxed whitespace-pre-wrap font-mono text-xs lg:text-sm max-h-[400px] lg:max-h-none overflow-y-auto">
                    {typedEmail}
                    {typedEmail.length < fullEmailPitch.length && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-[#A855F7]"
                      >
                        |
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Action Buttons - Mobile optimized */}
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 lg:pt-6 border-t border-white/10 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <motion.button
                        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 lg:space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-lg text-[#A855F7] text-xs lg:text-sm font-medium hover:bg-[#8B5CF6]/30 transition-colors"
                      >
                        <Copy className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span>Copy Email</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 lg:space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 text-xs lg:text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        <Edit3 className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span>Edit</span>
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <motion.button
                        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 lg:p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4 lg:h-5 lg:w-5 text-white/50 hover:text-white/70 transition-colors" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 lg:space-x-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs lg:text-sm font-medium hover:bg-green-500/30 transition-colors"
                      >
                        <Send className="h-3 w-3 lg:h-4 lg:w-4" />
                        <span>Send</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* AI Analysis - Mobile optimized */}
              {isCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mt-4 lg:mt-6 p-4 lg:p-6 bg-gradient-to-r from-green-500/10 to-[#8B5CF6]/10 border border-green-500/20 rounded-lg lg:rounded-xl"
                >
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5" />
                      <span className="text-sm lg:text-base font-semibold">AI Analysis Complete</span>
                    </div>
                    <div className="text-xs lg:text-sm text-white/60">Confidence: 94%</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 lg:gap-6 text-center">
                    <div className="space-y-1 lg:space-y-2">
                      <div className="text-xs lg:text-sm text-white/60">Personalization</div>
                      <div className="text-sm lg:text-lg font-bold text-green-400">Excellent</div>
                      <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className="h-full bg-green-400 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <div className="text-xs lg:text-sm text-white/60">Deliverability</div>
                      <div className="text-sm lg:text-lg font-bold text-[#A855F7]">High</div>
                      <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '88%' }}
                          transition={{ delay: 0.7, duration: 0.8 }}
                          className="h-full bg-[#A855F7] rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 lg:space-y-2">
                      <div className="text-xs lg:text-sm text-white/60">Engagement</div>
                      <div className="text-sm lg:text-lg font-bold text-yellow-400">Strong</div>
                      <div className="w-full h-1.5 lg:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ delay: 0.9, duration: 0.8 }}
                          className="h-full bg-yellow-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-white/10 text-center">
                    <p className="text-xs lg:text-sm text-white/70">
                      Ready to deploy in your email campaigns
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </GlowCard>
    </motion.div>
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
      staggerChildren: 0.08, 
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

const aiFeatures = [
  {
    icon: Brain,
    title: 'Smart Personalization',
    description: 'AI analyzes your audience, campaign goals, and past performance to produce tailored messages that resonate with each recipient.',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    metric: '3x',
    label: 'Better Engagement',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Generate multiple email variations in seconds for A/B testing and campaign optimization without manual writing.',
    color: 'from-[#7C3AED] to-[#A855F7]',
    metric: '90%',
    label: 'Time Saved',
  },
  {
    icon: Target,
    title: 'Audience Optimization',
    description: 'Automatically adjust tone, style, and messaging to suit different audiences, industries, or outreach goals.',
    color: 'from-[#A855F7] to-[#C084FC]',
    metric: '85%',
    label: 'Open Rate Boost',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Analytics-backed recommendations to refine subject lines, improve readability, and enhance email deliverability.',
    color: 'from-[#C084FC] to-[#8B5CF6]',
    metric: '2x',
    label: 'Higher ROI',
  },
];

const contentTypes = [
  {
    icon: MessageSquare,
    title: 'Cold Email Sequences',
    description: 'Multi-touch campaigns that build relationships and drive responses',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
  },
  {
    icon: Eye,
    title: 'Subject Lines',
    description: 'Compelling headlines that boost open rates and avoid spam filters',
    color: 'from-[#7C3AED] to-[#A855F7]',
  },
  {
    icon: Users,
    title: 'Follow-up Messages',
    description: 'Persistent but polite follow-ups that convert prospects',
    color: 'from-[#A855F7] to-[#C084FC]',
  },
  {
    icon: TrendingUp,
    title: 'Drip Campaigns',
    description: 'Automated sequences that nurture leads over time',
    color: 'from-[#C084FC] to-[#8B5CF6]',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Produce high-quality content in minutes',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
  },
  {
    icon: TrendingUp,
    title: 'Improve Engagement',
    description: 'Personalized, data-driven messaging increases opens and replies',
    color: 'from-[#7C3AED] to-[#A855F7]',
  },
  {
    icon: Layers,
    title: 'Scale Effortlessly',
    description: 'Generate content for large campaigns without extra effort',
    color: 'from-[#A855F7] to-[#C084FC]',
  },
  {
    icon: Award,
    title: 'Maintain Consistency',
    description: 'AI adapts tone and style across sequences',
    color: 'from-[#C084FC] to-[#8B5CF6]',
  },
];

const stats = [
  { value: '10x', label: 'Faster Content Creation', icon: Zap },
  { value: '85%', label: 'Higher Open Rates', icon: Eye },
  { value: '90%', label: 'Time Savings', icon: Clock },
  { value: '3x', label: 'Better Engagement', icon: TrendingUp },
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
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6 lg:mb-8"
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
        className="h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-transparent mb-4 lg:mb-6"
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
      className="flex items-center justify-center mb-6 lg:mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#8B5CF6]/40 flex-1 max-w-8 lg:max-w-16" />
      <div className="mx-3 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
      <div className="h-px bg-gradient-to-r from-[#8B5CF6]/40 via-white/20 to-transparent flex-1 max-w-8 lg:max-w-16" />
    </motion.div>
  );
};

/* Button click handler */
const handleCTAClick = () => {
  window.open('https://app.360airo.com/', '_blank');
};

export default function AIContentGenerationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const generationSteps = [
    "Analyzing your audience and campaign goals...",
    "Crafting personalized email content...",
    "Optimizing for deliverability and engagement...",
    "Generating A/B test variations...",
    "Content ready for deployment!"
  ];

  const heroEmailPreviews = [
    {
      subject: "Partnership opportunity with [Company]",
      preview: "Hi [Name], I've been following your work in the AI space...",
      type: "Partnership",
      status: "generating",
      delay: 1.0
    },
    {
      subject: "Quick question about your marketing strategy",
      preview: "Hi [Name], I noticed your recent product launch...",
      type: "Cold Outreach", 
      status: "completed",
      delay: 1.3
    },
    {
      subject: "Following up on our LinkedIn conversation",
      preview: "Thanks for connecting! As mentioned, here's the case study...",
      type: "Follow-up",
      status: "completed", 
      delay: 1.6
    },
    {
      subject: "Exclusive invite: [Event Name]",
      preview: "Hi [Name], I'd love to invite you to our exclusive event...",
      type: "Event Invite",
      status: "pending",
      delay: 1.9
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % generationSteps.length);
    }, isMobile ? 2000 : 2500);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (currentStep === generationSteps.length - 1) {
      setIsGenerating(false);
    } else {
      setIsGenerating(true);
    }
  }, [currentStep]);

  return (
    <>
      <Head>
        <title>AI Email Generator — Write Better Emails in Seconds | 360Airo</title>
        <meta 
          name="description" 
          content="Craft clear, compelling, and high-performing emails instantly with 360Airo's AI email generator. Create polished, professional messages tailored to your prospects and goals." 
        />
        <meta 
          name="keywords" 
          content="AI email generator, email generator AI, best AI email generator, email writer AI, AI email writing, generate emails, email content generation, 360Airo AI" 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://360airo.com/features/ai-email-generator" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Email Generator — Write Better Emails in Seconds | 360Airo" />
        <meta property="og:description" content="Craft clear, compelling, and high-performing emails instantly with 360Airo's AI email generator. Create polished, professional messages tailored to your prospects and goals." />
        <meta property="og:url" content="https://360airo.com/features/ai-email-generator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-ai-email-generator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Email Generator — Write Better Emails in Seconds | 360Airo" />
        <meta name="twitter:description" content="Craft clear, compelling, and high-performing emails instantly with 360Airo's AI email generator." />
        <meta name="twitter:image" content="https://360airo.com/twitter-ai-email-generator.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "360Airo AI Email Generator",
              "description": "Craft clear, compelling, and high-performing emails instantly with 360Airo's AI email generator. Create polished, professional messages tailored to your prospects and goals.",
              "url": "https://360airo.com/features/ai-email-generator",
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
                "AI-powered email generation",
                "Personalized message creation",
                "Cold outreach optimization",
                "Follow-up automation",
                "LinkedIn message generation",
                "A/B testing variations",
                "Tone consistency",
                "Grammar and readability correction"
              ]
            })
          }}
        />
      </Head>

      {/* Hidden link for SEO */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/features/ai-email-generator">360Airo AI Email Generator</a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] overflow-x-hidden">
        <Navbar />

        {/* AI Email Generator Hero Section */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
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
                  x: [0, (isMobile ? 20 : 40) * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, (isMobile ? 15 : 24) * (i % 2 === 0 ? 1 : -1), 0],
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
                    ? 'rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#7C3AED]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 to-[#A855F7]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#A855F7]/20 to-[#C084FC]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#C084FC]/15 to-[#8B5CF6]/15'
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
              {/* LEFT CONTENT - AI Email Generator Introduction */}
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
                          '0 0 20px rgba(139,92,246,0.3)',
                          '0 0 40px rgba(168,85,247,0.4)',
                          '0 0 20px rgba(139,92,246,0.3)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/20 to-[#C084FC]/30 rounded-full blur-lg"
                    />
                    <span className="relative inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#8B5CF6]/50 text-white font-semibold text-xs lg:text-sm">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="mr-2 lg:mr-3"
                      >
                        <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-[#A855F7]" />
                      </motion.div>
                      <span>AI Email Generator — Write Better Emails in Seconds</span>
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
                      Craft Clear, Compelling,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="block transform-gpu"
                    >
                      and High-Performing
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent transform-gpu text-4xl sm:text-5xl lg:text-6xl"
                    >
                      Emails Instantly.
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                    className="h-1 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] rounded-full relative overflow-hidden max-w-xs lg:max-w-md"
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
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed font-light">
                    360Airo's AI email generator helps you create polished, professional messages tailored to your prospects, your campaigns, and your goals. Whether you're drafting cold outreach, follow-ups, LinkedIn messages, or nurture flows, it delivers ready-to-send copy that boosts engagement and saves hours of manual writing.
                  </p>
                  <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                    Build stronger outreach with messaging optimized for tone, clarity, and conversion — all from one intuitive workspace.
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
                      <span>Generate Better Emails Instantly →</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - AI Email Generator Visual */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 30 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative flex items-center justify-center h-full order-2 mt-8 lg:mt-0 lg:order-2"
              >
                <div className="relative w-full max-w-lg h-[500px] lg:h-[600px]">
                  {/* AI Email Generator Demo Card */}
                  <GlowCard className="cursor-pointer rounded-2xl w-full h-full">
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-6 lg:p-8 shadow-2xl h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-xl flex items-center justify-center"
                          >
                            <Brain className="h-6 w-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white">AI Email Generator</h3>
                            <p className="text-sm text-white/60">Creating personalized emails</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400">Active</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-xs text-white/60 mb-1">Email Type</div>
                            <div className="text-sm text-white font-medium">Cold Outreach</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3">
                            <div className="text-xs text-white/60 mb-1">Tone</div>
                            <div className="text-sm text-white font-medium">Professional</div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-xs text-white/60 mb-2">Generated Email Preview</div>
                          <div className="space-y-3">
                            <div className="text-sm text-white font-semibold">Subject: Partnership opportunity with [Company]</div>
                            <div className="text-sm text-white/80 leading-relaxed">
                              Hi [Name], I've been following your work in the AI space and was impressed by your recent achievements. Our AI email generator can help streamline your outreach efforts...
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                              <div className="text-xs text-white/60">Personalization: 94%</div>
                              <div className="flex items-center space-x-2">
                                <ThumbsUp className="h-4 w-4 text-green-400" />
                                <span className="text-xs text-green-400">Ready to send</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-[#8B5CF6]/10 rounded-lg p-2">
                            <div className="text-xs text-white/60">Time Saved</div>
                            <div className="text-sm font-bold text-white">90%</div>
                          </div>
                          <div className="bg-[#A855F7]/10 rounded-lg p-2">
                            <div className="text-xs text-white/60">Engagement</div>
                            <div className="text-sm font-bold text-white">3x Higher</div>
                          </div>
                          <div className="bg-[#C084FC]/10 rounded-lg p-2">
                            <div className="text-xs text-white/60">Quality</div>
                            <div className="text-sm font-bold text-white">94/100</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Email Generator Detailed Content Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <div className="max-w-6xl mx-auto">
            {/* Generate Emails That Persuade */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
            >
              <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
                <motion.div
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <PenTool className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Generate Emails That Persuade
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  Writing outreach shouldn't slow you down. With 360Airo's email generator, you can create high-quality messages that feel personal, relevant, and aligned to each lead's context across your entire workflow.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#A855F7]/20 p-4 rounded-xl border border-[#8B5CF6]/30">
                    <ul className="space-y-2 text-white/80 text-sm lg:text-base">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#8B5CF6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Create first-touch cold emails with contextual relevance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#8B5CF6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Write follow-ups that stay aligned to <Link href="/features/email-sequences" className="text-[#A855F7] hover:text-white underline underline-offset-2 transition-colors">Email Sequences</Link></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#8B5CF6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Craft LinkedIn messages that pair perfectly with <Link href="/features/linkedin-automation" className="text-[#A855F7] hover:text-white underline underline-offset-2 transition-colors">LinkedIn Automation</Link></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#8B5CF6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Generate variations for A/B testing campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-[#8B5CF6] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Maintain tone consistency across your entire pipeline</span>
                      </li>
                    </ul>
                    <p className="text-white font-medium text-sm lg:text-base mt-4">
                      Your team sends better emails — faster — without compromising personalization or quality.
                    </p>
                  </div>
                </div>
              </div>

              <GlowCard className="group cursor-pointer rounded-2xl order-1 lg:order-2" glowColor="rgba(139,92,246,0.4)">
                <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 lg:p-8 h-full border border-[#8B5CF6]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#8B5CF6]/50 group-hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">Email Generator Dashboard</div>
                      <div className="text-white/60 text-sm">Real-time AI Generation</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-xs text-white/60 mb-2">Cold Emails</div>
                        <div className="text-sm text-white font-semibold">Contextual Relevance</div>
                        <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '94%' }}
                            transition={{ duration: 1 }}
                            className="h-full bg-[#8B5CF6] rounded-full"
                          />
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-xs text-white/60 mb-2">Follow-ups</div>
                        <div className="text-sm text-white font-semibold">Sequence Alignment</div>
                        <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '88%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-[#A855F7] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'LinkedIn Messages', url: '/features/linkedin-automation' },
                        { name: 'A/B Testing', url: '#' },
                        { name: 'Tone Consistency', url: '#' }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-purple-400' : 'bg-pink-400'
                            }`} />
                            {item.url !== '#' ? (
                              <Link href={item.url} className="text-white text-sm hover:text-[#A855F7] transition-colors">
                                {item.name}
                              </Link>
                            ) : (
                              <span className="text-white text-sm">{item.name}</span>
                            )}
                          </div>
                          <div className="text-white/40 text-sm">✓ Integrated</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#A855F7]/10 p-4 rounded-lg border border-[#8B5CF6]/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="h-4 w-4 text-[#8B5CF6]" />
                        <span className="text-white font-semibold text-sm">AI Analysis Complete</span>
                      </div>
                      <div className="text-white/80 text-sm">
                        Ready to generate persuasive emails that convert at scale
                      </div>
                    </div>
                  </div>
                </Card>
              </GlowCard>
            </motion.div>

            {/* Smarter Writing with Email Generator AI */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
            >
              <div className="lg:order-2 space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#A855F7] to-[#C084FC] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Brain className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Smarter Writing with Email Generator AI
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  360Airo enhances your writing with advanced email generator AI capabilities that analyze tone, structure, and recipient behavior.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Refine Clarity</div>
                    <div className="text-white/60 text-xs">Simplify complex messaging</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Adapt Tone</div>
                    <div className="text-white/60 text-xs">For sales, support, or professional communication</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Strengthen Personalization</div>
                    <div className="text-white/60 text-xs">Using lead activity insights</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Correct Grammar</div>
                    <div className="text-white/60 text-xs">Structure and readability instantly</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#C084FC]/10 p-4 rounded-xl border border-[#A855F7]/20">
                  <p className="text-white/80 text-sm lg:text-base">
                    Perfect for SDRs, marketers, customer success teams, and founders who need polished emails without endless editing.
                  </p>
                </div>
              </div>

              <GlowCard className="group cursor-pointer rounded-2xl lg:order-1" glowColor="rgba(168,85,247,0.4)">
                <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 lg:p-8 h-full border border-[#A855F7]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#A855F7]/50 group-hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">AI Writing Assistant</div>
                      <div className="text-white/60 text-sm">Real-time Optimization</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-xs text-white/60 mb-2">Original Text</div>
                        <div className="text-sm text-white/60 line-through">
                          "We can help you with your email marketing needs"
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 180 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-8 h-8 bg-gradient-to-r from-[#A855F7] to-[#C084FC] rounded-full flex items-center justify-center"
                        >
                          <ArrowRight className="h-4 w-4 text-white" />
                        </motion.div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#C084FC]/10 p-4 rounded-lg border border-[#A855F7]/20">
                        <div className="text-xs text-[#A855F7] mb-2">AI-Enhanced Version</div>
                        <div className="text-sm text-white font-semibold">
                          "Our AI email generator can increase your outreach engagement by 85% while saving 90% on content creation time"
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="space-y-1">
                        <div className="text-xs text-white/60">Clarity</div>
                        <div className="text-sm font-bold text-green-400">+42%</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-white/60">Tone Match</div>
                        <div className="text-sm font-bold text-[#A855F7]">94%</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-white/60">Readability</div>
                        <div className="text-sm font-bold text-yellow-400">A+</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </GlowCard>
            </motion.div>

            {/* Scale Outreach with the Best AI Email Generator Tools */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Scale Outreach with the Best AI Email Generator Tools
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  Whether you're reaching cold leads, nurturing warm contacts, or delivering onboarding messages, the system helps you produce consistent, effective communication at scale. Ideal for organizations looking for the best AI email generator to streamline their daily workflow.
                </p>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">Improve deliverability through cleaner messaging paired with <Link href="/features/email-warmup" className="text-[#A855F7] hover:text-white underline underline-offset-2 transition-colors">Email Warmup</Link></span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">Strengthen multi-step campaigns with refined copy</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">Ensure messaging consistency across teams</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#C084FC] to-[#8B5CF6] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">Generate unlimited variations for testing and optimization</span>
                    </div>
                  </div>
                  <p className="text-white font-medium text-sm mt-3">
                    Every email becomes a high-performing asset in your outbound strategy.
                  </p>
                </div>
              </div>

              <GlowCard className="group cursor-pointer rounded-2xl" glowColor="rgba(192,132,252,0.4)">
                <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 lg:p-8 h-full border border-[#C084FC]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#C084FC]/50 group-hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">Scale Dashboard</div>
                      <div className="text-white/60 text-sm">Unlimited Generation</div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'Cold Leads', value: 245, color: 'from-[#C084FC] to-purple-500' },
                        { label: 'Warm Contacts', value: 128, color: 'from-purple-500 to-pink-500' },
                        { label: 'Onboarding', value: 67, color: 'from-pink-500 to-[#C084FC]' },
                        { label: 'Re-engagement', value: 89, color: 'from-[#C084FC] to-blue-500' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">{item.label}</span>
                            <span className="text-white/60 text-sm">{item.value} emails</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${Math.min(100, (item.value / 300) * 100)}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#C084FC]/10 to-purple-500/10 p-4 rounded-lg border border-[#C084FC]/20">
                      <div className="text-center">
                        <div className="text-white font-semibold text-sm mb-1">Scale Unlimited</div>
                        <div className="text-white/60 text-xs">Generate thousands of personalized emails</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </GlowCard>
            </motion.div>

            {/* Professional Messaging in Every Scenario */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:order-2 space-y-4 lg:space-y-6">
                <motion.div
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FileText className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">
                  Professional Messaging in Every Scenario
                </h3>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  From sales to support, prospecting to retention, the email writer AI engine creates messages that feel crafted by experts — not templates.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Cold outreach and introductions</div>
                    <div className="text-white/60 text-xs">First-contact professional messages</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Follow-up reminders and nudges</div>
                    <div className="text-white/60 text-xs">Gentle persistence that converts</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Meeting confirmations and scheduling</div>
                    <div className="text-white/60 text-xs">Professional coordination emails</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-medium text-sm mb-1">Proposal messages</div>
                    <div className="text-white/60 text-xs">Deal progression and negotiation</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 md:col-span-2">
                    <div className="text-white font-medium text-sm mb-1">Re-engagement messages for inactive leads</div>
                    <div className="text-white/60 text-xs">Revive dormant conversations professionally</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#7C3AED]/10 p-4 rounded-xl border border-[#8B5CF6]/20">
                  <p className="text-white font-semibold text-center text-sm lg:text-base">
                    Fast, polished, professional — every time.
                  </p>
                </div>
              </div>

              <GlowCard className="group cursor-pointer rounded-2xl lg:order-1" glowColor="rgba(123,92,246,0.4)">
                <Card className="relative bg-[#1a0b2e] backdrop-blur-sm p-6 lg:p-8 h-full border border-[#7C3AED]/30 rounded-2xl transition-all duration-500 group-hover:bg-[#1a0b2e]/80 group-hover:border-[#7C3AED]/50 group-hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold text-lg">Scenario Templates</div>
                      <div className="text-white/60 text-sm">Professional Use Cases</div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { scenario: 'Cold Outreach', status: 'active', icon: '📧' },
                        { scenario: 'Follow-up Sequence', status: 'active', icon: '🔄', url: '/features/email-sequences' },
                        { scenario: 'Meeting Scheduling', status: 'active', icon: '📅' },
                        { scenario: 'Proposal Delivery', status: 'active', icon: '📄' },
                        { scenario: 'Re-engagement', status: 'active', icon: '⚡' },
                        { scenario: 'LinkedIn Messaging', status: 'active', icon: '💼', url: '/features/linkedin-automation' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">{item.icon}</div>
                            <div>
                              {item.url ? (
                                <Link href={item.url} className="text-white text-sm font-semibold hover:text-[#A855F7] transition-colors">
                                  {item.scenario}
                                </Link>
                              ) : (
                                <div className="text-white text-sm font-semibold">{item.scenario}</div>
                              )}
                              <div className="text-white/60 text-xs">Professional template</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-green-400 text-xs">{item.status}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#8B5CF6]/10 p-4 rounded-lg border border-[#7C3AED]/20">
                      <div className="text-center">
                        <div className="text-white font-semibold text-sm mb-1">Ready for Every Scenario</div>
                        <div className="text-white/60 text-xs">Professional templates for all business needs</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </GlowCard>
            </motion.div>
          </div>
        </section>

        {/* Why Teams Choose 360Airo's AI Email Generator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative py-12 lg:py-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-2xl shadow-[#8B5CF6]/25"
              >
                <Award className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6">
                Why Teams Choose 360Airo's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]">AI Email Generator</span>
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 text-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    "Consistent messaging across every campaign",
                    "High-quality, professional copy produced instantly",
                    `Seamless connection to <Link href="/features/linkedin-automation" className="text-[#A855F7] hover:text-white underline underline-offset-2 transition-colors">LinkedIn Automation</Link> and LinkedIn flows`,
                    "Enhanced deliverability and engagement",
                    "Designed for teams that need quality communication at scale",
                    "Save hours of manual writing every week"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/80 text-sm text-left" dangerouslySetInnerHTML={{ __html: item }} />
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#8B5CF6]/10 to-[#A855F7]/10 p-4 rounded-xl border border-[#8B5CF6]/20">
                  <p className="text-white font-semibold text-lg lg:text-xl">
                    With 360Airo, your outreach becomes faster, clearer, and far more persuasive — without the manual writing burden.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex justify-center"
              >
                <motion.div 
                  whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="group relative overflow-hidden rounded-xl"
                  onClick={handleCTAClick}
                >
                  <Button 
                    size="lg" 
                    className="relative bg-white text-[#480056] hover:bg-white/90 px-8 py-4 lg:px-10 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    Generate Better Emails Instantly →
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AUTOMATED AI INTERFACE SHOWCASE SECTION - Mobile optimized */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 lg:mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-2 lg:mb-3"
              >
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">AI Content Generation Interface</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl lg:text-2xl md:text-3xl font-bold text-white mb-3 lg:mb-4"
              >
                Watch AI Create <span className="text-[#8B5CF6]">Perfect Emails</span> in Real-Time
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              </motion.div>
            </motion.div>

            {/* Automated AI Interface Demo */}
            <AutomatedAIInterface />
          </motion.div>
        </section>

        {/* SMART PERSONALIZATION SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Smart, Personalized Email Content</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Our AI analyzes your audience, campaign goals, and past performance
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  Our AI analyzes your audience, campaign goals, and past performance to produce tailored messages that resonate. Whether it's subject lines, follow-ups, or drip sequences, 360Airo ensures every email is optimized for open rates, click-through rates, and responses.
                </p>
                <p>
                  This helps you <span className="text-[#8B5CF6] font-semibold">scale cold email campaigns without sacrificing quality</span>, maintaining consistency while personalizing each message for maximum impact.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CONTENT TYPES - Mobile optimized */}
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
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Automated Copy, Maximum Efficiency</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Generate Multiple <span className="text-[#8B5CF6]">Content Types</span> Instantly
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                From cold outreach to follow-up sequences, our AI generates the exact content you need for every stage of your email campaign.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {contentTypes.map((type, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full group-hover:scale-105"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${type.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4`}
                      whileHover={{ scale: isMobile ? 1.1 : 1.2, boxShadow: '0 0 25px rgba(139,92,246,0.4)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <type.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#A855F7]">{type.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2 lg:mb-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    />
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{type.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURES GRID - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Data-Driven Optimization</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                AI That Gets <span className="text-[#8B5CF6]">Smarter Over Time</span>
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                360Airo doesn't just generate content — it helps improve it with analytics-backed recommendations and continuous learning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {aiFeatures.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 h-full border border-white/10 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 group-hover:scale-105">
                      <div className="relative z-10 text-center">
                        <motion.div
                          className={`bg-gradient-to-r ${feature.color} w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4`}
                          whileHover={{ scale: isMobile ? 1.05 : 1.1, rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <feature.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                        </motion.div>
                        <div className="text-xl lg:text-2xl font-black text-[#8B5CF6] mb-1 lg:mb-2">{feature.metric}</div>
                        <h3 className="text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#A855F7]">{feature.title}</h3>
                        <motion.div
                          className="h-px bg-gradient-to-r from-[#8B5CF6]/20 via-white/10 to-transparent mb-2 lg:mb-3"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                        />
                        <p className="text-white/80 text-xs lg:text-sm leading-relaxed mb-1 lg:mb-2">{feature.description}</p>
                        <div className="text-xs text-[#8B5CF6] font-semibold">{feature.label}</div>
                      </div>
                    </Card>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Why 360Airo AI Content Generation</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-3 lg:mb-4">
                Transform Your Email <span className="text-[#8B5CF6]">Content Strategy</span>
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6" style={{ maxWidth: '100px' }} />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                With AI-driven suggestions, your email content creation becomes faster, smarter, and more impactful, freeing your team to focus on strategy instead of drafting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full group-hover:scale-105"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${benefit.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                      whileHover={{scale: isMobile ? 1.1 : 1.2, boxShadow: '0 0 25px rgba(139,92,246,0.4)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#A855F7]">{benefit.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    />
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION - Mobile optimized */}
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
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50"
                  >
                    <motion.div
                      className="bg-white/15 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:bg-[#8B5CF6]/30"
                      whileHover={{ scale: isMobile ? 1.1 : 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-5 w-5 lg:h-8 lg:w-8 text-[#8B5CF6] transition-colors group-hover:text-white" />
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
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA - Mobile optimized */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#19001d]/40 to-[#A855F7]/20" />
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2, margin: '-50px' }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Ready to Transform Your Email Outreach?</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl md:text-5xl font-bold text-white">
                Generate Better Emails Instantly with AI
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-6 lg:mb-8" style={{ maxWidth: '120px' }} />
              <p className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
                Start creating high-performing, personalized emails in seconds. Join thousands of teams using 360Airo's AI Email Generator to streamline their outreach and boost engagement.
              </p>
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
                    className="relative bg-white text-[#480056] hover:bg-transparent w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-6 text-sm lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-[#480056] border-2 border-transparent group-hover:border-white/20"
                  >
                    Generate Better Emails Instantly →
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
              <p className="text-white/80 text-xs lg:text-sm">✨ Transform your email outreach with AI-powered generation</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
