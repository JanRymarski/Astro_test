import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://JanAstroTest.com",
  integrations: [preact()]
});