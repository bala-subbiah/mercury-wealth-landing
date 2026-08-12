import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted variable fonts — must load before the design-token stylesheets
// so the font-family values in tokens.css resolve on first paint.
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./styles/tokens.css";
import "./styles/base.css";

import App from "./App.tsx";
import RecreationsPreview from "./dev/RecreationsPreview.tsx";

// Dev-only escape hatch: `?preview=recreations` renders the product-UI
// recreations in isolation for validation. App is the default in every other
// case — the preview is never part of the production page flow.
const preview = new URLSearchParams(window.location.search).get("preview");

createRoot(document.getElementById("root")!).render(
  <StrictMode>{preview === "recreations" ? <RecreationsPreview /> : <App />}</StrictMode>,
);
