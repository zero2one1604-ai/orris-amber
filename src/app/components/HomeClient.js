'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ShieldCheck, Zap, Upload 
} from 'lucide-react'
import Banner from '@/app/components/Banner';

export default function Home() {

  const [projectForm, setProjectForm] = useState({
  brand: '',
  email: ''
})

const handleProjectChange = (e) => {
  const { name, value } = e.target
  setProjectForm(prev => ({
    ...prev,
    [name]: value
  }))
}

const handleProjectSubmit = (e) => {
    e.preventDefault()

    const text = `
*New Project Request*

*Brand Name:* ${projectForm.brand}
*Company Name:* ${projectForm.company}
*Email:* ${projectForm.email}
*Address:* ${projectForm.address}

Interested in starting a perfume project with Orris & Amber.
    `

    const encoded = encodeURIComponent(text)
    const phoneNumber = "919871566081"
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`

    window.open(url, '_blank')
  }

  return (
    <main className="w-full bg-white text-black font-sans">
      
      <Banner />
      <h1 className="sr-only">
  Wholesale Perfume Manufacturer & Private Label Fragrance Supplier
</h1>

   <section className="py-24 px-6 max-w-[1440px] mx-auto">
  <div className="mb-16">
<h2 className="text-3xl font-light text-center tracking-tight">
  Wholesale Perfume & Personal Care Manufacturing Solutions
</h2>

<p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 mt-4 text-center">
  Industry Expertise Across Multiple Categories
</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100">
    {[
      { 
        main: "Fragrance & Perfumery", 
        subs: "EDP (Eau de Parfum), Solid Perfumes, Attars, Room Sprays",
        img: "/images/fragrance.jpeg"
      },
      { 
        main: "Personal Care", 
        subs: "Soaps (Artisan/Melt & Pour), Body Scrubs, Shampoos, Conditioners",
        img: "/images/personalcare.jpeg"
      },
      { 
        main: "Skin & Lip Care", 
        subs: "Lip Butters, Balms, Body Butters, Moisturizers",
        img: "/images/skincare.jpeg"
      },
      { 
        main: "Home Ambiance", 
        subs: "Scented Candles, Reed Diffusers, Aroma Oils",
        img: "/images/home.jpeg"
      },
      { 
        main: "Packaging Solutions", 
        subs: "Glass Bottles, Jars, Caps (Wooden/Acrylic), Pumps/Sprayers",
        img: "/images/packaging.jpeg"
      },
      { 
        main: "Branding Material", 
        subs: "Custom Boxes, Labels, Shipping Cartons",
        img: "/images/branding.jpeg"
      }
    ].map((cat, idx) => (
      <div key={idx} className="bg-white p-12 hover:bg-neutral-50 transition-all group">
        <div className="mb-8 overflow-hidden bg-neutral-100 aspect-square">
     <Image
  src={cat.img}
  alt={`${cat.main} wholesale manufacturing`}
  width={500}
  height={500}
  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
/>
        </div>
        <h4 className="text-lg font-bold uppercase tracking-tighter mb-4">{cat.main}</h4>
        <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">{cat.subs}</p>
      
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
<form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleProjectSubmit}>
              <input 
                type="text" 
                name="brand"
                required
                onChange={handleProjectChange}
                placeholder="Brand Name" 
                className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" 
              />

              <input 
                type="text" 
                name="company"
                required
                onChange={handleProjectChange}
                placeholder="Company Name" 
                className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" 
              />

              <input 
                type="email" 
                name="email"
                required
                onChange={handleProjectChange}
                placeholder="Email Address" 
                className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" 
              />

              <input 
                type="text" 
                name="address"
                required
                onChange={handleProjectChange}
                placeholder="Full Address / City" 
                className="border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors" 
              />

              <button type='submit' className="cursor-pointer md:col-span-2 bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-neutral-800">
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

      <section className="py-24 hidden bg-neutral-50">
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