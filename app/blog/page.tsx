import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "IPTV Blog – Tips, Guides & News | IPTV Trends",
  description:
    "Read the latest IPTV guides, streaming tips, device setup tutorials, and news from the IPTV Trends team.",
  alternates: { canonical: "https://www.trendsiptv.com/blog" },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
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
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-border/40 bg-secondary/20 overflow-hidden transition-all hover:border-primary/40 hover:bg-secondary/40"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Thumbnail */}
                    {post.image && (
                      <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52 bg-secondary/50 flex items-center justify-center">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
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
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
