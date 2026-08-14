import Reveal from "../../../chrome/Reveal.tsx";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../../links.ts";
import "./FinalCta.css";

/* Final CTA — dark bookend, tightened from the DiFinalCta copy (fact source
   §6), the closest audited "open it and look" close for a Mercury AI
   capability. Verbatim title; sub is the exact tightened line supplied by
   the brief. */

export default function FinalCta() {
  return (
    <section className="mai-cta band band--navy">
      <div className="container mai-cta__inner">
        <Reveal as="h2" className="mai-cta__title">
          Open it and look.
        </Reveal>
        <Reveal as="p" delay={80} className="mai-cta__sub">
          No form and no sign-up. The demo is the product itself, running on a full book.
        </Reveal>

        <Reveal as="div" delay={160} className="mai-cta__actions">
          <a className="mai-cta__cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="mai-cta__quiet" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
