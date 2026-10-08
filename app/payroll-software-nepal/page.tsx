import type { Metadata } from "next";
import SeoLandingPage from "../components/SeoLandingPage";

export const metadata: Metadata = {
  title: "Payroll Software in Nepal | MPOS",
  description: "MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting.",
  keywords: ["payroll software nepal", "salary software nepal", "hr software nepal", "attendance software nepal", "तलब सफ्टवेयर नेपाल"],
  alternates: { canonical: "https://artechnohub.com.np/payroll-software-nepal/" },
};

const sections = [
  { title: "Employees & attendance", body: "Keep employee records, shifts, attendance and leave in one place.", items: ["Employee profiles and contracts", "Attendance and shifts", "Leave requests and balances", "Departments and roles"] },
  { title: "Payroll processing", body: "Calculate salary from verified attendance and your salary structure.", items: ["Earnings and allowances", "Deductions and advances", "Paid leave handling", "Payslip generation"] },
  { title: "Reports & control", body: "Review payroll before release and keep clear records for each period.", items: ["Payroll summaries", "Salary and deduction reports", "Advance and recovery tracking", "Period-wise records"] },
];

const links = [
  { href: "/products/hr-payroll/", label: "MPOS HR & Payroll" },
  { href: "/billing-software-nepal/", label: "Billing Software Nepal" },
  { href: "/contact/", label: "Request a Demo" },
];

export default function Page() {
  return <SeoLandingPage eyebrow="PAYROLL SOFTWARE NEPAL" h1="Payroll Software for Businesses in Nepal" intro="MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting." sections={sections} links={links} />;
}