/**
 * Controlled project-tag taxonomy.
 *
 * Use at most three tags per case study: a primary discipline, then a method and/or context.
 * Add a new tag only when it represents a recurring capability or a useful portfolio filter.
 */
export const projectTagDefinitions = {
  web: { label: "Web", mark: "WE", tone: "violet", group: "discipline" },
  product: { label: "Product UI", mark: "UI", tone: "rose", group: "discipline" },
  brand: { label: "Brand", mark: "BR", tone: "amber", group: "discipline" },
  campaign: { label: "Campaign", mark: "CA", tone: "lime", group: "discipline" },

  research: { label: "Research", mark: "UX", tone: "cyan", group: "method" },
  prototype: { label: "Prototype", mark: "PR", tone: "blue", group: "method" },
  systems: { label: "Design system", mark: "DS", tone: "green", group: "method" },
  wordpress: { label: "WordPress", mark: "WP", tone: "violet", group: "method" },
  commerce: { label: "E-commerce", mark: "EC", tone: "amber", group: "method" },
  landing: { label: "Landing pages", mark: "LP", tone: "cyan", group: "method" },
  motion: { label: "Motion build", mark: "MO", tone: "amber", group: "method" },
  ai: { label: "AI-assisted", mark: "AI", tone: "green", group: "method" },
  audit: { label: "Design audit", mark: "AU", tone: "rose", group: "method" },

  public: { label: "Public sector", mark: "PS", tone: "blue", group: "context" },
  commercial: { label: "Commercial", mark: "CO", tone: "violet", group: "context" },
  hospitality: { label: "Hospitality", mark: "HO", tone: "amber", group: "context" },
  culture: { label: "Culture & media", mark: "CM", tone: "rose", group: "context" },
  education: { label: "Education", mark: "ED", tone: "lime", group: "context" },
  healthcare: { label: "Healthcare", mark: "HC", tone: "green", group: "context" },
} as const;

export type ProjectTag = keyof typeof projectTagDefinitions;
