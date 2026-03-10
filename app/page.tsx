// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { ArrowRight, Zap, Target, BarChart3, Mail, Brain, Shield, Users, Star, Play, Quote, Phone, Linkedin, Database, TrendingUp, Clock, Globe, Calendar, Sparkles, Bot, CheckCircle2, Send, MessageCircle, Eye, PenTool } from 'lucide-react';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import type { Variants } from 'framer-motion';
// import { useRef, useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// /* GlowCard with cursor-reactive glow */
// const GlowCard = ({ children, className = '', ...props }: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setMousePosition({ x, y });
//   };

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <div
//       ref={cardRef}
//       className={`relative overflow-hidden ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       {...props}
//     >
//       <div
//         className="pointer-events-none absolute transition-opacity duration-300 ease-out"
//         style={{
//           left: mousePosition.x - 150,
//           top: mousePosition.y - 150,
//           width: '300px',
//           height: '300px',
//           background: 'radial-gradient(circle, rgba(180,94,207,0.35) 0%, rgba(214,123,255,0.2) 25%, transparent 55%)',
//           borderRadius: '50%',
//           opacity: isHovered ? 1 : 0,
//           filter: 'blur(16px)',
//         }}
//       />
//       {children}
//     </div>
//   );
// };

// /* Motion variants */
// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, staggerChildren: 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 26 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
// };

// const channels = [
//   {
//     icon: Linkedin,
//     title: 'LinkedIn Outreach That Converts',
//     description:
//       'Send personalized connection requests, follow-up messages, and InMails automatically. Our AI identifies the best times to send and crafts unique intros for every prospect.',
//     color: 'from-[#0077B5] to-[#0066A0]',
//     stats: '3x higher response rates',
//   },
//   {
//     icon: Mail,
//     title: 'Cold Email Campaigns at Scale',
//     description:
//       'Launch hyper-personalized campaigns that bypass spam filters and land in inboxes. Deliverability tools, verified leads, and auto-rotating inboxes protect your domain.',
//     color: 'from-[#b45ecf] to-[#d67bff]',
//     stats: '98% deliverability rate',
//   },
//   {
//     icon: Phone,
//     title: 'Smart Calling & CRM Integration',
//     description:
//       'Place and track calls from your dashboard. Every touchpoint syncs with your CRM, giving your team a clear picture of the customer journey.',
//     color: 'from-[#480056] to-[#b45ecf]',
//     stats: '40% more qualified meetings',
//   },
// ];

// const features = [
//   {
//     icon: Brain,
//     title: 'AI-Personalized Outreach',
//     description: 'Generate personalized icebreakers in seconds with proven templates and dynamic variables.',
//     color: 'from-[#b45ecf] to-[#d67bff]',
//   },
//   {
//     icon: Database,
//     title: 'Data Enrichment Built In',
//     description:
//       'Discover verified business emails, phone numbers, and company data instantly. Identify and qualify leads without external tools.',
//     color: 'from-[#d67bff] to-[#b45ecf]',
//   },
//   {
//     icon: BarChart3,
//     title: 'Real-Time Analytics & Insights',
//     description:
//       'Measure performance across every campaign and channel. Optimize with AI insights that evolve with your data.',
//     color: 'from-[#480056] to-[#b45ecf]',
//   },
//   {
//     icon: Shield,
//     title: 'GDPR and CAN-SPAM Compliance',
//     description:
//       'Enterprise-grade encryption and strict compliance protocols for risk-free campaigns across regions.',
//     color: 'from-[#b45ecf] to-[#480056]',
//   },
//   {
//     icon: Globe,
//     title: 'Seamless Integrations',
//     description:
//       'Connect HubSpot, Salesforce, Pipedrive, Zoho, Slack, Gmail, Outlook, and Zapier for unified workflows.',
//     color: 'from-[#d67bff] to-[#480056]',
//   },
//   {
//     icon: Zap,
//     title: 'Unlimited Email Accounts',
//     description:
//       'Inbox rotation for safe scalability with improved deliverability and verified contacts.',
//     color: 'from-[#480056] to-[#d67bff]',
//   },
// ];

// const stats = [
//   { value: '5,000+', label: 'Businesses Trust Us', icon: Users },
//   { value: '12M+', label: 'Outreach Actions', icon: TrendingUp },
//   { value: '40%', label: 'More Meetings', icon: Calendar },
//   { value: '3x', label: 'Faster Response', icon: Clock },
// ];

// const keyAdvantages = [
//   'AI-personalized outreach with proven templates and dynamic variables',
//   'Unlimited email accounts with inbox rotation for safe scalability',
//   'Verified emails and phone numbers for higher accuracy',
//   'Seamless CRM and workflow integrations',
//   'GDPR and CAN-SPAM compliance for risk-free campaigns',
//   'Transparent reporting with engagement and reply tracking',
// ];

// const aiCapabilities = [
//   'Generate personalized icebreakers in seconds',
//   'Score leads based on engagement and intent',
//   'Adjust campaign timing dynamically',
//   'Automatically pause outreach when a meeting is booked',
// ];

// const useCases = [
//   {
//     title: 'Sales Teams',
//     description: 'Book more meetings, handle more leads, and never miss a follow-up.',
//     icon: Target,
//     color: 'from-[#b45ecf] to-[#d67bff]',
//   },
//   {
//     title: 'Marketing Teams',
//     description: 'Run highly personalized campaigns that convert interest into demos.',
//     icon: TrendingUp,
//     color: 'from-[#d67bff] to-[#b45ecf]',
//   },
//   {
//     title: 'Agencies',
//     description:
//       'Manage multiple clients under one dashboard with custom analytics and reporting.',
//     icon: Users,
//     color: 'from-[#480056] to-[#b45ecf]',
//   },
//   {
//     title: 'Founders & Startups',
//     description:
//       'Automate lead generation and outreach from day one without hiring a large sales team.',
//     icon: Sparkles,
//     color: 'from-[#b45ecf] to-[#480056]',
//   },
// ];

// const howItWorks = [
//   {
//     step: '01',
//     title: 'Import or Find Leads Instantly',
//     description:
//       'Upload your data or discover verified contacts and companies using the inbuilt enrichment engine.',
//     icon: Database,
//   },
//   {
//     step: '02',
//     title: 'Create Multichannel Sequences',
//     description:
//       'Blend emails, LinkedIn messages, and calls perfectly timed for every timezone.',
//     icon: Globe,
//   },
//   {
//     step: '03',
//     title: 'Let AI Handle the Rest',
//     description:
//       'AI manages follow-ups, tracks replies, pauses after meetings, and suggests next best actions.',
//     icon: Brain,
//   },
// ];

// /* Section divider */
// const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
//   if (variant === 'gradient') {
//     return (
//       <motion.div
//         initial={{ width: 0, opacity: 0 }}
//         whileInView={{ width: '100%', opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//         className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
//         style={{ maxWidth: '200px' }}
//       />
//     );
//   }
//   if (variant === 'left') {
//     return (
//       <motion.div
//         initial={{ width: 0, opacity: 0 }}
//         whileInView={{ width: '100%', opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//         className="h-0.5 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-transparent mb-6"
//         style={{ maxWidth: '100px' }}
//       />
//     );
//   }
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       className="flex items-center justify-center mb-8"
//     >
//       <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#b45ecf]/40 flex-1 max-w-16" />
//       <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#d67bff]" />
//       <div className="h-px bg-gradient-to-r from-[#b45ecf]/40 via-white/20 to-transparent flex-1 max-w-16" />
//     </motion.div>
//   );
// };

// // Redirect function
// const redirectToApp = () => {
//   window.open('https://app.360airo.com/', '_blank');
// };

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>360Airo - AI-Powered Multichannel Outreach Platform | LinkedIn, Email & Calls</title>
//         <meta name="description" content="360Airo is the all-in-one AI outreach platform that automates LinkedIn messages, cold emails, and calling sequences. Boost response rates, book more meetings, and scale your outreach effortlessly." />
//         <meta name="keywords" content="AI outreach, sales automation, LinkedIn automation, cold email, multichannel outreach, sales platform, lead generation" />
//         <link rel="canonical" href="https://360airo.com/" />
//         <meta property="og:title" content="360Airo - AI-Powered Multichannel Outreach Platform" />
//         <meta property="og:description" content="Automate LinkedIn, email, and calling sequences with AI-powered personalization. Book more meetings and scale your outreach effortlessly." />
//         <meta property="og:url" content="https://360airo.com/" />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="360Airo" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="360Airo - AI-Powered Multichannel Outreach Platform" />
//         <meta name="twitter:description" content="Automate LinkedIn, email, and calling sequences with AI-powered personalization. Book more meetings and scale your outreach effortlessly." />
//         <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] overflow-hidden">
//         <Navbar />

