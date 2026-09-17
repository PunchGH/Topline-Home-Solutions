"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "./primitives";

type Props = {
  text: string;
  /** Trailing words of `text` to set in <em> (the amber accent). */
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** "view" replays each time it scrolls in; "mount" plays once on load. */
  mode?: "view" | "mount";
  delay?: number;
};

const word: Variants = {
  hidden: { y: "115%", rotate: 5 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function RevealText({ text, accent, as = "h2", className, mode = "view", delay = 0 }: Props) {
  const Tag = as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2;
  const hasAccent = Boolean(accent && text.endsWith(accent));
  const base = hasAccent ? text.slice(0, text.length - accent!.length).trim() : text;
  const words = [
    ...base.split(/\s+/).filter(Boolean).map((w) => ({ w, em: false })),
    ...(hasAccent ? accent!.split(/\s+/).map((w) => ({ w, em: true })) : []),
  ];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
  };
  const trigger =
    mode === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: false, amount: 0.5 } };

  return (
    <Tag className={className} aria-label={text} variants={container} {...trigger}>
      {words.map(({ w, em }, i) => {
        const Outer = em ? "em" : "span";
        return (
          <span key={i} aria-hidden="true">
            <Outer className="rt-word">
              <motion.span className="rt-word__inner" variants={word}>
                {w}
              </motion.span>
            </Outer>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}
