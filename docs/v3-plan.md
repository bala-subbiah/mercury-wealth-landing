# v3 build plan (2026-08-15)

Register: conversion-first marketing site. Sources of truth: `docs/team-feedback.md`
(ground truth) · `docs/v3-brief.md` (constraints) · `docs/v3-design-dna.md` (pattern
source) · `docs/v3-fact-source.md` (all copy tightened from here) · `design.md` incl.
Amendment 2 (system). Deploy host for ALL absolute URLs: `https://mercury-wealth-landing.vercel.app`.

## IA (locked by the brief)

Nav: **Product ▾ (Cockpit · Mercury AI) · Trust · Company · [Open the live demo]**

Pages (Vite MPA entries, same infra pattern as v2):
- `/` home — sells the offer; never repeats product pages
- `/cockpit/` — the advisor cockpit product page
- `/mercury-ai/` — the engines line, publicly "Mercury AI"
- `/trust/` — full trust answers (compressed presentation, icons first)
- `/company/` — 1–2 paragraphs, Oscar Chan byline + LinkedIn, logo partners
- `/legal/privacy/`, `/legal/terms/` — carried substance, restyled
- `404.html` — v7-style: small "404" + serif line + home link

Carry over ONLY: `src/links.ts`, `public/videos/hk-skyline-lo.mp4`, `public/logos/*`,
`public/og/*`, favicon, vercel.json, robots/sitemap (URLs fixed), fontsource packages.

## Homepage section map (one idea per viewport)

1. **Hero** — full-bleed HK video graded into navy (capsa treatment); serif 2-line
   headline; one-line sub; primary CTA "Open the live demo" + text link "Talk to us";
   logo marquee at hero base (4 real logos, 60%→100% hover, edge-faded, ~45s).
2. **Prepped overnight** (paper) — serif head + 1-line sub; 3-card auto-advancing
   carousel (~10s) of simplified briefing status cards (REVIEW / DRIFT / IDLE CASH
   chips). The team's anchor concept.
3. **Ask Mercury** (paper) — chat-bubble pair fragment (smoothui-style), one exchange,
   mandate-check visible; 2 lines of copy.
4. **Why Mercury** (paper, rogo split) — sticky serif left; right: 3 icon items with
   hairlines (Every custodian, one cockpit · Governance as workflow · Built for HK & SG).
5. **Trust band** (navy) — serif head, 3 icon checklist items, badge row, link to /trust.
6. **Final CTA** (navy) — serif staccato + demo CTA + "or write to Oscar" mail link.
7. **Footer** (navy) — serif tagline, link columns (Product/Trust/Company/Legal),
   contact + LinkedIn, legal row.

## Build tasks (delegated; Fable validates each)

- **T1 scaffold**: fresh `src/`, tokens.css from design.md, base.css, shared Nav/Footer,
  Vite entries, SEO head partials with real host, carry-overs wired, dev server clean.
- **T2 home** · **T3 cockpit** · **T4 mercury-ai** · **T5 trust** · **T6 company+legal+404**
  — each builds sections per the DNA file, copy tightened from the fact source only,
  desktop + mobile (375/768/1280) required at delivery, zero console errors.
- **T7 validation**: Fable audits every page at 1280 + 375 (screenshots), link check,
  banned-vocab grep, integrity re-audit vs fact source, Lighthouse-style pass.

Copy rules for every task: layman test wins; ≤3 body lines per block; no invented
claims/metrics/testimonials; banned vocabulary enforced; no em-dashes in rendered copy;
serif heads roman; no tag strips or eyebrows.
