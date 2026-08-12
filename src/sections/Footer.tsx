import FluidGradientText from "../components/FluidGradientText";
import "./Footer.css";

/* Copy — docs/copy-deck.md §15. Sitemap is the deck's five section jumps plus
   a LinkedIn placeholder; the columns collapse to one row at this scale. */
const TAGLINE = "See the whole book. Act with governance.";

const LINKS = [
  { label: "Cockpit", href: "#cockpit" },
  { label: "Governance", href: "#governance" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Built for Asia", href: "#built-for-asia" },
  { label: "Trust", href: "#trust" },
  { label: "LinkedIn", href: "#" },
];

const ADDRESS = "MERCURY WEALTH · HONG KONG · SINGAPORE";
const COPYRIGHT = "© 2026 MERCURY AI LIMITED. ALL RIGHTS RESERVED.";

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-tagline">{TAGLINE}</p>
          <nav className="footer-links" aria-label="Footer">
            {LINKS.map((link) => (
              <a className="footer-link" key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
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
