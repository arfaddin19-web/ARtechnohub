import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const data: Record<string, any> = {
  masterpos: {
    name:'MPOS Restaurant Management Software', tag:'RESTAURANT MANAGEMENT SOFTWARE', title:'Run your restaurant with confidence.', shortName:'MPOS Restaurant', desc:'A complete restaurant management platform built around the real flow of a busy restaurant — from table ordering and KOT to billing, inventory, purchasing, reports and staff management.', image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90', shot:'pos-tables', shotCap:'Table floor & live order status',
    shots:[['pos-order','Order entry & cart'],['pos-billing','Billing, holds & payments'],['kitchen','Kitchen / KOT display'],['masters-products','Products, recipes & stock'],['purchase','Purchase transactions'],['reports','Sales reports & forecast']],
    features:[['◫','Table & Order Management','Manage tables, open orders, transfers, merges and split bills from one live screen.'],['◇','KOT & Kitchen Flow','Send orders from waiter phones to the server and route KOTs to the right kitchen or bar printer.'],['₹','Fast Billing','Handle counter billing, held bills, payments, discounts, returns and end-of-session cash control.'],['▤','Inventory & Purchasing','Track recipes, stock, purchases, wastage, suppliers and item movement without leaving the POS.'],['◌','Customer Management','Keep visit history, customer balances, loyalty information and useful customer records.'],['↗','Reports & Reconciliation','Daily, monthly and product-level sales reports plus cash/bank and party reconciliation.']],
    steps:[['01','Open table','The waiter opens a table on a phone or the cashier starts a counter order.'],['02','Build order','Items are added with modifiers, notes and quantities.'],['03','Send KOT','The server saves the order and the print service sends KOTs to the correct printer.'],['04','Serve & update','Additional items can be added while the same table remains open.'],['05','Bill & pay','Cashier opens the live order, applies discounts/tax and records payment.'],['06','Close','The bill closes and the transaction is included in session and business reports.']]
  },
  hotel: {
    name:'MPOS Hotel Management Software', tag:'HOTEL MANAGEMENT SOFTWARE', title:'One connected system for your hotel.', shortName:'MPOS Hotel', desc:'Bring reservations, front office, rooms, guest records, billing, housekeeping and hotel POS operations into one connected platform.', image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90',
    features:[['⌂','Front Office','See room status, arrivals, departures, occupied rooms and guest information at a glance.'],['◇','Reservations','Manage bookings, room types, rates, deposits, cancellations and availability.'],['▣','Check-in & Check-out','Move guests through a clean front-desk workflow with folios and payment handling.'],['♢','Housekeeping','Track room cleaning, inspection and room status changes across the property.'],['₹','Hotel Billing','Combine room charges and outlet charges into guest folios and process payments.'],['↗','Reports','Monitor occupancy, revenue, room sales, outlet sales and operational performance.']],
    steps:[['01','Reservation','Create or receive a reservation and assign the appropriate room type.'],['02','Arrival','Confirm guest details, deposit and room, then complete check-in.'],['03','Stay','Post room, restaurant or other approved charges to the guest folio.'],['04','Housekeeping','Room status updates keep front office and housekeeping synchronized.'],['05','Checkout','Review the folio, settle payment and close the guest stay.'],['06','Report','Closed transactions flow into hotel and business reports automatically.']]
  },
  spa: {
    name:'MPOS Spa & Salon Management Software', tag:'SPA, SALON & PARLOR SOFTWARE', title:'Make every appointment feel effortless.', shortName:'MPOS Spa', desc:'Manage bookings and walk-ins, assign therapists, reserve rooms, run services and packages, and complete billing through one elegant workflow.', image:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=90',
    features:[['◷','Appointments & Walk-ins','See the day by time, service and staff, while keeping walk-in customers moving quickly.'],['♙','Therapist Assignment','Assign the right staff member to a service and track availability without double booking.'],['◇','Room / Bed Management','Use rooms like restaurant tables — open a service, move it, update it and close it.'],['✦','Services & Packages','Create service menus, durations, prices, packages, add-ons and staff-linked services.'],['₹','Billing','Bill completed services, packages, products and other charges with clean payment tracking.'],['◌','Customer History','Keep visits, services, packages, preferences and balances together for better service.']],
    steps:[['01','Book or walk in','Find the appointment or create a new walk-in customer.'],['02','Choose service','Select the requested service and scheduled time from the menu.'],['03','Assign staff','Manager or receptionist assigns a therapist or service staff member.'],['04','Assign room','Open an available room or bed and connect it to the active service.'],['05','Complete service','Staff finishes the service and marks it completed.'],['06','Bill & close','Cashier bills the active room/service, records payment and closes the session.']]
  },
  banquet: {
    name:'MPOS Banquet & Event Management Software', tag:'BANQUET & EVENT MANAGEMENT', title:'Turn every event into a well-managed experience.', shortName:'MPOS Banquet', desc:'Manage halls, event enquiries, bookings, packages, menus, customer commitments, billing and event-day operations from one place.', image:'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90',
    features:[['◇','Hall & Venue Management','Keep availability and booking status clear across halls, rooms and event spaces.'],['◷','Event Bookings','Capture event date, time, guest count, client details, deposits and booking status.'],['✦','Packages & Menus','Build reusable event packages with food, beverages, services and optional extras.'],['₹','Quotation & Billing','Move from enquiry to quotation, advance payments, final billing and settlement.'],['▤','Event Operations','Track assigned staff, service requirements, notes and event-day changes.'],['↗','Reports','Review bookings, revenue, outstanding balances and event performance.']],
    steps:[['01','Enquiry','Record the client, event type, date, expected guests and requirements.'],['02','Availability','Check the requested hall and time against existing bookings.'],['03','Package','Build the event package, menu and additional services.'],['04','Confirm','Record advance/deposit and confirm the booking.'],['05','Event day','Manage changes and operational notes while the event is active.'],['06','Settlement','Complete final billing, payment and close the event.']]
  },
  'hr-payroll': {
    name:'MPOS HR & Payroll Software', tag:'INTEGRATED OR STANDALONE', title:'People management without the paperwork.', shortName:'MPOS HR & Payroll', desc:'A practical HR and payroll system that can run inside your MPOS business software or independently for organizations that only need HR and payroll.', image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90', shot:'payroll-employees', shotCap:'Employees, contracts & login access',
    shots:[['payroll-attendance','Daily attendance'],['payroll-run','Payroll run & salary processing']],
    features:[['♙','Employee Profiles','Centralize employee details, contracts, roles, departments and employment information.'],['◷','Attendance & Shifts','Manage attendance, shifts, late arrivals, absences and approved leave.'],['✦','Leave Management','Record leave requests, paid leave and leave balances with clear approval flow.'],['₹','Payroll Processing','Calculate salary with earnings, allowances, deductions, advances and attendance adjustments.'],['▤','Advances & Deductions','Track staff advances and recoveries with transparent records.'],['↗','Evaluation & Reports','Review attendance and performance indicators and generate payroll reports.']],
    steps:[['01','Employee setup','Create employees, salary structure, department and work schedule.'],['02','Attendance','Verify the monthly attendance record and approved leave.'],['03','Payroll inputs','Set allowances, paid leave, advances and approved deductions.'],['04','Calculate','Generate payroll from the verified attendance and salary structure.'],['05','Review','Check deductions, net salary and payment totals before release.'],['06','Release','Record salary payment through the selected cash/bank account and close payroll.']]
  }
};

