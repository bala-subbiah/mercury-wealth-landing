import Reveal from "../components/Reveal";
import "./TrustPillars.css";

/* Copy — docs/copy-deck.md §11, verbatim except the residency mechanism. The
   certifications line and the honesty note beneath it are exact and must never
   be upgraded.

   The residency pillar used to state in-region storage and processing as a
   present-tense deployed fact while home and /trust hedged the same claim as a
   design commitment, so a reader of two pages caught the site contradicting
   itself (docs/critique-v2.md P0-4). It now carries the AsiaTrustBand wording
   word for word; if one moves, move the other. */
/* The headline used to be /trust's, word for word, on the highest-intent page
   (docs/critique-v2.md P1-9). /trust keeps that sentence, because the whole
   page is the answer; this act is one band inside the cockpit page, so it
   names what the band actually shows: six claims, each with the mechanism
   underneath it. The subhead's old "six questions every due-diligence
   questionnaire gets to" made a universal claim about questionnaires out of
   Mercury's own pillar count (P1-11); six is what Mercury answers. */
const EYEBROW = "GOVERNANCE & SECURITY";
const TITLE = "Governance, with the mechanism attached.";
const SUBHEAD =
  "The six answers a due-diligence reviewer opens with, each one naming the mechanism rather than the intention.";

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
      "Built for in-region deployment in Hong Kong and Singapore, so client data does not have to leave the region it is regulated in.",
  },
  {
    claim: "No training on client data.",
    mechanism:
      "Your clients’ data is never used to train models, and is never pooled with any other firm’s.",
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
