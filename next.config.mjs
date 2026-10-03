/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Stop browsers guessing file types (prevents some injection attacks)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Send only the domain, not the full URL, when visitors follow external links
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Block the site from being embedded in other sites' frames (clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
  // Turn off browser features the site never uses
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  // Force HTTPS for two years (Vercel also sends this)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig = {
  // Don't advertise the framework in an X-Powered-By header
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // The same deployment is also reachable on *.vercel.app. Keep that copy out of search results
      // so Google only indexes the real domain.
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(?<project>.*)\\.vercel\\.app' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
}

export default nextConfig