//         {/* HERO SECTION - Mobile first layout */}
//         <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 lg:pt-0">
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.06 }}
//               transition={{ duration: 1.6 }}
//               className="absolute inset-0"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(rgba(180,94,207,0.28) 1px, transparent 1px),
//                   linear-gradient(90deg, rgba(180,94,207,0.28) 1px, transparent 1px)
//                 `,
//                 backgroundSize: '80px 80px',
//               }}
//             />
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{
//                   opacity: [0.1, 0.35, 0.1],
//                   scale: [0.5, 1.15, 0.5],
//                   x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
//                   y: [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
//                   rotate: [0, 180, 360],
//                 }}
//                 transition={{ duration: 11 + i * 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
//                 className={`absolute w-16 h-16 sm:w-20 sm:h-20 ${
//                   i % 4 === 0
//                     ? 'rounded-full bg-gradient-to-br from-[#b45ecf]/20 to-[#d67bff]/10'
//                     : i % 4 === 1
//                     ? 'rounded-2xl bg-gradient-to-br from-[#d67bff]/20 to-[#480056]/10 rotate-45'
//                     : i % 4 === 2
//                     ? 'rounded-none bg-gradient-to-br from-[#480056]/20 to-[#b45ecf]/10 rotate-12'
//                     : 'rounded-xl bg-gradient-to-br from-[#b45ecf]/15 to-[#d67bff]/15'
//                 } blur-xl`}
//                 style={{ 
//                   top: `${14 + i * 11}%`, 
//                   left: `${8 + i * 10.5}%` 
//                 }}
//               />
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//             className="max-w-7xl mx-auto relative z-10 w-full"
//           >
//             <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-screen py-12 lg:py-20">
//               {/* LEFT CONTENT - Always first on mobile */}
//               <div className="space-y-6 lg:space-y-8 order-1">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.7 }}
//                   className="inline-block"
//                 >
//                   <div className="group relative cursor-pointer">
//                     <motion.div
//                       animate={{
//                         boxShadow: [
//                           '0 0 30px rgba(180,94,207,0.4)',
//                           '0 0 60px rgba(214,123,255,0.6)',
//                           '0 0 30px rgba(180,94,207,0.4)',
//                         ],
//                       }}
//                       transition={{ duration: 3.6, repeat: Infinity }}
//                       className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/30 via-[#d67bff]/20 to-[#480056]/30 rounded-full blur-xl"
//                     />
//                     <span className="relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#b45ecf]/50 text-white font-semibold text-xs sm:text-sm">
//                       <motion.div
//                         animate={{ rotate: 360, scale: [1, 1.1, 1] }}
//                         transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
//                         className="mr-2 sm:mr-3"
//                       >
//                         <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-[#d67bff]" />
//                       </motion.div>
//                       <span>The All-in-One AI Outreach Platform</span>
//                     </span>
//                   </div>
//                 </motion.div>

//                 <div className="space-y-4 lg:space-y-5">
//                   <motion.h1
//                     initial={{ opacity: 0, y: 80 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
//                     className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] lg:leading-[0.95] tracking-tight"
//                   >
//                     <motion.span
//                       initial={{ opacity: 0, rotateX: -90 }}
//                       animate={{ opacity: 1, rotateX: 0 }}
//                       transition={{ delay: 0.7, duration: 0.7 }}
//                       className="block transform-gpu"
//                     >
//                       Connect,
//                     </motion.span>
//                     <motion.span
//                       initial={{ opacity: 0, rotateX: -90 }}
//                       animate={{ opacity: 1, rotateX: 0 }}
//                       transition={{ delay: 0.9, duration: 0.7 }}
//                       className="block transform-gpu"
//                     >
//                       Engage,
//                     </motion.span>
//                     <motion.span
//                       initial={{ opacity: 0, scale: 0.55 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
//                       className="block bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-white bg-clip-text text-transparent transform-gpu"
//                     >
//                       and Close —
//                     </motion.span>
//                     <motion.span
//                       initial={{ opacity: 0, x: -100 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1.2, duration: 0.85 }}
//                       className="block text-white transform-gpu"
//                     >
//                       Smarter Than Ever
//                     </motion.span>
//                   </motion.h1>

//                   <motion.div
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: '100%', opacity: 1 }}
//                     transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
//                     className="h-1.5 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#480056] rounded-full relative overflow-hidden max-w-md"
//                   >
//                     <motion.div
//                       animate={{ x: ['-100%', '200%'] }}
//                       transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
//                       className="absolute inset-0 bg-white/40 rounded-full blur-sm"
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 36 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.35, duration: 0.7 }}
//                   className="space-y-4 lg:space-y-5 max-w-xl"
//                 >
//                   <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
//                     Simplify and organize your sales pipeline with the most powerful{' '}
//                     <motion.span
//                       animate={{ color: ['#b45ecf', '#d67bff', '#ffffff', '#b45ecf'] }}
//                       transition={{ duration: 3.4, repeat: Infinity }}
//                       className="font-semibold"
//                     >
//                       AI-powered outreach tool
//                     </motion.span>{' '}
//                     designed for teams that want to scale faster.
//                   </p>
//                   <p className="text-sm sm:text-base text-white/75">
//                     Automate LinkedIn messages, cold emails, and calling sequences from a single, intuitive dashboard.
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {['No multiple logins', 'No manual follow-ups', 'No missed opportunities'].map((t, i) => (
//                       <span
//                         key={i}
//                         className="text-xs font-medium text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.6, duration: 0.7 }}
//                   className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2"
//                 >
//                   <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                     <motion.div
//                       animate={{
//                         background: [
//                           'linear-gradient(45deg, #ffffff, #f8f9fa)',
//                           'linear-gradient(45deg, #f8f9fa, #ffffff)',
//                         ],
//                       }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                       className="absolute inset-0"
//                     />
//                     <Button 
//                       size="lg" 
//                       onClick={redirectToApp}
//                       className="relative bg-transparent text-[#480056] px-6 lg:px-8 py-3 text-sm lg:text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl w-full sm:w-auto"
//                     >
//                       <span>Start Free Trial</span>
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </motion.div>

//                   <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                     <motion.div
//                       animate={{
//                         background: [
//                           'linear-gradient(45deg, rgba(180,94,207,0.2), rgba(214,123,255,0.2))',
//                           'linear-gradient(45deg, rgba(214,123,255,0.2), rgba(72,0,86,0.2))',
//                         ],
//                       }}
//                       transition={{ duration: 3, repeat: Infinity }}
//                       className="absolute inset-0"
//                     />
//                     <Button
//                       size="lg"
//                       variant="outline"
//                       onClick={redirectToApp}
//                       className="relative border-2 border-[#b45ecf] bg-transparent text-white hover:bg-transparent px-6 lg:px-8 py-3 text-sm lg:text-base font-bold rounded-xl backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
//                     >
//                       <Play className="mr-2 h-4 w-4" />
//                       <span>Book a Demo</span>
//                     </Button>
//                   </motion.div>
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }} className="pt-1">
//                   <p className="text-base lg:text-lg font-semibold text-white">
//                     Just smarter conversations, higher conversions, and <span className="text-[#b45ecf]">unstoppable growth.</span>
//                   </p>
//                 </motion.div>
//               </div>

//               {/* RIGHT VISUAL - Always second on mobile */}
//               <motion.div
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6, duration: 0.9 }}
//                 className="relative flex items-center justify-center h-full order-2 mb-8 lg:mb-0"
//               >
//                 {/* Central Command Hub */}
//                 <div className="relative scale-90 sm:scale-100">
//                   {/* Main Dashboard Core */}
//                   <motion.div
//                     initial={{ scale: 0.88, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 1, duration: 0.85 }}
//                     className="relative w-64 sm:w-72 lg:w-80 h-40 sm:h-48 lg:h-52 bg-gradient-to-br from-[#19001d] via-[#480056] to-[#19001d] rounded-2xl border border-[#b45ecf]/30 backdrop-blur-sm overflow-hidden"
//                   >
//                     {/* Glass overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
                    
//                     {/* Dashboard content */}
//                     <div className="relative z-10 p-4 sm:p-5 h-full">
//                       <div className="flex items-center justify-between mb-3 sm:mb-4">
//                         <motion.div
//                           animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
//                           transition={{ duration: 3.6, repeat: Infinity }}
//                           className="flex items-center space-x-2"
//                         >
//                           <span className="text-2xl sm:text-3xl font-black text-white/70">360°</span>
//                           <span className="text-base sm:text-lg font-bold text-[#b45ecf]">airo</span>
//                         </motion.div>
                        
