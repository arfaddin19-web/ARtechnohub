'use client';

import { useEffect } from 'react';

/* Arms the hidden state on <html> and reveals anything that has reached the
   fold. Compared with a plain IntersectionObserver this also covers jumps — a
   scrollbar drag, an anchor link or End key can carry the viewport past a
   section without ever intersecting it, which would otherwise leave that
   section stuck at opacity 0 until the reader scrolls back up.

   If the script never runs (JS off, blocked, an error) `reveal-ready` is never
   added, so every section stays fully visible instead of blank. */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group]'),
    );
    if (!nodes.length) return;

    root.classList.add('reveal-ready');

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      nodes.forEach((n) => n.classList.add('is-revealed'));
      return;
    }

    let pending = nodes;
    let ticking = false;

    const run = () => {
      ticking = false;
      const line = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= line) return true;
        el.classList.add('is-revealed');
        return false;
      });
      if (!pending.length) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(run);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    run();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
