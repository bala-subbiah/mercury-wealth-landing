# Audit Backlog — accepted-but-deferred items

Dated 2026-08-13. Recorded from the final Hallmark audit and build for Wave P2 planning.
These items were reviewed and accepted as known, deferred issues at ship time — not
regressions to chase now. Triage and schedule them as part of Wave P2.

Second entry 2026-08-13: the P2 additions from `docs/critique-v2.md` are merged in below
rather than kept as a separate list, so there is one backlog. Items the critique raised
that were already recorded here have been amended in place, not duplicated.

## Craft and consistency

- 21 distinct media-query breakpoints sitewide with near-duplicates (700/720, 860/880/899/900, 1000/1024/1080); no shared breakpoint tokens.
- ~18 off-4pt-grid spacing values (.cta-primary 15px 30px; nav CTA variants 10px 20px / 9px 15px / 9px 16px; 13px DataStrip; 14px Nav, DiHero; 7px 12px; 5px 10px).
- .legal-para measure is 79ch vs the site's .body-copy 66ch and .section-sub 62ch caps.
- Product recreations expose decorative labels as real h3/h4 in the document outline (cd-section-title, cd-agenda-heading 9px, at-title).
- FounderStatement.tsx aria-labelledby duplicates the id already labelling the co-head section on /company.
- Home hero MorningBriefing takes ~9s to fully compose; consider a faster compose or an earlier settled state.
- At 375px, footer links and nav wordmark are 21px tall, passing WCAG 2.2 target size only via the spacing exception.
- /company H1:H2 ratio at 375 is 36:30, the weakest heading step on the site.
- src/components/company/IntegrationsSpine.tsx is orphaned (dev-preview only) and would violate design.md luminous/sub-10px rules if mounted; delete or rework before any future use.

## Copy and claims

- "Nothing quietly fails to happen." is currently rendered nowhere; reserved for the Workflow Automation surface when it ships (see v2-plan §4.6; the home engine-card copy is deck-locked). Re-raised as critique-v2 P2: give it that surface rather than leaving it parked in a comment, and treat the WA surface as the trigger to spend it.
- FactsBand on /cockpit still carries two house-jargon strings the vocabulary decision retired everywhere else (critique-v2 P2): "IPS bands" should become mandate/guidelines vocabulary, and "specific-ID cost basis" should come out rather than be reworded. Copy change, so it needs the owner's sign-off with the rest of the deck.
- BuiltForAsia.tsx:8 subhead is the heaviest comma chain on /cockpit (four clauses in one 44-word sentence, "several custodians, several booking centres, clients whose base currency…, and suitability regimes…"). Recast candidate: split after "actually run" so the list is not also the sentence's spine. Deck copy, so owner sign-off.
- LogoStrip now renders on two surfaces (home LogoProof and /company WhereWeWork) with no line qualifying the relationship. Consider one factual sentence on /company, where a diligence reader looks for it, rather than a second unlabelled strip (critique-v2 P2).

## Platform and tooling

- Wave P2 perf follow-up already planned: code-split the 330KB shared chunk (motion/FluidGradientText pulls it into legal pages); ESLint react-hooks + jsx-a11y; typecheck script. The recreation CSS half of this landed 2026-08-13 (critique-v2 P1-12: barrels deleted, direct file imports everywhere); the 330KB JS chunk is untouched.
- No CSP. vercel.json currently sets only buildCommand/outputDirectory/trailingSlash; add a `headers` block with a Content-Security-Policy (plus the usual X-Content-Type-Options, Referrer-Policy, Permissions-Policy) once the Vercel Analytics and font origins are enumerated (critique-v2 P2).
- Hero video is 1.34MB after the v2 trim; a further pass (shorter loop, lower bitrate, or a poster-only path below some breakpoint) is still on the table (critique-v2 P2).
- Add a repo-checked validation script (scripts/validate-copy.sh or similar) wired into CI or a prebuild step, so the three checks that have each failed once are enforced rather than remembered: (1) em-dash in rendered output, not just source; (2) banned vocabulary matched case-insensitively and tolerant of spacing and hyphenation, so the "END TO END" / "end to end" / "end-to-end" family all trip it (the P0-2 miss); (3) a dead-host check that every canonical, og:url, og:image, sitemap <loc> and robots.txt Sitemap line resolves against VITE_SITE_URL and that the host answers 200 (the P0-1 failure). Ship it with the greps written tolerantly from the start; a strict grep is what let both P0s through.

## Docs

- Copy-deck reconcile: docs/copy-deck.md §1/§2 diverge from the rebuilt /cockpit hero (ResearchAnswer visual, "Every custodian. One cockpit." headline) and retired Credibility section; docs/copy-deck-v2-home.md predates the no-em-dash decision and the SpineAct/DocIntelAct cuts.
