import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Hotel Management Software in Nepal | MPOS",
  description: "MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system.",
  keywords: ["hotel management software nepal", "hotel software nepal", "hotel PMS nepal", "hotel booking software nepal", "hotel billing software nepal", "होटल व्यवस्थापन सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/hotel-management-software/" },
};

const sections = [
  { title: "Front office & reservations", body: "Manage arrivals, departures, room status and guest records from one front-desk screen.", items: ["Reservations and availability", "Check-in and check-out", "Room status at a glance", "Guest profiles and folios"] },
  { title: "Rooms & housekeeping", body: "Keep front office and housekeeping working from the same room information.", items: ["Room and rate setup", "Housekeeping status", "Room moves and extensions", "Maintenance notes"] },
  { title: "Billing & reporting", body: "Combine room charges and outlet charges into clean guest billing and reports.", items: ["Guest folios and payments", "Restaurant and outlet charges", "Occupancy and revenue reports", "Staff and management reports"] },
];

const links = [
  { href: "/hotel-pos-software/", label: "Hotel POS Software" },
  { href: "/products/hotel/", label: "MPOS Hotel" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="HOTEL MANAGEMENT SOFTWARE" h1="Hotel Management Software for Nepal" intro="MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system." sections={sections} links={links} />;
}