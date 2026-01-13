import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Column 1: Brand & Social */}
          <div className="md:col-span-4">
            <Image 
              src="/images/orrislogo.png" 
              alt="Orris & Amber Logo"
              width={120}
              height={40}
              className="mb-6 h-10 w-auto object-contain"
            />
            <p className="text-[13px] text-neutral-500 font-light leading-relaxed max-w-sm mb-8">
              Orris & Amber is a premier contract manufacturing partner specializing in fine fragrances, 
              skincare, and luxury packaging solutions for brands worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" className="p-2 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Linkedin size={16} />
              </Link>
              <Link href="https://instagram.com" className="p-2 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Quick Links</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition-colors">Shipping Policy</Link></li>
              <li><Link href="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Contact</h4>
            <div className="space-y-6 text-[11px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              <div>
                <span className="block font-bold text-black mb-1">Office</span>
                <p>B-12, Sector 4, <br /> Noida, UP 201301</p>
              </div>
              <div>
                <span className="block font-bold text-black mb-1">Factory</span>
                <p>Plot 45, Industrial Area, <br /> Bawana, Delhi 110039</p>
              </div>
              <div>
                <span className="block font-bold text-black mb-1">Inquiries</span>
                <p>+91 98765 43210</p>
                <p className="lowercase tracking-normal mt-1">sales@orrisandamber.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Newsletter</h4>
            <p className="text-[12px] text-neutral-500 font-light leading-snug mb-6">
              Get insights on upcoming fragrance trends and packaging arrivals.
            </p>
            <div className="relative border-b border-black py-2 group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent outline-none text-xs w-full pr-8 placeholder:text-neutral-300 placeholder:italic"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:translate-x-1 transition-transform">
                <Send size={14} className="text-black" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-20 pt-8 border-t border-neutral-50 flex justify-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-300">
            © {new Date().getFullYear()} Orris & Amber. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}