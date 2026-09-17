# Implementation Update: Round 3 Revisions

**Target:** TopLine Home Solutions prototype (`web/`, Next.js 16 App Router + React 19, plain CSS)
**Date:** 2026-09-16
**Supersedes nothing.** This extends `IMPLEMENTATION_1.md` and the surface brief at `.impeccable/surfaces/index-html.md`.
**Status:** implemented 2026-09-16. All seven items built. Build, lint, and the design detector pass. Browser screenshots are still outstanding, see the note at the end of §7.

---

## 1. What is changing and why

Seven requested revisions, grouped by what they actually touch:

| # | Request | Real scope |
|---|---|---|
| 1 | Remove dashes from the site | Copy rewrite across 8 files, 18 visible strings |
| 2 | "Learn More" needs a page per service | **New routes.** Turns a one-page site into a multi-page site |
| 3 | Service cards: images instead of icons | Remove the amber icon badge overlay, retune card padding |
| 4 | About Us below the hero | New section from real scraped copy, new page order |
| 5 | "Reach Out Today!": show both phone numbers | Replace the city toggle with both offices side by side |
| 6 | Form color does not fit its section | Rebuild the form card dark to match the near-black section |
| 7 | Image metadata + new favicon | Open Graph / Twitter tags, OG image asset, favicon from the logo |

Item 2 is the one that is bigger than it looks. Everything else is contained; item 2 changes the site's architecture and forces a fix to every anchor link in the nav and footer (detailed in §4).

### Decisions confirmed with the client (2026-09-16)

1. **About Us** = a new section written from the real `toplinehome.ca/about-us` copy, placed directly below the hero. The existing Trust block stays where it is as a benefits section.
2. **Form** = dark charcoal card on the near-black section. The dark CTA band stays as the page's anchor near the end.
3. **Dashes** = remove every em dash and every hyphen used as punctuation, rewriting those sentences. Ordinary hyphenated words stay (`high-performance`, `year-round`, `eco-friendly`, `20+ years`).
4. **Favicon** = cropped from the real `Topline-Logo.png` roof mark, gradient gold preserved.

---

## 2. Item-by-item plan

### Item 1: Remove the dashes

**Files:** `app/layout.tsx`, `components/ContactCTA.tsx`, `components/Faq.tsx`, `components/Footer.tsx`, `components/Gallery.tsx`, `components/Hero.tsx`, `components/Nav.tsx`, `components/Process.tsx`, `components/Reviews.tsx`, `components/Services.tsx`, `components/Trust.tsx`, `lib/content.ts`

**Inventory:** 18 em dashes in visible copy, 5 more in code comments, 5 in CSS comments. All of them go. Zero en dashes, zero `&mdash;` entities.

Each one gets a proper rewrite, not a comma swap. Sentences that lean on a dash for a dramatic pause get restructured so they read like a person wrote them:

