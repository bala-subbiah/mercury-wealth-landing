# Mercury Wealth — Copy Deck v2: Company Home Page

*Written 2026-08-13 against `docs/offerings-map.md` v2 (locked IA, nine home acts),
`docs/copy-deck.md` (v1 — the voice bible; its strings stay live on `/cockpit`),
`docs/one-pager.html` (product truth) and `docs/competitor-research.md` §4–6 (binding
patterns). Section order below is offerings-map v2 order. Everything in a `> ` blockquote or
fenced block is **final copy — lift it verbatim**. Everything in italics is build guidance,
not page text.*

## How to use this deck

- **Lift verbatim.** Blockquotes and code fences are the page strings. Do not paraphrase,
  re-title, or "improve" them without owner sign-off.
- **`[VERIFY: …]`** marks a claim that cannot be sourced from `one-pager.html` or the
  offerings map. It must be confirmed by the owner or cut before publishing. Never ship a
  `[VERIFY]` string as-is.
- **No collision with v1.** The v1 deck's strings remain live on `/cockpit`. This deck does
  not repeat a single v1 marketing headline, subhead or body paragraph. Where the home
  covers the same ground (Asia, trust, document intelligence, the founder), the copy is
  newly written or explicitly re-cut at company altitude. **Two sanctioned reuses only:**
  the certifications line + honesty note (§8, verbatim by rule) and the three trust-pillar
  claims/mechanisms lightly generalised from v1 §11.
- **In-UI text** for product recreations is drawn from the real app dataset at
  `../03-Fable-Mercury-V1-Application-Mock-Data` (read-only) and is already specified in
  copy-deck v1. The home's TermSheetDissolve and MorningBriefing recreations reuse those
  **in-UI strings verbatim** (they are component text, not marketing copy); the home does
  **not** reuse the marketing copy that surrounded them in v1.
- **Typographic conventions:** `·` (middle dot, spaced) separates mono micro-label items.
  Em dashes are unspaced in body copy. Use curly apostrophes.
- **Banned vocabulary** (do not reintroduce in alt text, aria-labels, tooltips or meta):
  operating system · powering · next era · single source of truth · unified platform ·
  "platform" as the hero noun · revolutionize · seamless · empower · unlock · supercharge ·
  "AI-powered" as an adjective · **"agentic" as a label (new in v2)** · "suite" as a
  self-description · any invented metric, ROI figure, testimonial or named customer.
- **The two standing traps.** (1) *Privé trap* — modularity must never read as a toolbox;
  every modularity claim is answered within one screen by the spine. (2) *Agentic trap* —
  show the artifact and the behaviour, never the buzzword.
- **No invented UI.** Relationship Scribe, Book-aware Research and Compliance Copilot have
  no designed vignette yet. Their copy names behaviours and artifacts only — it must render
  correctly next to a placeholder, a still, or nothing at all.

---

## 0. Site chrome — header / nav

*Five section jumps plus the CTA. "Cockpit" is the only item that leaves the page.*

```
Engines
The Spine
Built for Asia
Trust
Cockpit
```

Header CTA (primary, sticky at all breakpoints):

> Open the live demo

Mobile menu label:

> Menu

Skip link (a11y, visually hidden until focused):

> Skip to main content

---

## 1. Hero — the company claim

**Eyebrow (mono, uppercase):**

> ENGINES FOR WEALTH FIRMS · HONG KONG & SINGAPORE

**Headline — RECOMMENDED:**

> The engines that run your wealth business.

*42 characters. This is the owner's working candidate ("The engines that run the business of
wealth") tightened on three axes: it swaps the abstraction "the business of wealth" for the
buyer's own firm; it puts the sentence in the possessive-autonomy voice that research §4.12
identifies as the register EAM principals answer to; and it drops the implicit
whole-industry claim of "**the** business of wealth" down to something we can actually
support today. Present tense, no future-tense grandiosity, establishes "engines" as the
site's governing noun in the first line the visitor reads.*

**Alternates for the owner (ship exactly one headline — do not run two):**

