// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// Import Zod
import { z } from "astro/zod";

// Define a `loader` and `schema` for each collection
const collaborations = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/collaborations" }),
    schema: z.object({
      clientName: z.string(),
      web: z.string()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = { collaborations };