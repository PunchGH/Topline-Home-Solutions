const POSTER =
  "https://plus.unsplash.com/premium_photo-1661542617132-75ae2e1f6fbc?fm=jpg&q=80&w=1800&auto=format&fit=crop";
const VIDEO = "https://videos.pexels.com/video-files/2675565/2675565-sd_960_506_24fps.mp4";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero__poster" src={POSTER} alt="" />
        <video
          className="hero__video"
          src={VIDEO}
          poster={POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content wrap">
        <h1 className="hero__title reveal reveal--1">
          Boost Energy Efficiency and <em>Indoor Air Quality</em>
        </h1>
        <p className="hero__lede reveal reveal--2">
          Ottawa, ON &amp; Calgary, AB — Attic, Air Sealing &amp; Roof Specialists
        </p>
        <div className="hero__ctas reveal reveal--3">
          <a className="btn btn--amber" href="#contact">Get Your Free Quote</a>
          <a className="btn btn--ghost-light" href="#trust">About Us</a>
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span className="hero__scroll-line" aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
}
