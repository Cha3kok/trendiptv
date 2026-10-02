"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import WhatsAppLink from "@/components/whatsapp-link"
import { INTENT } from "@/lib/whatsapp"

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
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
  )
}
