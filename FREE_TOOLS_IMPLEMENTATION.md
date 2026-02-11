# Free Tools Authentication & Email Storage Guide

## Schema Overview

This schema enables:
- ✅ User login/registration for free tools
- ✅ Email saving per tool per user
- ✅ Usage tracking and rate limiting (daily/monthly limits)
- ✅ Tool-specific data storage (flexible JSONB)
- ✅ Email analysis results
- ✅ Session management
- ✅ Activity logging

---

## Database Tables

### 1. **free_tool_users** - User Accounts
Stores user credentials and verification status

```sql
SELECT * FROM free_tool_users WHERE email = 'user@example.com';
```

### 2. **free_tools** - Available Tools
List of all free tools (pre-populated with 9 tools)

```sql
SELECT * FROM free_tools WHERE is_active = TRUE;
```

### 3. **user_free_tool_access** - Tool Access Tracking
Tracks which user has accessed which tool

```sql
SELECT u.username, f.name, a.last_accessed_at, a.usage_count
FROM user_free_tool_access a
JOIN free_tool_users u ON a.user_id = u.id
JOIN free_tools f ON a.tool_id = f.id;
```

### 4. **free_tool_sessions** - Login Sessions
Tracks active sessions for security

```sql
SELECT * FROM free_tool_sessions 
WHERE user_id = 'user-uuid' AND is_active = TRUE AND expires_at > NOW();
```

### 5. **free_tool_saved_emails** - Saved Emails
Core table for storing emails submitted in free tools

```sql
SELECT email_address, subject, tool_id, status FROM free_tool_saved_emails 
WHERE user_id = 'user-uuid';
```

### 6. **free_tool_email_analysis** - Analysis Results
Stores analysis results for emails

### 7. **free_tool_usage_stats** - Rate Limiting
Tracks daily/monthly requests for rate limiting

### 8. **free_tool_subscriptions** - Paid Plans
For users wanting unlimited access

### 9. **free_tool_activity_logs** - Audit Trail
Logs all user actions

---

## How It Works

### User Flow:

```
1. User visits free tool (e.g., /free-tools/email-verifier)
   ↓
2. Check if user is logged in
   ├─ YES → Show tool interface
   └─ NO → Redirect to login/register
   ↓
3. User enters email to verify
   ↓
4. Save email to free_tool_saved_emails
   ↓
5. Check usage_stats for rate limiting
   ├─ Within limit → Process email
   └─ Limit exceeded → Show upgrade prompt
   ↓
6. Save analysis results to free_tool_email_analysis
   ↓
7. Log activity in free_tool_activity_logs
```

---

## API Endpoints Needed

### Authentication
- `POST /api/free-tools/auth/register` - Create new account
- `POST /api/free-tools/auth/login` - Login with email/password
- `POST /api/free-tools/auth/logout` - Logout
- `POST /api/free-tools/auth/verify-email` - Email verification

### Tools
- `GET /api/free-tools/list` - Get available tools
- `GET /api/free-tools/[slug]/status` - Check tool status

### Email Operations
- `POST /api/free-tools/[slug]/save-email` - Save email
- `GET /api/free-tools/[slug]/saved-emails` - Get user's saved emails
- `POST /api/free-tools/[slug]/analyze` - Analyze email
- `DELETE /api/free-tools/saved-emails/[id]` - Delete saved email

### Usage
- `GET /api/free-tools/usage/stats` - Get usage stats
- `POST /api/free-tools/usage/log-action` - Log user action

---

## Rate Limiting Rules

Default free tier limits:
- **Daily limit**: 50 requests
- **Monthly limit**: 500 requests

When limit is exceeded:
1. Show message: "You've reached your daily limit. Upgrade to continue."
2. Offer upgrade to Pro/Unlimited plan
3. Log the attempt

---

## Sample Queries

### Get all emails saved by a user in a specific tool:
```sql
SELECT se.*, fa.score, fa.findings 
FROM free_tool_saved_emails se
LEFT JOIN free_tool_email_analysis fa ON se.id = fa.saved_email_id
WHERE se.user_id = $1 AND se.tool_id = (SELECT id FROM free_tools WHERE slug = $2)
ORDER BY se.created_at DESC;
```

