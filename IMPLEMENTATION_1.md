# TopLine Home Solutions — Landing Page Prototype
Implementation Plan v1 — Frontend-only demo for lead presentation

## 1. Goal
Build a single, polished one-page site for TopLine Home Solutions (attic insulation, air sealing, roofing & home protection — Ottawa, ON & Calgary, AB) to show as a sales/demo prototype. No backend, no CMS, no real form submission — static frontend only, built to look production-ready.

## 2. Source material
- **Content:** 9 scraped `.md` files from toplinehome.ca (home, about, services index, 5 individual service pages, contact) — all real company copy, phone numbers, addresses, and service descriptions.
- **Layout guide:** `Northforge Landing Page - Light (1).html` — a construction-company template. Its section rhythm and type system are the structural reference; its content, orange accent, and dark-hero styling are **not** — they get replaced.
- **Logo:** `Topline-Logo.png` — gold gradient roofline mark, bold black "TOPLINE" wordmark, black "HOME SOLUTIONS" subline, thin gold rules, black tagline. This is the authority for the palette.

**Finding worth flagging:** I checked toplinehome.ca directly — their live Gallery page is still "Coming Soon" and no project/crew photography exists on the site (only the logo files). Real hotlinked photography isn't available, so per your fallback this plan uses **curated stock photography** instead, clearly scoped for later replacement with real jobsite photos. Their 6 service icons (SVGs) *do* exist on the live site and will be hotlinked as-is.

