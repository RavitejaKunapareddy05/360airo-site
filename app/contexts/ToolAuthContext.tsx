'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ToolAuthContextType {
  verifiedEmail: string | null;
  isVerified: boolean;
  setVerifiedEmail: (email: string) => void;
  logout: () => void;
  apiKey: string | null;
  setApiKey: (key: string) => void;
  clearApiKey: () => void;
  isApiKeyConfigured: boolean;
  isHydrated: boolean;
}

const ToolAuthContext = createContext<ToolAuthContextType | undefined>(undefined);

export function ToolAuthProvider({ children }: { children: ReactNode }) {
  const [verifiedEmail, setVerifiedEmailState] = useState<string | null>(null);
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage and check backend on mount
  useEffect(() => {
    const checkVerification = async () => {
      if (typeof window !== 'undefined') {
        // Only load API key, don't auto-verify email
        // This ensures OTP modal always appears
        const storedApiKey = localStorage.getItem('toolApiKey');
        
        if (storedApiKey) {
          setApiKeyState(storedApiKey);
        }
      }
      setIsHydrated(true);
    };

    checkVerification();
  }, []);

  const handleSetVerifiedEmail = (email: string) => {
    setVerifiedEmailState(email);
    // Store in session storage and also save as "last used email" for persistence
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('toolVerifiedEmail', email);
      localStorage.setItem('lastUsedEmail', email); // Save for next session
    }
  };

  const handleSetApiKey = (key: string) => {
    setApiKeyState(key);
    // Store in local storage (persists across sessions)
    if (typeof window !== 'undefined') {
      localStorage.setItem('toolApiKey', key);
    }
  };

  const handleClearApiKey = () => {
    setApiKeyState(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('toolApiKey');
    }
  };

  const handleLogout = () => {
    setVerifiedEmailState(null);
    if (typeof window !== 'undefined') {
      // Clear session storage but keep lastUsedEmail in localStorage for auto-login
      sessionStorage.removeItem('toolVerifiedEmail');
      // NOTE: We intentionally do NOT remove lastUsedEmail so users can auto-verify on next visit
    }
  };

  const value: ToolAuthContextType = {
    verifiedEmail,
    isVerified: !!verifiedEmail,
    setVerifiedEmail: handleSetVerifiedEmail,
    logout: handleLogout,
    apiKey,
    setApiKey: handleSetApiKey,
    clearApiKey: handleClearApiKey,
    isApiKeyConfigured: !!apiKey,
    isHydrated,
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
