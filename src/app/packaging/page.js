import React from 'react';
import { Package, Droplet, Box, PenTool, Layout, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function PackagingPage() {
  const primaryPackaging = [
    { title: "Glass Vessels", desc: "Premium bottles in various shapes and sizes (15ml to 100ml) with clear, frosted, or colored finishes." },
    { title: "Dispensing Systems", desc: "Precision spray mechanisms including fine mist, pumps, and high-end atomizers." },
    { title: "Specialty Containers", desc: "Roll-on bottles for attar, pump bottles for oils/shampoos, and tins for solid perfumes." },
    { title: "Finishing Touches", desc: "Decorative caps in aluminum, sustainably sourced wood, or sleek acrylic; plus dropper bottles for serums." }
  ];

  const secondaryPackaging = [
    { 
      title: "Custom Boxes", 
      icon: <Box size={20} />, 
      items: ["Tailored fit dimensions", "Luxury rigid gift sets", "Textured paper finishes"] 
    },
    { 
      title: "Exclusive Housing", 
      icon: <Layout size={20} />, 
      items: ["Handcrafted wooden boxes", "Decorative trays & baskets", "Eco-friendly inserts"] 
    },
    { 
      title: "Branded Labeling", 
      icon: <Shield size={20} />, 
      items: ["Oil-resistant materials", "Regulatory compliance text", "Custom foil stamping"] 
    }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 1. HERO SECTION */}
        <section className="mb-32">
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-12 leading-none">
            The Vessel for <br /> Your Vision
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xl font-medium leading-snug">
                From functional containers to luxury presentation, we offer comprehensive 
                packaging solutions that protect product integrity while maximizing shelf 
                appeal and brand recognition.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                At Orris & Amber, we understand that the first interaction a customer has 
                with your brand is physical. Our packaging is designed to be an extension 
                of the scent within—elegant, durable, and evocative.
              </p>
            </div>
            <div className="aspect-[16/9] bg-neutral-100 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80" 
                alt="Luxury Fragrance Packaging" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* 2. PRIMARY PACKAGING (GRID) */}
        <section className="py-24 border-t border-neutral-100 mb-32">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-neutral-400">Section 01</h2>
              <h3 className="text-4xl font-light uppercase tracking-tighter">Primary Packaging</h3>
            </div>
            <p className="max-w-md text-sm text-neutral-500 font-light italic">
              "The immediate contact between the essence and the glass—precision engineered for preservation."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {primaryPackaging.map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="h-px bg-black w-8"></div>
                <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SECONDARY & LABELS (TIERED CARDS) */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {secondaryPackaging.map((section, i) => (
              <div key={i} className="bg-white p-12 flex flex-col">
                <div className="mb-8 text-neutral-400">{section.icon}</div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{section.title}</h4>
                <ul className="space-y-4 mt-auto">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-neutral-500 font-light">
                      <div className="w-1 h-1 bg-black rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DESIGN SERVICES (CONTRAST SECTION) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-black text-white overflow-hidden">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <PenTool className="mb-8 text-neutral-500" size={32} />
            <h2 className="text-3xl font-light uppercase tracking-widest mb-6">In-House Design Support</h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-10">
              Don't have a designer? Our creative team bridges the gap between 
              concept and reality, crafting professional graphics that capture 
              your brand essence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Brand Identity Consultation",
                "Label & Box Artwork",
                "Concept Visualization",
                "Market-Ready Graphics"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 border-l border-neutral-800 pl-4">
                  <span className="text-[10px] text-neutral-500 font-bold">0{i+1}</span>
                  <span className="text-xs uppercase tracking-tighter font-light">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Design Process" 
              className="w-full h-full object-cover opacity-60 grayscale hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </section>

      </div>
    </main>
  );
}