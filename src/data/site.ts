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
    "Digital products and brands, made clear enough to build.",
  intro:
    "I'm Panagiotis Filippaios, a senior UI/UX engineer and designer in Athens. I turn rough briefs into interfaces, websites, and brand systems that teams can build and maintain.",
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
    "WIREFUL is the portfolio of Panagiotis Filippaios, a UI/UX engineer and graphic designer in Athens working on Figma, WordPress, websites, product UI, brand systems, and design consulting.",
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
    body: "Figma website concepts, landing pages, microsites, and page systems for WordPress or Elementor. The work accounts for real content, responsive behaviour, and the actions a page needs to support.",
    tags: ["Websites", "WordPress", "Responsive"],
  },
  {
    title: "Product UI and prototypes",
    body: "App screens, dashboards, portals, internal tools, user flows, component logic, and Figma files prepared for handoff before development begins.",
    tags: ["Product UI", "Figma", "Handoff"],
  },
  {
    title: "Brand and campaign systems",
    body: "Logo directions, visual identities, campaign assets, newsletters, social media, ads, OOH material, print production, illustrations, and motion directions.",
    tags: ["Brand", "Campaigns", "Assets"],
  },
  {
    title: "AI-assisted design process",
    body: "LLMs and generative tools used for research synthesis, content structure, UX writing options, visual exploration, and prototype planning. Design decisions stay with the brief, evidence, and final review.",
    tags: ["AI workflow", "Research", "Content"],
  },
  {
    title: "Design consulting",
    body: "UX and visual audits, second opinions before a build starts, and practical advice for founders and teams who need senior design input without a full project.",
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
    body: "Turn a loose brief into a defined product, website, or brand problem.",
    detail:
      "I put the business goal, audience, content, and constraints into plain language. Depending on the project, that can mean a workshop, a quick audit, a competitor review, or research synthesis. We agree on the problem before moving into screens.",
    artifacts: [
      { name: "Stakeholder input", description: "The context, priorities, and constraints from the people closest to the work." },
      { name: "Brief & goals audit", description: "A focused review that turns the brief into specific objectives." },
      { name: "Competitor review", description: "A review of category patterns, gaps, and comparable products or sites." },
      { name: "AI-assisted research synthesis", description: "A way to organise inputs and identify the findings that need a design response." },
      { name: "Problem statement", description: "A shared definition of the problem the project needs to solve." },
    ],
  },
  {
    number: "02",
    title: "Structure",
    body: "Set the content, navigation, and flows before designing the interface.",
    detail:
      "Sitemaps, user flows, wireframes, content grouping, and interaction logic come before the visual design. For web projects, this is where I set the WordPress structure, reusable page patterns, and content rules.",
    artifacts: [
      { name: "Sitemap", description: "A map of the pages and how the content is organised." },
      { name: "User flows", description: "The key paths people take to complete a task or reach a goal." },
      { name: "Wireframes", description: "Low-fidelity layouts that settle hierarchy before visual polish." },
      { name: "Content model", description: "The content types and rules that keep pages consistent as the site grows." },
      { name: "Reusable page patterns", description: "Building blocks that make new pages quicker to produce." },
    ],
  },
  {
    number: "03",
    title: "Design",
    body: "Create the visual system, prototype, and interface in Figma.",
    detail:
      "I design with real content, responsive states, components, and the edge cases that appear in use. Figma is where I create the UI, prototypes, visual system, and handoff. AI tools can speed up exploration, but the final choices are tested against usability, typography, and the brand.",
    artifacts: [
      { name: "Figma UI system", description: "The rules and components that keep the interface consistent from screen to screen." },
      { name: "Interactive prototype", description: "A realistic way to review important journeys before development starts." },
      { name: "Components & states", description: "Reusable UI parts, including the states people encounter in real use." },
      { name: "Responsive layouts", description: "Layouts designed for the viewport sizes people actually use." },
      { name: "Visual identity fit", description: "A visual direction that fits the brand and the job the product needs to do." },
    ],
  },
  {
    number: "04",
    title: "Deliver",
    body: "Prepare designs, assets, and documentation for the people who will build and run them.",
    detail:
      "I prepare assets, component notes, WordPress or Elementor guidance, QA notes, and documentation so the site or product can be built without losing the decisions made in design.",
    artifacts: [
      { name: "Handoff-ready files", description: "Organised source files that make the intended build clear." },
      { name: "Design documentation", description: "The decisions and rules that need to carry into production." },
      { name: "Production assets", description: "Prepared visuals, exports, and files ready for the final environment." },
      { name: "WordPress / Elementor guidance", description: "Practical direction for translating the system into a manageable site." },
      { name: "QA notes", description: "Checks for the final build before it goes live." },
    ],
  },
];

/** Working principles shown on the approach page. */
export const principles = [
  {
    title: "Solve the right problem first",
    body: "Polishing the wrong thing is still wasted work. Before screens, I define the goal, audience, content, and constraints in plain language.",
  },
  {
    title: "Real content, real constraints",
    body: "I use actual content, responsive states, and the edge cases that show up in use, not lorem ipsum and best-case mockups.",
  },
  {
    title: "Built to be maintained",
    body: "A design has to survive updates. Systems, documentation, and WordPress-aware decisions help teams maintain it after handoff.",
  },
];

export const skills = {
  design: [
    { title: "Product UI & user journeys", description: "Interfaces and flows for the tasks people need to complete." },
    { title: "Websites & e-commerce", description: "Content-led sites and shopping flows built around real user and business goals." },
    { title: "Brand identity & visual systems", description: "Identity work applied consistently across digital and campaign materials." },
    { title: "Information architecture & content structure", description: "Navigation, hierarchy, and content rules for complex information." },
    { title: "Figma prototypes & design systems", description: "Reusable components and prototypes that show how the product should behave." },
    { title: "Visual audits & interface refinement", description: "A review of what is getting in the way and what to change first." },
  ],
  tools: [
    { title: "Figma, FigJam & Dev Mode", description: "The main workspace for interface design, collaboration, prototypes, and handoff." },
    { title: "WordPress, Elementor & WooCommerce", description: "Design decisions for editable sites and online stores." },
    { title: "Adobe Illustrator, Photoshop & InDesign", description: "Visual assets, identity work, and print materials prepared for production." },
    { title: "AI-assisted research, ideation & prototyping", description: "Research synthesis and early exploration reviewed through design judgement." },
    { title: "Campaign, social & email design", description: "Supporting assets for launches, social channels, and email." },
  ],
  research: [
    { title: "UX discovery & user-centred design", description: "Early research that tests assumptions against users and their context." },
    { title: "Usability testing & Think Aloud sessions", description: "Direct evidence of where people hesitate, misunderstand, or lose momentum." },
    { title: "Interviews, focus groups & stakeholder input", description: "Input from users and the people who know the business and service." },
    { title: "Competitor analysis & category research", description: "A review of familiar patterns and gaps in comparable products." },
    { title: "Design rationale & documentation", description: "The reasoning that needs to stay with the work during delivery." },
  ],
};
