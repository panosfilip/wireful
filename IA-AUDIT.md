# Information Architecture Audit & Recommendation

**Date:** 2026-07-11  
**Scope:** primary navigation, page responsibilities, service discovery, Work taxonomy, case-study browsing, contact routes, and proposed Services content.

## Executive summary

The website’s fundamental portfolio architecture is already sound:

**Homepage → Work → Case study → Related work → Contact**

The main pages also have understandable responsibilities:

- **Work** provides evidence.
- **Approach** explains how the work is done.
- **About** establishes background and credibility.
- **Contact** provides a direct route to Panagiotis.

The site does not need a wholesale IA redesign. Its main gap is that it does not yet give the commercial offer—what someone can hire Panagiotis to do—a sufficiently explicit destination.

The recommended change is to add a focused **Services** page, make **Contact** explicit in primary navigation, and strengthen the relationships between services, relevant work, and enquiry routes.

---

## Current IA assessment

### What works

- The site is small enough to understand without a complex navigation system.
- Work, Approach, and About are conventional, recognizable portfolio labels.
- The homepage gives visitors direct routes into Work and project discussion.
- Case studies include Related Work, keeping visitors inside the portfolio.
- The header remains available while scrolling.
- Work filters support several useful project dimensions.
- Contact exists as a dedicated page with a prominent email route.

### Main IA gaps

1. Services are visible as a list but do not have an explanatory destination.
2. Contact exists but is not represented as a primary-navigation concept.
3. Editorial state, work type, and public status are conflated in the portfolio model.
4. Service vocabulary and Work taxonomy are related but not intentionally connected.
5. Returning from a case study can lose filter and scroll context.
6. The archive primarily describes projects rather than supporting the evaluation needs of different visitors.

---

## Recommended top-level architecture

```text
Home
├── Positioning and introduction
├── Services preview
├── Selected work
├── Approach preview
├── Project-fit scenarios
└── Contact call to action

Work
├── Featured case studies
├── Filtered archive
└── Case studies
    ├── Project overview
    ├── Role and engagement
    ├── Process and outputs
    ├── Results
    └── Related work

Services
├── Website design and redesign
├── Product UI and prototypes
├── Brand and campaign systems
├── UX audits and design consulting
├── AI-assisted design workflows
├── Ways to work together
├── Good-fit scenarios
└── Enquiry routes

Approach
├── Frame
├── Structure
├── Design
├── Deliver
└── Tools and methods

About
├── Professional positioning
├── Experience and background
├── Skills and working context
└── Profile/CV download

Contact
├── Project enquiry
├── Hiring or collaboration
├── General question
└── Direct email and profiles
```

## Recommended primary navigation

**Work · Services · Approach · About · Contact**

Keep **Start a project** as a visually distinct CTA once its destination is functional.

### Why this order

- **Work** serves the dominant portfolio task: evaluating evidence.
- **Services** explains what a visitor can hire Panagiotis to do.
- **Approach** answers how those services are delivered.
- **About** establishes the person and professional background.
- **Contact** supports every enquiry type, not only full projects.
- **Start a project** remains the high-intent action without replacing Contact.

This is a recommendation rather than a rigid rule. Work-first is conventional, but adding Services and Contact is more important than the exact ordering of the first three links.

---

## Page responsibilities

The key IA principle is that Work, Services, and Approach should support one another without duplicating the same page.

### Services: what you can hire me for

The Services page should answer:

- Can Panagiotis solve my type of problem?
- What does the engagement include?
- What will I receive?
- Does he design only, build, or collaborate with developers?
- Which projects prove this capability?
- What is the appropriate next step?

### Work: evidence that I can do it

Work should prioritize:

- The problem and context
- Panagiotis’s exact role
- The nature of the engagement
- Relevant process decisions
- Deliverables and outputs
- Results or honest qualitative outcomes
- Relevant adjacent work

It should not carry the full burden of explaining the service offer.

### Approach: how I deliver it

Approach should explain:

- How an unclear brief becomes a defined problem
- How content, navigation, and flows are structured
- How the interface or visual system is designed
- How the work is prepared for implementation and maintenance

It should not become another catalogue of services or project cards.

### About: why I am credible

About should cover:

- Professional positioning
- Relevant experience
- Teaching, HCI, and multidisciplinary background
- Collaboration style
- Selected skills and tools
- CV/profile access

### Contact: every legitimate route into conversation

Contact should explicitly support:

- Project enquiries
- Hiring opportunities
- Agency or freelance collaboration
- Consulting and audits
- General questions

“Start a project” is a useful CTA, but it should not be the only language used for contact.

---

## Proposed Services page

The Services page should be an **offer page**, not a generic skills inventory. It should describe client problems, scope, outputs, evidence, and next steps.

### Hero

#### Suggested heading

