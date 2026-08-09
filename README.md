# ravnsbjerg.info v2

Next.js 16 website for Grundejerforeningen Ravnsbjerg.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. The GitHub repository is connected to Vercel.
2. Production deploys are triggered from `main`.
3. Framework preset: Next.js (auto-detected).
4. No environment variables are required for the current public site.
5. `ravnsbjerg.info` and `www.ravnsbjerg.info` are configured as custom domains.

## Content editing
Current public content lives in `data/content.js`. This is intentional: a CMS/Supabase admin can replace that data source later without redesigning the frontend.

## Contact form
The contact form posts through FormSubmit and delivers to the configured board contact mailbox.

## Next improvements
- Verify board details and dates as they change.
- Migrate PDFs/referater locally rather than depending on old-site URLs.
- Add admin/CMS only after the public information architecture is approved.
