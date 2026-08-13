import Nav, { SITE_NAV_LINKS } from "./components/Nav";

import DiHero from "./sections/di/DiHero";
import DiExtraction from "./sections/di/DiExtraction";
import DiHowItWorks from "./sections/di/DiHowItWorks";
import DiGovernance from "./sections/di/DiGovernance";
import DiAdoption from "./sections/di/DiAdoption";
import DiFinalCta from "./sections/di/DiFinalCta";
import Footer from "./sections/Footer";

import "./styles/sections.css";

// Document Intelligence — the second engine page, six sections on the dark
// product ground (design.md amendment 1: navy carries the product working),
// with one paper interlude where Mercury speaks about adoption rather than
// about software. Copy sources: docs/copy-deck-v2-home.md §6 and the v1 deck's
// §5 strings, which left /cockpit when its DI act did.
export default function DocIntelApp() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Sitewide nav (docs/v2-plan.md §2). The wordmark points home because
          `page` is not "home"; Nav renders the demo pill itself. */}
      <Nav page="cockpit" links={SITE_NAV_LINKS} />

      <main id="main">
        {/* 1. Hero — the pain named, then the demo */}
        <DiHero />

        {/* 2. Extraction — the TermSheetDissolve recreation */}
        <DiExtraction />

        {/* 3. How it works — three steps, the third one a person */}
        <DiHowItWorks />

        {/* 4. Governance — where extraction stops */}
        <DiGovernance />

        {/* 5. Adoption — daylight interlude: alone from day one, then the spine */}
        <DiAdoption />

        {/* 6. Final CTA — "Open the live demo" */}
        <DiFinalCta />
      </main>

      {/* Footer — the sitewide sitemap + fluid-gradient MERCURY wordmark */}
      <Footer />
    </div>
  );
}
