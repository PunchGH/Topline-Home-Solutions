"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCity } from "./CityContext";
import { offices, services } from "@/lib/content";

export default function Nav() {
  const { city } = useCity();
  const office = offices[city];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap">
        <a href="#top" className="nav__brand" aria-label="TopLine Home Solutions — home">
          <Image src="/topline-logo.png" alt="TopLine Home Solutions" width={300} height={207} priority />
        </a>

        <ul className="nav__links">
          <li>
            <a href="#top" className="nav__link">Home</a>
          </li>
          <li className="nav__item--dropdown">
            <a href="#services" className="nav__link">
              Services
              <svg className="caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__dropdown">
              {services.map((s) => (
                <a key={s.slug} href={`#service-${s.slug}`}>{s.name}</a>
              ))}
              <span className="is-muted" style={{ display: "block", padding: "10px 14px" }}>
                Roof Inspection
              </span>
            </div>
          </li>
          <li className="nav__item--dropdown">
            <a href="#trust" className="nav__link">
              About
              <svg className="caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__dropdown">
              <a href="#trust">About Us</a>
              <a href="#faq">FAQ</a>
            </div>
          </li>
          <li>
            <a href="#gallery" className="nav__link">Gallery</a>
          </li>
          <li>
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>

        <div className="nav__actions">
          <a className="nav__phone" href={office.phoneHref}>{office.phone}</a>
          <a className="btn btn--gold btn--sm" href="#contact">Get Free Quote</a>
          <button
            type="button"
            className="nav__burger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-panel${mobileOpen ? " is-open" : ""}`}>
        <a href="#top" className="mobile-panel__link" onClick={closeMobile}>Home</a>
        <span className="mobile-panel__link">Services</span>
        <div className="mobile-panel__sub">
          {services.map((s) => (
            <a key={s.slug} href={`#service-${s.slug}`} onClick={closeMobile}>{s.name}</a>
          ))}
        </div>
        <a href="#trust" className="mobile-panel__link" onClick={closeMobile}>About Us</a>
        <a href="#faq" className="mobile-panel__link" onClick={closeMobile}>FAQ</a>
        <a href="#gallery" className="mobile-panel__link" onClick={closeMobile}>Gallery</a>
        <a href="#contact" className="mobile-panel__link" onClick={closeMobile}>Contact</a>
        <div className="mobile-panel__cta">
          <a className="btn btn--gold" href="#contact" onClick={closeMobile}>Get Free Quote</a>
          <a className="btn btn--ghost-dark" href={office.phoneHref}>{office.phone}</a>
        </div>
      </div>
    </nav>
  );
}
