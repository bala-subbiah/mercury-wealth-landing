# Landing Site v1 — Consolidated Critique (2026-08-13)

*Produced by an orchestrated review: three parallel critique passes (copy/messaging,
structure/IA/nav, technical/design) plus live in-browser validation of both pages
(desktop + mobile). Findings below are cross-checked; anything marked CONFIRMED was
verified in the running site or in source by at least two independent passes.*

**Scores: Copy 7/10 · Structure/IA 7/10 · Technical 8/10 — overall ~7/10.**
Verdict in one line: *sentence-level craft and engineering are above every site in the
16-company research set; the site is held back by a dead primary CTA, a handful of
fabricated-looking claims, demo artifacts that contradict the copy, and missing
company-level pages (contact, legal, about).*

---

## What is genuinely good (keep, don't touch)

1. **Banned-vocabulary discipline is perfect.** Zero hits for "operating system",
   "powering", "next era", "single source of truth", "seamless", "empower",
   "AI-powered", etc., across all rendered text. No competitor manages this.
2. **Advisor-inner-voice writing that sounds like the job.** "Your morning, already
   prepared." · "Drift finds you. Not the reverse." · "The compliance answer is a
   filter, not an archaeology project." · "Nothing quietly fails to happen."
3. **Governance argued, not asserted** — the GovernanceAct paragraph about assembling
   the governance story after the fact, and the DRAFT → VERSIONS → APPROVAL → E-SIGN →
   ORDER → TIMELINE thread.
4. **"WHAT IT WON'T DO" block** (AiMechanism) — "It won't approve anything. Four-eyes
   means two humans; the system is neither of them." Best trust copy on the site.
5. **Honesty devices**: "SOC 2 Type II — audit underway · ISO 27001 — in progress …
   Neither is held today; we'll say so the day they are." Exemplary; keep verbatim.
6. **Asia specificity is real**: SFC/MAS/HKMA, booking centres, base vs native amounts,
   NNM MTD, DPM vs advisory, autocall observation dates, down-and-in puts.
7. **Home-page IA is disciplined**: nine acts in a real argument; SpineAct directly
   answers the modularity objection after EngineGrid; trust condensed to two bands;
   nav promises nothing that doesn't exist; anchors all resolve (CONFIRMED live).
8. **Engineering quality**: strict TS, zero `any`, real reduced-motion handling,
   documented contrast-ratio passes, correct ARIA/focus management, passes the
   Hallmark anti-pattern audit almost clean. Zero console errors (CONFIRMED live).
9. **Show-don't-gate positioning** ("no form, no sales call") is the right wedge — once
   the CTA works.

---

## Launch blockers (fix before anything else)

### 1. The primary CTA is a dead link — everywhere. (CONFIRMED live)
All 7 placements of "Open the live demo" are `href="#demo-placeholder"`; no such id
exists, no JS handler. Clicking visibly does nothing — on a site whose whole wedge is
"the demo is one click away, no form." Files: `Nav.tsx:73,106`, `HomeHero.tsx:245`,
`Hero.tsx:83`, `GovernanceAct.tsx:48`, `WorkflowAutomation.tsx:58`, `FinalCta.tsx:22`,
`HomeFinalCta.tsx:29`. Fix: point at the real deployed demo URL
(`target="_blank" rel="noopener"`), add the CTA to the footer, and show a compact CTA
in the mobile bar (currently `display:none` below 900px — the mobile header has zero
conversion affordance; CONFIRMED live on 375px).

### 2. No contact route, dead links, no legal pages.
Footer LinkedIn is `href="#"`; "Privacy · Terms" is static text; no email, form, or
address anywhere. "No sales call" is a stance; "no way to reach us" is a leak. Fix:
mailto + working Privacy/Terms pages + real LinkedIn, or `noindex` until they exist.

### 3. Claims that read as fabricated (each is a ten-minute fix).
- `BuiltForAsia.tsx:32` — "**Half the books in this region are structured-note
  heavy**": unsourced market stat; the easiest claim for an HK principal to challenge.
  → "Structured notes are not an edge case in this region…"
- Same line — "most systems in this region don't clear it": unevidenced swipe.
  → "Not every system in this region clears it."
- `DocIntelAct.tsx:12` — "**Firms that begin here keep the cockpit for year two**":
  implies an observed customer base that doesn't exist. → recast as an offer: "Begin
  here and the cockpit stays optional…"
- `TrustPillars.tsx:8` — "Six questions **every** DDQ asks" → "…every DDQ gets to."

