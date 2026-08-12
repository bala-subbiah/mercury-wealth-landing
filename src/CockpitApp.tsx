import Nav from "./components/Nav";
import type { NavLink } from "./components/Nav";

import Hero from "./sections/Hero";
import DataStrip from "./sections/DataStrip";
import Credibility from "./sections/Credibility";
import WorkflowCards from "./sections/WorkflowCards";
import GovernanceAct from "./sections/GovernanceAct";
import DocIntelligence from "./sections/DocIntelligence";
import WorkflowAutomation from "./sections/WorkflowAutomation";
import BuiltForAsia from "./sections/BuiltForAsia";
import AiMechanism from "./sections/AiMechanism";
import Personas from "./sections/Personas";
import FounderStatement from "./sections/FounderStatement";
import TrustPillars from "./sections/TrustPillars";
import FactsBand from "./sections/FactsBand";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

import "./styles/sections.css";

/* /cockpit nav — a leading link back to the company home, then the page's
   own section anchors (unchanged from v1), then the standing CTA. */
const NAV_LINKS: NavLink[] = [
  { label: "Mercury Wealth", href: "/" },
  { label: "Cockpit", href: "#cockpit" },
  { label: "Governance", href: "#governance" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Built for Asia", href: "#built-for-asia" },
  { label: "Trust", href: "#trust" },
];

// This is the v1 single-page site, relocated to /cockpit and re-headed as the
// flagship product page (docs/offerings-map.md v2, "Site map"). Section order
// and content are otherwise unchanged and locked — do not reorder without an
// owner sign-off.
export default function CockpitApp() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav page="cockpit" links={NAV_LINKS} />

      <main id="main">
        {/* 1. Hero — morning-briefing moment; self-composing attention feed.
               Eyebrow re-headed to "MERCURY COCKPIT · THE FLAGSHIP ENGINE". */}
        <Hero />

        {/* 2. DataStrip — signature ticking mono data strip (tabular-nums) */}
        <DataStrip />

        {/* 3. Credibility — partner/ecosystem names + domain-fluency signals */}
        <Credibility />

        {/* 4. WorkflowCards — the cockpit: book-of-business panel + six
               verb-first cards (brief / catch / draft / clear / execute / log) */}
        <WorkflowCards />

        {/* 5. GovernanceAct — the proposal's life as a visual audit thread */}
        <GovernanceAct />

        {/* 6. DocIntelligence — term-sheet dissolve animation (PDF -> fields) */}
        <DocIntelligence />

        {/* 7. WorkflowAutomation — "the work runs itself" run log */}
        <WorkflowAutomation />

        {/* 8. BuiltForAsia — booking centres, HKD/SGD/USD, SFC/MAS/HKMA */}
        <BuiltForAsia />

        {/* 9. AiMechanism — junior-colleague framing, 3-step how-it-works */}
        <AiMechanism />

        {/* 10. Personas — RM / firm principal / compliance one-liners */}
        <Personas />

        {/* 11. FounderStatement — Oscar Chan, editorial quote layout */}
        <FounderStatement />

        {/* 12. TrustPillars — six DDQ-style pillars, honest cert language */}
        <TrustPillars />

        {/* 13. FactsBand — daylight interlude; true product specifics only */}
        <FactsBand />

        {/* 14. FinalCta — "Open the live demo", no form */}
        <FinalCta />
      </main>

      {/* 15. Footer — minimal sitemap + fluid-gradient MERCURY wordmark */}
      <Footer />
    </div>
  );
}
