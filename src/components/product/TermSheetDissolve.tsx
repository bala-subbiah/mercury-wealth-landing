import { useEffect, useState } from "react";

import { useInView } from "./useInView";
import { useReducedMotion } from "./useReducedMotion";
import "./TermSheetDissolve.css";

/* ---------------------------------------------------------------------------
   Content
   ---------------------------------------------------------------------------
   Field labels, values and source tags: docs/copy-deck.md §5 "In-UI text —
   term-sheet dissolve" (final copy, verbatim).
   Barrier/autocall scale and the observation-date row: the real NoteTerms
   drawer, docs/asset-extraction-report.md §5, for the canonical
   UBS Autocallable Note on Tencent 2027.
   --------------------------------------------------------------------------- */

const DOC_LABEL = "TERM SHEET · PHOENIX AUTOCALLABLE NOTE";
const DOC_META = "UBS AG · ISIN CH1234567890 · 6 pages";

interface Field {
  label: string;
  value: string;
  source: string;
}

const FIELDS: Field[] = [
  { label: "ISSUER", value: "UBS AG", source: "p.1 §Issuer" },
  { label: "UNDERLYING", value: "Tencent Holdings (0700.HK)", source: "p.1 §Underlying" },
  { label: "STRUCTURE", value: "Phoenix autocall, down-and-in put", source: "p.2 §Payoff" },
  { label: "BARRIER", value: "65% · down-and-in", source: "p.2 §Barrier" },
  { label: "COUPON", value: "8.0% p.a. if underlying ≥ 80%", source: "p.3 §Coupon" },
  { label: "AUTOCALL", value: "Quarterly · first obs 03 JUL 2026", source: "p.3 §Observation" },
  { label: "MATURITY", value: "19 JUN 2027", source: "p.1 §Maturity" },
];

/** A run of set text in the document: either a redacted bar (width %) or a
    literal clause value that the extractor lifts out (carrying its field index). */
type DocRun = number | { text: string; field: number };

interface Clause {
  heading: string;
  rows: DocRun[][];
}

const CLAUSES: Clause[] = [
  {
    heading: "§ 1  ISSUER",
    rows: [
      [20, { text: "UBS AG", field: 0 }, 26],
      [58, 22],
    ],
  },
  {
    heading: "§ 2  UNDERLYING",
    rows: [[14, { text: "Tencent Holdings (0700.HK)", field: 1 }], [46, 26]],
  },
  {
    heading: "§ 3  PAYOFF",
    rows: [[{ text: "Phoenix autocall, down-and-in put", field: 2 }, 14], [52, 24]],
  },
  {
    heading: "§ 4  BARRIER",
    rows: [[28, { text: "65%", field: 3 }, 24], [62]],
  },
  {
    heading: "§ 5  COUPON",
    rows: [[{ text: "8.0% p.a. if underlying ≥ 80%", field: 4 }], [40, 30]],
  },
  {
    heading: "§ 6  OBSERVATION",
    rows: [[18, { text: "Quarterly · first obs 03 JUL 2026", field: 5 }], [50]],
  },
  {
    heading: "§ 7  MATURITY",
    rows: [[24, { text: "19 JUN 2027", field: 6 }, 20]],
  },
];

const SCALE_CAPTION = "Scale: % of initial underlying fixing (0–120)";
const OBSERVATIONS = [
  { date: "3 Jul · in 14d", next: true },
  { date: "19 Sept", next: false },
  { date: "19 Dec", next: false },
  { date: "19 Mar 2027", next: false },
  { date: "19 Jun 2027", next: false },
];

const HANDOFF_LINE = "7 FIELDS EXTRACTED → PROPOSAL DRAFT · ZHANG FAMILY · CORE";
const HANDOFF_NOTE = "REVIEW BEFORE SENDING";

/* ---------------------------------------------------------------------------
   Timeline — one tick lights the clause in the document, the next lands the
   field in the card, so every field visibly crosses the gap.
   --------------------------------------------------------------------------- */

const MS_PER_TICK = 360;
const MS_LEAD_IN = 500;
const MS_HOLD = 6000;
const MS_FADE = 650;
const TOTAL_TICKS = FIELDS.length * 2 + 1;

export interface TermSheetDissolveProps {
  /** Start the extraction when the panel scrolls into view. */
  revealOnScroll?: boolean;
  /** Replay the extraction after a pause. */
  loop?: boolean;
  className?: string;
}

/**
 * The document-intelligence moment: a term sheet on the left, the structured
 * fields it resolves into on the right.
 *
 * Under reduced motion both panes render complete, side by side — the same
 * information, no transfer.
 */
