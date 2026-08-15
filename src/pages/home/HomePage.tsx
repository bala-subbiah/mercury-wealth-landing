import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import Hero from "./sections/Hero.tsx";
import WorkflowCards from "./sections/WorkflowCards.tsx";
import PreppedOvernight from "./sections/PreppedOvernight.tsx";
import AskMercury from "./sections/AskMercury.tsx";
import IntegrationsConveyor from "./sections/IntegrationsConveyor.tsx";
import ByTheNumbers from "./sections/ByTheNumbers.tsx";
import WhyMercury from "./sections/WhyMercury.tsx";
import SecurityGrid from "./sections/SecurityGrid.tsx";
import FinalCta from "./sections/FinalCta.tsx";

/* Home — sells the offer and nothing more. The product pages carry the depth;
   this page has to survive a thirty-second read by someone who has never heard
   the word "custodian".

   Banding runs dark → light → dark → light → dark (amendment 3, as revised in
   R3): the hero is the first midnight bookend, carrying the night skyline at
   full strength; the explaining middle happens in daylight; the integrations
   spine returns to midnight for one beat because it is the product working,
   and the security grid and the close carry the page out on midnight. */

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav overHero current="home" />

      <main id="main">
        <Hero />
        <WorkflowCards />
        <PreppedOvernight />
        <AskMercury />
        <IntegrationsConveyor />
        <ByTheNumbers />
        <WhyMercury />
        <SecurityGrid />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
