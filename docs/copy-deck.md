# Mercury Wealth — Landing Page Copy Deck (final)

*Written 2026-08-12 against `docs/one-pager.html` (product truth), `docs/competitor-research.md`
§4–6 (binding), and `docs/offerings-map.md` (locked IA, 14 sections). Section order below is
offerings-map order. Everything in a `> ` blockquote or fenced block is **final copy — lift it
verbatim**. Everything in italics is build guidance, not page text.*

## How to use this deck

- **Lift verbatim.** Blockquotes and code fences are the page strings. Do not paraphrase,
  re-title, or "improve" them without owner sign-off.
- **`[VERIFY: …]`** marks a claim that cannot be sourced from the one-pager. It must be
  confirmed by the owner or cut before publishing. Never ship a `[VERIFY]` string as-is.
- **In-UI text** for product recreations is drawn from the real app dataset at
  `../03-Fable-Mercury-V1-Application-Mock-Data` (read-only). Names, custodians, instruments,
  proposal references and thresholds below are all from that dataset — keep them consistent
  across every recreation on the site. Figures inside product UI are demo-dataset values, not
  marketing claims; they never migrate into headlines, subheads or the facts band.
- **Typographic conventions:** `·` (middle dot, spaced) separates mono micro-label items.
  Em dashes are unspaced in body copy. Use curly apostrophes.
- **Banned vocabulary** (do not reintroduce in alt text, aria-labels, tooltips or meta):
  operating system · powering · next era · single source of truth · unified platform ·
  revolutionize · seamless · empower · unlock · supercharge · "AI-powered" as an adjective ·
  any invented metric, ROI figure, testimonial or named customer.

---

## 0. Site chrome — header / nav

*Nav labels are section jumps, not pages. Keep to five items plus the CTA.*

```
Cockpit
Governance
Intelligence
Built for Asia
Trust
```

Header CTA (primary, present in the sticky header at all breakpoints):

> Open the live demo

Mobile menu label:

> Menu

Skip link (a11y, visually hidden until focused):

> Skip to main content

---

## 1. Hero — the morning briefing moment

**Eyebrow (mono, uppercase):**

> THE ADVISOR'S COCKPIT · HONG KONG & SINGAPORE

**Headline — RECOMMENDED (keep):**

> Your morning, already prepared.

*31 characters. Advisor-voice, morning-moment, possessive. It is the whitespace nobody in the
competitive set occupies (research §6.1) and it sets up the hero visual literally — the briefing
composing itself is the headline being demonstrated.*

**Alternates for the owner (pick one or keep the recommendation — do not ship more than one):**

- **Alt A —** `Your book, briefed before your first call.` *(42 chars. More concrete, names the
  book; slightly less quiet.)*
- **Alt B —** `You'll know before the client does.` *(35 chars. Strongest anxiety hook; more
  assertive register, marginally riskier for a compliance-head reader.)*

**Subhead (the consolidation sentence — one line, names the jobs):**

> Monitor the book, advise the client, execute with governance — every custodian, every booking
> centre, on one screen, in your base currency.

**Supporting line (below the CTAs, small):**

> Drift, breaches, maturities, pending approvals and today's reviews — ranked before you sit down.

**CTAs:**

> Open the live demo

> See how it works

*Secondary CTA is a same-page anchor to §8 (AI mechanism). No form, ever.*

**Micro-caption under the CTA pair (mono, uppercase, muted):**

> NO FORM · NO SALES CALL · THE REAL PRODUCT

### In-UI text — hero recreation (self-composing morning briefing)

*The briefing types itself in, line by line, then the attention feed rows tick in beneath it.
Reduced-motion: render the completed state.*

Panel chrome:

```
MORNING BRIEFING          FRI 19 JUN 2026 · 07:31 HKT
Lau Ka-Ming · Hong Kong
```

Briefing body (streams in, in this order):

```
Good morning, Ka-Ming.

Four portfolios drifted past their IPS bands overnight.
Two single-name caps are breached. One structured note
has an observation date next week, and PRP-2026-0004 is
waiting on your approval.

Nothing else needs you before 09:00.
```

