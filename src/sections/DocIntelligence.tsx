import { TermSheetDissolve } from "../components/product";
import Reveal from "../components/Reveal";
import "./DocIntelligence.css";

/* Copy — docs/copy-deck.md §5, verbatim. */
const EYEBROW = "DOCUMENT INTELLIGENCE";
const TITLE = "The term sheet reads itself.";
const SUBHEAD =
  "A structured-note term sheet lands as a PDF. Mercury pulls out the issuer, the underlying, the barrier, the coupon condition and the maturity as structured fields — and carries them straight into a proposal draft with the numbers intact.";
const BODY =
  "This is the part of the day that has no upside: retyping a term sheet into a spreadsheet, then into a proposal, then checking whether the barrier you typed is the barrier the issuer wrote. Mercury reads the document, shows you every field it extracted next to the clause it came from, and waits. You correct anything that's wrong before it moves. Custodian statements that arrive as PDFs rather than feeds go the same way — read, structured, reconciled against the book.";
const BEATS = "DOCUMENT IN · FIELDS OUT · PROPOSAL DRAFTED";
const NEGATIVE = "Nothing is booked from a document. Extraction ends at a draft you approve.";

export default function DocIntelligence() {
  return (
    <section className="section doc" id="intelligence" aria-labelledby="doc-title">
      <div className="container">
        <div className="doc-head">
          <Reveal className="section-head">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title doc-title" id="doc-title">
              {TITLE}
            </h2>
            <p className="section-sub">{SUBHEAD}</p>
          </Reveal>

          <Reveal delay={70}>
            <p className="body-copy">{BODY}</p>
          </Reveal>
        </div>

        <Reveal className="doc-visual" delay={40}>
          <TermSheetDissolve revealOnScroll />
        </Reveal>

        <Reveal className="doc-foot" delay={60}>
          <span className="mono doc-beats">{BEATS}</span>
          <p className="doc-negative">{NEGATIVE}</p>
        </Reveal>
      </div>
    </section>
  );
}
