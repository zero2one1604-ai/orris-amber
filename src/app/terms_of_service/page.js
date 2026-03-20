import React from 'react';
import { FileText, Scale, AlertCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const highlightPoints = [
    { title: "B2B Nature", desc: "Our services are primarily designed for business-to-business transactions and private label development." },
    { title: "Intellectual Property", desc: "Custom formulations developed by Orris & Amber remain our property unless explicitly transferred in writing." },
    { title: "Production Lead Times", desc: "Timelines provided during quotations are estimates based on current raw material availability." }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 1. EDITORIAL HEADER */}
        <header className="mb-24 border-b border-neutral-100 pb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Operational Framework</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-8 leading-none">
            Terms of <br /> Service
          </h1>
          <div className="flex items-center gap-4 text-xs text-neutral-400 uppercase tracking-widest font-light">
            <span>Version 2.0</span>
            <span className="w-1 h-1 bg-neutral-200 rounded-full"></span>
            <span>Effective: March 2026</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* 2. EXECUTIVE SUMMARY SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Executive Summary</h3>
              {highlightPoints.map((point, i) => (
                <div key={i} className="group border-l border-neutral-100 pl-6 hover:border-black transition-colors">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{point.title}</h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-50 p-10 space-y-6">
              <AlertCircle size={24} className="text-black" />
              <h3 className="text-xs font-bold uppercase tracking-widest">Legal Inquiry</h3>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest leading-loose">
                For formal contract requests or partnership agreements, please reach out to our legal department directly.
              </p>
              <Link 
                href="https://wa.me/919871566081" 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1"
              >
                Contact Legal <ArrowRight size={12} />
              </Link>
            </div>
          </aside>

          {/* 3. DETAILED TERMS ARTICLE */}
          <article className="lg:col-span-8">
            <div className="prose prose-neutral max-w-none 
              prose-h2:text-3xl prose-h2:uppercase prose-h2:font-light prose-h2:tracking-tighter prose-h2:border-b prose-h2:border-neutral-100 prose-h2:pb-4 prose-h2:mt-16
              prose-p:text-neutral-600 prose-p:font-light prose-p:leading-loose prose-p:text-sm
              prose-strong:text-black prose-strong:font-bold">
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Orris & Amber website and our manufacturing services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company, you represent that you have the authority to bind such entity to these terms.
              </p>

              <h2>2. Manufacturing & Customization</h2>
              <p>
                All custom fragrance development and private label manufacturing are subject to a formal <strong>Service Agreement</strong>. Quotations provided through this website are preliminary and subject to change based on final formulation complexities and raw material market prices.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                The "Orris & Amber" name, logo, and all website content are the exclusive property of the brand. Unless otherwise agreed upon in a signed development contract, all base formulations in our library remain the intellectual property of Orris & Amber.
              </p>

              <h2>4. Order Minimums (MOQ)</h2>
              <p>
                As a wholesale partner, we enforce Minimum Order Quantities (MOQs) which vary by product category. While we strive to support startups through "Low MOQ" options, these are still subject to manufacturing efficiency standards.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                Orris & Amber shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our products once they have passed our quality control and been dispatched to the client's specified location.
              </p>

              <h2>6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.
              </p>

              <div className="mt-20 p-12 bg-black text-white flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-light uppercase tracking-widest mb-2">Technical Questions?</h4>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Our concierge is available for clarification.</p>
                </div>
                <ShieldCheck size={40} className="text-neutral-800" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}