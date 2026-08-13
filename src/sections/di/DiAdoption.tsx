import Reveal from "../../components/Reveal";
import "./DiAdoption.css";

/* The daylight interlude (design.md amendment 1 §3): warm paper because this
   is Mercury speaking as a company about how it can be bought, not the
   software on screen. The offer is stated as an offer, per docs/v2-plan.md §4
   P0 item 4 — the deck's "Firms that begin here keep the cockpit for year two"
   was an observed-customer claim and is retired. The last two sentences are
   the approved replacement, verbatim. */
const EYEBROW = "ADOPTION";
const TITLE = "It works alone from day one.";
const LEAD =
  "Document Intelligence does not need the cockpit, or any of the other engines, to earn its place.";
const OFFER =
  "Begin here and the cockpit stays optional. When you take it, the documents you have already processed are sitting on the spine, waiting for it.";
const LINK = "Explore the Cockpit";

export default function DiAdoption() {
  return (
    <section className="section di-ad on-paper" id="adoption" aria-labelledby="di-ad-title">
      <div className="container di-ad-grid">
        <Reveal className="di-ad-head">
          <span className="eyebrow">{EYEBROW}</span>
          <h2 className="section-title di-ad-title" id="di-ad-title">
            {TITLE}
          </h2>
        </Reveal>

        <Reveal className="di-ad-body" delay={60}>
          <p className="di-ad-lead">{LEAD}</p>
          <p className="di-ad-offer">{OFFER}</p>
          <a className="di-ad-link" href="/cockpit/">
            {LINK}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
