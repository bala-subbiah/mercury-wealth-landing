import Reveal from "../../../chrome/Reveal.tsx";
import "./TrustEvidence.css";

/* Evidence — paper band, simplified product fragment (a small stack of
   evidence-item chips filing into a folder), rather than a dense recreation.
   Caption is the audited exact string from the ComplianceEvidence
   recreation (docs/v3-fact-source.md SS4/SS9). Body verbatim, trimmed to
   fit the 3-line marketing measure. */

const CHIPS = ["CALL REPORT", "APPROVAL", "AUDIT EXTRACT", "REVIEW"];

export default function TrustEvidence() {
  return (
    <section className="band band--paper trust-evidence">
      <div className="container trust-evidence__grid">
        <div>
          <Reveal as="h2" className="trust-evidence__title">
            Assembled as the work happens.
          </Reveal>
          <Reveal as="p" className="trust-evidence__body" delay={80}>
            The pack an inspection asks for is not gathered in the week
            before the inspection. Call reports, proposal approvals,
            audit-log extracts and suitability reviews land on the record as
            the quarter runs.
          </Reveal>
        </div>

        <Reveal className="trust-evidence__fragment" delay={120}>
          <div className="trust-evidence__chips">
            {CHIPS.map((chip) => (
              <span className="trust-evidence__chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="trust-evidence__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 40" fill="none">
              <path
                d="M12 1v33"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 27l8 8 8-8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="trust-evidence__folder">
            <span className="trust-evidence__folder-caption">
              INSPECTION PACK &middot; Q2 2026 &middot; ASSEMBLING
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
