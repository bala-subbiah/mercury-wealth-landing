import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import { ROUTES } from "../../../chrome/routes.ts";
import "./SecurityGrid.css";

/* Security grid — the dark bookend before the close, replacing the three-item
   trust band with the six answers a due-diligence reviewer opens with.

   Two of the six are the hedged certifications, and they keep their exact
   wording: the status sub-lines and the honesty note below the grid are a
   single sanctioned string used sitewide (fact source §4 TrustStatus). They are
   never upgraded, never paraphrased and never given a date. The other four are
   tightened from the mechanism lines of the same six answers. */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type Cell = { icon: ReactNode; title: string; status: string };

const CELLS: ReadonlyArray<Cell> = [
  {
    icon: (
      <>
        <path d="M12 2.8 5.2 5.6v5.3c0 4.1 2.8 7.9 6.8 9.6 4-1.7 6.8-5.5 6.8-9.6V5.6z" {...STROKE} />
        <path d="m9 11.8 2.2 2.2 4-4.2" {...STROKE} />
      </>
    ),
    title: "SOC 2 Type II",
    status: "AUDIT UNDERWAY",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="9.4" r="5.4" {...STROKE} />
        <path d="m8.6 14.2-1.4 6 4.8-2.4 4.8 2.4-1.4-6" {...STROKE} />
      </>
    ),
    title: "ISO 27001",
    status: "CERTIFICATION IN PROGRESS",
  },
  {
    icon: (
      <>
        <ellipse cx="12" cy="6.4" rx="6.4" ry="2.8" {...STROKE} />
        <path d="M5.6 6.4v11.2c0 1.55 2.87 2.8 6.4 2.8s6.4-1.25 6.4-2.8V6.4" {...STROKE} />
        <path d="M5.6 12c0 1.55 2.87 2.8 6.4 2.8s6.4-1.25 6.4-2.8" {...STROKE} />
        <path d="M4.2 20.4 19.8 3.8" {...STROKE} />
      </>
    ),
    title: "No training on client data",
    status: "NEVER POOLED, NEVER TRAINED ON",
  },
  {
    icon: (
      <>
        <path d="M3.6 6.6h9.6M3.6 11.2h9.6M3.6 15.8h5.6" {...STROKE} />
        <rect x="14.6" y="13.6" width="6" height="5.4" rx="1.1" {...STROKE} />
        <path d="M16.1 13.6v-1.5a1.5 1.5 0 0 1 3 0v1.5" {...STROKE} />
      </>
    ),
    title: "Immutable audit log",
    status: "WHO · WHAT · WHEN, NEVER EDITED",
  },
  {
    icon: (
      <>
        <circle cx="8.6" cy="8.4" r="3.2" {...STROKE} />
        <circle cx="16.4" cy="8.4" r="3.2" {...STROKE} />
        <path d="M3.4 19.4c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2" {...STROKE} />
        <path d="M14.6 14.4a5.2 5.2 0 0 1 6 5" {...STROKE} />
      </>
    ),
    title: "Four-eyes approvals",
    status: "TWO HUMANS, EVERY TIME",
  },
  {
    icon: (
      <>
        <path d="M3.8 18.6c2.4 0 3.2-1.6 4.4-4.6s2.2-5.6 3.6-5.6c1 0 1.4.8 1.4 1.8 0 2.4-3 3.8-3 6.2 0 1.2.8 2 2 2 1.6 0 2.8-1.2 3.8-2.6" {...STROKE} />
        <path d="M4.2 21.2h15.6" {...STROKE} />
      </>
    ),
    title: "E-signature trail",
    status: "BOUND TO THE VERSION SIGNED",
  },
];

export default function SecurityGrid() {
  return (
    <section className="band band--navy sec">
      <div className="container">
        <Reveal as="h2" className="sec__title">
          Engineered for trust, isolation and control.
        </Reveal>

        <ul className="sec__grid">
          {CELLS.map((cell, position) => (
            <Reveal
              as="li"
              className="sec__cell"
              key={cell.title}
              delay={Math.min(position, 3) * 60}
            >
              <svg className="sec__icon" viewBox="0 0 24 24" aria-hidden="true">
                {cell.icon}
              </svg>
              <h3 className="sec__cell-title">{cell.title}</h3>
              <p className="sec__status">{cell.status}</p>
            </Reveal>
          ))}
        </ul>

        <div className="sec__foot">
          <p className="sec__note">
            Applied for and in progress. Neither is held today; we'll say so the day they
            are.
          </p>

          <a className="sec__link" href={ROUTES.trust}>
            See all six answers
            <svg viewBox="0 0 14 10" aria-hidden="true" className="sec__link-arrow">
              <path
                d="M1 5h11M8.4 1.4 12 5l-3.6 3.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
