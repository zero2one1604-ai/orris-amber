import { client } from '@/sanity/lib/client'

export async function getBlogs() {
  return client.fetch(`*[_type == "blog"]{
    title,
    "slug": slug.current,
    excerpt
  }`)
}
