import { notFound } from "next/navigation"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | IPTV Trends Blog`,
    description: post.description,
    alternates: { canonical: `https://www.trendsiptv.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-28 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
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
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>
          </header>

          {/* Cover image */}
          {post.image && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-border/30 bg-secondary/30 flex items-center justify-center p-6 sm:p-10">
              <img
                src={post.image}
                alt={post.title}
                className="max-h-72 w-full object-contain"
              />
            </div>
          )}

          {/* Divider */}
          <div className="mb-10 h-px bg-border/30" />

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">Ready to Start Streaming?</h3>
            <p className="mt-2 text-muted-foreground">
              Get instant access to 21,000+ channels and 65,000+ movies in 4K UHD.
            </p>
            <Link
              href="https://wa.me/212707711512"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Get Your Free 24h Trial
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
