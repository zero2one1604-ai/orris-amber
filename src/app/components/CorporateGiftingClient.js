import React from 'react';
import { Gift, Briefcase, Award, Calendar, RefreshCw, Send, CheckSquare, PenTool, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CorporateGifting() {
  const giftSets = [
    {
      title: "Luxury Fragrance Collection",
      desc: "Premium EDPs, attars, and solid perfumes in designer packaging. Ideal for executive appreciation.",
      icon: <Gift size={20} />,
      image: "/images/corporategifting.jpeg"
    },
    {
      title: "Spa Wellness Retreat",
      desc: "Bath salts, body scrubs, and scented candles. Perfect for employee wellness and stress-relief.",
      icon: <RefreshCw size={20} />,
      image: "/images/spa.jpeg"
    },
    {
      title: "Hair Care Ritual Box",
      desc: "Herbal hair oils and natural shampoos. A thoughtful choice for personal care appreciation.",
      icon: <CheckSquare size={20} />,
      image: "/images/haircare.jpeg"
    },
    {
      title: "Festive Celebration Box",
      desc: "Seasonal fragrances and premium soaps. Tailored for Diwali, New Year, and global festivals.",
      icon: <Calendar size={20} />,
      image: "/images/festival.jpeg"
    }
  ];

  const processSteps = [
    { step: "01", title: "Requirements", desc: "Share your occasion, budget, and recipient profile." },
    { step: "02", title: "Sampling", desc: "Review our tailored product recommendations and physical samples." },
    { step: "03", title: "Design", desc: "Finalize branding elements and bespoke packaging details." },
    { step: "04", title: "Confirmation", desc: "Transparent quotation with all-inclusive logistics costs." },
    { step: "05", title: "Production", desc: "Meticulous manufacturing with rigorous quality control." },
    { step: "06", title: "Delivery", desc: "Timely dispatch with multi-location tracking capabilities." }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <section className="mb-32">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Corporate Concierge</h2>
            <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-12 leading-none">
              Elevate Corporate <br /> Relationships
            </h1>
            <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-3xl">
              Our curated beauty and wellness products offer the perfect blend of luxury and practicality—ideal for expressing gratitude and strengthening business bonds.
            </p>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-8 mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest">Pre-Curated Collections</h3>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest">Section 01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {giftSets.map((set, i) => (
              <div key={i} className="bg-white flex flex-col hover:bg-neutral-50 transition-colors group">
                <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img 
                    src={set.image} 
                    alt={set.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-10">
                  <div className="mb-12 text-neutral-300 group-hover:text-black transition-colors">
                    {set.icon}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">{set.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {set.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
          <div className="p-12 md:p-24 flex flex-col justify-center border-r border-neutral-800">
            <Briefcase className="mb-8 text-neutral-500" size={32} />
            <h3 className="text-3xl font-light uppercase tracking-widest mb-6">Custom Branded Gifting</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
              Incorporate your logo, tagline, and brand colors into product labels and presentation elements. 
              We create unique gifts that reinforce brand recall long after the first unboxing.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 border border-neutral-800 text-[10px] uppercase tracking-widest">Logo Integration</span>
              <span className="px-4 py-2 border border-neutral-800 text-[10px] uppercase tracking-widest">Brand Colors</span>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80" 
              alt="Corporate Branding" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </section>

        <section className="mb-32">
          <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-16">Solutions for Every Milestone</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Festivals & Celebrations", "Employee Recognition", "Client Relations", 
              "Events & Conferences", "Awards & Achievements", "Women's Day", 
              "Company Anniversaries", "Product Launches"
            ].map((occasion, i) => (
              <div key={i} className="border-l border-neutral-100 pl-6 py-4">
                <p className="text-xs uppercase tracking-tighter font-medium">{occasion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-32 py-24 bg-neutral-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <h3 className="text-4xl font-light uppercase tracking-tighter">The Process</h3>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mt-4">From Requirements to Delivery</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {processSteps.map((item, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-light text-neutral-200 absolute -top-8 -left-4 z-0">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{item.title}</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 bg-white border border-neutral-100 rounded-sm text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tighter mb-6">Partner With Us</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-10">
              Whether you are planning a large-scale festive giveaway or a bespoke executive gift set, our corporate team is ready to assist you with samples and customized quotations.
            </p>
            <Link 
              href="/contact_us" 
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all"
            >
              Enquire Now <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}