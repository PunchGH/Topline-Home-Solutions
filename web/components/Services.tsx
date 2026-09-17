"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { services } from "@/lib/content";
import RevealText from "./motion/RevealText";
import { EASE, Reveal, useMediaQuery } from "./motion/primitives";

const arrow = (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const track: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 70, rotate: 1.5 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 768px)");
  const pinned = wide && !reduce;

  const distance = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());

  // The section is exactly as tall as the sticky viewport plus the sideways
  // travel, so one pixel of vertical scroll moves the cards one pixel.
  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const row = trackRef.current;
    if (!section || !sticky || !row) return;
    if (!pinned) {
      distance.set(0);
      return;
    }
    const measure = () => {
      const d = Math.max(0, row.offsetWidth - sticky.clientWidth);
      distance.set(d);
      section.style.height = `${sticky.offsetHeight + d}px`;
    };
    const ro = new ResizeObserver(measure);
    ro.observe(row);
    ro.observe(sticky);
    return () => {
      ro.disconnect();
      section.style.height = "";
    };
  }, [pinned, distance]);

  return (
    <section id="services" ref={sectionRef} className={`services-pin${pinned ? " is-pinned" : ""}`}>
      <div className="services-pin__sticky" ref={stickyRef}>
        <div className="wrap services-pin__head">
          <div className="section__head">
            <RevealText text="Professional Home & Attic Care Services" />
            <Reveal as="p" delay={0.2}>
              Our integrated solutions use durable materials and skilled craftsmanship
              to achieve maximum efficiency in your home. Comprehensive protection,
              not temporary fixes, built for the Canadian climate.
            </Reveal>
          </div>
          {pinned ? (
            <div className="services-pin__progress" aria-hidden="true">
              <motion.span style={{ scaleX: scrollYProgress }} />
            </div>
          ) : null}
        </div>

        <motion.div
          ref={trackRef}
          className="services__track"
          style={pinned ? { x } : undefined}
          variants={track}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          {services.map((s) => (
            <motion.div className="service-card-wrap" key={s.slug} variants={card}>
              <Link className="service-card" id={`service-${s.slug}`} href={s.href}>
                <div className="service-card__media">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
                  />
                </div>
                <div className="service-card__body">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <span className="service-card__link">
                    Learn More {arrow}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
