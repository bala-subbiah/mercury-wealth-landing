import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

/**
 * One-way "has this element been scrolled into view yet" flag.
 *
 * Returns a ref to attach to the element plus the boolean. Once true it stays
 * true — reveals never replay on scroll-back. When IntersectionObserver is
 * unavailable the flag starts true so content is never trapped invisible.
 */
export function useInView<T extends HTMLElement>(
  options?: { rootMargin?: string; threshold?: number; enabled?: boolean },
): [RefObject<T | null>, boolean] {
  const enabled = options?.enabled ?? true;
  const rootMargin = options?.rootMargin ?? "0px 0px -12% 0px";
  const threshold = options?.threshold ?? 0.25;

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled, rootMargin, threshold]);

  return [ref, inView];
}

export default useInView;
