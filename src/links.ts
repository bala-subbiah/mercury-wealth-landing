/* Outbound destinations, in one place.
   Every "Open the live demo" placement, the contact mailbox, and the company
   LinkedIn resolve through here so a change is one edit, not nine. Source:
   docs/v2-plan.md §6 decisions 1 and 2 (owner-approved 2026-08-13). */

/** The deployed product demo. Opens in a new tab from every placement. */
export const DEMO_URL = "https://mercury-wealth.vercel.app";

/** The one contact mailbox on the site. */
export const CONTACT_EMAIL = "oscar.chan@mercury-digital.io";

/** Mercury Wealth's company page. */
export const LINKEDIN_URL = "https://www.linkedin.com/company/mercury-digital-wealth/";

/** The secondary path: available for anyone who would rather talk first,
 *  never a condition of seeing the product. The subject is pre-filled so the
 *  reply thread arrives already labelled. */
export const CONVERSATION_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "A conversation about Mercury",
)}`;

/** Plain mailto, no subject — used where the address itself is the link text. */
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Backs the sitewide CTA button ("Book a demo"), per owner directive
 *  2026-08-15 replacing the "Request a conversation" label. The softer
 *  narrative conversation links (CONVERSATION_MAILTO) are unaffected. */
export const DEMO_BOOKING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Book a Mercury demo",
)}`;

/** Spread onto every demo anchor: new tab, no window.opener handle. */
export const DEMO_LINK_PROPS = {
  href: DEMO_URL,
  target: "_blank",
  rel: "noopener",
} as const;
