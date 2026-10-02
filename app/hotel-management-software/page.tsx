import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Management Software in Nepal | MPOS",
  description: "MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system.",
  alternates: { canonical: "https://artechnohub.com.np/hotel-management-software/" },
};

const sections = [{"title":"Hotel operations","body":"Connect core hotel workflows so teams can manage day-to-day operations from one system.","items":["Room and guest operations","Reservations and stay information","Guest billing","Management reports"]},{"title":"Hotel POS & billing","body":"Keep hotel food and other chargeable services connected to the guest and billing workflow.","items":["Restaurant POS","Room-related charges","Multiple payment methods","Configurable bill formats"]},{"title":"Connected management","body":"Bring operational information together for better visibility across the property.","items":["Inventory connection","Staff and payroll","User permissions","Sales and operational reporting"]}];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest">MPOS • AR Technohub</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Hotel Management Software for Nepal</h1>
        <p className="mt-6 text-lg leading-8 opacity-80">MPOS by AR Technohub helps hotels connect room operations, guest billing, restaurant charges, staff workflows and management reporting in one business system.</p>
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
