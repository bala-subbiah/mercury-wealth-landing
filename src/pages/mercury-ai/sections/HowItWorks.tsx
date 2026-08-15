import Reveal, { useReveal } from "../../../chrome/Reveal.tsx";
import "./HowItWorks.css";

/* How it works — the three audited AiMechanism steps (fact source §2), as a
   horizontal 3-step diagram (vertical on mobile). Step numbers are mono, a
   product-fragment idiom (Amendment 2 rule 2: mono survives only inside
   product-UI fragments). Bodies are tightened to 1-2 lines.

   Wave 2: the three steps arrive as a relay rather than all at once, ~1.5s
   end to end. Per step, 400ms apart: the step's hairline draws left to right
   (scaleX), then 180ms later the number settles in and the label and body
   arrive behind it. Read across, the section shows the handoff it describes.

   The hairline is an element rather than a border-top precisely so it can be
   drawn; its resolved appearance is the same 1px var(--rule-light) rule the
   section has always had. */

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
  const { ref, shown } = useReveal<HTMLOListElement>();

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

        <ol ref={ref} className={`mai-how__steps${shown ? " is-relay" : ""}`}>
          {STEPS.map((step) => (
            <li className="mai-how__step" key={step.n}>
              <span className="mai-how__rule" aria-hidden="true" />
              <span className="mai-how__n">{step.n}</span>
              <h3 className="mai-how__step-label">{step.label}</h3>
              <p className="mai-how__step-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
