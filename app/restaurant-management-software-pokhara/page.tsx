import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Testimonials from '../components/Testimonials';

const PATH = '/restaurant-management-software-pokhara/';
const TITLE = 'Restaurant Management Software in Pokhara, Nepal | AR Technohub';
const DESC =
  'Restaurant management software in Pokhara for POS billing, KOT, inventory, tables, kitchen operations and business reports. Get a demo from AR Technohub.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'restaurant management software in Pokhara',
    'restaurant management software Pokhara',
    'restaurant POS software Pokhara',
    'restaurant billing software Pokhara',
    'restaurant software Pokhara',
    'POS system Pokhara',
    'KOT software Pokhara',
    'restaurant management software Nepal',
    'restaurant POS software Nepal',
    'restaurant software nepal',
    'pos software nepal',
    'billing software nepal',
    'restaurant ko software',
    'hotel management software nepal',
    'रेस्टुरेन्ट सफ्टवेयर',
    'रेस्टुरेन्ट व्यवस्थापन सफ्टवेयर',
    'बिलिङ सफ्टवेयर',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np' + PATH,
    siteName: 'MPOS',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'MPOS restaurant management software in Pokhara' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

const FAQ = [
  {
    q: 'What is restaurant management software?',
    a: 'Restaurant management software is a system that helps businesses manage daily restaurant operations such as orders, POS billing, KOT, tables, inventory, staff and sales reporting.',
  },
  {
    q: 'What is the best restaurant management software in Pokhara?',
    a: "The right software depends on the restaurant's size, workflow, features, budget and support requirements. AR Technohub provides MPOS restaurant management software in Pokhara and can demonstrate the system based on the restaurant workflow.",
  },
  {
    q: 'Does AR Technohub provide restaurant POS software in Pokhara?',
    a: 'Yes. AR Technohub provides MPOS solutions for restaurant POS and related management operations in Pokhara, Nepal.',
  },
  {
    q: 'Can MPOS handle restaurant billing?',
    a: 'MPOS provides restaurant POS and billing functionality. Contact AR Technohub for a demonstration of the billing workflow and available configuration options.',
  },
  {
    q: 'Does MPOS support KOT?',
    a: 'MPOS supports KOT-based restaurant workflows where configured for the business. Contact AR Technohub to see the KOT process during a demonstration.',
  },
  {
    q: 'Can restaurant software manage inventory?',
    a: 'MPOS includes inventory and stock-management functionality. Exact features depend on system configuration.',
  },
  {
    q: 'Do you provide restaurant software installation and support in Pokhara?',
    a: 'AR Technohub is based in Pokhara and can provide local assistance for supported software and hardware setups.',
  },
  {
    q: 'Can I get a demo of MPOS?',
    a: 'Yes. Contact AR Technohub to request an MPOS demonstration and discuss restaurant requirements.',
  },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const LOCAL_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AR Technohub',
  alternateName: 'MPOS',
  description: 'Pokhara-based software company providing MPOS restaurant management software, POS billing, KOT, inventory and reporting for restaurants in Pokhara and Nepal.',
  url: 'https://artechnohub.com.np',
  image: 'https://artechnohub.com.np/logo.png',
  telephone: '+977-9869093168',
  email: 'artechnohub23@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Indramarga-10',
    addressLocality: 'Pokhara',
    addressRegion: 'Gandaki',
    postalCode: '33700',
    addressCountry: 'NP',
  },
  areaServed: ['Pokhara', 'Syangja', 'Waling', 'Galyang', 'Dulegauda', 'Bhimad', 'Damauli', 'Besisahar', 'Baglung', 'Kushma', 'Gandaki Province', 'Nepal'],
  knowsAbout: ['Restaurant management software', 'Restaurant POS', 'KOT software', 'Restaurant billing', 'Inventory management'],
};

const CRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://artechnohub.com.np/' },
    { '@type': 'ListItem', position: 2, name: 'Restaurant Management Software in Pokhara', item: 'https://artechnohub.com.np' + PATH },
  ],
};

const SYSTEM_ITEMS = [
  'POS and restaurant billing',
  'Order management',
  'Kitchen Order Tickets (KOT)',
  'Table management',
  'Inventory and stock management',
  'Sales and business reports',
  'Staff and user management',
  'Menu and product management',
  'Customer management',
  'Multi-outlet management, where applicable',
];

