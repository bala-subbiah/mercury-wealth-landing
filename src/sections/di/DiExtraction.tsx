import { TermSheetDissolve } from "../../components/product";
import Reveal from "../../components/Reveal";
import "./DiExtraction.css";

/* The headline and the beats line are the v1 deck §5 strings. They are lifted
   here rather than paraphrased because the /cockpit act that carried them is
   gone (docs/v2-plan.md §4 task 10), so nothing on the site collides with
   them. The intro is new and deliberately one sentence: the recreation is the
   argument. */
const EYEBROW = "THE EXTRACTION";
const TITLE = "The term sheet reads itself.";
const INTRO =
  "Mercury reads the document and shows every field it extracted next to the clause it came from, down to the page and the section it was lifted from.";
const BEATS = "DOCUMENT IN · FIELDS OUT · PROPOSAL DRAFTED";

export default function DiExtraction() {
  return (
    <section className="section di-ext" id="extraction" aria-labelledby="di-ext-title">
      <div className="container">
        <Reveal className="section-head di-ext-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title di-ext-title" id="di-ext-title">
            {TITLE}
          </h2>
          <p className="section-sub">{INTRO}</p>
        </Reveal>

        <Reveal className="di-ext-visual" delay={40}>
          <TermSheetDissolve revealOnScroll />
        </Reveal>

        <Reveal className="di-ext-foot" delay={60}>
          <span className="mono di-ext-beats">{BEATS}</span>
        </Reveal>
      </div>
    </section>
  );
}
