import ParallaxImage from "./motion/ParallaxImage";
import RevealText from "./motion/RevealText";
import { Reveal, Stagger, StaggerItem } from "./motion/primitives";

const benefits = [
  {
    num: "01",
    title: "Year-Round Energy Savings",
    body: "Your home holds its temperature, so your system runs less, and you pay less.",
  },
  {
    num: "02",
    title: "Healthier Indoor Comfort",
    body: "Cleaner air and steady temperatures make every room feel better.",
  },
  {
    num: "03",
    title: "Lasting Home Protection",
    body: "Moisture control protects against mold and water damage, and raises your home's value.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="section section--steel-pale">
      <div className="wrap">
        <div className="trust">
          <div className="trust__media">
            <ParallaxImage
              src="https://plus.unsplash.com/premium_photo-1661688361733-a50696e91db6?fm=jpg&q=80&w=1000&auto=format&fit=crop"
              alt="Family relaxing comfortably at home"
              sizes="(max-width: 980px) 90vw, 38vw"
            />
          </div>
          <div className="trust__body">
            <RevealText text="Durable Home Insulation Solutions You Can Trust" />
            <Reveal as="p" delay={0.2}>
              Homeowners trust TopLine Home Solutions for insulation that truly
              lasts, backed by 20+ years of experience from the first inspection
              to the final walkthrough.
            </Reveal>
            <Reveal className="hero__ctas" style={{ marginTop: 34 }} delay={0.3}>
              <a className="btn btn--amber" href="#contact">Schedule Now</a>
              <a className="btn btn--ghost-dark" href="#services">View All Services</a>
            </Reveal>
          </div>
        </div>

        <Stagger className="trust__cards" stagger={0.14}>
          {benefits.map((b) => (
            <StaggerItem className="trust-card" key={b.num} y={60}>
              <div className="trust-card__num">{b.num}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
