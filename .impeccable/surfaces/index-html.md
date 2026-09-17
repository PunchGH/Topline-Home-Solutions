---
version: 1
slug: "index-html"
primary_target: "web/app/page.tsx"
related_targets: ["web/app/services/[slug]/page.tsx", "web/components/About.tsx", "web/components/ContactCTA.tsx"]
---

## Direction contract

THESIS: One integrated plan (insulation + air sealing + roofing), not scattered fixes — proven by real photography inside every service card and a clean, chaptered scroll, refusing both the generic hero+icon-grid template and the soft-luxury gold-gradient contractor cliché.

OWN-WORLD: White/charcoal ground, flat safety-amber primary (no gradients, no hazard-stripe pattern — both explicitly removed at user request, 2026-09-15) plus a steel-blue secondary for genuine multi-color range. Sharp square geometry (0 border-radius) on cards/buttons/frames; circles reserved for mechanical elements (process numerals, the city-toggle switch, review avatars) as an intentional gauge/switch metaphor. Sections alternate white → steel-pale → steel-deep (dark) → white → steel-pale → ink (dark) → soft → ink for wayfinding contrast. Text-heavy blocks are broken into cards throughout (services, trust benefits, reviews) rather than run as prose. Oswald condensed-uppercase display, Barlow body, Space Mono labels — unchanged.

STORY: Worried homeowner (bills/comfort/mold) arrives at a tall, left-anchored video hero, meets the company immediately in an About section carrying the real 20+ year credential, scans 6 real services as photo cards that now open full service pages, sees 3 trust-benefit cards + 20yr signal, sees the 4-step process (dark steel anchor section), browses gallery for proof and a Google-styled review widget for social proof, converts via quote form or a city-correct phone call.

FIRST VIEWPORT: Full-bleed looping video hero at 100vh, content left-anchored (not centered — a flexbox auto-margin bug caused unintended centering in the prior build; fixed), dark scrim for legibility, condensed white headline with one amber-accented word, one short subhead line, dual CTA. No top announcement bar (removed at user request — the "Available 24/7" banner). Reduced-motion users get a static poster frame instead of the video.

FORM: Second redirect at explicit user request, 2026-09-15 ("layout feels weird... remove the banner... remove stripes... services card with images... too much text... use cards... google review widget... hero left not center, taller"). Six itemized fixes executed directly (brief was concrete enough not to need a fresh round): topbar removed, hazard-stripe motif removed, services rebuilt as photo cards, trust benefits rebuilt as 3 cards, reviews rebuilt as a Google-review-style widget (disclosed as prototype, not a live connection), hero centering bug fixed + height increased to 100vh. Logo and Northforge structure remain the authority for typography/rhythm. Code-led build (no image generation available in this environment).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

---

## Round 3 (2026-09-16): revisions

Seven client revisions, all confirmed before the build:

1. **No dashes.** Every em dash and punctuation hyphen removed from visible copy, code comments, and CSS comments; the client reads the em dash as an AI tell. Hyphenated compounds kept. Guard: `grep -rn "—\|–" web/app web/components web/lib` must stay empty, including in any new copy.
2. **Service pages.** Six static routes at `/services/<slug>`, built from one template because all six scraped sources share an identical structure. Copy verbatim; only breadcrumbs and the "other services" strip are authored. This turned a one-page site multi-page, so every nav and footer hash link is now root-relative.
3. **Service cards.** The amber icon badge overlay is gone; the photograph is the whole card media, and the entire card is the link. Alt text now describes the photograph rather than repeating the heading.
4. **About below the hero.** New `#about` section on `section--soft`, so the rhythm runs video → warm paper → white services → steel-pale trust. Composition mirrors Trust in reverse (text left, photo right) with the amber corner bracket flipped to top-left, so the two read as a matched pair. No eyebrow above the heading. Copy is the real About Us text condensed for this position: sentences dropped, nothing reworded, no claim added, and the 20+ years claim moved from prose into its own credential line.
5. **Both phones visible.** The contact section shows Ottawa and Calgary side by side, split by a 1px rule, stacking below 640px. The city toggle moved to the nav, where it still drives the header phone number.
6. **Dark form.** The quote form is now a charcoal panel (`--ink-raised`) with recessed fields (`--ink-sunk`), amber top rule and focus ring, and no drop shadow. It belongs to the ink section instead of floating on it. New tokens: `--ink-raised`, `--ink-sunk`, `--line-on-ink`, `--field-on-ink`, `--text-on-ink`, `--text-on-ink-soft`. Field border and placeholder alphas were solved against WCAG rather than eyeballed (0.36 for 3:1 non-text, 0.48 for 4.5:1 placeholder).
7. **Brand assets.** Favicon set and OG card generated offline from the real logo by `web/scripts/build-brand-assets.mjs`. The full roof mark is 3.4:1 and rendered as a gold smear at 16px when checked at size, so the icon uses the mark's left gable: a complete roof peak with its window, close to square, legible in a tab. The OG card sets the whole logo on a white plate over the ink ground under the amber rule, using the logo art for all typography so the script needs no fonts and no network.

