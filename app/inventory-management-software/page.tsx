import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Inventory Management Software in Nepal | MPOS",
  description: "MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations.",
};

export default function Page() {
  return <SeoLandingPage eyebrow="INVENTORY MANAGEMENT SOFTWARE" h1="Inventory Management Software for Businesses" intro="MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
