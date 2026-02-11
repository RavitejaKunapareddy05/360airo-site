'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFreeToolsAuth } from '@/app/contexts/FreeToolsAuthContext';
import { ArrowLeft, Mail, Sparkles, Zap, Shield, Calculator } from 'lucide-react';

type LoginStep = 'email' | 'otp' | 'verified';

interface FreeToolsAuthModalProps {
  toolName: string;
  onLoginSuccess?: () => void;
  onClose?: () => void;
}

// Tool icons mapping
const getToolIcon = (toolName: string) => {
  switch (toolName.toLowerCase()) {
    case 'email verifier':
      return <Mail className="w-6 h-6" />;
    case 'spf generator':
    case 'dmarc generator':
      return <Shield className="w-6 h-6" />;
    case 'email sequencer':
    case 'email pitch generator':
      return <Zap className="w-6 h-6" />;
    case 'mailbox calculator':
      return <Calculator className="w-6 h-6" />;
    default:
      return <Sparkles className="w-6 h-6" />;
  }
};

export default function FreeToolsAuthModal({
  toolName,
  onLoginSuccess,
  onClose,
}: FreeToolsAuthModalProps) {
  const { setUserId, setEmail, setIsVerified, logout } = useFreeToolsAuth();
  const [email, setEmailState] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<LoginStep>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(600);
  const otpInputs = useRef<HTMLInputElement[]>([]);

  // Timer for OTP expiration
  useEffect(() => {
    if (step !== 'otp' || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeRemaining]);

  // Auto-focus first OTP input
  useEffect(() => {
    if (step === 'otp' && otpInputs.current[0]) {
      setTimeout(() => otpInputs.current[0]?.focus(), 100);
    }
  }, [step]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/free-tools/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.alreadyVerified) {
          // User is already verified, log them in directly
          setUserId(data.userId);
          setEmail(email);
          setIsVerified(true);
          setStep('verified');
          if (onLoginSuccess) onLoginSuccess();
        } else {
          // New user, proceed directly to OTP step
          setEmail(email);
          setUserId(data.userId);
          setStep('otp');
          setTimeRemaining(600);
          setSuccess('Verification code sent to your email!');
        }
      } else {
        setError(data.error || 'Failed to send verification code');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error sending OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
    if (!value && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/free-tools/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp_code: otpString,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsVerified(true);
        setStep('verified');
        if (onLoginSuccess) onLoginSuccess();
      } else {
        setError(data.error || 'Invalid verification code');
        setOtp(['', '', '', '', '', '']);
        if (otpInputs.current[0]) {
          otpInputs.current[0].focus();
        }
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error verifying OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError('');
    setOtp(['', '', '', '', '', '']);

    try {
      const response = await fetch('/api/free-tools/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setTimeRemaining(600);
        setStep('otp');
        setSuccess('New verification code sent to your email!');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to resend verification code');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Error resending OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setStep('email');
    setOtp(['', '', '', '', '', '']);
    setError('');
    setSuccess('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl border border-white/30 rounded-3xl p-8 max-w-lg w-full mx-auto shadow-2xl"
      >
        {/* Tool Preview Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <div className="text-white">
              {getToolIcon(toolName)}
            </div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
            Access {toolName}
          </h2>
          <p className="text-gray-600 mt-2">
            Get instant access to our premium {toolName.toLowerCase()} tool
          </p>
        </div>

        {/* Email Step */}
        {step === 'email' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmailState(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  aria-label="Email address"
                  className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Continue with Email'
                )}
              </button>
            </form>
          </motion.div>
        )}

        {/* OTP Step */}
        {step === 'otp' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="mb-6">
              <button
                onClick={handleBackToEmail}
                className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors mr-2">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Change email
              </button>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Check your email
              </h3>
              <p className="text-gray-600 mb-6">
                We sent a 6-digit code to <span className="font-medium text-blue-600">{email}</span>
              </p>
            </div>

            <form onSubmit={handleOtpSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Verification Code
                </label>
                <div className="flex justify-between gap-2 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        if (el) otpInputs.current[index] = el;
                      }}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-semibold bg-white/70 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-sm"
                      aria-label={`Digit ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Code expires in {formatTime(timeRemaining)}</span>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={loading || timeRemaining > 540}
                    className="text-blue-600 hover:text-blue-800 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    Resend code
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || otp.join('').length !== 6}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  'Verify & Access Tool'
                )}
              </button>
            </form>
          </motion.div>
        )}

        {/* Verified Step */}
        {step === 'verified' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-6 shadow-lg">
              <div className="text-white text-2xl">✓</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome to {toolName}!
            </h3>
            <p className="text-gray-600 mb-4">
              Your email <span className="font-medium text-emerald-600">{email}</span> has been verified successfully.
            </p>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 mb-6">
              <p className="text-emerald-800 text-sm">
                🎉 You now have full access to our premium tool!
              </p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
          >
            <p className="text-red-700 text-sm">{error}</p>
          </motion.div>
        )}

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
          >
            <p className="text-emerald-700 text-sm">{success}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