| Where | Now | Becomes |
|---|---|---|
| `Hero.tsx` lede | `Ottawa, ON & Calgary, AB — Attic, Air Sealing & Roof Specialists` | `Attic, Air Sealing & Roof Specialists in Ottawa, ON and Calgary, AB` |
| `Trust.tsx` body | `insulation that truly lasts — 20+ years of experience, from the first...` | `insulation that truly lasts, backed by 20+ years of experience from the first...` |
| `Services.tsx` lede | `efficiency in your home — comprehensive protection, not temporary fixes` | `efficiency in your home. Comprehensive protection, not temporary fixes` |
| `Process.tsx` lede | `the same way every time — no surprises between the quote and the job` | `the same way every time, with no surprises between the quote and the job` |
| `Gallery.tsx` lede | `from our own jobs is coming soon — these stand in for now` | `from our own jobs is coming soon. These stand in for now` |
| `Faq.tsx` disclosure | `for this prototype — happy to refine the wording` | `for this prototype. We are happy to refine the wording` |
| `Reviews.tsx` flag | `Prototype widget — not a live Google Business Profile` | `Prototype widget, not a live Google Business Profile` |
| `Footer.tsx` brand | `roof protection — one integrated plan` | `roof protection in one integrated plan` |
| `Footer.tsx` legal | `Prototype build — not the live site.` | `Prototype build, not the live site.` |
| `Nav.tsx` aria-label | `TopLine Home Solutions — home` | `TopLine Home Solutions home` |
| `ContactCTA.tsx` success | `Thanks — message received` | `Thanks, your message was received` |
| `ContactCTA.tsx` note | `Prototype form — no message is actually sent.` | `Prototype form. No message is actually sent.` |
| `layout.tsx` description | `AB homeowners — one integrated plan` | `AB homeowners, all in one integrated plan` |
| `content.ts` process 02 | `a clear plan — insulation, sealing, or roofing — sized to your home` | `a clear plan for insulation, sealing, or roofing, sized to your home` |
| `content.ts` FAQ 1 | `to know for sure — we check your attic's depth` | `to know for sure. We check your attic's depth` |
| `content.ts` FAQ 2 | `fire resistance — which is why it's our standard` | `fire resistance, which is why it's our standard` |
| `content.ts` FAQ 3 | `your roof's condition going in — we'll give you` | `your roof's condition going in. We will give you a` |
| `content.ts` FAQ 4 | `two hubs — Ottawa, ON and Calgary, AB — and serve` | `two hubs, Ottawa, ON and Calgary, AB, and serve` |

All new copy written for items 2, 4, 5 and 7 is written dash-free from the start.

**Guardrail:** after the rewrite, `grep -rn "—\|–" web/app web/components web/lib` must return zero hits. This runs again over the new service pages once they exist.

---

### Item 2: A real page for each service

This is the largest piece. Today the six "Learn More" links point off-site to `toplinehome.ca`, which sends visitors away from the prototype.

**New routes:**

```
/services/attic-insulation
/services/air-sealing-ventilation
/services/cellulose-soundproofing
/services/gonano-roofing-spray
/services/attic-insulation-removal
/services/mold-removal-prevention
```

**New files:**

- `web/lib/serviceDetails.ts` — the per-service content, keyed by slug
- `web/app/services/[slug]/page.tsx` — the page template, with `generateStaticParams` and `generateMetadata`
- `web/app/services/[slug]/not-found.tsx` — 404 for an unknown slug
- CSS additions in `app/globals.css` under a new `Service detail page` block

**Content source:** all six services have a scraped source file in the project root, and all six share an identical structure. Verified. So one template covers all six with no special cases:

```
H1                service name
H2 + paragraph    locality subhead, intro, CTA
H2 + paragraph    the explainer ("What Is Cellulose Attic Insulation?")
H2 + 3 to 5 items the advantages list
H2 + 2 paragraphs the closing pitch, CTA
```

Every word is lifted from the scraped pages, matching Product Principle 1. No invented claims. The only authored text on these pages is navigational (breadcrumbs, the "other services" strip). Two mechanical departures: inline cross-links were flattened to plain text, and the single em dash in the GoNano intro became a comma.

**Page structure:**

1. **Nav** (shared, existing component)
2. **Page header band** (`section--steel-deep`): breadcrumb `Home / Services / <Name>`, H1, the locality subhead, intro paragraph, amber CTA to the quote form, and the service's photo full-bleed at right
3. **Explainer** (white): the "What is" section, set as prose at a readable measure
4. **Advantages** (steel-pale): 3 to 5 items in a hairline-ruled two-column grid. *Built without the planned numbering:* an advantages list is not a sequence, so numerals would have been decoration rather than information.
5. **Closing band** (white): the closing headline and two paragraphs, plus a CTA pair
6. **Other services** strip: the five sibling services as small photo cards, so the page is not a dead end
7. **ContactCTA** (shared component, reused as-is)
8. **Footer** (shared)

This reuses the existing section rhythm and card vocabulary. No new design language is introduced.

**Link rewiring (the part that is easy to miss):**

