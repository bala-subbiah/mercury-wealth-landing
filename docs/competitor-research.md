# Mercury Wealth — Competitor & Copy Research for the Landing Page

*Researched 2026-08-12 (five parallel web-research passes over live sites). Purpose: find
feature overlap with Mercury's actual capabilities and mine copy/messaging patterns for the
landing page — not just list competitors.*

**Mercury's capability set used as the overlap yardstick** (from `docs/one-pager/`):
book-of-business cockpit · morning briefing / attention feed · mandate-aware monitoring ·
proposals with governance (versions, approvals, e-sign, audit timeline) · proposal-to-order
execution · bonds + structured-notes coverage · relationship workspace · immutable audit log.

---

## 1. Executive summary

Sixteen companies studied across four rings:

| Ring | Companies | Relationship to Mercury |
|---|---|---|
| Closest-in-spirit | **Evooq**, **Performativ**, **Assetmax/Infront**, **WealthArc** | Same product category (EAM/private-bank front office) |
| Direct regional | **Privé Technologies** (HK), **Canopy** (SG), **Wealth Dynamix** (SG office) | Same buyers/geography, different axis each |
| Global enterprise | **Addepar**, **Aladdin Wealth**, **InvestCloud**, **Objectway**, **Avaloq**, **additiv**, **Landytech**, **Masttro**, **Altruist** | Overlap on 1–2 capabilities each, different altitude or geography |
| Copy inspiration (not competitors) | **Capsa AI**, **Reflexivity** | AI-native finance products; how to present intelligence credibly |

**The headline finding: the intersection Mercury occupies is empty.** Nobody in the set
combines (a) a book-first advisor cockpit, (b) governance-native proposals
(versions → approvals → e-sign → immutable audit timeline as the *product*, not plumbing),
and (c) Asia's operating reality (HK/SG, multi-custodian/multi-booking-centre EAM setups,
structured-note-heavy books). Performativ and Assetmax are functional twins but
Europe-locked; Privé is regional but a modular toolbox with thin governance; Evooq is
closest in spirit but sells an enterprise suite and has *no relationship workspace and no
visible e-signature/approval-timeline UX*.

---

## 2. Overlap matrix (Mercury capability × competitor)

Legend: ● strong · ◐ partial · ○ none/weak

| Mercury capability | Evooq | Altruist | Privé | Performativ | Assetmax | WealthArc | Canopy | Aladdin | Addepar | WDX |
|---|---|---|---|---|---|---|---|---|---|---|
| Book-of-business cockpit (multi-custodian, multi-ccy) | ◐● | ◐¹ | ● | ● | ● | ● | ●² | ◐ | ● | ○ |
| Morning briefing / ranked attention feed | ◐³ | ○ | ○ | ○ | ○ | ○ | ◐⁴ | ◐⁵ | ○ | ○ |
| Mandate-aware monitoring (advisory + DPM) | ● | ◐ | ● | ● | ● | ◐ | ○ | ● | ○ | ○ |
| Proposals with governance (e-sign, audit timeline) | ◐⁶ | ○ | ◐ | ●⁷ | ◐ | ◐ | ○ | ◐ | ○ | ◐⁸ |
| Proposal-to-order execution | ◐● | ◐ | ● | ● | ● | ● | ○ | ○ | ○ | ○ |
| Bonds + structured notes | ●⁹ | ●¹⁰ | ● | ◐ | ◐ | ◐ | ◐ | ●¹¹ | ◐ | ○ |
| Relationship workspace (tasks, pipeline, docs) | ○ | ○ | ◐ | ◐ | ◐ | ◐ | ○ | ○ | ○ | ● |
| Immutable audit log | ● | ○ | ◐ | ● | ● | ◐ | ○ | ◐ | ○ | ◐ |

¹ Single-custodian by design (they *are* the custodian), USD-only.
² Data layer only — 250+ feeds, daily reconciliation; explicitly not a workflow cockpit.
³ Breach detection + "who needs attention now"; no single ranked daily-briefing artifact.
⁴ AI agents "review accounts daily and surface exceptions" — nearest gesture in the set.
⁵ "Targeted nudges" to advisors, sold via the CIO office.
⁶ Proposal *generation* is their hero (claims: 20-min proposals, 15× volume, 9/10 accepted); no visible e-signature or approval-timeline UX.
⁷ "Simulate, compare, generate compliant documentation for approval and archiving" + immutable audit trails.
⁸ Document e-sign in onboarding/CLM context only.
⁹ Ahead of Mercury: Edgelab risk engine (600K+ instruments daily) + Elus structured-product marketplace.
¹⁰ 2025–26 push: digital fixed-income screens + structured products via BondNav/iCapital/Halo.
¹¹ Recently added Luma structured-product data.

