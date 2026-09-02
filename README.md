# Native254 — IT Solutions & Tech Skills

Dark, grungy-retro website for Native254: an IT solutions company (troubleshooting,
hosting, web design, project management, software maintenance, custom PC builds,
NAS setup) with a separate education arm (Microsoft Office, programming, graphic
design). Built as a static React app, ready to deploy on Vercel.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build       # outputs to /dist
npm run preview      # serve the production build locally to check it
```

## Deploy to Vercel

Easiest path — push this folder to a GitHub repo, then in Vercel:
"Add New Project" → import the repo → framework preset **Vite** is
auto-detected → Deploy. No extra config needed; `vercel.json` already
handles client-side routing (so `/cart`, `/courses` etc. don't 404 on
refresh).

Or from the CLI, inside this folder:

```bash
npm install -g vercel
vercel
```

## What to swap in before launch

- **Logo**: replace `public/logo-placeholder.png` with the real Native254
  mark (the navbar already references this exact filename — drop-in
  replacement, no code changes needed).
- **Card & hero imagery**: everything in `src/assets/placeholders/` (service
  and course card images) and `src/assets/*.webp` (hero CRT monitor,
  disclaimer band graphic, contact phone, cart illustrations) is a stand-in.
  Swap the files, keep the same names, and the site picks them up automatically.
- **Payment and contact details**: update `src/data/company.js` if the
  M-Pesa number, Family Bank Paybill/account, WhatsApp number, or email ever
  changes.

## Project structure

``` plaintext
src/
  pages/        Home, Solutions, Courses, Cart, Contact, NotFound
  components/   Navbar, Footer, ServiceCard, CourseCard
  context/      CartContext (localStorage-backed cart state)
  data/         services.js, courses.js — edit prices/copy here
  lib/          format.js (currency), invoice.js (PDF generator), usePageMeta.js (SEO)
  assets/       images (see swap-in notes above)
```

## Notes on the build

- **Cart** persists to `localStorage` so it survives a page refresh; no
  backend is wired up — "Add to cart" leads to checkout via WhatsApp/email
  handoff, plus a downloadable PDF invoice (client-side, via jsPDF).
- **Performance**: routes are code-split (`React.lazy`), jsPDF loads
  on-demand only when someone clicks "Download invoice", and all imagery is
  served as compressed WebP.
- **Accessibility**: semantic landmarks, skip-to-content link, visible focus
  rings, `prefers-reduced-motion` respected, alt text throughout.
- **Courses page**: clicking "Learn more" on a course expands it
  horizontally and blurs the other two, per spec.
