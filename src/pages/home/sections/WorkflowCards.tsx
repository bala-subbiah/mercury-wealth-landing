import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import { ROUTES } from "../../../chrome/routes.ts";
import "./WorkflowCards.css";

/* Workflow cards — five benefit cards, each carrying a simplified product
   fragment rather than a dense recreation (design.md amendment 2 §3).

   Every headline is the owner-sanctioned benefit line; every support line is
   verbatim or tightened from the audited engine copy (fact source §3, and the
   mandate-aware monitoring capability in §1). Every figure inside a fragment
   comes from the demo book (fact source §9 category A) and stays inside the
   fragment: none of it is a marketing claim.

   The cards do not link. Naming the work is honest; five links that go nowhere
   would not be. One quiet link under the grid carries the reader on. */

type Card = { title: string; body: string; art: ReactNode };

const CARDS: ReadonlyArray<Card> = [
  {
    title: "Actionable market insights at scale",
    body: "Ask the market question; get the answer against your book, not the market in general.",
    art: (
      <div className="frag frag--ask">
        <p className="frag__bar">
          <span className="frag__query">Who is exposed if the Fed holds?</span>
          <span className="frag__caret" aria-hidden="true" />
        </p>
        <p className="frag__chips">
          <span className="frag__chip frag__chip--slate">3 HOUSEHOLDS</span>
        </p>
      </div>
    ),
  },
  {
    title: "Keep every relationship personal",
    body: "Speak the meeting; the call report, the CRM entries and the follow-ups file themselves.",
    art: (
      <div className="frag frag--scribe">
        <p className="frag__bar frag__bar--note">
          <span className="frag__wave" aria-hidden="true">
            <i /> <i /> <i /> <i /> <i /> <i /> <i />
          </span>
          <span className="frag__time tnum">0:41</span>
        </p>
        <p className="frag__chips">
          <span className="frag__chip frag__chip--slate">CALL REPORT</span>
          <span className="frag__chip frag__chip--slate">FOLLOW-UPS</span>
        </p>
      </div>
    ),
  },
  {
    title: "Institutional-grade portfolio tracking",
    body: "Every portfolio tracked against its model and risk profile. Drift surfaces the day it emerges.",
    art: (
      <div className="frag frag--gauge">
        <p className="frag__chips">
          <span className="frag__chip frag__chip--rose">DRIFT</span>
        </p>
        <span className="frag__track" aria-hidden="true">
          <span className="frag__fill" />
          <span className="frag__target" />
        </span>
        <p className="frag__nums tnum">68.4% against 60.0%</p>
      </div>
    ),
  },
  {
    title: "Run firm custom workflows",
    body: "A process is defined once and then it runs, pausing only where a human decision is genuinely required.",
    art: (
      <div className="frag frag--steps">
        <span className="frag__step is-done">
          <Tick />
          Review
        </span>
        <span className="frag__step is-done">
          <Tick />
          Evidence
        </span>
        <span className="frag__step">Approval</span>
      </div>
    ),
  },
  {
    title: "Parse complex documents",
    body: "Turn term sheets, statements and client documents into structured data you can query.",
    art: (
      <div className="frag frag--doc">
        <span className="frag__page" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p className="frag__chips frag__chips--lift">
          <span className="frag__chip frag__chip--amber">BARRIER</span>
          <span className="frag__chip frag__chip--slate">MATURITY 2027</span>
        </p>
      </div>
    ),
  },
];

function Tick() {
  return (
    <svg className="frag__tick" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M2.5 7.4 5.6 10.5 11.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkflowCards() {
  return (
    <section className="band band--paper work">
      <div className="container">
        <div className="work__head">
          <Reveal as="h2" className="work__title">
            Make your daily operations effortless.
          </Reveal>
          <Reveal as="p" className="work__sub" delay={80}>
            Five of the jobs your day is made of, handled on one book.
          </Reveal>
        </div>

        <ul className="work__grid">
          {CARDS.map((card, position) => (
            <Reveal
              as="li"
              className="wcard"
              key={card.title}
              delay={Math.min(position, 3) * 60}
            >
              <div className="wcard__art">{card.art}</div>
              <h3 className="wcard__title">{card.title}</h3>
              <p className="wcard__body">{card.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="work__more" delay={80}>
          <a className="work__link" href={ROUTES.mercuryAi}>
            See how Mercury AI works
            <svg viewBox="0 0 14 10" aria-hidden="true" className="work__link-arrow">
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
        </Reveal>
      </div>
    </section>
  );
}
