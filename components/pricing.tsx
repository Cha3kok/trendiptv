"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Shield } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    subtitle: "1 Device",
    price: "49.99",
    icon: Shield,
    popular: false,
    features: [
      "4K / UHD Quality",
      "21,000+ Live Channels",
      "65,000+ VOD Library",
      "All Sports Channels",
      "Electronic Program Guide",
      "24/7 Customer Support",
      "Anti-Freeze Technology",
    ],
  },
  {
    name: "Pro",
    subtitle: "2 Devices",
    price: "69.99",
    icon: Star,
    popular: true,
    features: [
      "Everything in Basic",
      "Multi-Room Streaming",
      "Anti-Freeze v10 Engine",
      "Priority VIP Support",
      "Catch-Up TV (7 Days)",
      "PPV Events Included",
      "Instant Activation",
    ],
  },
  {
    name: "Elite",
    subtitle: "3 Devices",
    price: "89.99",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Pro",
      "Maximum Savings",
      "Family Sharing Mode",
      "Dedicated VIP Support",
      "Premium VOD First Access",
      "Zero Downtime Guarantee",
      "Custom Channel Lists",
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
            Choose Your 1-Year{" "}
            <span className="text-primary">Premium Access</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            One payment. One year of unlimited entertainment. Cancel-free
            simplicity.
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
