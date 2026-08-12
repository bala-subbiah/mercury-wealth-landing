import Reveal from "../../components/Reveal";
import "./TrustCondensed.css";

/* Copy — docs/copy-deck-v2-home.md §8, verbatim. The certifications line and
   the honesty note beneath it are exact and must never be upgraded. The
   closing quote is a founder's statement, never a testimonial: it carries no
   customer quote and sits next to none. */
const EYEBROW = "GOVERNANCE & SECURITY";
const TITLE = "Three answers your compliance officer asks for first.";

const PILLARS = [
  {
    claim: "Immutable audit log.",
    mechanism:
      "Every material action, in every engine, is written once — actor, timestamp, before and after — and can be filtered and exported, never edited or deleted.",
  },
  {
    claim: "Hong Kong and Singapore data residency.",
    mechanism:
      "Client data is stored and processed in-region, so cross-border data questions have a one-line answer.",
  },
  {
    claim: "No training on client data.",
    mechanism:
      "Your clients' data is never used to train models, and is never pooled with any other firm's.",
  },
];

const FULL_SET_LINK = "See all six answers";
const CERTS = "SOC 2 TYPE II — AUDIT UNDERWAY · ISO 27001 — CERTIFICATION IN PROGRESS";
const HONESTY = "Applied for and in progress. Neither is held today; we'll say so the day they are.";

const FOUNDER_LABEL = "WHY WE BUILT MERCURY";
const STATEMENT =
  "I spent years watching very good advisors lose their day to the machinery around the job — six custodian portals before the first coffee, a spreadsheet holding the real numbers, a term sheet retyped three times, and a call report written from memory on a Friday afternoon. The part that always bothered me most is what that scattering hides: drift that started in March and gets discovered at quarter-end, when the honest conversation with the client is three months late. So we built engines that do that work, and we put all of them on one spine — because no firm should have to buy six new silos to stop running six old ones.";
const NAME = "Oscar Chan";
const ROLE = "Co-Founder & CEO, Mercury Wealth";

/**
 * One section, two moments: the three answers a compliance officer asks for
 * first, then the founder's statement that explains why any of it exists.
 */
export default function TrustCondensed() {
  return (
    <section className="section tc" id="trust" data-section="trust" aria-labelledby="tc-title">
      <div className="container">
        <Reveal className="section-head tc-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title tc-title" id="tc-title">
            {TITLE}
          </h2>
        </Reveal>

        <div className="tc-pillars">
          {PILLARS.map((pillar, index) => (
            <Reveal className="tc-pillar" key={pillar.claim} delay={index * 60}>
              <h3 className="tc-claim">{pillar.claim}</h3>
              <p className="tc-mech">{pillar.mechanism}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="tc-certs" delay={40}>
          <div className="tc-certs-text">
            <p className="mono tc-certs-line">{CERTS}</p>
            <p className="tc-honesty">{HONESTY}</p>
          </div>
          <a className="tc-link" href="/cockpit/#trust">
            {FULL_SET_LINK}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal className="tc-founder" delay={40}>
          <span className="mono tc-founder-label">{FOUNDER_LABEL}</span>
          <figure className="tc-quote">
            <p className="tc-statement">{STATEMENT}</p>
            <figcaption className="tc-attrib">
              <span className="tc-name">{NAME}</span>
              <span className="mono tc-role">{ROLE}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
