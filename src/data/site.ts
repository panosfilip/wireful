/**
 * Central site configuration.
 * Everything personal or contact-related lives here. Edit this file,
 * not the components. Bracketed values like [ADD REAL EMAIL] are
 * deliberate placeholders and are visually flagged on the site.
 */
export const site = {
  name: "WIREFUL",
  owner: "Panagiotis Filippaios",
  fullName: "Panagiotis Filippaios",
  role: "Senior UI/UX Engineer and Freelance Web Designer",
  headline:
    "Websites, product UI, brand systems, and design consulting shaped with clarity from idea to launch.",
  intro:
    "I am Panagiotis Filippaios, a senior UI/UX engineer and graphic designer in Athens. I help founders, businesses, agencies, and product teams turn rough briefs into polished Figma prototypes, responsive websites, campaign assets, AI-assisted digital experiences, and hands-on design consulting.",
  location: "Athens, Greece",
  email: "panosfilip@gmail.com",
  emailHref: "mailto:panosfilip@gmail.com",
  instagramHref: "https://www.instagram.com/captain.filipp/",
  linkedinHref: "https://www.linkedin.com/in/panosfilip",
  whatsappHref: "https://wa.me/306939261039",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/panosfilip", note: "panosfilip" },
    {
      label: "Portfolio PDF",
      href: "docs/panagiotis-filippaios-portfolio.pdf",
      note: "Graphic design, web, and UI/UX samples",
    },
    {
      label: "Profile PDF",
      href: "docs/panagiotis-filippaios-profile.pdf",
      note: "Experience and background",
    },
  ],
  description:
    "WIREFUL is the portfolio of Panagiotis Filippaios, a senior UI/UX engineer and graphic designer in Athens working across Figma, AI-assisted websites, WordPress, brand systems, digital products, and design consulting.",
};

/** Capability ticker shown in the homepage marquee. */
export const capabilities = [
  "Websites",
  "Product UI",
  "Brand systems",
  "Figma prototypes",
  "WordPress",
  "Campaign assets",
  "Design audits",
  "AI-assisted workflows",
  "Consulting",
];

export const offerAreas = [
  {
    title: "Website design and redesign",
    body: "Figma website concepts, landing pages, microsites, and WordPress or Elementor-ready page systems shaped around real content, responsive behavior, and clear conversion paths.",
    tags: ["Websites", "WordPress", "Responsive"],
  },
  {
    title: "Product UI and prototypes",
    body: "App screens, dashboards, portals, internal tools, user flows, component logic, and handoff-ready Figma files for teams that need interface quality before build.",
    tags: ["Product UI", "Figma", "Handoff"],
  },
  {
    title: "Brand and campaign systems",
    body: "Logo directions, visual identities, campaign assets, newsletters, social media, ads, OOH material, print production, illustrations, and motion directions.",
    tags: ["Brand", "Campaigns", "Assets"],
  },
  {
    title: "AI-assisted design process",
    body: "LLMs and generative tools used inside a serious design workflow: research synthesis, content structure, UX writing routes, visual exploration, and prototype planning.",
    tags: ["AI workflow", "Research", "Content"],
  },
  {
    title: "Design consulting",
    body: "Independent UX and visual audits, second opinions before a build starts, and hands-on advisory for founders and teams who want senior design judgment without a full engagement.",
    tags: ["Consulting", "UX audits", "Advisory"],
  },
];

export const proofPoints = [
  { value: "10+", label: "years across UI/UX, web, brand, print, and digital campaigns" },
  { value: "200+", label: "freelance projects delivered for startups, SMEs, and established teams" },
  { value: "98%", label: "positive feedback rate reported for design quality and deadline reliability" },
  { value: "HCI", label: "MSc background and UI design teaching at the University of Athens" },
];

