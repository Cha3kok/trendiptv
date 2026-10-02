import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found | IPTV Trends",
  description: "The page you are looking for does not exist or has moved.",
  robots: { index: false, follow: true },
}

const links = [
  { href: "/", label: "Home", text: "What IPTV Trends is, plans and FAQ" },
  { href: "/products", label: "IPTV plans", text: "All subscription plans and prices" },
  { href: "/blog", label: "IPTV guides", text: "Setup tutorials and buying advice" },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-24 pt-44">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This page doesn&apos;t exist or has moved. Try one of these instead:
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="glass group rounded-2xl p-5 transition-transform hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="flex items-center justify-between font-semibold text-foreground group-hover:text-primary">
                  {l.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{l.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
