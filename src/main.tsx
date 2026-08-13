import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted variable fonts — must load before the design-token stylesheets
// so the font-family values in tokens.css resolve on first paint.
import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./styles/tokens.css";
import "./styles/base.css";

import App from "./App.tsx";
import { initAnalytics } from "./lib/analytics.ts";

initAnalytics();

const root = createRoot(document.getElementById("root")!);

// Dev-only escape hatch: `?preview=recreations` renders the product-UI
// recreations in isolation for validation. `import.meta.env.DEV` is a
// build-time constant, so in a production build this whole branch — and the
// dynamic import it guards — is dead code that Vite/Rollup strips entirely.
// The preview module never ships in a production bundle and the query param
// has no effect outside `npm run dev`.
if (import.meta.env.DEV && new URLSearchParams(window.location.search).get("preview") === "recreations") {
  const RecreationsPreview = lazy(() => import("./dev/RecreationsPreview.tsx"));
  root.render(
    <StrictMode>
      <Suspense fallback={null}>
        <RecreationsPreview />
      </Suspense>
    </StrictMode>,
  );
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
