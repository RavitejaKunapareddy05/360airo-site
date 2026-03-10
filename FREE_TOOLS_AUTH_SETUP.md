# Free Tools Authentication Setup Guide

## Overview
This guide shows how to integrate Supabase OTP authentication for free tools. Users must verify their email via OTP before accessing any free tool.

---

## Files Created

### 1. API Routes
- **`/api/free-tools/send-otp`** - Send OTP via email
- **`/api/free-tools/verify-otp`** - Verify OTP and create user
- **`/api/free-tools/log-access`** - Track tool usage in `user_free_tool_access`

### 2. Authentication Files
- **`/contexts/FreeToolsAuthContext.tsx`** - Global auth state management
- **`/components/FreeToolsAuthModal.tsx`** - Login/OTP verification UI
- **`/components/ProtectedFreeTool.tsx`** - Wrapper to protect tools

---

## Step 1: Update Layout.tsx

Wrap your app with `FreeToolsAuthProvider`:

```tsx
import { FreeToolsAuthProvider } from '@/app/contexts/FreeToolsAuthContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <FreeToolsAuthProvider>
          {children}
        </FreeToolsAuthProvider>
      </body>
    </html>
  );
}
```

---

## Step 2: Protect Your Free Tool Pages

For any free tool page (e.g., `/free-tools/email-verifier/page.tsx`):

```tsx
'use client';

import ProtectedFreeTool from '@/components/ProtectedFreeTool';

export default function EmailVerifierPage() {
  return (
    <ProtectedFreeTool toolName="Email Verifier">
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] p-8">
        {/* Your tool content here */}
        <h1 className="text-white text-4xl">Email Verifier</h1>
        {/* Email verification form, etc. */}
      </div>
    </ProtectedFreeTool>
  );
}
```

---

## Step 3: Set Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://llretzesjnploxtcdotm.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_Vk0ssGCDGiztHBlLRuLWCA_PKkaQ2zc
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

---

## Step 4: Database Tables

You already have these on Supabase:

### free_tool_users
```sql
id, email, email_verified, verified_at, created_at, updated_at, last_login
```

### user_free_tool_access
```sql
id, user_id, tool_name, first_accessed_at, last_accessed_at, usage_count
```

### free_tool_otp_codes (Create this)
```sql
CREATE TABLE free_tool_otp_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES free_tool_users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  otp_code VARCHAR(6) NOT NULL,
  is_used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  used_at TIMESTAMP
);

CREATE INDEX idx_otp_user_id ON free_tool_otp_codes(user_id);
CREATE INDEX idx_otp_email ON free_tool_otp_codes(email);
CREATE INDEX idx_otp_expires ON free_tool_otp_codes(expires_at);
```

---

## Authentication Flow

```
1. User visits /free-tools/email-verifier
   ↓
2. ProtectedFreeTool checks if user is verified
   ├─ YES → Show tool content
   └─ NO → Show FreeToolsAuthModal
   ↓
3. User enters email
   ↓
4. API sends OTP via email (10 min expiry)
   ↓
5. User enters OTP
   ↓
6. API verifies OTP and:
   - Creates user in free_tool_users (if new)
   - Marks email as verified
   - Logs access in user_free_tool_access
   ↓
7. Show tool content
   ↓
8. On logout, data is cleared from localStorage
```

---

## Using the Auth Context

In any component inside a protected tool:

```tsx
import { useFreeToolsAuth } from '@/app/contexts/FreeToolsAuthContext';

export function MyToolComponent() {
  const { userId, email, isVerified, logout } = useFreeToolsAuth();

  return (
    <div>
      <p>Welcome, {email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

---

## What Gets Stored in Supabase

### On Successful Login:

**free_tool_users table:**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "email_verified": true,
  "verified_at": "2026-02-10T12:00:00Z",
  "last_login": "2026-02-10T12:00:00Z"
}
```

**user_free_tool_access table:**
```json
{
  "id": "uuid",
  "user_id": "uuid",
  "tool_name": "Email Verifier",
  "first_accessed_at": "2026-02-10T12:00:00Z",
  "last_accessed_at": "2026-02-10T12:00:00Z",
  "usage_count": 1
}
```

---

## Testing the Flow

### 1. Test OTP Send
```bash
curl -X POST http://localhost:3000/api/free-tools/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### 2. Test OTP Verify
```bash
curl -X POST http://localhost:3000/api/free-tools/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","otp":"123456"}'
```

### 3. Test Access Logging
```bash
curl -X POST http://localhost:3000/api/free-tools/log-access \
  -H "Content-Type: application/json" \
  -d '{"userId":"uuid","toolName":"Email Verifier"}'
```

---

## Example: Full Email Verifier Page

```tsx
'use client';

import ProtectedFreeTool from '@/components/ProtectedFreeTool';
import { useFreeToolsAuth } from '@/app/contexts/FreeToolsAuthContext';
import { useState } from 'react';

export default function EmailVerifierPage() {
  const { logout, email } = useFreeToolsAuth();
  const [emailToVerify, setEmailToVerify] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    // Your email verification logic here
    setResult({ valid: true, email: emailToVerify });
  };

  return (
    <ProtectedFreeTool toolName="Email Verifier">
      <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#19001d] to-[#0a0014] p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-white text-4xl font-bold">Email Verifier</h1>
            <button
              onClick={logout}
              className="px-4 py-2 text-white/70 hover:text-white transition-colors"
            >
              Logout ({email})
            </button>
          </div>

          <form onSubmit={handleVerify} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <div className="mb-6">
              <label className="block text-white/80 text-sm mb-2">
                Email to Verify
              </label>
              <input
                type="email"
                value={emailToVerify}
                onChange={(e) => setEmailToVerify(e.target.value)}
                placeholder="user@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#b45ecf]/50"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#b45ecf] to-[#805ad5] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Verify Email
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
              <p className="text-emerald-300">✓ Email is valid: {result.email}</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedFreeTool>
  );
}
```

---

## Key Features

✅ OTP-based login (no passwords)
✅ Email verification tracking
✅ Tool usage analytics
✅ Auto-logout on close
✅ Persistent sessions (localStorage)
✅ Rate-limited OTP (10 min expiry)
✅ Email history in Supabase

---

## Common Issues

**"No valid OTP found"**
- Check if 10 minutes have passed
- Ensure OTP hasn't been used already
- Try resending OTP

**"User not found"**
- New users are auto-created on OTP send
- Check database connection

**Login clearing after refresh**
- Check localStorage - data should persist
- Verify Supabase tables have correct data

---

## Customization

### Change OTP Length
In `/api/free-tools/send-otp`:
```ts
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Change length
}
```

### Change OTP Expiry
```ts
const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 min instead of 10
```

### Add Email Verification to Other Tools
Just wrap their page with `<ProtectedFreeTool>` and update the `toolName` prop.

---

## Next Steps

1. Create table `free_tool_otp_codes` in Supabase (SQL above)
2. Update `layout.tsx` with provider
3. Wrap free tool pages with `ProtectedFreeTool`
4. Test OTP flow
5. Deploy!
