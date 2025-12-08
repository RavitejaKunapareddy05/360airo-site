'use client';

import { ToolAuthProvider } from '@/app/contexts/ToolAuthContext';
import { ToolUserSidebar } from '@/components/ToolUserSidebar';
import { OTPVerificationModal } from '@/components/OTPVerificationModal';
import { useToolAuth } from '@/app/contexts/ToolAuthContext';
import { useState, useEffect } from 'react';

function FreeToolsLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isVerified } = useToolAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isVerified) {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  }, [isVerified, isMounted]);

  if (!isMounted) return children;

  return (
    <>
      {/* Always show content in background - clear when not verified, interactive when verified */}
      <div className={`${isVerified ? '' : 'pointer-events-none opacity-40'} transition-all duration-500`}>
        {children}
      </div>

      {/* Show login modal if not verified - overlays the content */}
      {!isVerified && <OTPVerificationModal isOpen={!isVerified} onClose={() => {}} />}

      {/* Show sidebar when verified */}
      {isVerified && <ToolUserSidebar />}
    </>
  );
}

export default function FreeToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToolAuthProvider>
      <FreeToolsLayoutContent>{children}</FreeToolsLayoutContent>
    </ToolAuthProvider>
  );
}
