import Reveal from "../../../chrome/Reveal.tsx";
import "./TrustStatus.css";

/* Certifications status — navy band, its own dark stripe (design DNA #6:
   "trust/security: its own dark band"). The certification strings and the
   honesty note are a single sanctioned string used sitewide
   (docs/v3-fact-source.md SS4/SS8): rendered verbatim, unshortened,
   unparaphrased, as two text-only badge cells. No seals, no fake marks. */

const QUESTIONNAIRE_BODY =
  "The audit log and the suitability evidence behind it can be filtered to the range a questionnaire asks about and exported in the shape an SFC or MAS inspection request expects.";

export default function TrustStatus() {
  return (
    <section className="band band--navy trust-status">
      <div className="container">
        <div className="trust-status__grid">
          <div className="trust-status__certs">
            <Reveal as="h2" className="trust-status__title">
              Where the certifications stand.
            </Reveal>

            <Reveal className="trust-status__badges" delay={80}>
              <span className="trust-status__badge">SOC 2 TYPE II: AUDIT UNDERWAY</span>
              <span className="trust-status__badge">
                ISO 27001: CERTIFICATION IN PROGRESS
              </span>
            </Reveal>

            <Reveal as="p" className="trust-status__note" delay={140}>
              Applied for and in progress. Neither is held today; we&rsquo;ll
              say so the day they are.
            </Reveal>
          </div>

          <Reveal as="div" className="trust-status__questionnaire" delay={100}>
            <h2 className="trust-status__title">
              The answer is an export, not a project.
            </h2>
            <p className="trust-status__body">{QUESTIONNAIRE_BODY}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
