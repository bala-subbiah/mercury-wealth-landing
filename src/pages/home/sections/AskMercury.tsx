import Reveal from "../../../chrome/Reveal.tsx";
import "./AskMercury.css";

/* Ask Mercury — one exchange, built as a chat-bubble fragment rather than the
   dense co-pilot recreation v2 shipped (team feedback C15).

   The question and every figure in the answer come from the audited research
   scenario (fact source §9, ResearchAnswer). The mandate-check line is part of
   the fragment for the same reason it is part of the product: an answer that
   touches a book has to say what it checked. */

const RESULTS: ReadonlyArray<{ who: string; detail: string }> = [
  { who: "Zhang Family", detail: "USD bond duration 6.2y. Est. impact −1.8%." },
  { who: "Lim Family Office", detail: "HKD funding gap. Est. impact −0.9%." },
  { who: "Okonkwo Family", detail: "USD cash 12%. Est. impact +0.3%." },
];

export default function AskMercury() {
  return (
    <section className="band band--paper ask">
      <div className="container ask__inner">
        <div className="ask__copy">
          <Reveal as="h2" className="ask__title">
            Ask the market question. Get your book's answer.
          </Reveal>
          <Reveal as="p" className="ask__sub measure" delay={80}>
            It reads your positions, mandates and exposures first, so the answer arrives
            already scoped to the clients it affects.
          </Reveal>
        </div>

        <div className="chat" role="group" aria-label="An exchange with Mercury">
          <Reveal className="chat__row chat__row--ask">
            <p className="chat__bubble chat__bubble--ask">
              The Fed decides tonight. Who in my book is exposed if they hold?
            </p>
          </Reveal>

          <Reveal className="chat__row chat__row--answer" delay={100}>
            <div className="chat__bubble chat__bubble--answer">
              <p className="chat__who">MERCURY</p>

              <ul className="chat__results">
                {RESULTS.map((result) => (
                  <li className="chat__result" key={result.who}>
                    <span className="chat__name">{result.who}</span>
                    <span className="chat__detail tnum">{result.detail}</span>
                  </li>
                ))}
              </ul>

              <p className="chat__check">
                <svg className="chat__tick" viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M2.5 7.4 5.6 10.5 11.5 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                MANDATE CHECK · ALL OTHERS WITHIN BAND, UNDER ±0.2%
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
