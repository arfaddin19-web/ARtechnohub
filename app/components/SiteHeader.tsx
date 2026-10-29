'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/hardware', label: 'Hardware' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const PRODUCT_LINKS: { href: string; label: string; accent?: boolean }[] = [
  { href: '/products/masterpos/', label: 'Restaurant Management' },
  { href: '/products/hotel/', label: 'Hotel Management' },
  { href: '/products/noor/', label: 'Noor App', accent: true },
];

/* One header for every route. The brand lockup carries the company name and
   what it does, and Products opens the MPOS suite that sits underneath it.

   The desktop <nav> is display:none below 900px, so the header needs its own
   way out on a phone -- without this a mobile visitor could only reach the
   homepage and then scroll to the footer. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // The panel covers the page, so the page behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!productsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [productsOpen]);

  const closeAll = () => {
    setOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={closeAll}>
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
        <nav>
          <Link href="/">Home</Link>
          <div
            className="nav-drop"
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="nav-drop-toggle"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen(true)}
            >
              Products
            </button>
            <div className="nav-drop-menu" data-open={productsOpen || undefined}>
              <Link className="nav-drop-feature" href="/mpos" onClick={closeAll}>
                <span className="nav-drop-tag">MPOS SOFTWARE</span>
                <b>MPOS Software Suite</b>
                <small>Restaurant, hotel, spa, banquet and payroll management.</small>
              </Link>
              <div className="nav-drop-list">
                {PRODUCT_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className={l.accent ? 'nav-drop-noor' : undefined}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link className="nav-drop-all" href="/products" onClick={closeAll}>
                  All products →
                </Link>
              </div>
              <Link className="nav-drop-hardware" href="/hardware" onClick={closeAll}>
                <b>Business Hardware</b>
                <small>PCs, thermal printers, rolls and POS peripherals →</small>
              </Link>
            </div>
          </div>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="gold-btn" href="/contact">
          Request a Demo <span>→</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" data-open={open || undefined} />
        </button>
      </div>

      <div
        className="nav-panel"
        id="mobile-menu"
        ref={panelRef}
        data-open={open || undefined}
        hidden={!open}
      >
        <nav>
          <Link href="/" onClick={closeAll}>
            Home
          </Link>
          <p className="nav-panel-label">Products</p>
          <Link className="nav-panel-sub" href="/mpos" onClick={closeAll}>
            MPOS Software Suite
          </Link>
          {PRODUCT_LINKS.map((l) => (
            <Link
              className={l.accent ? 'nav-panel-sub nav-panel-noor' : 'nav-panel-sub'}
              key={l.href}
              href={l.href}
              onClick={closeAll}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-panel-sub" href="/hardware" onClick={closeAll}>
            Business Hardware
          </Link>
          <Link className="nav-panel-sub" href="/products" onClick={closeAll}>
            All products
          </Link>
          <span className="nav-panel-divider" />
          {LINKS.filter((l) => l.href !== '/hardware').map((l) => (
            <Link key={l.href} href={l.href} onClick={closeAll}>
              {l.label}
            </Link>
          ))}
          <Link className="gold-btn" href="/contact" onClick={closeAll}>
            Request a Demo <span>→</span>
          </Link>
        </nav>
        <p className="nav-panel-foot">
          Indramarga-10, Pokhara 33700
          <br />
          <a href="tel:+9779869093168">+977 9869093168</a>
        </p>
      </div>
    </header>
  );
}
