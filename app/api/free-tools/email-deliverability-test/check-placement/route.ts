import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering - this endpoint should never be statically generated
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PlacementResult {
  id: string;
  from: string;
  to: string;
  subject: string;
  folder: string;
  date: string;
  provider: string;
}

async function checkGmailPlacement(): Promise<PlacementResult[]> {
  const results: PlacementResult[] = [];
  
  let gmailUser = process.env.SMTP_USER || process.env.GMAIL_USER || process.env.GMAIL_EMAIL;
  let gmailPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPass) {
    console.error('❌ [IMAP] Missing Gmail credentials');
    return [];
  }

  if (process.env.NODE_ENV === 'production' && process.env.__NEXT_PRIVATE_PREBUILD_PHASE) {
    console.log('⏭️ [IMAP] Skipping during build phase');
    return [];
  }

  console.log(`🔐 [IMAP] Checking Gmail for test emails FROM: ${gmailUser}`);

  try {
    let Imap: any;
    try {
      const imapModule = require('imap');
      Imap = imapModule.default || imapModule;
    } catch (importErr) {
      console.error('❌ [IMAP] Failed to import IMAP:', importErr);
      return [];
    }

    console.log('📦 [IMAP] IMAP library loaded successfully');

    const imap = new Imap({
      user: gmailUser,
      password: gmailPass,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
      authTimeout: 5000,
    });

    return new Promise((resolve) => {
      let timeoutHandle: any = null;
      let isResolved = false;

      const cleanup = (res: PlacementResult[]) => {
        if (isResolved) return;
        isResolved = true;
        clearTimeout(timeoutHandle);
        try {
          imap.closeBox(() => {
            try {
              imap.end();
            } catch (e) {}
          });
        } catch (e) {}
        resolve(res);
      };

      timeoutHandle = setTimeout(() => {
        console.warn('⚠️ [IMAP] Timeout waiting for connection (30s)');
        cleanup(results);
      }, 30000);

      imap.on('error', (err: any) => {
        const errorMsg = err?.message || String(err);
        console.error('❌ [IMAP] Connection error:', errorMsg);
        
        if (errorMsg.includes('not authenticated') || errorMsg.includes('authentication failed') || errorMsg.includes('LOGIN')) {
          console.error('   💡 Make sure you are using a Gmail App Password (16 chars), not your regular password');
          console.error('   📖 Get App Password: https://support.google.com/accounts/answer/185833');
        }
        
        cleanup(results);
      });

      imap.on('end', () => {
        console.log(`✅ [IMAP] Connection closed. Found ${results.length} test emails`);
      });

      imap.on('ready', () => {
        console.log('✅ [IMAP] Connected and authenticated!');

        // Define key Gmail folders to check
        const foldersToCheck = ['INBOX', '[Gmail]/Spam', '[Gmail]/All Mail'];
        
        console.log(`📋 [IMAP] Will check folders: ${foldersToCheck.join(', ')}`);

        let boxesProcessed = 0;
        let foundMostRecent = false;

        const checkNextBox = () => {
          if (foundMostRecent || boxesProcessed >= foldersToCheck.length) {
            if (results.length > 0) {
              console.log(`✅ [IMAP] Found most recent test email in: ${results[0].folder}`);
            } else {
              console.log(`📭 [IMAP] No test emails found TO ${gmailUser}`);
            }
            cleanup(results);
            return;
          }

          const boxName = foldersToCheck[boxesProcessed];
          boxesProcessed++;

          imap.openBox(boxName, false, (err: any, mailbox: any) => {
            if (err) {
              console.warn(`⚠️ [IMAP] Could not open folder "${boxName}", skipping...`);
              checkNextBox();
              return;
            }

            console.log(`📂 [IMAP] Checking folder: "${boxName}" (${mailbox.messages.total} messages)`);

            // Search for emails TO the user (emails sent to them from other accounts)
            const searchCriteria = [['TO', gmailUser]];
            
            imap.search(searchCriteria, (err: any, emailIds: any) => {
              if (err) {
                console.warn(`⚠️ [IMAP] Search error in "${boxName}":`, err?.message || String(err));
                checkNextBox();
                return;
              }

              if (!emailIds || emailIds.length === 0) {
                console.log(`   (no test emails TO ${gmailUser})`);
                checkNextBox();
                return;
              }

              console.log(`   📧 Found ${emailIds.length} test email(s) TO "${gmailUser}"`);

              // Get only the LAST (most recent) email
              const mostRecentId = emailIds[emailIds.length - 1];
              
              const f = imap.fetch([mostRecentId], { bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)' });

              f.on('message', (msg: any, seqno: any) => {
                let headerText = '';

                msg.on('body', (stream: any) => {
                  stream.on('data', (chunk: any) => {
                    headerText += chunk.toString();
                  });

                  stream.on('end', () => {
                    try {
                      const fromMatch = headerText.match(/From:\s*([^\r\n]+)/i);
                      const toMatch = headerText.match(/To:\s*([^\r\n]+)/i);
                      const subjectMatch = headerText.match(/Subject:\s*([^\r\n]+)/i);
                      const dateMatch = headerText.match(/Date:\s*([^\r\n]+)/i);

                      const from = fromMatch ? fromMatch[1].trim() : 'Unknown';
                      const to = toMatch ? toMatch[1].trim() : 'Unknown';
                      const subject = subjectMatch ? subjectMatch[1].trim() : '(No Subject)';
                      const dateStr = dateMatch ? dateMatch[1].trim() : '';

                      let date = new Date().toISOString();
                      if (dateStr) {
                        try {
                          date = new Date(dateStr).toISOString();
                        } catch (e) {
                          console.warn(`⚠️ Could not parse date: ${dateStr}`);
                        }
                      }

                      results.push({
                        id: `${boxName}-${seqno}`,
                        from: from.substring(0, 100),
                        to: to.substring(0, 100),
                        subject: subject.substring(0, 100),
                        folder: boxName,
                        date: date,
                        provider: 'Gmail',
                      });

                      console.log(`   ✅ Most recent email: "${subject.substring(0, 50)}" from ${from.substring(0, 50)} to ${to.substring(0, 50)} in ${boxName}`);
                      foundMostRecent = true;
                    } catch (parseErr) {
                      console.warn(`⚠️ Could not parse email in "${boxName}"`);
                    }
                  });
                });
              });

              f.on('error', (err: any) => {
                console.warn(`⚠️ [IMAP] Fetch error in "${boxName}":`, err?.message || String(err));
                checkNextBox();
              });

              f.on('end', () => {
                setTimeout(checkNextBox, 200);
              });
            });
          });
        };

        checkNextBox();
      });

      console.log('🔌 [IMAP] Connecting to imap.gmail.com:993...');
      imap.connect();
    });
  } catch (error: any) {
    console.error('❌ [IMAP] Setup error:', error?.message || String(error));
    return [];
  }
}

