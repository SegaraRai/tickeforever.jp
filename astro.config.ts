import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://tickeforever.jp",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "file",
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
