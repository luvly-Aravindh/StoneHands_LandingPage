# Storm Water Barrier - Landing Page (Stone Hands)

Long-form direct-response landing page for the Storm Water Barrier flood barrier.
React 19 + Vite + Tailwind CSS v3 + React Router (5 routes).

Live: https://stone-landingpage.netlify.app/

## Run

```bash
npm install
npm run dev       # dev server
npm run build     # production build (outputs to /dist)
npm run preview   # preview the production build locally
```

## Routes

- `/` - the main sales landing page (18 sections)
- `/privacy` - Privacy Policy
- `/terms` - Terms and Conditions
- `/return` - Return Policy
- `/shipping` - Shipping Policy

Routing uses `react-router-dom` (BrowserRouter). The site is a single-page app, so the
host needs an SPA fallback: `public/_redirects` contains `/*  /index.html  200` for Netlify.

## Structure

- `src/App.jsx` holds every section component and the router. It was recovered from the
  production build, so the internal component and variable names are the build's own short
  names, kept as-is so the rendered output matches the live site exactly.
- `src/main.jsx` mounts `<App />`.
- `src/index.css` has the Tailwind directives and the base Onest font / background.
- `public/assets/` holds all images (served at `/assets/...`, which is how the code
  references them). The nine images the build had inlined as base64 were extracted to files
  here (`inline_*.png` / `inline_*.svg`).
- Fonts (Onest) load from Google Fonts via a `<link>` in `index.html`.

## Notes

- The CTA buttons are not yet wired to a checkout; add the link in `App.jsx`.
- `App.jsx` is one large file by design (it mirrors the single-bundle build). To refactor,
  split each `const Xx = () => (...)` section into its own file under `src/components/`.
