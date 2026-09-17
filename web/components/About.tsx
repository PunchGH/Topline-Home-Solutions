import Image from "next/image";

// Copy is the real toplinehome.ca/about-us text, condensed for this position:
// whole sentences were dropped to keep the section short, and the 20+ years
// claim moved from prose into the credential line below. Nothing was reworded
// and no claim was added.
//
// Photography is stand-in stock, swap-ready for a real team or jobsite photo.
// It must stay on images.unsplash.com: the plus.unsplash.com frames used by the
// hero poster, Trust, and one gallery tile are the paid Unsplash+ tier and are
// served with a tiled watermark (verified in a screenshot, 2026-09-16). A
// roofer-at-work frame would suit this section better, but the only one on hand
// is watermarked. This one is clean and duplicates the last gallery tile.
const ABOUT_PHOTO =
  "https://images.unsplash.com/photo-1710883727427-59d1ccc368fa?fm=jpg&q=80&w=1200&auto=format&fit=crop";

export default function About() {
  return (
    <section id="about" className="section section--soft">
      <div className="wrap about">
        <div className="about__body">
          <h2>Home Attic Professionals Serving Ottawa, ON &amp; Calgary, AB Residents</h2>
          <p className="about__lede">
            Home attic professionals in Ottawa, ON &amp; Calgary, AB at TopLine
            Home Solutions ensure your attic performs at its best. We handle
            insulation, air sealing, and complete home protection solutions with
            a plan that fits needs and budget. Homeowners count on TopLine Home
            Solutions for steady comfort, lower energy use, and lasting peace of
            mind.
          </p>
          <p>
            TopLine Home Solutions is a Canadian home service company focused on
            attic care and whole-home efficiency. Our team provides full
            insulation and protection solutions for homeowners, ensuring your
            comfort, safety, and your home&rsquo;s long-term energy performance.
            Quality workmanship is at the heart of what we do, delivering results
            you feel the moment you walk through the door.
          </p>

          <div className="about__credential">
            <span className="about__years">20+ Years</span>
            <span className="about__years-note">
              of attic and insulation work across two Canadian metros
            </span>
          </div>

          <div className="about__ctas">
            <a className="btn btn--amber" href="#contact">Get Your Free Quote</a>
            <a className="btn btn--ghost-dark" href="#services">View All Services</a>
          </div>
        </div>

        <div className="about__media">
          <Image
            src={ABOUT_PHOTO}
            alt="Brick homes with steep peaked rooflines behind a timber fence"
            fill
            sizes="(max-width: 980px) 90vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
