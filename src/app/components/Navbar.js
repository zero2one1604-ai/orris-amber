"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const whatsappUrl = "https://wa.me/919871566081?text=Hello%20Orris%20%26%20Amber%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20fragrance%20project.";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Packaging", href: "/packaging" },
    { name: "Build Your Brand", href: "/customization", highlight: true },
    { name: "Corporate Gifting", href: "/corporate_gifting" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about_us" },
    { name: "Contact Us", href: "/contact_us" },
  ];

  return (
    <header className="w-full bg-white border-b border-neutral-100 sticky top-0 z-[100]">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/orrislogo.png" 
              alt="Orris & Amber Logo" 
              width={140} 
              height={50}
              className="w-auto h-8 md:h-18 object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href={whatsappUrl}
            target="_blank"
            className="hidden sm:block bg-black text-white px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all whitespace-nowrap"
          >
            Request a Quote
          </Link>

          <div className="hidden lg:flex items-center gap-3 w-64 bg-neutral-50 px-4 py-2 rounded-sm border border-neutral-100 focus-within:border-black transition-all">
            <Search size={14} className="text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search formulations..." 
              className="text-[10px] bg-transparent w-full outline-none uppercase tracking-widest placeholder:text-neutral-300"
            />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:bg-neutral-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <nav className="hidden lg:block border-t border-neutral-50 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 h-12 flex items-center justify-center">
          <ul className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`${link.highlight ? 'text-neutral-600 hover:text-red-700' : 'text-neutral-600 hover:text-red-700'} transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 top-20 bg-white z-[90] lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto px-6 py-10">
          
          <div className="flex items-center gap-3 w-full bg-neutral-50 px-4 py-4 rounded-sm border border-neutral-100 mb-10">
            <Search size={16} className="text-neutral-400" />
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="text-[11px] bg-transparent w-full outline-none uppercase tracking-widest"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-neutral-50 pb-4">
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-[0.3em]"
                  >
                    <span className={link.highlight ? 'text-red-600' : 'text-black'}>
                      {link.name}
                    </span>
                    <ChevronRight size={14} className="text-neutral-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10 space-y-6">
             <Link 
              href={whatsappUrl}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em]"
             >
               Start a Project
             </Link>
             <div className="flex items-center justify-center gap-6 text-neutral-400">
                <Link href="/privacy" className="text-[9px] uppercase tracking-widest">Privacy</Link>
                <Link href="/terms" className="text-[9px] uppercase tracking-widest">Terms</Link>
             </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[80] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}