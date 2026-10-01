import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'MPOS — Restaurant, Hotel, Spa & HR Management Software',
  description: 'MPOS is business management software for restaurants, hotels, spas, salons, banquets and HR. Table orders, KOT, billing, inventory and payroll in one platform.',
  keywords: ['business management software Nepal', 'restaurant POS Nepal', 'hotel management software', 'spa salon software', 'banquet event software', 'HR payroll software', 'inventory management', 'billing software'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artechnohub.com.np',
    siteName: 'MPOS',
    title: 'MPOS — Restaurant, Hotel, Spa & HR Management Software',
    description: 'Business management software for restaurants, hotels, spas, salons, banquets and HR. Orders, KOT, billing, inventory, reports and payroll in one platform.',
    images: [{ url: 'https://artechnohub.com.np/og-image.png', width: 1200, height: 630, alt: 'MPOS business management software' }],
  },
  twitter: { card: 'summary_large_image', title: 'MPOS — Restaurant, Hotel, Spa & HR Management Software', description: 'Business management software for restaurants, hotels, spas, salons, banquets and HR.', images: ['https://artechnohub.com.np/og-image.png'] },
};
import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { HARDWARE as hardware } from './hardware/data';

const products = [
  { slug:'masterpos', name:'MPOS Restaurant Management Software', tag:'Restaurant Management', desc:'A complete restaurant operating system for orders, tables, KOT, billing, inventory, purchasing, accounting and staff.', image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',shot:'/product/pos-order.webp', features:['Table & order management','KOT / kitchen workflow','Fast billing & payments','Inventory & purchasing','Reports & accounting','Staff & payroll integration'] },
  { slug:'hotel', name:'MPOS Hotel Management Software', tag:'Hotel Management', desc:'Run your rooms, reservations, front office, billing and hotel operations from one connected platform.', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85', features:['Reservations & room status','Check-in / check-out','Guest profiles & folios','Housekeeping workflow','POS & billing','Reports & payroll integration'] },
  { slug:'spa', name:'MPOS Spa & Salon Management Software', tag:'Spa, Salon & Parlor', desc:'Manage appointments, walk-ins, therapists, rooms, services, packages, billing and customer history with ease.', image:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85', features:['Appointments & walk-ins','Therapist assignment','Room / bed management','Service & package sales','Customer history','Billing & payroll integration'] },
  { slug:'banquet', name:'MPOS Banquet & Event Management Software', tag:'Banquet & Events', desc:'Control event bookings, halls, packages, menus, billing and event operations without scattered spreadsheets.', image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85', features:['Event & hall bookings','Packages & menus','Guest & client details','Event billing','Inventory & purchasing','Reports & payroll integration'] },
  { slug:'hr-payroll', name:'MPOS HR & Payroll Software', tag:'Standalone or Integrated', desc:'A flexible HR and payroll system that can run independently or plug directly into any MPOS business product.', image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',shot:'/product/payroll-run.webp', features:['Employee management','Attendance & shifts','Leave management','Payroll processing','Advances & deductions','Salary & HR reports'] },
];

const industries = [
  ['Restaurants','Fast ordering, table service, KOT and billing in one flow.','masterpos','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85'],
  ['Hotels','Connect front office, rooms, guest billing and operations.','hotel','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85'],
  ['Spas & Salons','Appointments, services, therapists and billing made simple.','spa','https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=85'],
  ['Banquets & Events','Plan venues, packages, menus and event billing together.','banquet','https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85'],
];

export default function Home(){
 return <>
  <SiteHeader/>
  <main>
   <section className="hero"><div className="hero-copy"><div className="eyebrow">BUSINESS SOFTWARE, BUILT AROUND YOU</div><h1>One platform.<br/><em>Every operation.</em></h1><p>MPOS brings the everyday work of restaurants, hotels, spas, salons and banquets into one elegant, connected system. Less paperwork. Fewer disconnected tools. More control.</p><div className="actions"><Link className="gold-btn" href="/products">Explore Products <span>→</span></Link><Link className="outline-btn" href="/contact">Book a Free Demo</Link></div><div className="trust"><span>✓ Local implementation</span><span>✓ Desktop & mobile</span><span>✓ Built to scale</span></div></div><div className="hero-shot"><div className="shot-win"><div className="shot-bar"><i/><i/><i/><span>MasterPOS &middot; Table Floor</span></div><Image src="/product/pos-tables.webp" alt="MasterPOS table floor screen showing every table with its order state and running total" width={1400} height={875} priority/></div><div className="shot-chip"><small>LIVE PRODUCT SCREEN</small><strong>Table floor, order status &amp; billing in one view</strong></div></div></section>
   <section className="intro section"><div><div className="eyebrow">THE MPOS ECOSYSTEM</div><h2>Different businesses.<br/><em>One familiar experience.</em></h2></div><p>Each MPOS product is designed for its own industry, while the foundation stays connected. Inventory, billing, reports, staff and payroll can work together instead of living in separate systems.</p></section>
   <section id="industries" className="industry-grid">{industries.map(([title,desc,slug,img])=><Link className="industry" href={`/products/${slug}`} key={slug}><div style={{backgroundImage:`url(${img})`}}></div><article><span>MPOS SOLUTION</span><h3>{title}</h3><p>{desc}</p><b>Explore solution →</b></article></Link>)}</section>
   <section id="products" className="section products"><div className="section-head"><div><div className="eyebrow">OUR PRODUCTS</div><h2>Software for your<br/><em>complete operation.</em></h2></div><Link href="/products" className="text-btn">View all products →</Link></div><div className="product-grid">{products.map(p=><Link href={`/products/${p.slug}`} className="product-card" key={p.slug}>{p.shot?<div className="product-shot"><Image src={p.shot} alt={`${p.name} screen`} width={1400} height={875}/></div>:<div className="product-photo" style={{backgroundImage:`url(${p.image})`}}/>}<div className="product-content"><span className="tag">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="feature-list">{p.features.slice(0,4).map(f=><span key={f}>✓ {f}</span>)}</div><b>View product details <i>→</i></b></div></Link>)}</div></section>
   <section id="why" className="why"><div className="why-image"/><div className="why-copy"><div className="eyebrow">WHY MPOS</div><h2>Built for operations.<br/><em>Made for people.</em></h2><p>Good software should make a busy day feel simpler. MPOS focuses on fast workflows, clear screens, reliable records and practical support.</p><div className="why-grid"><div><strong>01</strong><b>Simple workflows</b><small>Less training and fewer steps for everyday staff.</small></div><div><strong>02</strong><b>Connected modules</b><small>Billing, inventory, reports and payroll share the same data.</small></div><div><strong>03</strong><b>Flexible deployment</b><small>Designed for local and network-based business environments.</small></div><div><strong>04</strong><b>Human support</b><small>Implementation and support when your team needs it.</small></div></div></div></section>
   <section className="showcase section"><div className="showcase-copy"><div className="eyebrow">FROM FRONT DESK TO BACK OFFICE</div><h2>See the whole business,<br/><em>not just one screen.</em></h2><p>MPOS connects the people who run the operation: waiters, cashiers, managers, front desk teams, therapists and administrators.</p><Link href="/contact" className="gold-btn">Talk to our team →</Link></div><div className="shot-grid">{[['dashboard','Business dashboard'],['kitchen','Kitchen & KOT print'],['ledger','Accounts & ledger']].map(([src,cap])=><figure key={src}><div className="shot-win"><div className="shot-bar"><i/><i/><i/><span>{cap}</span></div><Image src={`/product/${src}.webp`} alt={`MasterPOS ${cap} screen`} width={1400} height={875} loading="lazy"/></div><figcaption className="shot-cap">{cap}</figcaption></figure>)}</div></section>
   <section id="hardware-software" className="about-band"><div className="about-band-copy"><div className="eyebrow">FROM AR TECHNOHUB</div><h2>Software we build.<br/><em>Hardware we supply.</em></h2><p>MPOS is the software brand of AR Technohub. Alongside it we supply the equipment your operation runs on &mdash; PCs and POS terminals, thermal printers, thermal rolls and the accessories a billing counter needs.</p><p className="about-band-note">Buying software and hardware from the same company means they are specified together, installed together, and supported by one team.</p><div className="actions"><Link className="gold-btn" href="/hardware">See Hardware <span>&rarr;</span></Link><Link className="outline-btn" href="/about">About AR Technohub</Link></div></div><div className="hw-grid">{hardware.map(h=><Link className="hw-tile" href={`/hardware/${h.slug}/`} key={h.slug}><span>{h.kicker}</span><h3>{h.name}</h3><p>{h.short}</p><b>Explore &rarr;</b></Link>)}</div></section>
   <section className="cta"><div><div className="eyebrow light">READY WHEN YOU ARE</div><h2>Let's build a better<br/><em>way to run your business.</em></h2></div><div><p>Tell us what you operate and we'll show you the MPOS workflow that fits.</p><Link href="/contact" className="gold-btn">Request a Demo →</Link></div></section>
  </main>
<SiteFooter/>
  </>
}
