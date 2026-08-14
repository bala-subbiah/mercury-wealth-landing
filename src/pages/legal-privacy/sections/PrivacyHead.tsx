import "./PrivacyHead.css";

/* Privacy head — serif title, mono effective date, one-line intro. Static:
   legal pages carry no Reveal (task instruction). Content and date carried
   verbatim from v2 (git show refs/heads/v2:src/legal/PrivacyPage.tsx) — the
   date is not bumped. */

export default function PrivacyHead() {
  return (
    <section className="legal-head band band--paper">
      <div className="container container--narrow">
        <h1 className="legal-head__title">Privacy</h1>
        <p className="legal-head__effective">EFFECTIVE 13 AUGUST 2026</p>
        <p className="legal-head__intro measure">
          This is the marketing site for Mercury Wealth. It collects very little, and this page
          says exactly what.
        </p>
      </div>
    </section>
  );
}
