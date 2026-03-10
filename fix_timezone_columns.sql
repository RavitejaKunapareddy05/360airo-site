-- Fix timezone issue in free_tool_otp_codes table
-- Run this in Supabase SQL Editor

-- First, convert the expires_at column to TIMESTAMPTZ
ALTER TABLE free_tool_otp_codes 
ALTER COLUMN expires_at TYPE TIMESTAMPTZ USING expires_at AT TIME ZONE 'UTC';

ALTER TABLE free_tool_otp_codes 
ALTER COLUMN created_at TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC';

ALTER TABLE free_tool_otp_codes 
ALTER COLUMN used_at TYPE TIMESTAMPTZ USING used_at AT TIME ZONE 'UTC';

-- Also fix free_tool_users timestamps
ALTER TABLE free_tool_users 
ALTER COLUMN verified_at TYPE TIMESTAMPTZ USING verified_at AT TIME ZONE 'UTC';

ALTER TABLE free_tool_users 
ALTER COLUMN created_at TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC';

ALTER TABLE free_tool_users 
ALTER COLUMN updated_at TYPE TIMESTAMPTZ USING updated_at AT TIME ZONE 'UTC';

ALTER TABLE free_tool_users 
ALTER COLUMN last_login TYPE TIMESTAMPTZ USING last_login AT TIME ZONE 'UTC';

-- Verify the changes
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'free_tool_otp_codes' 
AND column_name IN ('expires_at', 'created_at', 'used_at');
