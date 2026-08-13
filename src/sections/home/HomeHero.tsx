import { useEffect, useState } from "react";

import { MorningBriefing } from "../../components/product";
import { useReducedMotion } from "../../components/product/useReducedMotion";
import { DEMO_LINK_PROPS } from "../../links";
import "./HomeHero.css";

/* Copy — docs/copy-deck-v2-home.md §1, with the v2 plan's two amendments:
   the orienting clause is added in the support position so a first-time reader
   is not left decoding the metaphor (plan §3.1 / §6 #10), and the subhead no
   longer opens on "Six engines" because the clause above it now says that.
   Em-dashes rewritten per plan §6 #13.

   The visual is the MorningBriefing recreation, single and full size: the
   three-vignette switcher was a catalog moment competing with the catalog act
   two screens below it. */
const EYEBROW = "ENGINES FOR WEALTH FIRMS · HONG KONG & SINGAPORE";
const HEADLINE = "The engines that run your wealth business.";
const LEDE =
  "Six licensable engines: briefing, documents, workflows, meetings, research, compliance. Each valuable alone, one spine underneath.";
const SUBHEAD =
  "Built for external asset managers, private banks and brokerages in Hong Kong and Singapore. Start with one, add the rest as they earn their place, or run the whole cockpit from day one.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See the engines";
const CAPTION = "SIX ENGINES · ONE SPINE · NO FORM · NO SIGN-UP";
const VISUAL_LABEL = "Mercury Cockpit: the morning briefing, live view";

const SMALL_SCREEN = "(max-width: 640px)";

/**
 * The company claim.
 *
 * Video handling is the cockpit hero's, unchanged: the graded HK footage is
 * only mounted on pointer-class widths with motion allowed — on phones and
 * under `prefers-reduced-motion` a static navy gradient stands in and the file
 * is never requested.
 */
export default function HomeHero() {
  const reducedMotion = useReducedMotion();
  const [smallScreen, setSmallScreen] = useState<boolean>(() =>
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(SMALL_SCREEN).matches
      : false,
  );

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mql = window.matchMedia(SMALL_SCREEN);
    const onChange = (event: MediaQueryListEvent) => setSmallScreen(event.matches);
    setSmallScreen(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const showVideo = !reducedMotion && !smallScreen;

  return (
    <section className="home-hero" id="hero" data-section="hero" aria-labelledby="home-hero-title">
      <div className="home-hero-media" aria-hidden="true">
        <div className="home-hero-still" />
        {showVideo ? (
          <video
            className="home-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            <source src="/videos/hk-skyline-lo.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="home-hero-scrim" aria-hidden="true" />

      <div className="container hh-grid">
        <div className="hh-copy">
          <span className="eyebrow">{EYEBROW}</span>
          <h1 className="hh-title" id="home-hero-title">
            {HEADLINE}
          </h1>
          <p className="hh-lede">{LEDE}</p>
          <p className="hh-sub">{SUBHEAD}</p>

          <div className="cta-row hh-ctas">
            <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
              {CTA_PRIMARY}
            </a>
            <a className="cta-secondary" href="#engines">
              {CTA_SECONDARY}
            </a>
          </div>

          <p className="mono hh-caption">{CAPTION}</p>
        </div>

        <div className="hh-visual" role="group" aria-label={VISUAL_LABEL}>
          <MorningBriefing animate={!reducedMotion} />
        </div>
      </div>
    </section>
  );
}
