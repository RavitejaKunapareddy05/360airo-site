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
  Pause
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';

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
        <title>AI Content Generation | 360Airo - Generate High-Converting Email Content</title>
        <meta 
          name="description" 
          content="360Airo's AI content generation tool creates personalized, high-converting email content instantly. Generate cold emails, follow-ups, and outreach sequences with AI." 
        />
        <meta 
          name="keywords" 
          content="AI content generation, email content generator, AI email writing, cold email templates, outreach content, 360Airo AI" 
        />
        
        {/* Canonical URL - This tells search engines this is the original page */}
        <link rel="canonical" href="https://360airo.com/app/features/ai-content-generation" />
        
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="AI Content Generation | 360Airo - Generate High-Converting Email Content" />
        <meta property="og:description" content="Generate personalized, high-impact email content instantly with 360Airo's AI content generation tool. Create cold emails, follow-ups, and outreach sequences." />
        <meta property="og:url" content="https://360airo.com/app/features/ai-content-generation" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:image" content="https://360airo.com/og-ai-content-generation.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Content Generation | 360Airo" />
        <meta name="twitter:description" content="Generate personalized, high-converting email content instantly with 360Airo's AI content generation tool." />
        <meta name="twitter:image" content="https://360airo.com/twitter-ai-content-generation.jpg" />
        
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
              "name": "360Airo AI Content Generation",
              "description": "360Airo's AI content generation tool creates personalized, high-converting email content instantly. Generate cold emails, follow-ups, and outreach sequences with AI.",
              "url": "https://360airo.com/app/features/ai-pitch-generation",
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

      {/* Hidden link for SEO - helps search engines discover the URL */}
      <div className="hidden">
        <a rel="canonical" href="https://360airo.com/app/features/ai-pitch-generation">360Airo AI Content Generation</a>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] overflow-x-hidden">
        <Navbar />

        {/* HERO SECTION - Mobile optimized with content first */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            {/* MOBILE: Content first, then animations */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
              {/* LEFT CONTENT - Always first on mobile */}
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
                      <span>AI for Content Generation</span>
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
                      Write Emails
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="block transform-gpu"
                    >
                      That Convert,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent transform-gpu text-4xl sm:text-5xl lg:text-6xl"
                    >
                      Effortlessly.
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
                    Generate Personalized, High-Impact Email Content{' '}
                    <motion.span
                      animate={{ color: ['#8B5CF6', '#A855F7', '#ffffff', '#8B5CF6'] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="font-semibold"
                    >
                      Instantly
                    </motion.span>
                  </p>
                  <p className="text-sm lg:text-base text-white/75 leading-relaxed">
                    Crafting engaging emails at scale can be time-consuming and inconsistent. 360Airo's AI content generation tool leverages intelligent automation to create personalized email copy, cold email sequences, and high-converting outreach content — all optimized for email deliverability and engagement.
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
                      <span>Start Generating AI-Powered Email Content</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - FLOATING AI EMAIL PREVIEW CARDS - Comes after content on mobile */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 30 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative flex items-center justify-center h-full order-2 mt-8 lg:mt-0 lg:order-2"
              >
                <div className="relative w-full max-w-lg h-[500px] lg:h-[600px]">
                  {/* Floating Email Preview Cards - Mobile optimized */}
                  {heroEmailPreviews.map((email, index) => {
                    const positions = isMobile ? [
                      { top: '5%', left: '5%', rotate: -3 },
                      { top: '10%', right: '5%', rotate: 4 },
                      { bottom: '15%', left: '5%', rotate: -2 },
                      { bottom: '10%', right: '5%', rotate: 3 }
                    ] : [
                      { top: '10%', left: '10%', rotate: -5 },
                      { top: '15%', right: '5%', rotate: 8 },
                      { bottom: '20%', left: '5%', rotate: -3 },
                      { bottom: '15%', right: '10%', rotate: 6 }
                    ];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: positions[index].rotate }}
                        animate={{ opacity: 1, scale: 1, rotate: positions[index].rotate }}
                        transition={{ delay: email.delay, duration: 0.6, type: 'spring' }}
                        className="absolute z-20"
                        style={positions[index]}
                        whileHover={{ 
                          scale: isMobile ? 1.02 : 1.05, 
                          rotate: 0, 
                          zIndex: 30,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <GlowCard className="cursor-pointer rounded-lg lg:rounded-xl">
                          <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-lg lg:rounded-xl border border-white/20 p-3 lg:p-4 shadow-2xl min-w-[200px] lg:min-w-[240px] max-w-[220px] lg:max-w-[280px]">
                            <div className="flex items-center justify-between mb-2 lg:mb-3">
                              <div className="flex items-center space-x-1 lg:space-x-2">
                                <motion.div
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.4 }}
                                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#A855F7] rounded-full"
                                />
                                <span className="text-xs font-semibold text-[#A855F7]">AI Generated</span>
                              </div>
                              <div className={`text-xs px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-full font-medium ${
                                email.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : email.status === 'generating'
                                  ? 'bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/30'
                                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                              }`}>
                                {email.status === 'completed' ? '✓' : email.status === 'generating' ? '●' : '○'}
                              </div>
                            </div>

                            <div className="mb-1 lg:mb-2">
                              <div className="text-xs font-medium text-[#C084FC] bg-[#C084FC]/10 px-1.5 py-0.5 lg:px-2 lg:py-1 rounded-full inline-block">
                                {email.type}
                              </div>
                            </div>

                            <div className="space-y-1 lg:space-y-2">
                              <div className="text-sm font-bold text-white leading-tight line-clamp-2">
                                {email.subject}
                              </div>
                              <div className="text-xs text-white/70 leading-relaxed line-clamp-3">
                                {email.preview}
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-2 lg:mt-3 pt-2 border-t border-white/10">
                              <div className="flex items-center space-x-1 lg:space-x-2">
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="cursor-pointer"
                                >
                                  <Copy className="h-3 w-3 text-white/50 hover:text-white/70 transition-colors" />
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="cursor-pointer"
                                >
                                  <Edit3 className="h-3 w-3 text-white/50 hover:text-white/70 transition-colors" />
                                </motion.div>
                              </div>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                              >
                                <ThumbsUp className="h-3 w-3 text-white/50 hover:text-white/70 transition-colors" />
                              </motion.div>
                            </div>
                          </div>
                        </GlowCard>
                      </motion.div>
                    );
                  })}

                  {/* Connection Lines - Mobile simplified */}
                  {!isMobile && heroEmailPreviews.map((_, index) => (
                    <motion.div
                      key={`line-${index}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 1.5 + index * 0.15, duration: 0.8 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <svg className="w-full h-full">
                        <motion.path
                          d={`M ${250} ${300} Q ${150 + index * 50} ${200 + index * 30} ${100 + index * 60} ${150 + index * 80}`}
                          stroke="rgba(139,92,246,0.3)"
                          strokeWidth="1"
                          fill="none"
                          strokeDasharray="5,5"
                          animate={{
                            strokeDashoffset: [0, -10],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: index * 0.4
                          }}
                        />
                      </svg>
                    </motion.div>
                  ))}

                  {/* Floating AI Particles - Mobile reduced */}
                  {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                    <motion.div
                      key={`ai-particle-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * (isMobile ? 50 : 100)],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * (isMobile ? 50 : 100)],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeOut'
                      }}
                      className="absolute w-1 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full blur-sm"
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
                <SectionDivider />
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
              <SectionDivider />
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
              <SectionDivider />
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
              <SectionDivider />
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
              <SectionDivider />
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
                <span className="text-[#8B5CF6] font-semibold text-xs lg:text-sm tracking-wider uppercase">Seamless Integration with Campaigns</span>
              </div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl md:text-5xl font-bold text-white">
                Generated content is instantly ready to be deployed in your email outreach campaigns.
              </h2>
              <SectionDivider variant="gradient" />
              <p className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
                Combined with email warmup and annual campaign planning, AI-generated copy ensures every email is relevant, professional, and delivers measurable results.
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
                    Start Generating AI-Powered Email Content
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
              <p className="text-white/80 text-xs lg:text-sm">✨ Transform your content creation with AI</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}