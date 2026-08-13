import { CONTACT_EMAIL, CONTACT_MAILTO, CONVERSATION_MAILTO, LINKEDIN_URL } from "../links";
import Reveal from "../components/Reveal";

/* Contact: the one mailbox and the one company page (docs/v2-plan.md §6 #2).
   The register is the P0 rewording: the demo stays no-form, and a conversation
   is available but never a condition of seeing the product. */

const TITLE = "Talk to us.";
const BODY =
  "The demo asks nothing of you. If you would rather talk first, that is " +
  "available, and it is never a condition of seeing the product.";

const CONVERSATION_CTA = "Request a conversation";
const LINKEDIN_LABEL = "Mercury Wealth on LinkedIn";

export default function ContactBlock() {
  return (
    <section
      className="section on-paper co-band co-contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal className="container container--narrow">
        <h2 className="section-title co-heading" id="contact-title">
          {TITLE}
        </h2>

        <p className="body-copy co-contact-body">{BODY}</p>

        <div className="cta-row co-contact-row">
          <a className="cta-primary" href={CONVERSATION_MAILTO}>
            {CONVERSATION_CTA}
          </a>

          <a className="text-link" href={CONTACT_MAILTO}>
            {CONTACT_EMAIL}
          </a>

          <a className="text-link" href={LINKEDIN_URL} target="_blank" rel="noopener">
            {LINKEDIN_LABEL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
