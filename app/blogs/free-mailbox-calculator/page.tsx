'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calculator, 
  Shield, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Mail,
  Zap,
  BarChart3,
  Target,
  Users,
  Clock,
  Server,
  ArrowRight,
  Calendar,
  Eye,
  BookOpen,
  Mailbox,
  Scale,
  LineChart,
  CheckSquare
} from 'lucide-react';
import Link from 'next/link';

// Fixed variants with proper easing types
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, duration: 0.3 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut" as const 
    } 
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

// Fixed animation variants
const pulseGlow = {
  initial: { boxShadow: "0 0 0 0 rgba(123, 97, 255, 0.4)" },
  pulse: { 
    boxShadow: "0 0 0 20px rgba(123, 97, 255, 0)",
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
};

// Calculator Component
const MailboxCalculator = () => {
  const [dailyEmails, setDailyEmails] = useState(500);
  const [mailboxes, setMailboxes] = useState(3);
  const [warmupStage, setWarmupStage] = useState(false);
  const [domainAge, setDomainAge] = useState('new');
  
  const safePerMailbox = warmupStage ? 50 : domainAge === 'new' ? 100 : 150;
  const recommendedMailboxes = Math.ceil(dailyEmails / safePerMailbox);
  const currentCapacity = mailboxes * safePerMailbox;
  const isOverloaded = dailyEmails > currentCapacity;
  const buffer = Math.ceil(dailyEmails * 0.2);
  const safeDaily = currentCapacity - buffer;

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#b45ecf]/20 shadow-2xl shadow-[#b45ecf]/10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#b45ecf]/20 rounded-xl">
          <Calculator className="w-8 h-8 text-[#b45ecf]" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Free Mailbox Calculator</h3>
          <p className="text-[#b45ecf]/70">Plan your safe sending limits</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Daily Emails Input */}
        <div>
          <label className="flex items-center gap-2 text-white mb-3">
            <Mail className="w-5 h-5 text-[#b45ecf]" />
            <span>Daily Email Volume</span>
            <span className="ml-auto text-[#b45ecf] font-mono">{dailyEmails} emails/day</span>
          </label>
          <input
            type="range"
            min="50"
            max="5000"
            step="50"
            value={dailyEmails}
            onChange={(e) => setDailyEmails(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>50</span>
            <span>2,500</span>
            <span>5,000</span>
          </div>
        </div>

        {/* Mailboxes Input */}
        <div>
          <label className="flex items-center gap-2 text-white mb-3">
            <Users className="w-5 h-5 text-[#b45ecf]" />
            <span>Current Mailboxes</span>
            <span className="ml-auto text-[#b45ecf] font-mono">{mailboxes} mailboxes</span>
          </label>
          <div className="flex gap-4">
            {[1, 2, 3, 5, 10].map(num => (
              <button
                key={num}
                onClick={() => setMailboxes(num)}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${mailboxes === num ? 'bg-[#b45ecf] text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-white mb-3">
              <Clock className="w-5 h-5 text-[#b45ecf]" />
              <span>Warmup Stage</span>
            </label>
            <button
              onClick={() => setWarmupStage(!warmupStage)}
              className={`w-full py-3 rounded-xl text-center transition-all ${warmupStage ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-gray-800 text-gray-300'}`}
            >
              {warmupStage ? 'Active (50/day)' : 'Inactive (100+/day)'}
            </button>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-white mb-3">
              <Target className="w-5 h-5 text-[#b45ecf]" />
              <span>Domain Age</span>
            </label>
            <select
              value={domainAge}
              onChange={(e) => setDomainAge(e.target.value)}
              className="w-full py-3 px-4 bg-gray-800 rounded-xl text-white border border-gray-700 focus:border-[#b45ecf] focus:outline-none"
            >
              <option value="new">New (&lt;=30 days)</option>
              <option value="established">Established (&gt;30 days)</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-xl border-2 ${isOverloaded ? 'bg-red-500/10 border-red-500/30' : 'bg-green-500/10 border-green-500/30'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            {isOverloaded ? (
              <AlertTriangle className="w-8 h-8 text-red-400" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-400" />
            )}
            <div>
              <h4 className="text-xl font-bold text-white">
                {isOverloaded ? 'Overloaded Capacity' : 'Safe Sending Range'}
              </h4>
              <p className={isOverloaded ? 'text-red-300' : 'text-green-300'}>
                {isOverloaded 
                  ? 'Reduce volume or add more mailboxes'
                  : 'Your setup is within safe limits'}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Safe per mailbox:</span>
              <span className="text-white font-bold">{safePerMailbox}/day</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Current capacity:</span>
              <span className={`font-bold ${isOverloaded ? 'text-red-400' : 'text-green-400'}`}>
                {currentCapacity}/day
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Recommended mailboxes:</span>
              <span className="text-[#b45ecf] font-bold">{recommendedMailboxes}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Safe daily limit:</span>
              <span className="text-white font-bold">{Math.max(0, safeDaily)}/day</span>
            </div>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white font-bold rounded-xl hover:from-[#b45ecf]/90 hover:to-[#480056]/90 transition-all flex items-center justify-center gap-3"
        >
          <Zap className="w-5 h-5" />
          Generate Detailed Plan
          <span className="ml-2 px-3 py-1 bg-white/20 rounded-full text-sm">Free</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Feature Module
interface FeatureModuleProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: 'purple' | 'green' | 'blue' | 'amber';
}

const FeatureModule = ({ 
  icon: Icon, 
  title, 
  description,
  color = 'purple'
}: FeatureModuleProps) => {
  const colorClasses = {
    purple: 'from-[#b45ecf]/20 to-[#480056]/20 border-[#b45ecf]/30 text-[#b45ecf]',
    green: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-300',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-300'
  };

  const iconColorClasses = {
    purple: 'bg-[#b45ecf]/20',
    green: 'bg-emerald-500/20',
    blue: 'bg-blue-500/20',
    amber: 'bg-amber-500/20'
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm rounded-2xl p-6 border`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${iconColorClasses[color]}`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
          <p className="text-gray-200/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// FAQ Module
interface FAQModuleProps {
  question: string;
  answer: string;
}

const FAQModule = ({ question, answer }: FAQModuleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-gray-800 pb-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h4 className="text-lg font-bold text-white pr-8">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-[#b45ecf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 mt-4 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// Content Section Component
const ContentSection = ({ 
  title, 
  content, 
  isList = false,
  listItems = [],
  icon
}: { 
  title: string; 
  content: string;
  isList?: boolean;
  listItems?: string[];
  icon?: React.ReactNode;
}) => (
  <motion.div variants={itemVariants} className="space-y-4">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{content}</p>
    {isList && listItems.length > 0 && (
      <ul className="space-y-3 mt-4">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <CheckSquare className="w-5 h-5 text-[#b45ecf] mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

// Stat Module
interface StatModuleProps {
  value: string;
  label: string;
  change?: string;
}

const StatModule = ({ value, label, change }: StatModuleProps) => (
  <motion.div
    variants={itemVariants}
    className="text-center p-6 bg-[#19001d]/50 rounded-2xl border border-[#b45ecf]/20"
  >
    <div className="text-4xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-400 mb-1">{label}</div>
    {change && (
      <div className={`text-sm ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </div>
    )}
  </motion.div>
);

export default function FreeMailboxCalculatorBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b45ecf]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#480056]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-32 pb-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-[#b45ecf]/10 border border-[#b45ecf]/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-[#b45ecf] rounded-full animate-pulse" />
                <span className="text-[#b45ecf] font-semibold">Essential Tool Guide</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#b45ecf] via-white to-[#d67bff] bg-clip-text text-transparent">
                Free Email Mailbox Calculator to Scale Outreach Safely
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Calculate exact mailbox needs to prevent deliverability issues and protect sender reputation.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 text-white/60 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 3, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>2.8K views</span>
                </div>
              </div>

              <motion.div
                initial="initial"
                animate="pulse"
                variants={pulseGlow}
                className="inline-block"
              >
                <Link href="#calculator">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white font-bold rounded-xl hover:from-[#b45ecf]/90 hover:to-[#480056]/90 transition-all flex items-center gap-3">
                    <Calculator className="w-5 h-5" />
                    Try Free Calculator
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <StatModule value="+89%" label="Deliverability Improvement" change="+12%" />
              <StatModule value="-62%" label="Spam Complaints" change="-18%" />
              <StatModule value="3.2x" label="Campaign Success Rate" change="+0.8x" />
              <StatModule value="24h" label="Recovery Time Saved" />
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Introduction */}
            <section className="space-y-6">
              <motion.div variants={itemVariants}>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Scaling email outreach isn't just about writing better emails or sending more messages. One of the most common (and expensive) mistakes teams make is scaling without understanding how many mailboxes they actually need — and what that means for deliverability.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-xl text-gray-300 leading-relaxed">
                  That's where a Free tools mailbox calculator becomes essential. Before increasing volume, adding domains, or launching new campaigns, a mailbox calculator helps you plan sending limits realistically and protect sender reputation.
                </p>
              </motion.div>
            </section>

            {/* Why Scaling Without Planning Hurts */}
            <section className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-8 border border-red-500/20">
              <ContentSection
                title="Why Scaling Email Without Planning Hurts Deliverability"
                content="Most email deliverability issues don't come from bad intent — they come from overloading inboxes. When teams scale too fast:"
                icon={<AlertTriangle className="w-8 h-8 text-red-400" />}
                isList={true}
                listItems={[
                  "Mailboxes send more than they can safely handle",
                  "Bounce rates increase",
                  "Spam complaints rise",
                  "Sender reputation drops quietly"
                ]}
              />
              <motion.div variants={itemVariants} className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  Once reputation is damaged, even normal emails start landing in spam. Recovering from that takes weeks — sometimes months. Using a Free tools mailbox calculator allows you to plan outreach volume before problems start.
                </p>
              </motion.div>
            </section>

            {/* What Is a Mailbox Calculator */}
            <section className="space-y-6">
              <ContentSection
                title="What Is a Free Tools Mailbox Calculator?"
                content="A mailbox calculator is a simple planning tool that estimates:"
                icon={<Calculator className="w-8 h-8 text-[#b45ecf]" />}
                isList={true}
                listItems={[
                  "How many emails you can safely send per mailbox",
                  "How many mailboxes you need for a target sending volume",
                  "Whether your current setup is likely to impact deliverability"
                ]}
              />
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl p-6 border border-[#b45ecf]/20">
                  <p className="text-lg text-[#b45ecf] font-medium italic">
                    "A mailbox calculator tool free doesn't send emails or analyze content. Instead, it helps you answer a foundational question: 'How much can I send without hurting my inbox placement?'"
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Calculator Section */}
            <section id="calculator" className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Try Our Free Mailbox Calculator</h2>
                <p className="text-gray-400 text-xl">Calculate your safe sending limits in seconds</p>
              </div>
              <MailboxCalculator />
            </section>

            {/* Why It Matters for Cold Email */}
            <section className="space-y-6">
              <ContentSection
                title="Why a Mailbox Calculator Matters for Cold Email Campaigns"
                content="Cold email is different from newsletters or transactional emails. Providers are stricter, and mistakes compound faster. A Free tools mailbox calculator helps you:"
                icon={<Shield className="w-8 h-8 text-[#b45ecf]" />}
                isList={true}
                listItems={[
                  "Avoid overloading individual mailboxes",
                  "Distribute volume across domains and inboxes",
                  "Reduce reliance on guesswork",
                  "Lower the risk of spam flags"
                ]}
              />
              <motion.div variants={itemVariants}>
                <p className="text-gray-300 leading-relaxed">
                  For teams running cold outreach, this planning step often matters more than subject lines or templates.
                </p>
              </motion.div>
            </section>

            {/* How It Works */}
            <section className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-8 border border-blue-500/20">
              <ContentSection
                title="How a Mailbox Calculator Tool Works (In Simple Terms)"
                content="A typical mailbox calculator tool online considers:"
                icon={<LineChart className="w-8 h-8 text-blue-400" />}
                isList={true}
                listItems={[
                  "Number of emails you want to send per day",
                  "Safe sending limits per mailbox",
                  "Recommended buffer to keep spam rates low"
                ]}
              />
              <motion.div variants={itemVariants} className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  Some calculators also factor in: Warm-up stage vs steady-state sending, campaign type (cold vs warm), and risk tolerance based on domain age.
                </p>
                <div className="mt-4 bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <p className="text-gray-400 italic">
                    The output isn't a rule — it's a safety estimate.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Planning Volume Right Way */}
            <section className="space-y-6">
              <ContentSection
                title="Planning Volume the Right Way (Not the Aggressive Way)"
                content='Many teams ask: "How many mailboxes for cold email do we really need?" The honest answer: fewer than you think — if volume is planned properly. A Free bulk email calculator helps teams see:'
                icon={<Scale className="w-8 h-8 text-[#b45ecf]" />}
                isList={true}
                listItems={[
                  "When adding more mailboxes makes sense",
                  "When lowering daily sends is safer",
                  "How to scale gradually instead of all at once"
                ]}
              />
              <motion.div variants={itemVariants}>
                <p className="text-gray-300 leading-relaxed">
                  This prevents the "send more, fix later" trap that damages domains.
                </p>
              </motion.div>
            </section>

            {/* Comparison Section */}
            <section className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-8 border border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Without a Calculator</h3>
                </div>
                <ul className="space-y-3">
                  {["Volume decisions are emotional", "Teams rely on anecdotes", "Deliverability issues appear too late"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl p-8 border border-green-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">With a Calculator</h3>
                </div>
                <ul className="space-y-3">
                  {["Volume decisions are intentional", "Risk is visible upfront", "Scaling becomes predictable"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </section>

            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl p-6 border border-[#b45ecf]/20">
                <p className="text-xl text-white italic">
                  "It's not about being conservative — it's about being controlled."
                </p>
              </div>
            </motion.div>

            {/* How This Supports Deliverability */}
            <section className="space-y-6">
              <ContentSection
                title="How This Supports Better Email Deliverability"
                content="Mailbox planning directly impacts:"
                icon={<BarChart3 className="w-8 h-8 text-[#b45ecf]" />}
                isList={true}
                listItems={[
                  "Spam complaint rates",
                  "Bounce rates",
                  "Inbox placement"
                ]}
              />
              <motion.div variants={itemVariants}>
                <p className="text-gray-300 leading-relaxed">
                  Used alongside an email bounce rate calculator and basic list hygiene, a mailbox calculator helps teams maintain a healthier sending profile over time. It's one of the simplest ways to check email deliverability before campaigns go live.
                </p>
              </motion.div>
            </section>

            {/* When to Use */}
            <section className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-8 border border-purple-500/20">
              <ContentSection
                title="When Should You Use a Mailbox Calculator?"
                content="Use a mailbox calculator when:"
                icon={<Clock className="w-8 h-8 text-purple-400" />}
                isList={true}
                listItems={[
                  "Launching your first cold email campaign",
                  "Increasing daily send volume",
                  "Adding new domains or inboxes",
                  "Running campaigns for multiple clients"
                ]}
              />
              <motion.div variants={itemVariants} className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  Even experienced teams use a mailbox calculator tool free as a quick validation step before scaling.
                </p>
              </motion.div>
            </section>

            {/* Workflow Integration */}
            <section className="space-y-6">
              <ContentSection
                title="How This Fits Into a Safe Outreach Workflow"
                content="A mailbox calculator works best when combined with:"
                icon={<Server className="w-8 h-8 text-[#b45ecf]" />}
                isList={true}
                listItems={[
                  "Email warmup",
                  "List cleaning",
                  "Basic email template checks",
                  "Ongoing performance monitoring"
                ]}
              />
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl p-6 border border-gray-800">
                  <p className="text-lg text-white font-medium">
                    It's not a replacement for strategy — it's a safeguard.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-12 px-8 bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl border border-[#b45ecf]/20">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Try Our Free Mailbox Calculator Before You Scale
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you're planning to increase volume, don't rely on assumptions. Try our Free Mailbox Calculator to estimate how many inboxes you need and how to scale without putting deliverability at risk.
                </p>
                <p className="text-lg text-[#b45ecf] mb-10">
                  It's a simple step — and often the difference between campaigns that grow and campaigns that get blocked.
                </p>
                
                <Link href="#calculator">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white font-bold rounded-xl shadow-lg shadow-[#b45ecf]/25 hover:from-[#b45ecf]/90 hover:to-[#480056]/90 transition-all"
                  >
                    Use Free Calculator Now
                  </motion.button>
                </Link>
              </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-8">
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">People Also Ask</h2>
                <p className="text-gray-400">Common questions about email deliverability and mailbox management</p>
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-6">
                <FAQModule
                  question="What is a good email deliverability score?"
                  answer="A good deliverability score typically means most emails land in the primary inbox with low bounce and spam rates. While scores vary by provider, consistency matters more than a single number."
                />
                <FAQModule
                  question="How to calculate email deliverability rate?"
                  answer="Deliverability rate is calculated by subtracting bounced and rejected emails from total sends, then measuring inbox placement and spam filtering outcomes."
                />
                <FAQModule
                  question="How to check if a mailbox is full?"
                  answer="Mailbox capacity can usually be checked through your email provider's storage settings. Full mailboxes can cause delivery failures and should be monitored regularly."
                />
                <FAQModule
                  question="How to measure email deliverability?"
                  answer="Deliverability is measured using bounce rates, spam complaints, inbox placement tests, and engagement metrics across campaigns."
                />
                <FAQModule
                  question="How do I create my own mailbox?"
                  answer="Mailboxes can be created through email providers or hosting services by setting up a domain and adding inbox users with proper authentication."
                />
                <FAQModule
                  question="How to check mailbox capacity?"
                  answer="Mailbox capacity is checked within your email provider dashboard, where storage usage and limits are displayed."
                />
              </motion.div>
            </section>

            {/* Conclusion */}
            <motion.section variants={itemVariants} className="text-center py-12 px-8 bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl border border-[#b45ecf]/20">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-300">
                  Scaling outreach safely isn't about sending more emails — it's about sending smarter.
                </p>
                <p className="text-xl text-gray-300">
                  A Free tools mailbox calculator gives teams clarity before volume increases, helping protect sender reputation, reduce risk, and keep campaigns sustainable.
                </p>
                <div className="space-y-3 text-2xl font-bold text-white">
                  <p>Plan first.</p>
                  <p>Send second.</p>
                  <p className="text-[#b45ecf]">Scale safely.</p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-6">
              This free tool is designed to help you plan your email outreach safely. Always follow email service provider guidelines and maintain proper list hygiene.
            </p>
            <div className="text-2xl font-bold text-white mb-2">Plan first. Send second. Scale safely.</div>
            <p className="text-gray-500 text-sm">
              © 2024 Free Mailbox Calculator Tool. For educational purposes.
            </p>
          </div>
        </footer>
      </div>

      {/* Add custom CSS for slider thumb */}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #b45ecf;
          border: 4px solid #111827;
          cursor: pointer;
        }
        .slider-thumb::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #b45ecf;
          border: 4px solid #111827;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