Attention feed rows (each with a mono severity chip; rows tick in one at a time):

```
BREACH    Zhang Family · Asia Satellite     Equity 8.4pp over IPS band
CAP       Okonkwo Family · Thematic         NVDA 12.1% vs 10% max single position
MATURING  Zhang Family · Core               Tencent autocall observation · 03 JUL
APPROVAL  Okonkwo Family · Corporate        PRP-2026-0004 awaiting four-eyes
REVIEW    Lim Family Office                 Suitability review due · 26 JUN
```

Feed footer:

```
RANKED BY WHAT CHANGED SINCE YESTERDAY
```

---

## 2. Credibility strip

**Label (mono, uppercase, above the logo row):**

> WORKING WITH

<!--
LABEL JUSTIFICATION (do not render):
"Working with" chosen over "Ecosystem & partners", "Trusted by" and "Our clients".
- "Trusted by" / "Our clients" would misrepresent the relationships as a customer base —
  research §5 flags fake social proof as the fastest credibility loss with this buyer.
- "Ecosystem & partners" is accurate but soft and vendor-ish; it reads as a partnerships page
  and dilutes four real names into a category.
- "Working with" is literally true of all four relationships (UOB Kay Hian, Lizen Asset
  Management, Cyberport, Solomon), claims no revenue, no endorsement and no scale, and is the
  register an institutional HK/SG reader accepts without discounting.
-->

**Logo row (alt text, in order):**

```
UOB Kay Hian
Lizen Asset Management
Cyberport
Solomon
```

**Domain-fluency line (mono, uppercase, beneath the logos — this is the real work of the strip):**

> MULTI-CUSTODIAN · HKD · SGD · USD BASE REPORTING · ADVISORY & DPM MANDATES · SFC · MAS · HKMA

---

## 3. Six verb-first workflow cards

**Section eyebrow (mono):**

> THE DAY, END TO END

**Section headline:**

> Six things you do every day. One place to do them.

**Section subhead:**

> Not six tools, six logins and a spreadsheet holding it together.

### Card 1

- **Mono label:** `BRIEF THE BOOK`
- **Headline:** Start the day already briefed.
- **Body:** Every household and account across every custodian, rolled up in your base currency, with the native amounts one click away. What moved overnight is ranked before you ask.
- **Artifact caption (mono):** `HOUSEHOLDS · ACCOUNTS · PORTFOLIOS · HOLDINGS`

### Card 2

- **Mono label:** `CATCH THE BREACH`
- **Headline:** Drift finds you. Not the reverse.
- **Body:** Every portfolio is tracked against its model and risk profile, advisory and discretionary alike. Drift and concentration surface the day they emerge — not at quarter-end, not in the review pack.
- **Artifact caption (mono):** `IPS BANDS · CONCENTRATION CAPS · MANDATE RULES`
- **In-UI (drift-breach card):**

```
IPS BREACH · ZHANG FAMILY · ASIA SATELLITE
Equity          68.4%   target 60.0%   +8.4pp
Fixed income    19.2%   target 25.0%   −5.8pp
BAND ±5.0pp · GROWTH MODEL · BREACHED 18 JUN 07:02 HKT
```

### Card 3

- **Mono label:** `DRAFT THE PROPOSAL`
- **Headline:** From flagged to drafted, without slides.
- **Body:** A breach becomes a proposal with the positions, the rationale and the mandate check already in it. You edit and decide; nobody rebuilds a deck at 11pm.
- **Artifact caption (mono):** `VERSIONED · MANDATE-CHECKED · CLIENT-READY`

### Card 4

- **Mono label:** `CLEAR THE APPROVAL`
- **Headline:** Approvals stop living in inboxes.
- **Body:** Four-eyes sign-off, client acceptance in-app or by e-signature, and every comment on the record it belongs to. When compliance asks who approved what, you don't go looking.
- **Artifact caption (mono):** `FOUR-EYES · IN-APP OR E-SIGN · TIMESTAMPED`

### Card 5

