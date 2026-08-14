import Reveal from "../../../chrome/Reveal.tsx";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONVERSATION_MAILTO,
  DEMO_LINK_PROPS,
  LINKEDIN_URL,
} from "../../../links.ts";
import "../../home/sections/home-cta.css";
import "./TalkToUs.css";

/* Talk to us — the page's final band, navy (Amendment 1/2: navy carries the
   bookends). Body verbatim from fact source §5; the one relentless CTA
   (hard rule 10) closes the page alongside the offered, never required,
   conversation path. */

export default function TalkToUs() {
  return (
    <section className="co-talk band band--navy">
      <Reveal as="div" className="container container--narrow">
        <h2 className="co-talk__title">Talk to us.</h2>
        <p className="co-talk__body">
          The demo asks nothing of you. If you would rather talk first, that is available, and
          it is never a condition of seeing the product.
        </p>

        <div className="co-talk__actions">
          <a className="home-cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="co-talk__secondary" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </div>

        <div className="co-talk__links">
          <a className="co-talk__link" href={CONTACT_MAILTO}>
            {CONTACT_EMAIL}
          </a>
          <a className="co-talk__link" href={LINKEDIN_URL} target="_blank" rel="noopener">
            Mercury Wealth on LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
