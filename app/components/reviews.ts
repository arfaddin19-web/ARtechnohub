// Genuine client testimonials for AR Technohub / MPOS.
//
// IMPORTANT: Only add reviews you actually received from real customers.
// Publishing fabricated review markup violates Google's structured-data
// policies and can trigger a manual action. The Testimonials component below
// renders nothing (and emits NO Review/AggregateRating schema) while this
// array is empty, so it is safe to ship as-is and fill in later.
//
// Example shape (delete the example when adding real ones):
// {
//   name: 'Hari Prasad Sharma',
//   business: 'Lakeside Kitchen, Pokhara',
//   quote: 'Billing is much faster now and we can see daily sales without counting slips.',
//   rating: 5,
//   date: '2026-09-20',
// },

export type Review = {
  name: string;
  business?: string;
  quote: string;
  rating: number; // 1-5
  date: string; // ISO yyyy-mm-dd
};

export const REVIEWS: Review[] = [];