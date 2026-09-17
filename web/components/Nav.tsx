"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCity } from "./CityContext";
import CityToggle from "./CityToggle";
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
        <Link href="/" className="nav__brand" aria-label="TopLine Home Solutions, back to home">
          <Image src="/topline-logo.png" alt="TopLine Home Solutions" width={300} height={207} priority />
        </Link>

        <ul className="nav__links">
          <li>
            <Link href="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item--dropdown">
            <Link href="/#services" className="nav__link">
              Services
              <svg className="caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="nav__dropdown">
              {services.map((s) => (
                <Link key={s.slug} href={s.href}>{s.name}</Link>
              ))}
              <span className="is-muted" style={{ display: "block", padding: "10px 14px" }}>
                Roof Inspection
              </span>
            </div>
          </li>
          <li className="nav__item--dropdown">
            <Link href="/#about" className="nav__link">
              About
              <svg className="caret" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="nav__dropdown">
              <Link href="/#about">About Us</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
          </li>
          <li>
            <Link href="/#gallery" className="nav__link">Gallery</Link>
          </li>
          <li>
            <Link href="/#contact" className="nav__link">Contact</Link>
          </li>
        </ul>

        <div className="nav__actions">
          <CityToggle className="city-toggle--light" />
          <a className="nav__phone" href={office.phoneHref}>{office.phone}</a>
          <Link className="btn btn--amber btn--sm" href="/#contact">Get Free Quote</Link>
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
        <Link href="/" className="mobile-panel__link" onClick={closeMobile}>Home</Link>
        <span className="mobile-panel__link">Services</span>
        <div className="mobile-panel__sub">
          {services.map((s) => (
            <Link key={s.slug} href={s.href} onClick={closeMobile}>{s.name}</Link>
          ))}
        </div>
        <Link href="/#about" className="mobile-panel__link" onClick={closeMobile}>About Us</Link>
        <Link href="/#faq" className="mobile-panel__link" onClick={closeMobile}>FAQ</Link>
        <Link href="/#gallery" className="mobile-panel__link" onClick={closeMobile}>Gallery</Link>
        <Link href="/#contact" className="mobile-panel__link" onClick={closeMobile}>Contact</Link>
        <div className="mobile-panel__cta">
          <CityToggle className="city-toggle--light" />
          <Link className="btn btn--amber" href="/#contact" onClick={closeMobile}>Get Free Quote</Link>
          <a className="btn btn--ghost-dark" href={office.phoneHref}>{office.phone}</a>
        </div>
      </div>
    </nav>
  );
}
