import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import { ROUTES } from "../../../chrome/routes.ts";
import "./Capabilities.css";

/* The six capabilities — fact source §3 (`EngineGrid.tsx`), publicly branded
   "Mercury AI" per the naming decision, "engines" dropped as the headline
   noun. Cockpit's line is the tightened one-pager capability line supplied
   by the brief; the other five cards are verbatim. Only Cockpit links
   anywhere (Document Intelligence has no page in v3 yet, per the brief). No
   FLAGSHIP badge — struck in review as a duplicate of the Cockpit page. */

type Capability = {
  icon: ReactNode;
  name: string;
  line: string;
  support?: string;
  href?: string;
  linkLabel?: string;
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

const CAPABILITIES: Capability[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="7" width="22" height="15" rx="1.5" />
        <path d="M9 12h14M9 16h9" />
        <path d="M12 26h8" />
      </svg>
    ),
    name: "Cockpit",
    line: "One live view of every household and account across every custodian.",
    href: ROUTES.cockpit,
    linkLabel: "Explore the Cockpit",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 4h10l6 6v18H9Z" />
        <path d="M19 4v6h6" />
        <circle cx="15" cy="18" r="3.4" />
        <path d="M17.4 20.4 20 23" />
      </svg>
    ),
    name: "Document Intelligence",
    line: "Turn term sheets, statements and client documents into structured data you can query.",
    support:
      "Every extracted field is shown next to the clause it came from, and nothing moves until someone approves it.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="7" cy="9" r="2.6" />
        <circle cx="25" cy="9" r="2.6" />
        <circle cx="16" cy="24" r="2.6" />
        <path d="M9.4 10.6 14 21.8M22.6 10.6 18 21.8" />
      </svg>
    ),
    name: "Workflow Automation",
    line: "Run your firm's processes to completion: reviews, audit prep, client materials.",
    support:
      "A process is defined once and then it runs, pausing only where a human decision is genuinely required.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H14l-6 5v-5H8a2 2 0 0 1-2-2Z" />
        <path d="M11 12h10M11 16h6" />
      </svg>
    ),
    name: "Relationship Scribe",
    line: "Speak the meeting; the call report, the CRM entries and the follow-ups file themselves.",
    support:
      "The record is written while the conversation is still accurate, not from memory on Friday, and in the shape an SFC- or MAS-supervised firm is expected to keep it.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="13" cy="13" r="8" />
        <path d="M9 15l2.4-5 2.6 3.4 2.4-4.6L18.6 15" />
        <path d="M19 19l7 7" />
      </svg>
    ),
    name: "Book-aware Research",
    line: "Ask the market question; get the answer against your book, not the market in general.",
    support:
      "It reads your positions, mandates and exposures first, so the answer arrives already scoped to the clients it actually affects.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 4 27 8v8c0 7-5 10.5-11 13-6-2.5-11-6-11-13V8Z" />
        <path d="M11.4 16l3 3 6-6.4" />
      </svg>
    ),
    name: "Compliance Copilot",
    line: "Watch every suitability cycle and assemble the evidence before the reviewer asks.",
    support:
      "Open cycles, missing documents and DDQ-ready exports, tracked as the work happens rather than gathered in the week before an inspection.",
  },
];

export default function Capabilities() {
  return (
    <section className="mai-cap band band--paper">
      <div className="container">
        <Reveal as="div" className="mai-cap__head">
          <h2 className="mai-cap__title">Six capabilities. Each does a real job on its own.</h2>
          <p className="mai-cap__sub">
            License one, several, or all six. Each works alone; together they compound on one
            book, one audit log.
          </p>
        </Reveal>

        <ul className="mai-cap__grid">
          {CAPABILITIES.map((item, index) => (
            <Reveal as="li" key={item.name} className="mai-cap__card" delay={(index % 3) * 80}>
              <span className="mai-cap__icon">{item.icon}</span>
              <h3 className="mai-cap__card-title">{item.name}</h3>
              <p className="mai-cap__card-line">{item.line}</p>
              {item.support && <p className="mai-cap__card-support">{item.support}</p>}
              {item.href && (
                <a className="mai-cap__card-link" href={item.href}>
                  {item.linkLabel}
                  <svg className="mai-cap__arrow" viewBox="0 0 12 12" aria-hidden="true">
                    <path
                      d="M2.5 9.5 9.5 2.5M4.5 2.5h5v5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
