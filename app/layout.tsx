import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CookieBanner from '@/components/cookie-banner'
import PromoBanner from '@/components/promo-banner'
import MotionProvider from '@/components/motion/motion-provider'
import ScrollProgress from '@/components/motion/scroll-progress'
import AmbientBackground from '@/components/motion/ambient-background'
import Spotlight from '@/components/motion/spotlight'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trendsiptv.com'),
  title: 'IPTV Trends | Premium IPTV Subscription & Service in 4K',
  applicationName: 'IPTV Trends',
  description:
    'IPTV Trends is a premium IPTV service with 21,000+ live channels and 65,000+ movies in 4K. Plans from $5.42/month, free 24h trial, instant setup.',
  keywords: [
    'IPTV Trends',
    'iptv trends',
    'best IPTV service',
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
    'IPTV reseller',
  ],
  openGraph: {
    title: 'IPTV Trends | Premium IPTV Subscription & Service in 4K',
    description:
      'IPTV Trends streams 21,000+ live channels and 65,000+ movies and series in up to 4K UHD. Plans from $5.42/month, free 24-hour trial and instant setup on any device.',
    type: 'website',
    locale: 'en_US',
    siteName: 'IPTV Trends',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IPTV Trends premium IPTV subscription with 21,000+ live channels in 4K',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Trends | Premium IPTV Subscription & Service in 4K',
    description:
      '21,000+ live channels and 65,000+ movies and series in 4K. Plans from $5.42/month. Try IPTV Trends free for 24 hours.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
  themeColor: '#0a1022',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>
          <AmbientBackground />
          <ScrollProgress />
          <Spotlight />
          {children}
        </MotionProvider>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
