import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Testimonials from '../components/Testimonials';

const PATH = '/restaurant-software-gandaki/';
const TITLE = 'Restaurant & POS Software in Gandaki Province | MPOS';
const DESC =
  'Restaurant, POS and billing software for businesses across Gandaki Province — Syangja, Waling, Damauli, Baglung, Besisahar and more, with support from Pokhara.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'restaurant software Gandaki',
    'POS software Gandaki',
    'restaurant software Syangja',
    'POS software Waling',
    'restaurant software Galyang',
    'restaurant software Dulegauda',
    'restaurant software Bhimad',
    'restaurant software Damauli',
    'restaurant software Besisahar',
    'restaurant software Baglung',
    'restaurant software Kushma',
    'restaurant software near Pokhara',
    'billing software Gandaki',
    'hotel software Gandaki',
    'रेस्टुरेन्ट सफ्टवेयर',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np' + PATH,
    siteName: 'MPOS',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'MPOS restaurant and POS software across Gandaki Province, Nepal' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

const AREA_CITIES = ['Pokhara', 'Syangja', 'Waling', 'Galyang', 'Dulegauda', 'Bhimad', 'Damauli', 'Besisahar', 'Baglung', 'Kushma', 'Gorkha'];

const DISTRICTS = [
  {
    name: 'Syangja District',
    towns: ['Syangja', 'Waling', 'Galyang'],
    body:
      'Syangja’s trading towns — Syangja bazaar, Waling and Galyang — are home to a growing number of restaurants, cafés, hotels and retail counters. AR Technohub supports businesses here with MPOS POS, billing and inventory software, with on-site setup for your team and remote help for everyday questions.',
  },
  {
    name: 'Tanahun District',
    towns: ['Damauli', 'Dulegauda', 'Bhimad'],
    body:
      'Damauli, Dulegauda and Bhimad sit along the Prithvi Highway, where highway restaurants, lodges and shops need fast billing that keeps working when the internet is patchy. MPOS is designed for local-network operation, so a busy counter does not stop when connectivity drops.',
  },
  {
    name: 'Lamjung District',
    towns: ['Besisahar'],
    body:
      'In Besisahar and around Lamjung, hotels, restaurants and seasonal businesses rely on clear bills and reliable stock records. MPOS brings orders, billing, inventory and reports together for owners managing changing demand through the year.',
  },
  {
    name: 'Parbat District',
    towns: ['Kushma'],
    body:
      'Kushma and the surrounding Parbat area have hotels, eateries and retail businesses serving travellers and residents. AR Technohub provides restaurant and POS software with local setup and staff training so your team can start quickly.',
  },
  {
    name: 'Baglung District',
    towns: ['Baglung'],
    body:
      'Baglung’s busy bazaar and trade routes support many shops, restaurants and lodges. MPOS handles billing, inventory and reporting in one connected system, backed by support from our team in Pokhara.',
  },
];

const SYSTEM_ITEMS = [
  'Restaurant POS and billing',
  'Order management and KOT',
  'Table management',
  'Inventory and stock control',
  'Sales and business reports',
  'Menu and product management',
  'Staff and user management',
  'Hotel, spa and banquet modules where needed',
];

const SUPPORT_STEPS = [
  ['TALK', 'Understand your business', 'We discuss your business type, number of counters and the workflow you need before recommending anything.'],
  ['SET UP', 'On-site or remote setup', 'For nearby cities we can set up on-site; otherwise we configure everything over a remote session.'],
  ['TRAIN', 'Train your staff', 'We train your team on the screens they use every day, not the whole system at once.'],
  ['SUPPORT', 'Ongoing local support', 'When something needs attention, you reach a team based in Pokhara, not a distant call centre.'],
];