### 4. The "WORKING WITH" logo strip is the highest-risk element.
UOB Kay Hian · Lizen · Cyberport · Solomon with no relationship qualifier — a
diligence-minded reader assumes "clients," discovers otherwise, and discounts the whole
page. Real names amplify the risk. Fix: replace the filler line beneath ("EAMs ·
PRIVATE BANKS · …", which repeats the hero subhead) with a truthful qualifier, e.g.
"DESIGN PARTNERS · PILOTS · PROGRAMMES — HONG KONG & SINGAPORE" — whatever is actually
true. OWNER INPUT NEEDED: what is the true nature of each relationship?

---

## Credibility damage (fix next)

### 5. The founder statement exists in two divergent versions.
*(CORRECTED 2026-08-13: Oscar Chan is a real person — founder & CEO, confirmed by the
owner; the original review wrongly assumed he was invented. The byline STAYS. See
v2-plan §6 #5.)* The remaining, real defect: "Oscar Chan, Co-Founder & CEO" appears in
`FounderStatement.tsx` (/cockpit) AND `TrustCondensed.tsx` (home) — same opening
clause, then *different* memories and closes. Two versions of the same personal
recollection reads as fabricated even when it isn't. Fix: run ONE version in ONE place
(/company), reference it from elsewhere, and back it with the real contact email and
company LinkedIn now provided.

### 6. The demo artifacts contradict the copy. (The site's strategy is
"show, don't claim" — so artifact/copy contradictions are copy bugs.)
- **Book size:** US$57.7M · 4 households (CockpitDashboard, DataStrip) vs "your whole
  book" / "full book" copy — 4 households is smaller than one private-banking
  relationship. AND the hero's ResearchAnswer says "reading **20 households · 47
  accounts**" — contradicting the 4-household dashboard on the same page. Fix: scale
  the dataset to a plausible EAM book (US$300M+, 40–80 households) and reconcile.
- **Four-eyes with one actor:** `AuditTimeline.tsx` — all six events by "Tan Wei-Jie";
  no second approver, while the copy sells four-eyes hard. The copy deck specified
  "Cleared by Wong Mei-Ling · desk head" — it was dropped. Highest-value single change
  to the governance act. (Also: PRP id and names deviate from the sanctioned deck
  list — Tan Wei-Jie, Tanaka, Oberoi are unsanctioned.)
- **Fake ISIN:** `TermSheetDissolve.tsx:18` "ISIN CH1234567890" — spottable-on-sight
  fake in the artifact meant to prove term-sheet fluency; also a real bank's name (UBS)
  on a fabricated term sheet. Fix: structurally plausible ISIN with valid check digit,
  or redact; consider an invented issuer name.
- **Near-lift of Evooq's live headline:** "Sleep before the audit, not during it." vs
  Evooq's "Sleep well before audits." Swap for the site's own better line (see #8).

### 7. Trust-claim register inconsistency.
"HK and Singapore data residency" stated as present-tense deployed fact directly above
the scrupulously hedged cert language. If it's a design commitment, say so in the same
honest register.

---

## Positioning & structure (the strategic fixes)

### 8. "Engine" is the governing noun of the home page — and it's not the buyer's word.
Five of eight home headlines contain "engine"; the hero burns its subhead explaining
the metaphor. The research's sharpest ownable line — "Every custodian. One cockpit."
(§6.6) — is buried as a mono label. Fixes: hero H1 → pain/outcome line ("Every
custodian. One cockpit." or "Six custodian portals before your first coffee."),
demote "six engines" to the subhead; `DocIntelAct` → "Start where it hurts most.";
de-engine at least two more headlines. Headline swaps already written and sitting in
the copy: "The audit trail writes itself" → GovernanceAct headline (retires the tired
"Built in, not bolted on" + the Evooq near-lift); "Nothing quietly fails to happen" →
WorkflowAutomation headline (retires "The work runs itself", the one headline that
breaks the human-in-the-loop rule).

### 9. The home page doesn't carry the two whitespace positions.
The morning-briefing narrative and the governance act — the research's #1 and #3
unclaimed lanes — live only on /cockpit, behind a click. Without reordering the locked
acts: thread the morning + governance language through the existing home acts, and
surface `AuditTimeline` somewhere on home (the most differentiated claim currently has
zero home-page evidence).

### 10. /cockpit is v1 relabeled, not a flagship product page.
It still contains full acts for Document Intelligence and Workflow Automation — now
separately-licensed engines with their own home acts — duplicating all three signature
visuals for anyone following the home → cockpit path, and running ~11–12 viewports
with five trust-flavoured bands. Fix: cut DocIntelligence + WorkflowAutomation acts
from /cockpit (~2,500px), merge Credibility's domain line into FactsBand.

### 11. Missing company-level IA for the investor reader.
No About/team, no traction sentence, no why-now, no roadmap signal, no careers, no
forwardable /trust page (offerings-map lists it as fast-follow; TrustPillars currently
sits at position 12 of 14 on a product page). `ComplianceEvidence.tsx` (242 lines) is
built and rendered nowhere — Compliance Copilot is the only engine with no visual.

### 12. Missing conversion aids from the research playbook.
No memorable number anywhere (candidate, true by construction: "six portals before the
first coffee → one screen"); de-risking timeline has no commitment ("before the first
quarter-end…" — ask owner for a real stage-based timeline); no custodian names
("do you connect to my custodian" is an EAM's first question — OWNER INPUT NEEDED).

---

## Technical/launch hygiene (bounded, cheap)

- **7MB dead `/v1/` build ships in every deploy** (>50% of dist) — drop from `public/`.
- **Code-split cockpit-only recreations** (`DriftChat`, `ComplianceEvidence`,
  `ResearchAnswer`, `AuditTimeline`) — the shared 349KB chunk is eagerly preloaded by
  both pages.
- **SEO placeholders**: canonical commented out (placeholder domain), no `og:image`,
  no Twitter cards, `robots.txt` references a sitemap that doesn't exist, no 404 page,
  no host config for `/cockpit` (no-slash) redirect.
- **Hero video 5.3MB**, no poster/preload — shorter loop or lower bitrate.
- **No ESLint** — add `react-hooks` + `jsx-a11y` plus a standalone `typecheck` script.
- Domain-register nits: "IPS bands" (US/RIA vocabulary — HK/SG says mandate/investment
  guidelines/risk profile; the site uses "mandate" correctly elsewhere) and
  "specific-ID cost basis" (US tax concept, odd on an Asia page).
- Sub-10px mono labels in product recreations (20 declarations) — legibility pass.
- SpineAct source chips read as filler ("Global News", "Exchange Data", Google Cloud,
  Oracle in a data-sources row) → make categorical and true: "CUSTODIAN FEEDS · MARKET
  DATA (FACTSET · HKEX) · PDF STATEMENTS · EXCEL · EMAIL"; restore the full caption.
- Verbosity: `WorkflowAutomation` body (115 words) — break the eight-item enumeration
  into a mono list; `SpineAct` 88-word paragraph — lead with "the second engine is
  worth more than the first."
- Final CTA tone slip: "Open it. It's the actual product." reads defensive → state the
  offer, not the defence.

*Note: a "blank sections on mobile" symptom observed during automated testing was
diagnosed as a test-environment artifact (IntersectionObserver paused while the browser
pane was hidden; `document.visibilityState === "hidden"`). Reveal.tsx behaves correctly
for real users and has proper reduced-motion/no-IO fallbacks. Not a defect.*

---

## Ranked fix list (merged across all passes)

1. **Wire the primary CTA** to the real demo URL in all 7 placements + footer CTA +
   mobile-bar CTA.
2. **Contact + legal**: mailto/contact route, real Privacy/Terms, fix dead LinkedIn.
3. **Kill the three fabricated-looking claims** and put a truthful qualifier on the
   logo strip (owner to confirm true relationships).
4. **Resolve the founder**: one statement, one place, byline kept (Oscar Chan is
   real — see correction in §5 above).
5. **Make artifacts agree with copy**: four-eyes second approver in AuditTimeline;
   reconcile 4 vs 20 households; scale the book; fix the ISIN.
6. **De-engine the home headlines**; promote "Every custodian. One cockpit." and the
   two best in-copy lines to headlines.
7. **Re-cut /cockpit** (remove DI + WA acts, merge Credibility/FactsBand overlap).
8. **Ship /trust** with the six pillars + ComplianceEvidence visual; add minimal
   About/company content.
9. **Deploy hygiene**: drop /v1 from deploy, code-split, canonical/og:image/sitemap/
   404, compress hero video.
10. **Copy polish pass**: verbosity cuts, domain-register nits, tone slip at final CTA,
    source-chip row, memorable-number and timeline additions (owner input).

**Owner inputs needed:** real demo URL · true nature of the four logo relationships ·
founder attribution decision · custodian names that may be claimed · any real
onboarding timeline stages · corporate identity line (MERCURY AI LIMITED?).
