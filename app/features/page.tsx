'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Server, Bot, Sparkles, BarChart3, Shield, Zap, Users, Target, RefreshCw, TrendingUp, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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

const features = [
  {
    id: 'warmup',
    icon: Mail,
    title: 'Email Warmup',
    description: 'Automatically warm up your email accounts to maximize deliverability',
    details: [
      'Gradual sending volume increase',
      'Automated inbox interactions',
      'Spam folder monitoring',
      'Sender reputation building',
      'Custom warmup schedules',
      'Multi-account warmup',
    ],
    color: 'from-[#b45ecf] to-[#480056]',
  },
  {
    id: 'domains',
    icon: Server,
    title: 'Domains & Emails',
    description: 'Manage multiple domains and email accounts with ease',
    details: [
      'Unlimited domain connections',
      'Email account rotation',
      'Health monitoring dashboard',
      'DNS configuration checker',
      'Deliverability tracking',
      'Automated account switching',
    ],
    color: 'from-[#480056] to-[#b45ecf]',
  },
  {
    id: 'campaigns',
    icon: Target,
    title: 'AI & Manual Campaigns',
    description: 'Create powerful campaigns with AI assistance or manual control',
    details: [
      'Manual campaign builder with personalization tags',
      'AI-powered campaign generation',
      'Smart prospect segmentation',
      'A/B testing capabilities',
      'Automated follow-up sequences',
      'Campaign scheduling & timezone optimization',
    ],
    color: 'from-[#b45ecf] to-[#480056]',
  },
  {
    id: 'ai-content',
    icon: Sparkles,
    title: 'AI Content Generation',
    description: 'Let AI craft compelling email content that converts',
    details: [
      'AI chatbot for campaign configuration',
      'Prospect data analysis',
      'Personalized email generation',
      'Subject line optimization',
      'Tone and style customization',
      'Multi-language support',
    ],
    color: 'from-[#480056] to-[#b45ecf]',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Comprehensive insights into your campaign performance',
    details: [
      'Real-time campaign tracking',
      'Open and click-through rates',
      'Reply rate analytics',
      'Conversion tracking',
      'Deliverability metrics',
      'Custom report generation',
    ],
    color: 'from-[#b45ecf] to-[#480056]',
  },
];

const additionalFeatures = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-level encryption and data protection' },
  { icon: Zap, title: 'Lightning Fast', description: 'Process thousands of emails in minutes' },
  { icon: Users, title: 'Team Collaboration', description: 'Work together with your entire team' },
  { icon: RefreshCw, title: 'Auto-Sync', description: 'Real-time data synchronization' },
  { icon: TrendingUp, title: 'Growth Tools', description: 'Scale your outreach infinitely' },
  { icon: MessageSquare, title: '24/7 Support', description: 'Expert help whenever you need it' },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <br />
              <span className="gradient-text">Modern Outreach</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to run successful email campaigns, from warmup to analytics
            </p>
          </motion.div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                variants={itemVariants}
                className="scroll-mt-24"
              >
                <Card className="card-gradient p-8 md:p-12 hover:glow-effect transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                      <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-lg text-white/80 mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-white/90"
                          >
                            <div className="w-2 h-2 bg-[#b45ecf] rounded-full mr-3" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-br ${feature.color} rounded-2xl p-12 aspect-square flex items-center justify-center`}
                      >
                        <feature.icon className="h-32 w-32 text-white/20" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#19001d]/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              And Much More
            </h2>
            <p className="text-xl text-white/70">
              Additional features to power your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="card-gradient p-6 text-center hover:glow-effect transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
