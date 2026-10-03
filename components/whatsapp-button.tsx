"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import WhatsAppLink from "@/components/whatsapp-link"
import { INTENT } from "@/lib/whatsapp"

/**
 * Floating WhatsApp button.
 * On phones it appears only after the visitor scrolls past the hero, so it never covers
 * the hero text or buttons. On larger screens it shows straight away.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const update = () => setVisible(desktop.matches || window.scrollY > window.innerHeight * 0.6)
    update()
    window.addEventListener("scroll", update, { passive: true })
    desktop.addEventListener("change", update)
    return () => {
      window.removeEventListener("scroll", update)
      desktop.removeEventListener("change", update)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <WhatsAppLink
            intent={INTENT.contact}
            button="WhatsApp chat icon"
            section="Floating WhatsApp button (bottom right)"
            aria-label="Contact us on WhatsApp"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
          >
            <MessageCircle className="h-7 w-7 text-[#ffffff]" />
          </WhatsAppLink>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#25D366]" />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