type Seo = { title: string; description: string; keywords: string };

/* Social preview image per product, generated alongside the site (public/og-*.png). */
const ogMap: Record<string, string> = {
  masterpos: 'og-masterpos.png',
  hotel: 'og-hotel.png',
  spa: 'og-spa.png',
  banquet: 'og-banquet.png',
  'hr-payroll': 'og-hr-payroll.png',
};

const seo: Record<string, Seo> = {
  masterpos: {
    title: 'MPOS Restaurant Management Software',
    description: 'MPOS is restaurant management software for table orders, KOT kitchen workflow, fast billing, inventory, purchasing, reports and staff. Built for busy restaurants in Nepal and beyond.',
    keywords: 'restaurant management software, restaurant POS system, restaurant billing software Nepal, KOT software, restaurant inventory management',
  },
  hotel: {
    title: 'MPOS Hotel Management Software',
    description: 'MPOS hotel management software for reservations, front office, room status, check-in and checkout, guest folios, housekeeping and hotel billing in one connected system.',
    keywords: 'hotel management software, hotel PMS, reservation software, front office software, hotel billing software',
  },
  spa: {
    title: 'MPOS Spa & Salon Management Software',
    description: 'MPOS spa and salon software for appointments, walk-ins, therapist assignment, room and bed management, service packages, customer history and billing.',
    keywords: 'spa management software, salon software, appointment booking software, spa POS, salon management system',
  },
  banquet: {
    title: 'MPOS Banquet & Event Management Software',
    description: 'MPOS banquet software for event enquiries, hall and venue bookings, packages and menus, client records, event billing and event-day operations.',
    keywords: 'banquet management software, event management software, venue booking software, banquet POS, hall booking system',
  },
  'hr-payroll': {
    title: 'MPOS HR & Payroll Software',
    description: 'MPOS HR and payroll software for employee records, contracts, attendance, shifts, leave, advances, salary structure and payroll processing. Runs standalone or integrated with MPOS.',
    keywords: 'HR payroll software, employee management system, attendance software Nepal, payroll processing software, leave management system',
  },
};

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const s = seo[slug];
    const name = data[slug]?.name ?? 'MPOS';
    if (!s) return { title: name };
    const title = s.title + ' | MPOS';
    return {
      title,
      description: s.description,
      keywords: s.keywords.split(', '),
      alternates: { canonical: '/products/' + slug },
      openGraph: { title, description: s.description, url: 'https://artechnohub.com.np/products/' + slug, type: 'website', images: [{ url: 'https://artechnohub.com.np/' + (ogMap[slug] || 'og-image.png'), width: 1200, height: 630, alt: title }] },
      twitter: { card: 'summary_large_image', title, description: s.description, images: ['https://artechnohub.com.np/' + (ogMap[slug] || 'og-image.png')] },
    };
  });
}

