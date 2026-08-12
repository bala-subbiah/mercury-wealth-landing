import Reveal from "../components/Reveal";
import "./Personas.css";

/* Copy — docs/copy-deck.md §9, verbatim. */
const EYEBROW = "WHO IT'S FOR";
const TITLE = "Three jobs. One record between them.";

const PERSONAS = [
  {
    role: "RELATIONSHIP MANAGER",
    line: "Your book, briefed and ranked, before the first call of the day.",
    support: "Cockpit, attention feed, proposals, tasks and meetings — the whole day in one place.",
  },
  {
    role: "FIRM PRINCIPAL / TEAM HEAD",
    line: "Every advisor's book, on the same terms, without asking for a spreadsheet.",
    support: "Firm-wide oversight of AUM, flows, drift and open approvals, scoped by entitlement.",
  },
  {
    role: "COMPLIANCE & OPERATIONS",
    line: "The approval trail, without asking anyone for it.",
    support:
      "Filter the immutable log by client, advisor, action or date and export what the reviewer wants.",
  },
];

export default function Personas() {
  return (
    <section className="section persona" id="who-its-for" aria-labelledby="persona-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title persona-title" id="persona-title">
            {TITLE}
          </h2>
        </Reveal>

        <div className="persona-rows">
          {PERSONAS.map((persona, index) => (
            <Reveal className="persona-row" key={persona.role} delay={index * 60}>
              <span className="mono persona-role">{persona.role}</span>
              <div>
                <p className="persona-line">{persona.line}</p>
                <p className="persona-support">{persona.support}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
