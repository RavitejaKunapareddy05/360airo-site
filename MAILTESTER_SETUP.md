# Email Verifier Script - MailTester Ninja API Integration

A powerful Node.js script for bulk email verification using the MailTester Ninja API.

## Quick Start

### Prerequisites
- **Node.js** installed on Windows
- **API Key**: `sub_1SQ8ntAJu6gy4fiYiCXxoUQc`
- **Input file** with email addresses

### Step 1: Install Node.js (Windows)

1. Download from: https://nodejs.org/
2. Run the installer
3. Follow the setup wizard (keep defaults)
4. Open **Command Prompt (CMD)** and verify:
   ```cmd
   node -v
   npm -v
   ```

### Step 2: Navigate to Project Directory

Open Command Prompt and run:
```cmd
cd C:\Users\ASUS\OneDrive\Desktop\ABCD123\360airo-site
```

### Step 3: Install Dependencies

Run:
```cmd
npm install axios csv-writer
```

This will install:
- **axios** - HTTP client for API requests
- **csv-writer** - Writes results to CSV file

### Step 4: Create Input File

1. Create a new file named `mails.txt` in the project directory
2. Add email addresses (one per line or comma/space separated):

Example `mails.txt`:
```
john@example.com
jane@company.com
test@domain.org
support@business.net
```

### Step 5: Configure API Key

**Option A: In the Script (Simple)**
- Open `mailtester-verifier.cjs` in a text editor
- Find line: `const API_KEY = process.env.MAILTESTER_KEY || 'sub_1SQ8ntAJu6gy4fiYiCXxoUQc';`
- Replace `'sub_1SQ8ntAJu6gy4fiYiCXxoUQc'` with your actual API key

**Option B: Environment Variable (Secure)**
- Open Command Prompt
- Run:
  ```cmd
  set MAILTESTER_KEY=your_api_key_here
  ```
- Then run the script in the same CMD window

### Step 6: Run the Script

In Command Prompt:
```cmd
node mailtester-verifier.cjs
```

**Output:**
- Console shows real-time progress with colored logs
- Results saved to `output.csv`
- Processing rate: ~100,000 emails per day (throttled to comply with API limits)

## Output Format

The script generates `output.csv` with columns:
- **Email** - The email address
- **Status Code** - API response code (0 = valid)
- **Status Message** - Verification result
- **User Part** - Username portion of email
- **Domain** - Domain portion of email
- **Verified At** - Timestamp of verification

Example output:
```
Email,Status Code,Status Message,User Part,Domain,Verified At
john@example.com,0,Valid,john,example.com,2025-12-10T14:30:45.123Z
invalid@@email.com,1,Invalid Format,invalid@,email.com,2025-12-10T14:30:46.234Z
```

## Advanced Usage

### With PM2 (Auto-restart & Logging)

1. Install PM2 globally:
   ```cmd
   npm install -g pm2
   ```

2. Start script with PM2:
   ```cmd
   pm2 start mailtester-verifier.cjs --name "email-verifier"
   ```

3. View running processes:
   ```cmd
   pm2 list
   ```

4. View real-time logs:
   ```cmd
   pm2 logs email-verifier
   ```

5. Stop the script:
   ```cmd
   pm2 stop email-verifier
   ```

6. Restart the script:
   ```cmd
   pm2 restart email-verifier
   ```

7. Delete the process:
   ```cmd
   pm2 delete email-verifier
   ```

### Skip Already Verified Emails

The script automatically:
1. Reads `mails.txt` for emails to verify
2. Checks `output.csv` for already verified emails
3. Only processes new emails
4. Appends results to existing `output.csv`

This makes it safe to run multiple times!

## Troubleshooting

### Error: "Node.js is not recognized"
- Node.js not installed or not in PATH
- Solution: Close and reopen Command Prompt after installing Node.js

### Error: "Cannot find module 'axios'"
- Dependencies not installed
- Solution: Run `npm install axios csv-writer`

### Error: "Input file not found"
- `mails.txt` doesn't exist
- Solution: Create `mails.txt` in the same directory as the script

### Error: "API Key not set"
- API key is missing or invalid
- Solution: Set the API key in the script or as environment variable

### Rate Limiting (429 errors)
- Too many requests sent too quickly
- Solution: Increase `THROTTLE_MS` value in the script (currently 865ms)

## Performance Tips

1. **Batch Processing**: Run the script multiple times with different email lists
2. **Schedule**: Use Task Scheduler (Windows) to run on a schedule
3. **Monitor**: Use PM2 to keep the process running and auto-restart on failure
4. **Check Results**: Open `output.csv` in Excel to analyze results

## Features

✅ Bulk email verification
✅ Real-time progress with colored logs
✅ Automatic rate limiting (100k/day equivalent)
✅ Resume from interruption
✅ CSV export for analysis
✅ Error handling and retry logic
✅ Windows compatible
✅ PM2 support for background operation

## File Structure

```
360airo-site/
├── mailtester-verifier.cjs       (This script)
├── MAILTESTER_SETUP.md           (This guide)
├── mails.txt                      (Your input emails)
└── output.csv                     (Results generated)
```

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review console output for error messages
3. Ensure API key is valid
4. Verify input file format is correct

## Security Notes

- API keys should be kept confidential
- Use environment variables for production setups
- Don't commit API keys to version control
- Regularly rotate API keys for security

---

**Last Updated**: December 10, 2025
**API Service**: MailTester Ninja
**Version**: 1.0.0
