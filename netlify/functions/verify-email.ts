import dns from 'dns';
import { promisify } from 'util';
import net from 'net';

const resolveMx = promisify(dns.resolveMx);

function smtpVerifyEmail(mxHost: string, email: string, timeout = 2000): Promise<boolean | null> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let buffer = '';
    let stage = 0;
    let finished = false;
    let timeoutHandle: NodeJS.Timeout | null = null;

    const cleanup = (result: boolean | null) => {
      if (finished) return;
      finished = true;
      if (timeoutHandle) clearTimeout(timeoutHandle);
      try {
        socket.destroy();
      } catch (e) {}
      console.log(`[SMTP] ${email} @ ${mxHost} = ${result === true ? '✅ VALID' : result === false ? '❌ INVALID' : '⏱️ TIMEOUT'}`);
      resolve(result);
    };

    timeoutHandle = setTimeout(() => {
      console.log(`[SMTP] Timeout for ${email} @ ${mxHost} (stage ${stage})`);
      cleanup(null);
    }, timeout);
    
    socket.on('error', (err) => {
      console.log(`[SMTP] Error for ${email} @ ${mxHost}: ${err.message}`);
      cleanup(null);
    });
    
    socket.on('close', () => {
      if (!finished) {
        console.log(`[SMTP] Socket closed for ${email} @ ${mxHost} at stage ${stage}`);
        cleanup(null);
      }
    });

    socket.connect(25, mxHost, () => {
      console.log(`[SMTP] Connected to ${mxHost} for ${email}`);
    });

    socket.on('data', (chunk: Buffer) => {
      if (finished) return;
      buffer += chunk.toString();
      const lines = buffer.split('\r\n').filter(Boolean);
      const lastLine = lines[lines.length - 1];
      if (!lastLine || lastLine.length < 3) return;

      const code = parseInt(lastLine.slice(0, 3), 10);
      if (isNaN(code)) return;

      console.log(`[SMTP] Stage ${stage}: Got code ${code} from ${mxHost}`);

      if (stage === 0 && code >= 200 && code < 400) {
        socket.write(`HELO example.com\r\n`);
        stage = 1;
        buffer = '';
      } else if (stage === 1 && code >= 200 && code < 400) {
        socket.write(`MAIL FROM:<test@example.com>\r\n`);
        stage = 2;
        buffer = '';
      } else if (stage === 2 && code >= 200 && code < 400) {
        socket.write(`RCPT TO:<${email}>\r\n`);
        stage = 3;
        buffer = '';
      } else if (stage === 3) {
        // Stage 3: RCPT TO response
        // 250/251 = mailbox exists (valid)
        // 550/551/553 = mailbox does not exist (invalid)
        // 450/451 = temp failure, treat as unknown
        if (code === 250 || code === 251) {
          cleanup(true); // VALID
        } else if (code >= 550 && code < 560) {
          cleanup(false); // INVALID
        } else if (code >= 400 && code < 500) {
          cleanup(null); // TEMP FAILURE - try next MX
        } else {
          cleanup(null); // Unknown response
        }
      }
    });
  });
}

export default async (req: any) => {
  let email = '';
  
  try {
    // Handle both JSON body and parsed body
    if (typeof req.body === 'string') {
      const parsed = JSON.parse(req.body);
      email = parsed.email;
    } else if (req.body && req.body.email) {
      email = req.body.email;
    }

    if (!email || typeof email !== 'string') {
      console.log('[VERIFY] No email in request');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email required' })
      };
    }

    email = email.toLowerCase().trim();
    console.log(`[VERIFY] Starting verification for: ${email}`);
    
    const domain = email.split('@')[1];

    if (!domain) {
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'invalid', reason: 'Invalid email format' })
      };
    }

    let mxRecords: any;

    // DNS lookup
    try {
      console.log(`[VERIFY] Looking up MX records for ${domain}`);
      mxRecords = await resolveMx(domain);
      console.log(`[VERIFY] Found ${mxRecords.length} MX records for ${domain}`);
    } catch (err: any) {
      // No DNS = no domain = invalid
      console.log(`[VERIFY] DNS lookup failed for ${domain}: ${err.message}`);
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'invalid', reason: 'Domain does not exist' })
      };
    }

    if (!mxRecords || mxRecords.length === 0) {
      // No DNS = invalid
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'invalid', reason: 'No mail servers found' })
      };
    }

    // Check if running locally (localhost only, not when called from Vercel)
    const isLocalhost = process.env.NODE_ENV === 'development' && 
                       (!process.env.URL || process.env.URL.includes('localhost'));
    
    if (isLocalhost) {
      // On localhost: Domain exists = valid (can't verify SMTP without port 25)
      console.log(`[VERIFY] 📍 Localhost detected - using DNS-only verification`);
      console.log(`[VERIFY] ✅ VALID: ${email} (DNS verified)`);
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'valid', reason: 'Domain verified via DNS (SMTP unavailable on localhost)' })
      };
    }

    // Production: Domain exists (DNS verified), now try SMTP
    let smtpAttempted = false;
    for (let i = 0; i < Math.min(2, mxRecords.length); i++) {
      smtpAttempted = true;
      const mxHost = mxRecords[i].exchange;
      console.log(`[VERIFY] Attempting SMTP on ${mxHost} (${i + 1}/2)`);
      
      const result = await smtpVerifyEmail(mxHost, email, 2000);

      if (result === true) {
        // SMTP confirms valid
        console.log(`[VERIFY] ✅ VALID: ${email}`);
        return {
          statusCode: 200,
          body: JSON.stringify({ status: 'valid', reason: 'Email verified via SMTP' })
        };
      } else if (result === false) {
        // SMTP confirms invalid
        console.log(`[VERIFY] ❌ INVALID: ${email}`);
        return {
          statusCode: 200,
          body: JSON.stringify({ status: 'invalid', reason: 'Email does not exist' })
        };
      }
      // null = timeout, try next MX
      console.log(`[VERIFY] SMTP timeout on ${mxHost}, trying next...`);
    }

    // Domain exists but SMTP timed out on all servers = unknown
    if (smtpAttempted) {
      console.log(`[VERIFY] ❓ UNKNOWN: ${email} (SMTP timeout)`);
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'unknown', reason: 'Domain exists but SMTP verification failed' })
      };
    }

    // Fallback (shouldn't reach)
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'invalid', reason: 'Verification failed' })
    };
  } catch (err: any) {
    console.error('[VERIFY] Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Verification service error' })
    };
  }
};
