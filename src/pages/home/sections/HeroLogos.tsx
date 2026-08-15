import "./HeroLogos.css";

/* The partner strip that rides the hero's bottom edge.

   No label: the owner asked "Working with" removed entirely (2026-08-15) —
   the marks now speak for themselves. FactSet joined the set 2026-08-15 as
   a fifth mark, same white-monochrome treatment as the rest.

   Default presentation is a continuous marquee: the five marks repeat enough
   times to overfill even an ultrawide viewport, and the track — rendered as
   one half of the set followed by an exact duplicate of that half — slides
   -50%, precisely one half's width, so the loop has no visible seam (the same
   duplicate-and-translate technique as the integrations conveyor). Only the
   first copy of each mark carries real alt text; every further repeat exists
   purely to fill the track and is hidden from assistive tech. Hover or focus
   pauses it.

   Reduced motion drops the marquee entirely for the original static row: five
   marks, no animation, folding to a 2x2 grid (FactSet spanning alone on the
   last row) below 640px — see the `prefers-reduced-motion` block in
   HeroLogos.css. */

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
  {
    src: "/logos/integrations/factset.svg",
    alt: "FactSet",
    className: "hero-logos__mark--factset",
  },
];

// One half of the track: four copies of the five-mark set reliably overfills
// even a very wide viewport. The track renders this half twice, back to back,
// and the keyframe slides exactly -50% — one half's width — so the join is
// invisible.
const HALF: ReadonlyArray<Partner> = Array.from({ length: 4 }, () => PARTNERS).flat();
const TRACK: ReadonlyArray<Partner> = [...HALF, ...HALF];

export default function HeroLogos() {
  return (
    <div className="container hero-logos">
      <div className="hero-logos__viewport">
        <ul className="hero-logos__track">
          {TRACK.map((partner, i) => {
            const live = i < PARTNERS.length;
            return (
              <li
                className="hero-logos__item"
                key={`${i}-${partner.src}`}
                aria-hidden={live ? undefined : true}
              >
                <img
                  className={`hero-logos__mark ${partner.className}`}
                  src={partner.src}
                  alt={live ? partner.alt : ""}
                  decoding="async"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Reduced-motion fallback — the original static row. Hidden by default,
          shown only under prefers-reduced-motion (see HeroLogos.css). */}
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