const FAQ = [
  {
    q: 'Do you provide restaurant and POS software outside Pokhara?',
    a: 'Yes. AR Technohub supports businesses across Gandaki Province, including Syangja, Waling, Galyang, Dulegauda, Bhimad, Damauli, Besisahar, Baglung, Kushma and other nearby areas.',
  },
  {
    q: 'Can you install the software on-site in nearby cities?',
    a: 'Yes. For nearby cities we can arrange on-site installation, setup and training. For more distant locations we configure the system over a remote session and provide guided training.',
  },
  {
    q: 'What if the internet is slow in my area?',
    a: 'MPOS is designed to work on a local network, so your counter can keep billing even when the internet is unstable. Cloud-based features depend on connectivity, but day-to-day billing does not have to stop.',
  },
  {
    q: 'Do you provide the hardware as well as the software?',
    a: 'Yes. AR Technohub supplies POS terminals, computers, thermal printers, thermal rolls and peripherals along with the software, so they are specified and installed together.',
  },
  {
    q: 'Which types of businesses do you support?',
    a: 'Restaurants, cafés, hotels, lodges, spas, salons, banquet venues, retail shops and other businesses that need billing, inventory and reporting.',
  },
  {
    q: 'How do I get a demo?',
    a: 'Contact AR Technohub with your business type and location. We will arrange a demo and explain how MPOS fits your operation.',
  },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const AREA_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AR Technohub',
  alternateName: 'MPOS',
  description:
    'Pokhara-based provider of MPOS restaurant, POS and billing software, serving businesses across Gandaki Province, Nepal.',
  url: 'https://artechnohub.com.np' + PATH,
  image: 'https://artechnohub.com.np/logo.png',
  telephone: '+977-9869093168',
  email: 'sales@artechnohub.com.np',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Indramarga-10',
    addressLocality: 'Pokhara',
    addressRegion: 'Gandaki',
    postalCode: '33700',
    addressCountry: 'NP',
  },
  areaServed: AREA_CITIES.map((c) => ({ '@type': 'City', name: c })),
  knowsAbout: ['Restaurant software', 'POS software', 'Billing software', 'Inventory management', 'KOT software'],
};

const CRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://artechnohub.com.np/' },
    { '@type': 'ListItem', position: 2, name: 'Restaurant & POS Software in Gandaki Province', item: 'https://artechnohub.com.np' + PATH },
  ],
};

function Shot({ src, alt, bar, cap, priority }: { src: string; alt: string; bar: string; cap?: string; priority?: boolean }) {
  return (
    <figure>
      <div className="shot-win">
        <div className="shot-bar">
          <i />
          <i />
          <i />
          <span>{bar}</span>
        </div>
        <Image src={`/product/${src}.webp`} alt={alt} width={1400} height={875} priority={priority} loading={priority ? undefined : 'lazy'} />
      </div>
      {cap ? <figcaption className="shot-cap">{cap}</figcaption> : null}
    </figure>
  );
}

