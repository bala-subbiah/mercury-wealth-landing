import { Fragment } from "react";

import Reveal from "../components/Reveal";
import { DEMO_LINK_PROPS } from "../links";
import "./GovernanceAct.css";

/* Copy — docs/copy-deck.md §4, with two lines since changed.

   The headline changed first: "Governance. Built in, not bolted on." was a
   tired construction and the deck already held the better sentence, so v2
   swapped it (docs/critique-v1.md §8, docs/v2-plan.md §4.6). An earlier version
   of this comment recorded that swap as the fix for the competitor near-lift.
   It was not. The near-lift was always the pull-quote below, whose sleep-before-
   audits construction was a word away from Evooq's live headline
   (docs/competitor-research.md, docs/critique-v2.md P0-3). It is replaced here
   with a line the act owns, taken from its own argument: the record is written
   as the work happens, so the evidence is never a job of its own.

   The AuditTimeline recreation that used to sit beside this copy is now the
   home page's flagship evidence (docs/v2-plan.md §3.5, §5 "no signature visual
   repeats on the home → /cockpit path"). Nothing replaces it: the act keeps its
   own thread visual, the lifecycle the record actually travels, promoted from a
   footnote under the paragraph to the full width of the section. */
const EYEBROW = "THE GOVERNANCE ACT";
const TITLE = "The audit trail writes itself.";
const SUBHEAD =
  "From the drift you caught this morning to the signed proposal to the placed order: one record, one spine, one timeline. Nothing is reconstructed afterwards, because nothing was ever apart.";
const BODY =
  "Most firms assemble the governance story after the fact: the proposal in a slide deck, the approval in an inbox, the trade in the custodian’s system, the evidence in whoever’s memory is nearest. Mercury keeps them as one linked record from the first draft. The version the client saw, the version they accepted, the officer who cleared it, the signature, the orders and the fills all hang off the same reference, and the audit timeline is written as you work, not assembled when someone asks.";
const QUOTE = "The evidence was never a separate job.";
const CTA = "Open the live demo";

/* The lifecycle, as a mono thread. */
const LIFECYCLE_LABEL = "ONE RECORD, DRAFT TO TIMELINE";
const LIFECYCLE = ["DRAFT", "VERSIONS", "APPROVAL", "E-SIGN", "ORDER", "TIMELINE"];

export default function GovernanceAct() {
  return (
    <section className="section gov" id="governance" aria-labelledby="gov-title">
      <div className="container gov-grid">
        <Reveal className="section-head gov-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title gov-title" id="gov-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <Reveal className="gov-argument" delay={60}>
          <p className="body-copy gov-body">{BODY}</p>

          <p className="gov-quote">{QUOTE}</p>

          <div className="cta-row gov-cta">
            <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
              {CTA}
            </a>
          </div>
        </Reveal>

        <Reveal className="gov-thread" delay={100}>
          <span className="mono gov-thread-label">{LIFECYCLE_LABEL}</span>
          <p className="mono gov-crumb">
            {LIFECYCLE.map((step, index) => (
              <Fragment key={step}>
                {index > 0 ? <span className="gov-crumb-arrow">→</span> : null}
                <span className="gov-crumb-step">{step}</span>
              </Fragment>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
