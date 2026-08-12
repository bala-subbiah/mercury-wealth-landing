import { TermSheetDissolve } from "../../components/product";
import Reveal from "../../components/Reveal";
import "./DocIntelAct.css";

/* Copy — docs/copy-deck-v2-home.md §6, verbatim. The human-in-the-loop line is
   required and must not be dropped. The term-sheet dissolve lives here and
   nowhere else on this page — the hero switcher deliberately does not play it,
   so the extraction is seen once, at full size. */
const EYEBROW = "DOCUMENT INTELLIGENCE";
const TITLE = "Start with the engine that hurts most.";
const BODY =
  "Document Intelligence runs on its own: point it at the term sheets, custodian statements and client documents piling up in a shared inbox, and it returns structured, queryable data with every field shown next to the clause it came from. Firms that begin here keep the cockpit for year two — and when they take it, the documents they have already processed are sitting on the spine waiting for it.";
const NEGATIVE = "Nothing is booked from a document. Extraction ends at a draft someone approves.";

export default function DocIntelAct() {
  return (
    <section
      className="section di"
      id="intelligence"
      data-section="doc-intelligence"
      aria-labelledby="di-title"
    >
      <div className="container">
        <div className="di-head">
          <Reveal className="section-head di-head-copy">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title di-title" id="di-title">
              {TITLE}
            </h2>
          </Reveal>

          <Reveal className="di-head-body" delay={60}>
            <p className="body-copy">{BODY}</p>
          </Reveal>
        </div>

        <Reveal className="di-visual" delay={40}>
          <TermSheetDissolve revealOnScroll />
        </Reveal>

        <Reveal className="di-foot" delay={60}>
          <p className="di-negative">{NEGATIVE}</p>
        </Reveal>
      </div>
    </section>
  );
}
