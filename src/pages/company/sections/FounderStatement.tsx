import Reveal from "../../../chrome/Reveal.tsx";
import "./FounderStatement.css";

/* The founder statement — the single sitewide version (fact source §5 /
   §7). Verbatim, sanctioned: do not reword, do not trim, add no biographical
   fact beyond the byline and the LinkedIn link the owner supplied. The second
   co-founder stays unnamed. Checked for em-dashes: none present. */

const OSCAR_LINKEDIN = "https://www.linkedin.com/in/oscar-chan-499a1a48/";

const STATEMENT =
  "I spent years watching very good advisors lose their day to the machinery " +
  "around the job. Six custodian portals before the first coffee, a spreadsheet " +
  "holding the real numbers, a term sheet retyped three times, and a call report " +
  "written from memory on a Friday afternoon. The part that always bothered me " +
  "most is what that scattering hides: drift that started in March and gets " +
  "discovered at quarter-end, when the honest conversation with the client is " +
  "three months late. So we built engines that do that work, and we put all of " +
  "them on one spine, because no firm should have to buy six new silos to stop " +
  "running six old ones.";

export default function FounderStatement() {
  return (
    <section className="co-founder band band--paper">
      <Reveal as="div" className="container container--narrow">
        <blockquote className="co-founder__quote">
          <p>{STATEMENT}</p>
        </blockquote>

        <p className="co-founder__byline">
          <a
            className="co-founder__name"
            href={OSCAR_LINKEDIN}
            target="_blank"
            rel="noopener"
          >
            Oscar Chan
          </a>
          <span className="co-founder__role"> · Co-Founder & CEO, Mercury Wealth</span>
        </p>
      </Reveal>
    </section>
  );
}
