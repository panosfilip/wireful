import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { projectTagDefinitions, type ProjectTag } from "./data/projectTags";

const projectTags = Object.keys(projectTagDefinitions) as [ProjectTag, ...ProjectTag[]];

const coverMotifs = [
  "sitemap",
  "search",
  "homepage",
  "landing",
  "audit",
  "signage",
  "portal",
] as const;

/**
 * Case-study content model. One JSON file per project in src/content/work/.
 *
 * To replace a placeholder with a real project: edit the matching file,
 * flip `status` to "draft" or "published", and swap `cover` from a motif
 * to a real image (`type: "image", src: "media/work/...", alt: "..."`).
 * Bracketed values like [ADD REAL OUTCOME] are deliberate placeholders
 * and are visually flagged on the site until replaced.
 */
const work = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/work" }),
  schema: z.object({
    /** Position in the old caseStudies array; breaks ordering ties. */
    order: z.number(),
    slug: z.string(),
    title: z.string(),
    status: z.enum(["placeholder", "draft", "published"]),
    /**
     * Editorial priority. Lower numbers surface first in the Work grid and
     * feed the "Featured" row on the index. Leave unset for the long tail.
     */
    featured: z.number().optional(),
    year: z.string().optional(),
    clientType: z.string().optional(),
    liveUrl: z.string().url().optional(),
    /**
     * Multiple outbound links for pages covering more than one shipped site.
     * When present, the Details block renders these labeled links instead of
     * the single "Visit live site" link. Keep `liveUrl` set as well: the
     * Work-grid card's "Live site" badge reads only `liveUrl`.
     */
    liveLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
    /**
     * Where the work was done: an employer/agency name (e.g. "Choose") or
     * "Freelance". Leave unset to show a flagged placeholder on the page.
     */
    engagement: z.string().optional(),
    summary: z.string(),
    problem: z.string(),
    role: z.array(z.string()),
    services: z.array(z.string()),
    tools: z.array(z.string()),
    tags: z.array(z.enum(projectTags)),
    cover: z.object({
      type: z.enum(["placeholder", "image", "video"]),
      motif: z.enum(coverMotifs),
      alt: z.string(),
      src: z.string().optional(),
      full: z.string().optional(),
      caption: z.string().optional(),
      poster: z.string().optional(),
      visualPrompt: z.string().optional(),
    }),
    sections: z.array(
      z.object({
        heading: z.string(),
        body: z.string(),
        mediaPlaceholder: z.string().optional(),
      }),
    ),
    gallery: z
      .array(
        z.object({
          type: z.enum(["image", "video"]).optional(),
          src: z.string(),
          alt: z.string(),
          full: z.string().optional(),
          caption: z.string().optional(),
          poster: z.string().optional(),
          /**
           * Optional group label. Consecutive shots sharing a label render as
           * their own grid with a small heading above it.
           */
          group: z.string().optional(),
        }),
      )
      .optional(),
    /**
     * Optional long-form mobile product walkthrough. This keeps flow-based
     * case studies out of the landscape gallery treatment used by websites.
     */
    flowShowcase: z
      .object({
        context: z.object({
          heading: z.string(),
          body: z.string(),
        }),
        /**
         * Optional user-research band (survey/interview stats). Omit for
         * concept work with no real research to report.
         */
        research: z
          .object({
            heading: z.string(),
            body: z.string(),
            stats: z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              }),
            ),
          })
          .optional(),
        /**
         * Optional information-architecture band with Figma board exports.
         * Omit when there are no board overviews to show.
         */
        structure: z
          .object({
            heading: z.string(),
            body: z.string(),
            boards: z.array(
              z.object({
                src: z.string(),
                alt: z.string(),
                caption: z.string(),
              }),
            ),
          })
          .optional(),
        groups: z.array(
          z.object({
            heading: z.string(),
            body: z.string(),
            screens: z.array(
              z.object({
                src: z.string(),
                alt: z.string(),
                caption: z.string(),
                /**
                 * Optional full-scroll export opened by the lightbox. Use it
                 * when `src` is a viewport-height crop of a taller screen.
                 */
                full: z.string().optional(),
              }),
            ),
          }),
        ),
        /**
         * Optional post-testing evaluation band (usability scores, change
         * log). Omit for concept work that was not user-tested.
         */
        evaluation: z
          .object({
            heading: z.string(),
            body: z.string(),
            stats: z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              }),
            ),
            changes: z.array(z.string()),
          })
          .optional(),
        output: z.object({
          heading: z.string(),
          body: z.string(),
        }),
      })
      .optional(),
    outcomes: z.array(z.string()).optional(),
    nextSteps: z.array(z.string()).optional(),
  }),
});

export const collections = { work };
