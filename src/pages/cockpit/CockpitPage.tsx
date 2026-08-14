import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import Hero from "./sections/Hero.tsx";
import Workflows from "./sections/Workflows.tsx";
import GovernanceThread from "./sections/GovernanceThread.tsx";
import Personas from "./sections/Personas.tsx";
import FinalCta from "./sections/FinalCta.tsx";

/* Cockpit — the advisor cockpit product page. Dark hero, so Nav floats over
   it (overHero); every other section reserves its own top spacing. */

export default function CockpitPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav overHero current="cockpit" />

      <main id="main">
        <Hero />
        <Workflows />
        <GovernanceThread />
        <Personas />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
