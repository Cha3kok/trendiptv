"use client"

import { motion } from "framer-motion"
import { Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import { whatsappLink, INTENT } from "@/lib/whatsapp"

export default function ResellerCTA() {
  return (
    <section id="reseller" className="relative px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-[#ff8f3f] to-[#ffb347] p-10 shadow-2xl shadow-primary/25 sm:p-14"
      >
        {/* Gradient overlay */}
        <motion.div
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          animate={{ x: [0, 80, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-8 right-1/3 h-3 w-3 rounded-full bg-white/40"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <div className="animate-float mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background/15">
              <Briefcase className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-balance text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Become an IPTV Trends <span className="underline decoration-background/30 decoration-4 underline-offset-8">Reseller</span>
            </h2>
            <p className="mt-4 max-w-lg text-pretty font-medium text-primary-foreground/75">
              Start your own IPTV reseller business with IPTV Trends. Get wholesale IPTV pricing,
              a dedicated reseller panel to manage your IPTV clients, and 24/7 priority support.
              Join the fastest-growing IPTV reseller program in 2026.
            </p>
          </div>

          <Link
            href={whatsappLink({ intent: INTENT.reseller, button: "Join IPTV Reseller Program", section: "Reseller banner", page: "/" })}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-foreground shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5 hover:scale-[1.03]"
          >
            Join IPTV Reseller Program
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
