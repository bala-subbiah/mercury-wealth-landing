import type { ReactNode } from "react";
import { useState } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./IntegrationsConveyor.css";

/* Integrations — a midnight band where the sources a firm already works in
   travel past the Mercury tile on two conveyors running in opposite
   directions.

   Vendor chips carry the vendor's own mark, rendered white-monochrome on the
   chip ground: no brand colour is reproduced anywhere in the band, so the
   section names its integrations without borrowing a palette or implying a
   partnership. Marks come from simple-icons and Wikimedia Commons and are
   never hand-drawn; a vendor with no clean SVG (SharePoint) keeps the plain
   text chip it always had. The document and feed categories are not brands, so
   they stay text and take a line glyph drawn in the site's own icon style. The
   vendor list is the owner-sanctioned one; the categories are the ones the
   audited copy already names (fact source §2 ingest, §6 "what goes in").

   The loop has no visible join because each column renders its chips twice
   and each track travels exactly its own length. Hover pauses it; reduced motion
   drops the conveyor entirely for a static grid of every chip. */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/* A vendor mark is either a glyph (needs the name beside it) or a wordmark
   (already says the name — setting the name beside it twice reads as a stutter,
   so the wordmark stands alone and carries the name in its alt text). */
type Source =
  | { kind: "glyph"; name: string; slug: string }
  | { kind: "wordmark"; name: string; slug: string }
  | { kind: "text"; name: string; icon?: ReactNode };

const ICON_FEED: ReactNode = (
  <>
    <path d="M5 10.6A8.4 8.4 0 0 1 13.4 19" {...STROKE} />
    <path d="M5 5.4A13.6 13.6 0 0 1 18.6 19" {...STROKE} />
    <circle cx="5.6" cy="18.4" r="1.3" fill="currentColor" />
  </>
);

const ICON_DOC: ReactNode = (
  <>
    <path d="M6.5 3h7l4.5 4.5V21h-11.5z" {...STROKE} />
    <path d="M13.5 3v4.5H18" {...STROKE} />
    <path d="M9.2 12.5h5.6M9.2 16h5.6" {...STROKE} />
  </>
);

const ICON_FILE: ReactNode = (
  <>
    <path d="M6.5 3h7l4.5 4.5V21h-11.5z" {...STROKE} />
    <path d="M13.5 3v4.5H18" {...STROKE} />
  </>
);

const ICON_DOCS: ReactNode = (
  <>
    <path d="M8.5 2.6h6l4 4V17h-10z" {...STROKE} />
    <path d="M5.5 6.4V21.4h10" {...STROKE} />
  </>
);

const ICON_STATEMENT: ReactNode = (
  <>
    <path d="M5.5 3h13v18l-2.2-1.4-2.2 1.4-2.1-1.4-2.2 1.4-2.2-1.4-2.1 1.4z" {...STROKE} />
    <path d="M9 8h6M9 12h6" {...STROKE} />
  </>
);

const ICON_MAIL: ReactNode = (
  <>
    <rect x="3" y="5.5" width="18" height="13" {...STROKE} />
    <path d="m3.6 6.4 8.4 5.9 8.4-5.9" {...STROKE} />
  </>
);

const ICON_CHART: ReactNode = (
  <>
    <path d="M4 3.5v17h16.5" {...STROKE} />
    <path d="m7.5 15.5 3.8-4.6 3 2.6 4.4-6" {...STROKE} />
  </>
);

const COLUMN_A: ReadonlyArray<Source> = [
  { kind: "glyph", name: "Microsoft Excel", slug: "excel" },
  { kind: "text", name: "Custodian feeds", icon: ICON_FEED },
  { kind: "wordmark", name: "FactSet", slug: "factset" },
  { kind: "text", name: "Term sheets", icon: ICON_DOC },
  { kind: "glyph", name: "Microsoft Outlook", slug: "outlook" },
  { kind: "wordmark", name: "Morningstar", slug: "morningstar" },
  { kind: "text", name: "Client documents", icon: ICON_DOCS },
  { kind: "glyph", name: "Google Drive", slug: "google-drive" },
  { kind: "text", name: "PDF", icon: ICON_FILE },
];

const COLUMN_B: ReadonlyArray<Source> = [
  { kind: "text", name: "SharePoint" },
  { kind: "text", name: "Custodian statements", icon: ICON_STATEMENT },
  { kind: "wordmark", name: "Refinitiv", slug: "refinitiv" },
  { kind: "text", name: "Email", icon: ICON_MAIL },
  { kind: "glyph", name: "Microsoft Word", slug: "word" },
  { kind: "wordmark", name: "HKEX", slug: "hkex" },
  { kind: "text", name: "Market data", icon: ICON_CHART },
  { kind: "glyph", name: "Gmail", slug: "gmail" },
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Chip({ source }: { source: Source }) {
  if (source.kind === "wordmark") {
    return (
      <li className="iconv__chip">
        <img
          className="iconv__logo iconv__logo--word"
          src={`/logos/integrations/${source.slug}.svg`}
          alt={source.name}
          loading="lazy"
          decoding="async"
        />
      </li>
    );
  }

  if (source.kind === "glyph") {
    return (
      <li className="iconv__chip">
        <img
          className="iconv__logo"
          src={`/logos/integrations/${source.slug}.svg`}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="iconv__name">{source.name}</span>
      </li>
    );
  }

  return (
    <li className="iconv__chip">
      {source.icon ? (
        <svg className="iconv__glyph" viewBox="0 0 24 24" aria-hidden="true">
          {source.icon}
        </svg>
      ) : null}
      <span className="iconv__name">{source.name}</span>
    </li>
  );
}

function Column({
  items,
  direction,
}: {
  items: ReadonlyArray<Source>;
  direction: "up" | "down";
}) {
  return (
    <div className={`iconv__col iconv__col--${direction}`}>
      <ul className="iconv__track">
        {items.map((item) => (
          <Chip key={item.name} source={item} />
        ))}
      </ul>
      {/* The second pass is the loop's other half, and says nothing new. */}
      <ul className="iconv__track" aria-hidden="true">
        {items.map((item) => (
          <Chip key={`${item.name}-loop`} source={item} />
        ))}
      </ul>
    </div>
  );
}

export default function IntegrationsConveyor() {
  const [reduced] = useState(prefersReducedMotion);

  return (
    <section className="band band--navy iconv">
      <div className="container">
        <div className="iconv__head">
          <Reveal as="h2" className="iconv__title">
            Every source your firm relies on, one spine.
          </Reveal>
          <Reveal as="p" className="iconv__sub" delay={80}>
            Connects to the systems and documents your firm already uses.
          </Reveal>
        </div>

        {reduced ? (
          <ul className="iconv__static" aria-label="Sources Mercury reads">
            {[...COLUMN_A, ...COLUMN_B].map((item) => (
              <Chip key={item.name} source={item} />
            ))}
          </ul>
        ) : (
          <Reveal className="iconv__stage" delay={120}>
            <Column items={COLUMN_A} direction="up" />

            {/* The spine everything travels past: the site's own mark, at the
                size of one more tile rather than a billboard. */}
            <div className="iconv__tile">
              <svg className="iconv__tile-glyph" viewBox="0 0 32 32" aria-hidden="true">
                <path
                  d="M9 22V10l7 8 7-8v12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="iconv__mark">Mercury</p>
            </div>

            <Column items={COLUMN_B} direction="down" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
