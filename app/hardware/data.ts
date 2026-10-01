export type HardwareCategory = {
  slug: string;
  name: string;
  kicker: string;
  title: string;
  /** Split into a plain line and an emphasised line, rather than deriving it
      from `title` by punctuation. */
  heading: [string, string];
  short: string;
  intro: string;
  image: string;
  /** Extra photographs shown as a strip on the detail page. */
  gallery?: { src: string; alt: string }[];
  highlights: { b: string; s: string }[];
  specs: string[];
  useCases: [string, string][];
  notes: string[];
};

export const HARDWARE: HardwareCategory[] = [
  {
    slug: 'pc',
    name: 'PCs & Computers',
    kicker: 'COMPUTERS',
    title: 'PCs sized to the counter, not the showroom',
    heading: ['PCs sized to the counter,', 'not the showroom'],
    short: 'Desktops, laptops and POS terminals specified for the work your business actually does.',
    intro:
      'We supply the computers that run MPOS and the rest of your operation. Rather than selling the largest configuration available, we match hardware to your terminals, user count and workload — and we set it up with MPOS already installed and configured.',
    image: '/hardware/pc.webp',
    gallery: [
      { src: '/hardware/pos-terminal.webp', alt: 'MPOS touchscreen POS terminal at a billing counter' },
      { src: '/hardware/pc-alt.webp', alt: 'Desktop computer supplied for back-office work' },
    ],
    highlights: [
      { b: 'POS terminals', s: 'Compact units at the billing counter or on the table.' },
      { b: 'Back-office machines', s: 'Desktops for accounts, inventory and reporting.' },
      { b: 'Laptops and tablets', s: 'For managers, waiters and floor staff on the move.' },
      { b: 'Setup included', s: 'MPOS installed, printers connected, staff trained.' },
    ],
    specs: [
      'Desktop and tower configurations',
      'Laptops for portable use',
      'Touchscreen POS terminals',
      'Android tablets for table or room service',
      'Servers for multi-terminal MPOS deployments',
      'UPS and power protection',
    ],
    useCases: [
      ['Billing counter', 'A touchscreen terminal running MPOS billing.'],
      ['Manager desk', 'A desktop for reports, inventory and configuration.'],
      ['Table service', 'A tablet that sends orders straight to the kitchen printer.'],
      ['Front office', 'A desktop handling check-ins and guest folios.'],
    ],
    notes: [
      'We recommend specifications after learning your terminal count and workload.',
      'Operating system, memory and storage can be scaled to your budget.',
      'We can quote against a list of hardware you have already chosen.',
    ],
  },
  {
    slug: 'thermal-printer',
    name: 'Thermal Printers',
    kicker: 'PRINTING',
    title: 'Thermal printers for bills, KOT and reports',
    heading: ['Thermal printers for bills,', 'KOT and reports'],
    short: 'Receipt and kitchen printers that connect directly to MPOS and print without ink.',
    intro:
      'A thermal printer is part of the software, not an accessory to it. MPOS sends KOT tickets, bills and reports straight to the printer, so we supply printers that are tested against the formats MPOS actually produces.',
    image: '/hardware/thermal-printer.webp',
    highlights: [
      { b: 'Receipt printing', s: 'Customer bills at the billing counter.' },
      { b: 'KOT printing', s: 'Kitchen tickets routed from the order screen.' },
      { b: 'Barcode-capable', s: 'For inventory items and stock movement.' },
      { b: 'Tested with MPOS', s: 'Paper width, drivers and formats confirmed before delivery.' },
    ],
    specs: [
      'Direct thermal receipt printers',
      'Kitchen printers for KOT routing',
      'Barcode and QR code printing',
      'USB, Ethernet and Wi-Fi connectivity',
      'Cash drawer connection through the printer',
      'Consumable and spare-part availability',
    ],
    useCases: [
      ['Restaurant billing', 'One receipt printer at the counter.'],
      ['Kitchen', 'A separate printer per kitchen section for KOT tickets.'],
      ['Hotel front desk', 'Folios and guest invoices.'],
      ['Spa reception', 'Service and product bills at checkout.'],
    ],
    notes: [
      'Tell us your paper width and whether you need kitchen routing — it determines the model.',
      'Printers can be shared across terminals or assigned per station.',
      'We test printing on your MPOS build before handing the system over.',
    ],
  },
  {
    slug: 'thermal-rolls',
    name: 'Thermal Rolls',
    kicker: 'CONSUMABLES',
    title: 'Thermal paper rolls that match your printer',
    heading: ['Thermal paper rolls', 'that match your printer'],
    short: 'Receipt rolls supplied in the width and length your printers need, plus the correct core size.',
    intro:
      'The wrong roll does not just waste paper — it jams, fades print or silently corrupts an image. We supply thermal rolls matched to the printers we install, and we keep them in stock so a re-order does not stop your billing.',
    image: '/hardware/thermal-rolls.webp',
    highlights: [
      { b: 'Width matched', s: 'Sized to the printer, not bought generically.' },
      { b: 'Correct core', s: 'The right core diameter so the roll fits and feeds.' },
      { b: 'Print quality', s: 'Paper that stays legible on a hot kitchen counter.' },
      { b: 'Restock supply', s: 'A standing arrangement so you never run dry.' },
    ],
    specs: [
      'Standard receipt roll widths',
      'BPA-free options',
      'High-durability rolls for hot environments',
      'Multi-copy and preprint-free rolls',
      'Bulk and regular order quantities',
      'Delivery with hardware orders',
    ],
    useCases: [
      ['Daily billing', 'Standard rolls for customer receipts.'],
      ['Kitchen KOT', 'Short rolls for kitchen tickets.'],
      ['Continuous operation', 'Bulk orders that reduce re-ordering.'],
      ['BPA-free requirements', 'Alternative paper for food-service compliance.'],
    ],
    notes: [
      'We size rolls to the printer we supply — tell us your model or let us specify it.',
      'Bulk pricing applies to regular volumes.',
      'We can include rolls in a standing monthly supply.',
    ],
  },
  {
    slug: 'peripherals',
    name: 'POS Peripherals',
    kicker: 'ACCESSORIES',
    title: 'The accessories that finish a billing counter',
    heading: ['The accessories that', 'finish a billing counter'],
    short: 'Scanners, cash drawers, displays, card readers and the small parts a counter needs.',
    intro:
      'These are the pieces that decide whether billing feels fast or fiddly. We supply them alongside the system so they are compatible with MPOS from the first day, and we configure them as part of the install.',
    image: '/hardware/peripherals.webp',
    highlights: [
      { b: 'Barcode scanners', s: 'Fast product entry at the counter and in stock counts.' },
      { b: 'Cash drawers', s: 'Opened from the billing screen or through the printer.' },
      { b: 'Customer displays', s: 'Show the customer what is being rung up.' },
      { b: 'Card readers', s: 'Digital payment options at the billing counter.' },
    ],
    specs: [
      'Barcode and QR scanners',
      'Steel cash drawers',
      'Customer-facing LCD displays',
      'Card payment terminals',
      'Receipt cutters and auto-cut options',
      'Kiosk and stand hardware',
    ],
    useCases: [
      ['Fast billing', 'Scanner and drawer for a high-volume counter.'],
      ['Customer confidence', 'A pole or counter display showing the running bill.'],
      ['Digital payment', 'A card reader connected to the billing flow.'],
      ['Stock control', 'Scanners used during inventory counts.' ],
    ],
    notes: [
      'Compatibility depends on how you bill — we confirm before recommending.',
      'Can be quoted as part of a full counter setup or added later.',
      'We install and test peripherals as part of handover.',
    ],
  },
];

export const bySlug = (slug: string) => HARDWARE.find((h) => h.slug === slug);