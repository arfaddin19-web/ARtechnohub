import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Salon Management Software in Nepal | MPOS",
  description: "MPOS helps spas and salons manage appointments, services, customers, staff, billing, packages and inventory in one connected system.",
  alternates: { canonical: "https://artechnohub.com.np/spa-salon-software/" },
};

const sections = [{"title":"Appointments & services","body":"Organize customer visits and service operations.","items":["Appointments","Service management","Customer history","Packages"]},{"title":"Billing & staff","body":"Connect service sales with billing and staff workflows.","items":["Service billing","Staff management","Commission workflows","Payment handling"]},{"title":"Inventory & reports","body":"Track relevant items and business performance from connected records.","items":["Inventory","Stock movement","Sales reports","Operational reports"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Spa & Salon Management Software</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS helps spas and salons manage appointments, services, customers, staff, billing, packages and inventory in one connected system.</p>
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
