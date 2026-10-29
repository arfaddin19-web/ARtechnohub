import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const TITLE = 'Noor App — Prayer Times, Qibla, Mosques & Quran';
const DESC =
  'Noor is an all-in-one Islamic mobile app by AR Technohub: accurate prayer times, mosque Jamaat schedules, Qibla direction, nearby mosques, halal food, the Holy Quran and mosque notices.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Noor App',
    'Noor Islamic app',
    'prayer times app Nepal',
    'Qibla direction app',
    'mosque jamaat timings app',
    'halal food finder',
    'Quran reading app',
    'Islamic lifestyle app',
  ],
  alternates: { canonical: '/products/noor/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np/products/noor/',
    siteName: 'AR Technohub',
    title: TITLE,
    description: DESC,
    images: [
      {
        url: 'https://artechnohub.com.np/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Noor — your faith, wherever life takes you',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['https://artechnohub.com.np/og-image.png'],
  },
};

const FEATURES: [string, string, string][] = [
  ['◷', 'Prayer Times', 'View daily Salah start times and know exactly when the next prayer begins.'],
  ['▤', 'Mosque Jamaat Timings', 'Find local mosque prayer schedules so you can plan to pray with the congregation.'],
  ['◈', 'Qibla Direction', 'Find the direction of the Kaaba wherever you are, wherever you travel.'],
  ['⌂', 'Nearby Mosques', 'Discover mosques around you and open their published prayer schedules.'],
  ['◇', 'Halal Food Discovery', 'Find nearby halal food options when you are travelling or exploring a new place.'],
  ['✦', 'Quran Access', 'Read the Holy Quran through a simple, accessible interface.'],
  ['○', 'Mosque Notices', 'Stay informed about announcements and updates shared by participating mosques.'],
];

const DETAILS: [string, string][] = [
  ['Product category', 'Islamic Lifestyle & Community App'],
  ['Platform', 'Mobile App'],
  ['Developed by', 'AR Technohub, Pokhara'],
  ['Tagline', 'Your faith. Your community. Your Noor.'],
];

/* Real screenshots of the running app, stored in public/product/. Width/height
   are the actual file dimensions so Next can reserve the right box. The home
   screen is used in the hero, so the gallery covers the other three views. */
const SHOTS: [string, string, string, number, number][] = [
  ['/product/noor-prayer-times.webp', 'Noor app prayer times screen for Pokhara showing Adhan and Jamat columns for Fajr, Sunrise, Dhuhr, Asr, Maghrib and Isha, with the current prayer marked', 'Prayer times — Adhan & Jamat', 720, 1559],
  ['/product/noor-masjids.webp', 'Noor app Masjids screen listing mosques near Pokhara with their distance and Fajr, Dhuhr, Asr, Maghrib, Isha and Jumu’ah Jamaat times', 'Nearby mosques & Jamaat times', 720, 1559],
  ['/product/noor-qibla.webp', 'Noor app Qibla screen showing a compass for Pokhara, Nepal with a Qibla bearing of 272 degrees and confirmation that the user is facing the Kaaba', 'Qibla — compass & bearing', 720, 1559],
];

export default function NoorPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'Noor',
          alternateName: 'Noor App',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Android, iOS',
          description: DESC,
          url: 'https://artechnohub.com.np/products/noor/',
          tagline: 'Your faith. Your community. Your Noor.',
          offers: {
            '@type': 'Offer',
            url: 'https://artechnohub.com.np/contact/',
            availability: 'https://schema.org/InStock',
            description: 'Contact for availability',
          },
          featureList: FEATURES.map((f) => f[1]),
          brand: { '@type': 'Brand', name: 'Noor' },
          provider: { '@type': 'Organization', name: 'AR Technohub', url: 'https://artechnohub.com.np' },
          isPartOf: { '@type': 'Organization', name: 'AR Technohub', url: 'https://artechnohub.com.np' },
        })}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://artechnohub.com.np/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://artechnohub.com.np/products/' },
            { '@type': 'ListItem', position: 3, name: 'Noor App', item: 'https://artechnohub.com.np/products/noor/' },
          ],
        })}
      </script>
      <SiteHeader />
      <main>
        <section className="noor-hero">
          <div className="noor-hero-copy">
            <div className="eyebrow">ISLAMIC LIFESTYLE &amp; COMMUNITY APP</div>
            <h1>
              Your faith, wherever<br />
              <em>life takes you.</em>
            </h1>
            <p className="noor-name">Noor &mdash; A Complete Muslim Companion</p>
            <p>
              Noor is an all-in-one Islamic mobile app designed to help Muslims stay
              connected with their faith in everyday life. From accurate prayer times
              and mosque-specific Jamaat schedules to Qibla direction and nearby halal
              food, Noor brings essential Islamic services together in one convenient
              place.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/contact">Talk to us about Noor →</Link>
              <Link className="outline-btn noor-outline-btn" href="/products">← All Products</Link>
            </div>
            <div className="noor-hero-points">
              <span>iOS &amp; Android</span>
              <span>Mosque-verified timings</span>
              <span>Built for the community</span>
            </div>
          </div>

          <div className="noor-hero-visual">
            <div className="noor-halo" aria-hidden="true" />
            <div className="noor-phone">
              <div className="noor-phone-screen">
                <Image
                  src="/product/noor-home.webp"
                  alt="Noor app home screen showing Adhan and Jamaat times, the next prayer, and shortcuts for Qibla, Qur’an, Masjids and Halal Food"
                  width={720}
                  height={1559}
                  priority
                />
              </div>
            </div>
            <div className="noor-float noor-float-qibla">
              <b>Adhan &amp; Jamaat</b>
              <small>Both times, side by side</small>
            </div>
            <div className="noor-float noor-float-jamaat">
              <b>Seven tools</b>
              <small>Prayer, Qibla, Quran, mosques and more</small>
            </div>
          </div>
        </section>

        <div className="hub-strip" aria-hidden="true">
          <div className="hub-strip-track">
            {[0, 1].map((group) => (
              <div className="hub-strip-group" key={group}>
                {['PRAYER TIMES', 'JAMAAT SCHEDULES', 'QIBLA DIRECTION', 'NEARBY MOSQUES', 'HALAL FOOD', 'HOLY QURAN', 'MOSQUE NOTICES'].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <section className="feature-section">
          <div className="eyebrow">WHAT NOOR DOES</div>
          <h2>
            Everything a Muslim<br />
            <em>needs in one app.</em>
          </h2>
          <p>Seven practical tools for daily practice, travel and community life.</p>
          <div className="detail-grid">
            {FEATURES.map(([icon, title, body]) => (
              <article key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="noor-gallery">
          <div className="section-head">
            <div>
              <div className="eyebrow">REAL SCREENS</div>
              <h2>
                See Noor
                <br />
                <em>in action.</em>
              </h2>
            </div>
            <Link href="/contact" className="gold-btn">Talk to us →</Link>
          </div>
          <div className="noor-gallery-grid">
            {SHOTS.map(([src, alt, cap, w, h]) => (
              <figure key={src}>
                <div className="noor-shot">
                  <Image src={src} alt={alt} width={w} height={h} loading="lazy" />
                </div>
                <figcaption className="shot-cap">{cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-brand">
          <div>
            <div className="eyebrow">BUILT FOR THE MUSLIM COMMUNITY</div>
            <h2>
              Connected to your<br />
              <em>local mosque.</em>
            </h2>
            <p>
              Noor aims to connect Muslims with their local mosque communities through
              verified mosque information, updated Jamaat timings and relevant
              announcements. Its goal is to make everyday Islamic practices more
              convenient through thoughtful technology.
            </p>
            <Link className="gold-btn" href="/contact">Get in touch →</Link>
          </div>
          <ul className="brand-list">
            <li>
              <b>Verified mosque information</b>
              <span>Participating mosques publish their own details, so the information you read is the information they maintain.</span>
            </li>
            <li>
              <b>Updated Jamaat timings</b>
              <span>Prayer schedules stay current instead of relying on printed notices that change without notice.</span>
            </li>
            <li>
              <b>Relevant announcements</b>
              <span>Events, talks and updates from your mosque reach you without needing to check a board at the door.</span>
            </li>
            <li>
              <b>Everyday convenience</b>
              <span>Prayer, Qibla, Quran and halal food in one place, so nothing essential lives in five different apps.</span>
            </li>
          </ul>
        </section>

        <section className="feature-section noor-details">
          <div className="eyebrow">AT A GLANCE</div>
          <h2>
            The essentials,<br />
            <em>clearly stated.</em>
          </h2>
          <dl className="noor-facts">
            {DETAILS.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="hw-cross">
          <div>
            <div className="eyebrow">DEVELOPED BY AR TECHNOHUB</div>
            <h2>
              Practical software<br />
              <em>that means something.</em>
            </h2>
          </div>
          <div>
            <p>
              Noor reflects our commitment to building practical digital solutions
              that make a meaningful difference in people&apos;s lives. It sits
              alongside MPOS, our business management software, as part of the same
              in-house product team based in Pokhara.
            </p>
            <div className="actions">
              <Link className="gold-btn" href="/about/">About AR Technohub <span>&rarr;</span></Link>
              <Link className="outline-btn" href="/contact">Talk to us</Link>
            </div>
          </div>
        </section>

        <section className="detail-cta">
          <div>
            <div className="eyebrow">READY WHEN YOU ARE</div>
            <h2>Your faith. Your community. Your Noor.</h2>
            <p>Ask us about Noor, or tell us what you would like to see built next.</p>
          </div>
          <Link className="gold-btn" href="/contact">Talk to us →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
