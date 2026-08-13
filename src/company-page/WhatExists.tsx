import { DEMO_LINK_PROPS } from "../links";
import Reveal from "../components/Reveal";

/* What exists today: only facts already claimed elsewhere on the site.
   The certification line and the honesty note beneath it are verbatim from
   src/sections/TrustPillars.tsx (docs/copy-deck.md §11) and must never be
   upgraded: no dates, no auditor names, no "certified". Nothing on this page
   claims traction, customers, headcount or funding, because none is claimed
   anywhere (docs/v2-plan.md §6 #6). */

const TITLE = "What exists today.";

const ENGINES_LABEL = "THE ENGINES";
const ENGINES =
  "Six of them, on one spine: briefing, documents, workflows, meetings, " +
  "research, compliance. Each is licensable on its own. Run two and they share " +
  "the same book and the same audit log.";

const COCKPIT_LABEL = "THE COCKPIT";
const COCKPIT_LEAD = "It is live, and it is open. ";
const COCKPIT_CTA = "Open the live demo";
const COCKPIT_TAIL = ": a real book, with drift already in it. No form, no sign-up.";

const CERTS_LABEL = "CERTIFICATIONS";
const CERTS = "SOC 2 Type II: audit underway. ISO 27001: certification in progress.";
const HONESTY = "Applied for and in progress. Neither is held today; we’ll say so the day they are.";

const DATA_LABEL = "CLIENT DATA";
const DATA =
  "No training on client data. Your clients’ data is never used to train " +
  "models, and is never pooled with any other firm’s.";

export default function WhatExists() {
  return (
    <section
      className="section on-paper co-band co-exists"
      id="today"
      aria-labelledby="today-title"
    >
      <Reveal className="container container--narrow">
        <h2 className="section-title co-heading" id="today-title">
          {TITLE}
        </h2>

        <dl className="co-rows">
          <div className="co-row">
            <dt className="mono mono-muted co-row-label">{ENGINES_LABEL}</dt>
            <dd className="co-row-body">{ENGINES}</dd>
          </div>

          <div className="co-row">
            <dt className="mono mono-muted co-row-label">{COCKPIT_LABEL}</dt>
            <dd className="co-row-body">
              {COCKPIT_LEAD}
              <a className="text-link" {...DEMO_LINK_PROPS} data-demo-cta>
                {COCKPIT_CTA}
              </a>
              {COCKPIT_TAIL}
            </dd>
          </div>

          <div className="co-row">
            <dt className="mono mono-muted co-row-label">{CERTS_LABEL}</dt>
            <dd className="co-row-body">
              {CERTS}
              <span className="co-honesty">{HONESTY}</span>
            </dd>
          </div>

          <div className="co-row">
            <dt className="mono mono-muted co-row-label">{DATA_LABEL}</dt>
            <dd className="co-row-body">{DATA}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
