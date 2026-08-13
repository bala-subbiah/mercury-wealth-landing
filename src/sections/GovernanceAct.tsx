import { Fragment } from "react";

import Reveal from "../components/Reveal";
import { DEMO_LINK_PROPS } from "../links";
import "./GovernanceAct.css";

/* Copy — docs/copy-deck.md §4. The headline is the one copy change: "Governance.
   Built in, not bolted on." was both a tired construction and a near-lift of a
   competitor's live line, and the deck already contained the better sentence
   (docs/critique-v1.md §8, docs/v2-plan.md §4.6).

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
const QUOTE = "Sleep before the audit, not during it.";
const CTA = "Open the live demo";

/* The lifecycle, as a mono thread. */
const LIFECYCLE_LABEL = "ONE RECORD, END TO END";
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
