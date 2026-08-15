import Reveal from "../../../chrome/Reveal.tsx";
import "./ByTheNumbers.css";

/* By the numbers — four editorial rows on paper: an enormous display numeral
   left, a small caption right.

   Every row states something the site already claims and can stand behind: the
   traceability rule and the four-eyes rule ("what it won't do", fact source
   §2), the founder's six-portals morning (§5), and the no-training commitment
   (§4). No traction, headcount, funding or customer figure appears here,
   because none exists. */

// Owner will supply attested metrics; swap rows here.
const ROWS: ReadonlyArray<{ figure: string; caption: string }> = [
  {
    figure: "100%",
    caption: "of figures traceable to a position, a document or a feed you can open",
  },
  {
    figure: "6 → 1",
    caption: "six custodian portals before the first coffee, one cockpit",
  },
  {
    figure: "2",
    caption: "humans behind every material approval, four-eyes always",
  },
  {
    figure: "0",
    caption: "client data used to train models, ever",
  },
];

export default function ByTheNumbers() {
  return (
    <section className="band band--paper nums">
      <div className="container">
        <Reveal as="p" className="nums__label">
          By the numbers
        </Reveal>

        <ul className="nums__list">
          {ROWS.map((row) => (
            <Reveal as="li" className="nums__row" key={row.figure}>
              <p className="nums__figure tnum">{row.figure}</p>
              <p className="nums__caption">{row.caption}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