export async function GET(req: NextRequest) {
  try {
    console.log('📧 [CHECK-PLACEMENT] Starting placement check...');

    const results = await checkGmailPlacement();

    console.log(`✅ [CHECK-PLACEMENT] Found ${results.length} emails`);

    return NextResponse.json({
      success: true,
      results,
    });
  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    console.error('❌ [CHECK-PLACEMENT] Error:', errorMsg);
    
    // Provide helpful error messages for common issues
    let userMessage = `Failed to check placement: ${errorMsg}`;
    
    if (errorMsg.includes('not authenticated') || errorMsg.includes('authentication failed')) {
      userMessage = 'Gmail authentication failed. Please ensure you are using a Gmail App Password, not your regular password. See: https://support.google.com/accounts/answer/185833';
    } else if (errorMsg.includes('Invalid user')) {
      userMessage = 'Invalid Gmail username. Please check your GMAIL_USER environment variable.';
    } else if (errorMsg.includes('ECONNREFUSED') || errorMsg.includes('ENOTFOUND')) {
      userMessage = 'Could not connect to Gmail IMAP server. Please check your internet connection.';
    } else if (errorMsg.includes('TIMEOUT') || errorMsg.includes('timeout')) {
      userMessage = 'Gmail IMAP connection timed out. Please try again.';
    }
    
    return NextResponse.json(
      { error: userMessage },
      { status: 500 }
    );
  }
}
