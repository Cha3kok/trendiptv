import { MetadataRoute } from 'next'
import { products } from './products/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trendsiptv.com'

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date('2026-03-31'),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date('2026-03-31'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...productRoutes,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
