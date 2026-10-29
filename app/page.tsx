import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ScrollReveal from './components/ScrollReveal';
import Testimonials from './components/Testimonials';

const TITLE = 'AR Technohub — Software, Hardware & Technology in Pokhara, Nepal';
const DESC =
  'AR Technohub is a Pokhara-based technology company. We build MPOS business management software and the Noor App, and supply the PCs, thermal printers and POS hardware that run it.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['AR Technohub', 'AR Technohub Nepal', 'technology company Pokhara', 'business software Nepal', 'business hardware Nepal', 'POS software Nepal', 'thermal printer Nepal', 'MPOS software', 'Noor App'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np/',
    siteName: 'AR Technohub',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'AR Technohub — software and hardware for better business' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

const STRIP = [
  'SOFTWARE DEVELOPMENT',
  'POS SYSTEMS',
  'THERMAL PRINTING',
  'BUSINESS HARDWARE',
  'IMPLEMENTATION',
  'LOCAL SUPPORT',
];

/* Every figure here is taken from something already published on this site —
   the footer address, the about page founder, the product catalogue. No
   invented client counts or years in business. */
const FACTS: [string, string, string][] = [
  ['Base', 'Pokhara, Nepal', 'Indramarga-10, Gandaki Province 33700'],
  ['Led by', 'Mohammad Arfad Din', 'Founder — accountable for the whole system'],
  ['Software', 'Six products', 'The MPOS suite, plus the Noor App'],
  ['Support', 'English & Nepali', 'In person or over the phone, after handover'],
];

const VALUES = [
  ['Built in-house', 'MPOS and Noor are developed by our own team, not resold under another name.'],
  ['Local support', 'Setup, training and help from Pokhara, for businesses across Nepal.'],
  ['One accountable team', 'Software and hardware come from the same people.'],
  ['Bilingual service', 'Support in English and Nepali, in person or over the phone.'],
];

const SERVICES = [
  {
    num: '01',
    title: 'Software development',
    body: 'We design and build MPOS, our business management software for restaurants, hotels, spas, salons, banquets and payroll — and Noor, our Islamic lifestyle app. Clear screens, fast workflows and records that stay reliable.',
    href: '/mpos',
    cta: 'Explore MPOS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Business hardware',
    body: 'We supply the computers, POS terminals, thermal receipt and kitchen printers, paper rolls, scanners and cash drawers that businesses rely on every day.',
    href: '/hardware',
    cta: 'See hardware',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 8V4h10v4M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v6H7z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Implementation & support',
    body: 'We specify the setup, install the software, connect the hardware and train your team. When something needs attention, the same people are still there.',
    href: '/contact',
    cta: 'Talk to us',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 13a8 8 0 1 1 16 0M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Zm16 0v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
        <path d="M12 21h2a3 3 0 0 0 3-3" />
      </svg>
    ),
  },
];

type ProductCard = {
  href: string;
  kicker: string;
  name: string;
  title: string;
  desc: string;
  points: string[];
  cta: string;
  shot?: string;
  alt?: string;
  photo?: string;
};

const PRODUCTS: ProductCard[] = [
  {
    href: '/mpos',
    kicker: 'SOFTWARE',
    name: 'MPOS',
    title: 'Business management software',
    desc: 'Our own software brand for restaurants, hotels, spas, salons, banquets and payroll. Orders, billing, inventory, staff and reports run on one connected platform.',
    points: ['Restaurant POS, KOT & billing', 'Hotel, spa and banquet operations', 'HR, payroll and inventory', 'Implemented and supported locally'],
    cta: 'Explore MPOS',
    shot: '/product/pos-tables.webp',
    alt: 'MPOS table floor screen',
  },
  {
    href: '/hardware',
    kicker: 'HARDWARE',
    name: 'Business Hardware',
    title: 'The equipment that runs it',
    desc: 'PCs and POS terminals, thermal receipt and kitchen printers, thermal rolls, scanners, cash drawers and the accessories a billing counter needs.',
    points: ['PCs, laptops & POS terminals', 'Thermal printers & paper rolls', 'Scanners, drawers & displays', 'Installed and tested with MPOS'],
    cta: 'Explore Hardware',
    photo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85',
  },
];

const MODULES = [
  ['/products/masterpos/', 'Restaurant Management', 'Orders, tables, KOT, billing and inventory.'],
  ['/products/hotel/', 'Hotel Management', 'Reservations, front office, rooms and folios.'],
];

