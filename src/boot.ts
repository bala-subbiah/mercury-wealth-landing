/* Every entry's first import.
   Loads the self-hosted variable fonts (before the token sheet, so the
   font-family values in tokens.css resolve on first paint), then the two
   global stylesheets, then starts cookieless analytics.

   Page entries: `import "../../boot.ts";` on line 1 of main.tsx. Nothing else
   should import fonts or the global sheets. */

import "@fontsource-variable/source-serif-4";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./styles/tokens.css";
import "./styles/base.css";

import { initAnalytics } from "./lib/analytics.ts";

initAnalytics();
