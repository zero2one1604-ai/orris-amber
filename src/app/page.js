import Link from 'next/link'
import { 
  Search, User, Heart, ShoppingBag, Phone, Menu, 
  Beaker, Package, ShieldCheck, Zap, ArrowRight, Upload 
} from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full bg-white text-black font-sans">
      
      <section className="relative w-full h-[90vh] bg-neutral-900 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2000"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
              From Concept to Counter: <br className="hidden md:block" /> 
              Your one stop solution for your fragrance and cosmetic needs.
            </h1>
            <p className="text-sm md:text-xl font-light tracking-wide mb-10 opacity-90 max-w-2xl mx-auto">
              Full-service contract manufacturing for EDPs, Skincare, and Premium Packaging. 
              <span className="block font-medium mt-2">High quality, Low MOQs.</span>
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <Link 
                href="/catalog" 
                className="bg-white text-black px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all"
              >
                Explore Our Catalog
              </Link>
              <Link 
                href="/contact" 
                className="border border-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Consult with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4 text-center">Industry Expertise</h2>
          <h3 className="text-3xl font-light text-center tracking-tight">Browse Our Specialty Sectors</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100">
          {[
            { main: "Fragrance & Perfumery", subs: "EDP (Eau de Parfum), Solid Perfumes, Attars, Room Sprays" },
            { main: "Personal Care", subs: "Soaps (Artisan/Melt & Pour), Body Scrubs, Shampoos, Conditioners" },
            { main: "Skin & Lip Care", subs: "Lip Butters, Balms, Body Butters, Moisturizers" },
            { main: "Home Ambiance", subs: "Scented Candles, Reed Diffusers, Aroma Oils" },
            { main: "Packaging Solutions", subs: "Glass Bottles, Jars, Caps (Wooden/Acrylic), Pumps/Sprayers" },
            { main: "Branding Material", subs: "Custom Boxes, Labels, Shipping Cartons" }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-12 hover:bg-neutral-50 transition-all group">
              <h4 className="text-lg font-bold uppercase tracking-tighter mb-4">{cat.main}</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">{cat.subs}</p>
              <Link href={`/category/${idx}`} className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 group-hover:text-red-600 group-hover:border-red-600 transition-colors">
                View Solutions
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-neutral-950 text-white px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-4">Build Your Brand</h2>
            <p className="text-neutral-400 uppercase tracking-[0.2em] text-xs">Our 4-Step Production Process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            {[
              { step: "01", label: "Formulation", desc: "Choose from our library or create a custom scent/formula." },
              { step: "02", label: "Packaging", desc: "Select bottles, caps, and pumps from our extensive inventory." },
              { step: "03", label: "Branding", desc: "Custom label printing and box design." },
              { step: "04", label: "Production", desc: "Low MOQ manufacturing and doorstep delivery." }
            ].map((s, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-black opacity-10 absolute -top-10 left-0">{s.step}</span>
                <h5 className="text-xl font-bold mb-4 relative z-10">{s.label}</h5>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white text-black p-10 md:p-16 rounded-sm">
            <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-tighter">Request Customization</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="Brand Name" className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" />
              <input type="email" placeholder="Email Address" className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" />
              
              <div className="md:col-span-2 border-2 border-dashed border-neutral-200 p-8 text-center hover:bg-neutral-50 cursor-pointer group transition-all">
                <Upload className="mx-auto mb-4 text-neutral-300 group-hover:text-black" />
                <p className="text-xs uppercase tracking-widest font-bold">Upload Your Logo (PNG/Vector)</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Choose Your Color Palette</p>
                <div className="flex gap-4">
                  {['#000', '#D4AF37', '#704214', '#E5E4E2'].map(c => (
                    <div key={c} style={{backgroundColor: c}} className="w-8 h-8 rounded-full border border-neutral-100 cursor-pointer hover:scale-110 transition-transform" />
                  ))}
                </div>
              </div>

              <button className="md:col-span-2 bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-neutral-800">
                Start My Project
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="flex items-start gap-6">
          <Zap className="shrink-0 text-red-600" size={32} />
          <div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Low MOQ Advantage</h4>
            <p className="text-neutral-500 leading-relaxed">
              We empower startups and boutique brands. Launch your vision with manageable order quantities without sacrificing premium quality.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <ShieldCheck className="shrink-0 text-red-600" size={32} />
          <div>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Quality Assurance</h4>
            <p className="text-neutral-500 leading-relaxed">
              Global compliance is our standard. Our facility operates under ISO and GMP certifications with rigorous internal laboratory testing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="px-6 mb-16 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-2">Our Network</p>
          <h3 className="text-2xl font-light">Trusted by Emerging & Global Brands</h3>
        </div>
        
        <div className="flex overflow-hidden whitespace-nowrap gap-16 opacity-30 grayscale mb-24">
           {['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five'].map(b => (
             <span key={b} className="text-4xl font-black uppercase tracking-tighter">{b}</span>
           ))}
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-12 shadow-sm border border-neutral-100 relative italic text-neutral-600 text-lg text-center">
            <span className="text-6xl absolute top-0 left-4 opacity-10">"</span>
            "The lead times and product consistency provided by Orris & Amber allowed us to scale our EDP line from a small boutique to national distribution in under 12 months."
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-black not-italic">— Founder, Niche Scents India</p>
          </div>
        </div>
      </section>

    </main>
  )
}