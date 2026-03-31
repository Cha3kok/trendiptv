import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-foreground">
              IPTV<span className="text-primary"> Trends</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              IPTV Trends is the #1 premium IPTV subscription service in 2026.
              Stream 21,000+ live IPTV channels and 65,000+ VOD movies and series
              in 4K UHD quality on any device. The best IPTV provider with
              anti-freeze technology and 99.9% uptime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              IPTV Trends Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "IPTV Trends Home", href: "/" },
                { label: "IPTV Subscription Plans", href: "/products" },
                { label: "IPTV Subscription Pricing", href: "/#pricing" },
                { label: "IPTV FAQ", href: "/#faq" },
                { label: "IPTV Reseller Program", href: "/#reseller" },
                { label: "Contact IPTV Trends", href: "https://wa.me/212707711512" },
                { label: "Free IPTV Trial", href: "https://wa.me/212707711512?text=I%20want%20a%2024h%20free%20IPTV%20trial" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              IPTV Compatible Devices
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Smart TV IPTV (Samsung, LG)",
                "Amazon Firestick IPTV",
                "Android IPTV / MAG Box",
                "Apple TV / iPhone IPTV",
                "PC / Mac IPTV Streaming",
              ].map((device) => (
                <li
                  key={device}
                  className="text-sm text-muted-foreground"
                >
                  {device}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact IPTV Trends
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="https://wa.me/212707711512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp: +212 710-141872
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                24/7 Customer Support
              </li>
              <li className="text-sm text-muted-foreground">
                7-Day Money Back Guarantee
              </li>
              <li className="text-sm text-muted-foreground">
                Instant IPTV Activation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/30 pt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            {"\u00A9"} {new Date().getFullYear()} IPTV Trends. All rights reserved. Not affiliated with any third-party streaming platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
