// app/usage-policy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/navbar';
import { 
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Mail,
  Eye,
  BookOpen,
  Users,
  Target,
  FileText,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useEffect, useState } from "react";

// Define types for the NoteBox component
type NoteBoxType = 'info' | 'warning' | 'error' | 'success' | 'action' | 'neutral';

interface NoteBoxConfig {
  bg: string;
  border: string;
  text: string;
}

interface NoteBoxProps {
  content: string;
  type: NoteBoxType;
}

interface ContentListProps {
  items: string[];
  title: string;
  icon: React.ComponentType<any>;
  color: string;
}

// NoteBox configuration with proper typing
const noteBoxConfig: Record<NoteBoxType, NoteBoxConfig> = {
  info: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-300" },
  warning: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-300" },
  error: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-300" },
  success: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-300" },
  action: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-300" },
  neutral: { bg: "bg-gray-500/10", border: "border-gray-500/30", text: "text-gray-300" },
};

// Helper Components
const ContentList = ({ items, title, icon: Icon, color }: ContentListProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: '-50px' }}
    className="mb-6 lg:mb-8"
  >
    <h4 className={`text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3`}>
      <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${color}`} />
      {title}:
    </h4>
    <ul className="space-y-2 lg:space-y-3">
      {items.map((item: string, index: number) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
          viewport={{ once: true, margin: '-30px' }}
          className="flex items-center text-white/70 hover:text-white transition-colors duration-200 text-base lg:text-lg"
        >
          <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${color} mr-3 lg:mr-4 flex-shrink-0`} />
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const NoteBox = ({ content, type }: NoteBoxProps) => {
  const config = noteBoxConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      className={`p-4 lg:p-6 rounded-xl lg:rounded-2xl border backdrop-blur-lg transition-all duration-300 hover:scale-102 ${config.bg} ${config.border} ${config.text}`}
    >
      <p className="leading-relaxed font-medium text-sm lg:text-base">{content}</p>
    </motion.div>
  );
};

