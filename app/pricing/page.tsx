import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Pricing — MPOS Business Management Software',
  description: 'MPOS pricing depends on modules, users, terminals, deployment and support. Request a clear quote for restaurant, hotel, spa, banquet or HR management software.',
  alternates: { canonical: '/pricing/' },
};
const plans=[['Essential','For smaller operations getting started','Core business workflows','Contact for pricing'],['Professional','For growing businesses with more operational needs','Advanced workflows + integrations','Contact for pricing'],['Enterprise','For groups, multi-outlet and custom deployments','Custom configuration, rollout and support','Talk to us']];
export default function Pricing(){return <><SiteHeader/><main><section className="pricing-head"><div className="eyebrow">PRICING</div><h1>Choose the setup<br/><em>that fits your business.</em></h1><p>MPOS pricing can depend on modules, users, terminals, deployment and support requirements. We'll give you a clear quote after understanding your operation.</p></section><section className="plans">{plans.map(([name,desc,feature,price])=><article key={name}><span className="eyebrow">MPOS {name.toUpperCase()}</span><h2>{name}</h2><p>{desc}</p><hr/><b>Includes</b><span>✓ {feature}</span><strong>{price}</strong><Link className="outline-btn" href="/contact">Get a Quote →</Link></article>)}</section><section className="pricing-note"><b>Need HR & Payroll only?</b><span>MPOS HR & Payroll can also be deployed as a standalone product.</span><Link href="/products/hr-payroll">Explore HR & Payroll →</Link></section></main><SiteFooter/></>}
