# Mercury Wealth — Offerings Map (source of truth)

*Locked with the owner on 2026-08-12 after the Phase 2 workshop (Gemini mockup extraction →
critique against `one-pager.html` and `competitor-research.md` → iteration). This document
drives the site's information architecture: nav, section order, and any solutions pages.
Do not invent or rename offerings without the owner's sign-off. Additions go through the
owner and land in the appropriate tier below — the map is a living document; new offerings
(e.g. roadmap items graduating to core) are appended, not improvised.*

---

## Core offerings (on the landing page)

| # | Offering (buyer language) | One-line value prop | Persona | Proof point | Placement |
|---|---|---|---|---|---|
| 1 | **Morning briefing & attention feed** | Know exactly what needs your attention before your first client call | RM / advisor | Live recreation of the real briefing screen ("Good morning…, N portfolios drifted past the IPS band"), composing itself | **Hero** — the feed ticking in is the hero visual |
| 2 | **Book-of-business cockpit** | Your whole book, every custodian, one screen, base currency | RM / firm principal | Cockpit dashboard recreation: AUM, flows, needs-attention, coming-up | Cockpit section |
| 3 | **Mandate-aware monitoring** | Drift and concentration surface the day they emerge, not at review time | RM / compliance | Drift-breach card (IPS band vs actual, in pp) | Workflow cards |
| 4 | **Proposals with governance + execution** | From flagged drift to signed proposal to placed order — one audit spine | RM / compliance | The proposal lifecycle thread: draft → versions → approval → e-sign → order → immutable timeline | **Own act** — the governance section; hero visual = audit timeline |
| 5 | **AI document intelligence** | Structured-note term sheets and custodian statements become structured data, automatically | RM / ops | Term-sheet dissolve animation: PDF → clean fields (issuer, barrier, coupon, maturity) → flows into a proposal draft. **Built today; shown to prospects** | Own visual moment |
| 6 | **Workflow automation** — "the work runs itself" | Firm processes run to completion — suitability review cycles, audit prep, document chase, client materials | RM / ops | Workflow stepper recreation (trigger → steps ticking → completed with generated artifact). Time saved is the supporting line, never the headline. **Built today** | Own section after doc intelligence |
| 7 | **Relationship workspace** | Tasks, meetings, pipeline and client documents beside the portfolios they concern | RM | Workspace recreation | Workflow cards |
| 8 | **Audit by default** | The compliance answer is a filter, not an archaeology project | Compliance | Immutable audit-log filter view | Trust pillars |
| 9 | **Full instrument coverage** (equities, bonds w/ yield & duration, funds, structured notes) | Asia's structured-note-heavy books, natively | RM | Instrument specifics named on-page | Built-for-Asia section — framed as **table stakes done natively**, never as uniqueness |

### Mechanism (how the AI is presented — not a headline offering)

| Offering | Framing | Placement |
|---|---|---|
| **AI co-pilot** (ask the book, explain drift, draft a proposal) | The junior colleague who prepped overnight — the advisor decides. 3-step how-it-works (ingest → check against mandate → advisor approves). Negative-space claims allowed (e.g. zero-hallucination discipline) | How-it-works section + animated chat recreation |

## Adjacent (on the page, light touch)

| Offering | One-liner | Placement |
|---|---|---|
| **Onboarding & data migration** | Custodian feeds connected → book live in N days (de-risking timeline) | Short strip; N to be confirmed by owner before publishing |

## Future roadmap (NOT on the landing page)

- Client portal / **branded client portal & client reporting**
- **Mobile application**
- Scenario & stress views on drift
- API access
- Per-firm-type solutions subpages (EAM / FO / private bank / brokerage) — revisit post-launch

*Roadmap items may be referenced at most as a single quiet line if ever needed; they get no
sections until the owner promotes them.*

---

## Section order (locked)

1. **Hero** — morning-briefing moment; pain-first headline in the advisor's voice; live attention feed ticking in; dual CTA: **"Open the live demo"** (placeholder URL for now) + no-form secondary
2. **Credibility strip** — real partner/ecosystem logos (UOB Kay Hian, Lizen Asset Management, Cyberport, Solomon — real relationships, honest label) + domain-fluency signals
3. **Six verb-first workflow cards** — *brief the book · catch the breach · draft the proposal · clear the approval · execute the order · log everything*
4. **Governance act** — the proposal's life as a visual thread
5. **Document intelligence moment** — term-sheet dissolve animation
6. **Workflow automation** — "the work runs itself"
7. **Built for Asia** — booking centres, HKD/SGD/USD, SFC/MAS/HKMA named, structured notes first-class
8. **AI mechanism** — junior-colleague framing, 3-step how-it-works
9. **Persona one-liners** — RM / firm principal / compliance (roles, not firm types)
10. **Founder statement** — Oscar Chan (real co-founder & CEO), conviction about the problem, in the editorial quote layout — framed as a founder's statement, never as a testimonial
11. **Trust pillars (DDQ-style, six)** — immutable audit log · versioned proposals · four-eyes approvals · e-sign trail · **HK/SG data residency** · no-training-on-client-data. Certifications stated honestly: *"SOC 2 Type II — audit underway · ISO 27001 — certification in progress"* (applied for, not yet held — never claim as granted)
12. **Facts band** — the mockup's elegant stat layout filled with true product specifics only (no invented metrics)
13. **Final CTA** — "Open the live demo", no form
14. **Footer** — minimal sitemap + fluid-gradient MERCURY wordmark (monochrome pointer-reactive SVG; reduced-motion fallback)

## Standing constraints (from research §4–6 + owner decisions)

- Pure product-vision framing; never "demo/mock/portfolio project" in page copy
- Never: "operating system", "powering…", "next era", "single source of truth", invented metrics, fake testimonials, abstract illustrations
- AI is felt through **living product behavior** (streaming briefing, thinking states, dissolve animations), positioned via mechanism — not "AI-powered" sloganeering
- Real asset source: `../03-Fable-Mercury-V1-Application-Mock-Data` (read-only) — recreations use one consistent fictional dataset across the site
- Primary CTA everywhere: **Open the live demo** (URL = placeholder until owner supplies)
- Hosting: Vercel
