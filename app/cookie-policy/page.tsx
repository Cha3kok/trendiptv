import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Cookie Policy | IPTV Trends',
  description: 'Learn how IPTV Trends uses cookies and analytics on our website. Manage your cookie preferences.',
  alternates: { canonical: 'https://www.trendsiptv.com/cookie-policy' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'March 30, 2026'

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-36">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Cookie Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website.
                They are widely used to make websites work efficiently, remember your preferences, and
                provide website owners with anonymised analytical information about how visitors use
                their sites.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. How We Use Cookies</h2>
              <p className="mb-3">
                IPTV Trends uses a minimal number of cookies. We do not use advertising cookies or
                sell your browsing data to third parties. The cookies we use fall into the following
                categories:
              </p>

              <div className="flex flex-col gap-4">
                {/* Essential */}
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">Essential</span>
                    <span className="text-xs text-muted-foreground">Always active</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These cookies are strictly necessary for the website to function. They enable core
                    features such as page navigation and access to secure areas. The website cannot
                    function properly without them. No consent is required for these cookies.
                  </p>
                  <table className="mt-3 w-full text-xs">
                    <thead>
                      <tr className="border-b border-border/30 text-left">
                        <th className="pb-2 font-semibold text-foreground">Cookie</th>
                        <th className="pb-2 font-semibold text-foreground">Purpose</th>
                        <th className="pb-2 font-semibold text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                      <tr>
                        <td className="py-2 pr-4 font-mono text-foreground">cookie_consent</td>
                        <td className="py-2 pr-4">Stores your cookie consent preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Analytics */}
                <div className="rounded-xl border border-border/50 bg-card p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-semibold text-blue-400">Analytics</span>
                    <span className="text-xs text-muted-foreground">Requires consent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We use <strong className="text-foreground">Vercel Analytics</strong> to collect
                    anonymised data about how visitors interact with our website (page views, referral
                    sources, device type, country). This data contains no personally identifiable
                    information and helps us improve the site.
                  </p>
                  <table className="mt-3 w-full text-xs">
                    <thead>
                      <tr className="border-b border-border/30 text-left">
                        <th className="pb-2 font-semibold text-foreground">Service</th>
                        <th className="pb-2 font-semibold text-foreground">Data Collected</th>
                        <th className="pb-2 font-semibold text-foreground">Provider</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                      <tr>
                        <td className="py-2 pr-4 font-mono text-foreground">Vercel Analytics</td>
                        <td className="py-2 pr-4">Page views, device, country (anonymised)</td>
                        <td className="py-2">Vercel Inc.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Third-Party Cookies</h2>
              <p>
                When you click on our WhatsApp links, you will be redirected to WhatsApp (operated by
                Meta Platforms, Inc.). WhatsApp may set its own cookies or collect data in accordance
                with{' '}
                <Link
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta's Privacy Policy
                </Link>
                . We are not responsible for third-party cookies set outside our domain.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Managing Your Cookie Preferences</h2>
              <p className="mb-3">You can control and manage cookies in several ways:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Cookie banner</strong> — use the consent banner displayed on your first visit to accept or decline analytics cookies.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Browser settings</strong> — most browsers allow you to block or delete cookies via their settings. Note that blocking essential cookies may affect website functionality.</span></li>
                <li className="flex gap-2"><span className="text-primary shrink-0">•</span><span><strong className="text-foreground">Opt out of Vercel Analytics</strong> — visit <Link href="https://vercel.com/docs/analytics/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Vercel's privacy documentation</Link> for opt-out instructions.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Do Not Track</h2>
              <p>
                Our website respects the Do Not Track (DNT) signal. If your browser has DNT enabled,
                Vercel Analytics will not track your session.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy periodically. Any changes will be reflected by the
                "Last updated" date at the top of this page. We encourage you to review this policy
                regularly.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Contact Us</h2>
              <p>For any questions about our use of cookies:</p>
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
