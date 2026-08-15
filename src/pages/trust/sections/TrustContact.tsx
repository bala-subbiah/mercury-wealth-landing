import { CONTACT_EMAIL, CONTACT_MAILTO, DEMO_BOOKING_MAILTO } from "../../../links.ts";
import Reveal from "../../../chrome/Reveal.tsx";
import "../../home/sections/home-cta.css";
import "./TrustContact.css";

/* Final band — navy, the page's one relentless CTA (hard rule 10). Body
   verbatim with CONTACT_EMAIL rendered as the actual mailto link the
   sentence refers to, trimmed to keep the visible block to 3 lines. */

export default function TrustContact() {
  return (
    <section className="band band--navy trust-contact">
      <div className="container container--narrow trust-contact__inner">
        <Reveal as="h2" className="trust-contact__title">
          Security questionnaires go to a person, not a portal.
        </Reveal>

        <Reveal as="p" className="trust-contact__body" delay={80}>
          DDQ sections, security questionnaires and IT review questions go to{" "}
          <a className="trust-contact__mail" href={CONTACT_MAILTO}>
            {CONTACT_EMAIL}
          </a>
          . Deployment specifics are answered for the deployment your firm
          would run on, rather than in the abstract.
        </Reveal>

        <Reveal as="p" className="trust-contact__note" delay={120}>
          The product itself is open to read first. No form, no sales call
          before it.
        </Reveal>

        <Reveal delay={160}>
          <a className="home-cta" href={DEMO_BOOKING_MAILTO}>
            Book a demo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
