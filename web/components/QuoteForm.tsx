"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-card form-card--done" role="status" aria-live="polite">
        <svg className="form-card__check" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M6 16.5l6.5 6.5L26 9.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
          />
        </svg>
        <h3>Your message was received</h3>
        <p>
          This is a prototype, so nothing was actually sent. On the real site,
          our team would follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={onSubmit}>
        <p className="form-card__req">&ldquo;*&rdquo; indicates required fields</p>
        <div className="form-row">
          <div className="field">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what the attic is doing, or leave this blank."
          />
        </div>
        <button type="submit" className="btn btn--amber">Send Message</button>
        <p className="form-note">Prototype form. No message is actually sent.</p>
      </form>
    </div>
  );
}
