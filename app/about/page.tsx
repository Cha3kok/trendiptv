import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppLink from "@/components/whatsapp-link"
import { Reveal } from "@/components/motion/reveal"
import { INTENT } from "@/lib/whatsapp"
import { KEY_FACTS, SITE } from "@/lib/site"
import { MessageCircle, ShieldCheck, Zap, BookOpen } from "lucide-react"

const URL = `${SITE.url}/about`

export const metadata: Metadata = {
  title: "About IPTV Trends – How Our IPTV Service Works",
  description:
    "Who IPTV Trends is, how the service works, how we support customers on WhatsApp, our refund and DMCA policies, and who writes our IPTV guides.",
  alternates: { canonical: URL },
}

const steps = [
  { icon: Zap, title: "Choose a plan or a free trial", text: "Pick a plan on our site, or ask for a free 24-hour trial first. Both start on WhatsApp." },
  { icon: MessageCircle, title: "Get your login on WhatsApp", text: "After payment we send your username, password and server URL, usually within minutes." },
  { icon: ShieldCheck, title: "Watch, with a guarantee", text: "Enter the details in an IPTV app on any device. If you are not satisfied, you can ask for a refund within 7 days." },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: "About IPTV Trends",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      mainEntity: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: URL },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-44">
        <div className="mx-auto max-w-4xl">
          <header>
            <p className="eyebrow">About us</p>
            <h1 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
              About <span className="text-gradient">IPTV Trends</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/90">
              IPTV Trends ({SITE.domain}) is an IPTV subscription service. We stream live TV channels and an
              on-demand library of movies and series over the internet, so customers can watch on a Smart TV,
              streaming stick, phone or computer without a cable box or satellite dish.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We sell and support every subscription directly through WhatsApp, in English, French, Arabic and
              Spanish. IPTV Trends operates only at {SITE.domain} and is not affiliated with other websites that
              use a similar name.
            </p>
          </header>

          <Reveal className="mt-14">
            <h2 className="text-2xl font-bold text-foreground">How the service works</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="glass list-none rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl font-bold text-foreground">The service at a glance</h2>
            <dl className="glass mt-6 divide-y divide-border/60 rounded-2xl px-6">
              {KEY_FACTS.map((f) => (
                <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4">
                  <dt className="text-sm font-medium text-muted-foreground">{f.label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-2xl font-bold text-foreground">Our policies</h2>
            <p className="mt-3 text-muted-foreground">
              Every subscription is covered by our{" "}
              <Link href="/refund-policy" className="text-primary hover:underline">7-day refund policy</Link>,{" "}
              <Link href="/terms-of-service" className="text-primary hover:underline">terms of service</Link> and{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">privacy policy</Link>. We respect
              copyright and respond to valid notices under our{" "}
              <Link href="/dmca" className="text-primary hover:underline">DMCA policy</Link>.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <section id="editorial-team" aria-labelledby="editorial-team-title" className="glass scroll-mt-40 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-accent" />
                <h2 id="editorial-team-title" className="text-2xl font-bold text-foreground">
                  The IPTV Trends editorial team
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our guides are published by the IPTV Trends team and focus on the questions customers ask us
                most: installing apps on Firestick and Smart TVs, choosing a player, fixing buffering and getting
                the best picture.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Every article shows when it was published and last updated. Spotted something out of date?
                Tell us on WhatsApp and we will correct it.
              </p>
              <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Read our IPTV guides
              </Link>
            </section>
          </Reveal>

          <Reveal className="mt-14 text-center">
            <h2 className="text-2xl font-bold text-foreground">Contact us</h2>
            <p className="mt-2 text-muted-foreground">Support is available 24/7 on WhatsApp at {SITE.phoneDisplay}.</p>
            <WhatsAppLink
              intent={INTENT.contact}
              button="Message us on WhatsApp"
              section="About page contact"
              className="neon-glow mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </WhatsAppLink>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
