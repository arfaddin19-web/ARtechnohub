import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { POSTS } from './posts';

export const metadata: Metadata = {
  title: 'Restaurant, POS & Billing Software Guides | MPOS Blog',
  description:
    'Practical guides from AR Technohub on restaurant software, POS, billing and running a business in Nepal. Learn what to compare before you buy.',
  keywords: [
    'restaurant software nepal',
    'pos software nepal',
    'billing software nepal',
    'restaurant pos nepal',
    'kot software nepal',
    'business software guides nepal',
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np/blog/',
    siteName: 'MPOS',
    title: 'Restaurant, POS & Billing Software Guides | MPOS Blog',
    description:
      'Practical guides on restaurant software, POS, billing and running a business in Nepal.',
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'MPOS blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant, POS & Billing Software Guides | MPOS Blog',
    description: 'Practical guides on restaurant software, POS, billing and running a business in Nepal.',
    images: ['https://artechnohub.com.np/og-image.png'],
  },
};

const sorted = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="eyebrow">MPOS BLOG &middot; AR TECHNOHUB</div>
          <h1>Guides for running a smarter business in Nepal</h1>
          <p>
            Practical, no-hype articles on restaurant software, POS and billing. Written for business
            owners in Pokhara and across Nepal who want clear answers before choosing a system.
          </p>
        </section>

        <section className="blog-list" aria-label="Articles">
          {sorted.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}/`} key={post.slug}>
              <div className="kicker">
                {post.tag}
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <b>Read the guide &rarr;</b>
            </Link>
          ))}
        </section>

        <section className="cta">
          <div>
            <div className="eyebrow light">READY WHEN YOU ARE</div>
            <h2>See MPOS in action.</h2>
          </div>
          <div>
            <p>Tell us what you operate and we will show you the MPOS workflow that fits your business.</p>
            <Link href="/contact" className="gold-btn">Request a Demo &rarr;</Link>
            <p className="cta-contact">
              Indramarga-10, Pokhara 33700 &middot; <a href="tel:+9779869093168">+977 9869093168</a> &middot;{' '}
              <a href="mailto:sales@artechnohub.com.np">sales@artechnohub.com.np</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}