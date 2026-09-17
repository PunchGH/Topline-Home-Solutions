import { offices } from "@/lib/content";
import QuoteForm from "./QuoteForm";

export default function ContactCTA() {
  return (
    <section id="contact" className="section section--ink">
      <div className="wrap cta">
        <div className="cta__info">
          <h2>Reach Out Today!</h2>
          <p>
            Ready for a warmer winter, a cooler summer, and a healthier home?
            Contact us and let our professionals build a plan for your home.
          </p>

          <div className="cta__offices">
            {Object.values(offices).map((office) => (
              <div className="cta__office" key={office.id}>
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
              </div>
            ))}
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
