# Mercury Wealth — Landing Page / Marketing Site

This folder is the standalone marketing site for Mercury Wealth. It is separate from the
product demo app (`../03-Fable-Mercury-V1-Application-Mock-Data`) — do not modify the app
from here.

## Orchestration rule (ALWAYS follow)

When the session model is **Fable**, Fable acts ONLY as the orchestrator: planning, task
creation, decomposition, delegation, and final validation/review. Fable must NOT implement
tasks directly. All implementation work (writing code, HTML/CSS, copy drafts, asset
generation, refactors) is delegated to subagents running **smaller models — Sonnet 5 or
Opus 4.8** (Agent tool with `model: "sonnet"` or `model: "opus"`). Fable then reviews and
validates the results, requests fixes from the subagents as needed, and only merges/accepts
work that passes its validation.

## Project context

- **What Mercury is:** front-office platform ("advisor's cockpit") for EAMs, private banks
  and brokerages in Hong Kong and Singapore. Read `docs/one-pager.html` first — it is the
  canonical product description.
- **Framing:** pure product-vision — present Mercury as a real product. Never mention
  "demo", "mock", "portfolio project", or AI-generated origins in any page copy.
- **Research:** `docs/competitor-research.md` is the source of truth for positioning, copy
  patterns to steal, category clichés to avoid, and the whitespace Mercury owns (the
  advisor's morning, book-first language, governance-as-workflow, Asia's operating
  reality, "every custodian, one cockpit"). Consult it before writing any copy or layout.
- **Design skill:** use the **Hallmark** skill (`~/.claude/skills/hallmark/`; install with
  `npx skills add nutlope/hallmark` if missing) for all landing-page design work — `build`
  for new pages, `study` to extract design DNA from references/mockups, `audit` before
  calling anything done.
- **Design register:** institutional gravitas for HK/SG private-banking buyers; real
  product-style visuals, never abstract illustrations; plain confident language; single
  relentless CTA.
- **Offerings map:** the site's information architecture derives from an offerings/
  solutions map workshopped and locked with the owner (see KICKOFF-PROMPT.md phase 2).
  Once locked, record it as `docs/offerings-map.md` and treat it as the source of truth
  for nav, sections, and solutions pages. Do not invent or rename offerings without the
  owner's sign-off.
