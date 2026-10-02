import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { HARDWARE } from './data';

const TITLE = 'Hardware — PCs, Thermal Printers & Rolls | AR Technohub';
const DESC =
  'AR Technohub supplies business hardware with MPOS: PCs and POS terminals, thermal receipt and kitchen printers, thermal paper rolls and POS peripherals.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'thermal printer Nepal',
    'thermal rolls supplier Nepal',
    'thermal paper rolls',
    'POS computer Nepal',
    'POS terminal Nepal',
    'barcode scanner Nepal',
    'cash drawer Nepal',
    'business computer supplier Nepal',
    'restaurant hardware Nepal',
  ],
  alternates: { canonical: '/hardware/' },
  openGraph: {
    type: 'website',
    url: 'https://artechnohub.com.np/hardware/',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'AR Technohub business hardware' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

const FAQ = [
  {
    q: 'Can I buy hardware without MPOS software?',
    a: 'Yes. We supply hardware on its own. Many customers already run MPOS and come to us for printers or rolls, and we size everything to the system you have.',
  },
  {
    q: 'Do you deliver and install the hardware?',
    a: 'Yes. Hardware is delivered, connected to MPOS, configured and tested with you before handover, including printers, scanners and cash drawers.',
  },
  {
    q: 'Which brands do you supply?',
    a: 'We supply the models that suit the job and budget after learning your workload. Tell us what you have or what you need and we will recommend a specification with a quote.',
  },
  {
    q: 'Can I order thermal rolls on a regular schedule?',
    a: 'Yes. Thermal rolls and other consumables can be arranged as a standing supply so billing never stops for a missing roll.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HardwarePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="product-hero">
          <div className="eyebrow">HARDWARE BY AR TECHNOHUB</div>
          <h1>
            The hardware that<br />
            <em>runs your business.</em>
          </h1>
          <p>
            AR Technohub supplies PCs, thermal printers, thermal rolls and POS
            peripherals — specified for the way you actually work, delivered and
            installed alongside MPOS so everything is tested together before you
            rely on it.
          </p>
          <div className="actions">
            <Link className="gold-btn" href="/contact">Request a Quote <span>→</span></Link>
            <Link className="outline-btn" href="/#hardware-software">Software + hardware together</Link>
          </div>
        </section>

        <section className="all-products">
          {HARDWARE.map((h, i) => (
            <Link className="big-product" href={`/hardware/${h.slug}/`} key={h.slug}>
              <div className="number">0{i + 1}</div>
              <div>
                <span>{h.kicker}</span>
                <h2>{h.name}</h2>
                <p>{h.short}</p>
                <b>Explore →</b>
              </div>
              <div className="round-arrow">↗</div>
            </Link>
          ))}
        </section>

        <section className="hardware-why">
          <div className="why-copy">
            <div className="eyebrow">WHY BUY HARDWARE FROM US</div>
            <h2>
              Software and hardware,<br />
              <em>tested together.</em>
            </h2>
            <p>
              A printer that behaves differently outside MPOS, or a till computer
              without the right ports, turns into a service call. We supply
              hardware that has been connected to the software we build, so problems
              surface during installation instead of during your busiest hour.
            </p>
            <div className="why-grid">
              <div><strong>01</strong><b>Specified for the job</b><small>We size hardware to your terminals, volume and budget.</small></div>
              <div><strong>02</strong><b>Installed and tested</b><small>Connected to MPOS and confirmed before handover.</small></div>
              <div><strong>03</strong><b>One point of contact</b><small>Software and hardware issues go to the same team.</small></div>
              <div><strong>04</strong><b>Consumables available</b><small>Thermal rolls and spares when you need a re-order.</small></div>
            </div>
            <Link className="gold-btn" href="/contact">Talk to our team →</Link>
          </div>
        </section>

        <section className="faq-section">
          <div className="eyebrow">COMMON QUESTIONS</div>
          <h2>
            Questions about<br />
            <em>hardware supply?</em>
          </h2>
          <div className="faq-grid">
            {FAQ.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
          <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(faqLd)}</script>
        </section>

        <section className="cta">
          <div>
            <div className="eyebrow light">READY WHEN YOU ARE</div>
            <h2>
              Tell us what you run,<br />
              <em>and we will spec the rest.</em>
            </h2>
          </div>
          <div>
            <p>
              Send us your terminal count and what you need to print. We will come
              back with a hardware list and a quote.
            </p>
            <Link className="gold-btn" href="/contact">Request a Quote →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}