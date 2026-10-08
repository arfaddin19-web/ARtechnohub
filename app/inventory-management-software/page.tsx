import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Inventory Management Software in Nepal | MPOS",
  description: "MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations.",
  keywords: ["inventory management software nepal", "stock management software nepal", "inventory software nepal", "stock software nepal", "मालसामान सफ्टवेयर"],
  alternates: { canonical: "https://artechnohub.com.np/inventory-management-software/" },
};

const sections = [
  { title: "Stock & purchases", body: "Track what comes in and what goes out, with suppliers and purchase records kept together.", items: ["Purchase entries", "Supplier records", "Stock movement", "Low-stock visibility"] },
  { title: "Items & recipes", body: "Manage items, units, categories and recipes so stock updates when you sell.", items: ["Item and unit setup", "Categories and groups", "Recipe and consumption", "Wastage tracking"] },
  { title: "Reports & reconciliation", body: "Match stock movement against sales and purchases to find gaps early.", items: ["Stock valuation", "Movement history", "Consumption reports", "Reconciliation with sales"] },
];

const links = [
  { href: "/billing-software-nepal/", label: "Billing Software Nepal" },
  { href: "/products/masterpos/", label: "MPOS Restaurant Software" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="INVENTORY MANAGEMENT SOFTWARE" h1="Inventory Management Software for Businesses" intro="MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations." sections={sections} links={links} />;
}