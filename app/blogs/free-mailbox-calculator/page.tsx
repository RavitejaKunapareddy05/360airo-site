'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  BarChart3,
  Users,
  Clock,
  Calendar,
  Eye,
  BookOpen,
  ChevronRight,
  ArrowRight,
  Tag,
  User,
  Clock3,
  Search,
  TrendingUp,
  Target,
  Zap,
  Mailbox,
  LineChart,
  Filter,
  CheckSquare,
  HelpCircle,
  Hash,
  ExternalLink
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

// ====================
// Sidebar Components with Scroll Tracking
// ====================

const Sidebar = ({ activeSection }: { activeSection: string }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const contentHeadings = [
    { id: 'intro', title: 'Introduction', icon: BookOpen },
    { id: 'risks', title: 'Scaling Risks', icon: AlertTriangle },
    { id: 'what-is', title: 'What is a Calculator?', icon: Calculator },
    { id: 'cold-email', title: 'For Cold Email', icon: Shield },
    { id: 'how-works', title: 'How It Works', icon: LineChart },
    { id: 'planning', title: 'Planning Volume', icon: TrendingUp },
    { id: 'comparison', title: 'Calculator vs Guessing', icon: Target },
    { id: 'deliverability', title: 'Deliverability Impact', icon: BarChart3 },
    { id: 'when-use', title: 'When to Use', icon: Clock },
    { id: 'workflow', title: 'Workflow Integration', icon: Zap },
    { id: 'faq', title: 'People Also Ask', icon: HelpCircle },
    { id: 'conclusion', title: 'Conclusion', icon: CheckCircle }
  ];

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="lg:w-80 space-y-6 sticky top-32 h-fit"
    >
      {/* Table of Contents */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-200 flex items-center gap-2">
            <Hash className="w-4 h-4 text-[#b45ecf]" />
            In this article
          </h3>
          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
            {contentHeadings.length} sections
          </span>
        </div>
        <nav className="space-y-1">
          {contentHeadings.map((heading) => {
            const Icon = heading.icon;
            const isActive = activeSection === heading.id;
            return (
              <button
                key={heading.id}
                onClick={() => scrollToSection(heading.id)}
                className={`w-full text-left p-2.5 rounded-md transition-all duration-200 flex items-center gap-3 group ${
                  isActive 
                    ? 'bg-[#b45ecf]/20 border-l-3 border-[#b45ecf] pl-2.5' 
                    : 'hover:bg-gray-800/50 hover:pl-3'
                }`}
              >
                <div className={`flex-shrink-0 ${isActive ? 'text-[#b45ecf]' : 'text-gray-500 group-hover:text-[#b45ecf]'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium truncate ${isActive ? 'text-[#b45ecf]' : 'text-gray-300 group-hover:text-gray-100'}`}>
                    {heading.title}
                  </div>
                  {isActive && (
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-[#b45ecf] rounded-full animate-pulse" />
                      <span className="text-xs text-[#b45ecf]">Currently reading</span>
                    </div>
                  )}
                </div>
                <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'text-[#b45ecf] rotate-90' : 'text-gray-500 group-hover:text-[#b45ecf] group-hover:translate-x-0.5'}`} />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Search Box */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <h3 className="font-semibold text-gray-200 mb-3 flex items-center gap-2 text-sm">
          <Search className="w-3.5 h-3.5 text-[#b45ecf]" />
          Search the blog
        </h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type keywords..."
            className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#b45ecf] focus:ring-1 focus:ring-[#b45ecf]"
          />
          <button className="absolute right-2.5 top-2 text-gray-500 hover:text-[#b45ecf] transition-colors">
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-200 text-sm">Latest Articles</h3>
          <a href="#" className="text-xs text-[#b45ecf] hover:underline flex items-center gap-1">
            View all
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="space-y-3">
          {[
            { title: "Cold Email Templates That Convert", author: "Amanda Laine", mins: 7 },
            { title: "Scaling Your Outreach Team", author: "Chris Tweten", mins: 5 },
            { title: "A/B Testing Subject Lines", author: "Amanda Laine", mins: 6 },
            { title: "Email Deliverability Rules 2025", author: "Amanda Laine", mins: 8 }
          ].map((post, idx) => (
            <a key={idx} href="#" className="block group">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-gray-300 group-hover:text-[#b45ecf] transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="w-3 h-3" />
                      {post.mins} min
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#b45ecf] transition-colors flex-shrink-0 mt-1" />
              </div>
              {idx < 3 && (
                <div className="border-t border-gray-800 mt-3 pt-3" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-[#b45ecf]/10 to-[#480056]/10 border border-[#b45ecf]/20 rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <Mailbox className="w-8 h-8 text-[#b45ecf] mx-auto mb-2.5" />
        <h3 className="font-semibold text-gray-200 text-center mb-1.5 text-sm">Join Our Newsletter</h3>
        <p className="text-gray-400 text-xs text-center mb-3">
          Get weekly email insights
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 text-gray-200 text-sm focus:outline-none focus:border-[#b45ecf] focus:ring-1 focus:ring-[#b45ecf] mb-2"
        />
        <button className="w-full bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white font-medium py-2 text-sm rounded-md hover:from-[#b45ecf]/90 hover:to-[#480056]/90 transition-all shadow-lg">
          Subscribe
        </button>
      </div>
    </motion.aside>
  );
};

// ====================
// Main Article Content with Scroll Tracking
// ====================

const MainArticle = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const introRef = useRef<HTMLElement>(null);
  const risksRef = useRef<HTMLElement>(null);
  const whatIsRef = useRef<HTMLElement>(null);
  const coldEmailRef = useRef<HTMLElement>(null);
  const howWorksRef = useRef<HTMLElement>(null);
  const planningRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  const deliverabilityRef = useRef<HTMLElement>(null);
  const whenUseRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const conclusionRef = useRef<HTMLElement>(null);

  const faqItems = [
    {
      question: "What is a good email deliverability score?",
      answer: "A good deliverability score typically means most emails land in the primary inbox with low bounce and spam rates. While scores vary by provider, consistency matters more than a single number."
    },
    {
      question: "How to calculate email deliverability rate?",
      answer: "Deliverability rate is calculated by subtracting bounced and rejected emails from total sends, then measuring inbox placement and spam filtering outcomes."
    },
    {
      question: "How to check if a mailbox is full?",
      answer: "Mailbox capacity can usually be checked through your email provider's storage settings. Full mailboxes can cause delivery failures and should be monitored regularly."
    },
    {
      question: "How to measure email deliverability?",
      answer: "Deliverability is measured using bounce rates, spam complaints, inbox placement tests, and engagement metrics across campaigns."
    },
    {
      question: "How do I create my own mailbox?",
      answer: "Mailboxes can be created through email providers or hosting services by setting up a domain and adding inbox users with proper authentication."
    },
    {
      question: "How to check mailbox capacity?",
      answer: "Mailbox capacity is checked within your email provider dashboard, where storage usage and limits are displayed."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const refs = [
        { id: 'intro', ref: introRef },
        { id: 'risks', ref: risksRef },
        { id: 'what-is', ref: whatIsRef },
        { id: 'cold-email', ref: coldEmailRef },
        { id: 'how-works', ref: howWorksRef },
        { id: 'planning', ref: planningRef },
        { id: 'comparison', ref: comparisonRef },
        { id: 'deliverability', ref: deliverabilityRef },
        { id: 'when-use', ref: whenUseRef },
        { id: 'workflow', ref: workflowRef },
        { id: 'faq', ref: faqRef },
        { id: 'conclusion', ref: conclusionRef }
      ];

      const currentPosition = window.scrollY + 120;
      let currentSection = '';

      for (const item of refs) {
        const element = item.ref.current;
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          const elementBottom = bottom + window.pageYOffset;

          if (currentPosition >= elementTop && currentPosition < elementBottom) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <motion.article
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
      }}
      className="lg:pr-8"
    >
      {/* Article Header */}
      <motion.header
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="mb-8"
      >
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
          <a href="/blogs" className="hover:text-[#b45ecf] transition-colors">Blog</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/free-tools" className="hover:text-[#b45ecf] transition-colors">Email Tools</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/free-tools" className="hover:text-[#b45ecf] transition-colors">Calculators</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">Mailbox Planning</span>
        </nav>

        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
          Free Email Mailbox Calculator to Scale Outreach Safely
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-6">
          <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-md">
            <User className="w-3.5 h-3.5" />
            <span className="text-sm">Email Tools Team</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-md">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-sm">December 3, 2025</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-md">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-sm">7 min read</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-md">
            <Eye className="w-3.5 h-3.5" />
            <span className="text-sm">2.8K views</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-blue-400 mb-0.5">+89%</div>
            <div className="text-xs text-blue-300">Deliverability Improvement</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-green-400 mb-0.5">-62%</div>
            <div className="text-xs text-green-300">Spam Complaints</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-purple-400 mb-0.5">3.2x</div>
            <div className="text-xs text-purple-300">Success Rate</div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg">
            <div className="text-lg font-bold text-amber-400 mb-0.5">24h</div>
            <div className="text-xs text-amber-300">Recovery Time Saved</div>
          </div>
        </div>
      </motion.header>

      {/* Article Content with Section IDs */}
      <div className="space-y-8">
        {/* Introduction */}
        <section 
          id="intro" 
          ref={introRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#b45ecf]" />
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed text-base">
            Scaling email outreach isn't just about writing better emails or sending more messages. One of the most common (and expensive) mistakes teams make is scaling without understanding how many mailboxes they actually need — and what that means for deliverability.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            That's where a Free tools mailbox calculator becomes essential. Before increasing volume, adding domains, or launching new campaigns, a mailbox calculator helps you plan sending limits realistically and protect sender reputation.
          </p>
        </section>

        {/* Why Scaling Hurts */}
        <section 
          id="risks" 
          ref={risksRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Why Scaling Email Without Planning Hurts Deliverability
          </h2>
          <p className="text-gray-300 text-base">
            Most email deliverability issues don't come from bad intent — they come from overloading inboxes.
          </p>
          <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-md p-4">
            <h3 className="font-bold text-white mb-2 text-sm">When teams scale too fast:</h3>
            <ul className="space-y-2">
              {[
                "Mailboxes send more than they can safely handle",
                "Bounce rates increase",
                "Spam complaints rise",
                "Sender reputation drops quietly"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-300 text-sm">
            Once reputation is damaged, even normal emails start landing in spam. Recovering from that takes weeks — sometimes months. Using a Free tools mailbox calculator allows you to plan outreach volume before problems start.
          </p>
        </section>

        {/* What Is Calculator */}
        <section 
          id="what-is" 
          ref={whatIsRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#b45ecf]" />
            What Is a Free Tools Mailbox Calculator?
          </h2>
          <p className="text-gray-300 text-base">
            A mailbox calculator is a simple planning tool that estimates:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-md p-4 shadow-lg">
              <ul className="space-y-2">
                {[
                  "How many emails you can safely send per mailbox",
                  "How many mailboxes you need for a target sending volume",
                  "Whether your current setup is likely to impact deliverability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <CheckSquare className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#b45ecf]/10 border border-[#b45ecf]/20 rounded-md p-4">
              <div className="flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#b45ecf] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm italic">
                    "A mailbox calculator tool free doesn't send emails or analyze content. Instead, it helps you answer a foundational question: 'How much can I send without hurting my inbox placement?'"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Preview */}
        <div className="bg-[#b45ecf]/10 border border-[#b45ecf]/20 rounded-lg p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-[#b45ecf]/20 rounded-md">
              <Calculator className="w-6 h-6 text-[#b45ecf]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Example Mailbox Calculator</h3>
              <p className="text-[#b45ecf] text-sm">See how calculations work in practice</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-gray-200 mb-2.5">
                  <Mail className="w-4 h-4 text-[#b45ecf]" />
                  <span className="text-sm">Daily Emails</span>
                  <span className="ml-auto text-[#b45ecf] text-sm font-medium">500</span>
                </label>
                <div className="h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full bg-gradient-to-r from-[#b45ecf] to-[#480056] w-3/4 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-gray-200 mb-2.5">
                  <Users className="w-4 h-4 text-[#b45ecf]" />
                  <span className="text-sm">Mailboxes</span>
                  <span className="ml-auto text-[#b45ecf] text-sm font-medium">3</span>
                </label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 5, 10].map(num => (
                    <div
                      key={num}
                      className={`flex-1 py-1.5 text-center rounded-md text-sm ${num === 3 ? 'bg-[#b45ecf] text-white' : 'bg-gray-800 text-gray-400'}`}
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-md p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-bold text-white">Safe Sending Range</h4>
                    <p className="text-green-400 text-sm">Your setup is within safe limits</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-gray-400 text-sm">Safe per mailbox:</div>
                    <div className="text-white font-bold">100/day</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Current capacity:</div>
                    <div className="text-green-400 font-bold">300/day</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Recommended mailboxes:</div>
                    <div className="text-[#b45ecf] font-bold">5</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Safe daily limit:</div>
                    <div className="text-white font-bold">240/day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cold Email Importance */}
        <section 
          id="cold-email" 
          ref={coldEmailRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            Why a Mailbox Calculator Matters for Cold Email Campaigns
          </h2>
          <p className="text-gray-300 text-base">
            Cold email is different from newsletters or transactional emails. Providers are stricter, and mistakes compound faster.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-bold text-white text-sm">A Free tools mailbox calculator helps you:</h3>
              <ul className="space-y-2">
                {[
                  "Avoid overloading individual mailboxes",
                  "Distribute volume across domains and inboxes",
                  "Reduce reliance on guesswork",
                  "Lower the risk of spam flags"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-md p-4">
              <p className="text-gray-200 font-medium text-sm italic">
                "For teams running cold outreach, this planning step often matters more than subject lines or templates."
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section 
          id="how-works" 
          ref={howWorksRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <LineChart className="w-5 h-5 text-purple-400" />
            How a Mailbox Calculator Tool Works (In Simple Terms)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-white mb-3 text-sm">Basic Factors:</h3>
              <ul className="space-y-2">
                {[
                  "Number of emails you want to send per day",
                  "Safe sending limits per mailbox",
                  "Recommended buffer to keep spam rates low"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <Target className="w-4 h-4 text-[#b45ecf] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3 text-sm">Advanced Considerations:</h3>
              <ul className="space-y-2">
                {[
                  "Warm-up stage vs steady-state sending",
                  "Campaign type (cold vs warm)",
                  "Risk tolerance based on domain age"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <Filter className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#b45ecf]/10 border-l-4 border-[#b45ecf] rounded-r-md p-4 mt-3">
            <p className="text-gray-300 text-sm italic">
              "The output isn't a rule — it's a safety estimate."
            </p>
          </div>
        </section>

        {/* Planning Volume */}
        <section 
          id="planning" 
          ref={planningRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            Planning Volume the Right Way (Not the Aggressive Way)
          </h2>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-md p-4">
            <h3 className="font-bold text-white mb-2 text-sm">Many teams ask:</h3>
            <p className="text-lg font-bold text-amber-300 mb-4">
              "How many mailboxes for cold email do we really need?"
            </p>
            <p className="text-gray-300 text-sm mb-3">
              The honest answer: fewer than you think — if volume is planned properly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "When to Add More",
                description: "See when adding more mailboxes makes sense vs optimizing existing ones"
              },
              {
                title: "Safety First",
                description: "Identify when lowering daily sends is safer than increasing volume"
              },
              {
                title: "Gradual Scaling",
                description: "Learn how to scale gradually instead of all at once"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-md p-4 shadow-lg">
                <div className="text-base font-bold text-white mb-1.5">{item.title}</div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            This prevents the "send more, fix later" trap that damages domains.
          </p>
        </section>

        {/* Comparison */}
        <section 
          id="comparison" 
          ref={comparisonRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white">Free Tools Mailbox Calculator vs Guessing</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="font-bold text-white">Without a Calculator</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Volume decisions are emotional",
                  "Teams rely on anecdotes",
                  "Deliverability issues appear too late"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="font-bold text-white">With a Calculator</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Volume decisions are intentional",
                  "Risk is visible upfront",
                  "Scaling becomes predictable"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-gray-300 text-sm italic">
              "It's not about being conservative — it's about being controlled."
            </p>
          </div>
        </section>

        {/* Deliverability */}
        <section 
          id="deliverability" 
          ref={deliverabilityRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-teal-400" />
            How This Supports Better Email Deliverability
          </h2>
          <p className="text-gray-300 text-base">
            Mailbox planning directly impacts:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Spam complaint rates", color: "bg-red-500/10 border-red-500/20 text-red-300" },
              { label: "Bounce rates", color: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
              { label: "Inbox placement", color: "bg-green-500/10 border-green-500/20 text-green-300" }
            ].map((item, index) => (
              <div key={index} className={`${item.color} border rounded-md p-3 text-center`}>
                <div className="font-bold text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            Used alongside an email bounce rate calculator and basic list hygiene, a mailbox calculator helps teams maintain a healthier sending profile over time. It's one of the simplest ways to check email deliverability before campaigns go live.
          </p>
        </section>

        {/* When to Use */}
        <section 
          id="when-use" 
          ref={whenUseRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            When Should You Use a Mailbox Calculator?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-bold text-white text-sm">Use a mailbox calculator when:</h3>
              <ul className="space-y-2">
                {[
                  "Launching your first cold email campaign",
                  "Increasing daily send volume",
                  "Adding new domains or inboxes",
                  "Running campaigns for multiple clients"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-md p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Pro Tip:</strong> Even experienced teams use a mailbox calculator tool free as a quick validation step before scaling.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section 
          id="workflow" 
          ref={workflowRef}
          className="space-y-4 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white">How This Fits Into a Safe Outreach Workflow</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-md p-4">
            <h3 className="font-bold text-white mb-3 text-sm">A mailbox calculator works best when combined with:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Zap, label: "Email warmup", color: "text-amber-400" },
                { icon: Filter, label: "List cleaning", color: "text-[#b45ecf]" },
                { icon: Mail, label: "Template checks", color: "text-green-400" },
                { icon: LineChart, label: "Performance monitoring", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-md p-3 text-center shadow-lg">
                  <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-1.5`} />
                  <div className="text-gray-200 font-medium text-sm">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm italic">
                "It's not a replacement for strategy — it's a safeguard."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-6 px-5 bg-gradient-to-r from-[#b45ecf]/10 to-[#480056]/10 border border-[#b45ecf]/20 rounded-lg shadow-lg">
          <Calculator className="w-10 h-10 text-[#b45ecf] mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white mb-3">
            Try Our Free Mailbox Calculator Before You Scale
          </h2>
          <p className="text-gray-300 mb-4 text-sm">
            If you're planning to increase volume, don't rely on assumptions. Try our Free Mailbox Calculator to estimate how many inboxes you need and how to scale without putting deliverability at risk.
          </p>
          <p className="text-[#b45ecf] mb-5 text-sm">
            It's a simple step — and often the difference between campaigns that grow and campaigns that get blocked.
          </p>
        </div>

        {/* FAQ */}
        <section 
          id="faq" 
          ref={faqRef}
          className="space-y-5 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#b45ecf]" />
            People Also Ask
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-md overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <h3 className="font-bold text-white pr-6 text-sm">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-[#b45ecf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeFAQ === index ? 'auto' : 0,
                    opacity: activeFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <p className="text-gray-400 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section 
          id="conclusion" 
          ref={conclusionRef}
          className="space-y-4 pt-6 border-t border-gray-800 scroll-mt-24"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Conclusion
          </h2>
          <p className="text-lg text-gray-200">
            Scaling outreach safely isn't about sending more emails — it's about sending smarter.
          </p>
          <p className="text-gray-300 text-base">
            A Free tools mailbox calculator gives teams clarity before volume increases, helping protect sender reputation, reduce risk, and keep campaigns sustainable.
          </p>
          <div className="text-center space-y-2 pt-4">
            <div className="text-2xl font-bold text-white">Plan first.</div>
            <div className="text-2xl font-bold text-white">Send second.</div>
            <div className="text-2xl font-bold text-[#b45ecf]">Scale safely.</div>
          </div>
        </section>
      </div>
    </motion.article>
  );
};


// ====================
// Main Page Component
// ====================

export default function BlogWithScrollTracking() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#b45ecf]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#480056]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Use Navbar Component */}
        <Navbar />

        {/* Main Layout */}
        <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Article - 2/3 width */}
            <div className="lg:flex-1">
              <MainArticle setActiveSection={setActiveSection} />
            </div>

            {/* Sticky Sidebar - 1/3 width */}
            <div className="lg:w-80">
              <Sidebar activeSection={activeSection} />
            </div>
          </div>
        </main>

        {/* Use Footer Component */}
        <Footer />
      </div>
    </div>
  );
}
