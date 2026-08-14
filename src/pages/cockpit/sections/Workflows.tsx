import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./Workflows.css";

/* The six workflows — fact source §2, `WorkflowCards.tsx`. Headlines and body
   copy are verbatim (they survived the review); only the mono tag-strip
   captions under each card were struck, and the section eyebrow is dropped
   per Amendment 2 (no eyebrows/tag strips as section furniture). */

type Workflow = {
  icon: ReactNode;
  headline: string;
  body: string;
};

const ICON_PROPS = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const WORKFLOWS: Workflow[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 8a2 2 0 0 1 2-2h9v20H8a2 2 0 0 1-2-2Z" />
        <path d="M17 6h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
        <path d="M11 10h4M11 14h4" />
        <circle cx="24" cy="10" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
    headline: "Start the day already briefed.",
    body: "Every household and account across every custodian, rolled up in your base currency, with the native amounts one click away. What moved overnight is ranked before you ask.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 22c5-2 6-13 11-15s7 8 11 6" />
        <circle cx="21.5" cy="12" r="2" fill="currentColor" stroke="none" />
        <path d="M4 26h24" />
      </svg>
    ),
    headline: "Drift finds you. Not the reverse.",
    body: "Every portfolio is tracked against its model and risk profile, advisory and discretionary alike. Drift and concentration surface the day they emerge, not at quarter-end, not in the review pack.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 5h10l6 6v16H9Z" />
        <path d="M19 5v6h6" />
        <path d="M13 16l2 2 5-5" />
      </svg>
    ),
    headline: "From flagged to drafted, without slides.",
    body: "A breach becomes a proposal with the positions, the rationale and the mandate check already in it. You edit and decide; nobody rebuilds a deck at 11pm.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 4 27 9v8c0 7-5 10.5-11 13-6-2.5-11-6-11-13V9Z" />
        <path d="M11.5 16.2l3 3 6-6.4" />
      </svg>
    ),
    headline: "Approvals stop living in inboxes.",
    body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every comment on the record it belongs to. When compliance asks who approved what, you don't go looking.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 16h18" />
        <path d="M17 9l6 7-6 7" />
        <path d="M5 9v14" strokeDasharray="0.5 4.5" />
      </svg>
    ),
    headline: "The order carries its own authority.",
    body: "An accepted proposal becomes orders, and execution status sits on the same record the client signed. The trade never gets separated from the decision that authorised it.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="15" cy="16" r="11" />
        <path d="M15 9v7l5 3" />
        <path d="M27 12l1.5-3" />
      </svg>
    ),
    headline: "Compliance stops being archaeology.",
    body: "Every material action lands on an immutable log as it happens: who, what, when, before and after. The compliance answer is a filter, not an archaeology project.",
  },
];

export default function Workflows() {
  return (
    <section className="workflows band band--paper">
      <div className="container">
        <Reveal as="div" className="workflows__head">
          <h2 className="workflows__title">
            Six things you do every day. One place to do them.
          </h2>
          <p className="workflows__sub">
            Not six tools, six logins and a spreadsheet holding it together.
          </p>
        </Reveal>

        <ul className="workflows__grid">
          {WORKFLOWS.map((item, index) => (
            <Reveal as="li" key={item.headline} className="workflows__card" delay={(index % 2) * 80}>
              <span className="workflows__icon">{item.icon}</span>
              <h3 className="workflows__card-title">{item.headline}</h3>
              <p className="workflows__card-body">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
