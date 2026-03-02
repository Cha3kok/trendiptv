"use client"

import { motion } from "framer-motion"
import { Play, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Premium 4K Streaming - No Buffering
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Ultimate 4K{" "}
          <span className="text-primary">Entertainment</span> Hub.
          <br />
          <span className="text-muted-foreground">No Buffering. No Limits.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
        >
          Access 20,000+ Premium Channels and 60,000+ Movies & Series.
          Works on all devices.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="https://wa.me/212710141872"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-glow flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Zap className="h-5 w-5" />
            Get Instant Access
          </Link>

          <Link
            href="https://wa.me/212710141872?text=I%20want%20a%2024h%20free%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
          >
            <Play className="h-5 w-5" />
            Try 24h Free Trial
          </Link>
        </motion.div>

        {/* Decorative device mockups text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          {["Smart TV", "Firestick", "Android", "iOS", "MAG Box", "PC"].map(
            (device) => (
              <span
                key={device}
                className="flex items-center gap-2 rounded-full border border-border/50 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                {device}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
