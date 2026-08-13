import "./TrustHero.css";

/* The page's orientation block. It has one job: tell a reader who arrived by
   forwarded link what this document is, before they read a word of it.

   Ground: navy, the same device the legal pages use (src/legal/LegalPage.css).
   The nav is transparent until the page has scrolled 60px, so the first band of
   a paper page has to be dark for the wordmark to read. Everything below this
   block is warm paper, per design.md amendment 1: /trust is the company
   speaking, in daylight. */
const EYEBROW = "GOVERNANCE & SECURITY";
const TITLE = "Answers, in the form your compliance officer asks for them.";
const LEAD =
  "Six questions every due-diligence questionnaire gets to, answered plainly. Mercury is the front-office cockpit built for external asset managers, private banks and brokerages in Hong Kong and Singapore. This page states how it handles evidence, approvals and client data, and it is written to be read on its own and forwarded.";

const META = ["FOR COMPLIANCE · OPERATIONS · IT REVIEW", "LAST UPDATED 13 AUGUST 2026"];

export default function TrustHero() {
  return (
    <section className="th" aria-labelledby="th-title">
      <div className="container container--narrow th-inner">
        <span className="eyebrow">{EYEBROW}</span>
        <h1 className="th-title" id="th-title">
          {TITLE}
        </h1>
        <p className="th-lead">{LEAD}</p>
        <p className="mono th-meta">
          {META.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
