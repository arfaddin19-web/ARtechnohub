import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Spa & Salon Management Software in Nepal | MPOS",
  description: "MPOS helps spas and salons manage appointments,
  alternates: { canonical: "https://artechnohub.com.np/spa-salon-software/" },
};

export default function Page() {
  return <SeoLandingPage eyebrow="SPA SALON SOFTWARE" h1="Spa & Salon Management Software" intro="MPOS helps spas and salons manage appointments, services, customers, staff, billing, packages and inventory in one connected system." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