- **Mono label:** `EXECUTE THE ORDER`
- **Headline:** The order carries its own authority.
- **Body:** An accepted proposal becomes orders, and execution status sits on the same record the client signed. The trade never gets separated from the decision that authorised it.
- **Artifact caption (mono):** `ACCEPTED → ORDERS → FILLS → COMPLETED`

### Card 6

- **Mono label:** `LOG EVERYTHING`
- **Headline:** The audit trail writes itself.
- **Body:** Every material action lands on an immutable log as it happens — who, what, when, before and after. The compliance answer is a filter, not an archaeology project.
- **Artifact caption (mono):** `IMMUTABLE · WHO · WHAT · WHEN · BEFORE → AFTER`

---

## 4. Governance act — the proposal's life

**Eyebrow (mono):**

> THE GOVERNANCE ACT

**Headline (two-fragment declarative):**

> Governance. Built in, not bolted on.

**Subhead:**

> From the drift you caught this morning to the signed proposal to the placed order — one record,
> one spine, one timeline. Nothing is reconstructed afterwards, because nothing was ever apart.

**Body (one paragraph, sits beside the thread visual):**

> Most firms assemble the governance story after the fact: the proposal in a slide deck, the
> approval in an inbox, the trade in the custodian's system, the evidence in whoever's memory is
> nearest. Mercury keeps them as one linked record from the first draft. The version the client
> saw, the version they accepted, the officer who cleared it, the signature, the orders and the
> fills all hang off the same reference — and the audit timeline is written as you work, not
> assembled when someone asks.

**Relief line (pull quote, serif, set large):**

> Sleep before the audit, not during it.

**CTA:**

> Open the live demo

### In-UI text — proposal lifecycle thread

*Vertical thread, each node with a mono timestamp. Data is from the demo dataset — keep the
reference `PRP-2026-0002` consistent wherever the thread appears on the site.*

Thread header:

```
PRP-2026-0002 · INCOME & CREDIT REBALANCE
Lim Family Office · SGD · Sean Donnelly
```

Nodes, top to bottom:

```
DRAFTED        20 MAY 09:00 SGT   Created from IPS breach · fixed income +11.4pp
VERSION 2      21 MAY 14:12 SGT   Revised after client feedback · 3 lines changed
FOUR-EYES      22 MAY 10:05 SGT   Cleared by Wong Mei-Ling · desk head
SENT           22 MAY 11:00 SGT   Delivered to client for acceptance
ACCEPTED       28 MAY 16:20 SGT   Client approval recorded in-app
ORDERS PLACED  29 MAY 09:30 SGT   Handed to OMS · 6 lines
COMPLETED      31 MAY 17:04 SGT   All fills confirmed · rebalance closed
```

Thread footer (mono):

```
7 EVENTS · IMMUTABLE · EXPORTABLE FOR REVIEW
```

---

## 5. Document intelligence moment

**Eyebrow (mono):**

> DOCUMENT INTELLIGENCE

**Headline:**

> The term sheet reads itself.

**Subhead:**

> A structured-note term sheet lands as a PDF. Mercury pulls out the issuer, the underlying, the
> barrier, the coupon condition and the maturity as structured fields — and carries them straight
> into a proposal draft with the numbers intact.

**Body:**

> This is the part of the day that has no upside: retyping a term sheet into a spreadsheet, then
> into a proposal, then checking whether the barrier you typed is the barrier the issuer wrote.
> Mercury reads the document, shows you every field it extracted next to the clause it came from,
> and waits. You correct anything that's wrong before it moves. Custodian statements that arrive
> as PDFs rather than feeds go the same way — read, structured, reconciled against the book.

**Three-beat caption row (mono, under the animation):**

> DOCUMENT IN · FIELDS OUT · PROPOSAL DRAFTED

**Negative-space line (small, muted — keeps the human in the loop explicit):**

> Nothing is booked from a document. Extraction ends at a draft you approve.

### In-UI text — term-sheet dissolve

*Left: the PDF page. Right: the fields resolving one by one. Then the fields slide into a
proposal draft line. Reduced-motion: show the end state, both panes complete.*

Source document header (left pane):

