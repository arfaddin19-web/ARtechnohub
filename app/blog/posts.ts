export type Block =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  updated?: string;
  tag: string;
  readingTime: string;
  excerpt: string;
  blocks: Block[];
  links: { href: string; label: string }[];
  faq?: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: 'best-pos-software-nepal',
    title: 'How to Choose the Best POS Software in Nepal',
    metaTitle: 'Best POS Software in Nepal (2026 Buyer Guide)',
    description:
      'A practical guide to choosing POS software in Nepal: what to compare, questions to ask vendors, red flags to avoid, and how to match features to your business.',
    date: '2026-10-01',
    tag: 'Buying Guide',
    readingTime: '8 min read',
    excerpt:
      'Every vendor says their POS software is the best in Nepal. Here is a practical framework for comparing them based on your actual business, not the sales pitch.',
    blocks: [
      { type: 'p', text: 'Searching for "best POS software in Nepal" returns dozens of options, and almost every one of them claims to be the best. The truth is that the best POS system depends on what your business actually does every day. This guide gives you a practical framework for comparing options so you can make a decision based on your operation instead of a feature sheet.' },
      { type: 'h', text: 'Start with your business type, not the software' },
      { type: 'p', text: 'A restaurant, a retail shop, a hotel and a spa do not need the same billing flow. Before looking at any demo, write down the two or three things your staff do most often: taking orders, settling bills, tracking stock, bookings, or something else. The software that makes those daily actions fastest is usually the best fit, even if it has fewer "extra" features.' },
      { type: 'ul', items: [
        'Restaurants: table or counter orders, KOT to the kitchen, fast billing, menu management, and daily sales reports.',
        'Hotels: room bookings, front-office check-in and check-out, guest folios and restaurant billing.',
        'Retail and general billing: item lookup, barcode support, quick counter billing, returns and stock.',
        'Spa and salon: appointments, therapist or staff assignment, service and package sales, billing.',
      ] },
      { type: 'h', text: 'What to compare in any POS software' },
      { type: 'ul', items: [
        'Billing speed: how many steps does it take to settle one bill at peak hour?',
        'Offline behaviour: can you keep billing if the internet or office network drops? This matters a lot in Nepal.',
        'Tax and invoice handling: does it support VAT invoices and the bill format you are required to issue?',
        'Inventory and stock: does it track purchases, recipes or stock movement, or only sales?',
        'Reports: can you see daily sales, sales by item, by staff and by payment type?',
        'Users and permissions: can a cashier be limited to billing while a manager sees reports?',
        'Hardware support: receipt and kitchen printers, cash drawer, barcode scanner and barcode or thermal labels.',
      ] },
      { type: 'h', text: 'Local support is not a small detail in Nepal' },
      { type: 'p', text: 'When a billing counter stops working during a busy evening, what matters is how fast someone can help. Ask potential vendors where they are based, how support is provided, what the response time usually is, and whether they can visit your business for installation and training. A local provider is often worth more than an extra feature you will rarely use.' },
      { type: 'p', text: 'AR Technohub is based in Pokhara and provides MPOS software with local setup and support. That local presence is one reason businesses in Pokhara choose to evaluate MPOS.' },
      { type: 'h', text: 'Questions to ask every vendor' },
      { type: 'ol', items: [
        'Can I see the system working with data that looks like mine, not a demo dataset?',
        'What happens to my billing if the internet goes down?',
        'Who owns my data, and how do I export it if I stop using the software?',
        'What is included in support, and what costs extra?',
        'How are updates and new versions handled?',
        'Can the system grow if I open a second outlet?',
        'Can it handle VAT billing the way my accountant expects?',
      ] },
      { type: 'h', text: 'Red flags to avoid' },
      { type: 'ul', items: [
        'No local support and no clear way to get help during business hours.',
        'A demo that only shows pretty screens but cannot show the full billing-to-report flow.',
        'No clear answer about data ownership or export.',
        'Pricing that hides mandatory add-ons such as printers, training or per-terminal fees.',
        'Software that cannot work reliably when the internet is unstable.',
      ] },
      { type: 'h', text: 'Match the software to how you grow' },
      { type: 'p', text: 'If you run one counter today but plan to add outlets, choose software that supports multiple terminals and locations rather than forcing a migration later. If you expect to add inventory, purchasing or payroll, prefer a system where those modules connect to billing instead of living in separate tools.' },
      { type: 'p', text: 'MPOS is built as a connected suite: restaurant, hotel, spa, banquet and payroll modules share the same foundation, so billing, inventory and reports stay connected as the business grows.' },
      { type: 'h', text: 'The simplest decision rule' },
      { type: 'p', text: 'Write down your top three daily workflows, then score each shortlisted system on how well it handles them, how it behaves when the internet is down, and how quickly you can get local support. The software that scores best on those practical points is the best POS software for your business, regardless of what any ranking page says.' },
    ],
    links: [
      { href: '/pos-software-nepal/', label: 'POS Software in Nepal' },
      { href: '/billing-software-nepal/', label: 'Billing Software' },
      { href: '/restaurant-pos-software/', label: 'Restaurant POS Software' },
    ],
    faq: [
      { q: 'What is the best POS software in Nepal?', a: 'There is no single answer for every business. The best POS software depends on your business type, workflow, budget and support needs. Compare options against your most common daily tasks and how they behave when the internet is down.' },
      { q: 'Does POS software work without internet in Nepal?', a: 'Some systems support local or network-based operation so billing continues when the internet is down. This is an important question to ask every vendor, because connectivity can be unreliable.' },
      { q: 'How much does POS software cost in Nepal?', a: 'Cost depends on modules, number of terminals, deployment method, implementation and support. Ask for a clear breakdown of one-time and recurring costs before deciding.' },
    ],
  },
  {
    slug: 'restaurant-billing-software-price-nepal',
    title: 'Restaurant Billing Software Price in Nepal: What Affects the Cost',
    metaTitle: 'Restaurant Billing Software Price in Nepal | MPOS',
    description:
      'What determines the price of restaurant billing software in Nepal: modules, terminals, deployment, support and hardware, plus what to ask before you buy.',
    date: '2026-10-03',
    tag: 'Pricing',
    readingTime: '6 min read',
    excerpt:
      'Two restaurants can be quoted very different prices for "the same" software. Here is what actually drives the cost of restaurant billing software in Nepal.',
    blocks: [
      { type: 'p', text: 'Restaurant owners often ask for "the price of restaurant billing software in Nepal" and expect a single number. In practice, the quote depends on several factors. Understanding them helps you compare vendors fairly and avoid paying for features you will never use.' },
      { type: 'h', text: 'The main factors that change the price' },
      { type: 'ol', items: [
        'Modules included. Billing alone is one thing; adding inventory, purchasing, accounting, HR or payroll increases scope.',
        'Number of terminals and users. A single billing counter costs less than several counters plus a manager login.',
        'Deployment. A local network setup on your own computer differs from a cloud or multi-branch setup.',
        'Implementation and training. Setup, menu import, printer configuration and staff training take real time.',
        'Hardware. Thermal printers, POS terminals, scanners and cash drawers may be part of the total cost.',
        'Support and updates. Most vendors charge for ongoing support, and this is usually billed yearly.',
        'Customisation. Special bill formats, reports or workflows are quoted separately.',
      ] },
      { type: 'h', text: 'How vendors usually structure pricing' },
      { type: 'p', text: 'Most restaurant software in Nepal is priced as a one-time licence or setup fee plus an annual support or maintenance charge. Some cloud products instead charge a monthly or yearly subscription per user or per terminal. When comparing, convert everything to the same basis, for example the total cost over the first two years, so a low headline price with high recurring fees does not look cheaper than it is.' },
      { type: 'h', text: 'Questions to ask before you pay' },
      { type: 'ul', items: [
        'What exactly is included in the quoted price, and what will cost extra later?',
        'Is training included, and for how many staff sessions?',
        'What is the annual support or renewal fee?',
        'Are printer or hardware costs included or separate?',
        'If I add a counter or outlet later, what will that cost?',
        'What is the refund or trial policy if the software does not fit?',
      ] },
      { type: 'h', text: 'Do not choose on price alone' },
      { type: 'p', text: 'The cheapest software is expensive if it fails during a busy dinner service or if no one answers when you need support. For a business that bills every day, reliability and local support are part of the real cost. A slightly higher price with proper setup, training and a responsive local team usually costs less over a year than a cheap system that keeps breaking.' },
      { type: 'h', text: 'What to expect from a proper quotation' },
      { type: 'p', text: 'A clear quotation for restaurant billing software in Nepal should separate the software, hardware, implementation, training and annual support so you can see what you are paying for. AR Technohub quotes MPOS based on modules, counters and support requirements, and can explain each line during a demo.' },
      { type: 'p', text: 'Request a demonstration and tell us about your restaurant. We will show the relevant workflow and give you a clear quotation instead of a mystery price.' },
    ],
    links: [
      { href: '/restaurant-management-software-pokhara/', label: 'Restaurant Software Pokhara' },
      { href: '/restaurant-pos-software/', label: 'Restaurant POS Software' },
      { href: '/pricing', label: 'MPOS Pricing' },
    ],
    faq: [
      { q: 'How much does restaurant billing software cost in Nepal?', a: 'It depends on modules, number of terminals, deployment, training, hardware and annual support. Ask for a written quotation that separates each of these so you can compare vendors on the same basis.' },
      { q: 'Is it a one-time cost or a subscription?', a: 'Both models exist in Nepal. Many systems are a one-time licence plus yearly support, while cloud products may charge per user or terminal each month. Compare the total cost over a few years.' },
    ],
  },
  {
    slug: 'what-is-kot-restaurant',
    title: 'What Is KOT (Kitchen Order Ticket)? A Guide for Restaurants',
    metaTitle: 'What Is KOT (Kitchen Order Ticket)? Restaurant Guide',
    description:
      'KOT stands for Kitchen Order Ticket. Learn how KOT works, why it reduces order errors, how digital KOT differs from paper, and what to look for.',
    date: '2026-10-04',
    tag: 'Restaurant Operations',
    readingTime: '6 min read',
    excerpt:
      'A Kitchen Order Ticket is the instruction that travels from the table to the kitchen. Getting it right is one of the simplest ways to cut order errors and speed up service.',
    blocks: [
      { type: 'p', text: 'KOT stands for Kitchen Order Ticket. It is the slip or digital message that tells the kitchen what to prepare, for which table, and in what quantity. In busy restaurants, the KOT is the link between the person taking the order and the people cooking it. When that link is slow or unclear, orders get delayed, items get missed and customers get frustrated.' },
      { type: 'h', text: 'How a KOT works' },
      { type: 'ol', items: [
        'A waiter takes the customer order at the table or counter.',
        'The order is recorded, either on paper or in the billing or POS system.',
        'A ticket is generated and sent to the kitchen, and to the bar or other stations when needed.',
        'The kitchen prepares the items and marks the ticket as done or in progress.',
        'The order is served, and the bill is settled separately at the counter or table.',
      ] },
      { type: 'p', text: 'One important point: the KOT is not the customer bill. It is an internal instruction to the kitchen. The customer bill is generated separately when the order is settled.' },
      { type: 'h', text: 'Paper KOT vs digital KOT' },
      { type: 'p', text: 'A paper KOT is written by hand or on a simple slip printer. A digital KOT is generated automatically by the POS system the moment the order is entered. Digital KOTs are sent to a kitchen printer or a kitchen display screen, so the kitchen sees the order immediately without anyone carrying a slip across the room.' },
      { type: 'ul', items: [
        'Fewer spelling and handwriting mistakes, because the order is already in the system.',
        'Faster hand-off, since the ticket prints or appears in the kitchen instantly.',
        'Better tracking of what has been ordered and what is still pending.',
        'A clear record that can be matched against the final bill and sales reports.',
      ] },
      { type: 'h', text: 'Why KOT matters for small restaurants too' },
      { type: 'p', text: 'Many smaller restaurants assume KOT is only for large operations. In practice, even a small kitchen benefits. During a busy lunch rush, a single missed item can mean an unhappy customer and a lost bill. A simple digital KOT keeps order flow organised without adding complexity.' },
      { type: 'h', text: 'What to look for in KOT software' },
      { type: 'ul', items: [
        'The ability to split orders across stations, such as kitchen, bar and dessert.',
        'Clear printing on a kitchen thermal printer, or a screen the kitchen can read from a distance.',
        'The option to mark items in progress or completed.',
        'Support for order types such as dine-in, takeaway and delivery.',
        'A connection between the KOT and the final bill so nothing is billed twice or missed.',
      ] },
      { type: 'h', text: 'How MPOS handles KOT' },
      { type: 'p', text: 'MPOS supports KOT-based workflows so restaurant orders move from the floor to the kitchen quickly and accurately. Because the KOT is part of the same system as billing and reports, the kitchen and the counter work from the same order information. AR Technohub can demonstrate the KOT flow during a restaurant software demo in Pokhara.' },
    ],
    links: [
      { href: '/restaurant-management-software-pokhara/', label: 'Restaurant Software Pokhara' },
      { href: '/products/masterpos/', label: 'MPOS Restaurant Software' },
      { href: '/restaurant-pos-software/', label: 'Restaurant POS Software' },
    ],
    faq: [
      { q: 'What does KOT mean?', a: 'KOT stands for Kitchen Order Ticket. It is the slip or digital message sent to the kitchen describing what to prepare for a table or order.' },
      { q: 'Is KOT the same as a bill?', a: 'No. A KOT is an internal instruction for the kitchen. The customer bill is a separate document generated when the order is settled.' },
      { q: 'Do small restaurants need KOT software?', a: 'Even small restaurants benefit, because digital KOTs reduce missed items and speed up service during busy periods without adding much complexity.' },
    ],
  },
  {
    slug: 'vat-billing-nepal-restaurants',
    title: 'VAT and Bill Numbering for Restaurants in Nepal',
    metaTitle: 'VAT and Bill Numbering for Restaurants in Nepal',
    description:
      'A practical overview of VAT billing and bill numbering for restaurants and shops in Nepal, why sequence numbers matter, and how software helps.',
    date: '2026-10-06',
    tag: 'Compliance',
    readingTime: '6 min read',
    excerpt:
      'VAT billing and bill numbering are easy to get wrong without a system. This is a practical overview for Nepali businesses, plus how software keeps records consistent.',
    blocks: [
      { type: 'p', text: 'For any restaurant, shop or hotel in Nepal that is registered for VAT, the way you issue bills and number them matters. Mistakes create problems at filing time and can make an audit painful. This article gives a practical overview; for rules that apply to your specific business, always confirm with a qualified accountant.' },
      { type: 'h', text: 'VAT billing in simple terms' },
      { type: 'p', text: 'Nepal applies Value Added Tax (VAT) at 13 percent on most taxable goods and services. A VAT-registered business collects VAT on its sales and claims credit on the VAT paid on its purchases. The bill you give the customer is the evidence of the VAT you have charged, so it has to be clear and complete.' },
      { type: 'p', text: 'A VAT bill typically needs to show the business name, PAN or VAT number, the items sold, the taxable amount, the VAT amount and the total. The exact format expected can depend on your registration and the requirements in force, so confirm the details with your accountant.' },
      { type: 'h', text: 'Why bill numbering matters' },
      { type: 'p', text: 'Bills are expected to be issued in sequence, without unexplained gaps or duplicated numbers. Manual books make this hard: pages get skipped, a bill gets written on the wrong pad, or a staff member restarts numbering. A missing or repeated number is exactly the kind of thing that raises questions during a review.' },
      { type: 'p', text: 'A billing system that assigns the next number automatically removes most of this risk. The sequence stays intact, and each bill is stored with its number, date, items and totals.' },
      { type: 'h', text: 'Common mistakes to avoid' },
      { type: 'ul', items: [
        'Using more than one bill book at the same counter without a clear sequence.',
        'Writing bills by hand and forgetting to record some of them in the day book.',
        'Recording sales in one place and VAT figures in another, so totals never match.',
        'Changing a bill after it has been issued without keeping a clear record.',
        'Failing to keep bills and records organised for the required period.',
      ] },
      { type: 'h', text: 'How billing software helps' },
      { type: 'p', text: 'A good billing system issues a numbered bill automatically, calculates VAT on each line, and stores every bill in one place. At the end of the day or month, you can pull a sales summary that matches your bills instead of recreating totals by hand. This saves hours of work and reduces the chance of errors that are hard to explain later.' },
      { type: 'p', text: 'MPOS generates bills and maintains consistent numbering, with reports you can use alongside your accounting. AR Technohub can demonstrate how the billing and VAT flow works for restaurants and shops in Nepal.' },
      { type: 'h', text: 'A note on your specific situation' },
      { type: 'p', text: 'VAT rules, thresholds and bill requirements can change and depend on your registration and business type. Treat this article as a general guide and confirm the details with your accountant before making decisions about your billing setup.' },
    ],
    links: [
      { href: '/billing-software-nepal/', label: 'Billing Software Nepal' },
      { href: '/pos-software-nepal/', label: 'POS Software Nepal' },
      { href: '/contact', label: 'Talk to AR Technohub' },
    ],
    faq: [
      { q: 'What is the VAT rate in Nepal?', a: 'The standard VAT rate in Nepal is 13 percent. Your obligations depend on whether your business is registered for VAT, so confirm the specifics with a qualified accountant.' },
      { q: 'Why does bill numbering matter?', a: 'Bills should be issued in a consistent sequence. Missing or duplicated numbers make records harder to reconcile at filing or audit time. Billing software keeps the sequence consistent automatically.' },
    ],
  },
  {
    slug: 'pos-vs-manual-billing',
    title: 'POS vs Manual Billing: The Real Cost for Nepali Businesses',
    metaTitle: 'POS vs Manual Billing: Real Cost for Nepal Businesses',
    description:
      'Manual billing looks free, but time, errors and missing data carry a cost. Compare POS vs manual billing for restaurants and shops in Nepal.',
    date: '2026-10-08',
    tag: 'Business',
    readingTime: '7 min read',
    excerpt:
      'A notebook costs almost nothing up front, yet many businesses lose more to manual billing than a POS system would cost. Here is how to think about the real cost.',
    blocks: [
      { type: 'p', text: 'At first glance, manual billing looks free. You write the order on a pad, add the total, take the cash and move on. A POS system, on the other hand, costs money up front. So why do so many businesses eventually switch? Because the cost of manual billing does not appear on any invoice. It shows up as lost time, mistakes and missing information.' },
      { type: 'h', text: 'The hidden costs of manual billing' },
      { type: 'ul', items: [
        'Time. Every handwritten bill is slower than scanning or tapping a few items, and slow billing means longer queues.',
        'Errors. Arithmetic mistakes and illegible handwriting lead to wrong totals and disputes.',
        'Lost sales. Items that are served but never billed are a direct loss that is hard to detect on paper.',
        'No data. A notebook cannot quickly tell you your best-selling item, busiest hour or daily margin.',
        'Weak stock control. Without automatic stock movement, you cannot easily spot shrinkage or low stock.',
        'Slow reporting. Preparing a month-end summary by hand takes hours and is easy to get wrong.',
      ] },
      { type: 'h', text: 'What a POS system actually costs' },
      { type: 'p', text: 'A POS system has a clear cost: software, possibly a computer or terminal, a printer, and support. The important comparison is not "free vs paid". It is "the cost of the system" versus "the cost of the problems manual billing creates". For a busy restaurant, a small amount of recovered lost sales or saved staff time can cover the system within a short period.' },
      { type: 'h', text: 'A simple way to estimate the break-even' },
      { type: 'ol', items: [
        'Estimate how many minutes per day your team spends on manual billing and reporting.',
        'Estimate how often mistakes or unbilled items happen in a busy week, and what they cost.',
        'Convert both into a monthly figure using your own numbers.',
        'Compare that figure with the monthly equivalent of your POS cost, including support.',
      ] },
      { type: 'p', text: 'You do not need exact figures. Even a rough estimate usually shows whether the gap is large enough to justify a system.' },
      { type: 'h', text: 'When manual billing is still fine' },
      { type: 'p', text: 'Very small operations with a handful of daily transactions and simple pricing may not need much. But as soon as you have several staff, many items, stock to track or a need for reliable reports, manual billing starts to cost more than it saves.' },
      { type: 'h', text: 'Making the switch without disruption' },
      { type: 'ul', items: [
        'Start with billing and item setup, and add modules such as inventory later.',
        'Import your menu or product list so staff do not re-type everything.',
        'Train staff on the few screens they use most, not the whole system at once.',
        'Keep a short overlap period where you check daily totals together.',
        'Choose a vendor with local support so problems are solved quickly.',
      ] },
      { type: 'h', text: 'How MPOS helps Nepali businesses move on' },
      { type: 'p', text: 'MPOS brings billing, orders, KOT, inventory and reports into one system, so the data you were writing by hand becomes usable information. AR Technohub is based in Pokhara and supports restaurants, hotels, shops and other businesses across Nepal with setup and training.' },
      { type: 'p', text: 'If you are weighing up manual billing versus a POS system, request a demo. We will show you the workflow and help you estimate the real difference for your business.' },
    ],
    links: [
      { href: '/billing-software-nepal/', label: 'Billing Software Nepal' },
      { href: '/pos-software-nepal/', label: 'POS Software Nepal' },
      { href: '/restaurant-management-software-pokhara/', label: 'Restaurant Software Pokhara' },
    ],
    faq: [
      { q: 'Is POS software worth it for a small business in Nepal?', a: 'For very small operations it depends on transaction volume. Once there are several staff, many items or a need for reliable reports, the time and error savings usually outweigh the cost of a POS system.' },
      { q: 'Can I start with just billing and add more later?', a: 'Yes. Many businesses begin with billing and item setup, then add inventory, reports or payroll as they grow. Choose software that supports adding modules later.' },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}