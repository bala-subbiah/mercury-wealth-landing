import Reveal from "../../../chrome/Reveal.tsx";
import "./WorkingWith.css";

/* Working with — four real logos (fact source §5), static monochrome row,
   quiet label. No marquee here (the home page owns the marquee treatment);
   the label claims no revenue, no endorsement and no scale. */

type Logo = { src: string; alt: string; className: string };

const LOGOS: Logo[] = [
  { src: "/logos/uob-kay-hian.svg", alt: "UOB Kay Hian", className: "co-logo--uob" },
  { src: "/logos/lizen.svg", alt: "Lizen Asset Management", className: "co-logo--lizen" },
  { src: "/logos/cyberport.svg", alt: "Cyberport", className: "co-logo--cyberport" },
  { src: "/logos/solomon.svg", alt: "Solomon", className: "co-logo--solomon" },
];

export default function WorkingWith() {
  return (
    <section className="co-working band band--paper">
      <Reveal as="div" className="container container--narrow co-working__inner">
        <span className="co-working__label">WORKING WITH</span>
        <div className="co-working__row">
          {LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className={`co-working__logo ${logo.className}`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
