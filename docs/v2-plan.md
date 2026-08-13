# Mercury Site v2 — Final Plan

*This is the authoritative plan for v2 of the Mercury Wealth marketing site. It
supersedes all earlier planning notes. Companion doc: `docs/critique-v1.md` (the
consolidated critique of v1 — read it for the detailed findings behind each task;
file/line references for every fix live there).*

*Execution model (per CLAUDE.md): the session model plans, delegates, and validates;
implementation is done by Sonnet 5 / Opus 4.8 subagents. Every task below is scoped to
be independently delegable. Validation gates are run by the orchestrator after each
wave.*

---

## 1. Objective and principles

v1 is an excellent product brochure with top-decile copy and live product recreations,
but it cannot convert (dead primary CTA), cannot be contacted, has no company identity
for an investor reader, and ships several claims a diligence reader can falsify.

v2 turns it into a company's digital identity that serves four readers, under the
principles below.

**Audiences.** Personas (who reads the page) and segments (what firm they sit in) are
distinct; both are addressed deliberately:

| Persona | Who they are | Primarily served by |
|---|---|---|
| Advisor / RM | Daily user, internal champion; the copy's "you" | Home hero, /cockpit, the recreations |
| Economic buyer | EAM founding partner · private-bank front-office head/COO · brokerage head of wealth · family-office principal | Home (problem act, engine cards, adoption model), traction line, contact path |
| Gatekeeper | Compliance & ops; IT/security reviewer | /trust (forwardable), governance act, honest-status language |
| Investor | Reads for team, traction, why-now | /company, traction line, nav "Company" |

(Minor personas — candidates, press — are Wave P2: careers stub, insights stub.)

