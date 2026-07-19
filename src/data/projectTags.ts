/**
 * Controlled project-tag taxonomy.
 *
 * Use at most six tags per case study. Start with the primary discipline, then add only
 * methods and contexts that are materially supported by the case-study content.
 * Add a new tag only when it represents a recurring capability or a useful portfolio filter.
 */
export const projectTagDefinitions = {
  web: {
    label: "Web",
    mark: "WE",
    tone: "violet",
    group: "discipline",
    description:
      "Websites shaped around clear content, useful journeys, and the realities of publishing and maintaining them.",
  },
  product: {
    label: "Product UI",
    mark: "UI",
    tone: "rose",
    group: "discipline",
    description:
      "Interface design for services and digital products, from the first user flow to the details that make everyday tasks feel straightforward.",
  },
  brand: {
    label: "Brand",
    mark: "BR",
    tone: "amber",
    group: "discipline",
    description:
      "Identity work that gives organisations a distinct, practical visual language across screens, campaigns, and printed material.",
  },
  campaign: {
    label: "Campaign",
    mark: "CA",
    tone: "lime",
    group: "discipline",
    description:
      "Focused campaign ideas carried through landing pages, social assets, email, and the other places people meet them.",
  },

  research: {
    label: "Research",
    mark: "UX",
    tone: "cyan",
    group: "method",
    description:
      "Research used to understand the people, constraints, and evidence behind a design decision before settling on a direction.",
  },
  prototype: {
    label: "Prototype",
    mark: "PR",
    tone: "blue",
    group: "method",
    description:
      "Interactive prototypes that make an idea tangible early enough to test the flow, explain it clearly, and improve it.",
  },
  systems: {
    label: "Design system",
    mark: "DS",
    tone: "green",
    group: "method",
    description:
      "Reusable components, patterns, and rules that keep a growing product consistent without making every screen look the same.",
  },
  wordpress: {
    label: "WordPress",
    mark: "WP",
    tone: "violet",
    group: "method",
    description:
      "WordPress sites planned for the people who run them as well as the people who visit, with flexible pages and manageable content.",
  },
  commerce: {
    label: "E-commerce",
    mark: "EC",
    tone: "amber",
    group: "method",
    description:
      "Online shops that help people understand what they are buying and move from browsing to checkout without unnecessary friction.",
  },
  landing: {
    label: "Landing pages",
    mark: "LP",
    tone: "cyan",
    group: "method",
    description:
      "Single-purpose pages that give a campaign, launch, or offer a clear story and an obvious next step.",
  },
  motion: {
    label: "Motion build",
    mark: "MO",
    tone: "amber",
    group: "method",
    description:
      "Motion and front-end details used to guide attention, show change, and add character without getting in the way.",
  },
  ai: {
    label: "AI-assisted",
    mark: "AI",
    tone: "green",
    group: "method",
    description:
      "Projects where AI helped with research, exploration, or production, with the final decisions still grounded in the brief and design judgement.",
  },
  audit: {
    label: "Design audit",
    mark: "AU",
    tone: "rose",
    group: "method",
    description:
      "Close reviews of an existing experience to find what is unclear, inconsistent, or slowing people down, and decide what to fix first.",
  },

  public: {
    label: "Public sector",
    mark: "PS",
    tone: "blue",
    group: "context",
    description:
      "Public services and institutional websites designed to make complex information and important tasks easier to navigate.",
  },
  commercial: {
    label: "Commercial",
    mark: "CO",
    tone: "violet",
    group: "context",
    description:
      "Work for businesses that need to explain their value clearly, earn confidence, and turn attention into a useful next step.",
  },
  hospitality: {
    label: "Hospitality",
    mark: "HO",
    tone: "amber",
    group: "context",
    description:
      "Digital and brand work for places to stay, eat, and visit, balancing atmosphere with the practical details people need to choose.",
  },
  culture: {
    label: "Culture & media",
    mark: "CM",
    tone: "rose",
    group: "context",
    description:
      "Websites and products for media, music, and cultural organisations, built around discovery, editorial content, and a strong point of view.",
  },
  education: {
    label: "Education",
    mark: "ED",
    tone: "lime",
    group: "context",
    description:
      "Learning platforms and education websites that organise programmes, resources, and opportunities so people can find their way in.",
  },
  healthcare: {
    label: "Healthcare",
    mark: "HC",
    tone: "green",
    group: "context",
    description:
      "Healthcare experiences that treat clarity and reassurance as part of the service, especially when the subject is personal or unfamiliar.",
  },
} as const;

export type ProjectTag = keyof typeof projectTagDefinitions;

export type TagTone = (typeof projectTagDefinitions)[ProjectTag]["tone"];

/**
 * Hue (degrees) of each tone's dark-theme hex in hero-home.css
 * (.capability-directory-item--*). The case-study hero glow is tinted with
 * the hue of the project's first tag; keep in sync if those hexes change.
 */
export const toneHues: Record<TagTone, number> = {
  violet: 257,
  rose: 335,
  amber: 27,
  lime: 74,
  green: 141,
  cyan: 188,
  blue: 220,
};
