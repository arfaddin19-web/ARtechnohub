# MPOS Website

A Next.js 15 business management software website for restaurants, hotels, spas, banquets and HR operations.

## Quick Start

```bash
# Install dependencies
npm install

# Development (http://localhost:3010)
npm run dev

# Production build -> static files in out/
npm run build

# Preview the production build (no server; serve the out/ folder)
npx serve out
```

This project uses `output: 'export'`, so `npm start` is **not** available — see
[DEPLOYMENT.md](DEPLOYMENT.md).

## Deployment

Hosted on **GitHub Pages** at [https://artechnohub.com.np](https://artechnohub.com.np)
via `.github/workflows/deploy.yml`. Push to `main` and it deploys automatically.

## Production Deployment

### Before Going Live

1. **Replace Images** — Update all Unsplash image URLs with your own branded photography
   - Contact emails and phone numbers are in [app/page.tsx](app/page.tsx) and [app/layout.tsx](app/layout.tsx)
   - Update footer contact info with real business details

2. **Connect Contact Form** — The contact form is currently client-side only
   - See [DEPLOYMENT.md](DEPLOYMENT.md) for backend integration options
   - Formspree, custom API, or third-party services all work

3. **Set Environment Variables** — Copy `.env.example` to `.env.local`
   - Update `NEXT_PUBLIC_SITE_URL` to your domain
   - Add any additional service endpoints

4. **Test Production Build**
   ```bash
   npm run build
   npm start
   ```

### Deployment Options

- **Vercel** (recommended) — One-click deployment, automatic HTTPS, global CDN
- **Self-hosted** — Node.js server or Docker container
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

## What's Included

✅ All 5 MPOS products with detailed feature pages  
✅ Responsive design (desktop, tablet, mobile)  
✅ SEO optimized with Open Graph tags  
✅ Security headers configured  
✅ Static site generation for fast performance  
✅ Contact form (ready for backend integration)  
✅ Pricing and products pages  

## Key Files

- [app/page.tsx](app/page.tsx) — Home page with hero, products, industries
- [app/products/[slug]/page.tsx](app/products/%5Bslug%5D/page.tsx) — Product detail pages
- [app/contact/page.tsx](app/contact/page.tsx) — Contact form
- [app/globals.css](app/globals.css) — All styling (white & gold theme)
- [next.config.js](next.config.js) — Security headers and image optimization

## Features

- **Server-side rendering** — All routes pre-rendered for best performance
- **Responsive images** — Optimized Unsplash URLs (replace with your own)
- **Accessible** — Semantic HTML, proper contrast ratios, keyboard navigation
- **Fast** — 106 kB First Load JS, optimized bundle
- **SEO** — Sitemap, robots.txt, structured data, meta tags

## Support

For questions about deployment or Next.js:
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
