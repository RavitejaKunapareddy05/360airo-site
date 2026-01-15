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
        10 Cheapest Cold Email Software Tools for Startups & Agencies (2026 Guide)
      </h1>
      
      {/* Updated Header Image - Cold Email Software Specific */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative w-full max-w-3xl mx-auto mb-6 rounded-2xl overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Cold Email Software Dashboard - Affordable tools for startups and agencies"
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
              Find affordable cold email software that supports deliverability, personalization, and scale without burning budget
            </p>
          </div>
        </div>
      </motion.div>

      <p className="text-lg text-[#b45ecf]">
        Cold email remains one of the most cost-effective growth channels — but only if the tooling makes sense
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
          How We Defined "Cheapest Cold Email Software"
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            This list isn't about tools that are "cheap" but unusable. To qualify, a platform had to meet at least three of the following:
          </p>
          <ul className="text-lg leading-relaxed text-white/80 space-y-2">
            <li className="flex items-start">
              <span className="text-[#b45ecf] mr-2">•</span>
              Low entry price suitable for startups
            </li>
            <li className="flex items-start">
              <span className="text-[#b45ecf] mr-2">•</span>
              Transparent pricing (no hidden seat costs)
            </li>
            <li className="flex items-start">
              <span className="text-[#b45ecf] mr-2">•</span>
              Core cold email functionality (sequences, scheduling, tracking)
            </li>
            <li className="flex items-start">
              <span className="text-[#b45ecf] mr-2">•</span>
              Basic deliverability support
            </li>
            <li className="flex items-start">
              <span className="text-[#b45ecf] mr-2">•</span>
              Practical for agencies or small sales teams
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            Some tools are fully paid, some are freemium, and some overlap with free email outreach tools for early testing.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 rounded-2xl p-6 border border-[#b45ecf]/30">
        <div className="text-center space-y-4">
          <div className="text-4xl">🎯</div>
          <h3 className="text-xl font-bold text-white">Key Insight</h3>
          <p className="text-white/70 text-justify">
            Paying enterprise-level prices before proving outbound is one of the fastest ways to burn budget without results. That's why many early-stage teams look for the cheapest cold email software that still supports deliverability, personalization, and scale.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

const ToolModule = ({ 
  number, 
  name, 
  bestFor, 
  description, 
  pros = [], 
  cons = []
}: { 
  number: number; 
  name: string; 
  bestFor: string; 
  description: string; 
  pros: string[]; 
  cons: string[];
}) => (
  <motion.div 
    variants={itemVariants}
    className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 mb-6"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{name}</h3>
          <div className="bg-[#b45ecf]/20 px-4 py-2 rounded-full">
            <span className="text-[#b45ecf] font-semibold">Best for: {bestFor}</span>
          </div>
        </div>
        
        <p className="text-white/80 mb-6 text-justify">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#19001d]/50 p-4 rounded-xl border border-green-500/20">
            <h4 className="text-lg font-bold text-green-400 mb-3">✅ Strengths</h4>
            <ul className="space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="text-white/70 text-sm flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#19001d]/50 p-4 rounded-xl border border-red-500/20">
            <h4 className="text-lg font-bold text-red-400 mb-3">⚠️ Considerations</h4>
            <ul className="space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="text-white/70 text-sm flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Why360AiroModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Why We Built 360Airo</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="space-y-6">
      <div className="bg-[#19001d] p-6 rounded-2xl border border-[#b45ecf]/30">
        <p className="text-lg leading-relaxed text-white/80 text-justify mb-4">
          Most cold email tools didn't fail because they were expensive. They failed because they forced teams to duct-tape five different tools together just to run one campaign properly.
        </p>
        <p className="text-lg leading-relaxed text-white/80 text-justify mb-6">
          We saw startups paying for:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {[
            { icon: "📧", text: "Email sending" },
            { icon: "🔥", text: "Inbox warmup" },
            { icon: "✅", text: "List verification" },
            { icon: "📊", text: "Reply tracking" },
            { icon: "📋", text: "Spreadsheets" }
          ].map((item, index) => (
            <div key={index} className="bg-[#0a0014] p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white/70 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-white/80 text-justify">
          That setup breaks fast — especially for small teams and agencies managing multiple campaigns.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">The 360Airo Difference</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <p className="text-white/80">Make deliverability the default, not an add-on</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <p className="text-white/80">Remove the need for third-party verification and warmup tools</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <p className="text-white/80">Manage email, LinkedIn, campaigns, replies, and analytics in one place</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                ✓
              </div>
              <p className="text-white/80">Keep pricing accessible so early-stage teams don't have to choose between growth and budget</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#19001d] p-6 rounded-2xl border-2 border-[#480056]">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#b45ecf] rounded-full flex items-center justify-center text-white text-sm font-bold">
              💡
            </div>
            <div className="flex-1">
              <p className="text-white/90 leading-relaxed">
                "360Airo wasn't designed as another point solution. It was built as a complete outreach system — one teams can start with and scale on without rebuilding their stack every few months."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const CostAnalysisModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">Cheapest Cold Email Software vs Long-Term Cost</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <p className="text-lg leading-relaxed text-white/80 text-justify mb-6">
          Many teams focus only on sticker price. In practice, real cost comes from:
        </p>
        <div className="space-y-4">
          {[
            "Needing multiple tools to fill feature gaps",
            "Paying separately for verification and warmup",
            "Losing deliverability due to missing safeguards",
            "Wasting time managing fragmented workflows"
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
              <p className="text-white/70">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-white/80 text-justify mt-6 italic">
          Sometimes the cheapest tool upfront becomes expensive over time.
        </p>
      </div>
      
      <div className="bg-[#19001d] p-6 rounded-2xl border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">Are Free Email Outreach Tools Enough?</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">Free tools are useful for:</h4>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Learning cold email basics
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Testing early assumptions
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Sending very low volumes
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-red-400 font-semibold mb-2">They usually lack:</h4>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Deliverability protection
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Inbox placement visibility
              </li>
              <li className="text-white/70 text-sm flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Scalable workflows
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white/60 text-sm mt-4 italic">
          Most teams outgrow free tools once results start to matter.
        </p>
      </div>
    </div>
  </motion.section>
);

const SelectionGuideModule = () => (
  <motion.section 
    variants={itemVariants} 
    className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-4">How to Choose the Cheapest Cold Email Software for Your Team</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          question: "Does this tool protect deliverability?",
          icon: "🛡️",
          description: "Look for built-in warmup, verification, and spam prevention"
        },
        {
          question: "Will I need multiple add-ons later?",
          icon: "🧩",
          description: "Consider the total cost of additional tools for missing features"
        },
        {
          question: "Can it grow with my outreach volume?",
          icon: "📈",
          description: "Ensure pricing scales reasonably as you send more emails"
        },
        {
          question: "Does it support agencies or teams?",
          icon: "👥",
          description: "Check for multi-client management and team collaboration features"
        }
      ].map((item, index) => (
        <div key={index} className="bg-[#19001d] p-6 rounded-2xl border border-white/10">
          <div className="text-3xl mb-4">{item.icon}</div>
          <h4 className="text-lg font-bold text-white mb-2">{item.question}</h4>
          <p className="text-white/70 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
    
    <div className="mt-8 text-center">
      <p className="text-lg text-white/80">
        The cheapest cold email software is the one that lets you grow without constantly switching platforms.
      </p>
    </div>
  </motion.section>
);

const ConclusionModule = () => (
  <motion.section variants={itemVariants} className="mb-16">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-3xl blur-xl opacity-50"></div>
      
      <div className="relative bg-gradient-to-br from-[#480056]/30 via-[#19001d]/50 to-[#480056]/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#b45ecf]/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-white text-justify">
            In 2026, affordable cold email software is less about "cheap" and more about efficient.
          </p>
          <p className="text-lg leading-relaxed text-white text-justify">
            Startups and agencies should look for tools that:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#19001d]/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="text-lg font-bold text-white mb-2">Reduce risk</h4>
              <p className="text-white/70 text-sm">Built-in deliverability protection and verification</p>
            </div>
            <div className="bg-[#19001d]/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="text-lg font-bold text-white mb-2">Minimize dependencies</h4>
              <p className="text-white/70 text-sm">Fewer external tools to manage and pay for</p>
            </div>
            <div className="bg-[#19001d]/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">🌱</div>
              <h4 className="text-lg font-bold text-white mb-2">Support sustainable outreach</h4>
              <p className="text-white/70 text-sm">Long-term deliverability and reputation management</p>
            </div>
            <div className="bg-[#19001d]/50 p-4 rounded-xl">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="text-lg font-bold text-white mb-2">Keep costs predictable</h4>
              <p className="text-white/70 text-sm">Transparent pricing without surprise fees</p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed text-white text-justify">
            Whether you start with Gmail-based tools or move directly to a platform like 360Airo, the goal is the same: outbound that scales without burning budget or domains.
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#b45ecf]/20">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#b45ecf] rounded-full"
            />
            <span className="text-[#b45ecf] text-sm font-semibold">Ready to Scale Your Outreach?</span>
          </div>
          <div className="text-[#b45ecf] text-sm">
            🚀 Choose Tools That Grow With You
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

            {/* Tool List Sections */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">The 10 Cheapest Cold Email Software Tools (2026)</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
              </div>

              <ToolModule
                number={1}
                name="360Airo"
                bestFor="Startups and agencies that want an all-in-one outreach stack without stacking tools"
                description="360Airo is positioned as one of the cheapest cold email software options that doesn't sacrifice infrastructure. It combines email campaigns, LinkedIn outreach, email warmup, free email verification, analytics, and a unified inbox in one platform. Instead of paying separately for verification, warmup, sequences, and reply management, teams get a consolidated system that keeps costs predictable."
                pros={[
                  "Built-in free email verification",
                  "Native email warmup",
                  "Email + LinkedIn campaigns",
                  "Unified inbox and analytics",
                  "Scales without adding multiple tools"
                ]}
                cons={["Newer platform compared to some established tools"]}
              />

              <ToolModule
                number={2}
                name="Instantly"
                bestFor="High-volume cold email senders focused on scale"
                description="Instantly is popular among agencies running large outbound volumes. Pricing is relatively affordable compared to enterprise platforms, though add-ons can increase costs over time. It's often used alongside other tools, which can raise the total spend beyond what early startups expect."
                pros={[
                  "Good for high-volume sending",
                  "Competitive pricing for agencies",
                  "Established platform with good reputation"
                ]}
                cons={[
                  "Add-ons can increase costs",
                  "Often requires additional tools",
                  "May be complex for beginners"
                ]}
              />

              <ToolModule
                number={3}
                name="SmartReach"
                bestFor="Teams wanting structured campaigns with moderate automation"
                description="SmartReach offers a balance between price and features. It's not the cheapest option on this list, but it's still competitive for teams that want a stable, mid-range cold email platform. For agencies managing multiple clients, pricing can scale quickly."
                pros={[
                  "Balanced feature set",
                  "Good for structured campaigns",
                  "Reliable platform"
                ]}
                cons={[
                  "Pricing scales quickly for agencies",
                  "Not the absolute cheapest",
                  "Limited advanced features"
                ]}
              />

              <ToolModule
                number={4}
                name="Mailmeteor"
                bestFor="Gmail-based outreach on a tight budget"
                description="Mailmeteor works directly inside Gmail and Google Sheets. It's one of the more affordable options for founders testing outbound for the first time. It lacks advanced deliverability tools but works well as an early experiment."
                pros={[
                  "Very affordable pricing",
                  "Works inside Gmail",
                  "Easy to get started",
                  "Good for first-time testing"
                ]}
                cons={[
                  "Lacks advanced deliverability tools",
                  "Limited scalability",
                  "Basic reporting"
                ]}
              />

              <ToolModule
                number={5}
                name="GMass"
                bestFor="Simple Gmail campaigns without complexity"
                description="GMass is a long-standing Gmail extension used for basic cold email campaigns. Pricing is low, making it attractive as a cheapest cold email software entry point. However, it's limited in reporting, inbox management, and long-term scalability."
                pros={[
                  "Very low pricing",
                  "Simple Gmail integration",
                  "Good for basic campaigns",
                  "Long-standing tool"
                ]}
                cons={[
                  "Limited reporting",
                  "Poor inbox management",
                  "Not scalable long-term",
                  "Basic features only"
                ]}
              />

              <ToolModule
                number={6}
                name="Lemlist"
                bestFor="Personalization-heavy campaigns"
                description="Lemlist focuses heavily on creative personalization (images, dynamic fields, videos). While not the cheapest tool outright, it remains cost-effective for teams prioritizing highly customized outreach. Many teams pair Lemlist with free email outreach tools for verification or warmup to manage costs."
                pros={[
                  "Excellent personalization features",
                  "Creative campaign options",
                  "Good for customized outreach"
                ]}
                cons={[
                  "Not the cheapest option",
                  "Often requires additional tools",
                  "Can be complex to set up"
                ]}
              />

              <ToolModule
                number={7}
                name="Woodpecker"
                bestFor="Simple follow-up automation"
                description="Woodpecker is straightforward and reasonably priced for small teams. It handles core sequencing well but often requires integrations for deeper analytics and inbox workflows."
                pros={[
                  "Simple and straightforward",
                  "Good for small teams",
                  "Reliable sequencing",
                  "Reasonably priced"
                ]}
                cons={[
                  "Requires integrations for advanced features",
                  "Limited native analytics",
                  "Basic functionality"
                ]}
              />

              <ToolModule
                number={8}
                name="Mailshake"
                bestFor="Sales teams that want structure without heavy customization"
                description="Mailshake sits in the mid-price range but remains accessible compared to enterprise tools. It's often used by agencies that value reliability over experimentation. Costs can rise with additional features and seats."
                pros={[
                  "Good structure and reliability",
                  "Accessible pricing",
                  "Agency-friendly features"
                ]}
                cons={[
                  "Costs rise with features/seats",
                  "Limited customization",
                  "Mid-range pricing"
                ]}
              />

              <ToolModule
                number={9}
                name="Yesware"
                bestFor="Sales teams already using Gmail or Outlook heavily"
                description="Yesware blends email tracking with basic sequencing. While not a pure cold email tool, it's sometimes used as a cheaper alternative for outbound when budgets are tight. It's better suited for warm or semi-cold outreach."
                pros={[
                  "Good email tracking",
                  "Integrates with Gmail/Outlook",
                  "Affordable for basic needs"
                ]}
                cons={[
                  "Not a dedicated cold email tool",
                  "Limited for pure cold outreach",
                  "Better for warm outreach"
                ]}
              />

              <ToolModule
                number={10}
                name="Snov.io"
                bestFor="All-in-one prospecting and outreach on a budget"
                description="Snov.io combines lead sourcing, verification, and outreach. It's often considered among the cheapest cold email software options for startups that want prospecting and sending in one place. Deliverability features are basic but sufficient for early-stage campaigns."
                pros={[
                  "Combines prospecting and outreach",
                  "All-in-one solution",
                  "Good for early-stage startups",
                  "Budget-friendly"
                ]}
                cons={[
                  "Basic deliverability features",
                  "Limited advanced capabilities",
                  "May outgrow quickly"
                ]}
              />
            </div>

            <Why360AiroModule />
            <CostAnalysisModule />
            <SelectionGuideModule />
            <ConclusionModule />
          </motion.main>
        </div>

        <Footer />
      </div>
    </>
  );
}
