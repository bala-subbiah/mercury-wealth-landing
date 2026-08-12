import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted variable fonts — must load before the design-token stylesheets
// so the font-family values in tokens.css resolve on first paint.
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./styles/tokens.css";
import "./styles/base.css";

import CockpitApp from "./CockpitApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CockpitApp />
  </StrictMode>,
);