**Consequence for copy:** "full instrument coverage incl. structured notes" is **no longer a
uniqueness claim** — frame it as *table stakes done natively for Asia's structured-note-heavy
books*. The differentiation load is carried by the morning briefing, book-first framing,
governance-as-workflow, and the Asia story.

---

## 3. Competitor profiles (condensed)

### Ring 1 — closest in spirit

**Evooq** (Lausanne + Singapore; clients DBS, UOB, Maybank, J.P. Morgan strategic investment
Dec 2022 — *not* Lombard Odier; APB "Best Front Office Solution" 2025). Enterprise suite:
Evooq Wealth (banks), Wealth IAM (EAMs, bundled back-office service), Edgelab (risk), Elus
(structured-product marketplace). Positions as "the operating system for wealth management."
Strong on monitoring, proposal generation, audit trail, compliance automation (MiFID II/
FinSA/MAS/HKMA). **Gaps Mercury attacks: no relationship workspace at all; no visible
e-signature or approval-timeline UX.** Best copy in the study — see §4.

**Performativ** (Copenhagen/London; €100B+ AUM, custodian connectivity UBS/Julius Baer/
Nordea). Closest end-to-end functional competitor: multi-custodian PMS, FIX/STP order
management, pre/post-trade suitability, compliant proposal workflows, immutable audit
trails, AML/KYC, client portal. Hero: "The Operating System Powering Tomorrow's Wealth
Management." **Europe-first, zero Asia story, no attention-feed concept, weak book-first
framing.**

**Assetmax / Infront** (Zurich; was the Swiss EAM PMS gold standard, acquired 2022). On
paper the functional twin: multi-custody + reconciliation, proposals + suitability, audit
trails, mass rebalancing, client portal, invoicing. **Post-acquisition the EAM voice is
buried in suite-speak — an identity opening with EAMs.** Europe-only framing. Mercury ≈
"Assetmax reimagined for Asia, book-first."

**WealthArc** (Swiss; 170+ custodian connections, EAM/FO focus). PMS + OMS with trade
proposals, KYC/CRM, risk analytics. Proposals are an OMS feature, not a governed workflow.
Hero is pure ops-efficiency ("Manage wealth data more efficiently"). Best element:
customer-voiced ROI ("saves us around 140,000 CHF a year"). No Asia story.

### Ring 2 — direct regional

**Privé Technologies** (HK, 2011; ~70 institutional clients incl. Citibank/UOB/HSBC;
16 markets). **The direct regional competitor.** Modules: onboarding/KYC, AI portfolio
construction, real-time monitoring + compliance, order management, RM Sales Dashboard,
structured products. "Lego block" modularity — reads as a toolbox of parts, not one
coherent advisor experience. Thin on governance depth; no morning-workflow concept.
Mercury's single-cockpit story is the direct counter.

**Canopy** (SG + HK; $120B+ tracked, 250+ custodian feeds, ISO 27001, since 2017). Pure
data/reporting layer for FOs/EAMs/trustees — "coexist or partner" more than compete. Its AI
agents surfacing daily exceptions are the nearest thing to Mercury's attention feed. Hero:
"All your wealth, finally understood." Nice pattern: per-persona problem one-liners (EAMs:
"bank-grade reporting on a lean team").

