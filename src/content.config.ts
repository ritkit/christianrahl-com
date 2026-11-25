import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Frontmatter dates like '15 Sept 2024' are parsed in the build machine's local
// timezone; pin them to midnight UTC so local and CI builds produce the same output.
const utcDate = z.coerce.date().transform(
    (d) => new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())),
)

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: utcDate,
        updatedDate: utcDate.optional(),
        heroImage: z.string().optional(),
        heroAlt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        // Hide page if it is a draft, page will still be generated, just with a different slug.
        draft: z.boolean().optional(),
    }),
})


export const collections = { blog }

