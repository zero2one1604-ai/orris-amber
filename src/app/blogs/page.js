'use client';

import { blogs } from '../lib/blogs_database';
import { useRouter } from 'next/navigation';

export default function BlogSystem() {
  const router = useRouter();

const onPostSelect = (post) => {
  router.push(`/blogs/${post.slug}`)
}

  return (
    <section>
      <div className="mb-20">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Industry Insights</h2>
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-8">The Fragrance <br /> Journal</h1>
        <p className="max-w-xl text-neutral-500 font-light">
          Expert analysis on perfume manufacturing, Indian market trends, and brand-building strategies from the heart of Orris & Amber.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {blogs.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer"
            onClick={() => onPostSelect(post)}
          >
            <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6 relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] uppercase font-bold tracking-widest">
                {post.category}
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-neutral-400 uppercase tracking-widest mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-medium leading-tight mb-4 group-hover:underline underline-offset-4 decoration-1">
              {post.title}
            </h3>
            <p className="text-sm text-neutral-500 font-light line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}