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

/* GlowCard with cursor-reactive glow */
const GlowCard = ({ children, className = '', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
          opacity: isHovered ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Automated AI Interface Component - CONTINUOUS LOOP, FASTER SPEEDS, NO SCROLL */
const AutomatedAIInterface = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [typedGoal, setTypedGoal] = useState('');
  const [typedAudience, setTypedAudience] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentStatusText, setCurrentStatusText] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [typedEmail, setTypedEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

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

  // Auto-typing effect for inputs - FASTER
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
    }, 35); // Faster typing: 40ms -> 35ms

    return () => clearTimeout(timer);
  }, [demoStep, typedGoal, typedAudience, goalText, audienceText]);

  // Progress and status animation - FASTER
  useEffect(() => {
    if (demoStep >= 2) {
      const progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setShowEmail(true);
            return 100;
          }
          return prev + 2; // Much faster progress: 1.5 -> 2
        });
      }, 50); // Faster interval: 60ms -> 50ms

      const statusTimer = setInterval(() => {
        const stepIndex = Math.floor(progress / 20);
        if (stepIndex < statusSteps.length) {
          setCurrentStatusText(statusSteps[stepIndex]);
        }
      }, 1000); // Faster status updates: 1200ms -> 1000ms

      return () => {
        clearInterval(progressTimer);
        clearInterval(statusTimer);
      };
    }
  }, [demoStep, progress, statusSteps]);

  // Email typing animation - FASTER
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
      }, 15); // Much faster typing: 20ms -> 15ms

      return () => clearInterval(typingTimer);
    }
  }, [showEmail, progress, fullEmailPitch]);

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
      }, 2000); // Shorter display time: 3000ms -> 2000ms

      return () => clearTimeout(resetTimer);
    }
  }, [isCompleted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <GlowCard className="cursor-pointer rounded-2xl">
        {/* EXTENDED AI INTERFACE - NO SCROLL BAR, FULL HEIGHT */}
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl min-h-[1000px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-lg"
              >
                <Brain className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Content Generator</h3>
                <p className="text-sm text-white/60">Powered by 360Airo</p>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30"
            >
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full" 
              />
              <span className="text-sm font-medium text-green-300">Active</span>
            </motion.div>
          </div>

          {/* Auto-typing Input Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium text-white/80 mb-3 block">Campaign Goal</label>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 min-h-[50px] flex items-center">
                <div className="text-white/90 relative">
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
              <label className="text-sm font-medium text-white/80 mb-3 block">Target Audience</label>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 min-h-[50px] flex items-center">
                <div className="text-white/90 relative">
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

          {/* Animated Generation Status */}
          {demoStep >= 2 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#A855F7]/20 rounded-xl p-6 mb-8 border border-[#8B5CF6]/20"
            >
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                >
                  <Wand2 className="h-6 w-6 text-[#A855F7]" />
                </motion.div>
                <div className="flex-1">
                  <motion.div 
                    key={currentStatusText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg font-semibold text-white"
                  >
                    {currentStatusText}
                  </motion.div>
                  <div className="text-sm text-white/60">
                    Progress: {Math.round(progress)}%
                  </div>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full relative"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-sm"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Generated Complete Email Pitch - NO SCROLL, EXTENDED CONTAINER */}
          {showEmail && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 flex-1"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Generated Email Pitch</h4>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-[#A855F7] font-medium bg-[#A855F7]/10 px-3 py-1 rounded-full">
                    Cold Outreach
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-white/60">94/100</span>
                  </div>
                </div>
              </div>

              {/* Full Email Content - NO SCROLL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#8B5CF6]/30 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Email Content with Typing Effect - NO HEIGHT RESTRICTION */}
                  <div className="text-white/90 leading-relaxed whitespace-pre-wrap font-mono text-sm">
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
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-lg text-[#A855F7] text-sm font-medium hover:bg-[#8B5CF6]/30 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                        <span>Copy Email</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Edit</span>
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <ThumbsUp className="h-5 w-5 text-white/50 hover:text-white/70 transition-colors" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium hover:bg-green-500/30 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* AI Analysis */}
              {isCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-6 p-6 bg-gradient-to-r from-green-500/10 to-[#8B5CF6]/10 border border-green-500/20 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-semibold">AI Analysis Complete</span>
                    </div>
                    <div className="text-sm text-white/60">Confidence: 94%</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-sm text-white/60">Personalization</div>
                      <div className="text-lg font-bold text-green-400">Excellent</div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ delay: 0.7, duration: 1 }}
                          className="h-full bg-green-400 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-white/60">Deliverability</div>
                      <div className="text-lg font-bold text-[#A855F7]">High</div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '88%' }}
                          transition={{ delay: 0.9, duration: 1 }}
                          className="h-full bg-[#A855F7] rounded-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-white/60">Engagement</div>
                      <div className="text-lg font-bold text-yellow-400">Strong</div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ delay: 1.1, duration: 1 }}
                          className="h-full bg-yellow-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <p className="text-sm text-white/70">
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

/* Motion variants */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
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

