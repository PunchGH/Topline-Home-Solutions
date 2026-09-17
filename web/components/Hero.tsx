"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./motion/RevealText";
import { EASE, useMediaQuery } from "./motion/primitives";

const POSTER =
  "https://plus.unsplash.com/premium_photo-1661542617132-75ae2e1f6fbc?fm=jpg&q=80&w=1800&auto=format&fit=crop";
const VIDEO = "https://videos.pexels.com/video-files/2675565/2675565-sd_960_506_24fps.mp4";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const mounted = useMediaQuery("all");
  const narrow = useMediaQuery("(max-width: 640px)");
  const active = mounted && !reduce;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const insetX = useTransform(progress, (p) => p * (narrow ? 4 : 7));
  const insetY = useTransform(progress, (p) => p * (narrow ? 7 : 10));
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}%)`;
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -90]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section id="top" ref={ref} className={`hero-scroll${active ? " is-active" : ""}`}>
      <div className="hero">
        <motion.div className="hero__frame" style={active ? { clipPath } : undefined}>
          <motion.div className="hero__media" aria-hidden="true" style={active ? { scale: mediaScale } : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero__poster" src={POSTER} alt="" />
            <video className="hero__video" src={VIDEO} poster={POSTER} autoPlay muted loop playsInline preload="auto" />
          </motion.div>
          <div className="hero__scrim" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="hero__content"
          style={active ? { opacity: contentOpacity, y: contentY } : undefined}
        >
          <RevealText
            as="h1"
            mode="mount"
            className="hero__title"
            text="Boost Energy Efficiency and Indoor Air Quality"
            accent="Indoor Air Quality"
            delay={0.1}
          />
          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
          >
            Attic, Air Sealing &amp; Roof Specialists in Ottawa, ON &amp; Calgary, AB
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            <a className="btn btn--amber" href="#contact">Get Your Free Quote</a>
            <a className="btn btn--ghost-light" href="#services">View Our Services</a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="hero__scroll"
          aria-label="Scroll to the next section"
          style={active ? { opacity: cueOpacity } : undefined}
        >
          <span className="hero__scroll-line" aria-hidden="true" />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
