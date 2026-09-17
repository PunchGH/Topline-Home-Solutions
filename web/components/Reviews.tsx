import { reviews } from "@/lib/content";
import RevealText from "./motion/RevealText";
import { Reveal, Stagger, StaggerItem } from "./motion/primitives";

const Star = () => (
  <svg viewBox="0 0 20 20" fill="#e3960c" aria-hidden="true">
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
  </svg>
);

const Stars = () => (
  <div className="gstars" aria-label="5 out of 5 stars">
    <Star /><Star /><Star /><Star /><Star />
  </div>
);

const GoogleG = () => (
  <svg className="gsummary__logo" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

export default function Reviews() {
  return (
    <section className="section section--steel-pale">
      <div className="wrap">
        <div className="section__head">
          <RevealText text="What Homeowners Say" />
          <Reveal as="p" delay={0.15}>Real reviews from real customers will replace these before launch.</Reveal>
          <Reveal as="span" className="reviews__flag" delay={0.25}>
            Prototype widget, not a live Google Business Profile
          </Reveal>
        </div>

        <Reveal className="gsummary" y={0} x={-50}>
          <GoogleG />
          <div className="gsummary__score">5.0</div>
          <div className="gsummary__mid">
            <Stars />
            <span className="gsummary__count">Based on {reviews.length} Google reviews</span>
          </div>
          <a className="gsummary__cta" href="#contact">Leave a review</a>
        </Reveal>

        <Stagger className="greviews" stagger={0.14}>
          {reviews.map((r) => (
            <StaggerItem as="article" className="greview-card" key={r.name + r.time} y={60}>
              <div className="greview-card__head">
                <div className="greview-card__avatar" style={{ background: r.avatarColor }}>
                  {r.name.charAt(0)}
                </div>
                <div className="greview-card__who">
                  <span className="greview-card__name">{r.name}</span>
                  <span className="greview-card__time">{r.time} · {r.location}</span>
                </div>
              </div>
              <div className="greview-card__stars"><Stars /></div>
              <p className="quote">{r.quote}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
