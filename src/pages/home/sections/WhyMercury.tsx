import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./WhyMercury.css";

/* Why Mercury — the rogo split: a sticky display head on the left, three items
   separated by hairlines on the right. Three answers, no more; the product
   pages carry the depth. Copy tightened from fact source §1, §2, §4 and §5.

   Asia is stated as expertise (base currencies here, supervisors here) rather
   than as a constraint on where the software can run, and the deployment
   answer keeps the audited residency hedge intact: residency is a property of
   the deployment a firm actually runs on, confirmed in writing for that
   deployment, never asserted once here for everybody (fact source §4, #5). */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type Item = { icon: ReactNode; title: string; body: string };

const ITEMS: ReadonlyArray<Item> = [
  {
    icon: (
      <>
        <path d="M12 3.2 3.4 7.8 12 12.4l8.6-4.6z" {...STROKE} />
        <path d="M3.4 12.2 12 16.8l8.6-4.6" {...STROKE} />
        <path d="M3.4 16.4 12 21l8.6-4.6" {...STROKE} />
      </>
    ),
    title: "Every custodian, one view",
    body: "Every household and account across every custodian, rolled up in your base currency. HKD, SGD or USD, with the native amounts one click away.",
  },
  {
    icon: (
      <>
        <path d="M12 2.8 5.2 5.6v5.3c0 4.1 2.8 7.9 6.8 9.6 4-1.7 6.8-5.5 6.8-9.6V5.6z" {...STROKE} />
        <path d="m9 11.8 2.2 2.2 4-4.2" {...STROKE} />
      </>
    ),
    title: "Governance built into the work",
    body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every material action written to an immutable log as it happens, in the shape an SFC- or MAS-supervised firm is expected to keep it.",
  },
  {
    icon: (
      <>
        <rect x="3.4" y="4.2" width="17.2" height="5.6" rx="1.4" {...STROKE} />
        <rect x="3.4" y="14.2" width="17.2" height="5.6" rx="1.4" {...STROKE} />
        <path d="M7 7h.01M7 17h.01" {...STROKE} />
      </>
    ),
    title: "Your deployment, your call",
    body: "On-prem, private cloud or your cloud. Residency is a property of the deployment your firm runs on, so we confirm it in writing for that deployment.",
  },
];

export default function WhyMercury() {
  return (
    <section className="band band--paper why">
      <div className="container why__grid">
        <div className="why__head">
          <Reveal as="h2" className="why__title">
            Why Mercury.
          </Reveal>
          <Reveal as="p" className="why__sub" delay={80}>
            Three answers, stated plainly.
          </Reveal>
        </div>

        <ul className="why__list">
          {ITEMS.map((item, position) => (
            <Reveal as="li" className="why__item" key={item.title} delay={position * 60}>
              <svg className="why__icon" viewBox="0 0 24 24" aria-hidden="true">
                {item.icon}
              </svg>
              <div className="why__text">
                <h3 className="why__item-title">{item.title}</h3>
                <p className="why__body">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
