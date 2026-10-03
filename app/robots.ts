import { SITE_URL } from "@/lib/site"
import { MetadataRoute } from 'next'

// AI search crawlers that decide whether a page can be cited in AI answers.
// Listed explicitly so they stay allowed even if the default rule changes later.
const AI_SEARCH_CRAWLERS = [
  'OAI-SearchBot', // ChatGPT Search
  'ChatGPT-User', // ChatGPT browsing for a user
  'Claude-SearchBot', // Claude search results
  'Claude-User', // Claude browsing for a user
  'PerplexityBot', // Perplexity search
  'Applebot', // Siri, Spotlight and Safari suggestions
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/', // أي بلاصة مابغيتيش Google يدخل ليها
      },
      {
        userAgent: AI_SEARCH_CRAWLERS,
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
