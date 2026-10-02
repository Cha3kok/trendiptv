"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

const queries = [
  "Search live football in 4K...",
  "Search tonight's PPV events...",
  "Search new movies & series...",
  "Search kids channels...",
  "Search international news...",
]

function useTypewriter(lines: string[]) {
  const [text, setText] = useState("")
  const [line, setLine] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(lines[0])
      return
    }
    const full = lines[line]
    let delay = deleting ? 30 : 65
    if (!deleting && text === full) delay = 1600
    if (deleting && text === "") delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === "") {
        setDeleting(false)
        setLine((l) => (l + 1) % lines.length)
      } else setText(full.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, line, lines])

  return text
}

const channels = [
  "Live Sports",
  "Football",
  "PPV Events",
  "Boxing & MMA",
  "Movies",
  "TV Series",
  "News",
  "Kids",
  "Documentaries",
  "Music",
  "4K UHD Channels",
  "Catch-Up TV",
  "International",
  "Arabic",
  "French",
  "Spanish",
]

export default function ChannelSearch() {
  const typed = useTypewriter(queries)
  const half = Math.ceil(channels.length / 2)
  const rows = [channels.slice(0, half), channels.slice(half)]

  return (
    <section className="relative overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl"
        >
          IPTV Trends <span className="text-gradient">Channel List</span>: What Channels Are Included?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-pretty text-muted-foreground"
        >
          IPTV Trends includes 21,000+ live channels from 50+ countries, covering sports and PPV events, entertainment, movies, news, kids and international TV, plus 65,000+ movies and series on demand. Every plan includes the full channel list.
        </motion.p>

        {/* Search bar mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full px-6 py-4 ring-1 ring-primary/20"
        >
          <Search className="h-5 w-5 shrink-0 text-primary" />
          <span className="sr-only">Search IPTV Trends channels - sports, movies, series, PPV events...</span>
          <span aria-hidden="true" className="min-h-5 text-left text-sm text-muted-foreground">
            {typed}
            <span className="caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-primary" />
          </span>
        </motion.div>
      </div>

      {/* Marquee - two rows moving in opposite directions */}
      <div className="marquee-pause relative mt-12 flex flex-col gap-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {rows.map((row, r) => (
          <div key={r} className={`flex w-max gap-4 ${r === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}>
            {[...row, ...row, ...row, ...row].map((channel, index) => (
              <div
                key={`${channel}-${index}`}
                className="glass flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="live-dot h-2 w-2 rounded-full bg-primary" style={{ animationDelay: `${(index % 5) * 0.3}s` }} />
                <span className="whitespace-nowrap text-sm font-semibold text-foreground/85">
                  {channel}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
