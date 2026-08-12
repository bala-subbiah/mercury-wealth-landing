import Reveal from "../../components/Reveal";
import "./AsiaCompany.css";

/* Copy — docs/copy-deck-v2-home.md §7, verbatim. The deck specifies this act
   as the page's warm-paper daylight interlude (design.md hard rule 9 — the
   home has no facts band, so this is the page's only daylight moment).
   The regulator row states a claim about form, never about compliance: do not
   sharpen it into a citation. */
const EYEBROW = "ASIA'S OPERATING REALITY";
const TITLE = "Not localised for Asia. Built here.";
const BODY =
  "Every engine inherits the same assumptions: several custodians and several booking centres per client, base currencies that differ from the assets sitting under them, statements that still arrive as PDFs, and suitability regimes that expect evidence rather than assurances. That is true of the cockpit reporting a household this morning, and equally true of the scribe writing up the call that follows it.";

const ROWS = [
  {
    term: "SFC · MAS · HKMA",
    line: "Evidence captured as the work happens, in the shape a supervised firm is expected to produce it.",
  },
  {
    term: "HKD · SGD · USD",
    line: "Base-currency reporting across booking centres, with native amounts one click away.",
  },
  {
    term: "MULTI-CUSTODIAN",
    line: "Live feeds and hand-keyed statements, read into one book rather than reconciled by hand.",
  },
];

/**
 * The daylight interlude at company altitude — an editorial spread: the claim
 * holds the left page, the three definitions stack down the right.
 */
export default function AsiaCompany() {
  return (
    <section
      className="section ac on-paper"
      id="built-for-asia"
      data-section="built-for-asia"
      aria-labelledby="ac-title"
    >
      <div className="container ac-grid">
        <Reveal className="ac-copy">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title ac-title" id="ac-title">
            {TITLE}
          </h2>
          <p className="body-copy ac-body">{BODY}</p>
        </Reveal>

        <dl className="ac-rows">
          {ROWS.map((row, index) => (
            <Reveal className="ac-row" key={row.term} delay={index * 60}>
              <dt className="mono ac-term">{row.term}</dt>
              <dd className="ac-def">{row.line}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
