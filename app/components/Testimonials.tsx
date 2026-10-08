import { REVIEWS } from './reviews';

// Renders nothing unless there is at least one genuine review in reviews.ts.
// When reviews exist it shows a testimonials grid and emits AggregateRating /
// Review structured data from the real entries only.
export default function Testimonials({ heading = 'What our clients say' }: { heading?: string }) {
  if (!REVIEWS.length) return null;

  const avg = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AR Technohub',
    url: 'https://artechnohub.com.np',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: REVIEWS.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      reviewBody: r.quote,
    })),
  };

  return (
    <section className="feature-section">
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(ld)}</script>
      <div className="eyebrow">CLIENT EXPERIENCE</div>
      <h2>{heading}</h2>
      <div className="pillar-grid">
        {REVIEWS.map((r) => (
          <article className="pillar" key={r.name + r.date}>
            <span className="kicker">{'★'.repeat(r.rating)}</span>
            <p>&ldquo;{r.quote}&rdquo;</p>
            <b style={{ fontSize: 12 }}>
              {r.name}
              {r.business ? ` \u00b7 ${r.business}` : ''}
            </b>
          </article>
        ))}
      </div>
    </section>
  );
}