"use client"

import { useEffect } from "react"

/**
 * Lights up every `.glass` card with a soft glow that follows the cursor.
 * One delegated listener for the whole page; it only writes two CSS variables.
 */
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".glass")
      if (!target) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect()
        target.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        target.style.setProperty("--my", `${e.clientY - rect.top}px`)
      })
    }
    const onLeave = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(".glass")
      if (target && !target.contains(e.relatedTarget as Node)) {
        target.style.removeProperty("--mx")
        target.style.removeProperty("--my")
      }
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerout", onLeave, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerout", onLeave)
    }
  }, [])

  return null
}
