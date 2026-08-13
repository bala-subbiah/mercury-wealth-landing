import Reveal from "../components/Reveal";

/* Why now: qualitative only. Sources: docs/one-pager.html ("Why Mercury
   exists") and docs/competitor-research.md §6 (Asia's operating reality, the
   front-office gap). No statistics, no market-size numbers, no named firms:
   every claim here is one a reader in Hong Kong or Singapore already knows to
   be true from their own desk. */

interface Beat {
  label: string;
  body: string;
}

const TITLE = "Why now.";

const BEATS: Beat[] = [
  {
    label: "INDEPENDENCE",
    body:
      "Wealth in Asia keeps moving toward independent managers, and the people " +
      "running those firms came out of the private banks. They know what good " +
      "looks like. They no longer have a bank’s back office behind them.",
  },
  {
    label: "EVIDENCE",
    body:
      "Suitability in Hong Kong and Singapore is judged on the record: what was " +
      "recommended, on what basis, cleared by whom. The SFC and the MAS ask to " +
      "see it. An assurance is not a record.",
  },
  {
    label: "THE GAP",
    body:
      "The back and middle office got their systems years ago. The front office " +
      "got portals, and a spreadsheet to reconcile them.",
  },
];

export default function WhyNow() {
  return (
    <section className="section on-paper co-band co-why" id="why-now" aria-labelledby="why-now-title">
      <Reveal className="container container--narrow">
        <h2 className="section-title co-heading" id="why-now-title">
          {TITLE}
        </h2>

        <dl className="co-rows">
          {BEATS.map((beat) => (
            <div className="co-row" key={beat.label}>
              <dt className="mono mono-muted co-row-label">{beat.label}</dt>
              <dd className="co-row-body">{beat.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
