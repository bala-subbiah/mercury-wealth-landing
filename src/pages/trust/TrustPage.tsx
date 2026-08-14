import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import TrustHero from "./sections/TrustHero.tsx";
import TrustAnswers from "./sections/TrustAnswers.tsx";
import TrustStatus from "./sections/TrustStatus.tsx";
import TrustEvidence from "./sections/TrustEvidence.tsx";
import TrustContact from "./sections/TrustContact.tsx";

/* Trust — the full compliance-officer answer, compressed for the layman
   (review A5): icon-first claims up front, detail one click away. Paper
   carries the company's own voice (hero, the six answers, evidence); navy
   carries the two bookend bands (certifications, final CTA), per
   design.md Amendment 1's meaning rule and the DNA's "trust band gets its
   own dark stripe" pattern. Nav is solid (no dark hero on this page). */

export default function TrustPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="trust" />

      <main id="main">
        <TrustHero />
        <TrustAnswers />
        <TrustStatus />
        <TrustEvidence />
        <TrustContact />
      </main>

      <Footer />
    </>
  );
}
