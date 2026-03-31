"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-4xl">
        <div className="glass rounded-2xl border border-border/50 p-4 shadow-2xl sm:flex sm:items-center sm:gap-6">
          <div className="flex-1 text-sm text-muted-foreground">
            We use cookies to analyse website traffic and improve your experience. See our{" "}
            <Link href="/cookie-policy" className="text-primary underline-offset-2 hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-primary underline-offset-2 hover:underline">
              Privacy Policy
            </Link>.
          </div>
          <div className="mt-3 flex items-center gap-2 sm:mt-0 sm:shrink-0">
            <button
              onClick={decline}
              className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-border/80 hover:text-foreground"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              aria-label="Close"
              className="ml-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
