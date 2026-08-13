import Reveal from "../../components/Reveal";
import "./DiHowItWorks.css";

/* Three steps in the AiMechanism idiom (numbered rail, mono label, one short
   body each) with no new capability claim: the inputs, the fields and the
   approval gate all come from the v1 deck §5 and the home engine card. The
   /cockpit "colleague who prepped overnight" framing is not repeated here. */
const EYEBROW = "HOW IT WORKS";
const TITLE = "Three steps. A person at the end of them.";

const STEPS = [
  {
    num: "01",
    label: "POINT IT AT THE DOCUMENTS",
    body: "Term sheets, custodian statements and client documents go in as they arrive, as PDF, Excel, Word, or straight out of the inbox they landed in.",
  },
  {
    num: "02",
    label: "IT RETURNS STRUCTURED FIELDS",
    body: "Issuer, underlying, barrier, coupon condition, maturity. Positions and valuations off a statement. Each field queryable, each one carrying the clause it was read from.",
  },
  {
    num: "03",
    label: "YOU APPROVE",
    body: "Every field lands in a draft with your name on the approval. Corrections are made against the source clause, before anything moves.",
  },
];

export default function DiHowItWorks() {
  return (
    <section className="section di-how" id="how-it-works" aria-labelledby="di-how-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title di-how-title" id="di-how-title">
            {TITLE}
          </h2>
        </Reveal>

        <ol className="di-how-rail">
          {STEPS.map((step, index) => (
            <Reveal as="li" className="di-how-step" key={step.num} delay={index * 70}>
              <span className="di-how-num">{step.num}</span>
              <div className="di-how-body">
                <span className="mono di-how-label">{step.label}</span>
                <p className="di-how-text">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
