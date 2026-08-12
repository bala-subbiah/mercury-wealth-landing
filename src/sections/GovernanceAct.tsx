import { Fragment } from "react";

import { AuditTimeline } from "../components/product";
import Reveal from "../components/Reveal";
import "./GovernanceAct.css";

/* Copy — docs/copy-deck.md §4, verbatim. */
const EYEBROW = "THE GOVERNANCE ACT";
const TITLE = "Governance. Built in, not bolted on.";
const SUBHEAD =
  "From the drift you caught this morning to the signed proposal to the placed order — one record, one spine, one timeline. Nothing is reconstructed afterwards, because nothing was ever apart.";
const BODY =
  "Most firms assemble the governance story after the fact: the proposal in a slide deck, the approval in an inbox, the trade in the custodian's system, the evidence in whoever's memory is nearest. Mercury keeps them as one linked record from the first draft. The version the client saw, the version they accepted, the officer who cleared it, the signature, the orders and the fills all hang off the same reference — and the audit timeline is written as you work, not assembled when someone asks.";
const QUOTE = "Sleep before the audit, not during it.";
const CTA = "Open the live demo";

/* The lifecycle, as a mono breadcrumb. */
const LIFECYCLE = ["DRAFT", "VERSIONS", "APPROVAL", "E-SIGN", "ORDER", "TIMELINE"];

export default function GovernanceAct() {
  return (
    <section className="section gov" id="governance" aria-labelledby="gov-title">
      <div className="container gov-grid">
        <div className="gov-copy">
          <Reveal className="section-head">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title gov-title" id="gov-title">
              {TITLE}
            </h2>
            <p className="section-sub">{SUBHEAD}</p>
          </Reveal>

          <Reveal delay={60}>
            <p className="body-copy gov-body">{BODY}</p>

            <p className="mono gov-crumb">
              {LIFECYCLE.map((step, index) => (
                <Fragment key={step}>
                  {index > 0 ? <span className="gov-crumb-arrow">→</span> : null}
                  <span>{step}</span>
                </Fragment>
              ))}
            </p>

            <p className="gov-quote">{QUOTE}</p>

            <div className="cta-row gov-cta">
              <a className="cta-primary" href="#demo-placeholder" data-demo-cta>
                {CTA}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="gov-visual" delay={100}>
          <AuditTimeline revealOnScroll />
        </Reveal>
      </div>
    </section>
  );
}
