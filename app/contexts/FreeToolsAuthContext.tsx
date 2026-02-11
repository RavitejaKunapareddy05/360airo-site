'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface FreeToolsAuthContextType {
  userId: string | null;
  email: string | null;
  isVerified: boolean;
  isLoading: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  setUserId: (id: string) => void;
  setEmail: (email: string) => void;
  setIsVerified: (verified: boolean) => void;
}

const FreeToolsAuthContext = createContext<FreeToolsAuthContextType | undefined>(
  undefined
);

export function FreeToolsAuthProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check localStorage on mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('freeToolsUserId');
    const storedEmail = localStorage.getItem('freeToolsEmail');
    const storedVerified = localStorage.getItem('freeToolsVerified');

    if (storedUserId && storedVerified === 'true') {
      setUserId(storedUserId);
      setEmail(storedEmail);
      setIsVerified(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (userEmail: string) => {
    // Just send OTP, actual login happens after verification
    try {
      const response = await fetch('/api/free-tools/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      // Store userId temporarily
      localStorage.setItem('freeToolsTempUserId', data.userId);
      localStorage.setItem('freeToolsEmail', userEmail);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUserId(null);
    setEmail(null);
    setIsVerified(false);
    localStorage.removeItem('freeToolsUserId');
    localStorage.removeItem('freeToolsEmail');
    localStorage.removeItem('freeToolsVerified');
    localStorage.removeItem('freeToolsTempUserId');
  };

  const handleSetUserId = (id: string) => {
    setUserId(id);
    localStorage.setItem('freeToolsUserId', id);
  };

  const handleSetEmail = (userEmail: string) => {
    setEmail(userEmail);
    localStorage.setItem('freeToolsEmail', userEmail);
  };

  const handleSetIsVerified = (verified: boolean) => {
    setIsVerified(verified);
    localStorage.setItem('freeToolsVerified', verified.toString());
  };

  return (
    <FreeToolsAuthContext.Provider
      value={{
        userId,
        email,
        isVerified,
        isLoading,
        login,
        logout,
        setUserId: handleSetUserId,
        setEmail: handleSetEmail,
        setIsVerified: handleSetIsVerified,
      }}
    >
      {children}
    </FreeToolsAuthContext.Provider>
  );
}

export function useFreeToolsAuth() {
  const context = useContext(FreeToolsAuthContext);
  if (!context) {
    throw new Error('useFreeToolsAuth must be used within FreeToolsAuthProvider');
  }
  return context;
}
