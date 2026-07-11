import type { APIRoute } from "astro";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://panosfilip.github.io");
  const sitemap = new URL(`${base}/sitemap.xml`, origin).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
