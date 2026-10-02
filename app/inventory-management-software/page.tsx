import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management Software in Nepal | MPOS",
  description: "MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations.",
  alternates: { canonical: "https://artechnohub.com.np/inventory-management-software/" },
};

const sections = [{"title":"Stock control","body":"Track item movement and current stock across daily business operations.","items":["Stock management","Purchases","Stock transfers","Low-stock visibility"]},{"title":"Restaurant inventory","body":"Support ingredient and item workflows used by food businesses.","items":["Ingredient tracking","Consumption","Wastage records","Supplier management"]},{"title":"Connected reporting","body":"Connect inventory activity with sales and operational information.","items":["Item movement reports","Purchase reports","Stock reports","Billing integration"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Inventory Management Software for Businesses</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS inventory connects purchasing, stock, transfers, consumption and reporting with billing and business operations.</p>
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
