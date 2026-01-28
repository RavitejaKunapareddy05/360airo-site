'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Eye, Share2, BookOpen, Calculator, Mail, Shield } from 'lucide-react';
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

// Blog posts with proper status indicators
const blogPosts = [
  {
    id: 1,
    title: "Free Email Mailbox Calculator to Scale Outreach Safely",
    excerpt: "Scale email outreach without hurting deliverability. Calculate exact mailbox needs to prevent reputation damage and optimize sending limits.",
    slug: "free-mailbox-calculator",
    author: "360Airo Team",
    date: "December 3, 2025",
    readTime: "6 min read",
    category: "Email Tools",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    isNew: true,
    views: "2.8K",
    tags: ["Email Calculator", "Deliverability", "Cold Email", "Free Tools", "Email Scaling"]
  },
  {
    id: 2,
    title: "10 Cheapest Cold Email Software Tools for Startups & Agencies (2026 Guide)",
    excerpt: "Cold email remains one of the most cost-effective growth channels for startups and agencies — but only if the tooling makes sense. Discover the 10 most affordable tools.",
    slug: "cheapest-cold-email-software",
    author: "360Airo Team",
    date: "November 15, 2025",
    readTime: "10 min read",
    category: "Cold Email",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    isNew: false,
    views: "4.1K",
    tags: ["Cold Email", "Software Tools", "Startups", "Agencies", "Budget"]
  },
  {
    id: 3,
    title: "Free Email Verification: How to Verify Email Addresses for Free with 360Airo",
    excerpt: "Clean your email lists, protect sender reputation, and improve outreach results before sending a single email. Learn how 360Airo's free email verification works.",
    slug: "free-email-verification",
    author: "360Airo Team",
    date: "October 25, 2025",
    readTime: "8 min read",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    isNew: false,
    views: "3.2K",
    tags: ["Email Verification", "Email Deliverability", "Free Tools", "360Airo"]
  },
  {
    id: 4,
    title: "LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025",
    excerpt: "LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Learn the exact playbook that's generating 3x more meetings.",
    slug: "linkedin-outreach-strategy",
    author: "Mike Rodriguez",
    date: "October 20, 2025",
    readTime: "7 min read",
    category: "LinkedIn",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    isNew: false,
    views: "1.8K",
    tags: ["LinkedIn", "Outreach", "B2B Sales"]
  },
  {
    id: 5,
    title: "Top Cold Email Tools in 2025: Which One Actually Delivers Replies?",
    excerpt: "In 2025, cold outreach has changed completely. What used to be a numbers game is now about precision, personalization, and performance. Discover the tools that actually get responses.",
    slug: "top-cold-email-tools",
    author: "Sarah Chen",
    date: "October 23, 2025",
    readTime: "8 min read",
    category: "Cold Email",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    isNew: false,
    views: "2.4K",
    tags: ["Cold Email", "Sales Tools", "Automation"]
  },
];

const categories = [
  "All Posts",
  "Email Tools",
  "Email Marketing",
  "Cold Email",
  "LinkedIn",
  "AI & Automation",
  "Sales Strategy",
  "Outreach"
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div variants={itemVariants} className="mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 text-sm font-medium">Blog & Resources</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
                  Outreach Insights
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Expert strategies, tool guides, and actionable tips to master cold outreach 
                  and grow your business faster.
                </p>
              </motion.div>

              {/* Categories Filter */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white backdrop-blur-sm border border-gray-700/50'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Blog Post */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Status Badge for Featured Post */}
                    {blogPosts[0].isNew ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm font-medium border border-green-500/30">
                        <span className="animate-pulse">✨</span>
                        <span>New Post</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 text-sm font-medium border border-yellow-500/30">
                        <span>⭐</span>
                        <span>Featured</span>
                      </div>
                    )}
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/30">
                      <Calculator className="h-4 w-4" />
                      <span>Free Tool</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium border border-purple-500/30">
                      <Shield className="h-4 w-4" />
                      <span>Deliverability Guide</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-400" />
                      </div>
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-400" />
                      </div>
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-green-400" />
                      </div>
                      <span>{blogPosts[0].views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 text-sm transition-colors backdrop-blur-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blogs/${blogPosts[0].slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl shadow-blue-500/20"
                    >
                      <Calculator className="mr-3 h-5 w-5" />
                      Try Free Calculator Tool
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </motion.button>
                  </Link>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-blue-500/30 group"
                >
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Calculate exact mailbox needs to prevent deliverability issues
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                All <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog Posts</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      {post.isNew ? (
                        <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full border border-green-400/30 shadow-lg shadow-green-500/20">
                          <span className="animate-pulse">✨</span> New
                        </div>
                      ) : post.featured ? (
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-medium rounded-full border border-yellow-400/30 shadow-lg shadow-yellow-500/20">
                          ⭐ Featured
                        </div>
                      ) : null}
                    </div>
                    
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                          post.category === 'Email Tools' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          post.category === 'Email Marketing' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          post.category === 'LinkedIn' ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30' :
                          post.category === 'Cold Email' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-gray-800 text-gray-300 border border-gray-700'
                        }`}>
                          {post.category === 'Email Tools' && <Calculator className="h-3 w-3 mr-2" />}
                          {post.category === 'Cold Email' && <Mail className="h-3 w-3 mr-2" />}
                          {post.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-gray-500 text-xs pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 hover:bg-gray-800 rounded text-gray-400 text-xs transition-colors">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4">
                        <Link href={`/blogs/${post.slug}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 py-2.5 px-4 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 text-white rounded-lg text-sm font-medium transition-all border border-gray-700"
                          >
                            Read {post.isNew ? "New Guide" : post.featured ? "Featured" : "More"}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </motion.button>
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-all border border-gray-700"
                        >
                          <Share2 className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-purple-900/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300" />
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-600" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with Outreach Insights
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Get the latest cold outreach strategies, AI automation tips, and sales insights delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 bg-white/10 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 backdrop-blur-sm transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all"
                  >
                    Subscribe Free
                  </motion.button>
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  Join 15,000+ outreach professionals. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
