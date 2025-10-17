import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#b45ecf]/20 bg-[#19001d]/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">360airo</h3>
            <p className="text-white/70 text-sm">
              AI-powered email outreach platform for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#b45ecf] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#b45ecf]/20 mt-12 pt-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} 360airo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
