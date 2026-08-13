import Reveal from "../../components/Reveal";
import { DEMO_LINK_PROPS } from "../../links";
import "./DiHero.css";

/* Copy — docs/copy-deck-v2-home.md §6 (headline re-cut to the v2 plan's
   "Start where it hurts most.", plan §4 task 9) over the pain named in the v1
   deck §5 body. No video here: the HK footage is the home and cockpit hero's
   signature and does not repeat on the engine pages.

   The "what goes in" panel claims only the inputs the site already claims:
   term sheets, custodian statements, client documents; PDF, Excel, Word,
   email. Nothing is added to that list. */
const EYEBROW = "DOCUMENT INTELLIGENCE · A MERCURY ENGINE";
const HEADLINE = "Start where it hurts most.";
const LEDE =
  "Term sheets, custodian statements and client documents arrive in a shared inbox and leave it as typing.";
const SUBHEAD =
  "Someone keys the barrier into a spreadsheet, then into a proposal, then checks whether the barrier they typed is the barrier the issuer wrote. That is the part of the day with no upside.";
const CTA_PRIMARY = "Open the live demo";
const CTA_SECONDARY = "See how it works";

const PANEL_LABEL = "WHAT GOES IN";
const INPUTS = ["TERM SHEETS", "CUSTODIAN STATEMENTS", "CLIENT DOCUMENTS"];
const FORMATS = "PDF · EXCEL · WORD · EMAIL";

export default function DiHero() {
  return (
    <section className="di-hero" id="hero" aria-labelledby="di-hero-title">
      <div className="container di-hero-grid">
        <div className="di-hero-copy">
          <span className="eyebrow">{EYEBROW}</span>
          <h1 className="di-hero-title" id="di-hero-title">
            {HEADLINE}
          </h1>
          <p className="di-hero-lede">{LEDE}</p>
          <p className="di-hero-sub">{SUBHEAD}</p>

          <div className="cta-row di-hero-ctas">
            <a className="cta-primary" {...DEMO_LINK_PROPS} data-demo-cta>
              {CTA_PRIMARY}
            </a>
            <a className="cta-secondary" href="#how-it-works">
              {CTA_SECONDARY}
            </a>
          </div>
        </div>

        <Reveal className="surface di-inputs" delay={80}>
          <span className="mono di-inputs-label">{PANEL_LABEL}</span>
          <ul className="di-inputs-list">
            {INPUTS.map((input) => (
              <li className="di-inputs-item" key={input}>
                <span className="mono">{input}</span>
              </li>
            ))}
          </ul>
          <span className="mono di-inputs-formats">{FORMATS}</span>
        </Reveal>
      </div>
    </section>
  );
}
