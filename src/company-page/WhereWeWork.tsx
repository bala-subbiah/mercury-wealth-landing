import { LogoStrip } from "../components/company";
import Reveal from "../components/Reveal";

/* Where we work: the presence line from the footer (docs/v2-plan.md §6 #2:
   no street address, no entity detail) and the same four relationships the
   home page's proof strip carries, under the same "WORKING WITH" label. The
   owner confirmed all four are real (§6 #4); the label claims no revenue, no
   endorsement and no scale, and nothing below it upgrades that. */

const TITLE = "Where we work.";
const PRESENCE = "HONG KONG · SINGAPORE";
const BODY =
  "Two markets with one operating reality: several custodians per firm, more " +
  "than one booking centre, and a book reported in HKD, SGD or USD while the " +
  "positions sit in something else. Built against that, not localised into it " +
  "afterwards.";

const LOGO_LABEL = "WORKING WITH";

export default function WhereWeWork() {
  return (
    <section
      className="section on-paper co-band co-where"
      id="where"
      aria-labelledby="where-title"
    >
      <Reveal className="container container--narrow">
        <h2 className="section-title co-heading" id="where-title">
          {TITLE}
        </h2>

        <p className="mono co-presence">{PRESENCE}</p>
        <p className="body-copy co-where-body">{BODY}</p>

        <LogoStrip label={LOGO_LABEL} className="co-logos" />
      </Reveal>
    </section>
  );
}
