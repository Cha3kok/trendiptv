import { CalendarCheck } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { KEY_FACTS, LAST_UPDATED, LAST_UPDATED_LABEL, LOWEST_MONTHLY, PLAN_PRICES, SITE } from "@/lib/site"

/**
 * Answer-first definition block placed high on the homepage.
 * Written as a self-contained passage so search engines and AI answers can quote it directly.
 */
export default function AboutIptvTrends() {
  const monthly = PLAN_PRICES[0].price

  return (
    <section id="what-is-iptv-trends" aria-labelledby="what-is-iptv-trends-title" className="relative px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal>
          <span className="eyebrow mb-3">About the service</span>
          <h2 id="what-is-iptv-trends-title" className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
            What is <span className="text-gradient">IPTV Trends</span>?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90">
            <strong className="font-semibold text-foreground">IPTV Trends</strong> ({SITE.domain}) is a
            premium IPTV subscription service that streams 21,000+ live TV channels and 65,000+ movies
            and series over the internet, in quality up to 4K UHD. Instead of a cable box or satellite
            dish, you watch through an IPTV app such as IPTV Smarters Pro or TiviMate on a Smart TV,
            Amazon Firestick, Android device, iPhone, MAG box or computer.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Plans cost ${monthly.toFixed(2)} for one month, down to about ${LOWEST_MONTHLY.toFixed(2)} per
            month on the 24-month plan. Every plan includes the full channel list and on-demand library,
            and new customers can test the service with a free 24-hour trial before paying.
            Subscriptions activate instantly after payment, come with a 7-day money-back guarantee and
            include 24/7 support on WhatsApp in English, French, Arabic and Spanish.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            IPTV Trends operates only at{" "}
            <a href={SITE.url} className="text-primary hover:underline">
              {SITE.domain}
            </a>{" "}
            and is not affiliated with other websites that use a similar name.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs text-muted-foreground">
            <CalendarCheck className="h-3.5 w-3.5 text-accent" />
            Prices and features last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground">IPTV Trends key facts</h3>
          <RevealGroup className="mt-4">
            <dl className="divide-y divide-border/60">
              {KEY_FACTS.map((fact) => (
                <RevealItem key={fact.label} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 py-3">
                  <dt className="text-sm font-medium text-muted-foreground">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{fact.value}</dd>
                </RevealItem>
              ))}
            </dl>
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  )
}
