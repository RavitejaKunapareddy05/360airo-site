# Quick Start Guide - Email Verifier

## For Windows Users - Fastest Setup (5 Minutes)

### Step 1: Install Node.js (1 minute)
1. Download: https://nodejs.org/ (LTS version)
2. Run installer, click Next through all steps
3. **Restart your computer** (important!)

### Step 2: Create Email List (1 minute)
1. Open Notepad
2. Paste your emails (one per line):
```
john@example.com
jane@company.com
test@domain.org
support@business.net
```
3. Save as `mails.txt` in: `C:\Users\ASUS\OneDrive\Desktop\ABCD123\360airo-site\`

### Step 3: Install Dependencies (1 minute)
1. Open Command Prompt
2. Copy & Paste:
```cmd
cd C:\Users\ASUS\OneDrive\Desktop\ABCD123\360airo-site
npm install axios csv-writer
```

### Step 4: Run Verification (2 minutes)
Double-click `run-verifier.bat` in the project directory

**That's it!** Results will be in `output.csv`

---

## What You Need

✅ **API Key**: `sub_1SQ8ntAJu6gy4fiYiCXxoUQc` (provided)
✅ **Input File**: `mails.txt` (create with your emails)
✅ **Node.js**: Install from nodejs.org
✅ **Script Files**: Already in project directory

## Running the Script

### Option 1: Easy Method (Recommended)
**Double-click**: `run-verifier.bat`
- Interactive menu
- Automatic setup
- Choose to run normally or with PM2

### Option 2: Command Line
```cmd
cd C:\Users\ASUS\OneDrive\Desktop\ABCD123\360airo-site
node mailtester-verifier.cjs
```

### Option 3: With PM2 (Background)
```cmd
npm install -g pm2
pm2 start mailtester-verifier.cjs --name "email-verifier"
pm2 logs email-verifier
```

## Output

Your verified emails will be saved to `output.csv`:

| Email | Status Code | Status Message | User Part | Domain | Verified At |
|-------|-------------|----------------|-----------|--------|-------------|
| john@example.com | 0 | Valid | john | example.com | 2025-12-10... |
| test@domain.org | 0 | Valid | test | domain.org | 2025-12-10... |

## Features

- ✅ Bulk verify 100+ emails
- ✅ Automatic rate limiting (safe)
- ✅ Resume interrupted batches
- ✅ CSV export
- ✅ Real-time progress
- ✅ Error handling

## Troubleshooting

**Problem**: "node is not recognized"
- **Solution**: Restart computer after Node.js install

**Problem**: "Cannot find module"
- **Solution**: Run `npm install axios csv-writer`

**Problem**: "mails.txt not found"
- **Solution**: Create file in project directory

**Problem**: "API key not set"
- **Solution**: Open script in notepad and set your key

## Speed

- **Rate**: ~1 email per second
- **100 emails**: ~2 minutes
- **1000 emails**: ~20 minutes
- **10,000 emails**: ~3 hours

## Next Steps

1. Create `mails.txt` with your emails
2. Double-click `run-verifier.bat`
3. Select option 1 to start verification
4. Check `output.csv` for results

---

**Need Help?**
- Check `MAILTESTER_SETUP.md` for detailed documentation
- Review console error messages
- Ensure API key is set correctly

**Your API Key**: `sub_1SQ8ntAJu6gy4fiYiCXxoUQc`
