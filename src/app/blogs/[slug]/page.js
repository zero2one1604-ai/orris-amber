import { blogs } from "@/app/lib/blogs_database"
import { notFound } from "next/navigation"
import { Clock, Calendar, Share2, ArrowLeft, User } from 'lucide-react';
import Link from "next/link";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return {}

  return {
    title: `${blog.title} | Orris & Amber Journal`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
    alternates: {
      canonical: `https://orrisandamber.com/blogs/${slug}`
    }
  }
}

export default async function BlogPage({ params }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) return notFound()

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-neutral-100">
        <div className="h-full bg-black transition-all duration-300 w-0" id="progress-bar" />
      </div>

      <header className="relative pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <Link 
            href="/blogs" 
            className="group flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] mb-12 text-neutral-400 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-widest">
              {blog.category || "Industry Insights"}
            </span>
            <span className="text-neutral-300 text-[10px] uppercase tracking-widest flex items-center gap-2">
              <Clock size={12} /> 6 Min Read
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.95] mb-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                <User size={14} className="text-neutral-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest">Editorial Team</p>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Orris & Amber</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={14} className="text-neutral-400" />
              <p className="text-[10px] font-bold uppercase tracking-widest">
                {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. FEATURED IMAGE */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-20">
        <div className="aspect-[21/9] bg-neutral-100 overflow-hidden">
          <img 
            src={blog.image || "https://images.unsplash.com/photo-1616948648216-9b16866657c4?auto=format&fit=crop&q=80"} 
            alt={blog.title} 
            className="w-full h-full object-cover grayscale brightness-90"
          />
        </div>
      </section>

      {/* 4. CONTENT AREA */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sidebar - Desktop Only */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 border-b pb-2">Share Scent</h4>
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-3 text-xs font-light hover:text-neutral-400 transition-colors">
                  <Share2 size={14} /> LinkedIn
                </button>
                <button className="flex items-center gap-3 text-xs font-light hover:text-neutral-400 transition-colors">
                  <Share2 size={14} /> Twitter
                </button>
              </div>
            </div>
            <div className="p-8 bg-neutral-50">
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Partner with us</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">
                Looking to launch your own brand or stock premium fragrances?
              </p>
              <button className="w-full py-3 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                Get a Quote
              </button>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <div 
            className="rich-text-content prose prose-neutral max-w-none 
            prose-headings:uppercase prose-headings:font-light prose-headings:tracking-tighter
            prose-h2:text-3xl prose-h3:text-xl
            prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:font-light
            prose-li:text-neutral-600 prose-li:font-light
            prose-strong:font-bold prose-strong:text-black
            prose-blockquote:border-l-black prose-blockquote:italic prose-blockquote:font-light
            prose-img:rounded-sm prose-img:grayscale hover:prose-img:grayscale-0 transition-all duration-500"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          {/* TAGS / FOOTER */}
          <div className="mt-20 pt-10 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-neutral-50">#B2BFragrance</span>
              <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-neutral-50">#PerfumeManufacturing</span>
            </div>
          </div>
        </article>
      </section>

      {/* 5. NEWSLETTER / FOOTER CTA */}
      <section className="mt-32 py-24 bg-black text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-light uppercase tracking-widest mb-6">Stay Ahead of the Market</h3>
          <p className="text-neutral-400 text-sm font-light mb-10">Receive monthly insights on fragrance trends, manufacturing technicals, and retail strategy.</p>
          <div className="flex border-b border-neutral-700 pb-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full focus:ring-0" 
            />
            <button className="text-[10px] font-bold uppercase tracking-widest">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  )
}