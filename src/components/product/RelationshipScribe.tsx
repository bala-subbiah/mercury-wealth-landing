import { useEffect, useState } from "react";

import { useReducedMotion } from "./useReducedMotion";
import "./RelationshipScribe.css";

/* ---------------------------------------------------------------------------
   Content — the canonical cast only (docs/asset-extraction-report.md
   §Canonical dataset): Lau Ka-Ming's book, Lim Family Office, Fri 19 Jun 2026.
   Every string below is final copy. Do not paraphrase or re-title.
   --------------------------------------------------------------------------- */

const PANEL_LABEL = "RELATIONSHIP SCRIBE";
const PANEL_STAMP = "FRI 19 JUN 2026 · 15:12 HKT";
const ADVISOR_LINE = "Lau Ka-Ming · Hong Kong";

const NOTE_LABEL = "SPOKEN NOTE · 0:41";
const FILED_LABEL = "FILED · 5 ARTIFACTS";

const TRANSCRIPT =
  "Met Mrs. Lim at three — she's worried about the Hong Kong concentration, wants a rebalance option before Chinese New Year. Remind me to send the Q2 review pack, and her son's account opening is still waiting on the passport copy.";

type ArtifactTone = "indigo" | "amber" | "neutral" | "emerald";

interface Artifact {
  kind: string;
  tone: ArtifactTone;
  title: string;
  /** Second line — only the call report carries one. */
  sub?: string;
  stamp: string;
  /** Bordered mono badge vs. plain mono meta. */
  badge?: boolean;
}

const ARTIFACTS: Artifact[] = [
  {
    kind: "CALL REPORT",
    tone: "indigo",
    title: "Lim Family Office · Review meeting",
    sub: "Attendees: Lau Ka-Ming · Mrs. Lim — concentration risk discussed · rebalance requested",
    stamp: "SUITABILITY-SHAPED · 15:12",
    badge: true,
  },
  {
    kind: "TASK",
    tone: "amber",
    title: "Send Q2 review pack — Lim Family Office",
    stamp: "DUE 23 JUN",
  },
  {
    kind: "TASK",
    tone: "amber",
    title: "Chase passport copy — Lim account opening",
    stamp: "DUE 20 JUN",
  },
  {
    kind: "REMINDER",
    tone: "neutral",
    title: "Present rebalance option — ahead of CNY",
    stamp: "SET",
  },
  {
    kind: "PROPOSAL",
    tone: "emerald",
    title: "Draft rebalance · HK concentration — Lim Family Office",
    stamp: "QUEUED IN COCKPIT",
    badge: true,
  },
];

const FOOTER_LINE = "FILED TO THE SAME BOOK · SAME AUDIT LOG";

/* Waveform — a fixed envelope, authored once. It is a picture of a recording,
   not a live meter: nothing about it moves except one bar's slow shimmer. */
const WAVE_BARS = [
  0.18, 0.32, 0.51, 0.72, 0.44, 0.61, 0.86, 0.55, 0.29, 0.4, 0.66, 0.92, 0.7, 0.38, 0.22, 0.47,
  0.63, 0.81, 0.58, 0.34, 0.26, 0.49, 0.74, 0.95, 0.68, 0.42, 0.3, 0.55, 0.78, 0.6, 0.36, 0.24,
  0.44, 0.69, 0.88, 0.62, 0.4, 0.28, 0.52, 0.71, 0.46, 0.33, 0.2, 0.14,
];
const WAVE_SHIMMER_INDEX = 23;
const WAVE_PITCH = 5;
const WAVE_BAR_WIDTH = 3;
const WAVE_HEIGHT = 32;
const WAVE_WIDTH = WAVE_BARS.length * WAVE_PITCH;

/* ---------------------------------------------------------------------------
   Timeline
   --------------------------------------------------------------------------- */

const MS_PER_WORD = 50;
const MS_PER_ARTIFACT = 500;
const MS_LEAD_IN = 550;
const MS_BEFORE_FILING = 450;
const MS_HOLD = 7000;
const MS_FADE = 700;

const WORDS = TRANSCRIPT.split(" ");
const TOTAL_WORDS = WORDS.length;

const hasDigit = (word: string) => /\d/.test(word);

interface ScribeState {
  words: number;
  artifacts: number;
  dim: boolean;
}

const EMPTY_STATE: ScribeState = { words: 0, artifacts: 0, dim: false };
const COMPLETE_STATE: ScribeState = {
  words: TOTAL_WORDS,
  artifacts: ARTIFACTS.length,
  dim: false,
};

export interface RelationshipScribeProps {
  /** Set false to render the filed note with no motion at all. */
  animate?: boolean;
  className?: string;
}

/**
 * The relationship-management moment: an advisor talks, Mercury files.
 *
 * Left is what was said — a recorded note and its transcript. Right is what
 * the firm keeps: a suitability-shaped call report and the follow-ups it
 * implies, each one landing in the same book and the same audit log.
 *
 * Every word and every artifact is in the DOM from first paint and revealed by
 * opacity alone, so the panel's height is final before the first word types.
 */
