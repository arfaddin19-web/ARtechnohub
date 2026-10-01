import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'MPOS Products — Restaurant, Hotel, Spa, Banquet & HR',
  description: 'Explore the MPOS product suite: restaurant management software, hotel management software, spa and salon software, banquet software and HR payroll software.',
  alternates: { canonical: '/products/' },
};
const products=[['masterpos','MPOS Restaurant Management Software','Restaurant Management','Complete POS and restaurant operations from tables and KOT to billing, inventory and reports.'],['hotel','MPOS Hotel Management Software','Hotel Management','Front office, reservations, rooms, guests, billing, housekeeping and connected operations.'],['spa','MPOS Spa & Salon Management Software','Spa, Salon & Parlor','Appointments, walk-ins, therapists, rooms, services, packages, customers and billing.'],['banquet','MPOS Banquet & Event Management Software','Banquet & Events','Bookings, halls, packages, menus, client records, billing and event operations.'],['hr-payroll','MPOS HR & Payroll Software','Standalone or Integrated','Employee, attendance, leave, shifts and payroll management for MPOS businesses or standalone use.']];
export default function Products(){return <><SiteHeader/><main><section className="product-hero"><div className="eyebrow">MPOS PRODUCTS</div><h1>Purpose-built software<br/><em>for real operations.</em></h1><p>Choose the system that matches your business. Each product includes industry-specific workflows and can connect with MPOS HR & Payroll.</p></section><section className="all-products">{products.map(([slug,name,tag,desc],i)=><Link className="big-product" href={`/products/${slug}`} key={slug}><div className="number">0{i+1}</div><div><span>{tag}</span><h2>{name}</h2><p>{desc}</p><b>Explore features →</b></div><div className="round-arrow">↗</div></Link>)}</section></main><SiteFooter/></>}
