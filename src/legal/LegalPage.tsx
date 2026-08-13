import type { ReactNode } from "react";

import Nav, { SITE_NAV_LINKS } from "../components/Nav";
import Reveal from "../components/Reveal";
import Footer from "../sections/Footer";

import "../styles/sections.css";
import "./LegalPage.css";

const EYEBROW = "LEGAL";

export interface LegalSection {
  heading: string;
  /** Paragraphs, in order. Plain strings unless a link is needed, in which
   *  case the caller passes the node. */
  body: ReactNode[];
}

export interface LegalPageProps {
  /** The h1. Short: "Privacy", "Terms". */
  title: string;
  /** Rendered under the title as a mono line, already formatted for display. */
  effective: string;
  /** The standfirst: one sentence, above the first heading. */
  intro: string;
  sections: LegalSection[];
}

/**
 * Shared shell for /legal/privacy/ and /legal/terms/.
 *
 * Banded the way the design system bands everything else: a navy title block
 * (which also gives the fixed nav a dark ground to sit on before the page has
 * scrolled), then the text itself on warm paper — the register the company
 * speaks in — then the standard footer.
 */
export default function LegalPage({ title, effective, intro, sections }: LegalPageProps) {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav page="legal" links={SITE_NAV_LINKS} />

      <main id="main">
        <section className="legal-head" aria-labelledby="legal-title">
          <div className="container container--narrow">
            <span className="eyebrow">{EYEBROW}</span>
            <h1 className="legal-title" id="legal-title">
              {title}
            </h1>
            <p className="mono legal-effective">{effective}</p>
          </div>
        </section>

        <section className="section on-paper legal-body">
          <div className="container container--narrow legal-prose">
            <Reveal as="p" className="legal-intro">
              {intro}
            </Reveal>

            {/* One reveal per clause, never per paragraph: a legal page is read
                straight down, so the motion stays at the level a reader
                already scans by. */}
            {sections.map((section) => (
              <Reveal as="section" className="legal-section" key={section.heading}>
                <h2 className="legal-heading">{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p className="legal-para" key={index}>
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
