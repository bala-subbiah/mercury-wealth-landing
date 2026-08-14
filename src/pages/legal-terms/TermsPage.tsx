import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import TermsHead from "./sections/TermsHead.tsx";
import TermsBody from "./sections/TermsBody.tsx";

/* Terms — a prose page, carried from v2 (git show refs/heads/v2:src/legal/
   TermsPage.tsx) and restyled into the v3 system. Static throughout: no
   Reveal on legal pages. Nav is solid; the page never opens on a dark hero. */

export default function TermsPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="terms" />

      <main id="main">
        <TermsHead />
        <TermsBody />
      </main>

      <Footer />
    </>
  );
}
