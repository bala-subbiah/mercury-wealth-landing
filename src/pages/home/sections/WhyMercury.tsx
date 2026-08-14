import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./WhyMercury.css";

/* Why Mercury — the rogo split: a sticky serif head on the left, three items
   separated by hairlines on the right. Three answers, no more; the product
   pages carry the depth. Copy tightened from fact source §1, §2, §4 and §5. */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
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
    body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every material action written to an immutable log as it happens.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="8.6" {...STROKE} />
        <path d="M3.6 9.4h16.8M3.6 14.6h16.8" {...STROKE} />
        <path d="M12 3.4c2.3 2.4 3.5 5.3 3.5 8.6S14.3 18.2 12 20.6c-2.3-2.4-3.5-5.3-3.5-8.6S9.7 5.8 12 3.4z" {...STROKE} />
      </>
    ),
    title: "Built for Hong Kong and Singapore",
    body: "Suitability here is judged on the record: what was recommended, on what basis, cleared by whom. The SFC and the MAS ask to see it.",
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
