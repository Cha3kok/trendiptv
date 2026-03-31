import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Refund Policy | IPTV Trends',
  description: 'IPTV Trends offers a 7-day money-back guarantee on all subscription plans. Read our full refund policy to understand how to request a refund.',
  alternates: { canonical: 'https://www.trendsiptv.com/refund-policy' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'March 30, 2026'

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Refund Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          {/* Highlight box */}
          <div className="mb-10 rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="text-sm font-medium text-primary">7-Day Money-Back Guarantee</p>
            <p className="mt-1 text-sm text-muted-foreground">
              If you are not fully satisfied with IPTV Trends within the first 7 days of your
              subscription, contact us and we will issue a full refund — no questions asked.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Our Guarantee</h2>
              <p>
                IPTV Trends stands behind the quality of our service. We offer a <strong className="text-foreground">7-day
                money-back guarantee</strong> on all subscription plans. If for any reason you are not
                satisfied within the first 7 days of your purchase, we will refund your payment in full.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Eligibility for a Refund</h2>
              <p className="mb-3">To be eligible for a refund, the following conditions must be met:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Your refund request is submitted within <strong className="text-foreground">7 calendar days</strong> of your purchase date.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>You contact us via WhatsApp with your order details (payment reference, subscription username).</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>The subscription was purchased directly through IPTV Trends and not via a third-party reseller.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Non-Refundable Situations</h2>
              <p className="mb-3">Refunds will not be issued in the following circumstances:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>The refund request is made after <strong className="text-foreground">7 days</strong> from the purchase date.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>The account was suspended due to a violation of our <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link> (e.g., credential sharing, abuse).</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Streaming issues are caused by your local internet connection, device incompatibility, or third-party application settings — not our servers.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>You have already used a free 24-hour trial before purchasing.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>A previous refund has already been issued for the same account.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. How to Request a Refund</h2>
              <p className="mb-3">To request a refund, contact us via WhatsApp with the following information:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">1.</span><span>Your full name</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">2.</span><span>Your subscription username</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">3.</span><span>Proof of payment (transaction ID or screenshot)</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">4.</span><span>Reason for the refund request</span></li>
              </ul>
              <div className="mt-4">
                <Link
                  href="https://wa.me/212707711512?text=Hello,%20I%20would%20like%20to%20request%20a%20refund%20for%20my%20IPTV%20Trends%20subscription."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
                >
                  Request Refund via WhatsApp
                </Link>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Refund Processing Time</h2>
              <p>
                Once your refund is approved, it will be processed within <strong className="text-foreground">3–7 business days</strong>.
                The time for the funds to appear in your account depends on your payment method:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">PayPal</strong> — typically 1–3 business days</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Visa / Mastercard</strong> — typically 5–7 business days depending on your bank</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Cryptocurrency</strong> — refunds issued in the same cryptocurrency to your provided wallet address, typically within 24 hours</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Bank transfer</strong> — typically 3–5 business days</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Free Trial Policy</h2>
              <p>
                We offer a free 24-hour IPTV trial before any purchase commitment. We strongly encourage
                you to test our service thoroughly during the trial period. The availability of a free
                trial does not affect your right to a refund under Section 2, except where noted in
                Section 3.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Contact Us</h2>
              <p>For any refund questions or disputes, contact our support team:</p>
              <div className="mt-3 rounded-xl border border-border/50 bg-card p-4">
                <p className="font-medium text-foreground">IPTV Trends Support</p>
                <p className="mt-1">WhatsApp: <Link href="https://wa.me/212707711512" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+212 707-711512</Link></p>
                <p className="mt-1">Available: 24/7</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
