import { useEffect, useRef, useState } from "react";

import { DEMO_LINK_PROPS } from "../links";
import "./Nav.css";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps {
  /** Which page is rendering the nav — drives the wordmark's destination. */
  page: "home" | "cockpit" | "legal";
  /** Page links, in display order. Content lives with the caller — Nav only
   *  lays them out. Every page passes SITE_NAV_LINKS (or HOME_NAV_LINKS on
   *  the home page), so the bar reads identically everywhere. */
  links: NavLink[];
}

/* The sitewide nav, locked in docs/v2-plan.md §2: four destinations plus the
   standing demo CTA, which Nav renders itself. Every item is a page that
   exists; the nav promises nothing that is not built, and no page carries its
   own section anchors here any more. */
export const SITE_NAV_LINKS: NavLink[] = [
  { label: "Cockpit", href: "/cockpit/" },
  { label: "Engines", href: "/#engines" },
  { label: "Trust", href: "/trust/" },
  { label: "Company", href: "/company/" },
];

/** The same four, with the engines link as a same-page hash. Home only. */
export const HOME_NAV_LINKS: NavLink[] = SITE_NAV_LINKS.map((link) =>
  link.href === "/#engines" ? { ...link, href: "#engines" } : link,
);

const CTA = "Open the live demo";
/* Below 900px the bar has room for the wordmark, one pill and the menu
   control. The short label is a subset of the full CTA, so the accessible
   name still contains the visible text (WCAG 2.5.3). */
const CTA_SHORT = "Live demo";
const MENU = "Menu";

/**
 * Fixed header: transparent over the hero video, navy + hairline once the page
 * has scrolled past the first 60px. The four links sit in the bar at 900px and
 * up; below that they collapse into a disclosure panel that Escape closes,
 * leaving the compact demo pill and the menu control in the bar.
 *
 * Configurable per page: `links` supplies the nav items, `page` decides where
 * the MERCURY wordmark points — an in-page scroll-to-top on the page it
 * already is, a cross-page link back to home from anywhere else.
 */
export default function Nav({ page, links }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        // Escape is a keyboard-only close — return focus to the control that
        // opened the panel instead of dropping it back to <body>.
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const markHref = page === "home" ? "#top" : "/";

  return (
    <header className={["nav", scrolled || open ? "nav--scrolled" : ""].filter(Boolean).join(" ")}>
      <div className="container nav-inner">
        <a
          className="nav-mark"
          href={markHref}
          aria-label={page === "home" ? "Mercury, top of page" : "Mercury, home page"}
        >
          MERCURY
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="cta-primary nav-cta" {...DEMO_LINK_PROPS} data-demo-cta>
          {CTA}
        </a>

        {/* The mobile bar's own conversion affordance: the desktop pill is
            hidden below 900px, so this compact one stands in and stays visible
            whether or not the disclosure panel is open. */}
        <a
          className="cta-primary nav-cta-compact"
          {...DEMO_LINK_PROPS}
          data-demo-cta
          aria-label={CTA}
        >
          {CTA_SHORT}
        </a>

        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((value) => !value)}
        >
          {MENU}
        </button>
      </div>

      {/* Always mounted (not conditionally rendered) so aria-controls always
         resolves to a real element; `hidden` — not a ternary — hides it when
         closed. */}
      <div className="nav-panel" id="nav-panel" hidden={!open}>
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
            {...DEMO_LINK_PROPS}
            data-demo-cta
            onClick={() => setOpen(false)}
          >
            {CTA}
          </a>
        </div>
      </div>
    </header>
  );
}
