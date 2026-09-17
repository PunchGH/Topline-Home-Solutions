"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE } from "./primitives";

type Props = { to: number; suffix?: string; className?: string; duration?: number };

// Writes straight to the text node, so counting never re-renders React.
// Server output is the final number, which is also what no-JS visitors see.
export default function CountUp({ to, suffix = "", className, duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.8 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = numRef.current;
    if (!node) return;
    if (reduce) {
      node.textContent = String(to);
      return;
    }
    if (!inView) {
      node.textContent = "0";
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        <span ref={numRef}>{to}</span>
        {suffix}
      </span>
    </span>
  );
}