- **Alt A —** `Six engines. One spine. One audit log.` *(37 chars. The architecture stated as
  the claim; the strongest anti-Privé opening and the most institutional. Risk: "spine" is
  unglossed at hero altitude and the line reads as infrastructure rather than outcome.)*
- **Alt B —** `The engines wealth firms run on.` *(31 chars. Shortest and hardest-working
  noun; names the buyer category outright. Risk: nearest neighbour to the banned
  "operating system" posture — a category claim we cannot yet evidence.)*

**Subhead (names the buyers and the adoption model):**

> Six engines built for external asset managers, private banks and brokerages in Hong Kong
> and Singapore. Start with one and add the rest as they earn their place — or run the whole
> cockpit from day one.

**CTAs:**

> Open the live demo

> See the engines

*Secondary CTA is a same-page anchor to §3 (the six engines). No form, ever.*

**Micro-caption under the CTA pair (mono, uppercase, muted):**

> SIX ENGINES · ONE SPINE · NO FORM · NO SALES CALL

*Deliberately not v1's "NO FORM · NO SALES CALL · THE REAL PRODUCT" — that string stays on
`/cockpit`. This one carries the same pledge and adds the anti-Privé thesis in four words.*

### Hero visual — engine switcher (build guidance, not page text)

*Small live vignettes cycling per offerings-map §1: briefing composes → term sheet dissolves
→ scribe files. Vignette in-UI strings come from copy-deck v1 §1 and §5. The scribe vignette
is **not designed yet** — until it is, the switcher cycles two states, not three. Do not
invent a scribe screen to fill the third slot.*

Switcher tab labels (mono, uppercase):

```
MERCURY COCKPIT
DOCUMENT INTELLIGENCE
RELATIONSHIP SCRIBE
```

---

## 2. Proof strip

**Label (mono, uppercase, above the logo row) — KEEP v1's:**

> WORKING WITH

*Retained deliberately. The v1 label justification holds unchanged at company altitude, and
it is the one string where consistency between home and `/cockpit` is worth more than
novelty: "Trusted by" or "Our clients" would misrepresent four working relationships as a
customer base (research §5 flags fake social proof as the fastest credibility loss with this
buyer), and "Ecosystem & partners" dilutes four real names into a category. "Working with"
is literally true, claims no revenue, no endorsement and no scale.*

**Logo row (alt text, in order):**

```
UOB Kay Hian
Lizen Asset Management
Cyberport
Solomon
```

*Optional, only if the strip looks thin at desktop width — a mono line beneath the logos.
The v1 domain-fluency line stays on `/cockpit`; this is its company-level cut, and it is
cuttable without loss:*

> EAMs · PRIVATE BANKS · BROKERAGES · HONG KONG · SINGAPORE

---

## 3. The six engines

*The only catalog moment on the site. Six cards, verb-first, flagship badge on the Cockpit.
The Privé trap is live here: this screen must be immediately followed by §4.*

**Section eyebrow (mono):**

> THE ENGINES

**Section headline:**

> Six engines. Each does a real job on its own.

**Section subhead:**

> License one, several, or all six. The cockpit is the flagship — not a prerequisite for the
> rest.

**Flagship badge label (mono, on the Cockpit card only):**

```
FLAGSHIP
```

*Alternate if the badge reads too bare in the layout: `FLAGSHIP ENGINE`. Pick one and use it
everywhere the badge appears.*

### Card 1 — Mercury Cockpit `FLAGSHIP`

- **Title:** Mercury Cockpit
- **One-liner (79 chars):** Run the whole book — briefing, monitoring, proposals, approvals, orders, audit.
- **Supporting line:** One live view of every household and account across every custodian, with the proposal, the approval and the order that follow attached to the same record.
- **Link:** `Explore the Cockpit` → `/cockpit`

### Card 2 — Document Intelligence

- **Title:** Document Intelligence
- **One-liner (85 chars):** Turn term sheets, statements and client documents into structured data you can query.
- **Supporting line:** Every extracted field is shown next to the clause it came from, and nothing moves until someone approves it.

### Card 3 — Workflow Automation

- **Title:** Workflow Automation
- **One-liner (80 chars):** Run your firm's processes to completion — reviews, audit prep, client materials.
- **Supporting line:** A process is defined once and then it runs, pausing only where a human decision is genuinely required.

