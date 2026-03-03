import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // أي بلاصة مابغيتيش Google يدخل ليها
    },
    sitemap: 'https://www.trendsiptv.com/sitemap.xml',
  }
}
