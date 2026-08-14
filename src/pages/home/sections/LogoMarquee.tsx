import "./LogoMarquee.css";

/* The logo strip at the hero's base (design DNA item 2).
   "WORKING WITH" is the sanctioned label and it stays the sanctioned label: it
   claims no revenue, no endorsement and no scale, and nothing on this band may
   upgrade it. Four real logos, monochromed, slow infinite marquee, edge-faded,
   paused on hover or focus, and a plain wrapped row under reduced motion. */

const LOGOS: ReadonlyArray<{ src: string; alt: string }> = [
  { src: "/logos/uob-kay-hian.svg", alt: "UOB Kay Hian" },
  { src: "/logos/lizen.svg", alt: "Lizen Asset Management" },
  { src: "/logos/cyberport.svg", alt: "Cyberport" },
  { src: "/logos/solomon.svg", alt: "Solomon" },
];

// Three copies fill the widest viewport; the track slides exactly one copy, so
// the loop has no seam. Only the first copy is read out.
const COPIES = [0, 1, 2];

export default function LogoMarquee() {
  return (
    <section className="band band--navy marquee" aria-label="Working with">
      <div className="container marquee__inner">
        <p className="marquee__label">WORKING WITH</p>

        <div className="marquee__viewport">
          <div className="marquee__track">
            {COPIES.map((copy) => (
              <ul
                className="marquee__set"
                key={copy}
                aria-hidden={copy !== 0 ? true : undefined}
              >
                {LOGOS.map((logo) => (
                  <li className="marquee__item" key={logo.src}>
                    <img
                      className="marquee__logo"
                      src={logo.src}
                      alt={copy === 0 ? logo.alt : ""}
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
