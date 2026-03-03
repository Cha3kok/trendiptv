"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Shield } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic IPTV",
    subtitle: "1 Device - Best for Solo Viewers",
    price: "79.99",
    icon: Shield,
    popular: false,
    features: [
      "4K / UHD IPTV Streaming Quality",
      "21,000+ Live IPTV Channels",
      "65,000+ VOD Movies & Series",
      "All Sports Channels & PPV",
      "Electronic Program Guide (EPG)",
      "24/7 IPTV Customer Support",
      "Anti-Freeze Streaming Technology",
    ],
  },
  {
    name: "Pro IPTV",
    subtitle: "2 Devices - Most Popular IPTV Plan",
    price: "119.99",
    icon: Star,
    popular: true,
    features: [
      "Everything in Basic IPTV",
      "Multi-Room IPTV Streaming",
      "Anti-Freeze v10 Engine",
      "Priority VIP IPTV Support",
      "Catch-Up TV (7 Days Replay)",
      "All PPV & Boxing Events",
      "Instant IPTV Activation",
    ],
  },
  {
    name: "Elite IPTV",
    subtitle: "3 Devices - Best Value IPTV Plan",
    price: "149.99",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Pro IPTV",
      "Best IPTV Value - Maximum Savings",
      "Family IPTV Sharing Mode",
      "Dedicated VIP IPTV Support",
      "Premium VOD First Access",
      "Zero Downtime IPTV Guarantee",
      "Custom IPTV Channel Lists",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            IPTV Trends <span className="text-primary">Subscription Plans</span> & Pricing 2026
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Buy the best IPTV subscription at affordable prices. One payment covers a full year of premium IPTV streaming with 21,000+ channels, 65,000+ VOD, and anti-freeze technology included.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass relative flex flex-col rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <plan.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">/year</span>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/212710141872?text=I%20want%20the%20${plan.name}%20plan%20(${plan.subtitle})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "neon-glow bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                Order via WhatsApp
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
