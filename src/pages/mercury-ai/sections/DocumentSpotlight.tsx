import Reveal, { useReveal } from "../../../chrome/Reveal.tsx";
import "./DocumentSpotlight.css";

/* Document Intelligence spotlight — one alternating text-beside-visual row
   (fact source §6, DiExtraction/DiGovernance). Replaces v2's crowded
   TermSheetDissolve recreation with a simplified document -> fields
   fragment (team-feedback A7).

   v3 wave 2: the fragment is no longer a static fade. On reveal it plays one
   continuous micro-story, ~1.9s end to end:

     0.0s  the specimen document card lands
     0.1s  it goes to work: the body lines dim and a mono working line
           ("Reading term sheet…") sits over them
     0.9s  the working line clears, the lines come back, the arrow fades in
     0.9s  the three field chips lift out one at a time (240ms apart)
     1.2s  each landed chip picks up its page reference

   End state: a structured list of field labels, each carrying the page and
   section it was lifted from — the "down to the page and the section" claim
   in the body copy, shown rather than asserted.

   Integrity: field LABELS only (ISSUER, BARRIER, MATURITY) — no invented
   values. The document's identity is the audited specimen (fact source §9):
   Phoenix Autocallable Note on Tencent, ISIN CH1382044167, 6 pages. The
   page references are deliberately generic locators inside that 6-page
   specimen; §9 records no exact ones. */

const FIELDS = [
  { label: "ISSUER", source: "P.1 §1" },
  { label: "BARRIER", source: "P.4 §2" },
  { label: "MATURITY", source: "P.5 §3" },
];

export default function DocumentSpotlight() {
  // One flag drives the whole sequence; the beat spacing lives in CSS
  // transition delays, so under prefers-reduced-motion the same markup is
  // simply already resolved.
  const { ref, shown } = useReveal<HTMLDivElement>();

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

        <div
          ref={ref}
          className={`mai-doc__visual${shown ? " is-story" : ""}`}
          aria-hidden="true"
        >
          <div className="mai-doc__source">
            <div className="mai-doc__source-head">
              <span className="mai-doc__source-name">PHOENIX AUTOCALLABLE NOTE &middot; TENCENT</span>
              <span className="mai-doc__source-isin">ISIN CH1382044167</span>
            </div>
            {/* The working line is pinned over the body lines, so the reading
                state and the resolved state occupy exactly the same box. */}
            <div className="mai-doc__lines-wrap">
              <div className="mai-doc__lines">
                <span />
                <span />
                <span className="mai-doc__lines--short" />
              </div>
              <p className="mai-doc__working">Reading term sheet…</p>
            </div>
          </div>

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
            {FIELDS.map((field) => (
              <li key={field.label} className="mai-doc__chip">
                <span className="mai-doc__chip-label">{field.label}</span>
                <span className="mai-doc__chip-source">{field.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
