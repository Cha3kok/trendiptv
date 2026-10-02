"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { whatsappLink, type WhatsAppMessage } from "@/lib/whatsapp"

type Props = Omit<WhatsAppMessage, "page"> & {
  /** Override the page path. Defaults to the page the visitor is on. */
  page?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  "aria-label"?: string
}

/**
 * WhatsApp link that automatically records the current page in the message.
 * Use it for buttons that appear on many pages (navbar, footer, floating button).
 */
export default function WhatsAppLink({ page, className, children, onClick, "aria-label": ariaLabel, ...message }: Props) {
  const pathname = usePathname() || "/"
  return (
    <Link
      href={whatsappLink({ ...message, page: page ?? pathname })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
}
