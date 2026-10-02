import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Restaurant POS Software in Nepal | MPOS",
  description: "MPOS is restaurant POS software for Nepal, connecting table management, waiter orders, KOT, BOT, billing, inventory and reporting in one system.",
  alternates: { canonical: "https://artechnohub.com.np/restaurant-pos-software/" },
};

const sections = [
  { title: "Tables & orders", body: "Manage restaurant tables and orders from a workflow designed for busy service.", items: ["Table status and floor management","Waiter order punching","Merge and transfer tables","Split bills by items or guests"] },
  { title: "Kitchen & bar workflow", body: "Send the right order information to the appropriate ready location.", items: ["KOT for kitchen","BOT for bar","Order routing","Print status and reprint controls"] },
  { title: "Billing & management", body: "Finish the service cycle with connected billing and management information.", items: ["Fast restaurant billing","Multiple payment methods","Inventory connection","Sales and operational reports"] },
];

const links = [
  { href: "/pos-software-nepal/", label: "POS Software" },
  { href: "/billing-software-nepal/", label: "Billing Software" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="RESTAURANT POS SOFTWARE IN NEPAL" h1="Restaurant POS & Management Software" intro="MPOS is restaurant POS software for Nepal, connecting table management, waiter orders, KOT, BOT, billing, inventory and reporting in one system." sections={sections} links={links} />;
}
