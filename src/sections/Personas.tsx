import Reveal from "../components/Reveal";
import "./Personas.css";

/* Copy — docs/copy-deck.md §9, verbatim, plus the fourth row added per the
   owner decision recorded in docs/v2-plan.md §6 #11: a multi-family office
   runs an EAM's book under an EAM's evidence expectations, so the story ports
   without a new claim. It belongs on the who-it's-for layer, not in the hero's
   named segment list, which stays at three. The title counts the rows, so it
   moved with them. */
const EYEBROW = "WHO IT’S FOR";
const TITLE = "Four jobs. One record between them.";

const PERSONAS = [
  {
    role: "RELATIONSHIP MANAGER",
    line: "Your book, briefed and ranked, before the first call of the day.",
    support: "Cockpit, attention feed, proposals, tasks and meetings: the whole day in one place.",
  },
  {
    role: "FIRM PRINCIPAL / TEAM HEAD",
    line: "Every advisor’s book, on the same terms, without asking for a spreadsheet.",
    support: "Firm-wide oversight of AUM, flows, drift and open approvals, scoped by entitlement.",
  },
  {
    role: "COMPLIANCE & OPERATIONS",
    line: "The approval trail, without asking anyone for it.",
    support:
      "Filter the immutable log by client, advisor, action or date and export what the reviewer wants.",
  },
  {
    role: "FAMILY OFFICE PRINCIPAL",
    line: "The whole family’s book, across every custodian, without asking anyone to prepare it.",
    support:
      "A multi-family office runs an EAM’s book under the same suitability evidence expectations, and often one person holds the advisor, principal and compliance seats at once.",
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
