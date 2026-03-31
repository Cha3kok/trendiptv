"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

// Set the offer end time: 24 hours from first load, persisted in localStorage
const OFFER_DURATION_MS = 24 * 60 * 60 * 1000

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_DURATION_MS
  const stored = localStorage.getItem("promo_deadline")
  if (stored) return parseInt(stored, 10)
  const deadline = Date.now() + OFFER_DURATION_MS
  localStorage.setItem("promo_deadline", String(deadline))
  return deadline
}

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if previously dismissed in this session
    if (sessionStorage.getItem("promo_dismissed") === "true") {
      setDismissed(true)
      return
    }

    setMounted(true)
    const deadline = getDeadline()

    function tick() {
      const diff = deadline - Date.now()
      if (diff <= 0) {
        setTimeLeft({ h: "00", m: "00", s: "00" })
        return
      }
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({
        h: String(h).padStart(2, "0"),
        m: String(m).padStart(2, "0"),
        s: String(s).padStart(2, "0"),
      })
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  function dismiss() {
    sessionStorage.setItem("promo_dismissed", "true")
    setDismissed(true)
  }

  if (dismissed || !mounted) return null

  return (
    <div className="relative z-50 flex items-center justify-center gap-3 bg-amber-500 px-4 py-2.5 sm:gap-4">
      {/* Badge */}
      <span className="hidden shrink-0 rounded-full bg-black px-3 py-1 text-xs font-bold tracking-wide text-white sm:inline">
        LIMITED OFFER
      </span>

      {/* Text */}
      <span className="text-xs font-semibold text-black sm:text-sm">
        🔥 -20% OFF all plans — offer ends in:
      </span>

      {/* Countdown */}
      <div className="flex items-center gap-1">
        {[
          { value: timeLeft.h, label: "H" },
          { value: timeLeft.m, label: "M" },
          { value: timeLeft.s, label: "S" },
        ].map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-sm font-bold text-black/70">:</span>
            )}
            <div className="flex min-w-[38px] flex-col items-center justify-center rounded-lg bg-black/20 px-2 py-1">
              <span className="font-mono text-sm font-bold leading-none text-black">
                {unit.value}
              </span>
              <span className="text-[9px] font-semibold leading-none text-black/60">
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="https://wa.me/212707711512?text=Hello,%20I%20want%20to%20claim%20the%2020%25%20discount%20offer"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-80"
      >
        Claim Now
      </Link>

      {/* Close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss offer"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 transition-colors hover:text-black"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
