# v3 design DNA — extracted from v7labs.com · capsa.ai · rogo.ai (studied 2026-08-15)

*Hallmark `study` synthesis. Live-browser + tiled-screenshot pass over every major page of
all three reference sites at 1280px and 375px, plus the owner's Gemini mockup. This file is
the pattern source for every v3 section decision; the brief says these sites are the
primary design source. Patterns adapted, never copied: no lifted copy, logos, brand
colors, or assets.*

## The shared grammar (what all three sites agree on)

1. **Nav (N1b, canonical SaaS):** wordmark left · 4–7 plain text links · "Log in" +
   one solid pill CTA right. Transparent over the hero video, gains solid ground on
   scroll. No mega-menus needed at Mercury's page count. Mobile: hamburger.
2. **Hero:** full-bleed cinematic city video (capsa: blue-graded office/city; rogo: NYC
   dusk), darkened for contrast. Centered or left serif display, ONE thought in 1–2
   short lines (rogo: "For the most ambitious firms in finance"). One-line grey sans
   subhead. ONE primary CTA (white or ink pill: "Book a Demo" / "Request Demo").
   Logo proof strip sits at the hero's lower edge (rogo) or right below it.
3. **Section heads:** short serif headline (3–7 words), optional one-line grey sans
   subhead. Centered (capsa/rogo) or left (v7). No eyebrows/kickers/tag strips
   anywhere on capsa or rogo.
4. **Feature sections:** alternating text-beside-visual rows (capsa) or 3-col card
   grids (v7/capsa). The visual is always a SIMPLIFIED product fragment — an ask bar,
   a status card, a checklist card — floated on a cinematic photo or tinted panel,
   never a dense full-app screenshot. Sans bold mini-titles + 2–3 line grey body.
5. **Split "why" section (rogo):** sticky serif headline left; right column of
   icon + bold title + 3-line body items separated by hairlines. Calm, readable.
6. **Trust/security:** its own dark band. Serif headline ("Security and compliance
   you can trust"), 2–3 line intro, THREE icon-led checklist items, and a grid of
   certification badges in hairline cells. Deep detail lives on a separate page.
7. **Proof:** serif quotes with attribution (v7/rogo/capsa) — Mercury has no
   testimonials and invents none; the logo marquee + honest positioning carry proof.
8. **Stats bands:** big serif numbers with small captions — only where numbers are
   real. Mercury: skip unless a real number exists in the fact source.
9. **Final CTA:** dark band. Big serif line (v7 does a 3-line graduated-grey
   staccato: "Build once. / Deploy across teams. / Improve over time."), one CTA.
   v7 humanizes with a small "See it on your data · 30 minutes" avatar pill.
10. **Footer:** dark. Serif tagline block left, 3–4 plain link columns, contact +
    LinkedIn, legal row. capsa adds addresses; rogo keeps it minimal.
11. **404 (v7):** small left dot-label "404" + serif apology + "Go back home" link.

## Type, color, motion

- **Type pairing (all three):** elegant transitional/editorial serif for display,
  neutral grotesque for body/UI. Serif is roman, light-to-regular weight, large
  (~64–96px desktop hero). Body text is small (15–18px) and grey, never long.
- **Color:** near-black or deep navy grounds for hero/trust/CTA/footer; warm
  off-white paper for the explanatory body; ONE restrained accent used sparsely
  (v7 burnt orange on results/quotes; capsa electric blue on units/banner). Cards
  separate by hairline borders or subtle surface steps, not shadows.
- **Motion:** gentle fade/translate on scroll, slow logo marquee (~45s loop), calm
  hover states (underline, brightness), auto-advancing simple carousels. Nothing
  bouncy; no scroll-jacking. Videos: autoplay muted loop.
- **Rhythm:** generous vertical space (sections breathe 120–200px), one idea per
  viewport, headline-dominant with body copy rationed to 1–3 lines per block.
- **Mobile:** single column; hero video and big stacked serif retained; cards stack;
  sections stay short; tap-size CTAs. The 30-second read survives on a phone.

## Gemini mockup taste signals (build on, not spec)

- HK skyline video in the hero (the team's strongest yes) — v3 uses the carried
  `public/videos/hk-skyline-lo.mp4`, graded INTO the navy brand ground like capsa
  grades its footage blue, rather than washed out at 20% under white.
- Short crisp hero text: two lines max, serif light, tight leading.
- Logo marquee: infinite, edge-faded, logos at ~60% opacity → 100% on hover.
- Simple status-card illustrations (REVIEW / DRIFT / IDLE CASH chips on small white
  cards) — exactly the feedback's preferred way to show "prepped overnight".
- Mono uppercase micro-labels survive ONLY inside product-UI recreations (chips on
  cards), never as section furniture.

## What v3 must NOT carry from the references

- v7's invented-feeling stat walls and heavy testimonial density (Mercury has no
  testimonials; integrity rule).
- v7's crowded integration icon clusters (Mercury names its integrations plainly).
- Any copy, logo, brand color, or photographic asset from the three sites.
- capsa's "AI Operating System" phrasing ("operating system" is banned vocabulary).
