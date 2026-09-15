"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--soft">
      <div className="wrap">
        <div className="section__head">
          <h2>Questions, Answered Straight</h2>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className="faq-item" data-open={open} key={item.q}>
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
              </div>
            );
          })}
        </div>
        <p className="faq__disclosure">
          These answers were drafted from our real service details for this prototype — happy to refine the wording together before launch.
        </p>
      </div>
    </section>
  );
}
