import Image from "next/image";
import { services } from "@/lib/content";

const arrow = (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>Professional Home &amp; Attic Care Services</h2>
          <p>
            Our integrated solutions use durable materials and skilled craftsmanship
            to achieve maximum efficiency in your home — comprehensive protection,
            not temporary fixes, built for the Canadian climate.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" id={`service-${s.slug}`} key={s.slug}>
              <div className="service-card__media">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
                />
                <div className="service-card__icon">
                  <img src={s.icon} alt="" width={22} height={22} />
                </div>
              </div>
              <div className="service-card__body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <a className="service-card__link" href={s.href} target="_blank" rel="noopener noreferrer">
                  Learn More {arrow}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
