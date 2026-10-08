import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "POS Software in Nepal | Point of Sale System | MPOS",
  description: "MPOS is point-of-sale and business management software from AR Technohub for restaurants, hotels, banquets, spas, salons and growing businesses in Nepal.",
  keywords: ["pos software nepal", "point of sale software nepal", "pos system nepal", "billing pos nepal", "restaurant pos nepal", "पीओएस सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/pos-software-nepal/" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="POS SOFTWARE IN NEPAL"
      h1="POS Software Built for Businesses in Nepal"
      intro="MPOS is point-of-sale and business management software from AR Technohub for restaurants, hotels, banquets, spas, salons and growing businesses in Nepal."
      sections={[{"title":"Complete point of sale","body":"Manage sales from the point of transaction while keeping operational data available for reporting and management.","items":["POS billing","Orders and payments","Customer management","Sales reports"]},{"title":"Restaurant-ready workflows","body":"For food businesses, MPOS connects tables and orders with kitchen and bar workflows.","items":["Table management","KOT and BOT","Merge and transfer","Split bills and item-based billing"]},{"title":"Beyond the counter","body":"POS data can connect with other business operations so owners have a more complete view.","items":["Inventory","Staff and payroll","Expenses and reporting","Multiple users and terminals"]}]}
      links={[{"href":"/billing-software-nepal/","label":"Billing Software"},{"href":"/restaurant-pos-software/","label":"Restaurant POS"}]}
    />
  );
}