/* Section divider */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
        style={{ maxWidth: '200px' }}
      />
    );
  }
  if (variant === 'left') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-transparent mb-6"
        style={{ maxWidth: '100px' }}
      />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#8B5CF6]/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]" />
      <div className="h-px bg-gradient-to-r from-[#8B5CF6]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

export default function AIContentGenerationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const generationSteps = [
    "Analyzing your audience and campaign goals...",
    "Crafting personalized email content...",
    "Optimizing for deliverability and engagement...",
    "Generating A/B test variations...",
    "Content ready for deployment!"
  ];

  const sampleEmails = [
    {
      subject: "Quick question about [Company Name]'s growth strategy",
      preview: "Hi [First Name], I noticed your recent expansion into the European market. I'd love to share how we've helped similar companies...",
      type: "Cold Outreach"
    },
    {
      subject: "Following up on our conversation",
      preview: "Thanks for taking the time to chat yesterday. As promised, I'm attaching the case study we discussed...",
      type: "Follow-up"
    }
  ];

  const heroEmailPreviews = [
    {
      subject: "Partnership opportunity with [Company]",
      preview: "Hi [Name], I've been following your work in the AI space...",
      type: "Partnership",
      status: "generating",
      delay: 1.2
    },
    {
      subject: "Quick question about your marketing strategy",
      preview: "Hi [Name], I noticed your recent product launch...",
      type: "Cold Outreach", 
      status: "completed",
      delay: 1.6
    },
    {
      subject: "Following up on our LinkedIn conversation",
      preview: "Thanks for connecting! As mentioned, here's the case study...",
      type: "Follow-up",
      status: "completed", 
      delay: 2.0
    },
    {
      subject: "Exclusive invite: [Event Name]",
      preview: "Hi [Name], I'd love to invite you to our exclusive event...",
      type: "Event Invite",
      status: "pending",
      delay: 2.4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % generationSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep === generationSteps.length - 1) {
      setIsGenerating(false);
    } else {
      setIsGenerating(true);
    }
  }, [currentStep]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.6 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.35, 0.1],
                  scale: [0.5, 1.15, 0.5],
                  x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 11 + i * 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                className={`absolute w-20 h-20 ${
                  i % 4 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#8B5CF6]/20 to-[#7C3AED]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 to-[#A855F7]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#A855F7]/20 to-[#C084FC]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#C084FC]/15 to-[#8B5CF6]/15'
                } blur-xl`}
                style={{ top: `${14 + i * 11}%`, left: `${8 + i * 10.5}%` }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto relative z-10 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
              {/* LEFT CONTENT */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="inline-block"
                >
                  <div className="group relative cursor-pointer">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(139,92,246,0.4)',
                          '0 0 60px rgba(168,85,247,0.6)',
                          '0 0 30px rgba(139,92,246,0.4)',
                        ],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 via-[#A855F7]/20 to-[#C084FC]/30 rounded-full blur-xl"
                    />
                    <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#8B5CF6]/50 text-white font-semibold text-sm sm:text-base">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                        className="mr-3"
                      >
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#A855F7]" />
                      </motion.div>
                      <span>AI for Content Generation</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.7, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Write Emails
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      That Convert,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-white bg-clip-text text-transparent transform-gpu"
                    >
                      Effortlessly.
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                    className="h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] rounded-full relative overflow-hidden max-w-md"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35, duration: 0.7 }}
                  className="space-y-5 max-w-xl"
                >
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                    Generate Personalized, High-Impact Email Content{' '}
                    <motion.span
                      animate={{ color: ['#8B5CF6', '#A855F7', '#ffffff', '#8B5CF6'] }}
                      transition={{ duration: 3.4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      Instantly
                    </motion.span>
                  </p>
                  <p className="text-base text-white/75">
                    Crafting engaging emails at scale can be time-consuming and inconsistent. 360Airo's AI content generation tool leverages intelligent automation to create personalized email copy, cold email sequences, and high-converting outreach content — all optimized for email deliverability and engagement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
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
                    <Button size="lg" className="relative bg-transparent text-[#480056] px-8 py-3 text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl">
                      <span>Start Generating AI-Powered Email Content</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* RIGHT - FLOATING AI EMAIL PREVIEW CARDS */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="relative flex items-center justify-center h-full"
              >
                <div className="relative w-full max-w-lg h-[600px]">
                  {/* Central AI Brain Hub */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >

                  </motion.div>

                  {/* Floating Email Preview Cards */}
                  {heroEmailPreviews.map((email, index) => {
                    const positions = [
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
                        transition={{ delay: email.delay, duration: 0.8, type: 'spring' }}
                        className="absolute z-20"
                        style={positions[index]}
                        whileHover={{ 
                          scale: 1.05, 
                          rotate: 0, 
                          zIndex: 30,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <GlowCard className="cursor-pointer rounded-xl">
                          <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-xl border border-white/20 p-4 shadow-2xl min-w-[240px] max-w-[280px]">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                  className="w-2 h-2 bg-[#A855F7] rounded-full"
                                />
                                <span className="text-xs font-semibold text-[#A855F7]">AI Generated</span>
                              </div>
                              <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                                email.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                  : email.status === 'generating'
                                  ? 'bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/30'
                                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                              }`}>
                                {email.status === 'completed' ? '✓ Done' : email.status === 'generating' ? '● Generating' : '○ Pending'}
                              </div>
                            </div>

                            <div className="mb-2">
                              <div className="text-xs font-medium text-[#C084FC] bg-[#C084FC]/10 px-2 py-1 rounded-full inline-block mb-2">
                                {email.type}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="text-sm font-bold text-white leading-tight">
                                {email.subject}
                              </div>
                              <div className="text-xs text-white/70 leading-relaxed line-clamp-3">
                                {email.preview}
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="cursor-pointer"
                                >
                                  <Copy className="h-3 w-3 text-white/50 hover:text-white/70 transition-colors" />
                                </motion.div>
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="cursor-pointer"
                                >
                                  <Edit3 className="h-3 w-3 text-white/50 hover:text-white/70 transition-colors" />
                                </motion.div>
                              </div>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
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

                  {/* Connection Lines */}
                  {heroEmailPreviews.map((_, index) => (
                    <motion.div
                      key={`line-${index}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: 2 + index * 0.2, duration: 1 }}
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
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: index * 0.5
                          }}
                        />
                      </svg>
                    </motion.div>
                  ))}

                  {/* Floating AI Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`ai-particle-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
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

        {/* AUTOMATED AI INTERFACE SHOWCASE SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }} 
            variants={containerVariants} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-3"
              >
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">AI Content Generation Interface</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                Watch AI Create <span className="text-[#8B5CF6]">Perfect Emails</span> in Real-Time
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SectionDivider />
              </motion.div>
            </motion.div>

            {/* Automated AI Interface Demo */}
            <AutomatedAIInterface />
          </motion.div>
        </section>

        {/* SMART PERSONALIZATION SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Smart, Personalized Email Content</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI analyzes your audience, campaign goals, and past performance
              </h2>
              <SectionDivider />
              <div className="text-left space-y-6 text-lg text-white/80 leading-relaxed">
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

        {/* CONTENT TYPES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Automated Copy, Maximum Efficiency</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Generate Multiple <span className="text-[#8B5CF6]">Content Types</span> Instantly
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                From cold outreach to follow-up sequences, our AI generates the exact content you need for every stage of your email campaign.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full group-hover:scale-105"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${type.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                      transition={{ duration: 0.7 }}
                    >
                      <type.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-3 transition-colors group-hover:text-[#A855F7]">{type.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    />
                    <p className="text-white/80 text-sm leading-relaxed">{type.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Data-Driven Optimization</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI That Gets <span className="text-[#8B5CF6]">Smarter Over Time</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                360Airo doesn't just generate content — it helps improve it with analytics-backed recommendations and continuous learning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Card className="relative bg-white/5 backdrop-blur-sm p-6 h-full border border-white/10 rounded-xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 group-hover:scale-105">
                      <div className="relative z-10 text-center">
                        <motion.div
                          className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <feature.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="text-2xl font-black text-[#8B5CF6] mb-2">{feature.metric}</div>
                        <h3 className="text-lg font-bold text-white mb-3 transition-colors group-hover:text-[#A855F7]">{feature.title}</h3>
                        <motion.div
                          className="h-px bg-gradient-to-r from-[#8B5CF6]/20 via-white/10 to-transparent mb-3"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15, duration: 0.8 }}
                        />
                        <p className="text-white/80 text-sm leading-relaxed mb-2">{feature.description}</p>
                        <div className="text-xs text-[#8B5CF6] font-semibold">{feature.label}</div>
                      </div>
                    </Card>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Why 360Airo AI Content Generation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Email <span className="text-[#8B5CF6]">Content Strategy</span>
              </h2>
              <SectionDivider />
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                With AI-driven suggestions, your email content creation becomes faster, smarter, and more impactful, freeing your team to focus on strategy instead of drafting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50 h-full group-hover:scale-105"
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
                      transition={{ duration: 0.7 }}
                    >
                      <benefit.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-[#A855F7]">{benefit.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    />
                    <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#8B5CF6]/50"
                  >
                    <motion.div
                      className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-[#8B5CF6]/30"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.7 }}
                    >
                      <stat.icon className="h-8 w-8 text-[#8B5CF6] transition-colors group-hover:text-white" />
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-black text-white mb-2"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/80 font-semibold text-sm">{stat.label}</div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#19001d]/40 to-[#A855F7]/20" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block">
                <span className="text-[#8B5CF6] font-semibold text-sm tracking-wider uppercase">Seamless Integration with Campaigns</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Generated content is instantly ready to be deployed in your email outreach campaigns.
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Combined with email warmup and annual campaign planning, AI-generated copy ensures every email is relevant, professional, and delivers measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button size="lg" className="relative bg-white text-[#480056] hover:bg-transparent px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20">
                    Start Generating AI-Powered Email Content
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6 mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '150px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ maxWidth: '150px' }}
              />
              <p className="text-white/70 text-sm">✨ Transform your content creation with AI</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