//                         {/* Live status indicator */}
//                         <motion.div
//                           animate={{ scale: [1, 1.2, 1] }}
//                           transition={{ duration: 2, repeat: Infinity }}
//                           className="flex items-center space-x-1"
//                         >
//                           <div className="w-2 h-2 bg-green-400 rounded-full" />
//                           <span className="text-xs text-white/60">Live</span>
//                         </motion.div>
//                       </div>
                      
//                       {/* Mini analytics bars */}
//                       <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
//                         {[75, 92, 68, 85].map((width, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ width: 0 }}
//                             animate={{ width: `${width}%` }}
//                             transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
//                             className="h-1 sm:h-1.5 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-full opacity-60"
//                           />
//                         ))}
//                       </div>
                      
//                       {/* Campaign stats */}
//                       <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
//                         {[
//                           { label: 'Sent', value: '2.4K', icon: Send },
//                           { label: 'Opens', value: '1.8K', icon: Eye },
//                           { label: 'Replies', value: '347', icon: MessageCircle }
//                         ].map(({ label, value, icon: Icon }, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 1.4 + i * 0.1 }}
//                             className="bg-white/5 rounded-lg p-1 sm:p-2"
//                           >
//                             <Icon className="h-3 w-3 text-[#b45ecf] mx-auto mb-1" />
//                             <div className="text-xs font-bold text-white">{value}</div>
//                             <div className="text-xs text-white/60">{label}</div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Orbiting Platform Icons */}
//                   {[
//                     { icon: Linkedin, color: '#0077B5', position: 'top-left' as const, delay: 1.3 },
//                     { icon: Mail, color: '#EA4335', position: 'top-right' as const, delay: 1.5 },
//                     { icon: Phone, color: '#b45ecf', position: 'bottom-left' as const, delay: 1.7 },
//                     { icon: Brain, color: '#d67bff', position: 'bottom-right' as const, delay: 1.9 }
//                   ].map(({ icon: Icon, color, position, delay }, i) => {
//                     const positions: Record<string, string> = {
//                       'top-left': 'absolute -top-3 -left-3 sm:-top-4 sm:-left-4',
//                       'top-right': 'absolute -top-3 -right-3 sm:-top-4 sm:-right-4',
//                       'bottom-left': 'absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4',
//                       'bottom-right': 'absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4'
//                     };

//                     return (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0, rotate: -180 }}
//                         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                         transition={{ delay, duration: 0.6, type: 'spring' }}
//                         className={`${positions[position]} w-10 h-10 sm:w-12 sm:h-12 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center`}
//                         style={{ backgroundColor: `${color}15` }}
//                         whileHover={{ 
//                           scale: 1.2, 
//                           rotate: 15,
//                           boxShadow: `0 0 25px ${color}40`
//                         }}
//                       >
//                         <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color }} />
//                       </motion.div>
//                     );
//                   })}

//                   {/* Floating Metric Cards */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 40, x: -20 }}
//                     animate={{ opacity: 1, y: 0, x: 0 }}
//                     transition={{ delay: 2, duration: 0.7 }}
//                     className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-[#b45ecf]/30 min-w-[100px] sm:min-w-[120px]"
//                     whileHover={{ scale: 1.05, y: -5 }}
//                   >
//                     <div className="text-center">
//                       <motion.div 
//                         animate={{ scale: [1, 1.1, 1] }} 
//                         transition={{ duration: 2, repeat: Infinity }} 
//                         className="text-xl sm:text-2xl font-bold text-white mb-1"
//                       >
//                         98%
//                       </motion.div>
//                       <div className="text-xs text-white/70">Deliverability</div>
//                       <div className="w-full h-1 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-full mt-1 sm:mt-2" />
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 40, x: 20 }}
//                     animate={{ opacity: 1, y: 0, x: 0 }}
//                     transition={{ delay: 2.2, duration: 0.7 }}
//                     className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-[#d67bff]/30 min-w-[100px] sm:min-w-[120px]"
//                     whileHover={{ scale: 1.05, y: -5 }}
//                   >
//                     <div className="text-center">
//                       <motion.div
//                         animate={{ scale: [1, 1.1, 1] }}
//                         transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
//                         className="text-xl sm:text-2xl font-bold text-white mb-1"
//                       >
//                         3x
//                       </motion.div>
//                       <div className="text-xs text-white/70">Response Rate</div>
//                       <div className="w-full h-1 bg-gradient-to-r from-[#d67bff] to-[#480056] rounded-full mt-1 sm:mt-2" />
//                     </div>
//                   </motion.div>

//                   {/* Data Flow Animation */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: [0, 0.6, 0] }}
//                     transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
//                     className="absolute inset-0 pointer-events-none"
//                   >
//                     {[...Array(4)].map((_, i) => (
//                       <motion.div
//                         key={i}
//                         animate={{
//                           x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
//                           y: [Math.random() * 150 - 75, Math.random() * 150 - 75],
//                           scale: [0, 1, 0],
//                         }}
//                         transition={{
//                           duration: 4,
//                           repeat: Infinity,
//                           delay: i * 0.8,
//                           ease: 'easeInOut'
//                         }}
//                         className="absolute w-1 h-1 bg-[#b45ecf] rounded-full blur-sm"
//                         style={{
//                           left: '50%',
//                           top: '50%',
//                         }}
//                       />
//                     ))}
//                   </motion.div>

//                   {/* Success Notification Toast */}
//                   <motion.div
//                     initial={{ opacity: 0, x: 100, scale: 0.8 }}
//                     animate={{ opacity: 1, x: 0, scale: 1 }}
//                     transition={{ delay: 2.8, duration: 0.6 }}
//                     className="absolute top-12 -right-12 sm:top-16 sm:-right-16 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 flex items-center space-x-2 min-w-[140px] sm:min-w-[160px]"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
//                     <div className="text-xs sm:text-xs text-white">
//                       <div className="font-semibold">Meeting Booked!</div>
//                       <div className="text-white/70">John D. - Acme Corp</div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Problem / Promise Section */}
//         <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
//             <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">The Problem with Traditional Outreach</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 In a world where prospects receive hundreds of sales messages daily, personalization and timing make all the difference.
//               </h2>
//               <SectionDivider />
//               <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
//                 <p>
//                   Most sales teams juggle five different tools just to run a single campaign — one for email, another for LinkedIn, another for CRM syncing, and yet another for analytics. The result? <span className="text-[#b45ecf] font-semibold">Wasted time, inconsistent data, and missed deals.</span>
//                 </p>
//                 <p>
//                   360Airo unifies prospect discovery, multichannel outreach, analytics, and CRM sync in one place so your team operates with clarity and speed.
//                 </p>
//                 <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-[#b45ecf]/20">
//                   <p className="text-white font-semibold text-lg lg:text-xl">
//                     Our mission is simple: help you reach more people, automate repetitive tasks, and close more deals, without compromising personalization or compliance.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Channels Section - Responsive grid */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">What Makes This Platform Different</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 LinkedIn, Email, and Calls — <span className="text-[#b45ecf]">All in One Place</span>
//               </h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
//                 360Airo is an AI-driven multichannel outreach platform that reaches prospects where they're most active while keeping every message personal, timely, and authentic.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//               {channels.map((channel, index) => (
//                 <GlowCard key={index} className="group cursor-pointer rounded-2xl">
//                   <Card className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 h-full border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 group-hover:scale-105">
//                     <div className="relative z-10">
//                       <motion.div
//                         className={`bg-gradient-to-r ${channel.color} w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 lg:mb-6`}
//                         whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <channel.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
//                       </motion.div>
//                       <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#d67bff]">{channel.title}</h3>
//                       <motion.div
//                         className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-4 lg:mb-6"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: '100%' }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.15, duration: 0.8 }}
//                       />
//                       <p className="text-white/80 mb-4 lg:mb-6 leading-relaxed text-sm">{channel.description}</p>
//                       <div className="bg-[#b45ecf]/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full inline-block border border-[#b45ecf]/30">
//                         <span className="text-white font-semibold text-xs">{channel.stats}</span>
//                       </div>
//                     </div>
//                   </Card>
//                 </GlowCard>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* Why Us + Stats Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Why Thousands of Businesses Choose Us</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Because it works.</h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
//                 Users report 3x higher response rates, faster conversions, and a clear boost in pipeline growth within weeks.
//               </p>
//             </motion.div>