```
TERM SHEET · PHOENIX AUTOCALLABLE NOTE
UBS AG · ISIN CH1234567890 · 6 pages
```

Extracted fields (right pane, appearing in order, each with a confidence-free source tag):

```
ISSUER            UBS AG                              p.1 §Issuer
UNDERLYING        Tencent Holdings (0700.HK)          p.1 §Underlying
STRUCTURE         Phoenix autocall, down-and-in put   p.2 §Payoff
BARRIER           65% · down-and-in                   p.2 §Barrier
COUPON            8.0% p.a. if underlying ≥ 80%       p.3 §Coupon
AUTOCALL          Quarterly · first obs 03 JUL 2026   p.3 §Observation
MATURITY          19 JUN 2027                         p.1 §Maturity
```

Hand-off strip:

```
7 FIELDS EXTRACTED → PROPOSAL DRAFT · ZHANG FAMILY · CORE
REVIEW BEFORE SENDING
```

---

## 6. Workflow automation

**Eyebrow (mono):**

> WORKFLOW AUTOMATION

**Headline:**

> The work runs itself.

**Subhead:**

> Suitability review cycles, audit prep, the document chase, quarterly client materials — the
> processes your firm already runs, running to completion without anyone shepherding them.

**Body:**

> A suitability review isn't hard. It's just twenty small steps that each need someone to
> remember them: pull the profile, check it against the current holdings, flag what changed,
> raise the questionnaire, chase the client, file the response, update the record, log it.
> In Mercury the process is defined once and then it runs — steps executing in order, waiting
> where a human decision is genuinely required, and finishing with the artifact in hand and the
> log already written. The hours it gives back are real; they're the by-product, not the point.
> The point is that nothing quietly fails to happen.

**Process chips (mono row):**

> SUITABILITY REVIEW CYCLES · AUDIT PREP · DOCUMENT CHASE · CLIENT MATERIALS · PERIODIC REPORTING

**CTA:**

> Open the live demo

### In-UI text — workflow stepper

*Steps tick to complete in sequence; one step pauses in an amber "waiting on you" state; the run
ends with a generated artifact chip.*

Header:

```
ANNUAL SUITABILITY REVIEW · Q2 2026
Triggered 19 JUN 07:00 HKT · 14 clients in scope
```

Steps:

```
✓  Pull current suitability profile               07:00
✓  Compare against live holdings & mandate        07:00
✓  Flag changes since last review · 3 found       07:01
✓  Generate client questionnaire                  07:01
✓  Send for client confirmation                   07:02
⏳ Awaiting client response · Ho Family           reminder sent 24 JUN
✓  File response against the client record        —
✓  Write to the audit log                         —
```

Completion strip:

```
13 OF 14 COMPLETE · 1 AWAITING CLIENT
ARTIFACT: SUITABILITY REVIEW PACK Q2 2026 · PDF
```

---

## 7. Built for Asia

*This is the warm-paper daylight interlude. Register: plain, insider, unshowy.*

**Eyebrow (mono):**

> BUILT FOR ASIA'S OPERATING REALITY

**Headline:**

> Your booking centres. Your currencies. Your regulators.

**Subhead:**

> Mercury was built for how books in Hong Kong and Singapore actually run — several custodians,
> several booking centres, clients whose base currency isn't the one their assets are in, and
> suitability regimes that expect evidence, not assurances.

**Three sub-blocks:**

**7a — Multi-custodian, multi-booking-centre**

> Assets sit where the client's relationships put them: a Hong Kong custodian, a Singapore
> custodian, a statement that still arrives as a PDF. Mercury takes all of it — live feeds and
> hand-keyed statements alike — and reports one book across it.
>
> *Mono caption:* `EVERY CUSTODIAN · ONE COCKPIT`

**7b — HKD, SGD, USD**

> Report a household in HKD, its Singapore accounts in SGD and its US holdings in USD without
> anyone reconciling by hand. Every derived figure is computed from base facts — nothing is keyed
> in twice, so nothing disagrees.
>
> *Mono caption:* `HKD · SGD · USD BASE REPORTING · NATIVE AMOUNTS ONE CLICK AWAY`

