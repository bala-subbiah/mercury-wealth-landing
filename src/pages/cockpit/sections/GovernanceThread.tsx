import Reveal from "../../../chrome/Reveal.tsx";
import "./GovernanceThread.css";

/* Condensed GovernanceAct (fact source §2). Title and tightened subhead are
   verbatim/near-verbatim; the long body paragraph is dropped per the task
   brief in favour of the lifecycle thread — a sanctioned product fragment,
   not one of the deleted tag strips. */

const STAGES = ["DRAFT", "VERSIONS", "APPROVAL", "E-SIGN", "ORDER", "TIMELINE"];

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
              <li className="gov-thread__chip-wrap" key={stage}>
                <span className="gov-thread__chip">{stage}</span>
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
