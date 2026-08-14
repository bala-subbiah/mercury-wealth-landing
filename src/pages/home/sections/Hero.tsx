import { useState } from "react";
import { CONVERSATION_MAILTO, DEMO_LINK_PROPS } from "../../../links.ts";
import "./home-cta.css";
import "./Hero.css";

/* Home hero — full-bleed Hong Kong footage desaturated and laid INTO the paper
   ground at low opacity, blended top and bottom by gradient (amendment 3),
   left-aligned grotesque display in two short lines, one grey line naming who
   it is for, one primary CTA and one hairline secondary.

   The video is decoration: it carries no information the copy does not, so it
   is aria-hidden and simply not rendered when the reader asks for reduced
   motion. The plain paper ground beneath it is the static fallback, which is
   also what shows while the file is still loading. */

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Hero() {
  // Read once, synchronously, so the very first render is already correct and
  // `autoplay` is never attached and then withdrawn.
  const [reduced] = useState(prefersReducedMotion);

  return (
    <section className="hero band band--paper">
      <div className="hero__media" aria-hidden="true">
        {!reduced && (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            disablePictureInPicture
          >
            <source src="/videos/hk-skyline-lo.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero__grade" />
      </div>

      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="hero__line">Start the day</span>
          <span className="hero__line">already briefed.</span>
        </h1>

        <p className="hero__sub">
          Front-office software for external asset managers, private banks and brokerages in
          Hong Kong and Singapore.
        </p>

        <div className="hero__actions">
          <a className="home-cta" {...DEMO_LINK_PROPS}>
            Open the live demo
          </a>
          <a className="home-quiet" href={CONVERSATION_MAILTO}>
            request a conversation
          </a>
        </div>

        <p className="hero__caption">NO FORM · NO SIGN-UP</p>
      </div>
    </section>
  );
}