**7c — Suitability that survives an inspection**

> Suitability, approval and disclosure evidence is captured as the work happens, in the shape an
> SFC, MAS or HKMA-supervised firm expects to produce it. Cross-border tax-lot awareness comes as
> standard, because Asian books rarely sit in one jurisdiction.
>
> *Mono caption:* `SFC · MAS · HKMA`

**7d — Structured notes (table stakes, done natively)**

> **Headline:** Structured notes, treated as a first-class instrument.
>
> **Body:** Half the books in this region are structured-note heavy, so autocalls, barriers,
> observation dates and capital-protected participation are modelled properly rather than parked
> in an "alternatives" bucket with a manual price. Equities, bonds with yield and duration
> analytics, funds and notes all sit in the same book view. This is not a differentiator. It is
> the floor, and most systems in this region don't clear it.
>
> *Mono caption:* `EQUITIES · BONDS (YIELD & DURATION) · FUNDS · STRUCTURED NOTES`

---

## 8. AI mechanism — how it works

*Anchor target for the hero's "See how it works" CTA.*

**Eyebrow (mono):**

> HOW IT WORKS

**Headline:**

> The colleague who prepped overnight.

**Subhead:**

> Think of it as a very well-organised junior who read everything before you came in — the
> statements, the term sheets, the mandates, the overnight moves — and left a briefing on your
> desk. It prepares. You decide. That order never reverses.

**Three-step mechanism (numbered; mono step labels):**

**Step 01 — `INGEST`**

> Custodian feeds, statements, term sheets and client documents come in overnight and become
> structured positions, instruments and events on your book.

**Step 02 — `CHECK AGAINST THE MANDATE`**

> Every portfolio is measured against its own model, IPS bands, concentration caps and risk
> profile. What breached, what's about to, what matured, what's waiting — ranked by what changed.

**Step 03 — `YOU APPROVE`**

> Nothing leaves Mercury on its own. Proposals arrive as drafts, orders wait on your acceptance,
> and every approval carries your name and a timestamp.

**Negative-space block — what it will not do (mono label + four lines):**

> **Label:** `WHAT IT WON'T DO`
>
> **It won't place an order.** Execution requires an accepted proposal and a human authorisation, every time.
>
> **It won't invent a number.** Every figure it shows traces to a position, a document or a feed you can open.
>
> **It won't approve anything.** Four-eyes means two humans; the system is neither of them.
>
> **It won't learn from your clients.** Your data is never used to train models — yours or anyone else's.

### In-UI text — streaming co-pilot chat

*Chat streams with a visible "checking…" state between question and answer. Mandate checks
render as inline mono chips.*

```
YOU        Why did Zhang Family Asia Satellite breach this morning?

MERCURY    ⟳ reading positions · 4 accounts
           ⟳ checking against Growth model · IPS band ±5.0pp

           Equity is 68.4% against a 60.0% target — 8.4pp over, breached
           at 07:02 HKT after yesterday's HK rally. Fixed income is 5.8pp
           under. BYD alone is 11.2% of the portfolio, above the 10%
           single-position cap.

           I've drafted a rebalance that brings equity to 61.2% and BYD
           to 9.4%. It's a draft — nothing is placed.

           [ REVIEW DRAFT ]   [ SHOW WORKING ]
```

---

## 9. Persona one-liners

**Eyebrow (mono):**

> WHO IT'S FOR

**Headline:**

> Three jobs. One record between them.

**Persona 1**

- **Role label (mono):** `RELATIONSHIP MANAGER`
- **One-liner:** Your book, briefed and ranked, before the first call of the day.
- **Support line:** Cockpit, attention feed, proposals, tasks and meetings — the whole day in one place.

**Persona 2**

- **Role label (mono):** `FIRM PRINCIPAL / TEAM HEAD`
- **One-liner:** Every advisor's book, on the same terms, without asking for a spreadsheet.
- **Support line:** Firm-wide oversight of AUM, flows, drift and open approvals, scoped by entitlement.

**Persona 3**

