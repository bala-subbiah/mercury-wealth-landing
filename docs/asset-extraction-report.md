# Mercury asset-extraction report — real product UI, for marketing recreation

Source: `/Users/balasubramanian/Desktop/mercury-project/03-Fable-Mercury-V1-Application-Mock-Data`
(read-only study; nothing in that folder was modified). This is the single source
later build agents should use to recreate faithful HTML/CSS versions of Mercury's
real screens for the marketing site's "real product-UI recreations, never abstract
illustration" imagery policy.

`AS_OF` (the app's frozen "today") is **2026-06-19 (Fri 19 Jun)**. Every date/relative
label in the screenshots is anchored to that date. Reporting currency conventions:
`US$1.3M`, `HK$204.9M`, `S$55.4M` — symbol, no space, compact suffix (k/M/B), 1–2
decimals above 1M, tabular-nums mono for all numerals.

Stack notes for fidelity: font is **Geist Variable** (sans/heading) + **Geist Mono
Variable** (all numerals, labels, badges, timestamps). Light theme "Mercury Ink /
Porcelain": background `#fafaf9`, card `#ffffff`, foreground `#1c1917`, primary
(indigo) `#4f5dd3`, border `#e7e5e4`, muted-foreground `#78716c`. Market colours are
the ONLY loud colours in the UI: `--market-up` (green `#0f7b4d`), `--market-down`
(red `#c13538`), `--warning` (amber `#b45309`) — and there's a "red-up" toggle
(East-Asian convention) that swaps green/red semantics, visible in the header as a
"Green up" pill. Workflow/status chips NEVER use market colours — they use
primary/muted/warning/destructive tokens instead. Radius ~0.5rem (rounded-xl cards).
Icon set is **lucide-react** (thin-stroke, 12–16px).

---

## 1. Morning briefing / attention feed

**Screen:** `AdvisorHome` (`src/screens/AdvisorHome.tsx`), route `/` ("Home").
**Screenshot:** `progress-screens/home-light.png` / `home-dark.png`.

**Components:**
- `src/components/home/morning-briefing.tsx` — the hero banner
- `src/components/home/pulse-strip.tsx` — 5-tile ambient strip below it
- `src/components/home/attention-feed.tsx` — the ranked "Needs attention" list (the actual hero of the page)
- `src/components/home/agenda-panel.tsx` — right-rail "Coming up"

**Layout anatomy (top to bottom):**
1. **Morning briefing card** (`rounded-xl border bg-card`, full width): header row with a small sparkle icon + "Morning briefing" label + `Fri 19 Jun · composed from live book signals` in mono, and on the right (desktop only) a tracking-wide uppercase tag `POSITIONS · POLICY · WORKFLOW · CRM`. Below: a bold heading-font greeting line (`Good morning, Sean.`), then a **3-sentence narrative paragraph** with inline **bold** numbers and inline **underlined links** on household names (e.g. "2 portfolios are past the IPS drift band — worst in the **Lim Family Office** book (85.0% vs 60%)"). Below that, a row of small mono **chips** color-coded by tone (urgent=destructive/red, watch=warning/amber, suggestion=primary/indigo, neutral=muted) — not visible as literal text chips in this screenshot but defined in code.
2. **Pulse strip**: 5 equal tiles in a row (2-col on tablet, 5-col desktop): **Total AUM** (US$57.7M, "4 households · 7 clients", 30-day sparkline, links to Book of Business), **Today** (+US$165k, +0.29% vs last close, green, area sparkline), **Net new money · MTD** (−US$250k, red, "withdrawal · Tanaka"), **Needs attention** (14, amber dot, "6 urgent · 8 watch", links to alerts view), **Movers · today** (mini list of top-3 households with sparkline + signed delta, hover tooltip explains the driver instrument).
3. **Two-column body**: left = **Needs attention** feed (flex-1), right = **Coming up** agenda rail (fixed 340px).
   - Needs attention header: "Needs attention" + count badge (14), "Ranked by Mercury" mono tag with sparkle icon, "Open in Book of Business ↗" link.
   - Each row: rank number (01, 02…) + severity dot (destructive/warning/primary) + household name + a small outlined **kind tag** badge (`REVIEW`, `DRIFT`, `TASK`) + one-line issue sentence with **bold** clause + optional micro drift-bar visualization (a thin horizontal 0–100% track with a weight fill and a target tick mark) + right-aligned causal value (e.g. "106d overdue", "85.0% vs 60%") + a small outlined action **Button** (e.g. "Schedule review", "Review rebalance", "Open task") + chevron.
   - Footer: lock icon + "Actions create proposals — nothing executes without approval." (governance principle, repeated everywhere workflow actions appear).
   - Feed caps at 8 rows on Home ("+N more — view the full list in Book of Business"); full list lives in Book of Business `?view=alerts`.
4. **Coming up rail**: muted-background aside; header "Coming up" + "Fri 19 Jun · next 45d"; sections "Today" ("Nothing due today." — guaranteed empty by design), "Next two weeks", "Later" — each row: date + "+Nd" mono, a kind icon (ClipboardCheck=Review, ListTodo=Task, TrendingUp=Maturity/Observation, UserPlus=Prospect), household name (or generic label) + sub-label. Footer: "Scheduled items — exceptions live in the feed."

**Exact vocabulary:** "Morning briefing", "Needs attention", "Ranked by Mercury", "Open in Book of Business ↗", "Coming up", "Nothing due today.", "Nothing scheduled.", severity tags seen live: `REVIEW`, `DRIFT`, `TASK`. Action buttons: "Schedule review", "Review rebalance", "Open task", "Finish & send".

**Live data values (from `home-light.png`, Sean Donnelly's book — adv_donnelly):**
- Greeting: "Good morning, Sean. Your book **gained US$165k (+0.29%)** over the last close. **2 portfolios are past the IPS drift band** — worst in the **Lim Family Office** book (85.0% vs 60%). **3 suitability reviews are overdue** (Müller, Tanaka, Lim). The **Lim** proposal is still in Draft. Net new money is **−US$250k MTD** after the Tanaka withdrawal. CIES: the Lim qualifying value holds at **HK$130.0M**, a HK$100.0M surplus over the HK$30.0M threshold. 2 agenda items land in the next two weeks."
- Pulse tiles: Total AUM **US$57.7M** (4 households · 7 clients); Today **+US$165k** (+0.29% vs last close); Net new money MTD **−US$250k** (withdrawal · Tanaka); Needs attention **14** (6 urgent · 8 watch); Movers today: Lim +US$214k, Tanaka −US$31k, Müller −US$9.5k.
- Feed rows: 01 Müller Family [REVIEW] "Suitability review for 2 household members overdue by 106 days." → 106d overdue, due 2026-03-05, "Schedule review". 02 Lim Family Office [DRIFT] "Lim Income & Credit fixed income +25.0pp over the IPS target (85.0% vs 60%)." → 85.0% vs 60%, weight vs target, "Review rebalance". 03 Tanaka Family [REVIEW] "Suitability review for Tanaka Hiroshi overdue by 69 days." → 69d overdue, due 2026-04-11. 04 Lim Family Office [REVIEW] "…3 household members overdue by 2 days." → 2d overdue, due 2026-06-17. 05 Rajan Family [DRIFT] "Rajan Growth equity +10.4pp over the IPS target (75.4% vs 65%)." → "Review rebalance". 06 Lim Family Office [TASK] "Lim Income rebalance handed to OMS — monitor fills — 14 days past due." → 14d overdue, due 2026-06-05, "Open task".
- Coming up: 28 Jun +9d Müller Family "Compliance check — Müller ESG excl…"; 30 Jun +11d Lim Family Office "Quarterly review pack — Lim Family O…"; 29 Jul +40d Rajan Family "Suitability review due — Vijay Rajan"; 1 Aug +43d Task "Prepare onboarding proposal — Obero…".

**Color semantics:** urgent=destructive red text/border, watch=warning amber, suggestion=primary indigo. Drift micro-bar: fill is warning-amber if over target, chart-2 grey/teal if within. Severity dot colors match.

**Fidelity notes:** greeting narrative is composed from ranked signals, always ≤3 sentences, household names are real inline links. Numbers are always mono/tabular. The governance disclaimer ("nothing executes without approval") is a recurring trust signal worth reusing verbatim in the marketing hero.

---

## 2. Book-of-business cockpit / home dashboard

**Screen:** `BookOfBusiness` (`src/screens/BookOfBusiness.tsx`), route `/book` ("Book of Business").
**Table component:** `src/components/bob/households-table.tsx`.
**Screenshot:** `progress-screens/bob-light.png` / `bob-dark.png`; analytics variants `analytics-donnelly-{light,dark}.png`, `analytics-lau-{light,dark}.png`.

**Layout anatomy:**
- Two tabs: **Households** (roster grid, TanStack table) / **Analytics** (book-structure charts, advisor-scope only).
- Header row: tabs on the left; on the right a quiet **summary strip** in mono: `Book US$57.7M` · `Households 4` · `With open alerts 4` · `NNM MTD −US$250k` (color-coded green/red).
- Households tab: a row of **saved-view pill filters** ("All households", "Open alerts", "Drift breaches", "Reviews due", "Not contacted in 90d", "By custodian", "By segment", "Top by AUM") + a right-aligned search input "Filter households…".
- **Households table columns** (exact headers, sortable via TanStack): `Household` (name + segment badge e.g. UHNW/HNW), `Advisor` (firm scope only), `AUM` (right, compact money), `1D` (right, signed money + signed % change, market color), `YTD` (right, signed %, plus a small excess-vs-benchmark ▲/▼ tooltip chip), `Trend` (sparkline), `Drift` (chip: Within/Approaching/Breached/No targets), `Accounts` (count + custodian-initials tags e.g. `JB` `BO` `HP`), `Mandate` (DPM/APM mono shorthand, tooltip spells out Discretionary/Advisory), `Last contact` (right, relative e.g. "2d ago"), `Alerts` (right, count badge or —).
- Footnote: "One row per household — client, account and portfolio drill-down lives in the Client Cockpit. Row click opens the cockpit."

**Exact vocabulary / values (from `bob-light.png`, Sean Donnelly's book):**
- Saved views: "All households", "Open alerts", "Drift breaches", "Reviews due", "Not contacted in 90d", "By custodian", "By segment", "Top by AUM".
- Rows: **Lim Family Office** [UHNW] S$55.4M, +US$214k +0.52%, −2.85% ▼−12.0% (YTD/excess), 3 accounts (JB/BO/HP), DPM · APM, 2d ago, Drift **Breached** (red chip), 5 alerts. **Tanaka Family** [HNW] US$5.8M, −US$31k −0.53%, +6.12% ▼−13.6%, 1 account (JB), DPM, 25d ago, Drift **Approaching** (amber), 4 alerts. **Rajan Family** [HNW] S$7.2M, −US$8.4k −0.16%, −1.01% ▼−16.5%, 1 account (BO), DPM, 9d ago, Drift **Breached**, 2 alerts. **Müller Family** [HNW] US$5.1M, −US$9.5k −0.18%, −1.37% ▼−21.1%, 1 account (JB), APM, 18d ago, Drift **Approaching**, 3 alerts.
- Drift chip labels: `Within`, `Approaching`, `Breached`, `No targets` (dashed border).

**Fidelity note:** mandate shorthand is always DPM (Discretionary) / APM (Advisory) — a real industry term the design should keep. Custodian initials in this seed: JB (Julius Baer), BO (Bank of Singapore), HP (HSBC Private Bank), plus UBS elsewhere.

---

## 3. Proposal lifecycle (including the AUDIT TIMELINE — confirmed present)

**Screens:** `Proposals` (`src/screens/Proposals.tsx`, board + archive-table toggle, route `/proposals`) and `ProposalDetail` (`src/screens/ProposalDetail.tsx`, route `/proposals/:id`).
**Key components:** `board.tsx`, `proposal-card.tsx`, `proposals-table.tsx`, `governance-strip.tsx`, `allocation-hero.tsx` (+ `VersionSwitcher`), `lines-table.tsx`, `detail-sections.tsx` (`CommentThread`, `DecisionRecord`, `ExecutionCard`), `status.tsx` (`StatusChip`, `RebalanceChip`, `MandateBadge`), **`audit-timeline.tsx` (`AuditTimeline`) — yes, a real, fully-built audit timeline view exists.**
**Screenshots:** `proposals-board-{donnelly,kwan}-{light,dark}.png`, `proposals-detail-okonkwo-{light,dark}.png`, **`proposals-audit-timeline-{light,dark}.png`** (a cropped, presentation-ready shot of just the timeline — ideal source for the marketing "governance act" recreation).

### Board (list screen)
Kanban-style but **not draggable** (explicitly, for governance reasons) — 5 columns matching `BOARD_STATUSES`: **Draft** ("Being authored — not yet shared"), **Sent** ("With the client"), **In Discussion** ("Being negotiated"), **Accepted** ("Approved — heading to execution"), **Executed** ("Handed to the external OMS"). Each column header: status name + count badge. Executed caps at 5 most recent + "view all →". Empty-column copy: "No drafts" / "Nothing sent" / "Nothing in discussion" / "Nothing accepted" / "Nothing executed". Rejected/Expired live only in an archive table (view=table), which reuses the BoB households-table treatment.

### Proposal detail (`proposals-detail-okonkwo-light.png` — proposal PRP-2026-0003)
Top to bottom:
1. **Breadcrumb band**: `Proposals > PRP-2026-0003` + status chip `Executed` (mono reference, uppercase-mono chip).
2. **Header**: avatar-square initials tile ("OF") + heading-font title ("De-concentrate mega-cap tech; diversify into broad equity") + subline `Okonkwo Family → Okonkwo Thematic Equity · UBS UBS-••••5201 · Tan Wei-Jie` + badge row (`APM` mono mandate chip, `Risk Reduction` objective badge, `COPILOT` trigger badge, `Base USD` mono chip, `Copilot · Concentration` sparkle-tooltip chip). Right-aligned 3 hero stats: **Portfolio AUM** US$3.5M, **Est. turnover** 69.2% ("gross · current version"), **In status** 32d ("from the audit trail"). Below: key dates row in mono uppercase labels — `CREATED 10 May` `SENT 11 May` `DECIDED 15 May` `EXPIRES 11 Jun`.
3. **Governance strip** (`governance-strip.tsx`) — the product-principle visual: a horizontal stage tracker. Advisory path = **Draft → Sent → Client decision → Rebalance → (OMS boundary, dashed) → External OMS**; Discretionary path skips client sign-off. Each stage is a circular node (check=done/primary-filled, dashed-outline=upcoming, X=declined) + label + sub-label ("approved", "completed", "fills confirmed"). A dashed "OMS BOUNDARY" pill sits between Rebalance and External OMS with tooltip "Mercury owns the decision side only — approved intent hands off here; orders, fills and settlement live in the external OMS." Header microcopy: "GOVERNANCE PATH · Advisory mandate — client approval gates execution" and right-aligned "NOTHING EXECUTES PAST THE OMS BOUNDARY".
4. **Allocation — before → after** section, sub "pre snapshots equal the portfolio's real weights", right-aligned version pill (v1). Two-column paired horizontal bar charts: **Before — current allocation** vs **After — proposed allocation** (tick mark = IPS target), rows for `EQUI` `FI` `ALTE` `CASH` (asset-class 4-letter codes), each with a colored fill bar + right-aligned % + on the "after" side a signed pp delta (e.g. `-18.0pp`). Footer strip: "Projected drift after 0.0pp · Est. turnover 69.2% gross · Est. cost US$2.4k · Risk score 5/7 · v1 · Tan Wei-Jie · 10 May · 09:00", then a highlighted **RATIONALE** badge + one-paragraph plain-English rationale.
5. **Proposed lines** table — badge "INTENT — NOT ORDERS". Columns: `Instrument` (name + ticker/company sub-line + breach/pair badges), `Action` (chip: Buy/Sell/Switch-In/Switch-Out/Hold, each with directional icon), `Weight → proposed` (current% → proposed% + delta pp), `Est. qty`, `Est. value`, `Est. fees`, `Why` (rationale sentence). Example rows: NVIDIA [breach][pair] Switch-Out 27.8%→10.0% −17.8pp, 4,729 qty, US$621k, US$621 fees, "Reduce NVIDIA from ~28% to the 10% cap."; Vanguard VWRA [pair] Switch-In 0.0%→18.0% +18.0pp; Microsoft [breach] Sell 25.4%→10.0% −15.4pp.
6. **Discussion / Decision / Execution** 2-col grid: `CommentThread` (avatar-initial chips, author-type badge Advisor/Client, "on v1", timestamp, comment body); `DecisionRecord` (Advisory: decision badge "Accepted", "v1 approved by **{clientName}**", `Method` `In-app`/`E-signature`, `Reference` `APR-2026-0001`/`APR-2026-0002`, optional Note; Discretionary: lock icon + "No client approval required — discretionary mandate." + explanatory copy, optionally "shared with the client as a courtesy"); `ExecutionCard` (rebalance chip Pending/Executing/Completed/Partial/Failed, type, `Initiated by`, `Reference` reb_id, `State` copy e.g. "OMS confirmed all fills.").
7. **Audit trail section** — header "Audit trail · every state change, confirmed & logged" + entry count badge, containing the `AuditTimeline`.

### Audit timeline (`proposals-audit-timeline-light.png`) — the "governance act" money shot
A vertical timeline with a thin rail line down the left; each entry: a circular icon badge (FilePlus2=Created, Send=Sent, CheckCheck=Approved, PenLine=Updated, ShieldCheck=Executed, Eye=Viewed [passive/dashed/muted], Download=Exported [passive]) + **bold action verb** + small uppercase-mono **entity type** tag (`PROPOSAL`, `APPROVAL`, `REBALANCE`) + before→after **state chips** (dashed outline "before" chip → arrow → filled primary "after" chip; `∅` glyph when null) + right-aligned mono timestamp (`10 May · 09:00`) + a summary sentence + em-dash + actor name in lighter grey.

Exact captured example (proposal PRP-2026-0003, Okonkwo — 6 entries):
1. **Created** PROPOSAL ∅→`Draft` — "Created proposal PRP-2026-0003 (Thematic de-concentration) — Tan Wei-Jie" · 10 May · 09:00
2. **Sent** PROPOSAL `Draft`→`Sent` — "Sent PRP-2026-0003 for e-signature — Tan Wei-Jie" · 11 May · 09:00
3. **Approved** APPROVAL ∅→`Accepted` — "Recorded client approval (e-signature) for PRP-2026-0003 — Tan Wei-Jie" · 15 May · 15:00
4. **Executed** REBALANCE ∅→`Executing` — "Rebalance handed off to OMS — Tan Wei-Jie" · 16 May · 10:00
5. **Updated** REBALANCE `Executing`→`Completed` — "OMS confirmed all fills — rebalance Completed — Tan Wei-Jie" · 18 May · 10:00
6. **Updated** PROPOSAL `Accepted`→`Executed` — "Proposal marked Executed — Tan Wei-Jie" · 18 May · 10:05

Empty state (design to reuse if needed): shield icon + "No audit entries reference this proposal yet." / "Every state change lands here the moment it is confirmed & logged."

**Exact vocabulary:** Proposal statuses: `Draft`, `Sent`, `In Discussion`, `Accepted`, `Executed`, `Rejected`, `Expired`. Rebalance statuses: `Pending`, `Executing`, `Completed`, `Partial`, `Failed`. Reference formats: proposals `PRP-2026-000N`, approvals `APR-2026-000N`, rebalance ids `reb_<slug>`. Audit actions: `Created`, `Sent`, `Approved`, `Updated`, `Executed`, `Viewed`, `Exported`. Line actions: `Buy`, `Sell`, `Switch-In`, `Switch-Out`, `Hold`. Recurring governance line: "Nothing executes without approval" / "Nothing executes past the OMS boundary" / "Every state change, confirmed & logged."

**Data values — 9 real proposals** (all `src/data/workflow/build.ts`):
- `PRP-2026-0001` "Bring Asia Satellite back within Growth mandate" — Zhang / Zhang Asia Satellite (advisory, In Discussion, v1→v2 after client feedback re: phased BYD trim)
- `PRP-2026-0002` "Add equity sleeve; trim concentrated rates exposure" — Lim / Lim Income & Credit, Accepted → Executing, approved by cli_lim_kc via **In-app**, ref `APR-2026-0001`, note "Approved via the client portal after the investment-committee review."
- `PRP-2026-0003` "De-concentrate mega-cap tech; diversify into broad equity" — Okonkwo / Okonkwo Thematic Equity, **Executed**, approved by cli_okonkwo_ada via **E-signature**, ref `APR-2026-0002`
- `PRP-2026-0004` "Rotate excess fixed income into broad US equity" — Okonkwo Corporate Reserve, Sent
- `PRP-2026-0005` "Top up gold sleeve; trim Alibaba single-name" — Zhang Core, Draft
- `PRP-2026-0006` "Introduce fixed-income ballast; trim US beta and gold" — Lim Global Growth, Draft
- `PRP-2026-0007` "Add Treasury ballast against stretched US valuations" — Okonkwo Global Flagship, **Rejected** ("Client declined")
- `PRP-2026-0008` "Rotate excess fixed income back into HK equity" — Leung, Sent → v2 gradual-rotation
- `PRP-2026-0009` "Deploy bond overweight into core HK equity" — Cheung Flagship, Sent
- Plus one **direct discretionary rebalance** with `proposalId: null` (Pang household) rendered as a standalone "Direct executions" strip, not a board card.

**Fidelity notes:** the version switcher pills (`v1`, `v2` …) show `superseded`/`accepted`/`current` micro-tags. Superseded versions render at reduced opacity with a dashed banner "Superseded version — kept for the record…". The whole proposal workspace is explicitly **read-only** — no send/approve/edit/execute affordances anywhere, which is itself a design principle worth conveying in marketing copy ("the record, not the rails").

---

## 4. Orders / execution

There is **no standalone "Orders" screen** in the app — order/execution status surfaces in two places://

1. **`ExecutionCard`** (`src/components/proposals/detail-sections.tsx`, proposal detail "Execution" panel) — this is the proposal→execution link. Shows a `RebalanceChip` (Pending/Executing/Completed/Partial/Failed), rebalance type, `Initiated by`, `Reference` (`reb_<slug>`), and a plain-English `State` line: "Queued at the OMS." / "With the OMS — awaiting fills." / "OMS confirmed all fills." Footer: lock icon + "Stops at the external OMS — Mercury created no orders and touched no positions." When no rebalance exists yet: "No rebalance yet — execution follows the client decision." (Advisory) or "…follows once the draft is confirmed." (Discretionary), or "Not reached — the proposal ended without execution." (Rejected/Expired).
2. **`Rebalance` data model** (`src/data/workflow/rebalances.ts`) — "this approved proposal was handed off to the OMS for execution," deliberately **stops at the OMS boundary**: statuses are mostly Pending/Executing, at most one Completed; creates no orders and touches no positions/lots.
3. Underlying `ORDER` records exist only in the ledger/activity data layer (`src/data/activity/orders.ts`, one Filled order per historical trade transaction) — not surfaced as its own UI screen; it feeds valuation/holdings, not a user-facing order-status view.

**Design principle to carry into marketing recreation:** Mercury explicitly does NOT show a trading blotter or order book — the product boundary is "decision, not dealing." The repeated phrase "Nothing executes past the OMS boundary" / "external OMS" is the single most important phrase for any execution-adjacent marketing visual — it should show a proposal → governance path → dashed "OMS boundary" hand-off, exactly as the governance strip renders it (see §3), NOT a live order blotter.

---

## 5. Documents / document intelligence

There is **no dedicated Documents screen/list UI** in the current build (no `DocumentsTab` component found), but there is a full **`Document` data model** (`src/data/crm/documents.ts`) with types `KYC Doc`, `Statement`, `Performance Report`, `Proposal PDF`, `Tax Pack`, `Mandate Agreement`, `Factsheet`; statuses `Ready | Generating | Scheduled | Archived`; formats `PDF | XLSX`. Documents attach polymorphically to Household/Account/Portfolio/Client/Instrument/Mandate.

**The real "document intelligence" UI is the structured-note terms panel in the position drawer** — this is the strongest existing asset for a "term-sheet-to-structured-data" marketing recreation:

**Component:** `src/components/cockpit/drawer/position-drawer.tsx` + `src/components/cockpit/drawer/instrument-sections.tsx` (`NoteTerms` function). **Screenshot:** `progress-screens/cockpit-holdings-drawer-note-light.png` / `-dark.png` (foreground focused; background blurred — a Sheet/drawer over the Holdings tab).

**Layout anatomy (right-side slide-out Sheet, ~420px):**
- Header: `NOTE` type badge + `drift +6.4pp` amber chip (right-aligned) → title "UBS Autocallable Note on Tencent 2027" (heading font) → subline `UBS-AC-TENCENT · Structured Note · UBS AG · Zhang Asia Satellite`.
- Stat grid (2 rows × 3 cols, mono numerals): `VALUE HKD` **HK$3.8M** / `WEIGHT` **19.2%** / `YTD` **+12.01%** (green); `QUANTITY` **USD 500k no…** / `PRICE` **98.50% par** / `1D` **−1.77%** (red).
- **NOTE TERMS** section title (tracking-widest uppercase mono), then a `TermRow` list (label left / value right, dashed divider between rows): `Underlying` Tencent Holdings (0700.HK) · `Payoff` Phoenix autocall with down-and-in put · `Autocall trigger` 100% · quarterly obs · `Coupon` "Pays 8.0% p.a. coupon if underlying ≥ 80% of initial on observation" · `Barrier` 65% · Down-and-in · `Capital protection` None · `Maturity` 19 Jun 2027 · in 365d · `Issuer` UBS AG.
- **Barrier/autocall scale visual**: a horizontal 0–120 track with two colored tick marks — amber tick at barrier level (65) labeled "barrier 65", primary/indigo tick at autocall level (100) labeled "autocall 100" — with "0" and "120" endpoints and caption "Scale: % of initial underlying fixing (0–120)."
- **AUTOCALL OBSERVATIONS** section: a wrapped row of date badges (e.g. "3 Jul · in 14d" highlighted as next/primary-filled, "19 Sept", "19 Dec", "19 Mar 2027", "19 Jun 2027" as outline chips).
- **DECOMPOSITION — 2 legs** section: `Zero-coupon bond` "mark 92.0 per 100 · Zero-coupon funding bond to maturity 2027"; `Option` "mark −6.5 per 100 · Short down-and-in put on Tencent, 65% barrier".
- **COST & LOTS**: `Avg cost` USD 100; `Unrealised P&L` −HK$7.5k (red); footnote "No tax lots on file — brought-forward balance (lots are tracked for non-HK books)."

**Second structured note in the seed** (`src/data/securities/structuredProductDetails.ts`): a **Capital-Protected Note** — underlying Hang Seng Index, strike 100%, barrier 0%/None, **100% capital protection**, no periodic coupon (upside participation paid at maturity, participation rate 70%), issuer JPMorgan, maturity 2029-06-19, payoff "100% capital-protected participation note". Good second example for variety in a term-sheet marketing visual (autocall vs. capital-protected).

**Other instrument-type drawer sections** (same component, for other CTI types, useful if the marketing recreation wants variety): Bond terms (Coupon/Maturity/Seniority/Rating/Callable/Dim-sum flag/Issuer), Fund detail (Type/Strategy/NAV/TER/Fund AUM/Distribution/Replication + a Look-through weight-bar list), Equity detail (Class/Dividend yield/P-E/Beta/Stock-Connect flag) + an OHLC candlestick price-history mini-chart (hand-rolled SVG, market-colored up/down bodies), REIT, Money-market, Commodity, Cash fallbacks.

**Fidelity notes:** the barrier/autocall scale bar and the observation-date badge row are the two most visually distinctive, "we actually parsed the term sheet" elements — worth recreating almost verbatim for the doc-intelligence marketing panel. Numbers always "per 100" convention for structured legs. Days-to-maturity always shown as "in Nd" alongside the date.

---

## 6. Relationship workspace

**Status: partially real, partially stub.** Per `PROGRESS.md`, dedicated Pipeline/Tasks screens were built experimentally then **rolled back the same day** — the live routes today (`src/screens/stubs.tsx`) render designed placeholder frames for **Pipeline**, **Tasks**, **Compliance**, **Reports**: an icon tile, heading, one line of copy, an amber "Planned — later Phase 6 milestone" badge, and a "Back to Home" button. Nav sidebar items (`src/components/shell/app-sidebar.tsx`): `Home` `/`, `Book of Business` `/book`, `Pipeline` `/pipeline`, `Proposals` `/proposals`, `Tasks` `/tasks`, `Reports` `/reports`, `Compliance` `/compliance`.

The `Relationship` **tab** inside the Client Cockpit (`src/screens/ClientCockpit.tsx` → `StubTab`) is likewise a stub tab (alongside Structure/Mandate/Activity — Overview/Holdings/Performance/Exposure are the real, built tabs).

**However, the underlying CRM data layer is fully real and rich** — this is what a marketing "relationship workspace" recreation should visualize, styled in the Mercury system even though no finished screen exists to screenshot:

- **Tasks** (`src/data/crm/tasks.ts`): fields `title`, `category` (Rebalance/Client/Compliance/Review/Admin), `priority` (Low/Medium/High), `status` (Open/In Progress/Done/Dismissed — no literal "Overdue"; overdue = Open + past dueDate), `source` (Manual/System Alert/Copilot), `dueDate`, `subjectType`(Household/Portfolio/Prospect/Proposal). Example real rows: "Follow up on PRP-2026-0001 client feedback" (High, In Progress), "Renew suitability profile — Zhang Wei (review due)" (High, Open, System Alert), "Drift-breach alert — Pang Discretionary rebalance" (High, Open, Copilot), "Prepare onboarding proposal — Oberoi Family Office" (High, In Progress).
- **Pipeline / Prospects** (`src/data/crm/prospects.ts`): stages **Lead → Discovery → Proposal → Negotiation → Won/Lost**, fields `type` (Individual/Family Office/Corporate/Institutional), `source` (Referral/Event/Inbound/Webinar/Cold/Existing-Client), `estimatedAum` (Money), `expectedCloseDate`, `lostReason`. Real rows: **Tang Family Office** HK$120M, Proposal stage, expected close 2026-08-15; **Oberoi Family Office** US$200M, Proposal stage; **Keppel Endowment Trust** S$85M, **Won**; **Zenith Family Office** US$150M, Negotiation; **Chiu Wing-Kit** HK$25M, Discovery; **Mok Chi-Lai** HK$18M, Negotiation; **Lefèvre Étienne** US$15M, **Lost** ("Chose incumbent private bank").
- **Interactions** (`src/data/crm/interactions.ts`): types Review/Call/Email/Meeting/Note, each with a `summary`, optional `body`, `occurredAt`, optional `followUpTaskId` — these are the CRM entries that literally became proposals (e.g. int_zhang_001 "Asia Satellite portfolio review — equity drift flagged (BYD ~40%...)" → spawned task_zhang_satellite_prep → became PRP-2026-0001). Good raw material for a "relationship timeline" marketing visual.

**Recreation guidance:** since no finished screen exists, build a Mercury-styled "relationship workspace" recreation using the Households-table/board visual language already established (rounded-xl cards, saved-view pills, mono status chips, avatar-initial tiles) rather than inventing a new visual system — populate it with the real prospect/task rows above so it's internally consistent with the rest of the site.

---

## Canonical dataset (use across ALL marketing recreations)

**Firm & advisor (login/home persona):** Mercury Wealth Partners. Advisor: **Sean Donnelly**, "Team Lead, International & Family Office" (`adv_donnelly`), book = Lim Family Office, Tanaka Family, Müller Family, Rajan Family. As-of date: **Fri 19 Jun 2026** (2026-06-19). Alternative persona/advisor if a second is needed: **Tan Wei-Jie** (`adv_tan`), books Okonkwo Family, Goh, Dubois, Smith. Firm principal: **Audrey Kwan**.

**Hero households (use these three as the marketing "cast"):**
- **Zhang Family** — Greater China UHNW, HK$204.9M+ book scale, advisor Lau Ka-Wai (`adv_lau`), CIES-qualifying, portfolios: Zhang Core Balanced (Discretionary), **Zhang Asia Satellite** (Advisory — holds the UBS Autocallable Note on Tencent), Zhang Trust Global (Discretionary). Client: Zhang Wei. Custodians: UBS, Julius Baer.
- **Lim Family Office** — Singapore family-office UHNW, **S$55.4M**, advisor Sean Donnelly, custodians Julius Baer (JB), Bank of Singapore (BOS), HSBC Private Bank. Members: Lim Kheng-Choon, Lim Holdings Pte Ltd, Lim Family Foundation. Portfolios: Lim Global Growth (Discretionary, S$15.1M), Lim Income & Credit (Advisory, S$26.6M — the one with the drift breach), Lim Foundation Endowment (Discretionary, S$13.7M). CIES met. YTD −2.85% vs benchmark +9.19% (Bloomberg Global Aggregate Bond Index).
- **Okonkwo Family** — international cross-border UHNW, US$28.1M+, advisor Tan Wei-Jie, custodian UBS (acct UBS-••••5201). Client: Adaeze Okonkwo. Portfolios: Okonkwo Thematic Equity / Global Flagship / Corporate Reserve.

**Currencies/AUM figures to reuse:** Total book AUM (Donnelly view) **US$57.7M**; Lim Family Office **S$55.4M**; Zhang Family **HK$204.9M**; Okonkwo Family **US$28.1M**; Okonkwo Thematic Equity portfolio **US$3.5M**. Day P&L **+US$165k (+0.29%)**. NNM MTD **−US$250k** (Tanaka withdrawal).

**Canonical structured note** (for the doc-intelligence recreation): **"UBS Autocallable Note on Tencent 2027"**, ticker `UBS-AC-TENCENT`, issuer **UBS AG**, underlying **Tencent Holdings (0700.HK)**, payoff **Phoenix autocall with down-and-in put**, autocall trigger **100% quarterly**, coupon **"Pays 8.0% p.a. coupon if underlying ≥ 80% of initial on observation"**, barrier **65% down-and-in**, capital protection **None**, maturity **19 Jun 2027**, value **HK$3.8M**, weight **19.2%**, YTD **+12.01%**, quantity **USD 500k notional**, price **98.50% par**, next observation **3 Jul 2026 (in 14d)**. (Secondary example if a capital-protected note is needed: JPMorgan-issued Capital-Protected Note on the Hang Seng Index, 100% protection, 70% participation, maturity 2029-06-19.)

**Canonical proposal** (for the drift→proposal and governance/audit recreations): **PRP-2026-0003**, "De-concentrate mega-cap tech; diversify into broad equity", Okonkwo Family → Okonkwo Thematic Equity, advisor Tan Wei-Jie, mandate APM (Advisory), status **Executed**, portfolio AUM US$3.5M, est. turnover 69.2%, rationale "Five mega-cap names each exceed the 10% Max Single Position cap (NVDA ~28%, MSFT ~25%, AAPL ~16%, GOOGL ~15%, AMZN ~14%)…", approval **APR-2026-0002** via **E-signature**, rebalance **Completed**. Its 6-entry audit timeline (verbatim in §3 above) is the canonical "governance act" sequence — reuse it exactly for the audit-timeline marketing component.

**Alternative proposal for a "still in motion" state** (if the drift→proposal flow needs a not-yet-executed example): **PRP-2026-0002**, "Add equity sleeve; trim concentrated rates exposure", Lim Family Office → Lim Income & Credit, advisor Sean Donnelly, mandate Advisory, status **Accepted → Executing**, approval **APR-2026-0001** via **In-app**, drift **fixed income +25.0pp over target (85.0% vs 60%)**.

---

## Recreation priorities → marketing components

1. **Self-composing morning briefing (hero)** → recreate `MorningBriefing` + `PulseStrip` + top of `AttentionFeed` almost verbatim (§1). Use the Sean Donnelly greeting/data captured above, or restyle with Zhang/Lim/Okonkwo hero households for brand consistency. This is the single richest, most "wow" screen and should drive the site's hero visual — the narrative-paragraph-with-inline-links pattern plus the ranked feed rows is distinctive and easy to fake convincingly.
2. **Cockpit dashboard** → recreate the `BookOfBusiness` households table (§2, exact columns/chips/values above) for a "book at a glance" section, AND/OR the `ClientCockpit` header + KPI strip + Allocation-vs-IPS donut + Performance-vs-benchmark line chart (from `cockpit-overview-hhlim-light.png` — Lim Family Office, S$55.4M, drift +25.0pp, YTD −2.85% vs benchmark +9.19%) for a "single household 360" section. Both are real, fully-built, high-fidelity screens.
3. **Drift → proposal chat/flow** → base on the Copilot panel's proposed actions (visible in `cockpit-overview-hhlim-light.png` right rail: "Review rebalance / Explain the drift" against the Lim drift signal) chained into the `AllocationHero` before/after bars and `LinesTable` from PRP-2026-0003 or PRP-2026-0002 (§3). The before→after paired bar chart with pp deltas is the key visual to nail.
4. **Audit timeline (governance act)** → recreate `AuditTimeline` near-verbatim using the captured PRP-2026-0003 6-entry sequence (§3) — action icon, entity-type tag, before→after state chips, mono timestamp, actor attribution. This is the strongest "trust" visual in the whole app and should be reused essentially as-is for the governance marketing section.
5. **Term-sheet-to-structured-data (doc intelligence)** → recreate the `NoteTerms` drawer panel (§5) using the UBS Autocallable Note on Tencent 2027 canonical data: header stat grid, Note Terms rows, barrier/autocall scale bar, autocall observation-date chips, 2-leg decomposition. This is a genuinely unique, hard-to-fake-looking visual (nobody expects a marketing site to show bond-decomposition legs) and should be a standout proof-of-product panel.

**Not recommended as a recreation source:** Pipeline/Tasks/Compliance/Reports screens — these are literal placeholder stubs in the real app (§6). If the offerings map requires a "relationship workspace" visual, design it fresh in the Mercury system using the real prospect/task data listed in §6 rather than screenshotting/tracing a stub.