| Location | Now | Becomes |
|---|---|---|
| `Services.tsx` card link | `https://www.toplinehome.ca/services/...` (external, `target="_blank"`) | `/services/<slug>` (internal `next/link`) |
| `Nav.tsx` desktop dropdown | `#service-<slug>` | `/services/<slug>` |
| `Nav.tsx` mobile panel | `#service-<slug>` | `/services/<slug>` |
| `Footer.tsx` services column | `#service-<slug>` | `/services/<slug>` |
| `lib/content.ts` `Service.href` | external URL | `/services/<slug>`, derived from the slug |

**Cross-page anchor fix:** `Nav.tsx` and `Footer.tsx` use bare hash links (`#top`, `#services`, `#contact`, `#faq`, `#gallery`). On a service page those resolve against the current route and do nothing. Every one becomes root-relative (`/#contact`, `/#gallery`, and so on), with `#contact` on a service page pointing at that page's own contact section since `ContactCTA` is rendered there too. Detailed in §4.

**SEO per page:** each service page gets its own `title`, `description` (from the real intro paragraph), `canonical`, and OG tags via `generateMetadata`. Covered under item 7.

---

### Item 3: Drop the icons from the service cards

The cards already carry photography. What has to go is the 44px amber square badge that hangs off the bottom-left corner of each photo holding a hotlinked SVG icon.

**Changes:**

- `components/Services.tsx`: delete the `<div className="service-card__icon">` block and its `<img>`
- `app/globals.css`: delete `.service-card__icon` and `.service-card__icon img` (lines 434 to 446)
- `app/globals.css`: `.service-card__body` padding goes from `32px 22px 26px` to `26px 22px`. The extra 32px of top padding existed only to clear the overhanging badge
- `lib/content.ts`: remove the now-unused `icon` field from the `Service` interface and all six entries. This also drops the last hotlink to `toplinehome.ca` assets, so the prototype stops depending on the live site being up

**Quality fix while we are in here:** card images currently use `alt={s.name}`, which makes a screen reader announce the service name twice (once as alt, once as the `<h3>`). These become descriptive alt text per image, or empty alt where the `<h3>` already carries the meaning. Which way depends on the photo; decided per card during the build.

**Bonus:** the photos are the only thing left in the card media, so the hover scale reads cleanly without a badge sitting on top of it.

---

### Item 4: About Us below the hero

**New file:** `web/components/About.tsx`
**Changed:** `app/page.tsx` (order), `app/globals.css` (About block), `Nav.tsx` and `Footer.tsx` and `Hero.tsx` (About links repoint from `#trust` to `#about`)

**New page order:**

```
Nav
Hero            100vh video, unchanged
About           NEW
Services        photo cards
Trust           3 benefit cards, unchanged, stays here
Process
Gallery
Reviews
ContactCTA
Faq
Footer
```

**Section rhythm check.** The current alternation is white / steel-pale / steel-deep / white / steel-pale / ink / soft. Inserting About after the hero would put two white sections back to back (About then Services). Fix: About takes `section--soft` (the warm paper tone), giving hero (video) into warm paper into white Services into steel-pale Trust. Rhythm preserved, no two identical backgrounds adjacent.

**Copy, verbatim from `www.toplinehome.ca_about-us_`:**

- Eyebrow: `About Us`
- H2: `Home Attic Professionals Serving Ottawa, ON & Calgary, AB Residents`
- Lede: the real opening paragraph about insulation, air sealing, and complete home protection
- Body: the `Quality Craftsmanship` paragraph, which carries the real `20+ years of experience` claim and the `Canadian home service company` positioning
- A `20+` / `YEARS OF EXPERIENCE` stat block in Oswald and Space Mono, the same treatment used for the process numerals
- CTA pair: `Get Your Free Quote` (amber) and `View All Services`

**Layout:** two columns at desktop, text left and a photograph right in a square frame, stacking to one column below 980px. This deliberately mirrors the Trust section's composition in reverse (Trust is photo-left, text-right), so the two read as a matched pair rather than a repeat.

