/**
 * The canonical origin for absolute URLs in generated files (sitemap, robots).
 * `site` comes from astro.config.mjs; failing loudly here beats silently
 * generating URLs against the wrong domain.
 */
export function requireSite(site: URL | undefined): URL {
  if (!site) {
    throw new Error("`site` must be set in astro.config.mjs — sitemap/robots URLs depend on it.");
  }
  return site;
}
