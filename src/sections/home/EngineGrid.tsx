import Reveal from "../../components/Reveal";
import "./EngineGrid.css";

/* Copy — docs/copy-deck-v2-home.md §3, verbatim. Only the Cockpit card links:
   per-engine pages do not exist yet, and a "see it in the demo" or "talk to
   us" label on the other five would be an overclaim (deck §3, card link
   treatment). Do not add CTAs to the other five. */
const EYEBROW = "THE ENGINES";
const TITLE = "Six engines. Each does a real job on its own.";
const SUBHEAD =
  "License one, several, or all six. The cockpit is the flagship — not a prerequisite for the rest.";
const FLAGSHIP = "FLAGSHIP";
const COCKPIT_LINK = "Explore the Cockpit";

interface Engine {
  title: string;
  line: string;
  support: string;
  /** 12-column span at desktop — the grid is deliberately uneven. */
  span: 12 | 7 | 5 | 4;
}

const FLAGSHIP_ENGINE: Engine = {
  title: "Mercury Cockpit",
  line: "Run the whole book — briefing, monitoring, proposals, approvals, orders, audit.",
  support:
    "One live view of every household and account across every custodian, with the proposal, the approval and the order that follow attached to the same record.",
  span: 12,
};

const ENGINES: Engine[] = [
  {
    title: "Document Intelligence",
    line: "Turn term sheets, statements and client documents into structured data you can query.",
    support:
      "Every extracted field is shown next to the clause it came from, and nothing moves until someone approves it.",
    span: 7,
  },
  {
    title: "Workflow Automation",
    line: "Run your firm's processes to completion — reviews, audit prep, client materials.",
    support:
      "A process is defined once and then it runs, pausing only where a human decision is genuinely required.",
    span: 5,
  },
  {
    title: "Relationship Scribe",
    line: "Speak the meeting; the call report, the CRM entries and the follow-ups file themselves.",
    support:
      "The record is written while the conversation is still accurate — not from memory on Friday — and in the shape an SFC- or MAS-supervised firm is expected to keep it.",
    span: 4,
  },
  {
    title: "Book-aware Research",
    line: "Ask the market question; get the answer against your book, not the market in general.",
    support:
      "It reads your positions, mandates and exposures first, so the answer arrives already scoped to the clients it actually affects.",
    span: 4,
  },
  {
    title: "Compliance Copilot",
    line: "Watch every suitability cycle and assemble the evidence before the reviewer asks.",
    support:
      "Open cycles, missing documents and DDQ-ready exports, tracked as the work happens rather than gathered in the week before an inspection.",
    span: 4,
  },
];

/**
 * The one catalog moment on the page. The Cockpit card is senior — full width,
 * larger serif, the only badge and the only link — and the remaining five sit
 * on an uneven 7/5 · 4/4/4 rhythm so the act never reads as a tile grid.
 */
export default function EngineGrid() {
  return (
    <section className="section eg" id="engines" data-section="engines" aria-labelledby="eg-title">
      <div className="container">
        <Reveal className="section-head eg-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title eg-title" id="eg-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <div className="eg-grid">
          <Reveal as="article" className="eg-card eg-card--flagship eg-card--12">
            <div className="eg-flagship-id">
              <h3 className="eg-card-title eg-card-title--lg">{FLAGSHIP_ENGINE.title}</h3>
              <span className="mono eg-badge">{FLAGSHIP}</span>
            </div>
            <div className="eg-flagship-body">
              <p className="eg-card-line eg-card-line--lg">{FLAGSHIP_ENGINE.line}</p>
              <p className="eg-card-support">{FLAGSHIP_ENGINE.support}</p>
              <a className="eg-link" href="/cockpit/">
                {COCKPIT_LINK}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>

          {ENGINES.map((engine, index) => (
            <Reveal
              as="article"
              key={engine.title}
              delay={(index % 3) * 60}
              className={`eg-card eg-card--${engine.span}`}
            >
              <h3 className="eg-card-title">{engine.title}</h3>
              <p className="eg-card-line">{engine.line}</p>
              <p className="eg-card-support">{engine.support}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
