import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { Reveal } from "@/components/motion/reveal"

function formatDate(date: string) {
  const d = new Date(date)
  return Number.isNaN(d.getTime())
    ? date
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

/** Links the newest blog guides from the homepage: internal links plus a freshness signal. */
export default function LatestGuides() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section id="guides" aria-labelledby="guides-title" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <span className="eyebrow mb-3">Guides</span>
            <h2 id="guides-title" className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
              Latest <span className="text-gradient">IPTV Guides</span> & Setup Tutorials
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
              Step-by-step help for choosing, installing and getting the best picture from your IPTV
              subscription.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            All guides
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                {post.image && (
                  <div className="relative aspect-[1200/630] overflow-hidden bg-secondary/50">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary">
                    Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
