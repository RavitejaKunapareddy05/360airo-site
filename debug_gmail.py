import smtplib
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def debug_gmail_connection():
    print("🔍 DEBUGGING GMAIL CONNECTION")
    print("=" * 50)
    
    # Check environment variables
    email = os.getenv('GMAIL_USER')
    password = os.getenv('GMAIL_APP_PASSWORD')
    
    print(f"📧 GMAIL_USER: {email}")
    print(f"🔑 GMAIL_APP_PASSWORD: {'*' * len(password) if password else 'NOT FOUND'}")
    print(f"📏 Password length: {len(password) if password else 0}")
    
    if not email:
        print("❌ GMAIL_USER is missing from .env file")
        return
        
    if not password:
        print("❌ GMAIL_APP_PASSWORD is missing from .env file")
        return
    
    # Test SMTP connection
    try:
        print("\n🔄 Testing SMTP connection...")
        server = smtplib.SMTP('smtp.gmail.com', 587)
        print("✅ Connected to SMTP server")
        
        server.starttls()
        print("✅ TLS encryption started")
        
        print("🔄 Attempting login...")
        server.login(email, password)
        print("🎉 SUCCESS: Gmail authentication working!")
        
        server.quit()
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        print(f"❌ AUTHENTICATION FAILED: {e}")
        print("\n💡 TROUBLESHOOTING STEPS:")
        print("1. Make sure you have 2-Factor Authentication enabled")
        print("2. Generate a NEW App Password at: https://myaccount.google.com/apppasswords")
        print("3. Select 'Mail' as the app and 'Other' as device")
        print("4. Copy the 16-character password (no spaces)")
        print("5. Make sure your .env file has no quotes around the password")
        return False
        
    except Exception as e:
        print(f"❌ CONNECTION ERROR: {e}")
        return False

if __name__ == "__main__":
    debug_gmail_connection()