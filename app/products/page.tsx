import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'MPOS Software Products | Restaurant, Hotel, POS, Payroll & More',
  description: 'Explore MPOS software from AR Technohub for restaurant POS, hotel management, banquet operations, spa and salon management, HR and payroll, billing and business operations in Nepal.',
  alternates: { canonical: '/products/' },
};
const products=[['masterpos','MPOS Restaurant Management Software','Restaurant Management','Complete POS and restaurant operations from tables and KOT to billing, inventory and reports.'],['hotel','MPOS Hotel Management Software','Hotel Management','Front office, reservations, rooms, guests, billing, housekeeping and connected operations.'],['spa','MPOS Spa & Salon Management Software','Spa, Salon & Parlor','Appointments, walk-ins, therapists, rooms, services, packages, customers and billing.'],['banquet','MPOS Banquet & Event Management Software','Banquet & Events','Bookings, halls, packages, menus, client records, billing and event operations.'],['hr-payroll','MPOS HR & Payroll Software','Standalone or Integrated','Employee, attendance, leave, shifts and payroll management for MPOS businesses or standalone use.']];
export default function Products(){return <><SiteHeader/><main><section className="product-hero"><div className="eyebrow">MPOS PRODUCTS</div><h1>Purpose-built software<br/><em>for real operations.</em></h1><p>Choose the MPOS solution that matches your business. Explore restaurant POS, hotel management, banquet, spa and salon, and HR & payroll software designed for practical business operations in Nepal.</p></section><section className="all-products">{products.map(([slug,name,tag,desc],i)=><Link className="big-product" href={`/products/${slug}`} key={slug}><div className="number">0{i+1}</div><div><span>{tag}</span><h2>{name}</h2><p>{desc}</p><b>Explore features →</b></div><div className="round-arrow">↗</div></Link>)}</section><section className="all-products">
<div className="big-product"><div className="number">06</div><div><span>Billing & POS</span><h2>Billing & POS Software in Nepal</h2><p>Explore MPOS billing and point-of-sale capabilities for businesses that need connected sales, payments, inventory and reporting.</p><b><a href="/billing-software-nepal/">Billing Software →</a> &nbsp; <a href="/pos-software-nepal/">POS Software →</a></b></div><div className="round-arrow">↗</div></div>
</section></main><SiteFooter/></>}
