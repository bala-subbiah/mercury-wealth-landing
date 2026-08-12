import Reveal from "../components/Reveal";
import "./Credibility.css";

/* Copy — docs/copy-deck.md §2, verbatim. The label claims no revenue, no
   endorsement and no scale; do not upgrade it. */
const LABEL = "WORKING WITH";

const NAMES = ["UOB Kay Hian", "Lizen Asset Management", "Cyberport", "Solomon"];

const DOMAIN_LINE =
  "MULTI-CUSTODIAN · HKD · SGD · USD BASE REPORTING · ADVISORY & DPM MANDATES · SFC · MAS · HKMA";

export default function Credibility() {
  return (
    <section className="section cred" aria-label="Working with">
      <Reveal className="container cred-inner">
        <span className="mono cred-label">{LABEL}</span>
        <div className="cred-names">
          {NAMES.map((name) => (
            <span className="cred-name" key={name}>
              {name}
            </span>
          ))}
        </div>
        <p className="mono cred-domain">{DOMAIN_LINE}</p>
      </Reveal>
    </section>
  );
}
