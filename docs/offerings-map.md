# Mercury Wealth — Offerings Map v2 (source of truth)

*v2 locked with the owner on 2026-08-13 after the company-repositioning workshop. Supersedes
v1 (preserved in git tag `v1` and at the `/v1/` archive URL). This document drives the
site's information architecture. Additions go through the owner; the map is a living
document.*

## The repositioning (why v2 exists)

Mercury Wealth is a **company** — an AI-native provider of modular engines for wealth
management firms (EAMs, private banks, brokerages, asset managers — HK & SG). The advisor
cockpit is the **flagship product**, not the company's identity. Engines are **separately
licensable and plug-and-play**: a client can adopt Document Intelligence alone in year one
and subscribe to the Cockpit in year two.

**The two traps, permanently on guard:**
- **The Privé trap** — modularity must never read as a toolbox of parts. The counter-story:
  *every engine runs on one data spine and writes to one audit log; each engine added
  compounds.* This is the architecture act on the home page.
- **The agentic trap** — "agentic AI" / "AI-powered" are banned as labels. We show the
  artifact and the behavior ("speak your meeting; the call report files itself"), never
  the buzzword.

## The engine portfolio (descriptive names — branded names deferred)

| Engine | One-liner | Status | Source of truth for assets |
|---|---|---|---|
| **Mercury Cockpit** (flagship) | The advisor's daily suite — briefing, book, monitoring, proposals, governance | Built, live | `../03-Fable-Mercury-V1-Application-Mock-Data` (extracted → recreations exist) |
| **Document Intelligence** | Term sheets, statements, complex documents → structured data, stored, queryable | Built, demoed | Recreation exists (TermSheetDissolve) |
| **Workflow Automation** | Firm processes run to completion — reviews, audit prep, materials | Built, demoed | Recreation exists (WorkflowAutomation panel) |
| **Relationship Scribe** | Speak the meeting; the call report, CRM entries, tasks and follow-ups file themselves — in the shape SFC/MAS note-taking expects | Built (repo not shareable) | Vignette to be designed WITH owner — brainstorm before building |
| **Book-aware Research** | Market intelligence answered against *your book*, not the market in general | Built (repo not shareable) | Vignette to be designed WITH owner |
| **Compliance Copilot** | Suitability cycles monitored, evidence assembled, DDQ-ready exports | Ready for client demo | Vignette to be designed WITH owner |

No "in development" labels — owner confirms all six are demoable. Roadmap (off-site or one
quiet line): Client Portal (branded client reporting), Mobile App, engines-via-API.
**Data spine is NOT a product** — it is per-client delivery work; on the site it appears
only as the architecture story and the integrations section.

## Site map (launch scope)

| Page | Job |
|---|---|
| **Home** | The company: who Mercury Wealth is, six engines, the spine, proof, Asia, trust |
| **/cockpit** | The flagship product page = v1 page content, lightly re-headed ("the flagship engine"); keeps governance act, workflow panel, AI mechanism, personas, facts band |
| **/v1/** | Frozen archive of the original single-product page (noindex). NEVER modified. |
| /trust | Fast follow — DDQ pillars expanded into a forwardable page (home section until then) |
| Per-engine pages | Fast follows, built from home vignettes + copy deck extensions |

## Home page — nine acts (locked)

1. **Hero** — company claim, concrete, no future-tense grandiosity. HK video stays.
   Headline to be workshopped (candidates: "The engines that run the business of wealth").
   Sub names buyers + the adoption model (one engine or the whole cockpit). Visual:
   **engine switcher** — small live vignettes cycling (briefing composes → term sheet
   dissolves → scribe files).
2. **Proof strip** — real partner logos as IMAGES (UOB Kay Hian, Lizen Asset Management,
   Cyberport, Solomon — files in `docs/gemini-build-mockup/.../public/logos/`), honest label.
3. **The six engines** — the only catalog moment: six tight verb-first cards, one line
   each, flagship badge on Cockpit, links to /cockpit (others anchor/faster follows).
4. **The spine act** (anti-Privé) — "Every engine, one data spine, one audit log. Adopt
   one; every addition compounds." Includes the **integrations bar** rebuilt as a
   live-feeling component in our design language: sources flowing into the spine
   (Global News, FactSet, HKEX, Google Cloud, Exchange Data, Oracle, Excel, Word —
   "these and many more").
5. **Flagship act** — Cockpit teased with the MorningBriefing recreation → "Explore the
   Cockpit" → /cockpit.
6. **Second proof act** — Document Intelligence with TermSheetDissolve (demonstrates the
   separable-engine thesis).
7. **Built for Asia** — elevated to company level (true of every engine; SFC/MAS/HKMA).
8. **Trust pillars + founder statement** — condensed from v1.
9. **Final CTA + footer** — "Open the live demo" + fluid-gradient MERCURY wordmark.

## Standing constraints (carried from v1 + new)

- All v1 constraints stand: pure product-vision framing; banned vocabulary list
  (operating system · powering · next era · single source of truth · unified platform ·
  seamless · empower · AI-powered · **agentic** as label); no invented metrics or
  testimonials; advisor-inner-voice copy; SFC/MAS/HKMA named; real product-style visuals
  only; primary CTA "Open the live demo" (placeholder URL); design.md is the locked system.
- v1 sections/components are READ-ONLY REFERENCE — new pages copy, never edit.
- Descriptive engine names on the site; branded names deferred until earned.
- Certifications stated honestly (SOC 2 Type II audit underway · ISO 27001 in progress).
- Legal entity in footer: "MERCURY AI LIMITED" pending owner confirmation.
- Repo: https://github.com/bala-subbiah/mercury-wealth-landing (tag `v1` = frozen original).
