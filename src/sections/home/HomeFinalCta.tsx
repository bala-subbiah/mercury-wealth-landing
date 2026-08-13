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
/* Trimmed for the home word-count gate (docs/critique-v2.md P1-13): the
   colon list restated what the flagship act one screen above had just shown
   live. The offer itself is unchanged and still ungated. */
const SUBHEAD =
  "No form, no sign-up. The demo is the product itself, on a full book.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "Explore the Cockpit";
const ASIDE_LEAD = "Look first, on your own. Or ";
const ASIDE_LINK = "request a conversation";
const ASIDE_TAIL = ".";
const MICRO = "HONG KONG · SINGAPORE";

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
