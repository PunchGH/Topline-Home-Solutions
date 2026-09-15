import Image from "next/image";
import { services } from "@/lib/content";

const arrow = (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  const [featured, ...rest] = services;

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

        <div className="services__list">
          <div className="service-feature" id={`service-${featured.slug}`}>
            <div className="service-feature__media">
              <Image
                src="https://images.unsplash.com/photo-1753363562638-398f75158ea9?fm=jpg&q=80&w=1100&auto=format&fit=crop"
                alt="Attic insulation installed between wood roof beams"
                fill
                sizes="(max-width: 980px) 90vw, 45vw"
              />
              <div className="service-feature__tag">
                <img src={featured.icon} alt="" width={26} height={26} />
                <span>Featured Service</span>
              </div>
            </div>
            <div className="service-feature__body">
              <h3>{featured.name}</h3>
              <p>{featured.description}</p>
              <a className="service-row__link btn--sm" href={featured.href} target="_blank" rel="noopener noreferrer">
                Learn More {arrow}
              </a>
            </div>
          </div>

          {rest.map((s) => (
            <div className="service-row" id={`service-${s.slug}`} key={s.slug}>
              <img className="service-row__icon" src={s.icon} alt="" width={40} height={40} />
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <a className="service-row__link" href={s.href} target="_blank" rel="noopener noreferrer">
                Learn More {arrow}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