**Consequence to handle:** `Hero.tsx`'s secondary CTA currently reads `About Us` and points to `#trust`. It now points to `#about`, which is the section immediately below it. A CTA that scrolls one section down is weak. It changes to `View Our Services` pointing at `#services`, which is a more useful second action from the hero. Flagging this as a copy change for sign-off.

---

### Item 5: Both phone numbers visible in "Reach Out Today!"

Correct call. The city toggle hides half the contact information behind an interaction, in the one place on the page where a visitor has already decided to call.

**Current:** a two-button Ottawa / Calgary switch, one office block, one phone number visible.

**New:** both offices rendered side by side, always visible.

```
REACH OUT TODAY!
Ready for a warmer winter, a cooler summer, and a healthier home.

┌─ OTTAWA, ON ────────┐  ┌─ CALGARY, AB ───────┐
│ 613-612-6934        │  │ 825-982-6934        │
│ 5 Timbercrest Ridge │  │ 4441 76 Ave SE #108 │
│ Nepean, ON K2R 1B4  │  │ Calgary, AB T2C 2G8 │
└─────────────────────┘  └─────────────────────┘
```

**Changes:**

- `components/ContactCTA.tsx`: drop `<CityToggle />` and `useCity()`, map over `Object.values(offices)` instead. The component may then become a server component, since the only remaining client state is the form's `submitted` flag. Either split the form into its own client component or keep the whole thing client-side. Decided during the build; splitting is cleaner
- `app/globals.css`: `.cta__office` becomes a two-column grid with a vertical rule between, collapsing to stacked below 720px. Phone stays at the current 1.7rem Oswald so it holds its weight as the primary action
- Each phone stays a real `tel:` link. Each address stays a real map link

**What the city toggle is still for:** it remains in the Nav (driving the header phone number) and keeps the `CityContext` alive. Worth a conversation about whether the toggle earns its place at all now, but that is outside this round's scope. Noted in §6.

---

### Item 6: The form does not fit its section

**The problem:** `.form-card` is pure white (`--paper`) with a heavy `0 24px 60px rgba(0,0,0,0.35)` drop shadow, sitting on `section--ink` (`#15130f`, near-black). It reads as a floating sheet of paper dropped onto the page rather than part of the section.

**The fix (confirmed):** keep the dark section as the page's closing anchor and rebuild the form to live in it.

| Property | Now | Becomes |
|---|---|---|
| Card background | `#ffffff` | `#1f1c17`, one step up from the section ground |
| Card border | none | `1px solid` warm white at 12% |
| Card top rule | `4px solid var(--amber)` | kept, unchanged, it is the brand signal |
| Card shadow | `0 24px 60px rgba(0,0,0,0.35)` | removed. A shadow on a dark ground only muddies |
| Input background | `#ffffff` | `#15130f`, darker than the card, so fields read as recessed |
| Input border | `1.5px solid rgba(21,19,15,0.16)` | `1.5px solid` warm white at 18% |
| Input text | `--ink` | `--paper` |
| Label text | `--ink-faint` | warm white at 62% |
| Focus ring | amber-deep + 15% amber glow | `--amber` border + 3px amber glow at 25%, brighter to hold up on dark |
| Placeholder | inherited | warm white at 38% |
| Submit button | `btn--amber` | unchanged. Amber on charcoal is the strongest contrast pair on the page |
| Helper text | `--ink-faint` | warm white at 55% |
| Success state | dark ink text | light text, amber check mark |

**Contrast targets (WCAG AA, verified with a contrast check before sign-off):**

- Input text `#f5f0e2` on `#15130f`: about 16:1. Passes AA and AAA
- Label warm white 62% on `#1f1c17`: must clear 4.5:1. If it lands short, the label opacity goes up rather than the label getting bigger
- Helper text warm white 55% on `#1f1c17`: same rule, must clear 4.5:1 as small text
- Input border at 18% opacity: must clear 3:1 against the card for the non-text contrast requirement. If not, opacity rises to meet it

