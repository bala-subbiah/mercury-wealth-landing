import { CONVERSATION_MAILTO } from "../../../links.ts";
import Reveal from "../../../chrome/Reveal.tsx";
import "../../home/sections/home-cta.css";
import "./FinalCta.css";

/* Final CTA — contact-led close (R3, owner-directed: one button sitewide, and
   it is the conversation). Title verbatim from the audited contact block (fact
   source §5, "Talk to us."); sub is a tighten of the audited trust line
   "Security questionnaires go to a person, not a portal." (fact source §4). */

export default function FinalCta() {
  return (
    <section className="cockpit-cta band band--navy">
      <div className="container cockpit-cta__inner">
        <Reveal as="h2" className="cockpit-cta__title">
          Talk to us.
        </Reveal>
        <Reveal as="p" delay={60} className="cockpit-cta__sub">
          Questions go to a person, not a portal.
        </Reveal>

        <Reveal as="div" delay={120} className="cockpit-cta__actions">
          <a className="home-cta" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