**Segments.** The named segments stay specific: external asset managers, private
banks, brokerages — Hong Kong & Singapore — plus family offices per owner decision
(§6 #11): a multi-family office operationally is an EAM, so the story ports verbatim;
add to the "who it's for" layer and persona cards, keep the hero's named list short.
Do NOT broaden to institutional/fund asset managers — different buyer, different
tooling category; it would dilute the positioning. "Wealth management firms" may be
used as umbrella prose, never as the named list.

Principles:

1. **Problem → solution → proof.** The home page names what's broken before it presents
   the engines. Today it opens with the solution.
2. **Short, confident homepage; depth on detail pages.** Home targets ≤ ⅓ of v1's word
   count. Every act must communicate reading only its headline + first sentence.
3. **Complete company layer.** Contact, legal, trust, and about pages — the hygiene
   signals any diligence reader looks for.
4. **Show, don't gate.** The live product recreations remain the primary proof. The
   demo stays no-form.
5. **Integrity is non-negotiable.** No invented claim, statistic, name, relationship,
   or customer behaviour. Numbers appear only if traceable to the product dataset or
   approved by the owner. Honest-status language (e.g. the certifications wording)
   is kept verbatim.
6. **Voice is the moat.** Keep the existing copy register: advisor-inner-voice,
   two-fragment declaratives, domain-correct vocabulary, zero hits on the banned list
   ("operating system", "powering", "next era", "single source of truth", "seamless",
   "empower", "AI-powered", "unlock", "leverage", "transform", "end-to-end",
   "holistic", "world-class", "supercharge").

## 2. Target sitemap

```
/                        Home — ~7 acts (see §3)
/cockpit/                Flagship engine page (re-cut: 14 → ~9 sections)
/document-intelligence/  Second engine page (new)
/trust/                  Security & governance page — DDQ-forwardable
/company/                About: founder, why-now, what exists today, contact
/legal/privacy/          Real page
/legal/terms/            Real page
404.html                 + host config (trailing-slash redirects)
```

- Only these two engines get pages now. The other four (Relationship Scribe,
  Book-aware Research, Compliance Copilot, Workflow Automation) stay as rich home
  cards + /cockpit cross-links until they have enough content to justify pages — a
  thin detail page is worse than a rich card.
- Nav (desktop, visible links — no hamburger above mobile): Cockpit · Engines(#) ·
  Trust · Company · [Open the live demo]. Mobile bar keeps a compact CTA visible.
- Footer on every page: contact email, LinkedIn, legal links, trust link, HK/SG
  presence line, entity/© line, CTA.

## 3. Home page spec (in order)

1. **Hero.** Headline (decided): keep "The engines that run your wealth business."
   Add an orienting clause in the hero support position so first-time readers aren't
   decoding the metaphor — e.g. "Six licensable engines — briefing, documents,
   workflows, meetings, research, compliance — each valuable alone, one spine
   underneath." (exact wording in the copy pass). Subhead: six engines, license one
   or all. Hero visual: MorningBriefing recreation (unchanged). CTA pair: "Open the
   live demo" (wired) + "See the engines". No traction line (none claimed — §6).
2. **Problem act.** Short — two to four sentences before any product: scattered
   custodian portals, the spreadsheet holding the real numbers, drift discovered at
   quarter-end, approval trails in inboxes. Source: `docs/one-pager.html` "Why Mercury
   exists". This is the conversion beat v1's home is missing.
3. **Proof strip.** Logo row stays with "WORKING WITH" (relationships confirmed real
   by owner — §6 #4). Drop the redundant buyer-list line beneath it.
4. **Engine cards ×6.** Keep the existing card copy verbatim (name + one-line job +
   one-line mechanism — already the best-calibrated writing on the site). One line of
   spine context in the act intro: adopt one and it works alone; add another and both
   get sharper. Cockpit card → /cockpit/, Document Intelligence card →
   /document-intelligence/.
5. **Flagship act.** 2–3 sentences + CockpitDashboard recreation + AuditTimeline
   strip (the audit-log claim finally gets home-page evidence). Link → /cockpit/.
6. **Asia + trust strip.** The three Asia pillars (SFC·MAS·HKMA / HKD·SGD·USD /
   multi-custodian) and three trust pillars (immutable log, data residency, no
   training on client data) in one compact band. Link → /trust/.
7. **Final CTA + footer.** Offer, not defence: "The cockpit, a real book with drift
   already in it. No form." (Retire "Open it. It's the actual product.")

Cut from home: SpineAct as its own act (its argument moves into act 4's intro),
the full DocIntelAct (moves to its page), the founder statement (moves to /company).

## 4. Waves and tasks

### Wave P0 — "Safe to send the URL"

*Everything that makes the current site unsafe to show: dead links, missing hygiene,
and claims a reader can falsify. Independent of the redesign; do first.*

1. **Wire the primary CTA** — `https://mercury-wealth.vercel.app` in all placements,
   `target="_blank" rel="noopener"`; add CTA to footer and mobile bar.
2. **Contact path** — contact section with `oscar.chan@mercury-digital.io` + the
   LinkedIn company page (§6 #2); "Request a conversation" secondary path site-wide.
   Reword "NO FORM · NO SALES CALL" to what stays precisely true once contact exists
   (demo remains no-form; a conversation is available, never required).
3. **Legal hygiene** — real Privacy + Terms pages; footer "© Mercury Wealth" (§6 #3).
4. **Integrity fixes** (details in critique doc):
   - Cut "Half the books in this region are structured-note heavy" → "Structured
     notes are not an edge case in this region…"; soften "most systems in this
     region don't clear it" → "not every system in this region clears it".
   - Recast "Firms that begin here keep the cockpit for year two" as an offer, not an
     observed customer pattern.
   - "Six questions every DDQ asks" → "…every DDQ gets to."
   - Founder statement: ONE version, ONE place (/company when it exists; TrustCondensed
     block until then). Byline "Oscar Chan · Co-Founder & CEO" stays — he is real
     (§6 #5); the defect being fixed is the two divergent versions, not the name.
   - AuditTimeline: add the four-eyes node with a second named approver ("Cleared by
     Wong Mei-Ling · desk head" per the copy deck); align PRP id and actor names with
     the sanctioned list (Lau Ka-Ming / Sean Donnelly / Wong Mei-Ling).
   - Reconcile the demo dataset: one book, consistently sized across all recreations
     (target US$300M+, 40–80 households; currently US$57.7M/4 households in the
     dashboard vs "20 households · 47 accounts" in the hero vignette).
   - Replace "ISIN CH1234567890" with a structurally plausible ISIN (valid check
     digit); consider an invented issuer instead of a real bank's name.
   - Logo strip: keep per §6 #4 (relationships confirmed real; "WORKING WITH" label
     stays; no invented detail beyond it).
5. **Deploy + SEO hygiene** — deploy to Vercel; canonical tags with the real domain;
   `sitemap.xml`; `og:image` (1200×630, navy + wordmark + one-liner, site design
   language) + Twitter card tags; 404 page; drop `public/v1/` (7MB) from the deploy;
   Vercel Analytics (no cookie banner needed).

### Wave P1 — "The identity layer"

6. **Home restructure** per §3, including the problem act and skim-layer rule.
   De-metaphor the headlines: at most two "engine" uses in headlines site-wide;
   promote the strongest existing lines — "The audit trail writes itself" → governance
   headline (retiring "Built in, not bolted on", which is both tired and a near-lift
   of a competitor's live line); "Nothing quietly fails to happen" → automation
   headline (retiring "The work runs itself").
7. **/company/ page** — founder statement (single version, byline Oscar Chan ·
   Co-Founder & CEO linked to his personal LinkedIn per §6 #5; only owner-provided
   facts about him, second co-founder unnamed),
   why-now (Asia EAM growth, SFC/MAS suitability expectations — all defensible
   without invention), what exists today (honest, only approved facts), locations/
   ecosystem (e.g. Cyberport) as facts, contact block. Nav gets "Company" so an
   investor self-selects within five seconds.
8. **/trust/ page** — six pillars expanded + ComplianceEvidence recreation (built,
   currently rendered nowhere) + honest certification status verbatim +
   data-residency claim rewritten in the same honest register (commitment vs deployed
   fact) + DDQ-export mention.
9. **/document-intelligence/ page** (~6 sections) — hero "Start where it hurts
   most.", TermSheetDissolve recreation, 3-step how-it-works, "Nothing is booked from
   a document" governance note, works-alone/spine note, CTA.
10. **/cockpit/ re-cut** — remove the Document Intelligence and Workflow Automation
    acts (they belong to their own surfaces now); merge the Credibility domain line
    into FactsBand; keep Hero, WorkflowCards, GovernanceAct, AiMechanism (including
    "WHAT IT WON'T DO"), Personas, FactsBand, FinalCta. Target ~9 sections.
11. *(removed — no traction fact is claimed; see §6 #6.)*

### Wave P2 — "The living site" (backlog, post-launch)

- Guided-tour page: 90-second walkthrough as the soft alternative to the raw demo.
- Insights/press stub (even 2 posts) + Organization JSON-LD schema.
- zh-HK language version: decide first, then scope — a real translation is a
  maintenance commitment; don't half-do it.
- Careers stub — only if hiring is genuinely part of the story.
- One client vignette — only with a willing, named client. No anonymized case
  studies: they read as vapor.
- Performance follow-ups: code-split cockpit-only recreations out of the shared
  chunk; compress the 5.3MB hero video (<1.5MB or poster + preload); ESLint
  (`react-hooks` + `jsx-a11y`) + standalone `typecheck` script.
- Copy polish: break the 115-word WorkflowAutomation paragraph into a mono list;
  lead the SpineAct paragraph with its conclusion; replace "IPS bands" with
  mandate/investment-guidelines vocabulary (HK/SG register); drop "specific-ID cost
  basis"; make the spine source-chip row categorical and true ("CUSTODIAN FEEDS ·
  MARKET DATA (FACTSET · HKEX) · PDF STATEMENTS · EXCEL · EMAIL"); legibility pass on
  sub-10px labels in recreations.

## 5. Validation gates (run after each wave)

- **P0:** click every CTA and link live on the dev server (desktop + mobile); grep
  confirms the cut claims are gone and banned-vocabulary hits remain zero;
  AuditTimeline shows two distinct actors; one founder statement in one place; all
  recreations show the same book (size, households, names); legal pages resolve;
  `dist/` ≤ 5MB; sitemap/canonical/OG present and consistent.
- **P1:** headline-plus-first-sentence read of home communicates problem, offer, and
  proof; home word count ≤ ⅓ of v1; "engine" within headline quota; every nav/footer
  link resolves on every page; no signature visual repeats on the home → /cockpit
  path; /trust reads standalone (forwardable); /company answers why-now / why-you /
  what-exists in under a minute's read.
- **Final:** Hallmark audit pass; full live walkthrough of every page at desktop and
  mobile widths; Lighthouse check; zero console errors.

## 6. Decisions (all final — owner-approved 2026-08-13; no open items)

1. **Demo URL:** `https://mercury-wealth.vercel.app` — wire into every "Open the live
   demo" CTA (`target="_blank" rel="noopener"`).
2. **Contact:** email `oscar.chan@mercury-digital.io` · LinkedIn
   `https://www.linkedin.com/company/mercury-digital-wealth/` · no street address —
   the "HONG KONG · SINGAPORE" presence line only.
3. **Entity/footer:** "© Mercury Wealth". No registration number, no "Limited" claim.
4. **Logo strip:** owner confirms all four relationships (UOB Kay Hian, Lizen Asset
   Management, Cyberport, Solomon) are real — keep the strip and the "WORKING WITH"
   label. Replace the redundant buyer-list line beneath it with nothing or a short
   factual line; do not invent relationship details beyond "working with".
5. **Founder statement:** Oscar Chan is REAL — founder and CEO (owner confirmed; the
   contact mailbox is his; there is a second co-founder who is not named on-site).
   Keep the byline "Oscar Chan · Co-Founder & CEO". Fix is craft, not removal: ONE
   version of the statement (the two pages currently carry two divergent first-person
   memories), living on /company once it exists, referenced — not duplicated — from
   home. On /company, only owner-provided facts about him; never invent bio details,
   photos, or history. His personal LinkedIn (owner-provided, link it on /company
   next to the statement): https://www.linkedin.com/in/oscar-chan-499a1a48/
   The second co-founder stays unnamed unless the owner says otherwise.
6. **Traction:** none claimed. No traction line anywhere.
7. **Custodians:** none named. Keep "multi-custodian" generic.
8. **Onboarding timeline:** keep the qualitative line; no invented day/week numbers.
9. **Deploy:** Vercel on the default `*.vercel.app` domain first; custom domain
   later (canonical/sitemap use the vercel.app URL until then).
10. **Hero headline:** keep "The engines that run your wealth business." with the
    orienting clause (§3.1). "Every custodian. One cockpit." is reserved for the
    /cockpit/ page and the cockpit engine card — never the company hero.
11. **Segments:** family offices added to the "who it's for" layer and persona cards.
    Institutional/fund asset managers stay out. Hero's named list stays short.
12. **Surfaces:** lift the dominant ground from `#040B15` to deep navy in the
    `#0A1220`–`#0F1520` range (build session picks the exact value visually, panels
    must separate from ground without relying on shadows) AND band by meaning — dark
    where the product works (home hero/engines/flagship, /cockpit), warm paper where
    the company speaks (/trust, /company, legal, plus a second daylight interlude on
    home: the problem act). No light/dark toggle. Record this sign-off and the new
    values in `design.md` BEFORE editing `tokens.css`.
13. **No em-dashes in rendered copy.** Remove every em-dash (—) from user-visible
    text sitewide, including headlines, body, subheads, and meta descriptions.
    Rewrite each sentence properly with a period, comma, or colon; do not just
    delete the dash, and do not flatten the voice. Mono-label middots (·) and
    arrows (→) are fine and stay. Add "no em-dashes in copy" to the validation
    greps (a search for "—" in rendered strings must return zero).
14. **Hero video visibility.** The HK skyline background video is currently too
    dark to see. Lighten it: reduce the darkening overlay/scrim opacity (and any
    CSS filter/brightness grade) so the skyline is clearly visible behind the hero
    while headline text stays AA-readable. Tune visually on the dev server at
    desktop and mobile; keep the reduced-motion/mobile static fallbacks intact.

If anything beyond these twelve needs an owner decision during the build, ask —
never guess, and never invent a placeholder that could ship.
