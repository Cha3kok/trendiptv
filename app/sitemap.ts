import { SITE_URL } from "@/lib/site"
import { MetadataRoute } from 'next'
import { products } from './products/data'
import { getAllPosts } from '../lib/blog'
import { LAST_UPDATED } from '../lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const posts = getAllPosts()
  // Real last-change dates only: Google ignores lastmod values that change on every request.
  const PLANS_UPDATED = new Date(LAST_UPDATED)
  const newestPost = posts.reduce((d, p) => ((p.updated || p.date) > d ? p.updated || p.date : d), LAST_UPDATED)

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: PLANS_UPDATED,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: PLANS_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...productRoutes,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca`,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(newestPost),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
