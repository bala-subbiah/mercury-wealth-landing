import ComplianceEvidence from "../../components/product/ComplianceEvidence";
import Reveal from "../../components/Reveal";
import "./TrustEvidence.css";

/* The one home of the ComplianceEvidence recreation. It was built and then
   rendered nowhere; this is the page it was always for.

   The panel stays dark on the paper ground. That is the product-surface rule in
   design.md, not an exception to the banding: luminous status colour and panel
   chrome belong to the software, and the software looks the same wherever it is
   shown. */

const EYEBROW = "THE EVIDENCE";
const TITLE = "Assembled as the work happens.";
const BODY =
  "The pack an inspection asks for is not gathered in the week before the inspection. Call reports, proposal approvals, audit-log extracts and suitability reviews land on the record as the quarter runs, each one attached to the household and the decision it belongs to.";
const CAPTION = "COMPLIANCE COPILOT · THE QUARTER ASSEMBLING ITSELF";

export default function TrustEvidence() {
  return (
    <section className="section on-paper te" id="evidence" aria-labelledby="te-title">
      <div className="container container--narrow">
        <Reveal className="section-head te-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title te-title" id="te-title">
            {TITLE}
          </h2>
          <p className="body-copy">{BODY}</p>
        </Reveal>

        <Reveal className="te-stage" delay={60}>
          <ComplianceEvidence />
          <p className="mono te-caption">{CAPTION}</p>
        </Reveal>
      </div>
    </section>
  );
}