const POS_FUNCTIONS = [
  'Fast order entry',
  'Item and menu management',
  'Bill generation',
  'Discounts and adjustments',
  'Payment recording',
  'Sales tracking',
  'End-of-day reporting',
  'User permissions and controls',
];

const KOT_BENEFITS = [
  'Sending ordered items to the appropriate kitchen workflow',
  'Reducing errors caused by handwritten orders',
  'Tracking order preparation',
  'Connecting front-of-house and kitchen teams',
  'Organizing orders during busy periods',
];

const INVENTORY_USES = [
  'Track products and inventory',
  'Monitor stock movement',
  'Manage purchasing and stock records',
  'Identify low-stock items',
  'Review inventory information',
  'Connect sales information with stock management',
];

const REPORT_ITEMS = [
  'Daily sales',
  'Sales by product',
  'Sales by category',
  'Payment information',
  'Staff activity',
  'Inventory information',
  'Business performance',
];

const FORMATS = [
  ['▤', 'Restaurants', 'Manage orders, billing, tables, kitchen workflows, inventory and reports.'],
  ['◷', 'Cafés', 'Handle counter orders, billing, menu items and daily sales.'],
  ['◇', 'Bars and food-service businesses', 'Organize orders, billing and operational information.'],
  ['⌂', 'Hotels and hospitality businesses', 'Connect restaurant operations with the wider hospitality workflow where supported by your MPOS setup.'],
  ['◫', 'Multi-outlet businesses', 'Manage multiple locations where multi-branch functionality is enabled.'],
];

const REASONS = [
  ['LOCAL SUPPORT', 'Local Pokhara Support', 'Work with a software company based in Pokhara.'],
  ['YOUR WORKFLOW', 'Understand Your Workflow', 'Discuss your billing, ordering, kitchen and inventory process before selecting an MPOS setup.'],
  ['ONE SYSTEM', 'One Connected System', 'Bring important restaurant operations together.'],
  ['TRAINING', 'Training and Setup', 'Get assistance with system setup and staff onboarding based on your requirements.'],
  ['SOFTWARE + HARDWARE', 'Software and Hardware', 'Discuss POS-related software and hardware requirements together.'],
];

const DEMO_DETAILS = [
  'Restaurant/business name',
  'Location',
  'Number of tables or outlets',
  'Approximate daily orders',
  'Current billing/POS system',
  'Required features',
];

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

