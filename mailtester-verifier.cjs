#!/usr/bin/env node

/**
 * 360 Airo Email Verifier Script - MailTester Ninja API Integration
 * ===================================================================
 * 
 * Installation & Setup Guide for Windows
 * =======================================
 * 
 * 1. Install Node.js (if not already installed)
 *    - Download from: https://nodejs.org/
 *    - Run installer and follow setup
 *    - Verify: Open CMD and run `node -v` and `npm -v`
 * 
 * 2. Install Dependencies
 *    - Navigate to script directory: cd C:\path\to\360airo-site
 *    - Run: npm install axios csv-writer
 * 
 * 3. Install PM2 (Optional but Recommended for Auto-restart)
 *    - Run: npm install -g pm2
 *    - Verify: pm2 -v
 * 
 * 4. Create Input File
 *    - Create a file named `mails.txt` in the same directory
 *    - Add emails one per line or separated by spaces/commas
 * 
 * 5. Set Your API Key
 *    - Replace YOUR_API_KEY_HERE with: sub_1SQ8ntAJu6gy4fiYiCXxoUQc
 *    - Or set as environment variable: set MAILTESTER_KEY=your_key
 * 
 * 6. Run the Script
 *    - Direct: node mailtester-verifier.cjs
 *    - With PM2: pm2 start mailtester-verifier.cjs --name "email-verifier"
 *    - View logs: pm2 logs email-verifier
 * 
 * 7. View Results
 *    - Check `output.csv` in the same directory for results
 * 
 * ===================================================================
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { createObjectCsvWriter } = require('csv-writer');

// Configuration
const INPUT_FILE = './mails.txt';
const OUTPUT_FILE = './output.csv';
const API_ENDPOINT = 'https://happy.mailtester.ninja/ninja';

// Your API Key - Replace with your actual key
// Or set environment variable: set MAILTESTER_KEY=your_key
const API_KEY = process.env.MAILTESTER_KEY || 'sub_1Smcz1AJu6gy4fiYQNMZke52';

// Throttle settings (100k emails per day = ~1 request per 865ms)
const THROTTLE_MS = 865;

// Color codes for console output
const Colors = {
  Reset: '\x1b[0m',
  Green: '\x1b[32m',
  Yellow: '\x1b[33m',
  Red: '\x1b[31m',
  Blue: '\x1b[36m',
  Gray: '\x1b[90m',
};

/**
 * Log with color and timestamp
 */
function log(message, color = Colors.Reset) {
  const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
  console.log(`${color}[${timestamp}] ${message}${Colors.Reset}`);
}

/**
 * Extract emails from file (supports various formats)
 */
function extractEmailsFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      log(`⚠️  Input file not found: ${filePath}`, Colors.Yellow);
      return [];
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = fileContent.match(emailRegex) || [];
    
    // Remove duplicates
    return [...new Set(emails)];
  } catch (error) {
    log(`❌ Error reading file: ${error.message}`, Colors.Red);
    return [];
  }
}

/**
 * Initialize CSV Writer
 */
function initializeCsvWriter() {
  return createObjectCsvWriter({
    path: OUTPUT_FILE,
    header: [
      { id: 'email', title: 'Email' },
      { id: 'code', title: 'Status Code' },
      { id: 'message', title: 'Status Message' },
      { id: 'user', title: 'User Part' },
      { id: 'domain', title: 'Domain' },
      { id: 'verified_at', title: 'Verified At' }
    ],
    append: true,
  });
}

/**
 * Verify a single email via API
 */
async function verifyEmail(email, apiKey, csvWriter, index) {
  try {
    const uri = `${API_ENDPOINT}?email=${encodeURIComponent(email)}&key=${apiKey}`;
    
    const response = await axios.get(uri, {
      family: 4,
      timeout: 10000,
    });

    const data = response.data;
    
    // Add timestamp
    data.verified_at = new Date().toISOString();

    // Write to CSV
    await csvWriter.writeRecords([data]);
    
    // Log success
    const statusEmoji = data.code === 0 ? '✅' : '⚠️ ';
    log(`[${index}] ${statusEmoji} ${email} → ${data.message}`, Colors.Green);

    return { success: true, data };
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    log(`[${index}] ❌ ${email} → ${errorMsg}`, Colors.Red);
    
    return {
      success: false,
      error: errorMsg,
      email: email,
    };
  }
}

