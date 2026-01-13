import React from 'react';
import { Target, Award, Users, Globe, Zap, DollarSign } from 'lucide-react';

export default function AboutPage() {
  const missionPoints = [
    "We aim to create outstanding fragrances crafted with care and passion.",
    "Our goal is to provide a sensory experience that leaves a lasting impact.",
    "We strive to maintain high standards of quality while ensuring you find the perfect fragrances.",
    "Our relationships with reputable manufacturers allow exclusive access to unique scents."
  ];

  const whyUs = [
    {
      title: "Extensive Range",
      icon: <Award size={20} />,
      desc: "Whether you’re looking to stock classic perfumes, EDP, candles, soaps, car perfumes, wardrobe fresheners, skin essentials, or attar, we have you covered. Our portfolio is carefully curated to suit every market segment, from fresh florals to rich oriental blends."
    },
    {
      title: "Competitive Pricing",
      icon: <DollarSign size={20} />,
      desc: "As a wholesale supplier, we provide significant savings on bulk orders without compromising quality. Our pricing is designed to help you maximize profit margins while remaining competitive."
    },
    {
      title: "Personalized Service",
      icon: <Users size={20} />,
      desc: "We foster long-lasting relationships. Our dedicated sales representatives provide personalized assistance tailored to your needs, from product recommendations to logistical help."
    },
    {
      title: "Flexible Ordering",
      icon: <Zap size={20} />,
      desc: "We offer flexible order quantities to help you manage inventory efficiently. From smaller test orders to large-scale shipments, we accommodate your needs with ease."
    },
    {
      title: "Global Shipping",
      icon: <Globe size={20} />,
      desc: "Serving businesses worldwide, our logistics partners guarantee that your order arrives safely and on time, from our distribution center straight to your door."
    }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 1. HERO / WELCOME SECTION */}
        <section className="mb-32">
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-12 leading-none">
            Crafting a <br /> Legacy of Scent
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xl font-medium leading-snug">
                Welcome to Orris & Amber, the trusted partner for fragrance retailers, 
                wholesale companies, and specialty shops seeking high-quality perfumes 
                at competitive prices.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">
                Founded in 2007, our journey began with a singular vision—to bridge 
                the gap between top-tier perfume brands and consumers across the 
                globe. Our team comprises industry experts and fragrance enthusiasts 
                committed to delivering exceptional service.
              </p>
            </div>
            <div className="aspect-[16/9] bg-neutral-100 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1616948648216-9b16866657c4?auto=format&fit=crop&q=80" 
                alt="Our Studio" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* 2. CORE PHILOSOPHY SECTION */}
        <section className="py-24 border-y border-neutral-100 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-neutral-400">The Art Form</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-neutral-800">
              "At the heart of our craft lies a passion for creating fragrances that 
              transcend time. Our master perfumers blend rare essences with precision, 
              curating scents that embody your brand’s unique story."
            </p>
            <p className="mt-12 text-sm text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
              From the delicate extraction of natural oils to the meticulous design of 
              opulent packaging, every step is an art form. We ensure each bottle meets 
              global standards of excellence, delivering a product as luxurious as your vision.
            </p>
          </div>
        </section>

        {/* 3. MISSION SECTION */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-black text-white p-12 md:p-20 flex flex-col justify-center">
            <Target className="mb-8 text-neutral-400" size={40} />
            <h2 className="text-3xl font-light uppercase tracking-widest mb-10">Our Mission</h2>
            <ul className="space-y-6">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex gap-4 text-sm font-light text-neutral-300 leading-relaxed border-l border-neutral-800 pl-6">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-12">
             <div className="border-b border-neutral-100 pb-12">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Expertise</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Partner with us to transform your inspiration into a legacy of scent, 
                  crafted with unmatched sophistication and care. We offer a wide genre of 
                  perfumes including the choicest designer scents.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                    <p className="text-4xl font-light">15+</p>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Years of Excellence</p>
                </div>
                <div>
                    <p className="text-4xl font-light">Global</p>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-2">Shipping Reach</p>
                </div>
             </div>
          </div>
        </section>

        {/* 4. WHY US SECTION */}
        <section>
          <div className="mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-center mb-4">Strategic Advantage</h2>
            <h3 className="text-4xl font-light text-center uppercase tracking-tighter">Why Partner With Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-white p-12 hover:bg-neutral-50 transition-all group">
                <div className="mb-8 text-neutral-300 group-hover:text-black transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{item.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}