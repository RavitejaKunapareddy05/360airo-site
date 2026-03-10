-- Free Tools Users & Access Schema (Minimal)

-- Users table (authentication)
CREATE TABLE free_tool_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  username VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

-- User free tools access (tracking which tools user has used)
CREATE TABLE user_free_tool_access (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES free_tool_users(id) ON DELETE CASCADE,
  tool_name VARCHAR(100) NOT NULL,
  
  -- Tracking
  first_accessed_at TIMESTAMP DEFAULT NOW(),
  last_accessed_at TIMESTAMP,
  usage_count INTEGER DEFAULT 0,
  
  UNIQUE(user_id, tool_name)
);

-- Create indexes
CREATE INDEX idx_free_tool_users_email ON free_tool_users(email);
CREATE INDEX idx_free_tool_users_username ON free_tool_users(username);
CREATE INDEX idx_user_tool_access_user_id ON user_free_tool_access(user_id);
CREATE INDEX idx_user_tool_access_tool_name ON user_free_tool_access(tool_name);
CREATE INDEX idx_user_tool_access_last_accessed ON user_free_tool_access(last_accessed_at);
