# MPOS Website — Deployment & Environment Setup

Live site: **https://artechnohub.com.np** (GitHub Pages, custom domain via `CNAME`).

## How this project is hosted

`next.config.js` sets `output: 'export'`, so `npm run build` produces a folder of
plain static files in `out/` instead of a Node server. That is what GitHub Pages
serves. Consequences:

- **`npm start` does not work** (there is no server to start). To preview locally,
  serve the `out/` folder with any static file server, e.g.
  `npx serve out` or `python -m http.server -d out 8080`.
- **No server-side features**: no API routes (`app/api/*`), no server actions, no
  SSR, no ISR/revalidation. Everything is pre-rendered at build time.
- **`headers()` in `next.config.js` is ignored** under static export (Next.js
  warns about this at build time). GitHub Pages does not support custom response
  headers either, so those security headers are **not** applied in production.
  If you need them, put the site behind Cloudflare or move to Vercel.

## Deployment: GitHub Pages (in use)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`:

1. `npm ci`
2. `npm run build` (with `NEXT_PUBLIC_SITE_URL=https://artechnohub.com.np`)
3. writes `out/.nojekyll` and copies `CNAME` into `out/`
4. `actions/upload-pages-artifact` + `actions/deploy-pages`

`out/.nojekyll` is required: without it GitHub Pages runs the artifact through
Jekyll, which silently discards any directory starting with `_` — including
Next.js's `_next/` assets, producing an unstyled page.

To change anything on the site: edit locally, run `npm run build` to verify, then
`git push`. The workflow publishes automatically (1-3 minutes).

**One-time repo setting:** GitHub → repo → **Settings → Pages → Build and
deployment → Source = "GitHub Actions"**. If the workflow fails to deploy with a
permissions error, the repo may need Settings → Actions → General → Workflow
permissions set to "Read and write permissions".

> **Check this setting is actually applied.** On 2026-10-01 Pages was left on
> "Deploy from a branch" with folder `/root`, which does not exist. The domain
> silently served the repository README instead of the site: `/` returned 200
> with the README text, every real route 404'd, and `/sitemap.xml` 404'd — which
> is what made Google report "Sitemap could not be read". Deploys still showed
> green in the Actions tab the whole time. If the domain ever serves a README or
> 404s on real routes, check this setting first.

## Environment Variables

Only used at build time (there is no runtime server). Set them in the workflow
or in `.env.local` for local builds:

```env
# Canonical site URL, used for Open Graph / metadata / sitemap
NEXT_PUBLIC_SITE_URL=https://artechnohub.com.np

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX

# Optional: contact form service
NEXT_PUBLIC_FORM_SERVICE=formspree
```

`public/robots.txt` and `public/sitemap.xml` are **static files with the domain
hardcoded** — change them by hand if the domain ever changes.

## Pre-Deployment Checklist

- [x] `npm run build` completes and exports all 12 routes
- [x] Domain set to `artechnohub.com.np` in sitemap, robots, Open Graph, JSON-LD
- [x] Favicon + `logo.png` present in `public/` (JSON-LD `logo` 404'd before)
- [x] Pages deploy workflow in place
- [x] Replace Unsplash image URLs with your own branded photography → *still placeholder stock photos*
- [x] Update contact email in footer (`app/page.tsx`) and JSON-LD phone
- [x] Connect contact form to a form-to-email service
- [x] Test all routes and links on the production domain (all 15 verified 200)
- [x] Submit sitemap to Google Search Console (15 URLs discovered)

## IndexNow (Bing)

Every successful deploy pings Bing with all 15 URLs so new pages are indexable
in minutes instead of waiting for the next crawl. It only affects Bing — Google
still relies on crawling via the sitemap.

It needs two things, and **both** are required:

1. **Repo secret** `INDEXNOW_KEY` — Settings → Secrets and variables → Actions.
   Without it the job skips silently and nothing is submitted.
2. **The key file at the site root**, `public/<key>.txt`, containing just the key
   with no trailing newline. IndexNow verifies ownership by fetching
   `keyLocation` over HTTP, so this file must exist or Bing returns `422`.

The key is a public verification token, not a credential — the protocol only
works because the file is readable by Bing. The CI copy still lives in a secret
so it can be rotated without touching the history.

Submission codes: `200` / `202` accepted, `400` malformed, `422` key file could
not be fetched, `429` rate limited.

## Contact details

Single source of truth for the published contact info:

- Email `sales@artechnohub.com.np` — footer (`app/page.tsx`), contact page fallback link, JSON-LD `contactPoint` (`app/layout.tsx`)
- Phone/WhatsApp `+977 9869093168` — `tel:+9779869093168` in the footer and contact page
- Demo form → Formspree form `mnpnrgrl` (`app/contact/page.tsx`, `FORMSPREE` constant)

The form posts with `fetch` + `Accept: application/json` so the inline
"Request received" panel works, but it also carries a real `action`/`method`,
so **it still submits if JavaScript is blocked**. Every input has a `name`
attribute — Formspree silently drops fields without one, which is why a form
can appear to work while delivering an empty email.

## Post-Deployment

1. Verify `https://artechnohub.com.np/sitemap.xml` loads
2. Verify `https://artechnohub.com.np/robots.txt` loads
3. Verify `https://artechnohub.com.np/logo.png` loads (referenced by JSON-LD)
4. Spot-check every route: `/`, `/products`, `/products/{masterpos,hotel,spa,banquet,hr-payroll}`, `/pricing`, `/contact`
5. Submit the sitemap in Google Search Console

## Contact Form Integration — DONE (Formspree)

The demo form posts to `https://formspree.io/f/mnpnrgrl`. Submissions are
emailed by Formspree and stored in their dashboard. Under static export you
cannot add an `app/api` route, so an external service is required — no further
code changes should be needed to receive leads.

To change the destination inbox or add an auto-reply, do it in the Formspree
dashboard (form `mnpnrgrl`) — not in this repo. Changing the form ID means
editing the `FORMSPREE` constant in [app/contact/page.tsx](app/contact/page.tsx).

If you ever need to move away from Formspree (Web3Forms, Basin, or a custom
endpoint), it is the same pattern: point the form `action` at the new URL and
keep the field `name` attributes identical.

## Performance Tips

- All 12 routes are pre-rendered static HTML at build time
- `trailingSlash: true` emits `products/hotel/index.html`, which serves cleanly
  on GitHub Pages
- JavaScript is tree-shaken and minified (~106 kB First Load JS)
- CSS is minified in production

## Support

- Next.js static export: https://nextjs.org/docs/app/guides/static-exports
- GitHub Pages Actions: https://docs.github.com/en/pages
- Check the workflow run log in the repo's **Actions** tab for build errors
