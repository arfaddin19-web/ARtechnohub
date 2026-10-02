import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Hotel Management Software in Nepal | MPOS",
  description: "MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system.",
};

export default function Page() {
  return <SeoLandingPage eyebrow="HOTEL MANAGEMENT SOFTWARE" h1="Hotel Management Software for Nepal" intro="MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
