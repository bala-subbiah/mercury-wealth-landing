import Nav, { SITE_NAV_LINKS } from "./components/Nav";

import Hero from "./sections/Hero";
import DataStrip from "./sections/DataStrip";
import WorkflowCards from "./sections/WorkflowCards";
import GovernanceAct from "./sections/GovernanceAct";
import BuiltForAsia from "./sections/BuiltForAsia";
import AiMechanism from "./sections/AiMechanism";
import Personas from "./sections/Personas";
import TrustPillars from "./sections/TrustPillars";
import FactsBand from "./sections/FactsBand";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

import "./styles/sections.css";

// The flagship product page (docs/offerings-map.md v2, "Site map"), re-cut for
// v2 per docs/v2-plan.md §4.10: the Document Intelligence and Workflow
// Automation acts moved to their own surfaces, and the Credibility band's logo
// row is now the home page's (its domain-fluency line lives in FactsBand).
//
// Parked copy: "Nothing quietly fails to happen." was the Workflow Automation
// act's headline and is one of the strongest lines on the site. There is no
// honest slot for it on this page — automation is not one of the cockpit's six
// cards, and every card title here is deck copy of equal quality — so it stays
// reserved in docs/v2-plan.md §4.6 for the Workflow Automation surface.
export default function CockpitApp() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Sitewide nav (docs/v2-plan.md §2): the same four destinations here as
          everywhere else; this page's own section anchors are not nav items */}
      <Nav page="cockpit" links={SITE_NAV_LINKS} />

      <main id="main">
        {/* 1. Hero — the reserved cockpit line over the graded HK footage, with
               the book answering a book-wide question beside it. The morning
               briefing recreation is the home hero's and appears only there. */}
        <Hero />

        {/* 2. DataStrip — signature ticking mono data strip (tabular-nums) */}
        <DataStrip />

        {/* 3. WorkflowCards — the cockpit: book-of-business panel + six
               verb-first cards (brief / catch / draft / clear / execute / log) */}
        <WorkflowCards />

        {/* 4. GovernanceAct — the proposal's life, spelled out as the lifecycle
               it travels; the audit timeline itself is the home page's evidence */}
        <GovernanceAct />

        {/* 5. BuiltForAsia — booking centres, HKD/SGD/USD, SFC/MAS/HKMA */}
        <BuiltForAsia />

        {/* 6. AiMechanism — junior-colleague framing, 3-step how-it-works */}
        <AiMechanism />

        {/* 7. Personas — RM / firm principal / compliance one-liners */}
        <Personas />

        {/* 8. TrustPillars — six DDQ-style pillars, honest cert language.
               Carries the #trust anchor the home page links into. */}
        <TrustPillars />

        {/* 9. FactsBand — daylight interlude; true product specifics only,
               opening on the domain-fluency line the Credibility band carried */}
        <FactsBand />

        {/* 10. FinalCta — "Open the live demo", no form */}
        <FinalCta />
      </main>

      {/* Footer — the sitewide sitemap + fluid-gradient MERCURY wordmark */}
      <Footer />
    </div>
  );
}
