import type { APIRoute } from "astro";
import { caseStudies } from "../data/caseStudies";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const staticPaths = ["", "about/", "approach/", "work/", "contact/"];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://panosfilip.github.io");
  const abs = (path: string) => new URL(`${base}/${path}`, origin).href;

  const urls = [
    ...staticPaths.map(abs),
    ...caseStudies.map((cs) => abs(`work/${cs.slug}/`)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
