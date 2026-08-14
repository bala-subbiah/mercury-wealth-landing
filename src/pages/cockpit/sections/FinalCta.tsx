import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../../links.ts";
import Reveal from "../../../chrome/Reveal.tsx";
import "../../home/sections/home-cta.css";
import "./FinalCta.css";

/* Final CTA — fact source §2 FinalCta, title verbatim, subhead tightened to
   two lines. Demo CTA plus the quiet, never-required conversation path. */

export default function FinalCta() {
  return (
    <section className="cockpit-cta band band--navy">
      <div className="container cockpit-cta__inner">
        <Reveal as="h2" className="cockpit-cta__title">
          Open the cockpit on a full book.
        </Reveal>
        <Reveal as="p" delay={60} className="cockpit-cta__sub">
          No form, no sign-up. The cockpit opens on a real book, with the
          drift, the proposals and the approvals already in it.
        </Reveal>

        <Reveal as="div" delay={120} className="cockpit-cta__actions">
          <a className="home-cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="cockpit-cta__quiet" href={CONVERSATION_MAILTO}>
            or request a conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
