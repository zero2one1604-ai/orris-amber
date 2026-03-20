import React from 'react';
import { Beaker, Briefcase, Box, MessageSquare, FileText, CheckCircle, Factory, Truck, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomizationPage() {
  const services = [
    {
      id: "01",
      title: "Custom Fragrance Development",
      subtitle: "Create Your Signature Scent",
      desc: "Whether you have a specific scent profile in mind or need guidance exploring olfactory possibilities, we guide you through the entire creation process.",
      icon: <Beaker size={24} />,
      points: ["Detailed briefing & market alignment", "3-5 bespoke fragrance samples", "Formula stabilization & testing", "Consistent batch production"]
    },
    {
      id: "02",
      title: "Private Label Manufacturing",
      subtitle: "Your Brand, Our Expertise",
      desc: "Launch your branded product line without the overhead of manufacturing infrastructure. Select from our proven formulations and add your brand identity.",
      icon: <Briefcase size={24} />,
      points: ["Your logo on premium formulations", "Custom label design & printing", "Full regulatory documentation", "Batch coding & manufacturing data"]
    }
  ];

  const packagingOptions = [
    "Custom bottle/container selection", "Outer box & carton customization", 
    "Special finishes (Metallic, Matte, Glossy)", "Brand-aligned color schemes", 
    "Gift box & hamper design", "Eco-friendly packaging options"
  ];

    const whatsappUrl = "https://wa.me/919871566081?text=Hello%20Orris%20%26%20Amber%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20fragrance%20project.";


  const processSteps = [
    { title: "Consultation", desc: "Share your vision, budget, and timeline for initial recommendations.", icon: <MessageSquare size={18} /> },
    { title: "Quotation", desc: "Receive a detailed proposal with customization options and MOQs.", icon: <FileText size={18} /> },
    { title: "Final Approval", desc: "Finalize specifications, approve samples, and confirm documentation.", icon: <CheckCircle size={18} /> },
    { title: "Manufacturing", desc: "Production begins with rigorous quality checks at every stage.", icon: <Factory size={18} /> },
    { title: "Delivery", desc: "Final quality check, packaging, and Pan-India tracked dispatch.", icon: <Truck size={18} /> }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <section className="mb-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Bespoke Services</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-12 leading-none">
            Precision & <br /> Artistry
          </h1>
          <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-4xl">
            Our comprehensive customization services empower you to create unique products 
            that reflect your brand identity, resonate with your target audience, 
            and command premium positioning.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-100 border-y border-neutral-100 mb-32">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-12 md:p-20 flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div className="text-neutral-300">{service.icon}</div>
                <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">{service.id}</span>
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-neutral-400">{service.subtitle}</h3>
              <h4 className="text-3xl font-light uppercase tracking-tighter mb-6">{service.title}</h4>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-10">{service.desc}</p>
              <ul className="space-y-4 mt-auto">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-tighter font-medium border-b border-neutral-50 pb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-32">
          <div className="bg-black text-white p-12 md:p-24 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <Layers className="text-neutral-500 mb-8" size={32} />
              <h3 className="text-4xl font-light uppercase tracking-tighter mb-8">Packaging <br /> Customization</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                From subtle modifications to complete bespoke creation—we offer 
                comprehensive packaging solutions that elevate perceived value 
                and the customer experience.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packagingOptions.map((option, i) => (
                <div key={i} className="bg-neutral-900 p-6 border border-neutral-800 flex items-center">
                  <span className="text-[10px] text-neutral-500 font-light leading-snug">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">The Workflow</h3>
            <div className="h-px bg-neutral-200 w-24 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group text-center md:text-left">
                <div className="mb-6 flex justify-center md:justify-start">
                   <div className="p-4 rounded-full bg-neutral-50 text-neutral-400 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {step.icon}
                   </div>
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">Step {i + 1}: {step.title}</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {step.desc}
                </p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-neutral-100 -z-10" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-neutral-50 rounded-sm text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tighter mb-6">Start Your Custom Journey</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-10">
              Ready to transform your vision into a signature scent? Contact our manufacturing 
              specialists today for a detailed consultation and sample development.
            </p>
            <Link 
                 href={whatsappUrl}
              target="_blank"
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