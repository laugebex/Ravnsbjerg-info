# ravnsbjerg.info v2

Next.js 16 prototype for Grundejerforeningen Ravnsbjerg.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Create a GitHub repository and push this folder.
2. Import the repository in Vercel.
3. Framework preset: Next.js (auto-detected).
4. No environment variables are required for this public prototype.
5. Add `ravnsbjerg.info` and `www.ravnsbjerg.info` under Domains after the preview is approved.

## Content editing
Current public content lives in `data/content.js`. This is intentional: a CMS/Supabase admin can replace that data source later without redesigning the frontend.

## Before production
- Verify current board details and dates.
- Migrate PDFs/referater locally rather than depending on old-site URLs.
- Add secure contact form.
- Add admin/CMS only after public information architecture is approved.
