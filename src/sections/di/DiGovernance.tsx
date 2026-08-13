import Reveal from "../../components/Reveal";
import "./DiGovernance.css";

/* The two-sentence governance note is verbatim from docs/copy-deck-v2-home.md
   §6 ("required, do not drop") and is set at statement scale rather than as a
   footnote: on an extraction page it is the load-bearing claim. The support
   line is the statement's other half from the v1 deck §5. */
const EYEBROW = "WHERE IT STOPS";
const STATEMENT = "Nothing is booked from a document. Extraction ends at a draft someone approves.";
const SUPPORT =
  "The same holds for a custodian statement. It is read, structured and reconciled against the book, and it still waits on a human.";

export default function DiGovernance() {
  return (
    <section className="section di-gov" id="governance" aria-labelledby="di-gov-title">
      <Reveal className="container container--narrow di-gov-inner">
        <span className="eyebrow">{EYEBROW}</span>
        <h2 className="section-title di-gov-title" id="di-gov-title">
          {STATEMENT}
        </h2>
        <p className="di-gov-support">{SUPPORT}</p>
      </Reveal>
    </section>
  );
}
