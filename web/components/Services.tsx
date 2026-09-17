import Image from "next/image";
import Link from "next/link";
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
            to achieve maximum efficiency in your home. Comprehensive protection,
            not temporary fixes, built for the Canadian climate.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <Link className="service-card" id={`service-${s.slug}`} key={s.slug} href={s.href}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
