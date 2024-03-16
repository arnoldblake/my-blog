import type { Post } from '$lib/types'

export async function load({ params, fetch }) {
    const response = await fetch('/api/posts')
    const posts: Post[] = await response.json()
    const post = posts.find(post => post.slug === params.slug)
    return { post }
}