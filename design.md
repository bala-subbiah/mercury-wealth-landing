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

## Amendment 1 — surfaces (owner-approved 2026-08-13, `docs/v2-plan.md` §6 #12)

Two changes to the surface layer, signed off with the v2 plan. Nothing else in this
system moves.

**1. The ground lifts.** `--color-navy` goes from `#040B15` to **`#0B1220`**. The old
value was near-black: on a laptop panel it read as an absence rather than as navy, it
flattened the graded HK video to a smear, and it forced the product panels to earn their
separation from a floor that had no colour of its own. `#0B1220` is a deep navy that is
still unmistakably ink, sits inside the approved `#0A1220`–`#0F1520` band, and holds
7.1:1 for `--color-muted-dark` body text (was 7.5:1 at the old value; both pass AA
comfortably). Picked visually on the dev server against the cockpit dashboard and the
morning-briefing recreations at 1280 and 375.

**2. Panels are restated relative to the new ground.** Product panels separate by
*luminance step only* — never by shadow, never by a coloured border. With the floor
lifted, the old panel values (`#0A101C`, `#111622`) sat at or below the new ground and
would have made every recreation recede into a hole. Each surface is therefore re-pitched
one clear step above the one beneath it, keeping the same cool navy hue:

```
--color-navy    #0B1220   the ground: page background, unpanelled bands
--color-panel   #141C2C   +9 per channel — the product-UI panel surface
--color-panel-2 #1C2434   +8 per channel — cards nested inside a panel
```

`--shadow-panel` / `--shadow-card` stay in the file for depth inside the recreations, but
they are a refinement, not the separation mechanism: switch them off and every panel must
still read as a distinct plane. `--color-muted-dark` holds 6.5:1 on `--color-panel`.

**3. Surfaces band by meaning, not by rhythm.** The alternation of dark and paper is no
longer only a pacing device. It now says which voice is speaking:

| Ground | Speaks | Where |
|---|---|---|
| Deep navy (`--color-navy`) | The product working | Home hero, engine cards, flagship act, `/cockpit` |
| Warm paper (`--color-paper`) | The company speaking, in daylight | Home problem act; `/trust`, `/company`, legal pages when they ship |

A page may cross the line more than once (home does: hero navy, problem act paper, then
navy again), but never arbitrarily — a paper band must be a passage where Mercury speaks
as a company rather than a passage where the software is on screen. **No light/dark
toggle**: these are two fixed registers, not a user preference.

## Tokens

```css
:root {
  /* Surfaces — amendment 1 (2026-08-13): ground lifted, panels re-pitched above it */
  --color-navy: #0B1220;        /* the ground: dominant dark paper */
  --color-panel: #141C2C;       /* product-UI panel surface, one step above ground */
  --color-panel-2: #1C2434;     /* nested UI cards, one step above panel */
  --color-paper: #F4F5F3;       /* daylight interlude paper (warm) */
  --color-hero-grad-top: #111d31; /* top of the hero still gradient (Hero, HomeHero) */

  /* Ink */
  --color-ink: #1B2536;         /* on light */
  --color-body-light: #2C3546;  /* body on light */
  --color-muted-light: #5E6572; /* AA fix: 5.36:1 on --color-paper (was #6A7180 @ 4.48:1, failed AA) */
  --color-ink-dark: #E6E8E4;    /* primary on dark */
  --color-muted-dark: #98A0AC;

  /* Accent — marketing chrome only, ≤5% footprint */
  --color-brass: #C69B4E;       /* on dark surfaces */
  --color-brass-deep: #856223;  /* on light surfaces; AA fix: 5.10:1 on --color-paper (was #96702F @ 4.12:1, failed AA) */
  --color-brass-bright: #d8b26a; /* hover lift for brass chrome on dark surfaces */

  /* Hairlines */
  --rule-dark: rgba(255, 255, 255, 0.08);
  --rule-light: #D8DAD4;

  /* Luminous — ONLY inside product surfaces (panels, data strips, recreations) */
  --ui-indigo: #6366F1;
  --ui-emerald: #34D399;
  --ui-amber: #F59E0B;
  --ui-rose: #FB7185;

  /* Type — family names carry the "Variable" suffix to match the installed
     @fontsource-variable/* packages (was the static-family names below) */
  --font-display: "Source Serif 4 Variable", Georgia, serif;   /* 400/600, ROMAN ONLY (was "Source Serif 4") */
  --font-body: "Inter Variable", -apple-system, sans-serif;    /* was "Inter" */
  --font-mono: "JetBrains Mono Variable", monospace;           /* labels UPPERCASE, ls 0.18em; tabular-nums (was "JetBrains Mono") */

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
9. **Dark/light banding by meaning** (amendment 1): navy dominates and carries the
   product; warm paper carries the company's own voice, at least once per page. Panels
   separate from the ground by luminance step, never by shadow. Section paddings varied,
   not uniform. No light/dark toggle.
10. **One relentless CTA**: "Open the live demo" (placeholder URL until owner supplies).

## IA / macrostructure

Section order, offerings, personas, and copy constraints live in `docs/offerings-map.md`
(the source of truth) — 14 sections from morning-briefing hero to fluid-gradient footer.
