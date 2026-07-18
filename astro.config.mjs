import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://panosfilip.github.io",
  base: "/wireful",
  // Astro 7 defaults to JSX-style whitespace stripping ('jsx'), which removes
  // spaces between adjacent inline elements. Keep the HTML-rules behaviour the
  // site was designed against under Astro 5.
  compressHTML: true,
});
