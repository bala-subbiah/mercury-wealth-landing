import Nav, { SITE_NAV_LINKS } from "./components/Nav";
import Footer from "./sections/Footer";
import TrustHero from "./sections/trust/TrustHero";
import TrustAnswers from "./sections/trust/TrustAnswers";
import TrustEvidence from "./sections/trust/TrustEvidence";
import TrustStatus from "./sections/trust/TrustStatus";
import TrustContact from "./sections/trust/TrustContact";

import "./styles/sections.css";
import "./TrustApp.css";

/* /trust/ — the forwardable page.
   A compliance officer or an IT reviewer is meant to be able to read this top to
   bottom without the rest of the site, so nothing on it defers to another page
   for its meaning.

   Warm paper throughout (design.md amendment 1: /trust is the company speaking),
   with one exception: the compliance-evidence recreation keeps its dark product
   surface, because that is what the software looks like. */
export default function TrustApp() {
  return (
    <div className="trust-page" id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav page="legal" links={SITE_NAV_LINKS} />

      <main id="main">
        <TrustHero />
        <TrustAnswers />
        <TrustEvidence />
        <TrustStatus />
        <TrustContact />
      </main>

      <Footer />
    </div>
  );
}
