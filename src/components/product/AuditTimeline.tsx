import type { ReactNode } from "react";

import { useInView } from "./useInView";
import { useReducedMotion } from "./useReducedMotion";
import "./AuditTimeline.css";

/* ---------------------------------------------------------------------------
   Content — docs/asset-extraction-report.md §3, "Audit timeline … the
   governance act money shot". The six entries below are the captured sequence
   for the canonical proposal PRP-2026-0003, reproduced verbatim.
   --------------------------------------------------------------------------- */

const PANEL_TITLE = "Audit trail · every state change, confirmed & logged";
const PANEL_SUB = "PRP-2026-0003 · Okonkwo Family → Okonkwo Thematic Equity";

type ActionKind = "created" | "sent" | "approved" | "executed" | "updated";

interface AuditEntry {
  action: string;
  kind: ActionKind;
  entity: "PROPOSAL" | "APPROVAL" | "REBALANCE";
  before: string | null;
  after: string;
  summary: string;
  actor: string;
  timestamp: string;
}

const ENTRIES: AuditEntry[] = [
  {
    action: "Created",
    kind: "created",
    entity: "PROPOSAL",
    before: null,
    after: "Draft",
    summary: "Created proposal PRP-2026-0003 (Thematic de-concentration)",
    actor: "Tan Wei-Jie",
    timestamp: "10 May · 09:00",
  },
  {
    action: "Sent",
    kind: "sent",
    entity: "PROPOSAL",
    before: "Draft",
    after: "Sent",
    summary: "Sent PRP-2026-0003 for e-signature",
    actor: "Tan Wei-Jie",
    timestamp: "11 May · 09:00",
  },
  {
    action: "Approved",
    kind: "approved",
    entity: "APPROVAL",
    before: null,
    after: "Accepted",
    summary: "Recorded client approval (e-signature) for PRP-2026-0003",
    actor: "Tan Wei-Jie",
    timestamp: "15 May · 15:00",
  },
  {
    action: "Executed",
    kind: "executed",
    entity: "REBALANCE",
    before: null,
    after: "Executing",
    summary: "Rebalance handed off to OMS",
    actor: "Tan Wei-Jie",
    timestamp: "16 May · 10:00",
  },
  {
    action: "Updated",
    kind: "updated",
    entity: "REBALANCE",
    before: "Executing",
    after: "Completed",
    summary: "OMS confirmed all fills — rebalance Completed",
    actor: "Tan Wei-Jie",
    timestamp: "18 May · 10:00",
  },
  {
    action: "Updated",
    kind: "updated",
    entity: "PROPOSAL",
    before: "Accepted",
    after: "Executed",
    summary: "Proposal marked Executed",
    actor: "Tan Wei-Jie",
    timestamp: "18 May · 10:05",
  },
];

const STAGGER_MS = 90;

export interface AuditTimelineProps {
  /** Entries fade-slide in one-by-one when the timeline scrolls into view. */
  revealOnScroll?: boolean;
  className?: string;
}

/**
 * The governance act's hero visual — the app's real audit timeline.
 *
 * Each entry carries the four things a compliance reviewer asks for: what
 * happened, to which record, what the state was before and after, and who did
 * it, when. Reveal is opacity/transform only and collapses to an instant
 * render under reduced motion.
 */
export default function AuditTimeline({ revealOnScroll = true, className }: AuditTimelineProps) {
  const reducedMotion = useReducedMotion();
  const animated = revealOnScroll && !reducedMotion;
  const [ref, inView] = useInView<HTMLOListElement>({ enabled: animated });
  const revealed = !animated || inView;

  return (
    <section
      className={["at-panel", className].filter(Boolean).join(" ")}
      aria-label="Mercury audit trail"
    >
      <header className="at-head">
        <div className="at-head-text">
          <h3 className="at-title">{PANEL_TITLE}</h3>
          <span className="at-sub">{PANEL_SUB}</span>
        </div>
        <span className="at-count">{ENTRIES.length} ENTRIES</span>
      </header>

      <ol className={animated ? "at-list" : "at-list at-list--instant"} ref={ref}>
        {ENTRIES.map((entry, index) => (
          <li
            className={revealed ? "at-entry at-entry--on" : "at-entry"}
            key={entry.action + entry.entity + entry.timestamp}
            style={animated ? { transitionDelay: `${index * STAGGER_MS}ms` } : undefined}
          >
            <span className="at-node" aria-hidden="true">
              <ActionIcon kind={entry.kind} />
            </span>

            <div className="at-content">
              <div className="at-headline">
                <span className="at-action">{entry.action}</span>
                <span className="at-entity">{entry.entity}</span>
                <span className="at-states">
                  <span className="at-state at-state--before">{entry.before ?? "∅"}</span>
                  <span className="at-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="at-state at-state--after">{entry.after}</span>
                </span>
                <span className="at-time">{entry.timestamp}</span>
              </div>
              <p className="at-summary">
                {entry.summary}
                <span className="at-actor"> — {entry.actor}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Action icons — thin-stroke marks matching the app's lucide set
   --------------------------------------------------------------------------- */

function ActionIcon({ kind }: { kind: ActionKind }) {
  const paths: Record<ActionKind, ReactNode> = {
    created: (
      <>
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9.5 15h5M12 12.5v5" />
      </>
    ),
    sent: (
      <>
        <path d="M21.5 2.5L11 13" />
        <path d="M21.5 2.5l-6.5 19-4-8.5-8.5-4z" />
      </>
    ),
    approved: (
      <>
        <path d="M1.5 12.5l4 4 9-9" />
        <path d="M9.5 16.5l3 3 10-10" />
      </>
    ),
    executed: (
      <>
        <path d="M12 21.5s7.5-3.8 7.5-9.5V5L12 2.5 4.5 5v7c0 5.7 7.5 9.5 7.5 9.5z" />
        <path d="M9 11.8l2.2 2.2L15.2 10" />
      </>
    ),
    updated: (
      <>
        <path d="M12.5 20.5H21" />
        <path d="M16.2 3.3a2.1 2.1 0 013 3L7 18.5l-4 1 1-4z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[kind]}
    </svg>
  );
}
