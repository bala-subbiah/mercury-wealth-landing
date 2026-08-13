import AuditTimeline from "../../components/product/AuditTimeline";
import CockpitDashboard from "../../components/product/CockpitDashboard";
import Reveal from "../../components/Reveal";
import "./FlagshipAct.css";

/* Copy — docs/copy-deck-v2-home.md §5, re-cut for v2. The headline is new:
   "The engine your advisors live in." spent one of the site's two permitted
   "engine" headlines on the act that needs it least (docs/v2-plan.md §4.6),
   and the reserved line "Every custodian. One cockpit." belongs to /cockpit
   and the cockpit card, never here.

   Two panels now, not one: the book the day hangs off, then the audit trail
   the same record writes as it moves. The audit claim is the site's most
   differentiated one and until now it had no evidence anywhere on the home
   page (docs/critique-v1.md §9). Link text is exactly "Explore the Cockpit",
   as everywhere else. */
const EYEBROW = "THE FLAGSHIP · MERCURY COCKPIT";
const TITLE = "From the drift to the order, without leaving the screen.";
/* Trimmed for the home word-count gate (docs/critique-v2.md P1-13). The
   proposal → sign-off → order chain came out of the prose because the audit
   panel directly below renders it as data, entry by entry; narrating it above
   the panel was the page saying twice what it then shows. Base currency went
   for the same reason: the Asia band on this page states it outright
   ("Base-currency reporting across booking centres"). */
const BODY =
  "The cockpit opens on a briefing written before anyone arrived: what drifted, what breached, what matures, what waits on approval. Ranked across every custodian. Everything that follows lands on the log beneath it.";
const LINK = "Explore the Cockpit";

export default function FlagshipAct() {
  return (
    <section
      className="section fl"
      id="flagship"
      data-section="flagship"
      aria-labelledby="fl-title"
    >
      <div className="container">
        <div className="fl-head">
          <Reveal className="section-head fl-head-copy">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title fl-title" id="fl-title">
              {TITLE}
            </h2>
          </Reveal>

          <Reveal className="fl-head-body" delay={60}>
            <p className="body-copy">{BODY}</p>
            <a className="fl-link" href="/cockpit/">
              {LINK}
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        {/* The summary crop, not the whole screen: /cockpit renders the full
            panel, and until now the "Explore the Cockpit" journey ended on the
            visual it started from (docs/critique-v2.md P1-7). Same book, same
            figures, fewer panes. */}
        <Reveal className="fl-panel" delay={40}>
          <CockpitDashboard variant="summary" />
        </Reveal>

        <Reveal className="fl-audit" delay={60}>
          <AuditTimeline revealOnScroll />
        </Reveal>
      </div>
    </section>
  );
}
