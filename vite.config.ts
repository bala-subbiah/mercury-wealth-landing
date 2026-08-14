import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
//
// MPA: seven HTML entries, one per URL. Each folder's index.html carries that
// page's own <head> (title, description, canonical, og) and points at a
// matching src/pages/<page>/main.tsx. Paths are relative to the project root
// (Vite's default), so no Node path helpers (and no @types/node) are needed.
//
// Adding a page = new <folder>/index.html + src/pages/<page>/main.tsx + a line
// here + an entry in public/sitemap.xml.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cockpit: "cockpit/index.html",
        mercuryAi: "mercury-ai/index.html",
        trust: "trust/index.html",
        company: "company/index.html",
        legalPrivacy: "legal/privacy/index.html",
        legalTerms: "legal/terms/index.html",
      },
    },
  },
});
