import { LogoStrip } from "../../components/company";
import Reveal from "../../components/Reveal";
import "./LogoProof.css";

/* Copy — docs/copy-deck-v2-home.md §2, verbatim. The label claims no revenue,
   no endorsement and no scale; do not upgrade it. */
const LABEL = "WORKING WITH";
const BUYERS = "EAMs · PRIVATE BANKS · BROKERAGES · HONG KONG · SINGAPORE";

/**
 * The proof strip — the quietest band on the page by design, a thin hairline
 * rest between the hero and the engine catalog.
 */
export default function LogoProof() {
  return (
    <section className="section lp" id="proof" data-section="proof" aria-label="Working with">
      <Reveal className="container lp-inner">
        <LogoStrip label={LABEL} className="lp-strip" />
        <p className="mono lp-buyers">{BUYERS}</p>
      </Reveal>
    </section>
  );
}
