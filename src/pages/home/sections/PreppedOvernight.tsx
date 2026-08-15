import { useEffect, useState } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./PreppedOvernight.css";

/* "The colleague who prepped overnight" — the team's anchor concept, told as a
   simplified product fragment rather than a dense recreation: a small briefing
   panel whose status cards advance on their own.

   Every figure on these cards comes from the demo book (fact source §9 category
   A) and stays inside the fragment. None of it is a marketing claim, and none
   of it is invented. The action lines are card UI, not links: nothing here
   should look clickable and then go nowhere. */

const ROTATE_MS = 10_000;

/* How long a card spends working before it resolves. Long enough to read the
   working line, short enough that the card is never what you are waiting for. */
const RESOLVE_MS = 600;

type Card = {
  chip: string;
  tone: "rose" | "amber" | "slate";
  text: string;
  action: string;
};

const CARDS: ReadonlyArray<Card> = [
  {
    chip: "DRIFT",
    tone: "rose",
    text: "Zhang Family Asia Satellite: equity 68.4% against a 60.0% target.",
    action: "Draft the proposal",
  },
  {
    chip: "REVIEW",
    tone: "amber",
    text: "Lim Family Office: suitability review due 26 JUN.",
    action: "Open the review",
  },
  {
    chip: "CONCENTRATION",
    tone: "slate",
    text: "Okonkwo Family Thematic: NVDA 12.1% against a 10% cap.",
    action: "See the holding",
  },
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function PreppedOvernight() {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Each card arrives mid-work and resolves: the briefing is being read, not
  // retrieved from a slide. Opacity and transform only, and the card's box is
  // the same size in both states, so nothing on the page moves.
  const [resolving, setResolving] = useState(!prefersReducedMotion());

  useEffect(() => {
    if (reduced) return;
    setResolving(true);
    const timer = window.setTimeout(() => setResolving(false), RESOLVE_MS);
    return () => window.clearTimeout(timer);
  }, [index, reduced]);

  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % CARDS.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, [reduced, paused]);

  return (
    <section className="band band--paper-2 prepped">
      <div className="container prepped__grid">
        <div className="prepped__copy">
          <Reveal as="h2" className="prepped__title">
            The colleague who prepped overnight.
          </Reveal>
          <Reveal as="p" className="prepped__sub measure" delay={80}>
            A very well-organised junior read everything before you came in, and left the
            briefing on your desk.
          </Reveal>
        </div>

        <Reveal className="prepped__visual" delay={120}>
          <div
            className="brief"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <p className="brief__stamp">MORNING BRIEFING · FRI 19 JUN 2026 · 07:31 HKT</p>

            <div
              className={`brief__stack${reduced ? " brief__stack--static" : ""}`}
              role="group"
              aria-label="Overnight briefing items"
            >
              {CARDS.map((card, position) => {
                const active = reduced || position === index;
                const working = active && !reduced && resolving;
                return (
                  <article
                    className={`bcard bcard--${card.tone}${active ? " is-active" : ""}${
                      working ? " is-resolving" : ""
                    }`}
                    key={card.chip}
                    aria-hidden={active ? undefined : true}
                  >
                    <div className="bcard__body">
                      <p className="bcard__chip">{card.chip}</p>
                      <p className="bcard__text">{card.text}</p>
                      <p className="bcard__action">
                        {card.action}
                        <svg
                          viewBox="0 0 14 10"
                          aria-hidden="true"
                          className="bcard__arrow"
                        >
                          <path
                            d="M1 5h11M8.4 1.4 12 5l-3.6 3.6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </div>

                    {active && !reduced && (
                      <p className="bcard__working" aria-hidden="true">
                        Reading overnight moves…
                      </p>
                    )}
                  </article>
                );
              })}
            </div>

            {!reduced && (
              <div className="brief__dots">
                {CARDS.map((card, position) => (
                  <button
                    type="button"
                    key={card.chip}
                    className={`brief__dot${position === index ? " is-current" : ""}`}
                    aria-label={`Show briefing item ${position + 1} of ${CARDS.length}`}
                    aria-current={position === index ? "true" : undefined}
                    onClick={() => setIndex(position)}
                  >
                    <span className="brief__dot-mark" aria-hidden="true" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
