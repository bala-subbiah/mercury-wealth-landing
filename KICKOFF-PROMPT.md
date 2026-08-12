# Kickoff prompt for the new Claude Code session

Paste the prompt below into a fresh Claude Code session started in this folder
(`/Users/balasubramanian/Desktop/mercury-project/06-Mercury-Landing-Page`).

---

We are building the marketing landing page / website for **Mercury Wealth** in this folder.
Read `CLAUDE.md` and follow its orchestration rule strictly: you (Fable) are the
orchestrator, planner, task creator, delegator, and validator only — delegate all
implementation to subagents on smaller models (Sonnet 5 / Opus 4.8), then validate their
output yourself.

**Context to load first (in this order):**
1. `docs/one-pager.html` — canonical description of what Mercury is, its capabilities,
   differentiators, and audience.
2. `docs/competitor-research.md` — completed competitor & copy research (16 companies).
   Its sections 4–7 are binding guidance: copy patterns to steal, clichés to avoid, the
   whitespace positioning (the advisor's morning, book-first language,
   governance-as-workflow, Asia's operating reality, "every custodian, one cockpit"), and
   a draft section order for the page.

**Phase 1 — setup (do this now):**
1. Verify the Hallmark skill is installed (`~/.claude/skills/hallmark/`). If not, ask me to
   run `npx skills add nutlope/hallmark`, then continue once it's available.
2. I have a mockup website made with Gemini AI — ask me for it, and when I share it, use
   Hallmark `study` mode to extract its design DNA and reconcile it with the research
   doc's recommendations. Where the mockup and the research conflict, show me both options
   with your recommendation.

**Phase 2 — offerings & solutions workshop (interactive discussion with me — do NOT skip
to building):**
My Gemini mockup contains a first framing of Mercury's offerings/solutions. Before any
design or copy work:
1. Extract the offerings/solutions as framed in my mockup and list them back to me.
2. Critique and fine-tune them against `docs/one-pager.html` (the canonical capability
   set) and `docs/competitor-research.md` §2 (the overlap matrix) — flag anything that is
   framed as unique but is actually table stakes, anything underclaimed, and anything
   whose naming doesn't match wealth-management domain language (EAM/private-bank
   register).
3. Propose adjacent offerings I may have missed — grounded in the research doc, e.g.:
   AI document intelligence (term sheets/custodian statements/KYC → structured data),
   scenario/stress views on drift and concentration, client-facing portal/reporting,
   compliance/DDQ-ready audit exports, onboarding & data-migration service, per-persona
   solutions (RM / firm principal / compliance & ops), API/data access. Mark each as
   core / adjacent / future-roadmap and recommend what belongs on the landing page vs a
   solutions subpage vs left out.
4. Iterate with me until we lock a final offerings map (name, one-line value prop, target
   persona, proof point for each). That locked map becomes the site's information
   architecture — sections, nav, and any solutions pages derive from it.

**Phase 3 — scaffold and build:**
1. Scaffold the site as a standalone static-first project in this folder (recommend Vite +
   React + TypeScript to match my other projects, or plain Vite + HTML if you judge that
   simpler for a marketing site — recommend one, briefly justify, and proceed).
2. Produce a build plan broken into delegable tasks (design system/tokens, section-by-
   section build per the research doc's §7 structure reconciled with the locked offerings
   map, copywriting per §4/§5/§6, responsive + dark mode, performance/SEO/meta, final
   Hallmark audit), then execute it by delegating to Sonnet 5 / Opus 4.8 subagents with
   you validating each result.

**Non-negotiables:**
- Pure product-vision framing: Mercury is presented as a real product; never mention demo,
  mock data, or portfolio-project origins in page copy.
- Positioning: focused advisor cockpit against the enterprise suites; do NOT use
  "operating system", "powering", "next era", or "single source of truth" phrasing.
- Copy register: advisor-inner-voice pain headlines, two-fragment declaratives, verb-first
  workflow cards naming real artifacts (mandates, term sheets, custodian feeds); name the
  regulators (SFC, MAS, HKMA) where relevant.
- Visuals: the product itself (cockpit/attention-feed/audit-timeline style visuals), never
  abstract stock illustrations. No purple-gradient AI-template look — Hallmark enforces
  this.
- Primary CTA: "Open the live demo" (the deployed Mercury app; ask me for the URL), with a
  no-form secondary path. No fake social proof, no invented client logos or testimonials
  presented as real.

Start with phase 1 and ask me your open questions (mockup, demo URL, hosting/domain) in
your first response.
