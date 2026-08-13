import Reveal from "../../components/Reveal";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../links";
import "./HomeFinalCta.css";

/* Copy — docs/copy-deck-v2-home.md §9. Primary CTA reads exactly "Open the
   live demo"; the secondary is the cockpit link, worded exactly as it is
   everywhere else on the page. The demo stays ungated; the conversation below
   it is offered, never required. */
/* "Start with one engine." spent a third home headline on the metaphor; the
   quota is two sitewide (docs/v2-plan.md §4.6) and the cards two acts above
   have already established what "one" means. */
const TITLE = "Start with one. Or open all of it.";
const SUBHEAD =
  "There is no form and no sign-up. The demo is the product itself, running on a full book: drift already in it, proposals in flight, the audit trail written as you go.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "Explore the Cockpit";
const ASIDE_LEAD = "Look first, on your own. If you would rather talk it through, ";
const ASIDE_LINK = "request a conversation";
const ASIDE_TAIL = ".";
const MICRO = "SIX ENGINES · ONE SPINE · HONG KONG · SINGAPORE";

export default function HomeFinalCta() {
  return (
    <section
      className="section hfc"
      id="final-cta"
      data-section="final-cta"
      aria-labelledby="hfc-title"
    >
      <Reveal className="container hfc-inner">
        <h2 className="hfc-title" id="hfc-title">
          {TITLE}
        </h2>
        <p className="hfc-sub">{SUBHEAD}</p>

        <div className="cta-row hfc-ctas">
          <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
            {CTA_PRIMARY}
          </a>
          <a className="cta-secondary cta-secondary--forward" href="/cockpit/">
            {CTA_SECONDARY}
          </a>
        </div>

        <p className="hfc-aside">
          {ASIDE_LEAD}
          <a className="text-link" href={CONVERSATION_MAILTO}>
            {ASIDE_LINK}
          </a>
          {ASIDE_TAIL}
        </p>

        <p className="mono hfc-micro">{MICRO}</p>
      </Reveal>
    </section>
  );
}
