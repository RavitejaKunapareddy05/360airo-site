// 'use client';

// import { motion } from 'framer-motion';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import Image from 'next/image';
// import { ReactNode } from 'react';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// // Type definitions
// interface FeatureModuleProps {
//   title: string;
//   children: ReactNode;
//   icon: string;
//   isHighlighted?: boolean;
// }

// // Unique Module Components
// const HeroSection = () => (
//   <motion.header 
//     initial="hidden"
//     animate="visible"
//     variants={containerVariants}
//     className="bg-gradient-to-b from-[#480056] to-[#19001d] py-16 px-4"
//   >
//     <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">
//         Free Email Verification: How to Verify Email Addresses for Free with 360Airo
//       </h1>
      
//       {/* Updated Header Image - Email Verification Specific */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="relative w-full max-w-3xl mx-auto mb-6 rounded-2xl overflow-hidden"
//       >
//         <Image
//           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//           alt="Email Verification Dashboard - Clean email lists and improve deliverability"
//           width={1200}
//           height={600}
//           className="w-full h-64 object-cover rounded-2xl shadow-2xl"
//           priority
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014]/70 via-transparent to-[#0a0014]/40 rounded-2xl"></div>
        
//         {/* Text Overlay */}
//         <div className="absolute bottom-4 left-4 right-4">
//           <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//             <p className="text-white text-sm font-medium">
//               Protect your sender reputation and improve email deliverability with built-in free email verification
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <p className="text-lg text-[#b45ecf]">
//         Clean your email lists, protect sender reputation, and improve outreach results before sending a single email
//       </p>
//     </motion.div>
//   </motion.header>
// );

// const IntroductionModule = () => (
//   <motion.section 
//     variants={itemVariants} 
//     className="mb-16 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10"
//   >
//     <div className="grid lg:grid-cols-2 gap-8 items-center">
//       <div>
//         <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//           Why Email Verification is Critical for Outreach Success
//         </h2>
//         <div className="space-y-4">
//           <p className="text-lg leading-relaxed text-white/80 text-justify">
//             Email outreach only works when your emails reach real inboxes. Yet one of the most common reasons campaigns underperform is poor list quality — invalid, inactive, or risky email addresses that quietly damage deliverability before results even have a chance to compound.
//           </p>
//           <p className="text-lg leading-relaxed text-white/80 text-justify">
//             That's exactly why 360Airo offers Free Email Verification built directly into the platform — so teams can clean lists, protect sender reputation, and improve outreach results before sending a single email.
//           </p>
//         </div>
//       </div>
//       <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 rounded-2xl p-6 border border-[#b45ecf]/30">
//         <div className="text-center space-y-4">
//           <div className="text-4xl">🛡️</div>
//           <h3 className="text-xl font-bold text-white">Key Insight</h3>
//           <p className="text-white/70 text-justify">
//             Even the best-written emails fail if they never reach the inbox. By using free email verification, you address deliverability issues at the root instead of reacting after campaigns stall.
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

// const FeatureModule = ({ title, children, icon, isHighlighted = false }: FeatureModuleProps) => (
//   <motion.section 
//     variants={itemVariants} 
//     className="mb-8"
//   >
//     <div className={`bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 ${
//       isHighlighted ? 'ring-2 ring-[#b45ecf]/30' : ''
//     }`}>
//       <div className="flex items-start gap-6">
//         <div className="flex-shrink-0">
//           <div className="w-16 h-16 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-2xl flex items-center justify-center text-2xl">
//             {icon}
//           </div>
//         </div>
//         <div className="flex-1">
//           <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
//           <div className="space-y-4 text-white/80">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

// const HowItWorksModule = () => (
//   <motion.section 
//     variants={itemVariants} 
//     className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
//   >
//     <div className="text-center mb-8">
//       <h2 className="text-3xl font-bold text-white mb-4">How 360Airo's Free Email Verification Works</h2>
//       <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
//     </div>
    
//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[
//         {
//           icon: "📝",
//           title: "Syntax & Format Validation",
//           description: "Checks whether the email follows proper formatting standards and eliminates obvious errors early."
//         },
//         {
//           icon: "🌐",
//           title: "Domain Validation",
//           description: "Confirms the domain exists, is properly configured, and can receive emails."
//         },
//         {
//           icon: "📬",
//           title: "Mailbox Verification",
//           description: "Verifies whether the mailbox itself is active without sending a test email."
//         },
//         {
//           icon: "⚠️",
//           title: "Risk Detection",
//           description: "Identifies disposable emails, role-based addresses, and known high-risk patterns."
//         }
//       ].map((step, index) => (
//         <div key={index} className="bg-[#19001d] p-6 rounded-2xl border border-white/10">
//           <div className="text-3xl mb-4">{step.icon}</div>
//           <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
//           <p className="text-white/70 text-sm text-justify">{step.description}</p>
//         </div>
//       ))}
//     </div>
//   </motion.section>
// );

// const StepByStepModule = () => (
//   <motion.section 
//     variants={itemVariants} 
//     className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
//   >
//     <div className="grid lg:grid-cols-2 gap-8 items-start">
//       <div>
//         <h3 className="text-2xl font-bold text-white mb-4">How to Verify Email Addresses for Free Using 360Airo</h3>
//         <div className="space-y-4">
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//               1
//             </div>
//             <p className="text-white/80">Upload or sync your email list into 360Airo</p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//               2
//             </div>
//             <p className="text-white/80">Run free email verification instantly inside the platform</p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//               3
//             </div>
//             <p className="text-white/80">Review results categorized as verified, risky, or invalid</p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//               4
//             </div>
//             <p className="text-white/80">Exclude problematic addresses before sending campaigns</p>
//           </div>
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//               5
//             </div>
//             <p className="text-white/80">Launch outreach with confidence</p>
//           </div>
//         </div>
//         <p className="text-white/70 mt-4 text-sm italic">
//           No third-party tools. No spreadsheets. No manual cleanup steps that slow teams down.
//         </p>
//       </div>
//       <div className="bg-[#19001d] p-6 rounded-2xl border-2 border-[#480056]">
//         <div className="flex items-start space-x-3">
//           <div className="w-8 h-8 bg-[#b45ecf] rounded-full flex items-center justify-center text-white text-sm font-bold">
//             ✅
//           </div>
//           <div className="flex-1">
//             <p className="text-white/90 leading-relaxed">
//               "With 360Airo's built-in verification, we reduced our bounce rate by 92% and improved our deliverability across all campaigns. The best part? It's completely free and integrated right into our workflow."
//             </p>
//             <div className="mt-3 flex items-center space-x-2 text-xs text-white/60">
//               <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               <span>Actual user testimonial</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

// const BenefitsModule = () => (
//   <motion.section 
//     variants={itemVariants} 
//     className="mb-16 bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-3xl p-8 border border-[#b45ecf]/20"
//   >
//     <div className="text-center mb-8">
//       <h2 className="text-3xl font-bold text-white mb-4">How Free Email Verification Improves Campaign Performance</h2>
//       <div className="w-32 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
//     </div>
    
//     <div className="grid lg:grid-cols-2 gap-8 items-center">
//       <div className="space-y-6">
//         <div className="flex items-start space-x-4">
//           <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
//             📉
//           </div>
//           <div>
//             <h4 className="text-lg font-bold text-white mb-1">Fewer Bounces & Errors</h4>
//             <p className="text-white/70">Dramatically reduce bounce rates by removing invalid addresses before sending</p>
//           </div>
//         </div>
        
//         <div className="flex items-start space-x-4">
//           <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
//             📈
//           </div>
//           <div>
//             <h4 className="text-lg font-bold text-white mb-1">Improved Inbox Placement</h4>
//             <p className="text-white/70">Better sender reputation means more emails land in the primary inbox</p>
//           </div>
//         </div>
        
//         <div className="flex items-start space-x-4">
//           <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center text-xl flex-shrink-0">
//             ⚡
//           </div>
//           <div>
//             <h4 className="text-lg font-bold text-white mb-1">Higher Reply Rates</h4>
//             <p className="text-white/70">More emails reaching real people = more opportunities for conversations</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="text-center">
//         <div className="text-6xl mb-4">🚀</div>
//         <p className="text-white/70 text-lg mb-4">
//           Teams using 360Airo typically see:
//         </p>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="bg-[#19001d] p-4 rounded-xl">
//             <div className="text-2xl font-bold text-[#b45ecf]">92%</div>
//             <div className="text-sm text-white/70">Fewer bounces</div>
//           </div>
//           <div className="bg-[#19001d] p-4 rounded-xl">
//             <div className="text-2xl font-bold text-[#b45ecf]">3.5x</div>
//             <div className="text-sm text-white/70">Better deliverability</div>
//           </div>
//           <div className="bg-[#19001d] p-4 rounded-xl">
//             <div className="text-2xl font-bold text-[#b45ecf]">68%</div>
//             <div className="text-sm text-white/70">Higher open rates</div>
//           </div>
//           <div className="bg-[#19001d] p-4 rounded-xl">
//             <div className="text-2xl font-bold text-[#b45ecf]">2.2x</div>
//             <div className="text-sm text-white/70">More replies</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

// const FinalThoughtsModule = () => (
//   <motion.section variants={itemVariants} className="mb-16">
//     <div className="relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-3xl blur-xl opacity-50"></div>
      
//       <div className="relative bg-gradient-to-br from-[#480056]/30 via-[#19001d]/50 to-[#480056]/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#b45ecf]/30">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-white mb-4">Conclusion: Verify First, Send Second</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-full mx-auto"></div>
//         </div>

//         <div className="space-y-6">
//           <p className="text-lg leading-relaxed text-white text-justify">
//             Before subject lines. Before copywriting. Before scaling volume. Verify your emails.
//           </p>
//           <p className="text-lg leading-relaxed text-white text-justify">
//             360Airo's Free Email Verification feature makes it easy to protect sender reputation, improve inbox placement, and run outreach with confidence.
//           </p>
//           <p className="text-lg leading-relaxed text-white font-semibold text-justify">
//             Clean lists lead to better conversations. And better conversations drive results.
//           </p>
//           <p className="text-lg leading-relaxed text-white text-justify">
//             Free email verification isn't a bonus feature. It's foundational infrastructure for any serious outreach program.
//           </p>
//           <p className="text-lg leading-relaxed text-white text-justify">
//             By offering Free Email Verification inside 360Airo, teams avoid unnecessary risk, reduce dependence on external tools, and protect deliverability from day one.
//           </p>
//         </div>

//         <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#b45ecf]/20">
//           <div className="flex items-center space-x-2">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-2 h-2 bg-[#b45ecf] rounded-full"
//             />
//             <span className="text-[#b45ecf] text-sm font-semibold">Ready to Clean Your Lists?</span>
//           </div>
//           <div className="text-[#b45ecf] text-sm">
//             🚀 Start with 360Airo's Free Verification
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.section>
// );

// export default function FreeEmailVerificationGuide() {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
//         {/* Canonical URL for SEO */}
//         <link rel="canonical" href="https://360airo.com/blogs/free-email-verification" />
        
//         <Navbar />

//         <div className="min-h-screen text-white pt-32">
//           <HeroSection />

//           {/* Main Content */}
//           <motion.main 
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="max-w-4xl mx-auto px-4 py-12"
//           >
//             <IntroductionModule />

//             {/* Feature Sections */}
//             <div className="space-y-6 mb-16">
//               <FeatureModule 
//                 title="What Is Free Email Verification?" 
//                 icon="🔍"
//                 isHighlighted={true}
//               >
//                 <p className="text-justify">Free email verification is the process of checking whether an email address is legitimate, active, and safe to send emails to. Instead of discovering bad addresses after campaigns bounce or land in spam, verification helps you catch problems upfront.</p>
//                 <p className="text-justify">A proper free email verification process checks whether an email address is valid and correctly formatted, associated with a real active domain, able to receive messages, and free from high-risk signals like disposable domains or spam traps.</p>
//                 <p className="text-justify">With 360Airo's Free Email Verification, this entire process happens inside the platform, removing the need to rely on external tools or paid services just to clean your list.</p>
//               </FeatureModule>

//               <FeatureModule 
//                 title="Why Email Verification Is Critical for Outreach" 
//                 icon="🎯"
//               >
//                 <p className="text-justify">Email providers closely monitor sender behavior. When emails bounce, fail, or trigger spam signals, your sender reputation takes a hit — often without warning.</p>
//                 <p className="text-justify">Unverified email lists commonly lead to high bounce rates that signal poor sender hygiene, lower inbox placement across all campaigns, gradual reputation damage that's difficult to reverse, and declining reply rates, even with good messaging.</p>
//                 <p className="text-justify">Even the best-written emails fail if they never reach the inbox. By using a free email verification service like the one built into 360Airo, teams address deliverability issues at the root instead of reacting after campaigns stall.</p>
//               </FeatureModule>

//               <FeatureModule 
//                 title="What Makes 360Airo's Free Email Verification Different" 
//                 icon="🚀"
//                 isHighlighted={true}
//               >
//                 <p className="text-justify">Most verification tools operate in isolation. You upload a list, clean it, download it, then re-upload it into your outreach tool — a process that's easy to skip under pressure.</p>
//                 <p className="text-justify">360Airo's free email verifier removes this friction entirely by making verification part of the outreach workflow itself. With 360Airo, you can verify emails automatically before launching campaigns, identify invalid, risky, or low-quality addresses instantly, keep lists clean without exporting or re-importing data, and improve deliverability across campaigns without manual intervention.</p>
//                 <p className="text-justify">Because verification is embedded, it actually gets used — not postponed or forgotten.</p>
//               </FeatureModule>
//             </div>

//             <HowItWorksModule />

//             <div className="space-y-6 mb-16">
//               <FeatureModule 
//                 title="Who Should Use Free Email Verification in 360Airo" 
//                 icon="👥"
//               >
//                 <p className="text-justify">360Airo's free email verification is valuable for teams at every stage, especially startups launching outbound for the first time, agencies onboarding new client lists with unknown quality, sales teams running cold email campaigns at scale, and teams relying on free or low-cost email outreach tools.</p>
//                 <p className="text-justify">All of these benefit significantly from cleaner lists. Even when using the cheapest cold email software, verification can be the difference between campaigns that fail silently and ones that perform consistently.</p>
//               </FeatureModule>

//               <FeatureModule 
//                 title="Free Email Verification vs Paid Tools" 
//                 icon="⚖️"
//                 isHighlighted={true}
//               >
//                 <p className="text-justify">360Airo's Free Email Verification is ideal for small to mid-sized lists, early testing and pilot campaigns, and ongoing list hygiene without extra cost.</p>
//                 <p className="text-justify">As outreach volume grows, teams may choose to add advanced verification layers. However, starting with free email verification inside 360Airo ensures every campaign begins on solid footing.</p>
//               </FeatureModule>

//               <FeatureModule 
//                 title="Common Email Verification Mistakes (And How 360Airo Prevents Them)" 
//                 icon="⚠️"
//               >
//                 <p className="text-justify">Many teams unintentionally sabotage deliverability by skipping verification entirely under time pressure, verifying lists once and never revisiting them, or using disconnected third-party tools that break workflows.</p>
//                 <p className="text-justify">360Airo prevents these issues by embedding Free Email Verification directly into the outreach process, making clean lists a default — not an afterthought.</p>
//               </FeatureModule>

//               <FeatureModule 
//                 title="How Free Email Verification Fits Into 360Airo's Outreach Stack" 
//                 icon="🔄"
//                 isHighlighted={true}
//               >
//                 <p className="text-justify">360Airo's free email verification works seamlessly alongside email warmup to build sender trust, email sequences for structured follow-ups, campaign analytics for performance insights, and unified inbox for reply management.</p>
//                 <p className="text-justify">This ensures emails are verified, warmed, sent, tracked, and responded to — all within one cohesive system.</p>
//               </FeatureModule>
//             </div>

//             <StepByStepModule />
//             <BenefitsModule />
//             <FinalThoughtsModule />
//           </motion.main>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CheckCircle2,
  Mail,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Eye,
  ChevronRight,
  Verified,
  AlertTriangle,
  Globe,
  MailCheck,
  RefreshCw,
  Cpu,
  Workflow,
  LineChart,
  Rocket,
  Star,
  Award,
  Lightbulb,
  ZapOff,
  MailWarning,
  MailOpen,
  Check,
  X,
  HelpCircle,
  Calendar,
  User,
  DollarSign,
  Play
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

// Simple toast function
const showToast = (title: string, description: string) => {
  if (typeof window !== 'undefined') {
    console.log(`Toast: ${title} - ${description}`);
  }
};

// Blog Metadata
const blogMetadata = {
  title: "Free Email Verification: How to Verify Email Addresses for Free with 360Airo",
  excerpt: "Learn how 360Airo's built-in Free Email Verification helps you clean lists, protect sender reputation, and improve outreach results before sending a single email.",
  author: {
    name: "360Airo Team",
    role: "Outreach Experts",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=360airo"
  },
  publishedDate: "April 15, 2024",
  readTime: "8 min read",
  category: "Email Outreach",
  tags: ["Email Verification", "Deliverability", "Cold Email", "Free Tools", "360Airo"]
};

// Simplified Blog Sections
const blogSections = [
  {
    id: "intro",
    title: "What Is Free Email Verification?",
    icon: MailCheck,
    content: "Free email verification is the process of checking whether an email address is legitimate, active, and safe to send emails to. Instead of discovering bad addresses after campaigns bounce or land in spam, verification helps you catch problems upfront.",
    highlight: true
  },
  {
    id: "importance",
    title: "Why Email Verification Is Critical for Outreach",
    icon: Shield,
    content: "Email providers closely monitor sender behavior. When emails bounce, fail, or trigger spam signals, your sender reputation takes a hit — often without warning.",
    stats: [
      { label: "Bounce Rate Reduction", value: "85%", icon: TrendingUp },
      { label: "Inbox Placement", value: "94%", icon: BarChart3 },
      { label: "Reply Rate Improvement", value: "3x", icon: Users }
    ]
  },
  {
    id: "differentiator",
    title: "What Makes 360Airo's Free Email Verification Different",
    icon: Zap,
    content: "Most verification tools operate in isolation. You upload a list, clean it, download it, then re-upload it into your outreach tool — a process that's easy to skip under pressure. 360Airo's free email verifier removes this friction entirely.",
    features: [
      "Verify emails automatically before launching campaigns",
      "Identify invalid, risky, or low-quality addresses instantly",
      "Keep lists clean without exporting or re-importing data",
      "Improve deliverability across campaigns without manual intervention"
    ]
  }
];

// Stats Data
const verificationStats = [
  { label: "Emails Verified", value: "1.2M+", icon: MailCheck, color: "text-green-500" },
  { label: "Bounce Rate Reduced", value: "85%", icon: TrendingUp, color: "text-blue-500" },
  { label: "Time Saved", value: "90%", icon: Clock, color: "text-purple-500" },
  { label: "Cost Savings", value: "$50K+", icon: DollarSign, color: "text-emerald-500" }
];

// Related Articles
const relatedArticles = [
  {
    title: "Mastering Cold Email Deliverability",
    excerpt: "Advanced strategies to ensure your emails reach the inbox every time",
    readTime: "6 min",
    category: "Deliverability"
  },
  {
    title: "The Complete Guide to Email Warmup",
    excerpt: "Step-by-step process to build sender reputation from scratch",
    readTime: "10 min",
    category: "Warmup"
  },
  {
    title: "Building Effective Email Sequences",
    excerpt: "Create high-converting automated email workflows",
    readTime: "7 min",
    category: "Sequences"
  }
];

// Custom Component: AnimatedStatCard
const AnimatedStatCard = ({ stat }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
      const increment = target / 50;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(counter);
    }, 500);

    return () => clearTimeout(timer);
  }, [stat.value]);

  const Icon = stat.icon;
  
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')}/10`}>
          <Icon className={`h-6 w-6 ${stat.color}`} />
        </div>
        <Sparkles className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-white">
          {stat.value.includes('+') || stat.value.includes('%') || stat.value.includes('$') 
            ? `${count}${stat.value.replace(/[0-9]/g, '')}`
            : count}
        </div>
        <p className="text-sm text-gray-400">{stat.label}</p>
      </div>
    </div>
  );
};

