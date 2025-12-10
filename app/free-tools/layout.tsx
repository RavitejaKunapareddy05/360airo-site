'use client';

import { ToolAuthProvider } from '@/app/contexts/ToolAuthContext';
import { ToolUserSidebar } from '@/components/ToolUserSidebar';
import { OTPVerificationModal } from '@/components/OTPVerificationModal';
import { useToolAuth } from '@/app/contexts/ToolAuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function FreeToolsLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isVerified, isHydrated } = useToolAuth();
  const pathname = usePathname();

  // Check if current path is the main /free-tools page
  const isMainPage = pathname === '/free-tools' || pathname === '/free-tools/';

  // Don't render until hydration is complete
  if (!isHydrated) {
    return children;
  }

  return (
    <div>
      {/* Left Sidebar - On all individual tool pages (not main /free-tools) */}
      {!isMainPage && (
        <div className="fixed top-4 left-4 z-40 animate-in fade-in slide-in-from-left-2 duration-300">
          <div className="bg-gradient-to-br from-[#b45ecf]/20 to-[#d67bff]/15 backdrop-blur-lg rounded-xl shadow-xl border border-[#b45ecf]/40 p-4 hover:border-[#b45ecf]/60 transition-all duration-300 hover:shadow-2xl">
            <Link href="/free-tools" className="flex items-center gap-2 text-white hover:text-[#d67bff] transition-colors font-semibold">
              <span>←</span>
              <span>Back to Free Tools</span>
            </Link>
          </div>
        </div>
      )}

      {/* Always show content in background - clear when not verified, interactive when verified */}
      <div className={`${isVerified ? '' : 'pointer-events-none opacity-40'} transition-all duration-500`}>
        {children}
      </div>

      {/* Show login modal if not verified - overlays the content */}
      {!isVerified && <OTPVerificationModal isOpen={!isVerified} onClose={() => {}} />}

      {/* Show sidebar when verified */}
      {isVerified && <ToolUserSidebar />}
    </div>
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
