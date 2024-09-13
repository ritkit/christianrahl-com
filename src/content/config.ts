import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Hide page if it is a draft, page will still be generated, just with a different slug.
        draft: z.boolean().optional()
    }),
})


export const collections = { blog }

