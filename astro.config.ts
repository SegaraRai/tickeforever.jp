import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
