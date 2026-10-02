import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Software in Nepal | MPOS",
  description: "MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting.",
  alternates: { canonical: "https://artechnohub.com.np/payroll-software-nepal/" },
};

const sections = [{"title":"Attendance & leave","body":"Build payroll from verified attendance and leave information.","items":["Attendance records","Leave management","Late and absence handling","Monthly payroll inputs"]},{"title":"Salary calculation","body":"Manage salary components and common deductions in a connected workflow.","items":["Basic salary","Allowances","Advances","Absence and other deductions"]},{"title":"Payroll records","body":"Keep employee salary information and reports organized.","items":["Payslips","Payroll reports","Employee records","User permissions"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Payroll Software for Businesses in Nepal</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS payroll helps businesses manage employee attendance, leave, salary components, deductions, advances, payslips and payroll reporting.</p>
      </header>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {sections.map((section: {title: string; body: string; items?: string[]}) => (
          <section key={section.title} className="rounded-2xl border p-7">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 leading-7 opacity-80">{section.body}</p>
            {section.items && <ul className="mt-5 list-disc space-y-2 pl-5">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
      </div>
      <section className="mt-14 rounded-2xl border p-8">
        <h2 className="text-2xl font-semibold">Explore MPOS</h2>
        <p className="mt-3 leading-7 opacity-80">MPOS connects business operations with billing, POS, inventory, reporting and workforce workflows. Contact AR Technohub for a demonstration and configuration suited to your business.</p>
      </section>
    </main>
  );
}
