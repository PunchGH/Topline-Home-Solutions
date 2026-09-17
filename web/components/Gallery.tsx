import Image from "next/image";
import { galleryImages } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <div className="section__head">
          <h2>The Kind of Work We Do</h2>
          <p>Full project photography from our own jobs is coming soon. These stand in for now.</p>
          <span className="reviews__flag">Stand-in photography, not a real TopLine job site</span>
        </div>
        <div className="gallery__grid">
          {galleryImages.map((img) => (
            <figure className={`gallery__item ${img.className}`} key={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 980px) 45vw, 30vw"
              />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
