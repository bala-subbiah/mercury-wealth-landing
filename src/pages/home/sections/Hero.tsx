import { useState } from "react";
import { DEMO_BOOKING_MAILTO } from "../../../links.ts";
import HeroLogos from "./HeroLogos.tsx";
import "./home-cta.css";
import "./Hero.css";

/* Home hero — full-bleed Hong Kong night footage at full strength on a midnight
   ground (R3, owner-directed), white display type over a midnight scrim, one
   primary CTA. The band is dark: it publishes the .band--navy colourway, so the
   button, the focus ring and ::selection all follow without further work.

   The video is decoration: it carries no information the copy does not, so it
   is aria-hidden and simply not rendered when the reader asks for reduced
   motion. The midnight ground beneath it is the static fallback, which is also
   what shows while the file is still loading — text contrast therefore never
   depends on the video having arrived.

   The band fills the viewport (owner-directed): copy centred in the space the
   nav leaves, the partner strip riding the bottom edge, so the fold lands
   exactly where this section ends. */

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
    <section className="hero band band--navy">
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
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <h1 className="hero__title">
          Built for Wealth firms <br className="hero__break" />
          bold enough to evolve.
        </h1>

        <p className="hero__sub">Mercury: The AI operations team for modern wealth.</p>

        <div className="hero__actions">
          <a className="home-cta" href={DEMO_BOOKING_MAILTO}>
            Book a demo
          </a>
        </div>
      </div>

      <HeroLogos />
    </section>
  );
}
