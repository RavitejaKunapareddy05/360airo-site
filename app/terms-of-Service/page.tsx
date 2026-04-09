"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Layers, User, CheckCircle2, Shield, Lock, Activity, AlertTriangle, Ban, Scale, Mail } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Section {
  title: string;
  icon: React.ReactNode;
  content: string;
}

export default function TermsOfServicePage() {
  const sections: Section[] = [
    {
      title: "Introduction",
      icon: <BookOpen className="h-5 w-5" />,
      content: `Welcome to 360Airo. These Terms of Service (“Terms”) govern your access to and use of our platform, tools, and services related to AI-powered outreach, email automation, and sales engagement.
By accessing or using 360Airo, you agree to comply with these Terms. If you do not agree, you should not use the platform.`
    },
    {
      title: "Description of Service",
      icon: <Layers className="h-5 w-5" />,
      content: `360Airo provides AI-driven tools for cold email campaigns, multichannel outreach, deliverability optimization, and sales workflow automation.
Our platform helps users manage outreach campaigns, improve inbox placement, and streamline communication across email and other channels. Features may evolve over time as we improve the product.`
    },
    {
      title: "User Accounts",
      icon: <User className="h-5 w-5" />,
      content: `To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
You agree to provide accurate and complete information during registration and keep your account details updated.`
    },
    {
      title: "Acceptable Use",
      icon: <CheckCircle2 className="h-5 w-5" />,
      content: `You agree to use 360Airo responsibly and in compliance with all applicable laws and regulations.
You must not use the platform to:
Send spam, unsolicited, or deceptive communications
Violate email marketing laws (such as CAN-SPAM or GDPR)
Distribute harmful, fraudulent, or misleading content
Interfere with the platform’s functionality or security
We reserve the right to restrict or suspend accounts that violate these guidelines.`
    },
    {
      title: "Data and Privacy",
      icon: <Shield className="h-5 w-5" />,
      content: `Your use of 360Airo is subject to our Privacy Policy. We are committed to protecting your data and ensuring secure handling of user information.
You are responsible for ensuring that any data you upload or use within the platform complies with applicable data protection laws.`
    },
    {
      title: "Intellectual Property",
      icon: <Lock className="h-5 w-5" />,
      content: `All content, software, features, and functionality provided by 360Airo are the intellectual property of the company or its licensors.
You may not copy, modify, distribute, or reverse-engineer any part of the platform without prior written permission.`
    },
    {
      title: "Service Availability",
      icon: <Activity className="h-5 w-5" />,
      content: `We strive to provide reliable and uninterrupted service. However, we do not guarantee that the platform will always be available or error-free.
Maintenance, updates, or unforeseen technical issues may result in temporary service interruptions.`
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="h-5 w-5" />,
      content: `360Airo is provided on an “as is” and “as available” basis.
We are not liable for:
Any indirect, incidental, or consequential damages
Loss of business, revenue, or data
Email deliverability outcomes or campaign performance
Users are responsible for how they use the platform and the results of their outreach activities.`
    },
    {
      title: "Account Termination",
      icon: <Ban className="h-5 w-5" />,
      content: `We reserve the right to suspend or terminate your account at any time if you violate these Terms or engage in harmful or unlawful activities.
You may also discontinue use of the platform at any time.`
    },
    {
      title: "Governing Law",
      icon: <Scale className="h-5 w-5" />,
      content: `These Terms are governed by and interpreted in accordance with applicable laws and jurisdiction where 360Airo operates.
Any disputes arising from these Terms will be subject to the appropriate legal authorities in that jurisdiction.`
    },
    {
      title: "Contact Information",
      icon: <Mail className="h-5 w-5" />,
      content: `If you have any questions regarding these Terms of Service, you can contact us at:
Email: support@360airo.com
Website: www.360airo.com`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#19001d] via-[#480056] to-[#19001d] text-white">
      <link rel="canonical" href="https://360airo.com/terms-of-service" />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-28 pb-12 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#b45ecf]/10 to-transparent"></div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#b45ecf] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
          Welcome to 360Airo. These Terms of Service (“Terms”) govern your access to and use of our platform, tools, and services related to AI-powered outreach, email automation, and sales engagement.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 pb-24"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gradient-to-r from-[#480056] to-[#5a006d] border-[#b45ecf] shadow-lg shadow-[#b45ecf]/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-[#b45ecf] mt-1">{section.icon}</div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                      <div className="w-14 h-1 bg-gradient-to-r from-[#b45ecf] to-transparent rounded-full mt-2" />
                    </div>
                  </div>
                  <div className="whitespace-pre-line text-purple-100 leading-relaxed text-lg">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}
