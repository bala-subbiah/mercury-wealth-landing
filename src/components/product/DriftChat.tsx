import { useEffect, useState } from "react";

import { useReducedMotion } from "./useReducedMotion";
import "./DriftChat.css";

/* ---------------------------------------------------------------------------
   Content — docs/copy-deck.md §8 "In-UI text — streaming co-pilot chat"
   (verbatim), with the drift card from §3 card 2 "In-UI (drift-breach card)".
   The rebalance card's targets are the ones the reply states: equity to 61.2%,
   BYD to 9.4%. The "INTENT · NOT ORDERS" badge is the app's own
   (docs/asset-extraction-report.md §3).
   --------------------------------------------------------------------------- */

const QUESTION = "Why did Zhang Family Asia Satellite breach this morning?";

const CHECKS = [
  "reading positions · 4 accounts",
  "checking against Growth model · IPS band ±5.0pp",
];

const DRIFT_CARD = {
  title: "IPS BREACH · ZHANG FAMILY · ASIA SATELLITE",
  rows: [
    { name: "Equity", weight: "68.4%", target: "target 60.0%", delta: "+8.4pp", over: true },
    { name: "Fixed income", weight: "19.2%", target: "target 25.0%", delta: "−5.8pp", over: false },
  ],
  footer: "BAND ±5.0pp · GROWTH MODEL · BREACHED 19 JUN 07:02 HKT",
};

const ANSWER_ONE =
  "Equity is 68.4% against a 60.0% target: 8.4pp over, breached at 07:02 HKT after yesterday's HK rally. Fixed income is 5.8pp under. BYD alone is 11.2% of the portfolio, above the 10% single-position cap.";

const ANSWER_TWO =
  "I've drafted a rebalance that brings equity to 61.2% and BYD to 9.4%. It's a draft. Nothing is placed.";

const PROPOSAL_CARD = {
  title: "DRAFT · ZHANG FAMILY · ASIA SATELLITE",
  tag: "REBALANCE",
  rows: [
    { name: "Equity", from: "68.4%", to: "61.2%", delta: "−7.2pp" },
    { name: "BYD", from: "11.2%", to: "9.4%", delta: "−1.8pp" },
  ],
  footer: "INTENT · NOT ORDERS",
};

const ACTIONS = ["REVIEW DRAFT", "SHOW WORKING"];

/* ---------------------------------------------------------------------------
   Timeline — delay before each step is revealed
   --------------------------------------------------------------------------- */

const STEP_DELAYS = [
  600, // question
  900, // check 1
  700, // check 2
  800, // drift card
  900, // answer paragraph 1
  1500, // answer paragraph 2
  900, // proposal card
  800, // action chips
];

const TOTAL_STEPS = STEP_DELAYS.length;
const MS_HOLD = 7000;
const MS_FADE = 650;

/* Step indices, named so the render reads as a script. */
const STEP_QUESTION = 0;
const STEP_CHECK_ONE = 1;
const STEP_DRIFT_CARD = 3;
const STEP_ANSWER_ONE = 4;
const STEP_ANSWER_TWO = 5;
const STEP_PROPOSAL = 6;
const STEP_ACTIONS = 7;

export interface DriftChatProps {
  /** Set false to render the whole conversation with no motion at all. */
  animate?: boolean;
  className?: string;
}

/**
 * The AI-mechanism visual — an advisor asks why a portfolio breached, Mercury
 * answers with the evidence and hands back a draft.
 *
 * The order the copy insists on is the order the panel plays: it checks, it
 * shows the drift, it explains, it drafts. It never executes.
 */
export default function DriftChat({ animate = true, className }: DriftChatProps) {
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
      so the thread's height never changes as the conversation plays. */
  const reveal = (base: string, index: number) =>
    step > index ? `${base} dc-reveal dc-reveal--on` : `${base} dc-reveal`;

  return (
    <section
      className={["dc-panel", dim ? "dc-panel--dim" : "", className].filter(Boolean).join(" ")}
      aria-label="Mercury drift conversation"
    >
      <header className="dc-chrome">
        <span className="dc-label">COPILOT · ZHANG FAMILY</span>
        <span className="dc-stamp">FRI 19 JUN 2026 · 07:34 HKT</span>
      </header>

      <div className="dc-thread">
        {/* Advisor ------------------------------------------------ */}
        <div className={reveal("dc-turn", STEP_QUESTION)}>
          <span className="dc-role">YOU</span>
          <p className="dc-said">{QUESTION}</p>
        </div>

        {/* Mercury ------------------------------------------------ */}
        <div className={reveal("dc-turn", STEP_CHECK_ONE)}>
          <span className="dc-role dc-role--mercury">MERCURY</span>

          <ul className="dc-checks">
            {CHECKS.map((check, index) => {
              const checkStep = STEP_CHECK_ONE + index;
              return (
                <li className={reveal("dc-check", checkStep)} key={check}>
                  <span
                    className={
                      isAnimated && step === checkStep + 1 ? "dc-spin dc-spin--active" : "dc-spin"
                    }
                    aria-hidden="true"
                  >
                    ⟳
                  </span>
                  {check}
                </li>
              );
            })}
          </ul>

          {/* Drift evidence */}
          <div className={reveal("dc-card", STEP_DRIFT_CARD)}>
            <span className="dc-card-title">{DRIFT_CARD.title}</span>
            <ul className="dc-card-rows">
              {DRIFT_CARD.rows.map((row) => (
                <li className="dc-card-row" key={row.name}>
                  <span className="dc-card-name">{row.name}</span>
                  <span className="dc-card-figure">{row.weight}</span>
                  <span className="dc-card-target">{row.target}</span>
                  <span className={row.over ? "dc-card-delta dc-card-delta--over" : "dc-card-delta"}>
                    {row.delta}
                  </span>
                </li>
              ))}
            </ul>
            <span className="dc-card-footer">{DRIFT_CARD.footer}</span>
          </div>

          <p className={reveal("dc-said", STEP_ANSWER_ONE)}>{ANSWER_ONE}</p>
          <p className={reveal("dc-said", STEP_ANSWER_TWO)}>{ANSWER_TWO}</p>

          {/* The draft it produced */}
          <div className={reveal("dc-card dc-card--proposal", STEP_PROPOSAL)}>
            <span className="dc-card-head">
              <span className="dc-card-title">{PROPOSAL_CARD.title}</span>
              <span className="dc-card-tag">{PROPOSAL_CARD.tag}</span>
            </span>
            <ul className="dc-card-rows">
              {PROPOSAL_CARD.rows.map((row) => (
                <li className="dc-card-row dc-card-row--move" key={row.name}>
                  <span className="dc-card-name">{row.name}</span>
                  <span className="dc-card-figure">{row.from}</span>
                  <span className="dc-card-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="dc-card-figure dc-card-figure--to">{row.to}</span>
                  <span className="dc-card-delta">{row.delta}</span>
                </li>
              ))}
            </ul>
            <span className="dc-card-footer dc-card-footer--badge">{PROPOSAL_CARD.footer}</span>
          </div>

          <div className={reveal("dc-actions", STEP_ACTIONS)}>
            {ACTIONS.map((action) => (
              <span className="dc-action" key={action}>
                {action}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
