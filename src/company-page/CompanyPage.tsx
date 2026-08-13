import Nav, { SITE_NAV_LINKS } from "../components/Nav";
import Footer from "../sections/Footer";

import ContactBlock from "./ContactBlock";
import FounderStatement from "./FounderStatement";
import WhatExists from "./WhatExists";
import WhereWeWork from "./WhereWeWork";
import WhyNow from "./WhyNow";

import "../styles/sections.css";
import "./CompanyPage.css";

/* /company/: the identity layer (docs/v2-plan.md §4 P1 task 7).
   Answers why-now, why-you and what-exists in under a minute's read.

   Banding (design.md amendment 1): this is a WARM PAPER page. The company is
   speaking, not the software running, so every section below the masthead sits
   on paper. The masthead itself is navy for one structural reason, the same one
   the legal pages have: the fixed nav is transparent until 60px of scroll, so
   the band it first sits on has to be dark for the wordmark to read.

   The nav and footer are the sitewide ones (docs/v2-plan.md §2). */
const EYEBROW = "COMPANY";
const TITLE = "Why we built Mercury.";
const STANDFIRST =
  "Front-office software for external asset managers, private banks and " +
  "brokerages in Hong Kong and Singapore.";

export default function CompanyPage() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Nav page="legal" links={SITE_NAV_LINKS} />

      <main id="main">
        <section className="co-head" aria-labelledby="company-title">
          <div className="container container--narrow">
            <span className="eyebrow">{EYEBROW}</span>
            <h1 className="co-title" id="company-title">
              {TITLE}
            </h1>
            <p className="co-standfirst">{STANDFIRST}</p>
          </div>
        </section>

        <FounderStatement />
        <WhyNow />
        <WhatExists />
        <WhereWeWork />
        <ContactBlock />
      </main>

      <Footer />
    </div>
  );
}
