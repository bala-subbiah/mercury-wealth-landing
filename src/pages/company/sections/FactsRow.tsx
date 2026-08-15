import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./FactsRow.css";

/* Facts row — one compact band, icon-led, replacing v2's four separate
   sections (What exists / Certifications / Where we work / No training on
   client data). Every string below is a verbatim clause from
   docs/v3-fact-source.md §5; several are trimmed to a single line, per the
   task's "verbatim, trimmed" allowance, never paraphrased. The certification
   hedge is reproduced in full and must never be upgraded. */

const ICON_PROPS = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

type Fact = {
  icon: ReactNode;
  title: string;
  body: ReactNode;
};

const FACTS: Fact[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 4v24" />
        <circle cx="16" cy="7" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12.6" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="18.2" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="16" cy="23.8" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "What exists",
    body: "Six capabilities on one spine: briefing, documents, workflows, meetings, research, compliance. The cockpit is live.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 4l10 4v7c0 7-4.4 11-10 13-5.6-2-10-6-10-13V8Z" />
        <path d="M12 16l3 3 5-6" />
      </svg>
    ),
    title: "Certifications",
    body: (
      <>
        SOC 2 Type II: audit underway. ISO 27001: certification in progress.
        <span className="facts__hedge">
          {" "}
          Applied for and in progress. Neither is held today; we’ll say so the day they are.
        </span>
      </>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="11" cy="16" r="7" />
        <circle cx="21" cy="16" r="7" />
      </svg>
    ),
    title: "Where we work",
    body: (
      <>
        <span className="facts__mono">HONG KONG · SINGAPORE</span> Several custodians per firm,
        more than one booking centre, and a book reported in HKD, SGD or USD while the positions
        sit in something else.
      </>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="8" y="14" width="16" height="12" rx="2" />
        <path d="M11.5 14v-3a4.5 4.5 0 0 1 9 0v3" />
        <path d="M8 20l16-4" strokeDasharray="0.5 4" />
      </svg>
    ),
    title: "No training on client data",
    body: "Your clients’ data is never used to train models, and is never pooled with any other firm’s.",
  },
];

export default function FactsRow() {
  return (
    <section className="facts band band--paper">
      <div className="container">
        <ul className="facts__grid">
          {FACTS.map((fact, index) => (
            <Reveal
              as="li"
              key={fact.title}
              className="facts__item"
              delay={(index % 2) * 80}
            >
              <span className="facts__icon">{fact.icon}</span>
              <h2 className="facts__title">{fact.title}</h2>
              <p className="facts__body">{fact.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
