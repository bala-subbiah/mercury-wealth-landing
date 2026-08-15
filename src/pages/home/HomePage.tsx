import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import Hero from "./sections/Hero.tsx";
import PreppedOvernight from "./sections/PreppedOvernight.tsx";
import AskMercury from "./sections/AskMercury.tsx";
import WhyMercury from "./sections/WhyMercury.tsx";
import TrustBand from "./sections/TrustBand.tsx";
import FinalCta from "./sections/FinalCta.tsx";

/* Home — sells the offer and nothing more. The product pages carry the depth;
   this page has to survive a thirty-second read by someone who has never heard
   the word "custodian".

   Banding runs dark → light → dark (amendment 3, as revised in R3): the hero is
   the first midnight bookend, carrying the night skyline at full strength; the
   explaining middle happens in daylight; the trust band and close return to
   midnight. */

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav overHero current="home" />

      <main id="main">
        <Hero />
        <PreppedOvernight />
        <AskMercury />
        <WhyMercury />
        <TrustBand />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
