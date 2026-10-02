import { notFound } from "next/navigation"
import Image from "next/image"
import { getAllPostSlugs, getAllPosts, getPostBySlug } from "@/lib/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Reveal } from "@/components/motion/reveal"
import { whatsappLink, INTENT } from "@/lib/whatsapp"
import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react"
import type { Metadata } from "next"

export const dynamicParams = true

const SITE = "https://www.trendsiptv.com"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

function formatDate(date: string) {
  const d = new Date(date)
  return Number.isNaN(d.getTime())
    ? date
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const url = `${SITE}/blog/${slug}`
  const image = post.image ? `${SITE}${post.image}` : `${SITE}/opengraph-image`
  return {
    title: `${post.seoTitle} | IPTV Trends`,
    description: post.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const url = `${SITE}/blog/${slug}`
  const wasUpdated = post.updated && post.updated !== post.date

  // Related guides: posts sharing the most tags, then the newest.
  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({ post: p, shared: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((a, b) => b.shared - a.shared || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, 3)
    .map((r) => r.post)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.seoDescription,
        url,
        mainEntityOfPage: url,
        image: post.image ? [`${SITE}${post.image}`] : undefined,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        inLanguage: "en",
        keywords: post.tags.join(", "),
        author: {
          "@type": "Organization",
          name: post.author,
          url: `${SITE}/about#editorial-team`,
        },
        publisher: { "@id": `${SITE}/#organization` },
        isPartOf: { "@type": "Blog", "@id": `${SITE}/blog#blog`, name: "IPTV Trends Blog", url: `${SITE}/blog` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <article className="pt-40 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header: rendered visible immediately (no fade) so it never delays LCP */}
          <header className="mb-8">
            {post.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Published <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {wasUpdated && (
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" />
                  Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <Link href="/about#editorial-team" className="hover:text-primary hover:underline">
                  {post.author}
                </Link>
              </span>
            </div>
          </header>

          {/* Cover image: the page's largest element, so it loads first */}
          {post.image && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-border/30 bg-secondary/30">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* CTA */}
          <Reveal className="mt-16 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">Ready to Start Streaming?</h2>
            <p className="mt-2 text-muted-foreground">
              Get instant access to 21,000+ channels and 65,000+ movies in 4K UHD.
            </p>
            <Link
              href={whatsappLink({ intent: INTENT.trial, button: "Get Your Free 24h Trial", section: "End-of-article banner", page: `/blog/${slug}` })}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Get Your Free 24h Trial
            </Link>
          </Reveal>

          {/* Related guides */}
          {related.length > 0 && (
            <section aria-labelledby="related-title" className="mt-16">
              <h2 id="related-title" className="text-2xl font-bold text-foreground">
                Related guides
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="glass group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
                  >
                    {r.image && (
                      <Image
                        src={r.image}
                        alt={r.title}
                        width={1200}
                        height={630}
                        sizes="(max-width: 640px) 100vw, 256px"
                        className="h-auto w-full"
                      />
                    )}
                    <span className="flex flex-1 flex-col p-4">
                      <span className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                        {r.title}
                      </span>
                      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-primary">
                        Read guide <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  )
}