export default function RestaurantSoftwareGandaki() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(FAQ_LD)}</script>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(AREA_LD)}</script>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(CRUMB_LD)}</script>
      <SiteHeader />
      <main>
        <section className="detail-hero">
          <div className="detail-copy">
            <div className="eyebrow">RESTAURANT &amp; POS SOFTWARE &middot; GANDAKI PROVINCE</div>
            <h1>Restaurant &amp; POS Software for Businesses Across Gandaki Province</h1>
            <p>
              AR Technohub is based in Pokhara and provides MPOS restaurant, POS and billing software to
              businesses across Gandaki Province — including Syangja, Waling, Galyang, Dulegauda,
              Bhimad, Damauli, Besisahar, Baglung and Kushma.
            </p>
            <p>
              If you run a restaurant, café, hotel, lodge, shop or any business that bills customers, MPOS
              brings orders, billing, KOT, inventory and reports together in one connected system, with
              local support you can actually reach.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/contact">Request a Demo <span>&rarr;</span></Link>
              <Link className="outline-btn" href="/restaurant-management-software-pokhara/">Pokhara Restaurant Software</Link>
            </div>
          </div>
          <div className="detail-shot">
            <Shot
              src="pos-order"
              bar="MPOS · Order Entry"
              alt="MPOS restaurant order entry screen used by businesses in Gandaki Province"
              cap="Order entry, billing and KOT from one screen"
              priority
            />
          </div>
        </section>

        <section className="intro section">
          <div>
            <div className="eyebrow">LOCAL SUPPORT BEYOND POKHARA</div>
            <h2>Software support across Gandaki Province</h2>
          </div>
          <div className="intro-body">
            <p>
              Many software companies sell to businesses outside the valley but cannot support them when
              something goes wrong. AR Technohub works differently: we are based in Pokhara, close enough
              to visit nearby districts and set the system up properly, and we provide ongoing support for
              the questions that come after installation.
            </p>
            <p>
              From highway restaurants in Tanahun to hotels in Baglung and shops in Syangja, our aim is
              simple — give you reliable software and a team you can call.
            </p>
            <div className="module-list">
              <b>WHAT MPOS COVERS</b>
              <ul>{SYSTEM_ITEMS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="eyebrow">AREAS WE SERVE</div>
          <h2>Restaurant &amp; POS software for nearby cities</h2>
          <p>Businesses in these districts work with AR Technohub on MPOS software and hardware.</p>
          <div className="detail-grid">
            {DISTRICTS.map((d) => (
              <article key={d.name}>
                <span>◈</span>
                <h3>{d.name}</h3>
                <p>{d.body}</p>
                <p style={{ fontSize: 11, color: '#ae7818', fontWeight: 700 }}>
                  {d.towns.join(' · ')}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 28, maxWidth: 760 }}>
            We also support businesses in other parts of Gandaki Province and across Nepal, including
            Gorkha and the wider Kaski area, through remote setup and support.
          </p>
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">ONE SYSTEM FOR YOUR BUSINESS</div>
            <h2>Billing, POS and inventory that fit your workflow</h2>
            <p>
              Whether you run a busy highway restaurant or a single counter, MPOS helps you take orders,
              print KOTs, generate bills, track stock and see how your business is doing — all from one
              system designed for the way businesses in Nepal operate.
            </p>
            <p>
              Because billing works on a local network, your counter keeps running even when the internet
              is slow or unavailable.
            </p>
            <div className="module-list">
              <b>KEY FUNCTIONS</b>
              <ul>
                <li>Fast order entry and POS billing</li>
                <li>KOT and kitchen workflow</li>
                <li>Inventory, purchasing and wastage</li>
                <li>Daily sales and business reports</li>
                <li>VAT-ready bill records</li>
                <li>Staff and user permissions</li>
              </ul>
            </div>
          </div>
          <Shot
            src="pos-billing"
            bar="MPOS · Billing"
            alt="MPOS billing screen used by restaurants and shops in Gandaki Province"
            cap="Billing, holds and payments"
          />
        </section>

        <section className="feature-section">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>How support works for nearby cities</h2>
          <div className="pillar-grid">
            {SUPPORT_STEPS.map(([kicker, title, desc]) => (
              <article className="pillar" key={title}>
                <span className="kicker">{kicker}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hw-cross">
          <div>
            <div className="eyebrow">SOFTWARE + HARDWARE</div>
            <h2>Everything you need, from one team</h2>
          </div>
          <div>
            <p>
              AR Technohub supplies both the software and the hardware — POS terminals, computers,
              thermal printers, thermal rolls and peripherals — so they are specified together, installed
              together and supported by one team.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/hardware">See Hardware <span>&rarr;</span></Link>
              <Link className="outline-btn" href="/products/masterpos/">Explore MPOS Restaurant</Link>
            </div>
          </div>
        </section>

        <Testimonials heading="Businesses that run on MPOS" />

        <section className="faq-section">
          <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
          <h2>
            Software for nearby cities,
            <br />
            <em>answered.</em>
          </h2>
          <div className="faq-grid">
            {FAQ.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <div className="eyebrow light">READY TO GET STARTED?</div>
            <h2>
              Reliable software,
              <br />
              <em>close to home.</em>
            </h2>
          </div>
          <div>
            <p>
              Tell us where your business is and what you operate. We will show you the MPOS workflow
              that fits and explain how setup and support work for your city.
            </p>
            <Link href="/contact" className="gold-btn">Request a Demo <span>&rarr;</span></Link>
            <p className="cta-contact">
              Indramarga-10, Pokhara, Gandaki Province, Nepal &middot;{' '}
              <a href="tel:+9779869093168">+977 9869093168</a> &middot;{' '}
              <a href="mailto:sales@artechnohub.com.np">sales@artechnohub.com.np</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}