## 3. Brand direction (derived from the logo, not invented)
- **Palette — Committed, not restrained:** white/off-white ground, near-black (`#15130f`-ish) for text and structural elements, gold as a real carrier color (not a tiny accent) — pulled as a gradient (`#caa04a → #f2d27a → #b8860b` range, sampled from the logo roofline) for buttons, dividers, numerals, icon fills, and one hero accent panel. Gold gradient rules (like the ones under the logo wordmark) become a recurring section-divider motif.
- **Typography — inherited from the layout guide, recolored:** Oswald (heavy, condensed, uppercase) for headings — echoes the roofline logo's sturdy, built-to-last register; Barlow for body copy; a mono face (Space Mono) reserved for small kickers/labels/stats, matching the guide's system.
- **Tone:** premium-but-approachable Canadian home-services contractor — trust, craftsmanship, 20+ years, comfort/savings outcomes. No orange, no dark moody hero (that's Northforge's identity, not TopLine's) — hero goes light/white-forward with black type and gold roofline framing, echoing the logo directly.

## 4. Section-by-section plan (Northforge's rhythm → TopLine content)

| # | Guide section | TopLine adaptation |
|---|---|---|
| 1 | Sticky nav | Logo left; Home / Services (dropdown: Attic Insulation, Air Sealing & Ventilation, Cellulose & Soundproofing, GoNano Roofing Spray, Attic Insulation Removal, Mold Removal & Prevention) / About / Gallery / Contact; phone number + "Get Free Quote" button right |
| 2 | Announcement/top bar | "Available 24/7" + **city toggle** (Ottawa ⇄ Calgary) swapping the displayed phone number, live |
| 3 | Hero (dark, 760px) | Light, white-forward hero: "Boost Energy Efficiency and Indoor Air Quality" headline, attic-company-for-Ottawa-&-Calgary subhead, dual CTA ("Get Your Free Quote" / "About Us"), gold roofline-motif graphic echoing the logo, stock hero photo (attic/insulation install) |
| 4 | Logo/trust strip | Repurposed as a stat strip: 20+ Years Experience · Ottawa & Calgary · Licensed & Insured · 15+ Communities Served |
| 5 | Services grid (4-card) | 6-card grid, one per real service, real icons hotlinked from toplinehome.ca, real descriptions, "Learn More" links (anchor-only in prototype) |
| 6 | "Built different" | → "Durable Home Insulation Solutions You Can Trust" — 20+ years, quality-first copy, "Your Home Matters" section from home page |
| 7 | Process (4-step) | Authored 4-step flow consistent with real service copy: Free Inspection → Personalized Plan → Professional Installation → Final Walkthrough (flagged as authored, not scraped — confirm wording with client before go-live) |
| 8 | Gallery | Stock photography grid (attic/insulation/roofing, matches palette), clearly swap-ready; captions generic ("Attic insulation install," "Roof coating application") not tied to false claims |
| 9 | Reviews | **Placeholder testimonials**, each visibly labeled `[Sample review — replace with real testimonial]`, 3 cards |
| 10 | Quote/CTA (dark) | "Reach Out Today!" — real form fields from the site (First Name, Last Name, Phone, Email, Message), static/non-functional in this prototype, styled on the near-black + gold treatment |
| 11 | FAQ | 4–5 FAQs authored from real service descriptions (e.g., what is cellulose insulation, how long does GoNano last, do you serve my area, is an inspection free) — flagged as authored, for client review |
| 12 | Footer | Services nested links, About/FAQ/Gallery/Contact, both office addresses + phone numbers + full service-area lists (Ottawa: Ottawa, Kingston, Brockville, Cornwall, Carleton Place, Kemptville, Arnprior, Pembroke, Petawawa; Calgary: Calgary, Airdrie, Cochrane, Chestermere, Crossfield, Red Deer, Okotoks, Canmore, High River, Strathmore) |

## 5. City toggle mechanics
Lightweight, client-side only: a two-state switch (Ottawa / Calgary) in the top bar and contact section. Toggling swaps phone number, address, and map link via a small JS data object — no page reload, no persistence needed beyond session state.

## 6. Technical approach
**Superseded mid-build, 2026-09-15:** switched from plain static HTML/CSS/JS to **Next.js (App Router) + React + TypeScript** at the user's explicit request, before any HTML had been written. Plain CSS carried over directly (no Tailwind). See `PRODUCT.md` → `## Stack`.
- App lives in `web/` — `npm run dev` (or `build` + `start`) from that directory.
- Structure: `app/layout.tsx` (fonts via `next/font/google`: Oswald, Barlow, Space Mono — self-hosted, no external font requests), `app/globals.css` (the full design system), `app/page.tsx` assembling section components from `components/*.tsx`, real content centralized in `lib/content.ts`, shared Ottawa/Calgary state in `components/CityContext.tsx`.
- Real service icon SVGs hotlinked from `toplinehome.ca/wp-content/uploads/...` (verified 200 OK); gallery/hero/trust photography is real, verified Unsplash photography (not AI-generated) loaded through `next/image` with `remotePatterns` configured in `next.config.ts` — see the Finding above re: toplinehome.ca having no real jobsite photography yet.
- Fully responsive (desktop + mobile), accessible semantics (landmarks, alt text, focus states, labeled form fields).
- Contact form is presentational only — local React state shows a "message received" confirmation; no submission endpoint (explicitly frontend-only/prototype), disclosed in the UI itself.

## 7. Explicitly out of scope
- Backend/CMS, real form submission, real customer reviews/testimonials, real jobsite photography, FAQ page content verification, roof-inspection service detail page, SEO/analytics wiring.

## 8. Open items for you to confirm before/while building
- Testimonial copy: sample placeholders will use generic praise — say the word if you'd rather I pull 2–3 real ones in later.
- Process-flow wording (step 7 above) and FAQ copy (step 11) are authored, not scraped — flag anything inaccurate.
- Stock photography style/mood once sourced — quick thumbs up before it's locked into the build.

---

## Checklist

### Setup
- [x] Confirm plan (this file) with stakeholder
- [x] Set up Next.js + React + TypeScript app in `web/` (switched from static HTML mid-build, per request)
- [x] Establish palette + type tokens in CSS (gold gradient, black, white, Oswald/Barlow/Space Mono via next/font)

### Build — structure
- [x] Sticky nav + mobile menu
- [x] Announcement bar + city toggle (Ottawa/Calgary)
- [x] Hero section
- [x] Trust credential line (folded into hero, not a separate stat-tile section — avoids the generic "hero-metric" template)
- [x] Services (featured row + rule-divided list, 6 real services, real icons)
- [x] "Durable Solutions You Can Trust" section
- [x] Process section (4 steps, connected timeline)
- [x] Gallery (real, verified stock photography)
- [x] Reviews (labeled placeholders)
- [x] Contact/quote CTA section (form with local "message received" state)
- [x] FAQ section (accordion)
- [x] Footer (both locations, service areas, nav links)

### Assets
- [x] Confirm/hotlink 6 real service icon SVGs (verified 200 OK)
- [x] Source curated, verified real photography (hero, services, trust, gallery) matching gold/black/white direction
- [x] Place logo (in nav + footer, via next/image)

### Polish & QA
- [x] Responsive check: desktop + mobile (Playwright screenshots, both viewports)
- [x] Accessibility pass (alt text, contrast-checked gold usage, focus states, labeled form fields)
- [x] Cross-check all real content (phone numbers, addresses, service copy) against source `.md` files
- [x] City toggle functions correctly (phone/address swap; footer keeps both locations listed per plan)
- [x] FAQ accordion + mobile nav interactions verified — two real bugs found and fixed (mobile menu overlapping the top bar; mobile services sub-links running together with no line breaks)
- [x] `next build` + ESLint clean; design-hook/detector scan clean (one intentional decorative-frame finding disclosed and suppressed, not hidden)
- [x] Final screenshot review (desktop + mobile, plus targeted zooms)

### Handoff
- [x] Flag all authored/placeholder content (testimonials, process steps, FAQ) to client for review — disclosed both in `PRODUCT.md` and directly in the shipped UI copy (gallery/reviews sections say so on the page itself)
- [x] Note stock photography as swap-ready for real jobsite photos — disclosed in-page, not just in this doc
- [ ] Client review of authored copy (process steps, FAQ answers) before any real launch
- [ ] Swap in real testimonials and real jobsite photography once available
- [ ] Wire a real form-submission endpoint if this moves past prototype stage