**Services for digital products, websites, and brand systems.**

#### Suggested introduction

> I help teams turn rough briefs, difficult interfaces, and outdated websites into clear systems that can be reviewed, built, and maintained.

#### Primary actions

- **Discuss a project**
- **See relevant work**

The opening should establish the problems being solved before listing deliverables or software.

---

### 1. Website design and redesign

#### Suggested copy

> Website structure and interface design for organisations whose current site has become difficult to use, explain, or maintain. I work from the content and visitor journeys through responsive page design, reusable components, and implementation guidance.

#### Typical work

- Information architecture and content hierarchy
- Website UI and responsive page systems
- Landing pages and campaign sites
- WordPress and Elementor-aware design
- E-commerce structure and interfaces
- Design QA during implementation

#### Typical outputs

- Sitemap and page structure
- Wireframes
- Responsive Figma designs
- Component and page-pattern library
- Production-ready assets
- Handoff and implementation notes

#### Relevant evidence

Link to two or three of the strongest complete cases, such as TEKA, DTK, and Kifissia.

---

### 2. Product UI and prototypes

#### Suggested copy

> Interfaces and prototypes for products, portals, dashboards, and internal tools. I help teams clarify journeys, organise complex information, and turn requirements into a testable interface before development.

#### Typical work

- User flows and task analysis
- Product UI and dashboard design
- Portals and digital-service interfaces
- Figma prototypes
- Component systems and interaction states
- UX reviews and usability improvements

#### Typical outputs

- User flows
- Wireframes
- Interactive prototypes
- Responsive interface designs
- Component specifications
- Developer-ready Figma files

#### Relevant evidence

Link to my1521, OASA, and other product work after those case studies are publication-ready.

---

### 3. Brand and campaign systems

#### Suggested copy

> Visual systems that help a brand remain recognisable across websites, campaigns, social media, email, advertising, and print. The goal is not only to create assets, but to establish a visual language that can keep producing them consistently.

#### Typical work

- Brand identity and visual direction
- Campaign concepts and key visuals
- Digital and social campaign assets
- Email and advertising design
- Landing-page visual systems
- Print and outdoor material

#### Typical outputs

- Visual identity direction
- Campaign toolkit
- Reusable templates
- Digital and print assets
- Usage rules
- Production-ready files

#### Relevant evidence

Link to the strongest complete brand and campaign projects that can be shown publicly.

---

### 4. UX audits and design consulting

This should be a distinct section because it provides a lower-commitment entry point for visitors who are not ready for a full project.

#### Suggested copy

> Focused senior design input for teams that already have a website, interface, or prototype but need clarity on what to improve before investing further.

#### Typical work

- UX and interface audits
- Information-architecture reviews
- Visual hierarchy and consistency reviews
- Figma file and component-system reviews
- Second opinions before development
- Prioritised improvement plans

#### Typical outputs

- Annotated findings
- Severity-ranked recommendations
- Example redesigns where useful
- A practical fix sequence
- Review session with the team

This service creates a natural route for visitors whose real need is “help me understand what to fix first.”

---

### 5. AI-assisted design workflows

This is best presented as a supporting capability rather than an equal standalone service, unless clients already hire Panagiotis specifically for AI workflow work.

#### Suggested copy

> I use AI tools where they improve research synthesis, content structure, UX-writing exploration, visual ideation, and functional prototyping. They support the process; they do not replace design judgment, evidence, or final review.

#### Where it helps

- Organising research and stakeholder input
- Exploring content structures
- Generating and comparing UX-writing options
- Accelerating early visual exploration
- Building testable prototypes
- Supporting design-to-development collaboration

This framing makes the workflow feel current without making the offer tool-led.

---

## Ways to work together

Visitors should be able to understand the possible scale of an engagement without arriving with a perfectly written brief.

### Focused review

A short audit or consultation for an existing site, interface, or prototype.

### Defined project

A website, product interface, prototype, or brand system with an agreed scope and set of deliverables.

### Ongoing design support

Continued design input for teams that need help across product, website, campaign, or production work.

Only include models that Panagiotis genuinely wants to offer. The purpose is clarity, not artificially expanding the service catalogue.

---

## Good-fit scenarios

Problem-based language is more useful than another skills list.

Suggested heading:

**Bring me in when the work has become hard to untangle.**

Suggested scenarios:

- The current website has outgrown its structure.
- A product flow is difficult to use or explain.
- A team needs a Figma system developers can build from.
- A campaign has many outputs but no consistent visual language.
- You need senior design input before committing to a build.
- The brief is still rough and the useful first step is unclear.

This content already exists in related form on the homepage and can be reused or moved rather than duplicated verbatim.

---

## Service boundaries

Clear boundaries improve trust more than a longer capabilities list.

The page should explicitly state whether Panagiotis:

