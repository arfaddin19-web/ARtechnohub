import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const TITLE = 'About AR Technohub — Software & Hardware | MPOS';
const DESC =
  'AR Technohub builds MPOS business management software and supplies business hardware including PCs and thermal printers. Learn about the company behind MPOS.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['AR Technohub', 'AR Technohub Nepal', 'MPOS developer', 'business software and hardware Nepal', 'thermal printer supplier Nepal', 'thermal rolls Nepal'],
  alternates: { canonical: '/about/' },
  openGraph: {
    type: 'website',
    url: 'https://artechnohub.com.np/about/',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'AR Technohub — software and hardware for business' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

/* Set the founder's name here and it appears on the page and in the schema. */
const FOUNDER = { name: 'Mohammad Arfad Din', role: 'Founder' };

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About AR Technohub',
  description: DESC,
  url: 'https://artechnohub.com.np/about/',
  mainEntity: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AR Technohub',
    url: 'https://artechnohub.com.np',
    description: 'AR Technohub develops the MPOS business management software suite and supplies business hardware including PCs, thermal printers and thermal rolls.',
    slogan: 'Software and hardware for better business.',
    knowsAbout: ['Business management software', 'Restaurant POS', 'Hotel management software', 'Spa and salon software', 'Banquet and event software', 'HR and payroll software', 'Business computers', 'Thermal printers', 'Thermal paper rolls', 'POS peripherals'],
    ...(FOUNDER.name ? { founder: { '@type': 'Person', name: FOUNDER.name, jobTitle: FOUNDER.role } } : {}),
  },
};

const pillars = [
  {
    kicker: 'WHAT WE BUILD',
    title: 'MPOS software',
    body: 'MPOS is our software brand — business management systems for restaurants, hotels, spas, salons, banquets and HR. We build it ourselves, deploy it on your own server and support it directly.',
    points: ['Restaurant, hotel, spa and banquet management', 'Standalone HR & payroll', 'Runs on your premises, on your network', 'Bilingual support'],
    cta: { label: 'Explore MPOS products', href: '/products/' },
  },
  {
    kicker: 'WHAT WE SUPPLY',
    title: 'Business hardware',
    body: 'We also supply the hardware that runs your operation, so software and equipment can be specified and delivered together instead of sourced from two unrelated vendors.',
    points: ['PCs, desktops and laptops', 'Thermal receipt printers', 'Thermal paper rolls', 'Barcode scanners, cash drawers and POS peripherals'],
    cta: { label: 'See hardware we supply', href: '/hardware/' },
  },
];

const steps = [
  ['01', 'Tell us about the operation', 'Share how you run today, what is not working, and which hardware you already own.'],
  ['02', 'We recommend the setup', 'We suggest the MPOS modules, terminals and equipment that actually fit your volume and workflow.'],
  ['03', 'Install and hand over', 'We set up the server, install MPOS, connect your printers and terminals, and train your team.'],
  ['04', 'Support that continues', 'Updates, backups, troubleshooting and new hardware when you need it.'],
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(orgLd)}
      </script>
      <SiteHeader />
      <main>
        <section className="about-hero">
          <div className="eyebrow">ABOUT THE COMPANY</div>
          <h1>
            AR Technohub builds the software<br />
            <em>and supplies the hardware.</em>
          </h1>
          <p>
            AR Technohub is a technology business focused on one problem: making it
            easier to run a business properly. We develop{' '}
            <Link href="/products/masterpos/">MPOS</Link>, our own business
            management software, and we supply the computers, thermal printers and
            thermal rolls that businesses use every day.
          </p>
          <div className="actions">
            <Link className="gold-btn" href="/products/">Explore MPOS software</Link>
            <Link className="outline-btn" href="/hardware/">See hardware we supply</Link>
          </div>
        </section>

        <section className="about-pillars section">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>
                Two sides of the<br />
                <em>same business.</em>
              </h2>
            </div>
            <p>
              Most businesses buy software from one company and hardware from
              another, then discover the two do not agree. We supply both so the
              system is designed to work together from day one.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((p) => (
              <article className="pillar" key={p.title}>
                <span className="kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>✓ {pt}</li>
                  ))}
                </ul>
                <Link className="text-btn" href={p.cta.href}>{p.cta.label} →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="about-brand">
          <div>
            <div className="eyebrow">THE MPOS BRAND</div>
            <h2>
              One brand,<br />
              <em>five products.</em>
            </h2>
            <p>
              MPOS is short for management point of sale — the system where orders,
              billing and day-to-day control meet. The same idea applies across every
              product we build under the brand.
            </p>
            <Link className="gold-btn" href="/products/">See all MPOS products</Link>
          </div>
          <ul className="brand-list">
            <li>
              <b>MPOS Restaurant Management Software</b>
              <span>Tables, KOT, billing, inventory, purchasing and accounts.</span>
            </li>
            <li>
              <b>MPOS Hotel Management Software</b>
              <span>Reservations, front office, rooms, housekeeping and guest billing.</span>
            </li>
            <li>
              <b>MPOS Spa &amp; Salon Management Software</b>
              <span>Appointments, walk-ins, therapists, rooms, packages and customers.</span>
            </li>
            <li>
              <b>MPOS Banquet &amp; Event Management Software</b>
              <span>Enquiries, halls, packages, menus and event billing.</span>
            </li>
            <li>
              <b>MPOS HR &amp; Payroll Software</b>
              <span>Employees, attendance, leave, payroll and HR reports. Runs standalone too.</span>
            </li>
          </ul>
        </section>

        <section className="about-process section">
          <div className="section-head">
            <div>
              <div className="eyebrow">HOW WE WORK</div>
              <h2>
                From first call<br />
                <em>to daily use.</em>
              </h2>
            </div>
          </div>
          <div className="about-steps">
            {steps.map(([n, t, b]) => (
              <div key={n}>
                <strong>{n}</strong>
                <b>{t}</b>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {FOUNDER.name ? (
          <section className="about-founder">
            <div>
              <div className="eyebrow light">WHO WE ARE</div>
              <h2>
                Founded and led<br />
                <em>by {FOUNDER.name}.</em>
              </h2>
              <p>
                Software development and hardware supply are both done in-house at
                AR Technohub, which means one person is accountable for the whole
                system.
              </p>
              <Link className="gold-btn" href="/contact/">Talk to us →</Link>
            </div>
          </section>
        ) : (
          <section className="cta">
            <div>
              <div className="eyebrow light">READY WHEN YOU ARE</div>
              <h2>
                Let's look at how<br />
                <em>you run your business.</em>
              </h2>
            </div>
            <div>
              <p>
                Tell us what you operate and we will show you the MPOS workflow and
                hardware setup that fits.
              </p>
              <Link className="gold-btn" href="/contact/">Request a Demo →</Link>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
