import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./WontDo.css";

/* What it won't do — the four audited negative claims (fact source §2,
   AiMechanism), verbatim titles and bodies. This is the trust-differentiating
   section: dark ground, calm, prominent, 2x2 on desktop / 1-col on mobile. */

type Claim = {
  icon: ReactNode;
  title: string;
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

const CLAIMS: Claim[] = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M7 21 21 7" />
        <path d="M12 7h9v9" />
        <path d="M5 27 27 5" />
      </svg>
    ),
    title: "It won't place an order.",
    body: "Execution requires an accepted proposal and a human authorisation, every time.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M9 22v-9M15 22v-6M21 22v-12" />
        <path d="M5 27 27 5" />
      </svg>
    ),
    title: "It won't invent a number.",
    body: "Every figure it shows traces to a position, a document or a feed you can open.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="10" cy="13" r="4" />
        <circle cx="22" cy="13" r="4" />
        <path d="M4 25c0-3.5 2.7-6 6-6s6 2.5 6 6M16 25c0-3.5 2.7-6 6-6s6 2.5 6 6" />
        <path d="M5 27 27 5" />
      </svg>
    ),
    title: "It won't approve anything.",
    body: "Four-eyes means two humans; the system is neither of them.",
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 25s-9-5.4-9-12.2A5.3 5.3 0 0 1 16 9.2a5.3 5.3 0 0 1 9 3.6C25 19.6 16 25 16 25Z" />
        <path d="M5 27 27 5" />
      </svg>
    ),
    title: "It won't learn from your clients.",
    body: "Your data is never used to train models. Not yours, not anyone else's.",
  },
];

export default function WontDo() {
  return (
    <section className="mai-wont band band--navy">
      <div className="container">
        <Reveal as="h2" className="mai-wont__title">
          What it won't do.
        </Reveal>

        <ul className="mai-wont__grid">
          {CLAIMS.map((claim, index) => (
            <Reveal as="li" key={claim.title} className="mai-wont__item" delay={(index % 2) * 80}>
              <span className="mai-wont__icon">{claim.icon}</span>
              <div>
                <h3 className="mai-wont__item-title">{claim.title}</h3>
                <p className="mai-wont__item-body">{claim.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
