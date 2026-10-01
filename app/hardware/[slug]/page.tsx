import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { HARDWARE, bySlug } from '../data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return HARDWARE.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const h = bySlug(slug);
  if (!h) return {};
  const title = `${h.name} — Supplied by AR Technohub | MPOS`;
  const description = `${h.short} Supplied, installed and tested alongside MPOS by AR Technohub. Request a quote.`;
  return {
    title,
    description,
    keywords: [h.name, `${h.name} Nepal`, 'AR Technohub', 'business hardware supplier', 'MPOS hardware'],
    alternates: { canonical: `/hardware/${slug}/` },
    openGraph: {
      type: 'website',
      url: `https://artechnohub.com.np/hardware/${slug}/`,
      title,
      description,
      images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: h.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['https://artechnohub.com.np/og-image.png'] },
  };
}

export default async function HardwareCategory({ params }: Props) {
  const { slug } = await params;
  const h = bySlug(slug);
  if (!h) return null;

  const url = `https://artechnohub.com.np/hardware/${slug}/`;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: h.name,
    description: h.intro,
    url,
    category: h.kicker,
    brand: { '@type': 'Brand', name: 'AR Technohub' },
    ...(h.highlights.length
      ? {
          additionalProperty: h.highlights.map((x) => ({
            '@type': 'PropertyValue',
            name: x.b,
            value: x.s,
          })),
        }
      : {}),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'NPR',
      url,
      seller: { '@type': 'Organization', name: 'AR Technohub' },
    },
  };

  const others = HARDWARE.filter((o) => o.slug !== slug);

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(ld)}</script>
      <SiteHeader />
      <main>
        <section className="product-hero">
          <div className="eyebrow">{h.kicker} — AR TECHNOHUB</div>
          <h1>{h.heading[0]}<br /><em>{h.heading[1]}</em></h1>
          <p>{h.intro}</p>
          <div className="actions">
            <Link className="gold-btn" href="/contact">Request a Quote <span>→</span></Link>
            <Link className="outline-btn" href="/hardware">← All Hardware</Link>
          </div>
        </section>

        <section className="feature-section hw-intro">
          <div className="hw-highlights">
            {h.highlights.map((x) => (
              <article key={x.b}>
                <b>{x.b}</b>
                <p>{x.s}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow hw-workflow">
          <div>
            <div className="eyebrow light">WHAT WE SUPPLY</div>
            <h2>
              In the box,<br />
              <em>and on your counter.</em>
            </h2>
          </div>
          <div className="module-list dark-list">
            <b>OPTIONS</b>
            <ul>
              {h.specs.map((s) => <li key={s}>✓ {s}</li>)}
            </ul>
          </div>
        </section>

        <section className="feature-section">
          <div className="eyebrow">WHERE IT FITS</div>
          <h2>
            Designed around<br />
            <em>real workstations.</em>
          </h2>
          <p>{h.short}</p>
          <div className="detail-grid hw-uses">
            {h.useCases.map(([t, s]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{s}</p>
              </article>
            ))}
          </div>
          <div className="module-list hw-notes">
            <b>GOOD TO KNOW</b>
            <ul>
              {h.notes.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </section>

        <section className="section hw-related">
          <div className="section-head">
            <div>
              <div className="eyebrow">ALSO SUPPLIED BY AR TECHNOHUB</div>
              <h2>
                Other hardware,<br />
                <em>same supplier.</em>
              </h2>
            </div>
            <Link href="/hardware" className="text-btn">View all hardware →</Link>
          </div>
          <div className="product-grid">
            {others.map((o) => (
              <Link href={`/hardware/${o.slug}/`} className="product-card hw-card" key={o.slug}>
                <div className="product-photo" style={{ backgroundImage: `url(${o.image})` }} />
                <div className="product-content">
                  <span className="tag">{o.kicker}</span>
                  <h3>{o.name}</h3>
                  <p>{o.short}</p>
                  <b>View details <i>→</i></b>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-cta hw-cta">
          <div>
            <div className="eyebrow light">NEED A QUOTE?</div>
            <h2>
              Tell us what you run,<br />
              <em>and we will spec it.</em>
            </h2>
          </div>
          <div>
            <p>
              Send us your terminal count, what you need to print and any hardware
              you already own. We will come back with a specification and a quote.
            </p>
            <Link className="gold-btn" href="/contact">Request a Quote →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}