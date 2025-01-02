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
      scale: 1,
      warn: true,
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        logo: ["Inter"],
      },
    }),
  ],
  transformers: [transformerCompileClass({
    classPrefix: "u",
  })],
});
