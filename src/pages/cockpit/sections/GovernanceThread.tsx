import Reveal from "../../../chrome/Reveal.tsx";
import "./GovernanceThread.css";

/* Condensed GovernanceAct (fact source §2). Title and tightened subhead are
   verbatim/near-verbatim; the long body paragraph is dropped per the task
   brief in favour of the lifecycle thread — a sanctioned product fragment,
   not one of the deleted tag strips.

   Wave 2: the thread stops being six chips that fade in together and becomes
   the record being written, ~1.75s end to end. Each stage lights 260ms after
   the one before it; between them the connecting hairline draws left to
   right (scaleX), so the eye is pulled along the lifecycle in the order the
   copy describes. Two stages are gates rather than events, and pick up a
   status tick as they pass: four eyes on APPROVAL, a signature on E-SIGN.
   The ticks are luminous (design.md hard rule 1 allows it: this is a product
   fragment on a dark surface) and they persist — they are part of the
   resolved record, not a working state, so reduced motion renders them too.

   The stage order, wording and hairline treatment are unchanged. */

type Stage = {
  label: string;
  mark?: "four-eyes" | "signature";
};

const STAGES: Stage[] = [
  { label: "DRAFT" },
  { label: "VERSIONS" },
  { label: "APPROVAL", mark: "four-eyes" },
  { label: "E-SIGN", mark: "signature" },
  { label: "ORDER" },
  { label: "TIMELINE" },
];

const MARK_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* Two people, the four-eyes check. */
function FourEyesMark() {
  return (
    <svg viewBox="0 0 16 12" {...MARK_PROPS}>
      <circle cx="5" cy="4" r="2.1" />
      <path d="M1.4 10.6c0-1.9 1.6-3.1 3.6-3.1s3.6 1.2 3.6 3.1" />
      <circle cx="11.8" cy="4.6" r="1.7" />
      <path d="M9.4 10.6c0-1.5 1.1-2.5 2.4-2.5s2.4 1 2.4 2.5" />
    </svg>
  );
}

/* A signature, the client's acceptance. */
function SignatureMark() {
  return (
    <svg viewBox="0 0 16 12" {...MARK_PROPS}>
      <path d="M1.4 8.2c1.7-.3 2.4-6.4 3.8-6.4s.7 6.6 2.1 6.6 1.8-3.6 3-3.6 1.4 2 2.5 2" />
      <path d="M1.4 10.9h13.2" />
    </svg>
  );
}

export default function GovernanceThread() {
  return (
    <section className="gov-thread band band--navy">
      <div className="container">
        <Reveal as="div" className="gov-thread__head">
          <h2 className="gov-thread__title">The audit trail writes itself.</h2>
          <p className="gov-thread__sub">
            From the drift you caught this morning to the signed proposal to
            the placed order: one record, one timeline. Nothing is
            reconstructed afterwards.
          </p>
        </Reveal>

        <Reveal as="div" delay={80} className="gov-thread__strip">
          <ol className="gov-thread__chips">
            {STAGES.map((stage, index) => (
              <li className="gov-thread__chip-wrap" key={stage.label}>
                <span className="gov-thread__chip">
                  {stage.label}
                  {stage.mark && (
                    <span className="gov-thread__tick" aria-hidden="true">
                      {stage.mark === "four-eyes" ? <FourEyesMark /> : <SignatureMark />}
                    </span>
                  )}
                </span>
                {index < STAGES.length - 1 && <span className="gov-thread__link" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="p" delay={160} className="gov-thread__quote">
          The evidence was never a separate job.
        </Reveal>
      </div>
    </section>
  );
}
