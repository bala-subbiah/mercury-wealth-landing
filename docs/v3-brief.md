# v3 — Creative brief

*This is a brief, not a spec. It gives direction and hard constraints; the design,
layout, motion, and copy craft are yours. Full team feedback (read it): 
`docs/team-feedback.md` — treat the Notion comments there as the founder's own.*

## The job

v2 explains; it must sell. Rebuild the site as a **conversion-first marketing site
for a modern tech startup** — the goal is demo opens and contact requests, from a
reader who gives you 30 seconds and may not be technical. Benefits before features.
**The layman test governs every section:** a complete layman — no wealth-management
or software background — should easily understand what Mercury does and why it
matters, and should never feel overwhelmed. At no scroll position should the reader
face a wall of text or jargon; if a section makes them work, it fails, no matter how
accurate it is. The current v2 is live at
https://mercury-wealth-landing.vercel.app for reference of what NOT to feel like: a
product-explanation document.

## Direction

- **THE MOST IMPORTANT INSTRUCTION — build from the three reference sites.**
  **v7labs.com, capsa.ai, rogo.com** are not loose mood references; they are the
  primary design source for this build. Before writing any code, study all three
  deeply — open them in the browser, walk every page, and note how each handles the
  nav, the header, section/div composition and rhythm, content density per section,
  footers, graphics and imagery, icons, product visuals, and animation/motion (what
  moves, when, how much). Then build Mercury's sections by adapting the best pattern
  you saw for each job: their section grammar, their spacing, their visual-to-text
  ratio, their motion language. When you face a layout or component decision, the
  default question is "how do these three sites solve this?" — not "what would I
  invent?" Adapt patterns and structure heavily; never lift their copy, logos,
  brand colors, or assets (patterns yes, plagiarism no).
- **What the team already liked (signals, not requirements).** In the Gemini mockup
  (`docs/gemini-build-mockup/mercury-digital-remix-test/` — study it, run it if
  useful) the team responded to three things: the **Hong Kong video in the hero**,
  the **short, crisp hero text**, and the **logo marquee**. Those reactions are data
  about taste, not a spec — you are free to reinterpret, improve on, or outdo them.
  Design the hero you believe in; just know that video + tight copy + marquee is a
  combination this team has already said yes to.
- **Half the words or less.** Space, icons, illustrations, and simple animations do
  the work paragraphs did. Prefer a simplified animated illustration over a faithful
  raw product-UI recreation wherever it communicates faster (see the feedback doc's
  component references: smoothui chat bubbles, simple status cards, auto-carousel).
- **Nav:** Product (subpages: Cockpit, Mercury AI) · Trust · Company · [Demo CTA].
  The homepage sells the offer and its benefits; it never repeats the product pages.
- **Naming:** the six-engines line is now **Mercury AI** (drop "engines" as the
  public noun). Cockpit stays Cockpit.
- **Apply the exact deletions** listed in team-feedback.md (the six tag strips, the
  "THE SPECIFICS" section, the duplicated cockpit card, the struck subheading).
- **Mobile equals desktop.** Iterate both until right; the long-scroll complaint was
  real.
- Client-need pages ("for wealth advisors", "for family offices"): future backlog,
  not v3.

## Non-negotiables (carry from v2 — do not regress)

- **Integrity:** no invented claims, metrics, statistics, testimonials, or
  relationships. Honest certification wording stays honest. Founder is the real
  Oscar Chan (byline + his LinkedIn on Company). All real links live in
  `src/links.ts` (demo URL, contact email, LinkedIn) — use them.
- **Banned vocabulary** (any casing/spacing): operating system, powering, next era,
  single source of truth, seamless, empower, AI-powered, unlock, leverage,
  transform, end to end, holistic, world-class, supercharge. No em-dashes in
  rendered copy.
- **Fix while rebuilding:** every canonical/og/sitemap/robots URL must use the real
  deploy host (v2 shipped them pointing at a dead domain).
- **Keep the substance** the team never criticized: the trust answers (may compress
  to icons with detail one click away), and the core cockpit/engine copy lines where
  they fit the new register.
- `design.md` is the locked system: record an Amendment 2 for the new register
  before changing tokens, then design freely within it.

## Precedence and freedom

- **When directions collide, the layman test wins** — over keeping v2 substance,
  over completeness, over everything except the integrity non-negotiables (facts are
  never sacrificed; they just move behind a click or into fewer words).
- **v3 is a completely new build, not an edit of v2.** First preserve v2 in git
  (branch or tag `v2`), then start a fresh source tree and design every page from
  zero against this brief. Do not reuse v2's components, sections, or CSS. Carry
  over only the infrastructure that is register-neutral: `src/links.ts` (verified
  real URLs), the deploy config (`vercel.json`, robots/sitemap/404 — with every URL
  on the real deploy host this time), the compressed HK video, the logo SVGs, and
  the og-image. **v2's rendered copy is the content and fact source** — every claim
  in it survived a diligence audit, so when a section needs words, tighten v2's
  words rather than inventing new claims. Its facts are the gold; its density is
  what was rejected. The older planning docs (`v2-plan.md`, the critiques, the copy
  decks, `offerings-map.md`) describe the REJECTED register — do not absorb their
  voice; consult them only to check a fact.

## Quality bar

Perfect on desktop and mobile (really check mobile), fast, zero console errors,
every link resolves, and a cold reader can say what Mercury is and open the demo
inside 30 seconds. Everything else is your craft. Surprise the team.
