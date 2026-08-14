import Reveal from "../../../chrome/Reveal.tsx";
import "./HowItWorks.css";

/* How it works — the three audited AiMechanism steps (fact source §2), as a
   horizontal 3-step diagram (vertical on mobile). Step numbers are mono, a
   product-fragment idiom (Amendment 2 rule 2: mono survives only inside
   product-UI fragments). Bodies are tightened to 1-2 lines. */

const STEPS = [
  {
    n: "01",
    label: "Ingest",
    body: "Custodian feeds, statements, term sheets and client documents come in overnight and become structured positions, instruments and events on your book.",
  },
  {
    n: "02",
    label: "Check against the mandate",
    body: "Every portfolio is measured against its model, IPS bands, concentration caps and risk profile. Ranked by what changed.",
  },
  {
    n: "03",
    label: "You approve",
    body: "Nothing leaves Mercury on its own. Proposals arrive as drafts, and every approval carries your name and a timestamp.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mai-how band band--paper">
      <div className="container">
        <Reveal as="div" className="mai-how__head">
          <h2 className="mai-how__title">The colleague who prepped overnight.</h2>
          <p className="mai-how__sub">
            A well organised junior who reads everything overnight and leaves a briefing on your
            desk.
          </p>
        </Reveal>

        <ol className="mai-how__steps">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.n} className="mai-how__step" delay={index * 100}>
              <span className="mai-how__n">{step.n}</span>
              <h3 className="mai-how__step-label">{step.label}</h3>
              <p className="mai-how__step-body">{step.body}</p>
              {index < STEPS.length - 1 && <span className="mai-how__connector" aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
