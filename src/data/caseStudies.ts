/**
 * Case-study access layer.
 *
 * The content itself lives in src/content/work/ (one JSON file per project,
 * validated by the schema in src/content.config.ts). This module loads the
 * collection once at build time and exports the same `caseStudies` array and
 * types the site has always consumed, ordered by each entry's `order` field
 * (the position in the original hand-ordered array).
 */
import { getCollection, type CollectionEntry } from "astro:content";

export type CaseStudy = CollectionEntry<"work">["data"];
export type CaseStudyStatus = CaseStudy["status"];
export type CoverMotif = CaseStudy["cover"]["motif"];

const entries = await getCollection("work");

/**
 * Entries flagged `hidden: true` are dropped here, so every consumer (the Work
 * grid, `getStaticPaths` for `/work/<slug>/`, related-work, and the sitemap)
 * excludes them from one place. Use it for a project still in progress.
 */
export const caseStudies: CaseStudy[] = entries
  .map((entry) => entry.data)
  .filter((cs) => !cs.hidden)
  .sort((a, b) => a.order - b.order);
