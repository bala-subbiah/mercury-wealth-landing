import Reveal from "../../components/Reveal";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../links";
import "./DiFinalCta.css";

/* The single relentless CTA, worded exactly as it is everywhere else. The
   subhead claims only what the home's final act already claims about the demo
   (docs/copy-deck-v2-home.md §9): it is the product, on a full book, ungated.
   No claim is made about what a reader will find in it beyond that. */
const TITLE = "Open it and look.";
const SUBHEAD =
  "No form and no sign-up. The demo is the product itself, running on a full book: the same drafts, the same approvals, the same audit trail.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "Explore the Cockpit";
const ASIDE_LEAD = "Look first, on your own. If you would rather talk it through, ";
const ASIDE_LINK = "request a conversation";
const ASIDE_TAIL = ".";
const MICRO = "HONG KONG · SINGAPORE";

export default function DiFinalCta() {
  return (
    <section className="section di-final" id="final-cta" aria-labelledby="di-final-title">
      <Reveal className="container di-final-inner">
        <h2 className="section-title di-final-title" id="di-final-title">
          {TITLE}
        </h2>
        <p className="di-final-sub">{SUBHEAD}</p>

        <div className="cta-row di-final-ctas">
          <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
            {CTA_PRIMARY}
          </a>
          <a className="cta-secondary cta-secondary--forward" href="/cockpit/">
            {CTA_SECONDARY}
          </a>
        </div>

        <p className="di-final-aside">
          {ASIDE_LEAD}
          <a className="text-link" href={CONVERSATION_MAILTO}>
            {ASIDE_LINK}
          </a>
          {ASIDE_TAIL}
        </p>

        <p className="mono di-final-micro">{MICRO}</p>
      </Reveal>
    </section>
  );
}
