'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp, Mail, Users, Sparkles, Target, BarChart3 } from 'lucide-react';
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

const featuredPost = {
  title: 'The Ultimate Guide to Cold Email Outreach in 2024',
  excerpt: 'Learn proven strategies to increase your cold email response rates by 300% using AI-powered personalization and smart automation.',
  date: '2024-01-15',
  readTime: '12 min read',
  category: 'Best Practices',
  icon: Sparkles,
};

const blogPosts = [
  {
    title: '10 Email Subject Lines That Get 70% Open Rates',
    excerpt: 'Discover the psychology behind high-performing subject lines and how to craft them for your campaigns.',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Email Marketing',
    icon: Mail,
  },
  {
    title: 'How to Build an Email List from Scratch',
    excerpt: 'Step-by-step guide to building a high-quality email list that converts, including lead generation tactics.',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Lead Generation',
    icon: Users,
  },
  {
    title: 'AI Personalization: The Future of Email Outreach',
    excerpt: 'Why AI-powered personalization is revolutionizing cold email and how to implement it effectively.',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'AI & Automation',
    icon: Sparkles,
  },
  {
    title: 'Email Warmup: Complete Guide to Deliverability',
    excerpt: 'Everything you need to know about email warmup to ensure your messages land in the inbox.',
    date: '2024-01-03',
    readTime: '11 min read',
    category: 'Deliverability',
    icon: TrendingUp,
  },
  {
    title: 'Maximizing ROI with Campaign Analytics',
    excerpt: 'Learn how to track, measure, and optimize your email campaigns for maximum return on investment.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Analytics',
    icon: BarChart3,
  },
  {
    title: 'Advanced Segmentation Strategies',
    excerpt: 'Master the art of audience segmentation to send more targeted and effective email campaigns.',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Strategy',
    icon: Target,
  },
];

const categories = ['All', 'Best Practices', 'Email Marketing', 'AI & Automation', 'Deliverability', 'Analytics', 'Strategy'];

export default function BlogsPage() {
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
              Email Outreach
              <br />
              <span className="gradient-text">Insights & Tips</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expert advice, industry trends, and actionable strategies to help you master email outreach
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Card className="card-gradient p-8 md:p-12 glow-effect overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <featuredPost.icon className="w-full h-full" />
              </div>
              <div className="relative z-10">
                <span className="inline-block bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-white/80 mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-6 text-white/70">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredPost.readTime}
                  </span>
                  <span className="bg-[#b45ecf]/20 px-3 py-1 rounded-full text-[#b45ecf] text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <Button className="bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:opacity-90 text-white group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className={`border-[#b45ecf]/30 text-white hover:bg-[#b45ecf]/20 ${
                    category === 'All' ? 'bg-[#b45ecf]/20' : ''
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="card-gradient p-6 h-full flex flex-col hover:glow-effect transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <post.icon className="h-6 w-6 text-white" />
                  </div>

                  <span className="inline-block bg-[#480056]/50 text-[#b45ecf] px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-white/70 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-[#b45ecf] hover:text-white hover:bg-[#b45ecf]/20 w-full group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-[#b45ecf] text-white hover:bg-[#b45ecf]/20"
            >
              Load More Articles
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#480056]/30 to-[#19001d]/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Updated with <span className="gradient-text">Latest Tips</span>
            </h2>
            <p className="text-xl text-white/80">
              Subscribe to our newsletter for weekly email marketing insights and strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-[#480056]/30 border border-[#b45ecf]/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#b45ecf]"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#b45ecf] to-[#480056] hover:opacity-90 text-white glow-effect"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
