'use client';

import { LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ToolUserSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Load from sessionStorage
    const stored = sessionStorage.getItem('toolVerifiedEmail');
    if (stored) {
      setVerifiedEmail(stored);
    }
  }, []);

  // Subscribe to storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = sessionStorage.getItem('toolVerifiedEmail');
      setVerifiedEmail(stored);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!isMounted || !verifiedEmail) return null;

  const handleLogout = () => {
    sessionStorage.removeItem('toolVerifiedEmail');
    setVerifiedEmail(null);
    window.location.href = '/';
  };

  const emailDomain = verifiedEmail.split('@')[1] || 'user';
  const emailName = verifiedEmail.split('@')[0] || 'user';

  return (
    <div className="fixed top-20 right-4 z-40 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#d67bff]/15 backdrop-blur-lg rounded-xl shadow-xl border border-[#b45ecf]/40 p-3 min-w-[260px] group hover:border-[#b45ecf]/60 transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#b45ecf] to-[#8B5CF6] rounded-full flex items-center justify-center border border-white/20">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#d67bff] uppercase tracking-wider">Verified</p>
            <p className="text-xs font-bold text-white truncate" title={verifiedEmail}>
              {emailName}
            </p>
          </div>

          {/* Logout Button - Compact */}
          <button
            onClick={handleLogout}
            className="flex-shrink-0 p-1.5 rounded-lg bg-gradient-to-r from-red-500/30 to-rose-500/20 hover:from-red-500/50 hover:to-rose-500/40 border border-red-500/40 hover:border-red-500/60 text-red-400 hover:text-red-300 transition-all duration-200"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#b45ecf]/30 via-[#d67bff]/20 to-transparent mb-2" />

        {/* Status Badge */}
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/5 border border-green-400/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-xs text-white/80">Full access</p>
        </div>
      </div>
    </div>
  );
}