Still open, deliberately not done: no `/services` index page (that URL 404s), "Roof Inspection" remains a greyed-out nav item with no content, and the Ottawa phone number differs between the scraped pages and `lib/content.ts`.

**Fixed in passing:** the amber corner bracket on the Trust photo never rendered. It sat at a negative inset inside an `overflow: hidden` box at `z-index: -1`, so it was both clipped and painted behind the section background. The media frames now use `isolation: isolate` with the bracket at `z-index: 0` and the photo at `z-index: 1`. Applied to Trust, About, and the service hero.

**Found during the round 3 screenshot pass, NOT fixed (outside this round's scope):** four image slots use `plus.unsplash.com`, the paid Unsplash+ tier, which serves a tiled "Unsplash+" watermark to unauthenticated requests. Verified by zooming a capture. The slots are the hero video poster (`Hero.tsx`, also the only hero visual reduced-motion users see), the Trust photo (`Trust.tsx`), and gallery tile g2 (`lib/content.ts`, same frame as the hero poster). The About section was moved off the watermarked tier during this round. Everything on `images.unsplash.com` is clean. This needs fixing before the prototype is shown to the client.

---

## Round 4 (2026-09-17): motion

Client asked for the whole homepage animated with strong scroll triggered motion, then chose all three candidate centerpieces, bold supporting motion, and Framer Motion.

**Centerpieces (all scroll scrubbed):**
1. **Hero zoom out.** The hero pins for 220vh (180vh at 980px and below). The video frame's clip-path insets to a framed panel on the warm paper ground while the footage pushes in to 1.12 and the headline lifts and fades. The headline builds word by word on load.
2. **Services sideways scroll.** From 768px up, the section pins and the card row translates left exactly one pixel per pixel of scroll: section height is measured as sticky height plus track overflow. A thin amber bar tracks progress. Phones keep the stacked grid.
3. **Process line draw.** From 981px up, the section pins for 250vh and the amber line fills across the steps; each circle floods amber with a small scale pulse as the fill reaches its measured center, and its text lifts to full opacity. At 980px and below it becomes a vertical timeline that fills as the steps scroll past, unpinned.

**Supporting (bold, replays each time a section re-enters):** section headings reveal word by word through per word masks; paragraphs, CTAs, and card groups stagger in; photos wipe open left to right and drift with parallax; "20+ Years" counts up; contact offices stagger and the quote form slides in from the right; footer columns stagger.

**Reduced motion:** `MotionConfig reducedMotion="user"` strips transforms site wide. Nothing pins, no parallax, photos show without the wipe, the process line and all steps render fully lit, and the count shows its final number. Note the hero video itself now plays for reduced motion users too: the client removed the CSS rule that hid it (commit 01b7fa0), so the FIRST VIEWPORT line above about a static poster is stale.

**Engineering traps, keep these:**
- Pinned layouts gate on a `useSyncExternalStore` media query that is false on the server, so SSR renders the plain layout and the pinned version switches on after mount with no hydration mismatch.
- The image wipe's in-view trigger sits on an unclipped wrapper. A target fully hidden by its own clip-path never reports as intersecting, so triggering on the clipped element leaves photos permanently blank.
- `useTransform(() => ...)` subscribes only to the motion values read on its first run. Read every source unconditionally before branching, or a mode switch leaves the output deaf to the scroll value it needs.
