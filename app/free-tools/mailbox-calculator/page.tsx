'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calculator as CalcIcon, Download } from 'lucide-react';
import Link from 'next/link';

export default function MailboxCalculatorPage() {
  const [emailsPerDay, setEmailsPerDay] = useState(50);
  const [warmupDays, setWarmupDays] = useState(14);
  const [results, setResults] = useState<any>(null);

  const calculateLimits = () => {
    const dailyIncrement = emailsPerDay / warmupDays;
    const totalEmails = emailsPerDay * 30; // Monthly estimate
    const warmupDuration = warmupDays;
    
    setResults({
      dailyIncrement: Math.round(dailyIncrement * 100) / 100,
      day1: Math.round(dailyIncrement),
      day7: Math.round(dailyIncrement * 7),
      day14: emailsPerDay,
      monthlyCapacity: totalEmails,
      warmupDuration
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0519] via-[#1a0b2e] to-[#2d1b3d] pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center">
              <CalcIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent mb-4">
            Mailbox Calculator
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Calculate optimal mailbox warming schedules and sending limits for maximum deliverability.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl mb-8">
          <div className="space-y-8">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-3">Target Emails/Day</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="10" max="500" step="10" value={emailsPerDay} onChange={(e) => setEmailsPerDay(Number(e.target.value))} className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                  <input type="number" value={emailsPerDay} onChange={(e) => setEmailsPerDay(Number(e.target.value))} className="w-20 bg-white/5 border border-white/20 rounded-lg p-2 text-white" />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Warmup Duration (days)</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="7" max="30" step="1" value={warmupDays} onChange={(e) => setWarmupDays(Number(e.target.value))} className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer" />
                  <input type="number" value={warmupDays} onChange={(e) => setWarmupDays(Number(e.target.value))} className="w-20 bg-white/5 border border-white/20 rounded-lg p-2 text-white" />
                </div>
              </div>
            </div>

            <Button onClick={calculateLimits} className="w-full bg-gradient-to-r from-green-500 to-emerald-400 hover:shadow-lg text-white font-semibold">
              Calculate Schedule
            </Button>
          </div>
        </motion.div>

        {results && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 mb-2">Daily Increment</p>
                <p className="text-3xl font-bold text-green-400">{results.dailyIncrement}</p>
                <p className="text-white/50 text-sm mt-2">emails/day increase</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 mb-2">Day 1 Target</p>
                <p className="text-3xl font-bold text-blue-400">{results.day1}</p>
                <p className="text-white/50 text-sm mt-2">emails on day 1</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 mb-2">Day 7 Target</p>
                <p className="text-3xl font-bold text-purple-400">{results.day7}</p>
                <p className="text-white/50 text-sm mt-2">emails by day 7</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 mb-2">Monthly Capacity</p>
                <p className="text-3xl font-bold text-cyan-400">{results.monthlyCapacity.toLocaleString()}</p>
                <p className="text-white/50 text-sm mt-2">estimated monthly emails</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Warming Schedule</h3>
              <div className="space-y-3">
                {[...Array(Math.min(warmupDays, 14))].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white font-semibold">Day {i + 1}</span>
                    <div className="flex-1 mx-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className={`h-full bg-gradient-to-r from-green-500 to-emerald-400`} initial={{ width: 0 }} animate={{ width: `${((i + 1) / warmupDays) * 100}%` }} transition={{ duration: 0.5 }} />
                    </div>
                    <span className="text-green-400 font-semibold">{Math.round(results.dailyIncrement * (i + 1))}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 text-center text-white/50 text-sm">
          <p>Part of 360airo Free Tools</p>
          <Link href="/free-tools" className="text-green-400 hover:text-green-300 transition-colors">
            ← Back to Free Tools
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
