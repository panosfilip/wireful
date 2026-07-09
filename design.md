# Reference And Design Direction

## Reference Site 2: sohub.digital

Reference: https://sohub.digital/

Liked for its scroll-pinned card stack (services section): cards pin below the header, and each incoming card slides over the previous one while covered cards scale back and dim, reading as physical depth.

Borrow the mechanics, not the look:

- Scroll-pinned stacking as a way to give a list of equals sequential focus.
- Depth through scale-back and dimming of covered layers, not shadows.
- One strong scroll effect per section; the rest of the page stays calm.
- Full-surface cards that give each item room and confidence.

Do not copy:

- Giant 3rem border radii (our radius stays 4px, sharp editorial).
- Brightly colored card slabs (our cards are dark surfaces with thin borders).
- Pill/chip tag capsules (we use mono slash-separated tags).
- GSAP/ScrollTrigger/Lenis dependency (we do it with `position: sticky` plus the small scroll handler in Base.astro; `data-stack` + `--stack-i`/`--stack-p` is the reusable pattern).

## Reference Site

Reference: https://www.harrygeorge.design/

The reference portfolio feels like a product/UX design portfolio rather than a decorative personal page.

Observed qualities:

- Compact nav: Work, Approach, Contact.
- Direct CTA: Let's Work Together.
- Strong hero positioning.
- Short supporting copy.
- Selected work cards with serious product/B2B framing.
- Approach section with Strategy, User Experience, Design, Interaction.
- Copy that stresses real problems, scalable systems, user needs, flows, maintainability, and purposeful motion.
- Subtle magnetic logo interaction.

## What To Borrow

Borrow principles, not visuals:

- Confidence.
- Dark editorial mood.
- Concise structure.
- Serious case-study framing.
- Product/UX language.
- Purposeful interaction.
- Strong hierarchy.
- Direct copy.

## What Not To Copy

Do not copy:

- Exact wording.
- Exact layout.
- Logo/brand system.
- Contact form wording.
- Case-study titles.
- Location/coordinates device.
- Images/assets.
- Exact color treatment.
- GSAP code verbatim.

## Translation For Panos

Translate the inspiration into a portfolio for a Greek senior digital designer with UX/product focus.

Possible title directions:

- Senior Digital Designer + UX Systems Thinker
- Digital Designer for Complex Services
- UX-Oriented Senior Graphic Designer

Possible project areas:

- Public-sector service platform redesign
- Taxonomy/search/operational interface
- Institutional website redesign
- Campaign landing page
- Design system/prototype audit

## Visual System

Suggested mood:

- Background: near-black or deep charcoal.
- Text: warm off-white.
- Accent: acidic green, electric blue, sharp cyan, or restrained red.
- Cards: dark surfaces with thin borders.
- Typography: strong grotesk/sans for headings, readable sans for body.
- Imagery: placeholder screens, flows, dashboards, maps, design-system fragments.
- Motion: reveal on scroll, hover states, magnetic CTA/logo, reduced-motion support.

Avoid:

- Purple SaaS gradients.
- Beige/tan templates.
- Random blobs.
- Heavy glassmorphism.
- Over-rounded nested cards.