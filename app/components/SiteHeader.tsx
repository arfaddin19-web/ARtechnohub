'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

/* One header for every route. The brand lockup carries the "by AR Technohub"
   line so the relationship between the company and the MPOS brand is stated
   on every page, not buried on /about.

   The desktop <nav> is display:none below 900px, so the header needs its own
   way out on a phone -- without this a mobile visitor could only reach the
   homepage and then scroll to the footer. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
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
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
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
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link className="gold-btn" href="/contact" onClick={() => setOpen(false)}>
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