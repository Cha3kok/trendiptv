import { SITE_HOST } from "@/lib/site"
import { ImageResponse } from 'next/og'
import { products } from '../data'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  const name = product?.shortName ?? 'IPTV Plan'
  const price = product?.priceFormatted ?? ''
  const perMonth = product?.pricePerMonth ?? ''
  const savings = product?.savings ?? ''
  const badge = product?.badge ?? ''
  const tagline = product?.tagline ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a1022',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 800,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,122,47,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Border frame */}
        <div
          style={{
            position: 'absolute',
            inset: 24,
            borderRadius: 20,
            border: '1px solid rgba(255,122,47,0.25)',
            display: 'flex',
          }}
        />

        {/* Badge */}
        {badge && (
          <div
            style={{
              position: 'absolute',
              top: 48,
              right: 48,
              background: '#ff7a2f',
              borderRadius: 999,
              padding: '8px 20px',
              display: 'flex',
            }}
          >
            <span style={{ color: '#0a1022', fontSize: 15, fontWeight: 800, letterSpacing: 1 }}>
              {badge}
            </span>
          </div>
        )}

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 28 }}>
          <svg width="36" height="36" viewBox="0 0 48 48" style={{ marginRight: 10 }}>
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff6a1f" />
                <stop offset="1" stopColor="#ffb347" />
              </linearGradient>
            </defs>
            <rect width="48" height="48" rx="13" fill="url(#g)" />
            <path d="M16 12.5 L36 24 L16 35.5 Z" fill="#0a1022" stroke="#0a1022" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M19 29.5 L23.5 25 L26.5 27.5 L31.5 21.5" fill="none" stroke="#ff9a3c" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28.4 21.3 L31.7 21.3 L31.7 24.6" fill="none" stroke="#ff9a3c" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: '#f4f6fb', fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>IPTV</span>
          <span style={{ color: '#ff7a2f', fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>TRENDS</span>
        </div>

        {/* Plan name */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
          <span style={{ color: '#f4f6fb', fontSize: 72, fontWeight: 900, letterSpacing: -3, lineHeight: 1 }}>
            {name}
          </span>
          <span style={{ color: 'rgba(245,245,245,0.4)', fontSize: 24, fontWeight: 500 }}>PLAN</span>
        </div>

        {/* Tagline */}
        <div style={{ color: 'rgba(245,245,245,0.55)', fontSize: 22, marginBottom: 40, maxWidth: 700, textAlign: 'center' }}>
          {tagline}
        </div>

        {/* Price block */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            background: 'rgba(255,122,47,0.08)',
            border: '1px solid rgba(255,122,47,0.25)',
            borderRadius: 16,
            padding: '20px 40px',
            marginBottom: 40,
          }}
        >
          <span style={{ color: '#ff7a2f', fontSize: 64, fontWeight: 900, letterSpacing: -2, lineHeight: 1 }}>
            {price}
          </span>
          {perMonth && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ color: 'rgba(245,245,245,0.5)', fontSize: 16 }}>{perMonth}/month</span>
              {savings && (
                <span style={{ color: '#ff7a2f', fontSize: 16, fontWeight: 700 }}>{savings}</span>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { value: '21,000+', label: 'Live Channels' },
            { value: '4K UHD', label: 'Quality' },
            { value: '99.9%', label: 'Uptime' },
            { value: 'Instant', label: 'Activation' },
          ].map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <span style={{ color: '#ff7a2f', fontSize: 22, fontWeight: 800 }}>{s.value}</span>
              <span style={{ color: 'rgba(245,245,245,0.4)', fontSize: 13 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: 36, display: 'flex' }}>
          <span style={{ color: 'rgba(255,122,47,0.5)', fontSize: 14 }}>{SITE_HOST}</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
