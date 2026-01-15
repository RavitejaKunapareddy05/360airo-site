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
interface FeatureModuleProps {
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
        Free Email Verification: How to Verify Email Addresses for Free with 360Airo
      </h1>
      
      {/* Updated Header Image - Email Verification Specific */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative w-full max-w-3xl mx-auto mb-6 rounded-2xl overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Email Verification Dashboard - Clean email lists and improve deliverability"
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
              Protect your sender reputation and improve email deliverability with built-in free email verification
            </p>
          </div>
        </div>
      </motion.div>

      <p className="text-lg text-[#b45ecf]">
        Clean your email lists, protect sender reputation, and improve outreach results before sending a single email
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
          Why Email Verification is Critical for Outreach Success
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            Email outreach only works when your emails reach real inboxes. Yet one of the most common reasons campaigns underperform is poor list quality — invalid, inactive, or risky email addresses that quietly damage deliverability before results even have a chance to compound.
          </p>
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            That's exactly why 360Airo offers Free Email Verification built directly into the platform — so teams can clean lists, protect sender reputation, and improve outreach results before sending a single email.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 rounded-2xl p-6 border border-[#b45ecf]/30">
        <div className="text-center space-y-4">
          <div className="text-4xl">🛡️</div>
          <h3 className="text-xl font-bold text-white">Key Insight</h3>
          <p className="text-white/70 text-justify">
            Even the best-written emails fail if they never reach the inbox. By using free email verification, you address deliverability issues at the root instead of reacting after campaigns stall.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

const FeatureModule = ({ title, children, icon, isHighlighted = false }: FeatureModuleProps) => (
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

const HowItWorksModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">How 360Airo's Free Email Verification Works</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: "📝",
          title: "Syntax & Format Validation",
          description: "Checks whether the email follows proper formatting standards and eliminates obvious errors early."
        },
        {
          icon: "🌐",
          title: "Domain Validation",
          description: "Confirms the domain exists, is properly configured, and can receive emails."
        },
        {
          icon: "📬",
          title: "Mailbox Verification",
          description: "Verifies whether the mailbox itself is active without sending a test email."
        },
        {
          icon: "⚠️",
          title: "Risk Detection",
          description: "Identifies disposable emails, role-based addresses, and known high-risk patterns."
        }
      ].map((step, index) => (
        <div key={index} className="bg-[#19001d] p-6 rounded-2xl border border-white/10">
          <div className="text-3xl mb-4">{step.icon}</div>
          <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
          <p className="text-white/70 text-sm text-justify">{step.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

const StepByStepModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">How to Verify Email Addresses for Free Using 360Airo</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              1
            </div>
            <p className="text-white/80">Upload or sync your email list into 360Airo</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              2
            </div>
            <p className="text-white/80">Run free email verification instantly inside the platform</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              3
            </div>
            <p className="text-white/80">Review results categorized as verified, risky, or invalid</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              4
            </div>
            <p className="text-white/80">Exclude problematic addresses before sending campaigns</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              5
            </div>
            <p className="text-white/80">Launch outreach with confidence</p>
          </div>
        </div>
        <p className="text-white/70 mt-4 text-sm italic">
          No third-party tools. No spreadsheets. No manual cleanup steps that slow teams down.
        </p>
      </div>
      <div className="bg-[#19001d] p-6 rounded-2xl border-2 border-[#480056]">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-[#b45ecf] rounded-full flex items-center justify-center text-white text-sm font-bold">
            ✅
          </div>
          <div className="flex-1">
            <p className="text-white/90 leading-relaxed">
              "With 360Airo's built-in verification, we reduced our bounce rate by 92% and improved our deliverability across all campaigns. The best part? It's completely free and integrated right into our workflow."
            </p>
            <div className="mt-3 flex items-center space-x-2 text-xs text-white/60">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Actual user testimonial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const BenefitsModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">How Free Email Verification Improves Campaign Performance</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            📉
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Fewer Bounces & Errors</h4>
            <p className="text-white/70">Dramatically reduce bounce rates by removing invalid addresses before sending</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            📈
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Improved Inbox Placement</h4>
            <p className="text-white/70">Better sender reputation means more emails land in the primary inbox</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
            ⚡
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Higher Reply Rates</h4>
            <p className="text-white/70">More emails reaching real people = more opportunities for conversations</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-6xl mb-4">🚀</div>
        <p className="text-white/70 text-lg mb-4">
          Teams using 360Airo typically see:
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#19001d] p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#b45ecf]">92%</div>
            <div className="text-sm text-white/70">Fewer bounces</div>
          </div>
          <div className="bg-[#19001d] p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#b45ecf]">3.5x</div>
            <div className="text-sm text-white/70">Better deliverability</div>
          </div>
          <div className="bg-[#19001d] p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#b45ecf]">68%</div>
            <div className="text-sm text-white/70">Higher open rates</div>
          </div>
          <div className="bg-[#19001d] p-4 rounded-xl">
            <div className="text-2xl font-bold text-[#b45ecf]">2.2x</div>
            <div className="text-sm text-white/70">More replies</div>
          </div>
        </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Conclusion: Verify First, Send Second</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-white text-justify">
            Before subject lines. Before copywriting. Before scaling volume. Verify your emails.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            360Airo's Free Email Verification feature makes it easy to protect sender reputation, improve inbox placement, and run outreach with confidence.
          </p>
          <p className="text-lg leading-relaxed text-white font-semibold text-justify">
            Clean lists lead to better conversations. And better conversations drive results.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            Free email verification isn't a bonus feature. It's foundational infrastructure for any serious outreach program.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            By offering Free Email Verification inside 360Airo, teams avoid unnecessary risk, reduce dependence on external tools, and protect deliverability from day one.
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#b45ecf]/20">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#b45ecf] rounded-full"
            />
            <span className="text-[#b45ecf] text-sm font-semibold">Ready to Clean Your Lists?</span>
          </div>
          <div className="text-[#b45ecf] text-sm">
            🚀 Start with 360Airo's Free Verification
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function FreeEmailVerificationGuide() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://360airo.com/blogs/free-email-verification" />
        
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

            {/* Feature Sections */}
            <div className="space-y-6 mb-16">
              <FeatureModule 
                title="What Is Free Email Verification?" 
                icon="🔍"
                isHighlighted={true}
              >
                <p className="text-justify">Free email verification is the process of checking whether an email address is legitimate, active, and safe to send emails to. Instead of discovering bad addresses after campaigns bounce or land in spam, verification helps you catch problems upfront.</p>
                <p className="text-justify">A proper free email verification process checks whether an email address is valid and correctly formatted, associated with a real active domain, able to receive messages, and free from high-risk signals like disposable domains or spam traps.</p>
                <p className="text-justify">With 360Airo's Free Email Verification, this entire process happens inside the platform, removing the need to rely on external tools or paid services just to clean your list.</p>
              </FeatureModule>

              <FeatureModule 
                title="Why Email Verification Is Critical for Outreach" 
                icon="🎯"
              >
                <p className="text-justify">Email providers closely monitor sender behavior. When emails bounce, fail, or trigger spam signals, your sender reputation takes a hit — often without warning.</p>
                <p className="text-justify">Unverified email lists commonly lead to high bounce rates that signal poor sender hygiene, lower inbox placement across all campaigns, gradual reputation damage that's difficult to reverse, and declining reply rates, even with good messaging.</p>
                <p className="text-justify">Even the best-written emails fail if they never reach the inbox. By using a free email verification service like the one built into 360Airo, teams address deliverability issues at the root instead of reacting after campaigns stall.</p>
              </FeatureModule>

              <FeatureModule 
                title="What Makes 360Airo's Free Email Verification Different" 
                icon="🚀"
                isHighlighted={true}
              >
                <p className="text-justify">Most verification tools operate in isolation. You upload a list, clean it, download it, then re-upload it into your outreach tool — a process that's easy to skip under pressure.</p>
                <p className="text-justify">360Airo's free email verifier removes this friction entirely by making verification part of the outreach workflow itself. With 360Airo, you can verify emails automatically before launching campaigns, identify invalid, risky, or low-quality addresses instantly, keep lists clean without exporting or re-importing data, and improve deliverability across campaigns without manual intervention.</p>
                <p className="text-justify">Because verification is embedded, it actually gets used — not postponed or forgotten.</p>
              </FeatureModule>
            </div>

            <HowItWorksModule />

            <div className="space-y-6 mb-16">
              <FeatureModule 
                title="Who Should Use Free Email Verification in 360Airo" 
                icon="👥"
              >
                <p className="text-justify">360Airo's free email verification is valuable for teams at every stage, especially startups launching outbound for the first time, agencies onboarding new client lists with unknown quality, sales teams running cold email campaigns at scale, and teams relying on free or low-cost email outreach tools.</p>
                <p className="text-justify">All of these benefit significantly from cleaner lists. Even when using the cheapest cold email software, verification can be the difference between campaigns that fail silently and ones that perform consistently.</p>
              </FeatureModule>

              <FeatureModule 
                title="Free Email Verification vs Paid Tools" 
                icon="⚖️"
                isHighlighted={true}
              >
                <p className="text-justify">360Airo's Free Email Verification is ideal for small to mid-sized lists, early testing and pilot campaigns, and ongoing list hygiene without extra cost.</p>
                <p className="text-justify">As outreach volume grows, teams may choose to add advanced verification layers. However, starting with free email verification inside 360Airo ensures every campaign begins on solid footing.</p>
              </FeatureModule>

              <FeatureModule 
                title="Common Email Verification Mistakes (And How 360Airo Prevents Them)" 
                icon="⚠️"
              >
                <p className="text-justify">Many teams unintentionally sabotage deliverability by skipping verification entirely under time pressure, verifying lists once and never revisiting them, or using disconnected third-party tools that break workflows.</p>
                <p className="text-justify">360Airo prevents these issues by embedding Free Email Verification directly into the outreach process, making clean lists a default — not an afterthought.</p>
              </FeatureModule>

              <FeatureModule 
                title="How Free Email Verification Fits Into 360Airo's Outreach Stack" 
                icon="🔄"
                isHighlighted={true}
              >
                <p className="text-justify">360Airo's free email verification works seamlessly alongside email warmup to build sender trust, email sequences for structured follow-ups, campaign analytics for performance insights, and unified inbox for reply management.</p>
                <p className="text-justify">This ensures emails are verified, warmed, sent, tracked, and responded to — all within one cohesive system.</p>
              </FeatureModule>
            </div>

            <StepByStepModule />
            <BenefitsModule />
            <FinalThoughtsModule />
          </motion.main>
        </div>

        <Footer />
      </div>
    </>
  );
}
