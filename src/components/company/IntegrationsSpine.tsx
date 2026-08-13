import type { ReactNode } from "react";
import type { CSSProperties } from "react";

import { useReducedMotion } from "../product/useReducedMotion";
import "./IntegrationsSpine.css";

/* ---------------------------------------------------------------------------
   Sources — the eight systems that feed the spine. Icons are simple
   geometric monochrome glyphs (1.5px stroke, currentColor), never
   brand-colored third-party marks.
   --------------------------------------------------------------------------- */

interface SourceEntry {
  label: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function GlobeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.6 2.2 2.6 13.8 0 16" />
      <path d="M12 4c-2.6 2.2-2.6 13.8 0 16" />
    </svg>
  );
}

function MonogramIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9.5 16V8h5" />
      <path d="M9.5 12h3.2" />
    </svg>
  );
}

function ColumnsIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 9.5 12 4l8 5.5" />
      <path d="M5 9.5h14" />
      <path d="M6.5 9.5V18" />
      <path d="M10.5 9.5V18" />
      <path d="M13.5 9.5V18" />
      <path d="M17.5 9.5V18" />
      <path d="M4 18.5h16" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M7 18a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.95A4 4 0 0 1 17 18H7Z" />
    </svg>
  );
}

function ExchangeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 8.5h12" />
      <path d="M15 5.5l3 3-3 3" />
      <path d="M18 15.5H6" />
      <path d="M9 12.5l-3 3 3 3" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg {...ICON_PROPS}>
      <ellipse cx="12" cy="6.5" rx="7" ry="2.8" />
      <path d="M5 6.5v11c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-11" />
      <path d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 9.8h16" />
      <path d="M4 15.6h16" />
      <path d="M9.8 4v16" />
      <path d="M15.6 4v16" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M7 3h6.5L18 7.5V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M13.5 3v4.5H18" />
      <path d="M9 13h6" />
      <path d="M9 16.5h6" />
      <path d="M9 9.5h2" />
    </svg>
  );
}

const SOURCES: SourceEntry[] = [
  { label: "Global News", icon: <GlobeIcon /> },
  { label: "FactSet", icon: <MonogramIcon /> },
  { label: "HKEX", icon: <ColumnsIcon /> },
  { label: "Google Cloud", icon: <CloudIcon /> },
  { label: "Exchange Data", icon: <ExchangeIcon /> },
  { label: "Oracle", icon: <DatabaseIcon /> },
  { label: "Excel", icon: <GridIcon /> },
  { label: "Word", icon: <DocumentIcon /> },
];

const OUTPUTS = ["BOOK", "PROPOSALS", "AUDIT"];

/* Full cycle length for the sequential connector pulse: one source's
   connector brightens roughly every 2.5s, so cycle = 2.5s * source count. */
const STEP_SECONDS = 2.5;
const CYCLE_SECONDS = STEP_SECONDS * SOURCES.length;

export interface IntegrationsSpineProps {
  /** Set false to render the fully static state with no motion at all. */
  animate?: boolean;
  /** Mono caption below the diagram. */
  caption?: string;
  className?: string;
}

/**
 * "Sources flow into one data spine" — the home page's architecture visual.
 *
 * A product-adjacent surface: panel chrome, hairlines and mono labels follow
 * the same language as src/components/product/*, with restrained luminous
 * accents permitted (design.md — luminous color allowed inside product
 * surfaces). Eight source chips converge into a single spine bar, which fans
 * out to a handful of outputs. A calm, sequential pulse — one connector at a
 * time — suggests data flowing in; fully static under prefers-reduced-motion.
 */
export default function IntegrationsSpine({
  animate = true,
  caption = "AND MANY MORE · SOURCES CONNECT ONCE, EVERY ENGINE BENEFITS",
  className,
}: IntegrationsSpineProps) {
  const reducedMotion = useReducedMotion();
  const isAnimated = animate && !reducedMotion;

  return (
    <section className={className ? `isp ${className}` : "isp"}>
      <div
        className="isp-sources"
        style={isAnimated ? ({ "--isp-cycle": `${CYCLE_SECONDS}s` } as CSSProperties) : undefined}
      >
        {SOURCES.map((source, index) => {
          const delayStyle: CSSProperties | undefined = isAnimated
            ? ({ "--isp-delay": `${index * STEP_SECONDS}s` } as CSSProperties)
            : undefined;
          return (
            <div className="isp-source" key={source.label} style={delayStyle}>
              <div className="isp-chip">
                <span className="isp-chip-icon">{source.icon}</span>
                <span className="isp-chip-label">{source.label}</span>
              </div>
              <span className={isAnimated ? "isp-stub isp-stub--pulse" : "isp-stub"}>
                {isAnimated && <span className="isp-dot" />}
              </span>
            </div>
          );
        })}
      </div>

      <div className="isp-converge" aria-hidden="true">
        <span className="isp-collector" />
        <span className="isp-trunk" />
      </div>

      <div className="isp-bar">
        <span className="isp-bar-dot" aria-hidden="true" />
        <span className="isp-bar-label">DATA SPINE</span>
        <span className="isp-bar-sep" aria-hidden="true">
          ·
        </span>
        <span className="isp-bar-sub">ONE AUDIT LOG</span>
      </div>

      <div className="isp-fanout" aria-hidden="true">
        <span className="isp-fanout-trunk" />
        <span className="isp-fanout-collector" />
      </div>

      <div className="isp-outputs">
        {OUTPUTS.map((output) => (
          <span className="isp-output" key={output}>
            {output}
          </span>
        ))}
      </div>

      {caption && <p className="isp-caption">{caption}</p>}
    </section>
  );
}
