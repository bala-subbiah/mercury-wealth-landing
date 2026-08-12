import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
//
// MPA: two HTML entries — home at `/` and the flagship cockpit page at
// `/cockpit/`. Each has its own main*.tsx (see index.html / cockpit/index.html).
// Paths are relative to the project root (Vite's default), so no Node path
// helpers (and no @types/node) are needed here.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cockpit: "cockpit/index.html",
      },
    },
  },
});