//             <div className="space-y-8 lg:space-y-12">
//               <motion.div variants={itemVariants}>
//                 <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">Key advantages that set us apart:</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
//                   {keyAdvantages.map((advantage, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -24 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.08, duration: 0.5 }}
//                       className="flex items-center bg-white/5 backdrop-blur-sm p-3 lg:p-4 rounded-xl border border-white/10"
//                     >
//                       <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-[#b45ecf] mr-3 lg:mr-4 flex-shrink-0" />
//                       <span className="text-white text-sm lg:text-base">{advantage}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//                   {stats.map((stat, index) => (
//                     <GlowCard key={index} className="group cursor-pointer rounded-2xl">
//                       <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50">
//                         <motion.div
//                           className="bg-white/15 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:bg-[#b45ecf]/30"
//                           whileHover={{ rotate: 360, scale: 1.2 }}
//                           transition={{ duration: 0.7 }}
//                         >
//                           <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#b45ecf] transition-colors group-hover:text-white" />
//                         </motion.div>
//                         <motion.div
//                           className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1 lg:mb-2"
//                           initial={{ opacity: 0, scale: 0.85 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.08, duration: 0.5 }}
//                         >
//                           {stat.value}
//                         </motion.div>
//                         <div className="text-white/80 font-semibold text-xs lg:text-sm">{stat.label}</div>
//                       </div>
//                     </GlowCard>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </section>

//         {/* AI Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Intelligent Automation</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 AI That <span className="text-[#b45ecf]">Never Sleeps</span>
//               </h2>
//               <SectionDivider />
//               <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
//                 <p>
//                   Imagine a sales assistant that writes your emails, finds leads, analyzes engagement, and follows up automatically. It studies your campaigns, identifies patterns, and continually optimizes performance.
//                 </p>
//                 <p>
//                   From crafting the perfect cold email to predicting which prospects will respond next, it transforms data into opportunity and compounds advantage over time.
//                 </p>
//                 <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-[#b45ecf]/20">
//                   <p className="text-white font-semibold text-lg lg:text-xl">
//                     With every message sent and every reply tracked, it learns and refines — giving you a competitive edge traditional tools can't match.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">Our AI helps you:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
//                 {aiCapabilities.map((capability, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.88 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.08, duration: 0.5 }}
//                     whileHover={{ scale: 1.04 }}
//                     className="flex items-center bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 group hover:border-[#b45ecf]/30 transition-all duration-300"
//                   >
//                     <div className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
//                       <Brain className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
//                     </div>
//                     <span className="text-white text-sm lg:text-base group-hover:text-[#d67bff] transition-colors">{capability}</span>
//                   </motion.div>
//                 ))}
//               </div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-center mt-8 lg:mt-10"
//               >
//                 <p className="text-lg lg:text-xl font-bold text-white">
//                   It's not just automation, it's <span className="text-[#b45ecf]">intelligence in motion.</span>
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Use Cases Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Built for Every Growth-Focused Team</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 Scale outreach without scaling chaos.
//               </h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
//                 Whether you're a founder, sales rep, or agency, this is your workspace for precision outreach.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//               {useCases.map((useCase, index) => (
//                 <GlowCard key={index} className="group cursor-pointer rounded-xl">
//                   <div className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 h-full group-hover:scale-105">
//                     <motion.div
//                       className={`bg-gradient-to-r ${useCase.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
//                       whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(180,94,207,0.5)' }}
//                       transition={{ duration: 0.7 }}
//                     >
//                       <useCase.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
//                     </motion.div>
//                     <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#d67bff]">{useCase.title}</h3>
//                     <motion.div
//                       className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-4"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: '100%' }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.08, duration: 0.5 }}
//                     />
//                     <p className="text-white/80 text-xs lg:text-sm">{useCase.description}</p>
//                   </div>
//                 </GlowCard>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-center mt-8 lg:mt-10"
//             >
//               <p className="text-lg lg:text-xl font-bold text-white">
//                 You bring the leads, we bring <span className="text-[#b45ecf]">efficiency.</span>
//               </p>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Features / Integrations Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-6xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Integrate With the Tools You Already Use</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 Every conversation, note, and reply stays in sync, with zero data duplication.
//               </h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
//                 Security that gives you peace of mind — enterprise-grade encryption, permission controls, and compliance built in.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
//               {features.map((feature, index) => (
//                 <GlowCard key={index} className="group cursor-pointer rounded-2xl">
//                   <Card className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 h-full border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/8 group-hover:border-[#b45ecf]/30 group-hover:scale-105">
//                     <div className="relative z-10 h-full flex flex-col">
//                       <motion.div
//                         className={`bg-gradient-to-r ${feature.color} w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
//                         whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <feature.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
//                       </motion.div>
//                       <h3 className="text-base lg:text-lg font-semibold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#d67bff]">{feature.title}</h3>
//                       <motion.div
//                         className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-3 lg:mb-4"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: '100%' }}
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.08, duration: 0.6 }}
//                       />
//                       <p className="text-white/80 text-xs lg:text-sm leading-relaxed flex-grow">{feature.description}</p>
//                     </div>
//                   </Card>
//                 </GlowCard>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* Free Tools Section with Scrollable Features */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-6xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Free Email Tools Collection</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 Powerful tools to boost your campaigns
//               </h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
//                 Access our complete suite of free email tools designed to help you test, verify, and optimize.
//               </p>
//             </motion.div>

//             <div className="relative">
//               <div className="free-tools-scroll overflow-y-auto max-h-[600px] pr-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 pb-4">
//                   {[
//                     {
//                       icon: Mail,
//                       title: 'Email Verifier',
//                       description: 'Verify email addresses instantly with our high-accuracy validation tool that checks syntax, domain, and mailbox existence.',
//                       color: 'from-blue-500 to-cyan-400',
//                       href: '/free-tools/email-verifier'
//                     },
//                     {
//                       icon: BarChart3,
//                       title: 'Mailbox Calculator',
//                       description: 'Calculate optimal sending limits and inbox rotation schedules to maintain high deliverability rates.',
//                       color: 'from-green-500 to-emerald-400',
//                       href: '/free-tools/mailbox-calculator'
//                     },
//                     {
//                       icon: Shield,
//                       title: 'DMARC Generator',
//                       description: 'Create DMARC records to protect your domain from email spoofing and phishing attacks.',
//                       color: 'from-indigo-500 to-purple-400',
//                       href: '/free-tools/dmarc-generator'
//                     },
//                     {
//                       icon: Zap,
//                       title: 'SPF Generator',
//                       description: 'Generate SPF records to authorize legitimate email senders and prevent spam flagging.',
//                       color: 'from-yellow-500 to-orange-400',
//                       href: '/free-tools/spf-generator'
//                     },
//                     {
//                       icon: Sparkles,
//                       title: 'Email Pitch Generator',
//                       description: 'Generate compelling email pitches using AI-powered templates that convert.',
//                       color: 'from-pink-500 to-rose-400',
//                       href: '/free-tools/email-pitch-generator'
//                     },
//                     {
//                       icon: PenTool,
//                       title: 'Email Signature Builder',
//                       description: 'Create professional email signatures with custom branding, links, and contact information.',
//                       color: 'from-teal-500 to-cyan-400',
//                       href: '/free-tools/email-signature-builder'
//                     },
//                   ].map((tool, index) => (
//                     <GlowCard key={index} className="group cursor-pointer rounded-2xl flex-shrink-0 w-[300px] lg:w-[320px]">
//                       <Link href={tool.href}>
//                         <Card className="relative bg-white/5 backdrop-blur-sm p-5 lg:p-6 h-full border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/8 group-hover:border-[#b45ecf]/30 group-hover:scale-105">
//                           <div className="relative z-10 h-full flex flex-col">
//                             <motion.div
//                               className={`bg-gradient-to-r ${tool.color} w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
//                               whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
//                               transition={{ duration: 0.5 }}
//                             >
//                               <tool.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
//                             </motion.div>
//                             <h3 className="text-base lg:text-lg font-semibold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#d67bff]">{tool.title}</h3>
//                             <motion.div
//                               className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-3 lg:mb-4"
//                               initial={{ width: 0 }}
//                               whileInView={{ width: '100%' }}
//                               viewport={{ once: true }}
//                               transition={{ delay: index * 0.08, duration: 0.6 }}
//                             />
//                             <p className="text-white/80 text-sm leading-relaxed flex-grow mb-4">{tool.description}</p>
//                             <div className="flex items-center gap-2 text-[#b45ecf] group-hover:text-[#d67bff] transition-colors mt-auto text-sm font-medium">
//                               <span>Access Tool</span>
//                               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                             </div>
//                           </div>
//                         </Card>
//                       </Link>
//                     </GlowCard>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <motion.div variants={itemVariants} className="text-center mt-8 lg:mt-12">
//               <Button 
//                 size="lg"
//                 className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] hover:from-[#a34dbf] hover:to-[#c56aef] text-white font-semibold px-8 py-6 rounded-xl transition-all hover:shadow-lg hover:shadow-[#b45ecf]/25"
//                 onClick={() => window.location.href = '/free-tools'}
//               >
//                 Explore All 10 Tools
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Testimonials Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">What Our Users Say</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Real results from real customers</h2>
//               <SectionDivider />
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//               {[
//                 {
//                   name: 'Head of Sales',
//                   company: 'CredFlow',
//                   content:
//                     'Our outreach was scattered before we found this tool. Now we manage email, LinkedIn, and calls in one place and our meetings have tripled.',
//                   initials: 'HS',
//                   rating: 5,
//                 },
//                 {
//                   name: 'Growth Lead',
//                   company: 'CloudWorks',
//                   content:
//                     'We replaced multiple tools with this platform. The AI writes better intros than most SDRs, and our reply rate jumped from 5% to 18% in two weeks.',
//                   initials: 'GL',
//                   rating: 5,
//                 },
//                 {
//                   name: 'Founder',
//                   company: 'LeadBridge Agency',
//                   content:
//                     'The automation feels personal. Every message sounds human, and our leads love the experience.',
//                   initials: 'FD',
//                   rating: 5,
//                 },
//               ].map((t, index) => (
//                 <GlowCard key={index} className="group cursor-pointer rounded-2xl">
//                   <div className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 h-full group-hover:scale-105">
//                     <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-[#b45ecf]/60 mb-4 lg:mb-6" />
//                     <div className="flex mb-4 lg:mb-6">
//                       {[...Array(t.rating)].map((_, i) => (
//                         <motion.div key={i} whileHover={{ scale: 1.25, rotate: 360 }} transition={{ duration: 0.35, delay: i * 0.06 }}>
//                           <Star className="h-4 w-4 lg:h-5 lg:w-5 text-[#b45ecf] fill-current" />
//                         </motion.div>
//                       ))}
//                     </div>
//                     <motion.div
//                       className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-4 lg:mb-6"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: '100%' }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.15, duration: 0.6 }}
//                     />
//                     <p className="text-white/90 mb-6 lg:mb-8 italic text-base lg:text-lg leading-relaxed">"{t.content}"</p>
//                     <div className="flex items-center">
//                       <motion.div
//                         className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-3 lg:mr-4 text-white font-bold text-sm lg:text-base"
//                         whileHover={{ scale: 1.16, boxShadow: '0 0 20px rgba(180,94,207,0.6)' }}
//                       >
//                         {t.initials}
//                       </motion.div>
//                       <div>
//                         <div className="font-bold text-white text-sm lg:text-base">{t.name}</div>
//                         <div className="text-white/70 text-xs lg:text-sm">{t.company}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </GlowCard>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* How It Works Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-5xl mx-auto">
//             <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
//               <div className="inline-block mb-2">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">How It Works — From Prospect to Pipeline</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Simple 3-step process that transforms your outreach</h2>
//               <SectionDivider />
//               <p className="text-base lg:text-lg text-white/80">The result: a consistently growing pipeline with less manual work.</p>
//             </motion.div>

