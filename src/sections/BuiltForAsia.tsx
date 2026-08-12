import Reveal from "../components/Reveal";
import "./BuiltForAsia.css";

/* Copy — docs/copy-deck.md §7, verbatim. */
const EYEBROW = "BUILT FOR ASIA'S OPERATING REALITY";
const TITLE = "Your booking centres. Your currencies. Your regulators.";
const SUBHEAD =
  "Mercury was built for how books in Hong Kong and Singapore actually run — several custodians, several booking centres, clients whose base currency isn't the one their assets are in, and suitability regimes that expect evidence, not assurances.";

interface Row {
  term: string;
  title?: string;
  body: string;
}

const ROWS: Row[] = [
  {
    term: "EVERY CUSTODIAN · ONE COCKPIT",
    body: "Assets sit where the client's relationships put them: a Hong Kong custodian, a Singapore custodian, a statement that still arrives as a PDF. Mercury takes all of it — live feeds and hand-keyed statements alike — and reports one book across it.",
  },
  {
    term: "HKD · SGD · USD BASE REPORTING · NATIVE AMOUNTS ONE CLICK AWAY",
    body: "Report a household in HKD, its Singapore accounts in SGD and its US holdings in USD without anyone reconciling by hand. Every derived figure is computed from base facts — nothing is keyed in twice, so nothing disagrees.",
  },
  {
    term: "SFC · MAS · HKMA",
    body: "Suitability, approval and disclosure evidence is captured as the work happens, in the shape an SFC, MAS or HKMA-supervised firm expects to produce it. Cross-border tax-lot awareness comes as standard, because Asian books rarely sit in one jurisdiction.",
  },
  {
    term: "EQUITIES · BONDS (YIELD & DURATION) · FUNDS · STRUCTURED NOTES",
    title: "Structured notes, treated as a first-class instrument.",
    body: "Half the books in this region are structured-note heavy, so autocalls, barriers, observation dates and capital-protected participation are modelled properly rather than parked in an \"alternatives\" bucket with a manual price. Equities, bonds with yield and duration analytics, funds and notes all sit in the same book view. This is not a differentiator. It is the floor, and most systems in this region don't clear it.",
  },
];

export default function BuiltForAsia() {
  return (
    <section className="section asia" id="built-for-asia" aria-labelledby="asia-title">
      <div className="container container--narrow">
        <Reveal className="section-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title asia-title" id="asia-title">
            {TITLE}
          </h2>
          <p className="section-sub">{SUBHEAD}</p>
        </Reveal>

        <dl className="asia-rows">
          {ROWS.map((row, index) => (
            <Reveal className="asia-row" key={row.term} delay={index * 50}>
              <dt className="mono asia-term">{row.term}</dt>
              <dd className="asia-def">
                {row.title ? <h3 className="asia-def-title">{row.title}</h3> : null}
                <p className="body-copy">{row.body}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