- **Role label (mono):** `COMPLIANCE & OPERATIONS`
- **One-liner:** The approval trail, without asking anyone for it.
- **Support line:** Filter the immutable log by client, advisor, action or date and export what the reviewer wants.

---

## 10. Founder statement

*Editorial quote layout. Framed as a founder's statement — never labelled a testimonial, never
set alongside customer quotes.*

**Section label (mono):**

> WHY WE BUILT MERCURY

**Statement (2–3 sentences, conviction about the problem):**

> I spent years watching very good advisors lose their day to the machinery around the job —
> six custodian portals before the first coffee, a spreadsheet holding the real numbers, and a
> proposal rebuilt by hand every time a client asked a fair question. The part that always
> bothered me most is what that scattering hides: drift that started in March and gets
> discovered at quarter-end, when the honest conversation with the client is three months
> late. We built Mercury so that the advisor is the first to know, not the last.

**Attribution:**

> Oscar Chan
> Co-Founder & CEO, Mercury Wealth

---

## 11. Trust pillars (DDQ-style, six)

**Eyebrow (mono):**

> GOVERNANCE & SECURITY

**Headline:**

> Answers, in the form your compliance officer asks for them.

**Subhead:**

> Six questions every due-diligence questionnaire asks. Here they are, answered plainly.

**Pillar 1**

- **Claim:** Immutable audit log.
- **Mechanism:** Every material action is written once, with actor, timestamp and before/after state; entries can be filtered and exported, never edited or deleted.

**Pillar 2**

- **Claim:** Versioned proposals.
- **Mechanism:** Every revision is kept in full, so the version the client accepted is retrievable exactly as they saw it.

**Pillar 3**

- **Claim:** Four-eyes approvals.
- **Mechanism:** Material actions require a second named approver, recorded on the same record as the action they cleared.

**Pillar 4**

- **Claim:** E-signature trail.
- **Mechanism:** Client acceptance is captured in-app or by e-signature and bound to the specific proposal version signed.

**Pillar 5**

- **Claim:** Hong Kong and Singapore data residency.
- **Mechanism:** Client data is stored and processed in-region, so cross-border data questions have a one-line answer.

**Pillar 6**

- **Claim:** No training on client data.
- **Mechanism:** Your clients' data is never used to train models, and is never pooled with any other firm's.

**Certifications line (mono, beneath the pillars — this wording is exact and must not be
upgraded):**

> SOC 2 TYPE II — AUDIT UNDERWAY · ISO 27001 — CERTIFICATION IN PROGRESS

**Honesty note (small, muted, directly beneath — required, do not drop):**

> Applied for and in progress. Neither is held today; we'll say so the day they are.

---

## 12. Facts band

*Warm-paper band, mono/serif stat layout. **Only** verifiable product specifics — no metrics, no
AUM, no client counts. Any `[VERIFY]` item ships only after the owner confirms; otherwise cut the
item entirely rather than soften it.*

**Section label (mono):**

> THE SPECIFICS

**Verified facts (all sourced from `one-pager.html` — safe to ship):**

| Stat / label (mono) | Line (serif) |
|---|---|
| `CUSTODIANS` | Multi-custodian by design — live feeds and hand-keyed statements in one book |
| `BASE REPORTING` | HKD · SGD · USD, with native amounts one click away |
| `INSTRUMENTS` | Equities · bonds with yield and duration analytics · funds · structured notes |
| `MANDATES` | Advisory and discretionary (DPM), monitored on the same spine |
| `DATA SPINE` | Households · accounts · portfolios · holdings · activity |
| `TAX LOTS` | Cross-border tax-lot awareness, including specific-ID cost basis |
| `AUDIT` | Every material action on an immutable log, as it happens |
| `DERIVED FIGURES` | Computed from base facts — never keyed in twice |

**Unverified — owner must confirm or cut:**

