import "./TermsHead.css";

/* Terms head — serif title, mono effective date, one-line intro. Static: no
   Reveal. Date carried verbatim from v2, not bumped. */

export default function TermsHead() {
  return (
    <section className="legal-head band band--paper">
      <div className="container container--narrow">
        <h1 className="legal-head__title">Terms</h1>
        <p className="legal-head__effective">EFFECTIVE 13 AUGUST 2026</p>
        <p className="legal-head__intro measure">
          Short terms for reading this site. Using it means you are content with what follows.
        </p>
      </div>
    </section>
  );
}
