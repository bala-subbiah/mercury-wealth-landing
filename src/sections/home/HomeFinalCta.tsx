import Reveal from "../../components/Reveal";
import "./HomeFinalCta.css";

/* Copy — docs/copy-deck-v2-home.md §9, verbatim. Primary CTA reads exactly
   "Open the live demo"; the secondary is the cockpit link, worded exactly as
   it is everywhere else on the page. No form, ever. */
const TITLE = "Start with one engine. Or open all of it.";
const SUBHEAD =
  "There is no form and nothing to book. The demo is the product itself, running on a full book — drift already in it, proposals in flight, the audit trail written as you go.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "Explore the Cockpit";
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
          <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
            {CTA_PRIMARY}
          </a>
          <a className="cta-secondary cta-secondary--forward" href="/cockpit/">
            {CTA_SECONDARY}
          </a>
        </div>

        <p className="mono hfc-micro">{MICRO}</p>
      </Reveal>
    </section>
  );
}
