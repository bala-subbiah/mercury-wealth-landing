import { CockpitDashboard } from "../components/product";
import Reveal from "../components/Reveal";
import "./WorkflowCards.css";

/* Copy — docs/copy-deck.md §3, verbatim. */
const EYEBROW = "THE DAY, END TO END";
const TITLE = "Six things you do every day. One place to do them.";
const SUBHEAD = "Not six tools, six logins and a spreadsheet holding it together.";

interface Card {
  label: string;
  title: string;
  body: string;
  caption: string;
  width: "wide" | "narrow";
}

const CARDS: Card[] = [
  {
    label: "BRIEF THE BOOK",
    title: "Start the day already briefed.",
    body: "Every household and account across every custodian, rolled up in your base currency, with the native amounts one click away. What moved overnight is ranked before you ask.",
    caption: "HOUSEHOLDS · ACCOUNTS · PORTFOLIOS · HOLDINGS",
    width: "wide",
  },
  {
    label: "CATCH THE BREACH",
    title: "Drift finds you. Not the reverse.",
    body: "Every portfolio is tracked against its model and risk profile, advisory and discretionary alike. Drift and concentration surface the day they emerge, not at quarter-end, not in the review pack.",
    caption: "IPS BANDS · CONCENTRATION CAPS · MANDATE RULES",
    width: "narrow",
  },
  {
    label: "DRAFT THE PROPOSAL",
    title: "From flagged to drafted, without slides.",
    body: "A breach becomes a proposal with the positions, the rationale and the mandate check already in it. You edit and decide; nobody rebuilds a deck at 11pm.",
    caption: "VERSIONED · MANDATE-CHECKED · CLIENT-READY",
    width: "narrow",
  },
  {
    label: "CLEAR THE APPROVAL",
    title: "Approvals stop living in inboxes.",
    body: "Four-eyes sign-off, client acceptance in-app or by e-signature, and every comment on the record it belongs to. When compliance asks who approved what, you don’t go looking.",
    caption: "FOUR-EYES · IN-APP OR E-SIGN · TIMESTAMPED",
    width: "wide",
  },
  {
    label: "EXECUTE THE ORDER",
    title: "The order carries its own authority.",
    body: "An accepted proposal becomes orders, and execution status sits on the same record the client signed. The trade never gets separated from the decision that authorised it.",
    caption: "ACCEPTED → ORDERS → FILLS → COMPLETED",
    width: "wide",
  },
  {
    label: "LOG EVERYTHING",
    /* The line this card used to carry is now the GovernanceAct headline two
       sections below (docs/v2-plan.md §4.6); the card keeps its own body's
       sharpest phrase instead, so the page never says either one twice. */
    title: "Compliance stops being archaeology.",
    body: "Every material action lands on an immutable log as it happens: who, what, when, before and after. The compliance answer is a filter, not an archaeology project.",
    caption: "IMMUTABLE · WHO · WHAT · WHEN · BEFORE → AFTER",
    width: "narrow",
  },
];

/**
 * The cockpit section: the book-of-business panel is the evidence, the six
 * cards are the day it runs. Nav's "Cockpit" anchors here.
 */
export default function WorkflowCards() {
  return (
    <section className="section wf" id="cockpit" aria-labelledby="wf-title">
      <div className="container">
        <Reveal className="section-head wf-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title wf-title" id="wf-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <Reveal className="wf-panel" delay={80}>
          <CockpitDashboard />
        </Reveal>

        <div className="wf-grid">
          {CARDS.map((card, index) => (
            <Reveal
              as="article"
              key={card.label}
              delay={(index % 2) * 70}
              className={`wf-card wf-card--${card.width}`}
            >
              <span className="mono wf-card-label">{card.label}</span>
              <h3 className="wf-card-title">{card.title}</h3>
              <p className="wf-card-body">{card.body}</p>
              <span className="mono wf-card-caption">{card.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
