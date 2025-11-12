'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, Mail, Globe, UserCheck, Settings, Link, Users, Bell, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

interface Section {
  title: string;
  icon: React.ReactNode;
  content: string;
}

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections: Section[] = [
    {
      title: 'Introduction',
      icon: <Shield className="h-5 w-5" />,
      content: `360Airo is an advanced outreach and automation platform that brings together multiple communication channels such as email, LinkedIn, and calling into one unified system. Because our services handle customer interactions and communication data, we take data protection extremely seriously. Every process within our platform — from data collection to storage and transfer — is guided by security, compliance, and transparency.

By accessing our website or using our services, you agree to the terms described in this Privacy Policy. If you do not agree with any part of this document, we recommend that you discontinue using our services immediately.`
    },
    {
      title: 'Information We Collect',
      icon: <Eye className="h-5 w-5" />,
      content: `We collect information only to deliver better service, improve performance, and comply with laws related to communication and marketing. The type of data we collect depends on how you interact with our platform.

Personal Information: When you create an account, sign up for a demo, or contact us, we collect details such as your name, company name, business email address, contact number, billing details, and any information you provide voluntarily during onboarding or support conversations.

Account and Usage Data: We gather non-personal data like IP addresses, device information, browser type, and time zone settings to optimize performance. We also record in-platform actions such as login times, automation settings, and interaction frequency. This helps us improve usability and deliver a better user experience.

Cookies and Similar Technologies: Cookies allow us to remember your preferences, maintain your session, and analyze usage patterns. These files do not give us access to your computer or personal files. You can disable cookies anytime in your browser settings, but doing so may limit some functionality of the platform.

Communication Data: When you use 360Airo for outreach campaigns, we process data related to your email communications, such as delivery rates, open rates, and click-through metrics. This helps you monitor performance and optimize your strategy.`
    },
    {
      title: 'How We Use Collected Information',
      icon: <Settings className="h-5 w-5" />,
      content: `We use your information to make 360Airo more effective, efficient, and secure. The main purposes include:

1. Operating and maintaining the platform so that users can send campaigns, manage contacts, and track performance seamlessly.
2. Providing customer support, troubleshooting issues, and improving overall service quality.
3. Personalizing your dashboard and content suggestions based on user activity.
4. Sending service-related updates, such as security alerts, new feature announcements, or billing information.
5. Conducting analytics and market research to enhance performance and add new functionality.
6. Ensuring compliance with communication laws, anti-spam regulations, and platform integrity.

360Airo never sells or shares your personal data with unrelated third parties. Any data sharing occurs only under strict confidentiality and only when it is necessary to deliver the service.`
    },
    {
      title: 'Legal Basis for Processing',
      icon: <UserCheck className="h-5 w-5" />,
      content: `Depending on your location, we rely on the following legal bases for processing your data:

• Your consent when you register, subscribe, or provide details voluntarily.
• Contractual necessity when data processing is required to provide our services.
• Legitimate business interests when we analyze performance, secure the platform, or improve functionality.
• Legal compliance when we must retain or disclose information as required by authorities.`
    },
    {
      title: 'How We Protect Your Data',
      icon: <Lock className="h-5 w-5" />,
      content: `Your data security is our top priority. We use enterprise-level encryption, multi-factor authentication, and strict access controls to keep your data protected. Our servers are hosted in certified data centers with advanced firewalls, intrusion detection systems, and continuous monitoring. Regular audits and vulnerability assessments are conducted to ensure compliance with best security practices.

In the unlikely event of a data breach, our team will promptly investigate and notify affected users in accordance with applicable laws and regulations.`
    },
    {
      title: 'Data Retention',
      icon: <AlertTriangle className="h-5 w-5" />,
      content: `We retain your information only as long as it is necessary to provide our services, comply with legal obligations, or resolve disputes. Once your account is deleted or inactive for an extended period, your personal data is securely erased from our active systems. Some anonymized data may be retained for analytics and compliance records.

You can request deletion of your account and associated data at any time by contacting our support team at support@360airo.com. Once verified, your request will be processed within 30 days.`
    },
    {
      title: 'Data Sharing and Disclosure',
      icon: <Users className="h-5 w-5" />,
      content: `We may share information with trusted third parties who help us deliver essential services such as payment processing, cloud storage, and analytics. These providers are contractually bound to maintain confidentiality and cannot use your data for their own purposes.

We may also share information when required by law, regulatory authority, or to protect the rights, property, or safety of 360Airo, our users, or the public. In all cases, we ensure that sharing happens in compliance with privacy regulations.`
    },
    {
      title: 'Your Data Rights',
      icon: <Mail className="h-5 w-5" />,
      content: `As a user, you have full rights over your data. These include:

• Right to access: You can request a copy of the personal data we hold about you.
• Right to correction: You can update or correct inaccuracies in your information.
• Right to deletion: You can request removal of your data from our records.
• Right to restriction: You can limit how your data is used in certain circumstances.
• Right to portability: You can ask for your data in a machine-readable format.
• Right to withdraw consent: You may withdraw permission for marketing communications or tracking anytime.

All requests can be made by contacting privacy@360airo.com, and our privacy team will assist promptly.`
    },
    {
      title: 'International Data Transfers',
      icon: <Globe className="h-5 w-5" />,
      content: `360Airo serves users globally, and your data may be stored or processed in different countries. We ensure all transfers meet global compliance requirements through approved frameworks such as Standard Contractual Clauses (SCCs). This means your data remains protected regardless of where it is processed.`
    },
    {
      title: 'Communication and Marketing Preferences',
      icon: <Bell className="h-5 w-5" />,
      content: `You may occasionally receive updates about new features, platform improvements, or marketing insights if you have opted in. You can unsubscribe anytime using the link in the email or by adjusting your notification preferences from your dashboard. We respect your inbox and communicate only relevant, value-driven information.`
    },
    {
      title: 'Third-Party Links and Integrations',
      icon: <Link className="h-5 w-5" />,
      content: `Our platform may contain links or integrations with third-party services, such as CRMs, analytics tools, or email providers. These external platforms operate under their own privacy policies, and we recommend reviewing their terms before sharing any information with them. 360Airo is not responsible for their practices.`
    },
    {
      title: 'Children\'s Data',
      icon: <Users className="h-5 w-5" />,
      content: `Our services are not designed for individuals under 16 years of age. We do not knowingly collect or store any information related to minors. If such data is discovered, we will delete it immediately upon notification.`
    },
    {
      title: 'Policy Updates',
      icon: <Shield className="h-5 w-5" />,
      content: `We may revise this Privacy Policy periodically to reflect improvements, legal updates, or product changes. Any updates will be posted on this page with a new effective date. For significant changes, we will notify you via email or through a visible notice within the platform.

Our data protection team is committed to ensuring your experience remains secure, transparent, and worry-free. You can trust that every piece of information you share with 360Airo is handled with the highest level of responsibility and care.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.95, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const expandVariants = {
    collapsed: { 
      height: 0, 
      opacity: 0 
    },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#19001d] via-[#480056] to-[#19001d] text-white">
             {/* Canonical URL for SEO */}
      <link rel="canonical" href="https://360airo.com/Privacy-Policy-Page" />
      {/* Add Navbar Component */}
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-28 pb-16 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b45ecf]/10 to-transparent"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#b45ecf] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl max-w-4xl mx-auto text-purple-200 leading-relaxed"
        >
          At 360Airo, we believe that privacy is not just a legal obligation but a fundamental right.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 pb-24"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="bg-gradient-to-r from-[#480056] to-[#5a006d] border-[#b45ecf] shadow-2xl shadow-[#b45ecf]/20 mb-12 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-center space-y-4"
              >
                <p className="text-lg text-purple-100 leading-relaxed">
                  Our mission is to empower businesses to connect, communicate, and grow without compromising on trust or transparency. 
                  This Privacy Policy explains in clear language how we collect, use, and protect your personal and business information when you visit our website or use our services.
                </p>
                <p className="text-purple-200 leading-relaxed">
                  We have designed our privacy framework to meet global standards, including GDPR, CAN-SPAM, and other international data protection laws. 
                  Whether you are a small business owner, a marketing professional, or part of a global enterprise, you deserve complete clarity and control over your data. 
                  This page provides you with that clarity.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-4"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`bg-gradient-to-r from-[#480056] to-[#5a006d] border-[#b45ecf] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#b45ecf]/20 ${
                  activeSection === index ? 'ring-2 ring-[#b45ecf] shadow-xl shadow-[#b45ecf]/30' : ''
                }`}
                onClick={() => toggleSection(index)}
              >
                <CardContent className="p-0">
                  <motion.div 
                    className="flex justify-between items-center p-6"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="text-[#b45ecf]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {section.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    </div>
                    <motion.div 
                      className="text-[#b45ecf]"
                      animate={{ rotate: activeSection === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.div>
                  </motion.div>
                  
                  <AnimatePresence mode="wait">
                    {activeSection === index && (
                      <motion.div
                        variants={expandVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-2 border-t border-[#b45ecf]/30">
                          <div className="whitespace-pre-line text-purple-100 leading-relaxed text-lg">
                            {section.content}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-[#480056] to-[#5a006d] border border-[#b45ecf] rounded-2xl p-8 shadow-2xl shadow-[#b45ecf]/20"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-[#b45ecf] bg-clip-text text-transparent">
            Questions About Our Privacy Policy?
          </h3>
          <p className="mb-2 text-purple-200 text-lg">
            Contact our privacy team at 
          </p>
          <p className="mb-6 text-[#b45ecf] font-semibold text-xl">
            privacy@360airo.com
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-[#b45ecf] to-[#d16ae6] hover:from-[#a34cbf] hover:to-[#b45ecf] text-white px-10 py-6 rounded-full font-semibold text-lg shadow-lg"
              onClick={() => window.open('mailto:privacy@360airo.com', '_blank')}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;