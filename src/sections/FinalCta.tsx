import Reveal from "../components/Reveal";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../links";
import "./FinalCta.css";

/* Copy — docs/copy-deck.md §14. The pledge line is re-cut from the deck's
   "no discovery call": the demo is still ungated, and a conversation is now
   available to anyone who wants one. Neither claim contradicts the other.

   "Open it. It's the actual product." was the defensive register v2 retired
   from home and /document-intelligence but left standing here
   (docs/critique-v2.md P1-9): it argues with a doubt the reader has not voiced
   yet. The line now states what is in the demo instead, in the same offer
   register as the other two final acts and without repeating either of their
   sentences. The subhead's four-comma trailing clause is recast for the same
   reason (P1-10). */
const TITLE = "Open the cockpit on a full book.";
const SUBHEAD =
  "No form, no sign-up, no slide deck. The cockpit and the attention feed open on a real book, with the drift, the proposals and the approvals already in it.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See how it works";
const ASIDE_LEAD = "Nothing here needs booking first. If you would rather talk it through, ";
const ASIDE_LINK = "request a conversation";
const ASIDE_TAIL = ".";
const MICRO = "HONG KONG · SINGAPORE";

export default function FinalCta() {
  return (
    <section className="section final" aria-labelledby="final-title">
      <Reveal className="container final-inner">
        <h2 className="final-title" id="final-title">
          {TITLE}
        </h2>
        <p className="final-sub">{SUBHEAD}</p>

        <div className="cta-row final-ctas">
          <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
            {CTA_PRIMARY}
          </a>
          <a className="cta-secondary" href="#how-it-works">
            {CTA_SECONDARY}
          </a>
        </div>

        <p className="final-aside">
          {ASIDE_LEAD}
          <a className="text-link" href={CONVERSATION_MAILTO}>
            {ASIDE_LINK}
          </a>
          {ASIDE_TAIL}
        </p>

        <p className="mono final-micro">{MICRO}</p>
      </Reveal>
    </section>
  );
}
