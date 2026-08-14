# Team feedback on v2 — consolidated (2026-08-13 review session)

*Sources: (A) Gemini meeting notes, 13 Aug 18:03 HKT — feedback voiced by Oscar Chan
(founder/CEO), with the owner; (B) "Mercury Page comments" Notion export — one
consolidated set of written annotations incl. strikethrough deletions on quoted site
copy; (C) the owner's own summary in conversation. Items are referenced A1–A9 (meeting)
and C1–C16 (Notion). Duplicates merged; every directive below traces to at least one
source item.*

## The core intent (read this first)

The team did not reject the product story, the data, or even the dark look. They
rejected the **register**: v2 is a product-explanation site, and they want a
**marketing site for a modern tech startup** — built to convert (book a demo / make
contact), readable by a layman in 30 seconds, benefits before features, visuals doing
the work that paragraphs currently do. Reference sites named in BOTH documents:
**v7labs.com, capsa.ai, rogo.com** (A1, C6). The deletions in the Notion doc are
surgical: tag strips, duplicated blocks, and one whole section — the core headline and
body copy of the six cockpit sections, the five engine cards, and most of /trust were
quoted WITHOUT criticism. This is a re-skin + re-cut + re-frame, not a rewrite.

## Consensus directives (ranked by weight of evidence)

1. **Convert, don't explain.** The site's job is demo bookings and contact requests
   (A1). Benefits over features; persuasive to non-technical clients and investors
   (A3); "easy for a layman to understand" (A9). Homepage speaks to what we offer and
   the benefit to the target audience — it must NOT repeat the product pages (C4, C5).
2. **Cut the copy hard; add space.** "Too text-heavy, requires more spacing" (A2).
   About section → 1–2 paragraphs (A6). Remove "extraneous small taglines and
   headers" (A6) — corroborated by C8's ten strikethroughs (below). Users spend ~30
   seconds on a page (A5).
3. **Icons and illustrations instead of text and raw UI.**
   - Compliance/security/audit sections → icons; deep detail moves to separate
     documentation (A5).
   - Document Intelligence's "crowded UI" → a simplified video/animation, the way
     funded startups illustrate workflows (A7).
   - "Prepped overnight" → illustrate with a very simple animated card UI (reference:
     an ACAT transfer-status card) (C13, C14); chat mock → a proper chat-bubble
     component (smoothui.dev "AI Conversation") (C15); use a 3-card auto-advancing
     carousel (~10s) somewhere in this section (C16).
4. **Restructure the IA.** Nav → **Product (subpages: Cockpit, Engine/AI) · Trust ·
   Company · [Demo CTA]** (C1, C2; A9). Group content by client need — "wealth
   advisors," "family offices" (A9). Oscar planned to deliver his own restructuring
   revision the next day (A: next steps) — **check whether that document exists before
   finalizing v3 IA.**
5. **Hero: declutter.** If the copilot/research animation stays in the hero,
   other elements must come out (A8).
6. **Mobile is a first-class complaint.** The long vertical scroll loses the message
   on phones (A4).
7. **Product naming (open decision).** The engines line needs "a distinctive name
   from cockpit" — candidates in the notes: Engines → "Mercury AI" or "Flow AI" (C9);
   Cockpit → "One Invest", "Mercury QS (likely Quicksilver)", "Mercury Pilot" (C3).
   Headline register example: "Running Wealth would never be easier" (C7 — tone
   example, not final copy).

## Exact deletions marked in the Notion doc

- All six mono tag strips under the cockpit workflow sections (C8):
  "HOUSEHOLDS · ACCOUNTS · …", "IPS BANDS · …", "VERSIONED · …", "FOUR-EYES · …",
  "ACCEPTED → ORDERS → …", "IMMUTABLE · WHO · WHAT · …" — labels only; the sections'
  headlines and body copy were NOT struck.
- "From the drift to the order, without leaving the screen." subheading (C10).
- The Mercury Cockpit FLAGSHIP card inside the engines grid (C11) — de-duplication:
  the cockpit already has its own page/surface.
- **"THE SPECIFICS" section (FactsBand) — delete entirely** (C12).

## What was NOT criticized (protect in v3)

- The six cockpit sections' headlines and body copy (only their tag strips died).
- The five non-cockpit engine cards' copy.
- Nearly all /trust copy (deep detail may move to documentation per A5, but the
  writing itself drew no marks).
- The "prepped overnight" concept — anchor for enhancement, not removal.
- The dark look: NO comment in either document objects to the palette or darkness.
- The integrity layer (real data, honest claims, no invented metrics) — untouched by
  any comment; carries over wholesale.

## Design-system implications (design.md needs Amendment 2)

- The "mono discipline" hard rule (uppercase micro-labels everywhere) is exactly what
  C8/A6 strike down — the tag-strip idiom dies or becomes rare.
- The "real product-UI recreations, never illustration" hard rule is inverted by
  A7/C13–C16: simplified animations/illustrated cards are now PREFERRED over faithful
  raw-UI recreations in marketing sections.
- Spacing scale and section density need a marketing-register pass (A2).
- Reference DNA shifts from "institutional broadsheet" to the Gemini mockup's modern
  register (owner: keep the Gemini header treatment with tight content) + v7labs /
  capsa / rogo patterns.

## Open questions for the owner before v3 planning

1. **Naming:** Does Oscar want to lock "Mercury AI" / "Flow AI" for the engines line,
   and is Cockpit staying "Cockpit" or becoming One Invest / Mercury Quicksilver /
   Mercury Pilot? (Blocks nav labels, page names, all copy.)
2. **Oscar's restructuring revision** promised for the day after the meeting — did it
   materialize? If yes, add it to docs/ before v3 planning.
3. Client-need grouping (A9): full Solutions pages ("For wealth advisors", "For
   family offices") or a section on the homepage?
4. The Notion comments are unattributed — treat as Oscar's consolidated voice, or
   multiple reviewers?
