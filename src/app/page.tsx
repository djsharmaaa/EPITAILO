
'use client';

import { Toaster } from 'sonner';

import Banner from '../components/Banner/Banner';
import { SpinnerText } from '@/components/SpinnerText/SpinnerText';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Blogs from '@/components/Blog/Blogs';
import Reel from '@/components/Reel/Reel';

import About from '@/components/About/About';
import Contact from '@/components/contact/contact';

export default function HomePage() {
  return (
    <>
      {/* 🔥 Toaster for toast notifications */}
      <Toaster richColors position="top-center" />

      <main>
        <Banner />
        <div className="absolute bottom-0 left-[75%] sm:left-3/4 md:left-[90%] transform -translate-x-1/2 translate-y-1/2 z-20">
          <SpinnerText />
        </div>
        <ProductGrid />
        <About />
        <Blogs />
        <Reel />
        <Contact />
      </main>
    </>

  );
}