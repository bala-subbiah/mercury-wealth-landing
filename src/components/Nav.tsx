import { useEffect, useState } from "react";

import "./Nav.css";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps {
  /** Which page is rendering the nav — drives the wordmark's destination. */
  page: "home" | "cockpit";
  /** Section/page links, in display order. Content lives with the caller
   *  (App.tsx for home, CockpitApp.tsx for cockpit) — Nav only lays them out. */
  links: NavLink[];
}

const CTA = "Open the live demo";
const MENU = "Menu";

/**
 * Fixed header: transparent over the hero video, navy + hairline once the page
 * has scrolled past the first 60px. Below 900px the labels collapse into a
 * disclosure panel that Escape closes.
 *
 * Configurable per page: `links` supplies the nav items, `page` decides where
 * the MERCURY wordmark points — an in-page scroll-to-top on the page it
 * already is, a cross-page link back to home from anywhere else.
 */
export default function Nav({ page, links }: NavProps) {
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

  const markHref = page === "home" ? "#top" : "/";

  return (
    <header className={["nav", scrolled || open ? "nav--scrolled" : ""].filter(Boolean).join(" ")}>
      <div className="container nav-inner">
        <a className="nav-mark" href={markHref} aria-label="Mercury — top of page">
          MERCURY
        </a>

        <nav className="nav-links" aria-label="Sections">
          {links.map((link) => (
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
            {links.map((link) => (
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
