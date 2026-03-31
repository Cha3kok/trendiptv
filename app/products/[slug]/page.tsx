import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CheckCircle2,
  Star,
  ArrowRight,
  ChevronRight,
  Tv2,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  Clock,
} from 'lucide-react'
import { products, getProductBySlug } from '../data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `https://www.trendsiptv.com/products/${product.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.trendsiptv.com/products/${product.slug}`,
      type: 'website',
      images: [{ url: `/products/${product.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [`/products/${product.slug}/opengraph-image`],
    },
  }
}

const devices = [
  { name: 'Smart TV', icon: Tv2, desc: 'Samsung, LG, Sony, and all Android TV' },
  { name: 'Amazon Firestick', icon: Zap, desc: 'Fire TV Stick 4K, Fire TV Cube' },
  { name: 'Android', icon: Smartphone, desc: 'Phones, tablets, Android boxes' },
  { name: 'iOS / Apple TV', icon: Smartphone, desc: 'iPhone, iPad, Apple TV 4K' },
  { name: 'MAG Box', icon: Tv2, desc: 'MAG 254, 256, 322, 324, 420' },
  { name: 'PC / Mac', icon: Monitor, desc: 'Browser or VLC, any OS' },
]

const steps = [
  {
    n: '01',
    title: 'Order via WhatsApp',
    desc: 'Message us with your chosen plan. We\'ll confirm instantly and send a secure payment link.',
  },
  {
    n: '02',
    title: 'Receive Credentials',
    desc: 'Within minutes of payment, you\'ll receive your IPTV username, password, and server URL.',
  },
  {
    n: '03',
    title: 'Start Streaming',
    desc: 'Enter your credentials in any IPTV player (IPTV Smarters Pro, TiviMate) and enjoy.',
  },
]

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const otherProducts = products.filter((p) => p.id !== product.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription,
    image: `https://www.trendsiptv.com${product.image}`,
    sku: product.sku,
    mpn: product.sku,
    brand: { '@type': 'Brand', name: 'IPTV Trends' },
    category: 'IPTV Subscription',
    url: `https://www.trendsiptv.com/products/${product.slug}`,
    offers: {
      '@type': 'Offer',
      url: `https://www.trendsiptv.com/products/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'IPTV Trends',
        url: 'https://www.trendsiptv.com',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.ratingValue.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'James R.' },
        reviewBody: `The ${product.shortName} plan is exactly what I needed. Crystal clear 4K, zero buffering, and the support team is always available. Best IPTV service I've used.`,
        datePublished: '2026-02-14',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Maria S.' },
        reviewBody: `Switched from cable to IPTV Trends on the ${product.shortName} plan. ${product.reviewCount.toLocaleString()} reviews don't lie — this service is outstanding.`,
        datePublished: '2026-01-28',
      },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trendsiptv.com' },
      { '@type': 'ListItem', position: 2, name: 'IPTV Plans', item: 'https://www.trendsiptv.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.trendsiptv.com/products/${product.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 pt-28 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-foreground">Home</Link></li>
          <ChevronRight className="h-3.5 w-3.5" />
          <li><Link href="/products" className="hover:text-foreground">IPTV Plans</Link></li>
          <ChevronRight className="h-3.5 w-3.5" />
          <li className="text-foreground">{product.shortName} Plan</li>
        </ol>
      </nav>

      {/* Product Hero */}
      <section className="relative px-4 py-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              {product.badge && (
                <div className="absolute left-4 top-4 z-10 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                  {product.badge}
                </div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={450}
                className="w-full"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(product.ratingValue) ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.ratingValue} · {product.reviewCount.toLocaleString()} verified reviews
                </span>
              </div>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>

              {/* Price block */}
              <div className="mt-6 rounded-2xl border border-border/50 bg-card p-5">
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-extrabold text-primary">{product.priceFormatted}</span>
                  <div className="mb-1 flex flex-col text-sm text-muted-foreground">
                    <span>/ {product.period}</span>
                    <span>{product.billingLabel}</span>
                  </div>
                  {product.savings && (
                    <span className="mb-1 ml-auto rounded-full bg-primary/15 px-3 py-1 text-sm font-bold text-primary">
                      {product.savings}
                    </span>
                  )}
                </div>
                {product.savingsPercent && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Equivalent to <strong className="text-foreground">{product.pricePerMonth}/month</strong>
                    {' '}— the most affordable premium IPTV available.
                  </p>
                )}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://wa.me/212707711512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-glow flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
                  >
                    Order {product.shortName} Plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://wa.me/212707711512?text=I%20want%20a%2024h%20free%20IPTV%20trial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/50 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    Try Free for 24h
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  {['Instant Activation', '7-Day Refund', '24/7 Support', 'No Contract'].map((t) => (
                    <span key={t} className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article: Overview */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            About the {product.shortName} Plan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {product.articleIntro}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every IPTV Trends subscription — including the {product.shortName} plan — runs on our
            enterprise-grade server infrastructure with a guaranteed 99.9% uptime SLA. Our network
            spans multiple data centres across Europe, North America, and Asia, ensuring your stream
            stays stable regardless of your location or time zone. Activation is instant: within
            minutes of payment you receive your credentials via WhatsApp and can start streaming on
            any compatible device.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What&apos;s Included
          </h2>
          <p className="mt-2 text-muted-foreground">Everything you get with the {product.shortName} plan.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div key={feature.title} className="glass rounded-xl p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Full included list */}
          <div className="mt-8 glass rounded-2xl p-6 sm:p-8">
            <h3 className="font-semibold text-foreground">Full Plan Includes</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.included.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Who Is the {product.shortName} Plan For?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {product.targetAudience.map((audience) => (
              <div key={audience} className="glass flex items-start gap-3 rounded-xl p-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Compatible Devices</h2>
          <p className="mt-2 text-muted-foreground">
            The {product.shortName} plan works on every major streaming device.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device) => (
              <div key={device.name} className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <device.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{device.name}</p>
                  <p className="text-xs text-muted-foreground">{device.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            How to Get Started in 3 Steps
          </h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row">
            {steps.map((step) => (
              <div key={step.n} className="glass relative flex flex-1 flex-col rounded-2xl p-6">
                <span className="text-5xl font-extrabold text-primary/20 leading-none">{step.n}</span>
                <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Common questions about the {product.shortName} plan.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {product.faq.map((item) => (
              <div key={item.question} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Plans */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Other IPTV Plans</h2>
          <p className="mt-2 text-muted-foreground">Compare all available IPTV Trends subscriptions.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="glass group flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={450}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{p.shortName}</span>
                    {p.badge && (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-lg font-bold text-primary">{p.priceFormatted}</span>
                    <span className="text-xs text-muted-foreground">/ {p.period}</span>
                  </div>
                  {p.savings && (
                    <p className="mt-0.5 text-xs text-primary">{p.savings}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-20 pt-4">
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <Clock className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Ready to Start Streaming?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Order the {product.shortName} plan via WhatsApp. Activation is instant — you&apos;ll
              be streaming within minutes.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="https://wa.me/212707711512"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-glow inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
              >
                Order {product.shortName} — {product.priceFormatted}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View all plans
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
