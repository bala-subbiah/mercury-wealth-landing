import Reveal from "../components/Reveal";
import "./TrustPillars.css";

/* Copy — docs/copy-deck.md §11, verbatim. The certifications line and the
   honesty note beneath it are exact and must never be upgraded. */
const EYEBROW = "GOVERNANCE & SECURITY";
const TITLE = "Answers, in the form your compliance officer asks for them.";
const SUBHEAD =
  "Six questions every due-diligence questionnaire gets to. Here they are, answered plainly.";

const PILLARS = [
  {
    claim: "Immutable audit log.",
    mechanism:
      "Every material action is written once, with actor, timestamp and before/after state; entries can be filtered and exported, never edited or deleted.",
  },
  {
    claim: "Versioned proposals.",
    mechanism:
      "Every revision is kept in full, so the version the client accepted is retrievable exactly as they saw it.",
  },
  {
    claim: "Four-eyes approvals.",
    mechanism:
      "Material actions require a second named approver, recorded on the same record as the action they cleared.",
  },
  {
    claim: "E-signature trail.",
    mechanism:
      "Client acceptance is captured in-app or by e-signature and bound to the specific proposal version signed.",
  },
  {
    claim: "Hong Kong and Singapore data residency.",
    mechanism:
      "Client data is stored and processed in-region, so cross-border data questions have a one-line answer.",
  },
  {
    claim: "No training on client data.",
    mechanism:
      "Your clients' data is never used to train models, and is never pooled with any other firm’s.",
  },
];

const CERTS = "SOC 2 TYPE II: AUDIT UNDERWAY · ISO 27001: CERTIFICATION IN PROGRESS";
const HONESTY = "Applied for and in progress. Neither is held today; we’ll say so the day they are.";

export default function TrustPillars() {
  return (
    <section className="section trust" id="trust" aria-labelledby="trust-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title trust-title" id="trust-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <div className="trust-grid">
          {PILLARS.map((pillar, index) => (
            <Reveal className="trust-pillar" key={pillar.claim} delay={(index % 3) * 60}>
              <h3 className="trust-claim">{pillar.claim}</h3>
              <p className="trust-mech">{pillar.mechanism}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="trust-certs" delay={40}>
          <p className="mono trust-certs-line">{CERTS}</p>
          <p className="trust-honesty">{HONESTY}</p>
        </Reveal>
      </div>
    </section>
  );
}
