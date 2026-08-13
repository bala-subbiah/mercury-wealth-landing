import Reveal from "../../components/Reveal";
import "./TrustStatus.css";

/* Two short blocks: what is certified today, and what an answer to a
   questionnaire actually costs.

   CERTS and HONESTY are exact and must never be upgraded. "Audit underway" and
   "in progress" are the whole point of them; the day either is held, the line
   changes and not before.

   The export block restates a claim the site already carries (the audit log is
   filtered and exported, never edited or deleted; the pack lands in the shape an
   inspection request expects). No turnaround time is promised, here or
   anywhere. */

const CERTS_EYEBROW = "STATUS TODAY";
const CERTS_TITLE = "Certifications.";
const CERTS = "SOC 2 TYPE II: AUDIT UNDERWAY · ISO 27001: CERTIFICATION IN PROGRESS";
const HONESTY = "Applied for and in progress. Neither is held today; we’ll say so the day they are.";

const EXPORT_EYEBROW = "ANSWERING THE QUESTIONNAIRE";
const EXPORT_TITLE = "The answer is an export, not a project.";
const EXPORT_BODY =
  "The audit log and the suitability evidence behind it can be filtered to the range a questionnaire asks about and exported in the shape an SFC or MAS inspection request expects. Answering is a matter of selecting that range, because the export comes off the same record the work was done on.";

export default function TrustStatus() {
  return (
    // Two headings of equal rank sit in this band, so it is labelled directly
    // rather than by one of them.
    <section
      className="section on-paper tst"
      id="status"
      aria-label="Certification status and questionnaire exports"
    >
      <div className="container container--narrow tst-inner">
        <Reveal className="tst-block">
          <span className="eyebrow">{CERTS_EYEBROW}</span>
          <h2 className="section-title tst-title">{CERTS_TITLE}</h2>
          <p className="mono tst-certs-line">{CERTS}</p>
          <p className="tst-honesty">{HONESTY}</p>
        </Reveal>

        <Reveal className="tst-block" delay={60}>
          <span className="eyebrow">{EXPORT_EYEBROW}</span>
          <h2 className="section-title tst-title">{EXPORT_TITLE}</h2>
          <p className="tst-body">{EXPORT_BODY}</p>
        </Reveal>
      </div>
    </section>
  );
}
