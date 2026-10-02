"use client"

import { useId } from "react"
import { motion, useReducedMotion } from "framer-motion"

type LogoProps = {
  className?: string
  /** Height of the mark in pixels. The wordmark scales with it. */
  size?: number
  /** Hide the "IPTV Trends" text and show only the mark. */
  markOnly?: boolean
  /** Play the draw-in animation on mount. */
  animated?: boolean
}

export function LogoMark({ size = 36, animated = true }: { size?: number; animated?: boolean }) {
  const id = useId().replace(/:/g, "")
  const reduce = useReducedMotion()
  const play = animated && !reduce

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="shrink-0 overflow-visible"
      whileHover={reduce ? undefined : { rotate: -6, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <defs>
        <linearGradient id={`lg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff6a1f" />
          <stop offset="1" stopColor="#ffb347" />
        </linearGradient>
        <linearGradient id={`sh-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`cl-${id}`}>
          <rect width="48" height="48" rx="13" />
        </clipPath>
      </defs>

      <motion.rect
        width="48"
        height="48"
        rx="13"
        fill={`url(#lg-${id})`}
        initial={play ? { scale: 0.6, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        style={{ transformOrigin: "24px 24px" }}
      />

      {/* Shine sweep */}
      {play && (
        <g clipPath={`url(#cl-${id})`}>
          <motion.rect
            x="-30"
            y="-10"
            width="18"
            height="70"
            fill={`url(#sh-${id})`}
            transform="rotate(20)"
            initial={{ x: -30 }}
            animate={{ x: 80 }}
            transition={{ duration: 1.4, delay: 1.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          />
        </g>
      )}

      <motion.path
        d="M16 12.5 L36 24 L16 35.5 Z"
        fill="#0a1022"
        stroke="#0a1022"
        strokeWidth="3.5"
        strokeLinejoin="round"
        initial={play ? { scale: 0, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.15 }}
        style={{ transformOrigin: "24px 24px" }}
      />

      <motion.path
        d="M19 29.5 L23.5 25 L26.5 27.5 L31.5 21.5"
        fill="none"
        stroke="#ff9a3c"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={play ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
      />
      <motion.path
        d="M28.4 21.3 L31.7 21.3 L31.7 24.6"
        fill="none"
        stroke="#ff9a3c"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={play ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
      />
    </motion.svg>
  )
}

export default function Logo({ className = "", size = 36, markOnly = false, animated = true }: LogoProps) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} animated={animated} />
      {!markOnly && (
        <span
          className="font-[family-name:var(--font-display)] font-extrabold leading-none tracking-tight text-foreground"
          style={{ fontSize: size * 0.56 }}
        >
          IPTV <span className="text-gradient">Trends</span>
        </span>
      )}
      {markOnly && <span className="sr-only">IPTV Trends</span>}
    </span>
  )
}
