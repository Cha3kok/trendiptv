import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/cookie-banner'
import PromoBanner from '@/components/promo-banner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trendsiptv.com'),
  title: 'IPTV Trends | #1 Best Premium IPTV Service 2026 - 21,000+ Channels in 4K',
  description:
    'IPTV Trends is the best premium IPTV subscription service in 2026. Stream 21,000+ live channels and 65,000+ movies & series in 4K UHD. No buffering, 99.9% uptime. Works on Smart TV, Firestick, Android, iOS & MAG. Try a 24h free IPTV trial today!',
  keywords: [
    'IPTV Trends',
    'iptv trends',
    'best IPTV service',
    'best IPTV service 2026',
    'premium IPTV subscription',
    'buy IPTV',
    'IPTV provider',
    'IPTV 4K',
    'cheap IPTV subscription',
    'IPTV Smarters',
    'Firestick IPTV',
    'IPTV free trial',
    'IPTV channels list',
    'IPTV streaming service',
    'IPTV subscription',
    'best IPTV provider',
    'IPTV reseller',
  ],
  openGraph: {
    title: 'IPTV Trends | #1 Best Premium IPTV Service 2026',
    description:
      'Stream 21,000+ live channels and 65,000+ movies in 4K UHD with IPTV Trends. The most reliable IPTV subscription service with anti-freeze technology and 99.9% uptime.',
    type: 'website',
    url: 'https://www.trendsiptv.com',
    locale: 'en_US',
    siteName: 'IPTV Trends',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IPTV Trends – #1 Premium IPTV Service 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Trends | Best Premium IPTV Subscription 2026',
    description:
      'The #1 IPTV service with 21,000+ channels, 65,000+ VOD, anti-freeze tech & 4K quality. Try IPTV Trends free for 24 hours.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.trendsiptv.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
