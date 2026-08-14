import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import PrivacyHead from "./sections/PrivacyHead.tsx";
import PrivacyBody from "./sections/PrivacyBody.tsx";

/* Privacy — a prose page, carried from v2 (git show refs/heads/v2:src/legal/
   PrivacyPage.tsx) and restyled into the v3 system. Static throughout: no
   Reveal on legal pages. Nav is solid; the page never opens on a dark hero. */

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav tone="light" current="privacy" />

      <main id="main">
        <PrivacyHead />
        <PrivacyBody />
      </main>

      <Footer />
    </>
  );
}
