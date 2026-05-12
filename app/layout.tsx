import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // ✅ Added for Next.js optimized script loading
import { FreeToolsAuthProvider } from '@/app/contexts/FreeToolsAuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '360airo - AI-Powered Email Outreach Platform',
  description:
    "360Airo is an AI-driven multichannel outreach platform that reaches prospects where they're most active while keeping every message personal, timely, and effective.",

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KRZT42V5');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* ✅ Basic Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* ✅ Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Open Graph & Social Meta */}
        <meta property="og:site_name" content="360Airo" />
        <meta property="og:title" content="360Airo - AI-Powered Email Outreach Platform" />
        <meta
          property="og:description"
          content="360Airo is an AI-driven multichannel outreach platform that reaches prospects where they're most active while keeping every message personal, timely, and effective."
        />
        <meta property="og:image" content="https://360airo.com/favicon.svg" />
        <meta name="twitter:image" content="https://360airo.com/favicon.svg" />

        {/* ✅ Schema Markup for Google (Logo in Search Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://360airo.com",
              "logo": "https://360airo.com/favicon.svg",
              "name": "360Airo",
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRZT42V5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <FreeToolsAuthProvider>
          {children}
        </FreeToolsAuthProvider>
      </body>
    </html>
  );
}
