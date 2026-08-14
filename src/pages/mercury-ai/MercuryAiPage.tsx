import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import Hero from "./sections/Hero.tsx";
import Capabilities from "./sections/Capabilities.tsx";
import HowItWorks from "./sections/HowItWorks.tsx";
import DocumentSpotlight from "./sections/DocumentSpotlight.tsx";
import WontDo from "./sections/WontDo.tsx";
import FinalCta from "./sections/FinalCta.tsx";

/* Mercury AI — the public name of the six-engine line (fact source §1, §3).
   Sells: six licensable capabilities, one shared book and audit log, and a
   governed AI ("it prepares, you decide"). Dark hero (matches the Cockpit
   product-page treatment) -> paper explanatory middle -> navy trust
   (What it won't do) -> navy final CTA -> footer, per Amendment 2's
   bookend banding rule. */

export default function MercuryAiPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav overHero current="mercuryAi" />

      <main id="main">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <DocumentSpotlight />
        <WontDo />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
