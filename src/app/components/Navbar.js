import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, ChevronDown } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/orrislogo.png" 
              alt="Orris & Amber Logo" 
              width={140} 
              height={50}
              className="w-auto h-10 object-contain"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3 flex-1 max-w-md bg-neutral-50 px-4 py-2 rounded-sm border border-neutral-100 focus-within:border-black transition-all">
          <Search size={16} className="text-neutral-400" />
          <input 
            type="text" 
            placeholder="Search products, bottles, or formulations..." 
            className="text-[11px] bg-transparent w-full outline-none uppercase tracking-widest placeholder:text-neutral-300"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/contact_us" 
            className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all"
          >
            Request a Quote
          </Link>
          <button className="lg:hidden text-black">
            <Menu size={24} />
          </button>
        </div>
      </div>

      <nav className="hidden lg:block border-t border-neutral-50">
        <div className="max-w-[1440px] mx-auto px-6 h-12 flex items-center justify-center">
          <ul className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
            <li>
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
            </li>
            
            <li className="group relative cursor-pointer py-4">
              <div className="flex items-center gap-1 group-hover:text-black">
                Services <ChevronDown size={12} />
              </div>
              <div className="absolute top-full left-0 w-64 bg-white border border-neutral-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-4">
                <ul className="space-y-4">
                  <li><Link href="/services/private-label" className="hover:text-black block">Private Label</Link></li>
                  <li><Link href="/services/contract-manufacturing" className="hover:text-black block">Contract Manufacturing</Link></li>
                  <li><Link href="/services/packaging-design" className="hover:text-black block">Packaging Design</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/categories" className="hover:text-black transition-colors">Product Categories</Link>
            </li>
            
            <li>
              <Link href="/customization" className="text-red-600 hover:text-red-700 transition-colors">Build Your Brand</Link>
            </li>
            
            <li>
              <Link href="/about_us" className="hover:text-black transition-colors">About Us</Link>
            </li>
            
            <li>
              <Link href="/contact_us" className="hover:text-black transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="lg:hidden absolute right-6 top-6">
         <Menu size={24} />
      </div>
    </header>
  )
}