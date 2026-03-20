import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-neutral-100">
      <div className="max-w-360 mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
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
              <Link 
                href="https://wa.me/919871566081" 
                target="_blank"
                className="p-2 border border-neutral-100 rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <MessageCircle size={16} />
              </Link>
              <Link href="https://www.instagram.com/orrisandamber" className="p-2 border border-neutral-100 rounded-full hover:bg-black hover:text-white transition-all">
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Quick Links</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              <li><Link href="/privacy_policy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms_of_service" className="hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact_us" className="hover:text-black transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Contact</h4>
            <div className="space-y-6 text-[11px] uppercase tracking-widest text-neutral-500 leading-relaxed">
              <div>
                <span className="block font-bold text-black mb-1">Location</span>
                <p>Orris & Amber, 69/6A Rama Road<br /> Najafgarh Road Industrial Area, New Delhi - 110015</p>
              </div>
              <div>
                <span className="block font-bold text-black mb-1">Inquiries</span>
                <p>+91 98715 66081</p>
                <p className="lowercase tracking-normal mt-1">orrisandamber@gmail.com</p>
              </div>
            </div>
          </div>

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
        <div className="mt-20 pt-8 border-t border-neutral-50 flex justify-center">
          <p className="text-[9px] font-bold text-neutral-600">
            © {new Date().getFullYear()} Orris & Amber. All Rights Reserved. | Curated & Manufactured by Zero2One Marketing
          </p>
        </div>
      </div>
    </footer>
  )
}