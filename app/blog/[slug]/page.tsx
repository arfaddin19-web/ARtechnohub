import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { POSTS, type Block } from '../posts';

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Article not found' };
    const url = 'https://artechnohub.com.np/blog/' + post.slug + '/';
    return {
      title: post.metaTitle,
      description: post.description,
      alternates: { canonical: '/blog/' + post.slug + '/' },
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url,
        siteName: 'MPOS',
        title: post.metaTitle,
        description: post.description,
        publishedTime: post.date,
        images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: post.title }],
      },
      twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.description, images: ['https://artechnohub.com.np/og-image.png'] },
    };
  });
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <div className="post-body">
      {blocks.map((b, i) => {
        if (b.type === 'h') return <h2 key={i}>{b.text}</h2>;
        if (b.type === 'p') return <p key={i}>{b.text}</p>;
        if (b.type === 'ul') return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
        return <ol key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ol>;
      })}
    </div>
  );
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const url = 'https://artechnohub.com.np/blog/' + post.slug + '/';
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: url,
    image: 'https://artechnohub.com.np/og-image.png',
    articleSection: post.tag,
    author: { '@type': 'Organization', name: 'AR Technohub', url: 'https://artechnohub.com.np' },
    publisher: { '@type': 'Organization', name: 'AR Technohub', url: 'https://artechnohub.com.np', logo: { '@type': 'ImageObject', url: 'https://artechnohub.com.np/logo.png' } },
  };
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://artechnohub.com.np/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://artechnohub.com.np/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };
  const faqLd = post.faq && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(articleLd)}</script>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(crumbLd)}</script>
      {faqLd ? <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(faqLd)}</script> : null}
      <SiteHeader />
      <main>
        <article className="post">
          <div className="post-meta">
            <Link href="/blog/">{post.tag}</Link>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="post-intro">{post.excerpt}</p>
          <Body blocks={post.blocks} />
        </article>

        <section className="post-links" aria-label="Related pages">
          {post.links.map((l) => (
            <Link key={l.href} className="outline-btn" href={l.href}>{l.label} &rarr;</Link>
          ))}
        </section>

        {post.faq ? (
          <section className="post-faq">
            <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
            <h2>Questions about this guide</h2>
            <div className="faq-grid">
              {post.faq.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="cta post-cta">
          <div>
            <div className="eyebrow light">AR TECHNOHUB &middot; MPOS</div>
            <h2>See MPOS in action.</h2>
          </div>
          <div>
            <p>Talk to AR Technohub about a demonstration and configuration for your business.</p>
            <Link href="/contact" className="gold-btn">Request a Demo &rarr;</Link>
            <p className="cta-contact">
              Indramarga-10, Pokhara 33700 &middot; <a href="tel:+9779869093168">+977 9869093168</a> &middot;{' '}
              <a href="mailto:artechnohub23@gmail.com">artechnohub23@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}