import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant POS Software in Nepal | MPOS",
  description: "MPOS is restaurant POS software for Nepal, connecting table management, waiter orders, KOT, BOT, billing, inventory and reporting in one system.",
  alternates: { canonical: "https://artechnohub.com.np/restaurant-pos-software/" },
};

const sections = [{"title":"Tables & orders","body":"Manage restaurant tables and orders from a workflow designed for busy service.","items":["Table status and floor management","Waiter order punching","Merge and transfer tables","Split bills by items or guests"]},{"title":"Kitchen & bar workflow","body":"Send the right order information to the appropriate ready location.","items":["KOT for kitchen","BOT for bar","Order routing","Print status and reprint controls"]},{"title":"Billing & management","body":"Finish the service cycle with connected billing and management information.","items":["Fast restaurant billing","Multiple payment methods","Inventory connection","Sales and operational reports"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Restaurant POS & Management Software</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS is restaurant POS software for Nepal, connecting table management, waiter orders, KOT, BOT, billing, inventory and reporting in one system.</p>
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
