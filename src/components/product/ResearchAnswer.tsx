import { useEffect, useState } from "react";

import { useReducedMotion } from "./useReducedMotion";
import "./ResearchAnswer.css";

/* ---------------------------------------------------------------------------
   Content — the canonical cast only (docs/asset-extraction-report.md
   §Canonical dataset): Zhang Family, Lim Family Office, Okonkwo Family, on the
   evening of Fri 19 Jun 2026. Every string below is final copy.
   --------------------------------------------------------------------------- */

const PANEL_LABEL = "COPILOT · BOOK RESEARCH";
const PANEL_STAMP = "FRI 19 JUN 2026 · 20:15 HKT";

const QUESTION = "The Fed decides tonight — who in my book is exposed if they hold?";

const CHECKS = [
  "reading 20 households · 47 accounts",
  "mapping rate sensitivity · USD duration & funding currency",
];

const TABLE_LABEL = "RANKED BY IMPACT · +25BP SCENARIO";
const TABLE_HEAD = ["HOUSEHOLD", "EXPOSURE", "EST. IMPACT"];

type ImpactTone = "rose" | "emerald" | "muted";

interface RankedRow {
  household: string;
  exposure: string;
  impact: string;
  tone: ImpactTone;
}

const RANKED_ROWS: RankedRow[] = [
  { household: "Zhang Family", exposure: "USD bond duration 6.2y", impact: "−1.8%", tone: "rose" },
  { household: "Lim Family Office", exposure: "HKD funding gap", impact: "−0.9%", tone: "rose" },
  { household: "Okonkwo Family", exposure: "USD cash 12%", impact: "+0.3%", tone: "emerald" },
  { household: "All others", exposure: "within band", impact: "<±0.2%", tone: "muted" },
];

const CLOSING =
  "Two households warrant a call before the open. Both summaries are drafted.";

const ACTIONS = ["Open call summaries", "Show working"];

/* ---------------------------------------------------------------------------
   Timeline — delay before each step is revealed. The four ranked rows each get
   their own tick so the answer assembles rather than appearing whole.
   --------------------------------------------------------------------------- */

const STEP_DELAYS = [
  600, // question
  900, // check 1
  800, // check 2
  850, // answer card frame
  220, // row 1
  220, // row 2
  220, // row 3
  220, // row 4
  1100, // closing line
  700, // action chips
];

const TOTAL_STEPS = STEP_DELAYS.length;
const MS_HOLD = 7000;
const MS_FADE = 650;

/* Step indices, named so the render reads as a script. */
const STEP_QUESTION = 0;
const STEP_CHECK_ONE = 1;
const STEP_CARD = 3;
const STEP_ROW_ONE = 4;
const STEP_CLOSING = 8;
const STEP_ACTIONS = 9;

export interface ResearchAnswerProps {
  /** Set false to render the whole exchange with no motion at all. */
  animate?: boolean;
  className?: string;
}

/**
 * The book-research moment: one question against the whole book, answered as a
 * ranked table rather than prose.
 *
 * Mercury shows its working first — how many households and accounts it read,
 * and what it mapped them against — then ranks who is actually exposed. It ends
 * with drafted summaries, never with an instruction.
 */
export default function ResearchAnswer({ animate = true, className }: ResearchAnswerProps) {
  const reducedMotion = useReducedMotion();
  const isAnimated = animate && !reducedMotion;

  const [step, setStep] = useState(isAnimated ? 0 : TOTAL_STEPS);
  const [dim, setDim] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      setStep(TOTAL_STEPS);
      setDim(false);
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
        setDim(false);
        setStep(0);

        for (let index = 0; index < TOTAL_STEPS; index += 1) {
          await wait(STEP_DELAYS[index]);
          if (cancelled) return;
          setStep(index + 1);
        }

        await wait(MS_HOLD);
        if (cancelled) return;
        setDim(true);
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

  /** Everything is in the DOM from first paint; reveal is opacity + lift only,
      so the thread's height never changes as the answer assembles. */
  const reveal = (base: string, index: number) =>
    step > index ? `${base} ra-reveal ra-reveal--on` : `${base} ra-reveal`;

  return (
    <section
      className={["ra-panel", dim ? "ra-panel--dim" : "", className].filter(Boolean).join(" ")}
      aria-label="Mercury book research"
    >
      <header className="ra-chrome">
        <span className="ra-label">{PANEL_LABEL}</span>
        <span className="ra-stamp">{PANEL_STAMP}</span>
      </header>

      <div className="ra-thread">
        {/* Advisor ------------------------------------------------ */}
        <div className={reveal("ra-turn", STEP_QUESTION)}>
          <span className="ra-role">YOU</span>
          <p className="ra-said">{QUESTION}</p>
        </div>

        {/* Mercury ------------------------------------------------ */}
        <div className={reveal("ra-turn", STEP_CHECK_ONE)}>
          <span className="ra-role ra-role--mercury">MERCURY</span>

          <ul className="ra-checks">
            {CHECKS.map((check, index) => {
              const checkStep = STEP_CHECK_ONE + index;
              return (
                <li className={reveal("ra-check", checkStep)} key={check}>
                  <SpinArc active={isAnimated && step === checkStep + 1} />
                  {check}
                </li>
              );
            })}
          </ul>

          {/* The answer — a ranked table, not a paragraph */}
          <div className={reveal("ra-card", STEP_CARD)}>
            <span className="ra-card-title">{TABLE_LABEL}</span>

            <div className="ra-table" role="table" aria-label={TABLE_LABEL}>
              <div className="ra-row ra-row--head" role="row">
                {TABLE_HEAD.map((heading) => (
                  <span className="ra-col" role="columnheader" key={heading}>
                    {heading}
                  </span>
                ))}
              </div>

              {RANKED_ROWS.map((row, index) => (
                <div
                  className={reveal("ra-row", STEP_ROW_ONE + index)}
                  role="row"
                  key={row.household}
                >
                  <span className="ra-household" role="cell">
                    {row.household}
                  </span>
                  <span className="ra-exposure" role="cell">
                    {row.exposure}
                  </span>
                  <span className={`ra-impact ra-impact--${row.tone}`} role="cell">
                    {row.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className={reveal("ra-said", STEP_CLOSING)}>{CLOSING}</p>

          <div className={reveal("ra-actions", STEP_ACTIONS)}>
            {ACTIONS.map((action) => (
              <span className="ra-action" key={action}>
                {action}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The working indicator — a drawn arc with a head, not a glyph and not an
 * emoji. It rotates only while its own check is the one being run.
 */
function SpinArc({ active }: { active: boolean }) {
  return (
    <svg
      className={active ? "ra-spin ra-spin--active" : "ra-spin"}
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 1.6 A4.4 4.4 0 1 1 1.6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M5.5 0 L5.5 3.2 L8.3 1.6 Z" fill="currentColor" />
    </svg>
  );
}
