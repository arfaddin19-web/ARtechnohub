import Link from 'next/link';

const PRODUCTS = [
  ['/products/masterpos/', 'MPOS Restaurant'],
  ['/restaurant-management-software-pokhara/', 'Restaurant Software Pokhara'],
  ['/restaurant-software-gandaki/', 'Restaurant Software Gandaki'],
  ['/products/hotel/', 'MPOS Hotel'],
  ['/products/spa/', 'MPOS Spa & Salon'],
  ['/products/banquet/', 'MPOS Banquet'],
  ['/products/hr-payroll/', 'MPOS HR & Payroll'],
];

const HARDWARE = [
  ['/hardware/pc/', 'PCs & Computers'],
  ['/hardware/thermal-printer/', 'Thermal Printers'],
  ['/hardware/thermal-rolls/', 'Thermal Rolls'],
  ['/hardware/peripherals/', 'POS Peripherals'],
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">M</span>
            <span className="brand-text">
              MPOS
              <small>by AR Technohub</small>
            </span>
          </Link>
          <p>
            MPOS is the software brand of AR Technohub. We build business management
            software and supply the hardware that runs it.
          </p>
        </div>
        <div>
          <b>MPOS Software</b>
          {PRODUCTS.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div>
          <b>Hardware</b>
          {HARDWARE.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div>
          <b>AR Technohub</b>
          <address className="foot-address">
            Indramarga-10, Pokhara 33700
          </address>
          <Link href="/about/">About us</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog/">Blog &amp; Guides</Link>
          <Link href="/contact">Contact</Link>
          <a href="mailto:sales@artechnohub.com.np">sales@artechnohub.com.np</a>
          <a href="tel:+9779869093168">+977 9869093168</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AR Technohub. All rights reserved.</span>
        <span>MPOS is a brand of AR Technohub.</span>
      </div>
    </footer>
  );
}