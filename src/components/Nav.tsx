import { useEffect, useState } from "react";

import "./Nav.css";

/* Nav labels — docs/copy-deck.md §0 (five items plus the CTA, verbatim). */
const LINKS = [
  { label: "Cockpit", href: "#cockpit" },
  { label: "Governance", href: "#governance" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Built for Asia", href: "#built-for-asia" },
  { label: "Trust", href: "#trust" },
];

const CTA = "Open the live demo";
const MENU = "Menu";

/**
 * Fixed header: transparent over the hero video, navy + hairline once the page
 * has scrolled past the first 60px. Below 900px the labels collapse into a
 * disclosure panel that Escape closes.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={["nav", scrolled || open ? "nav--scrolled" : ""].filter(Boolean).join(" ")}>
      <div className="container nav-inner">
        <a className="nav-mark" href="#top" aria-label="Mercury — top of page">
          MERCURY
        </a>

        <nav className="nav-links" aria-label="Sections">
          {LINKS.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="cta-primary nav-cta" href="#demo-placeholder" data-demo-cta>
          {CTA}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((value) => !value)}
        >
          {MENU}
        </button>
      </div>

      {open ? (
        <div className="nav-panel" id="nav-panel">
          <div className="container nav-panel-inner">
            {LINKS.map((link) => (
              <a
                key={link.href}
                className="nav-panel-link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="cta-primary nav-panel-cta"
              href="#demo-placeholder"
              data-demo-cta
              onClick={() => setOpen(false)}
            >
              {CTA}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
