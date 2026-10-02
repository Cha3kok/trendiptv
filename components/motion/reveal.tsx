"use client"

import { motion, type Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Distance in pixels the element travels while fading in. */
  y?: number
  as?: "div" | "section" | "article" | "li" | "header" | "footer"
  /** Fade from transparent. Turn off for content near the top of the page so it never delays LCP. */
  fade?: boolean
}

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div", fade = true }: RevealProps) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={fade ? { opacity: 0, y } : { y }}
      whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  )
}

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
}

/** Container whose `RevealItem` children animate in one after another. */
export function RevealGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
