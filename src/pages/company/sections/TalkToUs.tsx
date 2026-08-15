import Reveal from "../../../chrome/Reveal.tsx";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONVERSATION_MAILTO,
  LINKEDIN_URL,
} from "../../../links.ts";
import "../../home/sections/home-cta.css";
import "./TalkToUs.css";

/* Talk to us — the page's final band, navy (Amendment 1/2: navy carries the
   bookends). Title and body from fact source §5, the body trimmed to its
   second clause now that the conversation is the site's only button (R3,
   owner-directed); the address and the company LinkedIn stay as plain links
   under it. */

export default function TalkToUs() {
  return (
    <section className="co-talk band band--navy">
      <Reveal as="div" className="container container--narrow">
        <h2 className="co-talk__title">Talk to us.</h2>
        <p className="co-talk__body">
          Questions go to a person, not a portal. Talking it through is never a condition of
          seeing the product.
        </p>

        <div className="co-talk__actions">
          <a className="home-cta" href={CONVERSATION_MAILTO}>
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