export function generateStaticParams(){ return Object.keys(data).map(slug=>({slug})); }

export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=data[slug]; if(!p) notFound();
  return <>
    <SiteHeader/>
    <main>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: p.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, Android, iOS, web browser",
        description: p.desc,
        url: "https://artechnohub.com.np/products/" + slug,
        offers: { "@type": "Offer", url: "https://artechnohub.com.np/contact/", availability: "https://schema.org/InStock", description: "Contact for pricing" },
        featureList: p.features.map((f: string[]) => f[1]),
        brand: { "@type": "Brand", name: "MPOS" },
        provider: { "@type": "Organization", name: "AR Technohub", url: "https://artechnohub.com.np" },
        isPartOf: { "@type": "Organization", name: "AR Technohub", url: "https://artechnohub.com.np" },
      })}</script>
      <section className="detail-hero"><div className="detail-copy"><div className="eyebrow">{p.tag}</div><h1>{p.title}</h1><p className="product-name">{p.name}</p><p>{p.desc}</p><div className="actions"><Link className="gold-btn" href="/contact">Request a Demo →</Link><Link className="outline-btn" href="/products">← All Products</Link></div></div><div className={p.shot?'detail-shot':'detail-image'} style={p.shot?undefined:{backgroundImage:`url(${p.image})`}}>{p.shot?<div className="shot-win"><div className="shot-bar"><i/><i/><i/><span>{p.shortName} &middot; {p.shotCap}</span></div><Image src={`/product/${p.shot}.webp`} alt={`${p.shortName} — ${p.shotCap}`} width={1400} height={875} priority/></div>:<span>MPOS • {p.name}</span>}</div></section>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://artechnohub.com.np/" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://artechnohub.com.np/products/" },
          { "@type": "ListItem", position: 3, name: p.name, item: "https://artechnohub.com.np/products/" + slug },
        ],
      })}</script>
      <section className="feature-section"><div className="eyebrow">WHAT YOU GET</div><h2>Everything your team<br/><em>needs to work better.</em></h2><div className="detail-grid">{p.features.map((f:string[],i:number)=><article key={i}><span>{f[0]}</span><h3>{f[1]}</h3><p>{f[2]}</p></article>)}</div></section>
      <section className="workflow"><div><div className="eyebrow light">HOW IT WORKS</div><h2>Designed around<br/><em>your daily workflow.</em></h2><p>MPOS connects each step so your staff spend less time moving between screens and more time serving customers.</p></div><div className="steps">{p.steps.map((s:string[],i:number)=><div key={i}><b>{s[0]}</b><strong>{s[1]}</strong><p>{s[2]}</p></div>)}</div></section>
      {p.shots
        ? <section className="gallery"><div className="section-head"><div><div className="eyebrow">REAL SCREENS</div><h2>See {p.shortName}<br/><em>in action.</em></h2></div><Link href="/contact" className="gold-btn">Request a Demo →</Link></div><div className="gallery-grid">{(p.shots as string[][]).map(([src,cap])=><figure key={src}><div className="shot-win"><div className="shot-bar"><i/><i/><i/><span>{p.shortName}</span></div><Image src={`/product/${src}.webp`} alt={`${p.shortName} — ${cap}`} width={1400} height={875} loading="lazy"/></div><figcaption className="shot-cap">{cap}</figcaption></figure>)}</div></section>
        : <section className="feature-section showcase"><div className="showcase-copy"><div className="eyebrow">ONE CONNECTED PLATFORM</div><h2>From the first action to the final report.</h2><p>Every completed transaction becomes part of the same business record. Managers get visibility, staff get simpler screens and owners get reliable information for decisions.</p><Link className="gold-btn" href="/contact">See MPOS in Action →</Link></div><div className="module-list"><b>INCLUDED IN {p.shortName.toUpperCase()}</b><ul>{p.features.map((f:string[],i:number)=><li key={i}>{f[1]}</li>)}</ul></div></section>}
      <section className="hw-cross"><div><div className="eyebrow">HARDWARE TO RUN IT</div><h2>Need the terminals,<br/><em>printers and rolls too?</em></h2></div><div><p>AR Technohub supplies the hardware as well as the software &mdash; PCs and POS terminals, thermal printers, thermal paper rolls and POS peripherals &mdash; specified and installed together.</p><div className="actions"><Link className="gold-btn" href="/hardware">See Hardware <span>&rarr;</span></Link><Link className="outline-btn" href="/contact">Request a Quote</Link></div></div></section>
      <section className="detail-cta"><div><div className="eyebrow">READY TO GET STARTED?</div><h2>Let's build a better operation.</h2><p>Tell us about your business and we'll show you the workflow.</p></div><Link className="gold-btn" href="/contact">Request a Demo →</Link></section>
    </main>
    <SiteFooter/>
  </>
}
