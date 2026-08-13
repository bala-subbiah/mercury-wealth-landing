import Reveal from "../components/Reveal";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../links";
import "./FinalCta.css";

/* Copy — docs/copy-deck.md §14. The pledge line is re-cut from the deck's
   "no discovery call": the demo is still ungated, and a conversation is now
   available to anyone who wants one. Neither claim contradicts the other. */
const TITLE = "Open it. It’s the actual product.";
const SUBHEAD =
  "No form, no sign-up, no slide deck. The cockpit, the attention feed, a real book with real drift in it, open on your screen in the time it takes to read this line.";
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
