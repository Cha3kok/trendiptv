"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TiltCard from "@/components/motion/tilt-card"
import { whatsappLink, INTENT } from "@/lib/whatsapp"
import { Play, Zap, Tv, Trophy, Film, Newspaper, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const liveTiles = [
  { icon: Trophy, title: "Live Football", meta: "Live · 4K", tone: "from-primary/40 to-primary/5" },
  { icon: Film, title: "Movies & Series", meta: "65,000+ VOD", tone: "from-accent/35 to-accent/5" },
  { icon: Newspaper, title: "World News", meta: "24/7 · HD", tone: "from-[#8b9cff]/35 to-[#8b9cff]/5" },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % liveTiles.length), 2800)
    return () => clearInterval(t)
  }, [])

  const current = liveTiles[active]

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-40 sm:pt-44 lg:pb-28"
    >
      {/* Backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <motion.div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/15 blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Premium IPTV Service 2026 · Buffer-Free 4K Streaming
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            IPTV Trends:{" "}
            <span className="text-gradient">Premium IPTV Subscription</span>
            <br />
            <span className="mt-2 block text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl">
              With 21,000+ Live Channels in 4K
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground lg:mx-0"
          >
            IPTV Trends is a premium IPTV provider for streaming live TV, sports, movies, and series.
            Enjoy 65,000+ VOD titles, anti-freeze technology, and 99.9% uptime on every device.
          </motion.p>

          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
          >
            <Link
              href={whatsappLink({ intent: INTENT.buy, button: "Buy IPTV Subscription Now", section: "Hero (top of page)", page: "/" })}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground"
            >
              <Zap className="h-5 w-5" />
              Buy IPTV Subscription Now
            </Link>

            <Link
              href={whatsappLink({ intent: INTENT.trial, button: "Try Free IPTV Trial - 24h", section: "Hero (top of page)", page: "/" })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Play className="h-5 w-5" />
              Try Free IPTV Trial - 24h
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            {["Free 24h trial", "7-day money-back guarantee", "Instant activation"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* TV mockup */}
        <motion.div
          initial={{ y: 24, scale: 0.97 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
          aria-hidden="true"
        >
          <div className="animate-float">
            <TiltCard max={7}>
              <div className="glass relative rounded-[28px] p-3 shadow-2xl shadow-black/40">
                {/* Screen */}
                <div className="relative aspect-video overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1b2547] via-[#121a32] to-[#0a1022]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={current.title}
                      className={`absolute inset-0 bg-gradient-to-br ${current.tone}`}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,122,47,0.3),transparent_55%)]" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <span className="live-dot h-2 w-2 rounded-full bg-[#f2555a]" />
                    LIVE
                  </div>
                  <div className="absolute right-4 top-4 rounded-md bg-black/40 px-2 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur">
                    4K UHD
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="absolute h-16 w-16 animate-ping rounded-full bg-primary/30" />
                    <motion.div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-lg shadow-primary/40"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="ml-1 h-7 w-7 fill-primary-foreground text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Now playing */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="mb-2 flex items-end justify-between">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={current.title}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35 }}
                          className="text-xs font-semibold text-white/90"
                        >
                          Now playing · {current.title}
                        </motion.p>
                      </AnimatePresence>
                      <div className="flex h-4 items-end gap-[3px]">
                        {[0, 0.2, 0.4, 0.1, 0.3].map((d, i) => (
                          <span
                            key={i}
                            className="eq-bar w-[3px] rounded-full bg-primary"
                            style={{ height: "100%", animationDelay: `${d}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/15">
                      <motion.div
                        key={active}
                        className="h-full rounded-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.8, ease: "linear" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Channel row */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {liveTiles.map((tile, i) => (
                    <button
                      type="button"
                      tabIndex={-1}
                      key={tile.title}
                      onMouseEnter={() => setActive(i)}
                      className={`relative rounded-xl border bg-gradient-to-br ${tile.tone} p-3 text-left transition-all duration-300 ${
                        i === active ? "border-primary/60 shadow-lg shadow-primary/20 -translate-y-0.5" : "border-white/5 opacity-70"
                      }`}
                    >
                      <tile.icon className="h-4 w-4 text-foreground/90" />
                      <p className="mt-2 truncate text-xs font-semibold text-foreground">{tile.title}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{tile.meta}</p>
                    </button>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -left-8 top-[34%] hidden sm:block"
          >
            <div className="glass animate-float-slow flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15">
                <Tv className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">21,000+</p>
                <p className="text-[11px] text-muted-foreground">Live channels</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -right-6 -top-5 hidden sm:block"
          >
            <div className="glass animate-float flex items-center gap-2 rounded-full px-4 py-2 shadow-xl [animation-delay:1.5s]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ddc84] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3ddc84]" />
              </span>
              <span className="text-xs font-semibold text-foreground">99.9% uptime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Supported devices - SEO friendly labels */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"
      >
        {[
          "Smart TV IPTV",
          "Firestick IPTV",
          "Android IPTV",
          "iOS IPTV",
          "MAG Box IPTV",
          "PC IPTV",
        ].map((device) => (
          <span
            key={device}
            className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {device}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
