"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const rows = [
  { feature: "Anti-Freeze Technology", us: true, others: false },
  { feature: "4K / UHD Quality", us: true, others: false },
  { feature: "Instant Activation", us: true, others: false },
  { feature: "Electronic Program Guide (EPG)", us: true, others: false },
  { feature: "21,000+ Live Channels", us: true, others: false },
  { feature: "65,000+ VOD Library", us: true, others: false },
  { feature: "Catch-Up TV", us: true, others: false },
  { feature: "24/7 Priority Support", us: true, others: false },
  { feature: "99.9% Uptime", us: true, others: false },
  { feature: "Multi-Device Support", us: true, others: true },
  { feature: "7-Day Money Back", us: true, others: false },
]

export default function ComparisonTable() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Why <span className="text-primary">IPTV Trends</span>?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            See how we compare to other IPTV providers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass mt-10 overflow-hidden rounded-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    IPTV Trends
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/10 ${
                      index % 2 === 0 ? "bg-secondary/20" : ""
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.us ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.others ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20">
                          <X className="h-4 w-4 text-destructive" />
                        </span>
                      )}
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
