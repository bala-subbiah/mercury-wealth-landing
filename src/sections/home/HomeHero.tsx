import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import { DriftChat, MorningBriefing } from "../../components/product";
import { useReducedMotion } from "../../components/product/useReducedMotion";
import "./HomeHero.css";

/* Copy — docs/copy-deck-v2-home.md §1, verbatim (RECOMMENDED headline). */
const EYEBROW = "ENGINES FOR WEALTH FIRMS · HONG KONG & SINGAPORE";
const HEADLINE = "The engines that run your wealth business.";
const SUBHEAD =
  "Six engines built for external asset managers, private banks and brokerages in Hong Kong and Singapore. Start with one and add the rest as they earn their place — or run the whole cockpit from day one.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See the engines";
const CAPTION = "SIX ENGINES · ONE SPINE · NO FORM · NO SALES CALL";

/* ---------------------------------------------------------------------------
   Engine switcher
   ---------------------------------------------------------------------------
   Two vignettes, not three: the deck's third switcher state is the Relationship
   Scribe, which has no designed screen yet ("Do not invent a scribe screen to
   fill the third slot", deck §1), and the term-sheet dissolve is given its own
   act further down the page rather than being played twice. Labels are the
   deck's engine names.
   --------------------------------------------------------------------------- */

interface Vignette {
  id: string;
  label: string;
  render: (animate: boolean) => ReactNode;
}

const VIGNETTES: Vignette[] = [
  {
    id: "cockpit",
    label: "MERCURY COCKPIT",
    render: (animate) => <MorningBriefing animate={animate} />,
  },
  {
    id: "research",
    label: "BOOK-AWARE RESEARCH",
    render: (animate) => <DriftChat animate={animate} />,
  },
];

/** Each vignette holds long enough to finish composing itself (the drift
    conversation's own script runs ~7.1s) and then be read for a beat. */
const DWELL_MS = 9500;
const FADE_MS = 320;
/** A click on a label parks the switcher on that engine for 20s. */
const PAUSE_MS = 20000;

function EngineSwitcher() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [pauseNonce, setPauseNonce] = useState(0);

  /* Height is reserved, never inherited: the stage keeps the tallest layer it
     has measured, so swapping vignettes cannot reflow the page beneath it. */
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const [reserve, setReserve] = useState(0);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || typeof ResizeObserver === "undefined") return;

    const measure = () => {
      const width = layer.offsetWidth;
      const height = layer.offsetHeight;
      if (!height) return;
      if (width !== widthRef.current) {
        widthRef.current = width;
        setReserve(height);
        return;
      }
      setReserve((previous) => (height > previous ? height : previous));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(layer);
    return () => observer.disconnect();
  }, [index]);

  /* Auto-advance. Not scheduled at all under reduced motion, or while a click
     has parked the switcher. */
  useEffect(() => {
    if (reducedMotion || paused) return;

    let fade: number | undefined;
    const hold = window.setTimeout(() => {
      setVisible(false);
      fade = window.setTimeout(() => {
        setIndex((current) => (current + 1) % VIGNETTES.length);
        setVisible(true);
      }, FADE_MS);
    }, DWELL_MS);

    return () => {
      window.clearTimeout(hold);
      if (fade !== undefined) window.clearTimeout(fade);
    };
  }, [index, paused, reducedMotion]);

  useEffect(() => {
    if (!paused) return;
    const timer = window.setTimeout(() => setPaused(false), PAUSE_MS);
    return () => window.clearTimeout(timer);
  }, [paused, pauseNonce]);

  const select = (next: number) => {
    setIndex(next);
    setVisible(true);
    setPaused(true);
    setPauseNonce((value) => value + 1);
  };

  const active = VIGNETTES[index];
  const layerClass = ["hs-layer", visible && !reducedMotion ? "hs-layer--on" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="hs">
      <div
        className="hs-stage"
        ref={stageRef}
        /* A floor, not a height: the stylesheet takes the larger of this and
           the breakpoint's own reserved band. */
        style={reserve ? ({ "--hs-reserve": `${reserve}px` } as CSSProperties) : undefined}
      >
        <div
          className={reducedMotion ? "hs-layer hs-layer--static" : layerClass}
          ref={layerRef}
          key={active.id}
          id={`engine-vignette-${active.id}`}
          role="group"
          aria-label={`${active.label} — live view`}
        >
          {active.render(!reducedMotion)}
        </div>
      </div>

      <div className="hs-tabs" role="group" aria-label="Choose an engine to preview">
        {VIGNETTES.map((vignette, position) => {
          const on = position === index;
          return (
            <button
              type="button"
              key={vignette.id}
              className={on ? "mono hs-tab hs-tab--on" : "mono hs-tab"}
              aria-pressed={on}
              onClick={() => select(position)}
            >
              <span className="hs-dot" aria-hidden="true" />
              {vignette.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Hero
   --------------------------------------------------------------------------- */

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
          <p className="hh-sub">{SUBHEAD}</p>

          <div className="cta-row hh-ctas">
            <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
              {CTA_PRIMARY}
            </a>
            <a className="cta-secondary" href="#engines">
              {CTA_SECONDARY}
            </a>
          </div>

          <p className="mono hh-caption">{CAPTION}</p>
        </div>

        <div className="hh-visual">
          <EngineSwitcher />
        </div>
      </div>
    </section>
  );
}
