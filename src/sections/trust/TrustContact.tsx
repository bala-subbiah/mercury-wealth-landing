import Reveal from "../../components/Reveal";
import { CONTACT_EMAIL, CONTACT_MAILTO, DEMO_LINK_PROPS } from "../../links";
import "./TrustContact.css";

/* The close: one mailbox for the questionnaire, one link to the product. The
   demo remains no-form; a conversation is available and never a condition. */

const EYEBROW = "SEND IT OVER";
const TITLE = "Security questionnaires go to a person, not a portal.";
const BODY_TAIL =
  ". Deployment specifics are answered for the deployment your firm would run on, rather than in the abstract, so send the sections that matter and we will answer those.";
const DEMO_NOTE = "The product itself is open to read first. No form, no sales call before it.";
const CTA = "Open the live demo";

export default function TrustContact() {
  return (
    <section className="section on-paper tct" id="contact" aria-labelledby="tct-title">
      <div className="container container--narrow tct-inner">
        <Reveal className="tct-copy">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title tct-title" id="tct-title">
            {TITLE}
          </h2>
          <p className="tct-body">
            DDQ sections, security questionnaires and IT review questions go to{" "}
            <a className="text-link" href={CONTACT_MAILTO}>
              {CONTACT_EMAIL}
            </a>
            {BODY_TAIL}
          </p>
          <p className="tct-note">{DEMO_NOTE}</p>
        </Reveal>

        <Reveal className="cta-row tct-cta" delay={60}>
          <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
            {CTA}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
