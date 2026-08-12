import { IntegrationsSpine } from "../../components/company";
import Reveal from "../../components/Reveal";
import "./SpineAct.css";

/* Copy — docs/copy-deck-v2-home.md §4, verbatim. This act must stay directly
   beneath the engine catalog: the modularity claim above is only answered by
   the spine (deck checklist item 5). The integrations bar states what the
   spine READS FROM — never caption it as partners or certified integrations. */
const EYEBROW = "THE SPINE";
const TITLE = "Every engine, one spine, one audit log.";
const BODY =
  "Buying a module from most vendors means buying another silo: its own data, its own log, its own idea of who the client is. Mercury's engines read and write the same book — the same households, accounts, portfolios, holdings and activity — and every material action any of them takes lands on the same immutable log, under the same entitlements. That is why the second engine is worth more than the first: adopt one and it works alone; add another and both get sharper.";

const PROOF_LINES = [
  "ONE BOOK · HOUSEHOLDS · ACCOUNTS · PORTFOLIOS · HOLDINGS · ACTIVITY",
  "ONE LOG · WHO · WHAT · WHEN · BEFORE → AFTER",
  "ONE ENTITLEMENT MODEL · EVERY ENGINE · SAME SCOPE",
];

const SOURCES_INTRO =
  "What the spine reads from — the market feeds, the firm's own systems and the file formats an Asian book actually arrives in.";
const SOURCES_CAPTION = "AND MANY MORE";

/**
 * The anti-Privé act: the argument on the left, the architecture on the right.
 * The heaviest section on the page after the catalog it answers.
 */
export default function SpineAct() {
  return (
    <section className="section sp" id="spine" data-section="spine" aria-labelledby="sp-title">
      <div className="container sp-grid">
        <div className="sp-copy">
          <Reveal className="section-head">
            <span className="eyebrow">{EYEBROW}</span>
            <h2 className="section-title sp-title" id="sp-title">
              {TITLE}
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="body-copy sp-body">{BODY}</p>
          </Reveal>

          <Reveal className="sp-proof" delay={100}>
            {PROOF_LINES.map((line) => (
              <p className="mono sp-proof-line" key={line}>
                {line}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="sp-visual">
          <Reveal delay={40}>
            <p className="sp-sources-intro">{SOURCES_INTRO}</p>
          </Reveal>
          <Reveal className="sp-spine" delay={80}>
            <IntegrationsSpine caption={SOURCES_CAPTION} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
