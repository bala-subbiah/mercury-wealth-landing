import Nav, { HOME_NAV_LINKS } from "./components/Nav";

import HomeHero from "./sections/home/HomeHero";
import ProblemAct from "./sections/home/ProblemAct";
import LogoProof from "./sections/home/LogoProof";
import EngineGrid from "./sections/home/EngineGrid";
import FlagshipAct from "./sections/home/FlagshipAct";
import AsiaTrustBand from "./sections/home/AsiaTrustBand";
import HomeFinalCta from "./sections/home/HomeFinalCta";
import Footer from "./sections/Footer";

import "./styles/sections.css";

// Company home — seven acts, per docs/v2-plan.md §3. The order is the argument
// (problem, then proof, then offer) and does not change without owner sign-off.
export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Sitewide nav (docs/v2-plan.md §2); home takes the same-page #engines
          variant of the shared set */}
      <Nav page="home" links={HOME_NAV_LINKS} />

      <main id="main">
        {/* 1. Hero — the company claim over the HK video, MorningBriefing beside it */}
        <HomeHero />

        {/* 2. ProblemAct — daylight interlude: what is broken, before any product */}
        <ProblemAct />

        {/* 3. LogoProof — real partner logos, honest label */}
        <LogoProof />

        {/* 4. EngineGrid — the six engines; the cut spine act's argument lives in its intro */}
        <EngineGrid />

        {/* 5. FlagshipAct — the book panel and the audit trail it writes -> /cockpit */}
        <FlagshipAct />

        {/* 6. AsiaTrustBand — Asia's operating reality and the governance answers, in one band */}
        <AsiaTrustBand />

        {/* 7. HomeFinalCta — "Open the live demo" */}
        <HomeFinalCta />
      </main>

      {/* Footer — the sitewide sitemap + fluid-gradient MERCURY wordmark */}
      <Footer />
    </div>
  );
}
