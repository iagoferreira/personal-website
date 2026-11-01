// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
    inlineStylesheets: "always",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Cascadia Code",
      cssVariable: "--font-cascadia",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "Menlo", "Consolas", "monospace"],
    },
  ],
});
