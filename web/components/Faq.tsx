"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import RevealText from "./motion/RevealText";
import { Reveal, Stagger, StaggerItem } from "./motion/primitives";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--soft">
      <div className="wrap">
        <div className="section__head">
          <RevealText text="Questions, Answered Straight" />
        </div>
        <Stagger className="faq__list" stagger={0.08}>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <StaggerItem className="faq-item" data-open={open} key={item.q} y={28}>
                <button
                  type="button"
                  className="faq-item__q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.q}
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
                <div className="faq-item__a">
                  <div className="faq-item__a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal as="p" className="faq__disclosure" y={16}>
          These answers were drafted from our real service details for this
          prototype. We are happy to refine the wording together before launch.
        </Reveal>
      </div>
    </section>
  );
}