- `BOOKING CENTRES` — "N booking centres" — **[VERIFY: the one-pager says "multi-booking-centre" but states no number. Either the owner supplies a supported count or the band uses the qualitative line "Multi-booking-centre: Hong Kong, Singapore and beyond" with no numeral.]**
- `CUSTODIAN FEEDS` — "N custodian connections" — **[VERIFY: no feed count exists in the one-pager. Competitors publish counts (Canopy 250+, WealthArc 170+); matching them without a real number would be an invented metric. Omit unless owner supplies.]**
- `UPTIME / SLA` — **[VERIFY: no availability figure exists in any source document. Do not create one.]**

---

## 13. Adjacent strip — onboarding & data migration

*Short strip, one line of copy. Per the offerings map this is light-touch and gated on the
owner confirming N.*

**Mono label:**

> GETTING LIVE

**Line:**

> Custodian feeds connected, history loaded, book live in **N** days. — **[VERIFY: "N days" is not in the one-pager and the offerings map explicitly flags N as owner-confirmation-pending. If N is not confirmed before publish, ship the numberless variant below.]**

**Numberless fallback (safe to ship as-is):**

> Custodian feeds connected, history loaded, and your book live — before the first quarter-end you'd have spent reconciling it.

---

## 14. Final CTA

**Headline:**

> Open it. It's the actual product.

**Subhead:**

> No form, no discovery call, no slide deck. The cockpit, the attention feed, a real book with
> real drift in it — open on your screen in the time it takes to read this line.

**Primary CTA:**

> Open the live demo

**Secondary CTA:**

> See how it works

**Micro-line beneath (mono):**

> HONG KONG · SINGAPORE

---

## 15. Footer

**Wordmark:** `MERCURY` *(fluid-gradient SVG; monochrome luminance only; static fallback under reduced motion)*

**Tagline beneath the wordmark (serif, small):**

> See the whole book. Act with governance.

**Sitemap columns:**

```
PRODUCT              COMPANY              LEGAL
Cockpit              About                Privacy
Governance           Contact              Terms
Intelligence                              Security
Built for Asia
Trust
```

**Footer CTA:**

> Open the live demo

**Address / jurisdiction line (mono, muted):**

> MERCURY WEALTH · HONG KONG · SINGAPORE

**Copyright line:**

> © 2026 Mercury Wealth. All rights reserved.

---

## Metadata

**Page `<title>` (56 chars):**

```
Mercury Wealth — The Advisor's Cockpit for HK & SG Books
```

**Meta description (148 chars):**

```
Mercury is the advisor's cockpit for EAMs, private banks and brokerages in Hong Kong and Singapore. Every custodian, one screen. Open the live demo.
```

**OG title:**

```
Mercury Wealth — Your morning, already prepared.
```

**OG description (139 chars):**

```
Monitor the book, advise the client, execute with governance. Every custodian, every booking centre, one screen. Hong Kong and Singapore.
```

**OG image alt text:**

```
The Mercury morning briefing: a ranked attention feed showing IPS breaches, single-position cap breaches, a maturing structured note and a pending approval.
```

**Twitter card:** `summary_large_image`

---

## Pre-publish copy checklist (for the validation pass)

1. No banned term appears anywhere in rendered text, alt text, aria-labels, tooltips or meta.
2. No `[VERIFY]` string survives in shipped markup — each is either owner-confirmed or cut.
3. Primary CTA reads exactly **"Open the live demo"** in every placement (header, hero, governance act, workflow automation, final CTA, footer) — no variants, no rewording. Secondary is always **"See how it works"**, anchored to §8.
4. Certifications line is verbatim, with the honesty note beneath it.
5. Founder statement is labelled as a statement, never a testimonial, and is not adjacent to any quote-styled customer content.
6. Structured notes appear only as table stakes done natively — never as a uniqueness claim.
7. No number appears in a headline, subhead or facts-band entry that cannot be traced to `one-pager.html`. Demo-dataset figures stay inside product-UI recreations.
8. Dataset consistency: Zhang Family, Lim Family Office, Okonkwo Family, Ho Family; advisors Lau Ka-Ming, Sean Donnelly, Wong Mei-Ling; custodians UBS, Julius Baer, Bank of Singapore, HSBC Private Bank; proposal reference `PRP-2026-0002`; as-of date 19 June 2026.