//             <div className="space-y-8 lg:space-y-14">
//               {howItWorks.map((item, index) => (
//                 <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 group">
//                   <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
//                     <div className="relative">
//                       <motion.div
//                         className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center"
//                         whileHover={{ scale: 1.18, rotate: 12, boxShadow: '0 0 50px rgba(180,94,207,0.8)' }}
//                       >
//                         <item.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
//                       </motion.div>
//                       <motion.div
//                         className="absolute -top-2 -right-2 bg-white text-[#480056] w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm"
//                         whileHover={{ scale: 1.25, rotate: 360 }}
//                         transition={{ duration: 0.45 }}
//                       >
//                         {item.step}
//                       </motion.div>
//                     </div>
//                   </GlowCard>
//                   <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
//                     <SectionDivider variant="left" />
//                     <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#d67bff]">{item.title}</h3>
//                     <p className="text-white/80 text-base lg:text-lg leading-relaxed">{item.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </section>

//         {/* Pricing Blurb Section */}
//         <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto text-center">
//             <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Pricing That Scales With You</h2>
//               <SectionDivider />
//               <p className="text-white/90 text-base lg:text-lg">
//                 Get enterprise-grade automation without enterprise pricing. Every plan includes unlimited sending accounts, free email verification, AI content generation, smart inbox rotation, CRM integrations, and deliverability monitoring.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-4">
//                 <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                   <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <Button 
//                     size="lg" 
//                     onClick={redirectToApp}
//                     className="relative bg-white text-[#480056] hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full sm:w-auto"
//                   >
//                     Start Free Trial
//                     <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                   <motion.div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 via-[#d67bff]/20 to-[#480056]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <Button 
//                     size="lg" 
//                     variant="outline" 
//                     onClick={redirectToApp}
//                     className="relative border-white/60 bg-white/10 text-white hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-white w-full sm:w-auto"
//                   >
//                     Book a Demo
//                   </Button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* Final CTA Section */}
//         <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/20 via-[#19001d]/40 to-[#480056]/20" />
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
//             <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
//               <div className="inline-block">
//                 <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Ready to Transform Your Outreach?</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
//                 Stop juggling multiple tools. <br className="hidden sm:block" />
//                 Start engaging leads smarter. <br className="hidden sm:block" />
//                 <span className="bg-gradient-to-r from-white via-[#d67bff] to-[#b45ecf] bg-clip-text text-transparent">
//                   Grow your business across LinkedIn, email, and phone
//                 </span>
//               </h2>
//               <SectionDivider />
//               <p className="text-white/90 text-base lg:text-lg">
//                 Experience the future of outbound communication, where every campaign is personalized, automated, and optimized for success.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
//                 <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                   <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <Button 
//                     size="lg" 
//                     onClick={redirectToApp}
//                     className="relative bg-white text-[#480056] hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full sm:w-auto"
//                   >
//                     Start Free Trial
//                     <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
//                   <motion.div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 via-[#d67bff]/20 to-[#480056]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <Button 
//                     size="lg" 
//                     variant="outline" 
//                     onClick={redirectToApp}
//                     className="relative border-white/60 bg-white/10 text-white hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-white w-full sm:w-auto"
//                   >
//                     Book a Demo
//                   </Button>
//                 </motion.div>
//               </div>
//               <motion.div
//                 className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4 lg:mt-6 mb-2"
//                 initial={{ width: 0 }}
//                 whileInView={{ width: '150px' }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.9 }}
//                 style={{ maxWidth: '150px' }}
//               />
//               <p className="text-white/70 text-sm">✨ Get enterprise-grade automation without enterprise pricing</p>
//             </motion.div>
//           </motion.div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// }




'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3, 
  Mail, 
  Brain, 
  Shield, 
  Users, 
  Star, 
  Play, 
  Quote,  
  Phone, 
  Linkedin, 
  Database, 
  TrendingUp, 
  Clock, 
  Globe, 
  Calendar, 
  Sparkles, 
  Bot, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Eye,
  FileText
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

/* GlowCard with cursor-reactive glow */
const GlowCard = ({ children, className = '', ...props }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(180,94,207,0.35) 0%, rgba(214,123,255,0.2) 25%, transparent 55%)',
          borderRadius: '50%',
          opacity: isHovered ? 1 : 0,
          filter: 'blur(16px)',
        }}
      />
      {children}
    </div>
  );
};

/* Motion variants */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const channels = [
  {
    icon: Linkedin,
    title: 'LinkedIn Outreach That Converts',
    description:
      'Send personalized connection requests, follow-up messages, and InMails automatically. Our AI identifies the best times to send and crafts unique intros for every prospect.',
    color: 'from-[#0077B5] to-[#0066A0]',
    stats: '3x higher response rates',
  },
  {
    icon: Mail,
    title: 'Cold Email Campaigns at Scale',
    description:
      'Launch hyper-personalized campaigns that bypass spam filters and land in inboxes. Deliverability tools, verified leads, and auto-rotating inboxes protect your domain.',
    color: 'from-[#b45ecf] to-[#d67bff]',
    stats: '98% deliverability rate',
  },
  {
    icon: Phone,
    title: 'Smart Calling & CRM Integration',
    description:
      'Place and track calls from your dashboard. Every touchpoint syncs with your CRM, giving your team a clear picture of the customer journey.',
    color: 'from-[#480056] to-[#b45ecf]',
    stats: '40% more qualified meetings',
  },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Personalized Outreach',
    description: 'Generate personalized icebreakers in seconds with proven templates and dynamic variables.',
    color: 'from-[#b45ecf] to-[#d67bff]',
  },
  {
    icon: Database,
    title: 'Data Enrichment Built In',
    description:
      'Discover verified business emails, phone numbers, and company data instantly. Identify and qualify leads without external tools.',
    color: 'from-[#d67bff] to-[#b45ecf]',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics & Insights',
    description:
      'Measure performance across every campaign and channel. Optimize with AI insights that evolve with your data.',
    color: 'from-[#480056] to-[#b45ecf]',
  },
  {
    icon: Shield,
    title: 'GDPR and CAN-SPAM Compliance',
    description:
      'Enterprise-grade encryption and strict compliance protocols for risk-free campaigns across regions.',
    color: 'from-[#b45ecf] to-[#480056]',
  },
  {
    icon: Globe,
    title: 'Seamless Integrations',
    description:
      'Connect HubSpot, Salesforce, Pipedrive, Zoho, Slack, Gmail, Outlook, and Zapier for unified workflows.',
    color: 'from-[#d67bff] to-[#480056]',
  },
  {
    icon: Zap,
    title: 'Unlimited Email Accounts',
    description:
      'Inbox rotation for safe scalability with improved deliverability and verified contacts.',
    color: 'from-[#480056] to-[#d67bff]',
  },
];