**Also worth fixing while here:** `autoComplete` attributes are missing on all five fields (`given-name`, `family-name`, `tel`, `email`). Small, free, and it makes the form fill in one tap on mobile.

**New CSS variables** added to `:root` so the dark form does not scatter one-off hex values: `--ink-raised` (`#1f1c17`), `--line-on-ink`, `--text-on-ink`, `--text-on-ink-soft`.

---

### Item 7: Image metadata and favicon

Two separate jobs that share one asset pipeline.

#### 7a. Favicon

**Current:** `app/favicon.ico` is the stock Next.js icon (16x16 and 32x32, never replaced).

**New:** crop the roof mark out of `Topline-Logo.png` and emit a square icon set. `sharp` is already installed as a Next dependency, so the crop runs offline with no new packages and no network.

- `web/scripts/build-brand-assets.mjs` — a one-shot script, committed, so the assets are reproducible rather than mystery binaries
- `app/icon.png` (512x512) — the roof mark, generously padded, on a white ground matching the logo's own ground
- `app/apple-icon.png` (180x180) — same mark, on a charcoal ground so it does not disappear against a light iOS home screen
- `app/favicon.ico` — deleted. Next.js generates the correct `<link rel="icon">` tags from `app/icon.png` automatically

**Known tradeoff:** the logo's roof mark is a gold gradient, which gets muddy at 16px. Mitigations: crop tight to the silhouette so the mark fills the frame, keep the padding ratio at roughly 12%, and check the result at actual 16px and 32px in a real browser tab before calling it done. If it still reads as a smudge at 16px, we flag it and revisit, rather than shipping something illegible.

#### 7b. Image and social metadata

**Currently in `app/layout.tsx`:** a `title` and a `description`. Nothing else. No OG tags, no Twitter card, no image, no `metadataBase`. A link to this site pasted into a text message, Slack, or Facebook today shows a bare grey box.

**Root metadata (`app/layout.tsx`) gains:**

- `metadataBase` (required, or every OG image URL resolves relative and breaks)
- `openGraph`: `title`, `description`, `url`, `siteName`, `locale: en_CA`, `type: website`, `images`
- `twitter`: `card: summary_large_image`, `title`, `description`, `images`
- `alternates.canonical`
- `keywords` and `authors`, low value but free
- `robots`: **`noindex, nofollow`.** This is an unreleased prototype of a real company's site. It must not compete with `toplinehome.ca` in search results. Removed on real launch, and noted as such in the code

**OG image asset:** `app/opengraph-image.png`, 1200x630, generated by the same `build-brand-assets.mjs` script:

```
┌──────────────────────────────────────────┐
│  charcoal #15130f ground                 │
│                                          │
│         [ TopLine logo, full ]           │
│                                          │
│  ▓▓▓▓▓▓ amber rule ▓▓▓▓▓▓                │
│                                          │
│  ATTIC INSULATION · AIR SEALING ·        │
│  ROOF PROTECTION                         │
│  Ottawa, ON  &  Calgary, AB              │
└──────────────────────────────────────────┘
```

The logo PNG already contains the wordmark and the tagline as artwork, so no font rendering is needed and the script stays dependency-free and offline. The strapline below the rule is composed as SVG using the logo art itself where possible; if a text line is needed, it is drawn in a websafe stack rather than pulling Oswald at build time.

**Per-service OG:** each service page's `generateMetadata` sets its own `title` and `description` from that service's real copy. Images: the shared OG image by default. **Stretch goal**, only if it does not slow the round down: per-service OG images composed from each service's photo plus the logo plate, which the same script can emit. Marked optional in the checklist.

**Alt text:** `openGraph.images[].alt` is set. This is the "image metadata" in the accessible sense as well as the social sense.

**Next.js version note:** `web/AGENTS.md` warns that this Next build differs from training data. The metadata and icon file conventions were verified directly against `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/` for this plan, and `generate-metadata.md` gets re-read before the code is written.

---

## 3. Files touched, at a glance

**New:**

