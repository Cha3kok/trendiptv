"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Thin orange bar at the very top of the page that fills as the visitor scrolls. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-[#ffb347] to-accent"
      style={{ scaleX }}
    />
  )
}
