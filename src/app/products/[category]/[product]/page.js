import Link from "next/link"
import { productCategories } from "@/app/lib/products_database"
import { notFound } from "next/navigation"
import { ArrowLeft, Share2, Info, Droplet, Sparkles, ShieldCheck } from "lucide-react"

export function generateStaticParams() {
  const paths = []
  productCategories.forEach((cat) => {
    cat.products.forEach((p) => {
      paths.push({
        category: cat.slug,
        product: p.slug
      })
    })
  })
  return paths
}

export async function generateMetadata({ params }) {
  const { category: catSlug, product: prodSlug } = await params
  const category = productCategories.find((c) => c.slug === catSlug)
  const product = category?.products.find((p) => p.slug === prodSlug)

  if (!product) return {}

  return {
    title: `${product.name} | Orris & Amber`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }) {
  const { category, product } = await params
  const categoryData = productCategories.find((c) => c.slug === category)
  const productData = categoryData?.products.find((p) => p.slug === product)

  if (!productData) return notFound()

  const otherProducts = categoryData.products.filter(p => p.slug !== productData.slug)

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <nav className="mb-12 flex items-center justify-between">
          <Link 
            href={`/products`} 
            className="group flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to {categoryData.name}
          </Link>
          <button className="text-neutral-400 hover:text-black transition-colors">
            <Share2 size={16} />
          </button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/5] bg-neutral-50 overflow-hidden rounded-sm">
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="aspect-square bg-neutral-100 flex items-center justify-center p-12">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 text-center leading-loose">
                    Crafted with <br/> 100% pure <br/> botanical essences
                  </p>
               </div>
               <div className="aspect-square bg-neutral-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1615485242250-98319f6f634b?auto=format&fit=crop&q=80" alt="Detail" className="w-full h-full object-cover grayscale opacity-50" />
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12">
            <header>
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.4em] mb-4">
                {categoryData.name} Collection
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-none mb-8">
                {productData.name}
              </h1>
              <p className="text-neutral-500 font-light leading-relaxed text-lg">
                {productData.description}
              </p>
            </header>

            <div className="grid grid-cols-2 gap-y-10 gap-x-4 py-10 border-y border-neutral-100">
                <div className="flex gap-4">
                    <Droplet size={18} className="text-neutral-300" />
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Concentration</h4>
                        <p className="text-xs text-neutral-500 font-light">Extrait de Parfum</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Sparkles size={18} className="text-neutral-300" />
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Longevity</h4>
                        <p className="text-xs text-neutral-500 font-light">12+ Hours</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <ShieldCheck size={18} className="text-neutral-300" />
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Sourcing</h4>
                        <p className="text-xs text-neutral-500 font-light">Ethical Botanicals</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Info size={18} className="text-neutral-300" />
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Availability</h4>
                        <p className="text-xs text-neutral-500 font-light">Bulk & Retail</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors">
                    Inquire for Bulk Order
                </button>
                <p className="text-[9px] text-center text-neutral-400 uppercase tracking-widest italic">
                    *Samples available for corporate clients upon request
                </p>
            </div>

           
          </div>
        </div>
        <section className="mt-32 pt-24 border-t border-neutral-100">
            <div className="max-w-2xl">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Product Narrative</h2>
                <p className="text-neutral-600 font-light leading-loose">
                    Each bottle of {productData.name} undergoes a strict maturation process in our temperature-controlled facility in India. 
                    Designed for the modern connoisseur, this fragrance utilizes high-grade {categoryData.name.toLowerCase()} extraction techniques 
                    to ensure that the scent profile remains consistent from the first spray to the last.
                </p>
            </div>
        </section>

        {categoryData.list && (
                <div className="lg:col-span-7 mt-10">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Available Profiles in this Collection</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
                      {categoryData.list.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                          <span className="text-[8px] text-neutral-300 font-mono group-hover:text-black transition-colors">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-neutral-500 group-hover:text-black transition-colors font-light">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 p-6 bg-neutral-50 border border-neutral-100">
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                        Note: All profiles listed above are available for custom branding and bulk corporate packaging. 
                        Contact our concierge for specific notes on each profile.
                      </p>
                    </div>
                </div>
              )}

      </div>
    </main>
  )
}