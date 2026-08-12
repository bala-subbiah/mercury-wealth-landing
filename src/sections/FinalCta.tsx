import Reveal from "../components/Reveal";
import "./FinalCta.css";

/* Copy — docs/copy-deck.md §14, verbatim. */
const TITLE = "Open it. It's the actual product.";
const SUBHEAD =
  "No form, no discovery call, no slide deck. The cockpit, the attention feed, a real book with real drift in it — open on your screen in the time it takes to read this line.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See how it works";
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
          <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
            {CTA_PRIMARY}
          </a>
          <a className="cta-secondary" href="#how-it-works">
            {CTA_SECONDARY}
          </a>
        </div>

        <p className="mono final-micro">{MICRO}</p>
      </Reveal>
    </section>
  );
}