const stats = [
  { value: '5,000+', label: 'Businesses Trust Us', icon: Users },
  { value: '12M+', label: 'Outreach Actions', icon: TrendingUp },
  { value: '40%', label: 'More Meetings', icon: Calendar },
  { value: '3x', label: 'Faster Response', icon: Clock },
];

const keyAdvantages = [
  'AI-personalized outreach with proven templates and dynamic variables',
  'Unlimited email accounts with inbox rotation for safe scalability',
  'Verified emails and phone numbers for higher accuracy',
  'Seamless CRM and workflow integrations',
  'GDPR and CAN-SPAM compliance for risk-free campaigns',
  'Transparent reporting with engagement and reply tracking',
];

const aiCapabilities = [
  'Generate personalized icebreakers in seconds',
  'Score leads based on engagement and intent',
  'Adjust campaign timing dynamically',
  'Automatically pause outreach when a meeting is booked',
];

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Book more meetings, handle more leads, and never miss a follow-up.',
    icon: Target,
    color: 'from-[#b45ecf] to-[#d67bff]',
  },
  {
    title: 'Marketing Teams',
    description: 'Run highly personalized campaigns that convert interest into demos.',
    icon: TrendingUp,
    color: 'from-[#d67bff] to-[#b45ecf]',
  },
  {
    title: 'Agencies',
    description:
      'Manage multiple clients under one dashboard with custom analytics and reporting.',
    icon: Users,
    color: 'from-[#480056] to-[#b45ecf]',
  },
  {
    title: 'Founders & Startups',
    description:
      'Automate lead generation and outreach from day one without hiring a large sales team.',
    icon: Sparkles,
    color: 'from-[#b45ecf] to-[#480056]',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Import or Find Leads Instantly',
    description:
      'Upload your data or discover verified contacts and companies using the inbuilt enrichment engine.',
    icon: Database,
  },
  {
    step: '02',
    title: 'Create Multichannel Sequences',
    description:
      'Blend emails, LinkedIn messages, and calls perfectly timed for every timezone.',
    icon: Globe,
  },
  {
    step: '03',
    title: 'Let AI Handle the Rest',
    description:
      'AI manages follow-ups, tracks replies, pauses after meetings, and suggests next best actions.',
    icon: Brain,
  },
];

/* Section divider */
const SectionDivider = ({ variant = 'center' }: { variant?: 'center' | 'left' | 'gradient' }) => {
  if (variant === 'gradient') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
        style={{ maxWidth: '200px' }}
      />
    );
  }
  if (variant === 'left') {
    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-0.5 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-transparent mb-6"
        style={{ maxWidth: '100px' }}
      />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-[#b45ecf]/40 flex-1 max-w-16" />
      <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#d67bff]" />
      <div className="h-px bg-gradient-to-r from-[#b45ecf]/40 via-white/20 to-transparent flex-1 max-w-16" />
    </motion.div>
  );
};

