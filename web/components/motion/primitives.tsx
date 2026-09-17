"use client";

import { motion, MotionConfig, useReducedMotion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useSyncExternalStore } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

const tags = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  ul: motion.ul,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
} as const;
type Tag = keyof typeof tags;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// False on the server and on the hydrating render, so pinned layouts never
// cause a hydration mismatch; they switch on right after mount.
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  x?: number;
  y?: number;
  amount?: number;
};

export function Reveal({ children, as = "div", className, style, delay = 0, x = 0, y = 36, amount = 0.3 }: RevealProps) {
  const M = tags[as];
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

type StaggerProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
};

export function Stagger({ children, as = "div", className, stagger = 0.1, delay = 0, amount = 0.2 }: StaggerProps) {
  const M = tags[as];
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <M className={className} variants={variants} initial="hidden" whileInView="show" viewport={{ once: false, amount }}>
      {children}
    </M>
  );
}

export const staggerItem = (y = 44): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
});

type StaggerItemProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  y?: number;
  "data-open"?: boolean;
};

export function StaggerItem({ children, as = "div", className, y = 44, ...rest }: StaggerItemProps) {
  const M = tags[as];
  return (
    <M className={className} variants={staggerItem(y)} {...rest}>
      {children}
    </M>
  );
}

export function useMotionReduced() {
  return useReducedMotion() ?? false;
}
