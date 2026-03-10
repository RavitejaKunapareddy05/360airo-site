'use client';

import React, { useState, useEffect } from 'react';
import FreeToolsAuthModal from '@/components/FreeToolsAuthModal';
import { useFreeToolsAuth } from '@/app/contexts/FreeToolsAuthContext';

interface ProtectedFreeToolProps {
  toolName: string;
  children: React.ReactNode;
}

export default function ProtectedFreeTool({
  toolName,
  children,
}: ProtectedFreeToolProps) {
  const { userId, isVerified, isLoading, logout } = useFreeToolsAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // If user is not verified and not loading, show modal
    if (!isLoading && !isVerified) {
      setShowLoginModal(true);
    }
  }, [isLoading, isVerified]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#b45ecf] to-[#805ad5] flex items-center justify-center mx-auto mb-4">
            <div className="animate-spin text-white">⏳</div>
          </div>
          <p className="text-white/70">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          <FreeToolsAuthModal
            toolName={toolName}
            onLoginSuccess={() => setShowLoginModal(false)}
          />
        </div>
      </div>
    );
  }

  // User is verified, show tool
  return (
    <div>
      {/* Optional: Add logout button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={logout}
          className="px-4 py-2 text-white/70 hover:text-white text-sm transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Tool content */}
      {children}
    </div>
  );
}
