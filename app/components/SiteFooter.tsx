import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [
  ['/products/masterpos/', 'MPOS Restaurant'],
  ['/products/hotel/', 'MPOS Hotel'],
  ['/products/noor/', 'Noor App'],
];

const HARDWARE = [
  ['/hardware/pc/', 'PCs & Computers'],
  ['/hardware/thermal-printer/', 'Thermal Printers'],
  ['/hardware/thermal-rolls/', 'Thermal Rolls'],
  ['/hardware/peripherals/', 'POS Peripherals'],
];

/* Query by business name, not coordinates. Google resolves "AR Technohub" to
   the real listing (Indramarga-10, Pokhara — place id 0x39959581d2e8415d:
   0xc45a43c6c3f0f80d), so the pin, the embed's "Open in Maps" control and every
   link below land on our Google Maps page instead of an anonymous lat/lng. */
const QUERY = 'AR+Technohub%2C+Indramarga-10%2C+Pokhara%2C+Nepal';
const MAP_SRC = `https://maps.google.com/maps?q=${QUERY}&z=17&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${QUERY}`;
const LISTING = 'https://www.google.com/maps/search/?api=1&query=AR%20Technohub%2C%20Pokhara%2C%20Nepal';

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/logo-ar.png"
              alt="AR Technohub"
              width={256}
              height={228}
              loading="eager"
            />
            <span className="brand-text">
              AR Technohub
              <small>Software &amp; Hardware</small>
            </span>
          </Link>
          <p>
            MPOS is the software brand of AR Technohub, and Noor is our Islamic
            lifestyle app. We build software in-house and supply the hardware that
            runs it.
          </p>
        </div>
        <div>
          <b>Products</b>
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
          <Link href="/about/">About us</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog/">Blog &amp; Guides</Link>
        </div>
        <div className="footer-contact">
          <b>Contact</b>
          <address className="foot-address">
            Indramarga-10, Pokhara 33700
          </address>
          <a href="mailto:sales@artechnohub.com.np">sales@artechnohub.com.np</a>
          <a href="tel:+9779869093168">+977 9869093168</a>
        </div>
      </div>
      <div className="footer-map">
        <div className="footer-map-frame">
          <iframe
            title="Map showing AR Technohub at Indramarga-10, Pokhara 33700, Nepal"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="footer-map-info">
          <div className="eyebrow">FIND US</div>
          <a
            className="footer-map-name"
            href={LISTING}
            target="_blank"
            rel="noopener noreferrer"
          >
            AR Technohub <span aria-hidden="true">↗</span>
          </a>
          <b>Indramarga-10, Pokhara 33700</b>
          <small>Gandaki Province, Nepal</small>
          <p>Drop in, or call ahead and we&apos;ll walk you through the setup on your own equipment.</p>
          <a className="gold-btn" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">
            Get directions <span>→</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AR Technohub. All rights reserved.</span>
        <span>MPOS is a brand of AR Technohub.</span>
      </div>
    </footer>
  );
}