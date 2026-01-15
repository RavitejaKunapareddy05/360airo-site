// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight, Calendar, Clock, User, Eye, Share2 } from 'lucide-react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import Link from 'next/link';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// // Enhanced blog data with proper images and categories
// const blogPosts = [
//   {
//     id: 1,
//     title: "Top Cold Email Tools in 2025: Which One Actually Delivers Replies?",
//     excerpt: "In 2025, cold outreach has changed completely. What used to be a numbers game is now about precision, personalization, and performance. Discover the tools that actually get responses.",
//     slug: "Top-Cold-Email-Tools",
//     author: "Sarah Chen",
//     date: "October 23, 2025",
//     readTime: "8 min read",
//     category: "Cold Email",
//     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     featured: true,
//     views: "2.4K",
//     tags: ["Cold Email", "Sales Tools", "Automation"]
//   },
//    {
//     id: 3,
//     title: "Top Cold Email Tools in 2025: Which One Actually Delivers Replies?",
//     excerpt: "In 2025, cold outreach has changed completely. What used to be a numbers game is now about precision, personalization, and performance. Discover the tools that actually get responses.",
//     slug: "Top-Cold-Email-Tools",
//     author: "Sarah Chen",
//     date: "October 23, 2025",
//     readTime: "8 min read",
//     category: "Cold Email",
//     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  
//     views: "2.4K",
//     tags: ["Cold Email", "Sales Tools", "Automation"]
//   },
  
//   {
//     id: 2,
//     title: "LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025",
//     excerpt: "LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Learn the exact playbook that's generating 3x more meetings.",
//     slug: "linkedin-outreach-strategy",
//     author: "Mike Rodriguez",
//     date: "October 20, 2025",
//     readTime: "7 min read",
//     category: "LinkedIn",
//     image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     views: "1.8K",
//     tags: ["LinkedIn", "Outreach", "B2B Sales"]
//   },
//   // {
//   //   id: 3,
//   //   title: "AI-Powered Sales Automation: Boost Your Efficiency by 300%",
//   //   excerpt: "How artificial intelligence is revolutionizing sales processes and what you need to implement today to stay ahead of the competition.",
//   //   slug: "ai-sales-automation-2025",
//   //   author: "Dr. Alex Thompson",
//   //   date: "October 18, 2025",
//   //   readTime: "6 min read",
//   //   category: "AI & Automation",
//   //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//   //   views: "3.1K",
//   //   tags: ["AI", "Automation", "Sales"]
//   // },
//   // {
//   //   id: 4,
//   //   title: "The Psychology of Cold Calling: Turning Rejections into Opportunities",
//   //   excerpt: "Master the mental game of cold calling with proven psychological techniques that convert objections into appointments.",
//   //   slug: "psychology-cold-calling",
//   //   author: "Jessica Williams",
//   //   date: "October 15, 2025",
//   //   readTime: "5 min read",
//   //   category: "Sales Strategy",
//   //   image: "https://images.unsplash.com/photo-1584438784894-089f454kda99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   //   views: "1.2K",
//   //   tags: ["Cold Calling", "Psychology", "Sales"]
//   // },
//   // {
//   //   id: 5,
//   //   title: "Email Marketing Metrics That Actually Matter in 2025",
//   //   excerpt: "Stop tracking vanity metrics. Here are the key performance indicators that truly impact your bottom line and how to optimize them.",
//   //   slug: "email-marketing-metrics-2025",
//   //   author: "David Park",
//   //   date: "October 12, 2025",
//   //   readTime: "9 min read",
//   //   category: "Email Marketing",
//   //   image: "https://images.unsplash.com/photo-1601379327927-c60e6f7d7c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   //   views: "2.7K",
//   //   tags: ["Email Marketing", "Analytics", "ROI"]
//   // },
//   // {
//   //   id: 6,
//   //   title: "Building a Scalable Outreach System That Grows With Your Business",
//   //   excerpt: "Learn how to create an outreach framework that adapts to your growing business needs without sacrificing personalization.",
//   //   slug: "scalable-outreach-system",
//   //   author: "Emily Zhang",
//   //   date: "October 10, 2025",
//   //   readTime: "7 min read",
//   //   category: "Outreach",
//   //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   //   views: "1.5K",
//   //   tags: ["Outreach", "Scaling", "Systems"]
//   // }
// ];

// const categories = [
//   "All Posts",
//   "Cold Email",
//   "Outreach",
//   "AI & Automation",
//   "Sales Strategy",
//   "Email Marketing",
//   "LinkedIn"
// ];

// export default function BlogsPage() {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
//                                             {/* Canonical URL for SEO */}
//       <link rel="canonical" href="https://360airo.com/blogs" />
//         <Navbar />

//         {/* Hero Section */}
//         <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="max-w-6xl mx-auto text-center"
//           >
//             <motion.div variants={itemVariants} className="mb-8">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//                 Our <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Blog</span>
//               </h1>
//               <p className="text-xl text-white/70 max-w-3xl mx-auto">
//                 Insights, strategies, and tips to help you master cold outreach, 
//                 automate your sales process, and grow your business faster.
//               </p>
//             </motion.div>

