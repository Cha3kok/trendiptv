import { SITE_URL } from "@/lib/site"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Reveal } from "@/components/motion/reveal"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const dynamic = "force-dynamic";

const SITE = SITE_URL

export const metadata: Metadata = {
  title: "IPTV Blog – Setup Guides, Tips & News | IPTV Trends",
  description:
    "IPTV setup guides for Firestick, Smart TV and phones, buying advice, player app comparisons and streaming tips from the IPTV Trends team.",
  alternates: { canonical: `${SITE}/blog` },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE}/blog#blog`,
        name: "IPTV Trends Blog",
        url: `${SITE}/blog`,
        description: "IPTV setup guides, buying advice and streaming tips.",
        publisher: { "@id": `${SITE}/#organization` },
        inLanguage: "en",
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${SITE}/blog/${post.slug}#article`,
          headline: post.title,
          url: `${SITE}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE}${post.image}` : undefined,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <section className="pt-44 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Blog
            </span>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              IPTV Guides & News
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Tips, tutorials, and updates from the IPTV Trends team.
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No articles yet. Check back soon.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i, 6) * 0.07} fade={i >= 2}>
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="glass group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Thumbnail */}
                    {post.image && (
                      <div className="relative aspect-[1200/630] w-full shrink-0 overflow-hidden bg-secondary/50 sm:my-4 sm:ml-4 sm:w-64 sm:self-center sm:rounded-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          priority={i < 2}
                          sizes="(max-width: 640px) 100vw, 256px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        {post.tags.length > 0 && (
                          <div className="mb-2 flex flex-wrap gap-2">
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

                        <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            {post.author}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Read article <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
