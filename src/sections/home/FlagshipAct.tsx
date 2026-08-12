import { CockpitDashboard } from "../../components/product";
import Reveal from "../../components/Reveal";
import "./FlagshipAct.css";

/* Copy — docs/copy-deck-v2-home.md §5, verbatim. The visual here is the
   book-of-business panel rather than the briefing: the hero switcher already
   plays the briefing, and this act's job is to show the book the day hangs
   off. Link text is exactly "Explore the Cockpit" (deck checklist item 3). */
const EYEBROW = "THE FLAGSHIP · MERCURY COCKPIT";
const TITLE = "The engine your advisors live in.";
const BODY =
  "The cockpit opens on a briefing that was written before anyone arrived: what drifted overnight, what breached, what matures next week and what is waiting on an approval — ranked, across every custodian, in the client's base currency. From there the day stays in one place, because the position, the proposal, the sign-off and the order all hang off the same record.";
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

        <Reveal className="fl-panel" delay={40}>
          <CockpitDashboard />
        </Reveal>
      </div>
    </section>
  );
}
