"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/content";
import RevealText from "./motion/RevealText";
import { Reveal, useMediaQuery } from "./motion/primitives";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

type Step = (typeof processSteps)[number];

function ProcessStep({
  step,
  fill,
  threshold,
  numRef,
}: {
  step: Step;
  fill: MotionValue<number>;
  threshold: MotionValue<number>;
  numRef: (el: HTMLDivElement | null) => void;
}) {
  // 0 until the line reaches this circle, 1 once it has passed it.
  const on = useTransform(() => clamp01((fill.get() - threshold.get() + 0.035) / 0.035));
  const backgroundColor = useTransform(on, [0, 1], ["#223138", "#e3960c"]);
  const color = useTransform(on, [0, 1], ["#e3960c", "#15130f"]);
  const scale = useTransform(on, [0, 0.5, 1], [1, 1.22, 1]);
  const opacity = useTransform(on, [0, 1], [0.34, 1]);
  const y = useTransform(on, [0, 1], [16, 0]);

  return (
    <div className="process__step">
      <motion.div ref={numRef} className="process__num" style={{ backgroundColor, color, scale }}>
        {step.step}
      </motion.div>
      <motion.div style={{ opacity, y }}>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLDivElement | null)[]>([]);

  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 981px)");
  const pinned = wide && !reduce;

  // mode: 0 = flowing (mobile, fills as the steps scroll past), 1 = pinned, 2 = reduced (all on)
  const mode = useMotionValue(0);
  const { scrollYProgress: pinProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const { scrollYProgress: flowProgress } = useScroll({ target: trackRef, offset: ["start 80%", "end 60%"] });
  // Every source is read up front: the transform only subscribes to the values
  // it reads, so a branch that skipped pinProgress would never hear it change.
  const raw = useTransform(() => {
    const m = mode.get();
    const pin = pinProgress.get();
    const flow = flowProgress.get();
    if (m === 2) return 1;
    if (m === 1) return clamp01((pin - 0.1) / 0.72);
    return flow;
  });
  const fill = useSpring(raw, { stiffness: 160, damping: 32, mass: 0.4 });

  const t0 = useMotionValue(0);
  const t1 = useMotionValue(1 / 3);
  const t2 = useMotionValue(2 / 3);
  const t3 = useMotionValue(1);
  const thresholds = [t0, t1, t2, t3];

  useEffect(() => {
    mode.set(reduce ? 2 : pinned ? 1 : 0);
    if (reduce) fill.jump(1);
  }, [reduce, pinned, mode, fill]);

  // Measure where each circle actually sits along the line, so the step lights
  // up exactly when the fill reaches its center at every viewport size.
  useEffect(() => {
    const line = lineRef.current;
    const trackEl = trackRef.current;
    if (!line || !trackEl) return;
    const tvals = [t0, t1, t2, t3];
    const measure = () => {
      const nums = numRefs.current;
      if (wide) {
        line.style.bottom = "";
        const lr = line.getBoundingClientRect();
        nums.forEach((n, i) => {
          if (!n) return;
          const r = n.getBoundingClientRect();
          tvals[i].set(clamp01((r.left + r.width / 2 - lr.left) / lr.width));
        });
      } else {
        const tr = trackEl.getBoundingClientRect();
        const last = nums[nums.length - 1];
        if (last) {
          const r = last.getBoundingClientRect();
          line.style.bottom = `${tr.bottom - (r.top + r.height / 2)}px`;
        }
        const lr = line.getBoundingClientRect();
        nums.forEach((n, i) => {
          if (!n) return;
          const r = n.getBoundingClientRect();
          tvals[i].set(clamp01((r.top + r.height / 2 - lr.top) / Math.max(1, lr.height)));
        });
      }
    };
    const ro = new ResizeObserver(measure);
    ro.observe(trackEl);
    return () => ro.disconnect();
  }, [wide, t0, t1, t2, t3]);

  return (
    <section id="process" ref={sectionRef} className={`section section--steel-deep process${pinned ? " is-pinned" : ""}`}>
      <div className="process__sticky">
        <div className="wrap">
          <div className="process__head">
            <RevealText text="From First Call to Final Walkthrough" />
            <Reveal as="p" delay={0.2}>
              A straightforward process, the same way every time, with no surprises between the quote and the finished job.
            </Reveal>
          </div>
          <div className="process__track" ref={trackRef}>
            <div className="process__line" ref={lineRef} aria-hidden="true">
              <motion.div className="process__line-fill" style={wide ? { scaleX: fill } : { scaleY: fill }} />
            </div>
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.step}
                step={step}
                fill={fill}
                threshold={thresholds[i]}
                numRef={(el) => {
                  numRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
