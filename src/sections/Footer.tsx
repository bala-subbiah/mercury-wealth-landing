import FluidGradientText from "../components/FluidGradientText";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONVERSATION_MAILTO,
  DEMO_LINK_PROPS,
  LINKEDIN_URL,
} from "../links";
import "./Footer.css";

/* Copy — docs/copy-deck.md §15, extended for v2 (docs/v2-plan.md §2 and §4
   P0 items 1–3): the footer carries the standing CTA, a real contact route,
   real legal pages, and the full engine list.

   One structure, identical on all seven pages. Every destination is a page
   that exists, so there are no page-aware anchors here any more: the footer
   used to switch its hrefs on a `page` prop because it pointed at section ids
   that only some pages had. The four engines without pages are listed as
   plain text rather than links — naming them is honest, linking them would
   not be. */
const TAGLINE = "See the whole book. Act with governance.";
const CTA = "Open the live demo";

interface FooterEntry {
  label: string;
  /** Absent for the engines that have no page yet: rendered as plain text. */
  href?: string;
  /** Off-site destinations open in a new tab. */
  external?: boolean;
}

/* The six engines, in the home grid's order (EngineGrid.tsx). Two have pages. */
const PRODUCT_ENTRIES: FooterEntry[] = [
  { label: "Mercury Cockpit", href: "/cockpit/" },
  { label: "Document Intelligence", href: "/document-intelligence/" },
  { label: "Workflow Automation" },
  { label: "Relationship Scribe" },
  { label: "Book-aware Research" },
  { label: "Compliance Copilot" },
];

const COMPANY_ENTRIES: FooterEntry[] = [
  { label: "Company", href: "/company/" },
  { label: "Trust & Security", href: "/trust/" },
  { label: "Privacy", href: "/legal/privacy/" },
  { label: "Terms", href: "/legal/terms/" },
];

const CONTACT_ENTRIES: FooterEntry[] = [
  { label: CONTACT_EMAIL, href: CONTACT_MAILTO },
  { label: "Request a conversation", href: CONVERSATION_MAILTO },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
];

const PRESENCE = "HONG KONG · SINGAPORE";
const ENTITY = "© Mercury Wealth";

function FooterColumn({
  title,
  entries,
  className,
}: {
  title: string;
  entries: FooterEntry[];
  className?: string;
}) {
  return (
    <div className={["footer-column", className].filter(Boolean).join(" ")}>
      <p className="mono footer-column-title">{title}</p>
      <nav className="footer-links" aria-label={title}>
        {entries.map((entry) =>
          entry.href ? (
            <a
              className="footer-link"
              key={entry.label}
              href={entry.href}
              {...(entry.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {entry.label}
            </a>
          ) : (
            <span className="footer-item" key={entry.label}>
              {entry.label}
            </span>
          ),
        )}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-lead">
            <p className="footer-tagline">{TAGLINE}</p>
            <a className="cta-primary footer-cta" {...DEMO_LINK_PROPS} data-demo-cta>
              {CTA}
            </a>
          </div>

          <div className="footer-sitemap">
            <FooterColumn title="Product" entries={PRODUCT_ENTRIES} />
            <FooterColumn title="Company" entries={COMPANY_ENTRIES} />
            <FooterColumn
              title="Contact"
              entries={CONTACT_ENTRIES}
              className="footer-column--contact"
            />
          </div>
        </div>

        <FluidGradientText className="footer-mark">MERCURY</FluidGradientText>

        <div className="mono footer-foot">
          <span>{PRESENCE}</span>
          <span>{ENTITY}</span>
        </div>
      </div>
    </footer>
  );
}
