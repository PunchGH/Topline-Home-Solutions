# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + React + TypeScript, plain CSS (no Tailwind — a custom design system was already hand-built for this brand and carries over directly). Superseded the original static-HTML plan (`IMPLEMENTATION_1.md` §6) per explicit user request, 2026-09-15. Still frontend-only: no backend route handlers wired to a real database/CRM, no real form submission.

## Users

Homeowners in Ottawa, ON and Calgary, AB (and surrounding service-area towns) evaluating a home-attic contractor — comfort, energy-bill, and moisture/mold problems drive them to look for insulation, air sealing, and roof-protection services. Secondary: the TopLine Home Solutions team itself, evaluating this build as a sales-demo prototype to decide whether to move forward with a real site.

## Product Purpose

A one-page marketing/lead-generation prototype for TopLine Home Solutions, a Canadian home-attic and insulation contractor (20+ years experience). Purpose of this specific build: a frontend-only demo to show as a lead/pitch, proving what a redesigned site could look like — not a production deployment.

## Positioning

TopLine bundles insulation, air sealing, and roof protection into one integrated plan rather than selling single fixes — the pitch is a single contractor solving comfort, energy bills, and moisture/mold together, backed by 20+ years of experience across two Canadian metros.

## Operating Context

Real company, two physical offices (Nepean/Ottawa, ON and Calgary, AB) with distinct phone numbers, addresses, and service-area lists. Services: Attic Insulation, Air Sealing & Ventilation, Cellulose & Soundproofing, GoNano Roofing Spray, Attic Insulation Removal, Mold Removal & Prevention (plus a referenced but uncontented "Roof Inspection" nav item). Source copy is scraped verbatim from toplinehome.ca (home, about, services index + 5 service detail pages, contact) — those `.md` files in the project root are ground truth for company facts.

## Capabilities and Constraints

- Frontend only: no backend, no real form submission, no CMS.
- No real project/jobsite photography exists on the live site (gallery page confirmed "Coming Soon" via direct fetch on 2026-09-15) — curated stock photography stands in, explicitly swap-ready.
- 6 real service icon SVGs exist on toplinehome.ca and are hotlinked directly.
- No testimonials exist on the source site — placeholder reviews are used and must render as visibly labeled placeholders, never presented as real.
- Process-flow copy (4-step) and FAQ copy are authored (not scraped) to fill sections the layout calls for; both are flagged to the client as needing sign-off before any real launch.
- Dual-location city toggle (Ottawa ⇄ Calgary) swaps phone/address/map client-side only.

## Brand Commitments

- Logo (`Topline-Logo.png`) is the palette authority: white ground, near-black text/structure, gold gradient (roofline mark, rule lines) as a committed accent color, not a token accent.
- Layout/composition rhythm is pinned to the `Northforge Landing Page - Light (1).html` guide's section structure and type system (Oswald display / Barlow body / Space Mono labels) — recolored and recontented for TopLine, never Northforge's orange/dark-hero identity.
- Both confirmed directly with the user before this build (implementation-planning conversation, 2026-09-15).

## Evidence on Hand

- Real: all company copy, phone numbers, addresses, service descriptions (9 scraped `.md` files), logo file, 6 hotlinkable service icon SVGs.
- Not real / must not be fabricated as fact: testimonials, project photography, process-flow steps, FAQ copy — see Capabilities and Constraints for how each is handled.

## Product Principles

1. Real company facts (contact info, service copy, service areas) render verbatim — never paraphrased into invented claims.
2. Anything not sourced from the real site (photography, testimonials, process steps, FAQ) is either clearly labeled as a placeholder or explicitly flagged to the client as authored-for-review.
3. The logo is the single source of truth for color; the Northforge guide is the single source of truth for structure and type system — the build fuses both, copies neither's content.
4. Built as a fully committed, production-quality frontend even though it's a prototype — this is a sales artifact, its craft *is* the pitch.

## Accessibility & Inclusion

Standard WCAG AA expectations for a public marketing site: semantic landmarks, alt text on all imagery, visible focus states, labeled form fields, sufficient color contrast against the white/black/gold palette (gold-on-white text avoided for body copy; gold reserved for large text, fills, and accents).
