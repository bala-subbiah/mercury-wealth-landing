import "./HeroLogos.css";

/* The partner strip that rides the hero's bottom edge.

   "WORKING WITH" is the sanctioned label and it stays the sanctioned label: it
   claims no revenue, no endorsement and no scale, and nothing here may upgrade
   it. Four real marks, monochromed to the band, quiet until the pointer asks.

   No marquee: at four logos a still row reads as a fact rather than a
   performance, and it costs the hero no motion at all. Desktop spreads the row
   across the strip; below 640px it folds into a 2x2 block that still clears the
   CTA above it. */

type Partner = {
  src: string;
  alt: string;
  /** Per-mark optical sizing — the source files differ in internal padding. */
  className: string;
};

const PARTNERS: ReadonlyArray<Partner> = [
  { src: "/logos/uob-kay-hian.svg", alt: "UOB Kay Hian", className: "hero-logos__mark--uob" },
  { src: "/logos/lizen.svg", alt: "Lizen Asset Management", className: "hero-logos__mark--lizen" },
  { src: "/logos/cyberport.svg", alt: "Cyberport", className: "hero-logos__mark--cyberport" },
  { src: "/logos/solomon.svg", alt: "Solomon", className: "hero-logos__mark--solomon" },
];

export default function HeroLogos() {
  return (
    <div className="container hero-logos">
      <p className="hero-logos__label">Working with</p>

      <ul className="hero-logos__row">
        {PARTNERS.map((partner) => (
          <li className="hero-logos__item" key={partner.src}>
            <img
              className={`hero-logos__mark ${partner.className}`}
              src={partner.src}
              alt={partner.alt}
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
