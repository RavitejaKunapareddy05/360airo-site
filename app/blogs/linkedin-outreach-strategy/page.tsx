'use client';

import { motion } from 'framer-motion';
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

export default function LinkedInOutreachStrategy2025() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        <Navbar />

        <div className="min-h-screen text-white pt-32">
          {/* Header Section */}
          <motion.header 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-gradient-to-b from-[#480056] to-[#19001d] py-16 px-4"
          >
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ffffff]">
                LinkedIn Outreach Strategy That Converts: Step-by-Step Playbook for 2025
              </h1>
              <p className="text-lg text-[#b45ecf]">
                Master the art of LinkedIn outreach that actually generates responses and conversions
              </p>
            </motion.div>
          </motion.header>

          {/* Main Content */}
          <motion.main 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto px-4 py-12"
          >
            <motion.article variants={itemVariants} className="prose prose-lg prose-invert max-w-none">
              {/* Introduction */}
              <motion.section variants={itemVariants} className="mb-12">
                <p className="text-xl leading-relaxed text-[#ffffff] mb-6">
                  LinkedIn isn't just a professional network anymore. It's the heart of B2B sales conversations. Whether you're a founder, SDR, or agency owner, mastering LinkedIn outreach can completely transform your lead generation in 2025.
                </p>
                <p className="text-xl leading-relaxed text-[#ffffff] mb-6">
                  But here's the challenge: most people get it wrong. They treat LinkedIn like an email inbox, sending mass messages that nobody reads. The real magic happens when you approach it strategically, focusing on personalization, timing, and consistency.
                </p>
                <p className="text-xl leading-relaxed text-[#ffffff]">
                  Here's a step-by-step playbook to help you create a LinkedIn outreach strategy that actually converts and how 360Airo can simplify the process for you.
                </p>
              </motion.section>

              {/* Step 1 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-white">Optimize Your Profile Before Reaching Out</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Your profile is your digital handshake. Before sending a single message, make sure your profile builds trust.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Use a clear, professional photo, a headline that communicates value, and an "About" section that explains who you help and how.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  Most decision-makers check your profile before responding. A strong profile increases your acceptance and reply rates by over 40%.
                </p>
              </motion.section>

              {/* Step 2 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-white">Define Your Ideal Prospect</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Sending messages without clarity wastes time.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Create a clear picture of your ideal customer based on industry, company size, title, and pain points. LinkedIn's advanced search filters and Sales Navigator make this easier than ever.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  360Airo allows you to import and manage these leads directly into your outreach sequences, so you can target the right people from day one.
                </p>
              </motion.section>

              {/* Step 3 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-white">Start with Warm Engagement</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Before you send a connection request, engage with your prospect's content.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Like, comment, or share their posts genuinely. This builds familiarity and makes your future message feel natural, not random.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  360Airo can track engagement and suggest prospects who have interacted with your brand recently, helping you reach out at the perfect time.
                </p>
              </motion.section>

              {/* Step 4 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-white">Send Personalized Connection Requests</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Avoid generic messages like "Let's connect." Instead, reference something specific — their role, a post they wrote, or a shared interest. Keep it short and human.
                </p>
                <div className="bg-[#19001d] p-6 rounded-lg border border-[#480056] my-6">
                  <p className="text-lg leading-relaxed text-[#ffffff] italic">
                    "Hi Sarah, I came across your post on scaling outbound teams and really liked your insights on personalization. Would love to connect and share thoughts."
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  Small efforts like this can double your connection acceptance rate.
                </p>
              </motion.section>

              {/* Step 5 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    5
                  </div>
                  <h2 className="text-3xl font-bold text-white">Follow Up the Right Way</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Once connected, don't pitch immediately.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Start with value. Share a useful article, offer a resource, or start a conversation about a topic they care about.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  360Airo allows you to automate these touchpoints while keeping messages personalized. You can create sequences that combine LinkedIn messages, InMails, and follow-up reminders — all without sounding robotic.
                </p>
              </motion.section>

              {/* Step 6 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    6
                  </div>
                  <h2 className="text-3xl font-bold text-white">Combine LinkedIn with Email</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  The most successful teams don't stop at LinkedIn. They combine it with cold email for a complete multichannel approach.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  For example, after connecting on LinkedIn, send a short, value-driven email that references your earlier conversation.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  With 360Airo, you can manage this entire flow from one dashboard — one campaign, multiple channels, consistent tracking.
                </p>
              </motion.section>

              {/* Step 7 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    7
                  </div>
                  <h2 className="text-3xl font-bold text-white">Track and Optimize</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Data tells you what's working.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Monitor metrics like connection acceptance, message replies, and meeting conversions.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  360Airo's analytics dashboard helps identify which outreach templates and touchpoints bring the best results, so you can improve continuously.
                </p>
              </motion.section>

              {/* Step 8 */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-r from-[#b45ecf] to-[#480056] w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                    8
                  </div>
                  <h2 className="text-3xl font-bold text-white">Stay Consistent</h2>
                </div>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  Consistency beats intensity in outreach.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff] mb-4">
                  It's better to reach out to 20 quality prospects a day with a thoughtful message than to spam 200 people once.
                </p>
                <p className="text-lg leading-relaxed text-[#ffffff]">
                  360Airo's task manager and automation tools make it easy to stay consistent by managing daily outreach goals without burnout.
                </p>
              </motion.section>

              {/* Final Section */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/20 to-[#480056]/20 rounded-3xl blur-xl opacity-50"></div>
                  
                  {/* Main Content */}
                  <div className="relative bg-gradient-to-br from-[#480056]/30 via-[#19001d]/50 to-[#480056]/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#b45ecf]/30">
                    {/* Header with Icon */}
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#b45ecf] to-[#480056] rounded-xl flex items-center justify-center mr-4">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        Building Trust, Not Just Leads
                      </h2>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-white">
                        At its core, LinkedIn outreach is about building trust.
                      </p>
                      <p className="text-lg leading-relaxed text-white font-semibold">
                        When your messages sound genuine and your timing feels natural, prospects don't see you as another salesperson, they see you as someone who can solve their problem.
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#b45ecf]/20">
                      <div className="flex items-center space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-[#b45ecf] rounded-full"
                        />
                        <span className="text-[#b45ecf] text-sm font-semibold">Key Insight</span>
                      </div>
                      <div className="text-[#b45ecf] text-sm">
                        🚀 Ready to transform your LinkedIn outreach?
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.article>
          </motion.main>
        </div>

        <Footer />
      </div>
    </>
  );
}