import "./TrustHero.css";

/* The page's orientation block. It has one job: tell a reader who arrived by
   forwarded link what this document is, before they read a word of it.

   Ground: navy, the same device the legal pages use (src/legal/LegalPage.css).
   The nav is transparent until the page has scrolled 60px, so the first band of
   a paper page has to be dark for the wordmark to read. Everything below this
   block is warm paper, per design.md amendment 1: /trust is the company
   speaking, in daylight. */
/* The page-level headline stays here, on the page whose whole job it is; the
   /cockpit governance act carried the same sentence word for word and now
   carries its own (src/sections/TrustPillars.tsx, docs/critique-v2.md P1-9).

   "Six questions every due-diligence questionnaire gets to" claimed something
   about every questionnaire on the strength of Mercury's own pillar count
   (P1-11). Six is what Mercury answers, so that is now what the sentence says.

   The "LAST UPDATED" stamp is gone rather than derived from the build date: a
   build stamp would assert that these governance statements were reviewed on
   the day of an unrelated deploy, which is a claim this page has no process
   behind. On the one page written for reviewers who check exactly that, a
   plausible-but-untrue date is worse than no date. */
const EYEBROW = "GOVERNANCE & SECURITY";
const TITLE = "Answers, in the form your compliance officer asks for them.";
const LEAD =
  "The six answers due diligence asks for first, stated plainly. Mercury is the front-office cockpit built for external asset managers, private banks and brokerages in Hong Kong and Singapore. This page states how it handles evidence, approvals and client data, and it is written to be read on its own and forwarded.";

const META = ["FOR COMPLIANCE · OPERATIONS · IT REVIEW"];

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
