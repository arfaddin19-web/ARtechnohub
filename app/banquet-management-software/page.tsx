import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Banquet Management Software in Nepal | MPOS",
  description: "MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system.",
};

export default function Page() {
  return <SeoLandingPage eyebrow="BANQUET MANAGEMENT SOFTWARE" h1="Banquet Management Software for Events & Venues" intro="MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
