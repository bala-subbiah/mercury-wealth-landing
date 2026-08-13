import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
//
// MPA: seven HTML entries — home at `/`, the two engine pages (`/cockpit/`
// and `/document-intelligence/`), `/trust/`, `/company/`, and the two legal
// pages under `/legal/`. Each has its own main*.tsx (see the matching
// index.html). Paths are relative to the project root (Vite's default), so no
// Node path helpers (and no @types/node) are needed here.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cockpit: "cockpit/index.html",
        documentIntelligence: "document-intelligence/index.html",
        trust: "trust/index.html",
        company: "company/index.html",
        legalPrivacy: "legal/privacy/index.html",
        legalTerms: "legal/terms/index.html",
      },
    },
  },
});
