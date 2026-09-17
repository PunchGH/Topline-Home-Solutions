import { galleryImages } from "@/lib/content";
import ParallaxImage from "./motion/ParallaxImage";
import RevealText from "./motion/RevealText";
import { Reveal, Stagger, StaggerItem } from "./motion/primitives";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <div className="section__head">
          <RevealText text="The Kind of Work We Do" />
          <Reveal as="p" delay={0.15}>
            Full project photography from our own jobs is coming soon. These stand in for now.
          </Reveal>
          <Reveal as="span" className="reviews__flag" delay={0.25}>
            Stand-in photography, not a real TopLine job site
          </Reveal>
        </div>
        <Stagger className="gallery__grid" stagger={0.12} amount={0.1}>
          {galleryImages.map((img, i) => (
            <StaggerItem as="figure" className={`gallery__item ${img.className}`} key={img.src} y={30}>
              <ParallaxImage
                src={img.src}
                alt={img.alt}
                sizes="(max-width: 640px) 50vw, (max-width: 980px) 45vw, 30vw"
                strength={7}
                delay={i * 0.1}
              />
              <figcaption>{img.caption}</figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
