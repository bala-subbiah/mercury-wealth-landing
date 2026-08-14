import type { ReactNode } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./TrustAnswers.css";

/* The six answers — the page's core content. Presentation compressed per
   review A5: icon + verbatim claim + verbatim one-line mechanism up front;
   the longer verbatim expansion sits one click away in a native <details>,
   so a layman reads six lines and a compliance officer still gets the full
   answer without leaving the page. Copy verbatim from
   docs/v3-fact-source.md SS4 (TrustAnswers) — hedge on card 5 preserved
   exactly, never upgraded to a present-tense deployed fact. */

type Answer = {
  title: string;
  mechanism: string;
  expansion: string;
  icon: ReactNode;
};

const ICON_PROPS = {
  viewBox: "0 0 44 44",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function AuditLogIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M10 6.5c-.3 6 -.4 12 0 18 -.2 4 .1 8 0 12.5 8 .4 16 .3 24 0 .3 -10 .3 -20.5 -.3 -30.9 -7.7 -.4 -16 -.2 -23.7 .4Z" />
      <path d="M15.5 15h13" />
      <path d="M15.5 21h13" />
      <path d="M15.5 27h8.5" />
      <path d="M27 27.5c3.6 -.4 6.8 2 7.2 5.6 .4 3.6 -2 6.8 -5.6 7.2 -3.6 .4 -6.8 -2 -7.2 -5.6 -.3 -2.6 1 -5 3.1 -6.3" />
      <path d="M31 30.5v3.2l2.3 1.6" />
    </svg>
  );
}

function VersionedIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 20.5c-.3 6.4 -.2 10.6 .2 15.7 6.9 .5 13.3 .3 19.8 -.2 .4 -5.2 .3 -9.6 0 -15.8 -6.7 -.6 -13.3 -.5 -20 .3Z" />
      <path d="M12.5 20.2c-.2 -3.6 -.2 -6.3 0 -9.6 6.4 -.6 12.2 -.5 18.3 .2 .4 3 .3 6 .1 9.3" />
      <path d="M16 12.1c-.1 -2 -.1 -3.4 0 -5.2 5.4 -.5 10 -.4 15 .3 .3 1.7 .2 3.3 0 5" />
      <path d="M14 28h11" />
      <path d="M14 33h7.5" />
    </svg>
  );
}

function FourEyesIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4.5 17c3.6 -5.6 8.7 -8 14 -7.8 5.4 .2 9.8 3 13 8 -3 5.6 -7.5 8.6 -13 8.7 -5.6 .1 -10.6 -2.7 -14 -8.9Z" />
      <path d="M17.7 17c-.1 -2.2 1.6 -4 3.9 -4 2.2 0 4 1.8 3.9 4.1 -.1 2.2 -1.9 3.9 -4.1 3.8 -1.8 -.1 -3.3 -1.5 -3.6 -3.2" />
      <path d="M8 29.5c3.3 -4.7 7.6 -6.8 12.4 -6.6 4.9 .2 8.9 2.7 11.8 6.9 -2.7 4.6 -6.8 7 -11.8 7 -5.1 .1 -9.6 -2.4 -12.4 -7.3Z" />
      <path d="M18.6 29.6c-.1 -1.9 1.4 -3.4 3.3 -3.4 1.9 0 3.4 1.6 3.3 3.5 -.1 1.9 -1.7 3.3 -3.5 3.2 -1.5 -.1 -2.8 -1.3 -3 -2.7" />
    </svg>
  );
}

function SignatureIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M8 33.5c1.9 -8.7 4.3 -16.2 8 -23.6 1.4 -2.7 3.4 -3.9 4.6 -2.4 1.3 1.7 .6 6 -.4 9.6 -1.6 5.9 -3.7 11.3 -6.6 16.7 -.8 1.5 -.9 2.6 .5 2.2 3.1 -.9 6.7 -3.6 9.7 -6.7" />
      <path d="M25 30.3c-.6 1.7 -.4 3 1.4 2.5 2.6 -.7 5.5 -3 7.9 -5.6" />
      <path d="M8 38.5c8.4 .6 17.5 .5 26.5 -.2" />
    </svg>
  );
}

function ResidencyIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M22 6.3c6.8 -.4 12.2 4.7 12.4 11.2 .2 6.9 -5.6 13.9 -12.4 20.2 -7 -6.5 -12.6 -13.2 -12.4 -20.4C9.8 10.7 15.3 6.7 22 6.3Z" />
      <path d="M22 13.4c2.7 -.2 5 2 5.1 4.7 .1 2.8 -2.2 5.1 -5 5 -2.7 -.1 -4.9 -2.3 -4.9 -5 .1 -2.3 1.8 -4.3 4 -4.7" />
    </svg>
  );
}

function NoTrainingIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M13 12.5c-.3 -3 2.2 -5.5 5.7 -5.7 2 -3 6.7 -3.4 9 -.6 3.3 -.3 6.2 2.2 6 5.6 2.6 1.4 3 5.4 .5 7.4 1 3.2 -1.3 6.4 -4.7 6.2" />
      <path d="M29.5 25.4c-.4 3 -3.2 5 -6.3 4.5 -1 2.6 -4.1 3.7 -6.6 2.4" />
      <path d="M16.6 32.3c-2.8 -.2 -4.8 -2.8 -4.3 -5.6 -2.7 -1.2 -3.5 -4.9 -1.5 -7.2 -1.4 -2 -1 -4.7 .9 -6.2" />
      <path d="M22 13v18" />
      <path d="M8 8.5 36 35.5" />
    </svg>
  );
}

const ANSWERS: Answer[] = [
  {
    title: "Immutable audit log.",
    mechanism:
      "Every material action is written once, with actor, timestamp and before/after state; entries can be filtered and exported, never edited or deleted.",
    expansion:
      "The timeline is written as the work happens, not assembled when someone asks for it, so an audit question is answered from the record rather than from whoever's memory is nearest.",
    icon: <AuditLogIcon />,
  },
  {
    title: "Versioned proposals.",
    mechanism:
      "Every revision is kept in full, so the version the client accepted is retrievable exactly as they saw it.",
    expansion:
      "The version they saw, the officer who cleared it, the signature and the orders that followed all hang off the same reference, so none of it has to be matched up afterwards.",
    icon: <VersionedIcon />,
  },
  {
    title: "Four-eyes approvals.",
    mechanism:
      "Material actions require a second named approver, recorded on the same record as the action they cleared.",
    expansion:
      "Four-eyes means two humans, and Mercury is neither of them. It routes the approval and records who gave it; it never supplies one.",
    icon: <FourEyesIcon />,
  },
  {
    title: "E-signature trail.",
    mechanism:
      "Client acceptance is captured in-app or by e-signature and bound to the specific proposal version signed.",
    expansion:
      "The accepted proposal becomes orders from that same record, so what the client signed and what was executed are read off one document instead of two systems.",
    icon: <SignatureIcon />,
  },
  {
    title: "Hong Kong and Singapore data residency.",
    mechanism:
      "Mercury is built for in-region deployment in Hong Kong and Singapore, so client data does not have to leave the region it is regulated in.",
    // HEDGED — verbatim, never upgrade to a present-tense "deployed" claim.
    expansion:
      "That is a design commitment, and we would rather name it as one: residency is a property of the deployment a firm actually runs on, so we confirm it in writing for that deployment rather than assert it once here for everybody.",
    icon: <ResidencyIcon />,
  },
  {
    title: "No training on client data.",
    mechanism:
      "Your clients' data is never used to train models, and is never pooled with any other firm's.",
    expansion:
      "Mercury reads your book to prepare your day and nothing else, and every figure it puts in front of you traces to a position, a document or a feed you can open.",
    icon: <NoTrainingIcon />,
  },
];

export default function TrustAnswers() {
  return (
    <section className="band band--paper trust-answers">
      <div className="container">
        <Reveal as="h2" className="trust-answers__title">
          What a due-diligence questionnaire gets to.
        </Reveal>
        <Reveal as="p" className="trust-answers__lead" delay={80}>
          Each one below is the claim and the mechanism behind it. The detail
          a reviewer would ask for next is one click away.
        </Reveal>

        <ul className="trust-answers__grid">
          {ANSWERS.map((answer, index) => (
            <Reveal
              as="li"
              key={answer.title}
              className="trust-answer"
              delay={Math.min(index * 60, 180)}
            >
              <span className="trust-answer__icon">{answer.icon}</span>
              <h3 className="trust-answer__title">{answer.title}</h3>
              <p className="trust-answer__mechanism">{answer.mechanism}</p>
              <details className="trust-answer__details">
                <summary className="trust-answer__summary">
                  How it works in practice
                </summary>
                <p className="trust-answer__expansion">{answer.expansion}</p>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
