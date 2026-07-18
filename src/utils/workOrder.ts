import type { CaseStudy } from "../data/caseStudies";

/** Editorial priority: published first, then drafts, then placeholders. */
export const statusRank = (status: CaseStudy["status"]) =>
  status === "published" ? 0 : status === "draft" ? 1 : 2;

/**
 * Shared editorial ordering: explicit `featured` number first (lower wins),
 * then status. Returns 0 on ties so callers can chain their own tiebreakers.
 */
export const byFeaturedThenStatus = (a: CaseStudy, b: CaseStudy) => {
  const fa = a.featured ?? Infinity;
  const fb = b.featured ?? Infinity;
  if (fa !== fb) return fa - fb;
  return statusRank(a.status) - statusRank(b.status);
};
