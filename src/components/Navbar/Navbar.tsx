'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 10);
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 w-full flex justify-between items-center p-4 z-50 transition-all duration-300 ${
          scrolled || isMobile ? 'bg-white shadow-md' : 'bg-transparent'
        } ${showNavbar ? 'top-0' : '-top-20'}`}
      >
        {/* Logo */}
        <div className="transition-all duration-300">
          <div
            className="cursor-pointer lg:ml-28 md:ml-20 px-4"
            onClick={() => handleScrollTo('home')}
          >
            <Image
              src={
                scrolled || isMobile
                  ? 'https://res.cloudinary.com/ddztecdya/image/upload/v1748934430/Epitailo/vqgoenta4phddmzthlzg.png' // dark logo
                  : 'https://res.cloudinary.com/ddztecdya/image/upload/v1748934430/Epitailo/eyxx6ye1dvbicqrcppg1.png' // light logo
              }
              alt="Epitailo Logo"
              width={120}
              height={40}
              className="transition-all duration-300"
            />
          </div>
        </div>

        {/* Burger Icon */}
        <div
          className="flex flex-col space-y-1 cursor-pointer z-30 lg:mr-28 md:mr-20 px-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setMenuOpen(!menuOpen);
          }}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled || isMobile ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              scrolled || isMobile ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled || isMobile ? 'bg-black' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center pt-24 space-y-8 text-2xl transition-transform duration-500 z-40 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '100vh' }}
      >
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 uppercase tracking-widest text-3xl font-semibold">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Products', id: 'products' },
            { name: 'Contact', id: 'contact-form' },
          ].map((item) => (
            <span
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
            >
              {item.name}
            </span>
          ))}
        </nav>
      </div>
    </>
  );
}