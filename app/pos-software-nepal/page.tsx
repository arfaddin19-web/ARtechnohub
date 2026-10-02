import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POS Software in Nepal | Point of Sale System | MPOS",
  description: "MPOS is point-of-sale and business management software from AR Technohub for restaurants, hotels, banquets, spas, salons and growing businesses in Nepal.",
  alternates: { canonical: "https://artechnohub.com.np/pos-software-nepal/" },
};

const sections = [{"title":"Complete point of sale","body":"Manage sales from the point of transaction while keeping operational data available for reporting and management.","items":["POS billing","Orders and payments","Customer management","Sales reports"]},{"title":"Restaurant-ready workflows","body":"For food businesses, MPOS connects tables and orders with kitchen and bar workflows.","items":["Table management","KOT and BOT","Merge and transfer","Split bills and item-based billing"]},{"title":"Beyond the counter","body":"POS data can connect with other business operations so owners have a more complete view.","items":["Inventory","Staff and payroll","Expenses and reporting","Multiple users and terminals"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">POS Software Built for Businesses in Nepal</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS is point-of-sale and business management software from AR Technohub for restaurants, hotels, banquets, spas, salons and growing businesses in Nepal.</p>
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
        <h2 className="text-2xl font-semibold">Why MPOS?</h2>
        <p className="mt-3 leading-7 opacity-80">MPOS connects everyday business operations in one system, helping owners and teams manage transactions, operations and reporting with less dependence on disconnected tools. Contact AR Technohub for a product demonstration and configuration suited to your business.</p>
      </section>
    </main>
  );
}
