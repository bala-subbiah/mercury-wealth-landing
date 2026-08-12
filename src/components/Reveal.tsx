import { createElement } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

import { useInView } from "./product/useInView";
import { useReducedMotion } from "./product/useReducedMotion";

export interface RevealProps {
  children: ReactNode;
  /** Stagger, in ms, applied as a CSS transition-delay. */
  delay?: number;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * The page's one scroll-reveal primitive: an opacity + translateY fade-up that
 * fires once when the element enters view and never replays.
 *
 * Under `prefers-reduced-motion: reduce` — and when IntersectionObserver is
 * unavailable — the content renders in its final state with no transition at
 * all (design.md hard rule 5).
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView<HTMLElement>({
    enabled: !reducedMotion,
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });

  const state = reducedMotion ? "is-static" : inView ? "is-revealed" : "";
  const classes = ["reveal", state, className].filter(Boolean).join(" ");
  const merged = delay
    ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties)
    : style;

  return createElement(as, { ref, className: classes, style: merged }, children);
}
