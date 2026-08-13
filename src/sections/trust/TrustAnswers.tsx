import Reveal from "../../components/Reveal";
import "./TrustAnswers.css";

/* The six pillars from src/sections/TrustPillars.tsx, expanded for a reader who
   has only this page. Claim and mechanism are the deck's wording; the third
   line adds substance drawn from copy that already ships on the site (the
   governance act, the "what it won't do" block, docs/one-pager.html) rather
   than from any new technical assertion.

   Register fix, docs/critique-v1.md §7: data residency used to be stated as a
   present-tense deployed fact directly above the scrupulously hedged
   certification line. It is a design commitment, so it now reads as one. The
   commitment itself is not softened: Mercury is built for in-region deployment.
   What is corrected is the pretence that a web page can certify where any given
   firm's data sits. */

const EYEBROW = "THE SIX ANSWERS";
const TITLE = "What a due-diligence questionnaire gets to.";
const LEAD =
  "Each one below is the claim, the mechanism behind it, and what that means in practice. Nothing here needs another page to make sense of it.";

interface Answer {
  claim: string;
  mechanism: string;
  expansion: string;
}

const ANSWERS: Answer[] = [
  {
    claim: "Immutable audit log.",
    mechanism:
      "Every material action is written once, with actor, timestamp and before/after state; entries can be filtered and exported, never edited or deleted.",
    expansion:
      "The timeline is written as the work happens, not assembled when someone asks for it, so an audit question is answered from the record rather than from whoever’s memory is nearest.",
  },
  {
    claim: "Versioned proposals.",
    mechanism:
      "Every revision is kept in full, so the version the client accepted is retrievable exactly as they saw it.",
    expansion:
      "The version they saw, the officer who cleared it, the signature and the orders that followed all hang off the same reference, so none of it has to be matched up afterwards.",
  },
  {
    claim: "Four-eyes approvals.",
    mechanism:
      "Material actions require a second named approver, recorded on the same record as the action they cleared.",
    expansion:
      "Four-eyes means two humans, and Mercury is neither of them. It routes the approval and records who gave it; it never supplies one.",
  },
  {
    claim: "E-signature trail.",
    mechanism:
      "Client acceptance is captured in-app or by e-signature and bound to the specific proposal version signed.",
    expansion:
      "The accepted proposal becomes orders from that same record, so what the client signed and what was executed are read off one document instead of two systems.",
  },
  {
    claim: "Hong Kong and Singapore data residency.",
    mechanism:
      "Mercury is built for in-region deployment in Hong Kong and Singapore, so client data does not have to leave the region it is regulated in.",
    expansion:
      "That is a design commitment, and we would rather name it as one: residency is a property of the deployment a firm actually runs on, so we confirm it in writing for that deployment rather than assert it once here for everybody.",
  },
  {
    claim: "No training on client data.",
    mechanism:
      "Your clients’ data is never used to train models, and is never pooled with any other firm’s.",
    expansion:
      "Mercury reads your book to prepare your day and nothing else, and every figure it puts in front of you traces to a position, a document or a feed you can open.",
  },
];

/** The page's spine: six claims, each answered at three depths. */
export default function TrustAnswers() {
  return (
    <section className="section on-paper ta" id="answers" aria-labelledby="ta-title">
      <div className="container container--narrow">
        <Reveal className="section-head ta-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title ta-title" id="ta-title">
            {TITLE}
          </h2>
          <p className="section-sub">{LEAD}</p>
        </Reveal>

        <ol className="ta-list">
          {ANSWERS.map((answer, index) => (
            <Reveal as="li" className="ta-row" key={answer.claim} delay={(index % 2) * 60}>
              <div className="ta-lead-cell">
                <span className="mono ta-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="ta-claim">{answer.claim}</h3>
              </div>
              <div className="ta-body">
                <p className="ta-mech">{answer.mechanism}</p>
                <p className="ta-more">{answer.expansion}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
