'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { ReactNode } from 'react';

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
interface StrategyModuleProps {
  title: string;
  children: ReactNode;
  icon: string;
  isHighlighted?: boolean;
}

// Unique Module Components
const HeroSection = () => (
  <motion.header 
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="bg-gradient-to-b from-[#480056] to-[#19001d] py-16 px-4"
  >
    <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">
        LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025
      </h1>
      
      {/* Updated Header Image - More LinkedIn Specific */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative w-full max-w-3xl mx-auto mb-6 rounded-2xl overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="LinkedIn Outreach Strategy 2025 - Professional networking and business connections"
          width={1200}
          height={600}
          className="w-full h-64 object-cover rounded-2xl shadow-2xl"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014]/70 via-transparent to-[#0a0014]/40 rounded-2xl"></div>
        
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-white text-sm font-medium">
              Master the step-by-step process to get more responses and conversions on LinkedIn
            </p>
          </div>
        </div>
      </motion.div>

      <p className="text-lg text-[#b45ecf]">
        Master the art of LinkedIn outreach that actually generates responses and conversions
      </p>
    </motion.div>
  </motion.header>
);

const IntroductionModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10"
  >
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Why LinkedIn Outreach Matters in 2025
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Whether you're a founder, SDR, or agency owner, mastering LinkedIn outreach can completely transform your lead generation in 2025.
          </p>
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            But here's the challenge: most people get it wrong. They treat LinkedIn like an email inbox, sending mass messages that nobody reads. The real magic happens when you approach it strategically, focusing on personalization, timing, and consistency.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 rounded-2xl p-6 border border-[#b45ecf]/30">
        <div className="text-center space-y-4">
          <div className="text-4xl">🎯</div>
          <h3 className="text-xl font-bold text-white">Key Insight</h3>
          <p className="text-white/70 text-justify">
            Here's a step-by-step playbook to help you create a LinkedIn outreach strategy that actually converts and how 360Airo can simplify the process for you.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

const StrategyModule = ({ title, children, icon, isHighlighted = false }: StrategyModuleProps) => (
  <motion.section 
    variants={itemVariants} 
    className="mb-8"
  >
    <div className={`bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 ${
      isHighlighted ? 'ring-2 ring-[#b45ecf]/30' : ''
    }`}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center text-2xl">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <div className="space-y-4 text-white/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const ExampleModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Real Connection Request Example</h3>
        <p className="text-white/70 mb-4 text-justify">
          Avoid generic messages like "Let's connect." Instead, reference something specific — their role, a post they wrote, or a shared interest. Keep it short and human.
        </p>
        <p className="text-white/80 text-justify">
          Small efforts like this can double your connection acceptance rate.
        </p>
      </div>
      <div className="bg-[#19001d] p-6 rounded-2xl border-2 border-[#480056]">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-[#b45ecf] rounded-full flex items-center justify-center text-white text-sm font-bold">
            💬
          </div>
          <div className="flex-1">
            <p className="text-white/90 italic leading-relaxed">
              "Hi Sarah, I came across your post on scaling outbound teams and really liked your insights on personalization. Would love to connect and share thoughts."
            </p>
            <div className="mt-3 flex items-center space-x-2 text-xs text-white/60">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Recommended approach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const TrustBuildingModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Building Trust, Not Just Leads</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-white text-justify">
          At its core, LinkedIn outreach is about building trust.
        </p>
        <p className="text-lg leading-relaxed text-white text-justify">
          When your messages sound genuine and your timing feels natural, prospects don't see you as another salesperson, they see you as someone who can solve their problem.
        </p>
        <p className="text-lg leading-relaxed text-white font-semibold text-justify">
          That's exactly what 360Airo helps teams achieve: scalable personalization with a human touch.
        </p>
      </div>
      <div className="text-center">
        <div className="text-6xl mb-4">🤝</div>
        <p className="text-white/70 text-lg">
          Focus on relationships, not just transactions
        </p>
      </div>
    </div>
  </motion.section>
);

const FinalThoughtsModule = () => (
  <motion.section variants={itemVariants} className="mb-16">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-3xl blur-xl opacity-50"></div>
      
      <div className="relative bg-gradient-to-br from-[#480056]/30 via-[#19001d]/50 to-[#480056]/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#b45ecf]/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Final Thoughts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-white text-justify">
            In 2025, LinkedIn remains one of the most powerful B2B channels for creating real business opportunities.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            The difference between being ignored and getting replies lies in strategy, personalization, and consistency.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            By using tools like 360Airo, businesses can manage email and LinkedIn outreach in one place, automate repetitive work, and still maintain authentic conversations.
          </p>
          <p className="text-lg leading-relaxed text-white font-semibold text-justify">
            The result is a faster pipeline, more meaningful connections, and higher close rates without sacrificing personalization.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            If you're ready to make your LinkedIn outreach smarter and more effective, start by optimizing your workflow with 360Airo — the intelligent outreach platform built for modern sales teams.
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#b45ecf]/20">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#b45ecf] rounded-full"
            />
            <span className="text-[#b45ecf] text-sm font-semibold">Ready to Transform?</span>
          </div>
          <div className="text-[#b45ecf] text-sm">
            🚀 Start with 360Airo today
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function LinkedInOutreachStrategy2025() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
                                                {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/blogs/linkedin-outreach-strategy" />
        <Navbar />

        <div className="min-h-screen text-white pt-32">
          <HeroSection />

          {/* Main Content */}
          <motion.main 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto px-4 py-12"
          >
            <IntroductionModule />

            {/* Strategy Sections */}
            <div className="space-y-6 mb-16">
              <StrategyModule 
                title="Optimize Your Profile Before Reaching Out" 
                icon="👤"
                isHighlighted={true}
              >
                <p className="text-justify">Your profile is your digital handshake. Before sending a single message, make sure your profile builds trust.</p>
                <p className="text-justify">Use a clear, professional photo, a headline that communicates value, and an "About" section that explains who you help and how.</p>
                <p className="text-justify">Most decision-makers check your profile before responding. A strong profile increases your acceptance and reply rates by over 40%.</p>
              </StrategyModule>

              <StrategyModule 
                title="Define Your Ideal Prospect" 
                icon="🎯"
              >
                <p className="text-justify">Sending messages without clarity wastes time.</p>
                <p className="text-justify">Create a clear picture of your ideal customer based on industry, company size, title, and pain points. LinkedIn's advanced search filters and Sales Navigator make this easier than ever.</p>
                <p className="text-justify">360Airo allows you to import and manage these leads directly into your outreach sequences, so you can target the right people from day one.</p>
              </StrategyModule>

              <StrategyModule 
                title="Start with Warm Engagement" 
                icon="❤️"
              >
                <p className="text-justify">Before you send a connection request, engage with your prospect's content.</p>
                <p className="text-justify">Like, comment, or share their posts genuinely. This builds familiarity and makes your future message feel natural, not random.</p>
                <p className="text-justify">360Airo can track engagement and suggest prospects who have interacted with your brand recently, helping you reach out at the perfect time.</p>
              </StrategyModule>

              <StrategyModule 
                title="Send Personalized Connection Requests" 
                icon="💌"
                isHighlighted={true}
              >
                <p className="text-justify">Avoid generic messages like "Let's connect." Instead, reference something specific — their role, a post they wrote, or a shared interest. Keep it short and human.</p>
                <p className="text-justify">Small efforts like this can double your connection acceptance rate.</p>
              </StrategyModule>
            </div>

            <ExampleModule />

            <div className="space-y-6 mb-16">
              <StrategyModule 
                title="Follow Up the Right Way" 
                icon="🔄"
              >
                <p className="text-justify">Once connected, don't pitch immediately.</p>
                <p className="text-justify">Start with value. Share a useful article, offer a resource, or start a conversation about a topic they care about.</p>
                <p className="text-justify">360Airo allows you to automate these touchpoints while keeping messages personalized. You can create sequences that combine LinkedIn messages, InMails, and follow-up reminders — all without sounding robotic.</p>
              </StrategyModule>

              <StrategyModule 
                title="Combine LinkedIn with Email" 
                icon="📧"
              >
                <p className="text-justify">The most successful teams don't stop at LinkedIn. They combine it with cold email for a complete multichannel approach.</p>
                <p className="text-justify">For example, after connecting on LinkedIn, send a short, value-driven email that references your earlier conversation.</p>
                <p className="text-justify">With 360Airo, you can manage this entire flow from one dashboard — one campaign, multiple channels, consistent tracking.</p>
              </StrategyModule>

              <StrategyModule 
                title="Track and Optimize" 
                icon="📊"
                isHighlighted={true}
              >
                <p className="text-justify">Data tells you what's working.</p>
                <p className="text-justify">Monitor metrics like connection acceptance, message replies, and meeting conversions.</p>
                <p className="text-justify">360Airo's analytics dashboard helps identify which outreach templates and touchpoints bring the best results, so you can improve continuously.</p>
              </StrategyModule>

              <StrategyModule 
                title="Stay Consistent" 
                icon="⏰"
              >
                <p className="text-justify">Consistency beats intensity in outreach.</p>
                <p className="text-justify">It's better to reach out to 20 quality prospects a day with a thoughtful message than to spam 200 people once.</p>
                <p className="text-justify">360Airo's task manager and automation tools make it easy to stay consistent by managing daily outreach goals without burnout.</p>
              </StrategyModule>
            </div>

            <TrustBuildingModule />

            <FinalThoughtsModule />
          </motion.main>
        </div>

        <Footer />
      </div>
    </>
  );
}