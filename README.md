# WIREFUL

Portfolio of Panagiotis Filippaios, senior UI/UX engineer and graphic designer in Athens.
Built with [Astro](https://astro.build): static output, no client framework,
one small vanilla-JS script for motion.

## Commands

```sh
npm install      # once
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built site locally
npm run check    # type-check .astro files
```

## Where the content lives

All editable content is centralized in two files. You should rarely need to
touch components or pages to update the site:

| File | Contains |
|---|---|
| `src/data/site.ts` | Name, headline, intro, location, availability, email, socials, approach pillars, skills lists |
| `src/data/caseStudies.ts` | All case studies (the `CaseStudy` model: summary, problem, role, services, tools, sections, cover) |

### Replacing a placeholder case study

1. Open `src/data/caseStudies.ts` and edit the matching entry.
2. Replace every bracketed token like `[ADD REAL OUTCOME]`. Anything left in
   brackets is rendered with a visible dashed placeholder style on the site,
   so unfinished content can't hide.
3. Flip `status` from `"placeholder"` to `"draft"` or `"published"` to remove
   the "Placeholder" chip.
4. To use a real image instead of the wireframe SVG:
   drop the file in `public/images/`, then set
   `cover: { type: "image", src: "/images/….png", alt: "…", motif: "sitemap" }`.
   Recommended cover aspect ratio: **16:10** (e.g. 1280×800).
5. Section screenshots: replace `mediaPlaceholder` strings the same way, or
   extend the model with real media when you're ready.

### Contact details

`src/data/site.ts` → set `email`, `emailHref` (`mailto:…`), and the `socials`
URLs. Set the real domain in `astro.config.mjs`.

## Structure

```
src/
  data/           ← all content (edit here)
  layouts/Base.astro    ← head, header, footer, motion script
  components/     ← Header, Footer, CaseCard, PlaceholderVisual (SVG motifs)
  pages/          ← /, /work, /work/[slug], /approach, /about, /contact
  styles/global.css     ← the whole design system (CSS custom properties)
```

Design tokens (colors, type, spacing) are CSS custom properties at the top of
`src/styles/global.css`. Motion respects `prefers-reduced-motion`, and content
is never hidden when JavaScript is unavailable.
