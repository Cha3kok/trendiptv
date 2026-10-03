import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutIptvTrends from "@/components/about-iptv-trends"
import TrustMetrics from "@/components/trust-metrics"
import ChannelSearch from "@/components/channel-search"
import Pricing from "@/components/pricing"
import InstallationTabs from "@/components/installation-tabs"
import ComparisonTable from "@/components/comparison-table"
import ResellerCTA from "@/components/reseller-cta"
import LatestGuides from "@/components/latest-guides"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { FAQS, LAST_UPDATED, PLAN_PRICES, SITE } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "IPTV Trends | Premium IPTV Subscription & Service in 4K",
    description:
      "IPTV Trends streams 21,000+ live channels and 65,000+ movies and series in up to 4K UHD. Plans from $5.42/month, free 24-hour trial and instant setup on any device.",
    type: "website",
    url: SITE.url,
    siteName: "IPTV Trends",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "IPTV Trends premium IPTV subscription with 21,000+ live channels in 4K" }],
  },
}

// Rebuild the page at most once an hour so new blog guides appear in "Latest guides".
export const revalidate = 3600

const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`
const WEBPAGE_ID = `${SITE.url}/#webpage`
const PRODUCT_ID = `${SITE.url}/#product`

const description =
  "IPTV Trends is a premium IPTV subscription service streaming 21,000+ live TV channels and 65,000+ movies and series in up to 4K UHD on Smart TV, Firestick, Android, iOS, MAG and PC."

/**
 * One connected JSON-LD graph. Every value comes from lib/site.ts, the same data the
 * visible page renders, so structured data and on-page text never disagree.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: SITE.logo,
        width: 512,
        height: 512,
      },
      description,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer support",
        url: SITE.whatsapp,
        availableLanguage: SITE.languages,
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      sameAs: [SITE.whatsapp],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.alternateName,
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: SITE.url,
      name: "IPTV Trends | Premium IPTV Subscription & Service in 4K",
      description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      mainEntity: { "@id": PRODUCT_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE.url}/opengraph-image` },
      dateModified: LAST_UPDATED,
    },
    {
      "@type": "Product",
      "@id": PRODUCT_ID,
      name: "IPTV Trends Premium IPTV Subscription",
      description,
      brand: { "@type": "Brand", name: SITE.name },
      manufacturer: { "@id": ORG_ID },
      image: `${SITE.url}/opengraph-image`,
      category: "IPTV subscription",
      offers: PLAN_PRICES.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} IPTV Trends Plan`,
        price: plan.price.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
        url: `${SITE.url}/#pricing`,
        seller: { "@id": ORG_ID },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      isPartOf: { "@id": WEBPAGE_ID },
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <Hero />
      <AboutIptvTrends />
      <TrustMetrics />
      <ChannelSearch />
      <Pricing />
      <InstallationTabs />
      <ComparisonTable />
      <ResellerCTA />
      <LatestGuides />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
