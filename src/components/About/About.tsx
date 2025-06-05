'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeroBanner = () => {
  const gateControls = useAnimation();
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down' | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    gateControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
  }, [gateControls]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current + 5) {
            if (scrollDirection.current !== 'down') {
              scrollDirection.current = 'down';
              controls.start({ opacity: 1, y: -20, transition: { duration: 0.4 } });
            }
          } else if (currentScrollY < lastScrollY.current - 5) {
            if (scrollDirection.current !== 'up') {
              scrollDirection.current = 'up';
              controls.start({ opacity: 1, y: 20, transition: { duration: 0.4 } });
            }
          } else {
            if (scrollDirection.current !== null) {
              scrollDirection.current = null;
              controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    controls.set({ opacity: 1, y: 0 });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden font-poppins">
      {/* Background Grid */}
      <Image
        src="https://res.cloudinary.com/ddztecdya/image/upload/v1748934429/Epitailo/j1j6xhbkpesl5axfnzyy.png"
        alt="Grid Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Gate Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={gateControls}
        className="absolute inset-0 z-10 mix-blend-multiply pointer-events-none"
      >
        <Image
          src="https://res.cloudinary.com/ddztecdya/image/upload/v1748934433/Epitailo/qqplpy4p9cwsturtdwki.png"
          alt="Gate Overlay"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Quote Image */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-6 left-6 w-14 h-14 md:top-8 md:left-[205px] md:w-[965px] md:h-[136px] z-20"
      >
        <Image
          src="https://res.cloudinary.com/ddztecdya/image/upload/v1748934428/Epitailo/pyanrkbytpovm73vicju.png"
          alt="Quote Icon"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Text Content */}
      <div className="absolute inset-0 bg-black/30 flex items-center px-4 sm:px-6 md:px-20 z-20">
        <div className="w-full md:ml-[145px]">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={controls}
            className="text-left text-white"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold italic leading-tight mb-4 md:ml-145">
              The strength of any masterpiece<br />
              lies in the bonds you don’t see.
            </h1>

            <h2 className="text-base sm:text-lg md:text-2xl font-semibold italic mb-6 md:ml-145">
              We make sure that what holds your tiles together<br />
              stands the test of time, pressure and pride.
            </h2>

            <p className="text-sm sm:text-base md:text-base leading-relaxed md:ml-145 max-w-full md:max-w-3xl">
              At Epitalio, we believe every wall, every floor, and every corner tells a story — and that story deserves strength, precision, and lasting quality. More than just a tile adhesive, Epitalio is a symbol of trust, engineered for those who build with purpose.
              <br /><br />
              We don’t just fix tiles — we secure dreams, build reliability, and ensure beauty meets endurance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
