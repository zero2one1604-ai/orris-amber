import React from 'react';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Orris & Amber',
  description:
    'Read the privacy policy of Orris & Amber. Learn how we collect, use, and protect your data in compliance with global standards for wholesale perfume manufacturing.',
  alternates: {
    canonical: '/privacy_policy'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Data Collection",
      icon: <Eye size={20} />,
      content: "We collect information you provide directly to us, such as when you request a quote, start a custom project, or subscribe to our journal. This includes your name, corporate email, company name, and physical address."
    },
    {
      title: "Usage of Information",
      icon: <FileText size={20} />,
      content: "Your data is used to process manufacturing requests, provide accurate project quotations, and communicate industry insights. We do not sell your corporate data to third-party advertisers."
    },
    {
      title: "Security Protocols",
      icon: <Lock size={20} />,
      content: "We implement industry-standard encryption and security measures to protect your proprietary formulations and personal details from unauthorized access or disclosure."
    },
    {
        title: "Global Compliance",
        icon: <Globe size={20} />,
        content: "As a global exporter, we adhere to international data protection standards, ensuring that your business information is handled with the highest level of integrity across all borders."
    }
  ];

  return (
    <main className="w-full bg-white text-black pt-32 pb-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <section className="mb-24 border-b border-neutral-100 pb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neutral-400">Legal Framework</h2>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-8 leading-none">
            Privacy <br /> & Integrity
          </h1>
          <p className="text-sm text-neutral-500 font-light uppercase tracking-widest">
            Last Updated: March 20, 2026
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-neutral-50 p-10 rounded-sm">
              <Shield className="mb-6 text-black" size={32} />
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Our Commitment</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                At Orris & Amber, we treat your corporate data with the same precision we apply to our fragrance formulations. Your trust is our most valuable asset.
              </p>
            </div>
            <div className="p-10 border border-neutral-100">
                <Bell className="mb-6 text-neutral-300" size={24} />
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">Policy Updates</h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed uppercase tracking-wider">
                    We may update this policy to reflect changes in manufacturing regulations or data laws. Please review this page periodically.
                </p>
            </div>
          </aside>

          {/* 3. DETAILED POLICY CONTENT */}
          <article className="lg:col-span-8 space-y-16">
            <section className="prose prose-neutral max-w-none">
                <p className="text-xl font-light text-neutral-800 leading-relaxed mb-12">
                    This Privacy Policy describes how Orris & Amber ("we", "us", or "our") collects, uses, and shares your personal information when you visit or make an inquiry through our digital platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {sections.map((item, i) => (
                        <div key={i} className="space-y-4">
                            <div className="flex items-center gap-3 text-black">
                                {item.icon}
                                <h4 className="text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                            </div>
                            <p className="text-sm text-neutral-500 font-light leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 space-y-10">
                    <div>
                        <h2 className="text-2xl font-light uppercase tracking-tighter mb-4">Cookies & Tracking</h2>
                        <p className="text-sm text-neutral-500 font-light leading-relaxed">
                            We use cookies to analyze site traffic and optimize your browsing experience. By using our site, you consent to our use of these technical trackers which help us understand which fragrance collections interest our partners most.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-light uppercase tracking-tighter mb-4">Your Rights</h2>
                        <p className="text-sm text-neutral-500 font-light leading-relaxed">
                            You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the information below.
                        </p>
                    </div>

                    <div className="bg-black text-white p-12 mt-16">
                        <h2 className="text-xl font-light uppercase tracking-widest mb-6 text-white">Contact Our Data Officer</h2>
                        <p className="text-neutral-400 text-xs font-light leading-relaxed mb-6 uppercase tracking-widest">
                            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at:
                        </p>
                        <p className="text-sm font-bold tracking-widest border-b border-neutral-800 pb-2 inline-block">
                            orrisandamber@gmail.com
                        </p>
                    </div>
                </div>
            </section>
          </article>
        </div>
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: "https://orrisandamber.com/privacy-policy",
      description:
        "Privacy policy of Orris & Amber outlining data collection, usage, and protection practices.",
      publisher: {
        "@type": "Organization",
        name: "Orris & Amber"
      }
    })
  }}
/>
    </main>
  );
}