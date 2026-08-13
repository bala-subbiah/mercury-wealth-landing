import LogoStrip from "../../components/company/LogoStrip";
import Reveal from "../../components/Reveal";
import "./LogoProof.css";

/* Copy — docs/copy-deck-v2-home.md §2. The label claims no revenue, no
   endorsement and no scale; do not upgrade it, and add no relationship detail
   beneath it (docs/v2-plan.md §3.3 and §6 #4). The buyer-list line that used
   to sit here repeated the hero subhead and was cut. */
const LABEL = "WORKING WITH";

/**
 * The proof strip — the quietest band on the page by design, a thin hairline
 * rest between the hero and the engine catalog.
 */
export default function LogoProof() {
  return (
    <section className="section lp" id="proof" data-section="proof" aria-label="Working with">
      <Reveal className="container lp-inner">
        <LogoStrip label={LABEL} className="lp-strip" />
      </Reveal>
    </section>
  );
}
