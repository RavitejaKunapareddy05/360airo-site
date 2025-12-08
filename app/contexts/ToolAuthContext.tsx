'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ToolAuthContextType {
  verifiedEmail: string | null;
  isVerified: boolean;
  setVerifiedEmail: (email: string) => void;
  logout: () => void;
}

const ToolAuthContext = createContext<ToolAuthContextType | undefined>(undefined);

export function ToolAuthProvider({ children }: { children: ReactNode }) {
  const [verifiedEmail, setVerifiedEmailState] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('toolVerifiedEmail');
      if (stored) {
        setVerifiedEmailState(stored);
      }
    }
    setIsHydrated(true);
  }, []);

  const handleSetVerifiedEmail = (email: string) => {
    setVerifiedEmailState(email);
    // Store in session storage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('toolVerifiedEmail', email);
    }
  };

  const handleLogout = () => {
    setVerifiedEmailState(null);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('toolVerifiedEmail');
    }
  };

  const value: ToolAuthContextType = {
    verifiedEmail,
    isVerified: !!verifiedEmail,
    setVerifiedEmail: handleSetVerifiedEmail,
    logout: handleLogout,
  };

  return (
    <ToolAuthContext.Provider value={value}>
      {children}
    </ToolAuthContext.Provider>
  );
}

export function useToolAuth() {
  const context = useContext(ToolAuthContext);
  if (context === undefined) {
    throw new Error('useToolAuth must be used within ToolAuthProvider');
  }
  return context;
}
