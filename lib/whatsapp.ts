/**
 * Builds every WhatsApp link on the site, so each message tells support:
 * what the visitor wants, the plan and price (for order buttons),
 * which button they pressed, where it was on the page, and which website it came from.
 */

export const WHATSAPP_NUMBER = "212707711512"
export const WEBSITE = "www.trendsiptv.com"

export type WhatsAppMessage = {
  /** What the visitor wants, in their voice. Example: "I want a free 24-hour IPTV trial." */
  intent: string
  /** The exact label on the button or link. */
  button: string
  /** Where the button sits on the page. Example: "Pricing section". */
  section: string
  /** Page path, for example "/" or "/products/12-month-iptv-subscription". */
  page: string
  /** Plan name, for order and payment buttons. */
  plan?: string
  /** Plan price in USD, for order and payment buttons. */
  price?: number
}

/** "12 Months Plan" -> "12 Months", so messages never read "the 12 Months Plan plan". */
export function planName(plan: string) {
  return plan.replace(/\s+plan$/i, "")
}

export function pageLabel(path: string) {
  const clean = path.split("?")[0].split("#")[0] || "/"
  return clean === "/" ? `${WEBSITE} (home page)` : `${WEBSITE}${clean}`
}

/**
 * Message formats (plain text, no emojis: some WhatsApp apps show them as "�"):
 *
 * Payment buttons (a plan with a price):
 *   Hello, I want to subscribe to the 12 Months Plan ($79.99)
 *   Button: Get Started
 *   Website: www.trendsiptv.com
 *
 * All other buttons:
 *   Hello IPTV Trends
 *   I want to buy an IPTV Trends subscription.
 *   Button: Buy IPTV
 *
 * `section` and `page` are still recorded on every link so they can be added back later.
 */
/** Plain ASCII punctuation only, so no WhatsApp app shows "�". */
function plain(text: string) {
  return text.replace(/[\u2013\u2014]/g, "-").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
}

export function whatsappMessage({ intent, button, plan, price }: WhatsAppMessage) {
  if (plan && price !== undefined) {
    return plain(
      [
        `Hello, I want to subscribe to the ${planName(plan)} Plan ($${price.toFixed(2)})`,
        `Button: ${button}`,
        `Website: ${WEBSITE}`,
      ].join("\n"),
    )
  }

  return plain(["Hello IPTV Trends", intent, `Button: ${button}`].join("\n"))
}

export function whatsappLink(message: WhatsAppMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage(message))}`
}

/** Ready-made intents so the wording stays consistent across the site. */
export const INTENT = {
  buy: "I want to buy an IPTV Trends subscription.",
  trial: "I want a free 24-hour IPTV trial.",
  contact: "I have a question about IPTV Trends.",
  reseller: "I want to become an IPTV Trends reseller.",
  promo: "I want to claim the 20% discount offer on all plans.",
  order: (plan: string) => `I want to order the ${planName(plan)} plan.`,
} as const