export default function TermSheetDissolve({
  revealOnScroll = true,
  loop = true,
  className,
}: TermSheetDissolveProps) {
  const reducedMotion = useReducedMotion();
  const animated = !reducedMotion;
  const [ref, inView] = useInView<HTMLDivElement>({
    enabled: animated && revealOnScroll,
    threshold: 0.2,
  });

  const [tick, setTick] = useState(animated ? 0 : TOTAL_TICKS);
  const [dim, setDim] = useState(false);
  const running = animated && inView;

  useEffect(() => {
    if (!animated) {
      setTick(TOTAL_TICKS);
      setDim(false);
      return;
    }
    if (!running) return;

    let cancelled = false;
    let timer: number | undefined;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      do {
        setDim(false);
        setTick(0);
        await wait(MS_LEAD_IN);
        if (cancelled) return;

        for (let step = 1; step <= TOTAL_TICKS; step += 1) {
          setTick(step);
          await wait(MS_PER_TICK);
          if (cancelled) return;
        }

        if (!loop) return;

        await wait(MS_HOLD);
        if (cancelled) return;
        setDim(true);
        await wait(MS_FADE);
        if (cancelled) return;
      } while (!cancelled);
    };

    void run();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [animated, running, loop]);

  const markActive = (field: number) => tick >= field * 2 + 1;
  const fieldLanded = (field: number) => tick >= field * 2 + 2;
  const extractedCount = FIELDS.reduce((count, _field, index) => count + (fieldLanded(index) ? 1 : 0), 0);
  const scaleLanded = fieldLanded(3);
  const observationsLanded = fieldLanded(5);
  const handoffLanded = tick >= TOTAL_TICKS;

  return (
    <div
      className={["ts-wrap", dim ? "ts-wrap--dim" : "", className].filter(Boolean).join(" ")}
      ref={ref}
    >
      {/* ---------------- Source document ---------------- */}
      <section className="ts-doc" aria-label="Source term sheet">
        <header className="ts-doc-chrome">
          <span className="ts-doc-label">{DOC_LABEL}</span>
          <span className="ts-doc-meta">{DOC_META}</span>
        </header>

        <div className="ts-paper">
          <div className="ts-paper-head">
            <span className="ts-paper-title">Phoenix Autocallable Note</span>
            <span className="ts-paper-folio">Page 1 / 6</span>
          </div>

          {CLAUSES.map((clause) => (
            <div className="ts-clause" key={clause.heading}>
              <span className="ts-clause-heading">{clause.heading}</span>
              {clause.rows.map((row, rowIndex) => (
                <span className="ts-line" key={rowIndex}>
                  {row.map((run, runIndex) =>
                    typeof run === "number" ? (
                      <span
                        className="ts-bar"
                        key={runIndex}
                        style={{ width: `${run}%` }}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className={markActive(run.field) ? "ts-mark ts-mark--on" : "ts-mark"}
                        key={runIndex}
                      >
                        {run.text}
                      </span>
                    ),
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Structured fields ---------------- */}
      <section className="ts-out" aria-label="Extracted fields">
        <header className="ts-out-chrome">
          <span className="ts-out-label">EXTRACTED FIELDS</span>
          <span className="ts-out-count">
            {extractedCount} / {FIELDS.length}
          </span>
        </header>

        <ul className="ts-fields">
          {FIELDS.map((field, index) => (
            <li className={fieldLanded(index) ? "ts-field ts-field--on" : "ts-field"} key={field.label}>
              <span className="ts-field-label">{field.label}</span>
              <span className="ts-field-value">{field.value}</span>
              <span className="ts-field-source">{field.source}</span>
            </li>
          ))}
        </ul>

        <div className={scaleLanded ? "ts-scale ts-scale--on" : "ts-scale"}>
          <div className="ts-scale-track" aria-hidden="true">
            <span className="ts-scale-tick ts-scale-tick--barrier" style={{ left: `${(65 / 120) * 100}%` }} />
            <span className="ts-scale-tick ts-scale-tick--autocall" style={{ left: `${(100 / 120) * 100}%` }} />
          </div>
          <div className="ts-scale-legend">
            <span className="ts-scale-end">0</span>
            <span className="ts-scale-key ts-scale-key--barrier">barrier 65</span>
            <span className="ts-scale-key ts-scale-key--autocall">autocall 100</span>
            <span className="ts-scale-end">120</span>
          </div>
          <p className="ts-scale-caption">{SCALE_CAPTION}</p>
        </div>

        <div className={observationsLanded ? "ts-obs ts-obs--on" : "ts-obs"}>
          <span className="ts-obs-label">AUTOCALL OBSERVATIONS</span>
          <div className="ts-obs-chips">
            {OBSERVATIONS.map((observation) => (
              <span
                className={observation.next ? "ts-obs-chip ts-obs-chip--next" : "ts-obs-chip"}
                key={observation.date}
              >
                {observation.date}
              </span>
            ))}
          </div>
        </div>

        <footer className={handoffLanded ? "ts-handoff ts-handoff--on" : "ts-handoff"}>
          <span className="ts-handoff-line">{HANDOFF_LINE}</span>
          <span className="ts-handoff-note">{HANDOFF_NOTE}</span>
        </footer>
      </section>
    </div>
  );
}
