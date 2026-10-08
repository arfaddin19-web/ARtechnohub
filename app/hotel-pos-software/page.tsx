import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Hotel POS Software in Nepal | MPOS",
  description: "MPOS provides POS and billing workflows for hotels, connecting restaurant sales, guest-related charges, payments, inventory and reporting.",
  keywords: ["hotel pos software nepal", "hotel billing software nepal", "hotel restaurant pos", "hotel software nepal", "pos software nepal", "होटल पोस सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/hotel-pos-software/" },
};

const sections = [
  { title: "Restaurant & outlet POS", body: "Run hotel restaurant, bar and banquet billing on a POS connected to the front office.", items: ["Table and counter orders", "KOT and kitchen workflow", "Multiple payment methods", "Discounts and adjustments"] },
  { title: "Guest billing", body: "Post outlet charges to the right guest folio so nothing is billed twice or missed.", items: ["Charge to room", "Split and settle folios", "Separate cash and account sales", "Folio settlement at check-out"] },
  { title: "Connected operations", body: "Keep POS sales, inventory and reports connected to the wider hotel workflow.", items: ["Inventory and stock tracking", "Outlet sales reports", "Payment summaries", "Management reporting"] },
];

const links = [
  { href: "/hotel-management-software/", label: "Hotel Management Software" },
  { href: "/restaurant-pos-software/", label: "Restaurant POS Software" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="HOTEL POS SOFTWARE" h1="Hotel POS Software for Hotels in Nepal" intro="MPOS provides POS and billing workflows for hotels, connecting restaurant sales, guest-related charges, payments, inventory and reporting." sections={sections} links={links} />;
}