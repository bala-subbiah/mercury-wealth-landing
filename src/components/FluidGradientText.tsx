import { useId, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import { useReducedMotion } from "./product/useReducedMotion";
import "./FluidGradientText.css";

/* Geometry is in user-space units — the gradient is `userSpaceOnUse`, so the
   motion values below are viewBox coordinates, not pixels. */
const VIEW_W = 1000;
const VIEW_H = 170;
const BASELINE = 126;

/* The gradient's two stops sit at 0.625 and 1.0, so the lit zone is the last
   37.5% of the span. SPAN/ORIGIN are chosen so that at rest the ramp begins
   just inside the word's left edge and reaches full luminance at its right;
   TRAVEL is how far the pointer drags that ramp across the letterforms. */
const SPAN = VIEW_W * 1.75;
const TRAVEL = VIEW_W * 1.3;
const ORIGIN = -VIEW_W * 1.5;

const REST = 0.5;

export interface FluidGradientTextProps {
  /** The wordmark itself. Single word — it is set as one SVG text run. */
  children?: string;
  className?: string;
}

/**
 * The footer wordmark: SVG text filled by a pointer-reactive monochrome
 * luminance gradient, over a ghost outline of the same letterforms.
 *
 * Monochrome only — the fill is `currentColor` at two opacities, so the mark
 * never becomes a coloured gradient (design.md hard rule 6 and the banned
 * list). Under `prefers-reduced-motion: reduce` the gradient is frozen at the
 * rest position and no spring is created.
 */
export default function FluidGradientText({
  children = "MERCURY",
  className,
}: FluidGradientTextProps) {
  const reducedMotion = useReducedMotion();
  const gradientId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement | null>(null);

  const pointer = useMotionValue(REST);
  const smoothed = useSpring(pointer, { stiffness: 150, damping: 25 });
  const x1 = useTransform(smoothed, (value) => ORIGIN + value * TRAVEL);
  const x2 = useTransform(x1, (value) => value + SPAN);

  const track = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    if (rect.width === 0) return;
    const ratio = (event.clientX - rect.left) / rect.width;
    pointer.set(Math.min(1, Math.max(0, ratio)));
  };

  const rest = () => {
    if (reducedMotion) return;
    pointer.set(REST);
  };

  const staticX1 = ORIGIN + REST * TRAVEL;

  return (
    <div
      ref={hostRef}
      className={["fgt", className].filter(Boolean).join(" ")}
      onMouseMove={track}
      onMouseLeave={rest}
      onPointerDown={track}
      onPointerUp={rest}
      onPointerCancel={rest}
    >
      <svg
        className="fgt-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={children}
      >
        <defs>
          {reducedMotion ? (
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1={staticX1}
              y1="0"
              x2={staticX1 + SPAN}
              y2="0"
            >
              <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          ) : (
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1={x1}
              y1="0"
              x2={x2}
              y2="0"
            >
              <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" />
            </motion.linearGradient>
          )}
        </defs>

        {/* Ghost outline — keeps the unlit letterforms legible. */}
        <text
          className="fgt-text"
          x="50%"
          y={BASELINE}
          textAnchor="middle"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="2"
          aria-hidden="true"
        >
          {children}
        </text>

        {/* Lit fill. */}
        <text
          className="fgt-text"
          x="50%"
          y={BASELINE}
          textAnchor="middle"
          fill={`url(#${gradientId})`}
          aria-hidden="true"
        >
          {children}
        </text>
      </svg>
    </div>
  );
}