export default function RelationshipScribe({ animate = true, className }: RelationshipScribeProps) {
  const reducedMotion = useReducedMotion();
  const isAnimated = animate && !reducedMotion;

  const [state, setState] = useState<ScribeState>(isAnimated ? EMPTY_STATE : COMPLETE_STATE);

  useEffect(() => {
    if (!isAnimated) {
      setState(COMPLETE_STATE);
      return;
    }

    let cancelled = false;
    let timer: number | undefined;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      while (!cancelled) {
        setState(EMPTY_STATE);
        await wait(MS_LEAD_IN);
        if (cancelled) return;

        for (let index = 1; index <= TOTAL_WORDS; index += 1) {
          setState((previous) => ({ ...previous, words: index }));
          await wait(MS_PER_WORD);
          if (cancelled) return;
        }

        await wait(MS_BEFORE_FILING);
        if (cancelled) return;

        for (let index = 1; index <= ARTIFACTS.length; index += 1) {
          setState((previous) => ({ ...previous, artifacts: index }));
          await wait(MS_PER_ARTIFACT);
          if (cancelled) return;
        }

        await wait(MS_HOLD);
        if (cancelled) return;

        setState((previous) => ({ ...previous, dim: true }));
        await wait(MS_FADE);
        if (cancelled) return;
      }
    };

    void run();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [isAnimated]);

  const wordsDone = state.words >= TOTAL_WORDS;
  const playing = isAnimated && !state.dim && !wordsDone;

  return (
    <section
      className={["rs-panel", className].filter(Boolean).join(" ")}
      aria-label="Mercury relationship scribe"
    >
      <header className="rs-chrome">
        <div className="rs-chrome-title">
          <span className="rs-live-dot" aria-hidden="true" />
          <span className="rs-label">{PANEL_LABEL}</span>
        </div>
        <span className="rs-stamp">{PANEL_STAMP}</span>
      </header>

      <div className="rs-advisor">{ADVISOR_LINE}</div>

      <div className={state.dim ? "rs-stage rs-stage--dim" : "rs-stage"}>
        <div className="rs-split">
          {/* ---------------- What was said ---------------- */}
          <section className="rs-said" aria-label="Spoken note">
            <span className="rs-mono-label">{NOTE_LABEL}</span>

            <svg
              className="rs-wave"
              viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              {WAVE_BARS.map((amplitude, index) => {
                const height = Math.max(2, amplitude * (WAVE_HEIGHT - 4));
                const shimmering = playing && index === WAVE_SHIMMER_INDEX;
                return (
                  <rect
                    key={index}
                    className={shimmering ? "rs-wave-bar rs-wave-bar--shimmer" : "rs-wave-bar"}
                    x={index * WAVE_PITCH}
                    y={(WAVE_HEIGHT - height) / 2}
                    width={WAVE_BAR_WIDTH}
                    height={height}
                    rx={1}
                  />
                );
              })}
            </svg>

            <p className="rs-transcript">
              {WORDS.map((word, index) => (
                <span key={index}>
                  <span
                    className={[
                      "rs-word",
                      index < state.words ? "rs-word--on" : "",
                      hasDigit(word) ? "rs-word--figure" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {word}
                  </span>
                  {playing && index === state.words - 1 ? <Caret /> : null}
                  {index < WORDS.length - 1 ? " " : null}
                </span>
              ))}
            </p>
          </section>

          {/* ---------------- What the firm keeps ---------------- */}
          <section className="rs-filed" aria-label="Filed artifacts">
            <span className="rs-mono-label">{FILED_LABEL}</span>

            <ul className="rs-artifacts">
              {ARTIFACTS.map((artifact, index) => (
                <li
                  className={index < state.artifacts ? "rs-artifact rs-artifact--on" : "rs-artifact"}
                  key={artifact.kind + artifact.title}
                >
                  <span className="rs-artifact-head">
                    <span
                      className={`rs-artifact-dot rs-artifact-dot--${artifact.tone}`}
                      aria-hidden="true"
                    />
                    <span className="rs-artifact-kind">{artifact.kind}</span>
                    <span
                      className={
                        artifact.badge ? "rs-artifact-stamp rs-artifact-stamp--badge" : "rs-artifact-stamp"
                      }
                    >
                      {artifact.stamp}
                    </span>
                  </span>
                  <span className="rs-artifact-title">{artifact.title}</span>
                  {artifact.sub ? <span className="rs-artifact-sub">{artifact.sub}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="rs-footer">{FOOTER_LINE}</footer>
      </div>
    </section>
  );
}

/** Zero-width caret — occupies no layout so the transcript never shifts. */
function Caret() {
  return <span className="rs-caret" aria-hidden="true" />;
}
