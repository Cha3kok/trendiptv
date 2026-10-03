/**
 * Single source of truth for the brand facts used on the homepage.
 * The visible page and the JSON-LD structured data both read from here,
 * so search engines and AI answers always see the same numbers.
 */

/**
 * The live address of the website. Every canonical URL, sitemap entry, structured-data ID,
 * robots.txt line and WhatsApp message is built from this one value.
 * To move domains, set NEXT_PUBLIC_SITE_URL in Vercel (or change the default below) and redeploy.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ww1.trendsiptv.com").replace(/\/$/, "")
export const SITE_HOST = new URL(SITE_URL).host

export const SITE = {
  name: "IPTV Trends",
  alternateName: ["Trends IPTV", "trendsiptv.com"],
  domain: "trendsiptv.com",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  phone: "+212-707-711512",
  phoneDisplay: "+212 707-711512",
  whatsapp: "https://wa.me/212707711512",
  languages: ["English", "French", "Arabic", "Spanish"],
} as const

/** Shown on the page and used as WebPage.dateModified. Update when content changes. */
export const LAST_UPDATED = "2026-10-03"
export const LAST_UPDATED_LABEL = "October 3, 2026"

export type PlanPrice = {
  name: string
  months: number
  price: number
}

export const PLAN_PRICES: PlanPrice[] = [
  { name: "1 Month", months: 1, price: 19.99 },
  { name: "3 Months", months: 3, price: 39.99 },
  { name: "6 Months", months: 6, price: 55.99 },
  { name: "12 Months", months: 12, price: 79.99 },
  { name: "24 Months", months: 24, price: 129.99 },
]

const monthly = PLAN_PRICES[0].price

export function perMonth(plan: PlanPrice) {
  return plan.price / plan.months
}

export function savingsVsMonthly(plan: PlanPrice) {
  return Math.round((1 - perMonth(plan) / monthly) * 100)
}

export const LOWEST_MONTHLY = Math.min(...PLAN_PRICES.map(perMonth))

