"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { EASE } from "./primitives";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  /** Parallax travel as a percentage of the frame height, each direction. */
  strength?: number;
  delay?: number;
};

// A photo that wipes open left to right as it enters, then drifts against the
// scroll. It fills its positioned parent, so decorative ::before brackets on
// that parent stay outside the clip.
//
// The in-view trigger lives on the unclipped outer layer: a target that is
// fully clipped by its own clip-path never reports as intersecting, so the
// wipe would never start.
export default function ParallaxImage({ src, alt, sizes, strength = 9, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  const wipe: Variants = {
    hidden: { clipPath: "inset(0% 100% 0% 0%)" },
    show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.15, ease: EASE, delay } },
  };

  return (
    <motion.div
      ref={ref}
      className="pimg"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="pimg__clip" variants={wipe}>
        <motion.div
          className="pimg__inner"
          style={{ y: reduce ? 0 : y, top: `-${strength + 2}%`, bottom: `-${strength + 2}%` }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
