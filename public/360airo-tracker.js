/**
 * 360AIRO Lead Tracker SDK v2.0
 * Lightweight JavaScript tracker for identifying and capturing website leads with IP tracking
 * 
 * ============================================================
 * COPY & PASTE THIS INTO YOUR HTML PAGE (in the <head> or before </body>):
 * ============================================================
 * 
 * <script>
 *   window.AIRO_CONFIG = {
 *     apiKey: 'your-api-key-here',
 *     accountId: 'your-account-id'
 *     // trackingEndpoint is auto-detected from current domain
 *   };
 * </script>
 * <script src="/360airo-tracker.js"></script>
 * 
 * That's it! All visitors will be tracked automatically.
 * Endpoints will be auto-detected: /api/leads/track
 * ============================================================
 */

(function() {
  'use strict';

  const Airo360Tracker = {
    config: {
      apiKey: window.AIRO_CONFIG?.apiKey || null,
      trackingEndpoint: window.AIRO_CONFIG?.trackingEndpoint || (() => {
        // Auto-detect tracking endpoint - works on both localhost and live
        const protocol = window.location.protocol; // https: or http:
        const host = window.location.host; // domain.com or localhost:3000
        return `${protocol}//${host}/api/leads/track`;
      })(),
      accountId: window.AIRO_CONFIG?.accountId || null,
      batchSize: 5,
      flushInterval: 30000,
      version: '2.0.0'
    },
    
    queue: [],
    sessionId: null,
    visitorId: null,
    visitorIP: null,
    
    /**
     * Initialize the tracker
     */
    init: function() {
      this.sessionId = this.getOrCreateSession();
      this.visitorId = this.generateVisitorId();
      
      // Get visitor IP
      this.getVisitorIP();
      
      // Track page view
      this.trackPageView();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start batch flush timer
      this.startFlushTimer();
      
      console.log('[360AIRO] Tracker initialized - Session:', this.sessionId);
    },
    
    /**
     * Get visitor IP address from IP API
     */
    getVisitorIP: function() {
      const self = this;
      fetch('https://api.ipify.org?format=json', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          self.visitorIP = data.ip;
          console.log('[360AIRO] Visitor IP:', self.visitorIP);
        })
        .catch(err => {
          console.warn('[360AIRO] Could not fetch IP:', err);
          self.visitorIP = 'Unknown';
        });
    },
    
    /**
     * Get or create session ID
     */
    getOrCreateSession: function() {
      let sessionId = this.getSessionStorage('airo_session_id');
      if (!sessionId) {
        sessionId = this.generateSessionId();
        this.setSessionStorage('airo_session_id', sessionId);
      }
      return sessionId;
    },
    
    /**
     * Generate unique session ID
     */
    generateSessionId: function() {
      return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    /**
     * Generate unique visitor ID
     */
    generateVisitorId: function() {
      let visitorId = this.getLocalStorage('airo_visitor_id');
      if (!visitorId) {
        visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        this.setLocalStorage('airo_visitor_id', visitorId);
      }
      return visitorId;
    },
    
    /**
     * Track page view
     */
    trackPageView: function() {
      this.captureEvent({
        type: 'pageview',
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      });
    },
    
    /**
     * Track custom event
     */
    trackEvent: function(eventName, eventData) {
      this.captureEvent({
        type: 'event',
        name: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
      });
    },
    
    /**
     * Track form submission
     */
    trackFormSubmission: function(formElement, leadData) {
      const event = {
        type: 'form_submission',
        formData: this.extractFormData(formElement),
        leadData: leadData || {},
        timestamp: new Date().toISOString()
      };
      
      this.captureEvent(event);
      this.flush();
    },
    
    /**
     * Identify lead with email or name
     */
    identifyLead: function(leadInfo) {
      this.captureEvent({
        type: 'lead_identified',
        email: leadInfo.email || null,
        name: leadInfo.name || null,
        company: leadInfo.company || null,
        phone: leadInfo.phone || null,
        customFields: leadInfo.customFields || {},
        timestamp: new Date().toISOString()
      });
      
      this.flush();
    },
    
    /**
     * Capture internal event with IP
     */
    captureEvent: function(event) {
      const enrichedEvent = {
        ...event,
        sessionId: this.sessionId,
        visitorId: this.visitorId,
        ip: this.visitorIP || 'Unknown',
        accountId: this.config.accountId,
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screenResolution: window.innerWidth + 'x' + window.innerHeight,
        timestamp: event.timestamp || new Date().toISOString()
      };
      
      this.queue.push(enrichedEvent);
      
      if (this.queue.length >= this.config.batchSize) {
        this.flush();
      }
    },
    
    /**
     * Extract form data
     */
    extractFormData: function(formElement) {
      const formData = new FormData(formElement);
      const data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }
      return data;
    },
    
    /**
     * Flush queued events to server
     */
    flush: function() {
      if (this.queue.length === 0) return;
      
      const payload = {
        events: this.queue,
        timestamp: new Date().toISOString()
      };
      
      if (navigator.sendBeacon) {
        navigator.sendBeacon(this.config.trackingEndpoint, JSON.stringify(payload));
      } else {
        fetch(this.config.trackingEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => console.error('[360AIRO] Tracking error:', err));
      }
      
      this.queue = [];
    },
    
    /**
     * Start periodic flush timer
     */
    startFlushTimer: function() {
      setInterval(() => {
        if (this.queue.length > 0) {
          this.flush();
        }
      }, this.config.flushInterval);
      
      window.addEventListener('beforeunload', () => {
        this.flush();
      });
    },
    
    /**
     * Setup automatic event listeners
     */
    setupEventListeners: function() {
      document.addEventListener('submit', (e) => {
        if (e.target && e.target.tagName === 'FORM') {
          this.trackFormSubmission(e.target);
        }
      });
      
      document.addEventListener('click', (e) => {
        if (e.target && (e.target.hasAttribute('data-track') || e.target.classList.contains('cta-button'))) {
          this.trackEvent('cta_click', {
            buttonText: e.target.textContent,
            buttonId: e.target.id,
            buttonClass: e.target.className
          });
        }
      });
      
      let scrollTracked = false;
      window.addEventListener('scroll', () => {
        if (!scrollTracked && (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) > 0.5) {
          this.trackEvent('scroll_depth', { depth: '50%' });
          scrollTracked = true;
        }
      });
    },
    
    /**
     * Local storage helper
     */
    setLocalStorage: function(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.warn('[360AIRO] localStorage not available');
      }
    },
    
    /**
     * Local storage getter
     */
    getLocalStorage: function(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    },
    
    /**
     * Session storage setter
     */
    setSessionStorage: function(key, value) {
      try {
        sessionStorage.setItem(key, value);
      } catch (e) {
        console.warn('[360AIRO] sessionStorage not available');
      }
    },
    
    /**
     * Session storage getter
     */
    getSessionStorage: function(key) {
      try {
        return sessionStorage.getItem(key);
      } catch (e) {
        return null;
      }
    }
  };
  
  // Expose globally
  window.Airo360Tracker = Airo360Tracker;
  
  // Auto-init
  document.addEventListener('DOMContentLoaded', function() {
    Airo360Tracker.init();
  });
})();
