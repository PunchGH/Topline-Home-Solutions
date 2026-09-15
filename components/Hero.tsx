import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero__content">
          <h1 className="hero__title reveal reveal--1">
            Boost Energy Efficiency and <em>Indoor Air Quality</em>
          </h1>
          <p className="hero__lede reveal reveal--2">
            Reliable Home Attic Company for Ottawa, ON &amp; Calgary, AB Residents
          </p>
          <p className="hero__copy reveal reveal--2">
            Your attic shapes the comfort of every room below it, and TopLine Home
            Solutions keeps that space working for you. We combine insulation, air
            sealing, and roof protection into a single smart plan for your home —
            so it stays cozy in winter, cool in summer, and cheaper to run all year.
          </p>
          <div className="hero__ctas reveal reveal--3">
            <a className="btn btn--gold" href="#contact">Get Your Free Quote</a>
            <a className="btn btn--ghost-dark" href="#trust">About Us</a>
          </div>
          <div className="hero__credentials reveal reveal--4">
            <span>20+ Years Experience</span>
            <span>Ottawa &amp; Calgary</span>
            <span>Licensed &amp; Insured</span>
            <span>15+ Communities Served</span>
          </div>
        </div>

        <div className="hero__art reveal reveal--3">
          <div className="hero__frame">
            <Image
              src="https://images.unsplash.com/photo-1753460133435-bf41927f77f7?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Attic insulation and wooden beams, upgraded for thermal efficiency"
              fill
              sizes="(max-width: 980px) 90vw, 42vw"
              priority
            />
            <div className="hero__badge">
              <span className="dot" aria-hidden="true" />
              <span>Real attic work, TopLine crews</span>
            </div>
          </div>

          <svg className="hero__roofline" viewBox="0 0 120 88" aria-hidden="true">
            <defs>
              <linearGradient id="roofGoldStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a9791f" />
                <stop offset="48%" stopColor="#f3d888" />
                <stop offset="100%" stopColor="#d3a94f" />
              </linearGradient>
            </defs>
            <path d="M6 82 L60 8 L114 82" />
            <path d="M32 82 L60 42 L88 82" />
          </svg>
        </div>
      </div>
    </section>
  );
}
