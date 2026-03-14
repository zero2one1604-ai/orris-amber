import Link from "next/link"
import Image from "next/image"
import { productCategories } from "@/app/lib/products_database"
import { ArrowUpRight, Leaf, Beaker, Sparkles } from "lucide-react"

export const metadata = {
  title: "Collections | Orris & Amber",
  description: "Explore our curated fragrance, skincare, and wellness portfolios designed for global markets."
}

export default function ProductsPage() {
  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <header className="mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">The Portfolio</h2>
          <h1 className="text-4xl md:text-8xl font-light tracking-tighter uppercase leading-none mb-12">
            Curated <br /> Collections
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-100 pb-12">
            <p className="max-w-xl text-lg text-neutral-500 font-light leading-relaxed">
              From rare oriental ouds to contemporary botanical skincare, explore our 
              comprehensive range of formulations developed for discerning retailers 
              and global brands.
            </p>
            <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-neutral-300">
               <span className="flex items-center gap-2"><Leaf size={14}/> Natural</span>
               <span className="flex items-center gap-2"><Beaker size={14}/> Lab Tested</span>
               <span className="flex items-center gap-2"><Sparkles size={14}/> Premium</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {productCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group bg-white transition-all duration-500 hover:bg-neutral-50 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image 
                  src={cat.image || "/images/default-product.jpg"} 
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <span className="absolute top-6 left-6 text-[10px] font-bold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                   / 0{i + 1}
                </span>
              </div>

              <div className="p-10 md:p-12 flex flex-col flex-grow border-t border-neutral-100">
                <div className="flex justify-between items-start mb-8">
                  <div className="h-px w-8 bg-black mt-2 group-hover:w-16 transition-all duration-500"></div>
                  <ArrowUpRight size={18} className="text-neutral-300 group-hover:text-black transition-colors" />
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tighter mb-2 group-hover:tracking-tight transition-all">
                        {cat.name}
                    </h2>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold">
                        {cat.products.length} Master Formulations
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-neutral-50">
                    <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                        High-performance {cat.name.toLowerCase()} developed for 
                        the global luxury market.
                    </p>
                    <span className="inline-block mt-6 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">
                        View Collection
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-24 bg-black text-white rounded-sm overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-light uppercase tracking-widest mb-6">Bespoke Solutions</h3>
                    <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-md">
                        Don't see a specific category? We specialize in custom development 
                        for niche fragrance markets and private label wellness lines.
                    </p>
                </div>
                <div className="flex lg:justify-end">
                    <Link 
                        href="/customization"
                        className="px-10 py-4 border border-neutral-700 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                    >
                        Start Custom Project
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neutral-800 to-transparent opacity-20 -mr-32 -mt-32 rounded-full"></div>
        </section>

      </div>
    </main>
  )
}