import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://panosfilip.github.io",
  base: "/wireful",
  // Astro 7 defaults to JSX-style whitespace stripping ('jsx'), which removes
  // spaces between adjacent inline elements. Keep the HTML-rules behaviour the
  // site was designed against under Astro 5.
  compressHTML: true,
  vite: {
    build: {
      // Vite 8's default CSS minifier (lightningcss) rewrites prefix-sensitive
      // declarations against its own browser targets — it dropped the standard
      // `backdrop-filter` (keeping only -webkit-), which broke the header blur.
      // esbuild minifies without transpiling declarations, like the Astro 5 builds.
      cssMinify: "esbuild",
    },
  },
});
