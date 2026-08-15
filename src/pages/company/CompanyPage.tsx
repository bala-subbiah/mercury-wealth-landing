import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";
import Head from "./sections/Head.tsx";
import FounderStatement from "./sections/FounderStatement.tsx";
import FactsRow from "./sections/FactsRow.tsx";
import TalkToUs from "./sections/TalkToUs.tsx";

/* Company — quote + facts, not essays (team feedback A6). The page opens on
   paper (Head), stays on paper through the founder statement and the compact
   facts row, then closes on the one navy bookend (TalkToUs). Nav is solid:
   this page never opens on a dark hero. */

export default function CompanyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav tone="light" current="company" />

      <main id="main">
        <Head />
        <FounderStatement />
        <FactsRow />
        <TalkToUs />
      </main>

      <Footer />
    </>
  );
}
