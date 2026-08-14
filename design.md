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

## Amendment 2 — the marketing register (v3, 2026-08-15, from the 2026-08-13 team review)

The team accepted the system's surfaces, palette, and type but rejected the *register*:
v2 read as a product-explanation document. v3 is a conversion-first marketing site for a
modern tech startup, rebuilt against the pattern DNA of v7labs.com, capsa.ai and rogo.ai
(see `docs/v3-design-dna.md` — the pattern source for every section decision, with
`docs/team-feedback.md` as ground truth). What moves:

**1. The banding ratio inverts.** Navy no longer dominates ~70% of every page. The dark
ground carries the *bookends* — hero (HK video, graded into the navy), the trust band,
the final CTA band, the footer — and warm paper carries the explanatory middle of every
page. The meaning rule survives ("navy = the product working / paper = the company
speaking") but the default page is now light with dark bookends, like all three
reference sites.

**2. Mono discipline retreats into the product.** Uppercase mono micro-labels are dead
as section furniture (all six tag strips were struck in review). Mono survives ONLY
inside product-UI fragments (status-card chips, timestamps, tabular numbers) and legal
fine print. Section heads are serif + optional one-line grey sans subhead; no eyebrows,
no kickers, no numbered chapter labels.

**3. Imagery rule inverts.** Hard rule 7's "faithful product-UI recreations, never
illustration" is replaced: marketing sections PREFER simplified, animated product
fragments — an ask bar, a status card with a colored chip, a chat bubble pair, a
3-card auto-carousel — floated on graded photo or tinted panels. Faithful dense
recreations are reserved for product pages, and even there cropped to one idea per
frame. Still banned: stock-photo metaphors, abstract blob illustration, fake browser
chrome, invented data in any fragment.

**4. Copy is rationed.** Half of v2's words or less, sourced from `docs/v3-fact-source.md`
(the audited v2 copy). Per scroll position: one serif headline (3–9 words), at most
~3 lines of body. The layman test governs: if a section needs study, it fails. Deep
trust/compliance detail compresses to icon checklists with the full answers one click
away.

**5. Spacing opens up.** Marketing scale: sections breathe at --space-2xl/3xl
(104–160px) minimum on desktop; one idea per viewport; grids cap at 3 columns; body
measure stays ≤ 34em. Mobile is designed simultaneously, single column, hero video
retained, sections short.

**6. Naming.** The engines line is publicly "Mercury AI"; "Cockpit" stays. Nav:
Product (Cockpit · Mercury AI) · Trust · Company · [demo CTA].

Everything else — tokens, fonts, brass ≤5%, luminous-inside-product-only, motion
rules, integrity rules, roman headings, banned vocabulary — is unchanged and binding.
`docs/offerings-map.md` and the 14-section macrostructure it defined are SUPERSEDED for
IA purposes by the v3 brief's nav; consult them only as fact references.

## Amendment 3 — Gemini-mockup type & color adoption (owner-directed, 2026-08-15)

The owner directed v3 to take its font pairing and color theming from the Gemini mockup
(`docs/gemini-build-mockup/mercury-digital-remix-test/`), vetted first. Verdict: the
system is good and is adopted, with three corrections.

**What the mockup actually is.** Its `--font-serif` role is not a serif: display type is
"Helvetica Neue" (Swiss neo-grotesque) at light weight and large scale, body is Plus
Jakarta Sans (300), micro-type is JetBrains Mono (uppercase, 0.2em tracked, incl. CTA
buttons). Color is a 5-tone monochrome brand palette (black #0d0d0d/#000, greys #404040 /
#e0e0e0 / #f0f0f0, white #fff) plus brand midnight #040B15 (+ lifted #0d1a2d); content
sections sit on off-whites (#fcfcfb / #f6f7fa / #ebedf2), the shell/bookends on midnight.
Chromatic color exists ONLY inside product fragments: chip duos amber #b45309/#fef3c7,
rose #e11d48/#ffe4e6, emerald #059669/#d1fae5, and steel-blue illustration tints
(#a2b5c7→#dce7f1). CTAs are sharp-cornered rectangles: ink ground, white mono uppercase
label; secondary is hairline-bordered transparent. Hero: light ground with the HK video
at ~20% opacity blended into it by gradient, ink display type.

**Vet findings and corrections:**
1. *Portability flaw:* Helvetica Neue ships on Apple platforms only; Windows falls back
   to Arial. Corrected by self-hosting **Hanken Grotesk Variable** (closest free match to
   HN at light display sizes) ahead of the system stack: display =
   `"Hanken Grotesk Variable", "Helvetica Neue", Helvetica, Arial, "PingFang SC",
   "Hiragino Sans GB", "Microsoft YaHei", sans-serif`.
2. *Legibility flaw:* 300-weight body at 14px is too thin. Floor: body text < 20px is
   weight 400; weight 300 is reserved for display and ≥20px ledes.
3. *Motion flaws:* the mockup's `transition: all`, hover-brightness and logo drop-shadow
   glows are NOT ported. Our motion rules (transform/opacity only, var(--ease-out),
   reduced-motion collapse) stand unchanged.

**Supersedes:** Source Serif 4 display and Inter body are retired from this site (the
serif remains the product app's concern, not the marketing site's). Brass is retired as
the chrome accent; the accent is now monochrome ink (mono-tracked rectangles, hairlines,
ink underlines). Luminous-only-inside-fragments survives with the mockup's chip duos.
Amendment 1's #0B1220 ground ruling applied to a navy-dominant site; v3 is light-dominant,
and the midnight #040B15 returns ONLY as bookend bands (hero shell, trust, final CTA,
footer) with #0d1a2d as the panel step above it. Amendment 2's register rules (banding
ratio, mono-retreats-into-product, copy rationing, spacing) all stand; mono uppercase in
BUTTONS/chips/timestamps is sanctioned (it is the mockup's own CTA idiom), mono section
labels remain dead.

## Tokens

The authoritative, current block (as amended by Amendment 3, 2026-08-15) is transcribed
in `src/styles/tokens.css` and mirrored here. Values verified for contrast in the R1
restyle report (all text/ground pairs ≥4.5:1; two mockup chip inks were pulled down to
clear that bar: rose #e11d48→#be123c, emerald #059669→#047857).

```css
:root {
  /* Surfaces — dark bookends (hero shells, trust, close, footer) */
  --color-navy: #040b15;        /* brand midnight (name kept for compat) */
  --color-panel: #0d1a2d;       /* product-UI panel surface on dark */
  --color-panel-2: #16263c;     /* nested UI cards, one step above panel */
  --color-hero-grad-top: #0d1a2d; /* top of a DARK hero gradient (product pages) */

  /* Surfaces — light grounds (the dominant register) */
  --color-paper: #fcfcfb;  --color-paper-2: #f6f7fa;  --color-paper-3: #ebedf2;

  /* Ink */
  --color-ink: #0d0d0d;  --color-body-light: #404040;  --color-muted-light: #404040;
  --color-caption-light: #6b6b6b;  --color-ink-dark: #ffffff;  --color-muted-dark: #a6adb8;

  /* Hairlines */
  --rule-light: #e0e0e0;  --rule-dark: rgba(255, 255, 255, 0.1);

  /* Chip duos — ONLY inside product fragments */
  --chip-amber-ink: #b45309;  --chip-amber-bg: #fef3c7;
  --chip-rose-ink: #be123c;   --chip-rose-bg: #ffe4e6;
  --chip-emerald-ink: #047857; --chip-emerald-bg: #d1fae5;
  --chip-slate-ink: #334155;  --chip-slate-bg: #e2e8f0;

  /* Luminous — ONLY inside DARK product surfaces */
  --ui-indigo: #6366f1; --ui-emerald: #34d399; --ui-amber: #f59e0b; --ui-rose: #fb7185;

  /* Illustration tints — steel gradient behind fragment cards */
  --tint-steel-a: #a2b5c7;  --tint-steel-b: #dce7f1;

  /* Type — display is a neo-grotesque, not a serif (Amendment 3) */
  --font-display: "Hanken Grotesk Variable", "Helvetica Neue", Helvetica, Arial,
                  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --font-body: "Plus Jakarta Sans Variable", -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono Variable", monospace; /* buttons/chips/timestamps only */

  /* Motion (unchanged) + Space: 4pt scale (unchanged; see tokens.css) */
}
```

CTA language (Amendment 3): sharp-cornered rectangles, mono uppercase 0.2em-tracked
labels; ink ground/white label on light bands, white ground/midnight label on dark;
hover is a transform-only scaleX sweep; secondary is a hairline-bordered transparent
rectangle. Band classes publish `--cta-*` variables so any section gets the correct
colourway automatically.

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
