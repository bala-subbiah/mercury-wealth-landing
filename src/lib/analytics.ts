import { inject } from "@vercel/analytics";

// Cookieless Vercel Analytics. Call once from each entry point (main.tsx,
// cockpit-main.tsx): inject() is idempotent-safe to call once per entry.
export function initAnalytics(): void {
  inject();
}
