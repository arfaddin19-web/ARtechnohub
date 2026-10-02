import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Payroll Software in Nepal | MPOS",
  description: "MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting.",
};

export default function Page() {
  return <SeoLandingPage eyebrow="PAYROLL SOFTWARE NEPAL" h1="Payroll Software for Businesses in Nepal" intro="MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting." sections={[{"title":"{section.title}","body":"{section.body}","items":[]}]} links={[]}/>;
}
