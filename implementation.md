# Implementation Requirements

## Build Quality

The portfolio must feel like a real site, not a static prompt response.

Requirements:

- Responsive desktop and mobile layout.
- Keyboard-accessible navigation.
- Visible focus states.
- Semantic HTML.
- Strong loading and empty states where relevant.
- Reduced-motion support.
- Centralized content data.
- Easy replacement of placeholder images and text.
- No broken links without placeholder labels.

## Frontend Direction

If an existing codebase exists:

- Use its framework and styling conventions.
- Do not introduce a new major UI library without a clear reason.
- Keep edits scoped.
- Run existing checks.

If starting from scratch:

- Prefer a maintainable modern stack.
- React/Vite, Next.js, Astro, or static HTML/CSS are acceptable.
- Do not over-engineer CMS integration for version one.
- Keep content in a structured file.

## Visual Requirements

Include:

- Clear hero with strong typography.
- Dense but breathable layout.
- Case-study cards with meaningful hierarchy.
- Placeholder product visuals suggesting screens, flows, dashboards, maps, or design-system fragments.
- Fine borders, subtle surfaces, deliberate spacing.
- One memorable interaction.

Avoid:

- Purple gradient SaaS templates.
- Beige/tan lifestyle portfolio look.
- Random abstract blobs.
- Overly rounded nested cards.
- Huge marketing hero that hides the work.
- Fake browser mockups everywhere.

## Motion Requirements

Use motion only where it helps:

- Header/logo hover response.
- Project-card hover response.
- Reveal transitions for sections.
- Smooth scroll to anchors.
- Optional scroll progress or active nav state.

Must support:

- prefers-reduced-motion
- No essential content hidden behind animation.
- No motion that causes layout shift.

## Verification Checklist

Before finishing, Claude must run available checks:

- npm run build
- npm run lint, if available
- npm run test, if available
- Local dev server check, if feasible

Report:

- What passed.
- What failed.
- What was not run and why.