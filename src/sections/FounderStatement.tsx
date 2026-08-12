import Reveal from "../components/Reveal";
import "./FounderStatement.css";

/* Copy — docs/copy-deck.md §10, verbatim. A founder's statement, never a
   testimonial: it carries no customer quote and sits next to none. */
const LABEL = "WHY WE BUILT MERCURY";

const STATEMENT =
  "I spent years watching very good advisors lose their day to the machinery around the job — six custodian portals before the first coffee, a spreadsheet holding the real numbers, and a proposal rebuilt by hand every time a client asked a fair question. The part that always bothered me most is what that scattering hides: drift that started in March and gets discovered at quarter-end, when the honest conversation with the client is three months late. We built Mercury so that the advisor is the first to know, not the last.";

const NAME = "Oscar Chan";
const ROLE = "Co-Founder & CEO, Mercury Wealth";

export default function FounderStatement() {
  return (
    <section className="section founder" aria-label="Why we built Mercury">
      <Reveal className="container founder-inner">
        <span className="mono founder-label">{LABEL}</span>
        <figure className="founder-quote">
          <p>{STATEMENT}</p>
          <figcaption className="founder-attrib">
            <span className="founder-name">{NAME}</span>
            <span className="mono founder-role">{ROLE}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