```
web/components/About.tsx
web/lib/serviceDetails.ts
web/app/services/[slug]/page.tsx
web/app/services/[slug]/not-found.tsx
web/app/icon.png
web/app/apple-icon.png
web/app/opengraph-image.png
web/scripts/build-brand-assets.mjs
```

**Modified:**

```
web/app/layout.tsx        metadata block, dashes
web/app/page.tsx          section order
web/app/globals.css       icon badge removal, About, dark form, service page styles, new tokens
web/components/Hero.tsx   dashes, CTA target
web/components/Nav.tsx    dropdown to real routes, root-relative anchors, dashes
web/components/Services.tsx   icon removal, internal links, alt text, dashes
web/components/Trust.tsx      dashes
web/components/Process.tsx    dashes
web/components/Gallery.tsx    dashes
web/components/Reviews.tsx    dashes
web/components/Faq.tsx        dashes
web/components/ContactCTA.tsx both offices, dark form, dashes
web/components/Footer.tsx     root-relative anchors, service routes, dashes
web/lib/content.ts            icon field removal, href change, dashes
```

**Deleted:**

```
web/app/favicon.ico       replaced by app/icon.png
```

**Possibly deleted:** `web/components/CityToggle.tsx` and `web/components/CityContext.tsx`, only if the decision in §6 is to retire the city toggle entirely. Not part of this round unless the client says so.

---

## 4. The one real risk: single page becomes multi page

Worth calling out plainly, because it is the thing most likely to ship broken.

`Nav.tsx` and `Footer.tsx` are rendered on every page. They currently contain **14 bare hash links** (`#top`, `#services`, `#trust`, `#faq`, `#gallery`, `#contact`, and six `#service-<slug>` anchors). On `/services/attic-insulation`, a click on `#gallery` looks for a gallery section on that page, finds nothing, and does nothing at all. Silent dead link.

**Fix:** every cross-section link becomes root-relative.

| Pattern | Becomes |
|---|---|
| `#top` | `/` |
| `#services` `#about` `#trust` `#gallery` `#faq` | `/#services` `/#about` and so on |
| `#service-<slug>` | `/services/<slug>` |
| `#contact` | `/#contact` from the nav; a local `#contact` on service pages, since `ContactCTA` renders there too and scrolling to it in place is the better behavior |

**Also:** the six `id="service-<slug>"` attributes on the homepage cards are now orphaned, since nothing links to them any more. They stay as harmless deep-link targets, or get removed. Low stakes, decided during the build.

**Verification is explicit:** after the build, every link in the nav, footer, and mobile panel is clicked from both the homepage and a service page. This is on the checklist as its own line item because it is exactly the kind of thing a screenshot pass does not catch.

---

## 5. Sequence

Ordered so nothing gets built twice.

**Phase 1: content and data** (no visual change yet)
Extract all six service detail pages into `lib/serviceDetails.ts`, dash-free from the start. Rewrite the 18 dashed strings in the existing files. Drop the `icon` field and repoint `href`.

**Phase 2: structure**
Build `About.tsx`, reorder `page.tsx`, repoint the About links. Build the service page route, template, and `not-found`. Rewire all 14 nav and footer links to root-relative.

**Phase 3: visual**
Remove the icon badge and retune card padding. Rebuild the form dark with the new tokens. Rebuild the contact block with both offices. Add the service page CSS block.

**Phase 4: assets and metadata**
Write and run `build-brand-assets.mjs`. Delete `favicon.ico`. Write the root metadata block and the per-service `generateMetadata`.

**Phase 5: verification** (§7)

Phases 1 and 2 can be reviewed before phase 3 starts, if preferred.

---

## 6. Open items, deliberately not in this round

Flagged rather than silently done or silently ignored.

