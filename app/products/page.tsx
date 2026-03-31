import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Star, Zap, ArrowRight } from 'lucide-react'
import { products } from './data'

export const metadata: Metadata = {
  title: 'IPTV Subscription Plans 2026 – All Plans & Pricing | IPTV Trends',
  description:
    'Browse all IPTV Trends subscription plans: 1 month ($19.99), 3 months ($39.99), 6 months ($55.99), 12 months ($79.99), and 24 months ($129.99). 21,000+ channels, 4K UHD, anti-freeze technology.',
  alternates: { canonical: 'https://www.trendsiptv.com/products' },
  openGraph: {
    title: 'All IPTV Subscription Plans | IPTV Trends',
    description: 'Choose your IPTV Trends plan. Starting from $5.42/month. 21,000+ channels, 4K UHD, instant activation.',
    url: 'https://www.trendsiptv.com/products',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'IPTV Trends Subscription Plans',
  description: 'All available IPTV subscription plans from IPTV Trends',
  url: 'https://www.trendsiptv.com/products',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      url: `https://www.trendsiptv.com/products/${p.slug}`,
      image: `https://www.trendsiptv.com${p.image}`,
      description: p.metaDescription,
      offers: {
        '@type': 'Offer',
        price: p.price.toFixed(2),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
      },
    },
  })),
}

const devices = ['Smart TV', 'Firestick', 'Android', 'iOS', 'MAG Box', 'PC / Mac']

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
          <div className="mt-8 h-[500px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-3.5 w-3.5" />
            Premium IPTV Plans — Instant Activation
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            IPTV Subscription Plans
            <span className="block text-primary">for Every Budget</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose your perfect IPTV Trends plan. All plans include 21,000+ live channels,
            65,000+ VOD, 4K UHD quality, and anti-freeze technology. No contracts, instant
            activation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['99.9% Uptime', '24/7 Support', '7-Day Refund', 'All Devices'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className={`glass group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                  product.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {product.badge && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {product.badge}
                  </div>
                )}

                {/* Product image */}
                <Link href={`/products/${product.slug}`} className="block overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={450}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                    priority={product.popular}
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.round(product.ratingValue)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.ratingValue} ({product.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Plan name & tagline */}
                  <h2 className="mt-3 text-xl font-bold text-foreground">
                    {product.shortName} Plan
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>

                  {/* Price */}
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-primary">
                      {product.priceFormatted}
                    </span>
                    <span className="mb-0.5 text-sm text-muted-foreground">
                      / {product.period}
                    </span>
                    {product.savings && (
                      <span className="mb-0.5 ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        {product.savings}
                      </span>
                    )}
                  </div>
                  {product.savingsPercent && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product.pricePerMonth}/month · {product.billingLabel}
                    </p>
                  )}

                  {/* Top features */}
                  <ul className="mt-4 flex flex-col gap-2">
                    {product.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {f.title}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href="https://wa.me/212707711512"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`neon-glow flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all hover:brightness-110 ${
                        product.popular
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/90 text-primary-foreground'
                      }`}
                    >
                      Get {product.shortName} Plan
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-border/50 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Works on All Your Devices
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every IPTV Trends plan is compatible with all major streaming devices.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {devices.map((device) => (
              <span
                key={device}
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
              >
                {device}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <div className="mb-3 text-4xl">📺</div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Not Sure Which Plan to Choose?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Try our service free for 24 hours — no payment needed. Test every channel,
              movie, and feature before committing to any plan.
            </p>
            <Link
              href="https://wa.me/212707711512?text=I%20want%20a%2024h%20free%20IPTV%20trial"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Start Free 24h Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
