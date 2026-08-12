import Nav from "./components/Nav";
import type { NavLink } from "./components/Nav";

import HomeHero from "./sections/home/HomeHero";
import LogoProof from "./sections/home/LogoProof";
import EngineGrid from "./sections/home/EngineGrid";
import SpineAct from "./sections/home/SpineAct";
import FlagshipAct from "./sections/home/FlagshipAct";
import DocIntelAct from "./sections/home/DocIntelAct";
import AsiaCompany from "./sections/home/AsiaCompany";
import TrustCondensed from "./sections/home/TrustCondensed";
import HomeFinalCta from "./sections/home/HomeFinalCta";
import Footer from "./sections/Footer";

import "./styles/sections.css";

/* Home nav — docs/offerings-map.md v2, "Home page — nine acts". */
const NAV_LINKS: NavLink[] = [
  { label: "Engines", href: "#engines" },
  { label: "The Spine", href: "#spine" },
  { label: "Built for Asia", href: "#built-for-asia" },
  { label: "Trust", href: "#trust" },
  { label: "Cockpit", href: "/cockpit/" },
];

// Company home. Nine acts, locked by docs/offerings-map.md v2 ("Home page —
// nine acts"). Every section below is a stub pending the home copy deck and
// home build task — do not reorder without an owner sign-off.
export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav page="home" links={NAV_LINKS} />

      <main id="main">
        {/* 1. HomeHero — company claim + engine switcher visual; HK video stays */}
        <HomeHero />

        {/* 2. LogoProof — real partner logos, honest label */}
        <LogoProof />

        {/* 3. EngineGrid — the six engines, verb-first cards, flagship badge on Cockpit */}
        <EngineGrid />

        {/* 4. SpineAct — anti-Privé: one data spine, one audit log, integrations bar */}
        <SpineAct />

        {/* 5. FlagshipAct — Cockpit teaser via MorningBriefing -> /cockpit */}
        <FlagshipAct />

        {/* 6. DocIntelAct — second proof act: Document Intelligence, TermSheetDissolve */}
        <DocIntelAct />

        {/* 7. AsiaCompany — Built for Asia, elevated to company level */}
        <AsiaCompany />

        {/* 8. TrustCondensed — trust pillars + founder statement, condensed from v1 */}
        <TrustCondensed />

        {/* 9. HomeFinalCta — "Open the live demo" */}
        <HomeFinalCta />
      </main>

      {/* Footer — reused as-is; page-agnostic sitemap + fluid-gradient MERCURY wordmark */}
      <Footer />
    </div>
  );
}
