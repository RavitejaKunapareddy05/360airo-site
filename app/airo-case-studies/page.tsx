// app/case-studies/page.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/navbar';
import { 
  Zap, 
  Users, 
  Target, 
  BarChart3, 
  ArrowRight,
  Play,
  Sparkles,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Mail,
  Linkedin,
  Eye,
  Star,
  Award,
  Lightbulb,
  GitBranch,
  Brain,
  Hexagon,
  Quote,
  Calendar,
  Shield
} from "lucide-react";

// Floating background elements component
const FloatingShapes = () => {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - mobile optimized */}
      <motion.div
        animate={{
          x: isMobile ? [0, 50, 0] : [0, 100, 0],
          y: isMobile ? [0, -30, 0] : [0, -50, 0],
          scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
        }}
        transition={{
          duration: isMobile ? 15 : 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full opacity-10 blur-2xl md:blur-3xl"
      />
      <motion.div
        animate={{
          x: isMobile ? [0, -40, 0] : [0, -80, 0],
          y: isMobile ? [0, 40, 0] : [0, 60, 0],
          scale: isMobile ? [1.1, 1, 1.1] : [1.2, 1, 1.2],
        }}
        transition={{
          duration: isMobile ? 18 : 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-3/4 right-1/3 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-[#480056] to-[#000000] rounded-full opacity-15 blur-2xl md:blur-3xl"
      />
      <motion.div
        animate={{
          x: isMobile ? [0, 60, 0] : [0, 120, 0],
          y: isMobile ? [0, 20, 0] : [0, 30, 0],
          scale: isMobile ? [1, 1.2, 1] : [1, 1.3, 1],
        }}
        transition={{
          duration: isMobile ? 20 : 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/2 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-[#000000] to-[#b45ecf] rounded-full opacity-10 blur-2xl md:blur-3xl"
      />

      {/* Floating hexagons - reduced count and size on mobile */}
      {[...Array(isMobile ? 6 : 12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: isMobile ? [0, -20, 0] : [0, -40, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: isMobile ? 12 + i * 2 : 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Hexagon 
            size={isMobile ? 16 + i * 2 : 20 + i * 3} 
            className="text-[#b45ecf]/10" 
          />
        </motion.div>
      ))}
    </div>
  );
};

// Particle background component
const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: number}>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const particleCount = isMobile ? 20 : 40;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 2 : 3) + 1,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#b45ecf]/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: isMobile ? [0, -20, 0] : [0, -30, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: isMobile ? 15 + Math.random() * 15 : 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient text component
const AnimatedGradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`bg-gradient-to-r from-white via-[#b45ecf] to-[#480056] bg-clip-text text-transparent bg-size-200 ${className}`}
      style={{
        backgroundSize: '200% 200%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.span>
  );
};

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Handle button redirects
  const handleRedirect = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  const caseStudies = [
    {
      id: 1,
      title: "How a SaaS Startup Increased Reply Rates by 72% Using 360Airo",
      industry: "Software as a Service",
      companySize: "20–50 employees",
      challenge: "This startup had a great product but struggled to get prospects to respond to cold emails and LinkedIn messages. They used separate tools for email automation and LinkedIn outreach, leading to confusion, overlapping messages, and poor engagement.",
      solution: "After switching to 360Airo, their team combined both channels into one coordinated sequence. The AI recommendation engine helped them personalize every message based on the recipient's activity and timing. The result was a significant jump in replies, from 9 percent to 15.5 percent in the first two weeks, and eventually to 22 percent by the end of the first month.",
      results: "By automating follow-ups and syncing activity across all channels, they saved nearly 12 hours a week per rep. Within three months, their pipeline value increased by 60 percent, and they scheduled three times more qualified demos.",
      quote: "360Airo became the bridge between effort and outcome. It felt like we added a new team member, one that never sleeps.",
      gradient: "from-[#b45ecf] to-[#480056]",
      delay: 0,
      metrics: [
        { metric: "72%", label: "Higher Reply Rates" },
        { metric: "12 hrs", label: "Saved Weekly Per Rep" },
        { metric: "60%", label: "Pipeline Growth" },
        { metric: "3x", label: "More Qualified Demos" }
      ]
    },
    {
      id: 2,
      title: "Building Predictable Pipeline for a B2B Agency",
      industry: "Marketing Agency",
      companySize: "10–25 employees",
      challenge: "This B2B agency relied on spreadsheets and multiple outreach tools to track conversations. Campaigns lacked coordination, and the team found it difficult to identify which messages were converting best.",
      solution: "When they adopted 360Airo, the centralized dashboard allowed them to manage all outreach channels under one roof. The platform's AI analytics gave them visibility into which subject lines, sequences, and send times worked best. They were also able to create audience segments based on industry, title, and engagement score, resulting in highly focused campaigns.",
      results: "Within six weeks, the agency increased lead conversion rates by 38 percent and reduced bounce rates by half. The automation features helped the small team operate at enterprise-level efficiency.",
      quote: "We didn't just automate our outreach. We gained clarity. 360Airo gave us the visibility and control we never had before.",
      gradient: "from-[#480056] to-[#000000]",
      delay: 0.2,
      metrics: [
        { metric: "38%", label: "Lead Conversion Increase" },
        { metric: "50%", label: "Bounce Rate Reduction" },
        { metric: "6 weeks", label: "To See Results" },
        { metric: "Enterprise", label: "Level Efficiency" }
      ]
    },
    {
      id: 3,
      title: "A Global Consulting Firm Reduces Response Time by 50%",
      industry: "Professional Services",
      companySize: "200+ employees",
      challenge: "A leading consulting firm faced difficulties managing communication across global teams. With hundreds of prospects in different time zones, follow-ups were delayed and opportunities often slipped away.",
      solution: "After implementing 360Airo, the firm automated time-based follow-ups, ensuring every lead received a timely and personalized response. The team also leveraged LinkedIn integrations to maintain engagement with key decision-makers.",
      results: "By the second month, the firm reported a 50 percent reduction in response time and an overall 40 percent increase in booked consultations. The AI-assisted scheduling tool ensured that prospects never fell through the cracks again.",
      quote: "360Airo helped us humanize automation. Every lead now feels attended to, even before we manually reach out.",
      gradient: "from-[#b45ecf] to-[#000000]",
      delay: 0.4,
      metrics: [
        { metric: "50%", label: "Faster Response Time" },
        { metric: "40%", label: "More Consultations" },
        { metric: "Global", label: "Team Coordination" },
        { metric: "0", label: "Leads Lost" }
      ]
    },
    {
      id: 4,
      title: "From Cold to Closed – A Tech Company's Journey to Scalable Outreach",
      industry: "Technology",
      companySize: "100–150 employees",
      challenge: "A growing tech company struggled to balance personalization with scale. Each sales rep manually customized emails and messages, slowing down outreach and limiting daily output.",
      solution: "With 360Airo, they automated personalization using dynamic tags and data-driven templates. The platform's sentiment tracking feature helped reps understand prospect engagement and prioritize follow-ups.",
      results: "Within 45 days, their outreach volume tripled without compromising message quality. They achieved a three times increase in booked meetings and shortened their average deal cycle by 25 percent.",
      quote: "360Airo helped us scale what we thought couldn't be scaled, personalization. It's the reason our sales funnel looks healthier than ever.",
      gradient: "from-[#480056] to-[#b45ecf]",
      delay: 0.6,
      metrics: [
        { metric: "3x", label: "Outreach Volume" },
        { metric: "3x", label: "Booked Meetings" },
        { metric: "25%", label: "Shorter Deal Cycle" },
        { metric: "45 days", label: "To Transform" }
      ]
    }
  ];

  const keyInsights = [
    {
      icon: GitBranch,
      title: "Combine All Outreach Channels",
      description: "Stop switching between tools. With 360Airo, manage email, LinkedIn, and call outreach from one platform. This saves time and ensures consistent communication.",
      gradient: "from-[#b45ecf] to-[#480056]"
    },
    {
      icon: Brain,
      title: "Personalize at Scale",
      description: "Use AI-driven insights to tailor every message. Whether you're reaching out to a hundred prospects or a thousand, your outreach still feels personal.",
      gradient: "from-[#480056] to-[#000000]"
    },
    {
      icon: BarChart3,
      title: "Analyze, Adapt, and Improve",
      description: "360Airo's analytics dashboard helps you understand what's working and what's not. You can continuously refine campaigns based on real-time data.",
      gradient: "from-[#b45ecf] to-[#000000]"
    },
    {
      icon: Shield,
      title: "Stay Compliant and Trusted",
      description: "The platform's built-in deliverability and compliance settings keep your campaigns safe from spam filters and ensure ethical outreach practices.",
      gradient: "from-[#480056] to-[#b45ecf]"
    },
    {
      icon: MessageCircle,
      title: "Focus on Conversations, Not Clicks",
      description: "Ultimately, the goal of outreach is not just sending messages but building genuine relationships. 360Airo helps you start and sustain those conversations effortlessly.",
      gradient: "from-[#b45ecf] to-[#480056]"
    }
  ];

  // Mobile-optimized animation variants
  const fadeInUp = {
    initial: { y: isMobile ? 40 : 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: isMobile ? 0.95 : 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: isMobile ? 0.5 : 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { x: isMobile ? -40 : -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { x: isMobile ? 40 : 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: isMobile ? 0.6 : 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
                          {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/airo-case-studies" />
        <Navbar />
      {/* Enhanced background elements */}
      <ParticlesBackground />
      <FloatingShapes />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-[#480056] to-[#b45ecf]/20"
        style={{ y: backgroundY }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />

      {/* Animated Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 group hover:bg-white/20 transition-all duration-500 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(180, 94, 207, 0.3)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-4 h-4 md:w-5 md:h-5 text-white mr-2 md:mr-3" />
            </motion.div>
            <span className="text-white/90 font-semibold text-sm md:text-base">360Airo Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            <AnimatedGradientText>
              Case Studies
            </AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-relaxed"
          >
            Real Stories of{" "}
            <motion.span
              className="bg-gradient-to-r from-[#b45ecf] to-[#480056] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Transformative Growth
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            At 360Airo, success is measured not by how many emails are sent, but by how many meaningful connections are created. Our case studies reflect the real-world transformations businesses have experienced by using our multichannel outreach platform. Whether it's helping startups scale faster or enabling enterprises to simplify lead generation, each story is proof that strategic automation and personalization can change the way outreach works.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            This page showcases how companies across industries use 360Airo to build authentic relationships, close deals faster, and scale their revenue operations efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={handleRedirect}
                size="lg" 
                className="bg-white text-black hover:bg-white/90 hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#b45ecf]/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Rocket className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={handleRedirect}
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white/10 hover:border-white/30 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 group w-full sm:w-auto"
              >
                <Play className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Watch Stories
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Opportunity Section */}
      <section className="py-16 md:py-20 bg-black/80 backdrop-blur-sm border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              How 360Airo Turns{" "}
              <AnimatedGradientText>
                Outreach Challenges into Growth Opportunities
              </AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: isMobile ? -2 : -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#480056]/20 border border-[#480056]/30 backdrop-blur-sm hover:border-[#b45ecf]/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Problem</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Most businesses face the same problem: too much outreach and too little response. Teams spend hours juggling multiple tools for email, LinkedIn, and calling, only to see low engagement and inconsistent results.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: isMobile ? -2 : -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#b45ecf]/10 border border-[#b45ecf]/20 backdrop-blur-sm hover:border-[#b45ecf]/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">The Solution</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  360Airo helps solve this by unifying every outreach channel into one intelligent platform. The outcome is simple but powerful: more efficiency, more conversations, and measurable growth.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="text-center mb-6 md:mb-8">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-3 md:mb-4" />
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">Here are some of the stories that show how 360Airo helps businesses achieve more with less effort.</h4>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Real businesses, real challenges, remarkable results with 360Airo
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-32">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: isMobile ? 60 : 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: study.delay, type: "spring" }}
                className={`relative ${index % 2 === 0 ? 'lg:pr-10 md:lg:pr-20' : 'lg:pl-10 md:lg:pl-20'}`}
              >
                {/* Background Accent */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 rounded-2xl md:rounded-3xl -z-10`}
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0.8 }}
                  transition={{ duration: 1, delay: study.delay + 0.3 }}
                />

                <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content Side */}
                  <div className="flex-1 space-y-6 md:space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: study.delay + 0.2 }}
                      className="space-y-4 md:space-y-6"
                    >
                      {/* Study Header */}
                      <div className="flex items-center gap-4 md:gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${study.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-xl md:shadow-2xl transition-all duration-300`}
                        >
                          {study.id}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
                            {study.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                            <span className="flex items-center">
                              <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                              {study.industry}
                            </span>
                            <span className="flex items-center">
                              <Target className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                              {study.companySize}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 md:space-y-6">
                        <motion.div
                          whileHover={{ scale: 1.02, y: isMobile ? -2 : -5 }}
                          className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#480056]/20 border border-[#480056]/30 backdrop-blur-sm"
                        >
                          <h4 className="font-semibold text-[#b45ecf] mb-2 md:mb-3 text-base md:text-lg">Challenge</h4>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{study.challenge}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02, y: isMobile ? -2 : -5 }}
                          className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#b45ecf]/10 border border-[#b45ecf]/20 backdrop-blur-sm"
                        >
                          <h4 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg">Solution</h4>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{study.solution}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02, y: isMobile ? -2 : -5 }}
                          className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#480056]/10 border border-[#480056]/20 backdrop-blur-sm"
                        >
                          <h4 className="font-semibold text-[#b45ecf] mb-2 md:mb-3 text-base md:text-lg">Results</h4>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{study.results}</p>
                        </motion.div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {study.metrics.map((result, resultIndex) => (
                          <motion.div
                            key={result.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: resultIndex * 0.1 + study.delay }}
                            whileHover={{ scale: 1.05, y: isMobile ? -3 : -5 }}
                            className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300"
                          >
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">{result.metric}</div>
                            <div className="text-xs md:text-sm text-gray-400">{result.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                      >
                        <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#b45ecf] mb-3 md:mb-4" />
                        <p className="text-gray-300 italic text-base md:text-lg leading-relaxed">"{study.quote}"</p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -3 : 3 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 1, delay: study.delay + 0.4, type: "spring" }}
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                      className={`bg-gradient-to-br ${study.gradient} rounded-3xl md:rounded-4xl p-8 md:p-12 h-64 md:h-96 flex items-center justify-center relative overflow-hidden shadow-xl md:shadow-2xl group`}
                    >
                      {/* Animated Background Elements */}
                      <motion.div
                        className="absolute inset-0 bg-black/20"
                        animate={{
                          background: [
                            'rgba(0,0,0,0.2)',
                            'rgba(255,255,255,0.1)',
                            'rgba(0,0,0,0.2)',
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full blur-lg md:blur-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="text-white text-center relative z-10">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 3, 0, -3, 0]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <TrendingUp className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 md:mb-6" />
                        </motion.div>
                        <h4 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-8 md:py-3 inline-block">
                          Case Study {study.id}
                        </h4>
                        <p className="text-white/90 text-sm md:text-lg">
                          {study.industry}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What These Case Studies Show Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              What These Case Studies Show
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
              Across industries and company sizes, the results are consistent. Businesses that adopt 360Airo see improved email deliverability, streamlined LinkedIn and email workflows, better campaign visibility and analytics, reduced manual effort, and measurable ROI in outreach and conversions.
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              These case studies demonstrate that with the right combination of automation and strategy, cold outreach doesn't have to feel cold. 360Airo helps turn it into meaningful communication that drives business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 md:py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              What You Can Learn from These Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Each case study is built on the same foundation: simplicity, automation, and personalization. Here's how you can replicate similar success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {keyInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.05, y: isMobile ? -5 : -8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-[#b45ecf]/30 transition-all duration-500 group relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl md:rounded-3xl`}
                  animate={{
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${insight.gradient} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 12
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                  <insight.icon className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#b45ecf] group-hover:bg-clip-text">
                  {insight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#480056] to-[#b45ecf] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <ParticlesBackground />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                rotate: [0, 3, 0, -3, 0],
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white to-[#b45ecf] rounded-xl md:rounded-2xl flex items-center justify-center text-black mb-6 md:mb-8 mx-auto"
            >
              <Star className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Start Your Own Success Story
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Every business featured here started with the same question: how can we make outreach more effective without overcomplicating it?
              360Airo answered that question by simplifying the process, amplifying performance, and giving teams the tools they need to connect with people, not just inboxes.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Your story could be next. Whether you're a startup looking to grow faster or an established company ready to modernize your outreach, 360Airo can help you write your next success chapter.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore how 360Airo can transform your outreach strategy. Reach out to us at our official mail to request a demo or share your business challenge.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button 
                onClick={handleRedirect}
                size="lg" 
                className="bg-white text-black hover:bg-white/90 hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#b45ecf]/25 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full font-semibold shadow-lg transition-all duration-300 group relative overflow-hidden w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Rocket className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10">Request Your Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}