### Card 4 — Relationship Scribe

- **Title:** Relationship Scribe
- **One-liner (87 chars):** Speak the meeting; the call report, the CRM entries and the follow-ups file themselves.
- **Supporting line:** The record is written while the conversation is still accurate — not from memory on Friday — and in the shape an SFC- or MAS-supervised firm is expected to keep it.

*The supporting line carries the regulatory-relief angle at the same altitude v1 used for
the Asia section ("in the shape an SFC, MAS or HKMA-supervised firm expects to produce
it") — a claim about form, not a claim of compliance. **Do not sharpen it into a citation.**
Naming a specific rule, circular or record-keeping period would be
**[VERIFY: no SFC/MAS note-taking or call-report obligation is cited in any source document.
If the owner wants the specific regime named, it must be supplied and checked before
publish; otherwise ship the line exactly as written above.]** No screen is described, so the
card stands with or without a vignette.*

### Card 5 — Book-aware Research

- **Title:** Book-aware Research
- **One-liner (85 chars):** Ask the market question; get the answer against your book, not the market in general.
- **Supporting line:** It reads your positions, mandates and exposures first, so the answer arrives already scoped to the clients it actually affects.

### Card 6 — Compliance Copilot

- **Title:** Compliance Copilot
- **One-liner (81 chars):** Watch every suitability cycle and assemble the evidence before the reviewer asks.
- **Supporting line:** Open cycles, missing documents and DDQ-ready exports, tracked as the work happens rather than gathered in the week before an inspection.

*Card link treatment: **only the Cockpit card links today.** Per-engine pages are fast
follows and the demo app does not contain all six engines — a "see it in the demo" label on
the other five would be an overclaim, and a "talk to us" label would contradict the
no-sales-call pledge. Ship the other five as non-linking cards. When a per-engine page
lands, its label is `Explore [engine name]`, matching the Cockpit's.*

---

## 4. The spine act (anti-Privé)

**Eyebrow (mono):**

> THE SPINE

**Headline:**

> Every engine, one spine, one audit log.

**Body (3 sentences, sits beside the spine visual):**

> Buying a module from most vendors means buying another silo: its own data, its own log,
> its own idea of who the client is. Mercury's engines read and write the same book — the
> same households, accounts, portfolios, holdings and activity — and every material action
> any of them takes lands on the same immutable log, under the same entitlements. That is
> why the second engine is worth more than the first: adopt one and it works alone; add
> another and both get sharper.

**Proof lines (mono row, three lines):**

```
ONE BOOK · HOUSEHOLDS · ACCOUNTS · PORTFOLIOS · HOLDINGS · ACTIVITY
ONE LOG · WHO · WHAT · WHEN · BEFORE → AFTER
ONE ENTITLEMENT MODEL · EVERY ENGINE · SAME SCOPE
```

### Integrations bar

*Rebuilt in our design language as sources flowing into the spine. Logos are images; the
line below is the only prose.*

**Intro line (above the bar):**

> What the spine reads from — the market feeds, the firm's own systems and the file formats
> an Asian book actually arrives in.

**Source labels (in order, as alt text / captions):**

```
Global News · FactSet · HKEX · Google Cloud · Exchange Data · Oracle · Excel · Word
```

**Trailing item (mono, same weight as the labels — this is the "and many more" beat):**

```
AND MANY MORE
```

*Build note: the bar states what the spine **reads from**. It must not be captioned as
"partners", "integrations certified by" or anything implying a commercial relationship with
these vendors — the strip in §2 is the only relationship claim on the page.*

---

## 5. Flagship act — the Cockpit

*Visual: the MorningBriefing recreation (in-UI strings verbatim from copy-deck v1 §1).*

**Eyebrow (mono):**

> THE FLAGSHIP · MERCURY COCKPIT

**Headline:**

> The engine your advisors live in.

**Body (2 sentences):**

> The cockpit opens on a briefing that was written before anyone arrived: what drifted
> overnight, what breached, what matures next week and what is waiting on an approval —
> ranked, across every custodian, in the client's base currency. From there the day stays in
> one place, because the position, the proposal, the sign-off and the order all hang off the
> same record.

**Link:**

> Explore the Cockpit

---

## 6. Document Intelligence act

*Visual: the existing TermSheetDissolve recreation (in-UI strings verbatim from copy-deck v1
§5). The marketing copy around it is new — v1's "The term sheet reads itself." and its
subhead/body stay on `/cockpit`.*

**Eyebrow (mono):**

> DOCUMENT INTELLIGENCE

**Headline:**

> Start with the engine that hurts most.

**Body (2 sentences):**

> Document Intelligence runs on its own: point it at the term sheets, custodian statements
> and client documents piling up in a shared inbox, and it returns structured, queryable
> data with every field shown next to the clause it came from. Firms that begin here keep
> the cockpit for year two — and when they take it, the documents they have already
> processed are sitting on the spine waiting for it.

**Human-in-the-loop line (small, muted — required, do not drop):**

> Nothing is booked from a document. Extraction ends at a draft someone approves.

---

## 7. Built for Asia — at company level

*The warm-paper daylight interlude, re-cut so it reads as true of every engine rather than
of the cockpit alone. Register: plain, insider, unshowy.*

**Eyebrow (mono):**

> ASIA'S OPERATING REALITY

**Headline:**

> Not localised for Asia. Built here.

**Body (short):**

> Every engine inherits the same assumptions: several custodians and several booking centres
> per client, base currencies that differ from the assets sitting under them, statements that
> still arrive as PDFs, and suitability regimes that expect evidence rather than assurances.
> That is true of the cockpit reporting a household this morning, and equally true of the
> scribe writing up the call that follows it.

**Definition rows (mono label + one line each, three rows):**

```
SFC · MAS · HKMA
```
> Evidence captured as the work happens, in the shape a supervised firm is expected to
> produce it.

```
HKD · SGD · USD
```
> Base-currency reporting across booking centres, with native amounts one click away.

```
MULTI-CUSTODIAN
```
> Live feeds and hand-keyed statements, read into one book rather than reconciled by hand.

---

## 8. Trust, condensed + founder statement

*Three pillars only on the home — the ones that are true of **every** engine and that a
compliance officer asks first. The cockpit-specific three (versioned proposals, four-eyes
approvals, e-signature trail) stay in the full six on `/cockpit`, and move to `/trust` when
that page ships.*

**Eyebrow (mono):**

> GOVERNANCE & SECURITY

**Headline:**

> Three answers your compliance officer asks for first.

**Pillar 1**

- **Claim:** Immutable audit log.
- **Mechanism:** Every material action, in every engine, is written once — actor, timestamp, before and after — and can be filtered and exported, never edited or deleted.

**Pillar 2**

- **Claim:** Hong Kong and Singapore data residency.
- **Mechanism:** Client data is stored and processed in-region, so cross-border data questions have a one-line answer.

**Pillar 3**

- **Claim:** No training on client data.
- **Mechanism:** Your clients' data is never used to train models, and is never pooled with any other firm's.

**Link to the full set:**

> See all six answers

*→ `/cockpit#trust` until `/trust` ships, then re-point. Label stays the same either way.*

**Certifications line (mono — verbatim from copy-deck v1 §11; this wording is exact and must
not be upgraded):**

> SOC 2 TYPE II — AUDIT UNDERWAY · ISO 27001 — CERTIFICATION IN PROGRESS

**Honesty note (small, muted, directly beneath — required, do not drop):**

> Applied for and in progress. Neither is held today; we'll say so the day they are.

### Founder statement

*Editorial quote layout. Framed as a founder's statement — never labelled a testimonial,
never set alongside customer quotes. Lightly adapted from v1 §10: the first two sentences
are the same conviction, widened from the cockpit's pain to the whole machinery, and the
close now lands on the company thesis instead of the product's.*

**Section label (mono):**

> WHY WE BUILT MERCURY

**Statement:**

> I spent years watching very good advisors lose their day to the machinery around the job —
> six custodian portals before the first coffee, a spreadsheet holding the real numbers, a
> term sheet retyped three times, and a call report written from memory on a Friday
> afternoon. The part that always bothered me most is what that scattering hides: drift that
> started in March and gets discovered at quarter-end, when the honest conversation with the
> client is three months late. So we built engines that do that work, and we put all of them
> on one spine — because no firm should have to buy six new silos to stop running six old
> ones.

**Attribution:**

> Oscar Chan
> Co-Founder & CEO, Mercury Wealth

*Name and title must match `/cockpit` exactly; if either changes, both pages change together.*

---

## 9. Final CTA

**Headline:**

> Start with one engine. Or open all of it.

**Subhead:**

> There is no form and nothing to book. The demo is the product itself, running on a full
> book — drift already in it, proposals in flight, the audit trail written as you go.

**Primary CTA:**

> Open the live demo

**Secondary CTA:**

> Explore the Cockpit

**Micro-line beneath (mono):**

> SIX ENGINES · ONE SPINE · HONG KONG · SINGAPORE

*Footer is unchanged from copy-deck v1 §15, except that the PRODUCT column now lists the
engines. No new footer copy in this deck.*

---

## Metadata

**Page `<title>` (52 chars):**

```
Mercury Wealth — Six Engines for HK & SG Wealth Firms
```

**Meta description (141 chars):**

```
Mercury Wealth builds six engines for EAMs, private banks and brokerages in Hong Kong and Singapore. Start with one or run the whole cockpit.
```

**OG title:**

```
Mercury Wealth — The engines that run your wealth business.
```

*If the owner ships Alt A or Alt B as the hero, this string changes with it — OG title
always mirrors the live hero headline.*

**OG description (153 chars):**

```
Six engines for EAMs, private banks and brokerages in Hong Kong and Singapore — on one data spine, one audit log. Start with one or run the whole cockpit.
```

**OG image alt text:**

```
Six Mercury engines on one data spine: the advisor's cockpit, document intelligence, workflow automation, the relationship scribe, book-aware research and a compliance copilot.
```

**Twitter card:** `summary_large_image`

---

## Pre-publish copy checklist (v2 home)

1. No banned term appears in rendered text, alt text, aria-labels, tooltips or meta —
   including **"agentic"** and **"platform" as a noun for Mercury**, both newly banned in v2.
2. No `[VERIFY]` string survives in shipped markup. The one live `[VERIFY]` in this deck
   (Scribe regulatory specificity, §3 Card 4) is satisfied by shipping the written line
   unchanged; it fails only if someone sharpens it into a citation.
3. Primary CTA reads exactly **"Open the live demo"** in every placement (header, hero,
   final CTA, footer). Hero secondary is exactly **"See the engines"**, anchored to §3.
   Cockpit link text is exactly **"Explore the Cockpit"** in both §3 and §5.
4. Exactly one hero headline ships. OG title matches whichever one it is.
5. Every modularity statement (§1 subhead, §3 headline/subhead, §6, §9 headline) is followed
   within one screen by the spine — §4 must never be cut, reordered below §5, or collapsed
   into a caption. That ordering *is* the anti-Privé defence.
6. No v1 marketing string is duplicated on the home except the two sanctioned reuses
   (certifications line + honesty note; the three trust pillars). Diff this deck against
   `copy-deck.md` before publish.
7. All six engines are written present-tense and available; none carries a roadmap,
   "coming soon" or "in development" label anywhere in markup.
8. Scribe, Book-aware Research and Compliance Copilot copy names no screen, panel, button or
   field. The cards must render correctly with no vignette at all.
9. Certifications line verbatim, with the honesty note directly beneath it.
10. Founder statement is labelled a statement, never a testimonial, and is not adjacent to
    any quote-styled customer content.
11. No number appears in a headline, subhead or mono line that cannot be traced to
    `one-pager.html` or the offerings map. "Six" (engines) is the only numeral in marketing
    copy; demo-dataset figures stay inside product-UI recreations.
12. Dataset consistency in recreations: Zhang Family, Lim Family Office, Okonkwo Family, Ho
    Family; advisors Lau Ka-Ming, Sean Donnelly, Wong Mei-Ling; custodians UBS, Julius Baer,
    Bank of Singapore, HSBC Private Bank; proposal reference `PRP-2026-0002`; as-of date
    19 June 2026.
</content>
</invoke>
