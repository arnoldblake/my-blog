import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPost(slug: string) {

    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const fileslug = path.split('/').at(-1)?.replace('.md', '')

        if (file && (fileslug === slug)) {
            console.log(file)
            const post = posts.find(post => slug === fileslug)
            return { metadata: file.metadata, data: file.default.render }
        }

    }
}

export async function GET({ params }) {
    const posts = await getPost(params.slug)
    return json(posts)
}