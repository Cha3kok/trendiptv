import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'IPTV Trends - The Ultimate 4K Entertainment Hub',
  description:
    'IPTV Trends: Access 20,000+ Premium Channels and 60,000+ Movies & Series. No Buffering. No Limits. Works on all devices.',
  keywords: ['IPTV Trends', 'IPTV', 'iptv trends', 'streaming', '4K', 'channels', 'movies', 'series', 'entertainment', 'best IPTV service'],
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
        <Analytics />
      </body>
    </html>
  )
}
