import { reviews } from "@/lib/content";

export default function Reviews() {
  const lead = reviews.find((r) => r.lead) ?? reviews[0];
  const rest = reviews.filter((r) => r !== lead);

  return (
    <section className="section section--steel-pale">
      <div className="wrap">
        <div className="section__head">
          <h2>What Homeowners Say</h2>
          <p>Real reviews from real customers will replace these before launch.</p>
          <span className="reviews__flag">Sample reviews — not real TopLine customers</span>
        </div>

        <div className="reviews__grid">
          <article className="review-card review-card--lead">
            <span className="review-card__mark" aria-hidden="true">&ldquo;</span>
            <p className="quote">{lead.quote}</p>
            <div className="review-card__meta">
              <div>
                <div className="review-card__name">{lead.name}</div>
                <div className="review-card__loc">{lead.location}</div>
              </div>
              <span className="review-card__sample">Sample</span>
            </div>
          </article>

          {rest.map((r) => (
            <article className="review-card" key={r.name + r.location}>
              <span className="review-card__mark" aria-hidden="true">&ldquo;</span>
              <p className="quote">{r.quote}</p>
              <div className="review-card__meta">
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__loc">{r.location}</div>
                </div>
                <span className="review-card__sample">Sample</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
