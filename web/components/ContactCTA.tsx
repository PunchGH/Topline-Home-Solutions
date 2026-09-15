"use client";

import { useState, type FormEvent } from "react";
import { useCity } from "./CityContext";
import { offices } from "@/lib/content";
import CityToggle from "./CityToggle";

export default function ContactCTA() {
  const { city } = useCity();
  const office = offices[city];
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section--ink">
      <div className="wrap cta">
        <div className="cta__info">
          <h2>Reach Out Today!</h2>
          <p>
            Ready for a warmer winter, a cooler summer, and a healthier home?
            Contact us and let our professionals build a plan for your home.
          </p>

          <CityToggle />

          <div className="cta__office">
            <div className="cta__office-city">{office.city}, {office.region}</div>
            <a className="cta__office-phone" href={office.phoneHref}>{office.phone}</a>
            <address className="cta__office-addr">
              <a href={office.mapHref} target="_blank" rel="noopener noreferrer">{office.address}</a>
            </address>
          </div>
        </div>

        <div className="form-card">
          {submitted ? (
            <div>
              <h3 style={{ marginBottom: 12 }}>Thanks — message received</h3>
              <p style={{ color: "var(--ink-soft)" }}>
                This is a prototype, so nothing was actually sent. In the real
                site, our team would follow up shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <p className="form-card__req">&ldquo;*&rdquo; indicates required fields</p>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" type="tel" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <button type="submit" className="btn btn--amber">Send Message</button>
              <p className="form-note">Prototype form — no message is actually sent.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
