import Reveal from "../../components/Reveal";
import "./AsiaTrustBand.css";

/* One band where v2 used two (docs/v2-plan.md §3.6): the old AsiaCompany and
   TrustCondensed acts said related things at two different altitudes and cost
   the page two full viewports between them.

   The claims are the ones those two acts carried, compressed rather than
   rewritten: the three Asia definitions come from copy deck §7, the three
   answers from §8. The certifications line and the honesty note beneath it are
   exact and must never be upgraded; "audit underway" and "in progress" are the
   whole point of them. The founder statement that used to close this band is
   gone from the home page: it lives once, on /company.

   One line was rewritten rather than compressed: data residency used to be
   stated as a present-tense deployed fact sitting directly above the hedged
   certification line (docs/critique-v1.md §7). It is a design commitment, so it
   now says so, in the same register as everything around it and at the same
   strength. The full version of the answer lives on /trust/, which is where
   "See all six answers" goes. */
const EYEBROW = "ASIA’S OPERATING REALITY · GOVERNANCE";
const TITLE = "Built here. Answerable here.";
/* Trimmed for the home word-count gate (docs/critique-v2.md P1-13). The
   residency line is NOT trimmed: it is mirrored word for word in
   src/sections/TrustPillars.tsx per critique-v2 P0-4, and if one moves the
   other must move with it. The certifications line and the honesty note are
   exact and untouched. */
const LEAD =
  "The region’s assumptions: several custodians per client, base currencies that differ from the assets.";

const ASIA_LABEL = "BUILT FOR ASIA";
const TRUST_LABEL = "ASKED FIRST BY COMPLIANCE";

interface Pillar {
  term: string;
  line: string;
}

const ASIA: Pillar[] = [
  {
    term: "SFC · MAS · HKMA",
    line: "Evidence captured as the work happens, in the shape a supervised firm must produce it.",
  },
  {
    term: "HKD · SGD · USD",
    line: "Base-currency reporting across booking centres, native amounts one click away.",
  },
  {
    term: "MULTI-CUSTODIAN",
    line: "Live feeds and hand-keyed statements read into one book, not reconciled by hand.",
  },
];

const TRUST: Pillar[] = [
  {
    term: "IMMUTABLE AUDIT LOG",
    line: "Every material action written once: actor, timestamp, before and after. Never edited, never deleted.",
  },
  {
    term: "HK / SG DATA RESIDENCY",
    line: "Built for in-region deployment in Hong Kong and Singapore, so client data does not have to leave the region it is regulated in.",
  },
  {
    term: "NO TRAINING ON CLIENT DATA",
    line: "Never used to train a model. Never pooled with another firm’s.",
  },
];

const FULL_SET_LINK = "See all six answers";
const CERTS = "SOC 2 TYPE II: AUDIT UNDERWAY · ISO 27001: CERTIFICATION IN PROGRESS";
const HONESTY = "Applied for and in progress. Neither is held today; we’ll say so the day they are.";

/**
 * The page's last argument before the offer: where Mercury was built for, and
 * what it can be asked. Two hairline columns, one certification footer.
 */
export default function AsiaTrustBand() {
  return (
    <section className="section ab" id="trust" data-section="trust" aria-labelledby="ab-title">
      <div className="container">
        <Reveal className="section-head ab-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title ab-title" id="ab-title">
            {TITLE}
          </h2>
          <p className="section-sub ab-lead">{LEAD}</p>
        </Reveal>

        <div className="ab-columns">
          <div className="ab-column">
            <p className="mono ab-column-label">{ASIA_LABEL}</p>
            <dl className="ab-list">
              {ASIA.map((pillar, index) => (
                <Reveal className="ab-row" key={pillar.term} delay={index * 60}>
                  <dt className="mono ab-term">{pillar.term}</dt>
                  <dd className="ab-def">{pillar.line}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="ab-column">
            <p className="mono ab-column-label">{TRUST_LABEL}</p>
            <dl className="ab-list">
              {TRUST.map((pillar, index) => (
                <Reveal className="ab-row" key={pillar.term} delay={index * 60}>
                  <dt className="mono ab-term">{pillar.term}</dt>
                  <dd className="ab-def">{pillar.line}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <Reveal className="ab-certs" delay={40}>
          <div className="ab-certs-text">
            <p className="mono ab-certs-line">{CERTS}</p>
            <p className="ab-honesty">{HONESTY}</p>
          </div>
          <a className="ab-link" href="/trust/">
            {FULL_SET_LINK}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
