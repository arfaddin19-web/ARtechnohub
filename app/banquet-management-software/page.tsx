import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Banquet Management Software in Nepal | MPOS",
  description: "MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system.",
  keywords: ["banquet management software nepal", "banquet software nepal", "event management software nepal", "hall booking software nepal", "banquet billing software", "बैंक्वेट सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/banquet-management-software/" },
};

const sections = [
  { title: "Enquiries & bookings", body: "Track every event enquiry from first contact to confirmed booking without spreadsheets.", items: ["Event date and time", "Hall and venue availability", "Guest count and deposits", "Booking status"] },
  { title: "Packages & menus", body: "Build reusable event packages and menus that are quick to quote and adjust.", items: ["Food and beverage packages", "Customisable menus", "Optional extras and services", "Reusable templates"] },
  { title: "Event billing & reports", body: "Move from quotation to advance, final bill and settlement with clear records.", items: ["Quotations and advances", "Final event billing", "Outstanding balances", "Event and revenue reports"] },
];

const links = [
  { href: "/hotel-management-software/", label: "Hotel Management Software" },
  { href: "/products/banquet/", label: "MPOS Banquet" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="BANQUET MANAGEMENT SOFTWARE" h1="Banquet Management Software for Events & Venues" intro="MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system." sections={sections} links={links} />;
}