//             {/* Categories Filter */}
//             <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
//               {categories.map((category, index) => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                     index === 0 
//                       ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white shadow-lg shadow-[#b45ecf]/25'
//                       : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm'
//                   }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Featured Blog Post */}
//         <section className="pb-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-8 border border-[#b45ecf]/20 backdrop-blur-sm"
//             >
//               <div className="grid lg:grid-cols-2 gap-8 items-center">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#b45ecf]/20 text-[#b45ecf] text-sm font-medium">
//                     Featured Post
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
//                     {blogPosts[0].title}
//                   </h2>
//                   <p className="text-white/70 text-lg leading-relaxed">
//                     {blogPosts[0].excerpt}
//                   </p>
//                   <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
//                     <div className="flex items-center gap-1">
//                       <User className="h-4 w-4" />
//                       <span>{blogPosts[0].author}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="h-4 w-4" />
//                       <span>{blogPosts[0].date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="h-4 w-4" />
//                       <span>{blogPosts[0].readTime}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Eye className="h-4 w-4" />
//                       <span>{blogPosts[0].views}</span>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {blogPosts[0].tags.map((tag, index) => (
//                       <span key={index} className="px-2 py-1 bg-white/10 rounded-lg text-white/70 text-xs">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>
//                   <Link href={`/blogs/${blogPosts[0].slug}`}>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#b45ecf]/25"
//                     >
//                       Read Full Article
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </motion.button>
//                   </Link>
//                 </div>
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-[#b45ecf]/30"
//                 >
//                   <img 
//                     src={blogPosts[0].image} 
//                     alt={blogPosts[0].title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Blog Posts Grid */}
//         <section className="py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={containerVariants}
//             >
//               <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//                 Latest <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Articles</span>
//               </motion.h2>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {blogPosts.slice(1).map((post) => (
//                   <motion.article
//                     key={post.id}
//                     variants={itemVariants}
//                     whileHover={{ y: -8, scale: 1.02 }}
//                     className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 shadow-lg hover:shadow-[#b45ecf]/10"
//                   >
//                     {/* Post Image */}
//                     <div className="relative h-48 overflow-hidden">
//                       <img 
//                         src={post.image} 
//                         alt={post.title}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#b45ecf]/20 text-[#b45ecf] text-xs font-medium">
//                           {post.category}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 space-y-4">
//                       <h3 className="text-xl font-bold text-white group-hover:text-[#b45ecf] transition-colors line-clamp-2 leading-tight">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
//                         {post.excerpt}
//                       </p>

//                       {/* Meta Information */}
//                       <div className="flex items-center justify-between text-white/60 text-xs">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           <span>{post.date}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           <span>{post.readTime}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           <span>{post.views}</span>
//                         </div>
//                       </div>

//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-1">
//                         {post.tags.slice(0, 2).map((tag, index) => (
//                           <span key={index} className="px-2 py-1 bg-white/5 rounded text-white/50 text-xs">
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex items-center justify-between pt-2">
//                         <Link href={`/blogs/${post.slug}`}>
//                           <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="group flex items-center gap-2 py-2 px-4 bg-white/10 hover:bg-[#b45ecf]/20 text-white rounded-lg text-sm font-medium transition-all"
//                           >
//                             Read More
//                             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                           </motion.button>
//                         </Link>
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
//                         >
//                           <Share2 className="h-4 w-4" />
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Newsletter Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-12 border border-[#b45ecf]/20 backdrop-blur-sm">
//               <div className="text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                   Stay Updated with Our Latest Insights
//                 </h2>
//                 <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
//                   Get the latest cold outreach strategies, AI automation tips, and sales insights delivered directly to your inbox.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#b45ecf] backdrop-blur-sm"
//                   />
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold shadow-lg shadow-[#b45ecf]/25"
//                   >
//                     Subscribe
//                   </motion.button>
//                 </div>
//                 <p className="text-white/50 text-sm mt-4">
//                   No spam. Unsubscribe at any time.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// }







'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Eye, Share2, BookOpen } from 'lucide-react';
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

// Enhanced blog data with proper images and categories - INCLUDING FREE EMAIL VERIFICATION
const blogPosts = [
  {
    id: 1,
    title: "Free Email Verification: How to Verify Email Addresses for Free with 360Airo",
    excerpt: "Clean your email lists, protect sender reputation, and improve outreach results before sending a single email. Learn how 360Airo's free email verification works.",
    slug: "free-email-verification",
    author: "360Airo Team",
    date: "October 25, 2025",
    readTime: "8 min read",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    views: "3.2K",
    tags: ["Email Verification", "Email Deliverability", "Free Tools", "360Airo"]
  },
  {
    id: 2,
    title: "LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025",
    excerpt: "LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Learn the exact playbook that's generating 3x more meetings.",
    slug: "linkedin-outreach-strategy",
    author: "Mike Rodriguez",
    date: "October 20, 2025",
    readTime: "7 min read",
    category: "LinkedIn",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "1.8K",
    tags: ["LinkedIn", "Outreach", "B2B Sales"]
  },
  {
    id: 3,
    title: "Top Cold Email Tools in 2025: Which One Actually Delivers Replies?",
    excerpt: "In 2025, cold outreach has changed completely. What used to be a numbers game is now about precision, personalization, and performance. Discover the tools that actually get responses.",
    slug: "top-cold-email-tools",
    author: "Sarah Chen",
    date: "October 23, 2025",
    readTime: "8 min read",
    category: "Cold Email",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "2.4K",
    tags: ["Cold Email", "Sales Tools", "Automation"]
  },
  {
    id: 4,
    title: "AI-Powered Sales Automation: Boost Your Efficiency by 300%",
    excerpt: "How artificial intelligence is revolutionizing sales processes and what you need to implement today to stay ahead of the competition.",
    slug: "ai-sales-automation-2025",
    author: "Dr. Alex Thompson",
    date: "October 18, 2025",
    readTime: "6 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    views: "3.1K",
    tags: ["AI", "Automation", "Sales"]
  },
  {
    id: 5,
    title: "The Psychology of Cold Calling: Turning Rejections into Opportunities",
    excerpt: "Master the mental game of cold calling with proven psychological techniques that convert objections into appointments.",
    slug: "psychology-cold-calling",
    author: "Jessica Williams",
    date: "October 15, 2025",
    readTime: "5 min read",
    category: "Sales Strategy",
    image: "https://images.unsplash.com/photo-1584438784894-089f454ada99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    views: "1.2K",
    tags: ["Cold Calling", "Psychology", "Sales"]
  },
  {
    id: 6,
    title: "Email Marketing Metrics That Actually Matter in 2025",
    excerpt: "Stop tracking vanity metrics. Here are the key performance indicators that truly impact your bottom line and how to optimize them.",
    slug: "email-marketing-metrics-2025",
    author: "David Park",
    date: "October 12, 2025",
    readTime: "9 min read",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1601379327927-c60e6f7d7c38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    views: "2.7K",
    tags: ["Email Marketing", "Analytics", "ROI"]
  }
];

const categories = [
  "All Posts",
  "Email Marketing",
  "Cold Email",
  "LinkedIn",
  "AI & Automation",
  "Sales Strategy",
  "Outreach"
];

export default function BlogsPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://360airo.com/blogs" />
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
                      ? 'bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white shadow-lg shadow-[#b45ecf]/25'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Blog Post - FREE EMAIL VERIFICATION */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-8 border border-[#b45ecf]/20 backdrop-blur-sm"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-[#b45ecf]/20 text-[#b45ecf] text-sm font-medium">
                      Featured Post
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/30">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        <span>Guide</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
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
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{blogPosts[0].views}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded-lg text-white/70 text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blogs/${blogPosts[0].slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold transition-all shadow-lg shadow-[#b45ecf]/25"
                    >
                      Read Free Email Verification Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </Link>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-[#b45ecf]/30 group"
                >
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <p className="text-white text-sm font-medium">
                        Master email verification to protect your sender reputation and improve deliverability
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid - SHOW ALL POSTS INCLUDING FREE EMAIL VERIFICATION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                All <span className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Blog Posts</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#b45ecf]/30 transition-all duration-300 shadow-lg hover:shadow-[#b45ecf]/10"
                  >
                    {/* Show Featured Badge for Free Email Verification post */}
                    {post.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-2 py-1 bg-[#b45ecf]/20 text-[#b45ecf] text-xs font-medium rounded-full border border-[#b45ecf]/30">
                          Featured
                        </div>
                      </div>
                    )}
                    
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          post.category === 'Email Marketing' ? 'bg-blue-500/20 text-blue-400' :
                          post.category === 'LinkedIn' ? 'bg-blue-600/20 text-blue-300' :
                          post.category === 'Cold Email' ? 'bg-purple-500/20 text-purple-400' :
                          post.category === 'AI & Automation' ? 'bg-amber-500/20 text-amber-400' :
                          post.category === 'Sales Strategy' ? 'bg-green-500/20 text-green-400' :
                          'bg-[#b45ecf]/20 text-[#b45ecf]'
                        }`}>
                          {post.category}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#b45ecf] transition-colors line-clamp-2 leading-tight">
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
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-white/5 rounded text-white/50 text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-2">
                        <Link href={`/blogs/${post.slug}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 py-2 px-4 bg-white/10 hover:bg-[#b45ecf]/20 text-white rounded-lg text-sm font-medium transition-all"
                          >
                            {post.featured ? "Read Guide" : "Read More"}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </motion.button>
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#480056]/30 to-[#19001d]/50 rounded-3xl p-12 border border-[#b45ecf]/20 backdrop-blur-sm">
              <div className="text-center">
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
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#b45ecf] backdrop-blur-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#480056] text-white rounded-lg font-semibold shadow-lg shadow-[#b45ecf]/25"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-white/50 text-sm mt-4">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
