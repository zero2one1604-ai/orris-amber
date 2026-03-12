import { blogs } from "@/app/lib/blogs_database"

export default function sitemap() {
  const baseUrl = "https://orrisandamber.com"

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.date
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    ...blogUrls
  ]
}