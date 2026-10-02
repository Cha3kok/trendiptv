"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"
import { usePathname } from "next/navigation"
import { whatsappLink, INTENT } from "@/lib/whatsapp"
import PromoBanner from "@/components/promo-banner"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "IPTV Plans", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reseller", href: "/#reseller" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "whatsapp" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || "/"

  // Nav entries marked "whatsapp" open WhatsApp with a message naming the button, menu and page.
  const navHref = (link: (typeof navLinks)[number], section: string) =>
    link.href === "whatsapp"
      ? whatsappLink({ intent: INTENT.contact, button: link.label, section, page: pathname })
      : link.href
  const buyHref = (section: string) =>
    whatsappLink({ intent: INTENT.buy, button: "Buy IPTV", section, page: pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <PromoBanner />
      <div className="px-3 pt-3 sm:px-4">
      <div
        className={`glass mx-auto rounded-2xl px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "max-w-6xl shadow-2xl shadow-black/40 border-primary/20" : "max-w-7xl shadow-lg shadow-black/20"
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo size={36} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={navHref(link, "Top navigation bar")}
                {...(link.href === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href={buyHref("Top navigation bar")}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-glow rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Buy IPTV
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={navHref(link, "Mobile menu")}
                  {...(link.href === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={buyHref("Mobile menu")}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-glow mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Buy IPTV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  )
}