export default function RestaurantSoftwarePokhara() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(FAQ_LD)}</script>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(LOCAL_LD)}</script>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(CRUMB_LD)}</script>
      <SiteHeader />
      <main>
        <section className="detail-hero">
          <div className="detail-copy">
            <div className="eyebrow">RESTAURANT MANAGEMENT SOFTWARE &middot; POKHARA</div>
            <h1>Restaurant Management Software for Restaurants in Pokhara</h1>
            <p>
              Run your restaurant, café, bar or hospitality business more efficiently with MPOS by AR
              Technohub, a complete restaurant management and POS solution designed for businesses in
              Pokhara, Nepal.
            </p>
            <p>
              From taking orders and generating bills to managing KOTs, tables, inventory and sales
              reports, MPOS brings your everyday restaurant operations together in one connected system.
            </p>
            <p>
              Looking for restaurant management software in Pokhara? Talk to AR Technohub and see how
              MPOS can fit your restaurant.
            </p>
            <p>
              Whether you run a restaurant in Lakeside, a café in New Road or a food business near
              Mahendrapul, if you are looking for the best restaurant software in Pokhara, Nepal, MPOS
              is designed for the way Nepali restaurants operate every day.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/contact">Request a Demo <span>&rarr;</span></Link>
              <Link className="outline-btn" href="/products/masterpos/">Explore MPOS Restaurant</Link>
            </div>
          </div>
          <div className="detail-shot">
            <Shot
              src="pos-order"
              bar="MPOS · Order Entry"
              alt="MPOS restaurant order entry screen for taking table orders in Pokhara restaurants"
              cap="Order entry — dine-in, takeaway and KOT from one screen"
              priority
            />
          </div>
        </section>

        <section className="intro section">
          <div>
            <div className="eyebrow">COMPLETE RESTAURANT SOLUTION</div>
            <h2>Complete Restaurant Management Software in Pokhara</h2>
          </div>
          <div className="intro-body">
            <p>
              Managing a busy restaurant involves much more than billing. Your front-of-house team needs
              to take orders quickly. Kitchen staff need accurate KOTs. Managers need to know what has
              been sold. Owners need visibility into sales, stock and business performance. MPOS helps
              bring these operations into one system.
            </p>
            <p>
              Whether you operate a restaurant in Pokhara Lakeside, a café in New Road, a restaurant
              around Mahendrapul, or a hospitality business elsewhere in Pokhara, AR Technohub provides
              restaurant software designed to simplify everyday operations.
            </p>
            <div className="module-list">
              <b>ONE SYSTEM FOR YOUR RESTAURANT</b>
              <ul>{SYSTEM_ITEMS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">POS &amp; BILLING</div>
            <h2>Restaurant POS and Billing Software</h2>
            <p>
              Process restaurant orders and generate bills through a centralized POS system. MPOS can
              help your staff manage dine-in, takeaway and other supported order types while keeping
              orders and billing organized.
            </p>
            <p>
              For restaurants looking for a POS system in Pokhara, AR Technohub can provide a solution
              based on your restaurant&rsquo;s workflow and requirements.
            </p>
            <div className="module-list">
              <b>KEY FUNCTIONS CAN INCLUDE</b>
              <ul>{POS_FUNCTIONS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <Shot
            src="pos-billing"
            bar="MPOS · Billing"
            alt="MPOS restaurant POS billing screen showing bill generation, discounts and payments"
            cap="Billing, holds and payments"
          />
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">KOT &amp; KITCHEN</div>
            <h2>KOT and Kitchen Management</h2>
            <p>
              Accurate communication between the restaurant floor and kitchen is essential during busy
              service hours. MPOS helps connect order taking with kitchen operations through KOT
              workflows, helping your kitchen team receive the information required to prepare customer
              orders.
            </p>
            <div className="module-list">
              <b>BENEFITS CAN INCLUDE</b>
              <ul>{KOT_BENEFITS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <Shot
            src="kitchen"
            bar="MPOS · Kitchen / KOT"
            alt="MPOS kitchen order ticket (KOT) screen sent from restaurant floor to kitchen in Pokhara"
            cap="Kitchen / KOT display"
          />
        </section>

        <section className="intro section">
          <div>
            <div className="eyebrow">TABLE MANAGEMENT</div>
            <h2>Table Management for Restaurants</h2>
            <p>
              Keep track of restaurant tables and customer orders from the POS. Your staff can manage
              table-based orders and billing through the restaurant management system instead of relying
              on paper notes and manual tracking. MPOS can be configured around your restaurant layout
              and operating workflow.
            </p>
          </div>
          <Shot
            src="pos-tables"
            bar="MPOS · Table Floor"
            alt="MPOS table floor screen showing restaurant tables with order status and running totals"
            cap="Table floor and live order status"
          />
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">INVENTORY &amp; STOCK</div>
            <h2>Restaurant Inventory and Stock Management</h2>
            <p>
              Inventory control is one of the most important parts of running a profitable restaurant.
              MPOS helps bring inventory information closer to daily restaurant operations. Use your
              sales and inventory information to make better purchasing and operational decisions.
            </p>
            <div className="module-list">
              <b>USE IT TO</b>
              <ul>{INVENTORY_USES.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <Shot
            src="masters-products"
            bar="MPOS · Products & Stock"
            alt="MPOS product and stock master screen used for restaurant inventory management in Pokhara"
            cap="Products, recipes and stock"
          />
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">REPORTS &amp; INSIGHTS</div>
            <h2>Restaurant Sales Reports and Business Insights</h2>
            <p>
              Restaurant owners need more than a daily total. MPOS helps you review sales and operational
              information so you can understand how your business is performing. Keep important
              restaurant information organized in one system.
            </p>
            <div className="module-list">
              <b>REPORTS CAN HELP YOU REVIEW</b>
              <ul>{REPORT_ITEMS.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <Shot
            src="reports"
            bar="MPOS · Sales Reports"
            alt="MPOS sales report screen showing daily restaurant sales and business performance"
            cap="Sales reports and business performance"
          />
        </section>

        <section className="feature-section">
          <div className="eyebrow">BUILT FOR EVERY FORMAT</div>
          <h2>Restaurant Software for Cafés, Restaurants and Hospitality Businesses</h2>
          <p>MPOS is designed for more than traditional restaurants.</p>
          <div className="detail-grid">
            {FORMATS.map(([icon, name, desc]) => (
              <article key={name}>
                <span>{icon}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hw-cross">
          <div>
            <div className="eyebrow">LOCAL PRESENCE</div>
            <h2>Restaurant Management Software Built for Businesses in Pokhara</h2>
          </div>
          <div>
            <p>
              Choosing restaurant software is not only about features. Local support, installation,
              training and understanding how businesses operate in Nepal also matter. AR Technohub is
              based in Pokhara, Gandaki Province, allowing businesses in the area to work with a local
              technology provider.
            </p>
            <p>
              AR Technohub can support businesses across areas of Pokhara including Lakeside,
              Mahendrapul, New Road, Chipledhunga, Prithvi Chowk, Srijana Chowk and other areas of
              Pokhara and Gandaki Province.
            </p>
            <div className="actions">
              <Link className="outline-btn" href="/restaurant-software-gandaki/">Software for nearby cities across Gandaki &rarr;</Link>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="eyebrow">WHY AR TECHNOHUB</div>
          <h2>Why Choose AR Technohub for Restaurant Software?</h2>
          <div className="pillar-grid">
            {REASONS.map(([kicker, title, desc]) => (
              <article className="pillar" key={title}>
                <span className="kicker">{kicker}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="intro section">
          <div>
            <div className="eyebrow">SEE MPOS IN ACTION</div>
            <h2>Request a Demo</h2>
            <p>
              Don&rsquo;t choose restaurant management software based only on a feature list. Request a
              demonstration and show us how your restaurant currently operates. We&rsquo;ll walk you
              through the relevant MPOS workflow and explain how it can be configured for your business.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/contact">Request a Demo <span>&rarr;</span></Link>
            </div>
          </div>
          <div className="module-list">
            <b>TELL US ABOUT YOUR RESTAURANT</b>
            <ul>{DEMO_DETAILS.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>

        <section className="showcase section">
          <div className="showcase-copy">
            <div className="eyebrow">ACROSS NEPAL</div>
            <h2>Restaurant Management Software in Nepal</h2>
            <p>
              AR Technohub provides MPOS solutions for businesses in Pokhara and across Nepal. When
              comparing restaurant management software in Nepal, consider the complete workflow: a good
              restaurant management system should help connect these processes and give owners better
              visibility into their business.
            </p>
            <div className="module-list">
              <b>ONE CONNECTED WORKFLOW</b>
              <ul>
                <li className="plain">Order &rarr; KOT &rarr; Kitchen &rarr; Billing &rarr; Payment &rarr; Inventory &rarr; Reports</li>
              </ul>
            </div>
            <div className="actions">
              <Link className="outline-btn" href="/products/masterpos/">Explore MPOS Restaurant Software</Link>
            </div>
          </div>
          <Shot
            src="dashboard"
            bar="MPOS · Dashboard"
            alt="MPOS business dashboard showing restaurant sales and performance for a Nepal business"
            cap="Business dashboard"
          />
        </section>

        <Testimonials heading="Restaurants and businesses that run on MPOS" />

        <section className="faq-section">
          <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
          <h2>
            Restaurant software questions,
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
            <div className="eyebrow light">READY TO MODERNIZE YOUR RESTAURANT?</div>
            <h2>
              Replace paperwork with
              <br />
              <em>a connected system.</em>
            </h2>
          </div>
          <div>
            <p>
              Replace disconnected billing, handwritten orders and manual reports with a connected
              restaurant management system. MPOS by AR Technohub helps restaurants in Pokhara manage
              daily operations from one system.
            </p>
            <Link href="/contact" className="gold-btn">Request Your MPOS Demo Today <span>&rarr;</span></Link>
            <p className="cta-contact">
              Indramarga-10, Pokhara, Gandaki Province, Nepal &middot;{' '}
              <a href="tel:+9779869093168">+977 9869093168</a> &middot;{' '}
              <a href="mailto:artechnohub23@gmail.com">artechnohub23@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
