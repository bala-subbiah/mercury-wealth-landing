import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import { ROUTES } from "../../../chrome/routes.ts";
import "./TrustBand.css";

/* Trust band — the dark bookend before the close (design DNA item 6).
   Three answers here, the other three one click away on /trust/.

   The certifications pair is a single sanctioned string used sitewide and it
   is reproduced verbatim, hedge included. It is never upgraded, never
   paraphrased, and never given a date. */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type Answer = { icon: ReactNode; title: string; body: string };

const ANSWERS: ReadonlyArray<Answer> = [
  {
    icon: (
      <>
        <path d="M3.6 6.6h9.6M3.6 11.2h9.6M3.6 15.8h5.6" {...STROKE} />
        <rect x="14.6" y="13.6" width="6" height="5.4" rx="1.1" {...STROKE} />
        <path d="M16.1 13.6v-1.5a1.5 1.5 0 0 1 3 0v1.5" {...STROKE} />
      </>
    ),
    title: "Immutable audit log",
    body: "Every material action written once: actor, timestamp, before and after. Never edited, never deleted.",
  },
  {
    icon: (
      <>
        <path d="M12 21s6.6-6.2 6.6-11.1a6.6 6.6 0 1 0-13.2 0C5.4 14.8 12 21 12 21z" {...STROKE} />
        <circle cx="12" cy="9.8" r="2.4" {...STROKE} />
      </>
    ),
    title: "HK / SG data residency",
    body: "Built for in-region deployment in Hong Kong and Singapore. A design commitment, confirmed in writing for the deployment your firm runs on.",
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
    body: "Never used to train a model. Never pooled with another firm's.",
  },
];

export default function TrustBand() {
  return (
    <section className="band band--navy trust">
      <div className="container">
        <div className="trust__head">
          <Reveal as="h2" className="trust__title">
            Built here. Answerable here.
          </Reveal>
          <Reveal as="p" className="trust__lead measure" delay={80}>
            The region's assumptions: several custodians per client, base currencies that
            differ from the assets.
          </Reveal>
        </div>

        <ul className="trust__grid">
          {ANSWERS.map((answer, position) => (
            <Reveal as="li" className="trust__item" key={answer.title} delay={position * 70}>
              <svg className="trust__icon" viewBox="0 0 24 24" aria-hidden="true">
                {answer.icon}
              </svg>
              <h3 className="trust__item-title">{answer.title}</h3>
              <p className="trust__body">{answer.body}</p>
            </Reveal>
          ))}
        </ul>

        <div className="trust__foot">
          <div className="trust__certs">
            <p className="trust__certs-line">
              SOC 2 Type II: audit underway · ISO 27001: certification in progress
            </p>
            <p className="trust__certs-note">
              Applied for and in progress. Neither is held today; we'll say so the day they
              are.
            </p>
          </div>

          <a className="trust__link" href={ROUTES.trust}>
            See all six answers
            <svg viewBox="0 0 14 10" aria-hidden="true" className="trust__link-arrow">
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
