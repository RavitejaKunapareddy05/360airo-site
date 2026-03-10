# Email Placement Checker - Testing Guide

## Quick Start

### 1. Access the Tool
Navigate to: `http://localhost:3000/free-tools/email-placement-checker`

### 2. Step 1: OTP Verification
- Enter your email address
- Click "Send OTP"
- Check your email inbox for the OTP code
- Enter the 5-digit code
- Click "Verify OTP"

### 3. Step 2: Configure Email Providers
You need 2 different email accounts. Examples:
- Gmail + Outlook
- Gmail + Yahoo
- Outlook + Zoho

For each provider:
- Select the email provider from dropdown
- Enter your email address
- Enter your password or app-specific password
  - **Gmail**: Use app-specific password (need 2FA enabled)
  - **Outlook**: Use account password
  - **Yahoo**: Use app-specific password
  - **Zoho**: Use account password

### 4. Step 3: Enter Test Recipients
- Add email addresses to test (comma-separated)
- These are the inbox addresses that will receive your test emails
- Example: `john@example.com, jane@example.com`

### 5. Step 4: Check Placement
- Click "Check Email Placement"
- System will:
  1. Send test email from Provider 1
  2. Wait 3 seconds
  3. Send test email from Provider 2
  4. Compare placement results
  5. Show results
  6. Save verified emails to file

### Expected Results

**Successful Test:**
```
Provider 1 (Gmail): 📧 INBOX
Provider 2 (Outlook): 📧 INBOX

✅ Verified Email: recipient@domain.com
   Both providers: INBOX placement
   Saved to: public/verified_emails.txt
```

**File Output Format:**
```
recipient@domain.com | INBOX | gmail & outlook | 2024-12-04T10:30:00Z
another@domain.com | SPAM | gmail & outlook | 2024-12-04T10:31:00Z
```

## Testing Scenarios

### Scenario 1: Both Inbox
```
Email 1 (Gmail): Inbox ✓
Email 2 (Outlook): Inbox ✓
Result: ✅ VERIFIED - Both same placement
```

### Scenario 2: One Inbox, One Spam
```
Email 1 (Gmail): Inbox ✓
Email 2 (Outlook): Spam ✗
Result: ⚠️ NOT VERIFIED - Different placement
```

### Scenario 3: Both Spam
```
Email 1 (Gmail): Spam ✗
Email 2 (Outlook): Spam ✗
Result: ✅ VERIFIED - Both same placement (Spam)
```

## Troubleshooting

### Issue: "OTP not found or expired"
**Solution:** 
- Request a new OTP
- Check spam folder for OTP email
- OTPs expire after 10 minutes

### Issue: "Invalid email provider credentials"
**Solutions:**
- Verify email address is correct
- For Gmail: Use app-specific password, not account password
- For Outlook: Use account password
- Check provider SMTP settings are correct
- Ensure Less Secure Apps is enabled (if applicable)

### Issue: "Failed to send email"
**Solutions:**
- Verify email credentials
- Check that SMTP provider settings are correct
- Ensure account has no login restrictions
- Check firewall/antivirus isn't blocking SMTP

### Issue: "Emails marked as spam by both"
**Solutions:**
- This is normal for test emails
- Try warming up the sending IP first
- Use proper email subject lines
- Add SPF/DKIM/DMARC records to sending domain
- Use trusted IP addresses

## API Testing with cURL

### Test Send OTP
```bash
curl -X POST http://localhost:3000/api/free-tools/email-placement-checker/send-otp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@gmail.com"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully"
}
```

### Test Verify OTP
```bash
curl -X POST http://localhost:3000/api/free-tools/email-placement-checker/verify-otp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@gmail.com",
    "otp": "12345"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Email verified successfully",
  "email": "your-email@gmail.com"
}
```

### Test Check Placement
```bash
curl -X POST http://localhost:3000/api/free-tools/email-placement-checker/check-placement \
  -H "Content-Type: application/json" \
  -d '{
    "verifiedEmail": "your-email@gmail.com",
    "smtp1": {
      "provider": "gmail",
      "email": "sender1@gmail.com",
      "password": "app-password-here"
    },
    "smtp2": {
      "provider": "outlook",
      "email": "sender2@outlook.com",
      "password": "password-here"
    },
    "recipients": ["test@example.com"]
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "results": [
    {
      "provider": "gmail",
      "placement": "inbox",
      "timestamp": "2024-12-04T10:30:00.000Z",
      "recipientEmail": "test@example.com"
    },
    {
      "provider": "outlook",
      "placement": "inbox",
      "timestamp": "2024-12-04T10:31:00.000Z",
      "recipientEmail": "test@example.com"
    }
  ],
  "verifiedEmails": [
    {
      "email": "test@example.com",
      "timestamp": "2024-12-04T10:31:00.000Z",
      "providers": [...]
    }
  ],
  "message": "Checked 1 recipients. 1 verified emails found."
}
```

## Performance Notes

- **OTP Generation**: ~100ms
- **Email Sending**: ~2-5 seconds per email
- **Placement Detection**: ~3-10 seconds per email (simplified version)
- **Total Test Time**: ~20-30 seconds for 2 providers × 1 recipient

## Security Notes

🔒 **Current State:**
- Passwords transmitted over HTTPS
- OTP stored in-memory with 10-minute expiry
- No rate limiting

🔐 **Production Recommendations:**
1. Implement rate limiting (max 3 OTP requests per IP)
2. Use Redis for OTP storage
3. Add CAPTCHA to OTP request
4. Hash passwords in transit
5. Use OAuth instead of storing passwords
6. Add request validation
7. Implement audit logging
8. Add IP whitelisting
9. Use secrets management system

## Files Created

```
/app/free-tools/email-placement-checker/
├── page.tsx                           # Main UI (523 lines)

/app/api/free-tools/email-placement-checker/
├── send-otp/
│   └── route.ts                       # Send OTP via SMTP (75 lines)
├── verify-otp/
│   └── route.ts                       # Verify OTP code (50 lines)
└── check-placement/
    └── route.ts                       # Check email placement (210 lines)

/
├── EMAIL_PLACEMENT_CHECKER_README.md  # Setup guide
├── EMAIL_PLACEMENT_CHECKER_TESTING.md # This file
└── .env                               # Updated with SMTP config

/public/
└── verified_emails.txt                # Generated automatically
```

## Next Steps

1. **Test OTP Flow**
   - Enter your email
   - Receive OTP
   - Verify successfully

2. **Configure Providers**
   - Set up 2 email accounts
   - Add their SMTP credentials

3. **Run Test**
   - Add test recipients
   - Click "Check Placement"
   - Verify results

4. **Check Results**
   - View placement results
   - Check verified_emails.txt file
   - Review any mismatches

## Support & Debugging

**Server Logs:**
Watch terminal where `npm run dev` is running for:
- OTP generation: `[OTP] Generated OTP for user@example.com: 12345`
- Email sending: `[SEND] Email sent from sender@gmail.com to recipient@example.com`
- Verification: `[VERIFY] Email verified: user@example.com`

**Browser Console:**
Press F12 to see:
- Network requests to API endpoints
- Response data
- Any JavaScript errors

**Verified Emails File:**
```bash
cat public/verified_emails.txt
```

---

**Last Updated:** December 4, 2024
**Version:** 1.0 (Initial Release)
