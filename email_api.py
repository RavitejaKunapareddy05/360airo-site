from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
import logging
from datetime import datetime

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# CORS configuration
CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

# Email configuration - Only using Gmail credentials from .env
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
GMAIL_USER = os.getenv('GMAIL_USER')  # Your Gmail from .env
GMAIL_APP_PASSWORD = os.getenv('GMAIL_APP_PASSWORD')  # Your App Password from .env

# Store subscriptions
subscriptions = []

class EmailService:
    def __init__(self):
        self.smtp_server = SMTP_SERVER
        self.smtp_port = SMTP_PORT
        self.sender_email = GMAIL_USER  # Using Gmail as sender
        self.sender_password = GMAIL_APP_PASSWORD
        # No admin email - sending notifications to yourself (GMAIL_USER)
    
    def get_current_timestamp(self):
        """Get current timestamp in readable format"""
        return datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    def test_smtp_connection(self):
        """Test SMTP connection with your Gmail credentials"""
        try:
            logger.info("🔧 Testing Gmail SMTP connection...")
            logger.info(f"   Server: {self.smtp_server}:{self.smtp_port}")
            logger.info(f"   Gmail User: {self.sender_email}")
            
            if not self.sender_email or not self.sender_password:
                logger.error("❌ Gmail credentials missing from .env file")
                return False
            
            # Test connection
            server = smtplib.SMTP(self.smtp_server, self.smtp_port, timeout=10)
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(self.sender_email, self.sender_password)
            server.quit()
            
            logger.info("✅ Gmail SMTP connection successful!")
            return True
            
        except smtplib.SMTPAuthenticationError as e:
            logger.error(f"❌ Gmail authentication failed: {str(e)}")
            logger.error("💡 Check your GMAIL_APP_PASSWORD in .env file")
            return False
        except Exception as e:
            logger.error(f"❌ Connection error: {str(e)}")
            return False
    
    def send_subscription_notification(self, subscriber_email):
        """Send email notification to yourself about new subscription"""
        try:
            # Validate credentials
            if not self.sender_email:
                return False, "GMAIL_USER not found in .env file"
            if not self.sender_password:
                return False, "GMAIL_APP_PASSWORD not found in .env file"
            
            # Create message - sending to yourself
            message = MIMEMultipart()
            message['From'] = self.sender_email
            message['To'] = self.sender_email  # Sending to yourself
            message['Subject'] = '🎉 New Newsletter Subscription - 360airo'
            
            # HTML email body
            body = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                    .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: linear-gradient(135deg, #b45ecf, #480056); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }}
                    .content {{ background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }}
                    .subscriber-email {{ background: #e8f4fd; padding: 15px; border-radius: 5px; font-weight: bold; color: #b45ecf; font-size: 18px; text-align: center; }}
                    .footer {{ text-align: center; margin-top: 20px; color: #666; font-size: 12px; }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🚀 New Newsletter Subscriber!</h1>
                        <p>360airo AI-Powered Prospecting</p>
                    </div>
                    <div class="content">
                        <h2>Congratulations! 🎊</h2>
                        <p>You have a new subscriber to your 360airo newsletter:</p>
                        
                        <div class="subscriber-email">
                            📧 {subscriber_email}
                        </div>
                        
                        <p><strong>Subscription Details:</strong></p>
                        <ul>
                            <li><strong>Subscriber Email:</strong> {subscriber_email}</li>
                            <li><strong>Your Gmail:</strong> {self.sender_email}</li>
                            <li><strong>Timestamp:</strong> {self.get_current_timestamp()}</li>
                            <li><strong>Source:</strong> 360airo Website Footer</li>
                        </ul>
                        
                        <p><strong>Total Subscribers:</strong> {len(subscriptions) + 1}</p>
                    </div>
                    <div class="footer">
                        <p>Automated notification from your 360airo Python Backend</p>
                    </div>
                </div>
            </body>
            </html>
            """
            
            message.attach(MIMEText(body, 'html'))
            
            # Send email using Gmail SMTP
            logger.info(f"📤 Sending subscription notification from {self.sender_email} to {self.sender_email}")
            
            with smtplib.SMTP(self.smtp_server, self.smtp_port, timeout=10) as server:
                server.starttls()
                server.login(self.sender_email, self.sender_password)
                server.send_message(message)
            
            logger.info(f"✅ Notification email sent successfully! Subscriber: {subscriber_email}")
            return True, "Subscription notification sent successfully"
            
        except smtplib.SMTPAuthenticationError as e:
            error_msg = "Gmail authentication failed. Check your GMAIL_APP_PASSWORD in .env file."
            logger.error(f"❌ {error_msg}: {str(e)}")
            return False, error_msg
        except Exception as e:
            error_msg = f"Failed to send email: {str(e)}"
            logger.error(f"❌ {error_msg}")
            return False, error_msg

# Initialize email service
email_service = EmailService()

@app.route('/api/subscribe', methods=['POST', 'OPTIONS'])
def subscribe():
    """Handle newsletter subscription"""
    if request.method == 'OPTIONS':
        return '', 200
    
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No JSON data received'}), 400
        
        email = data.get('email', '').strip().lower()
        
        # Validate email
        if not email:
            return jsonify({'error': 'Email is required'}), 400
        
        # Simple email validation
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Please enter a valid email address'}), 400
        
        # Check for duplicate subscription
        if email in subscriptions:
            return jsonify({'error': 'This email is already subscribed'}), 409
        
        logger.info(f"📝 Processing new subscription: {email}")
        
        # Send email notification to yourself
        success, message = email_service.send_subscription_notification(email)
        
        if success:
            # Add to subscriptions only if email was sent successfully
            subscriptions.append(email)
            logger.info(f"✅ New subscription completed: {email}")
            return jsonify({
                'success': True,
                'message': 'Successfully subscribed to newsletter!',
                'email': email,
                'timestamp': email_service.get_current_timestamp(),
                'total_subscribers': len(subscriptions)
            }), 200
        else:
            return jsonify({'error': message}), 500
            
    except Exception as e:
        logger.error(f"❌ Subscription endpoint error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    # Test SMTP connection
    smtp_status = email_service.test_smtp_connection()
    
    return jsonify({
        'status': 'healthy',
        'service': '360airo Newsletter API',
        'timestamp': email_service.get_current_timestamp(),
        'smtp_connection': 'connected' if smtp_status else 'failed',
        'gmail_user': GMAIL_USER,
        'gmail_app_password_set': bool(GMAIL_APP_PASSWORD),
        'subscriptions_count': len(subscriptions),
        'backend': 'Python Flask'
    })

@app.route('/api/subscriptions', methods=['GET'])
def get_subscriptions():
    """Get all subscriptions (for testing)"""
    return jsonify({
        'subscriptions': subscriptions,
        'count': len(subscriptions),
        'timestamp': email_service.get_current_timestamp()
    })

@app.route('/api/test-email', methods=['POST'])
def test_email():
    """Test email sending functionality"""
    try:
        test_email = "test@example.com"
        success, message = email_service.send_subscription_notification(test_email)
        
        return jsonify({
            'success': success,
            'message': message,
            'test_email': test_email,
            'timestamp': email_service.get_current_timestamp()
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Add CORS headers to all responses
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

if __name__ == '__main__':
    # Display startup information
    logger.info("=" * 50)
    logger.info("🚀 Starting 360airo Newsletter API")
    logger.info("=" * 50)
    
    # Validate environment variables
    if not GMAIL_USER:
        logger.error("❌ GMAIL_USER not found in .env file")
    else:
        logger.info(f"✅ GMAIL_USER loaded: {GMAIL_USER}")
    
    if not GMAIL_APP_PASSWORD:
        logger.error("❌ GMAIL_APP_PASSWORD not found in .env file")
    else:
        logger.info(f"✅ GMAIL_APP_PASSWORD loaded: {'*' * len(GMAIL_APP_PASSWORD)}")
    
    logger.info(f"🔧 SMTP Server: {SMTP_SERVER}:{SMTP_PORT}")
    logger.info(f"🌐 CORS enabled for: http://localhost:3000")
    
    # Test SMTP connection on startup
    email_service.test_smtp_connection()
    
    logger.info("🌐 Server starting on http://localhost:5000")
    logger.info("=" * 50)
    
    app.run(host='0.0.0.0', port=5000, debug=True)