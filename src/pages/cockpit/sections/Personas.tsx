import Reveal from "../../../chrome/Reveal.tsx";
import "./Personas.css";

/* Who uses it — the four personas (fact source §2 Personas), compressed to
   role + one-line benefit. No eyebrows: role titles render as plain card
   headings, not mono micro-labels (Amendment 2 rule 2). */

const PERSONAS = [
  {
    role: "Relationship Manager",
    benefit: "Your book, briefed and ranked, before the first call of the day.",
  },
  {
    role: "Firm Principal / Team Head",
    benefit: "Every advisor's book, on the same terms, without asking for a spreadsheet.",
  },
  {
    role: "Compliance & Operations",
    benefit: "The approval trail, without asking anyone for it.",
  },
  {
    role: "Family Office Principal",
    benefit: "The whole family's book, across every custodian, without asking anyone to prepare it.",
  },
];

export default function Personas() {
  return (
    <section className="personas band band--paper">
      <div className="container">
        <Reveal as="h2" className="personas__title">
          Four jobs. One record between them.
        </Reveal>

        <ul className="personas__grid">
          {PERSONAS.map((item, index) => (
            <Reveal as="li" key={item.role} className="personas__card" delay={(index % 2) * 80}>
              <h3 className="personas__role">{item.role}</h3>
              <p className="personas__benefit">{item.benefit}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
