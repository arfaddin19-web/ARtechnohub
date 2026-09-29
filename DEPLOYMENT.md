# MPOS Website — Deployment & Environment Setup

## Environment Variables

Create a `.env.local` file for development and `.env.production` for production:

```env
# Application URL
NEXT_PUBLIC_SITE_URL=https://mpos.com

# Contact form backend (when connected)
NEXT_PUBLIC_API_URL=https://api.mpos.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX

# Optional: Form submission service
NEXT_PUBLIC_FORM_SERVICE=your-service-here
```

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository at vercel.com
3. Set environment variables in Project Settings
4. Deploy — automatic on every push to main

```bash
# Local preview of production build
npm run build
npm start
```

### Self-Hosted (Node.js)
```bash
# Build
npm run build

# Start on port 3010
npm start

# Or use PM2 for process management
pm2 start npm --name "mpos" -- start
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./next
COPY public ./public
EXPOSE 3010
CMD ["npm", "start"]
```

## Pre-Deployment Checklist

- [ ] Test production build locally: `npm run build && npm start`
- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment
- [ ] Replace Unsplash image URLs with your own branded photography
- [ ] Update contact email in footer: `hello@mpos.com`
- [ ] Update phone number: `+977 000 000 0000`
- [ ] Connect contact form to backend service
- [ ] Set up SSL/TLS certificate (auto on Vercel, manual for self-hosted)
- [ ] Configure domain DNS records
- [ ] Test all routes and links on production domain
- [ ] Set up monitoring and error tracking
- [ ] Configure backup and disaster recovery

## Post-Deployment

1. Verify sitemap.xml is accessible: `https://mpos.com/sitemap.xml`
2. Verify robots.txt is accessible: `https://mpos.com/robots.txt`
3. Submit sitemap to Google Search Console
4. Monitor Core Web Vitals and performance
5. Set up uptime monitoring

## Contact Form Integration

The contact form currently submits client-side. To complete the flow:

1. **Option A: Formspree** (No backend needed)
   - Create form at formspree.io
   - Update form `action` in [app/contact/page.tsx](app/contact/page.tsx)

2. **Option B: Custom Backend**
   - Create API route in `app/api/contact/route.ts`
   - Handle email delivery and storage
   - Return success/error response

3. **Option C: Third-party service** (SendGrid, Mailgun, etc.)
   - Add API keys to environment variables
   - Create server action in contact page

## Performance Tips

- Images are optimized from Unsplash
- CSS is minified in production
- JavaScript is tree-shaken and minified
- Static pages are pre-rendered
- Compression is enabled by default

## Security

Production build includes:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- No source maps in production
- Powered-by header removed

## Support

For deployment questions or issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Check build logs for errors
