# Claude Fable Master Prompt

Copy and paste this into Claude Fable. Attach or paste the supporting files as context.

```text
You are Claude Fable acting as a senior product designer, frontend engineer, interaction designer, and portfolio strategist.

<larger_goal>
Build a personal portfolio website for Panagiotis Filippaios. The portfolio should feel like a serious product/UX/design portfolio, not a generic designer landing page.

It should be inspired by https://www.harrygeorge.design/ in its confidence, dark editorial tone, structured case-study cards, concise navigation, purposeful motion, and direct writing style, but it must not copy its layout, wording, branding, assets, or exact visual treatment.

The site must be easy to fill later with real personal projects, use cases, process screenshots, and case studies. For now, use strong placeholder content and a reusable content model.
</larger_goal>

<context_files>
Read these supporting files before designing or coding:

1. 02-personal-portfolio-brief.md
2. 03-reference-and-design-direction.md
3. 04-site-map-and-content-model.md
4. 05-placeholder-case-studies.md
5. 06-implementation-requirements.md
6. 07-later-iteration-prompts.md
</context_files>

<work_style>
When you have enough information to act, act.

If there is an existing codebase, inspect it first. Identify the framework, component structure, styling approach, package manager, routes, assets, and build commands before editing. Reuse the project's existing conventions.

If there is no existing codebase, create a clean, modern, maintainable portfolio implementation using a sensible frontend stack.

Pause only if you need information that cannot be inferred, such as deployment platform, missing private assets, or a destructive action.
</work_style>

<design_direction>
Create a portfolio with these qualities:

- Dark, editorial, polished, product-design oriented.
- High contrast without becoming harsh.
- Clear first viewport: name or portfolio title, role, focus, location/availability, and one confident CTA.
- Case-study cards that feel like product/system work, not decorative Dribbble tiles.
- Navigation: Work, Approach, About, Contact.
- Motion that guides attention: magnetic logo/CTA, subtle reveal transitions, hover depth, scroll progress.
- Copy that sounds human, direct, senior, and slightly sharp.
- Placeholder content should feel intentionally designed, not like lorem ipsum.
</design_direction>

<content_strategy>
Position Panagiotis as a digital designer / UX-oriented senior graphic designer working across:

- UX and interaction design.
- Information architecture.
- Figma systems and prototypes.
- Public-sector and service-design-heavy digital products.
- WordPress/Elementor and practical web delivery.
- Teaching assistance in interaction design methodology.
- Design systems, content-heavy websites, and operational tools.

Use exact personal details only when supplied. Where details are uncertain, use editable placeholders instead of inventing specifics.
</content_strategy>

<deliverables>
Build:

1. Homepage
   - Hero
   - Selected work
   - Approach
   - About strip
   - Contact CTA

2. Work / Case Studies
   - Reusable case-study data model
   - Placeholder case studies
   - Individual template or route if the stack supports it

3. Approach
   - Strategy
   - Structure
   - Prototype
   - Maintain

4. About
   - Professional bio
   - Skills/tooling
   - Teaching/education signal

5. Contact
   - CTA area or page
   - Placeholder email/link targets unless provided

6. Content replacement system
   - Keep project content centralized in a data file, config object, Markdown collection, CMS-ready JSON, or equivalent.
</deliverables>

<implementation_rules>
- Build a usable site as the first screen.
- Use semantic HTML and accessible interactions.
- Make it responsive and polished on desktop and mobile.
- Avoid copied assets from the reference site.
- Avoid purple-gradient, generic SaaS, beige/tan, and over-rounded card aesthetics.
- Avoid fake statistics unless clearly marked as placeholders.
- Use real-looking placeholders for projects and case studies.
- Keep animation subtle and purposeful.
- Run available checks before finishing.
</implementation_rules>

<verification>
Before final response, verify:

- The site builds or runs.
- The homepage is not blank.
- Desktop and mobile layouts do not overlap or clip.
- Navigation works.
- Placeholder content is centralized and easy to edit.
- The design follows the brief and does not clone the reference.
- Case-study placeholders are visible and believable.
</verification>

<final_response>
Lead with what you built. Then list files changed, the command to run locally, and what was verified.
</final_response>
```