**Wealth Dynamix** (London, owned by Indosuez/Crédit Agricole; Singapore APAC HQ; clients
UBS, UOB). CLM only: onboarding, pipeline, 360° client view, compliance-embedded workflows,
doc management + e-sign. Zero portfolio capability. Overlaps Mercury's relationship
workspace axis only. Strong pattern: outcome-quantified testimonials ("90% faster
onboarding").

### Ring 3 — global/enterprise (one line each)

- **Altruist** (US): AI-forward custodian for RIAs; software free, custody monetized —
  opposite architecture to Mercury ("one platform" = one custodian). Superb copy playbook
  (§4). No feed, no proposal governance, no workspace; real 2025–26 fixed-income/SN push.
- **Aladdin Wealth** (BlackRock): institutional risk brain, exception-based reviews, nudges;
  sold to global banks via CIO office. Trust = parent brand + scale numbers; site gated and
  un-crawlable — Mercury wins on openness by showing the product.
- **Addepar**: multi-custodian data/analytics/reporting ($9T on platform); stops short of
  trading/proposals/workflow. Generic transformation hero; stats bar does the persuading.
- **InvestCloud**: US enterprise suite ($84T claim); Advisor Workspace overlaps cockpit
  concept. Abstract feeling-first hero ("A Smarter Financial Future") — cautionary pattern.
- **Objectway**: European legacy front-to-back; homepage reads like investor relations;
  eight audience segments dilute the message. Anti-pattern reference.
- **Avaloq** (strong HK/SG installed base): advisory workflows, suitability automation,
  portfolio health checks, Engage (compliant WhatsApp/WeChat chat, built for HK). Sells
  multi-year core transformations — different altitude. Product page headline is literally
  "Investment management": big-suite blandness to contrast against.
- **additiv** (now Temenos): embedded wealth-as-a-service, sold to heads of digital, B2B2C.
  Great pattern: case studies led by one startling metric ("CHF 40m+ in 50 days").
- **Landytech / Sesame** (London; $250bn+ reported): aggregation + MSCI analytics +
  alerts; no proposals/execution. Best pain-first hero in the wealth set: "Spend more time
  building investment value, not spreadsheets." Offers a self-guided product tour — rare
  low-friction "see it" path.
- **Masttro** (UHNW/FO data platform; 700+ feeds): aggregation + doc AI. Best headline in
  the enterprise set: "Complex wealth deserves a complete picture" (8 words, concrete).
  Publishes a 12–14-week deployment timeframe on the site — disarming concreteness.

### Ring 4 — copy inspiration (AI-native, not competitors)

**Capsa AI** (private-capital AI OS; $18M Series A Aug 2026). Two-hero strategy: homepage
claims the category ("The AI Operating System for Private Capital"), product page names the
daily pain ("Stop starting from scratch"). Feature grammar: *verb + concrete artifact +
time compression* ("Generate IC materials in minutes"). Markets constraints as features:
SOC 2, "No training on client data," "You own all outputs," source traceability as pillar
one. AI-as-colleague framing ("like having an AI member on our IC").

**Reflexivity** (ex-Toggle AI; institutional investment analysis; SoftBank/MUFG investors,
Singapore FinTech Festival award). Benefit-triplet hero ("Faster Insights. Better Analysis.
Greater Confidence."). Six parallel capability cards, hub-and-spoke IA. The standout: a
six-pillar security section written like DDQ answers — **"No Hallucination"** (markets what
the AI *refuses* to do), "Auditable Analysis," data isolation, "air-gapped from public AI
models." Data-sources table as a trust device. 3-step how-it-works per feature.

---

## 4. Copy & messaging patterns to steal

1. **Advisor-inner-voice pain headlines** (Evooq): "Stop logging into six banks every
   morning," "Never ask 'Did I miss anything?'", "Sleep well before audits." Write
   Mercury's sections as the advisor's 7:30am anxieties.
2. **Two-fragment declarative headlines** (Evooq): "Compliance. Off your mind." / "Idea to
   trade. One flow." → Mercury: "Your whole book. One screen." / "Governance. Built in,
   not bolted on."
3. **One quantified stat repeated everywhere** (Altruist's "13 weeks saved/year"). Mercury
   needs its own single number (e.g., minutes to a client-ready morning brief).
4. **Pain quantified in the customer's voice** (Altruist's "ten hours at Schwab → one hour"
   testimonial; WealthArc's "140,000 CHF a year"). Even as persona vignettes pre-customers,
   the contrast-number format is the steal.
5. **De-risking timeline** (Altruist's 30-day migration stepper; Masttro's published
   12–14 weeks): "custodian feeds connected → book live in N days."
6. **Name the regulators** (Evooq): MAS/HKMA (and SFC) on-page is cheap, high-credibility
   Asia signaling nobody else does.
7. **Compliance as relief, not feature** (Evooq): checked before you act, "without even
   thinking about it" — never a checklist.
8. **Verb-first workflow cards in buyer jargon** (Capsa grammar): brief the book · catch
   the breach · draft the proposal · clear the approval · execute the order · log
   everything. Name real artifacts (mandates, term sheets, IPS, custodian feeds).
9. **DDQ-style governance pillars** (Reflexivity): one blunt claim + one sentence of
   mechanism each — immutable audit log, versioned proposals, four-eyes approvals, e-sign
   trail, data residency. For Mercury this doubles as a *feature* section.
10. **Show mechanism, not magic** (both AI-native sites): 3-step how-it-works (ingest →
    check against mandate → advisor approves) bakes in human-in-the-loop framing.
11. **AI as the junior colleague who prepped overnight** (Capsa); the advisor decides.
    Optionally market what the AI *won't* do (Reflexivity's negative-space claims).
12. **Possessive autonomy voice** (Altruist): "your book," "your mandates," "your booking
    centres" — EAM principals who left private banks share breakaway-RIA psychology.
13. **Consolidation subhead** (Altruist): one sentence listing the jobs unified —
    monitoring, proposals, approvals, orders, audit — in one place.
14. **Demo-led CTA pair**: primary "see it in action" + no-form self-serve path. Mercury
    has a *live demo app* — "show, don't gate" beats every gated enterprise site
    (Aladdin, Objectway) instantly.
15. **Per-persona one-liners** (Canopy's /for/ page): RM / firm principal / compliance —
    matches the one-pager's "Who it's for" table.

## 5. Category clichés to avoid

- **"One platform / single source of truth / unified view"** — all seven Asia/EAM players
  lead with consolidation; it's table-stakes vocabulary.
- **"Powering…" heroes and "Next Era / future of wealth"** future-tense grandiosity
  (Avaloq and Privé have nearly identical "Powering…" heroes).
- **The suite/"operating system" framing** — claimed by Evooq, Performativ, and Landytech
  already. Mercury is the *focused cockpit against the suite*: no 18-month integration.
- **Efficiency math as the whole story** ("80% faster reporting") — real but commoditized.
- **AI-sprinkling** — every site now has a near-identical AI-assistant claim. Don't lead
  with AI that can't be demoed safely.
- **Identical trust stack** (AuM billions + ISO badge + logo carousel + Book a demo) —
  present-but-undifferentiating; also don't fake social proof pre-traction: substitute
  product specificity (real screenshots, named workflows, thresholds) and domain fluency.
- **Anonymized case studies** ("a bank in the region…") — read as vapor without a logo wall.
- **Abstract feeling-first heroes** (InvestCloud) and **category-label headlines** (Avaloq's
  "Investment management") — the only screen a cold visitor sees, wasted.
- **Enterprise-architecture sections** (hybrid-cloud diagrams, core-banking connectors) —
  signal a procurement cycle Mercury doesn't want to evoke.
- **"Free/cheap" as lead value prop** (Altruist can, because custody subsidizes software).

## 6. Whitespace Mercury owns (the positioning)

1. **The morning.** Nobody narrates the advisor's day. "Know exactly what needs your
   attention before your first client call" is vivid, differentiating, and demoable —
   the hero should *be* the attention feed.
2. **Book-first language.** Everyone says portfolio/account; the unit of the advisor's
   anxiety — the book — appears nowhere. "Your whole book, not 400 accounts."
3. **Governance as the workflow.** "From flagged drift to signed proposal to placed order —
   one audit spine" is made by no one. "The audit trail writes itself" is unclaimed.
4. **Asia's operating reality, stated plainly.** Multi-booking-centre (SG+HK+CH), SFC/MAS/
   HKMA suitability regimes, bonds/SN-heavy books. Only Canopy claims APAC, and only for
   data. Instant insider credibility.
5. **Show, don't gate.** Against demo-request walls, a page that shows the actual cockpit
   (with a live demo behind the CTA) reads as instant credibility.
6. **"Every custodian, one cockpit"** — the axis Altruist structurally cannot claim and the
   suites bury.

## 7. Landing-page structure implications (pre-mockup synthesis)

Working section order, drawing on the best patterns above (to be reconciled with the
Gemini mockup when shared):

1. **Hero** — morning-briefing moment: pain-first headline in the advisor's voice + one-line
   consolidation subhead (jobs unified) + dual CTA (open the live demo / see how it works)
   + the cockpit itself as the visual (attention feed ticking in).
2. **Credibility strip** — domain-fluency signals, not fake logos (regulators named,
   custodian/multi-ccy specifics, instrument coverage).
3. **Six workflow cards** — verb-first, artifact-specific (Capsa grammar).
4. **Governance act** — the proposal's life as a visual thread: draft → versions →
   approval → e-sign → order → immutable timeline. Hero screenshot = audit timeline.
5. **Built-for-Asia section** — booking centres, currencies, SFC/MAS/HKMA, structured
   notes as first-class.
6. **AI/briefing mechanism** — 3-step how-it-works, junior-colleague framing, negative-space
   claims.
7. **Persona one-liners** — RM / principal / compliance.
8. **DDQ-style trust pillars** — audit immutability, data residency, no-training claims.
9. **Final CTA** — "Open the live demo," no form.

Design register: institutional gravitas (HK/SG buyers, their COOs and compliance heads),
plain language, real product screenshots — never abstract illustrations; single relentless
CTA; substance on security early.

## 8. Build note — Hallmark skill

Hallmark (usehallmark.com, by nutlope) is an open-source design skill that enforces eight
design rules and bans AI-generated-looking anti-patterns (purple-gradient heroes,
centered-everything, generic icon tiles). Modes: build / study / audit / redesign.
**Not yet installed in this environment.** Install with:

```bash
npx skills add nutlope/hallmark
```

Lands in `~/.claude/skills/hallmark/`. Run before the build phase; `study` mode can also
extract design DNA from the Gemini mockup and reference sites without copying them.

---

*Full per-competitor reports (homepage section-by-section breakdowns, CTA analysis,
sources) were produced by the five research passes on 2026-08-12; this document is the
consolidated synthesis. Fact worth retaining: Evooq's marquee relationship is a J.P. Morgan
strategic investment (Dec 2022) — an earlier Lombard Odier association claim did not verify.*
