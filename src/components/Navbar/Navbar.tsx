
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

  import Link from 'next/link';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <nav

        className={`fixed  left-0 w-full flex justify-between items-center p-4 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-none'
        }`}
      >
 <div className="transition-all duration-300">
<Link href="/" passHref>
  <div
    className="cursor-pointer transition-all duration-300"
    onClick={() => setMenuOpen(false)}
  >
    <Image
      src="/images/EpitailoLogo.png"
      alt="Epitailo Logo"
      width={120}
      height={40}
    />
  </div>
</Link>

</div>

        {/* Desktop Button */}
        {!menuOpen && (
          <button
            className={`hidden md:block border px-4 py-1 rounded-full transition ${
              scrolled
                ? 'text-black border-black hover:bg-black hover:text-white'
                : 'text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            Get Quote
          </button>
        )}

        {/* Burger Icon */}
        <div
          className="flex flex-col space-y-1 cursor-pointer z-30"
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
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-black' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </div>
      </nav>

      {/* Overlay menu */}

<div
  className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center pt-24 space-y-8 text-2xl transition-transform duration-500 z-40 ${
    menuOpen ? 'translate-y-0' : '-translate-y-full'
  }`}
  style={{ height: '100vh' }}
>
  <nav className="flex flex-col items-center justify-center flex-1 space-y-8 uppercase tracking-widest text-3xl font-semibold">
    {[
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Products', path: '/products' },
      { name: 'Contact', path: '/contact' }
    ].map((item) => (
      <Link href={item.path} key={item.name} passHref>
        <span
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
        >
          {item.name}
        </span>
      </Link>
    ))}
  </nav>
</div>

    </>
  );
}
