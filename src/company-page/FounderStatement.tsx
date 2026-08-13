import Reveal from "../components/Reveal";

/* The founder statement. This is the SINGLE sitewide version (docs/v2-plan.md
   §4 P0 item 4 and §6 #5): the two divergent copies that used to live on
   /cockpit and home were retired, and every other surface references this one
   rather than repeating it. The text below is sanctioned and verbatim. Do not
   re-word it, do not trim it, and add no biographical fact about Oscar beyond
   the byline and the LinkedIn link the owner supplied. The second co-founder
   stays unnamed. */

/** Owner-supplied (docs/v2-plan.md §6 #5). The only personal link on the site. */
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

const NAME = "Oscar Chan";
const ROLE = "Co-Founder & CEO, Mercury Wealth";

export default function FounderStatement() {
  return (
    <section
      className="section on-paper co-band co-founder"
      id="why"
      aria-labelledby="company-title"
    >
      <Reveal className="container container--narrow">
        <blockquote className="co-statement">
          <p>{STATEMENT}</p>
        </blockquote>

        <div className="co-byline">
          <a
            className="text-link co-byline-name"
            href={OSCAR_LINKEDIN}
            target="_blank"
            rel="noopener"
          >
            {NAME}
          </a>
          <span className="mono mono-muted co-byline-role">{ROLE}</span>
        </div>
      </Reveal>
    </section>
  );
}
