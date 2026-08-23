// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://derniereronde.com",
  i18n: {
      locales: ["en", "fr"],
      defaultLocale: "fr",
      fallback: {
          en: "fr"
      }
  },
  integrations: [mdx()]
});