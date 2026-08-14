# v3 fact source — audited v2 copy and claims

*Purpose: this file harvests every piece of rendered copy and every factual claim from the
v2 site (`src/`) so the v3 rebuild never invents a claim, a number, or a relationship. Per
`docs/v3-brief.md`: "v2's rendered copy is the content and fact source — every claim in it
survived a diligence audit... Its facts are the gold; its density is what was rejected."
Quotes below are verbatim from the source files (curly quotes/apostrophes preserved as
they render). Do not treat this file's own connective prose as copy to reuse — only
quoted/blockquoted text is v2 copy.*

*Source of deletions: `docs/team-feedback.md`, consolidated 2026-08-13 review session.*

---

## 1. Positioning facts

**What Mercury is** (`docs/one-pager.html`, canonical product description):
> Mercury is a front-office platform that unifies the three things an advisor actually does
> — monitor the book, advise the client, and execute with governance — on a single
> multi-custodian, multi-currency data spine covering households, accounts, portfolios,
> holdings and activity.

**Who it serves**, stated consistently across the site as: external asset managers (EAMs),
private banks and brokerages in Hong Kong and Singapore. Family offices are added as a
fourth segment at the "who it's for" layer (Personas, four rows) and on `/company` ("family
offices" is included in the standfirst), but the hero's named segment list stays at three
by deliberate decision (`src/sections/home/HomeHero.tsx` comment).

**Product surfaces:**
- **Mercury Cockpit** — the flagship engine / product surface, has its own page (`/cockpit/`).
- **The engines** (publicly "Mercury AI" per `docs/v3-brief.md` naming decision) — six
  licensable engines: briefing, documents, workflows, meetings, research, compliance.
  Two have their own pages today: Cockpit and Document Intelligence.
- **Document Intelligence** — the second engine with its own page (`/document-intelligence/`).

**One-liners used as taglines:**
- "See the whole book. Act with governance." (Footer tagline, `src/sections/Footer.tsx`)
- "The engines that run your wealth business." (home hero headline)
- "Every custodian. One cockpit." (cockpit hero headline — reserved line, do not reuse
  elsewhere per source comments)
- "Six licensable engines: briefing, documents, workflows, meetings, research, compliance.
  Each valuable alone, one spine underneath." (home hero lede)

**Key capabilities list** (`docs/one-pager.html`, "Key capabilities"):
- Book-of-business cockpit — one live view of every household and account across
  custodians: AUM, flows, performance, asset-class and currency exposure, all in base
  currency with native amounts one click away.
- Morning briefing & attention feed — the day starts with a ranked list of what genuinely
  needs action: drift breaches, concentration flags, maturing positions, pending approvals,
  upcoming reviews.
- Mandate-aware portfolio monitoring — every portfolio tracked against its model and risk
  profile, for advisory and discretionary (DPM) mandates alike; drift and concentration
  surface as they emerge, not at review time.
- Proposals with built-in governance — investment proposals drafted, versioned, discussed
  and approved in one place, with client sign-off (in-app or e-signature) and a complete
  audit timeline on every proposal.
- (list continues in the one-pager beyond what was excerpted here; consult
  `docs/one-pager.html` directly for the full capabilities list if v3 needs more)

**Site-wide nav (locked structure, `src/components/Nav.tsx`):**
Cockpit (`/cockpit/`) · Engines (`/#engines`) · Trust (`/trust/`) · Company (`/company/`),
plus a standing "Open the live demo" CTA rendered by Nav itself on every page. v3's brief
updates this to: Product (subpages: Cockpit, Mercury AI) · Trust · Company · [Demo CTA].

**Pages that exist in v2:** home (`/`), Cockpit (`/cockpit/`), Document Intelligence
(`/document-intelligence/`), Trust (`/trust/`), Company (`/company/`), Privacy
(`/legal/privacy/`), Terms (`/legal/terms/`).

---

## 2. Cockpit: the six workflow sections

Source: `src/sections/WorkflowCards.tsx`. Section eyebrow: "THE DAY". Section title:
"Six things you do every day. One place to do them." Subhead: "Not six tools, six logins
and a spreadsheet holding it together." Accompanying UI recreation: `CockpitDashboard`
(book-of-business panel showing AUM, households, accounts, NNM, attention rows) sits above
the six cards.

These six sections' headlines and body copy were **explicitly NOT struck** in the Notion
review — they survive verbatim into v3. Only their mono tag-strip captions (labelled
DELETED below, per instruction) are cut.

1. **BRIEF THE BOOK**
   - Headline: "Start the day already briefed."
   - Body: "Every household and account across every custodian, rolled up in your base
     currency, with the native amounts one click away. What moved overnight is ranked
     before you ask."

2. **CATCH THE BREACH**
   - Headline: "Drift finds you. Not the reverse."
   - Body: "Every portfolio is tracked against its model and risk profile, advisory and
     discretionary alike. Drift and concentration surface the day they emerge, not at
     quarter-end, not in the review pack."

3. **DRAFT THE PROPOSAL**
   - Headline: "From flagged to drafted, without slides."
   - Body: "A breach becomes a proposal with the positions, the rationale and the mandate
     check already in it. You edit and decide; nobody rebuilds a deck at 11pm."

4. **CLEAR THE APPROVAL**
   - Headline: "Approvals stop living in inboxes."
   - Body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every
     comment on the record it belongs to. When compliance asks who approved what, you
     don't go looking."

5. **EXECUTE THE ORDER**
   - Headline: "The order carries its own authority."
   - Body: "An accepted proposal becomes orders, and execution status sits on the same
     record the client signed. The trade never gets separated from the decision that
     authorised it."

6. **LOG EVERYTHING**
   - Headline: "Compliance stops being archaeology."
   - Body: "Every material action lands on an immutable log as it happens: who, what,
     when, before and after. The compliance answer is a filter, not an archaeology
     project."

Related, protected copy on the same page (not one of the six cards, but also un-struck):

- **GovernanceAct** (`src/sections/GovernanceAct.tsx`), eyebrow "THE GOVERNANCE ACT":
  - Title: "The audit trail writes itself."
  - Subhead: "From the drift you caught this morning to the signed proposal to the placed
    order: one record, one spine, one timeline. Nothing is reconstructed afterwards,
    because nothing was ever apart."
  - Body: "Most firms assemble the governance story after the fact: the proposal in a
    slide deck, the approval in an inbox, the trade in the custodian's system, the
    evidence in whoever's memory is nearest. Mercury keeps them as one linked record from
    the first draft. The version the client saw, the version they accepted, the officer
    who cleared it, the signature, the orders and the fills all hang off the same
    reference, and the audit timeline is written as you work, not assembled when someone
    asks."
  - Pull-quote: "The evidence was never a separate job."
  - Accompanying UI: a mono lifecycle thread, DRAFT → VERSIONS → APPROVAL → E-SIGN →
    ORDER → TIMELINE (this thread visual is distinct from the six banned tag strips —
    it is the section's own lifecycle diagram, not a per-card label list).

- **AiMechanism** ("How it works", `src/sections/AiMechanism.tsx`), eyebrow "HOW IT WORKS":
  - Title: "The colleague who prepped overnight."
  - Subhead: "Think of it as a very well-organised junior who read everything before you
    came in: the statements, the term sheets, the mandates, the overnight moves. They
    left a briefing on your desk. It prepares. You decide. That order never reverses."
  - Three steps: 01 INGEST — "Custodian feeds, statements, term sheets and client
    documents come in overnight and become structured positions, instruments and events
    on your book." 02 CHECK AGAINST THE MANDATE — "Every portfolio is measured against
    its own model, IPS bands, concentration caps and risk profile. What breached, what's
    about to, what matured, what's waiting. Ranked by what changed." 03 YOU APPROVE —
    "Nothing leaves Mercury on its own. Proposals arrive as drafts, orders wait on your
    acceptance, and every approval carries your name and a timestamp."
  - "What it won't do" (four negative claims, `AiMechanism.tsx`):
    - "It won't place an order." — "Execution requires an accepted proposal and a human
      authorisation, every time."
    - "It won't invent a number." — "Every figure it shows traces to a position, a
      document or a feed you can open."
    - "It won't approve anything." — "Four-eyes means two humans; the system is neither
      of them."
    - "It won't learn from your clients." — "Your data is never used to train models. Not
      yours, not anyone else's."
  - Accompanying UI recreation: `DriftChat`, a streaming co-pilot chat mock (per
    team-feedback C15, v3 should replace this with a proper chat-bubble component, e.g.
    smoothui.dev "AI Conversation").

- **Cockpit hero** (`src/sections/Hero.tsx`): eyebrow "MERCURY COCKPIT · THE FLAGSHIP
  ENGINE"; headline "Every custodian. One cockpit."; subhead "Monitor the book, advise the
  client, execute with governance. Every booking centre on one screen, in your base
  currency."; support line "Drift, breaches, maturities, pending approvals and today's
  reviews. Ranked before you sit down. One book, so a question about all of it has one
  answer."; caption "NO FORM · NO SIGN-UP · THE REAL PRODUCT". Visual: `ResearchAnswer`
  recreation (a copilot answering "The Fed decides tonight. Who in my book is exposed if
  they hold?").

- **BuiltForAsia** (`src/sections/BuiltForAsia.tsx`) — covered in full under §4/§9 below
  (numbers), copy summarized there.

- **Personas** ("Who it's for", `src/sections/Personas.tsx`), eyebrow "WHO IT'S FOR",
  title "Four jobs. One record between them.":
  - RELATIONSHIP MANAGER — "Your book, briefed and ranked, before the first call of the
    day." / "Cockpit, attention feed, proposals, tasks and meetings: the whole day in one
    place."
  - FIRM PRINCIPAL / TEAM HEAD — "Every advisor's book, on the same terms, without asking
    for a spreadsheet." / "Firm-wide oversight of AUM, flows, drift and open approvals,
    scoped by entitlement."
  - COMPLIANCE & OPERATIONS — "The approval trail, without asking anyone for it." /
    "Filter the immutable log by client, advisor, action or date and export what the
    reviewer wants."
  - FAMILY OFFICE PRINCIPAL — "The whole family's book, across every custodian, without
    asking anyone to prepare it." / "A multi-family office runs an EAM's book under the
    same suitability evidence expectations, and often one person holds the advisor,
    principal and compliance seats at once."

- **Cockpit page's own TrustPillars band** — identical content to the Trust page's six
  answers; see §4.

- **DataStrip** (`src/sections/DataStrip.tsx`) — a ticking mono book-of-business readout
  under the hero, not marketing copy; figures listed in §9 (metrics). Stamp: "BOOK OF
  BUSINESS · LAU KA-MING · FRI 19 JUN 2026 · 07:31 HKT".

- **FinalCta** (cockpit page close, `src/sections/FinalCta.tsx`): title "Open the cockpit
  on a full book."; subhead "No form, no sign-up, no slide deck. The cockpit and the
  attention feed open on a real book, with the drift, the proposals and the approvals
  already in it."; aside "Nothing here needs booking first. If you would rather talk it
  through, request a conversation."

---

## 3. The engines (five non-cockpit engine cards)

Source: `src/sections/home/EngineGrid.tsx`. Section eyebrow "THE ENGINES", title "Six
engines. Each does a real job on its own.", subhead "License one, several, or all six.
Each works alone; together they compound on one book, one audit log." Publicly this line
is now branded **Mercury AI** (`docs/v3-brief.md`), dropping "engines" as the public noun.
The Mercury Cockpit card that used to sit in this grid (full-width, "FLAGSHIP" badge) is
**DELETED** as a duplicate — see §8. The five cards below carried no criticism and their
copy survives verbatim.

1. **Document Intelligence** (has its own page, links to `/document-intelligence/`,
   link label "Explore Document Intelligence")
   - Line: "Turn term sheets, statements and client documents into structured data you
     can query."
   - Support: "Every extracted field is shown next to the clause it came from, and
     nothing moves until someone approves it."

2. **Workflow Automation** (no page yet, no link)
   - Line: "Run your firm's processes to completion: reviews, audit prep, client
     materials."
   - Support: "A process is defined once and then it runs, pausing only where a human
     decision is genuinely required."

3. **Relationship Scribe** (no page yet, no link)
   - Line: "Speak the meeting; the call report, the CRM entries and the follow-ups file
     themselves."
   - Support: "The record is written while the conversation is still accurate, not from
     memory on Friday, and in the shape an SFC- or MAS-supervised firm is expected to
     keep it."

4. **Book-aware Research** (no page yet, no link)
   - Line: "Ask the market question; get the answer against your book, not the market in
     general."
   - Support: "It reads your positions, mandates and exposures first, so the answer
     arrives already scoped to the clients it actually affects."

5. **Compliance Copilot** (no page yet, no link)
   - Line: "Watch every suitability cycle and assemble the evidence before the reviewer
     asks."
   - Support: "Open cycles, missing documents and DDQ-ready exports, tracked as the work
     happens rather than gathered in the week before an inspection."

Note: the Footer (`src/sections/Footer.tsx`) lists all six engine names in the "Product"
column, four of them as plain (non-linked) text because "naming them is honest, linking
them would not be": Mercury Cockpit (linked), Document Intelligence (linked), Workflow
Automation, Relationship Scribe, Book-aware Research, Compliance Copilot (all four
unlinked).

---

## 4. Trust page answers

Source: `src/TrustApp.tsx` and `src/sections/trust/*`. This page's copy drew almost no
criticism in review ("Nearly all /trust copy... drew no marks" — `docs/team-feedback.md`);
deep detail may compress to icons with detail one click away, but the writing itself
carries over.

**TrustHero** (`src/sections/trust/TrustHero.tsx`):
- Eyebrow: "GOVERNANCE & SECURITY"
- Title: "Answers, in the form your compliance officer asks for them."
- Lead: "The six answers due diligence asks for first, stated plainly. Mercury is the
  front-office cockpit built for external asset managers, private banks and brokerages in
  Hong Kong and Singapore. This page states how it handles evidence, approvals and client
  data, and it is written to be read on its own and forwarded."
- Meta line: "FOR COMPLIANCE · OPERATIONS · IT REVIEW"

**TrustAnswers** — the six answers, each with claim / mechanism / expansion
(`src/sections/trust/TrustAnswers.tsx`), eyebrow "THE SIX ANSWERS", title "What a
due-diligence questionnaire gets to.", lead "Each one below is the claim, the mechanism
behind it, and what that means in practice. Nothing here needs another page to make sense
of it.":

1. **Immutable audit log.**
   - Mechanism: "Every material action is written once, with actor, timestamp and
     before/after state; entries can be filtered and exported, never edited or deleted."
   - Expansion: "The timeline is written as the work happens, not assembled when someone
     asks for it, so an audit question is answered from the record rather than from
     whoever's memory is nearest."

2. **Versioned proposals.**
   - Mechanism: "Every revision is kept in full, so the version the client accepted is
     retrievable exactly as they saw it."
   - Expansion: "The version they saw, the officer who cleared it, the signature and the
     orders that followed all hang off the same reference, so none of it has to be matched
     up afterwards."

3. **Four-eyes approvals.**
   - Mechanism: "Material actions require a second named approver, recorded on the same
     record as the action they cleared."
   - Expansion: "Four-eyes means two humans, and Mercury is neither of them. It routes
     the approval and records who gave it; it never supplies one."

4. **E-signature trail.**
   - Mechanism: "Client acceptance is captured in-app or by e-signature and bound to the
     specific proposal version signed."
   - Expansion: "The accepted proposal becomes orders from that same record, so what the
     client signed and what was executed are read off one document instead of two
     systems."

5. **Hong Kong and Singapore data residency.**
   - Mechanism: "Mercury is built for in-region deployment in Hong Kong and Singapore, so
     client data does not have to leave the region it is regulated in."
   - Expansion (**HEDGED — keep the hedge**): "That is a design commitment, and we would
     rather name it as one: residency is a property of the deployment a firm actually
     runs on, so we confirm it in writing for that deployment rather than assert it once
     here for everybody." This claim was deliberately rewritten in v2 from a present-tense
     "deployed fact" to a stated design commitment, because a web page cannot certify
     where any given firm's data actually sits — do not re-upgrade it to a present-tense
     claim in v3.

6. **No training on client data.**
   - Mechanism: "Your clients' data is never used to train models, and is never pooled
     with any other firm's."
   - Expansion: "Mercury reads your book to prepare your day and nothing else, and every
     figure it puts in front of you traces to a position, a document or a feed you can
     open."

**TrustEvidence** (`src/sections/trust/TrustEvidence.tsx`), eyebrow "THE EVIDENCE":
- Title: "Assembled as the work happens."
- Body: "The pack an inspection asks for is not gathered in the week before the
  inspection. Call reports, proposal approvals, audit-log extracts and suitability
  reviews land on the record as the quarter runs, each one attached to the household and
  the decision it belongs to."
- Caption: "COMPLIANCE COPILOT · THE QUARTER ASSEMBLING ITSELF"
- Accompanying UI recreation: `ComplianceEvidence` — stays on the dark product surface
  even though the rest of the page is warm paper, because "the software looks the same
  wherever it is shown."

**TrustStatus** (`src/sections/trust/TrustStatus.tsx`) — **HEDGED, must never be
upgraded**:
- Certifications: "SOC 2 TYPE II: AUDIT UNDERWAY · ISO 27001: CERTIFICATION IN PROGRESS"
- Honesty note: "Applied for and in progress. Neither is held today; we'll say so the day
  they are." (This exact pairing — certs line + honesty note — repeats verbatim in
  `AsiaTrustBand.tsx`, `TrustPillars.tsx`, and `WhatExists.tsx`. It is a single sanctioned
  string used sitewide; do not paraphrase any instance of it.)
- Questionnaire answer: title "The answer is an export, not a project."; body "The audit
  log and the suitability evidence behind it can be filtered to the range a questionnaire
  asks about and exported in the shape an SFC or MAS inspection request expects. Answering
  is a matter of selecting that range, because the export comes off the same record the
  work was done on." No turnaround time is promised anywhere on the site — do not add one.

**TrustContact** (`src/sections/trust/TrustContact.tsx`):
- Title: "Security questionnaires go to a person, not a portal."
- Body: "DDQ sections, security questionnaires and IT review questions go to
  oscar.chan@mercury-digital.io. Deployment specifics are answered for the deployment
  your firm would run on, rather than in the abstract, so send the sections that matter
  and we will answer those."
- Note: "The product itself is open to read first. No form, no sales call before it."

**TrustPillars** (the same six-pillar content, condensed, appears on the Cockpit page
itself — `src/sections/TrustPillars.tsx`), eyebrow "GOVERNANCE & SECURITY", title
"Governance, with the mechanism attached.", subhead "The six answers a due-diligence
reviewer opens with, each one naming the mechanism rather than the intention." Same six
claim/mechanism pairs as TrustAnswers above (shorter form), same certs + honesty strings.

**AsiaTrustBand** (home page condensed version, `src/sections/home/AsiaTrustBand.tsx`) —
eyebrow "ASIA'S OPERATING REALITY · GOVERNANCE", title "Built here. Answerable here.",
lead "The region's assumptions: several custodians per client, base currencies that differ
from the assets." Two three-item columns:
- ASKED FIRST BY COMPLIANCE column: IMMUTABLE AUDIT LOG — "Every material action written
  once: actor, timestamp, before and after. Never edited, never deleted."; HK / SG DATA
  RESIDENCY — "Built for in-region deployment in Hong Kong and Singapore, so client data
  does not have to leave the region it is regulated in."; NO TRAINING ON CLIENT DATA —
  "Never used to train a model. Never pooled with another firm's."
- (BUILT FOR ASIA column covered in §9/BuiltForAsia detail.)
- Link out: "See all six answers" → `/trust/`.

---

## 5. Company facts

Source: `src/company-page/*`. Page title: "Why we built Mercury." Standfirst: "Front-office
software for external asset managers, private banks, brokerages and family offices in Hong
Kong and Singapore."

**Founder** (`src/company-page/FounderStatement.tsx`) — the single sitewide version, real
name, do not reword, do not add biographical facts beyond what's here:

> "I spent years watching very good advisors lose their day to the machinery around the
> job. Six custodian portals before the first coffee, a spreadsheet holding the real
> numbers, a term sheet retyped three times, and a call report written from memory on a
> Friday afternoon. The part that always bothered me most is what that scattering hides:
> drift that started in March and gets discovered at quarter-end, when the honest
> conversation with the client is three months late. So we built engines that do that
> work, and we put all of them on one spine, because no firm should have to buy six new
> silos to stop running six old ones."

- **Name:** Oscar Chan
- **Role:** Co-Founder & CEO, Mercury Wealth
- **LinkedIn (real, owner-supplied, the only personal link on the site):**
  https://www.linkedin.com/in/oscar-chan-499a1a48/
- The second co-founder is explicitly **unnamed** — do not invent a name or add detail.

**Why now** (`src/company-page/WhyNow.tsx`), title "Why now.", three qualitative beats, no
statistics or named firms:
- INDEPENDENCE — "Wealth in Asia keeps moving toward independent managers, and the people
  running those firms came out of the private banks. They know what good looks like. They
  no longer have a bank's back office behind them."
- EVIDENCE — "Suitability in Hong Kong and Singapore is judged on the record: what was
  recommended, on what basis, cleared by whom. The SFC and the MAS ask to see it. An
  assurance is not a record."
- THE GAP — "The back and middle office got their systems years ago. The front office got
  portals, and a spreadsheet to reconcile them."

**What exists today** (`src/company-page/WhatExists.tsx`), title "What exists today." —
deliberately makes **no claim of traction, customers, headcount or funding**:
- THE ENGINES: "Six of them, on one spine: briefing, documents, workflows, meetings,
  research, compliance. Each is licensable on its own. Run two and they share the same
  book and the same audit log."
- THE COCKPIT: "It is live, and it is open. [Open the live demo]: a real book, with drift
  already in it. No form, no sign-up."
- CERTIFICATIONS (hedged, verbatim, must never be upgraded): "SOC 2 Type II: audit
  underway. ISO 27001: certification in progress." / "Applied for and in progress. Neither
  is held today; we'll say so the day they are."
- CLIENT DATA: "No training on client data. Your clients' data is never used to train
  models, and is never pooled with any other firm's."

**Where we work** (`src/company-page/WhereWeWork.tsx`), title "Where we work.":
- Presence: "HONG KONG · SINGAPORE"
- Body: "Two markets with one operating reality: several custodians per firm, more than
  one booking centre, and a book reported in HKD, SGD or USD while the positions sit in
  something else. Built against that, not localised into it afterwards."
- No street address, no entity/registration detail — deliberate, per source comment.

**Contact** (`src/company-page/ContactBlock.tsx`), title "Talk to us.":
- Body: "The demo asks nothing of you. If you would rather talk first, that is available,
  and it is never a condition of seeing the product."
- CTAs: "Request a conversation" (mailto), the contact email as text link, "Mercury
  Wealth on LinkedIn" (company page link).

**Logo partners** (`src/components/company/LogoStrip.tsx`, files in `public/logos/`) —
four real logos, confirmed real by the owner, presented under the label **"WORKING WITH"**,
which the source comments say "claims no revenue, no endorsement and no scale" — do not
upgrade this framing in v3:
1. UOB Kay Hian — `public/logos/uob-kay-hian.svg`
2. Lizen Asset Management — `public/logos/lizen.svg`
3. Cyberport — `public/logos/cyberport.svg`
4. Solomon — `public/logos/solomon.svg`

Rendering treatment: monochromed via CSS filter (brightness(0) invert(1) at reduced
opacity, full opacity on hover), no marquee, no motion, static row that wraps on narrow
viewports. (Note: `docs/v3-brief.md` flags that the team responded well to a "logo
marquee" in the Gemini mockup — a motion treatment is a legitimate v3 direction change,
but the "no revenue/endorsement/scale" claim discipline must still hold.)

This same logo strip, same "WORKING WITH" label, appears twice: home page's `LogoProof`
section (between hero and engine grid) and `/company`'s `WhereWeWork` section.

---

## 6. Document Intelligence

Source: `src/DocIntelApp.tsx` and `src/sections/di/*`. Six sections: Hero, Extraction, How
It Works, Governance, Adoption, Final CTA.

**DiHero** (`src/sections/di/DiHero.tsx`):
- Eyebrow: "DOCUMENT INTELLIGENCE · A MERCURY ENGINE"
- Headline: "Start where it hurts most."
- Lede: "Term sheets, custodian statements and client documents arrive in a shared inbox
  and leave it as typing."
- Subhead: "Someone keys the barrier into a spreadsheet, then into a proposal, then checks
  whether the barrier they typed is the barrier the issuer wrote. That is the part of the
  day with no upside."
- "What goes in" panel: TERM SHEETS · CUSTODIAN STATEMENTS · CLIENT DOCUMENTS; formats
  "PDF · EXCEL · WORD · EMAIL". This input list is closed — v3 should not add to it.

**DiExtraction** (`src/sections/di/DiExtraction.tsx`), eyebrow "THE EXTRACTION":
- Title: "The term sheet reads itself."
- Intro: "Mercury reads the document and shows every field it extracted next to the
  clause it came from, down to the page and the section it was lifted from."
- Beats line: "DOCUMENT IN · FIELDS OUT · PROPOSAL DRAFTED"
- Accompanying UI recreation: `TermSheetDissolve` — a real-feeling but explicitly
  *specimen* term sheet ("Rheinwald Structured Products AG" is an invented issuer on
  purpose, ISIN CH1382044167 is structurally valid but specimen; per source comment, "Real
  institutions appear on this site only as custodians, which they are"). Per
  `docs/team-feedback.md` (A7), this crowded-UI treatment is a candidate for replacement
  with a simplified video/animation in v3.

**DiHowItWorks** (`src/sections/di/DiHowItWorks.tsx`), eyebrow "HOW IT WORKS", title
"Three steps. A person at the end of them.":
1. POINT IT AT THE DOCUMENTS — "Term sheets, custodian statements and client documents go
   in as they arrive, as PDF, Excel, Word, or straight out of the inbox they landed in."
2. IT RETURNS STRUCTURED FIELDS — "Issuer, underlying, barrier, coupon condition,
   maturity. Positions and valuations off a statement. Each field queryable, each one
   carrying the clause it was read from."
3. YOU APPROVE — "Every field lands in a draft with your name on the approval.
   Corrections are made against the source clause, before anything moves."

**DiGovernance** (`src/sections/di/DiGovernance.tsx`), eyebrow "WHERE IT STOPS" — this is
the load-bearing governance claim, set at statement scale, not a footnote:
- Statement: "Nothing is booked from a document. Extraction ends at a draft someone
  approves."
- Support: "The same holds for a custodian statement. It is read, structured and
  reconciled against the book, and it still waits on a human."

**DiAdoption** (`src/sections/di/DiAdoption.tsx`), eyebrow "ADOPTION", title "It works
alone from day one." — the "prepped overnight"/independence concept, protected per
team-feedback ("anchor for enhancement, not removal"):
- Lead: "Document Intelligence does not need the cockpit, or any of the other engines, to
  earn its place."
- Offer: "Begin here and the cockpit stays optional. When you take it, the documents you
  have already processed are sitting on the spine, waiting for it."
- Note: an earlier deck version claimed "Firms that begin here keep the cockpit for year
  two" — this was retired as an unverifiable observed-customer claim. Do not resurrect it
  in v3.

**DiFinalCta** (`src/sections/di/DiFinalCta.tsx`):
- Title: "Open it and look."
- Subhead: "No form and no sign-up. The demo is the product itself, running on a full
  book: the same drafts, the same approvals, the same audit trail."
- Aside: "Look first, on your own. If you would rather talk it through, request a
  conversation."

---

## 7. Real links

Source: `src/links.ts` — verbatim, and confirmed to carry over into v3 per
`docs/v3-brief.md` ("Carry over only the infrastructure that is register-neutral:
`src/links.ts`..."):

```ts
export const DEMO_URL = "https://mercury-wealth.vercel.app";
export const CONTACT_EMAIL = "oscar.chan@mercury-digital.io";
export const LINKEDIN_URL = "https://www.linkedin.com/company/mercury-digital-wealth/";
export const CONVERSATION_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("A conversation about Mercury")}`;
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const DEMO_LINK_PROPS = { href: DEMO_URL, target: "_blank", rel: "noopener" };
```

Plus the founder's personal LinkedIn (owner-supplied, real, only personal link on the
site): `https://www.linkedin.com/in/oscar-chan-499a1a48/` (`src/company-page/FounderStatement.tsx`).

CTA copy used sitewide, verbatim, on every placement: **"Open the live demo"** (primary),
mobile-collapsed variant **"Live demo"**, secondary variants **"Explore the Cockpit"** /
**"See how it works"** / **"See the engines"**, and the offered (never required) secondary
path **"request a conversation"**.

Standing caption used at multiple CTAs: **"NO FORM · NO SIGN-UP"** (home hero), **"NO FORM
· NO SIGN-UP · THE REAL PRODUCT"** (cockpit hero). Presence micro-line used at page closes:
**"HONG KONG · SINGAPORE"**.

---

## 8. Banned/deleted items

Per `docs/team-feedback.md`'s "Exact deletions marked in the Notion doc" and
`docs/v3-brief.md`.

**The six mono tag strips (DELETED, labels only — the parent sections' headline/body copy
survives, see §2):**
1. "HOUSEHOLDS · ACCOUNTS · PORTFOLIOS · HOLDINGS" (under "Brief the book")
2. "IPS BANDS · CONCENTRATION CAPS · MANDATE RULES" (under "Catch the breach")
3. "VERSIONED · MANDATE-CHECKED · CLIENT-READY" (under "Draft the proposal")
4. "FOUR-EYES · IN-APP OR E-SIGN · TIMESTAMPED" (under "Clear the approval")
5. "ACCEPTED → ORDERS → FILLS → COMPLETED" (under "Execute the order")
6. "IMMUTABLE · WHO · WHAT · WHEN · BEFORE → AFTER" (under "Log everything")

**"From the drift to the order, without leaving the screen." — DELETED** (was the
FlagshipAct subheading on the home page, `src/sections/home/FlagshipAct.tsx`, line
`TITLE`). Note: the current live file still contains this exact string as its `TITLE`
constant — it must not carry into v3.

**"THE SPECIFICS" / FactsBand section — DELETED ENTIRELY** (`src/sections/FactsBand.tsx`,
rendered on the Cockpit page). Its content — for reference only, not to be resurrected as
a section, though the underlying facts may still inform other sections since they are not
themselves banned claims:
- Label: "THE SPECIFICS"
- Domain line: "MULTI-CUSTODIAN · HKD · SGD · USD BASE REPORTING · ADVISORY & DPM MANDATES
  · SFC · MAS · HKMA"
- Eight fact rows: CUSTODIANS ("Multi-custodian by design: live feeds and hand-keyed
  statements in one book"), BASE REPORTING ("HKD · SGD · USD, with native amounts one
  click away"), INSTRUMENTS ("Equities · bonds with yield and duration analytics · funds ·
  structured notes"), MANDATES ("Advisory and discretionary (DPM), monitored on the same
  spine"), DATA SPINE ("Households · accounts · portfolios · holdings · activity"), TAX
  LOTS ("Cross-border tax-lot awareness, including specific-ID cost basis"), AUDIT ("Every
  material action on an immutable log, as it happens"), DERIVED FIGURES ("Computed from
  base facts, never keyed in twice").
- "GETTING LIVE" line: "Custodian feeds connected, history loaded, and your book live,
  before the first quarter-end you'd have spent reconciling it."

**Mercury Cockpit FLAGSHIP card — DELETED** (was in `src/sections/home/EngineGrid.tsx`,
full-width card with "FLAGSHIP" badge, ahead of the five real engine cards):
- Title: "Mercury Cockpit"
- Line: "Run the whole book: briefing, monitoring, proposals, approvals, orders, audit."
- Support: "One live view of every household and account across every custodian, with the
  proposal, the approval and the order that follow attached to the same record."
- Deleted as a duplicate — the Cockpit already has its own page/surface.

**Site-wide banned vocabulary** (from `docs/v3-brief.md`, any casing/spacing): operating
system, powering, next era, single source of truth, seamless, empower, AI-powered, unlock,
leverage, transform, end to end, holistic, world-class, supercharge. **No em-dashes in
rendered copy.**

**Also flagged for deletion/replacement per team-feedback but not literal copy deletions:**
- The uppercase "mono discipline" idiom generally (micro-labels everywhere) — "dies or
  becomes rare" per design-system implications in `docs/team-feedback.md`.
- Raw product-UI recreations as the default marketing visual — inverted in v3 in favor of
  simplified animations/illustrated cards where they communicate faster (chat bubbles,
  status cards, carousels).

---

## 9. Metrics / numbers

Every concrete number appearing anywhere in v2, with its source, so v3 never invents a
new one. Two categories: (A) UI-recreation / demo-dataset figures (explicitly **not**
marketing claims — `src/sections/DataStrip.tsx` comment: "demo dataset numbers never
become marketing claims... by design"), and (B) actual sitewide facts/counts used as
copy. v3 may reuse category-A figures only inside a faithful product-UI recreation, never
promote them to prose as a company statistic.

### (B) Real sitewide facts/counts (safe to use as copy facts)
- **Six** engines/licensable products (briefing, documents, workflows, meetings, research,
  compliance) — stated repeatedly, e.g. home hero lede, `WhatExists.tsx`, `EngineGrid.tsx`.
- **Six** cockpit workflow cards (brief/catch/draft/clear/execute/log) —
  `WorkflowCards.tsx`.
- **Six** trust/governance answers — `TrustAnswers.tsx`, `TrustPillars.tsx`,
  `AsiaTrustBand.tsx` (three shown + "see all six").
- **Four** personas/jobs — `Personas.tsx`.
- **Four** real logo partners — `LogoStrip.tsx` / `public/logos/`.
- Certifications (hedged, exact wording, repeats sitewide — see §4/§5/§8): "SOC 2 Type II:
  audit underway" and "ISO 27001: certification in progress" — **no dates, no auditor
  names, "not held today."**
- Currencies named as supported: **HKD, SGD, USD** (base-currency reporting) — appears in
  `BuiltForAsia.tsx`, `AsiaTrustBand.tsx`, `WhereWeWork.tsx`.
- Regulators named: **SFC, MAS, HKMA** — `BuiltForAsia.tsx`, `AsiaTrustBand.tsx`,
  `WhyNow.tsx`.
- Instrument classes named: **equities, bonds (yield & duration), funds, structured
  notes** — `BuiltForAsia.tsx` (also in the now-deleted FactsBand).
- Markets: **Hong Kong and Singapore** only — no other jurisdictions claimed anywhere.

### (A) Demo/UI recreation figures — never promote to marketing prose
Source book (recurring across `MorningBriefing.tsx`, `CockpitDashboard.tsx`,
`DataStrip.tsx`, advisor persona "Lau Ka-Ming · Hong Kong", as-of stamp "FRI 19 JUN 2026 ·
07:31 HKT"):
- Total AUM: **US$342.6M** (ticks to US$342.8M in the DataStrip's animated variant)
- Households: **44**
- Accounts: **118**
- Today's movement: **+US$994k** (ticks to +US$978k), **+0.29% vs last close**
- Net new money MTD: **−US$2.4M** (withdrawal, Lim Family Office)
- Needs attention: **14** items (ticks to 13) — breakdown "5 urgent · 6 watch · 3
  suggestions" in CockpitDashboard; DataStrip footer differs slightly ("9 with open
  alerts" in one summary variant)
- Named households/entities in the demo cast: Zhang Family, Lim Family Office, Okonkwo
  Family, Lau Ka-Ming (RM), Wong Mei-Ling (desk head approver), Sean Donnelly (dealing
  desk)

DriftChat recreation (Zhang Family Asia Satellite IPS breach scenario):
- Equity 68.4% vs 60.0% target, +8.4pp over, band ±5.0pp, breached 19 Jun 07:02 HKT
- Fixed income 19.2% vs 25.0% target, −5.8pp
- BYD single-position: 11.2% vs 10% cap
- Proposed rebalance: equity to 61.2%, BYD to 9.4%

ResearchAnswer recreation (Fed rate-hold scenario, +25bp):
- Zhang Family: USD bond duration 6.2y, est. impact −1.8%
- Lim Family Office: HKD funding gap, est. impact −0.9%
- Okonkwo Family: USD cash 12%, est. impact +0.3%
- All others: within band, <±0.2%

MorningBriefing/CockpitDashboard attention feed sample entries:
- Okonkwo Family Thematic: NVDA 12.1% vs 10% max single position
- Zhang Family Core: Tencent autocall observation, 03 JUL
- Okonkwo Family Corporate: PRP-2026-0004 awaiting four-eyes
- Lim Family Office: suitability review due 26 JUN

AuditTimeline recreation: proposal **PRP-2026-0002**, "Lim Family Office → Lim Income &
Credit," seven logged events from 16 Jun onward (e.g., "Created PRP-2026-0002 from IPS
breach · fixed income +11.4pp", "Submitted for four-eyes review · 3 lines changed since
v1").

TermSheetDissolve recreation: specimen term sheet, invented issuer "Rheinwald Structured
Products AG," specimen but structurally-valid ISIN **CH1382044167**, 6 pages — Phoenix
Autocallable Note on Tencent, 2027 maturity.

RelationshipScribe recreation: spoken note 0:41 long, filed as 5 artifacts, Lim Family
Office, 19 Jun 2026 15:12 HKT.

ComplianceEvidence recreation: "Q2 2026" review cycle label, "INSPECTION PACK · Q2 2026 ·
ASSEMBLING."

**None of the (A) figures should appear in v3 marketing copy as a claimed statistic** —
they exist only to make the product recreations feel real, per the explicit v2 design
rule quoted above.
