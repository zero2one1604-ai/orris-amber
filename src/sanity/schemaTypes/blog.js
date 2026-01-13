export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Short Summary'
    },
    {
      name: 'content',
      title: 'Full Article',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    },
    {
      name: 'publishedAt',
      type: 'datetime'
    }
  ]
}
