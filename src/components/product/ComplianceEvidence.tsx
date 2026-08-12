import { useEffect, useState } from "react";

import { useReducedMotion } from "./useReducedMotion";
import "./ComplianceEvidence.css";

/* ---------------------------------------------------------------------------
   Content — the canonical cast only (docs/asset-extraction-report.md
   §Canonical dataset): Zhang Family, Lim Family Office, Okonkwo Family, on the
   Q2 2026 review cycle. Every string below is final copy.
   --------------------------------------------------------------------------- */

const PANEL_LABEL = "COMPLIANCE COPILOT";
const PANEL_STAMP = "Q2 2026 CYCLE";

const CYCLE_LABEL = "REVIEW CYCLE";
const PACK_LABEL = "INSPECTION PACK · Q2 2026 — ASSEMBLING";

type CycleTone = "amber" | "emerald" | "neutral";

interface CycleRow {
  household: string;
  status: string;
  tone: CycleTone;
}

const CYCLE_ROWS: CycleRow[] = [
  { household: "Zhang Family", status: "due 26 JUN", tone: "amber" },
  { household: "Lim Family Office", status: "filed 12 JUN", tone: "emerald" },
  { household: "Okonkwo Family", status: "due 08 JUL", tone: "neutral" },
];

const CYCLE_FOOTER = "0 OVERDUE";

interface PackItem {
  label: string;
  count: string;
}

const PACK_ITEMS: PackItem[] = [
  { label: "Call reports", count: "12" },
  { label: "Proposal approvals", count: "8" },
  { label: "Audit-log extracts", count: "3 accounts" },
  { label: "Suitability reviews", count: "6" },
];

const PACK_READY = "PACK READY · HASH-STAMPED · EXPORT";
const PACK_NOTE = "In the shape an SFC or MAS inspection request expects";

/* ---------------------------------------------------------------------------
   Timeline
   --------------------------------------------------------------------------- */

const MS_LEAD_IN = 550;
const MS_PER_CYCLE_ROW = 200;
const MS_BEFORE_PACK = 450;
const MS_PER_PACK_ITEM = 600;
const MS_BEFORE_READY = 400;
const MS_HOLD = 7000;
const MS_FADE = 700;

interface EvidenceState {
  cycle: number;
  items: number;
  ready: boolean;
  dim: boolean;
}

const EMPTY_STATE: EvidenceState = { cycle: 0, items: 0, ready: false, dim: false };
const COMPLETE_STATE: EvidenceState = {
  cycle: CYCLE_ROWS.length,
  items: PACK_ITEMS.length,
  ready: true,
  dim: false,
};

export interface ComplianceEvidenceProps {
  /** Set false to render the assembled pack with no motion at all. */
  animate?: boolean;
  className?: string;
}

/**
 * The governance moment: the review cycle on the left, the evidence it produces
 * on the right.
 *
 * The pack is the hero because the pack is the point — the work of the quarter
 * assembled into the form an inspection asks for, without anyone re-doing it.
 */
export default function ComplianceEvidence({
  animate = true,
  className,
}: ComplianceEvidenceProps) {
  const reducedMotion = useReducedMotion();
  const isAnimated = animate && !reducedMotion;

  const [state, setState] = useState<EvidenceState>(isAnimated ? EMPTY_STATE : COMPLETE_STATE);

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

        for (let index = 1; index <= CYCLE_ROWS.length; index += 1) {
          setState((previous) => ({ ...previous, cycle: index }));
          await wait(MS_PER_CYCLE_ROW);
          if (cancelled) return;
        }

        await wait(MS_BEFORE_PACK);
        if (cancelled) return;

        for (let index = 1; index <= PACK_ITEMS.length; index += 1) {
          setState((previous) => ({ ...previous, items: index }));
          await wait(MS_PER_PACK_ITEM);
          if (cancelled) return;
        }

        await wait(MS_BEFORE_READY);
        if (cancelled) return;
        setState((previous) => ({ ...previous, ready: true }));

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

  return (
    <section
      className={["ce-panel", className].filter(Boolean).join(" ")}
      aria-label="Mercury compliance evidence pack"
    >
      <header className="ce-chrome">
        <div className="ce-chrome-title">
          <span className="ce-live-dot" aria-hidden="true" />
          <span className="ce-label">{PANEL_LABEL}</span>
        </div>
        <span className="ce-stamp">{PANEL_STAMP}</span>
      </header>

      <div className={state.dim ? "ce-stage ce-stage--dim" : "ce-stage"}>
        <div className="ce-split">
          {/* ---------------- The cycle it watches ---------------- */}
          <section className="ce-cycle" aria-label="Review cycle">
            <span className="ce-mono-label">{CYCLE_LABEL}</span>

            <ul className="ce-cycle-rows">
              {CYCLE_ROWS.map((row, index) => (
                <li
                  className={index < state.cycle ? "ce-cycle-row ce-cycle-row--on" : "ce-cycle-row"}
                  key={row.household}
                >
                  <span className={`ce-cycle-dot ce-cycle-dot--${row.tone}`} aria-hidden="true" />
                  <span className="ce-cycle-name">{row.household}</span>
                  <span className="ce-cycle-status">{row.status}</span>
                </li>
              ))}
            </ul>

            <span className="ce-cycle-footer">{CYCLE_FOOTER}</span>
          </section>

          {/* ---------------- The evidence it produces ---------------- */}
          <section className="ce-pack" aria-label="Inspection pack">
            <span className="ce-mono-label ce-mono-label--pack">{PACK_LABEL}</span>

            <ul className="ce-items">
              {PACK_ITEMS.map((item, index) => {
                const ticked = index < state.items;
                return (
                  <li className={ticked ? "ce-item ce-item--on" : "ce-item"} key={item.label}>
                    <Tick on={ticked} />
                    <span className="ce-item-label">{item.label}</span>
                    <span className="ce-item-count">{item.count}</span>
                  </li>
                );
              })}
            </ul>

            <div className={state.ready ? "ce-ready ce-ready--on" : "ce-ready"}>
              <span className="ce-ready-track" aria-hidden="true">
                <span className="ce-ready-fill" />
              </span>
              <span className="ce-ready-line">{PACK_READY}</span>
              <span className="ce-ready-note">{PACK_NOTE}</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

/**
 * A check that draws in.
 *
 * The mark itself never moves: the clipping box slides across it, and the mark
 * counter-translates by exactly as much. Pure transform, so it survives the
 * design system's motion rule and the reduced-motion fallback alike.
 */
function Tick({ on }: { on: boolean }) {
  return (
    <span className={on ? "ce-tick ce-tick--on" : "ce-tick"} aria-hidden="true">
      <svg viewBox="0 0 12 12" focusable="false">
        <path
          d="M2.2 6.3 L4.9 9 L9.9 3.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
