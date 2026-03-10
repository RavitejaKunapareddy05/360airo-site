-- ===========================================================
-- FREE TOOLS AUTHENTICATION - COMPLETE TABLE SETUP
-- ===========================================================
-- Run this in your Supabase SQL Editor
-- https://llretzesjnploxtcdotm.supabase.co

-- 1. Add missing columns to free_tool_users table
-- (Only runs if columns don't already exist)
-- ===========================================================

DO $$ 
BEGIN
    -- Add email_verified column
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'free_tool_users' AND column_name = 'email_verified'
    ) THEN
        ALTER TABLE free_tool_users 
        ADD COLUMN email_verified BOOLEAN DEFAULT FALSE;
    END IF;

    -- Add verified_at column
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'free_tool_users' AND column_name = 'verified_at'
    ) THEN
        ALTER TABLE free_tool_users 
        ADD COLUMN verified_at TIMESTAMP;
    END IF;

    -- Add updated_at column if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'free_tool_users' AND column_name = 'updated_at'
    ) THEN
        ALTER TABLE free_tool_users 
        ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
    END IF;

    -- Add last_login column if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'free_tool_users' AND column_name = 'last_login'
    ) THEN
        ALTER TABLE free_tool_users 
        ADD COLUMN last_login TIMESTAMP;
    END IF;
END $$;


-- 2. Create OTP codes table (if not exists)
-- ===========================================================

CREATE TABLE IF NOT EXISTS free_tool_otp_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES free_tool_users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    otp_code VARCHAR(6) NOT NULL,
    is_used BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    used_at TIMESTAMP
);

-- Create index for faster OTP lookups
CREATE INDEX IF NOT EXISTS idx_otp_email_created 
ON free_tool_otp_codes(email, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_otp_user_created 
ON free_tool_otp_codes(user_id, created_at DESC);


-- 3. Verify table structures
-- ===========================================================

-- Check free_tool_users structure
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'free_tool_users'
ORDER BY ordinal_position;

-- Check user_free_tool_access structure
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'user_free_tool_access'
ORDER BY ordinal_position;

-- Check free_tool_otp_codes structure
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'free_tool_otp_codes'
ORDER BY ordinal_position;


-- 4. Grant necessary permissions (if using RLS)
-- ===========================================================

ALTER TABLE free_tool_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_free_tool_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE free_tool_otp_codes ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then create new ones
DROP POLICY IF EXISTS "Service role can do everything on free_tool_users" ON free_tool_users;
DROP POLICY IF EXISTS "Service role can do everything on user_free_tool_access" ON user_free_tool_access;
DROP POLICY IF EXISTS "Service role can do everything on free_tool_otp_codes" ON free_tool_otp_codes;

-- Allow service role to do everything (for API routes)
CREATE POLICY "Service role can do everything on free_tool_users"
ON free_tool_users FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role can do everything on user_free_tool_access"
ON user_free_tool_access FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role can do everything on free_tool_otp_codes"
ON free_tool_otp_codes FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);
