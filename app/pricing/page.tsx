'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useState } from 'react';

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

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    description: 'Perfect for individuals and small teams getting started',
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      '5,000 emails per month',
      '2 email accounts',
      'Basic email warmup',
      'Manual campaigns',
      'Email templates',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Zap,
    description: 'For growing businesses ready to scale',
    monthlyPrice: 149,
    yearlyPrice: 1430,
    features: [
      '50,000 emails per month',
      '10 email accounts',
      'Advanced email warmup',
      'AI + Manual campaigns',
      'AI content generation',
      'Advanced analytics & reports',
      'A/B testing',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    description: 'For large organizations with custom needs',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Unlimited emails',
      'Unlimited email accounts',
      'Enterprise email warmup',
      'White-label options',
      'Custom AI training',
      'Dedicated account manager',
      'Custom integrations',
      'SSO & advanced security',
      '24/7 phone support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

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
              Simple, Transparent
              <br />
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>

            <div className="inline-flex items-center bg-[#480056]/30 rounded-full p-1 border border-[#b45ecf]/30">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full transition-all ${
                  !isYearly
                    ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white'
                    : 'text-white/70'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full transition-all ${
                  isYearly
                    ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white'
                    : 'text-white/70'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-[#b45ecf]/20 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  className={`card-gradient p-8 h-full flex flex-col ${
                    plan.popular ? 'glow-effect border-2 border-[#b45ecf]/50' : ''
                  }`}
                >
                  <div className="bg-gradient-to-br from-[#b45ecf] to-[#480056] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <plan.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-6 flex-grow">{plan.description}</p>

                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-white">
                            ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                          </span>
                          <span className="text-white/70 ml-2">/month</span>
                        </div>
                        {isYearly && (
                          <p className="text-sm text-[#b45ecf] mt-2">
                            Billed ${plan.yearlyPrice} annually
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-5xl font-bold text-white">Custom</div>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:opacity-90 text-white glow-effect'
                        : 'bg-[#480056]/50 hover:bg-[#480056]/70 text-white border border-[#b45ecf]/30'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start text-white/90"
                      >
                        <Check className="h-5 w-5 text-[#b45ecf] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <Card className="card-gradient p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Contact our sales team to discuss custom pricing and features tailored to your needs
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:opacity-90 text-white glow-effect"
              >
                Contact Sales
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#19001d]/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-6 text-left">
              {[
                {
                  q: 'What happens after my free trial ends?',
                  a: 'Your free trial lasts 14 days. After that, you can choose to upgrade to a paid plan or your account will be paused.',
                },
                {
                  q: 'Can I change plans later?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, debit cards, and PayPal. Enterprise customers can pay via invoice.',
                },
                {
                  q: 'Is there a setup fee?',
                  a: 'No, there are no setup fees for any of our plans. You only pay the subscription price.',
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="card-gradient p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/70">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
