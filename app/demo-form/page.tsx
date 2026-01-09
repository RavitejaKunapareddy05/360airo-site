'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle2, 
  Mail, 
  Zap, 
  Calendar, 
  ArrowRight,
  Shield,
  TrendingUp,
  BarChart3,
  Flame,
  Building,
  Globe,
  Phone,
  User,
  Briefcase,
  Clock,
  CheckCircle,
  Rocket,
  Video,
  FileText,
  Download,
  BarChart,
  Filter,
  MessageSquare,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
// import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function DemoFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    headquarters: '',
    employeeCount: '',
    jobTitle: '',
    specificNeeds: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      await emailjs.send(
        'service_dxyn8u2',
        'template_pzd5l3c',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          website: formData.website,
          headquarters: formData.headquarters,
          employeeCount: formData.employeeCount,
          jobTitle: formData.jobTitle,
          specificNeeds: formData.specificNeeds,
          submitted_at: new Date().toLocaleString(),
        },
        'Oj-CWMpC50tIV6CUF'
      );

      setStatus('✅ Successfully Submitted! 🎉');
      
      // Show success and redirect to thank you page after 1 second
      setTimeout(() => {
        setFormSubmitted(true);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          companyName: '', website: '', headquarters: '',
          employeeCount: '', jobTitle: '', specificNeeds: ''
        });
      }, 1000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('❌ Submission failed. Please try again or contact us at zarachandler283@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  const employeeOptions = [
    { value: '1-10', label: '1-10 Employees' },
    { value: '11-50', label: '11-50 Employees' },
    { value: '51-100', label: '51-100 Employees' },
    { value: '101-250', label: '101-250 Employees' },
    { value: '251-500', label: '251-500 Employees' },
    { value: '501-1000', label: '501-1,000 Employees' },
    { value: '1001-5000', label: '1,001-5,000 Employees' },
    { value: '5001-10000', label: '5,001-10,000 Employees' },
    { value: '10001-20000', label: '10,001-20,000 Employees' },
    { value: '20001+', label: '20,001+ Employees' }
  ];

  // Success Page - Clean Design
  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
        {/* <Navbar /> */}
        
        {/* Success Page Content */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Success Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6432] to-[#FF8A65] mb-6 shadow-lg shadow-[#FF6432]/30">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                <span className="block">Demo Request</span>
                <span className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent">
                  Confirmed! 🎉
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Thank you for your interest in 360airo! Our team will contact you within 24 hours to schedule your personalized demo.
              </p>
              
              <div className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full max-w-md mx-auto mb-8" />
            </motion.div>

            {/* Next Steps & Free Tools Access */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left: Next Steps */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl h-full">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                      <Clock className="mr-3 h-6 w-6 text-[#FF8A65]" />
                      What Happens Next
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Your personalized demo journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center">
                          <Users className="h-5 w-5 mr-3 text-[#FF8A65]" />
                          Immediate Actions
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <span className="text-white font-medium block">Confirmation Email Sent</span>
                              <span className="text-white/70 text-sm">Check your inbox for booking details</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <span className="text-white font-medium block">Sales Team Review</span>
                              <span className="text-white/70 text-sm">Our experts are preparing your demo</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#FF8A65] mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <span className="text-white font-medium block">Schedule Coordination</span>
                              <span className="text-white/70 text-sm">We'll contact you to pick the perfect time</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-4">Prepare for Your Demo</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded p-1 mr-3 mt-0.5">
                              <Filter className="h-4 w-4 text-[#FF8A65]" />
                            </div>
                            <span className="text-white/80">Have your current outreach metrics ready</span>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded p-1 mr-3 mt-0.5">
                              <BarChart className="h-4 w-4 text-[#FF8A65]" />
                            </div>
                            <span className="text-white/80">Think about specific use cases</span>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-white/10 rounded p-1 mr-3 mt-0.5">
                              <MessageSquare className="h-4 w-4 text-[#FF8A65]" />
                            </div>
                            <span className="text-white/80">Prepare questions about AI automation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right: Free Tools & Access */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-[#FF6432]/10 to-[#FF8A65]/10 border border-[#FF6432]/20 rounded-2xl shadow-xl h-full">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                      <Zap className="mr-3 h-6 w-6 text-white" />
                      Free Tools Access
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Get started with our free suite of tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-white/90">
                        As a demo requester, you now have access to our free tools suite to experience our technology firsthand.
                      </p>
                      
                      {/* Free Tools Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <Link href="/free-tools/email-verifier" className="group">
                          <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all group-hover:scale-[1.02] cursor-pointer">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 mb-3 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                              <Mail className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="text-white font-semibold mb-1">Email Verifier</h4>
                            <p className="text-white/70 text-sm mb-2">Verify email addresses in bulk</p>
                            <div className="flex items-center text-blue-400 text-3xs">
                              <span>Try now</span>
                              <ArrowUpRight className="h-3 w-3 ml-1" />
                            </div>
                          </div>
                        </Link>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 mb-3">
                            <Filter className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-white font-semibold mb-1">Email campaign</h4>
                          <p className="text-white/70 text-sm mb-2">marketing campaigns are not about sending more emails—they're about sending relevant ones.</p>
                          <span className="text-white/50 text-xs">Coming soon</span>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 mb-3">
                            <BarChart3 className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-white font-semibold mb-1">Email Sequencer</h4>
                          <p className="text-white/70 text-sm mb-2"> email sequence software helps you deliver the right message at the right moment</p>
                          <span className="text-white/50 text-xs">Available in demo</span>
                        </div>
                        
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 mb-3">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-white font-semibold mb-1">ai email genenartion</h4>
                          <p className="text-white/70 text-sm mb-2">Smart email crafting, AI Personalization</p>
                          <span className="text-white/50 text-xs">Available in demo</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-white/20">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#FF8A65] mr-3" />
                          <div>
                            <p className="text-white font-medium">Email Verifier Access Granted</p>
                            <p className="text-white/70 text-sm">Start using it immediately</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  <Rocket className="h-16 w-16 text-[#FF8A65] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl">
                    While you wait for your demo, explore our free tools or check out our resources to learn more about AI-powered email outreach.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/free-tools/email-verifier">
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-blue-500/25 text-white px-8">
                        <Zap className="mr-2 h-4 w-4" />
                        Try Email Verifier
                      </Button>
                    </Link>
                    <Link href="/resources">
                      <Button className="bg-white/10 hover:bg-white/20 text-white px-8">
                        <FileText className="mr-2 h-4 w-4" />
                        Explore Resources
                      </Button>
                    </Link>
                    <Button 
                      className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-8"
                      onClick={() => setFormSubmitted(false)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Another Request
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">Your Demo Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] transform -translate-y-1/2" />
                
                <div className="relative flex justify-between items-center">
                  {[
                    { step: 1, title: 'Request Sent', time: 'Now', icon: CheckCircle, color: 'from-[#FF6432] to-[#FF8A65]' },
                    { step: 2, title: 'Team Review', time: 'Within 1 hour', icon: Users, color: 'from-blue-500 to-cyan-400' },
                    { step: 3, title: 'Schedule Call', time: 'Within 24 hours', icon: Calendar, color: 'from-purple-500 to-pink-400' },
                    { step: 4, title: 'Live Demo', time: 'Scheduled', icon: Video, color: 'from-green-500 to-emerald-400' },
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-center relative z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-white font-semibold">{item.title}</span>
                      <span className="text-white/70 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Original Form Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014]">
      {/* <Navbar /> */}
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#FF6432]/50 text-white font-semibold text-sm">
                <Flame className="h-4 w-4 text-[#FF8A65] mr-3" />
                Schedule Your Personalized Demo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              <span className="block">Get Your</span>
              <span className="block bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-white bg-clip-text text-transparent">
                Free AI Email Demo
              </span>
            </h1>

            <div className="h-1 bg-gradient-to-r from-[#FF6432] via-[#FF8A65] to-[#FFB74D] rounded-full max-w-md mx-auto mb-6" />

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              15-minute personalized walkthrough + free trial setup. See how 360airo can scale your outreach 10x faster.
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
              <CardHeader className="pb-6 border-b bg-gradient-to-r from-[#FF6432]/10 to-[#FF8A65]/10">
                <CardTitle className="text-3xl font-bold text-gray-900 text-center">
                  Request Your Personalized Demo
                </CardTitle>
                <CardDescription className="text-gray-600 text-center text-lg">
                  Tell us about your company and we'll tailor the demo to your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <User className="w-5 h-5 mr-2 text-[#FF8A65]" />
                      Personal Information
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center">
                          <Mail className="w-4 h-4 mr-2" />Work Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold flex items-center">
                          <Phone className="w-4 h-4 mr-2" />Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="jobTitle" className="text-gray-700 font-semibold flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />Job Title *
                      </Label>
                      <Input
                        id="jobTitle"
                        type="text"
                        placeholder="e.g., Head of Sales, Growth Manager, Founder"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        required
                        className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                      />
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-[#FF8A65]" />
                      Company Information
                    </h3>
                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="text-gray-700 font-semibold">Company Name *</Label>
                      <Input
                        id="companyName"
                        type="text"
                        placeholder="Your Company Inc."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                        className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                      />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label htmlFor="website" className="text-gray-700 font-semibold flex items-center">
                          <Globe className="w-4 h-4 mr-2" />Website URL *
                        </Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://www.company.com"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="headquarters" className="text-gray-700 font-semibold">Headquarters *</Label>
                        <Input
                          id="headquarters"
                          type="text"
                          placeholder="City, Country"
                          value={formData.headquarters}
                          onChange={(e) => setFormData({ ...formData, headquarters: e.target.value })}
                          required
                          className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg focus:border-[#FF6432] focus:ring-[#FF6432]"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="employeeCount" className="text-gray-700 font-semibold">Number of Employees *</Label>
                      <Select 
                        value={formData.employeeCount} 
                        onValueChange={(value) => setFormData({ ...formData, employeeCount: value })}
                        required
                      >
                        <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-12 rounded-lg">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-gray-900">
                          {employeeOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Needs */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-[#FF8A65]" />Additional Details
                    </h3>
                    <div className="space-y-3">
                      <Label htmlFor="specificNeeds" className="text-gray-700 font-semibold flex items-center">
                        <Filter className="w-4 h-4 mr-2" />Specific Goals & Needs *
                      </Label>
                      <textarea
                        id="specificNeeds"
                        placeholder="Tell us about your outreach goals, current challenges, and what you hope to achieve with 360airo..."
                        value={formData.specificNeeds}
                        onChange={(e) => setFormData({ ...formData, specificNeeds: e.target.value })}
                        required
                        rows={4}
                        className="w-full bg-white border border-gray-300 rounded-lg p-4 text-gray-900 focus:border-[#FF6432] focus:ring-[#FF6432] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-6">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold rounded-lg bg-gradient-to-r from-[#FF6432] to-[#FF8A65] hover:opacity-90 transition-all hover:scale-[1.02] text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Zap className="animate-spin mr-3" /> Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-3" /> Schedule My Demo <ArrowRight className="ml-3" />
                        </>
                      )}
                    </Button>

                    {status && (
                      <div className={`p-4 rounded-lg text-center font-medium ${status.includes('✅') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {status}
                      </div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Features Preview */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">What You'll See in Your Demo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BarChart3, title: "Live Campaign Setup", desc: "See how to launch campaigns in minutes" },
                { icon: Shield, title: "AI Personalization", desc: "Watch AI craft hyper-personalized emails" },
                { icon: TrendingUp, title: "ROI Analysis", desc: "Get customized ROI projections" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <feature.icon className="h-10 w-10 text-[#FF8A65] mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
