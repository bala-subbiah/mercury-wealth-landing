import Reveal from "../components/Reveal";
import "./FactsBand.css";

/* Copy — docs/copy-deck.md §12, verbatim, verified rows only. The deck's
   BOOKING CENTRES / CUSTODIAN FEEDS / UPTIME rows carry [VERIFY] and are cut
   rather than softened. §13's numberless variant closes the band.

   DOMAIN_LINE is the one line kept from the retired Credibility band
   (docs/v2-plan.md §4.10): the logo row itself is the home page's now, but the
   domain-fluency signal belongs with the specifics it introduces. Verbatim
   from the deck's §2, claiming nothing the rows below do not carry. */
const LABEL = "THE SPECIFICS";
const DOMAIN_LINE =
  "MULTI-CUSTODIAN · HKD · SGD · USD BASE REPORTING · ADVISORY & DPM MANDATES · SFC · MAS · HKMA";

const FACTS = [
  {
    stat: "CUSTODIANS",
    line: "Multi-custodian by design: live feeds and hand-keyed statements in one book",
  },
  { stat: "BASE REPORTING", line: "HKD · SGD · USD, with native amounts one click away" },
  {
    stat: "INSTRUMENTS",
    line: "Equities · bonds with yield and duration analytics · funds · structured notes",
  },
  { stat: "MANDATES", line: "Advisory and discretionary (DPM), monitored on the same spine" },
  { stat: "DATA SPINE", line: "Households · accounts · portfolios · holdings · activity" },
  { stat: "TAX LOTS", line: "Cross-border tax-lot awareness, including specific-ID cost basis" },
  { stat: "AUDIT", line: "Every material action on an immutable log, as it happens" },
  { stat: "DERIVED FIGURES", line: "Computed from base facts, never keyed in twice" },
];

const LIVE_LABEL = "GETTING LIVE";
const LIVE_LINE =
  "Custodian feeds connected, history loaded, and your book live, before the first quarter-end you’d have spent reconciling it.";

export default function FactsBand() {
  return (
    <section className="section facts on-paper" aria-label="The specifics">
      <div className="container">
        <Reveal className="facts-head">
          <span className="mono facts-label">{LABEL}</span>
          <p className="mono facts-domain">{DOMAIN_LINE}</p>
        </Reveal>

        <dl className="facts-grid">
          {FACTS.map((fact, index) => (
            <Reveal className="facts-item" key={fact.stat} delay={(index % 4) * 50}>
              <dt className="mono facts-stat">{fact.stat}</dt>
              <dd className="facts-line">{fact.line}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="facts-live" delay={40}>
          <span className="mono facts-live-label">{LIVE_LABEL}</span>
          <p className="facts-live-line">{LIVE_LINE}</p>
        </Reveal>
      </div>
    </section>
  );
}
