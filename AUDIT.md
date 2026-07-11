# IA, UX/UI & Discoverability Audit

**Date:** 2026-07-11 · **Scope:** all pages of the WIREFUL portfolio (local dev build + live `panosfilip.github.io/wireful`)
**Method:** source review of every page/component, Playwright inspection of 10 pages at desktop (1440px) and mobile (390px), DOM interaction testing (nav, overlay form, filters, lightbox, no-JS), full internal link crawl, axe-core WCAG 2.1 AA scan, sitemap/robots/meta review.

**Guiding question:** can a visitor always tell where they are, what's on offer, and how to get to the next thing — without guessing?

---

## What already works well

Worth stating so it doesn't get broken while fixing the rest:

- **Zero broken internal links** across all crawled pages (37 unique targets, all 200). `robots.txt` and `sitemap.xml` both present and correct.
- **Clean document structure:** exactly one `h1` per page, meta description and canonical on every page, JSON-LD on case pages.
- **The "Start a project" overlay is genuinely good:** inline validation on empty submit, working focus trap (40-tab test never escaped), ESC to close, background scroll lock, plain-email fallback link.
- **Work filters:** URL sync (`?tag=web`), deep-link restore on reload, live count ("22 projects shown"), aria-live status, empty state with reset.
- **No-JS desktop fallback works:** content visible (reveal animations don't hide it), CTA falls back to `/contact`.
- **axe-core is nearly clean** — no contrast violations anywhere on a dark theme, which is rare. Only two moderate findings (see #12).
- Skip link, `aria-current` on nav, `prefers-reduced-motion` handling for videos and animations.

---

## Severity 1 — Critical (visitors can't find things, or trust is damaged)

### 1. "Contact" does not exist in the navigation — anywhere above the footer

The primary nav is **Approach / Work / About** ([Header.astro:6-10](src/components/Header.astro#L6-L10)). There is no Contact item on desktop or mobile. On mobile it's worse: the header contact icons are hidden (`contact-icons--header` not visible at 390px — verified in DOM), so the open mobile menu offers exactly three links and no way to reach contact at all.

- A `/contact` page exists, is in the sitemap, and is linked **only from the footer**.
- The "Start a project" button opens a form overlay — but a visitor scanning for the word "Contact" (the single most common wayfinding pattern on a portfolio) doesn't know that button is the contact path. "Start a project" reads as commitment; "I just want to ask something / hire him" visitors hesitate.
- The contact page itself even says "Hiring enquiries are welcome too" — but the people it addresses are the least likely to click a button labelled "Start a project" to find it.

**Fix:** add **Contact** as the last primary-nav item (desktop + mobile menu), pointing to `/contact`. Keep "Start a project" as the visually distinct CTA. On mobile, show the contact icons (or an email row) inside the open menu.

### 2. Nearly half the public portfolio is unfinished placeholder content — and it's all indexed

Of 30 projects on `/work`, **12 cards render a grey "PROJECT IMAGE / COMING SOON" cover** (my1521, AADE Signage, Fysiko Aerio, Spiritual Living Corfu, Holiways Crete, OASA, AftersalesPro, SynapSync, Choose Redesign, Capitano, Kyverneio, Shoot & Win), stacked as a wall at the bottom of the page. Their detail pages are thin (often just "Problem" + "Output", two sentences) and show the raw bracket placeholder **"[ADD ENGAGEMENT]"** — which also appears on *published* flagship pages like TEKA ([work/[slug].astro:83](src/pages/work/[slug].astro#L83)).

Every one of these URLs is in [sitemap.xml.ts:13](src/pages/sitemap.xml.ts#L13), so Google can (and will) land a first-time visitor **directly on an empty draft** — their entire first impression of a designer who sells "clear enough to build."

**Fix (in order of impact):**
1. Exclude `status: "draft"`/`"placeholder"` studies from the sitemap and add `<meta name="robots" content="noindex">` to their pages.
2. On `/work`, collapse them into a compact "In progress / coming soon" strip (title-only rows, no dead grey covers) — or hide them until they have media.
3. Fill or remove every visible `[ADD ENGAGEMENT]` — a real value ("Direct engagement, 6 weeks") or nothing. Nothing bracketed should ever reach a visitor.

### 3. The homepage's #1 featured slot is a placeholder

The first (hero-sized) card in "Selected work" is **my1521 — a draft with the grey "PROJECT IMAGE / COMING SOON" cover** ([index.astro:7](src/pages/index.astro#L7)), and the section kicker name-drops it as the proof point. The most valuable pixels on the site currently prove the opposite of the pitch. TEKA, EKAPY, DTK, Detsis and Pino all have strong real covers.

**Fix:** lead with a published case with real media (e.g. TEKA). Reintroduce my1521 in the featured slot only once it has at least a hero visual. If the my1521 name-drop matters (it does — AADE is impressive), keep it in the kicker copy but link it to its page instead of showcasing an empty card.

### 4. Services are listed but lead nowhere — the offer has no page

The homepage "What I can help you make" section renders 9 capabilities as **inert list items** ([index.astro:113-122](src/pages/index.astro#L113-L122)) — not links, no hover, no destination. Meanwhile a complete, well-written description of all five service areas (`offerAreas`, [site.ts:52-78](src/data/site.ts#L52-L78)) **is rendered nowhere on the site** — verified by grep.

A visitor asking the money questions — *"Does he do e-commerce? What does a website project actually include? Is consulting an option?"* — has no page that answers them. The nav offers Approach (the *how*) but nothing explains the *what*. This is the biggest IA gap: Work proves, Approach explains, but nothing **offers**.

**Fix:** give the offer a home. Either render `offerAreas` as a proper Services section on the homepage (replacing or expanding the inert chip list), or create `/services` and add it to the nav. Make each of the 9 capability chips a link — to the matching service block or to `/work/?tag=…` (the taxonomy already supports this; the overlay and touch-tap on tags already prove the pattern).

---

## Severity 2 — High

### 5. `/contact` is the weak version of the contact experience — and it's the one the footer links to

There are two contact paths of very different quality:

| Path | What you get |
|---|---|
| "Start a project" (overlay) | Guided 5-step form, budget/timeline, attachments, "I reply within two working days" |
| `/contact` page (footer link, direct URL, no-JS fallback) | A mailto link and four label/value rows |

A visitor who clicks footer **Contact** — or lands on `/contact` from a search — gets no form, no response-time promise, and a page that's ~60% empty space on desktop ([contact.astro](src/pages/contact.astro)). Nothing on the page even mentions the guided form exists.

**Fix:** make `/contact` the canonical contact experience: embed the same form (or a simplified version) directly on the page, and carry over the "usually reply within two working days" promise. The overlay can stay as the shortcut.

### 6. The Work page is a 19,500px single scroll with a filter that scrolls away

- `/work` is ~12,100px tall on desktop and **~19,600px on mobile** — 3 featured + 30 cards in one column on a phone.
- The filter bar is `position: static` (verified via computed style): once a visitor starts scrolling, refining requires scrolling all the way back up. On mobile that's 15+ screens.
- The "Featured case studies" section duplicates the first rows of "All work" — TEKA, DTK and Detsis each appear **twice on the same page** within one scroll, which reads as a bug and adds ~1,500px.

**Fix:** make the filter bar sticky (it's compact; it fits under the header), and either drop the featured trio from the "All work" grid or drop the separate featured section. Combined with #2 (collapsing the 12 placeholder cards), the mobile page shrinks by roughly half.

### 7. Two-letter capability marks are a private code; "Capability tokens" is internal jargon

Every card and case page tags work with two-letter circles (WE, PR, HO, MO, AI…). The label only appears on **hover** (desktop) or **first tap** (touch). Nothing on screen explains the system, and the case-page heading calls them **"Capability tokens"** ([work/[slug].astro:96](src/pages/work/[slug].astro#L96)) — a term from this codebase's design vocabulary, not the visitor's.

Worse, the affordances are inconsistent per device: on touch, tap-expand-then-tap navigates to filtered work ([CapabilityTags.astro:61-79](src/components/CapabilityTags.astro#L61-L79)) — a nice but undiscoverable two-step. On desktop, clicking a tag does **nothing** (the click handler exits for non-touch), so the one place a motivated visitor signals "show me more like this," nothing happens.

**Fix:** rename the case-meta heading to "Capabilities". Make tags real `<a href="work?tag=…">` links on all devices (hover still reveals the label). Consider showing labels by default on the case-page meta block where space allows.

### 8. No custom 404 page

Confirmed live: `panosfilip.github.io/wireful/anything` returns GitHub's default 404 — no wordmark, no nav, no way back. Any mistyped/stale link (e.g. a renamed case slug shared on LinkedIn) is a hard dead end. There is no `404.astro` in [src/pages/](src/pages/).

**Fix:** add `src/pages/404.astro` with the site header/footer, a short line, and links to Work + Contact. GitHub Pages picks up `404.html` automatically.

---

## Severity 3 — Medium

### 9. Nav order buries the visitor's #1 task

The nav reads **Approach → Work → About**. Portfolio visitors' overwhelming first task is *see the work*; process pages are read second, if at all. Work belongs first (it also carries the strongest content). Current order also puts the two "meta" pages (Approach, About) around Work rather than after it.

**Fix:** reorder to **Work → Approach → About (→ Contact)** in [Header.astro:6-10](src/components/Header.astro#L6-L10) and mirror in the footer.

### 10. Case pages have no way back to the filtered archive except "Related work" at the very bottom

A case page's only in-page escape hatches are the nav "Work" item and the related-work block after ~5,000px of scroll. There's no breadcrumb or "← All work" near the top, and no prev/next project navigation. Visitors deep-diving multiple projects do full scroll-return loops each time.

**Fix:** add a small "← All work" link above the case title (and optionally prev/next project links near Related work). Cheap, high-leverage for the "browse several projects" journey — which is the core portfolio journey.

### 11. Everything interesting is hidden behind `<details>` accordions

About (16 skills), Approach (20 process outputs + 14 tools) hide one-sentence descriptions behind individual click-to-open accordions. Reading About's skills fully costs 16 clicks; virtually no visitor will make them, so the content might as well not exist. The tiny "+ Open a tool to see how I use it" hint on Approach acknowledges the discoverability problem rather than solving it.

**Fix:** for one-liners, show the text (title + muted description) instead of collapsing it. Reserve accordions for genuinely long content. If the compact look matters, expand the first item by default so the pattern is self-explanatory.

### 12. Landmark and heading-order gaps (axe-core, moderate)

- The sticky "Back to top" button sits outside all landmarks on every page ([Base.astro:66-69](src/layouts/Base.astro#L66-L69)).
- On `/contact`, heading order jumps h1 → h3 (footer column headings; the page has no h2).

**Fix:** move the back-to-top anchor inside `<footer>` or give it a landmark role; make footer column headings `h2` styled down (or `<p>` + `aria-hidden` styling), which fixes it site-wide.

### 13. Autoplaying video is everywhere, with no pause control

Four page heroes + the CTA band + 6 case-card videos on `/work` all `autoplay loop`. `prefers-reduced-motion` is respected (verified in code) — good — but users who haven't set an OS-level flag get perpetual motion in every direction with no visible pause (WCAG 2.2.2 expects a pause/stop mechanism for auto-moving content >5s). Files are well-compressed (0.8–2MB each), but `/work` on mobile still queues ~6 videos.

**Fix:** pause card videos when offscreen via IntersectionObserver (cheap battery/data win), and consider a small pause toggle on heroes for full 2.2.2 conformance.

---

## Severity 4 — Low

### 14. Discoverability extras (SEO)

- **No Person/ProfilePage JSON-LD** on home/about — the site is a personal brand ("WIREFUL" ≠ "Panagiotis Filippaios"), and structured data is what ties the two names together for search. Case pages already do this well with CreativeWork.
- The default OG image for home/approach/about/contact is the same `work-hero-poster.jpg`; a branded card with the wordmark + name would represent shares better.
- Draft pages in the sitemap — covered in #2, listed here as the SEO half of that fix.

### 15. Small UX papercuts

- **PDF links open in the same tab** (footer, About, Work hero, Contact) — navigating away from the site into a PDF viewer with no site chrome. Add `target="_blank" rel="noopener"`.
- **Stat strip scans oddly:** "10+ / 200+ / 98% / HCI" — the last tile isn't a number, so the count-up row ends on a word; consider "MSc" styled as a badge or move the teaching credential to prose.
- **`/contact` page under no-JS mobile:** the primary nav is hidden and the hamburger needs JS, so no-JS mobile visitors can't navigate at all (desktop is fine). A CSS-only fallback (`:target` or details-based menu) or at least visible footer reliance is acceptable; noting for completeness.
- **`<base href="/wireful/">` fragility:** already required JS workarounds for `#top`/`#main` ([Base.astro:178-188](src/layouts/Base.astro#L178-L188)). Any future in-page anchor added without remembering this will silently navigate to the homepage. Worth a comment in CLAUDE/AGENTS docs or migrating to explicit `BASE_URL`-prefixed hrefs over time.
- **Home capability directory vs. marquee vs. tags:** three different vocabularies for the same 9 capabilities on one page (marquee words, two-letter directory, card tag circles). Unifying on the tag taxonomy (and linking all of them, see #4/#7) would make the system feel intentional.

---

## Suggested fix order (effort vs. impact)

| # | Fix | Effort |
|---|---|---|
| 1 | Add Contact to nav (desktop + mobile) | Trivial |
| 3 | Swap homepage featured slot to a published case | Trivial |
| 2 | Noindex/de-sitemap drafts; collapse placeholder cards; purge `[ADD ENGAGEMENT]` | Small |
| 8 | Custom 404 | Small |
| 9 | Nav reorder (Work first) | Trivial |
| 7 | Link capability tags everywhere; rename "Capability tokens" | Small |
| 6 | Sticky work filter; dedupe featured cards | Small |
| 5 | Real form on /contact | Medium |
| 4 | Services content on page (render `offerAreas`) | Medium |
| 10–15 | Remaining items | Small each |

---

*Testing artifacts (screenshots at both breakpoints, axe reports, link-crawl results) were generated with Playwright against the local dev server; scripts live in the session scratchpad and can be re-run on request.*
