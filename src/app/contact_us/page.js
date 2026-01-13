'use client';

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do you offer private label perfume manufacturing in India?",
      a: "Yes. We provide end-to-end private label perfume manufacturing, including custom fragrance development, bottle & packaging sourcing, filling, labeling & boxing, and quality checks. Retailers receive ready-to-sell products under their own brand name."
    },
    {
      q: "Can we customize packaging with our brand identity?",
      a: "Yes. We offer complete branding support, including logo placement, label design guidance, foiling, embossing, UV finishes, and bilingual (Hindi/English) labeling if required."
    },
    {
      q: "Are your perfumes developed specifically for Indian preferences?",
      a: "Yes. Our fragrances are developed for the Indian climate and usage habits, featuring high longevity in humid conditions and popular profiles like Oudh, Floral-Musk, and Spicy-Woody blends."
    },
    {
      q: "What is the minimum order quantity (MOQ)?",
      a: "MOQ depends on the product format, packaging selection, and level of customization. We offer flexible, retailer-friendly MOQs, especially for first-time brands and market trials."
    },
    {
      q: "Do you deliver across India?",
      a: "Yes. We provide PAN-India delivery using secure packaging and reliable logistics partners to ensure damage-free transportation."
    },
    {
      q: "What quality checks are conducted before dispatch?",
      a: "Every batch undergoes raw material verification, fragrance stability testing, leakage and spray performance tests, and visual/weight inspections."
    },
    {
      q: "Can you maintain consistency across repeat orders?",
      a: "Absolutely. We follow batch consistency protocols to ensure the fragrance remains uniform across all repeat productions."
    },
    {
      q: "Can retailers visit your manufacturing facility?",
      a: "Yes. Factory visits can be arranged for serious business inquiries, offering complete transparency and confidence in our processes."
    }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-6">
            Partner With <br /> Orris & Amber
          </h1>
          <p className="text-neutral-500 text-sm md:text-lg max-w-2xl font-light leading-relaxed">
            Ready to launch or scale your fragrance brand? Reach out to our 
            manufacturing studio for bespoke formulations and premium packaging solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* LEFT: ENQUIRY FORM */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-black">Enquiry Form</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Full Name</label>
                  <input type="text" className="bg-transparent outline-none text-sm" placeholder="John Doe" />
                </div>
                <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Company Name</label>
                  <input type="text" className="bg-transparent outline-none text-sm" placeholder="Your Brand Ltd." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Email</label>
                  <input type="email" className="bg-transparent outline-none text-sm" placeholder="sales@brand.com" />
                </div>
                <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Phone / WhatsApp</label>
                  <input type="tel" className="bg-transparent outline-none text-sm" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Requirement Type</label>
                <select className="bg-transparent outline-none text-sm appearance-none cursor-pointer">
                  <option>Private Label Perfume (EDP)</option>
                  <option>Skincare / Personal Care</option>
                  <option>Home Ambiance / Candles</option>
                  <option>Packaging Only</option>
                </select>
              </div>

              <div className="flex flex-col border-b border-neutral-200 pb-2 focus-within:border-black transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Message</label>
                <textarea rows={4} className="bg-transparent outline-none text-sm resize-none" placeholder="Briefly describe your project goals..." />
              </div>

              <button className="w-full md:w-auto bg-black text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-3">
                Send Inquiry <Send size={14} />
              </button>
            </form>
          </section>

          {/* RIGHT: FAQs */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-black">Frequently Asked Questions</h2>
            <div className="divide-y divide-neutral-100">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left hover:text-neutral-500 transition-colors"
                  >
                    <span className="text-sm font-bold uppercase tracking-tight">{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openFaq === index && (
                    <div className="mt-4 text-sm text-neutral-500 font-light leading-relaxed animate-in fade-in duration-500">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* QUICK CONTACT BOX */}
            <div className="mt-16 bg-neutral-50 p-10 border border-neutral-100">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-neutral-400" />
                  <p className="text-xs uppercase tracking-widest leading-relaxed">
                    B-12, Sector 4, Noida, UP 201301 <br />
                    Plot 45, Bawana Industrial Area, Delhi
                  </p>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-neutral-400" />
                  <p className="text-xs tracking-widest">sales@orrisandamber.com</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}