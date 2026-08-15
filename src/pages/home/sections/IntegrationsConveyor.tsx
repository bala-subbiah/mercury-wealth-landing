import { useState } from "react";
import Reveal from "../../../chrome/Reveal.tsx";
import "./IntegrationsConveyor.css";

/* Integrations — a midnight band where the sources a firm already works in
   travel past the Mercury tile on two conveyors running in opposite
   directions.

   Text marks only: no vendor logo is drawn and no brand colour is reproduced,
   so the section names its integrations plainly (design DNA, "what v3 must not
   carry" #2) and claims no partnership by borrowing a mark. The vendor list is
   the owner-sanctioned one; the rest are the document and feed categories the
   audited copy already names (fact source §2 ingest, §6 "what goes in").

   The loop has no visible join because each column renders its chips twice
   and each track travels exactly its own length. Hover pauses it; reduced motion
   drops the conveyor entirely for a static grid of every chip. */

const COLUMN_A: ReadonlyArray<string> = [
  "Microsoft Excel",
  "Custodian feeds",
  "FactSet",
  "Term sheets",
  "Microsoft Outlook",
  "Morningstar",
  "Client documents",
  "Google Drive",
  "PDF",
];

const COLUMN_B: ReadonlyArray<string> = [
  "SharePoint",
  "Custodian statements",
  "Refinitiv",
  "Email",
  "Microsoft Word",
  "HKEX",
  "Market data",
  "Gmail",
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Chip({ label }: { label: string }) {
  return <li className="iconv__chip">{label}</li>;
}

function Column({
  items,
  direction,
}: {
  items: ReadonlyArray<string>;
  direction: "up" | "down";
}) {
  return (
    <div className={`iconv__col iconv__col--${direction}`}>
      <ul className="iconv__track">
        {items.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </ul>
      {/* The second pass is the loop's other half, and says nothing new. */}
      <ul className="iconv__track" aria-hidden="true">
        {items.map((item) => (
          <Chip key={`${item}-loop`} label={item} />
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
              <Chip key={item} label={item} />
            ))}
          </ul>
        ) : (
          <Reveal className="iconv__stage" delay={120}>
            <Column items={COLUMN_A} direction="up" />

            <div className="iconv__tile">
              <p className="iconv__mark">Mercury</p>
            </div>

            <Column items={COLUMN_B} direction="down" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
