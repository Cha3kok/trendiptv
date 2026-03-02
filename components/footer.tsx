import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-foreground">
              Trend<span className="text-primary">Siptv</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The ultimate 4K entertainment hub. Premium IPTV service with
              21,000+ channels and 65,000+ VOD content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Home", "Pricing", "Reseller", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Supported Devices
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Smart TV (Samsung, LG)",
                "Amazon Firestick",
                "Android / MAG Box",
                "Apple TV / iOS",
                "PC / Mac",
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

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="https://wa.me/212710141872"
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
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/30 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} TrendSiptv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
