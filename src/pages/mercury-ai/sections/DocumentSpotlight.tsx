import Reveal from "../../../chrome/Reveal.tsx";
import "./DocumentSpotlight.css";

/* Document Intelligence spotlight — one alternating text-beside-visual row
   (fact source §6, DiExtraction/DiGovernance). Replaces v2's crowded
   TermSheetDissolve recreation with a simplified document -> fields
   fragment (team-feedback A7): a document card with three mono field
   chips that lift into a structured list on reveal. Field LABELS only
   (ISSUER, BARRIER, MATURITY) — no invented values. The document's own
   identity uses the audited specimen (fact source §9): Phoenix Autocallable
   Note on Tencent, ISIN CH1382044167. */

const FIELDS = ["ISSUER", "BARRIER", "MATURITY"];

export default function DocumentSpotlight() {
  return (
    <section className="mai-doc band band--paper">
      <div className="container mai-doc__grid">
        <Reveal as="div" className="mai-doc__text">
          <h2 className="mai-doc__title">The term sheet reads itself.</h2>
          <p className="mai-doc__body">
            Mercury reads the document and shows every field it extracted next to the clause it
            came from, down to the page and the section it was lifted from.
          </p>
          <p className="mai-doc__governance">
            Nothing is booked from a document. Extraction ends at a draft someone approves.
          </p>
        </Reveal>

        <div className="mai-doc__visual" aria-hidden="true">
          <Reveal as="div" delay={80} className="mai-doc__source">
            <div className="mai-doc__source-head">
              <span className="mai-doc__source-name">PHOENIX AUTOCALLABLE NOTE &middot; TENCENT</span>
              <span className="mai-doc__source-isin">ISIN CH1382044167</span>
            </div>
            <div className="mai-doc__lines">
              <span />
              <span />
              <span className="mai-doc__lines--short" />
            </div>
          </Reveal>

          <svg className="mai-doc__arrow" viewBox="0 0 24 40">
            <path
              d="M12 2v32m0 0-7-7m7 7 7-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <ul className="mai-doc__result">
            {FIELDS.map((field, index) => (
              <Reveal as="li" key={field} delay={160 + index * 90} className="mai-doc__chip">
                {field}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
