import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export type SeoSection = { title: string; body: string; items: string[] };

export default function SeoLandingPage({
  eyebrow, h1, intro, sections, links = [],
}: { eyebrow: string; h1: string; intro: string; sections: SeoSection[]; links?: {href:string; label:string}[] }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="product-hero">
          <span className="tag">{eyebrow}</span>
          <h1>{h1}</h1>
          <p>{intro}</p>
          <div className="actions">
            <Link className="gold-btn" href="/contact/">Request a Demo <span>→</span></Link>
            <Link className="outline-btn" href="/products/">Explore MPOS</Link>
          </div>
        </section>
        <section className="feature-section">
          <div className="detail-grid">
            {sections.map((section) => (
              <article key={section.title}>
                <span>✦</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
        <section className="workflow">
          <div>
            <span className="tag">CONNECTED BUSINESS SOFTWARE</span>
            <h2>One system for everyday operations.</h2>
            <p>MPOS connects billing, POS, inventory, reporting and workforce workflows so your team can work from connected business information.</p>
          </div>
          <div className="steps">
            {["Operations","Transactions","Inventory","Reports"].map((step, i) => (
              <div key={step}><b>0{i + 1}</b><strong>{step}</strong><p>Keep this part of the business connected with the rest of your MPOS workflow.</p></div>
            ))}
          </div>
        </section>
        {links.length > 0 && <section className="section"><div className="section-head"><h2>Explore related MPOS solutions</h2></div><div className="actions">{links.map((link) => <Link key={link.href} className="outline-btn" href={link.href}>{link.label} →</Link>)}</div></section>}
        <section className="cta">
          <div><span className="tag">AR TECHNOHUB • MPOS</span><h2>See MPOS in action.</h2><p>Talk to AR Technohub about a demonstration and configuration for your business.</p></div>
          <Link className="gold-btn" href="/contact/">Request a Demo <span>→</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
