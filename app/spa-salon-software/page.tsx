import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Spa & Salon Management Software in Nepal | MPOS",
  description: "MPOS helps spas and salons manage appointments, services, customers, staff, billing, packages and inventory in one connected system.",
  keywords: ["spa management software nepal", "salon software nepal", "spa salon software nepal", "appointment booking software nepal", "salon billing software", "स्पा स्यालुन सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/spa-salon-software/" },
};

const sections = [
  { title: "Appointments & walk-ins", body: "See the day by time, service and staff while keeping walk-in customers moving.", items: ["Appointment calendar", "Walk-in handling", "Service durations", "Avoid double booking"] },
  { title: "Staff & rooms", body: "Assign the right therapist and room to each service and track availability.", items: ["Therapist assignment", "Staff schedules", "Room and bed management", "Service-linked staff"] },
  { title: "Services, packages & billing", body: "Sell services, packages and products and settle billing through one clean flow.", items: ["Service and package menu", "Add-ons and products", "Customer history", "Payment tracking"] },
];

const links = [
  { href: "/products/spa/", label: "MPOS Spa & Salon" },
  { href: "/billing-software-nepal/", label: "Billing Software Nepal" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="SPA SALON SOFTWARE" h1="Spa & Salon Management Software" intro="MPOS helps spas and salons manage appointments, services, customers, staff, billing, packages and inventory in one connected system." sections={sections} links={links} />;
}