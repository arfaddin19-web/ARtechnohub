import Link from 'next/link';

/* One header for every route. The brand lockup carries the "by AR Technohub"
   line so the relationship between the company and the MPOS brand is stated
   on every page, not buried on /about. */
export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">M</span>
          <span className="brand-text">
            MPOS
            <small>by AR Technohub</small>
          </span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/hardware">Hardware</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="gold-btn" href="/contact">
          Request a Demo <span>→</span>
        </Link>
      </div>
    </header>
  );
}