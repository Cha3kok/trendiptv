import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustMetrics from "@/components/trust-metrics"
import ChannelSearch from "@/components/channel-search"
import Pricing from "@/components/pricing"
import InstallationTabs from "@/components/installation-tabs"
import ComparisonTable from "@/components/comparison-table"
import ResellerCTA from "@/components/reseller-cta"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.trendsiptv.com/#organization",
  name: "IPTV Trends",
  url: "https://www.trendsiptv.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.trendsiptv.com/icon.svg",
    width: 512,
    height: 512,
  },
  description:
    "IPTV Trends is the best premium IPTV subscription service in 2026. Stream 21,000+ live channels and 65,000+ movies & series in 4K UHD on any device.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-707-711512",
    contactType: "customer service",
    availableLanguage: ["English", "French", "Arabic", "Spanish"],
  },
  sameAs: [
    "https://wa.me/212707711512",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.trendsiptv.com/#website",
  name: "IPTV Trends",
  url: "https://www.trendsiptv.com",
  publisher: {
    "@id": "https://www.trendsiptv.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.trendsiptv.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IPTV Trends and why is it the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Trends is a premium IPTV subscription service that provides access to over 21,000 live TV channels and 65,000+ movies and series in 4K UHD quality. We are rated the #1 IPTV service in 2026 by thousands of satisfied subscribers worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an IPTV Trends subscription cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Trends offers flexible plans starting from $19.99/month. Plans include: 1 Month at $19.99, 3 Months at $39.99, 6 Months at $55.99, 12 Months at $79.99, and 24 Months at $129.99. All plans include 21,000+ channels, 65,000+ VOD, 4K quality, and anti-freeze technology.",
      },
    },
    {
      "@type": "Question",
      name: "Does IPTV Trends offer a free IPTV trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! IPTV Trends offers a free 24-hour IPTV trial so you can test our service quality, channel lineup, and streaming stability before committing to a paid subscription.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install and set up IPTV Trends on my device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setting up IPTV Trends takes under 5 minutes. Download a compatible IPTV player (IPTV Smarters Pro, TiviMate) on your Smart TV, Firestick, Android, iOS, or MAG box, enter your credentials, and start streaming.",
      },
    },
    {
      "@type": "Question",
      name: "What channels are included in the IPTV Trends channel list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV Trends includes 21,000+ live channels from every country: sports (beIN Sports, Sky Sports, ESPN), entertainment (HBO, Showtime), streaming content, news, kids, and international channels. Plus 65,000+ VOD movies and series.",
      },
    },
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Trends Premium Subscription",
  description:
    "Best IPTV subscription service with 21,000+ live channels, 65,000+ VOD, 4K UHD streaming, anti-freeze technology, and 99.9% uptime.",
  brand: { "@type": "Brand", name: "IPTV Trends" },
  image: "https://www.trendsiptv.com/opengraph-image",
  offers: [
    {
      "@type": "Offer",
      name: "1 Month IPTV Plan",
      price: "19.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://www.trendsiptv.com/#pricing",
    },
    {
      "@type": "Offer",
      name: "3 Months IPTV Plan",
      price: "39.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://www.trendsiptv.com/#pricing",
    },
    {
      "@type": "Offer",
      name: "6 Months IPTV Plan",
      price: "55.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://www.trendsiptv.com/#pricing",
    },
    {
      "@type": "Offer",
      name: "12 Months IPTV Plan",
      price: "79.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://www.trendsiptv.com/#pricing",
    },
    {
      "@type": "Offer",
      name: "24 Months IPTV Plan",
      price: "129.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      url: "https://www.trendsiptv.com/#pricing",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12847",
    bestRating: "5",
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* JSON-LD Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Navbar />
      <Hero />
      <TrustMetrics />
      <ChannelSearch />
      <Pricing />
      <InstallationTabs />
      <ComparisonTable />
      <ResellerCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
