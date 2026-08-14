import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../../links.ts";
import "../../home/sections/home-cta.css";
import "./Hero.css";

/* Mercury AI hero — dark, full-bleed, no video on this page (same treatment
   as the Cockpit hero: simple gradient ground, Nav floats over it). Headline
   names "Mercury AI" and is tightened from the audited home hero lede ("Six
   licensable engines... Each valuable alone, one spine underneath.") plus
   the AiMechanism subhead's closing line, which becomes the sub verbatim. */

export default function Hero() {
  return (
    <section className="mai-hero band band--navy">
      <div className="container mai-hero__inner">
        <h1 className="mai-hero__title">Mercury AI: six capabilities, one spine.</h1>
        <p className="mai-hero__sub">It prepares. You decide.</p>

        <div className="mai-hero__actions">
          <a className="home-cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="mai-hero__quiet" href={CONVERSATION_MAILTO}>
            Request a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