1. **The city toggle may no longer earn its place.** With both phones visible in the contact section and both offices already in the footer, the toggle's only remaining job is switching the phone number in the sticky nav. That may be worth keeping (a visitor in Calgary should see the Calgary number in the header) or may be complexity for its own sake. Not touching it this round. Worth a decision next round.
2. **"Roof Inspection" is still a dead nav item.** It sits in the nav dropdown greyed out, because the real site references it but has no page for it. Once services have real pages, that gap is more visible. It needs either real copy from the client or removal from the nav.
3. **A `/services` index page.** Six service routes exist but `/services` itself would 404. Low effort to add, and it is what the real site has. Not in scope unless requested. Worth adding.
4. **Phone number discrepancy in the source material.** The scraped pages show a `Call Now` link to `613-723-8930`, while `lib/content.ts` uses `613-612-6934` for Ottawa. The site content is the version currently shipping and is what this prototype uses. **Please confirm which number is correct** before any real launch.
5. **`robots: noindex` is intentional and temporary.** It must come off when this goes live, or the real site will not be indexed. Flagged in the code with a comment.
6. **Stock photography and placeholder reviews are unchanged this round** and still carry their prototype disclosures.
7. **BLOCKING FOR ANY CLIENT DEMO: four image slots serve a watermarked stock photo.** Found during the round 3 screenshot pass and verified by zooming a capture. `plus.unsplash.com` is the paid Unsplash+ tier; requested unauthenticated it returns the frame with a tiled "Unsplash+" watermark baked in. Affected: the hero video poster (`Hero.tsx`), which is also the only hero visual a reduced-motion visitor ever sees; the Trust photo (`Trust.tsx`); and gallery tile g2 (`lib/content.ts`, the same frame as the hero poster). The About section was moved off this tier during the round. Everything on `images.unsplash.com`, including all six service cards, is clean. Fix by subscribing and serving the files locally, or by swapping all three for free-tier frames. Not done here: these sections are outside the seven requested items and the hero choice is a design decision.

---

## 7. How this gets verified

Not a vibe check. A specific list.

