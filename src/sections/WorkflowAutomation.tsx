import Reveal from "../components/Reveal";
import "./WorkflowAutomation.css";

/* Copy — docs/copy-deck.md §6, verbatim. */
const EYEBROW = "WORKFLOW AUTOMATION";
const TITLE = "The work runs itself.";
const SUBHEAD =
  "Suitability review cycles, audit prep, the document chase, quarterly client materials — the processes your firm already runs, running to completion without anyone shepherding them.";
const BODY =
  "A suitability review isn't hard. It's just twenty small steps that each need someone to remember them: pull the profile, check it against the current holdings, flag what changed, raise the questionnaire, chase the client, file the response, update the record, log it. In Mercury the process is defined once and then it runs — steps executing in order, waiting where a human decision is genuinely required, and finishing with the artifact in hand and the log already written. The hours it gives back are real; they're the by-product, not the point. The point is that nothing quietly fails to happen.";
const CHIPS =
  "SUITABILITY REVIEW CYCLES · AUDIT PREP · DOCUMENT CHASE · CLIENT MATERIALS · PERIODIC REPORTING";
const CTA = "Open the live demo";

/* In-UI text — docs/copy-deck.md §6 "In-UI text — workflow stepper".
   The deck's ⏳ glyph is rendered as an amber mono marker: emoji are banned
   outright (design.md hard rule 8). */
const RUN_TITLE = "ANNUAL SUITABILITY REVIEW · Q2 2026";
const RUN_META = "Triggered 19 JUN 07:00 HKT · 14 clients in scope";

interface Step {
  label: string;
  time: string;
  waiting?: boolean;
}

const STEPS: Step[] = [
  { label: "Pull current suitability profile", time: "07:00" },
  { label: "Compare against live holdings & mandate", time: "07:00" },
  { label: "Flag changes since last review · 3 found", time: "07:01" },
  { label: "Generate client questionnaire", time: "07:01" },
  { label: "Send for client confirmation", time: "07:02" },
  { label: "Awaiting client response · Ho Family", time: "reminder sent 24 JUN", waiting: true },
  { label: "File response against the client record", time: "—" },
  { label: "Write to the audit log", time: "—" },
];

const RUN_COUNT = "13 OF 14 COMPLETE · 1 AWAITING CLIENT";
const RUN_ARTIFACT = "ARTIFACT: SUITABILITY REVIEW PACK Q2 2026 · PDF";

export default function WorkflowAutomation() {
  return (
    <section className="section auto" id="automation" aria-labelledby="auto-title">
      <div className="container auto-grid">
        <div>
          <Reveal className="section-head">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title auto-title" id="auto-title">
              {TITLE}
            </h2>
            <p className="section-sub">{SUBHEAD}</p>
          </Reveal>

          <Reveal delay={60}>
            <p className="body-copy auto-body">{BODY}</p>
            <p className="mono auto-chips">{CHIPS}</p>
            <div className="cta-row auto-cta">
              <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
                {CTA}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="surface run" delay={80}>
          <header className="run-head">
            <span className="mono run-title">{RUN_TITLE}</span>
            <span className="run-meta">{RUN_META}</span>
          </header>

          <ol className="run-steps">
            {STEPS.map((step, index) => (
              <Reveal
                as="li"
                key={step.label}
                delay={120 + index * 90}
                className={["run-step", step.waiting ? "run-step--waiting" : ""]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="run-mark" aria-hidden="true">
                  {step.waiting ? "◷" : "✓"}
                </span>
                <span className="run-label">{step.label}</span>
                <span className="run-time">{step.time}</span>
              </Reveal>
            ))}
          </ol>

          <footer className="run-foot">
            <span className="mono run-count">{RUN_COUNT}</span>
            <span className="mono run-artifact">{RUN_ARTIFACT}</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
