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
}

const ToolAuthContext = createContext<ToolAuthContextType | undefined>(undefined);

export function ToolAuthProvider({ children }: { children: ReactNode }) {
  const [verifiedEmail, setVerifiedEmailState] = useState<string | null>(null);
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEmail = sessionStorage.getItem('toolVerifiedEmail');
      const storedApiKey = localStorage.getItem('toolApiKey');
      if (storedEmail) {
        setVerifiedEmailState(storedEmail);
      }
      if (storedApiKey) {
        setApiKeyState(storedApiKey);
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
      sessionStorage.removeItem('toolVerifiedEmail');
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
