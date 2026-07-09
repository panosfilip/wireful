/**
 * Case-study content model.
 *
 * To replace a placeholder with a real project: edit the matching entry,
 * flip `status` to "draft" or "published", and swap `cover` from a motif
 * to a real image (`type: "image", src: "/images/...", alt: "..."`).
 * Bracketed values like [ADD REAL OUTCOME] are deliberate placeholders
 * and are visually flagged on the site until replaced.
 */
import type { ProjectTag } from "./projectTags";

export type CaseStudyStatus = "placeholder" | "draft" | "published";

export type CoverMotif =
  | "sitemap"
  | "search"
  | "homepage"
  | "landing"
  | "audit"
  | "signage"
  | "portal";

export type CaseStudy = {
  slug: string;
  title: string;
  status: CaseStudyStatus;
  year?: string;
  clientType?: string;
  summary: string;
  problem: string;
  role: string[];
  services: string[];
  tools: string[];
  tags: ProjectTag[];
  cover: {
    type: "placeholder" | "image" | "video";
    motif: CoverMotif;
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

const namedUiUxProjects: CaseStudy[] = [
  {
    slug: "spiritual-living-corfu",
    title: "Spiritual Living Corfu",
    status: "draft",
    clientType: "Hospitality website",
    summary: "UXPin website prototype for Spiritual Living Corfu, designed to present a calm, clear digital journey for a hospitality experience.",
    problem: "The website needed to communicate a distinctive retreat offering while making the practical information easy to browse.",
    role: ["Website UI design", "UX prototype", "Visual direction"],
    services: ["Website design", "UX design"],
    tools: ["UXPin"],
    tags: ["web", "prototype", "hospitality"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website interface concept for Spiritual Living Corfu" },
    sections: [{ heading: "Output", body: "A website prototype structured around the experience, accommodation information, and a clear path to enquiry." }],
  },
  {
    slug: "holiways-crete",
    title: "Holiways Crete",
    status: "draft",
    clientType: "Hospitality website",
    summary: "UXPin website prototype for Holiways Crete, balancing destination storytelling with a practical, easy-to-navigate web experience.",
    problem: "Visitors needed to understand the offer quickly while still feeling the character of the destination.",
    role: ["Website UI design", "UX prototype", "Visual direction"],
    services: ["Website design", "UX design"],
    tools: ["UXPin"],
    tags: ["web", "prototype", "hospitality"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website interface concept for Holiways Crete" },
    sections: [{ heading: "Output", body: "A responsive website prototype that combines editorial presentation with clear navigation and conversion paths." }],
  },
  {
    slug: "oasa-telematics-redesign",
    title: "OASA Telematics App Redesign",
    status: "draft",
    clientType: "University of Athens dissertation project",
    summary: "Figma redesign concept for the OASA Telematics app, focused on making public-transport information clearer and easier to act on.",
    problem: "Transport information has to work under time pressure, with routes, arrivals, and decisions visible at a glance.",
    role: ["UX research", "App UI redesign", "Figma prototype"],
    services: ["Product UI", "UX design", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "research", "public"],
    cover: { type: "placeholder", motif: "portal", alt: "Public transport app interface redesign" },
    sections: [{ heading: "Output", body: "A Figma prototype for a clearer, more task-focused public-transport app experience." }],
  },
  {
    slug: "sfera-music-radio-platforms",
    title: "Sfera 102.2 & Music 89.2",
    status: "draft",
    clientType: "Radio platforms",
    summary: "Figma website concepts for music radio brands, designed around program discovery, live listening, and editorial content.",
    problem: "The platforms needed to make live listening and station content immediate without losing each brand's personality.",
    role: ["Website UI design", "Figma prototype", "Visual direction"],
    services: ["Website design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "culture"],
    cover: { type: "placeholder", motif: "homepage", alt: "Music radio platform interface concept" },
    sections: [{ heading: "Output", body: "Website prototypes that bring live radio, programming, and editorial content into one clear interface." }],
  },
  {
    slug: "iq-media-hub",
    title: "IQ Media Hub",
    status: "draft",
    clientType: "University of Athens & Nice Matin Media Group",
    summary: "Figma prototype for IQ Media Hub, a digital platform connecting media-focused content and collaboration.",
    problem: "A multi-partner media initiative needed a digital structure that made its content and purpose easier to understand.",
    role: ["Information architecture", "Website UI design", "Figma prototype"],
    services: ["Web design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "research", "education"],
    cover: { type: "placeholder", motif: "search", alt: "Media hub website interface concept" },
    sections: [{ heading: "Output", body: "A Figma prototype for a media hub with a clearer content structure and public-facing interface." }],
  },
  {
    slug: "analysis-platform",
    title: "Analysis",
    status: "draft",
    clientType: "University of Athens",
    summary: "Figma prototype for Analysis, an academic digital platform shaped around clear content hierarchy and discoverability.",
    problem: "Research-led content needed an interface that was credible, readable, and straightforward to navigate.",
    role: ["Information architecture", "Website UI design", "Figma prototype"],
    services: ["Web design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "research", "education"],
    cover: { type: "placeholder", motif: "search", alt: "Academic content platform interface concept" },
    sections: [{ heading: "Output", body: "A website prototype that brings an academic content platform into a more legible digital experience." }],
  },
  {
    slug: "demo-pharmaceutical",
    title: "DEMO Pharmaceutical",
    status: "draft",
    clientType: "Pharmaceutical company",
    summary: "Figma website prototype for DEMO Pharmaceutical, designed to give complex corporate and product information a clear visual hierarchy.",
    problem: "The interface had to communicate trust and scale while helping distinct audiences find the right information quickly.",
    role: ["Website UI design", "Information architecture", "Figma prototype"],
    services: ["Web design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "healthcare"],
    cover: { type: "placeholder", motif: "homepage", alt: "Pharmaceutical company website interface concept" },
    sections: [{ heading: "Output", body: "A Figma website prototype with a clear structure for corporate and product communication." }],
  },
  {
    slug: "cymoid-productions",
    title: "Cymoid",
    status: "draft",
    clientType: "Cymoid Productions",
    summary: "Figma website prototype for Cymoid Productions, creating a distinctive digital presentation for a creative production company.",
    problem: "The website needed to foreground the work while keeping the experience focused and easy to explore.",
    role: ["Website UI design", "Figma prototype", "Visual direction"],
    services: ["Website design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "culture"],
    cover: { type: "placeholder", motif: "landing", alt: "Creative production company website interface concept" },
    sections: [{ heading: "Output", body: "A Figma prototype that frames production work in a focused, visually expressive website experience." }],
  },
  {
    slug: "aftersalespro-redesign",
    title: "AftersalesPro Redesign Concept",
    status: "draft",
    clientType: "AftersalesPro",
    summary: "Figma redesign concept for AftersalesPro, exploring a clearer product interface for a future platform refresh.",
    problem: "The concept needed to clarify product structure and interaction patterns before a future redesign moved into delivery.",
    role: ["Product UI design", "UX audit", "Figma prototype"],
    services: ["Product UI", "UI redesign", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "audit", "commercial"],
    cover: { type: "placeholder", motif: "audit", alt: "Product interface redesign concept" },
    sections: [{ heading: "Output", body: "A Figma redesign concept that establishes a clearer foundation for a future product refresh." }],
  },
  {
    slug: "synapsync-netcompany-intrasoft",
    title: "SynapSync",
    status: "draft",
    clientType: "Netcompany Intrasoft",
    summary: "Figma prototype for SynapSync, created for Netcompany Intrasoft as a concept presentation for a connected digital product.",
    problem: "The concept needed to express a complex product idea through a coherent interface and presentation-ready user flows.",
    role: ["Product UI design", "UX flows", "Figma prototype"],
    services: ["Product UI", "UX design", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "prototype", "commercial"],
    cover: { type: "placeholder", motif: "portal", alt: "Enterprise product interface concept" },
    sections: [{ heading: "Output", body: "A Figma prototype and concept presentation for a connected enterprise product experience." }],
  },
  {
    slug: "choose-website-redesign",
    title: "Choose Website Redesign",
    status: "draft",
    clientType: "Digital service",
    summary:
      "Website redesign work for Choose, focused on giving the offer a clearer digital structure and presentation.",
    problem:
      "The digital presence needed a more deliberate hierarchy so visitors could understand the offer and find the next step without unnecessary friction.",
    role: ["Website UI redesign", "Information architecture", "Figma prototype"],
    services: ["Website design", "UX design"],
    tools: ["Figma"],
    tags: ["web", "prototype", "commercial"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website redesign interface for Choose" },
    sections: [
      {
        heading: "Output",
        body: "A clearer website direction with responsive page layouts and a prototype-ready design system.",
      },
    ],
  },
  {
    slug: "pino-pizzeria-website",
    title: "Pino Pizzeria",
    status: "draft",
    clientType: "Restaurant",
    summary:
      "Website UI work for Pino, a Roman pizzeria in Glyfada, designed to bring the restaurant's character, menu, and practical visit information into one clear experience.",
    problem:
      "The website needed to carry the warmth and craft of the restaurant while making the menu, location, and booking journey easy to reach.",
    role: ["Website UI design", "Visual direction", "Figma prototype"],
    services: ["Website design", "Visual direction"],
    tools: ["Figma"],
    tags: ["web", "prototype", "hospitality"],
    cover: { type: "placeholder", motif: "homepage", alt: "Restaurant website interface for Pino Pizzeria" },
    sections: [
      {
        heading: "Output",
        body: "A responsive restaurant website direction built around atmosphere, menu discovery, and an easy route to visit or book.",
      },
    ],
  },
  {
    slug: "marios-detsis-paediatrician",
    title: "Dr. Marios Detsis",
    status: "draft",
    clientType: "Paediatric healthcare",
    summary:
      "Website design for Dr. Marios Detsis, organising medical information into a calm, clear digital presence for patients and parents.",
    problem:
      "The experience needed to make professional background, services, and contact information easy to understand for families seeking reliable care.",
    role: ["Website UI design", "Content structure", "Figma prototype"],
    services: ["Website design", "UX design"],
    tools: ["Figma"],
    tags: ["web", "prototype", "healthcare"],
    cover: { type: "placeholder", motif: "homepage", alt: "Healthcare website interface for Dr. Marios Detsis" },
    sections: [
      {
        heading: "Output",
        body: "A patient-focused website structure that balances medical credibility with clear, approachable information.",
      },
    ],
  },
  {
    slug: "repower-eu",
    title: "REPower.eu",
    status: "draft",
    clientType: "Energy initiative",
    summary:
      "Digital design work for REPower.eu, presenting an energy-focused initiative through a clear, accessible web experience.",
    problem:
      "The platform needed to turn a complex energy message into a focused digital journey with clear calls to action and content hierarchy.",
    role: ["Website UI design", "Campaign design", "Figma prototype"],
    services: ["Website design", "Campaign design"],
    tools: ["Figma"],
    tags: ["campaign", "prototype", "public"],
    cover: { type: "placeholder", motif: "landing", alt: "Energy initiative landing page for REPower.eu" },
    sections: [
      {
        heading: "Output",
        body: "A landing-page direction that makes an energy initiative easier to explore and act on.",
      },
    ],
  },
  {
    slug: "dtk-law-firm-website",
    title: "DTK Law Firm",
    status: "draft",
    clientType: "Legal services",
    summary:
      "Website design for DTK Law Firm, shaping a credible digital presence around environmental law, investment, planning, and sustainability expertise.",
    problem:
      "The firm needed an editorial, trustworthy structure for specialist legal knowledge, publications, and areas of expertise.",
    role: ["Website UI design", "Content structure", "Visual direction"],
    services: ["Website design", "Brand support"],
    tools: ["Figma"],
    tags: ["web", "commercial"],
    cover: { type: "placeholder", motif: "search", alt: "Law firm website interface for DTK" },
    sections: [
      {
        heading: "Output",
        body: "A professional website system for communicating specialist practice areas, publications, and firm expertise.",
      },
    ],
  },
  {
    slug: "capitano-eshop",
    title: "Capitano E-shop",
    status: "draft",
    clientType: "E-commerce",
    summary:
      "E-commerce website design for Capitano, focused on product clarity, visual consistency, and a straightforward path from browsing to purchase.",
    problem:
      "The shop needed a clearer product experience that supports discovery and purchasing without losing brand character.",
    role: ["E-commerce UI design", "Product-page design", "Figma prototype"],
    services: ["E-commerce design", "Website design"],
    tools: ["Figma"],
    tags: ["web", "commerce", "commercial"],
    cover: { type: "placeholder", motif: "search", alt: "E-commerce website interface for Capitano" },
    sections: [
      {
        heading: "Output",
        body: "A responsive shop interface with clearer product presentation and purchase paths.",
      },
    ],
  },
  {
    slug: "edae-acne-awareness-campaign",
    title: "ΕΔΑΕ — Acne Awareness Campaign",
    status: "draft",
    clientType: "Hellenic Society of Dermatology and Venereology",
    summary:
      "Campaign landing page for ΕΔΑΕ, designed to help young people and families find clear, dermatologist-led information about acne.",
    problem:
      "The campaign needed to make medical guidance approachable while helping people distinguish evidence-based care from common misconceptions.",
    role: ["Campaign landing page", "UI design", "Visual direction"],
    services: ["Campaign design", "Website design"],
    tools: ["Figma"],
    tags: ["campaign", "healthcare"],
    cover: { type: "placeholder", motif: "landing", alt: "Acne awareness campaign landing page for EDAE" },
    sections: [
      {
        heading: "Output",
        body: "An educational campaign experience combining accessible health information, myth-busting content, and a route to specialist support.",
      },
    ],
  },
  {
    slug: "kyverneio-palataki",
    title: "Kyverneio — Palataki",
    status: "draft",
    clientType: "Hellenic Public Properties Company / ETAD",
    summary:
      "Digital concept work for Kyverneio — Palataki, framing the landmark's next chapter as an open cultural destination in Thessaloniki.",
    problem:
      "A historic landmark needed a public-facing digital presence that could honour its identity while communicating its future as a cultural and visitor destination.",
    role: ["Website UI design", "Content structure", "Visual direction"],
    services: ["Website design", "Cultural communication"],
    tools: ["Figma"],
    tags: ["web", "public"],
    cover: { type: "placeholder", motif: "landing", alt: "Cultural destination website interface for Kyverneio Palataki" },
    sections: [
      {
        heading: "Output",
        body: "A digital direction for presenting the landmark, its history, and its future cultural programme to the public.",
      },
    ],
  },
  {
    slug: "shoot-and-win-fysiko-aerio",
    title: "Shoot & Win",
    status: "draft",
    clientType: "Fysiko Aerio campaign",
    summary:
      "Interactive campaign experience for Fysiko Aerio, designed to turn a promotional mechanic into a clear, energetic digital journey.",
    problem:
      "The campaign needed to make entry, participation, and reward information immediately understandable across desktop and mobile.",
    role: ["Campaign UI design", "Interactive flow design", "Visual direction"],
    services: ["Campaign design", "Interactive design"],
    tools: ["Figma"],
    tags: ["campaign", "commercial"],
    cover: { type: "placeholder", motif: "landing", alt: "Interactive campaign landing page for Shoot and Win" },
    sections: [
      {
        heading: "Output",
        body: "A campaign flow that brings entry, interaction, and prize communication into one coherent experience.",
      },
    ],
  },
];

const genericWorkSlugs = new Set([
  "academic-web-identity-system",
  "hospitality-website-design",
  "wordpress-campaign-pages",
  "prototype-design-audit",
]);

export const caseStudies: CaseStudy[] = ([
  {
    slug: "my1521-taxpayer-portal",
    title: "my1521 Taxpayer Service Portal",
    status: "draft",
    clientType: "AADE — Independent Authority for Public Revenue",
    summary:
      "UI design for my1521, AADE's taxpayer service platform — portal screens, digital service flows, and ticketing designed so any citizen can get help without knowing the system.",
    problem:
      "Taxpayer support runs through many channels and departments. The platform had to turn that complexity into one clear digital entry point: submit a request, follow its progress, get an answer.",
    role: ["Product UI design", "UX flows", "Figma production", "Public-sector design"],
    services: ["Product UI", "Service design", "Design system"],
    tools: ["Figma"],
    tags: ["product", "systems", "public"],
    cover: {
      type: "placeholder",
      motif: "portal",
      alt: "Wireframe of a citizen service portal with request tracking and ticketing",
    },
    sections: [
      {
        heading: "Context",
        body: "UI work for my1521, the digital face of AADE's taxpayer service line — the portal, digital service journeys, and the ticketing flows behind them.",
      },
      {
        heading: "Challenge",
        body: "The audience is every taxpayer in Greece, from digital natives to people filing their first request. Every screen had to assume zero familiarity with tax procedures while staying efficient for repeat users.",
      },
      {
        heading: "Process",
        body: "I worked from the service journeys into portal structure, request and ticketing flows, form patterns, and status communication — designed and iterated as a component-driven Figma system.",
        mediaPlaceholder: "[ADD SCREENSHOTS — my1521 portal and ticketing screens]",
      },
      {
        heading: "Output",
        body: "Portal UI, digital service flows, and ticketing screens designed for national-scale rollout.",
      },
    ],
  },
  {
    slug: "aade-signage-system",
    title: "AADE Wayfinding and Signage System",
    status: "draft",
    year: "2026",
    clientType: "Independent Authority for Public Revenue (government)",
    summary:
      "Wayfinding and signage direction for AADE, Greece's tax authority — a nationwide, government-scale system built for absolute clarity.",
    problem:
      "A national tax authority needed signage and wayfinding clear enough for every citizen entering an AADE office, regardless of how familiar they are with government buildings or procedures.",
    role: [
      "Signage design",
      "Wayfinding UX",
      "Public-sector design",
      "Figma production",
    ],
    services: ["Signage systems", "Wayfinding", "Public-sector design"],
    tools: ["Figma", "Print production specs"],
    tags: ["brand", "systems", "public"],
    cover: {
      type: "placeholder",
      motif: "signage",
      alt: "Wireframe of a directional signage and wayfinding board for a government building",
    },
    sections: [
      {
        heading: "Context",
        body: "Signage and wayfinding work for AADE, the Independent Authority for Public Revenue — the government body citizens and businesses across Greece interact with for tax matters.",
      },
      {
        heading: "Challenge",
        body: "Government buildings see visitors under stress, in a hurry, or unfamiliar with the process. The signage had to remove doubt at every decision point, not add to it.",
      },
      {
        heading: "Process",
        body: "I mapped the physical wayfinding journey, then designed a directory and signage language that stays legible and consistent across departments, floors, and building types.",
      },
      {
        heading: "Output",
        body: "A signage and wayfinding system ready for production and rollout across AADE locations.",
      },
      {
        heading: "Result",
        body: "A calmer, clearer arrival experience for citizens and staff, at national government scale.",
      },
    ],
  },
  {
    slug: "teka-ui-redesign",
    title: "TEKA Pension Fund UI Redesign",
    status: "draft",
    clientType: "TEKA — Hellenic Auxiliary Pensions Defined Contributions Fund",
    summary:
      "UI redesign for TEKA, the national auxiliary pension fund — bringing clarity and trust to a digital presence citizens rely on for their retirement savings.",
    problem:
      "A pension fund's interface has to earn trust on sight. The redesign had to make dense institutional content legible and reassuring for members of every age group.",
    role: ["UI redesign", "Information architecture", "Figma production"],
    services: ["UI design", "Web design", "Public-sector design"],
    tools: ["Figma"],
    tags: ["product", "public"],
    cover: {
      type: "placeholder",
      motif: "homepage",
      alt: "Wireframe of an institutional website homepage with clear content hierarchy",
    },
    sections: [
      {
        heading: "Context",
        body: "UI redesign work for TEKA, the government fund managing auxiliary pensions under the defined-contributions system.",
      },
      {
        heading: "Challenge",
        body: "Members range from young workers enrolling for the first time to people approaching retirement. Content is regulatory and dense, but the experience still had to feel calm, modern, and trustworthy.",
      },
      {
        heading: "Process",
        body: "I restructured the content hierarchy, then redesigned the UI language — typography, components, and page patterns — so institutional information reads clearly across devices.",
        mediaPlaceholder: "[ADD SCREENSHOTS — TEKA redesign screens]",
      },
      {
        heading: "Output",
        body: "A redesigned UI system and page set ready for review and implementation.",
      },
    ],
  },
  {
    slug: "growthfund-microsite",
    title: "Growthfund (Υπερταμείο) Microsite",
    status: "draft",
    clientType: "Growthfund — the National Fund of Greece",
    summary:
      "Microsite design for Growthfund, Greece's sovereign wealth fund — presenting a national investment story with editorial clarity.",
    problem:
      "The fund needed a focused microsite that communicates its mandate and initiatives to the public, press, and institutional audiences without drowning them in corporate density.",
    role: ["Web design", "UI design", "Content structure", "Figma production"],
    services: ["Web design", "Microsite", "Editorial design"],
    tools: ["Figma"],
    tags: ["web", "public"],
    cover: {
      type: "placeholder",
      motif: "landing",
      alt: "Wireframe of a corporate microsite landing page",
    },
    sections: [
      {
        heading: "Context",
        body: "Microsite design for Growthfund (Υπερταμείο), the national fund overseeing major Greek public assets.",
      },
      {
        heading: "Challenge",
        body: "Institutional credibility with editorial readability — a site that works for journalists, policy audiences, and citizens at the same time.",
      },
      {
        heading: "Process",
        body: "I shaped the narrative structure first, then designed a restrained UI system — clear typography, strong hierarchy, and content modules that keep the story in front.",
        mediaPlaceholder: "[ADD SCREENSHOTS — Growthfund microsite screens]",
      },
      {
        heading: "Output",
        body: "A complete microsite design in Figma, structured for straightforward implementation.",
      },
    ],
  },
  {
    slug: "ekapy-web-design",
    title: "EKAPY Health Procurement Web Design",
    status: "draft",
    clientType: "EKAPY — National Central Authority for Health Procurement",
    summary:
      "Web and UI design for EKAPY, the national authority coordinating health procurement — making operational, data-heavy content navigable.",
    problem:
      "Procurement content is dense: tenders, documents, deadlines, and regulation. The site had to make that material findable and scannable for suppliers, hospitals, and the public.",
    role: ["Web design", "UI design", "Information architecture"],
    services: ["Web design", "UI design", "Public-sector design"],
    tools: ["Figma"],
    tags: ["web", "research", "public"],
    cover: {
      type: "placeholder",
      motif: "search",
      alt: "Wireframe of a search and listings interface for procurement content",
    },
    sections: [
      {
        heading: "Context",
        body: "Web design work for EKAPY, the central authority for health procurement in Greece.",
      },
      {
        heading: "Challenge",
        body: "Users arrive with a task — find a tender, a document, a deadline. The design had to privilege findability and scannability over decoration.",
      },
      {
        heading: "Process",
        body: "I organized the content model around user tasks, then designed listing, search, and document patterns that keep dense operational content legible.",
        mediaPlaceholder: "[ADD SCREENSHOTS — EKAPY web design screens]",
      },
      {
        heading: "Output",
        body: "A task-first web design system for a national operational authority.",
      },
    ],
  },
  {
    slug: "kifissia-municipality-redesign",
    title: "Municipality of Kifissia Website Redesign",
    status: "draft",
    clientType: "Municipality of Kifissia",
    summary:
      "Website redesign for the Municipality of Kifissia — turning a civic content archive into a service-first experience for residents.",
    problem:
      "Municipal sites accumulate announcements, documents, and departments faster than structure. Residents needed services and information first, organizational charts second.",
    role: ["Web design", "Information architecture", "UI design"],
    services: ["Web design", "Redesign", "Civic design"],
    tools: ["Figma"],
    tags: ["web", "research", "public"],
    cover: {
      type: "placeholder",
      motif: "sitemap",
      alt: "Wireframe sitemap of a municipal website restructure",
    },
    sections: [
      {
        heading: "Context",
        body: "Redesign work for the website of the Municipality of Kifissia.",
      },
      {
        heading: "Challenge",
        body: "Reorganize years of civic content around what residents actually come to do — services, requests, news, and contact — without losing institutional completeness.",
      },
      {
        heading: "Process",
        body: "Content audit and restructure first, then a redesigned page system: clear service entry points, readable news and announcement patterns, and consistent department pages.",
        mediaPlaceholder: "[ADD SCREENSHOTS — Kifissia redesign screens]",
      },
      {
        heading: "Output",
        body: "A resident-first redesign of the municipal web presence.",
      },
    ],
  },
  {
    slug: "eu-regions-week-2025",
    title: "EU Regions Week 2025 Web Presence",
    status: "draft",
    clientType: "Regional authority — EU Regions Week 2025",
    summary:
      "Web design for a regional authority's presence at EU Regions Week 2025 — a focused, event-driven experience with a European audience.",
    problem:
      "An event presence has a short life and a wide audience. The design had to communicate the region's agenda quickly, in an EU-institutional context, on any device.",
    role: ["Web design", "UI design", "Campaign design"],
    services: ["Web design", "Event design", "Campaign"],
    tools: ["Figma"],
    tags: ["web", "campaign", "public"],
    cover: {
      type: "placeholder",
      motif: "landing",
      alt: "Wireframe of an event landing page with agenda and speakers",
    },
    sections: [
      {
        heading: "Context",
        body: "Design work for a Greek regional authority's participation in EU Regions Week 2025, the EU's flagship regional-policy event.",
      },
      {
        heading: "Challenge",
        body: "Communicate a regional agenda to an international, institutional audience — fast to scan, credible in tone, consistent with EU event contexts.",
      },
      {
        heading: "Process",
        body: "I designed an event-first structure — agenda, themes, participation — with a visual language that balances regional identity and EU-institutional credibility.",
        mediaPlaceholder: "[ADD SCREENSHOTS — EU Regions Week screens]",
      },
      {
        heading: "Output",
        body: "An event web presence designed for an international policy audience.",
      },
    ],
  },
  {
    slug: "fysiko-aerio-campaigns",
    title: "Fysiko Aerio Campaign Experiences",
    status: "draft",
    clientType: "Fysiko Aerio — Hellenic Energy Company",
    summary:
      "Campaign landings and interactive experiences for a national energy brand — Park Your Cinema, a basketball shoot-and-win game, and Village Cinemas collaborations.",
    problem:
      "Energy is a low-engagement category. The campaigns had to make the brand genuinely fun to interact with — games, cinema tie-ins, seasonal landings — while staying on-brand and conversion-aware.",
    role: ["Campaign design", "Landing pages", "Interactive concepts", "UI design"],
    services: ["Campaign design", "Web design", "Interactive"],
    tools: ["Figma", "Adobe Creative Suite"],
    tags: ["campaign", "commercial"],
    cover: {
      type: "placeholder",
      motif: "landing",
      alt: "Wireframe of a campaign landing page with game entry and dual call-to-action",
    },
    sections: [
      {
        heading: "Context",
        body: "A series of campaign experiences for Fysiko Aerio, the Hellenic Energy Company — including Park Your Cinema landings, a basketball shoot-and-win game, and Village Cinemas collaborations.",
      },
      {
        heading: "Challenge",
        body: "Each activation needed its own energy while remaining recognizably one brand — and every experience had to work as well on a phone in a queue as on a desktop.",
      },
      {
        heading: "Process",
        body: "I designed the landing structures, game entry flows, and visual systems per campaign, keeping components reusable across activations and seasons.",
        mediaPlaceholder: "[ADD SCREENSHOTS — Fysiko Aerio campaign screens]",
      },
      {
        heading: "Output",
        body: "A family of campaign landings and interactive experiences for a national energy brand.",
      },
    ],
  },
  {
    slug: "academic-web-identity-system",
    title: "Academic Web and Visual Identity System",
    status: "draft",
    year: "2024-present",
    clientType: "University department",
    summary:
      "Web UI, visual identity direction, and communication design for academic initiatives, EU-facing projects, and research-led digital properties.",
    problem:
      "The department needed stronger consistency across websites, campaigns, and project materials without flattening every initiative into the same template.",
    role: [
      "Creative direction",
      "UI design",
      "Web design",
      "Brand system",
      "Figma production",
    ],
    services: ["Web design", "Brand identity", "UI design"],
    tools: ["Figma", "Adobe Creative Suite", "AI-assisted ideation"],
    tags: ["web", "education"],
    cover: {
      type: "image",
      motif: "sitemap",
      alt: "Wireframe diagram of an academic website and brand system",
      src: "/media/work/figma-projects-public-sector.png",
    },
    sections: [
      {
        heading: "Context",
        body: "Based on UI and visual design work for initiatives such as Analysis.eu, IQ Media Hub, Cymoid, and the Department of Communication and Media Studies at the National and Kapodistrian University of Athens.",
      },
      {
        heading: "Challenge",
        body: "Each project needed its own voice, but the overall digital presence still had to feel credible, usable, and connected.",
      },
      {
        heading: "Process",
        body: "I worked from communication goals into visual systems, page structures, UI components, and campaign assets. Figma kept the work reviewable, while AI-assisted exploration helped speed up early concept routes.",
      },
      {
        heading: "Output",
        body: "Digital identity direction, website UI, reusable design patterns, and presentation-ready visuals for academic and EU-facing communication.",
      },
      {
        heading: "Result",
        body: "A clearer visual system for related initiatives, with Figma work that could support review, iteration, and consistent public-facing communication.",
      },
    ],
  },
  {
    slug: "streamee-product-ui",
    title: "Streamee Website",
    status: "draft",
    year: "2022-2024",
    clientType: "Digital product",
    summary:
      "UI/UX and visual work for the Streamee web platform, covering interface design, branded assets, campaigns, and developer-ready production files.",
    problem:
      "The product needed a consistent visual language across app touchpoints and marketing without slowing down release work.",
    role: [
      "Product graphic design",
      "UI/UX design",
      "Campaign visuals",
      "Icon and illustration work",
      "Developer collaboration",
    ],
    services: ["Product UI", "Graphic design", "Brand assets"],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    tags: ["product", "campaign", "commercial"],
    cover: {
      type: "image",
      motif: "search",
      alt: "Wireframe of a music app interface with branded content modules",
      src: "/media/work/figma-projects-products.png",
    },
    sections: [
      {
        heading: "Context",
        body: "Work from the Streamee period at Politis Group.",
      },
      {
        heading: "Challenge",
        body: "Keep product screens, promotional material, and social content aligned while supporting active marketing and product needs.",
      },
      {
        heading: "Process",
        body: "I translated product and marketing needs into UI assets, visual guidelines, original images, illustrations, motion pieces, and handoff-ready files for developers.",
      },
      {
        heading: "Output",
        body: "A consistent set of app visuals, campaign assets, presentation material, and production-ready design files.",
      },
      {
        heading: "Result",
        body: "Design support across product, marketing, and leadership needs, keeping the app and campaign ecosystem visually connected while work moved quickly.",
      },
    ],
  },
  {
    slug: "hospitality-website-design",
    title: "Hospitality Website UI and Visual Direction",
    status: "draft",
    year: "2020-2021",
    clientType: "Hospitality brands",
    summary:
      "Designing user-focused hotel and resort websites with clear presentation, responsive layouts, and a visual language matched to each property.",
    problem:
      "Hospitality websites need to sell the experience quickly while still making rooms, amenities, location, and booking paths easy to understand.",
    role: [
      "Website UI design",
      "UX research",
      "Visual identity support",
      "Usability testing",
      "Developer handoff",
    ],
    services: ["Web design", "UX design", "Visual direction"],
    tools: ["Figma", "Adobe Photoshop", "Reference analysis"],
    tags: ["web", "research", "hospitality"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "Wireframe of a homepage layout with clear content hierarchy",
      src: "/media/work/figma-projects-current.png",
    },
    sections: [
      {
        heading: "Context",
        body: "Based on hospitality work for resort, villa, and hotel brands across Greece.",
      },
      {
        heading: "Challenge",
        body: "Each property needed a distinct feel, but the UX still had to support browsing, comparison, trust, and conversion.",
      },
      {
        heading: "Process",
        body: "I moved from research and brand cues into page hierarchy, responsive UI, visual direction, and iterative design with product managers and developers.",
      },
      {
        heading: "Output",
        body: "Website concepts, polished UI screens, visual assets, and handoff material for implementation.",
      },
      {
        heading: "Result",
        body: "A body of hospitality website work across resort, villa, boutique hotel, and destination brands, with UX decisions grounded in user research and practical implementation.",
      },
    ],
  },
  {
    slug: "wordpress-campaign-pages",
    title: "WordPress Campaign Pages and Digital Assets",
    status: "draft",
    year: "2016-present",
    clientType: "Agency and brand campaigns",
    summary:
      "Designing campaign pages, email assets, ads, and supporting visuals that keep brand quality high while moving quickly.",
    problem:
      "Campaign work needs speed, consistency, and a layout system that can survive changes in copy, offers, and media.",
    role: [
      "Landing page design",
      "WordPress guidance",
      "Digital campaign assets",
      "Email and ad design",
      "QA and refinement",
    ],
    services: ["Web design", "Campaign design", "WordPress process"],
    tools: ["Figma", "WordPress", "Elementor", "Mailchimp"],
    tags: ["web", "wordpress", "commercial"],
    cover: {
      type: "image",
      motif: "landing",
      alt: "Wireframe of a campaign landing page with deadline banner and dual call-to-action",
      src: "/media/work/figma-projects-current.png",
    },
    sections: [
      {
        heading: "Context",
        body: "Based on freelance, agency, media, and campaign work across social, email, ads, print, landing pages, and WordPress-aware web design.",
      },
      {
        heading: "Challenge",
        body: "Move from brief to live-ready digital material without letting the brand become inconsistent across page, email, and ad placements.",
      },
      {
        heading: "Process",
        body: "I define the page hierarchy in Figma, prepare modular content sections, design the supporting visual system, and keep WordPress or Elementor maintenance in mind from the start.",
      },
      {
        heading: "Output",
        body: "Campaign page design, reusable assets, email graphics, ad visuals, and QA notes for build or handoff.",
      },
      {
        heading: "Result",
        body: "A repeatable way to move from offer and message to usable campaign material across web, email, paid media, social, and print.",
      },
    ],
  },
  {
    slug: "prototype-design-audit",
    title: "Design Audit for a Digital Prototype",
    status: "draft",
    year: "Selected work",
    clientType: "Product team",
    summary:
      "Auditing an existing prototype to improve visual quality, hierarchy, consistency, and usability before client presentation.",
    problem:
      "The prototype had the right functional direction, but the interface needed stronger hierarchy and a more coherent design language.",
    role: [
      "UI audit",
      "Visual hierarchy",
      "Component critique",
      "UX recommendations",
      "Client-ready documentation",
    ],
    services: ["Design audit", "UI critique", "Design-system recommendations"],
    tools: ["Figma", "Audit documentation"],
    tags: ["product", "audit", "commercial"],
    cover: {
      type: "image",
      motif: "audit",
      alt: "Wireframe of interface components with annotation marks from a design audit",
      src: "/media/work/figma-projects-products.png",
    },
    sections: [
      {
        heading: "Context",
        body: "A recurring pattern in product, portal, and redesign work: reviewing an existing prototype or interface before it reaches stakeholders, developers, or users.",
      },
      {
        heading: "Challenge",
        body: "Inconsistent density, unclear states, weak visual rhythm, and small usability issues were making a sound product feel less mature than it was.",
      },
      {
        heading: "Process",
        body: "Screen-by-screen critique, pattern grouping, and a prioritized fix list. I separate usability problems from polish problems so teams know what to fix first.",
      },
      {
        heading: "Output",
        body: "Audit document and redesign recommendations, written to be actionable by the existing team.",
      },
      {
        heading: "Result",
        body: "Clearer hierarchy, more consistent patterns, and a prioritized set of design fixes that help teams improve interface maturity without restarting the whole product.",
      },
    ],
  },
  ...namedUiUxProjects,
] as CaseStudy[]).filter((caseStudy) => !genericWorkSlugs.has(caseStudy.slug));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