- `npm run build` in `web/` passes clean, including all six static service routes appearing in the route manifest
- `npm run lint` passes
- `grep -rn "—\|–" web/app web/components web/lib` returns nothing
- No remaining reference to `toplinehome.ca` for assets (the footer's one deliberate outbound link to the real site stays)
- Screenshots: homepage and one service page, desktop and mobile, in one batched pass. Fix everything the pass shows in one batch, confirm once, stop
- Every nav, footer, and mobile panel link clicked from both the homepage and a service page (see §4)
- Form contrast measured against the AA targets in item 6, not eyeballed
- Favicon checked at actual 16px and 32px in a real browser tab
- OG tags checked in the rendered `<head>`, and the OG image opened at full size to confirm it is not cropped or blurry
- The Impeccable mechanical detector run once over the changed files at the end

---

## 8. Progress checklist

### Phase 1: Content and data
- [x] Extract all 6 service detail pages into `lib/serviceDetails.ts`, verbatim, dash-free
- [x] Rewrite the 18 dashed strings per the table in item 1
- [x] Clear dashes from code comments in `lib/content.ts` and `globals.css`
- [x] Remove the `icon` field from the `Service` type and all 6 entries
- [x] Repoint `Service.href` to `/services/<slug>`
- [x] `grep` check: zero em dashes and en dashes across `app/`, `components/`, `lib/`

### Phase 2: Structure
- [x] Build `components/About.tsx` from the real About Us copy
- [x] Insert About below Hero in `page.tsx`, set it to `section--soft`
- [x] Repoint every About link from `#trust` to `#about` (Nav desktop, Nav mobile, Footer, Hero)
- [x] Change the Hero secondary CTA to `View Our Services` / `#services`
- [x] Build `app/services/[slug]/page.tsx` with `generateStaticParams`
- [x] Build `app/services/[slug]/not-found.tsx`
- [x] Add the "Other services" strip to the service page template
- [x] Rewire all 14 nav and footer hash links to root-relative
- [x] Repoint the 6 nav dropdown entries to `/services/<slug>`
- [x] Repoint the 6 mobile panel entries to `/services/<slug>`
- [x] Repoint the 6 footer services entries to `/services/<slug>`
- [x] Switch the service card links to `next/link`, internal, no `target="_blank"`

### Phase 3: Visual
- [x] Delete the `service-card__icon` markup from `Services.tsx`
- [x] Delete `.service-card__icon` and `.service-card__icon img` from `globals.css`
- [x] Retune `.service-card__body` padding from `32px 22px 26px` to `26px 22px`
- [x] Write descriptive alt text for all 6 service card photos
- [x] Add the new `:root` tokens: `--ink-raised`, `--line-on-ink`, `--text-on-ink`, `--text-on-ink-soft`
- [x] Rebuild `.form-card` dark per the item 6 table
- [x] Restyle inputs, labels, placeholders, focus ring, helper text, success state for the dark card
- [x] Add `autoComplete` to all 5 form fields
- [x] Replace the city toggle in `ContactCTA` with both offices side by side
- [x] Add the two-column office grid CSS, stacking below 720px
- [x] Split the form into its own client component if `ContactCTA` can then be a server component
- [x] Add the `Service detail page` CSS block to `globals.css`

### Phase 4: Assets and metadata
- [x] Write `scripts/build-brand-assets.mjs` using the installed `sharp`
- [x] Generate `app/icon.png` (512x512, roof mark on white) — uses the mark's **left gable**, not the full roofline: the full mark is 3.4:1 and was checked at 16px and rejected as illegible
- [x] Generate `app/apple-icon.png` (180x180, roof mark on charcoal)
- [x] Generate `app/opengraph-image.png` (1200x630)
- [x] Delete `app/favicon.ico`
- [x] Add `metadataBase`, `openGraph`, `twitter`, `alternates.canonical`, `keywords` to `app/layout.tsx`
- [x] Add `robots: noindex, nofollow` with a comment marking it as launch-blocking
- [x] Add `generateMetadata` to the service page with per-service title, description, canonical, OG
- [x] Set OG image alt text
- [ ] *Optional, not done:* per-service OG images from each service photo (pages inherit the shared card)

### Phase 5: Verification

*Screenshots were initially blocked: every Chrome binary on this machine failed on a missing `libnspr4.so` and `sudo` needs a password. Resolved without root by `apt-get download` plus `dpkg -x` into `/tmp/nsslibs` and pointing `LD_LIBRARY_PATH` at it. No system packages were installed.*
- [x] `npm run build` clean, all 6 service routes present in the manifest
- [x] `npm run lint` clean
- [x] Dash grep returns zero
- [x] No `toplinehome.ca` asset hotlinks remain
- [x] Batched screenshot pass: homepage and one service page, desktop and mobile
- [x] Fix everything the pass shows, in one batch
- [x] One confirming pass, then stop
- [x] Click every nav, footer, and mobile link from both the homepage and a service page
- [x] Measure form contrast against the AA targets
- [x] Check the favicon at 16px and 32px in a real browser tab
- [x] Check OG tags in the rendered head, open the OG image at full size
- [x] Run the Impeccable detector once over the changed files
- [x] Update `PRODUCT.md` and `.impeccable/surfaces/index-html.md` to record the new page structure and the multi-page architecture

---

## 9. Suggestions beyond the seven items

Small, cheap, and they lift the whole prototype. Say the word and any of these fold into the round.

1. **Add the `/services` index page.** Six routes exist and `/services` 404s. It is maybe 30 minutes and it matches the real site's structure. *Recommended.*
2. **Resolve the Roof Inspection nav item.** Either give it a page or take it out of the dropdown. A greyed-out item in a client demo invites the question "why is that broken?" at exactly the wrong moment. *Recommended.*
3. **Add a `sitemap.ts`.** Trivial in the App Router, and it makes the multi-page structure legible to the client and to search engines at launch. Two files, ten lines.
4. **Reconsider the city toggle** once both phones are visible (see §6 item 1).
5. **Add prefers-reduced-data handling for the hero video.** The hero pulls a video file on every load. Reduced-motion users already get the poster; reduced-data users could too. Genuinely optional.
