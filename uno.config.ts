import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      iconifyCollectionsNames: ["si"],
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        logo: ["Inter"],
      },
    }),
  ],
  transformers: [transformerCompileClass()],
});