export default function Home() {
  const router = useRouter();

  // Main platform redirect function
  const redirectToApp = () => {
    window.open('https://app.360airo.com/', '_blank');
  };

  // Demo form page navigation
  const redirectToDemoForm = () => {
    router.push('/demo-form');
  };

  return (
    <>
      <Head>
        <title>360Airo - AI-Powered Multichannel Outreach Platform | LinkedIn, Email & Calls</title>
        <meta name="description" content="360Airo is the all-in-one AI outreach platform that automates LinkedIn messages, cold emails, and calling sequences. Boost response rates, book more meetings, and scale your outreach effortlessly." />
        <meta name="keywords" content="AI outreach, sales automation, LinkedIn automation, cold email, multichannel outreach, sales platform, lead generation" />
        <link rel="canonical" href="https://360airo.com/" />
        <meta property="og:title" content="360Airo - AI-Powered Multichannel Outreach Platform" />
        <meta property="og:description" content="Automate LinkedIn, email, and calling sequences with AI-powered personalization. Book more meetings and scale your outreach effortlessly." />
        <meta property="og:url" content="https://360airo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="360Airo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360Airo - AI-Powered Multichannel Outreach Platform" />
        <meta name="twitter:description" content="Automate LinkedIn, email, and calling sequences with AI-powered personalization. Book more meetings and scale your outreach effortlessly." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] overflow-hidden">
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://360airo.com" />
        <Navbar />

        {/* HERO SECTION - Mobile first layout */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 lg:pt-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 1.6 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(180,94,207,0.28) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(180,94,207,0.28) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.35, 0.1],
                  scale: [0.5, 1.15, 0.5],
                  x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
                  y: [0, 24 * (i % 2 === 0 ? 1 : -1), 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 11 + i * 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                className={`absolute w-16 h-16 sm:w-20 sm:h-20 ${
                  i % 4 === 0
                    ? 'rounded-full bg-gradient-to-br from-[#b45ecf]/20 to-[#d67bff]/10'
                    : i % 4 === 1
                    ? 'rounded-2xl bg-gradient-to-br from-[#d67bff]/20 to-[#480056]/10 rotate-45'
                    : i % 4 === 2
                    ? 'rounded-none bg-gradient-to-br from-[#480056]/20 to-[#b45ecf]/10 rotate-12'
                    : 'rounded-xl bg-gradient-to-br from-[#b45ecf]/15 to-[#d67bff]/15'
                } blur-xl`}
                style={{ 
                  top: `${14 + i * 11}%`, 
                  left: `${8 + i * 10.5}%` 
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto relative z-10 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-screen py-12 lg:py-20">
              {/* LEFT CONTENT - Always first on mobile */}
              <div className="space-y-6 lg:space-y-8 order-1">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="inline-block"
                >
                  <div className="group relative cursor-pointer">
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(180,94,207,0.4)',
                          '0 0 60px rgba(214,123,255,0.6)',
                          '0 0 30px rgba(180,94,207,0.4)',
                        ],
                      }}
                      transition={{ duration: 3.6, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/30 via-[#d67bff]/20 to-[#480056]/30 rounded-full blur-xl"
                    />
                    <span className="relative inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#b45ecf]/50 text-white font-semibold text-xs sm:text-sm">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
                        className="mr-2 sm:mr-3"
                      >
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-[#d67bff]" />
                      </motion.div>
                      <span>The All-in-One AI Outreach Platform</span>
                    </span>
                  </div>
                </motion.div>

                <div className="space-y-4 lg:space-y-5">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 1, type: 'spring', stiffness: 100 }}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] lg:leading-[0.95] tracking-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.7, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Connect,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className="block transform-gpu"
                    >
                      Engage,
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.05, duration: 0.9, type: 'spring' }}
                      className="block bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-white bg-clip-text text-transparent transform-gpu"
                    >
                      and Close —
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.85 }}
                      className="block text-white transform-gpu"
                    >
                      Smarter Than Ever
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '100%', opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.1, ease: 'easeOut' }}
                    className="h-1.5 bg-gradient-to-r from-[#b45ecf] via-[#d67bff] to-[#480056] rounded-full relative overflow-hidden max-w-md"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-white/40 rounded-full blur-sm"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35, duration: 0.7 }}
                  className="space-y-4 lg:space-y-5 max-w-xl"
                >
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light">
                    Simplify and organize your sales pipeline with the most powerful{' '}
                    <motion.span
                      animate={{ color: ['#b45ecf', '#d67bff', '#ffffff', '#b45ecf'] }}
                      transition={{ duration: 3.4, repeat: Infinity }}
                      className="font-semibold"
                    >
                      AI-powered outreach tool
                    </motion.span>{' '}
                    designed for teams that want to scale faster.
                  </p>
                  <p className="text-sm sm:text-base text-white/75">
                    Automate LinkedIn messages, cold emails, and calling sequences from a single, intuitive dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['No multiple logins', 'No manual follow-ups', 'No missed opportunities'].map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2"
                >
                  {/* Start Free Trial Button - Links to 360airo Platform */}
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, #ffffff, #f8f9fa)',
                          'linear-gradient(45deg, #f8f9fa, #ffffff)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0"
                    />
                    <Button 
                      size="lg" 
                      onClick={redirectToDemoForm}
                      className="relative bg-transparent text-[#480056] px-6 lg:px-8 py-3 text-sm lg:text-base font-bold rounded-xl transition-all duration-300 border-2 border-transparent group-hover:shadow-2xl w-full sm:w-auto"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>

                  {/* Book a Demo Button - Links to Demo Form Page */}
                  <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                    <motion.div
                      animate={{
                        background: [
                          'linear-gradient(45deg, rgba(180,94,207,0.2), rgba(214,123,255,0.2))',
                          'linear-gradient(45deg, rgba(214,123,255,0.2), rgba(72,0,86,0.2))',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0"
                    />
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={redirectToDemoForm}
                      className="relative border-2 border-[#b45ecf] bg-transparent text-white hover:bg-transparent px-6 lg:px-8 py-3 text-sm lg:text-base font-bold rounded-xl backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      <span>Book a Demo</span>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }} className="pt-1">
                  <p className="text-base lg:text-lg font-semibold text-white">
                    Just smarter conversations, higher conversions, and <span className="text-[#b45ecf]">unstoppable growth.</span>
                  </p>
                </motion.div>
              </div>

              {/* RIGHT VISUAL - Always second on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.9 }}
                className="relative flex items-center justify-center h-full order-2 mb-8 lg:mb-0"
              >
                {/* Central Command Hub */}
                <div className="relative scale-90 sm:scale-100">
                  {/* Main Dashboard Core */}
                  <motion.div
                    initial={{ scale: 0.88, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.85 }}
                    className="relative w-64 sm:w-72 lg:w-80 h-40 sm:h-48 lg:h-52 bg-gradient-to-br from-[#19001d] via-[#480056] to-[#19001d] rounded-2xl border border-[#b45ecf]/30 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
                    
                    {/* Dashboard content */}
                    <div className="relative z-10 p-4 sm:p-5 h-full">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3.6, repeat: Infinity }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-2xl sm:text-3xl font-black text-white/70">360°</span>
                          <span className="text-base sm:text-lg font-bold text-[#b45ecf]">airo</span>
                        </motion.div>
                        
                        {/* Live status indicator */}
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center space-x-1"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-xs text-white/60">Live</span>
                        </motion.div>
                      </div>
                      
                      {/* Mini analytics bars */}
                      <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                        {[75, 92, 68, 85].map((width, i) => (
                          <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                            className="h-1 sm:h-1.5 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-full opacity-60"
                          />
                        ))}
                      </div>
                      
                      {/* Campaign stats */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                        {[
                          { label: 'Sent', value: '2.4K', icon: Send },
                          { label: 'Opens', value: '1.8K', icon: Eye },
                          { label: 'Replies', value: '347', icon: MessageCircle }
                        ].map(({ label, value, icon: Icon }, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                            className="bg-white/5 rounded-lg p-1 sm:p-2"
                          >
                            <Icon className="h-3 w-3 text-[#b45ecf] mx-auto mb-1" />
                            <div className="text-xs font-bold text-white">{value}</div>
                            <div className="text-xs text-white/60">{label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Orbiting Platform Icons */}
                  {[
                    { icon: Linkedin, color: '#0077B5', position: 'top-left' as const, delay: 1.3 },
                    { icon: Mail, color: '#EA4335', position: 'top-right' as const, delay: 1.5 },
                    { icon: Phone, color: '#b45ecf', position: 'bottom-left' as const, delay: 1.7 },
                    { icon: Brain, color: '#d67bff', position: 'bottom-right' as const, delay: 1.9 }
                  ].map(({ icon: Icon, color, position, delay }, i) => {
                    const positions: Record<string, string> = {
                      'top-left': 'absolute -top-3 -left-3 sm:-top-4 sm:-left-4',
                      'top-right': 'absolute -top-3 -right-3 sm:-top-4 sm:-right-4',
                      'bottom-left': 'absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4',
                      'bottom-right': 'absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4'
                    };

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay, duration: 0.6, type: 'spring' }}
                        className={`${positions[position]} w-10 h-10 sm:w-12 sm:h-12 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center`}
                        style={{ backgroundColor: `${color}15` }}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 15,
                          boxShadow: `0 0 25px ${color}40`
                        }}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color }} />
                      </motion.div>
                    );
                  })}

                  {/* Floating Metric Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 2, duration: 0.7 }}
                    className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-[#b45ecf]/30 min-w-[100px] sm:min-w-[120px]"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ duration: 2, repeat: Infinity }} 
                        className="text-xl sm:text-2xl font-bold text-white mb-1"
                      >
                        98%
                      </motion.div>
                      <div className="text-xs text-white/70">Deliverability</div>
                      <div className="w-full h-1 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-full mt-1 sm:mt-2" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 2.2, duration: 0.7 }}
                    className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-[#d67bff]/30 min-w-[100px] sm:min-w-[120px]"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        className="text-xl sm:text-2xl font-bold text-white mb-1"
                      >
                        3x
                      </motion.div>
                      <div className="text-xs text-white/70">Response Rate</div>
                      <div className="w-full h-1 bg-gradient-to-r from-[#d67bff] to-[#480056] rounded-full mt-1 sm:mt-2" />
                    </div>
                  </motion.div>

                  {/* Data Flow Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                          y: [Math.random() * 150 - 75, Math.random() * 150 - 75],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.8,
                          ease: 'easeInOut'
                        }}
                        className="absolute w-1 h-1 bg-[#b45ecf] rounded-full blur-sm"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Success Notification Toast */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.6 }}
                    className="absolute top-12 -right-12 sm:top-16 sm:-right-16 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 flex items-center space-x-2 min-w-[140px] sm:min-w-[160px]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                    <div className="text-xs sm:text-xs text-white">
                      <div className="font-semibold">Meeting Booked!</div>
                      <div className="text-white/70">John D. - Acme Corp</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Problem / Promise Section */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/30 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">The Problem with Traditional Outreach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                In a world where prospects receive hundreds of sales messages daily, personalization and timing make all the difference.
              </h2>
              <SectionDivider />
              <div className="text-left space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  Most sales teams juggle five different tools just to run a single campaign — one for email, another for LinkedIn, another for CRM syncing, and yet another for analytics. The result? <span className="text-[#b45ecf] font-semibold">Wasted time, inconsistent data, and missed deals.</span>
                </p>
                <p>
                  360Airo unifies prospect discovery, multichannel outreach, analytics, and CRM sync in one place so your team operates with clarity and speed.
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-[#b45ecf]/20">
                  <p className="text-white font-semibold text-lg lg:text-xl">
                    Our mission is simple: help you reach more people, automate repetitive tasks, and close more deals, without compromising personalization or compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Channels Section - Responsive grid */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">What Makes This Platform Different</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                LinkedIn, Email, and Calls — <span className="text-[#b45ecf]">All in One Place</span>
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                360Airo is an AI-driven multichannel outreach platform that reaches prospects where they're most active while keeping every message personal, timely, and authentic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {channels.map((channel, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 h-full border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 group-hover:scale-105">
                    <div className="relative z-10">
                      <motion.div
                        className={`bg-gradient-to-r ${channel.color} w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 lg:mb-6`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <channel.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#d67bff]">{channel.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-4 lg:mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.8 }}
                      />
                      <p className="text-white/80 mb-4 lg:mb-6 leading-relaxed text-sm">{channel.description}</p>
                      <div className="bg-[#b45ecf]/20 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full inline-block border border-[#b45ecf]/30">
                        <span className="text-white font-semibold text-xs">{channel.stats}</span>
                      </div>
                    </div>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Us + Stats Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Why Thousands of Businesses Choose Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Because it works.</h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                Users report 3x higher response rates, faster conversions, and a clear boost in pipeline growth within weeks.
              </p>
            </motion.div>

            <div className="space-y-8 lg:space-y-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">Key advantages that set us apart:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                  {keyAdvantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      className="flex items-center bg-white/5 backdrop-blur-sm p-3 lg:p-4 rounded-xl border border-white/10"
                    >
                      <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-[#b45ecf] mr-3 lg:mr-4 flex-shrink-0" />
                      <span className="text-white text-sm lg:text-base">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {stats.map((stat, index) => (
                    <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50">
                        <motion.div
                          className="bg-white/15 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:bg-[#b45ecf]/30"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.7 }}
                        >
                          <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#b45ecf] transition-colors group-hover:text-white" />
                        </motion.div>
                        <motion.div
                          className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1 lg:mb-2"
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-white/80 font-semibold text-xs lg:text-sm">{stat.label}</div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Intelligent Automation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                AI That <span className="text-[#b45ecf]">Never Sleeps</span>
              </h2>
              <SectionDivider />
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-white/80 leading-relaxed">
                <p>
                  Imagine a sales assistant that writes your emails, finds leads, analyzes engagement, and follows up automatically. It studies your campaigns, identifies patterns, and continually optimizes performance.
                </p>
                <p>
                  From crafting the perfect cold email to predicting which prospects will respond next, it transforms data into opportunity and compounds advantage over time.
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-[#b45ecf]/20">
                  <p className="text-white font-semibold text-lg lg:text-xl">
                    With every message sent and every reply tracked, it learns and refines — giving you a competitive edge traditional tools can't match.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">Our AI helps you:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ scale: 1.04 }}
                    className="flex items-center bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 group hover:border-[#b45ecf]/30 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
                      <Brain className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <span className="text-white text-sm lg:text-base group-hover:text-[#d67bff] transition-colors">{capability}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center mt-8 lg:mt-10"
              >
                <p className="text-lg lg:text-xl font-bold text-white">
                  It's not just automation, it's <span className="text-[#b45ecf]">intelligence in motion.</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Built for Every Growth-Focused Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Scale outreach without scaling chaos.
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-3xl mx-auto">
                Whether you're a founder, sales rep, or agency, this is your workspace for precision outreach.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {useCases.map((useCase, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/10 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 h-full group-hover:scale-105">
                    <motion.div
                      className={`bg-gradient-to-r ${useCase.color} w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 0 30px rgba(180,94,207,0.5)' }}
                      transition={{ duration: 0.7 }}
                    >
                      <useCase.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 transition-colors group-hover:text-[#d67bff]">{useCase.title}</h3>
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 lg:mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                    />
                    <p className="text-white/80 text-xs lg:text-sm">{useCase.description}</p>
                  </div>
                </GlowCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-8 lg:mt-10"
            >
              <p className="text-lg lg:text-xl font-bold text-white">
                You bring the leads, we bring <span className="text-[#b45ecf]">efficiency.</span>
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Features / Integrations Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Integrate With the Tools You Already Use</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Every conversation, note, and reply stays in sync, with zero data duplication.
              </h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
                Security that gives you peace of mind — enterprise-grade encryption, permission controls, and compliance built in.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                  <Card className="relative bg-white/5 backdrop-blur-sm p-4 lg:p-6 h-full border border-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/8 group-hover:border-[#b45ecf]/30 group-hover:scale-105">
                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div
                        className={`bg-gradient-to-r ${feature.color} w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-3 lg:mb-4`}
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                      </motion.div>
                      <h3 className="text-base lg:text-lg font-semibold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#d67bff]">{feature.title}</h3>
                      <motion.div
                        className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-3 lg:mb-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.6 }}
                      />
                      <p className="text-white/80 text-xs lg:text-sm leading-relaxed flex-grow">{feature.description}</p>
                    </div>
                  </Card>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">What Our Users Say</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Real results from real customers</h2>
              <SectionDivider />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: 'Head of Sales',
                  company: 'CredFlow',
                  content:
                    'Our outreach was scattered before we found this tool. Now we manage email, LinkedIn, and calls in one place and our meetings have tripled.',
                  initials: 'HS',
                  rating: 5,
                },
                {
                  name: 'Growth Lead',
                  company: 'CloudWorks',
                  content:
                    'We replaced multiple tools with this platform. The AI writes better intros than most SDRs, and our reply rate jumped from 5% to 18% in two weeks.',
                  initials: 'GL',
                  rating: 5,
                },
                {
                  name: 'Founder',
                  company: 'LeadBridge Agency',
                  content:
                    'The automation feels personal. Every message sounds human, and our leads love the experience.',
                  initials: 'FD',
                  rating: 5,
                },
              ].map((t, index) => (
                <GlowCard key={index} className="group cursor-pointer rounded-2xl">
                  <div className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#b45ecf]/50 h-full group-hover:scale-105">
                    <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-[#b45ecf]/60 mb-4 lg:mb-6" />
                    <div className="flex mb-4 lg:mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.25, rotate: 360 }} transition={{ duration: 0.35, delay: i * 0.06 }}>
                          <Star className="h-4 w-4 lg:h-5 lg:w-5 text-[#b45ecf] fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="h-px bg-gradient-to-r from-[#b45ecf]/20 via-white/10 to-transparent mb-4 lg:mb-6"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6 }}
                    />
                    <p className="text-white/90 mb-6 lg:mb-8 italic text-base lg:text-lg leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center">
                      <motion.div
                        className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-3 lg:mr-4 text-white font-bold text-sm lg:text-base"
                        whileHover={{ scale: 1.16, boxShadow: '0 0 20px rgba(180,94,207,0.6)' }}
                      >
                        {t.initials}
                      </motion.div>
                      <div>
                        <div className="font-bold text-white text-sm lg:text-base">{t.name}</div>
                        <div className="text-white/70 text-xs lg:text-sm">{t.company}</div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/2 via-[#19001d]/20 to-white/2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
              <div className="inline-block mb-2">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">How It Works — From Prospect to Pipeline</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Simple 3-step process that transforms your outreach</h2>
              <SectionDivider />
              <p className="text-base lg:text-lg text-white/80">The result: a consistently growing pipeline with less manual work.</p>
            </motion.div>

            <div className="space-y-8 lg:space-y-14">
              {howItWorks.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 group">
                  <GlowCard className="flex-shrink-0 cursor-pointer rounded-full">
                    <div className="relative">
                      <motion.div
                        className="bg-gradient-to-r from-[#b45ecf] to-[#d67bff] w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.18, rotate: 12, boxShadow: '0 0 50px rgba(180,94,207,0.8)' }}
                      >
                        <item.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-2 -right-2 bg-white text-[#480056] w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-bold text-xs lg:text-sm"
                        whileHover={{ scale: 1.25, rotate: 360 }}
                        transition={{ duration: 0.45 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>
                  </GlowCard>
                  <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                    <SectionDivider variant="left" />
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 transition-colors group-hover:text-[#d67bff]">{item.title}</h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing Blurb Section */}
        <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-5xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Pricing That Scales With You</h2>
              <SectionDivider />
              <p className="text-white/90 text-base lg:text-lg">
                Get enterprise-grade automation without enterprise pricing. Every plan includes unlimited sending accounts, free email verification, AI content generation, smart inbox rotation, CRM integrations, and deliverability monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-4">
                {/* Start Free Trial Button - Links to 360airo Platform */}
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    onClick={redirectToDemoForm}
                    className="relative bg-white text-[#480056] hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                
                {/* Book a Demo Button - Links to Demo Form Page */}
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 via-[#d67bff]/20 to-[#480056]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={redirectToDemoForm}
                    className="relative border-white/60 bg-white/10 text-white hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-white w-full sm:w-auto"
                  >
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#480056]/20 via-[#19001d]/40 to-[#480056]/20" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="text-[#b45ecf] font-semibold text-sm tracking-wider uppercase">Ready to Transform Your Outreach?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                Stop juggling multiple tools. <br className="hidden sm:block" />
                Start engaging leads smarter. <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-[#d67bff] to-[#b45ecf] bg-clip-text text-transparent">
                  Grow your business across LinkedIn, email, and phone
                </span>
              </h2>
              <SectionDivider />
              <p className="text-white/90 text-base lg:text-lg">
                Experience the future of outbound communication, where every campaign is personalized, automated, and optimized for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center pt-2">
                {/* Start Free Trial Button - Links to 360airo Platform */}
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white via-[#f8f9fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    onClick={redirectToDemoForm

                    }
                    className="relative bg-white text-[#480056] hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 group-hover:text-white border-2 border-transparent group-hover:border-white/20 w-full sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                
                {/* Book a Demo Button - Links to Demo Form Page */}
                <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.96 }} className="group relative overflow-hidden rounded-xl">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 via-[#d67bff]/20 to-[#480056]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={redirectToDemoForm}
                    className="relative border-white/60 bg-white/10 text-white hover:bg-transparent px-6 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:border-white w-full sm:w-auto"
                  >
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4 lg:mt-6 mb-2"
                initial={{ width: 0 }}
                whileInView={{ width: '150px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ maxWidth: '150px' }}
              />
              <p className="text-white/70 text-sm">✨ Get enterprise-grade automation without enterprise pricing</p>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
