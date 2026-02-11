'use client';

import ProtectedFreeTool from '@/components/ProtectedFreeTool';

export default function TestToolPage() {
  return (
    <ProtectedFreeTool toolName="Test Tool">
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Test Free Tool</h1>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <p className="text-white/80 mb-4">
              ✅ You're now logged in and verified! This tool is protected.
            </p>
            <p className="text-white/60">
              Your email and usage are being tracked in the Supabase database.
            </p>
          </div>
        </div>
      </div>
    </ProtectedFreeTool>
  );
}
