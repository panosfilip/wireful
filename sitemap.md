# Site Map And Content Model

## Recommended Site Map

First version:

- `/`
- `/work`
- `/work/[slug]`
- `/approach`
- `/about`
- `/contact`

If single-page first:

- `#work`
- `#approach`
- `#about`
- `#contact`

## Homepage Structure

1. Header
   - Logo/wordmark: PF, Panos, or [PORTFOLIO_NAME]
   - Nav: Work, Approach, About, Contact
   - CTA: Contact / Let's talk

2. Hero
   - Name/title
   - One-line positioning
   - Short paragraph
   - Status/location row
   - Primary CTA to Work
   - Secondary CTA to Contact

3. Selected Work
   - 4 to 6 case-study cards
   - Title, short problem, tags, status, placeholder visual

4. Approach
   - Four pillars

5. About Strip
   - Bio paragraph
   - Tool/method highlights
   - Teaching/mentoring signal

6. Contact
   - Direct CTA
   - Placeholder contact details

7. Footer
   - Name
   - Location
   - Social links placeholders
   - Availability/status line

## Project Data Model

Use something equivalent to:

```ts
type CaseStudy = {
  slug: string;
  title: string;
  status: "placeholder" | "draft" | "published";
  year?: string;
  clientType?: string;
  summary: string;
  problem: string;
  role: string[];
  services: string[];
  tools: string[];
  tags: string[];
  cover: {
    type: "placeholder" | "image" | "video";
    alt: string;
    src?: string;
    visualPrompt?: string;
  };
  sections: Array<{
    heading: string;
    body: string;
    mediaPlaceholder?: string;
  }>;
  outcomes?: string[];
  nextSteps?: string[];
};
```

## Approach Pillars

| Pillar | Copy |
|---|---|
| Strategy | Question the brief, identify the real constraint, and define what the interface needs to solve. |
| Structure | Turn messy services, content, and user needs into navigable systems and clear flows. |
| Prototype | Build realistic screens and interactions early enough to expose weak assumptions. |
| Maintain | Design components, content patterns, and pages that teams can keep using without breaking the experience. |

## Placeholder Rules

Mark editable placeholders like this:

- [ADD REAL CLIENT NAME]
- [ADD PROJECT METRIC]
- [REPLACE WITH SCREENSHOT]
- [CONFIRM YEAR]
- [CONFIRM ROLE]

Do not invent fake quantified results.