export const approachPillars = [
  {
    number: "01",
    title: "Frame",
    body: "Turn a loose brief into a clear product, website, or brand problem.",
    detail:
      "I start by getting the business goal, audience, content, and constraints into plain language. That might mean a stakeholder workshop, a quick audit, competitor review, or AI-assisted research synthesis. The point is simple: agree what we are solving before the work turns into screens.",
    artifacts: [
      { name: "Stakeholder input", description: "The context, priorities, and constraints from the people closest to the work." },
      { name: "Brief & goals audit", description: "A focused check that turns the brief into clear, useful objectives." },
      { name: "Competitor review", description: "A view of category patterns, gaps, and the quality bar to meet." },
      { name: "AI-assisted research synthesis", description: "A faster way to organise inputs and surface the signals worth acting on." },
      { name: "Problem statement", description: "One shared definition of the challenge the project is here to solve." },
    ],
  },
  {
    number: "02",
    title: "Structure",
    body: "Shape content, navigation, and flows so the interface has a spine.",
    detail:
      "Sitemaps, user flows, wireframes, content grouping, and interaction logic come before the polished UI. For web projects, this is where WordPress structure, reusable page patterns, and maintainable content rules are decided.",
    artifacts: [
      { name: "Sitemap", description: "A map of the pages and how the content is organised." },
      { name: "User flows", description: "The key paths people take to complete a task or reach a goal." },
      { name: "Wireframes", description: "Low-fidelity layouts that settle hierarchy before visual polish." },
      { name: "Content model", description: "The content types and rules that keep pages coherent as they grow." },
      { name: "Reusable page patterns", description: "Flexible building blocks that make future pages easier to create." },
    ],
  },
  {
    number: "03",
    title: "Design",
    body: "Create the visual system, prototype, and brand language in Figma.",
    detail:
      "I design with real content, responsive states, components, and the kind of edge cases that show up after launch. Figma is the working space for UI, prototypes, visual systems, and handoff. AI tools help me explore directions faster, but the final decisions stay grounded in usability, typography, and brand fit.",
    artifacts: [
      { name: "Figma UI system", description: "The foundations that keep the interface consistent from screen to screen." },
      { name: "Interactive prototype", description: "A realistic way to review important journeys before development starts." },
      { name: "Components & states", description: "Reusable UI parts, including the states people encounter in real use." },
      { name: "Responsive layouts", description: "Layouts designed to work deliberately across viewport sizes." },
      { name: "Visual identity fit", description: "A visual direction that feels distinctive while serving the product's purpose." },
    ],
  },
  {
    number: "04",
    title: "Deliver",
    body: "Prepare designs, assets, and documentation that teams can actually use.",
    detail:
      "The work is not finished when the mockup looks good. I prepare assets, component notes, WordPress or Elementor guidance, QA notes, and design documentation so the site or product can keep its quality after handoff.",
    artifacts: [
      { name: "Handoff-ready files", description: "Organised source files that make the intended build easy to understand." },
      { name: "Design documentation", description: "The decisions, rules, and rationale that should carry into production." },
      { name: "Production assets", description: "Prepared visuals, exports, and files ready for the final environment." },
      { name: "WordPress / Elementor guidance", description: "Practical direction for translating the system into a manageable site." },
      { name: "QA notes", description: "A final set of checks to protect quality as the work goes live." },
    ],
  },
];

/** Working principles shown on the approach page. */
export const principles = [
  {
    title: "Solve the right problem first",
    body: "Most design fails by confidently polishing the wrong thing. Framing comes before screens: goal, audience, content, constraints — agreed in plain language.",
  },
  {
    title: "Real content, real constraints",
    body: "I design with actual content, responsive states, and the edge cases that show up after launch — not lorem ipsum and best-case mockups.",
  },
  {
    title: "Built to be maintained",
    body: "A design is only as good as its second year. Systems, documentation, and WordPress-aware decisions keep the quality alive after handoff.",
  },
];

export const skills = {
  design: [
    { title: "Product UI & user journeys", description: "Clear interfaces and flows that help people complete important tasks with confidence." },
    { title: "Websites & e-commerce experiences", description: "Content-led sites and shopping journeys built around real goals, not just page templates." },
    { title: "Brand identity & visual systems", description: "Distinctive identity work that carries consistently across digital and campaign touchpoints." },
    { title: "Information architecture & content structure", description: "Navigation, hierarchy, and content rules that make complex information feel simple." },
    { title: "Figma prototypes & design systems", description: "Reusable components and realistic prototypes that bring the intended experience into focus." },
    { title: "Visual audits & interface refinement", description: "A practical view of what is getting in the way, and where the greatest design gains are." },
  ],
  tools: [
    { title: "Figma, FigJam & Dev Mode", description: "The main workspace for interface design, collaboration, prototypes, and handoff." },
    { title: "WordPress, Elementor & WooCommerce", description: "Design decisions shaped for editable, maintainable sites and online stores." },
    { title: "Adobe Illustrator, Photoshop & InDesign", description: "The tools behind production-ready visual assets, identity work, and print materials." },
    { title: "AI-assisted research, ideation & prototyping", description: "Faster exploration and synthesis, always filtered through design judgement." },
    { title: "Campaign, social & email design", description: "Supporting assets that make a launch feel considered wherever people encounter it." },
  ],
  research: [
    { title: "UX discovery & user-centred design", description: "Early research that replaces assumptions with a clearer view of users and context." },
    { title: "Usability testing & Think Aloud sessions", description: "Direct evidence of where people hesitate, misunderstand, or lose momentum." },
    { title: "Interviews, focus groups & stakeholder input", description: "The perspectives that help align business knowledge with real user needs." },
    { title: "Competitor analysis & category research", description: "A sharper read on familiar patterns, opportunities, and the expected quality bar." },
    { title: "Design rationale & documentation", description: "Clear reasoning that helps the work stay coherent as it moves into delivery." },
  ],
};
