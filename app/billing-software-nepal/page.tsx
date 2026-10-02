import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Billing Software in Nepal | MPOS Billing System",
  description: "MPOS by AR Technohub provides practical billing software for businesses in Nepal, connecting invoicing, payments, sales records and operational reporting in one system.",
  alternates: { canonical: "https://artechnohub.com.np/billing-software-nepal/" },
};

export default function Page() {
  return <SeoLandingPage eyebrow="BILLING SOFTWARE IN NEPAL" h1="Billing Software for Businesses in Nepal" intro="MPOS by AR Technohub provides practical billing software for businesses in Nepal, connecting invoicing, payments, sales records and operational reporting in one system." sections=[{"title":"Fast business billing","body":"Create and manage customer bills efficiently while keeping sales information connected to the rest of the business.","items":["Sales billing and invoicing","Discounts and payment handling","Customer records","Sales and transaction reports"]},{"title":"Connected operations","body":"Billing can work alongside the operational modules your business uses instead of becoming a separate island.","items":["Inventory connection","User permissions","Printer support","Business-specific configuration"]},{"title":"Built for Nepal","body":"MPOS is designed around the practical needs of Nepali businesses and can be configured according to the business's billing workflow and requirements.","items":["PAN/VAT business details","Configurable bill formats","Multiple payment methods","Support for growing businesses"]}] links=[{"href":"/pos-software-nepal/","label":"POS Software"},{"href":"/restaurant-pos-software/","label":"Restaurant POS"}] />;
}
