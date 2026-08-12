import "./LogoStrip.css";

/* ---------------------------------------------------------------------------
   Partner logos — served from public/logos/. SVGs copied verbatim from the
   owner's mockup (docs/gemini-build-mockup, read-only); monochromed here via
   CSS filter rather than re-exporting flattened assets.
   --------------------------------------------------------------------------- */

interface LogoEntry {
  src: string;
  alt: string;
  sizeClass: string;
}

const LOGOS: LogoEntry[] = [
  { src: "/logos/uob-kay-hian.svg", alt: "UOB Kay Hian", sizeClass: "ls-logo--uob" },
  { src: "/logos/lizen.svg", alt: "Lizen Asset Management", sizeClass: "ls-logo--lizen" },
  { src: "/logos/cyberport.svg", alt: "Cyberport", sizeClass: "ls-logo--cyberport" },
  { src: "/logos/solomon.svg", alt: "Solomon", sizeClass: "ls-logo--solomon" },
];

export interface LogoStripProps {
  /** Mono uppercase eyebrow rendered above the row. Pass "" to omit it. */
  label?: string;
  className?: string;
}

/**
 * A quiet, static row of partner/collaborator logos.
 *
 * Monochromed to sit on the dark surface (brightness(0) invert(1) at reduced
 * opacity, full opacity on hover) — no marquee, no motion. Wraps on narrow
 * viewports rather than scrolling or clipping.
 */
export default function LogoStrip({ label = "WORKING WITH", className }: LogoStripProps) {
  return (
    <div className={className ? `ls-strip ${className}` : "ls-strip"}>
      {label && <span className="ls-label">{label}</span>}
      <div className="ls-row">
        {LOGOS.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className={`ls-logo ${logo.sizeClass}`}
          />
        ))}
      </div>
    </div>
  );
}
