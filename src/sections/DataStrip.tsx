import { useEffect, useState } from "react";

import { useReducedMotion } from "../components/product/useReducedMotion";
import "./DataStrip.css";

/* The copy deck has no marketing figures for this strip — by design: demo
   dataset numbers never become marketing claims (deck §"Pre-publish copy
   checklist", item 7). So the strip is dressed as what it is: the book-of-
   business readout, carrying the same header figures as the CockpitDashboard
   recreation, under the same as-of stamp. */
const STAMP = "BOOK OF BUSINESS · LAU KA-MING · FRI 19 JUN 2026 · 07:31 HKT";

type Tone = "neutral" | "up" | "down" | "watch";

interface Item {
  label: string;
  values: string[];
  tone?: Tone;
}

const ITEMS: Item[] = [
  { label: "TOTAL AUM", values: ["US$57.7M", "US$57.8M"] },
  { label: "TODAY", values: ["+US$165k", "+US$171k"], tone: "up" },
  { label: "NNM MTD", values: ["−US$250k"], tone: "down" },
  { label: "HOUSEHOLDS", values: ["4"] },
  { label: "NEEDS ATTENTION", values: ["14", "13"], tone: "watch" },
];

const TICKABLE = ITEMS.map((item, index) => (item.values.length > 1 ? index : -1)).filter(
  (index) => index >= 0,
);

const CYCLE_MS = 4000;
const DIP_MS = 220;

const TONE_CLASS: Record<Tone, string> = {
  neutral: "",
  up: "strip-value--up",
  down: "strip-value--down",
  watch: "strip-value--watch",
};

/**
 * The signature ticking data strip (design.md hard rule 6).
 *
 * One value at a time dips out and returns at a plausible neighbouring
 * figure — opacity only. Under reduced motion nothing ticks: the strip
 * renders its first values and stays there.
 */
export default function DataStrip() {
  const reducedMotion = useReducedMotion();
  const [variant, setVariant] = useState<number[]>(() => ITEMS.map(() => 0));
  const [dimmed, setDimmed] = useState<number | null>(null);

  useEffect(() => {
    if (reducedMotion || TICKABLE.length === 0) return;

    let step = 0;
    let dipTimer: number | undefined;

    const cycle = window.setInterval(() => {
      const target = TICKABLE[step % TICKABLE.length];
      step += 1;
      setDimmed(target);
      dipTimer = window.setTimeout(() => {
        setVariant((current) =>
          current.map((value, index) =>
            index === target ? (value + 1) % ITEMS[index].values.length : value,
          ),
        );
        setDimmed(null);
      }, DIP_MS);
    }, CYCLE_MS);

    return () => {
      window.clearInterval(cycle);
      if (dipTimer) window.clearTimeout(dipTimer);
    };
  }, [reducedMotion]);

  return (
    <section className="strip" aria-label="Book of business readout">
      <div className="container strip-inner mono">
        <span className="strip-stamp">{STAMP}</span>
        <div className="strip-items">
          {ITEMS.map((item, index) => (
            <span className="strip-item" key={item.label}>
              <span className="strip-label">{item.label}</span>
              <span
                className={[
                  "strip-value",
                  TONE_CLASS[item.tone ?? "neutral"],
                  dimmed === index ? "strip-value--dim" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.values[variant[index]]}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
