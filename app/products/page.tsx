import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Products | MPOS Restaurant & Hotel Software and Noor App',
  description:
    'Explore software from AR Technohub — MPOS restaurant management software, MPOS hotel management software, and Noor App for prayer times, Qibla and mosques in Nepal.',
  alternates: { canonical: '/products/' },
};

const products = [
  ['masterpos', 'MPOS Restaurant Management Software', 'Restaurant Management', 'Complete POS and restaurant operations from tables and KOT to billing, inventory and reports.'],
  ['hotel', 'MPOS Hotel Management Software', 'Hotel Management', 'Front office, reservations, rooms, guests, billing, housekeeping and connected operations.'],
  ['noor', 'Noor App — A Complete Muslim Companion', 'Islamic Lifestyle & Community App', 'Accurate prayer times, mosque Jamaat schedules, Qibla direction, nearby mosques, halal food, the Holy Quran and mosque notices — one app for everyday faith.'],
];

export default function Products() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="product-hero">
          <div className="eyebrow">OUR PRODUCTS</div>
          <h1>
            Purpose-built software
            <br />
            <em>for real operations.</em>
          </h1>
          <p>
            Choose the solution that matches your business or your community.
            Explore MPOS restaurant POS and hotel management software for practical
            business operations in Nepal, or the Noor App for everyday Islamic
            practice.
          </p>
        </section>
        <section className="all-products">
          {products.map(([slug, name, tag, desc], i) => (
            <Link className="big-product" href={`/products/${slug}`} key={slug}>
              <div className="number">0{i + 1}</div>
              <div>
                <span>{tag}</span>
                <h2>{name}</h2>
                <p>{desc}</p>
                <b>Explore features →</b>
              </div>
              <div className="round-arrow">↗</div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
