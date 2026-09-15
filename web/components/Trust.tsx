import Image from "next/image";

export default function Trust() {
  return (
    <section id="trust" className="section section--soft">
      <div className="wrap trust">
        <div className="trust__media">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661688361733-a50696e91db6?fm=jpg&q=80&w=1000&auto=format&fit=crop"
            alt="Family relaxing comfortably at home"
            fill
            sizes="(max-width: 980px) 90vw, 38vw"
          />
        </div>
        <div className="trust__body">
          <h2>Durable Home Insulation Solutions You Can Trust</h2>
          <p>
            Homeowners trust TopLine Home Solutions for insulation that truly lasts.
            Quality drives every project we do, from the first inspection to the
            final walkthrough — with 20+ years of experience, we bring proven
            results to your home.
          </p>
          <p>
            We treat your house like it matters, because it does. Ready for a
            warmer winter, a cooler summer, and a healthier home?
          </p>

          <ul className="trust__points">
            <li>
              <span className="tick" aria-hidden="true" />
              <span><strong>Year-Round Energy Savings.</strong> Your home holds its temperature, so your system runs less, and you pay less.</span>
            </li>
            <li>
              <span className="tick" aria-hidden="true" />
              <span><strong>Healthier Indoor Comfort.</strong> Cleaner air and steady temperatures make every room feel better.</span>
            </li>
            <li>
              <span className="tick" aria-hidden="true" />
              <span><strong>Lasting Home Protection.</strong> Moisture control protects against mold and water damage, and raises your home&apos;s value.</span>
            </li>
          </ul>

          <div className="hero__ctas" style={{ marginTop: 34 }}>
            <a className="btn btn--gold" href="#contact">Schedule Now</a>
            <a className="btn btn--ghost-dark" href="#services">View All Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
