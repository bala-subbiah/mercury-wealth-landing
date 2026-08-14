import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";

/* One React root, mounted into #root. Every page entry ends with
   `mount(<SomePage />)` — no page should call createRoot itself. */
export function mount(page: ReactNode): void {
  const container = document.getElementById("root");
  if (!container) throw new Error('Missing #root — check the entry HTML.');
  createRoot(container).render(<StrictMode>{page}</StrictMode>);
}
