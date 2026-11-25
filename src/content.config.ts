import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        heroAlt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Hide page if it is a draft, page will still be generated, just with a different slug.
        draft: z.boolean().optional(),
        minutesRead: z.string().optional(),
    }),
})


export const collections = { blog }

