import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Hotel POS Software in Nepal | MPOS",
  description: "MPOS provides POS and billing workflows for hotels, connecting restaurant sales, guest-related charges, payments, inventory and reporting.",
};

export default function Page() {
  return <SeoLandingPage eyebrow="HOTEL POS SOFTWARE" h1="Hotel POS Software for Hotels in Nepal" intro="MPOS provides POS and billing workflows for hotels, connecting restaurant sales, guest-related charges, payments, inventory and reporting." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