const STEPS = [
  ['01', 'Tell us about the operation', 'Share how you run today, what is not working, and the hardware you already own.'],
  ['02', 'We recommend the setup', 'We suggest the MPOS modules and equipment that fit your volume and workflow.'],
  ['03', 'Install and hand over', 'We set up the software, connect your printers and terminals, and train your team.'],
  ['04', 'Support that continues', 'Updates, backups, troubleshooting and new hardware when you need it.'],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <main>
        <section className="hub-hero">
          <div className="hub-hero-inner">
            <div className="hub-hero-copy">
              <div className="eyebrow light">AR TECHNOHUB &middot; POKHARA, NEPAL</div>
              <h1>
                Software we build.<br />
                <em>Hardware we supply.</em>
              </h1>
              <p>
                AR Technohub is a technology company focused on one problem: making
                it easier to run a business properly. We develop{' '}
                <Link href="/mpos">MPOS</Link>, our own business management software,
                and supply the computers, printers and POS hardware that run it.
              </p>
              <div className="actions">
                <Link className="gold-btn" href="/mpos">Explore MPOS <span>→</span></Link>
                <Link className="outline-btn hub-outline-btn" href="/contact">Talk to us</Link>
              </div>
              <div className="hub-hero-points">
                <span>In-house software</span>
                <span>Business hardware</span>
                <span>Local support</span>
              </div>
            </div>
            <div className="hub-hero-visual">
              <div className="hub-hero-frame">
                <div className="hub-hero-frame-bar">
                  <i /><i /><i />
                  <span>MPOS &middot; Business Dashboard</span>
                </div>
                <Image
                  src="/product/dashboard.webp"
                  alt="MPOS business dashboard showing sales, orders and performance"
                  width={1400}
                  height={875}
                  priority
                />
              </div>
              <div className="hub-hero-logo-card">
                <Image src="/logo-ar.png" alt="AR Technohub logo" width={256} height={228} />
                <div>
                  <small>THE COMPANY</small>
                  <strong>Software &amp; hardware<br />for better business.</strong>
                </div>
              </div>
              <div className="hub-hero-chip">Based in Pokhara &middot; Serving Nepal</div>
            </div>
          </div>
        </section>

        <div className="hub-strip" aria-hidden="true">
          <div className="hub-strip-track">
            {[0, 1].map((group) => (
              <div className="hub-strip-group" key={group}>
                {STRIP.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="hub-facts" data-reveal>
          <div className="hub-facts-inner">
            {FACTS.map(([label, value, note]) => (
              <div key={label}>
                <small>{label}</small>
                <b>{value}</b>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="hub-about" data-reveal>
          <div className="hub-about-media">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
              alt="Business technology workspace"
              width={1200}
              height={1400}
            />
            <div className="hub-about-card">
              <Image src="/logo-ar.png" alt="" width={256} height={228} aria-hidden="true" />
              <div>
                <b>Pokhara, Nepal</b>
                <small>Built and supported locally</small>
              </div>
            </div>
          </div>
          <div className="hub-about-copy">
            <div className="eyebrow">WHO WE ARE</div>
            <h2>
              A technology company<br />
              <em>built around everyday business.</em>
            </h2>
            <p>
              AR Technohub exists for a simple reason: businesses deserve software
              that fits the way they actually work. We build MPOS in-house and supply
              the hardware it runs on, so our customers deal with one team instead of
              two.
            </p>
            <p>
              From our base in Pokhara, we implement, train and support businesses
              across Nepal. Our work is practical: clear screens, reliable records and
              equipment that is tested before handover.
            </p>
            <div className="hub-mission">
              <span>OUR MISSION</span>
              <p>
                Make it easier to run a business properly — software that fits the way
                people actually work, hardware tested before it reaches you, and one
                team that stays accountable long after the handover.
              </p>
            </div>
            <div className="hub-values">
              {VALUES.map(([title, body]) => (
                <div key={title}>
                  <b>{title}</b>
                  <small>{body}</small>
                </div>
              ))}
            </div>
            <Link className="text-btn" href="/about">More about AR Technohub →</Link>
          </div>
        </section>

        <section className="section hub-services" data-reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>Three ways we<br /><em>help businesses run.</em></h2>
            </div>
            <p className="hub-services-intro">
              Most businesses buy software from one company and hardware from
              another, then discover the two do not agree. We bring both together.
            </p>
          </div>
          <div className="hub-service-grid" data-reveal-group>
            {SERVICES.map((s) => (
              <article className="hub-service" key={s.num}>
                <div className="hub-service-top">
                  <span className="hub-service-icon">{s.icon}</span>
                  <span className="hub-service-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href={s.href}>{s.cta} →</Link>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="section company-products" data-reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE MAKE &amp; SUPPLY</div>
              <h2>Two product lines.<br /><em>One accountable team.</em></h2>
            </div>
            <p className="company-products-intro">
              Choose the software that runs the business, the hardware it runs on,
              or both together. Everything is specified, installed and supported by
              AR Technohub.
            </p>
          </div>
          <div className="company-product-grid" data-reveal-group>
            {PRODUCTS.map((p) => (
              <Link className="company-product-card" href={p.href} key={p.name}>
                <div className="company-product-media">
                  {p.shot ? (
                    <Image src={p.shot} alt={p.alt || `${p.name} screen`} width={1400} height={875} />
                  ) : (
                    <div className="company-product-photo" style={{ backgroundImage: `url(${p.photo})` }} />
                  )}
                  <span className="company-product-kicker">{p.kicker}</span>
                </div>
                <div className="company-product-body">
                  <span className="company-product-name">{p.name}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.points.map((point) => (
                      <li key={point}>✓ {point}</li>
                    ))}
                  </ul>
                  <b>{p.cta} →</b>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="hub-noor" data-reveal>
          <div className="hub-noor-badge">MOBILE APP</div>
          <div className="hub-noor-copy">
            <span>ALSO FROM AR TECHNOHUB</span>
            <h3>Noor — A Complete Muslim Companion</h3>
            <p>
              Prayer times, mosque Jamaat schedules, Qibla direction, nearby mosques,
              halal food and the Holy Quran, brought together in one Islamic
              lifestyle app.
            </p>
          </div>
          <Link className="gold-btn" href="/products/noor">Explore Noor App <span>→</span></Link>
        </section>

        <section className="company-modules" data-reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">INSIDE MPOS</div>
              <h2>One suite,<br /><em>two solutions.</em></h2>
            </div>
            <Link href="/products" className="text-btn">View all products →</Link>
          </div>
          <div className="company-module-grid" data-reveal-group>
            {MODULES.map(([href, name, desc]) => (
              <Link className="company-module" href={href} key={href}>
                <b>{name}</b>
                <p>{desc}</p>
                <span>Explore →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="why" data-reveal>
          <div className="why-image" />
          <div className="why-copy">
            <div className="eyebrow">WHY AR TECHNOHUB</div>
            <h2>One team.<br /><em>Two sides of the system.</em></h2>
            <p>
              A printer that behaves differently outside the software, or a till
              computer without the right ports, turns into a service call. Because we
              build the software and supply the hardware, problems surface during
              installation instead of during your busiest hour.
            </p>
            <div className="why-grid" data-reveal-group>
              <div><strong>01</strong><b>Software we build</b><small>MPOS and Noor are developed in-house, not resold.</small></div>
              <div><strong>02</strong><b>Hardware we supply</b><small>Printers, terminals and peripherals tested with MPOS.</small></div>
              <div><strong>03</strong><b>Local implementation</b><small>Setup, training and support in Pokhara and across Nepal.</small></div>
              <div><strong>04</strong><b>One point of contact</b><small>Software and hardware issues go to the same team.</small></div>
            </div>
            <Link className="gold-btn" href="/about">About AR Technohub →</Link>
          </div>
        </section>

        <section className="section company-process" data-reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">HOW WE WORK</div>
              <h2>From first call<br /><em>to daily use.</em></h2>
            </div>
            <p className="hub-services-intro">
              No hand-offs between vendors. We stay with the setup from the first
              conversation to the day-to-day questions.
            </p>
          </div>
          <div className="about-steps" data-reveal-group>
            {STEPS.map(([n, t, b]) => (
              <div key={n}>
                <strong>{n}</strong>
                <b>{t}</b>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </section>

        <Testimonials heading="Businesses that run on AR Technohub" />

        <section className="cta">
          <div>
            <div className="eyebrow light">READY WHEN YOU ARE</div>
            <h2>Let&apos;s look at how<br /><em>you run your business.</em></h2>
          </div>
          <div>
            <p>
              Tell us what you operate and we will show you the MPOS workflow and
              hardware setup that fits.
            </p>
            <Link className="gold-btn" href="/contact">Request a Demo →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
