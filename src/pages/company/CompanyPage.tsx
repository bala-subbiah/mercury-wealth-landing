import Nav from "../../chrome/Nav.tsx";
import Footer from "../../chrome/Footer.tsx";

/* Company — SCAFFOLD ONLY. Sections land in ./sections/ and are composed
   here, in scroll order, inside <main>. Delete the placeholder band below.

   When this page opens on a dark, full-bleed hero, switch to
   <Nav overHero current="company" /> and give the hero
   padding-top: var(--nav-h) so nothing sits under the bar. */

export default function CompanyPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav current="company" />

      <main id="main">
        <section className="band band--paper" style={{ padding: "var(--space-3xl) 0" }}>
          <div className="container">
            <h1>Company sections land here</h1>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
