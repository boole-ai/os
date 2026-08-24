# Imagine OS - Enterprise Deployment Guide

## 🏢 Overview

This is an enterprise-grade marketing site for Imagine OS, built with Next.js 15 and optimized for performance, security, and SEO.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

## 📊 Enterprise Features

### ✅ SEO Optimizations

- **Complete metadata**: Title, description, keywords optimized for "local models", "edge AI", "on-device inference"
- **Open Graph tags**: Optimized for social sharing (LinkedIn, Twitter, Facebook)
- **Twitter Cards**: Large image card with proper metadata
- **Structured data**: JSON-LD schema for Organization, SoftwareApplication, WebPage
- **Dynamic OG image**: Generated at build time with gradient branding
- **Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- **Robots.txt**: Proper crawling rules at `/robots.txt`
- **Canonical URLs**: Set to prevent duplicate content issues

### 🔒 Security Features

- **Security headers**: HSTS, CSP, X-Frame-Options, X-Content-Type-Options
- **Request tracing**: Unique request IDs for debugging
- **Bot detection**: Basic bot filtering in middleware
- **Rate limiting ready**: Structure in place for Redis-based rate limiting
- **Error tracking ready**: Hooks for Sentry/DataDog integration

### 📈 Analytics & Monitoring

Ready-to-integrate analytics platforms:
- Google Analytics 4
- Plausible Analytics
- PostHog
- Custom analytics endpoints

**Setup**: Add your tracking IDs to `.env`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=os.boole.ai
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxxx
```

### 🎯 Performance Optimizations

- **Image optimization**: AVIF/WebP formats, responsive sizing
- **Compression**: Gzip/Brotli enabled
- **Static generation**: All pages pre-rendered at build time
- **Font optimization**: Google Fonts with display swap
- **Code splitting**: Automatic via Next.js
- **Tree shaking**: Production builds remove unused code

### 🛡️ Error Handling

- **Custom 404 page**: Branded not-found experience
- **Error boundary**: Global error handling with recovery
- **Error logging**: Ready for production error tracking services
- **Graceful degradation**: Analytics/tracking failures don't break UX

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

**Required for production:**
- `NEXT_PUBLIC_SITE_URL`: Your production domain
- Analytics IDs (GA, Plausible, PostHog)
- Error tracking DSN (Sentry)
- Stripe keys for payment integration

**Optional but recommended:**
- Monitoring services (DataDog, New Relic)
- CRM integration (HubSpot, Salesforce)
- Rate limiting (Upstash Redis)
- Feature flags (LaunchDarkly)

### Security Headers

Configured in `next.config.ts`:
- Strict Transport Security (HSTS)
- Content Security Policy (CSP)
- X-Frame-Options
- Referrer Policy
- Permissions Policy

**Note**: CSP includes Stripe domains for payment integration.

## 📦 Production Deployment

### Vercel (Recommended)

```bash
# Deploy to production
vercel --prod

# Or connect to GitHub for auto-deploy
vercel link
git push origin main
```

**Vercel Configuration:**
- Auto HTTPS
- Global CDN
- Edge Functions support
- Automatic image optimization
- Built-in analytics

### Custom Deployment

```bash
# Build
pnpm build

# Start production server
pnpm start
```

**Requirements:**
- Node.js 18+
- PM2 or similar process manager
- Reverse proxy (nginx/Caddy) with HTTPS
- CDN for static assets (CloudFront, CloudFlare)

## 🔍 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML
- ✅ Image alt tags
- ✅ Performance optimization
- ✅ Mobile responsive
- ✅ Fast page load (< 3s)
- ✅ HTTPS enforced

## 🎨 Brand Assets

- **Favicon**: `app/icon.png` (main.png, 2000x2000)
- **OG Image**: Auto-generated from `app/opengraph-image.tsx`
- **Fonts**: Space Grotesk, DM Sans, IBM Plex Mono

## 📊 Monitoring Setup

### Google Analytics 4

1. Create GA4 property
2. Add `NEXT_PUBLIC_GA_ID` to `.env`
3. Add GA script to `app/layout.tsx` if needed

### Sentry Error Tracking

1. Create Sentry project
2. Add `NEXT_PUBLIC_SENTRY_DSN` to `.env`
3. Install `@sentry/nextjs`
4. Configure in `sentry.client.config.ts`

### Performance Monitoring

**Vercel Analytics** (built-in):
- Enable in project settings
- Zero configuration required

**Custom monitoring**:
- DataDog RUM
- New Relic Browser
- PostHog Session Recording

## 🧪 Testing

```bash
# Lint
pnpm lint

# Type check
pnpm build

# Lighthouse audit
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000
```

**Expected Lighthouse scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🚨 Incident Response

**If site goes down:**

1. Check Vercel dashboard for deployment status
2. Review error logs in monitoring service
3. Check CSP violations if assets not loading
4. Verify DNS and SSL certificates
5. Check rate limiting / DDoS protection

**Emergency contacts:**
- Vercel support: support@vercel.com
- Stripe support: support@stripe.com

## 📝 Maintenance

**Weekly:**
- Review analytics for unusual patterns
- Check error tracking for new issues
- Monitor performance metrics

**Monthly:**
- Update dependencies (`pnpm update`)
- Review security headers effectiveness
- Audit SEO rankings
- Check for broken links

**Quarterly:**
- Update content for SEO freshness
- Review conversion funnel optimization
- Update OG images if brand changes
- Security audit

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Platform](https://vercel.com)
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

## 📞 Support

For technical support or questions:
- **Internal**: Slack #imagine-os
- **External**: support@boole.ai
- **Emergency**: PagerDuty escalation

---

Built with ❤️ by Boole AI • Powered by Next.js & Vercel
