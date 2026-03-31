import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service | IPTV Trends',
  description: 'Read the Terms of Service for IPTV Trends. By using our IPTV subscription service, you agree to these terms and conditions.',
  alternates: { canonical: 'https://www.trendsiptv.com/terms-of-service' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'March 30, 2026'

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the IPTV Trends website at{' '}
                <Link href="https://www.trendsiptv.com" className="text-primary hover:underline">
                  www.trendsiptv.com
                </Link>{' '}
                or purchasing any subscription plan, you agree to be bound by these Terms of Service and
                our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                If you do not agree to these terms, do not use our service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Service Description</h2>
              <p className="mb-3">
                IPTV Trends provides a premium IPTV subscription service that gives subscribers access to
                live television channels, video-on-demand (VOD) content, and related streaming features
                via compatible IPTV applications and devices.
              </p>
              <p>
                We offer the following subscription plans: 1 Month ($19.99), 3 Months ($39.99), 6 Months
                ($55.99), 12 Months ($79.99), and 24 Months ($129.99). All prices are in USD and are
                subject to change with prior notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Account and Access</h2>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Upon purchase, you will receive Xtream Codes credentials (username, password, server URL) via WhatsApp.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>You are responsible for keeping your credentials confidential. Do not share your account with anyone outside your household.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Each subscription is licensed for personal use only on a single connection at a time, unless a multi-connection plan is purchased.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>We reserve the right to suspend accounts found to be sharing credentials outside of permitted use.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Payment Terms</h2>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Payment is required in full before subscription activation.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>We accept Visa/Mastercard, PayPal, cryptocurrency (Bitcoin, USDT), and bank transfer.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Subscriptions are not automatically renewed. You must contact us before expiry to renew.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>All transactions are final except where covered by our{' '}<Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Resell, sublicense, or redistribute your subscription without our written permission</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Use the service for commercial purposes (e.g. public screening in bars, hotels, or public venues)</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Attempt to reverse-engineer, hack, or disrupt our servers or infrastructure</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Use automated tools, bots, or scrapers on our website</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Share your login credentials publicly or in reseller panels without authorisation</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Service Availability</h2>
              <p className="mb-3">
                We strive to maintain 99.9% server uptime. However, we do not guarantee uninterrupted,
                error-free service. Temporary outages may occur due to:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Scheduled maintenance (we will notify users in advance where possible)</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Third-party network issues beyond our control</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Force majeure events</span></li>
              </ul>
              <p className="mt-3">
                Extended outages beyond 48 hours that are attributable to our infrastructure may entitle
                you to a proportional subscription extension at our discretion.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Intellectual Property</h2>
              <p>
                All content on our website — including text, graphics, logos, and design — is the property
                of IPTV Trends and protected by applicable intellectual property laws. You may not copy,
                reproduce, or distribute any part of our website without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
              <p className="mb-3">
                To the maximum extent permitted by law, IPTV Trends shall not be liable for:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Any indirect, incidental, special, or consequential damages</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Loss of data, revenue, or profits arising from use or inability to use our service</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Issues caused by your internet connection, device, or third-party IPTV applications</span></li>
              </ul>
              <p className="mt-3">
                Our total liability in any case shall not exceed the amount you paid for the subscription
                period during which the issue arose.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your subscription without prior notice if you
                breach these Terms of Service. In cases of abuse or fraud, no refund will be issued.
                You may cancel your subscription at any time, subject to our{' '}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes take effect
                immediately upon posting to the website. Your continued use of the service after changes
                are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">11. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with applicable laws. Any disputes
                shall first be attempted to be resolved amicably by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">12. Contact Us</h2>
              <p>For any questions regarding these Terms of Service:</p>
              <div className="mt-3 rounded-xl border border-border/50 bg-card p-4">
                <p className="font-medium text-foreground">IPTV Trends</p>
                <p className="mt-1">WhatsApp: <Link href="https://wa.me/212707711512" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+212 707-711512</Link></p>
                <p className="mt-1">Website: <Link href="https://www.trendsiptv.com" className="text-primary hover:underline">www.trendsiptv.com</Link></p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
