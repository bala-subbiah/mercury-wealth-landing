import Reveal from "../../../chrome/Reveal.tsx";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../../links.ts";
import "./home-cta.css";
import "./FinalCta.css";

/* Final CTA — dark close, three short serif lines graduating into the ground,
   one demo CTA, and the offered second path that is never a condition of
   seeing the product. Copy tightened from the audited close (fact source §2,
   FinalCta) and the standing presence micro-line. */

export default function FinalCta() {
  return (
    <section className="band band--navy close">
      <div className="container close__inner">
        <Reveal as="h2" className="close__title">
          <span className="close__line">Open the cockpit on a full book.</span>
          <span className="close__line close__line--2">The drift is already in it.</span>
          <span className="close__line close__line--3">No form, no sign-up.</span>
        </Reveal>

        <Reveal className="close__actions" delay={100}>
          <a className="home-cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="home-quiet" href={CONVERSATION_MAILTO}>
            request a conversation
          </a>
        </Reveal>

        <Reveal as="p" className="close__where" delay={160}>
          HONG KONG · SINGAPORE
        </Reveal>
      </div>
    </section>
  );
}
