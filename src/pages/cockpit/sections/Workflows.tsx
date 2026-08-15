import { useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./Workflows.css";

/* The six workflows — fact source §2, `WorkflowCards.tsx`. Headlines and body
   copy are verbatim (they survived the review); the mono tag-strip captions
   under each card were struck, and the section eyebrow is dropped per
   Amendment 2 (no eyebrows/tag strips as section furniture).

   Wave 3: the flat 2-col card grid becomes the advisor's day unfolding. On
   desktop the copy column pins while a tall track of product fragments scrolls
   past it: brief → catch → draft → clear → execute → log, one fragment per
   step. The pinned copy crossfades to whichever fragment is crossing the middle
   of the viewport (IntersectionObserver sentinels on the fragments, centre-line
   rootMargin). Native scroll is never touched: no scroll-jacking, no scroll
   library, nothing hijacks the wheel.

   DOM order is one <li> per step carrying its own copy and its own fragment, so
   a screen reader or a keyboard user always gets the six steps in order,
   whatever the scroll position is; the two-column pinning is pure CSS grid
   placement applied at ≥1000px. Below that, and under reduced motion (or with
   no IntersectionObserver), the same markup stacks: copy, then its fragment,
   six times, all resolved.

   Every figure inside a fragment is a category-A demo figure from fact source
   §9 and stays inside the fragment; none of it is a marketing claim, and none
   of it is invented. The fragment track is aria-hidden: each fragment is an
   illustration of the sentence beside it, and the copy carries the meaning. */

const DRAW = "wf-draw";

/* Applied to every stroke that should be drawn rather than faded. pathLength
   normalises the path so one dash rule draws any of them (design.md hard rule
   5, sanctioned stroke-dashoffset exception). */
const DRAW_PROPS = { className: DRAW, pathLength: 1 };

const ICON_PROPS = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const MARK_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* A small check, reused wherever a fragment records something cleared. */
function Tick() {
  return (
    <svg className="wf-tick" viewBox="0 0 14 14" aria-hidden="true">
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

/* Two people: the four-eyes check (same mark as the governance thread). */
function FourEyesMark() {
  return (
    <svg className="wf-mark" viewBox="0 0 16 12" {...MARK_PROPS}>
      <circle cx="5" cy="4" r="2.1" />
      <path d="M1.4 10.6c0-1.9 1.6-3.1 3.6-3.1s3.6 1.2 3.6 3.1" />
      <circle cx="11.8" cy="4.6" r="1.7" />
      <path d="M9.4 10.6c0-1.5 1.1-2.5 2.4-2.5s2.4 1 2.4 2.5" />
    </svg>
  );
}

/* A signature: the client's acceptance. The squiggle draws itself in. */
function SignatureMark() {
  return (
    <svg className="wf-mark wf-mark--sign" viewBox="0 0 16 12" {...MARK_PROPS}>
      <path
        {...DRAW_PROPS}
        d="M1.4 8.2c1.7-.3 2.4-6.4 3.8-6.4s.7 6.6 2.1 6.6 1.8-3.6 3-3.6 1.4 2 2.5 2"
      />
      <path d="M1.4 10.9h13.2" />
    </svg>
  );
}

type Step = {
  icon: ReactNode;
  headline: string;
  body: string;
  fragment: ReactNode;
};

const STEPS: ReadonlyArray<Step> = [
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path {...DRAW_PROPS} d="M6 8a2 2 0 0 1 2-2h9v20H8a2 2 0 0 1-2-2Z" />
        <path {...DRAW_PROPS} d="M17 6h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
        <path {...DRAW_PROPS} d="M11 10h4M11 14h4" />
        <circle cx="24" cy="10" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
    headline: "Start the day already briefed.",
    body: "Every household and account across every custodian, rolled up in your base currency, with the native amounts one click away. What moved overnight is ranked before you ask.",
    /* 1 BRIEF — the morning briefing: a stamp and the ranked rows under it. */
    fragment: (
      <div className="wf-plane">
        <p className="wf-stamp">MORNING BRIEFING · FRI 19 JUN 2026 · 07:31 HKT</p>
        <ol className="wf-rows">
          <li className="wf-row">
            <span className="wf-row__head">
              <span className="wf-row__rank tnum">01</span>
              <span className="wf-chip wf-chip--rose">DRIFT</span>
            </span>
            <span className="wf-row__text tnum">
              Zhang Family Asia Satellite: equity 68.4% against a 60.0% target.
            </span>
          </li>
          <li className="wf-row">
            <span className="wf-row__head">
              <span className="wf-row__rank tnum">02</span>
              <span className="wf-chip wf-chip--slate">CONCENTRATION</span>
            </span>
            <span className="wf-row__text tnum">
              Okonkwo Family Thematic: NVDA 12.1% against a 10% cap.
            </span>
          </li>
          <li className="wf-row">
            <span className="wf-row__head">
              <span className="wf-row__rank tnum">03</span>
              <span className="wf-chip wf-chip--amber">REVIEW</span>
            </span>
            <span className="wf-row__text tnum">
              Lim Family Office: suitability review due 26 JUN.
            </span>
          </li>
        </ol>
      </div>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path {...DRAW_PROPS} d="M5 22c5-2 6-13 11-15s7 8 11 6" />
        <circle cx="21.5" cy="12" r="2" fill="currentColor" stroke="none" />
        <path {...DRAW_PROPS} d="M4 26h24" />
      </svg>
    ),
    headline: "Drift finds you. Not the reverse.",
    body: "Every portfolio is tracked against its model and risk profile, advisory and discretionary alike. Drift and concentration surface the day they emerge, not at quarter-end, not in the review pack.",
    /* 2 CATCH — the drift gauge, the same idiom as the home tracking card. */
    fragment: (
      <div className="wf-plane">
        <div className="wf-card">
          <p className="wf-card__head">
            <span className="wf-chip wf-chip--rose">DRIFT</span>
            <span className="wf-time tnum">19 JUN 07:02 HKT</span>
          </p>
          <p className="wf-card__label">Zhang Family Asia Satellite</p>
          <span className="wf-gauge" aria-hidden="true">
            <span className="wf-gauge__fill" />
            <span className="wf-gauge__target" />
          </span>
          <p className="wf-nums tnum">EQUITY 68.4% · TARGET 60.0% · BAND ±5.0PP</p>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path {...DRAW_PROPS} d="M9 5h10l6 6v16H9Z" />
        <path {...DRAW_PROPS} d="M19 5v6h6" />
        <path {...DRAW_PROPS} d="M13 16l2 2 5-5" />
      </svg>
    ),
    headline: "From flagged to drafted, without slides.",
    body: "A breach becomes a proposal with the positions, the rationale and the mandate check already in it. You edit and decide; nobody rebuilds a deck at 11pm.",
    /* 3 DRAFT — the proposal the breach became, with its mandate check. */
    fragment: (
      <div className="wf-plane">
        <div className="wf-card">
          <p className="wf-card__head">
            <span className="wf-chip wf-chip--slate">PROPOSAL · DRAFT</span>
          </p>
          <ul className="wf-lines">
            <li className="wf-line">
              <span>Equity</span>
              <span className="tnum">68.4% → 61.2%</span>
            </li>
            <li className="wf-line">
              <span>BYD</span>
              <span className="tnum">11.2% → 9.4%</span>
            </li>
          </ul>
          <p className="wf-check">
            <Tick />
            <span className="wf-check__label">MANDATE CHECK</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path {...DRAW_PROPS} d="M16 4 27 9v8c0 7-5 10.5-11 13-6-2.5-11-6-11-13V9Z" />
        <path {...DRAW_PROPS} d="M11.5 16.2l3 3 6-6.4" />
      </svg>
    ),
    headline: "Approvals stop living in inboxes.",
    body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every comment on the record it belongs to. When compliance asks who approved what, you don't go looking.",
    /* 4 CLEAR — the approval card: the second pair of eyes, then the signature. */
    fragment: (
      <div className="wf-plane">
        <div className="wf-card">
          <p className="wf-card__head">
            <span className="wf-chip wf-chip--slate">PRP-2026-0004</span>
            <span className="wf-time tnum">FOUR-EYES</span>
          </p>
          <p className="wf-person">
            <FourEyesMark />
            <span>Wong Mei-Ling, desk head</span>
            <Tick />
          </p>
          <p className="wf-person wf-person--sign">
            <SignatureMark />
            <span>Client acceptance, e-signature</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <path {...DRAW_PROPS} d="M5 16h18" />
        <path {...DRAW_PROPS} d="M17 9l6 7-6 7" />
        <path d="M5 9v14" strokeDasharray="0.5 4.5" />
      </svg>
    ),
    headline: "The order carries its own authority.",
    body: "An accepted proposal becomes orders, and execution status sits on the same record the client signed. The trade never gets separated from the decision that authorised it.",
    /* 5 EXECUTE — one order card on the signed record, its status advancing. */
    fragment: (
      <div className="wf-plane">
        <div className="wf-card">
          <p className="wf-card__head">
            <span className="wf-chip wf-chip--slate">PRP-2026-0004</span>
            <span className="wf-time tnum">ORDER</span>
          </p>
          <ol className="wf-states">
            <li className="wf-state">
              <Tick />
              <span>Accepted</span>
            </li>
            <li className="wf-state">
              <Tick />
              <span>Orders placed</span>
            </li>
            <li className="wf-state">
              <Tick />
              <span>Fills</span>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg {...ICON_PROPS}>
        <circle {...DRAW_PROPS} cx="15" cy="16" r="11" />
        <path {...DRAW_PROPS} d="M15 9v7l5 3" />
        <path {...DRAW_PROPS} d="M27 12l1.5-3" />
      </svg>
    ),
    headline: "Compliance stops being archaeology.",
    body: "Every material action lands on an immutable log as it happens: who, what, when, before and after. The compliance answer is a filter, not an archaeology project.",
    /* 6 LOG — the timeline writing itself, the next line still open. */
    fragment: (
      <div className="wf-plane">
        <div className="wf-card">
          <p className="wf-stamp wf-stamp--card">AUDIT TIMELINE · PRP-2026-0002</p>
          <ol className="wf-log">
            <li className="wf-log__item">
              <span className="wf-log__dot" aria-hidden="true" />
              <span className="tnum">Created from IPS breach, fixed income +11.4pp</span>
            </li>
            <li className="wf-log__item">
              <span className="wf-log__dot" aria-hidden="true" />
              <span className="tnum">Submitted for four-eyes review, 3 lines changed since v1</span>
            </li>
            <li className="wf-log__item wf-log__item--open">
              <span className="wf-log__dot" aria-hidden="true" />
              <span className="wf-log__pending" aria-hidden="true" />
            </li>
          </ol>
        </div>
      </div>
    ),
  },
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* Sentinel band: a fragment is "current" while it crosses the middle line of
   the viewport. Zero-height root band, so at most one hand-over is in flight. */
const CENTRE: IntersectionObserverInit = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

/* The ordinary reveal band, matching Reveal.tsx. */
const ENTER: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
};

export default function Workflows() {
  /* Decided on the first render, not in an effect, so the sequence never
     re-lays-out under the reader after paint. */
  const [sequenced] = useState(
    () => !prefersReducedMotion() && typeof IntersectionObserver !== "undefined",
  );
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<boolean[]>(() =>
    STEPS.map(() => !(!prefersReducedMotion() && typeof IntersectionObserver !== "undefined")),
  );
  const fragRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sequenced) return;
    const nodes = fragRefs.current.filter((node): node is HTMLDivElement => Boolean(node));
    if (!nodes.length) return;

    const crossing = new Set<number>();
    const stepOf = (target: Element) => Number((target as HTMLElement).dataset.step);

    const current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const index = stepOf(entry.target);
        if (entry.isIntersecting) crossing.add(index);
        else crossing.delete(index);
      }
      // Never falls back to "none": before the first fragment reaches the
      // middle, and after the last one leaves it, the nearest step stays lit.
      if (crossing.size) setActive(Math.max(...crossing));
    }, CENTRE);

    const entering = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = stepOf(entry.target);
        setSeen((previous) =>
          previous[index] ? previous : previous.map((value, at) => (at === index ? true : value)),
        );
        entering.unobserve(entry.target);
      }
    }, ENTER);

    for (const node of nodes) {
      current.observe(node);
      entering.observe(node);
    }

    return () => {
      current.disconnect();
      entering.disconnect();
    };
  }, [sequenced]);

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

        <ol className={`workflows__seq${sequenced ? "" : " is-static"}`}>
          {STEPS.map((step, index) => (
            <li
              key={step.headline}
              className={[
                "workflows__step",
                seen[index] ? "is-seen" : "",
                active === index ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="workflows__text">
                <div className="workflows__text-inner">
                  <span className="workflows__icon">{step.icon}</span>
                  <h3 className="workflows__step-title">{step.headline}</h3>
                  <p className="workflows__step-body">{step.body}</p>
                </div>
              </div>

              <div
                className="workflows__frag"
                data-step={index}
                aria-hidden="true"
                ref={(node) => {
                  fragRefs.current[index] = node;
                }}
              >
                {step.fragment}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
