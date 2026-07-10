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
  liveUrl?: string;
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
    full?: string;
    caption?: string;
    poster?: string;
    visualPrompt?: string;
  };
  sections: Array<{
    heading: string;
    body: string;
    mediaPlaceholder?: string;
  }>;
  gallery?: Array<{
    type?: "image" | "video";
    src: string;
    alt: string;
    full?: string;
    caption?: string;
    poster?: string;
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
    summary: "UXPin website prototype for Spiritual Living Corfu, presenting the retreat, accommodation, and enquiry route.",
    problem: "Visitors needed to understand the retreat offering and find practical information without losing the character of the destination.",
    role: ["Website UI design", "UX prototype", "Visual direction"],
    services: ["Website design", "UX design"],
    tools: ["UXPin"],
    tags: ["web", "prototype", "hospitality"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website interface concept for Spiritual Living Corfu" },
    sections: [{ heading: "Output", body: "A website prototype with sections for the retreat, accommodation, and enquiries." }],
  },
  {
    slug: "holiways-crete",
    title: "Holiways Crete",
    status: "draft",
    clientType: "Hospitality website",
    summary: "UXPin website prototype for Holiways Crete, combining destination content with the information visitors need to plan a stay.",
    problem: "Visitors needed to understand the offer quickly and find their way to the relevant accommodation and booking information.",
    role: ["Website UI design", "UX prototype", "Visual direction"],
    services: ["Website design", "UX design"],
    tools: ["UXPin"],
    tags: ["web", "prototype", "hospitality"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website interface concept for Holiways Crete" },
    sections: [{ heading: "Output", body: "A responsive website prototype with destination content, clear navigation, and booking routes." }],
  },
  {
    slug: "oasa-telematics-redesign",
    title: "OASA Telematics App Redesign",
    status: "draft",
    clientType: "University of Athens dissertation project",
    summary: "Figma redesign concept for the OASA Telematics app, focused on routes, arrivals, and the next travel decision.",
    problem: "People use transport information under time pressure. Routes, arrivals, and next steps need to be easy to see.",
    role: ["UX research", "App UI redesign", "Figma prototype"],
    services: ["Product UI", "UX design", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "research", "public"],
    cover: { type: "placeholder", motif: "portal", alt: "Public transport app interface redesign" },
    sections: [{ heading: "Output", body: "A Figma prototype for a more task-focused public-transport app." }],
  },
  {
    slug: "sfera-radio-website",
    title: "Sfera 102.2",
    status: "published",
    clientType: "Sfera 102.2: music radio station",
    liveUrl: "https://sfera.gr",
    summary:
      "Website design for Sfera 102.2. The work replaced a heavy web-app-style site with a WordPress platform for live listening, programme information, and daily music news.",
    problem:
      "The old site was slow, awkward on mobile, and difficult for the station team to update. Sfera publishes premieres, news, contests, and the Top 30 every day, so editors needed to manage the site while keeping the live stream close at hand.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "culture"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "Sfera 102.2 homepage with the live-listen call to action and rotating show feature",
      src: "media/work/sfera-home.webp",
    },
    gallery: [
      { src: "media/work/sfera-top30.webp", alt: "The Sfera Top 30 chart page" },
      { src: "media/work/sfera-program.webp", alt: "The Sfera program and schedule page" },
    ],
    sections: [
      {
        heading: "Context",
        body: "Sfera 102.2 is a Greek-music radio station in the Politis Group. Alongside live radio, it publishes first plays, the Top 30, presenter information, events, and contests. It runs on the group's shared WordPress platform, which also supports Music 89.2.",
      },
      {
        heading: "Challenge",
        body: "The site needed to support an always-available live player and programme schedule alongside an editorial feed that changes every day. The old build made both harder to use and update.",
      },
      {
        heading: "Process",
        body: "I structured the site around the main listener tasks: listen live, see what is playing, and find the latest premieres. I designed the UI system and moved the site to the shared Politis Group WordPress platform. Editors can publish news, contests, and schedule changes without a developer.",
      },
      {
        heading: "Output",
        body: "A live, responsive site with streaming, a programme schedule, presenter pages, music news, the Top 30, events, and contests.",
      },
      {
        heading: "Result",
        body: "A site the station team can update day to day, with live listening and new music easy to reach.",
      },
    ],
  },
  {
    slug: "music-892-radio-website",
    title: "Music 89.2",
    status: "published",
    clientType: "Music 89.2: music radio station (Politis Group)",
    liveUrl: "https://music892.gr",
    summary:
      "Website design for Music 89.2, a Politis Group music radio station. The WordPress site shares a platform with Sfera 102.2 while keeping Music 89.2's own identity.",
    problem:
      "Music 89.2 needed a live player, programme schedule, and editorial feed that the newsroom could update. It also had to share a platform and layout with Sfera while remaining recognisably Music 89.2.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "culture"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "The Music 89.2 homepage with a bold black hero, the station wordmark, a producers feature, and a yellow Listen Now call to action",
      src: "media/work/music-home.webp",
      full: "media/work/music-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/music-program.webp",
        full: "media/work/music-program-full.webp",
        caption: "Program",
        alt: "The Music 89.2 program schedule with day tabs, show cards, and a Live Now card",
      },
      {
        src: "media/work/music-world.webp",
        full: "media/work/music-world-full.webp",
        caption: "Music World",
        alt: "The Music 89.2 Music World feed with a grid of music-news and events cards",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Music 89.2 is a music radio station in the Politis Group, alongside Sfera 102.2. Its site covers the programme and presenters, Music World news and events, contests, videos, and the station's \"Κουνάβι\" community. It uses the group's shared WordPress platform.",
      },
      {
        heading: "Challenge",
        body: "The site needed an always-available live player and programme schedule, plus an editorial feed updated daily. Music 89.2 and Sfera also needed a common platform and layout, without making the two stations look the same.",
      },
      {
        heading: "Process",
        body: "I used the same structure, components, and publishing model as Sfera, then gave Music 89.2 a separate identity through black and acid yellow, oversized type, and its marquee wordmark. The site centres on listening live, checking the programme, and following music news and events.",
      },
      {
        heading: "Output",
        body: "A responsive site with streaming, a day-by-day programme and \"Live Now\" card, producer and show pages, a Music World feed, contests, and videos. The group can manage it on the same WordPress platform as Sfera.",
      },
      {
        heading: "Result",
        body: "A station site that keeps listening and music news close at hand while sharing a maintainable platform with Sfera. [ADD REAL OUTCOME: listener response or a metric]",
      },
    ],
  },
  {
    slug: "ellinikos-932-radio-website",
    title: "Ellinikos 93.2",
    status: "published",
    clientType: "Ellinikos 93.2: Greek-music radio station (Politis Group)",
    liveUrl: "https://ellinikos932.gr",
    summary:
      "First website for Ellinikos 93.2, a Greek-music radio station in the Politis Group. It provides live listening, programme information, and editorial content on the shared platform used by Sfera 102.2 and Music 89.2.",
    problem:
      "Ellinikos 93.2 had no website for its live stream, programme, or editorial content. Its first site needed to be easy for the team to run and share a platform and layout with its sister stations without losing its own identity.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "culture"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "The Ellinikos 93.2 homepage with a navy Greek-sea hero, the hand-drawn station wordmark, a live-play button, and a producers section",
      src: "media/work/ellinikos-home.webp",
      full: "media/work/ellinikos-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/ellinikos-program.webp",
        full: "media/work/ellinikos-program-full.webp",
        caption: "Program",
        alt: "The Ellinikos 93.2 program schedule with day tabs, show cards, and an on-air-now card",
      },
      {
        src: "media/work/ellinikos-news.webp",
        full: "media/work/ellinikos-news-full.webp",
        caption: "Τα Νέα Μας",
        alt: "The Ellinikos 93.2 editorial feed with a category filter and grids of soundtrack and contest cards",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Ελληνικός 93.2 is a radio station for Greek music, with a strong focus on έντεχνο and new releases. It is part of the Politis Group alongside Sfera 102.2 and Music 89.2, and uses the group's shared WordPress platform.",
      },
      {
        heading: "Challenge",
        body: "Unlike its sister stations, Ellinikos started without a website. The first site had to include a live player, programme schedule, news, soundtracks, the \"Νέα Σκηνή\" new-artist strand, events, and interviews. It also needed to share the Politis Group platform while looking distinctly Ellinikos.",
      },
      {
        heading: "Process",
        body: "I used the shared Politis Group structure, components, and publishing model, then created a separate identity with a navy palette, hand-drawn wordmark, and Greek-music imagery. The site centres on listening live, seeing the programme and presenters, and browsing news, soundtracks, and \"Νέα Σκηνή\".",
      },
      {
        heading: "Output",
        body: "A responsive website with streaming, a day-by-day programme and on-air card, presenter pages, and an editorial hub for news, soundtracks, \"Νέα Σκηνή\", events, interviews, contests, and videos. It runs on the same WordPress platform as Sfera and Music 89.2.",
      },
      {
        heading: "Result",
        body: "Ellinikos now has a digital home for live music and editorial content that the group can maintain alongside its sister stations. [ADD REAL OUTCOME: launch or listener response, or a metric]",
      },
    ],
  },
  {
    slug: "iq-media-hub",
    title: "IQ Media Hub",
    status: "draft",
    clientType: "University of Athens & Nice Matin Media Group",
    summary: "Figma prototype for IQ Media Hub, a platform for media content and collaboration.",
    problem: "The multi-partner initiative needed a structure that explained its purpose and organised its content for a public audience.",
    role: ["Information architecture", "Website UI design", "Figma prototype"],
    services: ["Web design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "research", "education"],
    cover: { type: "placeholder", motif: "search", alt: "Media hub website interface concept" },
    sections: [{ heading: "Output", body: "A Figma prototype for a media hub with an organised content structure and public-facing interface." }],
  },
  {
    slug: "analysis-platform",
    title: "Analysis",
    status: "published",
    clientType: "Analysis: media training against disinformation",
    liveUrl: "https://analysis.ntlab.gr",
    summary:
      "Website and UI design for Analysis, a media-literacy project that trains journalists and news organisations in verification and fact-checking. The site explains the research project and gives people access to its free academy.",
    problem:
      "The site had to explain an EU research project to funders and partners while also serving journalists who wanted to enrol in the academy. Courses and resources needed to be easy to find without making the project information disappear.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "education"],
    cover: {
      type: "image",
      motif: "search",
      alt: "Analysis homepage with the iridescent logo hero and the media-training tagline",
      src: "media/work/analysis-home.webp",
      full: "media/work/analysis-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/analysis-about.webp",
        full: "media/work/analysis-about-full.webp",
        caption: "About the project",
        alt: "The Analysis about page with a bold mission statement over a newsroom photo",
      },
      {
        src: "media/work/analysis-courses.webp",
        full: "media/work/analysis-courses-full.webp",
        caption: "The Academy",
        alt: "The Analysis Academy courses page listing the fact-checking training modules",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Analysis is a media-training project that helps journalists and news organisations learn news verification and fact-checking. Its centrepiece is the Analysis Academy, a free six-week public programme covering fact-checking methodology, digital verification tools, advanced search, source tracking, and social-media and bot analysis. Partners are based in Greece, Austria, and Portugal.",
      },
      {
        heading: "Challenge",
        body: "This is EU-facing research on disinformation, so the site needed to be credible without reading like an academic report. It also had to separate the project story, including the mission, partners, and results, from the academy's courses, resources, and news.",
      },
      {
        heading: "Process",
        body: "I structured the site around its two audiences: funders and partners reading the project information, and journalists enrolling in the academy. The UI uses generous space, iridescent imagery, display type, and a hot-pink accent. The ANALYSIS acronym appears in the copy and identity.",
      },
      {
        heading: "Output",
        body: "A responsive WordPress site with a mission and results homepage, an about section, a self-serve academy with searchable course modules, a resources library, and a news feed.",
      },
      {
        heading: "Result",
        body: "A site for the media-literacy initiative that gives the academy a clear route from discovery to enrolment. [ADD REAL OUTCOME: enrolment numbers, partner or funder response, or a metric]",
      },
    ],
  },
  {
    slug: "demo-pharmaceutical",
    title: "DEMO Pharmaceuticals",
    status: "published",
    clientType: "DEMO S.A.: pharmaceutical industry",
    liveUrl: "https://demo.gr",
    summary:
      "A corporate website concept for DEMO, one of Greece's largest pharmaceutical companies. It uses the company's existing brand system and presents its work before its organisational structure.",
    problem:
      "DEMO's previous site was organised around the company rather than what it does. It relied on a dense \"who we are\" grid, autoplay video, and sparse brochure pages. The concept needed to show the company's international work while retaining its established identity.",
    role: ["Website UI design", "Visual direction", "Information architecture", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "healthcare"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "The DEMO Pharmaceuticals homepage with a bold blue hero, the headline \"Bringing Global Access to Quality Medicines\", and an \"Always Forward, With Purpose and Integrity\" statement",
      src: "media/work/demo-home.webp",
      full: "media/work/demo-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/demo-what.webp",
        full: "media/work/demo-what-full.webp",
        caption: "What we do",
        alt: "The DEMO 'What we do' page headed \"Stronger, Healthier Communities\", framing research, development, and manufacturing",
      },
      {
        src: "media/work/demo-news.webp",
        full: "media/work/demo-news-full.webp",
        caption: "News & media",
        alt: "The DEMO News & Media hub with a rich grid of story cards, video, and report tiles",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "DEMO S.A. is one of Greece's largest pharmaceutical manufacturers. Established in 1965, it exports to markets around the world. Its corporate site speaks to patients and healthcare systems, prospective talent, partners, and the press.",
      },
      {
        heading: "Challenge",
        body: "The concept needed to feel appropriate for an international pharmaceutical company without inventing a new identity. It retains DEMO's triangle mark, corporate blue, and typographic voice while reorganising the site around the company's work, products, and news.",
      },
      {
        heading: "Process",
        body: "I kept DEMO's brand system and added a full-bleed blue hero, display type, and headlines about access to medicines. The information architecture groups content under Who we are, What we do, Talent management, and News & media. The News & Media hub uses story cards, video, and reports.",
      },
      {
        heading: "Output",
        body: "A corporate site built on DEMO's design system, with a homepage, sections for R&D and manufacturing, company information, talent and careers content, and a News & Media hub.",
      },
      {
        heading: "Result",
        body: "A concept that reorganises a corporate brochure around DEMO's work and uses the company's established brand. [ADD REAL OUTCOME: client or stakeholder response, or clarify whether this was commissioned or self-initiated]",
      },
    ],
  },
  {
    slug: "cymoid-productions",
    title: "Cymoid",
    status: "published",
    clientType: "Cymoid: media production, AI, training & events company",
    liveUrl: "https://cymoid.eu",
    summary:
      "Website and visual direction for Cymoid, a new media company covering film production, AI tools, media training, and event management.",
    problem:
      "Cymoid launched with four different offerings: film production, AI tools, training, and events. The site needed to connect them under one identity and reflect the company's focus on AI and media.",
    role: ["Website UI design", "Visual direction", "Art direction", "Figma design"],
    services: ["Website design", "UI design", "Visual direction"],
    tools: ["Figma"],
    tags: ["web", "brand", "culture"],
    cover: {
      type: "image",
      motif: "landing",
      alt: "Cymoid homepage hero with an iridescent 3D render and the bold display headline",
      src: "media/work/cymoid-home.webp",
      full: "media/work/cymoid-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/cymoid-production.webp",
        full: "media/work/cymoid-production-full.webp",
        caption: "Production page",
        alt: "The Cymoid film production page with a cinematic still",
      },
      {
        src: "media/work/cymoid-ai.webp",
        full: "media/work/cymoid-ai-full.webp",
        caption: "The Power of AI page",
        alt: "The Cymoid AI page with a chrome iridescent hero visual",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Cymoid is a new media company working in film and animation production, AI tools for newsrooms and production teams, media training, and event management. Its team includes academics, researchers, and media professionals.",
      },
      {
        heading: "Challenge",
        body: "One brand had to bring together four services without making them appear unrelated. The visual design also needed to show the company's AI and media focus from the first screen.",
      },
      {
        heading: "Process",
        body: "I used generative iridescent 3D imagery, display type, and a rounded bento layout. Production, AI, Training, and Events each have a dedicated page with their own imagery while sharing the same overall system.",
      },
      {
        heading: "Output",
        body: "A responsive website with a bento-style homepage and dedicated pages for production, AI, training, and event management. Each page has its own generative hero image and a project-enquiry route.",
      },
      {
        heading: "Result",
        body: "A site that presents Cymoid's four services under one visual system. [ADD REAL OUTCOME: launch response, client feedback, or a metric]",
      },
    ],
  },
  {
    slug: "aftersalespro-redesign",
    title: "AftersalesPro Redesign Concept",
    status: "draft",
    clientType: "AftersalesPro",
    summary: "Figma redesign concept for AftersalesPro, setting out a clearer product interface before a platform refresh.",
    problem: "The product structure and interaction patterns needed to be resolved before the redesign moved into delivery.",
    role: ["Product UI design", "UX audit", "Figma prototype"],
    services: ["Product UI", "UI redesign", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "audit", "commercial"],
    cover: { type: "placeholder", motif: "audit", alt: "Product interface redesign concept" },
    sections: [{ heading: "Output", body: "A Figma redesign concept that defines the interface for a future product refresh." }],
  },
  {
    slug: "synapsync-netcompany-intrasoft",
    title: "SynapSync",
    status: "draft",
    clientType: "Netcompany Intrasoft",
    summary: "Figma prototype for SynapSync, created for Netcompany Intrasoft to present a connected digital product concept.",
    problem: "The concept needed interface flows that could explain a complex product idea in a presentation.",
    role: ["Product UI design", "UX flows", "Figma prototype"],
    services: ["Product UI", "UX design", "Prototype"],
    tools: ["Figma"],
    tags: ["product", "prototype", "commercial"],
    cover: { type: "placeholder", motif: "portal", alt: "Enterprise product interface concept" },
    sections: [{ heading: "Output", body: "A Figma prototype and concept presentation for a connected enterprise product." }],
  },
  {
    slug: "choose-website-redesign",
    title: "Choose Website Redesign",
    status: "draft",
    clientType: "Digital service",
    summary:
      "Website redesign work for Choose, reorganising the offer and its next steps.",
    problem:
      "Visitors needed to understand the offer and find the relevant next step without working through unnecessary content.",
    role: ["Website UI redesign", "Information architecture", "Figma prototype"],
    services: ["Website design", "UX design"],
    tools: ["Figma"],
    tags: ["web", "prototype", "commercial"],
    cover: { type: "placeholder", motif: "homepage", alt: "Website redesign interface for Choose" },
    sections: [
      {
        heading: "Output",
        body: "Responsive page layouts and a design system ready for prototyping.",
      },
    ],
  },
  {
    slug: "pino-pizzeria-website",
    title: "Pino Pizzeria",
    status: "published",
    clientType: "Pino by Luca Piscazzi: Roman pizzeria in Glyfada",
    liveUrl: "https://soliddop.github.io/pino/",
    summary:
      "A modernised website concept for Pino, the Roman pizzeria in Glyfada, built as a working front-end prototype. The design carries the restaurant's story from Luca Piscazzi's kitchen to the Athens Riviera across one scroll-led page.",
    problem:
      "Pino's original website read like a stock restaurant template. The menu, the story, and the visit details were all there, but none of the character the pizzeria has in the room or on its Instagram came through on screen.",
    role: ["Website UI design", "Brand direction", "Motion design", "Front-end build"],
    services: ["Website design", "Art direction", "Front-end prototype"],
    tools: ["Figma", "GSAP", "Claude Code", "Codex"],
    tags: ["web", "prototype", "hospitality"],
    cover: {
      type: "video",
      motif: "homepage",
      alt: "The Pino homepage: an Eat. Drink. Roma. hero on a forest-green field that resolves into the story section as the page scrolls.",
      src: "media/work/pino-hero.mp4",
      poster: "media/work/pino-hero-poster.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        type: "video",
        src: "media/work/pino-table.mp4",
        poster: "media/work/pino-table-poster.webp",
        caption: "Signature dishes",
        alt: "The signature-dish sequence sliding dish photographs past a large Pizza Romana outline.",
      },
      {
        src: "media/work/pino-story.webp",
        caption: "The story",
        alt: "The story section, with a portrait of chef Luca Piscazzi beside his grandmother's photo and the tiled restaurant interior.",
      },
      {
        src: "media/work/pino-menu.webp",
        full: "media/work/pino-menu-full.webp",
        caption: "Menu",
        alt: "The menu section split into Mangia and Bevi across mustard and cream panels.",
      },
      {
        type: "video",
        src: "media/work/pino-scatter.mp4",
        poster: "media/work/pino-scatter-poster.webp",
        caption: "A night at Pino",
        alt: "The gallery section scattering a stack of restaurant and dish photos into place under the heading A night at Pino.",
      },
      {
        src: "media/work/pino-reserve.webp",
        full: "media/work/pino-reserve-full.webp",
        caption: "Reservations",
        alt: "The reservations section with the headline Reserve your Roman table, the opening hours, and the Glyfada address.",
      },
      {
        src: "media/work/pino-insta.webp",
        full: "media/work/pino-insta-full.webp",
        caption: "Instagram",
        alt: "The Instagram section showing the @pino_athens photo grid.",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Pino is a Roman pizzeria in Glyfada, on the Athens Riviera, run by chef Luca Piscazzi and his wife Charlotte Luykx. The kitchen keeps to Roman tradition: thin-crust Roman pizza, cacio e pepe, carciofo, aperitivo, and dolci. Its voice moves between Italian and English, from \"Tradizione Romana\" to \"Mangia. Bevi.\", and that mix is part of the brand.",
      },
      {
        heading: "Challenge",
        body: "A restaurant site has a short list of jobs: show the food, tell the story, and make it easy to book a table and find the door. The redesign had to keep those quick to reach while giving the page enough movement to feel like an evening at Pino, without letting the animation get between a visitor and the reservation button.",
      },
      {
        heading: "Process",
        body: "The identity and layout came first in Figma: a cream, forest-green, and terracotta palette, the hand-drawn Pino wordmark, and a single page that scrolls from the hero into the story, the signature dishes, the room, reservations, and the Instagram feed. I then built it as a real front-end prototype in HTML, CSS, and JavaScript, using Claude Code and Codex to turn the design into working code rather than a static mockup.",
      },
      {
        heading: "Motion",
        body: "Movement carries the story. GSAP runs the scroll: the hero headline splits line by line, dish photographs slide past an oversized \"Pizza Romana\" outline, the menu breaks into \"Mangia\" and \"Bevi\", and the closing gallery scatters a stack of photos into place under \"A night at Pino\". ScrollSmoother ties the sequence together so it reads as one continuous move down the page.",
      },
      {
        heading: "Output",
        body: "A responsive single-page site with an English and Greek toggle. It runs through the hero, the story of Luca and the restaurant, a signature-dish sequence, the food and drink menu, a photo gallery, reservations with hours and location, and the Instagram feed, all as static HTML, CSS, and JavaScript.",
      },
      {
        heading: "Result",
        body: "A working prototype that puts Pino's character on screen: Roman, warm, and a little playful. The motion supports the story instead of decorating it, and the menu and reservation routes stay in reach the whole way down.",
      },
    ],
  },
  {
    slug: "marios-detsis-paediatrician",
    title: "Dr. Marios Detsis",
    status: "published",
    clientType: "Dr. Marios Detsis: paediatrician in Zografou and Vrilissia",
    liveUrl: "https://pfilippaios.github.io/detsis-paidiatros/",
    summary:
      "A modernised website concept for Dr. Marios Detsis, a paediatrician with clinics in Zografou and Vrilissia. Built as a working front-end prototype, it gives parents a calm, readable path to the doctor's background, the services, and a booking.",
    problem:
      "The doctor's existing site was dated and hard to read on a phone, which is where most parents look for a paediatrician. Parents arrive with a specific worry and a young child in tow, so they need the essentials, who the doctor is, what he treats, where the clinics are, and how to book, without digging for them.",
    role: ["Website UI design", "Brand direction", "Motion design", "Front-end build"],
    services: ["Website design", "Art direction", "Front-end prototype"],
    tools: ["Figma", "GSAP", "Claude Code", "Codex"],
    tags: ["web", "prototype", "healthcare"],
    cover: {
      type: "video",
      motif: "homepage",
      alt: "The Dr. Marios Detsis homepage: a hero with the doctor's name and portrait, soft floating shapes, and a Book an appointment call to action.",
      src: "media/work/detsis-hero.mp4",
      poster: "media/work/detsis-hero-poster.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        type: "video",
        src: "media/work/detsis-services.mp4",
        poster: "media/work/detsis-services-poster.webp",
        caption: "Services",
        alt: "The six paediatric service cards rising and staggering into view as the sections stack over one another.",
      },
      {
        src: "media/work/detsis-doctor.webp",
        full: "media/work/detsis-doctor-full.webp",
        caption: "The doctor",
        alt: "The doctor's profile with a portrait, a short biography, and a timeline of qualifications from 2007 through the Brown Hasbro Children's Hospital.",
      },
      {
        src: "media/work/detsis-clinics.webp",
        full: "media/work/detsis-clinics-full.webp",
        caption: "Two clinics",
        alt: "The clinics section presenting the Zografou and Vrilissia practices with interior photos.",
      },
      {
        type: "video",
        src: "media/work/detsis-parents.mp4",
        poster: "media/work/detsis-parents-poster.webp",
        caption: "Parents & partners",
        alt: "The parent-reviews section followed by a scrolling strip of professional affiliation logos.",
      },
      {
        src: "media/work/detsis-articles.webp",
        full: "media/work/detsis-articles-full.webp",
        caption: "Articles",
        alt: "The recent-articles section with cards on children's sleep, seasonal allergies, and oral hygiene.",
      },
      {
        src: "media/work/detsis-cta.webp",
        full: "media/work/detsis-cta-full.webp",
        caption: "Contact",
        alt: "The contact section with the appointment call to action and the Zografou and Vrilissia clinic phone numbers.",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Marios Detsis is a paediatrician who cares for infants, children, and adolescents at two clinics, in Zografou and Vrilissia. Alongside his practice he teaches at the Medical School of the European University of Cyprus and publishes on public health, epidemiology, and the prevention of infectious diseases. He is also a certified breastfeeding instructor.",
      },
      {
        heading: "Challenge",
        body: "A paediatric site has to reassure before it does anything else. It needed to feel warm and calm for a worried parent while still reading as a serious medical practice, and it had to keep the booking and the clinic phone numbers within reach on every screen.",
      },
      {
        heading: "Process",
        body: "I designed the identity and page in Figma around a soft palette, rounded cards, and playful but restrained detail, then built it as a front-end prototype in HTML, CSS, and JavaScript with Claude Code and Codex. The single page moves from the doctor and his background to the services, the two clinics, recent articles, parent reviews, and the contact details.",
      },
      {
        heading: "Motion",
        body: "GSAP handles the movement, kept gentle so it reassures rather than distracts. The hero headline splits into lines as small shapes drift behind the doctor's portrait, the service cards rise and stagger into view, and the doctor, services, and clinics sections stack and recede as each one slides over the last. A strip of the doctor's professional affiliations scrolls quietly near the foot of the page.",
      },
      {
        heading: "Output",
        body: "A responsive single-page site covering the doctor's profile and qualifications, six paediatric services, the two clinics with photos and addresses, recent articles, parent reviews, professional affiliations, and a contact section with a booking form and the clinic phone numbers. It runs as static HTML, CSS, and JavaScript.",
      },
      {
        heading: "Result",
        body: "A calm, current site for a paediatric practice, with the doctor's background and the route to a booking both easy to find. The motion is there to reassure, and the clinic details stay one tap away the whole way down.",
      },
    ],
  },
  {
    slug: "repower-eu",
    title: "REPower.eu",
    status: "published",
    clientType: "Public energy-upgrade initiative",
    liveUrl: "https://repowereu.gr/",
    summary:
      "A landing page for REPower.eu, bringing two energy-upgrade programmes, their deadlines, and the next action into one place.",
    problem:
      "The programmes have different rules, timings, and routes. Once someone has an approval or voucher, they need to know which path applies and what remains to be done without working through a maze of official information.",
    role: ["Website UI design", "Campaign design", "Figma prototype"],
    services: ["Landing-page design", "Campaign design"],
    tools: ["Figma"],
    tags: ["web", "landing", "public"],
    cover: {
      type: "image",
      motif: "landing",
      alt: "REPower.eu homepage with a Greek energy-agreement hero and links to programme information",
      src: "media/work/repower-eu-home.webp",
      full: "media/work/repower-eu-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/repower-eu-deadlines.webp",
        full: "media/work/repower-eu-home-full.webp",
        caption: "Deadlines overview",
        alt: "REPower.eu deadlines overview for the active energy-upgrade programmes",
      },
      {
        src: "media/work/repower-eu-exoikonomo.webp",
        full: "media/work/repower-eu-home-full.webp",
        caption: "Εξοικονομώ 2025",
        alt: "REPower.eu programme section for Εξοικονομώ 2025",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "REPower.eu is the public-facing hub for «Εξοικονομώ 2025» and «Αλλάζω Σύστημα Θέρμανσης και Θερμοσίφωνα». It is aimed at people who have already been approved or received a voucher, and need to find the deadline, steps, and official service that apply to them.",
      },
      {
        heading: "Challenge",
        body: "This needed to behave like a practical guide, not a campaign splash page. The two programmes had to be distinct at a glance, deadlines had to be difficult to miss, and the route to the right official platform had to be obvious when someone needed more detail or needed to sign in.",
      },
      {
        heading: "Process",
        body: "The page is built around the decisions people need to make: find your programme, check the date, see what needs to happen next, then continue to the relevant official service. A single navigation and a repeated set of calls to action keep those routes available throughout the page, while the detailed guidance sits below the overview rather than competing with it at the start.",
      },
      {
        heading: "Output",
        body: "A live, single-page information hub organised around the active programmes, a deadline overview, detailed next steps, frequently asked questions, and links to the official programme platforms.",
      },
      {
        heading: "Result",
        body: "A focused public landing page that gives two separate programme routes a shared starting point. It answers the first question, “Which programme am I in?”, then keeps the next step close at hand.",
      },
    ],
  },
  {
    slug: "dtk-law-firm-website",
    title: "DTK Law Firm",
    status: "published",
    clientType: "DTK Law Firm: environmental, planning and investment law",
    liveUrl: "https://dtk.choosead.eu/",
    summary:
      "Website design and build for DTK Law Firm, a specialist environmental, planning, and investment practice. The new WordPress site replaces the firm's previous one with a clearer structure, a refreshed identity, and its research and publications brought to the front.",
    problem:
      "The firm's previous site did not reflect how DTK actually works. Its practice areas, its team, and above all its research and publications were hard to navigate, and the design did not read as the specialist, academically grounded firm that DTK is.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "commercial"],
    cover: {
      type: "video",
      motif: "homepage",
      alt: "The DTK Law homepage: the navy DTK wordmark and a headline on specialised legal support in environment and planning, resolving into the practice-area band as the page scrolls.",
      src: "media/work/dtk-hero.mp4",
      poster: "media/work/dtk-hero-poster.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        type: "video",
        src: "media/work/dtk-services.mp4",
        poster: "media/work/dtk-services-poster.webp",
        caption: "Practice areas",
        alt: "The services page revealing DTK's practice areas as numbered cards, from spatial and urban planning to specialised legal research.",
      },
      {
        type: "video",
        src: "media/work/dtk-team.mp4",
        poster: "media/work/dtk-team-poster.webp",
        caption: "The team",
        alt: "The 'Our team' page with black-and-white portraits of the firm's lawyers staggering into view.",
      },
      {
        src: "media/work/dtk-articles.webp",
        full: "media/work/dtk-articles-full.webp",
        caption: "Publications",
        alt: "The publications hub split into scientific articles, legal news, and newsletters, above a list of recent publications.",
      },
      {
        src: "media/work/dtk-contact.webp",
        full: "media/work/dtk-contact-full.webp",
        caption: "Contact",
        alt: "The contact page with an enquiry form and a photograph of a statue of Justice.",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "DTK Law Firm (K. Karatsolis, E. Tsianti & Associates) is an Athens practice led by Dr. Konstantinos Karatsolis. It works in a specific set of fields: spatial and urban planning, environmental law, the framework for building permits, investments and tourism developments, and sustainability and ESG. What sets the firm apart is that its legal work is tied to continuous scientific research, with studies, publications, and newsletters that track Greek and European regulation.",
      },
      {
        heading: "Challenge",
        body: "The site had to serve two audiences at once: prospective clients weighing up a specialist firm, and a professional readership following the firm's legal analysis. It also needed to carry a large and growing body of publications, work in Greek and English, and be something the firm could keep updated itself.",
      },
      {
        heading: "Process",
        body: "I designed the site in Figma, then built it on WordPress so the team can publish articles, newsletters, and publications without a developer. The information architecture is organised around five clear areas: the firm, the practice areas, the publications, careers, and contact. The identity pairs a navy and warm-sand palette with a distinctive display type and an olive-branch motif, applied consistently across every page. Headlines split into view and cards reveal as you scroll, so the pages feel considered without the motion getting in the way of the content.",
      },
      {
        heading: "Output",
        body: "A bilingual WordPress site covering the firm and its team, the practice areas as individual services, a publications hub split into scientific articles, legal news, and newsletters, a publications library, careers, and contact. The firm can maintain all of it, in Greek and English, on its own.",
      },
      {
        heading: "Result",
        body: "A current, better-organised site that presents DTK as the specialist, research-led firm it is, and gives its publications a proper home. It replaces the firm's previous website and gives the team a platform they can keep up to date.",
      },
    ],
  },
  {
    slug: "capitano-eshop",
    title: "Capitano E-shop",
    status: "draft",
    clientType: "E-commerce",
    summary:
      "E-commerce website design for Capitano, with product information and purchase steps set out clearly.",
    problem:
      "The shop needed to support product discovery and purchasing without losing the brand's character.",
    role: ["E-commerce UI design", "Product-page design", "Figma prototype"],
    services: ["E-commerce design", "Website design"],
    tools: ["Figma"],
    tags: ["web", "commerce", "commercial"],
    cover: { type: "placeholder", motif: "search", alt: "E-commerce website interface for Capitano" },
    sections: [
      {
        heading: "Output",
        body: "A responsive shop interface with product pages and purchase routes.",
      },
    ],
  },
  {
    slug: "edae-acne-awareness-campaign",
    title: "EDAE Acne Awareness Campaign",
    status: "published",
    clientType: "EDAE — Hellenic Dermatology and Venereology Society",
    liveUrl: "https://www.edae.gr/acne2026/",
    summary:
      "Landing page for EDAE's acne-awareness campaign, aimed at teens and their parents.",
    problem:
      "Acne can be obscured by myths and home remedies. EDAE needed a campaign page that gives teens and parents clear dermatology guidance and a direct route to a specialist.",
    role: ["Landing page design", "Brand application"],
    services: ["Website design", "UI design"],
    tools: ["Figma"],
    tags: ["web", "landing", "healthcare"],
    cover: {
      type: "image",
      motif: "landing",
      alt: "EDAE acne-awareness campaign homepage with a teenager and a dermatologist finder call to action",
      src: "media/work/edae-acne2026-home.webp",
      full: "media/work/edae-acne2026-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/edae-acne2026-types.webp",
        full: "media/work/edae-acne2026-full.webp",
        caption: "Acne types",
        alt: "The EDAE campaign's acne-types section, with an illustrated explanatory list",
      },
      {
        src: "media/work/edae-acne2026-tips.webp",
        full: "media/work/edae-acne2026-full.webp",
        caption: "Advice for teens and parents",
        alt: "The EDAE campaign's advice section for teens and parents",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "A single-page information campaign with sections for acne, types and causes, myths and truths, practical advice, and a route to find a dermatologist.",
      },
      {
        heading: "Challenge",
        body: "The page had to make medical information approachable for teens without losing the authority of a dermatology society. It also had to carry the creative team's established campaign identity through a long, single-page journey, from the opening message to the dermatologist finder.",
      },
      {
        heading: "Process",
        body: "I applied the creative team's established campaign branding to the page layout, typography, colour blocks, content cards, navigation, and calls to action. Anchor links let visitors move directly to information about acne, types and causes, myths and truths, or advice.",
      },
      {
        heading: "Output",
        body: "A responsive landing page that brings acne information, myth-busting content, advice for teens and parents, and the dermatologist finder into one campaign experience.",
      },
      {
        heading: "Result",
        body: "EDAE has a focused destination for its acne guidance. Visitors can move from the campaign message and myth-busting content to practical advice and the dermatologist finder without leaving the page.",
      },
    ],
  },
  {
    slug: "kyverneio-palataki",
    title: "Kyverneio: Palataki",
    status: "draft",
    clientType: "Hellenic Public Properties Company / ETAD",
    summary:
      "Digital concept work for Kyverneio: Palataki, presenting the landmark as a cultural destination in Thessaloniki.",
    problem:
      "The landmark needed a public-facing site that explained its history and its planned role as a cultural and visitor destination.",
    role: ["Website UI design", "Content structure", "Visual direction"],
    services: ["Website design", "Cultural communication"],
    tools: ["Figma"],
    tags: ["web", "public"],
    cover: { type: "placeholder", motif: "landing", alt: "Cultural destination website interface for Kyverneio Palataki" },
    sections: [
      {
        heading: "Output",
        body: "A digital direction for the landmark, its history, and its cultural programme.",
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
    clientType: "AADE: Independent Authority for Public Revenue",
    summary:
      "UI design for my1521, AADE's taxpayer service platform. The work covers portal screens, digital service flows, and ticketing so citizens can get help without knowing the system.",
    problem:
      "Taxpayer support runs through many channels and departments. The platform needed one digital entry point where people can submit a request, follow its progress, and receive an answer.",
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
        body: "UI work for my1521, AADE's taxpayer service portal, including digital service and ticketing flows.",
      },
      {
        heading: "Challenge",
        body: "The audience is every taxpayer in Greece, from digital natives to people filing their first request. Every screen had to assume zero familiarity with tax procedures while staying efficient for repeat users.",
      },
      {
        heading: "Process",
        body: "I worked from the service journeys into the portal structure, request and ticketing flows, form patterns, and status communication. The work was designed and iterated as a component-driven Figma system.",
        mediaPlaceholder: "[ADD SCREENSHOTS: my1521 portal and ticketing screens]",
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
      "Wayfinding and signage direction for AADE, Greece's tax authority, for use across offices nationwide.",
    problem:
      "AADE needed signage that could help people find the right place in an office, whether or not they knew the building or procedure.",
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
        body: "Signage and wayfinding work for AADE, the Independent Authority for Public Revenue. Citizens and businesses across Greece interact with the authority for tax matters.",
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
        body: "A signage system for citizens and staff across AADE offices.",
      },
    ],
  },
  {
    slug: "teka-ui-redesign",
    title: "TEKA Pension Fund UI Redesign",
    status: "draft",
    clientType: "TEKA: Hellenic Auxiliary Pensions Defined Contributions Fund",
    summary:
      "UI redesign for TEKA, the national auxiliary pension fund, focused on making pension information easier to read and use.",
    problem:
      "The redesign had to make dense institutional information readable for members at different stages of their working lives.",
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
        body: "Members range from people enrolling for the first time to people approaching retirement. The regulatory content needed a readable hierarchy across devices.",
      },
      {
        heading: "Process",
        body: "I restructured the content hierarchy, then redesigned the typography, components, and page patterns for use across devices.",
        mediaPlaceholder: "[ADD SCREENSHOTS: TEKA redesign screens]",
      },
      {
        heading: "Output",
        body: "A redesigned UI system and page set ready for review and implementation.",
      },
    ],
  },
  {
    slug: "ppf-growthfund",
    title: "PPF: Project Preparation Facility",
    status: "published",
    clientType: "PPF: Growthfund's Strategic Contracts Unit",
    liveUrl: "https://ppf.growthfund.gr",
    summary:
      "Website and UI design for PPF (Project Preparation Facility), Growthfund's operationally independent Strategic Contracts Unit. The site gives the unit its own presence while retaining the Hellenic Growth Fund connection.",
    problem:
      "PPF matures and tenders strategically important projects for Growthfund. Its site needed separate projects, tenders, and press content while retaining the connection to Growthfund. Procurement information also needed to be easy for contractors, institutions, and citizens to find.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "public"],
    cover: {
      type: "image",
      motif: "homepage",
      alt: "The PPF homepage with the co-branded PPF / Hellenic Growth Fund lockup and the strategic-contracts mission statement over an aerial hero",
      src: "media/work/ppf-home.webp",
      full: "media/work/ppf-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/ppf-projects.webp",
        full: "media/work/ppf-projects-full.webp",
        caption: "Projects portfolio",
        alt: "The PPF projects page with category filters and a grid of strategic-project cards",
      },
      {
        src: "media/work/ppf-tenders.webp",
        full: "media/work/ppf-tenders-full.webp",
        caption: "Tenders",
        alt: "The PPF tenders page with a search field, category filter, and a list of public tender notices",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "PPF, the Project Preparation Facility (Μονάδα Στρατηγικών Συμβάσεων), was established in 2021 as an operationally independent unit of Growthfund. It matures, tenders, and monitors strategically important projects assigned by the Governmental Committee for Strategic Contracts. Its remit includes concessions and PPPs, procurement and services, infrastructure, and activity abroad.",
      },
      {
        heading: "Challenge",
        body: "The site had to give PPF its own projects portfolio, live tenders, and press room while clearly showing its relationship with Growthfund. Public procurement content is dense and legalistic, so contractors, institutions, and citizens also needed to find tenders and projects easily.",
      },
      {
        heading: "Process",
        body: "I retained the parent identity's palette and co-branded lockup, then gave PPF its own structure and voice. The site includes a filterable projects portfolio, a searchable tenders section, and a press room. WordPress lets the unit publish tenders, projects, and announcements in Greek and English.",
      },
      {
        heading: "Output",
        body: "A bilingual WordPress site with a mission-led homepage, an about section, a filterable projects portfolio, a searchable tenders listing, a press-release feed, and careers and contact pages.",
      },
      {
        heading: "Result",
        body: "A PPF site that retains the Growthfund connection and gives people direct routes to strategic projects and public tenders. [ADD REAL OUTCOME: launch response, stakeholder feedback, or a metric]",
      },
    ],
  },
  {
    slug: "ekapy-web-design",
    title: "EKAPY Health Procurement Web Design",
    status: "draft",
    clientType: "EKAPY: National Central Authority for Health Procurement",
    summary:
      "Web and UI design for EKAPY, the national authority coordinating health procurement. The work organises operational, data-heavy content.",
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
        body: "Users arrive to find a tender, document, or deadline. The design prioritised those tasks over decoration.",
      },
      {
        heading: "Process",
        body: "I organized the content model around user tasks, then designed listing, search, and document patterns that keep dense operational content legible.",
        mediaPlaceholder: "[ADD SCREENSHOTS: EKAPY web design screens]",
      },
      {
        heading: "Output",
        body: "A task-first web design system for a national operational authority.",
      },
    ],
  },
  {
    slug: "ekapy-afternoon-surgeries",
    title: "EKAPY Afternoon Surgeries",
    status: "published",
    clientType: "EKAPY / Ministry of Health: the Afternoon Surgeries programme",
    liveUrl: "https://soliddop.github.io/ekapy/",
    summary:
      "A public information website for EKAPY's Afternoon Surgeries programme, which funds free afternoon operations for patients who have waited too long on the public surgery list. Built as a working, animated site, it explains who qualifies, how the process runs, and where to get help.",
    problem:
      "Patients waiting months for surgery need to understand a programme with strict rules, without being misled about what it can promise. The earlier government page set out the scheme but did little to explain the steps, reassure anxious patients, or make clear that people do not sign up through the site itself.",
    role: ["Website UI design", "Brand direction", "Motion design", "Front-end build"],
    services: ["Website design", "Art direction", "Front-end build"],
    tools: ["Figma", "GSAP"],
    tags: ["web", "landing", "public"],
    cover: {
      type: "video",
      motif: "landing",
      alt: "The Afternoon Surgeries homepage: the headline \"Health doesn't wait\" over duotone patient portraits with citizen and service entry buttons, scrolling into the programme summary.",
      src: "media/work/ekapy-hero.mp4",
      poster: "media/work/ekapy-hero-poster.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        type: "video",
        src: "media/work/ekapy-process.mp4",
        poster: "media/work/ekapy-process-poster.webp",
        caption: "The process",
        alt: "The four-step participation guide revealing in sequence beside a hospital image: joining the list, checks and contact, scheduling, and tracking.",
      },
      {
        src: "media/work/ekapy-intro.webp",
        full: "media/work/ekapy-full.webp",
        caption: "What the programme offers",
        alt: "Three cards summarising the programme: free afternoon surgeries, operations beyond regular hours, and digital support through EKAPY's application.",
      },
      {
        type: "video",
        src: "media/work/ekapy-data.mp4",
        poster: "media/work/ekapy-data-poster.webp",
        caption: "Data & transparency",
        alt: "The data-and-transparency panel counting figures up as it enters view: operations performed, priority cases, public investment, and the waiting-time threshold.",
      },
      {
        src: "media/work/ekapy-drasi.webp",
        full: "media/work/ekapy-full.webp",
        caption: "The action",
        alt: "The 'action' section setting out the roles of the Ministry of Health, EKAPY, and EOPYY, with cards on how it works, where it takes place, and what applies to the patient.",
      },
      {
        src: "media/work/ekapy-faq.webp",
        full: "media/work/ekapy-full.webp",
        caption: "FAQ",
        alt: "The frequently-asked-questions accordion covering eligibility, registration, cost, timing, and facilities.",
      },
      {
        src: "media/work/ekapy-contact.webp",
        full: "media/work/ekapy-full.webp",
        caption: "Contact & help",
        alt: "The contact and footer section with the EKAPY helpdesk, the 1566 health line, and the Greece 2.0 and NextGenerationEU funding marks.",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Απογευματινά Χειρουργεία (\"Afternoon Surgeries\") is a Greek public-health programme under the line \"Health doesn't wait\". It funds operations carried out beyond regular hospital hours, free of charge, for patients already on the official surgery list who have waited more than four months. The Ministry of Health owns the programme, EKAPY, the National Central Authority for Health Procurement, runs it, and EOPYY takes part for the private-clinic side. It is financed through Greece 2.0 and NextGenerationEU.",
      },
      {
        heading: "Challenge",
        body: "This is sensitive, high-stakes information. The site had to stay calm and clear for worried patients while remaining precise about eligibility, and it had to manage expectations: being eligible does not guarantee a date, and registration happens through the hospital, not the website. It also needed a credible government identity and a data section that could be updated as official figures are confirmed.",
      },
      {
        heading: "Process",
        body: "I designed the identity and the single-page structure in Figma, then built it as a working website in HTML, CSS, and JavaScript. The page moves from the programme and what it offers, through the four-step patient journey, the roles of each body, a data-and-transparency panel, frequently asked questions, and the routes to help. A blue Ministry-of-Health palette, the EKAPY mark, and duotone patient photography carry the identity.",
      },
      {
        heading: "Motion",
        body: "GSAP animates the page throughout, kept subtle so it never competes with the health information. The hero and section headings reveal as they enter, the four participation steps appear in sequence beside a supporting image, and the data panel counts its figures up as it comes into view. The copy marks which numbers are confirmed and which are indicative until officially updated.",
      },
      {
        heading: "Output",
        body: "A responsive, animated single-page site with a hero, a summary of what the programme offers, a step-by-step participation guide, the roles of the Ministry, EKAPY, and EOPYY, a data-and-transparency panel, an FAQ, and contact and help routes, alongside entry points to EKAPY's citizen and service logins. It runs as static HTML, CSS, and JavaScript.",
      },
      {
        heading: "Result",
        body: "A clearer, more reassuring home for the programme that sets out the rules, the steps, and the limits in plain terms, and points patients to the right channel rather than implying they can enrol on the page. It is built to replace the programme's earlier government website.",
      },
    ],
  },
  {
    slug: "kifissia-municipality-redesign",
    title: "Municipality of Kifissia Website Redesign",
    status: "published",
    clientType: "Municipality of Kifissia (Δήμος Κηφισιάς)",
    liveUrl: "https://kifissia.gr",
    summary:
      "Website and UI design for the Municipality of Kifissia, replacing a legacy civic site with a WordPress platform organised around resident services.",
    problem:
      "The previous site was a deep archive of announcements, documents, and departments. Finding a service often required knowing which office ran it. The redesign needed to centre resident tasks and give the municipal team a site it could update without a developer.",
    role: ["Website UI design", "Information architecture", "Visual direction", "WordPress design"],
    services: ["Website design", "UI design", "WordPress"],
    tools: ["Figma", "WordPress"],
    tags: ["web", "wordpress", "public"],
    cover: {
      type: "image",
      motif: "sitemap",
      alt: "The Municipality of Kifissia homepage with a large search field over an aerial photo of the town centre and a clear top-level navigation",
      src: "media/work/kifissia-home.webp",
      full: "media/work/kifissia-home-full.webp",
      caption: "Homepage",
    },
    gallery: [
      {
        src: "media/work/kifissia-services.webp",
        full: "media/work/kifissia-services-full.webp",
        caption: "Services",
        alt: "The Kifissia Services page leading with electronic services and listing the municipality's directorates and departments",
      },
      {
        src: "media/work/kifissia-dimos.webp",
        full: "media/work/kifissia-dimos-full.webp",
        caption: "Our Municipality",
        alt: "The 'Our Municipality' section covering the town's identity, history, and governance, with a side navigation of departments",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "The Municipality of Kifissia serves three municipal units and roughly 73,000 residents in an area long known as Attica's \"garden city\". People use its website to issue certificates, report everyday problems, follow local news and events, and contact municipal departments. The redesign moved the site from a legacy platform to WordPress.",
      },
      {
        heading: "Challenge",
        body: "Municipal sites need to retain every department, notice, and document while helping residents complete routine tasks. The work reorganised years of civic content around those tasks and a clearer sitemap, on a platform the municipal team could maintain.",
      },
      {
        heading: "Process",
        body: "I structured the site around resident tasks rather than the municipal organisation. The top-level sitemap covers Services, Our Municipality, News & Events, and Contact, with prominent search and an \"apply online\" route on the homepage. The Services section leads with electronic services, including certificate issuance through Taxisnet codes and everyday-issue reporting through novoville, alongside the full directorate structure. WordPress lets the team publish announcements, events, and press releases themselves.",
      },
      {
        heading: "Output",
        body: "A responsive WordPress site with a search-led homepage, e-services, urgent announcements, and news. It also includes a Services section, an \"Our Municipality\" section, a news and events calendar, and contact information.",
      },
      {
        heading: "Result",
        body: "A municipal site organised around resident services, on a platform the team can update themselves. [ADD REAL OUTCOME: launch response, resident or stakeholder feedback, or a metric]",
      },
    ],
  },
  {
    slug: "eu-regions-week-2025",
    title: "EU Regions Week 2025 Web Presence",
    status: "draft",
    clientType: "Regional authority: EU Regions Week 2025",
    summary:
      "Web design for a regional authority's presence at EU Regions Week 2025, for a European audience.",
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
        body: "Communicate a regional agenda to an international institutional audience in a format that is easy to scan and appropriate for an EU event.",
      },
      {
        heading: "Process",
        body: "I designed an event-first structure covering the agenda, themes, and participation, with a visual system that combines regional identity and EU institutional conventions.",
        mediaPlaceholder: "[ADD SCREENSHOTS: EU Regions Week screens]",
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
    clientType: "Fysiko Aerio: Hellenic Energy Company",
    summary:
      "Campaign landing pages and interactive work for a national energy brand, including Park Your Cinema, a basketball shoot-and-win game, and Village Cinemas collaborations.",
    problem:
      "Energy is a low-engagement category. The campaigns used games, cinema tie-ins, and seasonal landing pages while retaining the brand and a clear conversion route.",
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
        body: "A series of campaign projects for Fysiko Aerio, the Hellenic Energy Company, including Park Your Cinema landing pages, a basketball shoot-and-win game, and Village Cinemas collaborations.",
      },
      {
        heading: "Challenge",
        body: "Each activation needed its own character while remaining recognisably part of the same brand. Every experience also had to work on a phone as well as a desktop.",
      },
      {
        heading: "Process",
        body: "I designed the landing structures, game entry flows, and visual systems per campaign, keeping components reusable across activations and seasons.",
        mediaPlaceholder: "[ADD SCREENSHOTS: Fysiko Aerio campaign screens]",
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
      src: "media/work/figma-projects-public-sector.png",
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
      src: "media/work/figma-projects-products.png",
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
      src: "media/work/figma-projects-current.png",
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
      src: "media/work/figma-projects-current.png",
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
      src: "media/work/figma-projects-products.png",
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
