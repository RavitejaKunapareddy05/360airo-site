import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs/promises';
import * as path from 'path';

interface TrackedEvent {
  type: string;
  email?: string;
  name?: string;
  company?: string;
  phone?: string;
  sessionId?: string;
  visitorId?: string;
  accountId?: string;
  timestamp?: string;
  [key: string]: any;
}

interface TrackingPayload {
  events: TrackedEvent[];
  timestamp: string;
}

/**
 * Save leads to a .txt file
 */
async function saveLeadsToFile(leads: any[]) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(dataDir, 'leads.txt');
    
    // Ensure data directory exists
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
    
    // Extract identified leads (with email or name)
    const identifiedLeads = leads.filter(
      event => event.email || event.name || event.type === 'lead_identified'
    );
    
    if (identifiedLeads.length === 0) return;
    
    // Format leads for storage
    const formattedLeads = identifiedLeads.map(lead => {
      return {
        email: lead.email,
        name: lead.name,
        company: lead.company,
        phone: lead.phone,
        visitorId: lead.visitorId,
        sessionId: lead.sessionId,
        timestamp: lead.timestamp,
        source: 'web-tracker'
      };
    });
    
    // Read existing leads
    let existingContent = '';
    try {
      existingContent = await fs.readFile(leadsFile, 'utf-8');
    } catch {
      // File doesn't exist yet
      existingContent = '';
    }
    
    // Append new leads
    const leadsText = formattedLeads
      .map(lead => {
        const parts = [
          `Email: ${lead.email || 'N/A'}`,
          `Name: ${lead.name || 'N/A'}`,
          `Company: ${lead.company || 'N/A'}`,
          `Phone: ${lead.phone || 'N/A'}`,
          `Visitor ID: ${lead.visitorId}`,
          `Session ID: ${lead.sessionId}`,
          `Timestamp: ${lead.timestamp}`,
          `Source: ${lead.source}`
        ];
        return parts.join(' | ');
      })
      .join('\n');
    
    const newContent = existingContent 
      ? existingContent + '\n' + leadsText + '\n'
      : leadsText + '\n';
    
    await fs.writeFile(leadsFile, newContent, 'utf-8');
    
    console.log(`✅ Saved ${identifiedLeads.length} leads to file`);
  } catch (error) {
    console.error('❌ Error saving leads to file:', error);
  }
}

/**
 * Handle POST requests - track events and save leads
 */
export async function POST(request: NextRequest) {
  try {
    const payload: TrackingPayload = await request.json();
    
    if (!payload.events || !Array.isArray(payload.events)) {
      return NextResponse.json(
        { error: 'Invalid payload structure' },
        { status: 400 }
      );
    }
    
    // Process events
    const { events } = payload;
    
    // Log event summary
    console.log(`[TRACKING] Received ${events.length} events at ${new Date().toISOString()}`);
    
    // Save leads to file
    await saveLeadsToFile(events);
    
    // Log specific events
    events.forEach(event => {
      if (event.type === 'lead_identified' && event.email) {
        console.log(`📧 New lead identified: ${event.email}`);
      }
      if (event.type === 'form_submission') {
        console.log(`📝 Form submitted from session: ${event.sessionId}`);
      }
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Events tracked successfully',
        eventsProcessed: events.length 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Handle GET requests - retrieve tracked leads (admin only)
 */
export async function GET(request: NextRequest) {
  try {
    const leadsFile = path.join(process.cwd(), 'data', 'leads.txt');
    
    // Read leads file
    let content = '';
    try {
      content = await fs.readFile(leadsFile, 'utf-8');
    } catch {
      return NextResponse.json(
        { leads: [], message: 'No leads tracked yet' },
        { status: 200 }
      );
    }
    
    // Parse leads
    const leads = content
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const parts = line.split(' | ');
        const lead: any = {};
        parts.forEach(part => {
          const [key, value] = part.split(': ');
          lead[key.toLowerCase().replace(/\s+/g, '_')] = value;
        });
        return lead;
      });
    
    return NextResponse.json(
      { 
        success: true,
        totalLeads: leads.length,
        leads: leads 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error retrieving leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
