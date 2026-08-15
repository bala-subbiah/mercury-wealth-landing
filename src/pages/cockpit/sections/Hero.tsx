import { CONVERSATION_MAILTO } from "../../../links.ts";
import "../../home/sections/home-cta.css";
import "./Hero.css";

/* Cockpit hero — dark, full-bleed, no video on this page (design.md Amendment 2:
   "Optional simple background treatment... no video on this page"). Headline is
   the reserved line "Every custodian. One cockpit." (fact source §2, do not
   reuse elsewhere). No eyebrow, no tag strip — Amendment 2 rule 2. */

export default function Hero() {
  return (
    <section className="cockpit-hero band band--navy">
      <div className="container cockpit-hero__inner">
        <h1 className="cockpit-hero__title">Every custodian. One cockpit.</h1>
        <p className="cockpit-hero__sub">
          Monitor the book, advise the client, execute with governance. Every
          booking centre on one screen, in your base currency.
        </p>

        <div className="cockpit-hero__actions">
          <a className="home-cta" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
