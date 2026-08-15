import { useEffect, useRef, useState } from "react";
import "./RotatingStatement.css";

/* Company opener — rotating-word statement band (design.md Amendment 3:
   monochrome system, motion rules). Sits above Head as the page's true
   opener; it is a band, not a hero — Nav stays solid, height caps ~60-70vh.

   Fixed words "We shape" + one rotating word, cycling through the five
   nouns that map to the site's already-audited story: the book, the
   morning briefing, proposals, the audit trail, daily work. No new claims.

   Monochrome only (Amendment 3): both the fixed text and the rotating word
   are --color-ink. The only accent is a drawn underline (scaleX) beneath
   the rotating word. Word swap is translateY + opacity — old word up and
   out, new word up and in — transform/opacity only, var(--ease-out), no
   transition: all (design.md hard rule 5).

   The rotating container reserves the width of "Operations." (the longest
   word) at all times via a hidden sizer, so the line never reflows between
   words.

   Reduced motion: the animated line is replaced with a single static line
   ("We shape Wealth.") — no cycling, no underline sweep. Screen readers
   never see the animated line at all (aria-hidden); they get one stable
   sentence via a visually-hidden paragraph, always present. */

const WORDS = ["Wealth.", "Mornings.", "Decisions.", "Evidence.", "Operations."];
const CYCLE_MS = 2800;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function RotatingStatement() {
  const [index, setIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const pausedRef = useRef(false);
  const prevIndexRef = useRef(0);

  // Cycle the word. Skipped entirely (no timer) under reduced motion.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setIndex((current) => (current + 1) % WORDS.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, []);

  // Whenever the active word changes, mark the previous one as "leaving" so
  // it can animate up-and-out while the new word animates up-and-in.
  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev !== index) {
      setLeavingIndex(prev);
      prevIndexRef.current = index;
    }
  }, [index]);

  // Backstop for onAnimationEnd: a backgrounded tab can throttle/pause CSS
  // animations, so the leave animation may never fire its end event. Clear
  // the leaving word on a timer too, slightly after --dur-med (450ms).
  useEffect(() => {
    if (leavingIndex === null) return;
    const id = window.setTimeout(() => setLeavingIndex(null), 600);
    return () => window.clearTimeout(id);
  }, [leavingIndex]);

  return (
    <section
      className="co-rotate band band--paper"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="container container--narrow co-rotate__inner">
        {/* Reduced-motion fallback: shown only under prefers-reduced-motion. */}
        <p className="co-rotate__static" aria-hidden="true">
          We shape Wealth.
        </p>

        {/* Animated line: hidden from assistive tech entirely — the sr-only
            sentence below is the one stable version screen readers get. */}
        <p className="co-rotate__line" aria-hidden="true">
          <span className="co-rotate__fixed">We shape</span>
          <span className="co-rotate__wordwrap">
            <span className="co-rotate__sizer">Operations.</span>

            {leavingIndex !== null && (
              <span
                key={`leave-${leavingIndex}`}
                className="co-rotate__word co-rotate__word--leave"
                onAnimationEnd={() => setLeavingIndex(null)}
              >
                {WORDS[leavingIndex]}
              </span>
            )}

            <span key={`enter-${index}`} className="co-rotate__word co-rotate__word--enter">
              {WORDS[index]}
              <span className="co-rotate__underline" />
            </span>
          </span>
        </p>

        <p className="sr-only">
          We shape wealth, mornings, decisions, evidence and operations.
        </p>
      </div>
    </section>
  );
}
