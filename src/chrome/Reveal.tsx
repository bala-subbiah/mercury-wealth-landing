import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import "./Reveal.css";

/* The site's one scroll-in motion: a short fade + translate-up, once, when an
   element first reaches the viewport. Transform and opacity only, var(--ease-out),
   var(--dur-med) — and nothing at all under prefers-reduced-motion, where the
   content simply starts visible.

   Component form (the usual case):
     <Reveal><h2>Prepped overnight</h2></Reveal>
     <Reveal as="li" delay={80}>…</Reveal>     // stagger a list: 0, 80, 160
     <Reveal className="card">…</Reveal>       // your classes are kept

   Hook form, when you need the flag rather than a wrapper element:
     const { ref, shown } = useReveal<HTMLDivElement>();
     <div ref={ref} className={shown ? "is-shown" : ""}>…</div>

   Keep delays under ~200ms; the reader should never wait on chrome. */

const OPTIONS: IntersectionObserverInit = {
  // Fire a little before the element is fully on screen, and only once it is
  // meaningfully in view.
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Observes an element and flips `shown` true the first time it enters view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    // No IntersectionObserver, or the reader asked for less motion: show it now.
    if (!node || prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        setShown(true);
        observer.disconnect();
      }
    }, OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger in ms. Keep to 0–200. */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, as, delay = 0, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={["reveal", shown ? "is-shown" : "", className].filter(Boolean).join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
