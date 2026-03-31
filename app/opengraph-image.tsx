import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'IPTV Trends – #1 Premium IPTV Service 2026 with 21,000+ Channels in 4K'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
          background: '#050505',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Background glow top */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Background glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Border frame */}
        <div
          style={{
            position: 'absolute',
            inset: 24,
            borderRadius: 20,
            border: '1px solid rgba(16,185,129,0.2)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(16,185,129,0.12)',
              border: '1px solid rgba(16,185,129,0.35)',
              borderRadius: 999,
              padding: '8px 20px',
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            <span
              style={{
                color: '#10b981',
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              #1 Best IPTV Service 2026 • Buffer-Free 4K Streaming
            </span>
          </div>

          {/* Logo / Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              marginBottom: 20,
            }}
          >
            <span style={{ color: '#f5f5f5', fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
              IPTV
            </span>
            <span style={{ color: '#10b981', fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
              {' '}Trends
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              color: '#f5f5f5',
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            Premium IPTV Subscription with{' '}
            <span style={{ color: '#10b981' }}>21,000+ Live Channels</span>{' '}
            & 65,000+ Movies in 4K
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              marginBottom: 36,
            }}
          >
            {[
              { value: '21,000+', label: 'Live Channels' },
              { value: '65,000+', label: 'VOD Library' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4K UHD', label: 'Quality' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    color: '#10b981',
                    fontSize: 28,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: '#6b7280',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Devices */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {['Smart TV', 'Firestick', 'Android', 'iOS', 'MAG Box', 'PC'].map((device, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 999,
                  padding: '6px 14px',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.7)',
                  }}
                />
                <span style={{ color: '#9ca3af', fontSize: 13, fontWeight: 500 }}>{device}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: 'rgba(16,185,129,0.6)', fontSize: 15, fontWeight: 500 }}>
            www.trendsiptv.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
