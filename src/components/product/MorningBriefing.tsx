import { useEffect, useState } from "react";

import { useReducedMotion } from "./useReducedMotion";
import "./MorningBriefing.css";

/* ---------------------------------------------------------------------------
   Content — docs/copy-deck.md §1 "In-UI text — hero recreation". Every string
   below is final copy, lifted verbatim. Do not paraphrase or re-title.
   --------------------------------------------------------------------------- */

const PANEL_LABEL = "MORNING BRIEFING";
const PANEL_STAMP = "FRI 19 JUN 2026 · 07:31 HKT";
const ADVISOR_LINE = "Lau Ka-Ming · Hong Kong";

const GREETING = "Good morning, Ka-Ming.";

const BRIEFING_PARAGRAPHS = [
  "Four portfolios drifted past their IPS bands overnight. Two single-name caps are breached. One structured note has an observation date next week, and PRP-2026-0004 is waiting on your approval.",
  "Nothing else needs you before 09:00.",
];

type FeedTone = "urgent" | "watch" | "suggestion";

interface FeedRow {
  chip: string;
  tone: FeedTone;
  entity: string;
  detail: string;
}

/* Severity semantics follow the real app: urgent = destructive, watch =
   warning, suggestion = primary (docs/asset-extraction-report.md §1). */
const FEED_ROWS: FeedRow[] = [
  {
    chip: "BREACH",
    tone: "urgent",
    entity: "Zhang Family · Asia Satellite",
    detail: "Equity 8.4pp over IPS band",
  },
  {
    chip: "CAP",
    tone: "urgent",
    entity: "Okonkwo Family · Thematic",
    detail: "NVDA 12.1% vs 10% max single position",
  },
  {
    chip: "MATURING",
    tone: "watch",
    entity: "Zhang Family · Core",
    detail: "Tencent autocall observation · 03 JUL",
  },
  {
    chip: "APPROVAL",
    tone: "suggestion",
    entity: "Okonkwo Family · Corporate",
    detail: "PRP-2026-0004 awaiting four-eyes",
  },
  {
    chip: "REVIEW",
    tone: "watch",
    entity: "Lim Family Office",
    detail: "Suitability review due · 26 JUN",
  },
];

const FEED_FOOTER = "RANKED BY WHAT CHANGED SINCE YESTERDAY";

/* ---------------------------------------------------------------------------
   Timeline
   --------------------------------------------------------------------------- */

const MS_PER_CHAR = 40;
const MS_PER_WORD = 50;
const MS_PER_ROW = 200;
const MS_LEAD_IN = 600;
const MS_AFTER_GREETING = 380;
const MS_BEFORE_FEED = 500;
const MS_HOLD = 8000;
const MS_FADE = 700;

/* Words are pre-flattened once so the stream index is a single integer across
   both paragraphs — the render stays a pure function of that index. */
const PARAGRAPH_WORDS = BRIEFING_PARAGRAPHS.map((paragraph) => paragraph.split(" "));
const PARAGRAPH_OFFSETS = PARAGRAPH_WORDS.reduce<number[]>((offsets, _words, index) => {
  offsets.push(index === 0 ? 0 : offsets[index - 1] + PARAGRAPH_WORDS[index - 1].length);
  return offsets;
}, []);
const TOTAL_WORDS = PARAGRAPH_WORDS.reduce((total, words) => total + words.length, 0);
const GREETING_CHARS = [...GREETING];

const hasDigit = (word: string) => /\d/.test(word);

interface StreamState {
  chars: number;
  words: number;
  rows: number;
  dim: boolean;
}

const EMPTY_STATE: StreamState = { chars: 0, words: 0, rows: 0, dim: false };
const COMPLETE_STATE: StreamState = {
  chars: GREETING_CHARS.length,
  words: TOTAL_WORDS,
  rows: FEED_ROWS.length,
  dim: false,
};

export interface MorningBriefingProps {
  /** Set false to render the completed briefing with no motion at all. */
  animate?: boolean;
  className?: string;
}