/**
 * Sleep function for throttling
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Main verification process
 */
async function start() {
  const startDate = new Date();
  log(`🚀 Starting Email Verification...`, Colors.Blue);
  log(`📁 Input file: ${INPUT_FILE}`, Colors.Gray);
  log(`📁 Output file: ${OUTPUT_FILE}`, Colors.Gray);
  log(`🔑 API Key: ${API_KEY.substring(0, 10)}...`, Colors.Gray);
  log(`⏱️  Throttle: ${THROTTLE_MS}ms per request`, Colors.Gray);
  log(`─────────────────────────────────────────`, Colors.Gray);

  // Extract emails from input file
  let emailArray = extractEmailsFromFile(INPUT_FILE);

  if (emailArray.length === 0) {
    log(`❌ No emails found in ${INPUT_FILE}`, Colors.Red);
    return;
  }

  log(`📧 Found ${emailArray.length} emails to verify`, Colors.Yellow);

  // Extract already verified emails from output
  const emailArrayDone = extractEmailsFromFile(OUTPUT_FILE);
  const emailArrayToCheck = new Set(emailArrayDone);
  const emailArrayFiltered = emailArray.filter((email) => !emailArrayToCheck.has(email));

  if (emailArrayFiltered.length === 0) {
    log(`✅ All emails already verified!`, Colors.Green);
    return;
  }

  log(`📊 ${emailArrayFiltered.length} new emails to verify`, Colors.Yellow);
  log(`─────────────────────────────────────────`, Colors.Gray);

  // Initialize CSV writer
  const csvWriter = initializeCsvWriter();

  // Stats
  let successCount = 0;
  let errorCount = 0;

  // Process each email
  for (let i = 0; i < emailArrayFiltered.length; i++) {
    const email = emailArrayFiltered[i];
    
    // Log progress
    const elapsed = (((new Date() - startDate) / 1000) / 60).toFixed(2);
    log(
      `Progress: ${i + 1}/${emailArrayFiltered.length} (${((((i + 1) / emailArrayFiltered.length) * 100).toFixed(1))}%) - Time: ${elapsed}m`,
      Colors.Blue
    );

    // Verify email
    const result = await verifyEmail(email, API_KEY, csvWriter, i + 1);
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }

    // Throttle to avoid API rate limiting
    if (i < emailArrayFiltered.length - 1) {
      await sleep(THROTTLE_MS);
    }
  }

  // Final stats
  const endDate = new Date();
  const duration = (((endDate - startDate) / 1000) / 60).toFixed(2);

  log(`─────────────────────────────────────────`, Colors.Gray);
  log(`✅ Verification Complete!`, Colors.Green);
  log(`📊 Statistics:`, Colors.Blue);
  log(`   - Total: ${emailArrayFiltered.length}`, Colors.Gray);
  log(`   - Verified: ${successCount}`, Colors.Green);
  log(`   - Errors: ${errorCount}`, errorCount > 0 ? Colors.Red : Colors.Gray);
  log(`   - Duration: ${duration} minutes`, Colors.Gray);
  log(`⏰ Started: ${startDate.toLocaleString()}`, Colors.Gray);
  log(`⏰ Ended: ${endDate.toLocaleString()}`, Colors.Gray);
  log(`📁 Results saved to: ${OUTPUT_FILE}`, Colors.Green);
}

// Validate API key
if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
  log(`❌ Error: API Key not set!`, Colors.Red);
  log(`Set your API key by:`, Colors.Yellow);
  log(`   1. Edit this file and replace YOUR_API_KEY_HERE`, Colors.Yellow);
  log(`   2. Or set environment variable: set MAILTESTER_KEY=your_key`, Colors.Yellow);
  process.exit(1);
}

// Validate input file exists
if (!fs.existsSync(INPUT_FILE)) {
  log(`❌ Error: Input file not found at ${INPUT_FILE}`, Colors.Red);
  log(`Create a ${INPUT_FILE} file with emails (one per line)`, Colors.Yellow);
  process.exit(1);
}

// Start the verification
start().catch((error) => {
  log(`❌ Fatal error: ${error.message}`, Colors.Red);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  log(`\n⚠️  Process interrupted by user`, Colors.Yellow);
  process.exit(0);
});
