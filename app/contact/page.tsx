import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactForm from './ContactForm';

const EMAIL = 'artechnohub23@gmail.com';
const TITLE = 'Contact — Request an MPOS Demo';
const DESC =
  'Request a free MPOS demo for your restaurant, hotel, spa, salon, banquet or HR operation. Call or WhatsApp +977 9869093168 or email artechnohub23@gmail.com. We reply within one business day.';

const FAQ = [
  {
    q: 'Is MPOS a cloud service?',
    a: 'MPOS runs on a server in your own premises, so it works from your local network and does not depend on an internet connection for daily use.',
  },
  {
    q: 'Do I need to buy hardware separately?',
    a: 'You can run MPOS on existing desktops, laptops, tablets or phones on your network. We can advise on terminals, printers and receipt hardware if you need it.',
  },
  {
    q: 'Can I start with only restaurant or only HR?',
    a: 'Yes. MPOS HR & Payroll can run standalone, and business products can be deployed one at a time as your operation grows.',
  },
  {
    q: 'How long does implementation take?',
    a: 'It depends on your operation size and modules. After we understand your workflow, we give you a clear timeline with the demo.',
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['request MPOS demo', 'MPOS contact Nepal', 'restaurant software demo', 'business management software Nepal'],
  alternates: { canonical: '/contact/' },
  openGraph: {
    type: 'website',
    url: 'https://artechnohub.com.np/contact/',
    title: TITLE,
    description: DESC,
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://artechnohub.com.np/og-image.png'] },
};

const CONTACT_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: TITLE,
  description: DESC,
  url: 'https://artechnohub.com.np/contact/',
  mainEntity: {
    '@type': 'Organization',
    name: 'MPOS',
    url: 'https://artechnohub.com.np',
    telephone: '+977-9869093168',
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Indramarga-10',
      addressLocality: 'Pokhara',
      postalCode: '33700',
      addressRegion: 'Gandaki',
      addressCountry: 'NP',
    },
  },
};

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(CONTACT_LD)}
      </script>
      <SiteHeader />
      <main>
        <section className="contact-page">
          <div>
            <div className="eyebrow">LET'S TALK</div>
            <h1>
              Tell us about<br />
              <em>your business.</em>
            </h1>
            <p>
              Request a demo and our team can show you the MPOS workflow for your
              restaurant, hotel, spa, banquet or HR operation.
            </p>
            <div className="contact-note">
              <b>What happens next?</b>
              <span>01 — We learn about your operation</span>
              <span>02 — We recommend the right MPOS product</span>
              <span>03 — We arrange a personalized demo</span>
            </div>
            <p className="form-direct">
              Prefer to write directly? <a href={'mailto:' + EMAIL}>{EMAIL}</a>
              <br />
              Call or WhatsApp <a href="tel:+9779869093168">+977 9869093168</a>
              <br />
              <span className="addr">
                <address>Indramarga-10, Pokhara 33700, Nepal</address>
              </span>
            </p>
          </div>
          <ContactForm />
        </section>

        <section className="faq-section">
          <div className="eyebrow">COMMON QUESTIONS</div>
          <h2>
            Questions before<br />
            <em>you book a demo?</em>
          </h2>
          <div className="faq-grid">
            {FAQ.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(FAQ_LD)}
        </script>
      </main>
      <SiteFooter />
    </>
  );
}