import { blogs } from "@/app/lib/blogs_database"
import { notFound } from "next/navigation"
import { Clock, Calendar, Share2, ArrowLeft, User, ArrowRight } from 'lucide-react';
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
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-neutral-100">
        <div className="h-full bg-black transition-all duration-300 w-0" id="progress-bar" />
      </div>

      <header className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto border-b border-neutral-100">
        <div className="max-w-5xl">
          <Link 
            href="/blogs" 
            className="group inline-flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.4em] mb-16 text-neutral-400 hover:text-black transition-all"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Journal
          </Link>
          
          <div className="flex items-center gap-6 mb-10">
            <span className="px-4 py-1.5 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em]">
              {blog.category || "Industry Insights"}
            </span>
            <span className="text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Clock size={14} strokeWidth={2.5} /> 6 Min Read
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-[0.9] text-black mb-12">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-12 py-10 border-t border-neutral-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-black">Editorial Team</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Orris & Amber</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center">
                <Calendar size={18} className="text-black" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-black">Published</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 md:px-12 max-w-[1440px] mx-auto -mt-px">
        <div className="aspect-[21/9] bg-neutral-100 overflow-hidden">
          <img 
            src={blog.image || "https://images.unsplash.com/photo-1616948648216-9b16866657c4?auto=format&fit=crop&q=80"} 
            alt={blog.title} 
            className="w-full h-full object-cover grayscale brightness-105 contrast-110"
          />
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 py-24">
        
        <aside className="hidden lg:block lg:col-span-3 sticky top-40 h-fit space-y-20">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest mb-8 border-b-2 border-black text-black pb-2 inline-block">Share Analysis</h4>
            <div className="flex flex-col gap-6">
              {['LinkedIn', 'Twitter', 'WhatsApp'].map((platform) => (
                <button key={platform} className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
                  {platform} <Share2 size={14} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-10 bg-neutral-900 text-white">
            <h4 className="text-[11px] font-bold uppercase tracking-widest mb-6">Manufacturing Solutions</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
              Transform this insight into your own legacy fragrance line with our bespoke services.
            </p>
            <Link href="/contact_us" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-white pb-2 w-fit">
              Request Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </aside>

        <article className="lg:col-span-8 lg:col-start-5">
          <div 
            className="rich-text-content text-black prose prose-neutral max-w-none 
            /* Enhanced Contrast Header Styles */
            prose-headings:uppercase prose-headings:font-light prose-headings:tracking-tighter prose-headings:text-black
            prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-neutral-100 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-neutral-900
            
            /* High-Contrast Body Text */
            prose-p:text-neutral-900 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-10 prose-p:font-normal
            
            /* Technical List Formatting */
            prose-ul:list-none prose-ul:pl-0 prose-li:pl-8 prose-li:relative prose-li:text-neutral-900 prose-li:mb-6 prose-li:text-lg
            before:prose-li:content-[''] before:prose-li:absolute before:prose-li:left-0 before:prose-li:top-[0.8em] before:prose-li:w-5 before:prose-li:h-[1.5px] before:prose-li:bg-black
            
            /* Strong & Quotes */
            prose-strong:font-bold prose-strong:text-black
            prose-blockquote:border-l-[3px] prose-blockquote:border-black prose-blockquote:bg-neutral-50 prose-blockquote:py-12 prose-blockquote:px-12 prose-blockquote:not-italic prose-blockquote:text-black prose-blockquote:text-2xl prose-blockquote:font-light
            
            /* Images */
            prose-img:rounded-none prose-img:my-16 prose-img:shadow-2xl shadow-neutral-100"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          <div className="mt-24 pt-12 border-t border-neutral-100 flex flex-wrap gap-4">
            {['Strategy', 'Manufacturing', 'SupplyChain'].map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-5 py-2 bg-neutral-50 border border-neutral-100 text-black">
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-10">Stay Informed</h3>
          <p className="text-neutral-400 text-sm font-light uppercase tracking-widest mb-16 max-w-xl mx-auto">Monthly technical briefs for the fragrance industry.</p>
          <div className="flex border-b border-neutral-700 pb-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-transparent border-none outline-none text-[11px] font-bold tracking-[0.3em] w-full placeholder:text-neutral-600 focus:ring-0" 
            />
            <button className="text-[11px] font-bold uppercase tracking-[0.3em] hover:text-neutral-400 transition-colors">Join</button>
          </div>
        </div>
      </section>
    </main>
  )
}