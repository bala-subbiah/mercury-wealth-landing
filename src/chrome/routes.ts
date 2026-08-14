/* Internal page paths, in one place.
   Trailing slashes are required: vercel.json sets `trailingSlash: true`, so
   `/cockpit` would take a redirect hop. Outbound links (demo, mailto,
   LinkedIn) live in src/links.ts instead. */

export const ROUTES = {
  home: "/",
  cockpit: "/cockpit/",
  mercuryAi: "/mercury-ai/",
  trust: "/trust/",
  company: "/company/",
  privacy: "/legal/privacy/",
  terms: "/legal/terms/",
} as const;

/** Which nav item is the current page, for aria-current. */
export type PageKey = keyof typeof ROUTES;
