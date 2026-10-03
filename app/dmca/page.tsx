import { SITE_URL, SITE_HOST } from "@/lib/site"
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Reveal } from '@/components/motion/reveal'
import { whatsappLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'DMCA Policy | IPTV Trends',
  description:
    'IPTV Trends respects intellectual property rights. Read our DMCA policy to learn how to submit a copyright infringement notice or a counter-notice.',
  alternates: { canonical: `${SITE_URL}/dmca` },
  robots: { index: true, follow: true },
}

const lastUpdated = 'October 3, 2026'

// Add a dedicated copyright email here (e.g. 'dmca@yourdomain.com') to show it on the page.
const dmcaEmail = ''

const whatsappDmcaLink = whatsappLink({
  intent: 'I would like to submit a DMCA copyright notice.',
  button: '+212 707-711512',
  section: 'DMCA Policy — Contact for DMCA notices',
  page: '/dmca',
})

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="shrink-0 text-primary">•</span>
      <span>{children}</span>
    </li>
  )
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="shrink-0 text-primary">{n}.</span>
      <span>{children}</span>
    </li>
  )
}

export default function DmcaPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pb-20 pt-44">
        <Reveal fade={false} className="mx-auto max-w-3xl">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">DMCA Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="mb-10 rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="text-sm font-medium text-primary">We respect copyright</p>
            <p className="mt-1 text-sm text-muted-foreground">
              IPTV Trends responds to valid notices of alleged copyright infringement in line with
              the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512. If you believe content
              connected to our website or service infringes your rights, tell us and we will act
              promptly.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Our Commitment</h2>
              <p>
                IPTV Trends (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects the intellectual
                property rights of others and expects its users to do the same. We do not host,
                upload or claim ownership of third-party television content, and we are not
                affiliated with any broadcaster, network or streaming platform. When we receive a
                valid copyright notice, we review it and remove or disable access to the material
                concerned as quickly as possible.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                2. How to File a Copyright Infringement Notice
              </h2>
              <p className="mb-3">
                If you are a copyright owner, or are authorised to act on behalf of one, please send
                a written notice that includes all of the following:
              </p>
              <ol className="flex flex-col gap-2 pl-4">
                <Step n={1}>
                  A physical or electronic signature of the copyright owner or a person authorised
                  to act on their behalf.
                </Step>
                <Step n={2}>
                  Identification of the copyrighted work you claim has been infringed.
                </Step>
                <Step n={3}>
                  Identification of the material you claim is infringing, with enough detail for us
                  to locate it, such as the exact URL, stream or channel identifier.
                </Step>
                <Step n={4}>
                  Your contact information: full name, postal address, telephone number and email
                  address.
                </Step>
                <Step n={5}>
                  A statement that you have a good-faith belief that the use of the material is not
                  authorised by the copyright owner, its agent or the law.
                </Step>
                <Step n={6}>
                  A statement that the information in your notice is accurate and, under penalty of
                  perjury, that you are the copyright owner or authorised to act on their behalf.
                </Step>
              </ol>
              <p className="mt-3">
                Notices that do not include all of these elements may not be processed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. What Happens Next</h2>
              <ul className="flex flex-col gap-2 pl-4">
                <Bullet>
                  We acknowledge receipt of a complete notice and review it, normally within{' '}
                  <strong className="text-foreground">48 hours</strong>.
                </Bullet>
                <Bullet>
                  If the notice is valid, we remove or disable access to the material identified.
                </Bullet>
                <Bullet>
                  Where possible, we inform the affected user that the material was removed and
                  share a copy of the notice with them.
                </Bullet>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Counter-Notice</h2>
              <p className="mb-3">
                If you believe material was removed by mistake or misidentification, you may send a
                counter-notice that includes:
              </p>
              <ol className="flex flex-col gap-2 pl-4">
                <Step n={1}>Your physical or electronic signature.</Step>
                <Step n={2}>
                  Identification of the material that was removed and where it appeared before
                  removal.
                </Step>
                <Step n={3}>
                  A statement, under penalty of perjury, that you have a good-faith belief the
                  material was removed as a result of mistake or misidentification.
                </Step>
                <Step n={4}>
                  Your name, address and telephone number, and a statement that you consent to the
                  jurisdiction of the appropriate court and will accept service of process from the
                  person who filed the original notice.
                </Step>
              </ol>
              <p className="mt-3">
                After receiving a valid counter-notice, we may restore the material in 10 to 14
                business days unless the original complainant informs us that they have filed a
                court action.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Repeat Infringers</h2>
              <p>
                We terminate, in appropriate circumstances, the accounts of users who are found to be
                repeat infringers, consistent with the Termination section of our{' '}
                <Link href="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. False Claims</h2>
              <p>
                Under 17 U.S.C. § 512(f), anyone who knowingly misrepresents that material is
                infringing, or that it was removed by mistake, may be liable for damages, including
                costs and legal fees. Please make sure your claim is accurate before submitting it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Trademarks</h2>
              <p>
                All trademarks, logos and brand names belong to their respective owners. Their use
                on third-party devices or apps does not imply any endorsement of, or affiliation
                with, IPTV Trends.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact for DMCA Notices</h2>
              <p>Send copyright notices and counter-notices to:</p>
              <div className="mt-3 rounded-xl border border-border/50 bg-card p-4">
                <p className="font-medium text-foreground">IPTV Trends Copyright Team</p>
                {dmcaEmail && (
                  <p className="mt-1">
                    Email:{' '}
                    <a href={`mailto:${dmcaEmail}`} className="text-primary hover:underline">
                      {dmcaEmail}
                    </a>
                  </p>
                )}
                <p className="mt-1">
                  WhatsApp:{' '}
                  <Link
                    href={whatsappDmcaLink}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +212 707-711512
                  </Link>
                </p>
                <p className="mt-1">Website: {SITE_HOST}</p>
              </div>
            </section>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
