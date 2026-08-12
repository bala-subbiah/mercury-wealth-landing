import { useEffect, useState } from "react";

import { MorningBriefing } from "../components/product";
import { useReducedMotion } from "../components/product/useReducedMotion";
import "./Hero.css";

/* Copy — docs/copy-deck.md §1, verbatim. */
const EYEBROW = "THE ADVISOR'S COCKPIT · HONG KONG & SINGAPORE";
const HEADLINE = "Your morning, already prepared.";
const SUBHEAD =
  "Monitor the book, advise the client, execute with governance — every custodian, every booking centre, on one screen, in your base currency.";
const SUPPORT =
  "Drift, breaches, maturities, pending approvals and today's reviews — ranked before you sit down.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See how it works";
const CAPTION = "NO FORM · NO SALES CALL · THE REAL PRODUCT";

const SMALL_SCREEN = "(max-width: 640px)";

/**
 * The morning-briefing moment.
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
            <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
              {CTA_PRIMARY}
            </a>
            <a className="cta-secondary" href="#how-it-works">
              {CTA_SECONDARY}
            </a>
          </div>

          <p className="hero-support">{SUPPORT}</p>
          <p className="mono hero-caption">{CAPTION}</p>
        </div>

        <div className="hero-visual">
          <MorningBriefing />
        </div>
      </div>
    </section>
  );
}