export default function UsagePolicy() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  const policySections = [
    {
      number: "01",
      title: "Purpose of the Policy",
      description: "The goal of this policy is to maintain a high-quality outreach environment for all users while protecting recipients from unsolicited or misleading communication. By using 360Airo, you agree to follow this policy and all applicable local and international email and data protection regulations.",
      icon: BookOpen,
      gradient: "from-[#b45ecf] to-[#480056]"
    },
    {
      number: "02",
      title: "Acceptable Use",
      description: "360Airo is designed to help businesses and professionals connect with relevant prospects through personalized, permission-based outreach. Users must:",
      icon: CheckCircle2,
      gradient: "from-[#b45ecf] to-[#480056]",
      requirements: [
        "Send messages only to verified and relevant business contacts.",
        "Use accurate sender information that clearly identifies your business.",
        "Include a valid unsubscribe or opt-out option in every campaign.",
        "Maintain a reasonable sending frequency to avoid over-communication.",
        "Comply with anti-spam laws such as the CAN-SPAM Act, GDPR, and other data privacy standards."
      ],
      note: "Misuse of the platform to send bulk, irrelevant, or unsolicited messages to non-consenting recipients is strictly prohibited."
    },
    {
      number: "03",
      title: "Prohibited Activities",
      description: "To ensure deliverability, compliance, and platform integrity, users must avoid:",
      icon: XCircle,
      gradient: "from-[#b45ecf] to-[#480056]",
      prohibitions: [
        "Sending emails to purchased, scraped, or rented contact lists.",
        "Using deceptive subject lines or misleading information.",
        "Sending messages that contain harmful or malicious links, phishing content, or attachments.",
        "Impersonating individuals or companies.",
        "Sending duplicate or mass emails that could trigger spam filters.",
        "Violating any applicable local, national, or international laws governing communication and data usage."
      ],
      warning: "Accounts found violating these guidelines may be suspended or permanently terminated without prior notice."
    },
    {
      number: "04",
      title: "Data Accuracy and Hygiene",
      description: "Maintaining clean and up-to-date contact data is essential to avoid spam complaints and improve campaign performance. 360Airo provides built-in email verification, bounce tracking, and blacklist monitoring to support compliance. Users are expected to upload only verified contact lists and review them regularly to prevent invalid or outdated addresses.",
      icon: Target,
      gradient: "from-[#b45ecf] to-[#480056]"
    },
    {
      number: "05",
      title: "Monitoring and Enforcement",
      description: "360Airo actively monitors usage patterns, bounce rates, spam complaints, and sending volumes to identify potential misuse. Our system automatically flags and limits accounts that show suspicious activity or excessive spam indicators.",
      icon: Eye,
      gradient: "from-[#b45ecf] to-[#480056]",
      enforcement: "Repeated violations, failure to comply with regulations, or misuse of platform capabilities may result in account suspension or termination."
    },
    {
      number: "06",
      title: "User Responsibility",
      description: "Each user is responsible for their content, contact lists, and communication strategy. While 360Airo provides the tools and safeguards to help ensure compliance, it is the user's responsibility to follow all applicable legal and ethical standards when engaging in outreach.",
      icon: Users,
      gradient: "from-[#b45ecf] to-[#480056]",
      note: "Users are also encouraged to stay informed about new regulations or changes to existing laws that may affect their outreach strategy."
    },
    {
      number: "07",
      title: "How 360Airo Helps Maintain Compliance",
      description: "360Airo includes several built-in compliance features to help users run ethical and effective campaigns:",
      icon: Shield,
      gradient: "from-[#b45ecf] to-[#480056]",
      features: [
        "Real-time email verification before sending.",
        "Automated unsubscribe handling.",
        "Domain and sender reputation monitoring.",
        "Spam score analysis and testing tools.",
        "Daily send limit controls to prevent blacklisting."
      ],
      benefit: "These safeguards are designed to maintain trust between senders and recipients and to protect your brand reputation."
    },
    {
      number: "08",
      title: "Reporting Violations",
      description: "If you believe a 360Airo user is violating this policy or sending unwanted emails, please report it immediately to support@360airo.com. Include relevant details such as the sender's email, subject line, and any accompanying message.",
      icon: AlertTriangle,
      gradient: "from-[#b45ecf] to-[#480056]",
      action: "We will investigate all reports promptly and take appropriate action."
    },
    {
      number: "09",
      title: "Policy Updates",
      description: "This Usage and Anti-Spam Policy may be updated periodically to reflect new compliance standards, laws, or platform features.",
      icon: FileText,
      gradient: "from-[#b45ecf] to-[#480056]",
      acceptance: "Any changes will be posted on this page with an updated effective date. Continued use of the platform after updates indicates your acceptance of the revised policy."
    },
    {
      number: "10",
      title: "Contact Us",
      description: "For questions or clarifications regarding this policy, please contact us at:",
      icon: Mail,
      gradient: "from-[#b45ecf] to-[#480056]",
      contact: {
        email: "support@360airo.com",
        website: "https://www.360airo.com"
      }
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
                                    {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/anti-Spam-Policy" />
      <Navbar />
      
      {/* Enhanced Animated Background - Mobile Optimized */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating Gradient Orbs - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-full blur-2xl lg:blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 right-1/3 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-gradient-to-r from-[#b45ecf]/15 to-[#480056]/15 rounded-full blur-2xl lg:blur-3xl"
        />

        {/* Animated Grid - Mobile Optimized */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-[linear-gradient(rgba(180,94,207,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(180,94,207,0.05)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
        />

        {/* Floating Particles - Reduced on Mobile */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 80,
              y: Math.random() * 80
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: Math.random() * 80,
              y: Math.random() * 80
            }}
            transition={{ 
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-[#b45ecf] to-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Pulse Rings - Mobile Optimized */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0],
              scale: [1, 2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-32 lg:h-32 border-2 border-[#b45ecf]/20 rounded-full"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section - Mobile Optimized */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 px-4 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-[#b45ecf]/10 border border-[#b45ecf]/30 mb-6 lg:mb-8 backdrop-blur-lg"
            >
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-[#b45ecf] mr-2 lg:mr-3" />
              <span className="text-[#b45ecf] font-semibold text-sm lg:text-base">Policy & Compliance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
              className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-[#b45ecf] via-white to-[#b45ecf] bg-clip-text text-transparent leading-tight"
            >
              Usage and Anti-Spam Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              At 360Airo, we are committed to promoting responsible, ethical, and compliant outreach practices. This Usage and Anti-Spam Policy outlines the standards every user must follow while using our platform to ensure safe, respectful, and lawful communication across all channels.
            </motion.p>

            {/* Animated Scroll Indicator - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-[#b45ecf] rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-0.5 h-2.5 lg:h-3 bg-[#b45ecf] rounded-full mt-1.5 lg:mt-2"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Policy Sections - Mobile Optimized */}
        <section className="py-16 lg:py-20 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 lg:space-y-12">
              {policySections.map((section, index) => (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={!isMobile ? { 
                    y: -4,
                    transition: { duration: 0.2 }
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.12,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative"
                >
                  {/* Connection Line - Hidden on Mobile */}
                  {index < policySections.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.12 + 0.4 }}
                      viewport={{ once: true }}
                      className="hidden lg:block absolute left-8 top-full w-0.5 bg-gradient-to-b from-[#b45ecf] to-transparent h-16 -z-10"
                    />
                  )}

                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/10 to-[#480056]/10 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 relative overflow-hidden">
                      {/* Animated Background */}
                      <motion.div
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b45ecf]/5 to-transparent bg-[length:200%_200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6 relative z-10">
                        {/* Animated Section Number - Mobile Optimized */}
                        <motion.div
                          whileHover={!isMobile ? { 
                            scale: 1.05,
                            rotate: [0, -3, 3, 0]
                          } : {}}
                          transition={{ 
                            duration: 0.3,
                            rotate: { duration: 0.4 }
                          }}
                          className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${section.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-xl lg:text-2xl font-bold shadow-xl lg:shadow-2xl flex-shrink-0 group-hover:shadow-2xl lg:group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden self-start`}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <span className="relative z-10">{section.number}</span>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                            <motion.div
                              whileHover={!isMobile ? { scale: 1.05, rotate: 360 } : {}}
                              transition={{ duration: 0.5 }}
                            >
                              <section.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#b45ecf]" />
                            </motion.div>
                            <h2 className="text-xl lg:text-3xl font-bold text-white group-hover:text-[#b45ecf] transition-colors duration-300 leading-tight">
                              {section.title}
                            </h2>
                          </div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true, margin: '-30px' }}
                            className="text-white/80 leading-relaxed text-base lg:text-lg mb-6 lg:mb-8"
                          >
                            {section.description}
                          </motion.p>

                          {/* Dynamic Content Sections */}
                          {section.requirements && (
                            <ContentList 
                              items={section.requirements} 
                              title="Users must" 
                              icon={CheckCircle2}
                              color="text-green-400"
                            />
                          )}

                          {section.prohibitions && (
                            <ContentList 
                              items={section.prohibitions} 
                              title="Users must avoid" 
                              icon={XCircle}
                              color="text-red-400"
                            />
                          )}

                          {section.features && (
                            <ContentList 
                              items={section.features} 
                              title="Features" 
                              icon={CheckCircle2}
                              color="text-blue-400"
                            />
                          )}

                          {/* Contact Information */}
                          {section.contact && (
                            <motion.div
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: '-30px' }}
                              className="space-y-3 lg:space-y-4"
                            >
                              <div className="space-y-2 lg:space-y-3">
                                <div className="flex items-center text-white/80 hover:text-white transition-colors duration-200 text-base lg:text-lg">
                                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#b45ecf] mr-2 lg:mr-3" />
                                  Email: {section.contact.email}
                                </div>
                                <div className="flex items-center text-white/80 hover:text-white transition-colors duration-200 text-base lg:text-lg">
                                  <Eye className="w-4 h-4 lg:w-5 lg:h-5 text-[#b45ecf] mr-2 lg:mr-3" />
                                  Website: {section.contact.website}
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Additional Notes */}
                          {section.note && (
                            <NoteBox content={section.note} type="info" />
                          )}

                          {section.warning && (
                            <NoteBox content={section.warning} type="warning" />
                          )}

                          {section.enforcement && (
                            <NoteBox content={section.enforcement} type="error" />
                          )}

                          {section.benefit && (
                            <NoteBox content={section.benefit} type="success" />
                          )}

                          {section.action && (
                            <NoteBox content={section.action} type="action" />
                          )}

                          {section.acceptance && (
                            <NoteBox content={section.acceptance} type="neutral" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Compliance Commitment Section - Mobile Optimized */}
        <section className="py-20 lg:py-32 px-4 relative overflow-hidden">
          {/* Animated Background - Mobile Optimized */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 50%, #b45ecf 0%, transparent 40%)',
                'radial-gradient(circle at 70% 50%, #480056 0%, transparent 40%)',
                'radial-gradient(circle at 30% 50%, #b45ecf 0%, transparent 40%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-50px' }}
              className="text-white"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="mb-6 lg:mb-8"
              >
                <Shield className="w-16 h-16 lg:w-20 lg:h-20 text-white mx-auto drop-shadow-xl lg:drop-shadow-2xl" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
                className="text-2xl lg:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-white via-[#b45ecf] to-white bg-clip-text text-transparent leading-tight"
              >
                Committed to Ethical Outreach
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: '-50px' }}
                className="text-lg lg:text-xl text-white/80 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                We believe in building lasting relationships through respectful, compliant, and value-driven communication. 
                Together, we can maintain the highest standards of outreach excellence.
              </motion.p>
              
              <motion.div
                whileHover={!isMobile ? { 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                } : {}}
                whileTap={{ scale: 0.97 }}
                onClick={redirectToApp}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white hover:from-[#c36ed9] hover:to-[#580066] text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-8 rounded-xl lg:rounded-2xl font-semibold shadow-xl lg:shadow-2xl transition-all duration-300 group backdrop-blur-lg border border-white/20 w-full lg:w-auto"
                >
                  <span className="flex items-center justify-center lg:justify-start">
                    Back to Safety
                    <ArrowRight className="ml-2 lg:ml-3 h-4 w-4 lg:h-6 lg:w-6 group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Elements - Reduced on Mobile */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 15 - 7.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
              className="absolute text-[#b45ecf]/20 lg:text-[#b45ecf]/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 16 + 8}px`,
              }}
            >
              ★
            </motion.div>
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}