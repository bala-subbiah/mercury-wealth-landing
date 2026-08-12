import FluidGradientText from "../components/FluidGradientText";
import "./Footer.css";

/* Copy — docs/copy-deck.md §15. Three-column sitemap (PRODUCT / COMPANY /
   LEGAL), mono column headers per the v1 deck's footer idiom. The footer is
   shared by both pages, so PRODUCT anchors are page-aware: sections that live
   on both / and /cockpit/ under the same id (#built-for-asia, #trust) stay
   bare hashes; sections that only exist on the home page (#engines, #spine)
   get a leading "/" when rendered from /cockpit/ so the link still resolves. */
const TAGLINE = "See the whole book. Act with governance.";

export interface FooterProps {
  /** Which page is rendering the footer — decides whether home-only anchors
   *  (#engines, #spine) are same-page hashes or cross-page "/#" links.
   *  Defaults to "cockpit" so /cockpit/ and any legacy v1-era usage keep
   *  their existing anchors unchanged. */
  page?: "home" | "cockpit";
}

interface FooterLink {
  label: string;
  href: string;
}

const COMPANY_LINKS: FooterLink[] = [
  { label: "Built for Asia", href: "#built-for-asia" },
  { label: "Trust", href: "#trust" },
  { label: "LinkedIn", href: "#" },
];

const ADDRESS = "MERCURY WEALTH · HONG KONG · SINGAPORE";
const COPYRIGHT = "© 2026 MERCURY AI LIMITED. ALL RIGHTS RESERVED.";

export default function Footer({ page = "cockpit" }: FooterProps) {
  const onHome = page === "home";
  const productLinks: FooterLink[] = [
    { label: "Mercury Cockpit", href: "/cockpit/" },
    { label: "Document Intelligence", href: onHome ? "#engines" : "/#engines" },
    { label: "The Spine", href: onHome ? "#spine" : "/#spine" },
  ];

  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-tagline">{TAGLINE}</p>

          <div className="footer-sitemap">
            <div className="footer-column">
              <p className="mono footer-column-title">Product</p>
              <nav className="footer-links" aria-label="Product">
                {productLinks.map((link) => (
                  <a className="footer-link" key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column">
              <p className="mono footer-column-title">Company</p>
              <nav className="footer-links" aria-label="Company">
                {COMPANY_LINKS.map((link) => (
                  <a className="footer-link" key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column">
              <p className="mono footer-column-title">Legal</p>
              {/* TODO(owner): legal pages required before public launch */}
              <p className="footer-legal-static">Privacy · Terms</p>
            </div>
          </div>
        </div>

        <FluidGradientText className="footer-mark">MERCURY</FluidGradientText>

        <div className="mono footer-foot">
          <span>{ADDRESS}</span>
          <span>{COPYRIGHT}</span>
        </div>
      </div>
    </footer>
  );
}