- provides design only;
- designs and builds WordPress/Elementor sites;
- builds front-end prototypes;
- collaborates with client or agency developers;
- provides implementation QA;
- provides post-launch support;
- brings in specialists for development, copywriting, photography, or production.

#### Example boundary copy

> My work focuses on strategy, information architecture, UX/UI, visual systems, Figma prototypes, WordPress-aware design, and implementation support. For specialist development, photography, copywriting, or production needs, I can collaborate with your existing team or trusted partners.

This copy should be adjusted to match the actual delivery model.

---

## Services-to-Work relationships

Services and project tags should be connected, but they should not be treated as the same taxonomy.

```text
Website design and redesign
├── WordPress & Elementor
├── Landing pages
├── E-commerce
├── Information architecture
└── Relevant website cases

Product UI and prototypes
├── UX research
├── Figma prototypes
├── Design systems
├── Portals and dashboards
└── Relevant product cases

Brand and campaign systems
├── Brand identity
├── Campaigns
├── Digital assets
├── Print and OOH
└── Relevant brand/campaign cases

UX audits and consulting
├── Design audits
├── IA reviews
├── Prototype reviews
├── Advisory
└── Relevant audit examples
```

### Recommended data model

- Maintain one canonical **services** vocabulary for offer pages and enquiry choices.
- Maintain a separate **project taxonomy** for Work filtering.
- Add explicit mappings from each service to relevant project tags and selected case studies.
- Do not force every service into a Work filter when no honest mapping exists.

This creates intentional cross-navigation without conflating different concepts.

---

## Work archive recommendations

### Separate content states

Do not use one field for several meanings.

```text
editorialState: draft | complete
visibility: private | unlisted | archive | featured
workType: live | delivered | in-progress | concept
```

This prevents an unfinished commissioned case study from being publicly described as a speculative Concept.

### Support common evaluation paths

The archive should make these routes easy to identify:

- Featured case studies
- Live work
- Product UI
- Websites
- Public sector
- Commercial work
- Brand and campaign work

The existing filter system already provides much of this. Correct status modelling and tighter publication rules are the missing layer.

### Preserve browsing context

When visitors open a case and return to Work, preserve:

- active filters;
- archive scroll position;
- the project they previously opened.

Remove or scope the global manual scroll-restoration behavior. A breadcrumb is useful, but preserving context is the higher-value fix.

---

## Contact architecture

The site should distinguish between a general destination and a high-intent CTA.

### Contact

Supports:

- project enquiries;
- hiring opportunities;
- agency collaboration;
- consulting and audits;
- speaking, teaching, or general questions.

### Start a project

Supports visitors ready to provide project details.

The project form should not replace the Contact route. Plain email should remain visible, and the form should be optional rather than the only apparently preferred path.

Suggested final Services CTA:

### Not sure what the project needs yet?

> Send the rough version—a current site, prototype, brief, or even a description of what is not working. I can help identify the useful first step.

Actions:

- **Tell me what you want to improve**
- **Email me directly**
- **Browse all work**

---

## What not to add

- Do not create a separate page for every individual service yet.
- Do not repeat identical Services copy across Home, Work, and Approach.
- Do not make software tools the primary organising principle.
- Do not add audience-specific navigation unless evidence shows visitors need it.
- Do not expose incomplete case studies merely to make the archive look larger.
- Do not force services and project tags into one taxonomy.

The site’s small scale is a strength. The goal is clearer responsibilities and stronger connections, not more pages for their own sake.

---

## Suggested implementation order

| Priority | IA change | Reason |
|---|---|---|
| 1 | Add Services page using the structure above | Fills the largest missing visitor question: what can I hire you for? |
| 2 | Add Contact to primary navigation | Gives every enquiry type an explicit destination |
| 3 | Link each service to selected relevant work | Connects offer to evidence |
| 4 | Separate editorial state, visibility, and work type | Makes the archive trustworthy and maintainable |
| 5 | Preserve Work filters and scroll context | Improves multi-project evaluation |
| 6 | Simplify and clarify contact routes | Supports both low- and high-intent visitors |
| 7 | Reconcile service labels and project-tag mappings | Makes cross-navigation intentional |
| 8 | Refine homepage previews after Services exists | Removes duplication and gives each page a clear responsibility |

---

## Success criteria

The revised IA is successful when a first-time visitor can answer the following without guessing:

1. What kinds of problems does Panagiotis solve?
2. What can I hire him to deliver?
3. Does he design, build, or collaborate with a development team?
4. Which projects prove the service I need?
5. How does he approach the work?
6. Is my project or enquiry a reasonable fit?
7. How can I contact him if I am not ready to complete a full project brief?
8. Can I browse several relevant projects and return without losing my place?

The current architecture already answers parts of these questions. The Services page and clearer cross-navigation complete the system without requiring a larger or more complicated website.

