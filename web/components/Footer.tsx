import Image from "next/image";
import Link from "next/link";
import { offices, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__col footer__brand">
            <Image src="/topline-logo.png" alt="TopLine Home Solutions" width={220} height={152} />
            <p>
              Attic insulation, air sealing, and roof protection in one
              integrated plan for homeowners in Ottawa, ON &amp; Calgary, AB.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={s.href}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Locations</h4>
            {(Object.values(offices)).map((office) => (
              <div className="footer__office" key={office.id}>
                <strong>{office.city}, {office.region}</strong>
                <ul>
                  <li><a href={office.phoneHref}>{office.phone}</a></li>
                  <li><a href={office.mapHref} target="_blank" rel="noopener noreferrer">{office.address}</a></li>
                </ul>
                <div className="footer__areas">{office.areas.join(", ")}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 TopLine Home Solutions. Prototype build, not the live site.</span>
          <a href="https://www.toplinehome.ca/" target="_blank" rel="noopener noreferrer">toplinehome.ca ↗</a>
        </div>
      </div>
    </footer>
  );
}
