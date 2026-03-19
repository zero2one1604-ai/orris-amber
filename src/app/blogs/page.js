import React from 'react';
import { blogs } from '../lib/blogs_database';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar, BookOpen, Filter, TrendingUp } from 'lucide-react';

export default function BlogSystem() {
  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 1. HERO / HEADER */}
        <section className="mb-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Industry Insights</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter uppercase mb-12 leading-[0.85]">
            The Fragrance <br /> <span className="italic text-neutral-300">Journal</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-100 pb-12">
            <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-3xl">
              Expert analysis on perfume manufacturing, Indian market trends, 
              and bespoke brand-building strategies.
            </p>
            <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-neutral-400">
               <span className="flex items-center gap-2"><BookOpen size={14}/> {blogs.length} Articles</span>
               <span className="flex items-center gap-2"><TrendingUp size={14}/> 2026 Trends</span>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="mb-32">
            <Link href={`/blogs/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-neutral-50 overflow-hidden border border-neutral-100">
              <div className="lg:col-span-7 aspect-video lg:aspect-auto relative overflow-hidden bg-neutral-200">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-8 text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400">
                  <span className="text-black">{featuredPost.category}</span>
                  <span className="w-1 h-1 bg-neutral-200 rounded-full"></span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-light uppercase tracking-tighter mb-8 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-10">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 w-fit">
                  Read Full Analysis <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          </section>
        )}

        <section className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {['Strategy', 'Manufacturing', 'Market Trends', 'Packaging'].map((cat, i) => (
              <div key={i} className="bg-white p-8 group cursor-pointer hover:bg-black transition-colors duration-300">
                <span className="text-[10px] font-bold text-neutral-300 group-hover:text-neutral-600 block mb-4">0{i+1}</span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{cat}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {regularPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blogs/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-4 text-[9px] text-neutral-400 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
              </div>

              <h3 className="text-2xl font-light uppercase tracking-tighter mb-4 leading-tight group-hover:text-neutral-500 transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-neutral-500 font-light line-clamp-3 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="mt-auto h-px bg-neutral-100 w-full group-hover:bg-black transition-colors" />
            </Link>
          ))}
        </section>
        <section className="mt-32">
          <div className="bg-black text-white p-12 md:p-24 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Filter className="text-neutral-500 mb-8" size={32} />
              <h3 className="text-4xl font-light uppercase tracking-tighter mb-8">Stay Ahead <br /> Of The Market</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Receive monthly technical briefs on raw material sourcing, 
                regulatory shifts, and fragrance design trends in India.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="flex border-b border-neutral-700 pb-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full uppercase placeholder:text-neutral-600 focus:ring-0" 
                />
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-neutral-400 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}