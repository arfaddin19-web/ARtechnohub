import Link from 'next/link';
export default function NotFound(){return <main className="product-hero"><div className="eyebrow">404</div><h1>That page <em>doesn't exist.</em></h1><p>The product or page you requested could not be found.</p><Link className="gold-btn" href="/products">View Products →</Link></main>}
