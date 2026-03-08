"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Shield, Zap, Rocket } from "lucide-react"
import Link from "next/link"

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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            IPTV Trends <span className="text-primary">Subscription Plans</span> 2026
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground mx-auto max-w-2xl">
            Choose the best IPTV plan that fits your needs. All plans include 21,000+ channels, 65,000+ VOD, and ultra-fast anti-freeze technology.
          </p>
        </motion.div>

        {/* Updated Grid for 5 items */}
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass relative flex w-full flex-col rounded-2xl p-6 sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] ${
                plan.popular ? "ring-2 ring-primary scale-105 z-10 shadow-xl shadow-primary/10" : "border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground whitespace-nowrap">
                  BEST SELLER
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-xs text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/212707711512?text=Hello,%20I%20want%20to%20subscribe%20to%20the%20${plan.name}%20($${plan.price})`}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "neon-glow bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}