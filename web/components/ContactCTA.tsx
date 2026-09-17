import { offices } from "@/lib/content";
import QuoteForm from "./QuoteForm";
import RevealText from "./motion/RevealText";
import { Reveal, Stagger, StaggerItem } from "./motion/primitives";

export default function ContactCTA() {
  return (
    <section id="contact" className="section section--ink">
      <div className="wrap cta">
        <div className="cta__info">
          <RevealText text="Reach Out Today!" />
          <Reveal as="p" delay={0.15}>
            Ready for a warmer winter, a cooler summer, and a healthier home?
            Contact us and let our professionals build a plan for your home.
          </Reveal>

          <Stagger className="cta__offices" stagger={0.15} delay={0.2}>
            {Object.values(offices).map((office) => (
              <StaggerItem className="cta__office" key={office.id} y={36}>
                <div className="cta__office-city">
                  {office.city}, {office.region}
                </div>
                <a className="cta__office-phone" href={office.phoneHref}>
                  {office.phone}
                </a>
                <address className="cta__office-addr">
                  <a href={office.mapHref} target="_blank" rel="noopener noreferrer">
                    {office.address}
                  </a>
                </address>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal x={80} y={0} amount={0.2} delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
