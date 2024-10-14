//import { deselectScripts } from 'astro/virtual-modules/transitions-swap-functions.js'
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
        draft: z.boolean().optional(),
        minutesRead: z.string().optional(),
    }),
})

/*const jobs = defineCollection({
    type: 'data',
    schema: z.object({
        jobTitle: z.string(),
        companyName: z.string(),
        yearStarted: z.coerce.date(),
        yearEnded: z.coerce.date(),
        description: z.string(),
        location: z.string()
    }),
})

const education = defineCollection({
    type: 'data',
    schema: z.object({
        degree: z.string(),
        school: z.string(),                                                         
        yearStarted: z.coerce.date(),
        yearEnded: z.coerce.date(),
        minors: z.array(z.string()).optional(),
        description: z.string()
    })
})

const skills = defineCollection({
    type: 'data',
    schema: z.object({
        heading: z.string(),
        skillList: z.array(z.string())
    })
})*/

export const collections = { blog }

