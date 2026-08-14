import Reveal from "../../../chrome/Reveal.tsx";
import "./TrustHero.css";

/* Compact hero, paper band. No eyebrow, no meta line (A5 compression): the
   six-answer promise is the whole hero, the detail lives one section down.
   Title tightened and lead compressed to <=2 lines from the fact source
   (docs/v3-fact-source.md SS4, TrustHero) — the full three-sentence lead does
   not survive the layman test at hero scale. */

export default function TrustHero() {
  return (
    <section className="band band--paper trust-hero">
      <div className="container container--narrow">
        <Reveal as="h1" className="trust-hero__title">
          Answers, in the form your compliance officer asks for.
        </Reveal>
        <Reveal as="p" className="trust-hero__lead" delay={80}>
          The six answers due diligence asks for first, stated plainly and
          written to be read on its own and forwarded.
        </Reveal>
      </div>
    </section>
  );
}
