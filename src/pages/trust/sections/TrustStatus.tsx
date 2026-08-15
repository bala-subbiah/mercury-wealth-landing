import Reveal from "../../../chrome/Reveal.tsx";
import "./TrustStatus.css";

/* Certifications status — navy band, its own dark stripe (design DNA #6:
   "trust/security: its own dark band"). The certification strings and the
   honesty note are a single sanctioned string used sitewide
   (docs/v3-fact-source.md SS4/SS8): rendered verbatim, unshortened,
   unparaphrased. Restyled per design.md Amendment 3 to the Gemini-mockup
   security-grid language: hairline grid cells, a small white line icon,
   title, and a mono uppercase status sub-line — no seals, no fake marks.
   Questionnaire body reframed Asia-first (owner-directed 2026-08-15):
   SFC/MAS kept as named examples, not the boundary of who this answers. */

const QUESTIONNAIRE_BODY =
  "The audit log and the suitability evidence behind it can be filtered to the range a questionnaire asks about and exported in the shape a supervisor's inspection request expects, the SFC and MAS included.";

const ICON_PROPS = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function Soc2Icon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M16 4l10 4v7c0 7-4.4 11-10 13-5.6-2-10-6-10-13V8Z" />
      <path d="M12 16l3 3 5-6" />
    </svg>
  );
}

function Iso27001Icon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="7" y="6" width="14" height="20" rx="1.5" />
      <path d="M11 12h6" />
      <path d="M11 16.5h6" />
      <path d="M11 21h3.5" />
      <path d="M21 13.5l4-2.2v11.4l-4-2.2" />
    </svg>
  );
}

const CERTS = [
  { icon: <Soc2Icon />, title: "SOC 2 Type II", status: "AUDIT UNDERWAY" },
  {
    icon: <Iso27001Icon />,
    title: "ISO 27001",
    status: "CERTIFICATION IN PROGRESS",
  },
];

export default function TrustStatus() {
  return (
    <section className="band band--navy trust-status">
      <div className="container">
        <div className="trust-status__grid">
          <div className="trust-status__certs">
            <Reveal as="h2" className="trust-status__title">
              Where the certifications stand.
            </Reveal>

            <div className="trust-status__certs-grid">
              {CERTS.map((cert, index) => (
                <Reveal
                  as="div"
                  key={cert.title}
                  className="trust-status__cert-cell"
                  delay={80 + index * 60}
                >
                  <span className="trust-status__cert-icon">{cert.icon}</span>
                  <h3 className="trust-status__cert-title">{cert.title}</h3>
                  <span className="trust-status__cert-status">
                    {cert.status}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal as="p" className="trust-status__note" delay={200}>
              Applied for and in progress. Neither is held today; we&rsquo;ll
              say so the day they are.
            </Reveal>
          </div>

          <Reveal as="div" className="trust-status__questionnaire" delay={100}>
            <h2 className="trust-status__title">
              The answer is an export, not a project.
            </h2>
            <p className="trust-status__body">{QUESTIONNAIRE_BODY}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
