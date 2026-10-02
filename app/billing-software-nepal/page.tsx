import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing Software in Nepal | MPOS Billing System",
  description: "MPOS by AR Technohub provides practical billing software for businesses in Nepal, connecting invoicing, payments, sales records and operational reporting in one system.",
  alternates: { canonical: "https://artechnohub.com.np/billing-software-nepal/" },
};

const sections = [{"title":"Fast business billing","body":"Create and manage customer bills efficiently while keeping sales information connected to the rest of the business.","items":["Sales billing and invoicing","Discounts and payment handling","Customer records","Sales and transaction reports"]},{"title":"Connected operations","body":"Billing can work alongside the operational modules your business uses instead of becoming a separate island.","items":["Inventory connection","User permissions","Printer support","Business-specific configuration"]},{"title":"Built for Nepal","body":"MPOS is designed around the practical needs of Nepali businesses and can be configured according to the business's billing workflow and requirements.","items":["PAN/VAT business details","Configurable bill formats","Multiple payment methods","Support for growing businesses"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Billing Software for Businesses in Nepal</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS by AR Technohub provides practical billing software for businesses in Nepal, connecting invoicing, payments, sales records and operational reporting in one system.</p>
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
