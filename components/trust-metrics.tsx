"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tv, Film, Activity, Users } from "lucide-react"

const metrics = [
  { icon: Tv, value: 21000, suffix: "+", label: "IPTV Live Channels", prefix: "" },
  { icon: Film, value: 65000, suffix: "+", label: "VOD Movies & Series", prefix: "" },
  { icon: Activity, value: 99.9, suffix: "%", label: "IPTV Server Uptime", prefix: "" },
  { icon: Users, value: 12000, suffix: "+", label: "IPTV Subscribers Worldwide", prefix: "" },
]

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number
  suffix: string
  isInView: boolean
}) {
  // Start at the real value so the server HTML (what crawlers read) shows the true number.
  // The count-up only runs in the browser once the stat scrolls into view.
  const [count, setCount] = useState(target)

  useEffect(() => {
    if (!isInView) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    const increment = target / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCount(current)
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, isInView])

  const formatted =
    target === 99.9 ? count.toFixed(1) : Math.floor(count).toLocaleString()

  return (
    <span className="counter-glow text-3xl font-extrabold text-foreground sm:text-4xl">
      {formatted}
      {suffix}
    </span>
  )
}

export default function TrustMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative px-4 py-12">
      <div className="glass mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-2 border-border/60 p-6 text-center sm:p-8 [&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
          >
            <motion.div
              className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.2 + index * 0.1 }}
            >
              <metric.icon className="h-5 w-5 text-accent" />
            </motion.div>
            <AnimatedCounter
              target={metric.value}
              suffix={metric.suffix}
              isInView={isInView}
            />
            <span className="text-sm text-muted-foreground">{metric.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
