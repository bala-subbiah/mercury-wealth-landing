import Reveal from "../../../chrome/Reveal.tsx";
import { CONVERSATION_MAILTO } from "../../../links.ts";
import "./home-cta.css";
import "./FinalCta.css";

/* Final CTA — midnight close, three short display lines graduating into the
   ground, and the site's one button (R3, owner-directed: a conversation is the
   only ask). The staccato is the audited sitewide tagline ("See the whole book.
   Act with governance." — fact source §1, carried by the footer) split into its
   two beats, closed by the audited contact title ("Talk to us." — fact source
   §5), over the standing presence micro-line. */

export default function FinalCta() {
  return (
    <section className="band band--navy close">
      <div className="container close__inner">
        <Reveal as="h2" className="close__title">
          <span className="close__line">See the whole book.</span>
          <span className="close__line close__line--2">Act with governance.</span>
          <span className="close__line close__line--3">Talk to us.</span>
        </Reveal>

        <Reveal className="close__actions" delay={100}>
          <a className="home-cta" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </Reveal>

        <Reveal as="p" className="close__where" delay={160}>
          HONG KONG · SINGAPORE
        </Reveal>
      </div>
    </section>
  );
}
