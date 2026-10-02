"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Shield, Zap, Rocket } from "lucide-react"
import Link from "next/link"
import TiltCard from "@/components/motion/tilt-card"
import { whatsappLink, INTENT } from "@/lib/whatsapp"
import { PLAN_PRICES, perMonth, savingsVsMonthly, LOWEST_MONTHLY } from "@/lib/site"

const plans = [
  {
    name: "1 Month Plan",
    subtitle: "Try our Premium IPTV Service",
    price: "19.99",
    period: "month",
    icon: Zap,
    popular: false,
    features: [
      "4K / UHD Streaming Quality",
      "21,000+ Live Channels",
      "65,000+ VOD Movies & Series",
      "All Sports & PPV Events",
      "Anti-Freeze Technology",
      "24/7 Customer Support",
    ],
  },
  {
    name: "3 Months Plan",
    subtitle: "Quarterly Entertainment Hub",
    price: "39.99",
    period: "3 months",
    icon: Shield,
    popular: false,
    features: [
      "Everything in Monthly Plan",
      "Electronic Program Guide (EPG)",
      "Instant Activation",
      "Compatible with All Devices",
      "No Hidden Fees",
      "Priority Support",
    ],
  },
  {
    name: "12 Months Plan",
    subtitle: "Best for Long-term Viewing",
    price: "79.99",
    period: "year",
    icon: Star,
    popular: true,
    features: [
      "Everything in 6 Months Plan",
      "Best Value - Save Over 50%",
      "Anti-Freeze v10 Engine",
      "Full VOD Library Access",
      "Catch-Up TV (7 Days Replay)",
      "VIP Dedicated Support",
    ],
  },
  {
    name: "6 Months Plan",
    subtitle: "Most Balanced Choice",
    price: "55.99",
    period: "6 months",
    icon: Rocket,
    popular: false,
    features: [
      "Everything in 3 Months Plan",
      "Premium Server Stability",
      "Multi-Language Subtitles",
      "All PPV & Boxing Events",
      "Zero Buffer Guarantee",
      "Instant Setup Guide",
    ],
  },
  {
    name: "24 Months Plan",
    subtitle: "Ultimate Family Savings",
    price: "129.99",
    period: "2 years",
    icon: Crown,
    popular: false,
    features: [
      "Everything in 12 Months Plan",
      "Maximum Savings Guarantee",
      "Premium VOD First Access",
      "Family Sharing Mode",
      "Custom Channel Lists",
      "Lifetime Update Access",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-3">Pricing</span>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-5xl">
            IPTV Trends <span className="text-gradient">Subscription Plans</span> 2026
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground mx-auto max-w-2xl">
            IPTV Trends costs from $19.99 for one month to $129.99 for 24 months, which works out to
            about ${LOWEST_MONTHLY.toFixed(2)} per month. All plans include 21,000+ channels, 65,000+
            movies and series, 4K quality and anti-freeze technology.
          </p>
        </motion.div>

        {/* Updated Grid for 5 items */}
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] ${
                plan.popular ? "z-10 xl:-mt-3" : ""
              }`}
            >
              <TiltCard max={6} className="h-full">
              <div
                className={`group relative flex h-full flex-col rounded-3xl p-6 ${
                  plan.popular
                    ? "ring-spin border border-primary/40 bg-gradient-to-b from-primary/20 via-card to-card shadow-2xl shadow-primary/20"
                    : "glass hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                }`}
              >
              {plan.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold tracking-wider text-primary-foreground whitespace-nowrap shadow-lg shadow-primary/30"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  BEST SELLER
                </motion.div>
              )}

              <div className="mb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="counter-glow text-4xl font-extrabold tracking-tight text-foreground">${plan.price}</span>
                  <span className="text-xs text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-2.5 border-t border-border/60 pt-5">
                {plan.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 + fi * 0.05 }}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={whatsappLink({
                  intent: INTENT.order(plan.name),
                  plan: plan.name,
                  price: Number(plan.price),
                  button: "Get Started",
                  section: `Pricing section (${plan.name} card)`,
                  page: "/",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "neon-glow bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border bg-secondary/50 text-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                Get Started
              </Link>
              <Link
                href={`/products/${plan.name.match(/\d+/)?.[0]}-month-iptv-subscription`}
                className="mt-3 block text-center text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                See {plan.name.replace(/ Plan$/, "")} plan details
              </Link>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Plain price table: easy for search engines and AI answers to read and quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="px-6 pt-5 text-left text-base font-bold text-foreground">
                IPTV Trends price per month by plan
              </caption>
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground">
                  <th scope="col" className="px-6 py-3 text-left font-medium">Plan</th>
                  <th scope="col" className="px-6 py-3 text-right font-medium">Total price</th>
                  <th scope="col" className="px-6 py-3 text-right font-medium">Price per month</th>
                  <th scope="col" className="px-6 py-3 text-right font-medium">Saving vs monthly</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_PRICES.map((p) => (
                  <tr key={p.name} className="border-b border-border/20 transition-colors last:border-0 hover:bg-primary/5">
                    <th scope="row" className="px-6 py-3 text-left font-semibold text-foreground">{p.name}</th>
                    <td className="px-6 py-3 text-right text-foreground">${p.price.toFixed(2)}</td>
                    <td className="px-6 py-3 text-right font-semibold text-primary">${perMonth(p).toFixed(2)}</td>
                    <td className="px-6 py-3 text-right text-muted-foreground">
                      {savingsVsMonthly(p) > 0 ? `${savingsVsMonthly(p)}%` : "–"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}