'use client';

import { useState } from 'react';
import { Toaster } from 'sonner';
import Banner from '../components/Banner/Banner';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Blogs from '@/components/Blog/Blogs';
import About from '@/components/About/About';
import FixItBadge from '@/components/badge/fixitbadge';
import Loader from '@/components/Loader/Loader';
import Reel from '@/components/Reel/Reel';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Toaster richColors position="top-center" />

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <main>
          <section id="home">
            <Banner />
            <div className="hidden sm:block absolute bottom-0 left-3/4 md:left-[90%] transform -translate-x-1/2 translate-y-1/2 z-20">
              <FixItBadge />
            </div>

          </section>

          <section id="products">
            <ProductGrid />
          </section>

          <section id="about">
            <About />
          </section>


          <section id="blogs" className='max-w-6xl mx-auto px-4 pb-16 md:pb-24 lg:pb-32'>
            <Blogs />
          </section>

          <section id="reel">
            <Reel />
          </section>
        </main>
      )}
    </>
  );
}