/**
 * The hero's self-composing morning briefing.
 *
 * Layout anatomy follows the real `morning-briefing` + `attention-feed`
 * components (asset report §1): panel chrome, greeting, ≤3-sentence narrative,
 * then the ranked attention rows.
 *
 * Every glyph and row is present in the DOM from first paint and revealed by
 * opacity alone, so the panel's height is final before the first character
 * types — the hero never reflows underneath the copy beside it.
 */
export default function MorningBriefing({ animate = true, className }: MorningBriefingProps) {
  const reducedMotion = useReducedMotion();
  const isAnimated = animate && !reducedMotion;

  const [state, setState] = useState<StreamState>(isAnimated ? EMPTY_STATE : COMPLETE_STATE);

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

        for (let index = 1; index <= GREETING_CHARS.length; index += 1) {
          setState((previous) => ({ ...previous, chars: index }));
          await wait(MS_PER_CHAR);
          if (cancelled) return;
        }

        await wait(MS_AFTER_GREETING);
        if (cancelled) return;

        for (let index = 1; index <= TOTAL_WORDS; index += 1) {
          setState((previous) => ({ ...previous, words: index }));
          await wait(MS_PER_WORD);
          if (cancelled) return;
        }

        await wait(MS_BEFORE_FEED);
        if (cancelled) return;

        for (let index = 1; index <= FEED_ROWS.length; index += 1) {
          setState((previous) => ({ ...previous, rows: index }));
          await wait(MS_PER_ROW);
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

  const greetingDone = state.chars >= GREETING_CHARS.length;
  const wordsDone = state.words >= TOTAL_WORDS;
  const streaming = isAnimated && !state.dim && !wordsDone;

  return (
    <section
      className={["mb-panel", className].filter(Boolean).join(" ")}
      aria-label="Mercury morning briefing"
    >
      <header className="mb-chrome">
        <div className="mb-chrome-title">
          <span className="mb-live-dot" aria-hidden="true" />
          <span className="mb-label">{PANEL_LABEL}</span>
        </div>
        <span className="mb-stamp">{PANEL_STAMP}</span>
      </header>

      <div className="mb-advisor">{ADVISOR_LINE}</div>

      <div className={state.dim ? "mb-stage mb-stage--dim" : "mb-stage"}>
        <p className="mb-greeting">
          {GREETING_CHARS.map((character, index) => (
            <span
              key={index}
              className={index < state.chars ? "mb-glyph mb-glyph--on" : "mb-glyph"}
            >
              {character}
            </span>
          ))}
          {streaming && !greetingDone ? <Caret /> : null}
        </p>

        <div className="mb-narrative">
          {PARAGRAPH_WORDS.map((words, paragraphIndex) => (
            <p className="mb-para" key={paragraphIndex}>
              {words.map((word, wordIndex) => {
                const streamIndex = PARAGRAPH_OFFSETS[paragraphIndex] + wordIndex;
                const revealed = streamIndex < state.words;
                const isLastRevealed = streamIndex === state.words - 1;
                return (
                  <span key={wordIndex}>
                    <span
                      className={[
                        "mb-word",
                        revealed ? "mb-word--on" : "",
                        hasDigit(word) ? "mb-word--figure" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {word}
                    </span>
                    {streaming && greetingDone && isLastRevealed ? <Caret /> : null}
                    {wordIndex < words.length - 1 ? " " : null}
                  </span>
                );
              })}
            </p>
          ))}
        </div>

        <ul className="mb-feed">
          {FEED_ROWS.map((row, index) => (
            <li
              className={index < state.rows ? "mb-row mb-row--on" : "mb-row"}
              key={row.chip + row.entity}
            >
              <span className={`mb-chip mb-chip--${row.tone}`}>{row.chip}</span>
              <span className="mb-entity">{row.entity}</span>
              <span className="mb-detail">{row.detail}</span>
            </li>
          ))}
        </ul>

        <footer className="mb-feed-footer">{FEED_FOOTER}</footer>
      </div>
    </section>
  );
}

/** Zero-width caret — occupies no layout so the stream never nudges the text. */
function Caret() {
  return <span className="mb-caret" aria-hidden="true" />;
}
