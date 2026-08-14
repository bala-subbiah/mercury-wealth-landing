import { CONTACT_EMAIL, CONTACT_MAILTO, LINKEDIN_URL } from "../links.ts";
import { ROUTES } from "./routes.ts";
import "./Footer.css";

/* Site footer — dark navy, serif tagline, plain link columns, contact row.
   Design DNA item 10. No mono tag strips (struck in the 2026-08-13 review). */

// TODO (T2–T6): replace the placeholder tagline with the final one line,
// tightened from docs/v3-fact-source.md. Serif, one line, no em-dash.
const TAGLINE = "The advisor's cockpit.";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__wordmark" href={ROUTES.home}>
            Mercury
          </a>
          <p className="footer__tagline">{TAGLINE}</p>

          <ul className="footer__contact">
            <li>
              <a className="footer__link" href={CONTACT_MAILTO}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a className="footer__link" href={LINKEDIN_URL} target="_blank" rel="noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__columns" aria-label="Footer">
          <div className="footer__col">
            <h2 className="footer__col-head">Product</h2>
            <ul>
              <li>
                <a className="footer__link" href={ROUTES.cockpit}>
                  Cockpit
                </a>
              </li>
              <li>
                <a className="footer__link" href={ROUTES.mercuryAi}>
                  Mercury AI
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__col-head">Company</h2>
            <ul>
              <li>
                <a className="footer__link" href={ROUTES.company}>
                  Company
                </a>
              </li>
              <li>
                <a className="footer__link" href={ROUTES.trust}>
                  Trust
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__col-head">Legal</h2>
            <ul>
              <li>
                <a className="footer__link" href={ROUTES.privacy}>
                  Privacy
                </a>
              </li>
              <li>
                <a className="footer__link" href={ROUTES.terms}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">© {YEAR} Mercury Wealth</p>
        <ul className="footer__legal">
          <li>
            <a className="footer__link" href={ROUTES.privacy}>
              Privacy
            </a>
          </li>
          <li>
            <a className="footer__link" href={ROUTES.terms}>
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