/** Short, self-contained facts. Rendered as a visible list near the top of the homepage. */
export const KEY_FACTS: { label: string; value: string }[] = [
  { label: "Live TV channels", value: "21,000+ from 50+ countries" },
  { label: "Movies & series on demand", value: "65,000+ titles, updated daily" },
  { label: "Picture quality", value: "SD, HD, Full HD and 4K UHD" },
  { label: "Price", value: `From $${monthly.toFixed(2)} for 1 month, or $${LOWEST_MONTHLY.toFixed(2)}/month on the 24-month plan` },
  { label: "Free trial", value: "24 hours, requested on WhatsApp" },
  { label: "Refund policy", value: "7-day money-back guarantee" },
  { label: "Supported devices", value: "Smart TV, Firestick, Android, iPhone & iPad, Apple TV, MAG, PC & Mac" },
  { label: "Compatible apps", value: "IPTV Smarters Pro, TiviMate and other Xtream Codes or M3U players" },
  { label: "Activation", value: "Instant, credentials sent on WhatsApp after payment" },
  { label: "Support", value: "24/7 on WhatsApp in English, French, Arabic and Spanish" },
]

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is IPTV Trends?",
    answer:
      "IPTV Trends is a premium IPTV subscription service that streams 21,000+ live TV channels and 65,000+ movies and series over your internet connection, in quality up to 4K UHD. It works on Smart TVs, Amazon Firestick, Android, iPhone and iPad, MAG boxes and computers through apps such as IPTV Smarters Pro and TiviMate. Plans start at $19.99 for one month, and a free 24-hour trial is available on WhatsApp.",
  },
  {
    question: "How does an IPTV subscription work?",
    answer:
      "An IPTV subscription delivers live TV channels and on-demand video over the internet instead of cable or satellite. With IPTV Trends, you pay for a plan, receive a username, password and server URL on WhatsApp, and enter them in an IPTV player app on your TV, streaming stick, phone or computer. The app then loads the channel list, TV guide (EPG) and on-demand library, and streams them through your home internet connection.",
  },
  {
    question: "How do I buy an IPTV Trends subscription?",
    answer:
      "To buy IPTV Trends, choose a plan on this page and tap Get Started, which opens WhatsApp with your plan pre-selected. Pay with card, PayPal, cryptocurrency or bank transfer, and your login details arrive within minutes. You can also request a free 24-hour trial first.",
  },
  {
    question: "How much does an IPTV Trends subscription cost?",
    answer:
      "IPTV Trends costs $19.99 for 1 month, $39.99 for 3 months, $55.99 for 6 months, $79.99 for 12 months and $129.99 for 24 months. The 24-month plan works out to about $5.42 per month, which is 73% less than paying monthly. Every plan includes the full channel list, the 65,000+ title on-demand library, 4K quality, anti-freeze technology and 24/7 support.",
  },
  {
    question: "Does IPTV Trends offer a free IPTV trial?",
    answer:
      "Yes. IPTV Trends offers a free 24-hour trial so you can test the channel lineup, the on-demand library, picture quality and streaming stability before you pay. Message us on WhatsApp to request your trial, and we send the login details within minutes.",
  },
  {
    question: "What is the IPTV Trends refund policy?",
    answer:
      "Every IPTV Trends plan comes with a 7-day money-back guarantee. If you are not satisfied within 7 days of purchase, contact support on WhatsApp with your order details and we refund the payment in full. The full conditions are on our Refund Policy page.",
  },
  {
    question: "What payment methods does IPTV Trends accept?",
    answer:
      "IPTV Trends accepts credit and debit cards (Visa, Mastercard), PayPal, cryptocurrency (Bitcoin, USDT) and bank transfer. Contact us on WhatsApp and we will help you choose the most convenient payment option for your subscription.",
  },
  {
    question: "Can I use IPTV Trends on multiple devices at the same time?",
    answer:
      "Yes. You can install IPTV Trends on as many devices as you like, and multi-connection options let you watch on several screens at the same time. Ask us on WhatsApp about multi-screen plans for families who want to stream on a Smart TV, Firestick and phone simultaneously.",
  },
  {
    question: "What internet speed do I need for IPTV Trends?",
    answer:
      "For smooth streaming, IPTV Trends recommends at least 10 Mbps for HD channels and 25 Mbps for 4K UHD. A wired Ethernet connection or a strong 5 GHz Wi-Fi signal gives the most stable picture, especially during live sports.",
  },
  {
    question: "What is IPTV Trends Anti-Freeze Technology?",
    answer:
      "Anti-Freeze is the IPTV Trends server technology that reduces buffering. It balances load across servers and switches your stream to the best available server in real time, which keeps playback smooth during peak hours, live sports and pay-per-view events.",
  },
  {
    question: "How do I install and set up IPTV Trends on my device?",
    answer:
      "Setting up IPTV Trends takes under 5 minutes. After you subscribe, we send Xtream Codes login details on WhatsApp. Install a compatible player such as IPTV Smarters Pro or TiviMate on your Smart TV, Firestick, Android, iOS device or MAG box, enter the login details, and start watching. Step-by-step guides for each device are in the setup section above and on our blog.",
  },
  {
    question: "What channels are included in the IPTV Trends channel list?",
    answer:
      "IPTV Trends includes 21,000+ live channels from 50+ countries across sports, live football and PPV events, entertainment, movies, news, kids, music, documentaries and international categories. The subscription also includes 65,000+ movies and series on demand, updated daily.",
  },
  {
    question: "How do I become an IPTV Trends reseller?",
    answer:
      "To become an IPTV Trends reseller, contact us on WhatsApp. Resellers get wholesale pricing, a reseller panel to create and manage client subscriptions and credits, setup training and 24/7 priority support.",
  },
]
