import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { DEMO_BOOKING_MAILTO } from "../links.ts";
import { ROUTES, type PageKey } from "./routes.ts";
import "./Nav.css";

/* The site's single nav: wordmark left, plain links, one sharp rectangle CTA
   right; transparent over the hero, and gaining its own ground once scrolled
   (design.md amendment 3). The CTA is the site's one button — a conversation,
   nowhere else to go (R3, owner-directed).

   Usage
   -----
   Light-hero pages: <Nav overHero tone="light" current="…" />
   Dark-hero pages:  <Nav overHero current="home" />      — nav floats over the
                     hero; the hero must reserve its own top padding
                     (var(--nav-h)) so the headline never sits under the bar.
   Everything else:  <Nav current="trust" />           — nav is solid from the
                     first pixel and renders a spacer, so the page starts below
                     it with no work from the section.

   `tone` decides the colourway, not the scroll state: "dark" (the default) is
   white type that lands on midnight; "light" is ink type that lands on paper.
   Set it to match the band the nav sits over at the top of the page.

   The bar is position:fixed in both cases; it is the only fixed element on the
   site, at z-index 100.

   Product dropdown: opens on pointer-enter, closes on pointer-leave; a
   pointer click on the trigger just ensures it's open (hover already got
   there first, so a click can't slam it shut). Enter or Space on the trigger
   toggles it for keyboard users; Escape and focus leaving the item close it.
   aria-expanded tracks the real state at all times. */

const SCROLL_THRESHOLD = 40;

type NavProps = {
  /** True when the page opens on a full-bleed hero the nav should float over. */
  overHero?: boolean;
  /** Colourway of the bar, sheet and CTA. Match the page's own top band. */
  tone?: "light" | "dark";
  /** Marks the matching nav link with aria-current="page". */
  current?: PageKey;
};

const PRODUCT_LINKS: ReadonlyArray<{ key: PageKey; label: string }> = [
  { key: "cockpit", label: "Cockpit" },
  { key: "mercuryAi", label: "Mercury AI" },
];

export default function Nav({ overHero = false, tone = "dark", current }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile sheet
  const [productOpen, setProductOpen] = useState(false); // desktop dropdown
  const productWrapRef = useRef<HTMLDivElement>(null);
  const sheetId = useId();
  const productMenuId = useId();

  // Scroll state: transparent bars gain their ground, solid bars gain the rule.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes whatever is open; the mobile sheet also locks body scroll.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setProductOpen(false);
      setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Crossing into the desktop layout hides the sheet in CSS; close it in state
  // too so the body scroll lock is released with it.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Desktop dropdown closes when focus leaves the whole item (keyboard) and on
  // pointer-leave (mouse). aria-expanded therefore always tells the truth.
  const onProductBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
    if (!productWrapRef.current?.contains(event.relatedTarget as Node | null)) {
      setProductOpen(false);
    }
  }, []);

  // Pointer clicks land after hover has already opened the menu (you can't
  // click an element without first entering it), so a mouse click should
  // just ensure the menu is open, not toggle it closed. Keyboard activation
  // (Enter/Space) fires a synthetic click with event.detail === 0 — no real
  // pointer was involved — so that path still toggles for a11y.
  const onTriggerClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 0) {
      setProductOpen((open) => !open);
      return;
    }
    setProductOpen(true);
  }, []);

  const closeSheet = useCallback(() => setMenuOpen(false), []);

  const classes = [
    "nav",
    `nav--tone-${tone}`,
    overHero ? "nav--over-hero" : "nav--solid",
    scrolled ? "is-scrolled" : "",
    menuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const ariaCurrent = (key: PageKey) => (current === key ? "page" : undefined);

  return (
    <>
      <header className={classes}>
        <nav className="nav__bar" aria-label="Main">
          <a className="nav__wordmark" href={ROUTES.home} aria-current={ariaCurrent("home")}>
            Mercury
          </a>

          <div className="nav__links">
            <div
              className={`nav__item nav__item--menu${productOpen ? " is-open" : ""}`}
              ref={productWrapRef}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
              onBlur={onProductBlur}
            >
              <button
                type="button"
                className="nav__link nav__link--trigger"
                aria-expanded={productOpen}
                aria-controls={productMenuId}
                onClick={onTriggerClick}
              >
                Product
                <svg className="nav__chevron" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>

              <div className="nav__menu" id={productMenuId} hidden={!productOpen}>
                {PRODUCT_LINKS.map((item) => (
                  <a
                    key={item.key}
                    className="nav__menu-link"
                    href={ROUTES[item.key]}
                    aria-current={ariaCurrent(item.key)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a className="nav__link" href={ROUTES.trust} aria-current={ariaCurrent("trust")}>
              Trust
            </a>
            <a className="nav__link" href={ROUTES.company} aria-current={ariaCurrent("company")}>
              Company
            </a>
          </div>

          <div className="nav__actions">
            <a className="nav__cta" href={DEMO_BOOKING_MAILTO}>
              Book a demo
            </a>

            <button
              type="button"
              className="nav__burger"
              aria-expanded={menuOpen}
              aria-controls={sheetId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="nav__burger-box" aria-hidden="true">
                <span className="nav__burger-line" />
                <span className="nav__burger-line" />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile sheet. Kept mounted so the close transition can run; hidden
            from the a11y tree and from hit-testing when shut. */}
        <div className="nav__sheet" id={sheetId} hidden={!menuOpen}>
          <ul className="nav__sheet-list">
            <li>
              <span className="nav__sheet-group">Product</span>
            </li>
            {PRODUCT_LINKS.map((item) => (
              <li key={item.key}>
                <a
                  className="nav__sheet-link nav__sheet-link--sub"
                  href={ROUTES[item.key]}
                  aria-current={ariaCurrent(item.key)}
                  onClick={closeSheet}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="nav__sheet-link"
                href={ROUTES.trust}
                aria-current={ariaCurrent("trust")}
                onClick={closeSheet}
              >
                Trust
              </a>
            </li>
            <li>
              <a
                className="nav__sheet-link"
                href={ROUTES.company}
                aria-current={ariaCurrent("company")}
                onClick={closeSheet}
              >
                Company
              </a>
            </li>
          </ul>

          <a className="nav__sheet-cta" href={DEMO_BOOKING_MAILTO} onClick={closeSheet}>
            Book a demo
          </a>
        </div>
      </header>

      {/* Solid bars take layout space so pages need no top padding of their own. */}
      {!overHero && <div className="nav__spacer" aria-hidden="true" />}
    </>
  );
}