### Check if user has exceeded daily limit:
```sql
SELECT daily_requests, daily_limit
FROM free_tool_usage_stats
WHERE user_id = $1 AND tool_id = $2 AND date_tracked = CURRENT_DATE;
```

### Get active session for user:
```sql
SELECT * FROM free_tool_sessions
WHERE user_id = $1 AND is_active = TRUE AND expires_at > NOW()
LIMIT 1;
```

### User activity summary:
```sql
SELECT action, COUNT(*) as count
FROM free_tool_activity_logs
WHERE user_id = $1 AND created_at > NOW() - INTERVAL '7 days'
GROUP BY action;
```

---

## Implementation Steps

### Step 1: Run SQL Schema
Copy the SQL schema and run in Supabase SQL Editor

### Step 2: Create Auth API Routes
```
/api/free-tools/auth/register
/api/free-tools/auth/login
/api/free-tools/auth/logout
```

### Step 3: Create Tool API Routes
```
/api/free-tools/[slug]/save-email
/api/free-tools/[slug]/analyze
```

### Step 4: Create Middleware
- Check login status before accessing tools
- Validate session tokens
- Check rate limits

### Step 5: Update Free Tool Components
- Add login check
- Show email save form
- Display usage stats

---

## Security Considerations

1. **Password Hashing**: Use bcrypt for storing passwords
2. **Session Tokens**: Use secure random tokens (32+ bytes)
3. **CORS**: Only allow requests from your domain
4. **Rate Limiting**: Check daily/monthly limits
5. **Input Validation**: Validate all email inputs
6. **SQL Injection**: Use parameterized queries
7. **HTTPS Only**: Ensure all API calls over HTTPS

---

## Example: Saving an Email

**Request:**
```json
{
  "sessionToken": "abc123xyz...",
  "toolSlug": "email-verifier",
  "emailAddress": "user@example.com",
  "subject": "Test Email"
}
```

**Process:**
```sql
-- 1. Get tool ID
SELECT id FROM free_tools WHERE slug = 'email-verifier';

-- 2. Check rate limit
SELECT daily_requests FROM free_tool_usage_stats 
WHERE user_id = $1 AND tool_id = $2 AND date_tracked = CURRENT_DATE;

-- 3. Save email
INSERT INTO free_tool_saved_emails 
(user_id, tool_id, email_address, subject, status)
VALUES ($1, $2, $3, $4, 'saved');

-- 4. Update usage
UPDATE free_tool_usage_stats 
SET daily_requests = daily_requests + 1
WHERE user_id = $1 AND tool_id = $2;

-- 5. Log activity
INSERT INTO free_tool_activity_logs
(user_id, tool_id, action, details)
VALUES ($1, $2, 'save_email', $5);
```

**Response:**
```json
{
  "success": true,
  "emailId": "uuid",
  "remainingToday": 49,
  "remainingMonth": 499
}
```

---

## Free Tools List (Pre-populated)

| Tool | Slug | Limit Use |
|------|------|-----------|
| Email Verifier | email-verifier | ✓ Rate limited |
| Email Template Analyzer | email-template-analyzer | ✓ Rate limited |
| Email Signature Builder | email-signature-builder | ✓ Rate limited |
| Email Sequencer | email-sequencer | ✓ Rate limited |
| Email Pitch Generator | email-pitch-generator | ✓ Rate limited |
| SPF Generator | spf-generator | ✓ Rate limited |
| DMARC Generator | dmarc-generator | ✓ Rate limited |
| Email Deliverability Test | email-deliverability-test | ✓ Rate limited |
| Mailbox Calculator | mailbox-calculator | ✓ Rate limited |

---

## Troubleshooting

**User can't save email:**
- Check if session is active: `SELECT * FROM free_tool_sessions WHERE token = $1`
- Check rate limit: `SELECT * FROM free_tool_usage_stats WHERE user_id = $1`

**Emails not loading:**
- Check user_id is correct
- Verify email status is 'saved'
- Check timestamps

**Session expired:**
- Check `free_tool_sessions.expires_at > NOW()`
- Create new session if expired

---

## Migration Notes

If migrating from existing system:
1. Create new tables
2. Copy user data (hash passwords with bcrypt)
3. Map existing tool data to free_tool_saved_emails
4. Initialize usage_stats for all users
5. Test thoroughly before going live
