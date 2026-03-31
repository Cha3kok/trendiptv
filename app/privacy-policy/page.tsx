import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | IPTV Trends',
  description: 'Learn how IPTV Trends collects, uses, and protects your personal data. Our privacy policy is fully compliant with GDPR and applicable data protection laws.',
  alternates: { canonical: 'https://www.trendsiptv.com/privacy-policy' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'March 30, 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Introduction</h2>
              <p>
                IPTV Trends ("we", "us", "our") operates the website{' '}
                <Link href="https://www.trendsiptv.com" className="text-primary hover:underline">
                  www.trendsiptv.com
                </Link>{' '}
                and provides premium IPTV subscription services. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website or
                purchase our services. Please read this policy carefully. If you disagree with its
                terms, please discontinue use of the site.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following categories of personal information:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Contact information</strong> — your name and phone number, collected when you contact us via WhatsApp to purchase a subscription or request a free trial.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Payment information</strong> — transaction details processed through third-party payment providers (PayPal, Visa/Mastercard processors, cryptocurrency networks). We do not store your full card details on our servers.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Usage data</strong> — anonymised analytics data (page views, device type, browser, country) collected automatically via Vercel Analytics when you browse our website.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Technical data</strong> — IP address, browser type, operating system, referral URL, and time of visit, collected automatically by our hosting infrastructure.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Process and fulfil your IPTV subscription orders</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Deliver your login credentials and activation details</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Provide customer support and respond to your enquiries</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Send service-related communications (renewal reminders, account updates)</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Analyse website traffic to improve user experience</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span>Comply with legal obligations</span></li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-3">
                If you are located in the European Economic Area (EEA), our legal basis for collecting and
                using your personal data depends on the data in question:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Contract performance</strong> — processing your order and delivering the subscription service</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Legitimate interests</strong> — analysing website traffic to improve our service</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Consent</strong> — for non-essential cookies, where you have provided explicit consent</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Legal obligation</strong> — where required by applicable law</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Third-Party Services</h2>
              <p className="mb-3">We use the following third-party services that may process your data:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Vercel</strong> — website hosting and anonymised analytics. Privacy policy: vercel.com/legal/privacy-policy</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">WhatsApp (Meta)</strong> — customer communications. Messages sent via WhatsApp are subject to Meta's privacy policy.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">PayPal</strong> — payment processing. Subject to PayPal's privacy policy.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Cryptocurrency networks</strong> — on-chain transactions are publicly visible by design.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes
                outlined in this policy, or as required by law. Subscription records are kept for a
                minimum of 3 years for billing and support purposes. Analytics data is retained in
                aggregated, anonymised form.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Your Rights</h2>
              <p className="mb-3">
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Access</strong> — request a copy of the data we hold about you</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Rectification</strong> — request correction of inaccurate data</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Erasure</strong> — request deletion of your data ("right to be forgotten")</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Restriction</strong> — request that we restrict processing of your data</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Portability</strong> — request your data in a machine-readable format</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Objection</strong> — object to processing based on legitimate interests</span></li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us via WhatsApp at{' '}
                <Link href="https://wa.me/212707711512" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  +212 707-711512
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Cookies</h2>
              <p>
                Our website uses cookies and similar tracking technologies. For full details, please read
                our{' '}
                <Link href="/cookie-policy" className="text-primary hover:underline">
                  Cookie Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal data from children. If you believe we have inadvertently collected data
                from a minor, please contact us immediately and we will delete it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top of
                this page will reflect any changes. We encourage you to review this policy periodically.
                Continued use of our service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
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
