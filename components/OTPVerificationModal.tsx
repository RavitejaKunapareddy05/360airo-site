'use client';

import { useState } from 'react';
import { Mail, Loader, CheckCircle, ArrowRight } from 'lucide-react';
import { useToolAuth } from '@/app/contexts/ToolAuthContext';

interface OTPModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function OTPVerificationModal({ isOpen, onClose }: OTPModalProps) {
  const [otpStep, setOtpStep] = useState<'email' | 'otp'>('email');
  const [userEmail, setUserEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setVerifiedEmail } = useToolAuth();

  const handleSendOtp = async () => {
    if (!userEmail.includes('@')) {
      setOtpError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    setOtpError('');

    try {
      // Normalize email for all operations
      const normalizedEmail = userEmail.toLowerCase().trim();

      // First, check if email is already verified
      const checkResponse = await fetch('/api/free-tools/auth/check-verified', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const checkData = await checkResponse.json();

      if (checkData.verified) {
        // Email is already verified - grant access directly
        console.log(`✅ Email already verified: ${normalizedEmail}`);
        setVerifiedEmail(normalizedEmail);
        setUserEmail('');
        setOtp('');
        setOtpStep('email');
        onClose?.();
        return;
      }

      // Email not verified - proceed with OTP
      console.log(`📧 Sending OTP to: ${normalizedEmail}`);
      const response = await fetch('/api/free-tools/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setOtpStep('otp');
      } else {
        setOtpError(data.error || 'Failed to send OTP');
      }
    } catch (error) {
      setOtpError('Error sending OTP: ' + String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 5) {
      setOtpError('Please enter a valid 5-digit OTP');
      return;
    }

    setIsLoading(true);
    setOtpError('');

    try {
      const normalizedEmail = userEmail.toLowerCase().trim();
      
      const response = await fetch('/api/free-tools/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successfully verified - update context and close modal
        console.log(`✅ OTP Verified successfully for ${normalizedEmail}`);
        setVerifiedEmail(normalizedEmail);
        // Clear form state
        setUserEmail('');
        setOtp('');
        setOtpStep('email');
        setOtpError('');
        // Close modal via callback
        onClose?.();
      } else {
        console.log(`❌ OTP Verification failed:`, data);
        setOtpError(data.error || 'Invalid OTP');
      }
    } catch (error) {
      setOtpError('Error verifying OTP: ' + String(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      if (otpStep === 'email') {
        handleSendOtp();
      } else if (otp.length === 5) {
        handleVerifyOtp();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Transparent backdrop - no color */}
      <div className="absolute inset-0" />

      {/* Modal Container */}
      <div className="relative w-full max-w-xs">
        {/* Gradient glow background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b45ecf]/40 to-[#d67bff]/30 rounded-xl blur-xl opacity-60" />

        {/* Modal Card */}
        <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-xl shadow-2xl p-6 border border-white/20">
          {/* Header Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#b45ecf]/20 to-[#d67bff]/20 rounded-full flex items-center justify-center border border-[#b45ecf]/40">
              <Mail className="w-6 h-6 text-[#b45ecf]" />
            </div>
          </div>

          <h1 className="text-xl font-bold text-center mb-1 bg-gradient-to-r from-[#b45ecf] to-[#d67bff] bg-clip-text text-transparent">Email Verification</h1>
          <p className="text-gray-600 text-center mb-5 text-xs">Verify your email to access free tools</p>

          {otpStep === 'email' ? (
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setOtpError('');
                }}
                onKeyPress={handleKeyPress}
                className="w-full px-3 py-2 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b45ecf]/50 focus:border-transparent text-gray-900 bg-white/80 backdrop-blur-sm placeholder-gray-500 transition-all duration-200 text-xs"
                disabled={isLoading}
                autoFocus
              />

              {otpError && <p className="text-red-500 text-xs text-center font-medium">{otpError}</p>}

              <button
                onClick={handleSendOtp}
                disabled={isLoading || !userEmail}
                className="w-full bg-gradient-to-r from-[#b45ecf] to-[#d67bff] hover:shadow-lg hover:shadow-[#b45ecf]/30 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-xs"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send OTP Code</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-gray-600 text-center">Enter the 5-digit code sent to <span className="font-semibold text-gray-900">{userEmail}</span></p>
              <input
                type="text"
                placeholder="00000"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 5));
                  setOtpError('');
                }}
                onKeyPress={handleKeyPress}
                maxLength={5}
                className="w-full px-3 py-2.5 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b45ecf]/50 focus:border-transparent text-center text-2xl tracking-widest font-bold text-gray-900 bg-white/80 backdrop-blur-sm placeholder-gray-400 transition-all duration-200"
                disabled={isLoading}
                autoFocus
              />

              {otpError && <p className="text-red-500 text-xs text-center font-medium">{otpError}</p>}

              <button
                onClick={handleVerifyOtp}
                disabled={isLoading || otp.length !== 5}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 text-xs"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-3.5 h-3.5 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verify OTP</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setOtpStep('email');
                  setOtp('');
                  setOtpError('');
                }}
                className="w-full text-[#b45ecf] hover:text-[#d67bff] text-xs font-medium transition-colors duration-200 py-1.5"
              >
                ← Change Email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
