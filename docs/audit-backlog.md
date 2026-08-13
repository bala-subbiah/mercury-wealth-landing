# Audit Backlog — accepted-but-deferred items

Dated 2026-08-13. Recorded from the final Hallmark audit and build for Wave P2 planning.
These items were reviewed and accepted as known, deferred issues at ship time — not
regressions to chase now. Triage and schedule them as part of Wave P2.

- 21 distinct media-query breakpoints sitewide with near-duplicates (700/720, 860/880/899/900, 1000/1024/1080); no shared breakpoint tokens.
- ~18 off-4pt-grid spacing values (.cta-primary 15px 30px; nav CTA variants 10px 20px / 9px 15px / 9px 16px; 13px DataStrip; 14px Nav, DiHero; 7px 12px; 5px 10px).
- .legal-para measure is 79ch vs the site's .body-copy 66ch and .section-sub 62ch caps.
- Product recreations expose decorative labels as real h3/h4 in the document outline (cd-section-title, cd-agenda-heading 9px, at-title).
- FounderStatement.tsx aria-labelledby duplicates the id already labelling the co-head section on /company.
- Home hero MorningBriefing takes ~9s to fully compose; consider a faster compose or an earlier settled state.
- At 375px, footer links and nav wordmark are 21px tall, passing WCAG 2.2 target size only via the spacing exception.
- /company H1:H2 ratio at 375 is 36:30, the weakest heading step on the site.
- src/components/company/IntegrationsSpine.tsx is orphaned (dev-preview only) and would violate design.md luminous/sub-10px rules if mounted; delete or rework before any future use.
- "Nothing quietly fails to happen." is currently rendered nowhere; reserved for the Workflow Automation surface when it ships (see v2-plan §4.6; the home engine-card copy is deck-locked).
- Wave P2 perf follow-up already planned: code-split the 330KB shared chunk (motion/FluidGradientText pulls it into legal pages); ESLint react-hooks + jsx-a11y; typecheck script.
- Copy-deck reconcile: docs/copy-deck.md §1/§2 diverge from the rebuilt /cockpit hero (ResearchAnswer visual, "Every custodian. One cockpit." headline) and retired Credibility section; docs/copy-deck-v2-home.md predates the no-em-dash decision and the SpineAct/DocIntelAct cuts.
