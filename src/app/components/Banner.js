'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const desktopBanners = [
    "/images/bannerone.png",
    "/images/bannertwo.png",
    "/images/bannerthree.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopBanners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [desktopBanners.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Desktop Autoslide View */}
      <div className="hidden md:block w-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          /* FIXED MATH: We move by (100 / number of slides) * current index */
          style={{ 
            transform: `translateX(-${(currentSlide * 100) / desktopBanners.length}%)`,
            width: `${desktopBanners.length * 100}%` 
          }}
        >
          {desktopBanners.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${100 / desktopBanners.length}%` }}
            >
              <Image
                src={src}
                alt={`Desktop Banner ${index + 1}`}
                width={1920}
                height={2100}
                className="w-full h-auto block"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {desktopBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === i ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Static View */}
      <div className="block md:hidden">
        <Image
          src="/images/mobile.png"
          alt="Mobile Banner"
          width={750}
          height={1000}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;