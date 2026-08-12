import type { ReactNode } from "react";

import {
  AuditTimeline,
  CockpitDashboard,
  DriftChat,
  MorningBriefing,
  TermSheetDissolve,
} from "../components/product";
import "./RecreationsPreview.css";

/**
 * Dev-only validation page for the five product-UI recreations.
 *
 * Reachable at `?preview=recreations`. Deliberately outside the production
 * page flow — it exists so the panels can be checked in isolation, at real
 * widths, on the navy the site actually uses.
 */
export default function RecreationsPreview() {
  return (
    <main className="rp-page">
      <header className="rp-head">
        <span className="rp-eyebrow">DEV PREVIEW · PRODUCT-UI RECREATIONS</span>
        <h1 className="rp-title">Five panels, on navy, at width.</h1>
        <p className="rp-note">
          Not part of the page flow. Toggle the OS reduced-motion setting to check every static
          fallback.
        </p>
      </header>

      <Block index="01" name="MorningBriefing" note="Hero — self-composing briefing, loops.">
        <MorningBriefing />
      </Block>

      <Block index="02" name="CockpitDashboard" note="Book of business — static, hover the rows.">
        <CockpitDashboard />
      </Block>

      <Block index="03" name="AuditTimeline" note="Governance act — reveals on scroll.">
        <AuditTimeline />
      </Block>

      <Block index="04" name="TermSheetDissolve" note="Document intelligence — loops in view.">
        <TermSheetDissolve />
      </Block>

      <Block index="05" name="DriftChat" note="AI mechanism — conversation replay, loops.">
        <DriftChat />
      </Block>

      <Block index="06" name="MorningBriefing · animate={false}" note="Static path, motion disabled.">
        <MorningBriefing animate={false} />
      </Block>
    </main>
  );
}

function Block({
  index,
  name,
  note,
  children,
}: {
  index: string;
  name: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section className="rp-block">
      <div className="rp-block-head">
        <span className="rp-block-index">{index}</span>
        <span className="rp-block-name">{name}</span>
        <span className="rp-block-note">{note}</span>
      </div>
      {children}
    </section>
  );
}
