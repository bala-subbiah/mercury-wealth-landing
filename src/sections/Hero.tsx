import { useEffect, useState } from "react";

import ResearchAnswer from "../components/product/ResearchAnswer";
import { useReducedMotion } from "../components/product/useReducedMotion";
import { DEMO_LINK_PROPS } from "../links";
import "./Hero.css";

/* Copy — docs/copy-deck.md §1, re-cut for v2 (docs/v2-plan.md §4.10, §5 "no
   signature visual repeats on the home → /cockpit path").

   The morning-briefing recreation and the line it carried, "Your morning,
   already prepared.", are the home hero's: a reader arriving here from home
   would have met both one click earlier. This hero takes the line the plan
   reserves for exactly this page instead (§6 #10, "Every custodian. One
   cockpit.") and puts the book itself beside it, answering a question that
   spans all of it. The support line keeps the attention-feed sentence, which
   is what the cockpit does whatever panel is on screen. */
const EYEBROW = "MERCURY COCKPIT · THE FLAGSHIP ENGINE";
const HEADLINE = "Every custodian. One cockpit.";
const SUBHEAD =
  "Monitor the book, advise the client, execute with governance. Every booking centre on one screen, in your base currency.";
const SUPPORT =
  "Drift, breaches, maturities, pending approvals and today’s reviews. Ranked before you sit down. One book, so a question about all of it has one answer.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See how it works";
const CAPTION = "NO FORM · NO SIGN-UP · THE REAL PRODUCT";
const VISUAL_LABEL = "Mercury: one question asked against the whole book, answered by exposure";

const SMALL_SCREEN = "(max-width: 640px)";

/**
 * The cockpit claim: one book across every custodian, close enough to hand
 * that a question about all of it has a single answer.
 *
 * The video is only mounted on pointer-class widths with motion allowed — on
 * phones and under `prefers-reduced-motion` a static navy gradient stands in
 * and the file is never requested.
 */
export default function Hero() {
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
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {/* The still is the ground, not a fallback — it is painted before the
            video decodes, so there is no poster flash, and it is what remains
            visible if the file never decodes at all. */}
        <div className="hero-still" />
        {showVideo ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            {/* Compressed self-hosted master (q_auto:low transcode of the
                graded HK night footage) — no remote dependency, per design.md
                hard rule 7. */}
            <source src="/videos/hk-skyline-lo.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{EYEBROW}</span>
          <h1 className="hero-title" id="hero-title">
            {HEADLINE}
          </h1>
          <p className="hero-sub">{SUBHEAD}</p>

          <div className="cta-row hero-ctas">
            <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
              {CTA_PRIMARY}
            </a>
            <a className="cta-secondary" href="#how-it-works">
              {CTA_SECONDARY}
            </a>
          </div>

          <p className="hero-support">{SUPPORT}</p>
          <p className="mono hero-caption">{CAPTION}</p>
        </div>

        <div className="hero-visual" role="group" aria-label={VISUAL_LABEL}>
          <ResearchAnswer animate={!reducedMotion} />
        </div>
      </div>
    </section>
  );
}
