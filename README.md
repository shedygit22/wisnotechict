# Wisnotech Website

A production-ready website for Wisnotech — a Nigerian technology company, digital agency, and digital skills academy based in Uromi, Edo State, Nigeria.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Configuration

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SITE_URL` — your deployed site URL (for sitemap, canonical URLs, Open Graph)

Optional variables:
- `AI_API_KEY` — API key for the AI chatbot (OpenAI or compatible). If not set, the chatbot falls back to knowledge-base search.
- `AI_API_ENDPOINT` — AI API endpoint URL
- `AI_MODEL` — AI model name (default: gpt-3.5-turbo)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID
- `ADMIN_PASSWORD_HASH` — bcrypt hash for admin access

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

The site is configured for deployment on Vercel (or any Next.js-compatible platform).

1. Push the code to a Git repository.
2. Connect the repository to Vercel.
3. Add the environment variables from `.env.example` to your Vercel project settings.
4. Deploy.

### Domain and HTTPS

- Configure your custom domain in Vercel (or your hosting provider).
- HTTPS is provisioned automatically by Vercel.
- Update `NEXT_PUBLIC_SITE_URL` to your production domain.

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/).
2. Add your site as a property.
3. Verify ownership (DNS record or HTML file).
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

## Content Management

### Courses

Course data is centralized in `src/lib/courses.ts`. Edit this file to add, remove, or modify courses, pricing, availability, and delivery formats. Each published course gets its own page at `/courses/[slug]`.

### Pricing Rules

Pricing logic is in `src/lib/pricing.ts`. Edit `PRICING_RULES` to adjust Edo State / outside-Edo / online pricing.

### Knowledge Base

The AI chatbot knowledge base is in `src/lib/knowledge-base.ts`. Edit this file to update chatbot responses.

### Blog Posts

Blog articles are in `src/app/insights/[slug]/page.tsx` and the index at `src/app/insights/page.tsx`. Add new article slugs and content as needed.

### Legal Pages

Privacy policy, terms, and refund policy are at:
- `src/app/privacy-policy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/refund-policy/page.tsx`

## Integrations Requiring Credentials

The following integrations need external credentials to be fully functional:

| Integration | Env Variable | Notes |
|-------------|--------------|-------|
| AI Chatbot | `AI_API_KEY` | Falls back to knowledge-base search if unset |
| Google Analytics | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional |
| Admin Auth | `ADMIN_PASSWORD_HASH` | Optional |

## Contact

- Email: wisnotech@gmail.com
- Phone: 09153541297 (+234 915 354 1297)
- WhatsApp: +2349153541297
- Location: Uromi, Edo State, Nigeria