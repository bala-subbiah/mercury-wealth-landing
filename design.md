<!-- Hallmark · design.md · theme: studied-DNA → Direction C "Institutional intelligence"
     studied: yes · DNA-source: owner's Gemini mockup (docs/gemini-build-mockup) + one-pager brand seed + Direction C sample approved by owner 2026-08-12
     This is the LOCKED design system for the Mercury Wealth marketing site. All builds defer to it.
     Diversification is inverted on this project: pages must SHARE this system, not differ from it. -->

# Mercury Wealth — Locked Design System (Direction C · "Institutional intelligence")

A trading-floor-grade intelligence system run by a private bank. Deep navy dominates (~70%
of any page); warm off-white appears as deliberate "daylight" interludes. AI is expressed
through living product behavior (interfaces that visibly think), never through decoration.

## Provenance

Extracted from the owner's own Gemini mockup (macrostructure, banding, mono-label
discipline, product-UI recreations, HK video) merged with the one-pager's brand seed
(navy ink + brass + warm paper) and hardened in the approved sample
`docs/design-direction-samples/direction-c.html`. Owner-approved 2026-08-12.

## Tokens

```css
:root {
  /* Surfaces */
  --color-navy: #040B15;        /* dominant dark paper */
  --color-panel: #0A101C;       /* product-UI panel surface */
  --color-panel-2: #111622;     /* nested UI cards */
  --color-paper: #F4F5F3;       /* daylight interlude paper (warm) */

  /* Ink */
  --color-ink: #1B2536;         /* on light */
  --color-body-light: #2C3546;  /* body on light */
  --color-muted-light: #6A7180;
  --color-ink-dark: #E6E8E4;    /* primary on dark */
  --color-muted-dark: #98A0AC;

  /* Accent — marketing chrome only, ≤5% footprint */
  --color-brass: #C69B4E;       /* on dark surfaces */
  --color-brass-deep: #96702F;  /* on light surfaces */

  /* Hairlines */
  --rule-dark: rgba(255, 255, 255, 0.08);
  --rule-light: #D8DAD4;

  /* Luminous — ONLY inside product surfaces (panels, data strips, recreations) */
  --ui-indigo: #6366F1;
  --ui-emerald: #34D399;
  --ui-amber: #F59E0B;
  --ui-rose: #FB7185;

  /* Type */
  --font-display: "Source Serif 4", Georgia, serif;   /* 400/600, ROMAN ONLY */
  --font-body: "Inter", -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", monospace;           /* labels UPPERCASE, ls 0.18em; tabular-nums */

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 200ms;
  --dur-med: 450ms;
  --dur-slow: 900ms;

  /* Space: 4pt scale — --space-xs 8px · sm 16 · md 24 · lg 40 · xl 64 · 2xl 104 · 3xl 160 */
}
```

## Hard rules (every build task inherits these)

1. **Luminous color only where the product is working** — indigo/emerald/amber/rose never
   appear on marketing chrome (headlines, buttons, backgrounds, rules). Chrome accent is brass only.
2. **Brass ≤5%** of any viewport: eyebrows, thin rules, key serif numbers, CTA outline. Never floods.
3. **Headings roman, never italic.** Serif display 400/600. Emphasis via weight or brass, not italics.
4. **Mono discipline**: uppercase micro-labels (0.18em tracking), timestamps, and all tabular
   data in JetBrains Mono with `font-variant-numeric: tabular-nums`.
5. **Motion**: transform/opacity only · var(--ease-out) · no `transition: all` · no hover
   scale · every animation has a `prefers-reduced-motion: reduce` static fallback ·
   focus rings visible, never animated.
6. **Signature behaviors** (the AI-felt layer): self-composing morning briefing (hero),
   ticking mono data strip, term-sheet dissolve, streaming chat with visible mandate-checks,
   fluid-gradient MERCURY footer wordmark (monochrome luminance only).
7. **Imagery**: real product-UI recreations (HTML/CSS, faithful to the app at
   `../03-Fable-Mercury-V1-Application-Mock-Data`) and the graded HK night video
   (self-hosted, poster + reduced-motion + mobile-static fallbacks). Never stock-photo
   metaphors, never abstract illustration, never fake browser chrome.
8. **Banned outright**: purple/pink gradients, colored gradient text, mesh/blob backgrounds,
   glow orbs, sparkle decoration, emoji, icon-tile grids, `transition: all`, hover-scale,
   invented metrics/testimonials, "operating system / powering / next era / single source
   of truth" vocabulary, centered-everything rhythm.
9. **Dark/light banding**: navy dominates; one warm-paper daylight interlude per page
   minimum (facts band); section paddings varied, not uniform.
10. **One relentless CTA**: "Open the live demo" (placeholder URL until owner supplies).

## IA / macrostructure

Section order, offerings, personas, and copy constraints live in `docs/offerings-map.md`
(the source of truth) — 14 sections from morning-briefing hero to fluid-gradient footer.
