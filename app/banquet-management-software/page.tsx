import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banquet Management Software in Nepal | MPOS",
  description: "MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system.",
  alternates: { canonical: "https://artechnohub.com.np/banquet-management-software/" },
};

const sections = [{"title":"Event & venue management","body":"Organize banquet bookings and event information in a structured workflow.","items":["Venue management","Event booking","Customer records","Package management"]},{"title":"Billing & payments","body":"Keep advances, event charges and balances organized through connected billing.","items":["Advance payments","Event billing","Remaining balance","Payment records"]},{"title":"Business management","body":"Connect banquet activity with the wider business system.","items":["Inventory connection","Expenses","Staff management","Reports"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Banquet Management Software for Events & Venues</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS helps banquet and event businesses manage bookings, customers, packages, payments, event billing and operational reporting in one system.</p>
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
