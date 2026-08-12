import { DriftChat } from "../components/product";
import Reveal from "../components/Reveal";
import "./AiMechanism.css";

/* Copy — docs/copy-deck.md §8, verbatim. */
const EYEBROW = "HOW IT WORKS";
const TITLE = "The colleague who prepped overnight.";
const SUBHEAD =
  "Think of it as a very well-organised junior who read everything before you came in — the statements, the term sheets, the mandates, the overnight moves — and left a briefing on your desk. It prepares. You decide. That order never reverses.";

const STEPS = [
  {
    num: "01",
    label: "INGEST",
    body: "Custodian feeds, statements, term sheets and client documents come in overnight and become structured positions, instruments and events on your book.",
  },
  {
    num: "02",
    label: "CHECK AGAINST THE MANDATE",
    body: "Every portfolio is measured against its own model, IPS bands, concentration caps and risk profile. What breached, what's about to, what matured, what's waiting — ranked by what changed.",
  },
  {
    num: "03",
    label: "YOU APPROVE",
    body: "Nothing leaves Mercury on its own. Proposals arrive as drafts, orders wait on your acceptance, and every approval carries your name and a timestamp.",
  },
];

const NEGATIVE_LABEL = "WHAT IT WON'T DO";

const NEGATIVE = [
  {
    claim: "It won't place an order.",
    body: "Execution requires an accepted proposal and a human authorisation, every time.",
  },
  {
    claim: "It won't invent a number.",
    body: "Every figure it shows traces to a position, a document or a feed you can open.",
  },
  {
    claim: "It won't approve anything.",
    body: "Four-eyes means two humans; the system is neither of them.",
  },
  {
    claim: "It won't learn from your clients.",
    body: "Your data is never used to train models — yours or anyone else's.",
  },
];

export default function AiMechanism() {
  return (
    <section className="section aim" id="how-it-works" aria-labelledby="aim-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title aim-title" id="aim-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <div className="aim-grid">
          <ol className="aim-rail">
            {STEPS.map((step, index) => (
              <Reveal as="li" className="aim-step" key={step.num} delay={index * 70}>
                <span className="aim-num">{step.num}</span>
                <div>
                  <span className="mono aim-step-label">{step.label}</span>
                  <p className="aim-step-body">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="aim-visual" delay={80}>
            <DriftChat />
          </Reveal>
        </div>

        <Reveal className="aim-negative" delay={40}>
          <span className="mono aim-negative-label">{NEGATIVE_LABEL}</span>
          <div className="aim-negative-grid">
            {NEGATIVE.map((item) => (
              <p className="aim-negative-item" key={item.claim}>
                <b>{item.claim}</b>
                {item.body}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
