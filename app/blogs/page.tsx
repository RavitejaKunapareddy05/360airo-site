'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

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

// Sample blog data - you can replace this with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Top Cold Email Tools in 2025: Which One Actually Delivers Replies?",
    excerpt: "In 2025, cold outreach has changed completely. What used to be a numbers game is now about precision, personalization, and performance. Businesses no longer care about sending thousands of emails. They care about getting responses that convert.",
    slug: "Top-Cold-Email-Tools",
    author: "Sales Team",
    date: "october 23, 2025",
    readTime: "8 min read",
    category: "Cold Email",
    image: "https://chatgpt.com/backend-api/estuary/content?id=file_0000000052ac6208b39c43f4bba97ac5&ts=489236&p=fs&cid=1&sig=8fc36ee870edbe9b9136f8e0940d32dc6d97ff294a1e7679800cfbe3f7f9d711&v=0",
    featured: true
  },
 
  {
  id: 2,
  title: "LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025",
  excerpt: "LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Whether you're a founder, SDR, or agency owner, mastering LinkedIn outreach can completely transform your lead generation in 2025.",
  slug: "linkedin-outreach-strategy",
  author: "Sales Team",
  date: "october 23 ,2025",
  readTime: "7 min read",
  category: "LinkedIn",
}
];

const categories = [
  "All Posts",
  "Cold Email",
  "Outreach",
  "AI & Automation",
  "Sales Strategy",
  "Email Marketing",
  "LinkedIn"
];

export default function BlogsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Insights, strategies, and tips to help you master cold outreach, 
                automate your sales process, and grow your business faster.
              </p>
            </motion.div>

            {/* Categories Filter */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0 
                      ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Blog Post */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-8 border border-[#b45ecf]/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#b45ecf]/20 text-[#b45ecf] text-sm font-medium">
                    Featured Post
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blogs/${blogPosts[0].slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold transition-all"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </Link>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 lg:h-80 rounded-2xl bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 border border-[#b45ecf]/30 flex items-center justify-center"
                >
                  <div className="text-4xl">📧</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Latest <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Articles</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300"
                  >
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#b45ecf]/20 text-[#b45ecf] text-xs font-medium mb-4">
                      {post.category}
                    </div>

                    {/* Post Image */}
                    <div className="relative h-48 rounded-xl bg-gradient-to-br from-[#b45ecf]/20 to-[#480056]/20 border border-[#b45ecf]/20 mb-4 flex items-center justify-center">
                      <div className="text-2xl">📊</div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#b45ecf] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-white/60 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link href={`/blogs/${post.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group w-full flex items-center justify-center gap-2 py-2 px-4 bg-white/10 hover:bg-[#b45ecf]/20 text-white rounded-lg text-sm font-medium transition-all mt-4"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-12 border border-[#b45ecf]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest cold outreach strategies, AI automation tips, and sales insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#b45ecf]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}