// Main Blog Component
export default function EmailVerificationBlog() {
  const [activeSection, setActiveSection] = useState(blogSections[0].id);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [views, setViews] = useState(1248);
  const [shares, setShares] = useState(86);

  // Simulate view count increase
  useEffect(() => {
    const timer = setTimeout(() => {
      setViews(prev => prev + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    showToast(liked ? "Article unliked" : "Article liked!", liked ? "Thanks for your feedback" : "Glad you found this helpful!");
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    showToast(bookmarked ? "Removed from bookmarks" : "Bookmarked!", bookmarked ? "Article removed from saved" : "Article saved for later");
  };

  const handleShare = () => {
    setShares(prev => prev + 1);
    if (navigator.share) {
      navigator.share({
        title: blogMetadata.title,
        text: blogMetadata.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied!", "Share this article with your team");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute left-1/4 top-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Category & Metadata */}
                <div className="flex items-center gap-4 text-sm">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                    {blogMetadata.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {blogMetadata.publishedDate}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    {blogMetadata.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye className="h-4 w-4" />
                    {views.toLocaleString()} views
                  </div>
                </div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Free Email Verification:{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    How to Verify Email Addresses for Free with 360Airo
                  </span>
                </motion.h1>

                {/* Excerpt */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  {blogMetadata.excerpt}
                </motion.p>

                {/* Author & Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-blue-500/30">
                      <AvatarImage src={blogMetadata.author.avatar} />
                      <AvatarFallback>360</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{blogMetadata.author.name}</div>
                      <div className="text-sm text-gray-400">{blogMetadata.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleLike}
                      className={`border-gray-700 hover:border-red-500 hover:bg-red-500/10 ${liked ? 'border-red-500 bg-red-500/10 text-red-500' : ''}`}
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleBookmark}
                      className={`border-gray-700 hover:border-yellow-500 hover:bg-yellow-500/10 ${bookmarked ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : ''}`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleShare}
                      className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>

                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Try Free Verification
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {blogMetadata.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-300 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </motion.div>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Article Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Helpfulness</span>
                      <span className="text-green-400 font-semibold">96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-gray-400">Share Rate</span>
                      <span className="text-blue-400 font-semibold">{shares}</span>
                    </div>
                    <Progress value={Math.min(shares, 100)} className="h-2" />
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                  <div className="space-y-2">
                    {blogSections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveSection(section.id);
                          }}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                            activeSection === section.id
                              ? 'bg-blue-500/20 border border-blue-500/30'
                              : 'hover:bg-gray-800/50 border border-transparent'
                          }`}
                        >
                          <Icon className="h-4 w-4 text-blue-400" />
                          <span className="text-sm text-left text-white">{section.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Blog Content */}
              <div className="lg:col-span-2 space-y-16">
                {blogSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="scroll-mt-24"
                    >
                      <div className="space-y-6">
                        {/* Section Header */}
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <Icon className="h-6 w-6 text-blue-400" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {section.title}
                          </h2>
                          {section.highlight && (
                            <Badge className="ml-3 bg-gradient-to-r from-green-500 to-emerald-500">
                              <Sparkles className="mr-1 h-3 w-3" />
                              Essential
                            </Badge>
                          )}
                        </div>

                        {/* Content */}
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {section.content}
                        </p>

                        {/* Stats Grid */}
                        {section.stats && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                            {section.stats.map((stat, idx) => {
                              const StatIcon = stat.icon;
                              return (
                                <div key={idx} className="p-4 bg-gray-900/30 rounded-xl border border-gray-800">
                                  <div className="flex items-center gap-3 mb-2">
                                    <StatIcon className="h-5 w-5 text-blue-400" />
                                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                                  </div>
                                  <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Features List */}
                        {section.features && (
                          <div className="space-y-3 pt-4">
                            {section.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Key Takeaways */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">Key Takeaways</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Verified className="h-5 w-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Built-in Verification</h4>
                          <p className="text-gray-400 text-sm">No need for external tools or manual processes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Reputation Protection</h4>
                          <p className="text-gray-400 text-sm">Maintain sender reputation by filtering bad addresses</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-purple-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Instant Results</h4>
                          <p className="text-gray-400 text-sm">Verify thousands of emails in seconds</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <LineChart className="h-5 w-5 text-emerald-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Performance Boost</h4>
                          <p className="text-gray-400 text-sm">See immediate improvement in campaign metrics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Free to Get Started</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Clean Your Email List?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of teams using 360Airo's Free Email Verification to protect their sender reputation and boost campaign performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                      Start Free Verification
                      <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-700 hover:border-blue-500 hover:bg-blue-500/10">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {verificationStats.map((stat, index) => (
                    <AnimatedStatCard key={index} stat={stat} />
                  ))}
                </div>

                {/* FAQ */}
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Common Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm">Is email verification really free?</h4>
                      <p className="text-sm text-gray-400">
                        Yes! 360Airo includes Free Email Verification as part of our platform. No hidden costs or limits for basic verification.
                      </p>
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm">How many emails can I verify?</h4>
                      <p className="text-sm text-gray-400">
                        Free verification supports up to 1,000 emails per month. Higher volumes available with premium plans.
                      </p>
                    </div>
                    <Separator className="bg-gray-800" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm">Does verification affect sender reputation?</h4>
                      <p className="text-sm text-gray-400">
                        No, our verification process is completely passive and doesn't send any emails to the addresses being verified.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedArticles.map((article, index) => (
                      <div key={index} className="group p-4 rounded-lg border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/30 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="border-gray-700 text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{article.readTime} read</span>
                        </div>
                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-400">{article.excerpt}</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                          <ChevronRight className="h-3 w-3" />
                          Read article
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <Avatar className="h-20 w-20 border-4 border-blue-500/30">
                  <AvatarImage src={blogMetadata.author.avatar} />
                  <AvatarFallback>360</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">{blogMetadata.author.name}</h3>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                      <Award className="mr-1 h-3 w-3" />
                      Expert Contributor
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">
                    The 360Airo team consists of email outreach experts with years of experience helping businesses improve their deliverability and campaign performance. We're passionate about making advanced email tools accessible to everyone.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="border-gray-700">
                      <User className="mr-2 h-3 w-3" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-700">
                      <MessageSquare className="mr-2 h-3 w-3" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-700">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      More Articles
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

