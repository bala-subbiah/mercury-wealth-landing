import Reveal from "../../../chrome/Reveal.tsx";
import "./Head.css";

/* Company head — paper, compact. Serif title + one-line standfirst, verbatim
   from docs/v3-fact-source.md §5 ("Why we built Mercury." / the standfirst).
   No eyebrow (Amendment 2 rule 2): the page opens straight on the title. */

export default function Head() {
  return (
    <section className="co-head band band--paper">
      <Reveal as="div" className="container container--narrow">
        <h1 className="co-head__title">Why we built Mercury.</h1>
        <p className="co-head__standfirst">
          Front-office software for external asset managers, private banks, brokerages and
          family offices in Hong Kong and Singapore.
        </p>
      </Reveal>
    </section>
  );
}
