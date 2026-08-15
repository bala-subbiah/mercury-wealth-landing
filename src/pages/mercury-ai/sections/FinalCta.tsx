import Reveal from "../../../chrome/Reveal.tsx";
import { CONVERSATION_MAILTO } from "../../../links.ts";
import "../../home/sections/home-cta.css";
import "./FinalCta.css";

/* Final CTA — contact-led close (R3, owner-directed: one button sitewide, and
   it is the conversation). Title verbatim from the audited contact block (fact
   source §5, "Talk to us."); sub is a tighten of the audited trust line
   "Security questionnaires go to a person, not a portal." (fact source §4). */

export default function FinalCta() {
  return (
    <section className="mai-cta band band--navy">
      <div className="container mai-cta__inner">
        <Reveal as="h2" className="mai-cta__title">
          Talk to us.
        </Reveal>
        <Reveal as="p" delay={80} className="mai-cta__sub">
          Questions go to a person, not a portal.
        </Reveal>

        <Reveal as="div" delay={160} className="mai-cta__actions">
          <a className="home-cta" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
