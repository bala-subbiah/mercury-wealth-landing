# Site v2 — Review (2026-08-13, against the live deploy)

*Orchestrated review of https://mercury-wealth-landing.vercel.app/ : three independent
audit passes (plan compliance · copy/claims · technical) plus live in-browser and HTTP
validation. Cross-checked; file:line evidence verified. Companion: `docs/v2-plan.md`
(the plan this audits against) and `docs/audit-backlog.md` (the build's own deferrals).*

**Scores: plan compliance ~86% (12/14 decisions) · copy 8.5/10 (v1: 7) · technical
7/10 (v1: 8) · overall 8/10.** One critical launch bug and a short tail of
completion defects — almost all on /cockpit, which was re-cut for length but never
re-audited for claims — stand between this and the 8.5–9 target.

## What v2 got right (verified — do not regress)

- Demo CTA wired everywhere (9 placements incl. mobile bar + footer), contact real,
  legal pages real, 404 + trailing-slash redirects correct, dist 13MB → 3.3MB.
- Integrity work is exemplary: all fabricated claims fixed; ONE founder statement
  with byline + personal LinkedIn; dataset cross-woven to one book (US$342.6M · 44
  households · 118 accounts, consistent across six recreations, dates reconcile);
  four-eyes now shows a real second approver; the new ISIN CH1382044167 has a valid
  check digit and a specimen issuer.
- Em-dashes: zero in rendered copy across all 7 pages; most rewrites are genuine
  re-punctuation, voice intact.
- Problem act ("The book is scattered before the day starts.") is the strongest
  addition; headline-only read of home now carries problem → offer → proof.
- Surfaces: ground lifted to #0B1220 with design.md Amendment 1 recorded FIRST;
  banding by meaning executed (paper on /trust, /company, legal, problem act);
  AA contrast fixes documented. Hero video visible (opacity 0.78 + directional
  scrim), 1.34MB, fallbacks intact.
- "engine" ≤2 headlines quota met; banned-vocab list clean except the two items in
  P0-2 below; /trust reads standalone and forwardable; /company claims nothing it
  can't support.

## P0 — fix before sharing the URL

1. **Dead-domain SEO (decision #9 FAIL — critical).** Every canonical, og:url,
   og:image, twitter:image on all 7 index.html files, every sitemap.xml <loc>, and
   robots.txt's Sitemap line point at `mercury-wealth-site.vercel.app`, which returns
   404 (DEPLOYMENT_NOT_FOUND). The site lives at `mercury-wealth-landing.vercel.app`.
   Consequences now: share cards fetch their image from a dead host; search engines
   are told every page's canonical doesn't exist. Fix: search/replace across the 7
   HTML files + public/sitemap.xml + public/robots.txt (or add the -site alias in
   Vercel if that name was intended); extract the base URL into one shared define so
   it can't drift again.
2. **Banned vocabulary, uppercase evasion.** "THE DAY, END TO END"
   (`src/sections/WorkflowCards.tsx:6`) and "ONE RECORD, END TO END"
   (`src/sections/GovernanceAct.tsx:27`). "end-to-end" is banned; the validation grep
   only matched the hyphenated form. Replace both (e.g. "THE DAY" / "ONE RECORD,
   DRAFT TO FILL") and make the grep case-insensitive and space/hyphen-tolerant.
3. **Evooq near-lift still live and mis-documented.** "Sleep before the audit, not
   during it." (`src/sections/GovernanceAct.tsx:23`) remains a near-copy of Evooq's
   live headline — and the file comment falsely claims this was fixed (it records the
   *headline* swap as the near-lift fix; the near-lift was always this pull-quote).
   Replace with an owned line and correct the comment.
4. **Residency contradiction.** `src/sections/TrustPillars.tsx:35` (on /cockpit)
   still asserts "Client data is stored and processed in-region" as present-tense
   fact, while home (AsiaTrustBand) and /trust hedge it as a design commitment.
   Copy the AsiaTrustBand wording verbatim. A compliance reader who reads two pages
   currently catches the site contradicting itself on its most carefully-hedged claim.
5. **"HASH-STAMPED" invented claim.** `ComplianceEvidence.tsx` renders "PACK READY ·
   HASH-STAMPED · EXPORT" on /trust — an uncommitted cryptographic claim on the page
   written for DDQ reviewers. Drop to "PACK READY · EXPORT" (and consider whether
   "0 OVERDUE" should look less flatteringly perfect).

## P1 — the completion tail

6. **Decision #11 never executed: family offices.** No segment or persona surface
   mentions family offices; every list is still the v1 three. Add the fourth card to
   the who-it's-for layer/personas per the decision; hero named list stays three.
7. **Duplicate signature visual on the highest-intent path.** CockpitDashboard
   renders on home (FlagshipAct) AND /cockpit (WorkflowCards) — the home → "Explore
   the Cockpit" journey repeats its hero moment. Every other recreation is unique to
   one surface. Differentiate one of the two.
8. **Separation-of-duties self-own in AuditTimeline.** Entry 5 "Client approval
   recorded in-app · Sean Donnelly" is followed by Sean Donnelly executing the order.
   The four-eyes fix landed on the approval node, not the acceptance node. Change
   entry 5's actor (e.g. "Lim Family Office · client" via the portal).
9. **Defensive CTA survives on /cockpit.** "Open it. It's the actual product."
   (`src/sections/FinalCta.tsx:8`) was retired from home and DI but not here; match
   the offer register. Also: /trust hero and TrustPillars carry an identical headline
   — differentiate.
10. **Comma-substitution rewrites that limp** (em-dash removals that swapped a comma
    where the sentence needed recasting): worst first —
    `AiMechanism.tsx:46` "never used to train models, yours or anyone else's" →
    "…train models. Not yours, not anyone else's."; `BuiltForAsia.tsx:19` triple-comma
    sentence; `FinalCta.tsx:10` dangling four-comma clause; cockpit hero support
    "…today's reviews, ranked before you sit down." Consider also splitting
    ProblemAct's 58-word third sentence after "quarter-end".
11. **"Six questions every DDQ gets to"** (TrustHero + TrustPillars) — residual
    universal quantifier; "six" is just Mercury's own pillar count. Reword ("The six
    answers due diligence asks for first", or similar). Also: hardcoded "LAST UPDATED
    13 AUGUST 2026" on /trust becomes a liability when stale — derive from build date
    or remove.
12. **CSS barrel over-fetch** (small reprise of v1's chunk bug):
    `src/components/product/index.ts` re-exports all 8 recreations, whose top-level
    `import "./X.css"` side effects drag every recreation's CSS onto every page that
    imports any one of them (~40KB unused on home incl. ResearchAnswer.css 36.9KB).
    Fix: import components directly from their files, not the barrel.
13. **Home word count** 37.5% of v1 vs ≤33% gate (marginal): trim ~90 words —
    candidates: EngineGrid subhead, FlagshipAct body, HomeHero subhead.

## P2 additions (fold into existing backlog)

- CSP header via vercel.json; ESLint + standalone typecheck script (already
  backlogged); further hero-video trim; "IPS bands" → mandate/guidelines vocabulary
  and drop "specific-ID cost basis" (FactsBand) — both still live on /cockpit;
  "Nothing quietly fails to happen." is parked in a comment with no surface — give it
  one when a WA surface exists; logo strip now appears twice (home + /company) with
  no relationship qualifier — consider one factual line on /company where a diligence
  reader looks for it.

## Bottom line

v1 was an excellent brochure that couldn't convert, be contacted, or survive
diligence. v2 fixed the identity layer almost completely and the integrity layer
completely; what remains is one critical config bug and surface-consistency debt on
/cockpit. Clearing P0 (an hour's work) makes the site safe to send; clearing P1 gets
it to the 8.5–9 the plan aimed for.
