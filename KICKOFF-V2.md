# Kickoff prompt — v2 build session

Start a fresh Claude Code session in this folder
(`/Users/balasubramanian/Desktop/mercury-project/06-Mercury-Landing-Page`), then paste
everything below the line as the first message:

---

We are building v2 of this site. Read, in order:
1. `CLAUDE.md` — follow the orchestration rule strictly: you plan, delegate, and
   validate; Sonnet 5 / Opus 4.8 subagents implement.
2. `docs/critique-v1.md` — the consolidated critique of v1 (detailed findings and
   file/line references behind every fix).
3. `docs/v2-plan.md` — the authoritative plan: objective, audiences, sitemap, home
   spec, waves P0/P1/P2, and validation gates. Section 6 of that plan contains ALL
   twelve owner decisions, already made and final — there are no open decisions.
   Implement them exactly; do not re-litigate them.

Execute Wave P0, then Wave P1, delegating each task to subagents and running the
plan's validation gates yourself after each wave — including live browser checks on
the dev server (`.claude/launch.json` → `site-dev`). Stop and show me the result
after the home restructure (P1 task 6) before building the new pages. Wave P2 is
backlog — do not start it without asking.

Hard rules: do not invent any claim, name, number, relationship, or customer
behaviour not in the docs; keep the banned-vocabulary list at zero hits; NO em-dashes
in any rendered copy (plan §6 #13 — rewrite the sentences, don't just strip the
dash); lighten the hero video per plan §6 #14; the surface change (plan §6 #12) must
be recorded in `design.md` before `tokens.css` is touched.
Build and validate everything locally without asking, but PAUSE and confirm with me
before the first public deploy to Vercel (it needs my login and publishes the site) —
prepare the deploy config so it's one command when I say go. If something genuinely
outside the twelve decisions needs an owner call, ask me — never guess, never ship a
placeholder.

---

Note: run the session on Fable so the orchestration rule applies as written. If a v1
dev server is still running on port 5173 from another session, close it first.
